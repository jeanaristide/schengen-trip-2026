const fs = require('fs');
const path = require('path');

console.log('🚀 Starting Complete Visual Gallery & Text-Bound Hover Target Overhaul...');

// 1. UPDATE js/gallery-data.js & dist/js/gallery-data.js
// Add dedicated entries for newly distinguished places:
// - Day 6: Little Tokyo (Immermannstraße)
// - Day 7: Paulsplatz Christmas Market
// - Day 8: Museumsufer (Main Riverfront)
// - Day 9: Christkindelsmärik at Place Broglie
// - Day 11: Bundeshaus (Swiss Federal Palace & Terrace)
// - Day 17: Champs-Élysées NYE Celebration & Light Show
// - Day 20: Boulevard Saint-Michel & Latin Quarter Stroll, Pont Alexandre III, Grand Palais

const newSightsPerDay = {
  6: {
    name: "Little Tokyo (Immermannstraße)",
    category: "🍜 Cultural District & Japanese Culinary Hub",
    time: "Evening (19:00 – 20:30)",
    location: "Immermannstraße, Düsseldorf, Germany",
    image: "/images/sights/little-tokyo-duesseldorf.jpg",
    admission: "Free ($0 AUD) · Public Street Stroll",
    isPaid: false,
    hours: "Open 24/7 · Shops & Dining open until late",
    desc: "Europe's vibrant Japanese cultural capital centered along Immermannstraße, featuring authentic izakayas, ramen shops with glowing lanterns, and Japanese bakeries.",
    mapsQuery: "Immermannstraße Düsseldorf Little Tokyo",
    coords: [51.2225, 6.7885],
    aliases: ["little tokyo", "immermannstraße", "immermannstrasse", "japanese quarter", "ramen"]
  },
  7: {
    name: "Paulsplatz Christmas Market",
    category: "🎄 Historic Christmas Market",
    time: "Evening (18:30 – 21:00)",
    location: "Paulsplatz, Frankfurt am Main, Germany",
    image: "/images/sights/paulsplatz-frankfurt.jpg",
    admission: "Free ($0 AUD) · Public Christmas Market",
    isPaid: false,
    hours: "Open Daily 10:00–21:00",
    desc: "Festive Christmas market surrounding the historic circular red sandstone Paulskirche (St. Paul's Church), renowned for artisan wooden chalets and handmade crafts.",
    mapsQuery: "Paulsplatz Frankfurt",
    coords: [50.1114, 8.6806],
    aliases: ["paulsplatz", "paulsplatz christmas market", "paulskirche", "st. paul church"]
  },
  8: {
    name: "Museumsufer (Main Riverfront Promenade)",
    category: "🌊 Scenic Riverbank & Museum Embankment",
    time: "Midday (12:30 – 14:00)",
    location: "Schaumainkai, Frankfurt am Main, Germany",
    image: "/images/sights/museumsufer-frankfurt.jpg",
    admission: "Free ($0 AUD) · Public River Promenade",
    isPaid: false,
    hours: "Open 24/7",
    desc: "Picturesque tree-lined riverbank along the south shore of the Main River, offering sweeping panoramic views of Frankfurt's skyscrapers and historic iron footbridges.",
    mapsQuery: "Museumsufer Frankfurt",
    coords: [50.1054, 8.6785],
    aliases: ["museumsufer", "main river", "riverbank", "schaumainkai", "riverfront"]
  },
  9: {
    name: "Christkindelsmärik at Place Broglie",
    category: "✨ Historic Christmas Market (Est. 1570)",
    time: "Midday (11:30 – 14:00)",
    location: "Place Broglie, Strasbourg, France",
    image: "/images/sights/christkindelsmaerik-strasbourg.jpg",
    admission: "Free ($0 AUD)",
    isPaid: false,
    hours: "Open Daily 11:30–21:00",
    desc: "The oldest and most traditional Christmas market in France, dating back to 1570, set against the illuminated neoclassical facade of the Strasbourg Opera House.",
    mapsQuery: "Place Broglie Strasbourg",
    coords: [48.5851, 7.7497],
    aliases: ["christkindelsmärik", "christkindelsmarik", "place broglie", "oldest christmas market"]
  },
  11: {
    name: "Bundeshaus (Swiss Federal Palace & Terrace)",
    category: "🏛️ Swiss Parliament & Alpine Panorama",
    time: "Afternoon (15:00 – 16:30)",
    location: "Bundesplatz 3, Bern, Switzerland",
    image: "/images/sights/bundeshaus-bern.jpg",
    admission: "Free ($0 AUD) · Public Terrace Overlook",
    isPaid: false,
    hours: "Terrace Open 24/7",
    desc: "Seat of the Swiss Federal Government, featuring grand Renaissance-revival architecture and a majestic south terrace overlooking the emerald Aare river and distant Alps.",
    mapsQuery: "Bundeshaus Bern",
    coords: [46.9465, 7.4442],
    aliases: ["bundeshaus", "federal palace", "bundeshausterrasse", "parliament", "bundesplatz"]
  },
  17: {
    name: "Champs-Élysées NYE Celebration & Light Show",
    category: "🎆 New Year's Eve Grand Countdown",
    time: "Midnight (22:30 – 01:00)",
    location: "Avenue des Champs-Élysées, Paris, France",
    image: "/images/sights/paris-nye-champs.jpg",
    admission: "Free ($0 AUD) · City of Paris NYE Celebration",
    isPaid: false,
    hours: "Celebrations 20:00–01:00 (Metro free all night)",
    desc: "Paris's official New Year's Eve countdown hub, featuring breathtaking architectural light projections on the Arc de Triomphe, midnight fireworks, and illuminated tree-lined boulevard.",
    mapsQuery: "Champs-Élysées Paris",
    coords: [48.8705, 2.3045],
    aliases: ["official nye countdown", "nye countdown", "countdown", "nye celebration", "arc de triomphe nye"]
  },
  20: [
    {
      name: "Boulevard Saint-Michel & Latin Quarter Stroll",
      category: "🏛️ Historic Parisian Boulevard",
      time: "Morning (10:00 – 11:30)",
      location: "Boulevard Saint-Michel, Paris, France",
      image: "/images/sights/boulevard-saint-michel.jpg",
      admission: "Free ($0 AUD)",
      isPaid: false,
      hours: "Open 24/7",
      desc: "Lively boulevard bordering the historic Sorbonne University and Luxembourg Gardens, lined with classic bookstores, cafes, and iconic Parisian Haussmann architecture.",
      mapsQuery: "Boulevard Saint-Michel Paris",
      coords: [48.8515, 2.3435],
      aliases: ["boulevard saint-michel", "saint-michel", "latin quarter stroll", "saint michel"]
    },
    {
      name: "Pont Alexandre III Beaux-Arts Bridge",
      category: "🌉 Historic Parisian Bridge & Seine View",
      time: "Morning (11:30 – 12:30)",
      location: "Pont Alexandre III, 75008 Paris, France",
      image: "/images/sights/pont-alexandre-iii.jpg",
      admission: "Free ($0 AUD) · Public Bridge Promenade",
      isPaid: false,
      hours: "Open 24/7",
      desc: "Paris's most extravagant bridge, built for the 1900 Exposition Universelle, adorned with ornate gilded statues, Art Nouveau lamp posts, and panoramic river vistas.",
      mapsQuery: "Pont Alexandre III Paris",
      coords: [48.8639, 2.3136],
      aliases: ["pont alexandre iii", "pont alexandre", "alexandre iii", "beaux-arts bridge"]
    },
    {
      name: "Grand Palais Glass Vault & Exhibition Hall",
      category: "🏛️ Beaux-Arts Architectural Masterpiece",
      time: "Midday (12:30 – 13:30)",
      location: "3 Avenue du Général Eisenhower, 75008 Paris, France",
      image: "/images/sights/grand-palais-paris.jpg",
      admission: "Free ($0 AUD) · Historic Monument Exterior",
      isPaid: false,
      hours: "Exterior View 24/7",
      desc: "Monumental historic Beaux-Arts complex renowned for its immense glass barrel-vaulted nave, classical stone colonnade, and soaring French tricolor flag.",
      mapsQuery: "Grand Palais Paris",
      coords: [48.8661, 2.3125],
      aliases: ["grand palais", "grand palais view", "glass dome", "exhibition hall"]
    }
  ]
};

