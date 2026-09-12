const fs = require('fs');
const path = require('path');

console.log('🚀 Starting Final Photo Isolation & Text-Bound Hover Debounce Fix...');

// 1. UPDATE js/gallery-data.js & dist/js/gallery-data.js
// Replace Break & Home Paris Italie in Day 15 with Bern Temple Alpine Grounds & Pine Reflection Path
['js/gallery-data.js', 'dist/js/gallery-data.js'].forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    const vm = require('vm');
    const sandbox = { window: {} };
    vm.createContext(sandbox);
    vm.runInContext(content, sandbox);
    const galleryData = sandbox.window.galleryData;

    // Fix Day 15 sights
    const day15 = galleryData.find(d => d.dayNum === 15);
    if (day15) {
      day15.sights = [
        {
          name: "Bern Switzerland LDS Temple",
          category: "🏛️ Sacred LDS Temple (First in Europe)",
          time: "Morning (09:00 – 12:30)",
          location: "Tempelstrasse 2, 3052 Zollikofen, Switzerland",
          image: "/images/temples/bern-temple.jpg",
          admission: "Free ($0 AUD) · Endowment Session & Grounds",
          isPaid: false,
          hours: "Proxy Endowment Session (Arrive by 08:45 AM)",
          desc: "Dedicated in 1955 as the very first Latter-day Saint temple in Europe, featuring a soaring single spire crowned by the angel Moroni against a dramatic alpine backdrop.",
          mapsQuery: "Bern Switzerland Temple Tempelstrasse 2 Zollikofen",
          coords: [46.9886, 7.4589],
          aliases: ["bern switzerland temple", "bern temple", "zollikofen temple", "proxy endowment session", "endowment session"]
        },
        {
          name: "Bern Temple Alpine Grounds & Pine Reflection Path",
          category: "🌲 Sacred Grounds & Alpine Garden",
          time: "Morning (09:00 – 12:30)",
          location: "Tempelstrasse 2, 3052 Zollikofen, Switzerland",
          image: "/images/sights/bern-temple-grounds.jpg",
          admission: "Free ($0 AUD) · Public Peaceful Temple Gardens",
          isPaid: false,
          hours: "Grounds Open Daily Sunrise–Sunset",
          desc: "The peaceful, pine-fringed reflection gardens surrounding the Swiss Temple in Zollikofen, nestled amidst serene Swiss alpine foothills.",
          mapsQuery: "Bern Switzerland Temple Tempelstrasse 2 Zollikofen",
          coords: [46.9886, 7.4589],
          aliases: ["temple grounds", "bern temple grounds", "reflection gardens", "pine grounds", "zollikofen grounds", "pine-fringed grounds"]
        }
      ];
    }

    const newCode = `// Schengen Tour 2026-2027 - Complete Verified Visual Gallery Data
// Granular, dedicated photography for genuine sightseeing landmarks (Excluding UK & Transit)

window.galleryData = ${JSON.stringify(galleryData, null, 2)};

window.allSightsFlat = (window.galleryData || []).flatMap(d =>
  d.sights.map(s => ({
    ...s,
    dayNum: d.dayNum,
    day: d.day,
    city: d.city,
    badgeClass: d.badgeClass
  }))
);
`;
    fs.writeFileSync(filePath, newCode, 'utf8');
    console.log(`✅ Updated ${filePath} with verified sights and exported window.allSightsFlat!`);
  }
});

// 2. UPDATE js/gallery.js & dist/js/gallery.js
['js/gallery.js', 'dist/js/gallery.js'].forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let code = fs.readFileSync(filePath, 'utf8');
    // Ensure allSightsFlat is dynamically fetched or safely defined
    code = code.replace(
      /const allSightsFlat = window\.allSightsFlat \|\| \[\];/,
      'const getAllSights = () => (window.allSightsFlat && window.allSightsFlat.length ? window.allSightsFlat : (window.galleryData || []).flatMap(d => d.sights.map(s => ({ ...s, dayNum: d.dayNum, day: d.day, city: d.city, badgeClass: d.badgeClass }))));'
    );
    code = code.replace(/allSightsFlat\.length/g, 'getAllSights().length');
    code = code.replace(/allSightsFlat\[/g, 'getAllSights()[');
    code = code.replace(/allSightsFlat\.findIndex/g, 'getAllSights().findIndex');
    fs.writeFileSync(filePath, code, 'utf8');
    console.log(`✅ Updated ${filePath} for dynamic gallery sights!`);
  }
});

