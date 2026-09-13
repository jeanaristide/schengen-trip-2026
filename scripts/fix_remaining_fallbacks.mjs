/**
 * fix_remaining_fallbacks.mjs
 * Fixes the 7 remaining picsum fallback photos by fetching real Wikimedia images.
 */
import { readFileSync, writeFileSync } from 'fs';

async function searchWikimedia(query, limit = 8) {
  const url = `https://commons.wikimedia.org/w/api.php?` + new URLSearchParams({
    action: 'query', generator: 'search',
    gsrsearch: `${query} filetype:bitmap`, gsrnamespace: '6', gsrlimit: String(limit),
    prop: 'imageinfo', iiprop: 'url|size|mime', iiurlwidth: '1200',
    format: 'json', origin: '*'
  });
  const resp = await fetch(url);
  const text = await resp.text();
  let data;
  try { data = JSON.parse(text); } catch { return []; }
  if (!data.query?.pages) return [];
  const results = [];
  for (const page of Object.values(data.query.pages)) {
    if (!page.imageinfo?.[0]) continue;
    const info = page.imageinfo[0];
    if (!info.mime?.includes('jpeg')) continue;
    if (info.width < 600) continue;
    const thumbUrl = info.thumburl || info.url;
    if (thumbUrl) results.push(thumbUrl);
  }
  return results;
}

const delay = ms => new Promise(r => setTimeout(r, ms));

async function main() {
  const GALLERY_PATH = '/Users/jeana/Projects/schengen-trip-2026/js/gallery-data.js';
  const DIST = '/Users/jeana/Projects/schengen-trip-2026/dist/js/gallery-data.js';
  const content = readFileSync(GALLERY_PATH, 'utf8');
  const si = content.indexOf('window.galleryData = [');
  let bc=0, ei=-1;
  for(let i=si+'window.galleryData = '.length;i<content.length;i++){
    if(content[i]==='[')bc++;if(content[i]===']')bc--;if(bc===0){ei=i+1;break;}
  }
  const data = JSON.parse(content.substring(si+'window.galleryData = '.length, ei));

  // Collect all existing URLs to avoid duplicates
  const existingUrls = new Set();
  data.forEach(d => d.sights?.forEach(s => s.photos?.forEach(p => {
    if (!p.url.includes('picsum')) existingUrls.add(p.url);
  })));

  // Fix queries for the 3 problem sights
  const FIXES = {
    "The Jordaan Canal District & Boat Cruise": [
      "Amsterdam Jordaan canal houses", "Amsterdam canal boat tour",
      "Jordaan neighborhood Amsterdam", "Amsterdam Bloemgracht canal",
      "Amsterdam Prinsengracht boat"
    ],
    "Little Tokyo (Immermannstraße)": [
      "Düsseldorf Japantown", "Düsseldorf Japanese quarter",
      "Immermannstrasse Düsseldorf", "Japanese restaurant Düsseldorf",
      "Düsseldorf Altstadt nightlife", "EKO Haus Japanese garden Düsseldorf",
      "Düsseldorf Japanese temple"
    ],
    "Bern Switzerland LDS Temple": [
      "Bern Switzerland landscape", "Bern Zollikofen church",
      "Swiss temple building", "Bern countryside chapel",
      "Zollikofen Bern architecture"
    ]
  };

  for (const [sightName, queries] of Object.entries(FIXES)) {
    console.log(`\n🔧 Fixing: ${sightName}`);
    
    // Find this sight in data
    let targetSight = null;
    for (const day of data) {
      if (!day.sights) continue;
      for (const s of day.sights) {
        if (s.name === sightName) { targetSight = s; break; }
      }
      if (targetSight) break;
    }
    if (!targetSight) { console.log('  ❌ Not found!'); continue; }

    // Find which photo indices need fixing
    const needsFix = [];
    targetSight.photos.forEach((p, i) => {
      if (p.url.includes('picsum')) needsFix.push(i);
    });
    console.log(`  Need to fix indices: ${needsFix.join(', ')}`);

    // Fetch photos with different queries
    const newUrls = [];
    for (const q of queries) {
      if (newUrls.length >= needsFix.length) break;
      await delay(2000); // generous delay
      console.log(`  Searching: "${q}"`);
      const results = await searchWikimedia(q, 5);
      for (const u of results) {
        if (newUrls.length >= needsFix.length) break;
        if (!existingUrls.has(u) && !newUrls.includes(u)) {
          newUrls.push(u);
          existingUrls.add(u);
          console.log(`  ✅ Found: ${u.substring(0, 70)}...`);
        }
      }
    }

    // Apply fixes
    const CAPTIONS = ['Featured Landmark View', 'Wide-Angle Perspective', 'Close-Up Detail', 'Atmospheric Angle', 'Alternate Vantage Point'];
    for (let j = 0; j < needsFix.length; j++) {
      const idx = needsFix[j];
      if (j < newUrls.length) {
        targetSight.photos[idx] = { url: newUrls[j], caption: `${sightName} - ${CAPTIONS[idx]}` };
        targetSight.images[idx] = newUrls[j];
        if (idx === 0) targetSight.image = newUrls[j];
      }
    }
    console.log(`  Fixed ${Math.min(newUrls.length, needsFix.length)}/${needsFix.length} photos`);
  }

  // Verify
  let remaining = 0;
  data.forEach(d => d.sights?.forEach(s => s.photos?.forEach(p => {
    if (p.url.includes('picsum')) remaining++;
  })));
  console.log(`\n📊 Remaining picsum fallbacks: ${remaining}`);

  const prefix = content.substring(0, si + 'window.galleryData = '.length);
  const suffix = content.substring(ei);
  const out = prefix + JSON.stringify(data, null, 2) + suffix;
  writeFileSync(GALLERY_PATH, out, 'utf8');
  writeFileSync(DIST, out, 'utf8');
  console.log('✅ Saved and synced!');
}

main().catch(e => { console.error(e); process.exit(1); });
