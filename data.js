const POKEMON_DATA = {
  "pokemon": [
    { "name": "뮤츠", "nameEn": "Mewtwo", "category": "powerup", "fast": ["신통력", "염동력"], "charged": ["사이코브레이크", "섀도우볼"], "note": "섀도우 추천" },
    { "name": "레쿠쟈", "nameEn": "Rayquaza", "category": "powerup", "fast": ["드래곤테일", "에어슬래시"], "charged": ["드래곤어센트", "역린"], "note": "메가 진화 가능" },
    { "name": "카이오가", "nameEn": "Kyogre", "category": "powerup", "fast": ["폭포", "드래곤테일"], "charged": ["근원의파동", "서핑"], "note": "물 최강 어태커" },
    { "name": "그란돈", "nameEn": "Groudon", "category": "powerup", "fast": ["머드샷", "드래곤테일"], "charged": ["단애의칼", "지진"], "note": "땅 최강 어태커" },
    { "name": "루카리오", "nameEn": "Lucario", "category": "powerup", "fast": ["카운터", "불릿펀치"], "charged": ["파동탄", "인파이트"], "note": "격투 최강 어태커" },
    // 랑도로스는 아래 powerup 섹션에 통합
    { "name": "테라키온", "nameEn": "Terrakion", "category": "powerup", "fast": ["더블킥", "스매크다운"], "charged": ["스톤엣지", "인파이트"], "note": "바위 어태커" },
    { "name": "갈라도스", "nameEn": "Gyarados", "category": "powerup", "fast": ["폭포", "드래곤브레스"], "charged": ["아쿠아테일", "하이드로펌프"], "note": "메가 진화 가능" },
    { "name": "마기라스", "nameEn": "Tyranitar", "category": "powerup", "fast": ["물기", "스매크다운"], "charged": ["스톤엣지", "깨물어부수기"], "note": "메가 진화 가능" },
    { "name": "망나뇽", "nameEn": "Dragonite", "category": "powerup", "fast": ["드래곤테일", "드래곤브레스"], "charged": ["역린", "유성군"], "note": "드래곤 어태커" },
    { "name": "레시라무", "nameEn": "Reshiram", "category": "powerup", "fast": ["불꽃엄니","드래곤브레스"], "charged": ["크로스플레임","역린"], "note": "불꽃 최강 어태커" },
    { "name": "디아루가", "nameEn": "Dialga", "category": "powerup", "fast": ["드래곤브레스","메탈크루"], "charged": ["시간의포효","아이언헤드"], "note": "마스터리그 최강, 드래곤/강철" },
    { "name": "팔키아", "nameEn": "Palkia", "category": "powerup", "fast": ["드래곤테일","드래곤브레스"], "charged": ["아공간절단","하이드로펌프"], "note": "드래곤/물 어태커" },
    { "name": "루기아", "nameEn": "Lugia", "category": "powerup", "fast": ["드래곤테일","신통력"], "charged": ["에어로블라스트","하늘깨기"], "note": "마스터리그 탱커" },
    { "name": "호오호", "nameEn": "Ho-Oh", "category": "powerup", "fast": ["소각","신통력"], "charged": ["성스러운불꽃","브레이브버드"], "note": "마스터리그 탱커, 섀도우 추천" },
    { "name": "맘모꾸리", "nameEn": "Mamoswine", "category": "powerup", "fast": ["가루눈","진흙뿌리기"], "charged": ["눈사태","지진"], "note": "얼음/땅 최강 어태커, 섀도우 추천" },
    { "name": "샹델라", "nameEn": "Chandelure", "category": "powerup", "fast": ["불꽃소용돌이","주술"], "charged": ["섀도우볼","오버히트"], "note": "고스트/불꽃 듀얼 어태커" },
    { "name": "다크라이", "nameEn": "Darkrai", "category": "powerup", "fast": ["으르렁","속이기"], "charged": ["악의파동","섀도우볼"], "note": "악 최강 어태커" },
    { "name": "한카리아스", "nameEn": "Garchomp", "category": "powerup", "fast": ["머드샷","드래곤테일"], "charged": ["대지의힘","역린"], "note": "드래곤/땅, 메가 진화 가능" },
    { "name": "메타그로스", "nameEn": "Metagross", "category": "powerup", "fast": ["불릿펀치","선취"], "charged": ["코메트펀치","지진"], "note": "강철 최강, 커뮤데이 기술 필수" },
    { "name": "보만다", "nameEn": "Salamence", "category": "powerup", "fast": ["드래곤테일","불꽃엄니"], "charged": ["역린","유성군"], "note": "드래곤 어태커, 섀도우 추천" },
    { "name": "에레키블", "nameEn": "Electivire", "category": "powerup", "fast": ["전기쇼크","볼트체인지"], "charged": ["와일드볼트","10만볼트"], "note": "전기 최강 DPS, 섀도우 추천" },
    { "name": "라이코", "nameEn": "Raikou", "category": "powerup", "fast": ["전기쇼크","볼트체인지"], "charged": ["와일드볼트","10만볼트"], "note": "전기 안정 어태커, 섀도우 추천" },
    { "name": "괴력몬", "nameEn": "Machamp", "category": "powerup", "fast": ["카운터","가라데촙"], "charged": ["폭발펀치","인파이트"], "note": "격투 어태커, 섀도우 추천" },
    { "name": "로즈레이드", "nameEn": "Roserade", "category": "powerup", "fast": ["독찌르기","풀베기"], "charged": ["풀묶기","독엄니"], "note": "풀/독 듀얼 어태커" },
    { "name": "글레이시아", "nameEn": "Glaceon", "category": "powerup", "fast": ["서리숨결","얼음뭉치"], "charged": ["눈사태","냉동빔"], "note": "얼음 어태커, 섀도우 추천" },
    { "name": "포푸니라", "nameEn": "Weavile", "category": "powerup", "fast": ["얼음뭉치","속이기"], "charged": ["눈사태","이판사판"], "note": "얼음/악 듀얼, 섀도우 추천" },
    { "name": "이상해꽃", "nameEn": "Venusaur", "category": "powerup", "fast": ["덩굴채찍","풀베기"], "charged": ["하드플랜트","독엄니"], "note": "풀 어태커, 메가진화 가능, 섀도우 추천" },
    { "name": "리자몽", "nameEn": "Charizard", "category": "powerup", "fast": ["불꽃소용돌이","에어슬래시"], "charged": ["블라스트번","드래곤크루"], "note": "불꽃 어태커, 메가진화Y 추천" },
    { "name": "팬텀", "nameEn": "Gengar", "category": "powerup", "fast": ["섀도우크루","핥기"], "charged": ["섀도우볼","독엄니"], "note": "고스트 유리대포, 메가진화 가능" },
    { "name": "토게키스", "nameEn": "Togekiss", "category": "powerup", "fast": ["참","에어슬래시"], "charged": ["매지컬샤인","화염방사"], "note": "페어리 어태커" },
    { "name": "가디안", "nameEn": "Gardevoir", "category": "powerup", "fast": ["참","염동력"], "charged": ["매지컬샤인","사이코키네시스"], "note": "페어리 어태커, 메가진화 가능" },
    { "name": "자시안", "nameEn": "Zacian", "category": "powerup", "fast": ["전광석화","메탈크루"], "charged": ["인파이트","와일드볼트"], "note": "마스터리그 탑티어, 페어리/강철" },
    { "name": "제크로무", "nameEn": "Zekrom", "category": "powerup", "fast": ["차지빔","드래곤브레스"], "charged": ["크로스선더","역린"], "note": "전기/드래곤 어태커" },
    { "name": "이벨타르", "nameEn": "Yveltal", "category": "powerup", "fast": ["으르렁","돌풍"], "charged": ["악의파동","하이퍼빔"], "note": "악/비행 어태커" },
    { "name": "제르네아스", "nameEn": "Xerneas", "category": "powerup", "fast": ["돌진","선취"], "charged": ["문블라스트","매지컬샤인"], "note": "페어리 어태커" },
    { "name": "코뿌리", "nameEn": "Rhyperior", "category": "powerup", "fast": ["스매크다운","진흙뿌리기"], "charged": ["록슬라이드","지진"], "note": "바위/땅 어태커, 커뮤데이 기술" },
    { "name": "램펄드", "nameEn": "Rampardos", "category": "powerup", "fast": ["스매크다운","선취"], "charged": ["스톤엣지","록슬라이드"], "note": "바위 최강 DPS, 유리대포" },
    { "name": "히드런", "nameEn": "Heatran", "category": "powerup", "fast": ["불꽃소용돌이","벌레먹기"], "charged": ["마그마스톰","아이언헤드"], "note": "불꽃 어태커" },
    { "name": "몰드류", "nameEn": "Excadrill", "category": "powerup", "fast": ["진흙뿌리기","메탈크루"], "charged": ["뜨거운모래","아이언헤드"], "note": "땅/강철 듀얼 어태커" },
    { "name": "랑도로스", "nameEn": "Landorus", "category": "powerup", "fast": ["머드샷","바위던지기"], "charged": ["지진","대지의힘"], "note": "영수폼 추천, 땅 어태커, 마스터리그 A티어" },
    { "name": "잠만보", "nameEn": "Snorlax", "category": "powerup", "fast": ["핥기","선취"], "charged": ["바디슬램","지진"], "note": "노말 탱커, 마스터리그" },
    { "name": "멜메탈", "nameEn": "Melmetal", "category": "powerup", "fast": ["전기쇼크","전기쇼크"], "charged": ["10만볼트","록슬라이드"], "note": "강철 탱커, 마스터리그 A티어" },
    { "name": "님피아", "nameEn": "Sylveon", "category": "powerup", "fast": ["참","전광석화"], "charged": ["문블라스트","사이코쇼크"], "note": "페어리 어태커" },

    // ===== 울트라리그 (Ultra League) S 티어 =====
    { "name": "기라티나", "nameEn": "Giratina", "category": "powerup", "fast": ["섀도우크루", "드래곤브레스"], "charged": ["섀도우포스", "드래곤크루"], "note": "어나더폼: PvP 탱커 / 오리진폼: 고스트 최강 레이드 어태커" },
    { "name": "레지스틸", "nameEn": "Registeel", "category": "ultra", "fast": ["록온", "메탈크루"], "charged": ["기합구슬", "자핑캐논"], "note": "극탱커, 자핑캐논 추천" },
    { "name": "크레세리아", "nameEn": "Cresselia", "category": "ultra", "fast": ["신통력", "염동력"], "charged": ["문블라스트", "풀묶기"], "note": "탱커, 문블라스트 필수" },
    { "name": "뚜벅초", "nameEn": "Trevenant", "category": "ultra", "fast": ["섀도우크루", "기습"], "charged": ["씨폭탄", "섀도우볼"], "note": "XL 사탕 필요, 풀/고스트" },
    { "name": "니드퀸", "nameEn": "Nidoqueen", "category": "ultra", "fast": ["독찌르기", "물기"], "charged": ["독엄니", "대지의힘"], "note": "섀도우 추천, 디버프 전략" },
    { "name": "월루프", "nameEn": "Walrein", "category": "ultra", "fast": ["얼음엄니", "물대포"], "charged": ["고드름침", "지진"], "note": "커뮤데이 기술 필수" },
    { "name": "코발리온", "nameEn": "Cobalion", "category": "ultra", "fast": ["더블킥", "메탈크루"], "charged": ["성스러운검", "스톤엣지"], "note": "강철/격투, 밸런스형" },
    { "name": "물짱이", "nameEn": "Swampert", "category": "ultra", "fast": ["머드샷", "물대포"], "charged": ["하이드로캐논", "지진"], "note": "커뮤데이 기술 필수, 물/땅" },
    { "name": "블래키", "nameEn": "Umbreon", "category": "ultra", "fast": ["으르렁", "속이기"], "charged": ["파울플레이", "라스트리조트"], "note": "XL 사탕 필요, 극탱커" },
    // 기라티나(오리진)은 위 기라티나 엔트리에 합침

    // ===== 울트라리그 (Ultra League) A 티어 =====
    { "name": "갸라도스", "nameEn": "Gyarados", "category": "ultra", "fast": ["드래곤브레스", "폭포"], "charged": ["아쿠아테일", "깨물어부수기"], "note": "CP 2500 이하 육성, 접근성 좋음" },
    { "name": "탱그라", "nameEn": "Tangrowth", "category": "ultra", "fast": ["덩굴채찍", "벌레침입"], "charged": ["파워휩", "암석봉인"], "note": "XL 사탕 필요, 풀 탱커" },
    { "name": "독개굴", "nameEn": "Toxicroak", "category": "ultra", "fast": ["카운터", "독찌르기"], "charged": ["머드봄", "오물웨이브"], "note": "격투/독, 쉴드 압박" },
    { "name": "에어무드", "nameEn": "Skarmory", "category": "ultra", "fast": ["에어슬래시", "강철날개"], "charged": ["브레이브버드", "하늘깨기"], "note": "XL 사탕 필요, 강철/비행 탱커" },
    { "name": "라프라스", "nameEn": "Lapras", "category": "ultra", "fast": ["아이스샤드", "물대포"], "charged": ["서핑", "냉동빔"], "note": "얼음/물 탱커" },
    { "name": "강철톤", "nameEn": "Steelix", "category": "ultra", "fast": ["드래곤테일", "아이언테일"], "charged": ["깨물어부수기", "지진"], "note": "XL 사탕 필요, 강철/땅 탱커" },
    { "name": "해골몽", "nameEn": "Jellicent", "category": "ultra", "fast": ["헥스", "거품"], "charged": ["섀도우볼", "거품광선"], "note": "물/고스트, 탱커" },
    { "name": "드래피온", "nameEn": "Drapion", "category": "ultra", "fast": ["독찌르기", "물기"], "charged": ["깨물어부수기", "아쿠아테일"], "note": "독/악, 약점 적음" },
    { "name": "밤무아드", "nameEn": "Obstagoon", "category": "ultra", "fast": ["카운터", "핥기"], "charged": ["야습", "크로스촙"], "note": "악/노말, 격투 이중약점 주의" },
    { "name": "눈여아", "nameEn": "Froslass", "category": "ultra", "fast": ["눈싸라기", "헥스"], "charged": ["눈사태", "섀도우볼"], "note": "얼음/고스트, 쉴드 압박" },
    { "name": "파비코리", "nameEn": "Altaria", "category": "ultra", "fast": ["드래곤브레스", "짓찧기"], "charged": ["문포스", "하늘깨기"], "note": "XL 사탕 필요, 드래곤/비행" },
    { "name": "야도란(가라르)", "nameEn": "Slowbro (Galarian)", "category": "ultra", "fast": ["독찌르기", "염동력"], "charged": ["기합구슬", "오물웨이브"], "note": "가라르폼, 독/에스퍼" },
    { "name": "엠페르트", "nameEn": "Empoleon", "category": "ultra", "fast": ["폭포", "메탈크루"], "charged": ["하이드로캐논", "드릴쪼기"], "note": "커뮤데이 기술 필수, 물/강철" },
    { "name": "번치코", "nameEn": "Blaziken", "category": "ultra", "fast": ["카운터", "불꽃소용돌이"], "charged": ["블라스트번", "브레이브버드"], "note": "커뮤데이 기술 필수, 불꽃/격투" },
    { "name": "날씬돌", "nameEn": "Gallade", "category": "ultra", "fast": ["염동력", "로킥"], "charged": ["인파이트", "리프블레이드"], "note": "에스퍼/격투, 공격형" },
    { "name": "누오", "nameEn": "Quagsire", "category": "ultra", "fast": ["머드샷", "물대포"], "charged": ["스톤엣지", "지진"], "note": "XL 사탕 필요, 물/땅" },
    { "name": "다부니", "nameEn": "Greedent", "category": "ultra", "fast": ["불릿시드", "몸통박치기"], "charged": ["바디슬램", "깨물어부수기"], "note": "노말, XL 사탕 필요" },
    { "name": "하리뭉", "nameEn": "Hariyama", "category": "ultra", "fast": ["카운터", "불릿펀치"], "charged": ["인파이트", "헤비봄버"], "note": "격투 탱커" },
    { "name": "장크로다일", "nameEn": "Feraligatr", "category": "ultra", "fast": ["물대포", "얼음엄니"], "charged": ["하이드로캐논", "냉동빔"], "note": "커뮤데이 기술 필수, 물" },
    { "name": "투구푸스", "nameEn": "Bastiodon", "category": "ultra", "fast": ["스매크다운", "아이언테일"], "charged": ["스톤엣지", "래스터캐논"], "note": "XL 사탕 필요, 극탱커" },
    { "name": "분노원숭이", "nameEn": "Annihilape", "category": "ultra", "fast": ["카운터", "섀도우크루"], "charged": ["섀도우볼", "인파이트"], "note": "격투/고스트, XL 사탕 필요" },
    { "name": "토오", "nameEn": "Clodsire", "category": "ultra", "fast": ["독찌르기", "머드샷"], "charged": ["지진", "스톤엣지"], "note": "독/땅, 탱커" },

    // ===== 울트라리그 (Ultra League) B 티어 =====
    { "name": "망나뇽", "nameEn": "Dragonite", "category": "ultra", "fast": ["드래곤브레스", "드래곤테일"], "charged": ["드래곤크루", "허리케인"], "note": "드래곤/비행, 접근성 좋음" },
    { "name": "야도킹(가라르)", "nameEn": "Slowking (Galarian)", "category": "ultra", "fast": ["독찌르기", "염동력"], "charged": ["오물웨이브", "섀도우볼"], "note": "가라르폼, 독/에스퍼" },
    { "name": "차머드", "nameEn": "Charjabug", "category": "ultra", "fast": ["스파크", "벌레먹기"], "charged": ["방전", "엑스시저"], "note": "벌레/전기, XL 사탕 필요" },
    { "name": "샤로다", "nameEn": "Serperior", "category": "ultra", "fast": ["덩굴채찍", "아이언테일"], "charged": ["하드플랜트", "공중날기"], "note": "커뮤데이 기술 필수, 풀" },
    { "name": "토대부기", "nameEn": "Torterra", "category": "ultra", "fast": ["면도날잎", "물기"], "charged": ["하드플랜트", "스톤엣지"], "note": "커뮤데이 기술 필수, 풀/땅" },
    { "name": "괴력몬(섀도우)", "nameEn": "Machamp (Shadow)", "category": "ultra", "fast": ["카운터", "불릿펀치"], "charged": ["크로스촙", "암석봉인"], "note": "섀도우, 격투 공격형" },
    { "name": "야부엉", "nameEn": "Noctowl", "category": "ultra", "fast": ["날개치기", "신통력"], "charged": ["하늘깨기", "사이코키네시스"], "note": "XL 사탕 필요, 노말/비행 탱커" },
    { "name": "미끄래곤", "nameEn": "Goodra", "category": "ultra", "fast": ["드래곤브레스", "물대포"], "charged": ["파워휩", "머디워터"], "note": "드래곤, 다양한 기술배치" },
    { "name": "눈설왕", "nameEn": "Abomasnow", "category": "ultra", "fast": ["눈싸라기", "면도날잎"], "charged": ["날씨볼", "에너지볼"], "note": "풀/얼음, 빠른 차지무브" },
    { "name": "쏘콘", "nameEn": "Escavalier", "category": "ultra", "fast": ["카운터", "벌레먹기"], "charged": ["메가호른", "드릴쪼기"], "note": "벌레/강철" },
    { "name": "해피너스", "nameEn": "Blissey", "category": "ultra", "fast": ["짓찧기", "선취"], "charged": ["사이코키네시스", "매지컬샤인"], "note": "체육관 방어 전용, 극탱커" },
    { "name": "플라이곤", "nameEn": "Flygon", "category": "ultra", "fast": ["머드샷", "드래곤테일"], "charged": ["드래곤크루", "대지의힘"], "note": "땅/드래곤, 접근성 좋음" },
    { "name": "팬텀", "nameEn": "Gengar", "category": "ultra", "fast": ["섀도우크루", "독찌르기"], "charged": ["섀도우볼", "섀도우펀치"], "note": "섀도우 추천, 유리대포" },
    { "name": "무장조", "nameEn": "Heracross", "category": "powerup", "fast": ["카운터", "벌레먹기"], "charged": ["메가호른", "인파이트"], "note": "메가진화 가능, 격투/벌레 레이드 어태커, 지역한정" },
    { "name": "스와나", "nameEn": "Swanna", "category": "ultra", "fast": ["에어슬래시", "물대포"], "charged": ["냉동빔", "허리케인"], "note": "물/비행, 접근성 좋음" },
    { "name": "너트령", "nameEn": "Ferrothorn", "category": "ultra", "fast": ["덩굴채찍", "메탈크루"], "charged": ["파워휩", "미러샷"], "note": "풀/강철 탱커" },
    { "name": "라티아스", "nameEn": "Latias", "category": "powerup", "fast": ["드래곤브레스", "로킥"], "charged": ["역린", "사이코키네시스"], "note": "메가진화 가능, 드래곤/에스퍼 전설" },
    { "name": "폴리곤Z", "nameEn": "Porygon-Z", "category": "ultra", "fast": ["록온", "차지빔"], "charged": ["트라이어택", "섀도우볼"], "note": "노말, 커뮤데이 기술 추천" },
    { "name": "마기라스(섀도우)", "nameEn": "Tyranitar (Shadow)", "category": "ultra", "fast": ["물기", "스매크다운"], "charged": ["깨물어부수기", "스톤엣지"], "note": "섀도우, 악/바위" },
    { "name": "겔가르", "nameEn": "Doublade", "category": "ultra", "fast": ["섀도우크루", "연속자르기"], "charged": ["섀도우볼", "아이언헤드"], "note": "고스트/강철, 높은 방어" },

    // === 슈퍼리그 (Great League) S 티어 ===
    { "name": "마릴리", "nameEn": "Azumarill", "category": "super", "fast": ["거품", "바위깨기"], "charged": ["냉동빔", "하이드로펌프"], "note": "슈퍼리그 탑티어, XL사탕 필요" },
    { "name": "레지스틸", "nameEn": "Registeel", "category": "super", "fast": ["록온", "메탈크루"], "charged": ["기합구슬", "래스터캐논"], "note": "탱커, 자핑캐논 추천" },
    { "name": "메디챔", "nameEn": "Medicham", "category": "super", "fast": ["카운터", "신통력"], "charged": ["냉동펀치", "사이코키네시스"], "note": "XL사탕 필요, 격투 탑" },
    { "name": "투구푸스", "nameEn": "Bastiodon", "category": "super", "fast": ["스매크다운", "아이언테일"], "charged": ["스톤엣지", "래스터캐논"], "note": "극탱커, XL사탕 필요" },
    { "name": "뚜벅초", "nameEn": "Trevenant", "category": "super", "fast": ["섀도우크루", "기습"], "charged": ["씨폭탄", "섀도우볼"], "note": "풀/고스트 탑티어" },
    { "name": "토오", "nameEn": "Clodsire", "category": "super", "fast": ["독찌르기", "머드샷"], "charged": ["지진", "스톤엣지"], "note": "독/땅 탱커" },
    { "name": "에어무드", "nameEn": "Skarmory", "category": "super", "fast": ["에어슬래시", "강철날개"], "charged": ["브레이브버드", "하늘깨기"], "note": "강철/비행 탱커" },
    { "name": "분노원숭이", "nameEn": "Annihilape", "category": "super", "fast": ["카운터", "섀도우크루"], "charged": ["섀도우볼", "인파이트"], "note": "격투/고스트 최강" },

    // === 슈퍼리그 A 티어 ===
    { "name": "니드퀸", "nameEn": "Nidoqueen", "category": "super", "fast": ["독찌르기", "물기"], "charged": ["독엄니", "대지의힘"], "note": "섀도우 추천" },
    { "name": "랑도로스", "nameEn": "Landorus", "category": "super", "fast": ["머드샷", "바위던지기"], "charged": ["대지의힘", "스톤엣지"], "note": "영수폼 추천, 전설 포켓몬" },
    { "name": "날쌩마(가라르)", "nameEn": "Rapidash (Galarian)", "category": "super", "fast": ["요정의바람", "신통력"], "charged": ["바디슬램", "메가호른"], "note": "가라르폼, 페어리" },
    { "name": "차머드", "nameEn": "Charjabug", "category": "super", "fast": ["스파크", "벌레먹기"], "charged": ["방전", "엑스시저"], "note": "벌레/전기 탱커" },
    { "name": "라이초(알로라)", "nameEn": "Raichu (Alolan)", "category": "super", "fast": ["볼트체인지", "스파크"], "charged": ["와일드볼트", "사이코키네시스"], "note": "알로라폼" },
    { "name": "패리퍼", "nameEn": "Pelipper", "category": "super", "fast": ["윙어택", "물대포"], "charged": ["웨더볼(물)", "허리케인"], "note": "물/비행" },
    { "name": "독개굴", "nameEn": "Toxicroak", "category": "super", "fast": ["카운터", "독찌르기"], "charged": ["머드밤", "폭발펀치"], "note": "격투/독" },
    { "name": "리자몽(섀도우)", "nameEn": "Charizard (Shadow)", "category": "super", "fast": ["불꽃소용돌이", "에어슬래시"], "charged": ["블라스트번", "드래곤크루"], "note": "섀도우, 커뮤데이 무브" },
    // 무장조는 powerup에 등록됨
    { "name": "독파리", "nameEn": "Tentacruel", "category": "super", "fast": ["독찌르기", "물대포"], "charged": ["독엄니", "애시드밤"], "note": "물/독 탱커" },
    { "name": "야도란(가라르)", "nameEn": "Slowbro (Galarian)", "category": "super", "fast": ["독찌르기", "혼란"], "charged": ["독엄니", "사이코키네시스"], "note": "가라르폼, 독/에스퍼" },
    { "name": "고우스트", "nameEn": "Haunter", "category": "super", "fast": ["섀도우크루", "핥기"], "charged": ["섀도우펀치", "섀도우볼"], "note": "고스트 글래스캐논" },
    { "name": "고우스트(섀도우)", "nameEn": "Haunter (Shadow)", "category": "super", "fast": ["섀도우크루", "핥기"], "charged": ["섀도우펀치", "섀도우볼"], "note": "섀도우, 초고화력" },
    { "name": "깜까미", "nameEn": "Sableye", "category": "super", "fast": ["섀도우크루", "속이기"], "charged": ["파울플레이", "리턴"], "note": "XL사탕 필요, 정화 추천" },
    { "name": "마루마인(히스이)", "nameEn": "Electrode (Hisuian)", "category": "super", "fast": ["볼트체인지", "선더쇼크"], "charged": ["에너지볼", "와일드볼트"], "note": "히스이폼, 전기/풀" },
    { "name": "프리져(가라르)", "nameEn": "Articuno (Galarian)", "category": "super", "fast": ["신통력", "혼란"], "charged": ["미래예지", "고대의힘"], "note": "가라르폼, 전설" },
    { "name": "대코파스", "nameEn": "Probopass", "category": "super", "fast": ["스파크", "바위던지기"], "charged": ["매그넷봄", "록슬라이드"], "note": "바위/강철 탱커" },
    { "name": "불카모스", "nameEn": "Volcarona", "category": "powerup", "fast": ["벌레먹기", "불꽃소용돌이"], "charged": ["벌레의야단법석", "오버히트"], "note": "벌레/불꽃 최강급 레이드 어태커" },

    // === 슈퍼리그 B 티어 ===
    { "name": "뮤", "nameEn": "Mew", "category": "super", "fast": ["섀도우크루", "볼트체인지"], "charged": ["서핑", "와일드볼트"], "note": "다양한 기술셋 가능" },
    { "name": "둥실라이드", "nameEn": "Drifblim", "category": "super", "fast": ["헥스", "놀래키기"], "charged": ["아이시윈드", "섀도우볼"], "note": "고스트/비행" },
    { "name": "너트령", "nameEn": "Ferrothorn", "category": "super", "fast": ["덩굴채찍", "메탈크루"], "charged": ["파워휩", "미러샷"], "note": "풀/강철 탱커" },
    { "name": "멜시", "nameEn": "Carbink", "category": "super", "fast": ["바위던지기", "돌진"], "charged": ["록슬라이드", "문블라스트"], "note": "바위/페어리 탱커, XL사탕 필요" },
    { "name": "메깅", "nameEn": "Whiscash", "category": "super", "fast": ["머드샷", "물대포"], "charged": ["머드밤", "냉동빔"], "note": "물/땅 저코스트" },
    { "name": "늪짱이", "nameEn": "Swampert", "category": "super", "fast": ["머드샷", "물대포"], "charged": ["하이드로캐논", "지진"], "note": "커뮤데이 무브 필수" },
    { "name": "늪짱이(섀도우)", "nameEn": "Swampert (Shadow)", "category": "super", "fast": ["머드샷", "물대포"], "charged": ["하이드로캐논", "지진"], "note": "섀도우, 커뮤데이 무브 필수" },
    { "name": "라프라스", "nameEn": "Lapras", "category": "super", "fast": ["아이스샤드", "물대포"], "charged": ["서핑", "냉동빔"], "note": "물/얼음 탱커" },
    { "name": "야부엉", "nameEn": "Noctowl", "category": "super", "fast": ["윙어택", "신통력"], "charged": ["하늘깨기", "섀도우볼"], "note": "노말/비행 탱커, XL사탕 필요" },
    { "name": "괴력몬(섀도우)", "nameEn": "Machamp (Shadow)", "category": "super", "fast": ["카운터", "불릿펀치"], "charged": ["크로스촙", "록슬라이드"], "note": "섀도우 추천" },
    { "name": "나무킹", "nameEn": "Sceptile", "category": "super", "fast": ["덩굴채찍", "연속자르기"], "charged": ["리프블레이드", "지진"], "note": "풀 어태커" },
    { "name": "번치코", "nameEn": "Blaziken", "category": "super", "fast": ["카운터", "불꽃소용돌이"], "charged": ["블라스트번", "브레이브버드"], "note": "격투/불꽃" },
    { "name": "내루미", "nameEn": "Lickitung", "category": "super", "fast": ["핥기", "선취"], "charged": ["바디슬램", "파워휩"], "note": "XL사탕 필요, 극탱커" },
    { "name": "쥬레곤", "nameEn": "Dewgong", "category": "super", "fast": ["아이스샤드", "서리숨결"], "charged": ["아이시윈드", "물의파동"], "note": "레거시 무브 필요" },
    { "name": "독개굴(섀도우)", "nameEn": "Toxicroak (Shadow)", "category": "super", "fast": ["카운터", "독찌르기"], "charged": ["머드밤", "폭발펀치"], "note": "섀도우, 격투/독" },
    { "name": "폴리곤Z", "nameEn": "Porygon-Z", "category": "super", "fast": ["록온", "차지빔"], "charged": ["트라이어택", "냉동빔"], "note": "커뮤데이 무브 추천" },
    // 라티아스는 powerup에 등록됨
    { "name": "워시로토무", "nameEn": "Wash Rotom", "category": "super", "fast": ["선더쇼크", "놀래키기"], "charged": ["하이드로펌프", "10만볼트"], "note": "전기/물" },
    { "name": "블래키", "nameEn": "Umbreon", "category": "super", "fast": ["으르렁", "속이기"], "charged": ["파울플레이", "라스트리조트"], "note": "XL사탕 필요, 악 탱커" },
    { "name": "갸라도스(섀도우)", "nameEn": "Gyarados (Shadow)", "category": "super", "fast": ["드래곤브레스", "폭포"], "charged": ["아쿠아테일", "깨물어부수기"], "note": "섀도우, 물/비행" },
    { "name": "눈설왕(섀도우)", "nameEn": "Abomasnow (Shadow)", "category": "super", "fast": ["가루눈", "면도날잎"], "charged": ["웨더볼(얼음)", "에너지볼"], "note": "섀도우 추천, 풀/얼음" },
    { "name": "디안시", "nameEn": "Diancie", "category": "powerup", "fast": ["바위던지기", "돌진"], "charged": ["문블라스트", "록슬라이드"], "note": "메가진화 가능, 바위/페어리 환상 포켓몬" },
    { "name": "어흥염", "nameEn": "Incineroar", "category": "super", "fast": ["불꽃소용돌이", "으르렁"], "charged": ["블라스트번", "다크래리어트"], "note": "불꽃/악" },
    { "name": "마임꽁", "nameEn": "Mr. Rime", "category": "super", "fast": ["아이스샤드", "혼란"], "charged": ["아이시윈드", "사이코키네시스"], "note": "얼음/에스퍼, 가라르 마임맨 진화" },
    { "name": "핫삼", "nameEn": "Scizor", "category": "powerup", "fast": ["불릿펀치", "연속자르기"], "charged": ["아이언헤드", "시저크로스"], "note": "강철/벌레 레이드 어태커, 메가진화 가능" },
    { "name": "이상해꽃", "nameEn": "Venusaur", "category": "super", "fast": ["덩굴채찍", "풀베기"], "charged": ["하드플랜트", "폭발펀치"], "note": "커뮤데이 무브, 섀도우 추천" },

    // ===== Gen 1 (#1-151) 도감/버림 =====
    { "name": "이상해씨", "nameEn": "Bulbasaur", "category": "dex", "fast": [], "charged": [], "note": "이상해씨 → 이상해풀 → 이상해꽃 (풀/독 어태커)" },
    { "name": "이상해풀", "nameEn": "Ivysaur", "category": "dex", "fast": [], "charged": [], "note": "이상해씨 → 이상해풀 → 이상해꽃" },
    { "name": "파이리", "nameEn": "Charmander", "category": "dex", "fast": [], "charged": [], "note": "파이리 → 리자드 → 리자몽 (불꽃 어태커)" },
    { "name": "리자드", "nameEn": "Charmeleon", "category": "dex", "fast": [], "charged": [], "note": "파이리 → 리자드 → 리자몽" },
    { "name": "꼬부기", "nameEn": "Squirtle", "category": "dex", "fast": [], "charged": [], "note": "꼬부기 → 어니부기 → 거북왕 (물 어태커)" },
    { "name": "어니부기", "nameEn": "Wartortle", "category": "dex", "fast": [], "charged": [], "note": "꼬부기 → 어니부기 → 거북왕" },
    { "name": "캐터피", "nameEn": "Caterpie", "category": "trash", "fast": [], "charged": [], "note": "캐터피 → 단데기 → 버터플" },
    { "name": "단데기", "nameEn": "Metapod", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "버터플", "nameEn": "Butterfree", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "뿔충이", "nameEn": "Weedle", "category": "trash", "fast": [], "charged": [], "note": "뿔충이 → 딱충이 → 독침붕" },
    { "name": "딱충이", "nameEn": "Kakuna", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "구구", "nameEn": "Pidgey", "category": "trash", "fast": [], "charged": [], "note": "경험치 노가다용" },
    { "name": "피죤", "nameEn": "Pidgeotto", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "꼬렛", "nameEn": "Rattata", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "레트라", "nameEn": "Raticate", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "깨비참", "nameEn": "Spearow", "category": "trash", "fast": [], "charged": [], "note": "깨비참 → 깨비드릴조" },
    { "name": "깨비드릴조", "nameEn": "Fearow", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "아보", "nameEn": "Ekans", "category": "trash", "fast": [], "charged": [], "note": "아보 → 아보크" },
    { "name": "아보크", "nameEn": "Arbok", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "피카츄", "nameEn": "Pikachu", "category": "dex", "fast": [], "charged": [], "note": "피츄 → 피카츄 → 라이츄, 코스튬 수집가치" },
    { "name": "라이츄", "nameEn": "Raichu", "category": "dex", "fast": [], "charged": [], "note": "피카츄 → 라이츄" },
    { "name": "모래두지", "nameEn": "Sandshrew", "category": "trash", "fast": [], "charged": [], "note": "모래두지 → 고지" },
    { "name": "고지", "nameEn": "Sandslash", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "니드런♀", "nameEn": "Nidoran♀", "category": "dex", "fast": [], "charged": [], "note": "니드런♀ → 니드리나 → 니드퀸 (PvP 강자)" },
    { "name": "니드리나", "nameEn": "Nidorina", "category": "dex", "fast": [], "charged": [], "note": "니드런♀ → 니드리나 → 니드퀸" },
    { "name": "니드런♂", "nameEn": "Nidoran♂", "category": "dex", "fast": [], "charged": [], "note": "니드런♂ → 니드리노 → 니드킹" },
    { "name": "니드리노", "nameEn": "Nidorino", "category": "dex", "fast": [], "charged": [], "note": "니드런♂ → 니드리노 → 니드킹" },
    { "name": "니드킹", "nameEn": "Nidoking", "category": "dex", "fast": [], "charged": [], "note": "독/땅, 니드퀸보다 열세" },
    { "name": "삐삐", "nameEn": "Clefairy", "category": "dex", "fast": [], "charged": [], "note": "삐 → 삐삐 → 픽시" },
    { "name": "픽시", "nameEn": "Clefable", "category": "dex", "fast": [], "charged": [], "note": "페어리, 간혹 PvP 사용" },
    { "name": "식스테일", "nameEn": "Vulpix", "category": "trash", "fast": [], "charged": [], "note": "식스테일 → 나인테일" },
    { "name": "나인테일", "nameEn": "Ninetales", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "푸린", "nameEn": "Jigglypuff", "category": "dex", "fast": [], "charged": [], "note": "푸푸린 → 푸린 → 푸크린 (슈퍼리그용)" },
    { "name": "주뱃", "nameEn": "Zubat", "category": "trash", "fast": [], "charged": [], "note": "주뱃 → 골뱃 → 크로뱃" },
    { "name": "골뱃", "nameEn": "Golbat", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "뚜벅쵸", "nameEn": "Oddish", "category": "dex", "fast": [], "charged": [], "note": "뚜벅쵸 → 냄새꼬 → 라플레시아/아르코 (태양의돌)" },
    { "name": "냄새꼬", "nameEn": "Gloom", "category": "dex", "fast": [], "charged": [], "note": "뚜벅쵸 → 냄새꼬 → 라플레시아 or 아르코" },
    { "name": "파라스", "nameEn": "Paras", "category": "trash", "fast": [], "charged": [], "note": "파라스 → 파라섹트" },
    { "name": "파라섹트", "nameEn": "Parasect", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "콘팡", "nameEn": "Venonat", "category": "trash", "fast": [], "charged": [], "note": "콘팡 → 도나리" },
    { "name": "도나리", "nameEn": "Venomoth", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "디그다", "nameEn": "Diglett", "category": "trash", "fast": [], "charged": [], "note": "디그다 → 닥트리오" },
    { "name": "닥트리오", "nameEn": "Dugtrio", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "나옹", "nameEn": "Meowth", "category": "trash", "fast": [], "charged": [], "note": "나옹 → 페르시온" },
    { "name": "페르시온", "nameEn": "Persian", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "고라파덕", "nameEn": "Psyduck", "category": "trash", "fast": [], "charged": [], "note": "고라파덕 → 골덕" },
    { "name": "골덕", "nameEn": "Golduck", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "망키", "nameEn": "Mankey", "category": "dex", "fast": [], "charged": [], "note": "망키 → 성원숭 → 분노원숭이 (PvP 최강급)" },
    { "name": "성원숭", "nameEn": "Primeape", "category": "dex", "fast": [], "charged": [], "note": "망키 → 성원숭 → 분노원숭이" },
    { "name": "가디", "nameEn": "Growlithe", "category": "dex", "fast": [], "charged": [], "note": "가디 → 윈디" },
    { "name": "윈디", "nameEn": "Arcanine", "category": "dex", "fast": [], "charged": [], "note": "불꽃, 준수한 어태커" },
    { "name": "발챙이", "nameEn": "Poliwag", "category": "dex", "fast": [], "charged": [], "note": "발챙이 → 슈륙챙이 → 강챙이/왕구리 (킹스락)" },
    { "name": "슈륙챙이", "nameEn": "Poliwhirl", "category": "dex", "fast": [], "charged": [], "note": "발챙이 → 슈륙챙이 → 강챙이 or 왕구리" },
    { "name": "왕구리", "nameEn": "Politoed", "category": "dex", "fast": [], "charged": [], "note": "킹스락 진화, 도감용" },
    { "name": "케이시", "nameEn": "Abra", "category": "dex", "fast": [], "charged": [], "note": "케이시 → 윤겔라 → 후딘 (에스퍼 어태커)" },
    { "name": "윤겔라", "nameEn": "Kadabra", "category": "dex", "fast": [], "charged": [], "note": "케이시 → 윤겔라 → 후딘" },
    { "name": "알통몬", "nameEn": "Machop", "category": "dex", "fast": [], "charged": [], "note": "알통몬 → 근육몬 → 괴력몬 (격투 어태커)" },
    { "name": "근육몬", "nameEn": "Machoke", "category": "dex", "fast": [], "charged": [], "note": "알통몬 → 근육몬 → 괴력몬" },
    { "name": "모다피", "nameEn": "Bellsprout", "category": "dex", "fast": [], "charged": [], "note": "모다피 → 우츠동 → 우츠보트 (풀/독)" },
    { "name": "우츠동", "nameEn": "Weepinbell", "category": "dex", "fast": [], "charged": [], "note": "모다피 → 우츠동 → 우츠보트" },
    { "name": "왕눈해", "nameEn": "Tentacool", "category": "dex", "fast": [], "charged": [], "note": "왕눈해 → 독파리 (물/독 PvP)" },
    { "name": "꼬마돌", "nameEn": "Geodude", "category": "trash", "fast": [], "charged": [], "note": "꼬마돌 → 데구리 → 딱구리" },
    { "name": "데구리", "nameEn": "Graveler", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "딱구리", "nameEn": "Golem", "category": "trash", "fast": [], "charged": [], "note": "바위/땅, 하위호환" },
    { "name": "포니타", "nameEn": "Ponyta", "category": "trash", "fast": [], "charged": [], "note": "포니타 → 날쌩마" },
    { "name": "날쌩마", "nameEn": "Rapidash", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "야돈", "nameEn": "Slowpoke", "category": "dex", "fast": [], "charged": [], "note": "야돈 → 야도란/야도킹 (킹스락)" },
    { "name": "야도란", "nameEn": "Slowbro", "category": "dex", "fast": [], "charged": [], "note": "물/에스퍼, 메가 진화 가능" },
    { "name": "야도킹", "nameEn": "Slowking", "category": "dex", "fast": [], "charged": [], "note": "킹스락 진화, 도감용" },
    { "name": "코일", "nameEn": "Magnemite", "category": "dex", "fast": [], "charged": [], "note": "코일 → 레어코일 → 자포코일 (전기/강철)" },
    { "name": "레어코일", "nameEn": "Magneton", "category": "dex", "fast": [], "charged": [], "note": "코일 → 레어코일 → 자포코일" },
    { "name": "파오리", "nameEn": "Farfetch'd", "category": "dex", "fast": [], "charged": [], "note": "아시아 지역한정" },
    { "name": "두두", "nameEn": "Doduo", "category": "trash", "fast": [], "charged": [], "note": "두두 → 두트리오" },
    { "name": "두트리오", "nameEn": "Dodrio", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "쥬쥬", "nameEn": "Seel", "category": "dex", "fast": [], "charged": [], "note": "쥬쥬 → 쥬레곤 (슈퍼리그 레거시)" },
    { "name": "질퍽이", "nameEn": "Grimer", "category": "trash", "fast": [], "charged": [], "note": "질퍽이 → 질뻐기" },
    { "name": "질뻐기", "nameEn": "Muk", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "셀러", "nameEn": "Shellder", "category": "dex", "fast": [], "charged": [], "note": "셀러 → 파르셀 (물의돌)" },
    { "name": "파르셀", "nameEn": "Cloyster", "category": "dex", "fast": [], "charged": [], "note": "물/얼음, 간혹 PvP 사용" },
    { "name": "고오스", "nameEn": "Gastly", "category": "dex", "fast": [], "charged": [], "note": "고오스 → 고우스트 → 팬텀 (고스트 어태커)" },
    { "name": "롱스톤", "nameEn": "Onix", "category": "dex", "fast": [], "charged": [], "note": "롱스톤 → 강철톤 (메탈코트, PvP 탱커)" },
    { "name": "슬리프", "nameEn": "Drowzee", "category": "trash", "fast": [], "charged": [], "note": "슬리프 → 슬리퍼" },
    { "name": "슬리퍼", "nameEn": "Hypno", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "크랩", "nameEn": "Krabby", "category": "trash", "fast": [], "charged": [], "note": "크랩 → 킹크랩" },
    { "name": "킹크랩", "nameEn": "Kingler", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "찌리리공", "nameEn": "Voltorb", "category": "trash", "fast": [], "charged": [], "note": "찌리리공 → 붐볼" },
    { "name": "붐볼", "nameEn": "Electrode", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "아라리", "nameEn": "Exeggcute", "category": "dex", "fast": [], "charged": [], "note": "아라리 → 나시 (풀/에스퍼)" },
    { "name": "나시", "nameEn": "Exeggutor", "category": "dex", "fast": [], "charged": [], "note": "풀/에스퍼, 알로라폼도 존재" },
    { "name": "탕구리", "nameEn": "Cubone", "category": "dex", "fast": [], "charged": [], "note": "탕구리 → 텅구리/알로라 텅구리" },
    { "name": "텅구리", "nameEn": "Marowak", "category": "dex", "fast": [], "charged": [], "note": "땅, 알로라폼은 competitive" },
    { "name": "시라소몬", "nameEn": "Hitmonlee", "category": "dex", "fast": [], "charged": [], "note": "배루키 → 시라소몬/홍수몬/카포에라" },
    { "name": "홍수몬", "nameEn": "Hitmonchan", "category": "dex", "fast": [], "charged": [], "note": "배루키 → 시라소몬/홍수몬/카포에라" },
    { "name": "또가스", "nameEn": "Koffing", "category": "trash", "fast": [], "charged": [], "note": "또가스 → 또도가스" },
    { "name": "또도가스", "nameEn": "Weezing", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "뿔카노", "nameEn": "Rhyhorn", "category": "dex", "fast": [], "charged": [], "note": "뿔카노 → 코뿌리 → 거대코뿌리 (바위/땅 어태커)" },
    { "name": "코뿌리", "nameEn": "Rhydon", "category": "dex", "fast": [], "charged": [], "note": "뿔카노 → 코뿌리 → 거대코뿌리" },
    { "name": "럭키", "nameEn": "Chansey", "category": "dex", "fast": [], "charged": [], "note": "핑복 → 럭키 → 해피너스 (탱커)" },
    { "name": "덩쿠리", "nameEn": "Tangela", "category": "dex", "fast": [], "charged": [], "note": "덩쿠리 → 덩쿠림보 (풀 탱커)" },
    { "name": "캥카", "nameEn": "Kangaskhan", "category": "dex", "fast": [], "charged": [], "note": "오세아니아 지역한정, 메가 진화 가능" },
    { "name": "쏘드라", "nameEn": "Horsea", "category": "dex", "fast": [], "charged": [], "note": "쏘드라 → 시드라 → 킹드라 (용의비늘)" },
    { "name": "시드라", "nameEn": "Seadra", "category": "dex", "fast": [], "charged": [], "note": "쏘드라 → 시드라 → 킹드라" },
    { "name": "콘치", "nameEn": "Goldeen", "category": "trash", "fast": [], "charged": [], "note": "콘치 → 왕콘치" },
    { "name": "왕콘치", "nameEn": "Seaking", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "별가사리", "nameEn": "Staryu", "category": "trash", "fast": [], "charged": [], "note": "별가사리 → 아쿠스타" },
    { "name": "아쿠스타", "nameEn": "Starmie", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "마임맨", "nameEn": "Mr. Mime", "category": "dex", "fast": [], "charged": [], "note": "유럽 지역한정, 마임꼬 → 마임맨" },
    { "name": "스라크", "nameEn": "Scyther", "category": "dex", "fast": [], "charged": [], "note": "스라크 → 핫삼 (메탈코트, competitive)" },
    { "name": "루주라", "nameEn": "Jynx", "category": "dex", "fast": [], "charged": [], "note": "뽀뽀라 → 루주라 (얼음/에스퍼)" },
    { "name": "에레브", "nameEn": "Electabuzz", "category": "dex", "fast": [], "charged": [], "note": "에레키드 → 에레브 → 에레키블 (전기 어태커)" },
    { "name": "마그마", "nameEn": "Magmar", "category": "dex", "fast": [], "charged": [], "note": "마그비 → 마그마 → 마그마번" },
    { "name": "켄타로스", "nameEn": "Tauros", "category": "dex", "fast": [], "charged": [], "note": "북미 지역한정" },
    { "name": "잉어킹", "nameEn": "Magikarp", "category": "dex", "fast": [], "charged": [], "note": "잉어킹 → 갸라도스 (사탕 400개, 물 어태커/PvP)" },
    { "name": "메타몽", "nameEn": "Ditto", "category": "dex", "fast": [], "charged": [], "note": "교배용, 특수 리서치 필요" },
    { "name": "이브이", "nameEn": "Eevee", "category": "dex", "fast": [], "charged": [], "note": "8종 진화 가능, 모든 진화형 도감 등록" },
    { "name": "샤미드", "nameEn": "Vaporeon", "category": "dex", "fast": [], "charged": [], "note": "이브이 → 샤미드 (물)" },
    { "name": "쥬피썬더", "nameEn": "Jolteon", "category": "dex", "fast": [], "charged": [], "note": "이브이 → 쥬피썬더 (전기)" },
    { "name": "부스터", "nameEn": "Flareon", "category": "dex", "fast": [], "charged": [], "note": "이브이 → 부스터 (불꽃)" },
    { "name": "폴리곤", "nameEn": "Porygon", "category": "dex", "fast": [], "charged": [], "note": "폴리곤 → 폴리곤2 → 폴리곤Z (업그레이드/수상한패치)" },
    { "name": "폴리곤2", "nameEn": "Porygon2", "category": "dex", "fast": [], "charged": [], "note": "폴리곤 → 폴리곤2 → 폴리곤Z" },
    { "name": "암나이트", "nameEn": "Omanyte", "category": "dex", "fast": [], "charged": [], "note": "암나이트 → 암스타 (화석)" },
    { "name": "암스타", "nameEn": "Omastar", "category": "dex", "fast": [], "charged": [], "note": "바위/물, 화석 포켓몬" },
    { "name": "투구", "nameEn": "Kabuto", "category": "dex", "fast": [], "charged": [], "note": "투구 → 투구푸스 (화석)" },
    { "name": "투구푸스", "nameEn": "Kabutops", "category": "dex", "fast": [], "charged": [], "note": "바위/물, 화석 포켓몬" },
    { "name": "프테라", "nameEn": "Aerodactyl", "category": "dex", "fast": [], "charged": [], "note": "바위/비행, 메가 진화 가능" },
    { "name": "프리져", "nameEn": "Articuno", "category": "dex", "fast": [], "charged": [], "note": "전설, 얼음/비행" },
    { "name": "썬더", "nameEn": "Zapdos", "category": "dex", "fast": [], "charged": [], "note": "전설, 전기/비행" },
    { "name": "미뇽", "nameEn": "Dratini", "category": "dex", "fast": [], "charged": [], "note": "미뇽 → 신뇽 → 망나뇽 (드래곤 어태커)" },
    { "name": "신뇽", "nameEn": "Dragonair", "category": "dex", "fast": [], "charged": [], "note": "미뇽 → 신뇽 → 망나뇽" },

    // ===== Gen 2 (#152-251) 도감/버림 =====
    { "name": "치코리타", "nameEn": "Chikorita", "category": "dex", "fast": [], "charged": [], "note": "치코리타 → 베이리프 → 메가니움" },
    { "name": "베이리프", "nameEn": "Bayleef", "category": "dex", "fast": [], "charged": [], "note": "치코리타 → 베이리프 → 메가니움" },
    { "name": "메가니움", "nameEn": "Meganium", "category": "dex", "fast": [], "charged": [], "note": "풀, 커뮤데이 무브 하드플랜트" },
    { "name": "브케인", "nameEn": "Cyndaquil", "category": "dex", "fast": [], "charged": [], "note": "브케인 → 마그케인 → 블레이범" },
    { "name": "마그케인", "nameEn": "Quilava", "category": "dex", "fast": [], "charged": [], "note": "브케인 → 마그케인 → 블레이범" },
    { "name": "블레이범", "nameEn": "Typhlosion", "category": "dex", "fast": [], "charged": [], "note": "불꽃, 커뮤데이 무브 블라스트번" },
    { "name": "리아코", "nameEn": "Totodile", "category": "dex", "fast": [], "charged": [], "note": "리아코 → 엘리게이 → 장크로다일 (물 어태커)" },
    { "name": "엘리게이", "nameEn": "Croconaw", "category": "dex", "fast": [], "charged": [], "note": "리아코 → 엘리게이 → 장크로다일" },
    { "name": "꼬리선", "nameEn": "Sentret", "category": "trash", "fast": [], "charged": [], "note": "꼬리선 → 다꼬리" },
    { "name": "다꼬리", "nameEn": "Furret", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "부우부", "nameEn": "Hoothoot", "category": "dex", "fast": [], "charged": [], "note": "부우부 → 야부엉 (PvP 탱커)" },
    { "name": "레디바", "nameEn": "Ledyba", "category": "trash", "fast": [], "charged": [], "note": "레디바 → 레디안" },
    { "name": "레디안", "nameEn": "Ledian", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "페이검", "nameEn": "Spinarak", "category": "trash", "fast": [], "charged": [], "note": "페이검 → 아리아도스" },
    { "name": "아리아도스", "nameEn": "Ariados", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "초라기", "nameEn": "Chinchou", "category": "dex", "fast": [], "charged": [], "note": "초라기 → 란턴 (물/전기 PvP)" },
    { "name": "피츄", "nameEn": "Pichu", "category": "dex", "fast": [], "charged": [], "note": "베이비, 피츄 → 피카츄 → 라이츄" },
    { "name": "삐", "nameEn": "Cleffa", "category": "dex", "fast": [], "charged": [], "note": "베이비, 삐 → 삐삐 → 픽시" },
    { "name": "푸푸린", "nameEn": "Igglybuff", "category": "dex", "fast": [], "charged": [], "note": "베이비, 푸푸린 → 푸린 → 푸크린" },
    { "name": "토게피", "nameEn": "Togepi", "category": "dex", "fast": [], "charged": [], "note": "베이비, 토게피 → 토게틱 → 토게키스 (페어리)" },
    { "name": "토게틱", "nameEn": "Togetic", "category": "dex", "fast": [], "charged": [], "note": "토게피 → 토게틱 → 토게키스" },
    { "name": "네이티", "nameEn": "Natu", "category": "trash", "fast": [], "charged": [], "note": "네이티 → 네이티오" },
    { "name": "네이티오", "nameEn": "Xatu", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "메리프", "nameEn": "Mareep", "category": "dex", "fast": [], "charged": [], "note": "메리프 → 보우양 → 전룡 (메가 진화)" },
    { "name": "보우양", "nameEn": "Flaaffy", "category": "dex", "fast": [], "charged": [], "note": "메리프 → 보우양 → 전룡" },
    { "name": "아르코", "nameEn": "Bellossom", "category": "dex", "fast": [], "charged": [], "note": "냄새꼬 → 아르코 (태양의돌)" },
    { "name": "마릴", "nameEn": "Marill", "category": "dex", "fast": [], "charged": [], "note": "루리리 → 마릴 → 마릴리 (슈퍼리그 최강)" },
    { "name": "꼬지모", "nameEn": "Sudowoodo", "category": "dex", "fast": [], "charged": [], "note": "우소하치 → 꼬지모 (바위)" },
    { "name": "통통코", "nameEn": "Hoppip", "category": "trash", "fast": [], "charged": [], "note": "통통코 → 두코 → 솜솜코" },
    { "name": "두코", "nameEn": "Skiploom", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "솜솜코", "nameEn": "Jumpluff", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "에이팜", "nameEn": "Aipom", "category": "dex", "fast": [], "charged": [], "note": "에이팜 → 겟핸보숭 (Gen4 진화)" },
    { "name": "해너츠", "nameEn": "Sunkern", "category": "trash", "fast": [], "charged": [], "note": "해너츠 → 해루미 (태양의돌)" },
    { "name": "해루미", "nameEn": "Sunflora", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "왕자리", "nameEn": "Yanma", "category": "dex", "fast": [], "charged": [], "note": "왕자리 → 메가자리 (Gen4 진화)" },
    { "name": "우파", "nameEn": "Wooper", "category": "dex", "fast": [], "charged": [], "note": "우파 → 누오 (물/땅 PvP)" },
    { "name": "에브이", "nameEn": "Espeon", "category": "dex", "fast": [], "charged": [], "note": "이브이 → 에브이 (에스퍼)" },
    { "name": "니로우", "nameEn": "Murkrow", "category": "dex", "fast": [], "charged": [], "note": "니로우 → 돈크로우 (Gen4, 어둠의돌)" },
    { "name": "무우마", "nameEn": "Misdreavus", "category": "dex", "fast": [], "charged": [], "note": "무우마 → 무우마직 (어둠의돌)" },
    { "name": "안농", "nameEn": "Unown", "category": "dex", "fast": [], "charged": [], "note": "28종 폼, 매우 희귀, 수집용" },
    { "name": "소시지", "nameEn": "Wobbuffet", "category": "dex", "fast": [], "charged": [], "note": "마자용 → 소시지 (에스퍼)" },
    { "name": "키링키", "nameEn": "Girafarig", "category": "dex", "fast": [], "charged": [], "note": "키링키 → 리링키 (Gen9 진화)" },
    { "name": "피콘", "nameEn": "Pineco", "category": "dex", "fast": [], "charged": [], "note": "피콘 → 쏘콘 (벌레/강철)" },
    { "name": "노고치", "nameEn": "Dunsparce", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "글라이거", "nameEn": "Gligar", "category": "dex", "fast": [], "charged": [], "note": "글라이거 → 글라이온 (Gen4 진화, PvP)" },
    { "name": "블루", "nameEn": "Snubbull", "category": "dex", "fast": [], "charged": [], "note": "블루 → 그랑블루 (페어리)" },
    { "name": "침바루", "nameEn": "Qwilfish", "category": "trash", "fast": [], "charged": [], "note": "물/독" },
    { "name": "단단지", "nameEn": "Shuckle", "category": "trash", "fast": [], "charged": [], "note": "극방어, 실전 불가" },
    { "name": "포푸니", "nameEn": "Sneasel", "category": "dex", "fast": [], "charged": [], "note": "포푸니 → 포푸니르 (Gen4, 날카로운손톱)" },
    { "name": "깜지곰", "nameEn": "Teddiursa", "category": "dex", "fast": [], "charged": [], "note": "깜지곰 → 링곰 → 다투곰 (Gen8 진화)" },
    { "name": "링곰", "nameEn": "Ursaring", "category": "dex", "fast": [], "charged": [], "note": "깜지곰 → 링곰 → 다투곰" },
    { "name": "마그마그", "nameEn": "Slugma", "category": "trash", "fast": [], "charged": [], "note": "마그마그 → 마그카르고" },
    { "name": "마그카르고", "nameEn": "Magcargo", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "꾸꾸리", "nameEn": "Swinub", "category": "dex", "fast": [], "charged": [], "note": "꾸꾸리 → 메꾸리 → 맘모꾸리 (얼음/땅 어태커)" },
    { "name": "메꾸리", "nameEn": "Piloswine", "category": "dex", "fast": [], "charged": [], "note": "꾸꾸리 → 메꾸리 → 맘모꾸리" },
    { "name": "코산호", "nameEn": "Corsola", "category": "trash", "fast": [], "charged": [], "note": "물/바위" },
    { "name": "총어", "nameEn": "Remoraid", "category": "trash", "fast": [], "charged": [], "note": "총어 → 대포무노" },
    { "name": "대포무노", "nameEn": "Octillery", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "딜리버드", "nameEn": "Delibird", "category": "trash", "fast": [], "charged": [], "note": "얼음/비행" },
    { "name": "델빌", "nameEn": "Houndour", "category": "dex", "fast": [], "charged": [], "note": "델빌 → 헬가 (악/불꽃, 메가)" },
    { "name": "코코리", "nameEn": "Phanpy", "category": "dex", "fast": [], "charged": [], "note": "코코리 → 코리갑 (땅)" },
    { "name": "코리갑", "nameEn": "Donphan", "category": "dex", "fast": [], "charged": [], "note": "땅, 준수한 성능" },
    { "name": "노라키", "nameEn": "Stantler", "category": "dex", "fast": [], "charged": [], "note": "노라키 → 쁘사이링 (히스이 진화)" },
    { "name": "루브도", "nameEn": "Smeargle", "category": "dex", "fast": [], "charged": [], "note": "GO 스냅샷으로만 획득, 희귀" },
    { "name": "배루키", "nameEn": "Tyrogue", "category": "dex", "fast": [], "charged": [], "note": "베이비, 배루키 → 시라소몬/홍수몬/카포에라" },
    { "name": "카포에라", "nameEn": "Hitmontop", "category": "dex", "fast": [], "charged": [], "note": "배루키 → 카포에라 (격투)" },
    { "name": "뽀뽀라", "nameEn": "Smoochum", "category": "dex", "fast": [], "charged": [], "note": "베이비, 뽀뽀라 → 루주라" },
    { "name": "에레키드", "nameEn": "Elekid", "category": "dex", "fast": [], "charged": [], "note": "베이비, 에레키드 → 에레브 → 에레키블" },
    { "name": "마그비", "nameEn": "Magby", "category": "dex", "fast": [], "charged": [], "note": "베이비, 마그비 → 마그마 → 마그마번" },
    { "name": "밀탱크", "nameEn": "Miltank", "category": "trash", "fast": [], "charged": [], "note": "노말, 진화 없음" },
    { "name": "스이쿤", "nameEn": "Suicune", "category": "dex", "fast": [], "charged": [], "note": "전설, 물, 수집용" },
    { "name": "애버라스", "nameEn": "Larvitar", "category": "dex", "fast": [], "charged": [], "note": "애버라스 → 데기라스 → 마기라스 (바위/악 어태커)" },
    { "name": "데기라스", "nameEn": "Pupitar", "category": "dex", "fast": [], "charged": [], "note": "애버라스 → 데기라스 → 마기라스" },
    { "name": "세레비", "nameEn": "Celebi", "category": "dex", "fast": [], "charged": [], "note": "환상 포켓몬, 풀/에스퍼, 스페셜 리서치" },

    // ===== Gen 3 (#252-386) 도감/버림 =====
    { "name": "나무지기", "nameEn": "Treecko", "category": "dex", "fast": [], "charged": [], "note": "나무지기 → 나무돌이 → 나무킹 (풀 어태커)" },
    { "name": "나무돌이", "nameEn": "Grovyle", "category": "dex", "fast": [], "charged": [], "note": "나무지기 → 나무돌이 → 나무킹" },
    { "name": "아차모", "nameEn": "Torchic", "category": "dex", "fast": [], "charged": [], "note": "아차모 → 영치코 → 번치코 (격투/불꽃)" },
    { "name": "영치코", "nameEn": "Combusken", "category": "dex", "fast": [], "charged": [], "note": "아차모 → 영치코 → 번치코" },
    { "name": "물짱이", "nameEn": "Mudkip", "category": "dex", "fast": [], "charged": [], "note": "물짱이 → 늪짱이 → 대짱이 (물/땅)" },
    { "name": "늪짱이", "nameEn": "Marshtomp", "category": "dex", "fast": [], "charged": [], "note": "물짱이 → 늪짱이 → 대짱이" },
    { "name": "포챠나", "nameEn": "Poochyena", "category": "trash", "fast": [], "charged": [], "note": "포챠나 → 그라에나" },
    { "name": "그라에나", "nameEn": "Mightyena", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "지그제구리", "nameEn": "Zigzagoon", "category": "trash", "fast": [], "charged": [], "note": "지그제구리 → 직구리" },
    { "name": "직구리", "nameEn": "Linoone", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "개무소", "nameEn": "Wurmple", "category": "trash", "fast": [], "charged": [], "note": "개무소 → 실쿤/카스쿤 (랜덤)" },
    { "name": "실쿤", "nameEn": "Silcoon", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "뷰티플라이", "nameEn": "Beautifly", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "카스쿤", "nameEn": "Cascoon", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "독케일", "nameEn": "Dustox", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "연꽃몬", "nameEn": "Lotad", "category": "dex", "fast": [], "charged": [], "note": "연꽃몬 → 로토스 → 루디꼴로" },
    { "name": "로토스", "nameEn": "Lombre", "category": "dex", "fast": [], "charged": [], "note": "연꽃몬 → 로토스 → 루디꼴로" },
    { "name": "루디꼴로", "nameEn": "Ludicolo", "category": "dex", "fast": [], "charged": [], "note": "물/풀, 간혹 PvP 사용" },
    { "name": "도토리", "nameEn": "Seedot", "category": "trash", "fast": [], "charged": [], "note": "도토리 → 잎새코 → 다탱구" },
    { "name": "잎새코", "nameEn": "Nuzleaf", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "다탱구", "nameEn": "Shiftry", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "테일로", "nameEn": "Taillow", "category": "trash", "fast": [], "charged": [], "note": "테일로 → 스왈로" },
    { "name": "스왈로", "nameEn": "Swellow", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "갈모매", "nameEn": "Wingull", "category": "dex", "fast": [], "charged": [], "note": "갈모매 → 패리퍼 (물/비행 PvP)" },
    { "name": "랄토스", "nameEn": "Ralts", "category": "dex", "fast": [], "charged": [], "note": "랄토스 → 킬리아 → 가디안/엘레이드 (에스퍼/페어리)" },
    { "name": "킬리아", "nameEn": "Kirlia", "category": "dex", "fast": [], "charged": [], "note": "랄토스 → 킬리아 → 가디안 or 엘레이드" },
    { "name": "비구술", "nameEn": "Surskit", "category": "trash", "fast": [], "charged": [], "note": "비구술 → 비나방" },
    { "name": "비나방", "nameEn": "Masquerain", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "버섯꼬", "nameEn": "Shroomish", "category": "dex", "fast": [], "charged": [], "note": "버섯꼬 → 버섯모 (풀/격투)" },
    { "name": "버섯모", "nameEn": "Breloom", "category": "dex", "fast": [], "charged": [], "note": "풀/격투, 카운터 어태커" },
    { "name": "게을로", "nameEn": "Slakoth", "category": "dex", "fast": [], "charged": [], "note": "게을로 → 발바로 → 게을킹" },
    { "name": "게을킹", "nameEn": "Slaking", "category": "dex", "fast": [], "charged": [], "note": "높은 CP지만 하품이 치명적, 체육관용" },
    { "name": "토중몬", "nameEn": "Nincada", "category": "dex", "fast": [], "charged": [], "note": "토중몬 → 아이스크 / 껍질몬 (특수)" },
    { "name": "아이스크", "nameEn": "Ninjask", "category": "dex", "fast": [], "charged": [], "note": "벌레/비행" },
    { "name": "껍질몬", "nameEn": "Shedinja", "category": "dex", "fast": [], "charged": [], "note": "HP 1, 리서치 보상 한정" },
    { "name": "소곤룡", "nameEn": "Whismur", "category": "trash", "fast": [], "charged": [], "note": "소곤룡 → 노공룡 → 폭음룡" },
    { "name": "노공룡", "nameEn": "Loudred", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "폭음룡", "nameEn": "Exploud", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "마크탕", "nameEn": "Makuhita", "category": "dex", "fast": [], "charged": [], "note": "마크탕 → 하리뭉 (격투 PvP)" },
    { "name": "루리리", "nameEn": "Azurill", "category": "dex", "fast": [], "charged": [], "note": "베이비, 루리리 → 마릴 → 마릴리" },
    { "name": "코코파스", "nameEn": "Nosepass", "category": "dex", "fast": [], "charged": [], "note": "코코파스 → 대코파스 (자기 루어)" },
    { "name": "에나비", "nameEn": "Skitty", "category": "trash", "fast": [], "charged": [], "note": "에나비 → 델케티 (달의돌)" },
    { "name": "델케티", "nameEn": "Delcatty", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "입치트", "nameEn": "Mawile", "category": "dex", "fast": [], "charged": [], "note": "강철/페어리, 레이드 한정" },
    { "name": "가보리", "nameEn": "Aron", "category": "dex", "fast": [], "charged": [], "note": "가보리 → 갱도라 → 보스로라" },
    { "name": "갱도라", "nameEn": "Lairon", "category": "dex", "fast": [], "charged": [], "note": "가보리 → 갱도라 → 보스로라" },
    { "name": "보스로라", "nameEn": "Aggron", "category": "dex", "fast": [], "charged": [], "note": "강철/바위, 메가 진화 가능" },
    { "name": "요가람", "nameEn": "Meditite", "category": "dex", "fast": [], "charged": [], "note": "요가람 → 요가램 (격투/에스퍼 PvP)" },
    { "name": "썬더라이", "nameEn": "Electrike", "category": "trash", "fast": [], "charged": [], "note": "썬더라이 → 썬더볼트" },
    { "name": "썬더볼트", "nameEn": "Manectric", "category": "trash", "fast": [], "charged": [], "note": "메가 진화 가능하지만 성능 부족" },
    { "name": "플러시", "nameEn": "Plusle", "category": "trash", "fast": [], "charged": [], "note": "전기" },
    { "name": "마이농", "nameEn": "Minun", "category": "trash", "fast": [], "charged": [], "note": "전기" },
    { "name": "볼비트", "nameEn": "Volbeat", "category": "trash", "fast": [], "charged": [], "note": "지역한정" },
    { "name": "네온비트", "nameEn": "Illumise", "category": "trash", "fast": [], "charged": [], "note": "지역한정" },
    { "name": "로젤리아", "nameEn": "Roselia", "category": "dex", "fast": [], "charged": [], "note": "꼬몽울 → 로젤리아 → 로즈레이드 (풀/독)" },
    { "name": "꿀꺽몬", "nameEn": "Gulpin", "category": "trash", "fast": [], "charged": [], "note": "꿀꺽몬 → 꿀떡몬" },
    { "name": "꿀떡몬", "nameEn": "Swalot", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "샤프니아", "nameEn": "Carvanha", "category": "trash", "fast": [], "charged": [], "note": "샤프니아 → 샤크니아" },
    { "name": "샤크니아", "nameEn": "Sharpedo", "category": "trash", "fast": [], "charged": [], "note": "물/악, 공격 높지만 방어 최악" },
    { "name": "고래왕자", "nameEn": "Wailmer", "category": "dex", "fast": [], "charged": [], "note": "고래왕자 → 고래왕 (사탕 400개)" },
    { "name": "고래왕", "nameEn": "Wailord", "category": "dex", "fast": [], "charged": [], "note": "사탕 400개, 도감 등록용" },
    { "name": "둔타", "nameEn": "Numel", "category": "trash", "fast": [], "charged": [], "note": "둔타 → 폭타" },
    { "name": "폭타", "nameEn": "Camerupt", "category": "trash", "fast": [], "charged": [], "note": "불꽃/땅" },
    { "name": "코터스", "nameEn": "Torkoal", "category": "dex", "fast": [], "charged": [], "note": "인도/동남아 지역한정" },
    { "name": "스포잉", "nameEn": "Spoink", "category": "trash", "fast": [], "charged": [], "note": "스포잉 → 피그킹" },
    { "name": "피그킹", "nameEn": "Grumpig", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "얼루기", "nameEn": "Spinda", "category": "dex", "fast": [], "charged": [], "note": "다양한 패턴, 필드리서치 한정" },
    { "name": "트랩피치", "nameEn": "Trapinch", "category": "dex", "fast": [], "charged": [], "note": "트랩피치 → 비브라바 → 플라이곤 (땅/드래곤)" },
    { "name": "비브라바", "nameEn": "Vibrava", "category": "dex", "fast": [], "charged": [], "note": "트랩피치 → 비브라바 → 플라이곤" },
    { "name": "선인왕", "nameEn": "Cacnea", "category": "trash", "fast": [], "charged": [], "note": "선인왕 → 밤선인" },
    { "name": "밤선인", "nameEn": "Cacturne", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "파비코", "nameEn": "Swablu", "category": "dex", "fast": [], "charged": [], "note": "파비코 → 파비코리 (사탕 400개, 드래곤/비행)" },
    { "name": "쟝고", "nameEn": "Zangoose", "category": "trash", "fast": [], "charged": [], "note": "지역한정" },
    { "name": "세비퍼", "nameEn": "Seviper", "category": "trash", "fast": [], "charged": [], "note": "지역한정" },
    { "name": "루나톤", "nameEn": "Lunatone", "category": "trash", "fast": [], "charged": [], "note": "지역한정 (반구별)" },
    { "name": "솔록", "nameEn": "Solrock", "category": "trash", "fast": [], "charged": [], "note": "지역한정 (반구별)" },
    { "name": "미꾸리", "nameEn": "Barboach", "category": "dex", "fast": [], "charged": [], "note": "미꾸리 → 메깅 (물/땅 PvP)" },
    { "name": "가재장군", "nameEn": "Corphish", "category": "trash", "fast": [], "charged": [], "note": "가재장군 → 가재보스" },
    { "name": "가재보스", "nameEn": "Crawdaunt", "category": "trash", "fast": [], "charged": [], "note": "물/악" },
    { "name": "오뚝군", "nameEn": "Baltoy", "category": "trash", "fast": [], "charged": [], "note": "오뚝군 → 점토도리" },
    { "name": "점토도리", "nameEn": "Claydol", "category": "trash", "fast": [], "charged": [], "note": "땅/에스퍼" },
    { "name": "릴링", "nameEn": "Lileep", "category": "dex", "fast": [], "charged": [], "note": "릴링 → 릴리요 (화석)" },
    { "name": "릴리요", "nameEn": "Cradily", "category": "dex", "fast": [], "charged": [], "note": "바위/풀, 화석 포켓몬" },
    { "name": "아노딥스", "nameEn": "Anorith", "category": "dex", "fast": [], "charged": [], "note": "아노딥스 → 아말도 (화석)" },
    { "name": "아말도", "nameEn": "Armaldo", "category": "dex", "fast": [], "charged": [], "note": "바위/벌레, 화석 포켓몬" },
    { "name": "빈티나", "nameEn": "Feebas", "category": "dex", "fast": [], "charged": [], "note": "빈티나 → 밀로틱 (사탕+걷기 20km)" },
    { "name": "밀로틱", "nameEn": "Milotic", "category": "dex", "fast": [], "charged": [], "note": "물, 준수한 PvP 탱커" },
    { "name": "캐스퐁", "nameEn": "Castform", "category": "trash", "fast": [], "charged": [], "note": "날씨별 폼, 수집용" },
    { "name": "켈리몬", "nameEn": "Kecleon", "category": "dex", "fast": [], "charged": [], "note": "노말, 포켓스톱 특수 출현" },
    { "name": "어둠대신", "nameEn": "Shuppet", "category": "trash", "fast": [], "charged": [], "note": "어둠대신 → 다크펫" },
    { "name": "다크펫", "nameEn": "Banette", "category": "trash", "fast": [], "charged": [], "note": "고스트, 메가 있지만 성능 부족" },
    { "name": "해골몽", "nameEn": "Duskull", "category": "dex", "fast": [], "charged": [], "note": "해골몽 → 미라몽 → 야느와르몽 (Gen4)" },
    { "name": "미라몽", "nameEn": "Dusclops", "category": "dex", "fast": [], "charged": [], "note": "해골몽 → 미라몽 → 야느와르몽" },
    { "name": "트로피우스", "nameEn": "Tropius", "category": "dex", "fast": [], "charged": [], "note": "아프리카/지중해 지역한정, 풀/비행" },
    { "name": "치렁", "nameEn": "Chimecho", "category": "dex", "fast": [], "charged": [], "note": "링딸랑 → 치렁 (에스퍼)" },
    { "name": "마자용", "nameEn": "Wynaut", "category": "dex", "fast": [], "charged": [], "note": "베이비, 마자용 → 소시지" },
    { "name": "눈꼬마", "nameEn": "Snorunt", "category": "dex", "fast": [], "charged": [], "note": "눈꼬마 → 얼음귀신 / 눈여아 (♀만)" },
    { "name": "대굴레오", "nameEn": "Spheal", "category": "dex", "fast": [], "charged": [], "note": "대굴레오 → 씨레오 → 월루프 (얼음/물 PvP)" },
    { "name": "씨레오", "nameEn": "Sealeo", "category": "dex", "fast": [], "charged": [], "note": "대굴레오 → 씨레오 → 월루프" },
    { "name": "진주몽", "nameEn": "Clamperl", "category": "dex", "fast": [], "charged": [], "note": "진주몽 → 헌테일/분홍장이 (랜덤)" },
    { "name": "헌테일", "nameEn": "Huntail", "category": "dex", "fast": [], "charged": [], "note": "진주몽 → 헌테일 (물)" },
    { "name": "분홍장이", "nameEn": "Gorebyss", "category": "dex", "fast": [], "charged": [], "note": "진주몽 → 분홍장이 (물)" },
    { "name": "시라칸", "nameEn": "Relicanth", "category": "dex", "fast": [], "charged": [], "note": "뉴질랜드 지역한정, 바위/물" },
    { "name": "사랑동이", "nameEn": "Luvdisc", "category": "trash", "fast": [], "charged": [], "note": "물, 진화 없음" },
    { "name": "아공이", "nameEn": "Bagon", "category": "dex", "fast": [], "charged": [], "note": "아공이 → 셀라 → 보만다 (드래곤/비행 어태커)" },
    { "name": "셀라", "nameEn": "Shelgon", "category": "dex", "fast": [], "charged": [], "note": "아공이 → 셀라 → 보만다" },
    { "name": "메탕", "nameEn": "Beldum", "category": "dex", "fast": [], "charged": [], "note": "메탕 → 메탕구 → 메타그로스 (강철/에스퍼)" },
    { "name": "메탕구", "nameEn": "Metang", "category": "dex", "fast": [], "charged": [], "note": "메탕 → 메탕구 → 메타그로스" },
    { "name": "레지락", "nameEn": "Regirock", "category": "dex", "fast": [], "charged": [], "note": "전설, 바위, 레지 시리즈" },
    { "name": "레지아이스", "nameEn": "Regice", "category": "dex", "fast": [], "charged": [], "note": "전설, 얼음, 레지 시리즈" },
    { "name": "지라치", "nameEn": "Jirachi", "category": "dex", "fast": [], "charged": [], "note": "환상 포켓몬, 강철/에스퍼, 스페셜 리서치" },
    { "name": "테오키스", "nameEn": "Deoxys", "category": "dex", "fast": [], "charged": [], "note": "환상 포켓몬, 4가지 폼, 디펜스폼 PvP 사용" },

    // ===== 4세대 (신오, #387-493) Dex / Trash =====
    // --- 스타터 (토대부기/엠페르트는 competitive에 등록) ---
    { "name": "모꼬리", "nameEn": "Turtwig", "category": "dex", "fast": [], "charged": [], "note": "모꼬리 → 수풀부기 → 토대부기" },
    { "name": "수풀부기", "nameEn": "Grotle", "category": "dex", "fast": [], "charged": [], "note": "모꼬리 → 수풀부기 → 토대부기" },
    { "name": "불꽃숭이", "nameEn": "Chimchar", "category": "dex", "fast": [], "charged": [], "note": "불꽃숭이 → 파이숭이 → 초염몽" },
    { "name": "파이숭이", "nameEn": "Monferno", "category": "dex", "fast": [], "charged": [], "note": "불꽃숭이 → 파이숭이 → 초염몽" },
    { "name": "초염몽", "nameEn": "Infernape", "category": "dex", "fast": [], "charged": [], "note": "불꽃숭이 최종 진화, 불꽃/격투" },
    { "name": "팽도리", "nameEn": "Piplup", "category": "dex", "fast": [], "charged": [], "note": "팽도리 → 팽태자 → 엠페르트" },
    { "name": "팽태자", "nameEn": "Prinplup", "category": "dex", "fast": [], "charged": [], "note": "팽도리 → 팽태자 → 엠페르트" },

    // --- 찌르꼬 라인 (찌르호크는 competitive) ---
    { "name": "찌르꼬", "nameEn": "Starly", "category": "trash", "fast": [], "charged": [], "note": "매우 흔함" },
    { "name": "찌르버드", "nameEn": "Staravia", "category": "trash", "fast": [], "charged": [], "note": "찌르호크 육성 완료 시 전송" },

    // --- 비버니 라인 ---
    { "name": "비버니", "nameEn": "Bidoof", "category": "trash", "fast": [], "charged": [], "note": "매우 흔함" },
    { "name": "비버통", "nameEn": "Bibarel", "category": "trash", "fast": [], "charged": [], "note": "" },

    // --- 귀뚤뚜기 라인 ---
    { "name": "귀뚤뚜기", "nameEn": "Kricketot", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "귀뚤톡크", "nameEn": "Kricketune", "category": "trash", "fast": [], "charged": [], "note": "" },

    // --- 꼬링크 라인 (렌트라는 competitive) ---
    { "name": "꼬링크", "nameEn": "Shinx", "category": "dex", "fast": [], "charged": [], "note": "꼬링크 → 럭시오 → 렌트라" },
    { "name": "럭시오", "nameEn": "Luxio", "category": "dex", "fast": [], "charged": [], "note": "꼬링크 → 럭시오 → 렌트라" },

    // --- 꼬몽울 (베이비, 로즈레이드는 competitive) ---
    { "name": "꼬몽울", "nameEn": "Budew", "category": "dex", "fast": [], "charged": [], "note": "꼬몽울 → 로젤리아 → 로즈레이드 (베이비)" },

    // --- 두루미/램펄드 (램펄드는 competitive) ---
    { "name": "두루미", "nameEn": "Cranidos", "category": "dex", "fast": [], "charged": [], "note": "두루미 → 램펄드 (희귀 화석)" },

    // --- 방패톱스 (투구푸스는 competitive) ---
    { "name": "방패톱스", "nameEn": "Shieldon", "category": "dex", "fast": [], "charged": [], "note": "방패톱스 → 투구푸스 (희귀 화석)" },

    // --- 도롱충이 라인 ---
    { "name": "도롱충이", "nameEn": "Burmy", "category": "dex", "fast": [], "charged": [], "note": "도롱충이 → 도롱마담(♀)/나메일(♂), 3가지 폼" },
    { "name": "도롱마담", "nameEn": "Wormadam", "category": "dex", "fast": [], "charged": [], "note": "도롱충이(♀) 진화, 3가지 폼" },
    { "name": "나메일", "nameEn": "Mothim", "category": "dex", "fast": [], "charged": [], "note": "도롱충이(♂) 진화" },

    // --- 세꿀버리 라인 ---
    { "name": "세꿀버리", "nameEn": "Combee", "category": "dex", "fast": [], "charged": [], "note": "암컷만 비퀸으로 진화" },
    { "name": "비퀸", "nameEn": "Vespiquen", "category": "dex", "fast": [], "charged": [], "note": "세꿀버리(♀) → 비퀸" },

    // --- 체리버 라인 ---
    { "name": "체리버", "nameEn": "Cherubi", "category": "dex", "fast": [], "charged": [], "note": "체리버 → 체리꼬 (희귀)" },
    { "name": "체리꼬", "nameEn": "Cherrim", "category": "dex", "fast": [], "charged": [], "note": "양지폼/음지폼" },

    // --- 깝질무 라인 ---
    { "name": "깝질무", "nameEn": "Shellos", "category": "dex", "fast": [], "charged": [], "note": "동쪽/서쪽 폼, 깝질무 → 트리토돈" },
    { "name": "트리토돈", "nameEn": "Gastrodon", "category": "dex", "fast": [], "charged": [], "note": "동쪽/서쪽 폼, 물/땅" },

    // --- 에테보스 ---
    { "name": "에테보스", "nameEn": "Ambipom", "category": "dex", "fast": [], "charged": [], "note": "에이팜 → 에테보스" },

    // --- 흘림보디 (둥실라이드는 competitive) ---
    { "name": "흘림보디", "nameEn": "Drifloon", "category": "dex", "fast": [], "charged": [], "note": "흘림보디 → 둥실라이드" },

    // --- 이어롤 (이어롭/메가이어롭은 competitive) ---
    { "name": "이어롤", "nameEn": "Buneary", "category": "dex", "fast": [], "charged": [], "note": "이어롤 → 이어롭 (메가진화 가능)" },


    // --- 대포무노 ---
    { "name": "대포무노", "nameEn": "Honchkrow", "category": "dex", "fast": [], "charged": [], "note": "니로우 → 대포무노 (어둠의돌)" },

    // --- 나옹마 라인 ---
    { "name": "나옹마", "nameEn": "Glameow", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "몬냥이", "nameEn": "Purugly", "category": "trash", "fast": [], "charged": [], "note": "" },

    // --- 흉내내 (베이비) ---
    { "name": "흉내내", "nameEn": "Mime Jr.", "category": "dex", "fast": [], "charged": [], "note": "흉내내 → 마임맨 (베이비, 희귀)" },

    // --- 핑복 (베이비) ---
    { "name": "핑복", "nameEn": "Happiny", "category": "dex", "fast": [], "charged": [], "note": "핑복 → 럭키 → 해피너스 (베이비)" },

    // --- 챠밍 ---
    { "name": "챠밍", "nameEn": "Chatot", "category": "dex", "fast": [], "charged": [], "note": "지역한정 (남반구), 진화 없음" },

    // --- 스피아 ---
    { "name": "스피아", "nameEn": "Spiritomb", "category": "dex", "fast": [], "charged": [], "note": "희귀, 악/고스트" },

    // --- 턱지충이 라인 (한카리아스는 competitive) ---
    { "name": "턱지충이", "nameEn": "Gible", "category": "dex", "fast": [], "charged": [], "note": "턱지충이 → 한바이트 → 한카리아스" },
    { "name": "한바이트", "nameEn": "Gabite", "category": "dex", "fast": [], "charged": [], "note": "턱지충이 → 한바이트 → 한카리아스" },

    // --- 곤율거니 (드래피온은 competitive) ---
    { "name": "곤율거니", "nameEn": "Skorupi", "category": "dex", "fast": [], "charged": [], "note": "곤율거니 → 드래피온" },

    // --- 삐딱충이 (독개굴은 competitive) ---
    { "name": "삐딱충이", "nameEn": "Croagunk", "category": "dex", "fast": [], "charged": [], "note": "삐딱충이 → 독개굴" },

    // --- 무스틈니 ---
    { "name": "무스틈니", "nameEn": "Carnivine", "category": "dex", "fast": [], "charged": [], "note": "지역한정, 진화 없음" },

    // --- 핀프리 라인 ---
    { "name": "핀프리", "nameEn": "Finneon", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "네오라이트", "nameEn": "Lumineon", "category": "trash", "fast": [], "charged": [], "note": "" },

    // --- 스컹뿡 라인 ---
    { "name": "스컹뿡", "nameEn": "Stunky", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "스컹탱크", "nameEn": "Skuntank", "category": "trash", "fast": [], "charged": [], "note": "" },

    // --- 동미러 라인 ---
    { "name": "동미러", "nameEn": "Bronzor", "category": "dex", "fast": [], "charged": [], "note": "동미러 → 동탁군" },
    { "name": "동탁군", "nameEn": "Bronzong", "category": "dex", "fast": [], "charged": [], "note": "강철/에스퍼" },

    // --- 마네네 (베이비) ---
    { "name": "마네네", "nameEn": "Bonsly", "category": "dex", "fast": [], "charged": [], "note": "마네네 → 꼬지모 (베이비)" },

    // --- 흔들란 (베이비) ---
    { "name": "흔들란", "nameEn": "Chingling", "category": "dex", "fast": [], "charged": [], "note": "흔들란 → 치렁 (베이비)" },

    // --- 히포포타스 라인 ---
    { "name": "히포포타스", "nameEn": "Hippopotas", "category": "dex", "fast": [], "charged": [], "note": "히포포타스 → 하마돈" },
    { "name": "하마돈", "nameEn": "Hippowdon", "category": "dex", "fast": [], "charged": [], "note": "히포포타스 → 하마돈, 땅" },

    // --- 코리갑 (눈설왕은 competitive) ---
    { "name": "코리갑", "nameEn": "Snover", "category": "dex", "fast": [], "charged": [], "note": "코리갑 → 눈설왕" },

    // --- 리오르 (베이비, 루카리오는 competitive) ---
    { "name": "리오르", "nameEn": "Riolu", "category": "dex", "fast": [], "charged": [], "note": "리오르 → 루카리오 (베이비, 희귀)" },

    // --- 리피아 ---
    { "name": "리피아", "nameEn": "Leafeon", "category": "dex", "fast": [], "charged": [], "note": "이브이 → 리피아 (풀)" },

    // --- 마그마번 ---
    { "name": "마그마번", "nameEn": "Magmortar", "category": "dex", "fast": [], "charged": [], "note": "마그비 → 마그마 → 마그마번" },



    // --- 에레키블 (이미 competitive) ---
    // --- 글레이시아 (이미 competitive) ---
    // --- 맘모꿀 (이미 competitive) ---
    // --- 메타그로스 (이미 competitive) ---
    // --- 웨일로드 → 로즈레이드 등 기존 진화 체인 ---

    // --- 로토무 ---
    { "name": "로토무", "nameEn": "Rotom", "category": "dex", "fast": [], "charged": [], "note": "다양한 폼, 희귀" },

    // --- 유크시/엠리트/아그놈 ---
    { "name": "유크시", "nameEn": "Uxie", "category": "dex", "fast": [], "charged": [], "note": "전설, 지역한정 (아시아 태평양)" },
    { "name": "엠리트", "nameEn": "Mesprit", "category": "dex", "fast": [], "charged": [], "note": "전설, 지역한정 (유럽/중동/아프리카)" },
    { "name": "아그놈", "nameEn": "Azelf", "category": "dex", "fast": [], "charged": [], "note": "전설, 지역한정 (아메리카)" },

    // --- 레지기가스 ---
    { "name": "레지기가스", "nameEn": "Regigigas", "category": "dex", "fast": [], "charged": [], "note": "전설, EX레이드/특별연구" },

    // --- 피오네/마나피 ---
    { "name": "피오네", "nameEn": "Phione", "category": "dex", "fast": [], "charged": [], "note": "환상, 희귀" },
    { "name": "마나피", "nameEn": "Manaphy", "category": "dex", "fast": [], "charged": [], "note": "환상, 특별연구" },

    // --- 셰이미 ---
    { "name": "셰이미", "nameEn": "Shaymin", "category": "dex", "fast": [], "charged": [], "note": "환상, 랜드/스카이폼" },

    // --- 아르세우스 ---
    { "name": "아르세우스", "nameEn": "Arceus", "category": "dex", "fast": [], "charged": [], "note": "환상, 미구현/극희귀" },

    // ===== 5세대 (하나, #494-649) Dex / Trash =====
    // --- 비크티니 ---
    { "name": "비크티니", "nameEn": "Victini", "category": "dex", "fast": [], "charged": [], "note": "환상, 에스퍼/불꽃, 특별연구" },

    // --- 주리비얀 라인 ---
    { "name": "주리비얀", "nameEn": "Snivy", "category": "dex", "fast": [], "charged": [], "note": "주리비얀 → 서비퍼 → 샤로다" },
    { "name": "서비퍼", "nameEn": "Servine", "category": "dex", "fast": [], "charged": [], "note": "주리비얀 → 서비퍼 → 샤로다" },
    // 샤로다(Serperior)는 울트라리그에 등록됨

    // --- 뚜꾸리 라인 ---
    { "name": "뚜꾸리", "nameEn": "Tepig", "category": "dex", "fast": [], "charged": [], "note": "뚜꾸리 → 차오꿀 → 염무왕" },
    { "name": "차오꿀", "nameEn": "Pignite", "category": "dex", "fast": [], "charged": [], "note": "뚜꾸리 → 차오꿀 → 염무왕" },
    { "name": "염무왕", "nameEn": "Emboar", "category": "dex", "fast": [], "charged": [], "note": "불꽃/격투" },

    // --- 수댕이 라인 ---
    { "name": "수댕이", "nameEn": "Oshawott", "category": "dex", "fast": [], "charged": [], "note": "수댕이 → 쌍검자비 → 대검귀" },
    { "name": "쌍검자비", "nameEn": "Dewott", "category": "dex", "fast": [], "charged": [], "note": "수댕이 → 쌍검자비 → 대검귀" },
    { "name": "대검귀", "nameEn": "Samurott", "category": "dex", "fast": [], "charged": [], "note": "수댕이 최종 진화, 물" },

    // --- 보르쥐 라인 ---
    { "name": "보르쥐", "nameEn": "Patrat", "category": "trash", "fast": [], "charged": [], "note": "매우 흔함" },
    { "name": "보르그", "nameEn": "Watchog", "category": "trash", "fast": [], "charged": [], "note": "" },

    // --- 요테리 라인 ---
    { "name": "요테리", "nameEn": "Lillipup", "category": "trash", "fast": [], "charged": [], "note": "흔함" },
    { "name": "하데리어", "nameEn": "Herdier", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "바랑가", "nameEn": "Stoutland", "category": "trash", "fast": [], "charged": [], "note": "" },

    // --- 쌩뿔 라인 ---
    { "name": "쌩뿔", "nameEn": "Purrloin", "category": "trash", "fast": [], "charged": [], "note": "흔함" },
    { "name": "레파르다스", "nameEn": "Liepard", "category": "trash", "fast": [], "charged": [], "note": "" },

    // --- 원숭이 3종 라인 ---
    { "name": "야나프", "nameEn": "Pansage", "category": "trash", "fast": [], "charged": [], "note": "지역한정이었으나 흔함" },
    { "name": "야나키", "nameEn": "Simisage", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "바오프", "nameEn": "Pansear", "category": "trash", "fast": [], "charged": [], "note": "지역한정이었으나 흔함" },
    { "name": "바오키", "nameEn": "Simisear", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "앗차프", "nameEn": "Panpour", "category": "trash", "fast": [], "charged": [], "note": "지역한정이었으나 흔함" },
    { "name": "앗차키", "nameEn": "Simipour", "category": "trash", "fast": [], "charged": [], "note": "" },

    // --- 몽나 라인 ---
    { "name": "몽나", "nameEn": "Munna", "category": "dex", "fast": [], "charged": [], "note": "몽나 → 몽얌나" },
    { "name": "몽얌나", "nameEn": "Musharna", "category": "dex", "fast": [], "charged": [], "note": "몽나 → 몽얌나, 에스퍼" },

    // --- 마메파토 라인 ---
    { "name": "마메파토", "nameEn": "Pidove", "category": "trash", "fast": [], "charged": [], "note": "매우 흔함" },
    { "name": "콩둘기", "nameEn": "Tranquill", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "켄호로우", "nameEn": "Unfezant", "category": "trash", "fast": [], "charged": [], "note": "" },

    // --- 얼루기 라인 ---
    { "name": "얼루기", "nameEn": "Blitzle", "category": "dex", "fast": [], "charged": [], "note": "얼루기 → 제브라이카" },
    { "name": "제브라이카", "nameEn": "Zebstrika", "category": "dex", "fast": [], "charged": [], "note": "얼루기 → 제브라이카, 전기" },

    // --- 단굴 (몰드류/두더류는 competitive) ---
    { "name": "단굴", "nameEn": "Drilbur", "category": "dex", "fast": [], "charged": [], "note": "단굴 → 몰드류" },

    // --- 다부니 ---
    { "name": "다부니", "nameEn": "Audino", "category": "dex", "fast": [], "charged": [], "note": "진화 없음, 메가 진화 가능, 희귀" },

    // --- 짐보리 라인 (노보청은 competitive) ---
    { "name": "짐보리", "nameEn": "Timburr", "category": "dex", "fast": [], "charged": [], "note": "짐보리 → 토쇠골 → 노보청" },
    { "name": "토쇠골", "nameEn": "Gurdurr", "category": "dex", "fast": [], "charged": [], "note": "짐보리 → 토쇠골 → 노보청" },

    // --- 두까비 라인 ---
    { "name": "두까비", "nameEn": "Tympole", "category": "dex", "fast": [], "charged": [], "note": "두까비 → 두빅굴 → 두빅군" },
    { "name": "두빅굴", "nameEn": "Palpitoad", "category": "dex", "fast": [], "charged": [], "note": "두까비 → 두빅굴 → 두빅군" },
    { "name": "두빅군", "nameEn": "Seismitoad", "category": "dex", "fast": [], "charged": [], "note": "물/땅" },

    // --- 나게키/던지미 ---
    { "name": "나게키", "nameEn": "Throh", "category": "dex", "fast": [], "charged": [], "note": "지역한정, 진화 없음, 격투" },
    { "name": "던지미", "nameEn": "Sawk", "category": "dex", "fast": [], "charged": [], "note": "지역한정, 진화 없음, 격투" },

    // --- 탈모충 라인 ---
    { "name": "탈모충", "nameEn": "Sewaddle", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "두르보", "nameEn": "Swadloon", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "모아머", "nameEn": "Leavanny", "category": "trash", "fast": [], "charged": [], "note": "" },

    // --- 돌살이 라인 ---
    { "name": "돌살이", "nameEn": "Venipede", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "쏘롤", "nameEn": "Whirlipede", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "펜드라", "nameEn": "Scolipede", "category": "trash", "fast": [], "charged": [], "note": "" },

    // --- 치릴리 라인 ---
    { "name": "치릴리", "nameEn": "Cottonee", "category": "dex", "fast": [], "charged": [], "note": "치릴리 → 엘풍 (태양의돌)" },
    { "name": "엘풍", "nameEn": "Whimsicott", "category": "dex", "fast": [], "charged": [], "note": "풀/페어리" },

    // --- 쁘사이저 라인 ---
    { "name": "쁘사이저", "nameEn": "Petilil", "category": "dex", "fast": [], "charged": [], "note": "쁘사이저 → 드레디아 (태양의돌)" },
    { "name": "드레디아", "nameEn": "Lilligant", "category": "dex", "fast": [], "charged": [], "note": "쁘사이저 → 드레디아, 풀" },

    // --- 바스라오 ---
    { "name": "바스라오", "nameEn": "Basculin", "category": "trash", "fast": [], "charged": [], "note": "적색/청색 줄무늬" },

    // --- 깜까미 라인 ---
    { "name": "깜까미", "nameEn": "Sandile", "category": "dex", "fast": [], "charged": [], "note": "깜까미 → 악비르 → 악비아르" },
    { "name": "악비르", "nameEn": "Krokorok", "category": "dex", "fast": [], "charged": [], "note": "깜까미 → 악비르 → 악비아르" },
    { "name": "악비아르", "nameEn": "Krookodile", "category": "dex", "fast": [], "charged": [], "note": "땅/악" },

    // --- 달막화 라인 ---
    { "name": "달막화", "nameEn": "Darumaka", "category": "dex", "fast": [], "charged": [], "note": "달막화 → 달막화석상" },
    { "name": "달막화석상", "nameEn": "Darmanitan", "category": "dex", "fast": [], "charged": [], "note": "달막화 → 달막화석상, 불꽃" },

    // --- 마라카치 ---
    { "name": "마라카치", "nameEn": "Maractus", "category": "dex", "fast": [], "charged": [], "note": "지역한정, 진화 없음, 풀" },

    // --- 돌체비 라인 ---
    { "name": "돌체비", "nameEn": "Dwebble", "category": "trash", "fast": [], "charged": [], "note": "흔함" },
    { "name": "암팰리스", "nameEn": "Crustle", "category": "trash", "fast": [], "charged": [], "note": "" },

    // --- 곤율란 라인 (곤율거니/스크래피는 competitive) ---
    { "name": "곤율란", "nameEn": "Scraggy", "category": "dex", "fast": [], "charged": [], "note": "곤율란 → 곤율거니" },

    // --- 심보러 ---
    { "name": "심보러", "nameEn": "Sigilyph", "category": "dex", "fast": [], "charged": [], "note": "지역한정 (이집트/그리스), 진화 없음, 에스퍼/비행" },

    // --- 데스마스 (데스니칸은 competitive) ---
    { "name": "데스마스", "nameEn": "Yamask", "category": "dex", "fast": [], "charged": [], "note": "데스마스 → 데스니칸" },

    // --- 프로토가 라인 ---
    { "name": "프로토가", "nameEn": "Tirtouga", "category": "dex", "fast": [], "charged": [], "note": "프로토가 → 늑골라 (희귀 화석)" },
    { "name": "늑골라", "nameEn": "Carracosta", "category": "dex", "fast": [], "charged": [], "note": "물/바위" },

    // --- 아켄 라인 ---
    { "name": "아켄", "nameEn": "Archen", "category": "dex", "fast": [], "charged": [], "note": "아켄 → 아케오스 (희귀 화석)" },
    { "name": "아케오스", "nameEn": "Archeops", "category": "dex", "fast": [], "charged": [], "note": "바위/비행" },

    // --- 쓰레기몽 라인 ---
    { "name": "쓰레기몽", "nameEn": "Trubbish", "category": "trash", "fast": [], "charged": [], "note": "흔함" },
    { "name": "더스트나", "nameEn": "Garbodor", "category": "trash", "fast": [], "charged": [], "note": "" },

    // --- 조로아 라인 ---
    { "name": "조로아", "nameEn": "Zorua", "category": "dex", "fast": [], "charged": [], "note": "조로아 → 조로아크" },
    { "name": "조로아크", "nameEn": "Zoroark", "category": "dex", "fast": [], "charged": [], "note": "조로아 → 조로아크, 악" },

    // --- 치라미 라인 ---
    { "name": "치라미", "nameEn": "Minccino", "category": "trash", "fast": [], "charged": [], "note": "흔함" },
    { "name": "치라치노", "nameEn": "Cinccino", "category": "trash", "fast": [], "charged": [], "note": "" },

    // --- 고디탱 라인 ---
    { "name": "고디탱", "nameEn": "Gothita", "category": "dex", "fast": [], "charged": [], "note": "고디탱 → 고디보미 → 고디모아젤" },
    { "name": "고디보미", "nameEn": "Gothorita", "category": "dex", "fast": [], "charged": [], "note": "고디탱 → 고디보미 → 고디모아젤" },
    { "name": "고디모아젤", "nameEn": "Gothitelle", "category": "dex", "fast": [], "charged": [], "note": "에스퍼" },

    // --- 유니란 라인 ---
    { "name": "유니란", "nameEn": "Solosis", "category": "dex", "fast": [], "charged": [], "note": "유니란 → 듀란 → 란쿨루스" },
    { "name": "듀란", "nameEn": "Duosion", "category": "dex", "fast": [], "charged": [], "note": "유니란 → 듀란 → 란쿨루스" },
    { "name": "란쿨루스", "nameEn": "Reuniclus", "category": "dex", "fast": [], "charged": [], "note": "에스퍼" },

    // --- 독오리 라인 ---
    { "name": "독오리", "nameEn": "Ducklett", "category": "dex", "fast": [], "charged": [], "note": "독오리 → 스와나" },

    // --- 바닐프티 라인 ---
    { "name": "바닐프티", "nameEn": "Vanillite", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "바닐리치", "nameEn": "Vanillish", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "배바닐라", "nameEn": "Vanilluxe", "category": "trash", "fast": [], "charged": [], "note": "" },

    // --- 사철록 라인 ---
    { "name": "사철록", "nameEn": "Deerling", "category": "dex", "fast": [], "charged": [], "note": "4가지 계절폼, 사철록 → 메부키" },
    { "name": "메부키", "nameEn": "Sawsbuck", "category": "dex", "fast": [], "charged": [], "note": "4가지 계절폼, 노말/풀" },

    // --- 에몽가 ---
    { "name": "에몽가", "nameEn": "Emolga", "category": "dex", "fast": [], "charged": [], "note": "진화 없음, 전기/비행" },

    // --- 딱정곤 (슈발리에는 competitive) ---
    { "name": "딱정곤", "nameEn": "Karrablast", "category": "dex", "fast": [], "charged": [], "note": "딱정곤 → 슈발리에 (교환 진화)" },

    // --- 쪼마리 라인 ---
    { "name": "쪼마리", "nameEn": "Foongus", "category": "trash", "fast": [], "charged": [], "note": "흔함" },
    { "name": "뽀록나", "nameEn": "Amoonguss", "category": "trash", "fast": [], "charged": [], "note": "" },

    // --- 탱자충 (해골몽은 competitive) ---
    { "name": "탱자충", "nameEn": "Frillish", "category": "dex", "fast": [], "charged": [], "note": "탱자충 → 해골몽 (암수 다름)" },

    // --- 알로마담 ---
    { "name": "알로마담", "nameEn": "Alomomola", "category": "dex", "fast": [], "charged": [], "note": "진화 없음, 희귀, 물" },

    // --- 전기거미 라인 ---
    { "name": "전기거미", "nameEn": "Joltik", "category": "dex", "fast": [], "charged": [], "note": "전기거미 → 전툴라" },
    { "name": "전툴라", "nameEn": "Galvantula", "category": "dex", "fast": [], "charged": [], "note": "벌레/전기" },

    // --- 철시드 (너트령은 competitive) ---
    { "name": "철시드", "nameEn": "Ferroseed", "category": "dex", "fast": [], "charged": [], "note": "철시드 → 너트령" },

    // --- 기어르 라인 ---
    { "name": "기어르", "nameEn": "Klink", "category": "dex", "fast": [], "charged": [], "note": "기어르 → 기기어르 → 기기기어르 (레이드 한정)" },
    { "name": "기기어르", "nameEn": "Klang", "category": "dex", "fast": [], "charged": [], "note": "기어르 → 기기어르 → 기기기어르" },
    { "name": "기기기어르", "nameEn": "Klinklang", "category": "dex", "fast": [], "charged": [], "note": "강철" },

    // --- 저리어 라인 ---
    { "name": "저리어", "nameEn": "Tynamo", "category": "dex", "fast": [], "charged": [], "note": "저리어 → 저리릴 → 저리더프 (희귀)" },
    { "name": "저리릴", "nameEn": "Eelektrik", "category": "dex", "fast": [], "charged": [], "note": "저리어 → 저리릴 → 저리더프" },
    { "name": "저리더프", "nameEn": "Eelektross", "category": "dex", "fast": [], "charged": [], "note": "전기, 약점 없음" },

    // --- 리그레 라인 ---
    { "name": "리그레", "nameEn": "Elgyem", "category": "dex", "fast": [], "charged": [], "note": "리그레 → 벰크" },
    { "name": "벰크", "nameEn": "Beheeyem", "category": "dex", "fast": [], "charged": [], "note": "에스퍼" },

    // --- 불비달마 라인 (샹델라는 competitive) ---
    { "name": "불비달마", "nameEn": "Litwick", "category": "dex", "fast": [], "charged": [], "note": "불비달마 → 램프라 → 샹델라" },
    { "name": "램프라", "nameEn": "Lampent", "category": "dex", "fast": [], "charged": [], "note": "불비달마 → 램프라 → 샹델라" },

    // --- 터비 라인 (도끼라크는 competitive) ---
    { "name": "터비", "nameEn": "Axew", "category": "dex", "fast": [], "charged": [], "note": "터비 → 액슨도 → 도끼라크 (희귀)" },
    { "name": "액슨도", "nameEn": "Fraxure", "category": "dex", "fast": [], "charged": [], "note": "터비 → 액슨도 → 도끼라크" },

    // --- 곰돌 라인 ---
    { "name": "곰돌", "nameEn": "Cubchoo", "category": "trash", "fast": [], "charged": [], "note": "흔함" },
    { "name": "툰베어", "nameEn": "Beartic", "category": "trash", "fast": [], "charged": [], "note": "" },

    // --- 프리지오 ---
    { "name": "프리지오", "nameEn": "Cryogonal", "category": "dex", "fast": [], "charged": [], "note": "진화 없음, 희귀, 얼음" },

    // --- 쉘더 라인 ---
    { "name": "쉘더", "nameEn": "Shelmet", "category": "dex", "fast": [], "charged": [], "note": "쉘더 → 어지리더 (교환 진화)" },
    { "name": "어지리더", "nameEn": "Accelgor", "category": "dex", "fast": [], "charged": [], "note": "벌레" },

    // --- 마스볼 ---
    { "name": "마스볼", "nameEn": "Stunfisk", "category": "dex", "fast": [], "charged": [], "note": "진화 없음, 가라르폼은 PvP 탑" },

    // --- 미트민 라인 ---
    { "name": "미트민", "nameEn": "Mienfoo", "category": "dex", "fast": [], "charged": [], "note": "미트민 → 미트파오" },
    { "name": "미트파오", "nameEn": "Mienshao", "category": "dex", "fast": [], "charged": [], "note": "격투" },

    // --- 체스피 라인 ---
    { "name": "체스피", "nameEn": "Pawniard", "category": "dex", "fast": [], "charged": [], "note": "체스피 → 절각참" },
    { "name": "절각참", "nameEn": "Bisharp", "category": "dex", "fast": [], "charged": [], "note": "악/강철" },

    // --- 버프론 ---
    { "name": "버프론", "nameEn": "Bouffalant", "category": "dex", "fast": [], "charged": [], "note": "지역한정 (뉴욕), 진화 없음, 노말" },

    // --- 바르비트 라인 ---
    { "name": "바르비트", "nameEn": "Rufflet", "category": "dex", "fast": [], "charged": [], "note": "바르비트 → 워글" },
    { "name": "워글", "nameEn": "Braviary", "category": "dex", "fast": [], "charged": [], "note": "노말/비행" },

    // --- 바르차이 (버랜지나는 competitive) ---
    { "name": "바르차이", "nameEn": "Vullaby", "category": "dex", "fast": [], "charged": [], "note": "바르차이 → 버랜지나" },

    // --- 흙도론/앤티골 ---
    { "name": "흙도론", "nameEn": "Heatmor", "category": "dex", "fast": [], "charged": [], "note": "지역한정, 진화 없음, 불꽃" },
    { "name": "앤티골", "nameEn": "Durant", "category": "dex", "fast": [], "charged": [], "note": "지역한정, 진화 없음, 벌레/강철" },

    // --- 모노두 라인 ---
    { "name": "모노두", "nameEn": "Deino", "category": "dex", "fast": [], "charged": [], "note": "모노두 → 디헤드 → 삼삼드래 (희귀)" },
    { "name": "디헤드", "nameEn": "Zweilous", "category": "dex", "fast": [], "charged": [], "note": "모노두 → 디헤드 → 삼삼드래" },
    { "name": "삼삼드래", "nameEn": "Hydreigon", "category": "dex", "fast": [], "charged": [], "note": "악/드래곤" },

    // --- 활화르바 라인 (불카모스는 competitive) ---
    { "name": "활화르바", "nameEn": "Larvesta", "category": "dex", "fast": [], "charged": [], "note": "활화르바 → 불카모스 (사탕 400개, 극희귀)" },

    // --- 골릿 (골루그는 competitive) ---
    { "name": "골릿", "nameEn": "Golett", "category": "dex", "fast": [], "charged": [], "note": "골릿 → 골루그" },

    // --- 토네로스/볼트로스 ---
    { "name": "토네로스", "nameEn": "Tornadus", "category": "dex", "fast": [], "charged": [], "note": "전설, 비행" },
    { "name": "볼트로스", "nameEn": "Thundurus", "category": "dex", "fast": [], "charged": [], "note": "전설, 전기/비행" },

    // --- 케르디오 ---
    { "name": "케르디오", "nameEn": "Keldeo", "category": "dex", "fast": [], "charged": [], "note": "환상, 물/격투" },

    // --- 게노세크트 ---
    { "name": "게노세크트", "nameEn": "Genesect", "category": "dex", "fast": [], "charged": [], "note": "환상, 벌레/강철, 다양한 드라이브" },

    // ===== 6세대 (칼로스, #650-721) Dex / Trash =====
    // --- 도치마론 라인 ---
    { "name": "도치마론", "nameEn": "Chespin", "category": "dex", "fast": [], "charged": [], "note": "도치마론 → 도치보구 → 브리가론" },
    { "name": "도치보구", "nameEn": "Quilladin", "category": "dex", "fast": [], "charged": [], "note": "도치마론 → 도치보구 → 브리가론" },
    { "name": "브리가론", "nameEn": "Chesnaught", "category": "dex", "fast": [], "charged": [], "note": "풀/격투" },

    // --- 푸호꼬 라인 ---
    { "name": "푸호꼬", "nameEn": "Fennekin", "category": "dex", "fast": [], "charged": [], "note": "푸호꼬 → 테르나 → 마폭시" },
    { "name": "테르나", "nameEn": "Braixen", "category": "dex", "fast": [], "charged": [], "note": "푸호꼬 → 테르나 → 마폭시" },
    { "name": "마폭시", "nameEn": "Delphox", "category": "dex", "fast": [], "charged": [], "note": "불꽃/에스퍼" },

    // --- 개구마르 라인 ---
    { "name": "개구마르", "nameEn": "Froakie", "category": "dex", "fast": [], "charged": [], "note": "개구마르 → 개굴반장 → 개굴닌자" },
    { "name": "개굴반장", "nameEn": "Frogadier", "category": "dex", "fast": [], "charged": [], "note": "개구마르 → 개굴반장 → 개굴닌자" },
    { "name": "개굴닌자", "nameEn": "Greninja", "category": "dex", "fast": [], "charged": [], "note": "물/악" },

    // --- 화살꼬빈 라인 (파이어로는 competitive) ---
    { "name": "화살꼬빈", "nameEn": "Fletchling", "category": "dex", "fast": [], "charged": [], "note": "화살꼬빈 → 불화살빈 → 파이어로" },
    { "name": "불화살빈", "nameEn": "Fletchinder", "category": "dex", "fast": [], "charged": [], "note": "화살꼬빈 → 불화살빈 → 파이어로" },

    // --- 분이벌레 라인 ---
    { "name": "분이벌레", "nameEn": "Scatterbug", "category": "trash", "fast": [], "charged": [], "note": "분이벌레 → 분몬스 → 비비용" },
    { "name": "분몬스", "nameEn": "Spewpa", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "비비용", "nameEn": "Vivillon", "category": "dex", "fast": [], "charged": [], "note": "18가지 패턴, 지역별 수집" },

    // --- 꼬리선 라인 ---
    { "name": "꼬리선", "nameEn": "Litleo", "category": "trash", "fast": [], "charged": [], "note": "흔함" },
    { "name": "화염레오", "nameEn": "Pyroar", "category": "trash", "fast": [], "charged": [], "note": "" },

    // --- 플라베베 라인 ---
    { "name": "플라베베", "nameEn": "Flabébé", "category": "dex", "fast": [], "charged": [], "note": "5가지 꽃색, 플라베베 → 플라엣 → 플라제스" },
    { "name": "플라엣", "nameEn": "Floette", "category": "dex", "fast": [], "charged": [], "note": "플라베베 → 플라엣 → 플라제스" },
    { "name": "플라제스", "nameEn": "Florges", "category": "dex", "fast": [], "charged": [], "note": "페어리" },

    // --- 메이클 라인 ---
    { "name": "메이클", "nameEn": "Skiddo", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "고고트", "nameEn": "Gogoat", "category": "trash", "fast": [], "charged": [], "note": "" },

    // --- 판짱 라인 ---
    { "name": "판짱", "nameEn": "Pancham", "category": "dex", "fast": [], "charged": [], "note": "판짱 → 부란다 (악타입과 함께 진화)" },
    { "name": "부란다", "nameEn": "Pangoro", "category": "dex", "fast": [], "charged": [], "note": "격투/악" },

    // --- 트리미앙 ---
    { "name": "트리미앙", "nameEn": "Furfrou", "category": "dex", "fast": [], "charged": [], "note": "다양한 트림폼, 지역별 한정" },

    // --- 냐스퍼 라인 ---
    { "name": "냐스퍼", "nameEn": "Espurr", "category": "dex", "fast": [], "charged": [], "note": "냐스퍼 → 냐오닉스 (암수 다른 폼)" },
    { "name": "냐오닉스", "nameEn": "Meowstic", "category": "dex", "fast": [], "charged": [], "note": "에스퍼, 암수 폼 다름" },

    // --- 단칼빙 라인 ---
    { "name": "단칼빙", "nameEn": "Honedge", "category": "dex", "fast": [], "charged": [], "note": "단칼빙 → 쌍칼빙 → 킬가르도" },
    { "name": "킬가르도", "nameEn": "Aegislash", "category": "dex", "fast": [], "charged": [], "note": "강철/고스트" },

    // --- 슈쁘 라인 ---
    { "name": "슈쁘", "nameEn": "Spritzee", "category": "dex", "fast": [], "charged": [], "note": "슈쁘 → 페로리" },
    { "name": "페로리", "nameEn": "Aromatisse", "category": "dex", "fast": [], "charged": [], "note": "페어리" },

    // --- 나룸 라인 ---
    { "name": "나룸", "nameEn": "Swirlix", "category": "dex", "fast": [], "charged": [], "note": "나룸 → 나루림" },
    { "name": "나루림", "nameEn": "Slurpuff", "category": "dex", "fast": [], "charged": [], "note": "페어리" },

    // --- 오케이징 라인 ---
    { "name": "오케이징", "nameEn": "Inkay", "category": "dex", "fast": [], "charged": [], "note": "오케이징 → 칼라마네로 (폰 뒤집어서 진화)" },
    { "name": "칼라마네로", "nameEn": "Malamar", "category": "dex", "fast": [], "charged": [], "note": "악/에스퍼" },

    // --- 개미신 라인 ---
    { "name": "개미신", "nameEn": "Binacle", "category": "dex", "fast": [], "charged": [], "note": "개미신 → 거북손데스" },
    { "name": "거북손데스", "nameEn": "Barbaracle", "category": "dex", "fast": [], "charged": [], "note": "바위/물" },

    // --- 드라미도로 라인 ---
    { "name": "드라미도로", "nameEn": "Skrelp", "category": "dex", "fast": [], "charged": [], "note": "드라미도로 → 드래캄" },
    { "name": "드래캄", "nameEn": "Dragalge", "category": "dex", "fast": [], "charged": [], "note": "독/드래곤" },

    // --- 수레기 라인 ---
    { "name": "수레기", "nameEn": "Clauncher", "category": "dex", "fast": [], "charged": [], "note": "수레기 → 블로스터" },
    { "name": "블로스터", "nameEn": "Clawitzer", "category": "dex", "fast": [], "charged": [], "note": "물" },

    // --- 목도리키드 라인 ---
    { "name": "목도리키드", "nameEn": "Helioptile", "category": "dex", "fast": [], "charged": [], "note": "목도리키드 → 일레도리자드" },
    { "name": "일레도리자드", "nameEn": "Heliolisk", "category": "dex", "fast": [], "charged": [], "note": "전기/노말" },

    // --- 치고라스 라인 ---
    { "name": "치고라스", "nameEn": "Tyrunt", "category": "dex", "fast": [], "charged": [], "note": "치고라스 → 견고라스 (희귀 화석)" },
    { "name": "견고라스", "nameEn": "Tyrantrum", "category": "dex", "fast": [], "charged": [], "note": "바위/드래곤" },

    // --- 아마루스 라인 ---
    { "name": "아마루스", "nameEn": "Amaura", "category": "dex", "fast": [], "charged": [], "note": "아마루스 → 아마루르가 (희귀 화석)" },
    { "name": "아마루르가", "nameEn": "Aurorus", "category": "dex", "fast": [], "charged": [], "note": "바위/얼음" },

    // --- 님피아 (이미 competitive) ---

    // --- 데디캥 ---
    { "name": "데디캥", "nameEn": "Dedenne", "category": "dex", "fast": [], "charged": [], "note": "진화 없음, 전기/페어리" },

    // --- 멜시 (이미 competitive) ---

    // --- 미끄네일 라인 (미끄래곤은 competitive) ---
    { "name": "미끄네일", "nameEn": "Goomy", "category": "dex", "fast": [], "charged": [], "note": "미끄네일 → 미끄네뇽 → 미끄래곤 (희귀)" },
    { "name": "미끄네뇽", "nameEn": "Sliggoo", "category": "dex", "fast": [], "charged": [], "note": "미끄네일 → 미끄네뇽 → 미끄래곤" },

    // --- 클레피 ---
    { "name": "클레피", "nameEn": "Klefki", "category": "dex", "fast": [], "charged": [], "note": "지역한정 (프랑스), 진화 없음, 강철/페어리" },

    // --- 나무돌이 (오롯트/뚜벅초는 competitive) ---
    { "name": "나무돌이", "nameEn": "Phantump", "category": "dex", "fast": [], "charged": [], "note": "나무돌이 → 오롯트 (교환 진화)" },

    // --- 호바귀 라인 ---
    { "name": "호바귀", "nameEn": "Pumpkaboo", "category": "dex", "fast": [], "charged": [], "note": "호바귀 → 대호바귀 (4가지 사이즈)" },
    { "name": "대호바귀", "nameEn": "Gourgeist", "category": "dex", "fast": [], "charged": [], "note": "고스트/풀" },

    // --- 꽁어름 (크레베이스는 competitive) ---
    { "name": "꽁어름", "nameEn": "Bergmite", "category": "dex", "fast": [], "charged": [], "note": "꽁어름 → 크레베이스" },

    // --- 음뱃 라인 ---
    { "name": "음뱃", "nameEn": "Noibat", "category": "dex", "fast": [], "charged": [], "note": "음뱃 → 음번 (사탕 400개, 희귀)" },
    { "name": "음번", "nameEn": "Noivern", "category": "dex", "fast": [], "charged": [], "note": "비행/드래곤" },

    // --- 부란 ---
    { "name": "루차불", "nameEn": "Hawlucha", "category": "dex", "fast": [], "charged": [], "note": "지역한정 (남미), 격투/비행, 진화 없음" },

    // --- 제르네아스, 이벨타르, 지가르데 (이미 competitive) ---

    // --- 디안시 (이미 competitive) ---

    // --- 후파 ---
    { "name": "후파", "nameEn": "Hoopa", "category": "dex", "fast": [], "charged": [], "note": "환상, 에스퍼/고스트, 언바운드폼" },

    // --- 볼케니온 ---
    { "name": "볼케니온", "nameEn": "Volcanion", "category": "dex", "fast": [], "charged": [], "note": "환상, 불꽃/물" },

    // ===== 7세대 (알로라) Dex / Trash =====
    // --- 스타팅/진화 체인 ---
    { "name": "나몰빼미", "nameEn": "Rowlet", "category": "dex", "fast": [], "charged": [], "note": "나몰빼미 → 빈올빼미 → 모크나이퍼" },
    { "name": "빈올빼미", "nameEn": "Dartrix", "category": "dex", "fast": [], "charged": [], "note": "나몰빼미 → 빈올빼미 → 모크나이퍼 (풀/비행)" },
    { "name": "모크나이퍼", "nameEn": "Decidueye", "category": "dex", "fast": [], "charged": [], "note": "나몰빼미 최종 진화 (풀/고스트)" },
    { "name": "냐오불", "nameEn": "Litten", "category": "dex", "fast": [], "charged": [], "note": "냐오불 → 토라캣 → 어흥염" },
    { "name": "토라캣", "nameEn": "Torracat", "category": "dex", "fast": [], "charged": [], "note": "냐오불 → 토라캣 → 어흥염 (불꽃)" },
    { "name": "누리공", "nameEn": "Popplio", "category": "dex", "fast": [], "charged": [], "note": "누리공 → 키요공 → 누리레느" },
    { "name": "키요공", "nameEn": "Brionne", "category": "dex", "fast": [], "charged": [], "note": "누리공 → 키요공 → 누리레느 (물)" },
    { "name": "누리레느", "nameEn": "Primarina", "category": "dex", "fast": [], "charged": [], "note": "누리공 최종 진화 (물/페어리)" },

    // --- 초반 포켓몬 ---
    { "name": "영구스", "nameEn": "Yungoos", "category": "trash", "fast": [], "charged": [], "note": "영구스 → 형사구스" },
    { "name": "형사구스", "nameEn": "Gumshoos", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "콧충이", "nameEn": "Grubbin", "category": "dex", "fast": [], "charged": [], "note": "콧충이 → 전지충이 → 차머드" },
    { "name": "크와가충이", "nameEn": "Vikavolt", "category": "dex", "fast": [], "charged": [], "note": "전지충이 최종 진화 (벌레/전기)" },
    { "name": "콕코구리", "nameEn": "Pikipek", "category": "trash", "fast": [], "charged": [], "note": "콕코구리 → 크라파 → 왕큰부리" },
    { "name": "크라파", "nameEn": "Trumbeak", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "왕큰부리", "nameEn": "Toucannon", "category": "trash", "fast": [], "charged": [], "note": "노말/비행" },
    { "name": "망키", "nameEn": "Crabrawler", "category": "dex", "fast": [], "charged": [], "note": "망키 → 맨쿠마" },
    { "name": "맨쿠마", "nameEn": "Crabominable", "category": "dex", "fast": [], "charged": [], "note": "격투/얼음" },

    // --- 알로라 폼 ---
    { "name": "꼬리치(알로라)", "nameEn": "Rattata (Alolan)", "category": "trash", "fast": [], "charged": [], "note": "악/노말" },
    { "name": "레트라(알로라)", "nameEn": "Raticate (Alolan)", "category": "trash", "fast": [], "charged": [], "note": "악/노말" },
    { "name": "디그다(알로라)", "nameEn": "Diglett (Alolan)", "category": "trash", "fast": [], "charged": [], "note": "땅/강철" },
    { "name": "닥트리오(알로라)", "nameEn": "Dugtrio (Alolan)", "category": "trash", "fast": [], "charged": [], "note": "땅/강철" },
    { "name": "야옹(알로라)", "nameEn": "Meowth (Alolan)", "category": "trash", "fast": [], "charged": [], "note": "악 → 페르시온(알로라)" },
    { "name": "페르시온(알로라)", "nameEn": "Persian (Alolan)", "category": "trash", "fast": [], "charged": [], "note": "악" },
    { "name": "질퍽이(알로라)", "nameEn": "Grimer (Alolan)", "category": "dex", "fast": [], "charged": [], "note": "질퍽이(알로라) → 질뻐기(알로라) (독/악)" },
    { "name": "질뻐기(알로라)", "nameEn": "Muk (Alolan)", "category": "dex", "fast": [], "charged": [], "note": "독/악, PvP 활용 가능" },
    { "name": "꼬마돌(알로라)", "nameEn": "Geodude (Alolan)", "category": "trash", "fast": [], "charged": [], "note": "바위/전기" },
    { "name": "데구리(알로라)", "nameEn": "Graveler (Alolan)", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "딱구리(알로라)", "nameEn": "Golem (Alolan)", "category": "trash", "fast": [], "charged": [], "note": "바위/전기" },
    { "name": "나시(알로라)", "nameEn": "Exeggutor (Alolan)", "category": "dex", "fast": [], "charged": [], "note": "풀/드래곤, 독특한 타입 조합" },
    { "name": "텅구리(알로라)", "nameEn": "Marowak (Alolan)", "category": "dex", "fast": [], "charged": [], "note": "불꽃/고스트, 레이드 전용 획득" },
    { "name": "꼬부기(알로라)", "nameEn": "Vulpix (Alolan)", "category": "dex", "fast": [], "charged": [], "note": "꼬부기(알로라) → 나인테일(알로라) (얼음)" },
    { "name": "나인테일(알로라)", "nameEn": "Ninetales (Alolan)", "category": "dex", "fast": [], "charged": [], "note": "얼음/페어리" },
    { "name": "모래두지(알로라)", "nameEn": "Sandshrew (Alolan)", "category": "dex", "fast": [], "charged": [], "note": "모래두지(알로라) → 고지(알로라) (얼음/강철)" },
    { "name": "고지(알로라)", "nameEn": "Sandslash (Alolan)", "category": "dex", "fast": [], "charged": [], "note": "얼음/강철" },

    // --- 일반 7세대 ---
    { "name": "이와룡", "nameEn": "Rockruff", "category": "dex", "fast": [], "charged": [], "note": "이와룡 → 루가루간 (낮/밤/황혼 폼)" },
    { "name": "루가루간", "nameEn": "Lycanroc", "category": "dex", "fast": [], "charged": [], "note": "3가지 폼 (낮/밤/황혼)" },
    { "name": "큐아르거", "nameEn": "Cutiefly", "category": "dex", "fast": [], "charged": [], "note": "큐아르거 → 에블리" },
    { "name": "에블리", "nameEn": "Ribombee", "category": "dex", "fast": [], "charged": [], "note": "벌레/페어리" },
    { "name": "고스란", "nameEn": "Wishiwashi", "category": "trash", "fast": [], "charged": [], "note": "물" },
    { "name": "해무기", "nameEn": "Mareanie", "category": "dex", "fast": [], "charged": [], "note": "해무기 → 독해파리" },
    { "name": "독해파리", "nameEn": "Toxapex", "category": "dex", "fast": [], "charged": [], "note": "독/물, 높은 방어" },
    { "name": "누리사치", "nameEn": "Mudbray", "category": "dex", "fast": [], "charged": [], "note": "누리사치 → 만마드" },
    { "name": "만마드", "nameEn": "Mudsdale", "category": "dex", "fast": [], "charged": [], "note": "땅" },
    { "name": "빛나오라", "nameEn": "Dewpider", "category": "dex", "fast": [], "charged": [], "note": "빛나오라 → 깨비무소" },
    { "name": "깨비무소", "nameEn": "Araquanid", "category": "dex", "fast": [], "charged": [], "note": "물/벌레, PvP 활용" },
    { "name": "대라비", "nameEn": "Fomantis", "category": "dex", "fast": [], "charged": [], "note": "대라비 → 라란티스" },
    { "name": "라란티스", "nameEn": "Lurantis", "category": "dex", "fast": [], "charged": [], "note": "풀" },
    { "name": "가재장군", "nameEn": "Salandit", "category": "dex", "fast": [], "charged": [], "note": "가재장군♀ → 염뉴트 (암컷만 진화)" },
    { "name": "염뉴트", "nameEn": "Salazzle", "category": "dex", "fast": [], "charged": [], "note": "독/불꽃, 암컷만 진화 가능" },
    { "name": "단단지", "nameEn": "Stufful", "category": "dex", "fast": [], "charged": [], "note": "단단지 → 이름곰" },
    { "name": "이름곰", "nameEn": "Bewear", "category": "dex", "fast": [], "charged": [], "note": "노말/격투" },
    { "name": "꾸몬", "nameEn": "Bounsweet", "category": "dex", "fast": [], "charged": [], "note": "꾸몬 → 달무리나 → 달콤나" },
    { "name": "달무리나", "nameEn": "Steenee", "category": "dex", "fast": [], "charged": [], "note": "" },
    { "name": "달콤나", "nameEn": "Tsareena", "category": "dex", "fast": [], "charged": [], "note": "풀" },
    { "name": "꼬시래기", "nameEn": "Comfey", "category": "dex", "fast": [], "charged": [], "note": "페어리, 하와이 지역한정" },
    { "name": "옴니동", "nameEn": "Oranguru", "category": "trash", "fast": [], "charged": [], "note": "노말/에스퍼" },
    { "name": "때때몰", "nameEn": "Passimian", "category": "trash", "fast": [], "charged": [], "note": "격투" },
    { "name": "사니곤", "nameEn": "Sandygast", "category": "dex", "fast": [], "charged": [], "note": "사니곤 → 사니캐슬" },
    { "name": "사니캐슬", "nameEn": "Palossand", "category": "dex", "fast": [], "charged": [], "note": "고스트/땅" },
    { "name": "폼폼", "nameEn": "Oricorio", "category": "dex", "fast": [], "charged": [], "note": "4가지 스타일 (꽃넥타)" },
    { "name": "나마코브로", "nameEn": "Pyukumuku", "category": "trash", "fast": [], "charged": [], "note": "물" },
    { "name": "흉몽이", "nameEn": "Morelull", "category": "dex", "fast": [], "charged": [], "note": "흉몽이 → 빛둥이" },
    { "name": "빛둥이", "nameEn": "Shiinotic", "category": "dex", "fast": [], "charged": [], "note": "풀/페어리" },
    { "name": "흰꽃빛이", "nameEn": "Minior", "category": "dex", "fast": [], "charged": [], "note": "바위/비행, 다양한 색상" },
    { "name": "도롱충이", "nameEn": "Wimpod", "category": "dex", "fast": [], "charged": [], "note": "도롱충이 → 위첨보" },
    { "name": "위첨보", "nameEn": "Golisopod", "category": "dex", "fast": [], "charged": [], "note": "벌레/물" },
    { "name": "넥스몬", "nameEn": "Jangmo-o", "category": "dex", "fast": [], "charged": [], "note": "넥스몬 → 쟈랑고 → 쟈란고" },
    { "name": "쟈랑고", "nameEn": "Hakamo-o", "category": "dex", "fast": [], "charged": [], "note": "" },
    { "name": "쟈란고", "nameEn": "Kommo-o", "category": "dex", "fast": [], "charged": [], "note": "드래곤/격투, 600족" },
    { "name": "토게데마루", "nameEn": "Togedemaru", "category": "dex", "fast": [], "charged": [], "note": "전기/강철" },
    { "name": "따라큐", "nameEn": "Mimikyu", "category": "dex", "fast": [], "charged": [], "note": "고스트/페어리, 희귀" },
    { "name": "야레유탕", "nameEn": "Bruxish", "category": "trash", "fast": [], "charged": [], "note": "물/에스퍼" },
    { "name": "타이프기어", "nameEn": "Type: Null", "category": "dex", "fast": [], "charged": [], "note": "노말, 희귀" },
    { "name": "실버디", "nameEn": "Silvally", "category": "dex", "fast": [], "charged": [], "note": "노말, 타이프기어 진화" },

    // --- 7세대 전설/준전설/UB ---
    { "name": "카푸꼬꼬꼭", "nameEn": "Tapu Koko", "category": "dex", "fast": [], "charged": [], "note": "전기/페어리, 수호신" },
    { "name": "카푸나비나", "nameEn": "Tapu Lele", "category": "dex", "fast": [], "charged": [], "note": "에스퍼/페어리, 수호신" },
    { "name": "카푸브루루", "nameEn": "Tapu Bulu", "category": "dex", "fast": [], "charged": [], "note": "풀/페어리, 수호신" },
    { "name": "카푸느지느", "nameEn": "Tapu Fini", "category": "dex", "fast": [], "charged": [], "note": "물/페어리, 수호신" },
    { "name": "코스모그", "nameEn": "Cosmog", "category": "dex", "fast": [], "charged": [], "note": "에스퍼, 코스모그 → 코스모움 → 솔가레오/루나아라" },
    { "name": "코스모움", "nameEn": "Cosmoem", "category": "dex", "fast": [], "charged": [], "note": "에스퍼" },
    { "name": "솔가레오", "nameEn": "Solgaleo", "category": "dex", "fast": [], "charged": [], "note": "에스퍼/강철, 전설" },
    { "name": "루나아라", "nameEn": "Lunala", "category": "dex", "fast": [], "charged": [], "note": "에스퍼/고스트, 전설" },
    { "name": "네크로즈마", "nameEn": "Necrozma", "category": "dex", "fast": [], "charged": [], "note": "에스퍼, 전설" },
    { "name": "마기아나", "nameEn": "Magearna", "category": "dex", "fast": [], "charged": [], "note": "강철/페어리, 환상 포켓몬 (GO 등장 미확인)" },
    { "name": "마샤도", "nameEn": "Marshadow", "category": "dex", "fast": [], "charged": [], "note": "격투/고스트, 환상 포켓몬 (GO 등장 미확인)" },
    { "name": "제라오라", "nameEn": "Zeraora", "category": "dex", "fast": [], "charged": [], "note": "전기, 환상 포켓몬 (GO 등장 미확인)" },
    { "name": "매시붕", "nameEn": "Buzzwole", "category": "dex", "fast": [], "charged": [], "note": "벌레/격투, 울트라비스트" },
    { "name": "페로코체", "nameEn": "Pheromosa", "category": "dex", "fast": [], "charged": [], "note": "벌레/격투, 울트라비스트" },
    { "name": "전수목", "nameEn": "Xurkitree", "category": "dex", "fast": [], "charged": [], "note": "전기, 울트라비스트" },
    { "name": "종이신도", "nameEn": "Kartana", "category": "dex", "fast": [], "charged": [], "note": "풀/강철, 울트라비스트, 높은 공격" },
    { "name": "철화구야", "nameEn": "Celesteela", "category": "dex", "fast": [], "charged": [], "note": "강철/비행, 울트라비스트" },
    { "name": "두파팡", "nameEn": "Guzzlord", "category": "dex", "fast": [], "charged": [], "note": "악/드래곤, 울트라비스트" },
    { "name": "조가비", "nameEn": "Nihilego", "category": "dex", "fast": [], "charged": [], "note": "바위/독, 울트라비스트" },
    { "name": "테카구야", "nameEn": "Stakataka", "category": "dex", "fast": [], "charged": [], "note": "바위/강철, 울트라비스트 (GO 등장 미확인)" },
    { "name": "아고용", "nameEn": "Blacephalon", "category": "dex", "fast": [], "charged": [], "note": "불꽃/고스트, 울트라비스트 (GO 등장 미확인)" },
    { "name": "점박이", "nameEn": "Poipole", "category": "dex", "fast": [], "charged": [], "note": "독, 울트라비스트 → 아고용 (GO 등장 미확인)" },
    { "name": "누오", "nameEn": "Naganadel", "category": "dex", "fast": [], "charged": [], "note": "독/드래곤, 울트라비스트 (GO 등장 미확인)" },

    // --- 기타 7세대 ---
    { "name": "코소모그", "nameEn": "Komala", "category": "trash", "fast": [], "charged": [], "note": "노말" },
    { "name": "미믹큐", "nameEn": "Turtonator", "category": "trash", "fast": [], "charged": [], "note": "불꽃/드래곤 (GO 등장 미확인)" },
    { "name": "짜랑켓", "nameEn": "Drampa", "category": "trash", "fast": [], "charged": [], "note": "노말/드래곤 (GO 등장 미확인)" },
    { "name": "하수꼬", "nameEn": "Dhelmise", "category": "trash", "fast": [], "charged": [], "note": "고스트/풀 (GO 등장 미확인)" },

    // ===== 8세대 (가라르) Dex / Trash =====
    // --- 스타팅 ---
    { "name": "흥나숭이", "nameEn": "Grookey", "category": "dex", "fast": [], "charged": [], "note": "흥나숭이 → 채키몽 → 고릴타" },
    { "name": "채키몽", "nameEn": "Thwackey", "category": "dex", "fast": [], "charged": [], "note": "" },
    { "name": "고릴타", "nameEn": "Rillaboom", "category": "dex", "fast": [], "charged": [], "note": "풀" },
    { "name": "염버니", "nameEn": "Scorbunny", "category": "dex", "fast": [], "charged": [], "note": "염버니 → 래비풋 → 에이스번" },
    { "name": "래비풋", "nameEn": "Raboot", "category": "dex", "fast": [], "charged": [], "note": "" },
    { "name": "에이스번", "nameEn": "Cinderace", "category": "dex", "fast": [], "charged": [], "note": "불꽃" },
    { "name": "울머기", "nameEn": "Sobble", "category": "dex", "fast": [], "charged": [], "note": "울머기 → 누겔레온 → 인텔리온" },
    { "name": "누겔레온", "nameEn": "Drizzile", "category": "dex", "fast": [], "charged": [], "note": "" },
    { "name": "인텔리온", "nameEn": "Inteleon", "category": "dex", "fast": [], "charged": [], "note": "물" },

    // --- 가라르 일반 ---
    { "name": "탈토끼", "nameEn": "Skwovet", "category": "trash", "fast": [], "charged": [], "note": "탈토끼 → 다부니" },
    { "name": "홀비", "nameEn": "Wooloo", "category": "trash", "fast": [], "charged": [], "note": "홀비 → 배우르" },
    { "name": "배우르", "nameEn": "Dubwool", "category": "trash", "fast": [], "charged": [], "note": "노말" },
    { "name": "꼬모카", "nameEn": "Gossifleur", "category": "trash", "fast": [], "charged": [], "note": "꼬모카 → 백솜모카" },
    { "name": "백솜모카", "nameEn": "Eldegoss", "category": "trash", "fast": [], "charged": [], "note": "풀" },
    { "name": "물깃", "nameEn": "Rookidee", "category": "dex", "fast": [], "charged": [], "note": "물깃 → 파크까마귀 → 아머까마귀" },
    { "name": "파크까마귀", "nameEn": "Corvisquire", "category": "dex", "fast": [], "charged": [], "note": "" },
    { "name": "아머까마귀", "nameEn": "Corviknight", "category": "dex", "fast": [], "charged": [], "note": "비행/강철" },
    { "name": "깨비꼬치", "nameEn": "Blipbug", "category": "trash", "fast": [], "charged": [], "note": "깨비꼬치 → 레돔충 → 이오르브" },
    { "name": "레돔충", "nameEn": "Dottler", "category": "trash", "fast": [], "charged": [], "note": "" },
    { "name": "이오르브", "nameEn": "Orbeetle", "category": "trash", "fast": [], "charged": [], "note": "벌레/에스퍼" },
    { "name": "홀드", "nameEn": "Nickit", "category": "trash", "fast": [], "charged": [], "note": "홀드 → 폭슬리" },
    { "name": "폭슬리", "nameEn": "Thievul", "category": "trash", "fast": [], "charged": [], "note": "악" },
    { "name": "모르핀", "nameEn": "Yamper", "category": "dex", "fast": [], "charged": [], "note": "모르핀 → 멍파치" },
    { "name": "멍파치", "nameEn": "Boltund", "category": "dex", "fast": [], "charged": [], "note": "전기" },
    { "name": "롤러컨", "nameEn": "Rolycoly", "category": "dex", "fast": [], "charged": [], "note": "롤러컨 → 탄차 → 석탄산" },
    { "name": "탄차", "nameEn": "Carkol", "category": "dex", "fast": [], "charged": [], "note": "" },
    { "name": "석탄산", "nameEn": "Coalossal", "category": "dex", "fast": [], "charged": [], "note": "바위/불꽃" },
    { "name": "들깨비", "nameEn": "Silicobra", "category": "dex", "fast": [], "charged": [], "note": "들깨비 → 사다이사" },
    { "name": "사다이사", "nameEn": "Sandaconda", "category": "dex", "fast": [], "charged": [], "note": "땅" },
    { "name": "두구리", "nameEn": "Arrokuda", "category": "trash", "fast": [], "charged": [], "note": "두구리 → 피꾸리" },
    { "name": "피꾸리", "nameEn": "Barraskewda", "category": "trash", "fast": [], "charged": [], "note": "물" },
    { "name": "사시카마스", "nameEn": "Toxel", "category": "dex", "fast": [], "charged": [], "note": "사시카마스 → 스트린더" },
    { "name": "스트린더", "nameEn": "Toxtricity", "category": "dex", "fast": [], "charged": [], "note": "전기/독, 2가지 폼" },
    { "name": "태우지네", "nameEn": "Sizzlipede", "category": "dex", "fast": [], "charged": [], "note": "태우지네 → 다태우지네" },
    { "name": "다태우지네", "nameEn": "Centiskorch", "category": "dex", "fast": [], "charged": [], "note": "불꽃/벌레" },
    { "name": "콥꼬치", "nameEn": "Clobbopus", "category": "dex", "fast": [], "charged": [], "note": "콥꼬치 → 오투스" },
    { "name": "오투스", "nameEn": "Grapploct", "category": "dex", "fast": [], "charged": [], "note": "격투" },
    { "name": "꼬꼬마", "nameEn": "Hatenna", "category": "dex", "fast": [], "charged": [], "note": "꼬꼬마 → 단데마 → 브리무온" },
    { "name": "단데마", "nameEn": "Hattrem", "category": "dex", "fast": [], "charged": [], "note": "" },
    { "name": "브리무온", "nameEn": "Hatterene", "category": "dex", "fast": [], "charged": [], "note": "에스퍼/페어리" },
    { "name": "꼭지모", "nameEn": "Impidimp", "category": "dex", "fast": [], "charged": [], "note": "꼭지모 → 오롱턴 → 오롱특" },
    { "name": "오롱턴", "nameEn": "Morgrem", "category": "dex", "fast": [], "charged": [], "note": "" },
    { "name": "오롱특", "nameEn": "Grimmsnarl", "category": "dex", "fast": [], "charged": [], "note": "악/페어리" },
    { "name": "가두기", "nameEn": "Falinks", "category": "trash", "fast": [], "charged": [], "note": "격투" },
    { "name": "빙큐보", "nameEn": "Eiscue", "category": "trash", "fast": [], "charged": [], "note": "얼음" },
    { "name": "삼삼드래", "nameEn": "Dreepy", "category": "dex", "fast": [], "charged": [], "note": "삼삼드래 → 두래곤 → 드래펄트" },
    { "name": "두래곤", "nameEn": "Drakloak", "category": "dex", "fast": [], "charged": [], "note": "" },
    { "name": "드래펄트", "nameEn": "Dragapult", "category": "dex", "fast": [], "charged": [], "note": "드래곤/고스트, 600족" },
    { "name": "마호이프", "nameEn": "Milcery", "category": "dex", "fast": [], "charged": [], "note": "마호이프 → 마호꿀" },
    { "name": "마호꿀", "nameEn": "Alcremie", "category": "dex", "fast": [], "charged": [], "note": "페어리, 다양한 디자인" },
    { "name": "나이톤", "nameEn": "Morpeko", "category": "trash", "fast": [], "charged": [], "note": "전기/악" },
    { "name": "스톤조르", "nameEn": "Stonjourner", "category": "trash", "fast": [], "charged": [], "note": "바위" },
    { "name": "큐라이더", "nameEn": "Cramorant", "category": "trash", "fast": [], "charged": [], "note": "비행/물" },
    { "name": "두빗", "nameEn": "Sinistea", "category": "dex", "fast": [], "charged": [], "note": "두빗 → 포트데스" },
    { "name": "포트데스", "nameEn": "Polteageist", "category": "dex", "fast": [], "charged": [], "note": "고스트" },
    { "name": "와리더팩", "nameEn": "Duraludon", "category": "dex", "fast": [], "charged": [], "note": "강철/드래곤" },

    // --- 가라르 폼 ---
    { "name": "지그제구리(가라르)", "nameEn": "Zigzagoon (Galarian)", "category": "dex", "fast": [], "charged": [], "note": "지그제구리(가라르) → 라이너트(가라르) → 밤무아드" },
    { "name": "라이너트(가라르)", "nameEn": "Linoone (Galarian)", "category": "dex", "fast": [], "charged": [], "note": "" },
    { "name": "모양깍지(가라르)", "nameEn": "Stunfisk (Galarian)", "category": "dex", "fast": [], "charged": [], "note": "땅/강철, PvP 활용" },
    { "name": "포니타(가라르)", "nameEn": "Ponyta (Galarian)", "category": "dex", "fast": [], "charged": [], "note": "포니타(가라르) → 날쌩마(가라르) (에스퍼)" },
    { "name": "데스마스(가라르)", "nameEn": "Yamask (Galarian)", "category": "dex", "fast": [], "charged": [], "note": "데스마스(가라르) → 데스니칸 (땅/고스트)" },
    { "name": "코산호(가라르)", "nameEn": "Corsola (Galarian)", "category": "dex", "fast": [], "charged": [], "note": "코산호(가라르) → 산호령 (고스트)" },
    { "name": "산호령", "nameEn": "Cursola", "category": "dex", "fast": [], "charged": [], "note": "고스트" },
    { "name": "마임맨(가라르)", "nameEn": "Mr. Mime (Galarian)", "category": "dex", "fast": [], "charged": [], "note": "마임맨(가라르) → 마임꽁 (얼음/에스퍼)" },
    { "name": "불비달마(가라르)", "nameEn": "Darumaka (Galarian)", "category": "dex", "fast": [], "charged": [], "note": "불비달마(가라르) → 불비달만(가라르) (얼음)" },
    { "name": "불비달만(가라르)", "nameEn": "Darmanitan (Galarian)", "category": "dex", "fast": [], "charged": [], "note": "얼음" },
    { "name": "모부기(가라르)", "nameEn": "Weezing (Galarian)", "category": "dex", "fast": [], "charged": [], "note": "독/페어리" },

    // --- 8세대 전설/환상 ---
    { "name": "자마젠타", "nameEn": "Zamazenta", "category": "dex", "fast": [], "charged": [], "note": "격투, 전설 (방패왕 폼은 격투/강철)" },
    { "name": "무한다이노", "nameEn": "Eternatus", "category": "dex", "fast": [], "charged": [], "note": "독/드래곤, 전설 (GO 등장 미확인)" },
    { "name": "레지에레키", "nameEn": "Regieleki", "category": "dex", "fast": [], "charged": [], "note": "전기, 전설" },
    { "name": "레지드래고", "nameEn": "Regidrago", "category": "dex", "fast": [], "charged": [], "note": "드래곤, 전설" },

    // ===== 9세대 (팔데아) Dex / Trash =====
    // --- 스타팅 ---
    { "name": "나비냥", "nameEn": "Sprigatito", "category": "dex", "fast": [], "charged": [], "note": "나비냥 → 나오하 → 마스카나" },
    { "name": "나오하", "nameEn": "Floragato", "category": "dex", "fast": [], "charged": [], "note": "" },
    { "name": "마스카나", "nameEn": "Meowscarada", "category": "dex", "fast": [], "charged": [], "note": "풀/악" },
    { "name": "뜨아거", "nameEn": "Fuecoco", "category": "dex", "fast": [], "charged": [], "note": "뜨아거 → 파쪼옥 → 라우드본" },
    { "name": "파쪼옥", "nameEn": "Crocalor", "category": "dex", "fast": [], "charged": [], "note": "뜨아거 → 파쪼옥 → 라우드본" },
    { "name": "라우드본", "nameEn": "Skeledirge", "category": "dex", "fast": [], "charged": [], "note": "불꽃/고스트" },
    { "name": "꾸왁스", "nameEn": "Quaxly", "category": "dex", "fast": [], "charged": [], "note": "꾸왁스 → 웨이니발 → 웨이니발루" },
    { "name": "웨이니발", "nameEn": "Quaxwell", "category": "dex", "fast": [], "charged": [], "note": "" },
    { "name": "웨이니발루", "nameEn": "Quaquaval", "category": "dex", "fast": [], "charged": [], "note": "물/격투" },

    // --- 팔데아 일반 ---
    { "name": "하르비", "nameEn": "Lechonk", "category": "trash", "fast": [], "charged": [], "note": "하르비 → 해꿀비" },
    { "name": "해꿀비", "nameEn": "Oinkologne", "category": "trash", "fast": [], "charged": [], "note": "노말" },
    { "name": "구룩", "nameEn": "Tarountula", "category": "trash", "fast": [], "charged": [], "note": "구룩 → 시라망구" },
    { "name": "시라망구", "nameEn": "Spidops", "category": "trash", "fast": [], "charged": [], "note": "벌레" },
    { "name": "노래기냥", "nameEn": "Nymble", "category": "trash", "fast": [], "charged": [], "note": "노래기냥 → 기르기라스" },
    { "name": "기르기라스", "nameEn": "Lokix", "category": "trash", "fast": [], "charged": [], "note": "벌레/악" },
    { "name": "콤빠스", "nameEn": "Pawmi", "category": "dex", "fast": [], "charged": [], "note": "콤빠스 → 빠모 → 빠모트" },
    { "name": "빠모", "nameEn": "Pawmo", "category": "dex", "fast": [], "charged": [], "note": "" },
    { "name": "빠모트", "nameEn": "Pawmot", "category": "dex", "fast": [], "charged": [], "note": "전기/격투" },
    { "name": "탱글", "nameEn": "Tandemaus", "category": "dex", "fast": [], "charged": [], "note": "탱글 → 콩쥐팥쥐" },
    { "name": "콩쥐팥쥐", "nameEn": "Maushold", "category": "dex", "fast": [], "charged": [], "note": "노말, 3마리/4마리 폼" },
    { "name": "콩알뚜기", "nameEn": "Fidough", "category": "dex", "fast": [], "charged": [], "note": "콩알뚜기 → 쫀도기" },
    { "name": "쫀도기", "nameEn": "Dachsbun", "category": "dex", "fast": [], "charged": [], "note": "페어리" },
    { "name": "올리뇨", "nameEn": "Smoliv", "category": "dex", "fast": [], "charged": [], "note": "올리뇨 → 올리르바 → 올리칭" },
    { "name": "올리르바", "nameEn": "Dolliv", "category": "dex", "fast": [], "charged": [], "note": "" },
    { "name": "올리칭", "nameEn": "Arboliva", "category": "dex", "fast": [], "charged": [], "note": "풀/노말" },
    { "name": "배짱이", "nameEn": "Squawkabilly", "category": "trash", "fast": [], "charged": [], "note": "노말/비행, 4가지 색상" },
    { "name": "깜눈", "nameEn": "Nacli", "category": "dex", "fast": [], "charged": [], "note": "깜눈 → 놀눈 → 바위솔트" },
    { "name": "놀눈", "nameEn": "Naclstack", "category": "dex", "fast": [], "charged": [], "note": "" },
    { "name": "바위솔트", "nameEn": "Garganacl", "category": "dex", "fast": [], "charged": [], "note": "바위" },
    { "name": "코지", "nameEn": "Charcadet", "category": "dex", "fast": [], "charged": [], "note": "코지 → 그윽인 or 칠흑인" },
    { "name": "그윽인", "nameEn": "Armarouge", "category": "dex", "fast": [], "charged": [], "note": "불꽃/에스퍼" },
    { "name": "칠흑인", "nameEn": "Ceruledge", "category": "dex", "fast": [], "charged": [], "note": "불꽃/고스트" },
    { "name": "타기털", "nameEn": "Tadbulb", "category": "dex", "fast": [], "charged": [], "note": "타기털 → 번지털" },
    { "name": "번지털", "nameEn": "Bellibolt", "category": "dex", "fast": [], "charged": [], "note": "전기" },
    { "name": "퐁퐁자라", "nameEn": "Wattrel", "category": "trash", "fast": [], "charged": [], "note": "퐁퐁자라 → 끼리자라" },
    { "name": "끼리자라", "nameEn": "Kilowattrel", "category": "trash", "fast": [], "charged": [], "note": "전기/비행" },
    { "name": "치잉", "nameEn": "Maschiff", "category": "trash", "fast": [], "charged": [], "note": "치잉 → 가디불" },
    { "name": "가디불", "nameEn": "Mabosstiff", "category": "trash", "fast": [], "charged": [], "note": "악" },
    { "name": "노쇠부기", "nameEn": "Shroodle", "category": "trash", "fast": [], "charged": [], "note": "노쇠부기 → 그래피티나" },
    { "name": "그래피티나", "nameEn": "Grafaiai", "category": "trash", "fast": [], "charged": [], "note": "독/노말" },
    { "name": "우퍼(팔데아)", "nameEn": "Wooper (Paldean)", "category": "dex", "fast": [], "charged": [], "note": "우퍼(팔데아) → 토오 (독/땅)" },
    { "name": "스카레틴", "nameEn": "Bramblin", "category": "dex", "fast": [], "charged": [], "note": "스카레틴 → 브람블린" },
    { "name": "브람블린", "nameEn": "Brambleghast", "category": "dex", "fast": [], "charged": [], "note": "풀/고스트" },
    { "name": "토도그로스", "nameEn": "Toedscool", "category": "dex", "fast": [], "charged": [], "note": "토도그로스 → 투도그로스" },
    { "name": "투도그로스", "nameEn": "Toedscruel", "category": "dex", "fast": [], "charged": [], "note": "땅/풀" },
    { "name": "클라피", "nameEn": "Klawf", "category": "trash", "fast": [], "charged": [], "note": "바위" },
    { "name": "카프사이지", "nameEn": "Capsakid", "category": "dex", "fast": [], "charged": [], "note": "카프사이지 → 스코빌란" },
    { "name": "스코빌란", "nameEn": "Scovillain", "category": "dex", "fast": [], "charged": [], "note": "풀/불꽃" },
    { "name": "리키개구리", "nameEn": "Rellor", "category": "dex", "fast": [], "charged": [], "note": "리키개구리 → 리키버그" },
    { "name": "리키버그", "nameEn": "Rabsca", "category": "dex", "fast": [], "charged": [], "note": "벌레/에스퍼" },
    { "name": "짜릿거북", "nameEn": "Flittle", "category": "dex", "fast": [], "charged": [], "note": "짜릿거북 → 날쌩거북" },
    { "name": "날쌩거북", "nameEn": "Espathra", "category": "dex", "fast": [], "charged": [], "note": "에스퍼" },
    { "name": "타소가레", "nameEn": "Tinkatink", "category": "dex", "fast": [], "charged": [], "note": "타소가레 → 타소령 → 타소마담" },
    { "name": "타소령", "nameEn": "Tinkatuff", "category": "dex", "fast": [], "charged": [], "note": "" },
    { "name": "타소마담", "nameEn": "Tinkaton", "category": "dex", "fast": [], "charged": [], "note": "페어리/강철" },
    { "name": "위거스", "nameEn": "Wiglett", "category": "trash", "fast": [], "charged": [], "note": "위거스 → 위거슬리" },
    { "name": "위거슬리", "nameEn": "Wugtrio", "category": "trash", "fast": [], "charged": [], "note": "물" },
    { "name": "칠릿", "nameEn": "Bombirdier", "category": "trash", "fast": [], "charged": [], "note": "비행/악" },
    { "name": "피니좀", "nameEn": "Finizen", "category": "dex", "fast": [], "charged": [], "note": "피니좀 → 피니존" },
    { "name": "피니존", "nameEn": "Palafin", "category": "dex", "fast": [], "charged": [], "note": "물, 히어로 폼" },
    { "name": "스무오봉", "nameEn": "Varoom", "category": "dex", "fast": [], "charged": [], "note": "스무오봉 → 레브로봉" },
    { "name": "레브로봉", "nameEn": "Revavroom", "category": "dex", "fast": [], "charged": [], "note": "강철/독" },
    { "name": "사이클로저", "nameEn": "Cyclizar", "category": "trash", "fast": [], "charged": [], "note": "드래곤/노말" },
    { "name": "글라이매스", "nameEn": "Glimmet", "category": "dex", "fast": [], "charged": [], "note": "글라이매스 → 글라이몬" },
    { "name": "글라이몬", "nameEn": "Glimmora", "category": "dex", "fast": [], "charged": [], "note": "바위/독" },
    { "name": "여포사냥", "nameEn": "Greavard", "category": "dex", "fast": [], "charged": [], "note": "여포사냥 → 파피사냥" },
    { "name": "파피사냥", "nameEn": "Houndstone", "category": "dex", "fast": [], "charged": [], "note": "고스트" },
    { "name": "플라메토르", "nameEn": "Flamigo", "category": "trash", "fast": [], "charged": [], "note": "비행/격투" },
    { "name": "케트라", "nameEn": "Cetoddle", "category": "dex", "fast": [], "charged": [], "note": "케트라 → 고래돌퍼" },
    { "name": "고래돌퍼", "nameEn": "Cetitan", "category": "dex", "fast": [], "charged": [], "note": "얼음" },
    { "name": "베일리지", "nameEn": "Veluza", "category": "trash", "fast": [], "charged": [], "note": "물/에스퍼" },
    { "name": "도저어스", "nameEn": "Dondozo", "category": "trash", "fast": [], "charged": [], "note": "물" },
    { "name": "가비날", "nameEn": "Tatsugiri", "category": "trash", "fast": [], "charged": [], "note": "드래곤/물 (GO 등장 미확인)" },
    { "name": "파라독스", "nameEn": "Frigibax", "category": "dex", "fast": [], "charged": [], "note": "파라독스 → 동장군 → 세비에로" },
    { "name": "동장군", "nameEn": "Arctibax", "category": "dex", "fast": [], "charged": [], "note": "" },
    { "name": "세비에로", "nameEn": "Baxcalibur", "category": "dex", "fast": [], "charged": [], "note": "드래곤/얼음, 600족" },
    { "name": "기치차바랑", "nameEn": "Gimmighoul", "category": "dex", "fast": [], "charged": [], "note": "기치차바랑 → 걸스카우르 (999개 동전 필요)" },
    { "name": "걸스카우르", "nameEn": "Gholdengo", "category": "dex", "fast": [], "charged": [], "note": "강철/고스트, 동전 999개 필요" },

    // --- 9세대 전설/환상 ---
    { "name": "코라이돈", "nameEn": "Koraidon", "category": "dex", "fast": [], "charged": [], "note": "격투/드래곤, 전설 (GO 등장 미확인)" },
    { "name": "미라이돈", "nameEn": "Miraidon", "category": "dex", "fast": [], "charged": [], "note": "전기/드래곤, 전설 (GO 등장 미확인)" },

    // ===== 도감 누락 보충 (Missing National Dex entries) =====
    { "name": "거북왕", "nameEn": "Blastoise", "category": "dex", "fast": [], "charged": [], "note": "꼬부기 → 어니부기 → 거북왕, 물 어태커, 메가 진화 가능" },
    { "name": "독침붕", "nameEn": "Beedrill", "category": "dex", "fast": [], "charged": [], "note": "뿔충이 → 딱충이 → 독침붕, 메가 진화 가능" },
    { "name": "피죤투", "nameEn": "Pidgeot", "category": "dex", "fast": [], "charged": [], "note": "구구 → 피죤 → 피죤투, 메가 진화 가능" },
    { "name": "푸크린", "nameEn": "Wigglytuff", "category": "dex", "fast": [], "charged": [], "note": "푸푸린 → 푸린 → 푸크린 (노말/페어리)" },
    { "name": "라플레시아", "nameEn": "Vileplume", "category": "dex", "fast": [], "charged": [], "note": "뚜벅쵸 → 냄새꼬 → 라플레시아 (풀/독)" },
    { "name": "강챙이", "nameEn": "Poliwrath", "category": "dex", "fast": [], "charged": [], "note": "발챙이 → 슈륙챙이 → 강챙이 (물/격투)" },
    { "name": "후딘", "nameEn": "Alakazam", "category": "dex", "fast": [], "charged": [], "note": "케이시 → 윤겔라 → 후딘, 에스퍼 어태커, 메가 진화 가능" },
    { "name": "우츠보트", "nameEn": "Victreebel", "category": "dex", "fast": [], "charged": [], "note": "모다피 → 우츠동 → 우츠보트 (풀/독)" },
    { "name": "쁘사마", "nameEn": "Pinsir", "category": "dex", "fast": [], "charged": [], "note": "벌레, 메가 진화 가능" },
    { "name": "파이어", "nameEn": "Moltres", "category": "dex", "fast": [], "charged": [], "note": "전설, 불꽃/비행" },
    { "name": "크로뱃", "nameEn": "Crobat", "category": "dex", "fast": [], "charged": [], "note": "주뱃 → 골뱃 → 크로뱃 (독/비행)" },
    { "name": "란턴", "nameEn": "Lanturn", "category": "dex", "fast": [], "charged": [], "note": "초라기 → 란턴 (물/전기 PvP)" },
    { "name": "전룡", "nameEn": "Ampharos", "category": "dex", "fast": [], "charged": [], "note": "메리프 → 보우양 → 전룡, 메가 진화 가능" },
    { "name": "그랑블루", "nameEn": "Granbull", "category": "dex", "fast": [], "charged": [], "note": "블루 → 그랑블루 (페어리)" },
    { "name": "만타인", "nameEn": "Mantine", "category": "dex", "fast": [], "charged": [], "note": "타만타 → 만타인 (물/비행)" },
    { "name": "헬가", "nameEn": "Houndoom", "category": "dex", "fast": [], "charged": [], "note": "델빌 → 헬가 (악/불꽃, 메가 진화 가능)" },
    { "name": "킹드라", "nameEn": "Kingdra", "category": "dex", "fast": [], "charged": [], "note": "쏘드라 → 시드라 → 킹드라 (물/드래곤, 용의비늘)" },
    { "name": "앤테이", "nameEn": "Entei", "category": "dex", "fast": [], "charged": [], "note": "전설, 불꽃" },
    { "name": "발바로", "nameEn": "Vigoroth", "category": "dex", "fast": [], "charged": [], "note": "게을로 → 발바로 → 게을킹" },
    { "name": "앱솔", "nameEn": "Absol", "category": "dex", "fast": [], "charged": [], "note": "악, 메가 진화 가능" },
    { "name": "얼음귀신", "nameEn": "Glalie", "category": "dex", "fast": [], "charged": [], "note": "눈꼬마 → 얼음귀신 / 눈여아 (얼음, 메가 진화 가능)" },
    { "name": "라티오스", "nameEn": "Latios", "category": "dex", "fast": [], "charged": [], "note": "전설, 드래곤/에스퍼, 메가 진화 가능" },
    { "name": "찌르호크", "nameEn": "Staraptor", "category": "dex", "fast": [], "charged": [], "note": "찌르꼬 → 찌르버드 → 찌르호크 (노말/비행)" },
    { "name": "렌트라", "nameEn": "Luxray", "category": "dex", "fast": [], "charged": [], "note": "꼬링크 → 럭시오 → 렌트라 (전기)" },
    { "name": "파치리스", "nameEn": "Pachirisu", "category": "trash", "fast": [], "charged": [], "note": "전기, 진화 없음" },
    { "name": "브이젤", "nameEn": "Buizel", "category": "dex", "fast": [], "charged": [], "note": "브이젤 → 플로젤 (물)" },
    { "name": "플로젤", "nameEn": "Floatzel", "category": "dex", "fast": [], "charged": [], "note": "브이젤 → 플로젤 (물)" },
    { "name": "이어롭", "nameEn": "Lopunny", "category": "dex", "fast": [], "charged": [], "note": "토끼롤 → 이어롭 (노말, 메가 진화 가능)" },
    { "name": "무우마직", "nameEn": "Mismagius", "category": "dex", "fast": [], "charged": [], "note": "무우마 → 무우마직 (고스트, 어둠의돌)" },
    { "name": "먹고자", "nameEn": "Munchlax", "category": "dex", "fast": [], "charged": [], "note": "베이비, 먹고자 → 잠만보" },
    { "name": "타만타", "nameEn": "Mantyke", "category": "dex", "fast": [], "charged": [], "note": "베이비, 타만타 → 만타인" },
    { "name": "자포코일", "nameEn": "Magnezone", "category": "dex", "fast": [], "charged": [], "note": "코일 → 레어코일 → 자포코일 (전기/강철, 자기 루어)" },
    { "name": "내룸벨트", "nameEn": "Lickilicky", "category": "dex", "fast": [], "charged": [], "note": "내루미 → 내룸벨트 (노말)" },
    { "name": "메가자리", "nameEn": "Yanmega", "category": "dex", "fast": [], "charged": [], "note": "왕자리 → 메가자리 (벌레/비행)" },
    { "name": "글라이온", "nameEn": "Gliscor", "category": "dex", "fast": [], "charged": [], "note": "글라이거 → 글라이온 (땅/비행 PvP)" },
    { "name": "야느와르몽", "nameEn": "Dusknoir", "category": "dex", "fast": [], "charged": [], "note": "해골몽 → 미라몽 → 야느와르몽 (고스트)" },
    // 기라티나는 울트라리그에 등록됨
    { "name": "단굴", "nameEn": "Roggenrola", "category": "dex", "fast": [], "charged": [], "note": "단굴 → 암트르 → 기가이어스 (바위)" },
    { "name": "암트르", "nameEn": "Boldore", "category": "dex", "fast": [], "charged": [], "note": "단굴 → 암트르 → 기가이어스" },
    { "name": "기가이어스", "nameEn": "Gigalith", "category": "dex", "fast": [], "charged": [], "note": "단굴 최종 진화 (바위)" },
    { "name": "코로모리", "nameEn": "Woobat", "category": "trash", "fast": [], "charged": [], "note": "코로모리 → 맘박쥐" },
    { "name": "맘박쥐", "nameEn": "Swoobat", "category": "trash", "fast": [], "charged": [], "note": "에스퍼/비행" },
    { "name": "노보청", "nameEn": "Conkeldurr", "category": "dex", "fast": [], "charged": [], "note": "짐보리 → 토쇠골 → 노보청 (격투, 교환 진화)" },
    { "name": "곤율거니", "nameEn": "Scrafty", "category": "dex", "fast": [], "charged": [], "note": "곤율란 → 곤율거니 (악/격투)" },
    { "name": "데스니칸", "nameEn": "Cofagrigus", "category": "dex", "fast": [], "charged": [], "note": "데스마스 → 데스니칸 (고스트)" },
    { "name": "도끼라크", "nameEn": "Haxorus", "category": "dex", "fast": [], "charged": [], "note": "터비 → 액슨도 → 도끼라크 (드래곤)" },
    { "name": "크리만", "nameEn": "Druddigon", "category": "dex", "fast": [], "charged": [], "note": "드래곤, 진화 없음" },
    { "name": "골루그", "nameEn": "Golurk", "category": "dex", "fast": [], "charged": [], "note": "골릿 → 골루그 (땅/고스트)" },
    { "name": "버랜지나", "nameEn": "Mandibuzz", "category": "dex", "fast": [], "charged": [], "note": "바르차이 → 버랜지나 (악/비행)" },
    { "name": "비리디온", "nameEn": "Virizion", "category": "dex", "fast": [], "charged": [], "note": "전설, 풀/격투, 성검사" },
    { "name": "큐레무", "nameEn": "Kyurem", "category": "dex", "fast": [], "charged": [], "note": "전설, 드래곤/얼음" },
    { "name": "메로엣타", "nameEn": "Meloetta", "category": "dex", "fast": [], "charged": [], "note": "환상, 노말/에스퍼, 스텝폼은 노말/격투" },
    { "name": "파르빗", "nameEn": "Bunnelby", "category": "trash", "fast": [], "charged": [], "note": "파르빗 → 파르토" },
    { "name": "파르토", "nameEn": "Diggersby", "category": "trash", "fast": [], "charged": [], "note": "노말/땅" },
    { "name": "파이어로", "nameEn": "Talonflame", "category": "dex", "fast": [], "charged": [], "note": "화살꼬빈 → 불화살빈 → 파이어로 (불꽃/비행, PvP)" },
    { "name": "크레베이스", "nameEn": "Avalugg", "category": "dex", "fast": [], "charged": [], "note": "꽁어름 → 크레베이스 (얼음)" },
    { "name": "지가르데", "nameEn": "Zygarde", "category": "dex", "fast": [], "charged": [], "note": "전설, 드래곤/땅, 10%/50%/100% 폼" },
    { "name": "멜탄", "nameEn": "Meltan", "category": "dex", "fast": [], "charged": [], "note": "환상, 강철, Let's Go 연동 (멜탄 → 멜메탈)" },
    { "name": "물깨비", "nameEn": "Chewtle", "category": "dex", "fast": [], "charged": [], "note": "물깨비 → 갈까부기" },
    { "name": "갈까부기", "nameEn": "Drednaw", "category": "dex", "fast": [], "charged": [], "note": "물/바위" },
    { "name": "과사삭", "nameEn": "Applin", "category": "dex", "fast": [], "charged": [], "note": "과사삭 → 애프리용/풍디 (풀/드래곤)" },
    { "name": "애프리용", "nameEn": "Flapple", "category": "dex", "fast": [], "charged": [], "note": "풀/드래곤" },
    { "name": "풍디", "nameEn": "Appletun", "category": "dex", "fast": [], "charged": [], "note": "풀/드래곤" },
    { "name": "나이킹", "nameEn": "Perrserker", "category": "dex", "fast": [], "charged": [], "note": "나옹(가라르) → 나이킹 (강철)" },
    { "name": "파오리꼬", "nameEn": "Sirfetch'd", "category": "dex", "fast": [], "charged": [], "note": "파오리(가라르) → 파오리꼬 (격투)" },
    { "name": "데스니마스", "nameEn": "Runerigus", "category": "dex", "fast": [], "charged": [], "note": "데스마스(가라르) → 데스니마스 (땅/고스트)" },
    { "name": "따쿠리", "nameEn": "Pincurchin", "category": "trash", "fast": [], "charged": [], "note": "전기" },
    { "name": "누에발이", "nameEn": "Snom", "category": "dex", "fast": [], "charged": [], "note": "누에발이 → 모스노우 (얼음/벌레)" },
    { "name": "모스노우", "nameEn": "Frosmoth", "category": "dex", "fast": [], "charged": [], "note": "얼음/벌레" },
    { "name": "이에봉", "nameEn": "Indeedee", "category": "dex", "fast": [], "charged": [], "note": "에스퍼/노말, 암수 폼 다름" },
    { "name": "꼬마코끼리", "nameEn": "Cufant", "category": "dex", "fast": [], "charged": [], "note": "꼬마코끼리 → 대왕코끼리" },
    { "name": "대왕코끼리", "nameEn": "Copperajah", "category": "dex", "fast": [], "charged": [], "note": "강철" },
    { "name": "파치래곤", "nameEn": "Dracozolt", "category": "dex", "fast": [], "charged": [], "note": "전기/드래곤, 화석 합성" },
    { "name": "파치르돈", "nameEn": "Arctozolt", "category": "dex", "fast": [], "charged": [], "note": "전기/얼음, 화석 합성" },
    { "name": "어래곤", "nameEn": "Dracovish", "category": "dex", "fast": [], "charged": [], "note": "물/드래곤, 화석 합성" },
    { "name": "어치르돈", "nameEn": "Arctovish", "category": "dex", "fast": [], "charged": [], "note": "물/얼음, 화석 합성" },
    { "name": "치고마", "nameEn": "Kubfu", "category": "dex", "fast": [], "charged": [], "note": "격투, 전설 → 우라오스 (GO 미출시)" },
    { "name": "우라오스", "nameEn": "Urshifu", "category": "dex", "fast": [], "charged": [], "note": "격투/악 or 격투/물, 전설 (GO 미출시)" },
    { "name": "자루도", "nameEn": "Zarude", "category": "dex", "fast": [], "charged": [], "note": "환상, 악/풀 (GO 미출시)" },
    { "name": "블리자포스", "nameEn": "Glastrier", "category": "dex", "fast": [], "charged": [], "note": "전설, 얼음 (GO 미출시)" },
    { "name": "레이스포스", "nameEn": "Spectrier", "category": "dex", "fast": [], "charged": [], "note": "전설, 고스트 (GO 미출시)" },
    { "name": "바드렉스", "nameEn": "Calyrex", "category": "dex", "fast": [], "charged": [], "note": "전설, 에스퍼/풀 (GO 미출시)" },
    { "name": "쁘사이링", "nameEn": "Wyrdeer", "category": "dex", "fast": [], "charged": [], "note": "노라키 → 쁘사이링 (노말/에스퍼, 히스이 진화)" },
    { "name": "망도날", "nameEn": "Kleavor", "category": "dex", "fast": [], "charged": [], "note": "스라크 → 망도날 (벌레/바위, 히스이 진화)" },
    { "name": "다투곰", "nameEn": "Ursaluna", "category": "dex", "fast": [], "charged": [], "note": "링곰 → 다투곰 (땅/노말, 히스이 진화)" },
    { "name": "이매치", "nameEn": "Basculegion", "category": "dex", "fast": [], "charged": [], "note": "바스라오(히스이) → 이매치 (물/고스트)" },
    { "name": "오냐치", "nameEn": "Sneasler", "category": "dex", "fast": [], "charged": [], "note": "포푸니(히스이) → 오냐치 (격투/독, 히스이 진화)" },
    { "name": "핀옹", "nameEn": "Overqwil", "category": "dex", "fast": [], "charged": [], "note": "침바루(히스이) → 핀옹 (악/독, 히스이 진화)" },
    { "name": "러브로스", "nameEn": "Enamorus", "category": "dex", "fast": [], "charged": [], "note": "전설, 페어리/비행" },
    { "name": "쏙지렁이", "nameEn": "Orthworm", "category": "dex", "fast": [], "charged": [], "note": "강철, 진화 없음" },
    { "name": "리링키", "nameEn": "Farigiraf", "category": "dex", "fast": [], "charged": [], "note": "키링키 → 리링키 (노말/에스퍼)" },
    { "name": "노고룡", "nameEn": "Dudunsparce", "category": "dex", "fast": [], "charged": [], "note": "노고치 → 노고룡 (노말)" },
    { "name": "대왕단", "nameEn": "Kingambit", "category": "dex", "fast": [], "charged": [], "note": "체스피 → 절각참 → 대왕단 (악/강철)" },
    { "name": "위대한엄니", "nameEn": "Great Tusk", "category": "dex", "fast": [], "charged": [], "note": "땅/격투, 고대 패러독스 (GO 미출시)" },
    { "name": "비명꼬리", "nameEn": "Scream Tail", "category": "dex", "fast": [], "charged": [], "note": "페어리/에스퍼, 고대 패러독스 (GO 미출시)" },
    { "name": "사나운버섯", "nameEn": "Brute Bonnet", "category": "dex", "fast": [], "charged": [], "note": "풀/악, 고대 패러독스 (GO 미출시)" },
    { "name": "흔들비녀", "nameEn": "Flutter Mane", "category": "dex", "fast": [], "charged": [], "note": "고스트/페어리, 고대 패러독스 (GO 미출시)" },
    { "name": "쏘는날개", "nameEn": "Slither Wing", "category": "dex", "fast": [], "charged": [], "note": "벌레/격투, 고대 패러독스 (GO 미출시)" },
    { "name": "우레지렁이", "nameEn": "Sandy Shocks", "category": "dex", "fast": [], "charged": [], "note": "전기/땅, 고대 패러독스 (GO 미출시)" },
    { "name": "무쇠발자국", "nameEn": "Iron Treads", "category": "dex", "fast": [], "charged": [], "note": "땅/강철, 미래 패러독스 (GO 미출시)" },
    { "name": "무쇠뭉치", "nameEn": "Iron Bundle", "category": "dex", "fast": [], "charged": [], "note": "얼음/물, 미래 패러독스 (GO 미출시)" },
    { "name": "무쇠손", "nameEn": "Iron Hands", "category": "dex", "fast": [], "charged": [], "note": "격투/전기, 미래 패러독스 (GO 미출시)" },
    { "name": "무쇠머리", "nameEn": "Iron Jugulis", "category": "dex", "fast": [], "charged": [], "note": "악/비행, 미래 패러독스 (GO 미출시)" },
    { "name": "무쇠벌레", "nameEn": "Iron Moth", "category": "dex", "fast": [], "charged": [], "note": "불꽃/독, 미래 패러독스 (GO 미출시)" },
    { "name": "무쇠가시", "nameEn": "Iron Thorns", "category": "dex", "fast": [], "charged": [], "note": "바위/전기, 미래 패러독스 (GO 미출시)" },
    { "name": "짜이젠", "nameEn": "Wo-Chien", "category": "dex", "fast": [], "charged": [], "note": "악/풀, 전설 (GO 미출시)" },
    { "name": "파오젠", "nameEn": "Chien-Pao", "category": "dex", "fast": [], "charged": [], "note": "악/얼음, 전설 (GO 미출시)" },
    { "name": "딩루", "nameEn": "Ting-Lu", "category": "dex", "fast": [], "charged": [], "note": "악/땅, 전설 (GO 미출시)" },
    { "name": "위유", "nameEn": "Chi-Yu", "category": "dex", "fast": [], "charged": [], "note": "악/불꽃, 전설 (GO 미출시)" },
    { "name": "고동치는달", "nameEn": "Roaring Moon", "category": "dex", "fast": [], "charged": [], "note": "드래곤/악, 고대 패러독스 (GO 미출시)" },
    { "name": "무쇠전사", "nameEn": "Iron Valiant", "category": "dex", "fast": [], "charged": [], "note": "페어리/격투, 미래 패러독스 (GO 미출시)" },
    { "name": "걸어다니는파도", "nameEn": "Walking Wake", "category": "dex", "fast": [], "charged": [], "note": "물/드래곤, 고대 패러독스 (GO 미출시)" },
    { "name": "무쇠잎사귀", "nameEn": "Iron Leaves", "category": "dex", "fast": [], "charged": [], "note": "풀/에스퍼, 미래 패러독스 (GO 미출시)" },
    { "name": "과자걀", "nameEn": "Dipplin", "category": "dex", "fast": [], "charged": [], "note": "과사삭 → 과자걀 (풀/드래곤, GO 미출시)" },
    { "name": "호차짱", "nameEn": "Poltchageist", "category": "dex", "fast": [], "charged": [], "note": "호차짱 → 그름차짱 (풀/고스트, GO 미출시)" },
    { "name": "그름차짱", "nameEn": "Sinistcha", "category": "dex", "fast": [], "charged": [], "note": "풀/고스트 (GO 미출시)" },
    { "name": "견고독", "nameEn": "Okidogi", "category": "dex", "fast": [], "charged": [], "note": "독/격투, 전설 (GO 미출시)" },
    { "name": "원묘독", "nameEn": "Munkidori", "category": "dex", "fast": [], "charged": [], "note": "독/에스퍼, 전설 (GO 미출시)" },
    { "name": "조뉴독", "nameEn": "Fezandipiti", "category": "dex", "fast": [], "charged": [], "note": "독/페어리, 전설 (GO 미출시)" },
    { "name": "오거폰", "nameEn": "Ogerpon", "category": "dex", "fast": [], "charged": [], "note": "풀, 전설 (GO 미출시)" },
    { "name": "브리즈딘", "nameEn": "Archaludon", "category": "dex", "fast": [], "charged": [], "note": "강철/드래곤, 와리더팩 진화 (GO 미출시)" },
    { "name": "드래과란", "nameEn": "Hydrapple", "category": "dex", "fast": [], "charged": [], "note": "풀/드래곤, 과자걀 진화 (GO 미출시)" },
    { "name": "파고치는불꽃", "nameEn": "Gouging Fire", "category": "dex", "fast": [], "charged": [], "note": "불꽃/드래곤, 고대 패러독스 (GO 미출시)" },
    { "name": "사나운번개", "nameEn": "Raging Bolt", "category": "dex", "fast": [], "charged": [], "note": "전기/드래곤, 고대 패러독스 (GO 미출시)" },
    { "name": "무쇠바위", "nameEn": "Iron Boulder", "category": "dex", "fast": [], "charged": [], "note": "바위/에스퍼, 미래 패러독스 (GO 미출시)" },
    { "name": "무쇠왕관", "nameEn": "Iron Crown", "category": "dex", "fast": [], "charged": [], "note": "강철/에스퍼, 미래 패러독스 (GO 미출시)" },
    { "name": "테라파고스", "nameEn": "Terapagos", "category": "dex", "fast": [], "charged": [], "note": "노말, 전설 (GO 미출시)" },
    { "name": "복숭악동", "nameEn": "Pecharunt", "category": "dex", "fast": [], "charged": [], "note": "독/고스트, 환상 (GO 미출시)" },
  ]
};