// 3. CLASSIFICATION FUNCTION
function isTravelOrLogistics(text) {
  if (!text) return true;
  const t = text.trim();
  const lower = t.toLowerCase();

  // Transit arrows
  if (t.includes('➔') || t.includes('->') || t.includes('→') || t.includes('&rarr;') || t.includes('&#10140;')) return true;

  // Specific user exclusions
  if (lower.includes('rer line c return') || lower.includes('return to paris') || lower.includes('celebration dinner')) return true;
  if (lower.includes('eurotunnel') || lower.includes('leshuttle') || lower.includes('flixbus') || lower.includes('terminal')) return true;
  if (lower.includes('café rest') || lower.includes('cafe rest') || lower.includes('warm drinks') || lower.includes('early rest') || lower.includes('rest & recovery') || lower.includes('relaxing evening') || lower.includes('sleep in real hotel bed')) return true;
  if (lower.includes('check-in') || lower.includes('check in') || lower.includes('check-out') || lower.includes('check out') || lower.includes('luggage drop') || lower.includes('leave luggage') || lower.includes('baggage check-in') || lower.includes('pack bags')) return true;
  if (lower.includes('hotel cristall') || lower.includes('amsterdam base') || lower.includes('alpenblick coliving') || lower.includes('break & home') || lower.includes('hostel leidseplein') || lower.includes('premier inn') || lower.includes('cologne base')) return true;
  if (lower.includes('dinner') || lower.includes('fondue dinner') || lower.includes('roesti dinner') || lower.includes('bistro dinner') || lower.includes('swiss dinner') || lower.includes('lunch in old town') || lower.includes('breakfast at victoria')) return true;
  if (lower.includes('sunday church') || lower.includes('sunday reflection') || lower.includes('worship & reflection') || lower.includes('sacrament meeting') || lower.includes('church worship')) return true;

  // Trains and transit
  if (lower.includes('return ns train') || lower.includes('ns intercity train back') || lower.includes('scenic train to spiez') || lower.includes('train return to bern')) return true;
  if (lower.includes('sbb train') || lower.includes('sbb intercity') || lower.includes('db ice') || lower.includes('sncf ter') || lower.includes('sncf tgv') || lower.includes('high-speed tgv') || lower.includes('tgv lyria')) return true;
  if (lower.includes('postbus') || lower.includes('sti bus') || lower.includes('bus 230') || lower.includes('s-bahn') || lower.includes('u-bahn') || lower.includes('rer line') || lower.includes('metro line') || lower.includes('automated metro') || lower.includes('tram line') || lower.includes('phébus bus') || lower.includes('south western railway')) return true;
  if (lower.includes('arrive amsterdam') || lower.includes('arrive paris') || lower.includes('arrive london') || lower.includes('descend to valley') || lower.includes('descend to grindelwald') || lower.includes('overnight coach')) return true;

  return false;
}

