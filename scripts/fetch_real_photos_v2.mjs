/**
 * fetch_real_photos_v2.mjs
 * 
 * Fetches REAL landmark photos from Wikimedia Commons with aggressive rate-limit handling.
 * Uses batched queries (5 results per query = 1 API call per sight instead of 5).
 * Includes exponential backoff on rate limits.
 * 
 * Usage: node scripts/fetch_real_photos_v2.mjs
 */

import { readFileSync, writeFileSync } from 'fs';

// One optimized search query per sight (fetches 5 results each)
const SEARCH_QUERIES = {
  // DAY 2 – AMSTERDAM
  "UNESCO 17th-Century Canal Ring": "Amsterdam canal ring grachtengordel",
  "Dam Square & Royal Palace": "Dam Square Amsterdam Royal Palace",
  "Begijnhof Courtyard": "Begijnhof Amsterdam",
  "Leidseplein & Amsterdam Light Festival": "Amsterdam Light Festival canal",

  // DAY 3
  "Zaanse Schans Historic Windmills": "Zaanse Schans windmills",
  "Rijksmuseum at Museumplein": "Rijksmuseum Amsterdam",
  "Ice Village Amsterdam & Christmas Market": "Amsterdam ice skating Museumplein winter",
  "The Jordaan Canal District & Boat Cruise": "Jordaan Amsterdam canal district",

  // DAY 4
  "The Hague Netherlands LDS Temple": "Zoetermeer Netherlands temple",
  "Peace Palace (Vredespaleis)": "Vredespaleis Peace Palace Hague",
  "International Criminal Court (ICC)": "International Criminal Court ICC Hague building",

  // DAY 5
  "Cologne Cathedral (Kölner Dom)": "Kölner Dom Cologne Cathedral",
  "Hohenzollern Bridge (Hohenzollernbrücke)": "Hohenzollernbrücke Cologne bridge",
  "Lindt Chocolate Museum (Schokoladenmuseum)": "Schokoladenmuseum Köln chocolate museum",
  "Cologne Cathedral Christmas Market (Roncalliplatz)": "Weihnachtsmarkt Kölner Dom Christmas market",

  // DAY 6
  "Düsseldorf Altstadt & Rhine River Promenade": "Düsseldorf Altstadt Rheinufer",
  "Düsseldorf 7 Themed Christmas Markets": "Düsseldorf Weihnachtsmarkt Christmas",
  "Königsallee & Corneliusplatz Ice Rink": "Königsallee Düsseldorf",
  "Little Tokyo (Immermannstraße)": "Immermannstraße Düsseldorf Japanese quarter",

  // DAY 7
  "Eiserner Steg (Iron Footbridge)": "Eiserner Steg Frankfurt",
  "Römerberg & Frankfurt Christmas Market": "Römerberg Frankfurt",
  "Frankfurt Kaiserdom (Cathedral St. Bartholomäus)": "Kaiserdom Frankfurt Dom",
  "Paulsplatz Christmas Market": "Paulskirche Paulsplatz Frankfurt",

  // DAY 8
  "Zeil Shopping Promenade & Museumsufer": "Zeil Frankfurt shopping",
  "Goethe House & Museum": "Goethe Haus Frankfurt",
  "The Frankfurt Germany LDS Temple": "Friedrichsdorf Frankfurt temple",
  "Museumsufer (Main Riverfront Promenade)": "Museumsufer Frankfurt Main",

  // DAY 9
  "Place Kléber 30m Great Christmas Tree": "Place Kléber Strasbourg sapin Noël",
  "Petite France Half-Timbered Quarter": "Petite France Strasbourg",
  "Strasbourg Cathedral (Cathédrale Notre-Dame)": "Cathédrale Notre-Dame Strasbourg",
  "Christkindelsmärik at Place Broglie": "Christkindelsmärik Strasbourg marché Noël",

  // DAY 10
  "Colmar Old Town Christmas Market at Koïfhus": "Colmar marché Noël Christmas Alsace",
  "Colmar Petite Venise (Beauty & the Beast)": "Colmar Petite Venise",
  "Maison Pfister (Howl's Moving Castle)": "Maison Pfister Colmar",

  // DAY 11
  "Bern UNESCO Old Town & Covered Sandstone Arcades (Lauben)": "Bern Altstadt Kramgasse Lauben",
  "Zytglogge Astronomical Clock Tower": "Zytglogge Bern",
  "Nydeggbrücke Bridge & Bear Park Overlook": "Nydeggbrücke Bern Aare",
  "Bundeshaus (Swiss Federal Palace & Terrace)": "Bundeshaus Bern Swiss Parliament",

  // DAY 12
  "First Cliff Walk by Tissot (Mount First, 2,168m)": "First Cliff Walk Grindelwald",
  "Grindelwald Alpine Valley & Eiger North Face": "Grindelwald Eiger North Face",
  "Iseltwald Landing Stage (Lake Brienz CLOY Pier)": "Iseltwald Lake Brienz pier",

  // DAY 13
  "Lauterbrunnen Valley & Staubbach Falls": "Lauterbrunnen Staubbach Falls valley",
  "Mürren Car-Free Alpine Village (1,638m)": "Mürren village Bernese Oberland",
  "Blausee Nature Park (Path of the 1,000 Lights)": "Blausee nature park Switzerland",

  // DAY 14
  "Spiez Castle & Lake Thun Waterfront": "Schloss Spiez Lake Thun",
  "Panoramabrücke Sigriswil Suspension Bridge": "Panoramabrücke Sigriswil",
  "Bern Rosengarten Sunset Viewpoint over Aare River": "Rosengarten Bern panorama Aare",

  // DAY 15
  "Bern Switzerland LDS Temple": "Bern Switzerland temple Zollikofen",
  "Bern Temple Alpine Grounds & Pine Reflection Path": "Bern Zollikofen temple grounds",

  // DAY 16
  "Musée du Louvre & Glass Pyramid": "Louvre pyramid Paris museum",
  "Tuileries Garden & Place de la Concorde": "Jardin Tuileries Paris Concorde",
  "Galeries Lafayette Haussmann Grand Dome": "Galeries Lafayette Paris dome",
  "Arc de Triomphe (Rooftop Panoramic Terrace)": "Arc de Triomphe Paris",
  "Avenue des Champs-Élysées": "Champs-Élysées Paris avenue",

  // DAY 17
  "Musée d'Orsay (Gare d'Orsay)": "Musée Orsay Paris",
  "Notre-Dame de Paris Cathedral (Île de la Cité)": "Notre-Dame Paris cathedral",
  "Shakespeare and Company Historic Bookstore": "Shakespeare Company Paris bookstore",
  "The Eiffel Tower & Trocadéro View (NYE Countdown)": "Eiffel Tower Paris Tour Eiffel",
  "Champs-Élysées NYE Celebration & Light Show": "Champs Elysees illuminations Paris nuit",

  // DAY 18
  "Jardin du Luxembourg (Luxembourg Gardens)": "Jardin Luxembourg Paris",
  "Place des Vosges & Historic Le Marais": "Place des Vosges Paris",
  "Latin Quarter & Saint-Germain-des-Prés": "Saint-Germain-des-Prés Paris quartier latin",
  "Seine Riverbanks & Historic Quays Promenade": "Seine Paris quais river",

  // DAY 19
  "Palace of Versailles (Château de Versailles)": "Château Versailles palace",
  "Galerie des Glaces (Hall of Mirrors Interior)": "Galerie Glaces Versailles Hall Mirrors",
  "Versailles Palace Orangery & Parterre Gardens": "Versailles gardens parterre orangerie",
  "Paris France LDS Temple": "Le Chesnay temple Paris",

  // DAY 20
  "Boulevard Saint-Michel & Latin Quarter Stroll": "Fontaine Saint-Michel Paris boulevard",
  "Pont Alexandre III Beaux-Arts Bridge": "Pont Alexandre III Paris",
  "Grand Palais Glass Vault & Exhibition Hall": "Grand Palais Paris nef",
};

