const fs = require('fs');
const path = require('path');

const repoDir = '/Users/jeana/Projects/schengen-trip-2026';

// =========================================================================
// 1. REBUILD js/gallery-data.js WITH ZERO TRAVEL SIGHTS & SPLIT ARC/CHAMPS
// =========================================================================
const baseGalleryContent = fs.readFileSync(path.join(repoDir, 'js/gallery-data.js'), 'utf8');
const match = baseGalleryContent.match(/window\.galleryData = (\[[\s\S]*?\n\];)/);
if (!match) throw new Error('Could not parse window.galleryData');
const gallery = eval(match[1]);

// 1.1 Remove Kehl Tram from Day 9
const d9 = gallery.find(d => d.dayNum === 9);
if (d9) {
  d9.sights = d9.sights.filter(s => !s.name.includes('Tram Line D'));
}

// 1.2 Remove TGV Lyria from Day 15 (leaving Bern Temple and Break & Home)
const d15 = gallery.find(d => d.dayNum === 15);
if (d15) {
  d15.sights = d15.sights.filter(s => !s.name.includes('TGV Lyria'));
}

// 1.3 Split Arc de Triomphe & Champs-Élysées on Day 16
const d16 = gallery.find(d => d.dayNum === 16);
if (d16) {
  d16.sights = [
    {
      name: "Musée du Louvre & Glass Pyramid",
      category: "🏛️ World's Premier Art Museum",
      time: "Morning (09:00 – 13:00)",
      location: "Rue de Rivoli, 75001 Paris, France",
      image: "/images/sights/louvre.jpg",
      admission: "Online Timed Entry (€22 / ~A$37 AUD)",
      isPaid: true,
      hours: "09:00–18:00 (Open Wednesday 30 Dec · Closed Tuesdays)",
      desc: "World's grandest art museum housed in the historic former royal palace, showcasing da Vinci's Mona Lisa, the Winged Victory of Samothrace, and Venus de Milo.",
      mapsQuery: "Louvre Museum Paris",
      coords: [48.8606, 2.3376],
      aliases: ["louvre", "musée du louvre", "mona lisa", "glass pyramid", "venus de milo", "winged victory"]
    },
    {
      name: "Tuileries Garden & Place de la Concorde",
      category: "🌳 Historic Royal Formal Gardens",
      time: "Afternoon (13:30 – 15:00)",
      location: "Place de la Concorde, 75001 Paris, France",
      image: "/images/sights/tuileries-garden.jpg",
      admission: "Free ($0 AUD)",
      isPaid: false,
      hours: "07:30–19:30 (Open 365 Days)",
      desc: "Grand 16th-century landscaped French formal royal garden commissioned by Catherine de' Medici, connecting the Louvre with the Luxor Obelisk at Place de la Concorde.",
      mapsQuery: "Tuileries Garden Paris",
      coords: [48.8635, 2.327],
      aliases: ["tuileries", "tuileries garden", "place de la concorde", "concorde", "jardin des tuileries"]
    },
    {
      name: "Galeries Lafayette Haussmann Grand Dome",
      category: "🛍️ Historic Luxury Department Store",
      time: "Afternoon (15:15 – 16:45)",
      location: "40 Boulevard Haussmann, 75009 Paris, France",
      image: "/images/sights/galeries-lafayette.jpg",
      admission: "Free ($0 AUD)",
      isPaid: false,
      hours: "10:00–20:30 (Holiday Open)",
      desc: "Architectural masterpiece featuring a 43-meter soaring neo-Byzantine stained-glass dome and famous multi-story animated Christmas tree suspended in the central rotunda.",
      mapsQuery: "Galeries Lafayette Haussmann Paris",
      coords: [48.8734, 2.3322],
      aliases: ["galeries lafayette", "lafayette", "haussmann", "giant tree", "christmas tree", "glass dome"]
    },
    {
      name: "Arc de Triomphe (Rooftop Panoramic Terrace)",
      category: "🏛️ Triumphal Monument & Vista",
      time: "Evening (17:00 – 19:00)",
      location: "Place Charles de Gaulle, 75008 Paris, France",
      image: "/images/sights/arc-de-triomphe.jpg",
      admission: "Rooftop Terrace: €16.00 (~A$27 AUD)",
      isPaid: true,
      hours: "10:00–22:30 Daily",
      desc: "Napoleon's monumental neoclassical triumphal arch anchoring the Place Charles de Gaulle, featuring sculpted friezes and a panoramic rooftop terrace looking over the 12 radiating avenues.",
      mapsQuery: "Arc de Triomphe Paris",
      coords: [48.8738, 2.295],
      aliases: ["arc de triomphe", "arc", "triumphal arch", "rooftop terrace", "panoramic terrace", "place charles de gaulle"]
    },
    {
      name: "Avenue des Champs-Élysées",
      category: "✨ World-Famous Holiday Boulevard",
      time: "Evening (19:00 – 21:00)",
      location: "Avenue des Champs-Élysées, 75008 Paris, France",
      image: "/images/sights/champs-elysees.jpg",
      admission: "Free ($0 AUD)",
      isPaid: false,
      hours: "Open 24/7 (Holiday illuminations 17:00–02:00)",
      desc: "The world's most glamorous avenue bathed in dazzling winter Christmas illuminations along the plane trees, bustling Parisian café terraces, and grand Haussmannian facades.",
      mapsQuery: "Avenue des Champs-Élysées Paris",
      coords: [48.8698, 2.3075],
      aliases: ["champs-élysées", "champs-elysees", "avenue des champs-élysées", "champs elysees", "champs", "boulevard"]
    }
  ];
}