// 4. UPDATE js/app.js & dist/js/app.js
['js/app.js', 'dist/js/app.js'].forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let appJs = fs.readFileSync(filePath, 'utf8');

    // Parse itineraryData JSON
    const startIt = appJs.indexOf('const itineraryData = [');
    const after = appJs.substring(startIt);
    const endIdxInAfter = after.indexOf('];');
    const endIt = startIt + endIdxInAfter + 1;
    const itCode = appJs.substring(startIt + 'const itineraryData = '.length, endIt);
    const data = JSON.parse(itCode);

    data.forEach(day => {
      const dayNum = parseInt(day.day.replace('Day ', ''), 10);
      day.activities = day.activities.map(act => {
        return act.replace(/<li[^>]*>(.*?)<\/li>/g, (m, innerHtml) => {
          const cleanText = innerHtml.replace(/<[^>]+>/g, '').trim();
          if (dayNum === 1 || dayNum === 21 || isTravelOrLogistics(cleanText)) {
            return `<li class="transit-bullet-item">${cleanText}</li>`;
          } else {
            return `<li class="sight-bullet-item"><span class="has-photo-preview" title="📸 Hover to preview photo">${cleanText}</span></li>`;
          }
        });
      });
    });

    const newItCode = JSON.stringify(data, null, 2);
    appJs = appJs.substring(0, startIt + 'const itineraryData = '.length) + newItCode + appJs.substring(endIt);

    // Update findSightForText function
    const oldFind = appJs.indexOf('function findSightForText(dayNum, text) {');
    const endFind = appJs.indexOf('function openDayPhotosModal(dayNum, sightIndex = 0) {');
    if (oldFind > -1 && endFind > -1) {
      const newFindCode = `function findSightForText(dayNum, text) {
  const day = (window.galleryData || []).find(d => d.dayNum === dayNum);
  if (!day || !day.sights || !day.sights.length) return { day: null, sight: null, index: -1 };
  const lower = (text || '').toLowerCase().trim();

  // If text is transit or logistics, strictly return null
  if (isTravelOrReflectionText(lower)) {
    return { day: null, sight: null, index: -1 };
  }

  let bestSight = null;
  let bestScore = 0;
  let bestIndex = -1;

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

  if (bestScore <= 0 || !bestSight) {
    return { day: null, sight: null, index: -1 };
  }

  return { day, sight: bestSight, index: bestIndex };
}\n\n`;
      appJs = appJs.substring(0, oldFind) + newFindCode + appJs.substring(endFind);
    }

    // Update setupPlacePhotoInteractions with debounced text-bound hover listener
    const oldSetup = appJs.indexOf('function setupPlacePhotoInteractions() {');
    const endSetup = appJs.indexOf('// Hook into existing lightbox prev/next buttons');
    if (oldSetup > -1 && endSetup > -1) {
      const newSetupCode = `function setupPlacePhotoInteractions() {
  const popover = document.getElementById('placePhotoPopover');
  if (!popover) return;

  let hoverIntentTimer = null;
  let activeHoverSpan = null;

  function isTravelOrReflectionText(text) {
    if (!text) return true;
    const t = text.trim();
    const lower = t.toLowerCase();
    if (t.includes('➔') || t.includes('->') || t.includes('→') || t.includes('&rarr;') || t.includes('&#10140;')) return true;
    if (lower.includes('sunday church') || lower.includes('sunday reflection') || lower.includes('church worship') || lower.includes('sacrament meeting') || lower.includes('worship & reflection')) return true;
    if (lower.includes('rer line c return') || lower.includes('return to paris') || lower.includes('celebration dinner')) return true;
    if (lower.includes('eurotunnel') || lower.includes('leshuttle') || lower.includes('flixbus') || lower.includes('terminal')) return true;
    if (lower.includes('café rest') || lower.includes('cafe rest') || lower.includes('warm drinks') || lower.includes('early rest') || lower.includes('rest & recovery') || lower.includes('sleep in real hotel bed') || lower.includes('relaxing evening')) return true;
    if (lower.includes('check-in') || lower.includes('check in') || lower.includes('check-out') || lower.includes('check out') || lower.includes('luggage drop') || lower.includes('leave luggage') || lower.includes('baggage check-in') || lower.includes('pack bags')) return true;
    if (lower.includes('hotel cristall') || lower.includes('amsterdam base') || lower.includes('alpenblick coliving') || lower.includes('break & home') || lower.includes('premier inn') || lower.includes('cologne base')) return true;
    if (lower.includes('dinner') || lower.includes('fondue dinner') || lower.includes('roesti dinner') || lower.includes('bistro dinner') || lower.includes('swiss dinner') || lower.includes('lunch in old town') || lower.includes('breakfast at victoria')) return true;
    if (lower.includes('return ns train') || lower.includes('ns intercity train back') || lower.includes('scenic train to spiez') || lower.includes('train return to bern')) return true;
    if (lower.includes('sbb train') || lower.includes('sbb intercity') || lower.includes('db ice') || lower.includes('sncf ter') || lower.includes('sncf tgv') || lower.includes('high-speed tgv') || lower.includes('tgv lyria')) return true;
    if (lower.includes('postbus') || lower.includes('sti bus') || lower.includes('bus 230') || lower.includes('s-bahn') || lower.includes('u-bahn') || lower.includes('rer line') || lower.includes('metro line') || lower.includes('automated metro') || lower.includes('tram line') || lower.includes('phébus bus')) return true;
    if (lower.includes('arrive amsterdam') || lower.includes('arrive paris') || lower.includes('arrive london') || lower.includes('descend to valley') || lower.includes('overnight coach')) return true;
    return false;
  }

  function showPopover(targetSpan, dayNum, text, mouseX, mouseY) {
    if (!dayNum || dayNum === 1 || dayNum === 21 || isTravelOrReflectionText(text)) {
      popover.classList.remove('visible');
      return;
    }

    const day = (window.galleryData || []).find(d => d.dayNum === dayNum);
    if (!day || !day.sights || !day.sights.length) {
      popover.classList.remove('visible');
      return;
    }

    const matched = findSightForText(dayNum, text);
    const sight = matched.sight;
    const sightIdx = matched.index;
    if (!sight) {
      popover.classList.remove('visible');
      return;
    }

    const img = popover.querySelector('.popover-main-img');
    const badge = popover.querySelector('.popover-badge');
    const title = popover.querySelector('.popover-title');
    const loc = popover.querySelector('.popover-location');
    const countBadge = popover.querySelector('.popover-count-badge');
    const thumbsRow = popover.querySelector('.popover-thumbs-row');

    if (img) {
      img.src = sight.image;
      img.alt = sight.name;
    }
    if (badge) badge.textContent = sight.category || 'Highlight';
    if (title) title.textContent = sight.name;
    if (loc) loc.textContent = \`📍 \${sight.location ? sight.location.split(',')[0] : day.city}\`;
    if (countBadge) countBadge.textContent = \`\${day.sights.length} Photos Available\`;

    if (thumbsRow) {
      thumbsRow.innerHTML = day.sights.map((s, idx) => \`
        <img src="\${s.image}" alt="\${s.name}" class="popover-thumb \${idx === sightIdx ? 'active' : ''}" title="\${s.name}">
      \`).join('');
    }

    const popoverWidth = 310;
    const popoverHeight = 285;

    let left, top;
    if (mouseX !== undefined && mouseY !== undefined) {
      left = mouseX + 18;
      top = mouseY - 40;
    } else {
      const rect = targetSpan.getBoundingClientRect();
      left = rect.right + 14;
      top = rect.top - 15;
    }

    if (left + popoverWidth > window.innerWidth - 16) {
      left = (mouseX !== undefined) ? mouseX - popoverWidth - 18 : (window.innerWidth - popoverWidth - 16);
    }
    if (left < 16) left = 16;
    if (top + popoverHeight > window.innerHeight - 16) {
      top = window.innerHeight - popoverHeight - 16;
    }
    if (top < 16) top = 16;

    popover.style.left = \`\${left}px\`;
    popover.style.top = \`\${top}px\`;
    popover.classList.add('visible');
  }

  function hidePopover() {
    clearTimeout(hoverIntentTimer);
    activeHoverSpan = null;
    popover.classList.remove('visible');
  }

  function resolveDayNum(el) {
    const row = el.closest('.itinerary-table-row');
    const card = el.closest('.itinerary-card, .day-card');
    if (row) {
      const badge = row.querySelector('.table-day-badge');
      if (badge) return parseInt(badge.textContent.replace('Day ', ''), 10) || 0;
    }
    if (card) {
      const badge = card.querySelector('.card-day-badge');
      if (badge) return parseInt(badge.textContent.replace('Day ', ''), 10) || 0;
      if (card.getAttribute('data-day')) {
        return parseInt(card.getAttribute('data-day').replace('Day ', ''), 10) || 0;
      }
    }
    return 0;
  }

  // Hover strictly when mouse enters span.has-photo-preview (Actual Text Only)
  // With 120ms debounce so rapid mouse movements do not cause accidental popups
  document.addEventListener('mouseover', (e) => {
    const targetSpan = e.target.closest('span.has-photo-preview');
    if (!targetSpan || targetSpan.closest('.transit-bullet-item')) {
      return;
    }

    if (activeHoverSpan === targetSpan) return;
    activeHoverSpan = targetSpan;

    clearTimeout(hoverIntentTimer);

    const text = targetSpan.textContent;
    if (isTravelOrReflectionText(text)) {
      popover.classList.remove('visible');
      return;
    }

    const dayNum = resolveDayNum(targetSpan);
    if (!dayNum || dayNum === 1 || dayNum === 21) {
      popover.classList.remove('visible');
      return;
    }

    const mouseX = e.clientX;
    const mouseY = e.clientY;
    hoverIntentTimer = setTimeout(() => {
      if (activeHoverSpan === targetSpan) {
        showPopover(targetSpan, dayNum, text, mouseX, mouseY);
      }
    }, 120);
  });

  document.addEventListener('mousemove', (e) => {
    if (!popover.classList.contains('visible')) return;
    const targetSpan = e.target.closest('span.has-photo-preview');
    if (!targetSpan || targetSpan.closest('.transit-bullet-item') || isTravelOrReflectionText(targetSpan.textContent)) {
      popover.classList.remove('visible');
      return;
    }

    const popoverWidth = 310;
    const popoverHeight = 285;
    let left = e.clientX + 18;
    let top = e.clientY - 40;
    if (left + popoverWidth > window.innerWidth - 16) {
      left = e.clientX - popoverWidth - 18;
    }
    if (left < 16) left = 16;
    if (top + popoverHeight > window.innerHeight - 16) {
      top = window.innerHeight - popoverHeight - 16;
    }
    if (top < 16) top = 16;

    popover.style.left = \`\${left}px\`;
    popover.style.top = \`\${top}px\`;
  });

  document.addEventListener('mouseout', (e) => {
    const targetSpan = e.target.closest('span.has-photo-preview');
    if (targetSpan) {
      hidePopover();
    }
  });

  // Clicking an activity bullet opens the photo modal for that sight
  document.addEventListener('click', (e) => {
    const targetSpan = e.target.closest('span.has-photo-preview, .btn-table-photos, .btn-card-photos');
    if (!targetSpan || targetSpan.closest('.transit-bullet-item')) return;

    const dayNum = resolveDayNum(targetSpan) || (targetSpan.getAttribute('data-day') ? parseInt(targetSpan.getAttribute('data-day').replace('Day ', ''), 10) : 0);
    if (!dayNum || dayNum === 1 || dayNum === 21) return;

    const matched = findSightForText(dayNum, targetSpan.textContent);
    if (matched.sight && matched.index >= 0) {
      openDayPhotosModal(dayNum, matched.index);
    }
    hidePopover();
  });
}\n\n`;
      appJs = appJs.substring(0, oldSetup) + newSetupCode + appJs.substring(endSetup);
    }

    fs.writeFileSync(filePath, appJs, 'utf8');
    console.log(`✅ Updated ${filePath} with debounce hover & strict null check!`);
  }
});

