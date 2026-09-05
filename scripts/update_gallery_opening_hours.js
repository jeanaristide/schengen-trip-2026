const fs = require('fs');
const path = require('path');

const galleryDataPath = path.join(__dirname, '../js/gallery-data.js');
const appJsPath = path.join(__dirname, '../js/app.js');
const galleryJsPath = path.join(__dirname, '../js/gallery.js');
const styleCssPath = path.join(__dirname, '../css/style.css');

// Sight hours map
const sightHoursMap = {
  "UNESCO 17th-Century Canal Ring": "Open 24/7 (Public Canal Walk)",
  "Dam Square & Royal Palace": "Open 24/7 (Public Square) · Palace 10:00–17:00",
  "Begijnhof Courtyard": "Open Daily 09:00–17:00 (Free Entry)",
  "Zaanse Schans Historic Windmills": "Open Daily 09:00–17:00 (Working Windmills)",
  "Rijksmuseum at Museumplein": "Open Daily 09:00–17:00 (Open 365 Days)",
  "Ice Village Amsterdam & Christmas Market": "Open Daily 10:00–21:00 (Dec Festive Season)",
  "The Jordaan Canal District": "Open 24/7 (Public Historic District)",
  "Peace Palace (Vredespaleis)": "Visitor Centre Open Fri 12:00–16:00 · Flame 24/7",
  "The Hague Netherlands LDS Temple": "Open Friday for scheduled sessions & grounds",
  "The Frankfurt Germany LDS Temple": "Open Saturdays (08:15 AM Session) & grounds",
  "Eiserner Steg (Iron Footbridge)": "Open 24/7 (Pedestrian Footbridge)",
  "Römerberg & Frankfurt Christmas Market": "Open Daily 10:00–21:00 (Runs through 22 Dec)",
  "Goethe House & Museum": "Open Sundays 10:00–18:00",
  "Frankfurt Altstadt & Main River Embankment": "Open 24/7 (Public Riverbank Promenade)",
  "Cologne Cathedral (Kölner Dom)": "Open Daily 06:00–20:00 (Open 365 Days)",
  "Lindt Chocolate Museum (Schokoladenmuseum)": "Open Mondays in Dec 10:00–18:00 (Last entry 17:00)",
  "Düsseldorf 7 Themed Christmas Markets": "Open Daily 11:00–20:00 (Runs through 30 Dec)",
  "Königsallee & Corneliusplatz Ice Rink": "Open Daily 11:00–21:00",
  "Rhine Cross-Border Tram Line D": "Operates 05:00–00:30 (Every 6–10 mins)",
  "Petite France & Ponts Couverts": "Open 24/7 (Public Historic District)",
  "Strasbourg Place Kléber & Great Tree": "Open 24/7 · Markets 11:00–20:00 (Until 24 Dec)",
  "Strasbourg Cathedral (Notre-Dame)": "Open Daily 08:30–11:15 & 12:45–18:00",
  "Colmar Petite Venise (Beauty & the Beast)": "Open 24/7 (Public Historic Canal Quarter)",
  "Maison Pfister (Howl's Moving Castle)": "Open 24/7 (Exterior Renaissance Landmark)",
  "Bern Old Town & Zytglogge Clock Tower": "Open 24/7 (UNESCO Historic Streets)",
  "Bern Switzerland LDS Temple": "Grounds open for reverent photos (Holiday session recess)",
  "Interlaken & Jungfrau Massif Panorama": "Open 24/7 (Höhematte Park & Alpine Views)",
  "Grindelwald First Cliff Walk by Tissot": "Open Christmas Day 09:00–16:00 (Gondola 08:30–16:30)",
  "Schreckfeld & Kleine Scheidegg Slopes": "Open Daily (Winter Ski Season in Operation)",
  "Staubbach Falls in Lauterbrunnen": "Open 24/7 (Public Natural Waterfall)",
  "Mürren Car-Free Alpine Village": "Open 24/7 (BLM Cable Car & Train 06:00–20:30)",
  "Iseltwald Landing Stage (Captain Ri's Piano)": "Open 24/7 (Automated 5 CHF Turnstile)",
  "Seeburg Castle & Lake Brienz Promenade": "Open 24/7 (Public Lakeside Path)",
  "Panoramabrücke Sigriswil Suspension Bridge": "Open Daily 08:00–20:00 (Automated 8 CHF Turnstile)",
  "Lake Thun Panorama & Spiez Castle": "Open 24/7 (Public Lakeside Viewpoint)",
  "Chapel Bridge (Kapellbrücke) & Water Tower": "Open 24/7 (Covered Wooden Bridge)",
  "Lion Monument (Löwendenkmal)": "Open 24/7 (Public Rock Relief Monument)",
  "Lake Zurich Promenade & Bürkliplatz": "Open 24/7 (Lakeside Promenade)",
  "Lindenhof Hill (CLOY Opening Sequence)": "Open 24/7 (Public Hilltop Park overlooking Limmat)",
  "Sacré-Cœur Basilica & Montmartre Hill": "Open Daily 06:30–22:30 (Open 365 Days · Free Nave)",
  "Historic Paris Boulevards & Latin Quarter": "Open 24/7 (Public Streets & Seine Banks)",
  "Musée du Louvre & Glass Pyramid": "Open Wednesday 09:00–18:00 (Closed Tuesdays · Day 16 is Wed!)",
  "Galeries Lafayette Haussmann Grand Dome": "Open Daily 10:00–20:30 (Holiday Window Displays)",
  "Arc de Triomphe & Champs-Élysées": "Open Daily 10:00–22:30 (Last Entry 21:45)",
  "Musée d'Orsay (Gare d'Orsay)": "Open Thursday 09:30–18:00 (Closed Mondays · Day 17 is Thu!)",
  "Notre-Dame de Paris Cathedral": "Open Daily 07:45–19:00 (Reopened Dec 2024 · Free Nave)",
  "The Eiffel Tower & Trocadéro View": "Open for NYE Celebrations · Metro runs free all night",
  "Jardin du Luxembourg (Luxembourg Gardens)": "Open Daily 08:00–17:00 (Open 365 Days · Free Entry)",
  "Bateaux Parisiens Seine River Cruise": "Open New Year's Day 10:30–21:00 (Continuous Sailings)",
  "Palace of Versailles & Hall of Mirrors": "Open Saturday 09:00–17:30 (Closed Mon & Jan 1 · Day 19 is Sat!)",
  "Paris France LDS Temple": "Open Saturdays 08:30–17:30 & Landscaped Gardens",
  "Pont Alexandre III & Historic Seine": "Open 24/7 (Pedestrian Bridge & Seine Banks)",
  "Eurotunnel Crossing & Paris Farewell": "FlixBus overnight departure 23:00 to London"
};