['js/gallery-data.js', 'dist/js/gallery-data.js'].forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    const vm = require('vm');
    const sandbox = { window: {} };
    vm.createContext(sandbox);
    vm.runInContext(content, sandbox);
    const galleryData = sandbox.window.galleryData;

    // Apply additions/updates per day
    galleryData.forEach(day => {
      if (newSightsPerDay[day.dayNum]) {
        const toAdd = newSightsPerDay[day.dayNum];
        if (Array.isArray(toAdd)) {
          day.sights = toAdd; // Replace entirely for Day 20
        } else {
          // Check if already present by name
          if (!day.sights.some(s => s.name === toAdd.name)) {
            day.sights.push(toAdd);
          }
        }
      }
    });

    const newCode = `// Schengen Tour 2026-2027 - Complete Verified Visual Gallery Data\n// Granular, dedicated photography for genuine sightseeing landmarks (Excluding UK & Transit)\n\nwindow.galleryData = ${JSON.stringify(galleryData, null, 2)};\n`;
    fs.writeFileSync(filePath, newCode, 'utf8');
    console.log(`✅ Updated ${filePath} with dedicated sights for Days 6, 7, 8, 9, 11, 17, and 20!`);
  }
});

// 2. CLASSIFICATION FUNCTION
function classifyActivity(text, dayNum) {
  if (dayNum === 1 || dayNum === 21) return 'transit';
  const t = text.trim();
  const lower = t.toLowerCase();

  // Transit arrows
  if (t.includes('➔') || t.includes('->') || t.includes('→') || t.includes('&rarr;') || t.includes('&#10140;')) return 'transit';

  // Specific user exclusions
  if (lower.includes('rer line c return') || lower.includes('return to paris') || lower.includes('celebration dinner')) return 'transit';
  if (lower.includes('eurotunnel') || lower.includes('leshuttle')) return 'transit';
  if (lower.includes('flixbus') || lower.includes('transfer of terminal') || lower.includes('transfer to paris bercy') || lower.includes('terminal')) return 'transit';
  if (lower.includes('café rest') || lower.includes('cafe rest') || lower.includes('warm drinks & rest') || lower.includes('early rest') || lower.includes('rest & recovery') || lower.includes('relaxing evening') || lower.includes('sleep in real hotel bed')) return 'transit';
  if (lower.includes('check-in') || lower.includes('check in') || lower.includes('check-out') || lower.includes('check out') || lower.includes('luggage drop') || lower.includes('leave luggage') || lower.includes('baggage check-in') || lower.includes('pack bags')) return 'transit';
  if (lower.includes('hotel cristall') || lower.includes('amsterdam base') || lower.includes('alpenblick coliving') || lower.includes('break & home') || lower.includes('hostel leidseplein') || lower.includes('premier inn')) return 'transit';
  if (lower.includes('dinner') || lower.includes('fondue dinner') || lower.includes('roesti dinner') || lower.includes('lunch in old town') || lower.includes('breakfast at victoria')) return 'transit';
  if (lower.includes('sunday church') || lower.includes('sunday reflection') || lower.includes('worship & reflection') || lower.includes('sacrament')) return 'transit';

  // General transit keywords
  const transitKeywords = [
    'sbb train', 'sbb intercity', 'db ice', 'sncf ter', 'sncf tgv', 'high-speed tgv',
    'tgv lyria', 'postbus', 'sti bus', 'bus 230', 'blm cable car', 'mountain rail',
    's-bahn', 'u-bahn', 'rer line', 'metro line', 'automated metro',
    'tram line', 'phébus bus', 'south western railway', 'direct transit', 'regional train',
    'arrive amsterdam', 'arrive paris', 'arrive london', 'descend to valley',
    'descend to grindelwald', 'train to interlaken', 'overnight coach'
  ];
  if (transitKeywords.some(k => lower.includes(k))) return 'transit';

  return 'sight';
}

