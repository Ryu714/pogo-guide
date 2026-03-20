// api-cache.js - pokemon-go-api 데이터를 fetch해서 api-cache.json으로 저장
// 실행: node api-cache.js
'use strict';

const fs = require('fs');
const path = require('path');

// Node 18+ 버전 체크 (내장 fetch 필요)
const [major] = process.versions.node.split('.').map(Number);
if (major < 18) {
  console.error('Node.js 18 이상이 필요합니다. 현재 버전:', process.versions.node);
  process.exit(1);
}

const API_URL = 'https://pokemon-go-api.github.io/pokemon-go-api/api/pokedex.json';
const OUTPUT_FILE = path.join(__dirname, 'api-cache.json');
const TIMEOUT_MS = 30000;

// ===== data.js 파싱 =====
function parseDataJs() {
  const raw = fs.readFileSync(path.join(__dirname, 'data.js'), 'utf-8');
  const cleaned = raw
    .replace(/^\uFEFF/, '')                   // BOM 제거
    .replace(/^\s*const\s+POKEMON_DATA\s*=\s*/, '') // 헤더 제거
    .replace(/;\s*$/, '')                      // 마지막 세미콜론 제거
    .replace(/\/\/.*$/gm, '')                  // 주석 제거
    .replace(/,\s*([}\]])/g, '$1');            // 후행 쉼표 제거

  try {
    return JSON.parse(cleaned);
  } catch (e) {
    console.error('data.js 파싱 실패:', e.message);
    process.exit(1);
  }
}

// ===== API fetch + 타임아웃 =====
async function fetchApiData() {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    console.log('포켓몬GO API fetch 중...');
    const res = await fetch(API_URL, { signal: controller.signal });
    if (!res.ok) throw new Error(`HTTP ${res.status}: ${API_URL}`);
    const data = await res.json();
    console.log(`API 응답: ${data.length}개 항목`);
    return data;
  } finally {
    clearTimeout(timer);
  }
}

// ===== 룩업맵 생성 =====
// nameMap: names.English → entry (매칭용, regionForms 포함)
// idMap: entry.id → entry (진화 Korean 이름 조회용)
function buildLookupMaps(apiData) {
  const nameMap = {};
  const idMap = {};

  function addEntry(entry) {
    const en = entry.names?.English;
    if (en) {
      if (nameMap[en]) {
        console.warn(`  [경고] 중복 키: "${en}" (덮어쓰기)`);
      }
      nameMap[en] = entry;
    }
    // id 기준 맵 (진화 조회용, 기본 폼만)
    if (entry.id && !idMap[entry.id]) {
      idMap[entry.id] = entry;
    }
    // regionForms도 재귀 추가 (가라르/알로라/히스이 폼 등)
    const forms = entry.regionForms;
    if (forms && typeof forms === 'object') {
      for (const form of Object.values(forms)) {
        addEntry(form);
      }
    }
  }

  for (const entry of apiData) {
    addEntry(entry);
  }
  return { nameMap, idMap };
}

// ===== 폼 variants 매칭 전략 =====
// 괄호 표기 폼 순서: "Galarian Slowbro" → "Slowbro" → null
// 섀도우는 베이스 포켓몬 데이터 재사용
const FORM_PREFIX_MAP = {
  'Galarian': 'Galarian',
  'Alolan': 'Alolan',
  'Hisuian': 'Hisuian',
  'Paldean': 'Paldean',
  'Origin': null,      // 기라티나 오리진폼 - API에 없을 수 있음
  'Altered': null,     // 기라티나 어나더폼
  'Therian': null,     // 영수폼
  'Incarnate': null,   // 화신폼
  'Shadow': null,      // 섀도우는 베이스 데이터 사용
};

// 특수 nameEn → API English 이름 매핑
// (API가 다른 표기를 사용하는 경우)
const SPECIAL_NAME_MAP = {
  'Wash Rotom':  'Rotom (Wash Rotom)',
  'Heat Rotom':  'Rotom (Heat Rotom)',
  'Frost Rotom': 'Rotom (Frost Rotom)',
  'Fan Rotom':   'Rotom (Fan Rotom)',
  'Mow Rotom':   'Rotom (Mow Rotom)',
};