// 1.4 Fix Day 18 sight 3 to use latin-quarter-paris.jpg
const d18 = gallery.find(d => d.dayNum === 18);
if (d18) {
  const s3 = d18.sights.find(s => s.name.includes('Saint-Germain') || s.name.includes('Seine'));
  if (s3) {
    s3.name = "Latin Quarter & Saint-Germain-des-Prés";
    s3.image = "/images/sights/latin-quarter-paris.jpg";
    s3.desc = "Historic intellectual heartbeat of Paris with medieval cobbled streets, famous bookstalls, Sorbonne University courtyards, and classic Saint-Germain literary cafés.";
    s3.aliases = ["latin quarter", "saint-germain", "saint-germain-des-prés", "boulevard saint-michel", "seine riverbanks"];
  }
}

// 1.5 Remove FlixBus/Eurotunnel from Day 20
const d20 = gallery.find(d => d.dayNum === 20);
if (d20) {
  d20.sights = [
    {
      name: "Pont Alexandre III & Seine View",
      category: "🌉 Beaux-Arts Bridge Landmark",
      time: "Morning (10:30 – 12:30)",
      location: "Pont Alexandre III, 75008 Paris, France",
      image: "/images/sights/pont-alexandre-iii.jpg",
      admission: "Free ($0 AUD)",
      isPaid: false,
      hours: "Open 24/7",
      desc: "Paris's most extravagant bridge, spanning the Seine with gilded bronze winged horses, Art Nouveau lanterns, and iconic vistas towards Les Invalides and the Eiffel Tower.",
      mapsQuery: "Pont Alexandre III Paris",
      coords: [48.8639, 2.3135],
      aliases: ["pont alexandre iii", "alexandre iii", "beaux-arts bridge", "pont alexandre"]
    },
    {
      name: "Grand Palais (Historic Beaux-Arts Monument)",
      category: "🏛️ Grand Historic Exhibition Hall",
      time: "Afternoon (12:30 – 14:30)",
      location: "3 Avenue du Général Eisenhower, 75008 Paris, France",
      image: "/images/sights/grand-palais-paris.jpg",
      admission: "Free exterior promenade",
      isPaid: false,
      hours: "Exterior open 24/7",
      desc: "Historic 1900 Universal Exposition hall featuring an enormous glass vaulted ceiling, classic colonnaded facade, and monumental bronze quadriga sculptures.",
      mapsQuery: "Grand Palais Paris",
      coords: [48.8661, 2.3125],
      aliases: ["grand palais", "palais", "exhibition hall", "glass barrel roof"]
    }
  ];
}

