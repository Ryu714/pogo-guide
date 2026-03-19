// verify_korean_names.js - Verify Korean Pokemon names against PokeAPI
const fs = require('fs');
const path = require('path');

// Parse data.js by evaluating it
const dataFile = fs.readFileSync(path.join(__dirname, 'data.js'), 'utf-8');
// Remove the const declaration and trailing semicolon, then parse as JS
const cleanedData = dataFile
  .replace(/^\s*const\s+POKEMON_DATA\s*=\s*/, '')
  .replace(/;\s*$/, '')
  // Remove single-line comments
  .replace(/\/\/.*$/gm, '')
  // Remove trailing commas before } or ]
  .replace(/,\s*([}\]])/g, '$1');

let POKEMON_DATA;
try {
  POKEMON_DATA = JSON.parse(cleanedData);
} catch (e) {
  console.error('Failed to parse data.js:', e.message);
  process.exit(1);
}

const pokemon = POKEMON_DATA.pokemon;
console.log(`Total entries in data.js: ${pokemon.length}`);

// Helper: strip parenthetical suffixes and normalize name for API
function getApiName(nameEn) {
  // Remove parenthetical like (Galarian), (Shadow), (Alolan), etc.
  let base = nameEn.replace(/\s*\(.*?\)\s*$/, '').trim();
  // PokeAPI uses lowercase, hyphenated names for multi-word Pokemon
  // Special cases for PokeAPI naming conventions
  const apiNameMap = {
    'Mr. Mime': 'mr-mime',
    'Mr. Rime': 'mr-rime',
    'Mime Jr.': 'mime-jr',
    'Farfetch\'d': 'farfetchd',
    'Sirfetch\'d': 'sirfetchd',
    'Flabébé': 'flabebe',
    'Nidoran♀': 'nidoran-f',
    'Nidoran♂': 'nidoran-m',
    'Type: Null': 'type-null',
    'Tapu Koko': 'tapu-koko',
    'Tapu Lele': 'tapu-lele',
    'Tapu Bulu': 'tapu-bulu',
    'Tapu Fini': 'tapu-fini',
    'Jangmo-o': 'jangmo-o',
    'Hakamo-o': 'hakamo-o',
    'Kommo-o': 'kommo-o',
    'Ho-Oh': 'ho-oh',
    'Porygon-Z': 'porygon-z',
    'Porygon2': 'porygon2',
    'Wo-Chien': 'wo-chien',
    'Chien-Pao': 'chien-pao',
    'Ting-Lu': 'ting-lu',
    'Chi-Yu': 'chi-yu',
    'Great Tusk': 'great-tusk',
    'Scream Tail': 'scream-tail',
    'Brute Bonnet': 'brute-bonnet',
    'Flutter Mane': 'flutter-mane',
    'Slither Wing': 'slither-wing',
    'Sandy Shocks': 'sandy-shocks',
    'Iron Treads': 'iron-treads',
    'Iron Bundle': 'iron-bundle',
    'Iron Hands': 'iron-hands',
    'Iron Jugulis': 'iron-jugulis',
    'Iron Moth': 'iron-moth',
    'Iron Thorns': 'iron-thorns',
    'Iron Valiant': 'iron-valiant',
    'Roaring Moon': 'roaring-moon',
    'Iron Leaves': 'iron-leaves',
    'Walking Wake': 'walking-wake',
    'Gouging Fire': 'gouging-fire',
    'Raging Bolt': 'raging-bolt',
    'Iron Boulder': 'iron-boulder',
    'Iron Crown': 'iron-crown',
    'Bloodmoon Ursaluna': 'ursaluna-bloodmoon',
  };

  if (apiNameMap[base]) return apiNameMap[base];
  return base.toLowerCase().replace(/\s+/g, '-');
}

// Check if entry is a regional/shadow form that should be skipped for exact match
function isFormVariant(nameEn, name) {
  const lower = nameEn.toLowerCase();
  if (/\(galarian\)/i.test(nameEn)) return true;
  if (/\(alolan\)/i.test(nameEn)) return true;
  if (/\(hisuian\)/i.test(nameEn)) return true;
  if (/\(shadow\)/i.test(nameEn)) return true;
  if (/\(paldean\)/i.test(nameEn)) return true;
  // Check Korean name for regional/shadow markers
  if (/가라르|알로라|히스이|섀도우|팔데아/.test(name)) return true;
  return false;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchKoreanName(apiName) {
  const url = `https://pokeapi.co/api/v2/pokemon-species/${apiName}`;
  const resp = await fetch(url);
  if (!resp.ok) {
    if (resp.status === 404) return { error: '404 Not Found' };
    return { error: `HTTP ${resp.status}` };
  }
  const data = await resp.json();
  const koEntry = data.names.find(n => n.language.name === 'ko');
  if (!koEntry) return { error: 'No Korean name in API' };
  return { name: koEntry.name };
}

async function main() {
  // Deduplicate: same nameEn base can appear multiple times (shadow, forms, different leagues)
  // We want to check each unique (nameEn base, Korean name) pair
  const seen = new Set();
  const entries = [];

  for (const p of pokemon) {
    const base = p.nameEn.replace(/\s*\(.*?\)\s*$/, '').trim();
    const key = `${base}|${p.name}|${p.nameEn}`;
    if (seen.has(key)) continue;
    seen.add(key);
    entries.push(p);
  }

  console.log(`Unique entries to check: ${entries.length}`);

  let matches = 0;
  let mismatches = [];
  let errors = [];
  let skippedForms = 0;

  for (let i = 0; i < entries.length; i++) {
    const p = entries[i];
    const apiName = getApiName(p.nameEn);
    const isForm = isFormVariant(p.nameEn, p.name);

    if (i > 0 && i % 50 === 0) {
      console.log(`  Progress: ${i}/${entries.length}...`);
    }

    try {
      const result = await fetchKoreanName(apiName);

      if (result.error) {
        errors.push({ nameEn: p.nameEn, apiName, error: result.error });
      } else if (isForm) {
        // Skip exact match for forms - they share base species name
        skippedForms++;
      } else if (result.name === p.name) {
        matches++;
      } else {
        mismatches.push({
          nameEn: p.nameEn,
          expected: result.name,
          actual: p.name
        });
      }
    } catch (err) {
      errors.push({ nameEn: p.nameEn, apiName, error: err.message });
    }

    await sleep(100);
  }

  console.log('\n===== RESULTS =====');
  console.log(`Total unique entries checked: ${entries.length}`);
  console.log(`Matches: ${matches}`);
  console.log(`Skipped forms (regional/shadow): ${skippedForms}`);
  console.log(`Mismatches: ${mismatches.length}`);
  console.log(`Errors: ${errors.length}`);

  if (mismatches.length > 0) {
    console.log('\n--- MISMATCHES ---');
    for (const m of mismatches) {
      console.log(`  ${m.nameEn}: API="${m.expected}" vs data.js="${m.actual}"`);
    }
  }

  if (errors.length > 0) {
    console.log('\n--- ERRORS ---');
    for (const e of errors) {
      console.log(`  ${e.nameEn} (${e.apiName}): ${e.error}`);
    }
  }
}

main().catch(console.error);
