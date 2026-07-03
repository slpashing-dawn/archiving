/* ============================================================
   ⚠ 이 파일은 "리스트가 몇백~몇천 개일 때 페이지네이션이 어떻게
   보이는지" 미리 보여드리기 위한 더미 데이터 생성기예요.

   실제 데이터를 js/data.js 에 다 옮기신 뒤에는
   index.html 에서 이 파일을 불러오는 아래 한 줄만 지우시면 됩니다.
     <script src="js/dummy-data.js"></script>

   그러면 DUMMY_FICS / DUMMY_TRPG 가 정의되지 않고,
   js/app.js 가 자동으로 이 파일 없이도 정상 동작해요.
============================================================ */

function titleFrom(i){
  const adjectives = ["새벽의","붉은","푸른","차가운","다정한","그날의","은밀한","마지막","작은","오래된","낯선","눈부신","희미한","조용한","깊은"];
  const nouns = ["편지","항구","약속","계절","기억","고백","여행","비밀","정원","등대","파도","노래","문","우산","지도","계단"];
  return `${adjectives[i % adjectives.length]} ${nouns[(i*3) % nouns.length]} ${i+1}`;
}

function generateFillerFanfic(count, categoryPool, tagPool){
  const out = [];
  for(let i=0;i<count;i++){
    const category = categoryPool[i % categoryPool.length];
    const rating = 1 + (i % 5);
    const total = 4 + (i % 40);
    const completed = i % 3 !== 0;
    const current = completed ? total : Math.max(1, Math.floor(total * ((i % 7) / 8)));
    const tags = [];
    const tagCount = 2 + (i % 3);
    for(let t=0;t<tagCount;t++){ tags.push(tagPool[(i + t*5) % tagPool.length]); }
    out.push({
      title: titleFrom(i) + " (더미)", category, rating,
      metricCurrent: current,
      metricTotal: completed ? total : (i % 5 === 0 ? null : total),
      completed,
      tags: [...new Set(tags)],
      link: `https://example.com/fic-dummy/${i+1}`,
      memo: `더미 메모 ${i+1} — 실제 데이터로 교체될 항목입니다.`
    });
  }
  return out;
}

function generateFillerTrpg(count, categoryPool, tagPool){
  const playerCounts = ["1인","2인","2~3인","3~4인","3~5인","4~6인","5인 이상"];
  const playtimes = ["1시간 내외","2시간 내외","2~3시간","3~4시간","4시간 이상","세션당 3시간","한나절"];
  const out = [];
  for(let i=0;i<count;i++){
    const category = categoryPool[i % categoryPool.length];
    const rating = 1 + (i % 5);
    const completed = i % 2 === 0;
    const spoiler = i % 2 === 0 ? "known" : "blind";
    const tags = [];
    const tagCount = 2 + (i % 3);
    for(let t=0;t<tagCount;t++){ tags.push(tagPool[(i + t*4) % tagPool.length]); }
    out.push({
      title: titleFrom(i) + " 시나리오 (더미)", category, rating,
      playerCount: playerCounts[i % playerCounts.length],
      playtime: playtimes[i % playtimes.length],
      completed, spoiler,
      tags: [...new Set(tags)],
      link: `https://example.com/trpg-dummy/${i+1}`,
      memo: `더미 메모 ${i+1} — 실제 데이터로 교체될 항목입니다.`
    });
  }
  return out;
}

const DUMMY_FIC_TAG_POOL = ["설아×리안","노아×유진","다온×시우","도경×하람","재회","힐링","짝사랑","오해","현대물","시대극","여행물","티키타카","새드엔딩주의","느린전개","적대관계","떡밥회수","완결보장","학원물"];
const DUMMY_FIC_CATEGORY_POOL = ["로맨스","판타지","학원물","스릴러","드라마","일상","시대극","SF"];

const DUMMY_TRPG_TAG_POOL = ["원샷","캠페인","공포","미스터리","코미디","초보자용","고난이도","2인용","4인용","롱런","감동","눈물주의"];
const DUMMY_TRPG_CATEGORY_POOL = ["크툴루","던전앤드래곤","인세인","다잉메시지","이문영 시나리오","호러","미스터리","기타 시스템"];

const DUMMY_FICS = generateFillerFanfic(180, DUMMY_FIC_CATEGORY_POOL, DUMMY_FIC_TAG_POOL);
const DUMMY_TRPG = generateFillerTrpg(140, DUMMY_TRPG_CATEGORY_POOL, DUMMY_TRPG_TAG_POOL);