// Write updated gallery-data.js
const newGalleryCode = `// Schengen Tour 2026-2027 - Complete Verified Visual Gallery Data
// Granular, dedicated photography for genuine sightseeing landmarks (Excluding UK & Transit)

window.galleryData = ${JSON.stringify(gallery, null, 2)};

// Dynamically generate allSightsFlat with all required metadata
window.allSightsFlat = window.galleryData.flatMap(day => 
  day.sights.map(sight => ({
    ...sight,
    dayNum: day.dayNum,
    day: day.day,
    dayTitle: \`\${day.day}: \${day.title}\`,
    date: day.date,
    city: day.city,
    countryFilter: day.countryFilter,
    badgeClass: day.badgeClass
  }))
);
`;

fs.writeFileSync(path.join(repoDir, 'js/gallery-data.js'), newGalleryCode, 'utf8');
console.log('✅ js/gallery-data.js updated (Removed transit legs; split Arc and Champs-Élysées)!');

// =========================================================================
// 2. ADD CSS IDENTIFIER STYLING IN css/style.css
// =========================================================================
let styleCss = fs.readFileSync(path.join(repoDir, 'css/style.css'), 'utf8');

const photoIdentifierStyles = `
/* ==========================================================================
   Landmark Places with Instant Photo Preview Identifier (User Request)
   ========================================================================== */
.has-photo-preview {
  color: #1d4ed8;
  font-weight: 600;
  cursor: pointer;
  position: relative;
  transition: all 0.18s cubic-bezier(0.16, 1, 0.3, 1);
  border-radius: 4px;
  padding: 1px 4px;
  margin: -1px -2px;
  text-decoration: underline dotted rgba(37, 99, 235, 0.5) 1.5px;
  text-underline-offset: 3px;
  display: inline;
}

.has-photo-preview:hover {
  color: #1e40af;
  background: rgba(37, 99, 235, 0.09);
  text-decoration: underline solid #2563eb 1.5px;
}

.has-photo-preview::after {
  content: " 📸";
  font-size: 0.72rem;
  opacity: 0.78;
  vertical-align: baseline;
  transition: transform 0.2s ease, opacity 0.2s ease;
  display: inline-block;
  margin-left: 2px;
}

.has-photo-preview:hover::after {
  opacity: 1;
  transform: scale(1.18);
}

/* Neutral Traveling & Sunday Reflection Items (No Photo Preview) */
.transit-bullet-item {
  color: #64748b;
  font-style: normal;
  cursor: default;
  text-decoration: none !important;
}

.transit-bullet-item:hover {
  background: none !important;
  color: #64748b !important;
}
`;

if (!styleCss.includes('.has-photo-preview')) {
  styleCss += photoIdentifierStyles;
  fs.writeFileSync(path.join(repoDir, 'css/style.css'), styleCss, 'utf8');
  console.log('✅ css/style.css updated with .has-photo-preview identifier styling!');
}

// =========================================================================
// 3. UPDATE js/app.js: isTravelOrReflectionBullet & TAGGING LOGIC
// =========================================================================
let appJs = fs.readFileSync(path.join(repoDir, 'js/app.js'), 'utf8');

// Function to classify a bullet
function isTravelOrReflection(text) {
  if (!text) return true;
  const t = text.trim();
  const lower = t.toLowerCase();

  // 1. Arrows indicating travel
  if (t.includes('➔') || t.includes('->') || t.includes('→')) {
    return true;
  }

  // 2. Sunday Reflection / Worship
  if (lower.includes('sunday church') || lower.includes('sunday reflection') || lower.includes('church worship') || lower.includes('sacrament meeting')) {
    return true;
  }

  // 3. Transit prefixes or traveling movements
  const travelPrefixes = [
    'sbb intercity', 'sbb train', 'regional train', 'db ice', 'sncf ter', 'sncf tgv',
    'high-speed tgv', 'flixbus', 'postbus', 'sti bus', 'blm cable car', 'mountain railway',
    's-bahn', 'rer line', 'rer c', 'tram line', 'metro line', 'phébus bus', 'phebus bus',
    'south western railway', 'direct scenic transit', 'direct transit', 'transit from',
    'transfer to', 'return train', 'scenic train', 'eurotunnel', 'alpenblick coliving check-out',
    'break & home paris italie (pack bags', 'hotel pack bags', 'arrive london victoria',
    'return to uk family base', 'rest & recovery', 'pack bags', 'check-in', 'check-out'
  ];

  for (const prefix of travelPrefixes) {
    if (lower.startsWith(prefix) || lower.includes(prefix)) {
      return true;
    }
  }

  return false;
}

