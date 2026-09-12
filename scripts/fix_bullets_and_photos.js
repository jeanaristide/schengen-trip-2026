const fs = require('fs');
const path = require('path');

console.log('🚀 Starting Complete Bullet Points & Photo System Restoration...');

// 1. UPDATE css/style.css & dist/css/style.css
const cssReplacement = `/* ==========================================================================
   Activity Sublist & Bullet Points Layout (Guaranteed Markers & Clean Alignment)
   ========================================================================== */
.activity-sublist {
  margin: 4px 0 6px 18px !important;
  padding: 0 !important;
  list-style-type: disc !important;
}

.activity-sublist li {
  display: list-item !important;
  list-style-type: disc !important;
  list-style-position: outside !important;
  font-size: 12px;
  line-height: 1.5;
  color: #334155;
  margin-bottom: 2px;
  position: relative;
  padding-left: 2px;
}

.card-activity-item .activity-sublist li {
  font-size: 12.5px;
}

/* Landmark Places with Instant Photo Preview Identifier (Bold Sapphire + Dotted Underline + 📸) */
.activity-sublist li.has-photo-preview,
li.has-photo-preview {
  display: list-item !important;
  list-style-type: disc !important;
  color: #1d4ed8 !important;
  font-weight: 600 !important;
  cursor: pointer;
  position: relative;
  text-decoration: underline dotted rgba(37, 99, 235, 0.45) 1.5px;
  text-underline-offset: 3px;
  transition: color 0.16s ease, background-color 0.16s ease;
  border-radius: 4px;
}

.activity-sublist li.has-photo-preview::marker,
li.has-photo-preview::marker {
  color: #2563eb !important;
  font-size: 1.1em;
}

.activity-sublist li.has-photo-preview:hover,
li.has-photo-preview:hover {
  color: #1e40af !important;
  background: rgba(37, 99, 235, 0.08);
  text-decoration: underline solid #2563eb 1.5px;
}

.activity-sublist li.has-photo-preview::after,
li.has-photo-preview::after {
  content: " 📸";
  font-size: 0.72rem;
  opacity: 0.82;
  vertical-align: baseline;
  transition: transform 0.2s ease, opacity 0.2s ease;
  display: inline-block;
  margin-left: 3px;
}

.activity-sublist li.has-photo-preview:hover::after,
li.has-photo-preview:hover::after {
  opacity: 1;
  transform: scale(1.18);
}

/* Neutral Traveling, Transit & Sunday Reflection Items (No Photo Preview) */
.activity-sublist li.transit-bullet-item,
li.transit-bullet-item {
  display: list-item !important;
  list-style-type: disc !important;
  color: #64748b !important;
  font-weight: 400 !important;
  cursor: default !important;
  text-decoration: none !important;
  background: none !important;
}

.activity-sublist li.transit-bullet-item::marker,
li.transit-bullet-item::marker {
  color: #94a3b8 !important;
}

.activity-sublist li.transit-bullet-item:hover,
li.transit-bullet-item:hover {
  background: none !important;
  color: #64748b !important;
  font-weight: 400 !important;
}

.activity-sublist li.transit-bullet-item::after,
li.transit-bullet-item::after {
  display: none !important;
  content: none !important;
}
`;

['css/style.css', 'dist/css/style.css'].forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let css = fs.readFileSync(filePath, 'utf8');
    const marker = '/* ==========================================================================\n   Landmark Places with Instant Photo Preview Identifier';
    if (css.includes(marker)) {
      const parts = css.split(marker);
      css = parts[0] + cssReplacement;
    } else {
      css = css + '\n\n' + cssReplacement;
    }
    fs.writeFileSync(filePath, css, 'utf8');
    console.log(`✅ Updated ${filePath} with guaranteed bullet display & sapphire/slate markers!`);
  }
});