// 3. UPDATE css/style.css & dist/css/style.css
const updatedCss = `/* ==========================================================================
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

/* Sight Bullet Item marker styling */
.activity-sublist li.sight-bullet-item {
  color: #0f172a;
  cursor: default;
}

.activity-sublist li.sight-bullet-item::marker {
  color: #2563eb !important; /* Sapphire blue bullet marker */
  font-size: 1.05em;
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
  padding: 1px 4px;
  margin: 0 -2px;
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
}

span.has-photo-preview:hover::after {
  opacity: 1;
  transform: scale(1.18);
}

/* Transit, Travel, Luggage, Hotel & Sunday Reflection Items */
.activity-sublist li.transit-bullet-item {
  display: list-item !important;
  list-style-type: disc !important;
  color: #64748b !important;
  font-weight: 400 !important;
  cursor: default !important;
  text-decoration: none !important;
  background: none !important;
}

.activity-sublist li.transit-bullet-item::marker {
  color: #94a3b8 !important; /* Subtle slate bullet marker */
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
      css = css.split(marker)[0] + updatedCss;
    } else {
      css = css + '\n\n' + updatedCss;
    }
    fs.writeFileSync(filePath, css, 'utf8');
    console.log(`✅ Updated ${filePath} with text-bound span.has-photo-preview styles!`);
  }
});

// 4. UPDATE js/app.js & dist/js/app.js
['js/app.js', 'dist/js/app.js'].forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let appJs = fs.readFileSync(filePath, 'utf8');

    // Update Day 20 activities to split Pont Alexandre III & Grand Palais view
    appJs = appJs.replace(
      /\"• <b>Morning \(10:00 – 13:00\):<\/b><ul class=\\\"activity-sublist\\\">.*?<\/ul>\"/,
      `"• <b>Morning (10:00 – 13:00):</b><ul class=\\"activity-sublist\\"><li class=\\"sight-bullet-item\\"><span class=\\"has-photo-preview\\" title=\\"📸 Hover to preview photo\\">Boulevard Saint-Michel & Latin Quarter</span></li><li class=\\"sight-bullet-item\\"><span class=\\"has-photo-preview\\" title=\\"📸 Hover to preview photo\\">Pont Alexandre III (Ornate Beaux-Arts bridge over the Seine)</span></li><li class=\\"sight-bullet-item\\"><span class=\\"has-photo-preview\\" title=\\"📸 Hover to preview photo\\">Grand Palais (Historic Beaux-Arts exhibition hall & glass dome)</span></li></ul>"`
    );

    // Update itineraryData with text-bound span structure
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
          const type = classifyActivity(cleanText, dayNum);
          if (type === 'transit') {
            return `<li class="transit-bullet-item">${cleanText}</li>`;
          } else {
            return `<li class="sight-bullet-item"><span class="has-photo-preview" title="📸 Hover to preview photo">${cleanText}</span></li>`;
          }
        });
      });
    });

    const newItCode = JSON.stringify(data, null, 2);
    appJs = appJs.substring(0, startIt + 'const itineraryData = '.length) + newItCode + appJs.substring(endIt);

    // Update setupPlacePhotoInteractions to bind strictly to span.has-photo-preview
    const oldSetup = appJs.indexOf('function setupPlacePhotoInteractions() {');
    const endSetup = appJs.indexOf('// Hook into existing lightbox prev/next buttons');
    if (oldSetup > -1 && endSetup > -1) {
      const newSetupCode = `function setupPlacePhotoInteractions() {
  const popover = document.getElementById('placePhotoPopover');
  if (!popover) return;

  let hoverTimeout = null;

  function isTravelOrReflectionText(text) {
    if (!text) return true;
    const t = text.trim();
    const lower = t.toLowerCase();
    if (t.includes('➔') || t.includes('->') || t.includes('→') || t.includes('&rarr;') || t.includes('&#10140;')) return true;
    if (lower.includes('sunday church') || lower.includes('sunday reflection') || lower.includes('church worship') || lower.includes('sacrament meeting') || lower.includes('worship & reflection')) return true;
    if (lower.includes('rer line c return') || lower.includes('return to paris') || lower.includes('celebration dinner')) return true;
    if (lower.includes('eurotunnel') || lower.includes('leshuttle') || lower.includes('flixbus') || lower.includes('terminal')) return true;
    if (lower.includes('café rest') || lower.includes('cafe rest') || lower.includes('warm drinks') || lower.includes('early rest') || lower.includes('rest & recovery') || lower.includes('sleep in real hotel bed')) return true;
    if (lower.includes('check-in') || lower.includes('check in') || lower.includes('check-out') || lower.includes('check out') || lower.includes('luggage drop') || lower.includes('baggage check-in') || lower.includes('pack bags')) return true;
    if (lower.includes('hotel cristall') || lower.includes('amsterdam base') || lower.includes('alpenblick coliving') || lower.includes('break & home') || lower.includes('premier inn')) return true;
    if (lower.includes('dinner') || lower.includes('fondue dinner') || lower.includes('roesti dinner') || lower.includes('lunch in old town') || lower.includes('breakfast at victoria')) return true;
    return false;
  }

  function showPopover(targetSpan, dayNum, text, mouseX, mouseY) {
    clearTimeout(hoverTimeout);
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
    if (!sight) return;

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
    hoverTimeout = setTimeout(() => {
      popover.classList.remove('visible');
    }, 80);
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
  document.addEventListener('mouseover', (e) => {
    const targetSpan = e.target.closest('span.has-photo-preview');
    if (!targetSpan) return;

    if (targetSpan.closest('.transit-bullet-item') || isTravelOrReflectionText(targetSpan.textContent)) {
      popover.classList.remove('visible');
      return;
    }

    const dayNum = resolveDayNum(targetSpan);
    if (!dayNum || dayNum === 1 || dayNum === 21) return;

    showPopover(targetSpan, dayNum, targetSpan.textContent, e.clientX, e.clientY);
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
    if (targetSpan) hidePopover();
  });

  // Clicking an activity bullet opens the photo modal for that sight
  document.addEventListener('click', (e) => {
    const targetSpan = e.target.closest('span.has-photo-preview, .btn-table-photos, .btn-card-photos');
    if (!targetSpan || targetSpan.closest('.transit-bullet-item')) return;

    const dayNum = resolveDayNum(targetSpan) || (targetSpan.getAttribute('data-day') ? parseInt(targetSpan.getAttribute('data-day').replace('Day ', ''), 10) : 0);
    if (!dayNum || dayNum === 1 || dayNum === 21) return;

    const matched = findSightForText(dayNum, targetSpan.textContent);
    openDayPhotosModal(dayNum, matched.index);
    hidePopover();
  });
}\n\n`;

      appJs = appJs.substring(0, oldSetup) + newSetupCode + appJs.substring(endSetup);
    }

    fs.writeFileSync(filePath, appJs, 'utf8');
    console.log(`✅ Updated ${filePath} with text-bound span interaction listeners!`);
  }
});

// 5. UPDATE index.html & dist/index.html
['index.html', 'dist/index.html'].forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let html = fs.readFileSync(filePath, 'utf8');

    // Split Day 20 activity in Master Table
    html = html.replace(
      /<li[^>]*>Pont Alexandre III & Grand Palais view<\/li>/g,
      '<li class="sight-bullet-item"><span class="has-photo-preview" title="📸 Hover to preview photo">Pont Alexandre III (Ornate Beaux-Arts bridge over the Seine)</span></li>\n            <li class="sight-bullet-item"><span class="has-photo-preview" title="📸 Hover to preview photo">Grand Palais (Historic Beaux-Arts exhibition hall & glass dome)</span></li>'
    );

    // Split Day 20 activity in Day Cards
    html = html.replace(
      /<li[^>]*>Pont Alexandre III & Grand Palais view<\/li>/g,
      '<li class="sight-bullet-item"><span class="has-photo-preview" title="📸 Hover to preview photo">Pont Alexandre III (Ornate Beaux-Arts bridge over the Seine)</span></li>\n            <li class="sight-bullet-item"><span class="has-photo-preview" title="📸 Hover to preview photo">Grand Palais (Historic Beaux-Arts exhibition hall & glass dome)</span></li>'
    );

    // Re-format all activity-sublist in table rows
    html = html.replace(/<tr class=\"itinerary-table-row[^>]*>([\s\S]*?)<\/tr>/g, (rowHtml) => {
      const dayMatch = rowHtml.match(/<span class=\"table-day-badge[^\"]*\">Day (\d+)<\/span>/);
      const dayNum = dayMatch ? parseInt(dayMatch[1], 10) : 0;

      return rowHtml.replace(/<ul class=\"activity-sublist\">([\s\S]*?)<\/ul>/g, (ulHtml, ulInner) => {
        const newInner = ulInner.replace(/<li[^>]*>(.*?)<\/li>/g, (m, innerHtml) => {
          const cleanText = innerHtml.replace(/<[^>]+>/g, '').trim();
          const type = classifyActivity(cleanText, dayNum);
          if (type === 'transit') {
            return `<li class="transit-bullet-item">${cleanText}</li>`;
          } else {
            return `<li class="sight-bullet-item"><span class="has-photo-preview" title="📸 Hover to preview photo">${cleanText}</span></li>`;
          }
        });
        return `<ul class="activity-sublist">${newInner}</ul>`;
      });
    });

    // Re-format all activity-sublist in day-cards
    html = html.replace(/<div class=\"day-card[^\"]*\"[^>]*>([\s\S]*?)(?=<div class=\"day-card|<\/section>|<footer|$)/g, (cardHtml) => {
      const dayMatch = cardHtml.match(/<span class=\"card-day-badge\">Day (\d+)<\/span>/);
      const dayNum = dayMatch ? parseInt(dayMatch[1], 10) : 0;

      return cardHtml.replace(/<ul class=\"activity-sublist\">([\s\S]*?)<\/ul>/g, (ulHtml, ulInner) => {
        const newInner = ulInner.replace(/<li[^>]*>(.*?)<\/li>/g, (m, innerHtml) => {
          const cleanText = innerHtml.replace(/<[^>]+>/g, '').trim();
          const type = classifyActivity(cleanText, dayNum);
          if (type === 'transit') {
            return `<li class="transit-bullet-item">${cleanText}</li>`;
          } else {
            return `<li class="sight-bullet-item"><span class="has-photo-preview" title="📸 Hover to preview photo">${cleanText}</span></li>`;
          }
        });
        return `<ul class="activity-sublist">${newInner}</ul>`;
      });
    });

    // Clean Day 21 card to guarantee all items are transit
    const card21Idx = html.indexOf('<span class="card-day-badge">Day 21</span>');
    if (card21Idx > -1) {
      const cardEndIdx = html.indexOf('</section>', card21Idx);
      const card21Html = html.substring(card21Idx, cardEndIdx);
      const cleaned21 = card21Html.replace(/<li class=\"sight-bullet-item\"><span class=\"has-photo-preview\"[^>]*>(.*?)<\/span><\/li>/g, '<li class="transit-bullet-item">$1</li>');
      html = html.substring(0, card21Idx) + cleaned21 + html.substring(cardEndIdx);
    }

    fs.writeFileSync(filePath, html, 'utf8');
    console.log(`✅ Updated ${filePath} with text-bound span.has-photo-preview structure!`);
  }
});

console.log('🎉 Overhaul complete!');