async function searchWikimedia(query, limit = 8) {
  const url = `https://commons.wikimedia.org/w/api.php?` + new URLSearchParams({
    action: 'query',
    generator: 'search',
    gsrsearch: `${query} filetype:bitmap`,
    gsrnamespace: '6',
    gsrlimit: String(limit),
    prop: 'imageinfo',
    iiprop: 'url|size|mime',
    iiurlwidth: '1200',
    format: 'json',
    origin: '*'
  });

  const resp = await fetch(url);
  if (!resp.ok) {
    if (resp.status === 429) {
      return 'RATE_LIMITED';
    }
    throw new Error(`HTTP ${resp.status}`);
  }
  
  const text = await resp.text();
  let data;
  try {
    data = JSON.parse(text);
  } catch {
    if (text.includes('You are ma')) return 'RATE_LIMITED';
    throw new Error('Invalid JSON: ' + text.substring(0, 100));
  }
  
  if (!data.query || !data.query.pages) return [];
  
  const results = [];
  for (const page of Object.values(data.query.pages)) {
    if (!page.imageinfo?.[0]) continue;
    const info = page.imageinfo[0];
    if (!info.mime?.includes('jpeg')) continue;
    if (info.width < 600 || info.height < 300) continue;
    const thumbUrl = info.thumburl || info.url;
    if (thumbUrl) results.push(thumbUrl);
  }
  return results;
}

const delay = ms => new Promise(r => setTimeout(r, ms));