// Classification Helper
function classifyActivity(text, dayNum) {
  if (dayNum === 1 || dayNum === 21) return 'transit';
  const t = text.trim();
  const lower = t.toLowerCase();

  // Transit arrows
  if (t.includes('➔') || t.includes('->') || t.includes('→') || t.includes('&rarr;') || t.includes('&#10140;')) return 'transit';

  // Sunday worship / reflection
  if (lower.includes('sunday church') || lower.includes('sunday reflection') || lower.includes('worship & reflection') || lower.includes('sacrament')) return 'transit';

  // Luggage / check-in / check-out / rest / meals / hotel
  if (lower.includes('luggage drop') || lower.includes('check-in') || lower.includes('check-out') || lower.includes('baggage check-in') || lower.includes('pack bags')) return 'transit';
  if (lower.includes('warm drinks') || lower.includes('early rest') || lower.includes('sleep in real hotel bed') || lower.includes('rest & recovery') || lower.includes('café rest') || lower.includes('relaxing evening')) return 'transit';
  if (lower.includes('dinner') || lower.includes('fondue dinner') || lower.includes('roesti dinner') || lower.includes('lunch in old town') || lower.includes('breakfast at victoria')) return 'transit';
  if (lower.includes('hotel cristall') || lower.includes('amsterdam base') || lower.includes('alpenblick coliving') || lower.includes('premier inn frankfurt')) return 'transit';

  // Specific transit prefixes & phrases
  const transitKeywords = [
    'sbb train', 'sbb intercity', 'db ice', 'sncf ter', 'sncf tgv', 'high-speed tgv',
    'tgv lyria', 'flixbus', 'postbus', 'sti bus', 'bus 230', 'blm cable car', 'mountain rail',
    's-bahn', 'u-bahn', 'rer line', 'rer c', 'metro line 14', 'automated metro',
    'tram line', 'phébus bus', 'south western railway', 'direct transit', 'regional train',
    'arrive amsterdam', 'arrive paris', 'arrive london', 'transfer to paris', 'descend to valley',
    'descend to grindelwald', 'train to interlaken', 'eurotunnel', 'leshuttle', 'overnight coach'
  ];
  if (transitKeywords.some(k => lower.includes(k))) return 'transit';

  return 'sight';
}