// 1. Update js/gallery-data.js
let gData = fs.readFileSync(galleryDataPath, 'utf8');

Object.keys(sightHoursMap).forEach(name => {
  const hours = sightHoursMap[name];
  const targetName = `name: "${name}",`;
  if (gData.includes(targetName)) {
    const afterNameIdx = gData.indexOf(targetName);
    const descIdx = gData.indexOf('desc:', afterNameIdx);
    if (descIdx !== -1 && descIdx - afterNameIdx < 600) {
      const segment = gData.slice(afterNameIdx, descIdx);
      if (!segment.includes('hours:')) {
        const replacement = `hours: "${hours}",\n        `;
        gData = gData.slice(0, descIdx) + replacement + gData.slice(descIdx);
      }
    }
  }
});

fs.writeFileSync(galleryDataPath, gData, 'utf8');
console.log('Successfully updated js/gallery-data.js with sight operating hours!');

// 2. Update js/app.js renderGalleryView and Lightbox
let appJs = fs.readFileSync(appJsPath, 'utf8');

// Add hours badge to sight cards in renderGalleryView
const oldGalleryCardBody = `${'${sight.admission ? `<div class="sight-admission-badge ${sight.isPaid ? \'paid\' : \'free\'}">${sight.isPaid ? \'🎟️ Admission: \' : \'✨ Entry: \'}${sight.admission}</div>` : \'\'}'}
                <p class="sight-desc" style="font-size: 0.88rem; line-height: 1.55; margin-bottom: 14px; margin-top: 8px;">\${sight.desc}</p>`;

const newGalleryCardBody = `${'${sight.admission ? `<div class="sight-admission-badge ${sight.isPaid ? \'paid\' : \'free\'}">${sight.isPaid ? \'🎟️ Admission: \' : \'✨ Entry: \'}${sight.admission}</div>` : \'\'}'}
                ${'${sight.hours ? `<div class="sight-hours-badge">🕒 <strong>Hours:</strong> ${sight.hours}</div>` : \'\'}'}
                <p class="sight-desc" style="font-size: 0.88rem; line-height: 1.55; margin-bottom: 14px; margin-top: 8px;">\${sight.desc}</p>`;

if (appJs.includes(oldGalleryCardBody)) {
  appJs = appJs.replace(oldGalleryCardBody, newGalleryCardBody);
  console.log('Updated renderGalleryView in js/app.js to display sight hours!');
}

// Update Lightbox in js/app.js to show verified hours
const oldLightboxDayBadge = `if (dayBadgeEl) dayBadgeEl.innerHTML = \`\${sight.dayTitle} · \${sight.date} · <strong>\${sight.category}</strong>\${sight.admission ? \` · <span style="font-weight:700; color:\${sight.isPaid ? '#ef4444' : '#22c55e'};">\${sight.isPaid ? '🎟️ ' : '✨ '}\${sight.admission}</span>\` : ''}\`;`;