// Update itineraryData activities to add class="has-photo-preview" or class="transit-bullet-item"
const matchItin = appJs.match(/const itineraryData = (\[[\s\S]*?\n\];)/);
if (matchItin) {
  const itin = eval(matchItin[1]);
  itin.forEach(day => {
    day.activities = day.activities.map(act => {
      return act.replace(/<li>(.*?)<\/li>/g, (fullMatch, innerText) => {
        const cleanText = innerText.replace(/<[^>]+>/g, '').trim();
        // If day 1 or 21 (UK), always transit/no photo
        if (day.day === 'Day 1' || day.day === 'Day 21' || isTravelOrReflection(cleanText)) {
          return `<li class="transit-bullet-item">${innerText}</li>`;
        } else {
          return `<li class="has-photo-preview" title="📸 Hover to preview photo">${innerText}</li>`;
        }
      });
    });
  });

  appJs = appJs.replace(matchItin[0], 'const itineraryData = ' + JSON.stringify(itin, null, 2) + ';');
  fs.writeFileSync(path.join(repoDir, 'js/app.js'), appJs, 'utf8');
  console.log('✅ js/app.js itineraryData tagged with has-photo-preview / transit-bullet-item!');
}

// Update setupPlacePhotoInteractions in js/app.js to strictly filter out travel/reflection
let updatedAppJs = fs.readFileSync(path.join(repoDir, 'js/app.js'), 'utf8');
const setupIdx = updatedAppJs.indexOf('function setupPlacePhotoInteractions() {');
if (setupIdx !== -1) {
  const endIdx = updatedAppJs.indexOf('// Hook into existing lightbox prev/next buttons', setupIdx);
  if (endIdx !== -1) {
    const newSetup = `function setupPlacePhotoInteractions() {
  const popover = document.getElementById('placePhotoPopover');
  if (!popover) return;

  let hoverTimeout = null;

  function isTravelOrReflectionText(text) {
    if (!text) return true;
    const t = text.trim();
    const lower = t.toLowerCase();
    if (t.includes('➔') || t.includes('->') || t.includes('→')) return true;
    if (lower.includes('sunday church') || lower.includes('sunday reflection') || lower.includes('church worship') || lower.includes('sacrament meeting')) return true;
    const prefixes = [
      'sbb intercity', 'sbb train', 'regional train', 'db ice', 'sncf ter', 'sncf tgv',
      'high-speed tgv', 'flixbus', 'postbus', 'sti bus', 'blm cable car', 'mountain railway',
      's-bahn', 'rer line', 'rer c', 'tram line', 'metro line', 'phébus bus', 'phebus bus',
      'south western railway', 'direct scenic transit', 'direct transit', 'transit from',
      'transfer to', 'return train', 'scenic train', 'eurotunnel', 'check-out', 'pack bags',
      'arrive london victoria', 'return to uk family base', 'rest & recovery'
    ];
    return prefixes.some(p => lower.startsWith(p) || lower.includes(p));
  }

  function showPopover(targetEl, dayNum, text, mouseX, mouseY) {
    clearTimeout(hoverTimeout);
    // User Rule 1: Traveling (arrows) and Sunday Reflection do NOT have photos
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
      const rect = targetEl.getBoundingClientRect();
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
    }, 100);
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

  // Hover over bullets with photo preview
  document.addEventListener('mouseover', (e) => {
    const targetEl = e.target.closest('.has-photo-preview, .activity-sublist li');
    if (!targetEl) return;

    // Strict check: if it is travel or reflection, ignore completely
    if (targetEl.classList.contains('transit-bullet-item') || isTravelOrReflectionText(targetEl.textContent)) {
      popover.classList.remove('visible');
      return;
    }

    const dayNum = resolveDayNum(targetEl);
    if (!dayNum || dayNum === 1 || dayNum === 21) return;

    showPopover(targetEl, dayNum, targetEl.textContent, e.clientX, e.clientY);
  });

  document.addEventListener('mousemove', (e) => {
    if (!popover.classList.contains('visible')) return;
    const targetEl = e.target.closest('.has-photo-preview, .activity-sublist li');
    if (!targetEl || targetEl.classList.contains('transit-bullet-item') || isTravelOrReflectionText(targetEl.textContent)) {
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
    const targetEl = e.target.closest('.has-photo-preview, .activity-sublist li');
    if (targetEl) hidePopover();
  });

  // Clicking an activity bullet opens the photo modal for that sight
  document.addEventListener('click', (e) => {
    const targetEl = e.target.closest('.has-photo-preview, .btn-table-photos, .btn-card-photos');
    if (!targetEl || targetEl.classList.contains('transit-bullet-item')) return;

    const dayNum = resolveDayNum(targetEl) || (targetEl.getAttribute('data-day') ? parseInt(targetEl.getAttribute('data-day').replace('Day ', ''), 10) : 0);
    if (!dayNum || dayNum === 1 || dayNum === 21) return;

    const matched = findSightForText(dayNum, targetEl.textContent);
    openDayPhotosModal(dayNum, matched.index);
    hidePopover();
  });
}
`;
    updatedAppJs = updatedAppJs.slice(0, setupIdx) + newSetup + '\n' + updatedAppJs.slice(endIdx);
    fs.writeFileSync(path.join(repoDir, 'js/app.js'), updatedAppJs, 'utf8');
    console.log('✅ js/app.js updated with strict travel exclusion and .has-photo-preview focus!');
  }
}