// 2. REFINE js/gallery-data.js ALIASES
['js/gallery-data.js', 'dist/js/gallery-data.js'].forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Day 14 Spiez: remove 'lake thun' so it does not hijack Sigriswil
    content = content.replace(
      /\"name\":\s*\"Spiez Castle & Lake Thun Waterfront\",[\s\S]*?\"aliases\":\s*\[[\s\S]*?\]/,
      `"name": "Spiez Castle & Lake Thun Waterfront",
        "category": "🏰 Medieval Castle & Lakeside",
        "time": "Morning (09:30 – 12:30)",
        "location": "Spiez, Lake Thun, Switzerland",
        "image": "/images/sights/lake-thun-spiez.jpg",
        "admission": "Free ($0 AUD) · Public Bay & Promenade",
        "isPaid": false,
        "hours": "Open 24/7 (Waterfront Bay)",
        "desc": "Fairytale 13th-century medieval castle standing majestically over peaceful turquoise bay, winter vineyards, and lakeside promenade on Lake Thun.",
        "mapsQuery": "Schloss Spiez Switzerland",
        "coords": [46.6896, 7.6865],
        "aliases": ["spiez castle", "spiez bay", "spiez", "schloss spiez", "waterfront promenade", "castle bay"]`
    );

    // Day 14 Sigriswil: make aliases super explicit
    content = content.replace(
      /\"name\":\s*\"Panoramabrücke Sigriswil Suspension Bridge\",[\s\S]*?\"aliases\":\s*\[[\s\S]*?\]/,
      `"name": "Panoramabrücke Sigriswil Suspension Bridge",
        "category": "🌉 Panoramic Suspension Bridge",
        "time": "Afternoon (13:00 – 15:30)",
        "location": "Sigriswil, Switzerland",
        "image": "/images/sights/panoramabruecke-sigriswil.jpg",
        "admission": "8 CHF (~A$14 AUD) · Day Pass",
        "isPaid": true,
        "hours": "Open Daily 08:00–20:00",
        "desc": "A breathtaking 340-meter pedestrian suspension bridge spanning 182 meters above the dramatic Gummischlucht gorge with panoramic alpine vistas.",
        "mapsQuery": "Panoramabrücke Sigriswil",
        "coords": [46.7167, 7.7167],
        "aliases": ["sigriswil", "panoramabrücke", "panoramabruecke", "sigriswil bridge", "suspension bridge", "gummischlucht"]`
    );

    // Day 19 Versailles Gardens: remove generic 'gardens'
    content = content.replace(
      /\"name\":\s*\"Versailles Palace Orangery & Parterre Gardens\",[\s\S]*?\"aliases\":\s*\[[\s\S]*?\]/,
      `"name": "Versailles Palace Orangery & Parterre Gardens",
        "category": "🌳 Classical French Royal Gardens",
        "time": "Midday (11:30 – 13:30)",
        "location": "Château de Versailles, Versailles",
        "image": "/images/sights/versailles-gardens.jpg",
        "admission": "Free ($0 AUD in Winter Low Season)",
        "isPaid": false,
        "hours": "Gardens Open Daily 08:00–18:00",
        "desc": "André Le Nôtre's geometric French formal garden masterpiece featuring the south Parterre, Orangery palm terrace, and monumental bronze statues.",
        "mapsQuery": "Orangerie Château de Versailles",
        "coords": [48.8016, 2.1194],
        "aliases": ["versailles gardens", "orangery", "parterre", "royal gardens", "palace orangery"]`
    );

    // Day 19 Paris Temple: explicit aliases
    content = content.replace(
      /\"name\":\s*\"Paris France LDS Temple\",[\s\S]*?\"aliases\":\s*\[[\s\S]*?\]/,
      `"name": "Paris France LDS Temple",
        "category": "⛪ Sacred Latter-day Saint Temple",
        "time": "Afternoon (14:15 – 16:00)",
        "location": "46 Boulevard Saint-Antoine, 78150 Le Chesnay, France",
        "image": "/images/temples/paris-temple.jpg",
        "admission": "Free ($0 AUD) · Sacred Temple Visit",
        "isPaid": false,
        "hours": "Grounds Open Daily 08:00–20:00",
        "desc": "Dedicated in May 2017, this majestic French limestone temple features peaceful formal gardens, reflecting fountains, and warm hospitality just minutes from Versailles.",
        "mapsQuery": "Paris France Temple Le Chesnay",
        "coords": [48.8242, 2.1331],
        "aliases": ["paris temple", "paris france temple", "lds temple", "temple grounds", "le chesnay", "reflection gardens"]`
    );

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Updated ${filePath} with refined aliases!`);
  }
});

// 3. UPDATE js/app.js & dist/js/app.js
['js/app.js', 'dist/js/app.js'].forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let appJs = fs.readFileSync(filePath, 'utf8');

    // Replace findSightForText function
    const findSightRegex = /function findSightForText\(dayNum, text\) \{[\s\S]*?\n\}/;
    const refinedFindSight = `function findSightForText(dayNum, text) {
  const day = (window.galleryData || []).find(d => d.dayNum === dayNum);
  if (!day || !day.sights || !day.sights.length) return { day: null, sight: null, index: 0 };
  const lower = (text || '').toLowerCase().trim();

  let bestSight = day.sights[0];
  let bestScore = -1;
  let bestIndex = 0;

  day.sights.forEach((s, idx) => {
    let score = 0;
    const sNameLower = s.name.toLowerCase();

    if (lower.includes(sNameLower)) {
      score += 100;
    } else if (sNameLower.includes(lower)) {
      score += 80;
    }

    if (s.aliases && Array.isArray(s.aliases)) {
      for (const alias of s.aliases) {
        const aLower = alias.toLowerCase();
        if (lower.includes(aLower)) {
          const aliasScore = 40 + (aLower.length * 5);
          if (aliasScore > score) score = aliasScore;
        }
      }
    }

    const words = sNameLower.split(/[\\s,()&-]+/).filter(w => w.length > 3);
    let wordMatches = 0;
    words.forEach(w => {
      if (lower.includes(w)) wordMatches++;
    });
    if (wordMatches > 0) {
      score += wordMatches * 10;
    }

    if (score > bestScore) {
      bestScore = score;
      bestSight = s;
      bestIndex = idx;
    }
  });

  return { day, sight: bestSight, index: bestIndex };
}`;

    appJs = appJs.replace(findSightRegex, refinedFindSight);

    // Update isTravelOrReflectionText
    const isTravelRegex = /function isTravelOrReflectionText\(text\) \{[\s\S]*?\n  \}/;
    const refinedIsTravel = `function isTravelOrReflectionText(text) {
    if (!text) return true;
    const t = text.trim();
    const lower = t.toLowerCase();
    if (t.includes('➔') || t.includes('->') || t.includes('→') || t.includes('&rarr;') || t.includes('&#10140;')) return true;
    if (lower.includes('sunday church') || lower.includes('sunday reflection') || lower.includes('church worship') || lower.includes('sacrament meeting') || lower.includes('worship & reflection')) return true;
    if (lower.includes('luggage drop') || lower.includes('check-in') || lower.includes('check-out') || lower.includes('baggage check-in') || lower.includes('pack bags')) return true;
    if (lower.includes('warm drinks') || lower.includes('early rest') || lower.includes('sleep in real hotel bed') || lower.includes('rest & recovery') || lower.includes('café rest') || lower.includes('relaxing evening')) return true;
    if (lower.includes('dinner') || lower.includes('fondue dinner') || lower.includes('roesti dinner') || lower.includes('lunch in old town') || lower.includes('breakfast at victoria')) return true;
    if (lower.includes('hotel cristall') || lower.includes('amsterdam base') || lower.includes('alpenblick coliving') || lower.includes('premier inn frankfurt')) return true;
    const prefixes = [
      'sbb intercity', 'sbb train', 'regional train', 'db ice', 'sncf ter', 'sncf tgv',
      'high-speed tgv', 'tgv lyria', 'flixbus', 'postbus', 'sti bus', 'bus 230', 'blm cable car', 'mountain rail',
      's-bahn', 'u-bahn', 'rer line', 'rer c', 'metro line', 'phébus bus', 'phebus bus',
      'south western railway', 'direct scenic transit', 'direct transit', 'transit from',
      'transfer to', 'return train', 'scenic train', 'eurotunnel', 'check-out', 'pack bags',
      'arrive london victoria', 'arrive amsterdam', 'arrive paris', 'return to uk family base', 'rest & recovery'
    ];
    return prefixes.some(p => lower.startsWith(p) || lower.includes(p));
  }`;

    appJs = appJs.replace(isTravelRegex, refinedIsTravel);

    // Update itineraryData activities
    const startIt = appJs.indexOf('const itineraryData = [');
    const endIt = appJs.indexOf('];\n// ==========================================\n// ITINERARY MODAL RENDERING');
    if (startIt > -1 && endIt > -1) {
      const itCode = appJs.substring(startIt + 'const itineraryData = '.length, endIt + 1);
      const data = JSON.parse(itCode);
      
      data.forEach(day => {
        const dayNum = parseInt(day.day.replace('Day ', ''), 10);
        day.activities = day.activities.map(act => {
          return act.replace(/<li[^>]*>(.*?)<\/li>/g, (m, innerText) => {
            const cleanText = innerText.replace(/<[^>]+>/g, '').trim();
            const type = classifyActivity(cleanText, dayNum);
            if (type === 'transit') {
              return `<li class="transit-bullet-item">${innerText}</li>`;
            } else {
              return `<li class="has-photo-preview" title="📸 Hover to preview photo">${innerText}</li>`;
            }
          });
        });
      });

      const newItCode = JSON.stringify(data, null, 2);
      appJs = appJs.substring(0, startIt + 'const itineraryData = '.length) + newItCode + appJs.substring(endIt + 1);
    }

    fs.writeFileSync(filePath, appJs, 'utf8');
    console.log(`✅ Updated ${filePath} with refined matching & classified activities!`);
  }
});

// 4. UPDATE index.html & dist/index.html
['index.html', 'dist/index.html'].forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let html = fs.readFileSync(filePath, 'utf8');

    // A. Remove has-photo-preview from all non-itinerary sections
    html = html.replace(/<li class=\"has-photo-preview\" title=\"📸 Hover to preview photo\"><strong>Travelers:<\/strong>/g, '<li><strong>Travelers:</strong>');
    html = html.replace(/<li class=\"has-photo-preview\" title=\"📸 Hover to preview photo\"><strong>Main Destination/g, '<li><strong>Main Destination');
    html = html.replace(/<li class=\"has-photo-preview\" title=\"📸 Hover to preview photo\"><strong>Schengen First Port/g, '<li><strong>Schengen First Port');
    html = html.replace(/<li class=\"has-photo-preview\" title=\"📸 Hover to preview photo\"><strong>Confirmed Lodging/g, '<li><strong>Confirmed Lodging');
    html = html.replace(/<li class=\"has-photo-preview\" title=\"📸 Hover to preview photo\"><strong>Confirmed Exit:/g, '<li><strong>Confirmed Exit:');

    html = html.replace(/<li class=\"has-photo-preview\" title=\"📸 Hover to preview photo\"><strong>Voyageurs :/g, '<li><strong>Voyageurs :');
    html = html.replace(/<li class=\"has-photo-preview\" title=\"📸 Hover to preview photo\"><strong>Destination Principale/g, '<li><strong>Destination Principale');
    html = html.replace(/<li class=\"has-photo-preview\" title=\"📸 Hover to preview photo\"><strong>Premier Point d'Entrée/g, "<li><strong>Premier Point d'Entrée");
    html = html.replace(/<li class=\"has-photo-preview\" title=\"📸 Hover to preview photo\"><strong>Justificatifs Complets/g, '<li><strong>Justificatifs Complets');
    html = html.replace(/<li class=\"has-photo-preview\" title=\"📸 Hover to preview photo\"><strong>Sortie Confirmée/g, '<li><strong>Sortie Confirmée');

    // Transit cards & restroom guide
    html = html.replace(/<li class=\"has-photo-preview\" title=\"📸 Hover to preview photo\">(✅|⚠️|🇳🇱|🇩🇪|🇫🇷|☕|📱)/g, '<li>$1');

    // B. Re-classify all activity-sublist in table and cards
    // Match each table row or card
    // 1) Master Table rows: <tr class="itinerary-table-row ...">...
    html = html.replace(/<tr class=\"itinerary-table-row[^>]*>([\s\S]*?)<\/tr>/g, (rowHtml) => {
      const dayMatch = rowHtml.match(/<span class=\"table-day-badge[^\"]*\">Day (\d+)<\/span>/);
      const dayNum = dayMatch ? parseInt(dayMatch[1], 10) : 0;
      
      return rowHtml.replace(/<ul class=\"activity-sublist\">([\s\S]*?)<\/ul>/g, (ulHtml, ulInner) => {
        const newInner = ulInner.replace(/<li[^>]*>(.*?)<\/li>/g, (m, innerText) => {
          const cleanText = innerText.replace(/<[^>]+>/g, '').trim();
          const type = classifyActivity(cleanText, dayNum);
          if (type === 'transit') {
            return `<li class="transit-bullet-item">${innerText}</li>`;
          } else {
            return `<li class="has-photo-preview" title="📸 Hover to preview photo">${innerText}</li>`;
          }
        });
        return `<ul class="activity-sublist">${newInner}</ul>`;
      });
    });

    // 2) Day Cards: <div class="itinerary-card ...">...
    html = html.replace(/<div class=\"itinerary-card[^\"]*\"[^>]*data-day=\"(\d+)\"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/g, (cardHtml, dayStr) => {
      const dayNum = parseInt(dayStr, 10);
      return cardHtml.replace(/<ul class=\"activity-sublist\">([\s\S]*?)<\/ul>/g, (ulHtml, ulInner) => {
        const newInner = ulInner.replace(/<li[^>]*>(.*?)<\/li>/g, (m, innerText) => {
          const cleanText = innerText.replace(/<[^>]+>/g, '').trim();
          const type = classifyActivity(cleanText, dayNum);
          if (type === 'transit') {
            return `<li class="transit-bullet-item">${innerText}</li>`;
          } else {
            return `<li class="has-photo-preview" title="📸 Hover to preview photo">${innerText}</li>`;
          }
        });
        return `<ul class="activity-sublist">${newInner}</ul>`;
      });
    });

    fs.writeFileSync(filePath, html, 'utf8');
    console.log(`✅ Cleaned non-activity lis and re-classified itinerary lis in ${filePath}!`);
  }
});

console.log('🎉 Restoration script complete!');
