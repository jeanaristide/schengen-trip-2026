/**
 * resolve_all_exact_urls.mjs
 * Normalizes filenames (spaces vs underscores), resolves exact CDN thumbnail URLs
 * directly from MediaWiki API, and verifies HTTP 200 on all 350 photos.
 */
import { readFileSync, writeFileSync } from 'fs';

const GALLERY_PATH = '/Users/jeana/Projects/schengen-trip-2026/js/gallery-data.js';
const DIST_PATH = '/Users/jeana/Projects/schengen-trip-2026/dist/js/gallery-data.js';

const delay = ms => new Promise(r => setTimeout(r, ms));

function normalize(str) {
  if (!str) return '';
  return decodeURIComponent(str).replace(/_/g, ' ').trim().toLowerCase();
}

function extractFileTitle(url) {
  try {
    let fn = decodeURIComponent(url.split('/').pop().split('?')[0]);
    fn = fn.replace(/^\d+px-/, '');
    return fn;
  } catch {
    return null;
  }
}

async function getBatchExactUrls(fileTitles) {
  const titlesQuery = fileTitles.map(t => 'File:' + t).join('|');
  const url = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(titlesQuery)}&prop=imageinfo&iiprop=url&iiurlwidth=1280&format=json`;

  const res = await fetch(url, {
    headers: {
      'User-Agent': 'SchengenTourPlanner/2.0 (travel@schengentour.org)'
    }
  });
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  const data = await res.json();
  const resultMap = {};

  for (const page of Object.values(data.query?.pages || {})) {
    const rawTitle = page.title?.replace(/^File:/, '');
    const thumb = page.imageinfo?.[0]?.thumburl || page.imageinfo?.[0]?.url;
    if (rawTitle && thumb) {
      resultMap[normalize(rawTitle)] = thumb;
    }
  }
  return resultMap;
}

async function main() {
  console.log('Resolving exact CDN thumbnail URLs with normalized titles...');

  const content = readFileSync(GALLERY_PATH, 'utf8');
  const si = content.indexOf('window.galleryData = [');
  let bc = 0, ei = -1;
  for (let i = si + 'window.galleryData = '.length; i < content.length; i++) {
    if (content[i] === '[') bc++;
    if (content[i] === ']') bc--;
    if (bc === 0) { ei = i + 1; break; }
  }
  const data = JSON.parse(content.substring(si + 'window.galleryData = '.length, ei));

  // Collect all unique file titles
  const rawTitleSet = new Set();
  for (const day of data) {
    for (const s of (day.sights || [])) {
      for (const p of (s.photos || [])) {
        const title = extractFileTitle(p.url);
        if (title) rawTitleSet.add(title.replace(/_/g, ' '));
      }
    }
  }
  const titleList = Array.from(rawTitleSet);
  console.log(`Found ${titleList.length} unique normalized file titles.`);

  // Batch query in chunks of 20
  const urlMap = {};
  const chunkSize = 20;
  for (let i = 0; i < titleList.length; i += chunkSize) {
    const chunk = titleList.slice(i, i + chunkSize);
    await delay(300);
    try {
      const results = await getBatchExactUrls(chunk);
      Object.assign(urlMap, results);
      process.stdout.write(`Resolved ${Math.min(i + chunkSize, titleList.length)}/${titleList.length} files...\r`);
    } catch (err) {
      console.error(`Error querying chunk starting at ${i}:`, err.message);
    }
  }
  console.log(`\nSuccessfully resolved ${Object.keys(urlMap).length} exact URLs!`);

  // Update galleryData
  let updatedCount = 0;
  let missingMap = [];
  for (const day of data) {
    for (const s of (day.sights || [])) {
      for (let j = 0; j < (s.photos || []).length; j++) {
        const p = s.photos[j];
        const title = extractFileTitle(p.url);
        const norm = normalize(title);
        if (norm && urlMap[norm]) {
          p.url = urlMap[norm];
          s.images[j] = urlMap[norm];
          if (j === 0) s.image = urlMap[norm];
          updatedCount++;
        } else {
          missingMap.push({ sight: s.name, title: title, url: p.url });
        }
      }
    }
  }
  console.log(`Updated ${updatedCount}/350 photo entries in galleryData.`);
  if (missingMap.length > 0) {
    console.log('Missing from resolution map:', missingMap.length);
    missingMap.slice(0, 5).forEach(m => console.log('  -', m.sight, ':', m.title));
  }

  const prefix = content.substring(0, si + 'window.galleryData = '.length);
  const suffix = content.substring(ei);
  const out = prefix + JSON.stringify(data, null, 2) + suffix;

  writeFileSync(GALLERY_PATH, out, 'utf8');
  writeFileSync(DIST_PATH, out, 'utf8');
  console.log('Saved to js/gallery-data.js and dist/js/gallery-data.js');

  // Verify all 350 URLs
  console.log('\nVerifying all 350 URLs via HTTP HEAD...');
  const allPhotos = [];
  for (const day of data) {
    for (const s of (day.sights || [])) {
      for (const p of (s.photos || [])) {
        allPhotos.push({ sight: s.name, url: p.url });
      }
    }
  }

  const failed = [];
  for (let i = 0; i < allPhotos.length; i += 25) {
    const chunk = allPhotos.slice(i, i + 25);
    const promises = chunk.map(async item => {
      try {
        const res = await fetch(item.url, {
          method: 'HEAD',
          headers: { 'User-Agent': 'SchengenTourPlanner/2.0 (travel@schengentour.org)' }
        });
        if (!res.ok) {
          failed.push({ sight: item.sight, url: item.url, status: res.status });
        }
      } catch (err) {
        failed.push({ sight: item.sight, url: item.url, error: err.message });
      }
    });
    await Promise.all(promises);
    process.stdout.write(`Verified ${Math.min(i + 25, allPhotos.length)}/${allPhotos.length}...\r`);
  }

  console.log(`\nVerification Complete! Failed URLs: ${failed.length}`);
  if (failed.length > 0) {
    console.log('Failed:', failed);
  } else {
    console.log('🎉 100% OF ALL 350 PHOTOS RETURNED HTTP 200 OK!');
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