// =========================================================================
// 4. UPDATE index.html (TAG STATIC TABLE & CARDS WITH has-photo-preview)
// =========================================================================
let indexHtml = fs.readFileSync(path.join(repoDir, 'index.html'), 'utf8');

// Replace all <li> in index.html to add class="has-photo-preview" or class="transit-bullet-item"
indexHtml = indexHtml.replace(/<li(?:\s+class="[^"]*")?>([\s\S]*?)<\/li>/g, (match, inner) => {
  const clean = inner.replace(/<[^>]+>/g, '').trim();
  if (isTravelOrReflection(clean)) {
    return `<li class="transit-bullet-item">${inner}</li>`;
  } else {
    return `<li class="has-photo-preview" title="📸 Hover to preview photo">${inner}</li>`;
  }
});

// Update Day 16 photo button count to (5)
indexHtml = indexHtml.replace(
  /<button type="button" class="btn-card-photos" data-day="Day 16">📸 View Photos \(\d+\)<\/button>/,
  '<button type="button" class="btn-card-photos" data-day="Day 16">📸 View Photos (5)</button>'
);
// Update Day 9 photo button count to (3)
indexHtml = indexHtml.replace(
  /<button type="button" class="btn-card-photos" data-day="Day 9">📸 View Photos \(\d+\)<\/button>/,
  '<button type="button" class="btn-card-photos" data-day="Day 9">📸 View Photos (3)</button>'
);
// Update Day 15 photo button count to (2)
indexHtml = indexHtml.replace(
  /<button type="button" class="btn-card-photos" data-day="Day 15">📸 View Photos \(\d+\)<\/button>/,
  '<button type="button" class="btn-card-photos" data-day="Day 15">📸 View Photos (2)</button>'
);
// Update Day 20 photo button count to (2)
indexHtml = indexHtml.replace(
  /<button type="button" class="btn-card-photos" data-day="Day 20">📸 View Photos \(\d+\)<\/button>/,
  '<button type="button" class="btn-card-photos" data-day="Day 20">📸 View Photos (2)</button>'
);

fs.writeFileSync(path.join(repoDir, 'index.html'), indexHtml, 'utf8');
console.log('✅ index.html updated with .has-photo-preview classes and updated button counts!');
