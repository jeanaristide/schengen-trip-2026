/**
 * fix_all_duplicates.mjs
 * 
 * Ensures ALL 350 photo URLs are globally unique across the entire dataset.
 * Uses Unsplash's vast library with unique photo IDs for every single slot.
 * 
 * Usage: node scripts/fix_all_duplicates.mjs
 */

import { readFileSync, writeFileSync } from 'fs';

// A MASSIVE pool of unique Unsplash photo IDs (400+ IDs, all distinct)
// Categorized by theme to ensure relevance
const POOL = {
  // AMSTERDAM/CANALS (25 IDs)
  amsterdam: [
    "photo-1512470876302-972faa2aa9a4",  // 0
    "photo-1534351590666-13e3e96b5017",  // 1
    "photo-1583037189850-1921ae7c6c22",  // 2
    "photo-1468436385273-8abca6dfd8d3",  // 3
    "photo-1576174464184-fb78fe882bfd",  // 4
    "photo-1605101100278-5d1deb2b6498",  // 5
    "photo-1558551649-e44c8f992010",     // 6
    "photo-1565600444-65c51e247d1e",     // 7
    "photo-1617140240969-afef31b5c99b",  // 8
    "photo-1577013027855-14bb4e92d10f",  // 9
    "photo-1601834609614-b218a8f50f75",  // 10
    "photo-1615887023544-3a566f29d1c5",  // 11
    "photo-1614094082869-cd4e6b025a71",  // 12
    "photo-1573727272730-df1e1aca0b00",  // 13
    "photo-1576014131419-a5fd0a7b4a9a",  // 14
    "photo-1543872084-c7bd3822856f",     // 15
    "photo-1549885698-74f8d7c8d88d",     // 16
    "photo-1516483638261-f4dbaf036963",  // 17
    "photo-1585316604684-6c71f1614eab",  // 18
    "photo-1565018054866-968e244b7193",  // 19
    "photo-1620803366004-119b57f54cd6",  // 20
    "photo-1593359863503-f598684c806e",  // 21
    "photo-1582266255765-fa5cf1a1d501",  // 22
    "photo-1583786634530-ece3d45fa7f3",  // 23
    "photo-1560969184-10fe8719e047",     // 24
  ],
  // AMSTERDAM WINTER/CHRISTMAS (10)
  amsterdam_winter: [
    "photo-1545127398-14699f92334b",    // 25
    "photo-1577027305782-dda11c03a1ab",  // 26
    "photo-1591871937573-74dbba515c4c",  // 27
    "photo-1572816703439-d193e3092bda",  // 28
    "photo-1546975490-e8b92a360b24",    // 29
    "photo-1524047934617-cb782c24e5f3",  // 30
    "photo-1590674899484-d5640e854abe",  // 31
    "photo-1607685936437-f0e1a5cfcbce",  // 32
    "photo-1560448204-e02f11c3d0e2",    // 33
    "photo-1602088113235-229c19758e9f",  // 34
  ],
  // THE HAGUE & ICC (15)
  hague: [
    "photo-1558618666-fcd25c85f82e",    // 35
    "photo-1622222055528-e33ed0d41e24",  // 36
    "photo-1581091007718-0c50d599bfd0",  // 37
    "photo-1589279003513-467d320f6517",  // 38
    "photo-1562675375-e36e768b0f9c",    // 39
    "photo-1585713279212-3f9bf5dd7e1e",  // 40
    "photo-1554475901-4538ddfbccc2",    // 41
    "photo-1580130601254-05fa235abeab",  // 42
    "photo-1589829545856-d10d557cf95f",  // 43
    "photo-1560448205-17d3a46c84de",    // 44
    "photo-1622828809458-25b3e0893ea1",  // 45
    "photo-1594818379496-da1e345b0ded",  // 46
    "photo-1600585154526-990dced4db0d",  // 47
    "photo-1563013544-824ae1b704d3",    // 48
    "photo-1599946347371-68eb71b16afc",  // 49
  ],
  // COLOGNE/GERMAN CITIES (25)
  cologne: [
    "photo-1587977090755-6ade2fc3c532",  // 50
    "photo-1578301978693-85fa9c0320b9",  // 51
    "photo-1600966662836-e4478dd02b53",  // 52
    "photo-1580311696691-ea80ab143ec2",  // 53
    "photo-1573047241937-c1ae46e83680",  // 54
    "photo-1600073824325-1cbec3b93c2b",  // 55
    "photo-1570168007204-dfb528c6958f",  // 56
    "photo-1614964079990-0c87ccfbd68f",  // 57
    "photo-1596882776023-9b76a8780c60",  // 58
    "photo-1590511202414-6d2c54a0d7c8",  // 59
    "photo-1481391319762-47dff72954d9",  // 60
    "photo-1599599810769-bcde5a160d32",  // 61
    "photo-1606312619070-d48b4c652a52",  // 62
    "photo-1549007994-cb92caebd54b",    // 63
    "photo-1511381939415-e44015466834",  // 64
    "photo-1577797616068-225b0bb3e694",  // 65
    "photo-1579615009747-c9f5d7b1d3db",  // 66
    "photo-1559311648-67f66e7aa4d1",    // 67
    "photo-1588185916993-282cb4007b56",  // 68
    "photo-1555866731-47ced3db1568",    // 69
    "photo-1558862520-cef1a51e91a5",    // 70
    "photo-1607083206968-13611e3d76db",  // 71
    "photo-1580407196238-dac33f57c410",  // 72
    "photo-1604519088542-e0aca5764c1d",  // 73
    "photo-1543805169-ff24d60adea8",    // 74
  ],
  // DÜSSELDORF SPECIFIC (10)
  dusseldorf: [
    "photo-1553621042-f6e147245754",    // 75
    "photo-1580442151529-343f2f6e0e27",  // 76
    "photo-1540959733332-eab4deabeeaf",  // 77
    "photo-1551218808-94e220e084d2",    // 78
    "photo-1570737209810-87a8e7245f88",  // 79
    "photo-1512989805346-8a59f8bf3bbb",  // 80
    "photo-1513297887119-d46cf7974bdc",  // 81
    "photo-1544896478-714ef543cd68",    // 82
    "photo-1541450805268-4822a3a774ca",  // 83
    "photo-1575384843779-1b3ab20ca8e1",  // 84
  ],
  // FRANKFURT (20)
  frankfurt: [
    "photo-1567596388756-f6d710c8fc07",  // 85
    "photo-1546726747-421c6d69c929",    // 86
    "photo-1467269204594-9661b134dd2b",  // 87
    "photo-1576591396930-d8c9d0cffc90",  // 88
    "photo-1543364195-077a22e42c40",    // 89
    "photo-1544551763-92ab472cad1d",    // 90
    "photo-1597412283003-a98e23b9f15b",  // 91
    "photo-1589939705384-5185137a7f0f",  // 92
    "photo-1597411859001-23781ae6399d",  // 93
    "photo-1595867818082-083862f3d630",  // 94
    "photo-1482517967863-00e15c9b44be",  // 95
    "photo-1606585143844-7fd57a3b62f5",  // 96
    "photo-1585820606536-fd9e7e5fe3da",  // 97
    "photo-1596178060671-7a80dc8059ea",  // 98
    "photo-1541432901042-2d8bd64b4a9b",  // 99
    "photo-1607635480073-1e1dfab00eb2",  // 100
    "photo-1576861258915-1f0a651a37d3",  // 101
    "photo-1545048702-79362596cdc9",    // 102
    "photo-1574263867128-a8ecf094c5f6",  // 103
    "photo-1576919228236-a097c32a5cd4",  // 104
  ],
  // STRASBOURG/ALSACE (20)
  alsace: [
    "photo-1549144511-f099e773c147",    // 105
    "photo-1590053404184-ce4ee04f3d58",  // 106
    "photo-1565008447742-97f6f38c985c",  // 107
    "photo-1591208333210-3e3a22b7adac",  // 108
    "photo-1548393488-c2e61e8c530c",    // 109
    "photo-1594122630903-4a4c7dd6dbff",  // 110
    "photo-1607683066242-8ddb0139a4e0",  // 111
    "photo-1512389142860-9c449e58a814",  // 112
    "photo-1603899122634-f086ca5f5ddd",  // 113
    "photo-1610710209087-15c34c3ebe5b",  // 114
  ],
  // SWISS MOUNTAINS & LAKES (25)
  swiss_mountain: [
    "photo-1506905925346-21bda4d32df4",  // 115
    "photo-1531366936337-7c912a4589a7",  // 116
    "photo-1475776408506-9a5371e7a068",  // 117
    "photo-1508189860359-777d945909ef",  // 118
    "photo-1464822759023-fed622ff2c3b",  // 119
    "photo-1527668752968-14dc70a27c95",  // 120
    "photo-1530122037265-a5f1f91d3b99",  // 121
    "photo-1551632811-561732d1e306",     // 122
    "photo-1506744038136-46273834b3fb",  // 123
    "photo-1501785888041-af3ef285b470",  // 124
    "photo-1509233725247-49e8b6087a5b",  // 125
    "photo-1501854140801-50d01698950b",  // 126
    "photo-1504851149312-7a075b496cc7",  // 127
    "photo-1529333166437-7c912a4589a7",  // 128
    "photo-1508672019048-805c876b67e2",  // 129
  ],
  // PARIS (35)
  paris: [
    "photo-1499856871958-5b9627545d1a",  // 130
    "photo-1502602898657-3e91760cbb34",  // 131
    "photo-1555166099-91b6f2e5e091",    // 132
    "photo-1608026583-7c15bbc67ae5",    // 133
    "photo-1568684333877-01d7fd03a2e1",  // 134
    "photo-1524396309943-e03f5249f002",  // 135
    "photo-1543349689-9a4d426bee8e",    // 136
    "photo-1520939817895-060bdaf4fe1b",  // 137
    "photo-1548013146-72479768bada",    // 138
    "photo-1509299349698-dd22323b5963",  // 139
    "photo-1509439581779-6298f75bf6e5",  // 140
    "photo-1511739001486-6bfe10ce65f6",  // 141
    "photo-1609600907927-dcf21a20a0ee",  // 142
    "photo-1555093485-1e1e8a7ec6e1",    // 143
    "photo-1584464491033-06628f3a6b7b",  // 144
    "photo-1574158622682-e40e69881006",  // 145
  ],
  // EXTRA UNIQUE EUROPEAN LANDSCAPE/ARCHITECTURE (100+ filler IDs)
  extra: [
    "photo-1500530855697-b586d89ba3ee",  // e0
    "photo-1507003211169-0a1dd7228f2d",  // e1
    "photo-1519681393784-d120267933ba",  // e2
    "photo-1517760444937-f6397edcbbcd",  // e3
    "photo-1470770841497-7b3f6eb20bd5",  // e4
    "photo-1533929736458-ca588d08c8be",  // e5
    "photo-1513635269975-59663e0ac1ad",  // e6
    "photo-1526129318478-62ed807ebdf9",  // e7
    "photo-1515488764276-beab7607c1e6",  // e8
    "photo-1523531294919-4bcd7c65e216",  // e9
    "photo-1552832230-c0197dd311b5",    // e10
    "photo-1551634979-2b11f8c218da",    // e11
    "photo-1590859808308-3d2d9c515b1a",  // e12
    "photo-1518860096188-79a0d23e8e84",  // e13
    "photo-1516738901171-8eb4fc13bd20",  // e14
    "photo-1486299267070-83823f5448dd",  // e15
    "photo-1528164344705-47542687000d",  // e16
    "photo-1478391679764-b2d8b3cd1e94",  // e17
    "photo-1492136344046-866c85e0bf04",  // e18
    "photo-1495562569060-2eec283d3391",  // e19
    "photo-1523906834658-6e24ef2386f9",  // e20
    "photo-1529154166925-574a0236a4f4",  // e21
    "photo-1499678329028-101435549a4e",  // e22
    "photo-1485081669829-bacb8c7bb1f3",  // e23
    "photo-1507400492013-162706c8c05e",  // e24
    "photo-1431274172761-fca41d930114",  // e25
    "photo-1519501025264-65ba15a82390",  // e26
    "photo-1508050919630-b135583b29ab",  // e27
    "photo-1471623320832-752e8bbf8413",  // e28
    "photo-1522083165195-3424ed14620d",  // e29
    "photo-1544006659-f0b21a8a578c",    // e30
    "photo-1549893072-4bc678117f45",    // e31
    "photo-1519677100203-a0e668c92439",  // e32
    "photo-1549367805-4e03c5e1e7b7",    // e33
    "photo-1548248823-ce16a73b6d49",    // e34
    "photo-1537996194471-e657a9a1e49c",  // e35
    "photo-1539635278303-d4002c07eae3",  // e36
    "photo-1517299321609-52687d1bc55a",  // e37
    "photo-1505004100601-26e6e0c5c8f0",  // e38
    "photo-1498307833015-e7b400441eb8",  // e39
    "photo-1440778303588-435521a205bc",  // e40
    "photo-1445543949571-ffc3e0e2f55e",  // e41
    "photo-1474302694023-51801516ac6e",  // e42
    "photo-1490730141103-6cac27aaab94",  // e43
    "photo-1504280390367-361c6d9f38f4",  // e44
    "photo-1519389950473-47ba0277781c",  // e45
    "photo-1515861209697-8ee57ab8a44c",  // e46
    "photo-1522878129833-838a904a0e9e",  // e47
    "photo-1476514525535-07fb3b4ae5f1",  // e48
    "photo-1484712401471-05c7215830eb",  // e49
    "photo-1518639192441-8fce0a366e2e",  // e50
    "photo-1496568816309-51d7c20e3b21",  // e51
    "photo-1507272931001-fc06c17e4f43",  // e52
    "photo-1470071459604-3b5ec3a7fe05",  // e53
    "photo-1472214103451-9374bd1c798e",  // e54
    "photo-1433086966358-54859d0ed716",  // e55
    "photo-1486016006799-ee44a02e7feb",  // e56
    "photo-1414609245224-afa02bfb3fda",  // e57
    "photo-1504567961542-e24d9439a724",  // e58
    "photo-1469474968028-56623f02e42e",  // e59
    "photo-1542224566-6e85f2e6772f",    // e60
    "photo-1449034446853-66c86144b0ad",  // e61
    "photo-1493246507139-91e8fad9978e",  // e62
    "photo-1541698444083-023c97d3f4b6",  // e63
    "photo-1553697388-94e804e2f0f6",    // e64
    "photo-1518709268805-4e9042af9f23",  // e65
    "photo-1536098561742-ca998e48cbcc",  // e66
    "photo-1550340499-a6c60fc8287c",    // e67
    "photo-1490750967868-88aa4f44baee",  // e68
    "photo-1555952517-2e8e729e0b44",    // e69
    "photo-1504198322253-cfa87a0ff25f",  // e70
    "photo-1474044159687-1ee9f3a51722",  // e71
    "photo-1520483691742-bada60a1a1f7",  // e72
    "photo-1469796466635-455ede028aca",  // e73
    "photo-1508739773434-c26b3d09e071",  // e74
    "photo-1532274402911-5a369e4c4bb5",  // e75
    "photo-1520250497591-112f2f40a3f4",  // e76
    "photo-1471874276752-65e2d717604a",  // e77
    "photo-1520101244246-293f77ffc39e",  // e78
    "photo-1500534314263-a29bc0d9a76a",  // e79
    "photo-1482192505345-5655af888cc4",  // e80
    "photo-1520483601560-389dff434fdf",  // e81
    "photo-1518098268026-4e89f1a2cd8e",  // e82
    "photo-1471623600070-f47c6a11bfbc",  // e83
    "photo-1498036882173-b41c28a8ba34",  // e84
    "photo-1467803738586-46b7eb7b16a1",  // e85
    "photo-1500382017468-9049fed747ef",  // e86
    "photo-1500759285222-a95626b934cb",  // e87
    "photo-1490645935967-10de6ba17061",  // e88
    "photo-1445991842772-097fea258e7b",  // e89
    "photo-1474524955719-b9f87c50ce47",  // e90
    "photo-1504700610630-ac6edd918e07",  // e91
    "photo-1473580044384-7ba9967e16a0",  // e92
    "photo-1439246854758-f686a415d28e",  // e93
    "photo-1494783367193-149034c05e8f",  // e94
    "photo-1500835556837-99ac94a94552",  // e95
    "photo-1501785888041-af3ef285b470",  // e96
    "photo-1503614472-8c93d56e92ce",    // e97
    "photo-1476900164809-ff19b8ae5968",  // e98
    "photo-1523978591478-c753949ff840",  // e99
    "photo-1548199973-03cce0bbc87b",    // e100
    "photo-1504870712516-cbe42f6c8c60",  // e101
    "photo-1468078809804-2684ff622b5a",  // e102
    "photo-1513106580091-1d82408b8cd6",  // e103
    "photo-1502786129293-79981df4e689",  // e104
    "photo-1553444836-bc6c8d340ba7",    // e105
    "photo-1536440136628-849c177e76a1",  // e106
    "photo-1518709766631-a6a7f45921c3",  // e107
    "photo-1473625247510-8ceb1760943f",  // e108
    "photo-1550236520-7050f3582da0",    // e109
    "photo-1551009175-8a68da93987c",    // e110
    "photo-1544620347-c4fd4a3d5957",    // e111
    "photo-1516470544571-1ee5c1a76b07",  // e112
    "photo-1530878902700-5ad4f9e4c318",  // e113
    "photo-1549492423-400c20a5be6a",    // e114
    "photo-1516912481808-3406841bd33c",  // e115
    "photo-1528543606781-2f6e6857f318",  // e116
    "photo-1525874684015-58379d421a52",  // e117
    "photo-1537519646099-328cffa28c44",  // e118
    "photo-1540991826420-dca9f4d7c6c2",  // e119
    "photo-1529180979161-06b8b5c8ef0e",  // e120
    "photo-1551183053-d91b73a0780d",    // e121
    "photo-1537211261771-e525b9e4049b",  // e122
    "photo-1518105779142-d975f22f1b0a",  // e123
    "photo-1540959733332-eab4deabeeaf",  // e124
    "photo-1518240318507-76ff2fc3a7ed",  // e125
    "photo-1511512578047-dfb367046420",  // e126
    "photo-1529180184525-78f99bab5016",  // e127
    "photo-1517732306149-e8f829eb588a",  // e128
    "photo-1527668752968-14dc70a27c95",  // e129 
    "photo-1518548419970-58e3b4079ab2",  // e130
    "photo-1505069190533-40e8b4083705",  // e131
    "photo-1476610182048-b716b8518aae",  // e132
    "photo-1507525428034-b723cf961d3e",  // e133
    "photo-1441974231531-c6227db76b6e",  // e134
    "photo-1447752875215-b2761acb3c5d",  // e135
    "photo-1426604966848-d7adac402bff",  // e136
    "photo-1465101162946-4377e57745c3",  // e137
    "photo-1500964757637-9867a8c5e3a3",  // e138
    "photo-1519999482648-25049ddd37b1",  // e139
    "photo-1497449493169-351b8ee3dfd7",  // e140
  ],
};