// 5. UPDATE css/style.css & dist/css/style.css
const sublistCss = `/* ==========================================================================
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
  cursor: default !important;
}

.card-activity-item .activity-sublist li {
  font-size: 12.5px;
}

/* Sight Bullet Item marker styling */
.activity-sublist li.sight-bullet-item {
  color: #0f172a;
  cursor: default !important;
}

.activity-sublist li.sight-bullet-item::marker {
  color: #2563eb !important; /* Sapphire blue bullet marker */
  font-size: 1.05em;
  cursor: default !important;
}

/* Instant Photo Preview Text Target (Bound strictly to the text span only) */
span.has-photo-preview {
  color: #1d4ed8 !important;
  font-weight: 600 !important;
  cursor: pointer !important;
  position: relative;
  display: inline !important;
  text-decoration: underline dotted rgba(37, 99, 235, 0.45) 1.5px;
  text-underline-offset: 3px;
  transition: color 0.16s ease, background-color 0.16s ease;
  border-radius: 4px;
  padding: 0 2px !important;
  margin: 0 !important;
}

span.has-photo-preview:hover {
  color: #1e40af !important;
  background: rgba(37, 99, 235, 0.09) !important;
  text-decoration: underline solid #2563eb 1.5px !important;
}

span.has-photo-preview::after {
  content: " 📸";
  font-size: 0.72rem;
  opacity: 0.82;
  vertical-align: baseline;
  transition: transform 0.2s ease, opacity 0.2s ease;
  display: inline-block;
  margin-left: 3px;
  pointer-events: auto;
}

span.has-photo-preview:hover::after {
  opacity: 1;
  transform: scale(1.18);
}

/* Transit, Travel, Luggage, Hotel, Food & Sunday Reflection Items */
.activity-sublist li.transit-bullet-item {
  display: list-item !important;
  list-style-type: disc !important;
  color: #64748b !important;
  font-weight: 400 !important;
  cursor: default !important;
  text-decoration: none !important;
  background: none !important;
  pointer-events: none !important; /* Guaranteed zero interaction */
}

.activity-sublist li.transit-bullet-item::marker {
  color: #94a3b8 !important; /* Subtle slate bullet marker */
  cursor: default !important;
}

.activity-sublist li.transit-bullet-item:hover {
  background: none !important;
  color: #64748b !important;
  font-weight: 400 !important;
}

.activity-sublist li.transit-bullet-item::after {
  display: none !important;
  content: none !important;
}
`;