function findApiEntry(nameEn, nameMap) {
  // 0. 특수 케이스 먼저 확인
  if (SPECIAL_NAME_MAP[nameEn] && nameMap[SPECIAL_NAME_MAP[nameEn]]) {
    return nameMap[SPECIAL_NAME_MAP[nameEn]];
  }

  // 1. 정확히 일치하는지 먼저 시도 (대부분의 일반 포켓몬)
  if (nameMap[nameEn]) return nameMap[nameEn];

  // 2. 괄호가 있으면 폼 변형 처리
  const formMatch = nameEn.match(/^(.+?)\s*\((.+?)\)\s*$/);
  if (formMatch) {
    const baseName = formMatch[1].trim();
    const formName = formMatch[2].trim();
    const prefix = FORM_PREFIX_MAP[formName];

    // 섀도우 및 미정의 폼은 베이스명으로 조회
    if (prefix !== undefined) {
      // prefix가 null이면 베이스명 직접 조회
      if (prefix === null) {
        return nameMap[baseName] || null;
      }
      // 폼 prefix 형식 먼저 시도: "Galarian Slowbro"
      const prefixedName = `${prefix} ${baseName}`;
      if (nameMap[prefixedName]) return nameMap[prefixedName];
      // 폴백: 베이스명
      return nameMap[baseName] || null;
    }

    // 알 수 없는 폼: 베이스명 폴백
    return nameMap[baseName] || null;
  }

  return null;
}

// ===== API 데이터 필드 추출 =====
// 실제 API 구조:
// - stats: { attack, defense, stamina }  (baseAttack 아님)
// - primaryType/secondaryType: { type, names: { Korean } }  (types 배열 아님)
// - pokemonClass: "POKEMON_CLASS_LEGENDARY" | "POKEMON_CLASS_MYTHIC" | null
// - quickMoves/cinematicMoves: { [ID]: { names: { Korean } } }  (배열 아님)
// - evolutions: [{ id, formId, ... }]  (nextEvolutionBranches 아님)
// - maxCP: API에 없음 → 직접 계산

// 레벨 50 CPM 값
const CPM_LV50 = 0.84657550664;

function extractFields(entry, idMap) {
  // 타입
  const types = [];
  if (entry.primaryType?.names?.Korean) types.push(entry.primaryType.names.Korean);
  if (entry.secondaryType?.names?.Korean) types.push(entry.secondaryType.names.Korean);

  // 스탯
  const baseAttack = entry.stats?.attack || 0;
  const baseDefense = entry.stats?.defense || 0;
  const baseStamina = entry.stats?.stamina || 0;

  // 최대 CP 계산 (레벨 50, 15/15/15 IV)
  let maxCP = 0;
  if (baseAttack && baseDefense && baseStamina) {
    maxCP = Math.floor(
      (baseAttack + 15) * Math.sqrt(baseDefense + 15) * Math.sqrt(baseStamina + 15) * CPM_LV50 * CPM_LV50 / 10
    );
  }

  // rarity 변환
  let rarity = null;
  if (entry.pokemonClass === 'POKEMON_CLASS_LEGENDARY') rarity = 'POKEMON_RARITY_LEGENDARY';
  else if (entry.pokemonClass === 'POKEMON_CLASS_MYTHIC') rarity = 'POKEMON_RARITY_MYTHIC';

  // 기술 (object → values → Korean)
  const quickMoves = Object.values(entry.quickMoves || {}).map(m => m.names?.Korean || m.id);
  const cinematicMoves = Object.values(entry.cinematicMoves || {}).map(m => m.names?.Korean || m.id);

  // 진화 (id로 Korean 이름 조회)
  const nextEvolutions = (entry.evolutions || []).map(evo => {
    const evoEntry = idMap[evo.id];
    return evoEntry?.names?.Korean || evo.id;
  });

  return { types, baseAttack, baseDefense, baseStamina, maxCP, rarity, quickMoves, cinematicMoves, nextEvolutions };
}

// ===== 메인 =====
async function main() {
  // data.js 파싱
  const pokemonData = parseDataJs();
  const pokemonList = pokemonData.pokemon;
  console.log(`data.js 로드: ${pokemonList.length}개 항목`);

  // API fetch
  const apiData = await fetchApiData();

  // 룩업맵 생성
  const { nameMap, idMap } = buildLookupMaps(apiData);
  console.log(`룩업맵: ${Object.keys(nameMap).length}개 키`);

  // 매칭 및 결과 생성
  const result = {};
  const failed = [];

  for (const p of pokemonList) {
    const entry = findApiEntry(p.nameEn, nameMap);
    if (entry) {
      result[p.nameEn] = extractFields(entry, idMap);
    } else {
      failed.push(p.nameEn);
    }
  }

  const successCount = Object.keys(result).length;
  console.log(`\n매칭 결과: ${successCount}/${pokemonList.length}개 성공`);

  if (failed.length > 0) {
    console.log(`\n매칭 실패 (${failed.length}개):`);
    failed.forEach(name => console.log(`  - ${name}`));
  }

  // 원자적 파일 쓰기: .tmp 먼저 쓰고 rename
  const tmpFile = OUTPUT_FILE + '.tmp';
  fs.writeFileSync(tmpFile, JSON.stringify(result, null, 2), 'utf-8');
  fs.renameSync(tmpFile, OUTPUT_FILE);

  console.log(`\napi-cache.json 저장 완료: ${OUTPUT_FILE}`);
  console.log(`총 ${successCount}개 포켓몬 데이터 캐싱됨`);
}

main().catch(err => {
  console.error('오류 발생:', err.message);
  process.exit(1);
});