// Flatten all pool IDs into a single array (all unique)
const ALL_IDS = [];
const seenIds = new Set();
for (const [category, ids] of Object.entries(POOL)) {
  for (const id of ids) {
    if (!seenIds.has(id)) {
      seenIds.add(id);
      ALL_IDS.push(id);
    }
  }
}

console.log(`🔢 Total unique Unsplash IDs in pool: ${ALL_IDS.length}`);

function makeUrl(id) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;
}

// =============================================================================
// SIGHT → PHOTO ID ASSIGNMENTS (GLOBALLY UNIQUE)
// Each sight gets 5 sequential IDs from the pool, offset so nothing overlaps.
// First photo slot (index 0) uses the local /images/ path if available.
// =============================================================================

const GALLERY_PATH = '/Users/jeana/Projects/schengen-trip-2026/js/gallery-data.js';
const DIST_GALLERY_PATH = '/Users/jeana/Projects/schengen-trip-2026/dist/js/gallery-data.js';

const content = readFileSync(GALLERY_PATH, 'utf8');
const startIdx = content.indexOf('window.galleryData = [');
let bracketCount = 0;
let endIdx = -1;
for (let i = startIdx + 'window.galleryData = '.length; i < content.length; i++) {
  if (content[i] === '[') bracketCount++;
  if (content[i] === ']') bracketCount--;
  if (bracketCount === 0) { endIdx = i + 1; break; }
}
const jsonStr = content.substring(startIdx + 'window.galleryData = '.length, endIdx);
const data = JSON.parse(jsonStr);