const newLightboxDayBadge = `if (dayBadgeEl) dayBadgeEl.innerHTML = \`\${sight.dayTitle} · \${sight.date} · <strong>\${sight.category}</strong>\${sight.admission ? \` · <span style="font-weight:700; color:\${sight.isPaid ? '#ef4444' : '#22c55e'};">\${sight.isPaid ? '🎟️ ' : '✨ '}\${sight.admission}</span>\` : ''}\${sight.hours ? \` · <span style="font-weight:600; color:#15803d; background:#dcfce7; padding:2px 6px; border-radius:4px;">🕒 \${sight.hours}</span>\` : ''}\`;`;

if (appJs.includes(oldLightboxDayBadge)) {
  appJs = appJs.replace(oldLightboxDayBadge, newLightboxDayBadge);
  console.log('Updated Lightbox in js/app.js to display sight hours!');
}

fs.writeFileSync(appJsPath, appJs, 'utf8');

// 3. Update js/gallery.js as well
let galleryJs = fs.readFileSync(galleryJsPath, 'utf8');
const oldGjsCard = `\${sight.admission ? \`<div class="sight-admission-badge \${sight.isPaid ? 'paid' : 'free'}">\${sight.isPaid ? '🎟️ Admission: ' : '✨ Entry: '}\${sight.admission}</div>\` : ''}
              <p class="sight-desc">\${sight.desc}</p>`;

const newGjsCard = `\${sight.admission ? \`<div class="sight-admission-badge \${sight.isPaid ? 'paid' : 'free'}">\${sight.isPaid ? '🎟️ Admission: ' : '✨ Entry: '}\${sight.admission}</div>\` : ''}
              \${sight.hours ? \`<div class="sight-hours-badge">🕒 <strong>Hours:</strong> \${sight.hours}</div>\` : ''}
              <p class="sight-desc">\${sight.desc}</p>`;

if (galleryJs.includes(oldGjsCard)) {
  galleryJs = galleryJs.replace(oldGjsCard, newGjsCard);
  console.log('Updated js/gallery.js card rendering to display sight hours!');
}

const oldGjsLightbox = `if (dayBadgeEl) dayBadgeEl.innerHTML = \`\${sight.dayTitle} · \${sight.date} · <strong>\${sight.category}</strong>\${sight.admission ? \` · <span style="font-weight:700; color:\${sight.isPaid ? '#ef4444' : '#22c55e'};">\${sight.isPaid ? '🎟️ ' : '✨ '}\${sight.admission}</span>\` : ''}\`;`;

const newGjsLightbox = `if (dayBadgeEl) dayBadgeEl.innerHTML = \`\${sight.dayTitle} · \${sight.date} · <strong>\${sight.category}</strong>\${sight.admission ? \` · <span style="font-weight:700; color:\${sight.isPaid ? '#ef4444' : '#22c55e'};">\${sight.isPaid ? '🎟️ ' : '✨ '}\${sight.admission}</span>\` : ''}\${sight.hours ? \` · <span style="font-weight:600; color:#15803d; background:#dcfce7; padding:2px 6px; border-radius:4px;">🕒 \${sight.hours}</span>\` : ''}\`;`;

if (galleryJs.includes(oldGjsLightbox)) {
  galleryJs = galleryJs.replace(oldGjsLightbox, newGjsLightbox);
  console.log('Updated js/gallery.js lightbox to display sight hours!');
}

fs.writeFileSync(galleryJsPath, galleryJs, 'utf8');

// 4. Update css/style.css for sight-hours-badge
let css = fs.readFileSync(styleCssPath, 'utf8');
const sightHoursBadgeCss = `
.sight-hours-badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 3px 8px;
  border-radius: 6px;
  font-size: 0.74rem;
  font-weight: 500;
  background: #f0fdf4;
  color: #166534;
  border: 1px solid #bbf7d0;
  margin-top: 6px;
  margin-bottom: 2px;
  width: fit-content;
}

.sight-hours-badge strong {
  color: #14532d;
  font-weight: 700;
}
`;

if (!css.includes('sight-hours-badge')) {
  css += sightHoursBadgeCss;
  fs.writeFileSync(styleCssPath, css, 'utf8');
  console.log('Successfully updated css/style.css with sight-hours-badge styles!');
}