async function fetchWithRetry(query, limit, maxRetries = 3) {
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    const result = await searchWikimedia(query, limit);
    if (result === 'RATE_LIMITED') {
      const waitMs = Math.min(2000 * Math.pow(2, attempt), 15000);
      console.log(`   ⏳ Rate limited, waiting ${waitMs/1000}s...`);
      await delay(waitMs);
      continue;
    }
    return result;
  }
  return [];
}

async function main() {
  const GALLERY_PATH = '/Users/jeana/Projects/schengen-trip-2026/js/gallery-data.js';
  const DIST_GALLERY_PATH = '/Users/jeana/Projects/schengen-trip-2026/dist/js/gallery-data.js';

  const content = readFileSync(GALLERY_PATH, 'utf8');
  const startIdx = content.indexOf('window.galleryData = [');
  let bc = 0, endIdx = -1;
  for (let i = startIdx + 'window.galleryData = '.length; i < content.length; i++) {
    if (content[i] === '[') bc++;
    if (content[i] === ']') bc--;
    if (bc === 0) { endIdx = i + 1; break; }
  }
  const data = JSON.parse(content.substring(startIdx + 'window.galleryData = '.length, endIdx));

  const globalUsedUrls = new Set();
  let successCount = 0;
  let failCount = 0;
  const CAPTIONS = ['Featured Landmark View', 'Wide-Angle Perspective', 'Close-Up Detail', 'Atmospheric Angle', 'Alternate Vantage Point'];

  for (const day of data) {
    if (!day.sights) continue;
    for (const sight of day.sights) {
      const query = SEARCH_QUERIES[sight.name];
      if (!query) {
        console.log(`⚠️ No query for "${sight.name}"`);
        failCount++;
        continue;
      }

      console.log(`🔍 Day ${day.dayNum}: ${sight.name}`);
      
      // Fetch 8 results in ONE API call
      const urls = await fetchWithRetry(query, 8);
      
      // Pick 5 unique URLs
      const picked = [];
      for (const u of urls) {
        if (picked.length >= 5) break;
        if (!globalUsedUrls.has(u)) {
          picked.push(u);
          globalUsedUrls.add(u);
        }
      }
      
      // If we don't have 5, try an alternative query
      if (picked.length < 5) {
        const parts = query.split(' ');
        const altQuery = parts.length > 2 ? parts.slice(0, 2).join(' ') : query + ' photo';
        await delay(800);
        const altUrls = await fetchWithRetry(altQuery, 8);
        for (const u of altUrls) {
          if (picked.length >= 5) break;
          if (!globalUsedUrls.has(u)) {
            picked.push(u);
            globalUsedUrls.add(u);
          }
        }
      }
      
      // If STILL not 5, try city name
      if (picked.length < 5) {
        const cityName = (day.city || '').split(' ')[0];
        if (cityName) {
          await delay(800);
          const cityUrls = await fetchWithRetry(`${cityName} cityscape landmark`, 10);
          for (const u of cityUrls) {
            if (picked.length >= 5) break;
            if (!globalUsedUrls.has(u)) {
              picked.push(u);
              globalUsedUrls.add(u);
            }
          }
        }
      }

      if (picked.length === 5) {
        console.log(`   ✅ Got 5 photos`);
        successCount++;
      } else {
        console.log(`   ⚠️ Only ${picked.length}/5 photos`);
        // Pad with picsum fallbacks using unique seeds
        while (picked.length < 5) {
          const seed = sight.name.toLowerCase().replace(/[^a-z0-9]/g, '-').substring(0, 30) + '-fb' + picked.length;
          picked.push(`https://picsum.photos/seed/${seed}/1200/800`);
        }
        failCount++;
      }

      sight.photos = picked.map((url, i) => ({ url, caption: `${sight.name} - ${CAPTIONS[i]}` }));
      sight.images = picked;
      sight.image = picked[0];

      // Generous delay between sights
      await delay(1200);
    }
  }

  console.log(`\n═══════════════════════════════════`);
  console.log(`  Complete: ${successCount} sights fully loaded, ${failCount} had fallbacks`);
  console.log(`  Unique URLs: ${globalUsedUrls.size}`);
  console.log(`═══════════════════════════════════`);

  const prefix = content.substring(0, startIdx + 'window.galleryData = '.length);
  const suffix = content.substring(endIdx);
  writeFileSync(GALLERY_PATH, prefix + JSON.stringify(data, null, 2) + suffix, 'utf8');
  console.log(`✅ Updated ${GALLERY_PATH}`);
  writeFileSync(DIST_GALLERY_PATH, prefix + JSON.stringify(data, null, 2) + suffix, 'utf8');
  console.log(`✅ Synced to ${DIST_GALLERY_PATH}`);
}

main().catch(err => { console.error('Fatal:', err); process.exit(1); });