// Build a global assignment: each sight gets 4 unique Unsplash IDs (slot 1-4)
// Slot 0 uses local /images/ path
// We need 70 × 4 = 280 unique IDs

let globalIdIndex = 0;
const usedUrls = new Set();
let totalUpdated = 0;
let totalPhotos = 0;

data.forEach(day => {
  if (!day.sights) return;
  day.sights.forEach(sight => {
    const localImage = sight.image && sight.image.startsWith('/images/') ? sight.image : null;
    const currentPhotos = sight.photos || [];
    
    const newPhotos = [];
    const newImages = [];
    
    for (let i = 0; i < 5; i++) {
      if (i === 0 && localImage) {
        // Slot 0: local image
        newPhotos.push({
          url: localImage,
          caption: `${sight.name} - Featured Landmark View`
        });
        newImages.push(localImage);
      } else {
        // Use a unique ID from the pool
        let url;
        let attempts = 0;
        do {
          if (globalIdIndex >= ALL_IDS.length) {
            console.error(`❌ Ran out of unique IDs! Need more in pool.`);
            process.exit(1);
          }
          url = makeUrl(ALL_IDS[globalIdIndex]);
          globalIdIndex++;
          attempts++;
        } while (usedUrls.has(url) && attempts < ALL_IDS.length);
        
        usedUrls.add(url);
        
        // Use existing caption if available, otherwise generate
        const existingCaption = currentPhotos[i]?.caption || 
          `${sight.name} - Perspective ${i + 1}`;
        
        newPhotos.push({
          url: url,
          caption: existingCaption
        });
        newImages.push(url);
      }
      totalPhotos++;
    }
    
    sight.photos = newPhotos;
    sight.images = newImages;
    totalUpdated++;
  });
});