['css/style.css', 'dist/css/style.css'].forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let css = fs.readFileSync(filePath, 'utf8');
    const marker = '/* ==========================================================================\n   Activity Sublist & Bullet Points Layout';
    if (css.includes(marker)) {
      css = css.split(marker)[0] + sublistCss;
    } else {
      css = css + '\n\n' + sublistCss;
    }
    fs.writeFileSync(filePath, css, 'utf8');
    console.log(`✅ Updated ${filePath} with non-interactive transit styles & tighter span padding!`);
  }
});

// 6. UPDATE index.html & dist/index.html
['index.html', 'dist/index.html'].forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let html = fs.readFileSync(filePath, 'utf8');

    // Fix Day 3: Return NS Train
    html = html.replace(
      /<li class="sight-bullet-item"><span class="has-photo-preview"[^>]*>Return NS Train to Amsterdam Centraal<\/span><\/li>/g,
      '<li class="transit-bullet-item">Return NS Train to Amsterdam Centraal</li>'
    );

    // Fix Day 4: NS Intercity Train
    html = html.replace(
      /<li class="sight-bullet-item"><span class="has-photo-preview"[^>]*>NS Intercity Train back to Amsterdam Centraal<\/span><\/li>/g,
      '<li class="transit-bullet-item">NS Intercity Train back to Amsterdam Centraal</li>'
    );

    // Fix Day 14: Split Train return to Bern base from Rosengarten
    html = html.replace(
      /<li class="sight-bullet-item"><span class="has-photo-preview"[^>]*>Train return to Bern base; head up to Rosengarten for the famous golden-hour sunset panorama overlooking the horseshoe Aare river loop &amp; Old Town<\/span><\/li>/g,
      '<li class="transit-bullet-item">Train return to Bern base</li>\n        <li class="sight-bullet-item"><span class="has-photo-preview" title="📸 Hover to preview photo">Rosengarten viewpoint overlooking the illuminated Aare river loop</span></li>'
    );

    // Fix Day 14 Card: Scenic train to Spiez on Lake Thun
    html = html.replace(
      /<li class="sight-bullet-item"><span class="has-photo-preview"[^>]*>Scenic train to Spiez on Lake Thun<\/span><\/li>/g,
      '<li class="transit-bullet-item">Scenic train to Spiez on Lake Thun</li>'
    );

    // Fix Day 13: Warm drinks & rest
    html = html.replace(
      /<li class="sight-bullet-item"><span class="has-photo-preview"[^>]*>Warm drinks &amp; rest \(Night 3 of 4 in Bern!\)<\/span><\/li>/g,
      '<li class="transit-bullet-item">Warm drinks &amp; rest (Night 3 of 4 in Bern!)</li>'
    );

    // Synchronize Day Cards for Day 12, 13, 14
    // Day 12 Card
    const card12Marker = '<span class="card-day-badge">Day 12</span>';
    const card13Marker = '<span class="card-day-badge">Day 13</span>';
    const card14Marker = '<span class="card-day-badge">Day 14</span>';
    const card15Marker = '<span class="card-day-badge">Day 15</span>';

    // Day 12 Card Activities Replacement
    const newDay12Activities = `<div class="card-activities-list">
        <div class="card-activity-item">• <b>Morning (08:30 – 13:00):</b><ul class="activity-sublist"><li class="transit-bullet-item">SBB InterCity: Bern Hbf ➔ Interlaken Ost ➔ Grindelwald (1h 34m)</li><li class="transit-bullet-item">Board Grindelwald First Gondola gliding above snow-covered pine forests to 2,168m</li><li class="sight-bullet-item"><span class="has-photo-preview" title="📸 Hover to preview photo">First Cliff Walk by Tissot (metal walkway &amp; cantilever bridge directly facing the iconic snowy Eiger North Face)</span></li></ul></div>
        <div class="card-activity-item">• <b>Afternoon (13:30 – 17:30):</b><ul class="activity-sublist"><li class="transit-bullet-item">Descend to Grindelwald alpine village; train to Interlaken Ost</li><li class="transit-bullet-item">PostBus 103: Interlaken Ost ➔ Iseltwald (20 min)</li><li class="sight-bullet-item"><span class="has-photo-preview" title="📸 Hover to preview photo">Iseltwald Landing Stage (Lake Brienz Crash Landing on You wooden pier surrounded by glassy turquoise alpine waters)</span></li></ul></div>
        <div class="card-activity-item">• <b>Evening (18:00 – 21:00):</b><ul class="activity-sublist"><li class="transit-bullet-item">PostBus 103 + SBB Train back to Bern base (Alpenblick CoLiving)</li><li class="transit-bullet-item">Hot Swiss roesti dinner &amp; relaxing evening (Night 2 of 4 in Bern!)</li></ul></div>
      </div>`;

    // Day 13 Card Activities Replacement
    const newDay13Activities = `<div class="card-activities-list">
        <div class="card-activity-item">• <b>Morning (08:30 – 12:30):</b><ul class="activity-sublist"><li class="transit-bullet-item">SBB Train: Bern Hbf ➔ Interlaken Ost ➔ Lauterbrunnen (1h 15m)</li><li class="sight-bullet-item"><span class="has-photo-preview" title="📸 Hover to preview photo">Lauterbrunnen Valley &amp; Staubbach Falls plunging 297m down frozen cliffs</span></li><li class="sight-bullet-item"><span class="has-photo-preview" title="📸 Hover to preview photo">Mürren car-free village (Eiger, Mönch &amp; Jungfrau viewpoints)</span></li></ul></div>
        <div class="card-activity-item">• <b>Afternoon &amp; Twilight (13:30 – 19:30):</b><ul class="activity-sublist"><li class="transit-bullet-item">Descend to valley; SBB Train via Spiez/Frutigen + Bus 230 to Blausee Nature Park</li><li class="sight-bullet-item"><span class="has-photo-preview" title="📸 Hover to preview photo">Blausee Nature Park (Path of the 1,000 Lights lantern walk)</span></li><li class="sight-bullet-item"><span class="has-photo-preview" title="📸 Hover to preview photo">Admire crystal-clear illuminated turquoise subterranean spring lake surrounded by glowing lanterns</span></li></ul></div>
        <div class="card-activity-item">• <b>Evening (20:00 – 21:30):</b><ul class="activity-sublist"><li class="transit-bullet-item">Bus 230 + SBB Train return to Bern base (Alpenblick CoLiving)</li><li class="transit-bullet-item">Warm drinks &amp; rest (Night 3 of 4 in Bern!)</li></ul></div>
      </div>`;

    // Day 14 Card Activities Replacement
    const newDay14Activities = `<div class="card-activities-list">
        <div class="card-activity-item">• <b>Morning (09:30 – 12:30):</b><ul class="activity-sublist"><li class="transit-bullet-item">SBB InterCity: Bern Hbf ➔ Spiez on Lake Thun (30 min)</li><li class="sight-bullet-item"><span class="has-photo-preview" title="📸 Hover to preview photo">Spiez Castle medieval waterfront &amp; Lake Thun winter promenade</span></li></ul></div>
        <div class="card-activity-item">• <b>Afternoon (13:00 – 15:30):</b><ul class="activity-sublist"><li class="transit-bullet-item">STI Bus to Sigriswil (20 min)</li><li class="sight-bullet-item"><span class="has-photo-preview" title="📸 Hover to preview photo">Panoramabrücke Sigriswil suspension bridge (340m long hanging 182m above gorge)</span></li></ul></div>
        <div class="card-activity-item">• <b>Sunset &amp; Evening (16:00 – 21:00):</b><ul class="activity-sublist"><li class="transit-bullet-item">Train return to Bern base</li><li class="sight-bullet-item"><span class="has-photo-preview" title="📸 Hover to preview photo">Rosengarten viewpoint overlooking the illuminated Aare river loop</span></li><li class="transit-bullet-item">Final cosy Swiss dinner in Bern; pack bags for Paris transit tomorrow (Night 4 of 4 in Bern!)</li></ul></div>
      </div>`;

    // Replace Day 12 Card theme & activities
    html = html.replace(
      /<span class="card-day-badge">Day 12<\/span>[\s\S]*?<h4 class="card-day-theme">.*?<\/h4>[\s\S]*?<div class="card-activities-list">[\s\S]*?<\/div>(\s*<div class="card-admission-item">)/,
      `<span class="card-day-badge">Day 12</span>\n            <span class="card-date-badge">26 Dec 2026</span>\n            <span class="badge-country badge-ch">Switzerland</span>\n          </div>\n          <div class="day-card-city">\n            <span class="city-icon">📍</span>\n            <span class="city-text">Grindelwald & Lake Brienz</span>\n          </div>\n        </div>\n        <div class="day-card-content">\n          <div class="day-card-main">\n            <h4 class="card-day-theme">Grindelwald First Cliff Walk &amp; Lake Brienz CLOY Pier</h4>\n            ${newDay12Activities}\n          $1`
    );

    // Replace Day 13 Card theme & activities
    html = html.replace(
      /<span class="card-day-badge">Day 13<\/span>[\s\S]*?<h4 class="card-day-theme">.*?<\/h4>[\s\S]*?<div class="card-activities-list">[\s\S]*?<\/div>(\s*<div class="card-admission-item">)/,
      `<span class="card-day-badge">Day 13</span>\n            <span class="card-date-badge">27 Dec 2026</span>\n            <span class="badge-country badge-ch">Switzerland</span>\n          </div>\n          <div class="day-card-city">\n            <span class="city-icon">📍</span>\n            <span class="city-text">Lauterbrunnen, Mürren & Blausee</span>\n          </div>\n        </div>\n        <div class="day-card-content">\n          <div class="day-card-main">\n            <h4 class="card-day-theme">Lauterbrunnen Valley, Mürren Village &amp; Magical Blausee Winter Park</h4>\n            ${newDay13Activities}\n          $1`
    );

    // Replace Day 14 Card theme & activities
    html = html.replace(
      /<span class="card-day-badge">Day 14<\/span>[\s\S]*?<h4 class="card-day-theme">.*?<\/h4>[\s\S]*?<div class="card-activities-list">[\s\S]*?<\/div>(\s*<div class="card-admission-item">)/,
      `<span class="card-day-badge">Day 14</span>\n            <span class="card-date-badge">28 Dec 2026</span>\n            <span class="badge-country badge-ch">Switzerland</span>\n          </div>\n          <div class="day-card-city">\n            <span class="city-icon">📍</span>\n            <span class="city-text">Lake Thun, Sigriswil & Bern</span>\n          </div>\n        </div>\n        <div class="day-card-content">\n          <div class="day-card-main">\n            <h4 class="card-day-theme">Lake Thun Waterfront, Sigriswil Suspension Bridge &amp; Bern Rosengarten Sunset</h4>\n            ${newDay14Activities}\n          $1`
    );

    // Update photo count buttons
    html = html.replace(
      /<button type="button" class="btn-card-photos" data-day="Day 20">📸 View Photos \(\d+\)<\/button>/g,
      '<button type="button" class="btn-card-photos" data-day="Day 20">📸 View Photos (3)</button>'
    );
    html = html.replace(
      /<button type="button" class="btn-card-photos" data-day="Day 15">📸 View Photos \(\d+\)<\/button>/g,
      '<button type="button" class="btn-card-photos" data-day="Day 15">📸 View Photos (2)</button>'
    );
    html = html.replace(
      /<button type="button" class="btn-card-photos" data-day="Day 12">📸 View Photos \(\d+\)<\/button>/g,
      '<button type="button" class="btn-card-photos" data-day="Day 12">📸 View Photos (3)</button>'
    );
    html = html.replace(
      /<button type="button" class="btn-card-photos" data-day="Day 13">📸 View Photos \(\d+\)<\/button>/g,
      '<button type="button" class="btn-card-photos" data-day="Day 13">📸 View Photos (3)</button>'
    );
    html = html.replace(
      /<button type="button" class="btn-card-photos" data-day="Day 14">📸 View Photos \(\d+\)<\/button>/g,
      '<button type="button" class="btn-card-photos" data-day="Day 14">📸 View Photos (3)</button>'
    );

    fs.writeFileSync(filePath, html, 'utf8');
    console.log(`✅ Updated ${filePath} with synchronized Day Cards and clean transit bullets!`);
  }
});

console.log('🎉 Complete photo isolation & text-bound hover overhaul finished successfully!');