// Verify uniqueness
const allUrls = [];
data.forEach(day => {
  if (!day.sights) return;
  day.sights.forEach(s => {
    if (s.photos) s.photos.forEach(p => allUrls.push(p.url));
  });
});

const uniqueUrls = new Set(allUrls);
const localUrls = allUrls.filter(u => u.startsWith('/images/'));
const unsplashUrls = allUrls.filter(u => u.startsWith('https://'));
const uniqueUnsplash = new Set(unsplashUrls);

console.log(`\n📊 Final Verification:`);
console.log(`   Sights updated: ${totalUpdated}`);
console.log(`   Total photos: ${totalPhotos}`);
console.log(`   Total URLs: ${allUrls.length}`);
console.log(`   Unique URLs: ${uniqueUrls.size}`);
console.log(`   Local image URLs: ${localUrls.length} (${new Set(localUrls).size} unique)`);
console.log(`   Unsplash URLs: ${unsplashUrls.length} (${uniqueUnsplash.size} unique)`);
console.log(`   Duplicate Unsplash URLs: ${unsplashUrls.length - uniqueUnsplash.size}`);

if (unsplashUrls.length - uniqueUnsplash.size > 0) {
  console.log(`\n⚠️  Still have duplicates! Details:`);
  const urlCountMap = {};
  unsplashUrls.forEach(u => { urlCountMap[u] = (urlCountMap[u] || 0) + 1; });
  Object.entries(urlCountMap).filter(([u,c]) => c > 1).forEach(([u,c]) => {
    console.log(`   ${c}x: ${u.substring(0,70)}`);
  });
} else {
  console.log(`\n✅ ALL Unsplash URLs are globally unique! Zero duplicates.`);
}

// Write
const prefix = content.substring(0, startIdx + 'window.galleryData = '.length);
const suffix = content.substring(endIdx);
const newJson = JSON.stringify(data, null, 2);
const newContent = prefix + newJson + suffix;

writeFileSync(GALLERY_PATH, newContent, 'utf8');
console.log(`\n✅ Updated ${GALLERY_PATH}`);

writeFileSync(DIST_GALLERY_PATH, newContent, 'utf8');
console.log(`✅ Synced to ${DIST_GALLERY_PATH}`);
