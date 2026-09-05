const fs = require('fs');
const path = require('path');

const indexHtmlPath = path.join(__dirname, '../index.html');
const appJsPath = path.join(__dirname, '../js/app.js');
const galleryDataPath = path.join(__dirname, '../js/gallery-data.js');

// 1. Update index.html
let html = fs.readFileSync(indexHtmlPath, 'utf8');

// Update Admission Summary Banner stats: $281 AUD -> $251 AUD; France $161 AUD -> $131 AUD
html = html.replace(
  '<span class="stat-chip highlight">Total Paid Sightseeing: ~A$281 AUD / person</span>',
  '<span class="stat-chip highlight">Total Paid Sightseeing: ~A$251 AUD / person</span>'
);
html = html.replace(
  '<span class="stat-chip">🇫🇷 France: ~A$161 AUD</span>',
  '<span class="stat-chip">🇫🇷 France: ~A$131 AUD</span>'
);

// Update Verification Matrix Highlight card 2
const oldHighlight2 = `<div class="highlight-desc"><strong>AVOIDED CLOSURES:</strong> Louvre, Orsay &amp; Versailles are closed on Jan 1st. Our plan features Jardin du Luxembourg (open 365d) &amp; Bateaux Parisiens Seine Cruise (open 365d, 10:30–21:00)!</div>`;
const newHighlight2 = `<div class="highlight-desc"><strong>AVOIDED CLOSURES:</strong> Louvre, Orsay &amp; Versailles are closed on Jan 1st. Our plan features open-air royal Jardin du Luxembourg (open 365d), historic Le Marais, Place des Vosges &amp; Latin Quarter cafés!</div>`;
html = html.replace(oldHighlight2, newHighlight2);

// Update Matrix Table Day 18 row
const oldMatrixRow18 = `<tr><td><strong>Day 18</strong> (01 Jan)</td><td>Friday</td><td>Paris (New Year's Day)</td><td>Bateaux Parisiens Seine Cruise, Jardin du Luxembourg</td><td>10:30–21:00 (Cruise open 365d · 08:00–17:00 Garden)</td><td><span class="badge-status-open">🟢 New Year's Day Open</span></td></tr>`;
const newMatrixRow18 = `<tr><td><strong>Day 18</strong> (01 Jan)</td><td>Friday</td><td>Paris (New Year's Day)</td><td>Jardin du Luxembourg, Place des Vosges, Le Marais</td><td>08:00–17:00 (Gardens open 365 days) · Districts 24/7</td><td><span class="badge-status-open">🟢 New Year's Day Open</span></td></tr>`;
html = html.replace(oldMatrixRow18, newMatrixRow18);

// Update Day 18 Table Row in index.html
const oldDay18TableTitle = `<div class="table-plan-title">New Year's Day Seine Cruise & Le Marais</div>`;
const newDay18TableTitle = `<div class="table-plan-title">New Year's Day in Paris: Jardin du Luxembourg &amp; Historic Le Marais</div>`;
html = html.replace(oldDay18TableTitle, newDay18TableTitle);

const oldDay18TableAct = `<div class="table-activity-item">• <b>Evening (17:30 – 20:30):</b> <b>Bateaux Parisiens Seine River Cruise</b> departing near the Eiffel Tower, gliding past illuminated monuments (Musée d'Orsay, Louvre, Pont Alexandre III) under the winter twilight.</div>`;
const newDay18TableAct = `<div class="table-activity-item">• <b>Evening (17:30 – 20:30):</b> Relaxed twilight stroll through the historic <b>Latin Quarter</b> and <b>Saint-Germain-des-Prés</b>, savoring warm Parisian crepes, artisan hot chocolate, and cozy café culture along the Seine riverbanks.</div>`;
html = html.replace(oldDay18TableAct, newDay18TableAct);

const oldDay18TableAdm = `<div class="table-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill paid">🎟️ Seine River Cruise: €18.00 (~A$30 AUD)</span> <span class="admission-pill free">✨ Luxembourg Gardens & Le Marais: Free ($0 AUD)</span></div>`;
const newDay18TableAdm = `<div class="table-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (Jardin du Luxembourg, Le Marais &amp; Saint-Germain walking)</div>`;
html = html.replace(oldDay18TableAdm, newDay18TableAdm);

const oldDay18TableOpen = `<div class="table-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 Bateaux Parisiens Seine Cruise: Open New Year's Day (10:30–21:00)</span> <span class="opening-pill open">🟢 Jardin du Luxembourg: Open 365 Days (08:00–17:00)</span> <span class="opening-pill open">🟢 Le Marais &amp; Place des Vosges: Open 24/7</span> <span class="schedule-note">Closed state museums (Louvre/Orsay/Versailles) intentionally avoided!</span></div>`;
const newDay18TableOpen = `<div class="table-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 Jardin du Luxembourg: Open 365 Days (08:00–17:00)</span> <span class="opening-pill open">🟢 Le Marais &amp; Place des Vosges: Open 24/7</span> <span class="opening-pill open">🟢 Latin Quarter &amp; Saint-Germain: Open 24/7</span> <span class="schedule-note">Closed state museums (Louvre/Orsay/Versailles) intentionally avoided!</span></div>`;
html = html.replace(oldDay18TableOpen, newDay18TableOpen);

const oldDay18TableTransit = `<div class="table-transit-mode"><i>🚇 Paris Metro Line 4/10 + Bateaux Parisiens Cruise</i></div>`;
const newDay18TableTransit = `<div class="table-transit-mode"><i>🚇 Paris Metro Line 4/10 (Central Paris Walkable Districts)</i></div>`;
html = html.replace(oldDay18TableTransit, newDay18TableTransit);

// Update Day 18 Cards in index.html
const oldDay18CardTitle = `<h4 class="card-day-theme">New Year's Day Seine Cruise & Le Marais</h4>`;
const newDay18CardTitle = `<h4 class="card-day-theme">New Year's Day in Paris: Jardin du Luxembourg &amp; Historic Le Marais</h4>`;
html = html.replace(oldDay18CardTitle, newDay18CardTitle);

const oldDay18CardAct = `<div class="card-activity-item">• <b>Evening (17:30 – 20:30):</b> <b>Bateaux Parisiens Seine River Cruise</b> departing near the Eiffel Tower, gliding past illuminated monuments (Musée d'Orsay, Louvre, Pont Alexandre III) under the winter twilight.</div>`;
const newDay18CardAct = `<div class="card-activity-item">• <b>Evening (17:30 – 20:30):</b> Relaxed twilight stroll through the historic <b>Latin Quarter</b> and <b>Saint-Germain-des-Prés</b>, savoring warm Parisian crepes, artisan hot chocolate, and cozy café culture along the Seine riverbanks.</div>`;
html = html.replace(oldDay18CardAct, newDay18CardAct);

const oldDay18CardAdm = `<div class="card-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill paid">🎟️ Seine River Cruise: €18.00 (~A$30 AUD)</span> <span class="admission-pill free">✨ Luxembourg Gardens & Le Marais: Free ($0 AUD)</span></div>`;
const newDay18CardAdm = `<div class="card-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (Jardin du Luxembourg, Le Marais &amp; Saint-Germain walking)</div>`;
html = html.replace(oldDay18CardAdm, newDay18CardAdm);

const oldDay18CardOpen = `<div class="card-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 Bateaux Parisiens Seine Cruise: Open New Year's Day (10:30–21:00)</span> <span class="opening-pill open">🟢 Jardin du Luxembourg: Open 365 Days (08:00–17:00)</span> <span class="opening-pill open">🟢 Le Marais &amp; Place des Vosges: Open 24/7</span> <span class="schedule-note">Closed state museums (Louvre/Orsay/Versailles) intentionally avoided!</span></div>`;
const newDay18CardOpen = `<div class="card-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 Jardin du Luxembourg: Open 365 Days (08:00–17:00)</span> <span class="opening-pill open">🟢 Le Marais &amp; Place des Vosges: Open 24/7</span> <span class="opening-pill open">🟢 Latin Quarter &amp; Saint-Germain: Open 24/7</span> <span class="schedule-note">Closed state museums (Louvre/Orsay/Versailles) intentionally avoided!</span></div>`;
html = html.replace(oldDay18CardOpen, newDay18CardOpen);

const oldDay18CardTransit = `<div class="stay-transit-badge">🚇 Paris Metro Line 4/10 + Bateaux Parisiens Cruise</div>`;
const newDay18CardTransit = `<div class="stay-transit-badge">🚇 Paris Metro Line 4/10 (Central Paris Walkable Districts)</div>`;
html = html.replace(oldDay18CardTransit, newDay18CardTransit);

// Update Fatigue Flag 5 solution
const oldFatigueFlag5 = `Sleep in late on New Year's Day (Day 18) until 10:30 AM—the afternoon Seine river cruise is already perfectly structured for rest!`;
const newFatigueFlag5 = `Sleep in late on New Year's Day (Day 18) until 11:00 AM—a relaxed, unhurried day strolling the royal Luxembourg Gardens, historic Le Marais, and cozy Parisian cafés is perfectly structured for peaceful recovery!`;
html = html.replace(oldFatigueFlag5, newFatigueFlag5);

fs.writeFileSync(indexHtmlPath, html, 'utf8');
console.log('Successfully updated index.html without Seine cruise!');

// 2. Update js/app.js
let appJs = fs.readFileSync(appJsPath, 'utf8');

// Update Day 18 in itineraryData
const oldAppD18Title = `"title": "New Year's Day Seine Cruise & Le Marais",`;
const newAppD18Title = `"title": "New Year's Day in Paris: Jardin du Luxembourg & Historic Le Marais",`;
appJs = appJs.replace(oldAppD18Title, newAppD18Title);

const oldAppD18Act = `"• <b>Evening (17:30 – 20:30):</b> <b>Bateaux Parisiens Seine River Cruise</b> departing near the Eiffel Tower, gliding past illuminated monuments (Musée d'Orsay, Louvre, Pont Alexandre III) under the winter twilight."`;
const newAppD18Act = `"• <b>Evening (17:30 – 20:30):</b> Relaxed twilight stroll through the historic <b>Latin Quarter</b> and <b>Saint-Germain-des-Prés</b>, savoring warm Parisian crepes, artisan hot chocolate, and cozy café culture along the Seine riverbanks."`;
appJs = appJs.replace(oldAppD18Act, newAppD18Act);

const oldAppD18Adm = `"admissionHtml": "<strong>Sightseeing Admission:</strong> <span class=\\"admission-pill paid\\">🎟️ Seine River Cruise: €18.00 (~A$30 AUD)</span> <span class=\\"admission-pill free\\">✨ Luxembourg Gardens & Le Marais: Free ($0 AUD)</span>",`;
const newAppD18Adm = `"admissionHtml": "<strong>Sightseeing Admission:</strong> <span class=\\"admission-pill free\\">✨ Free ($0 AUD)</span> (Jardin du Luxembourg, Le Marais & Saint-Germain walking)",`;
appJs = appJs.replace(oldAppD18Adm, newAppD18Adm);

const oldAppD18Open = `"openingHtml": "<strong>🕒 Hours &amp; Open Status:</strong> <span class=\\"opening-pill open\\">🟢 Bateaux Parisiens Seine Cruise: Open New Year's Day (10:30–21:00)</span> <span class=\\"opening-pill open\\">🟢 Jardin du Luxembourg: Open 365 Days (08:00–17:00)</span> <span class=\\"opening-pill open\\">🟢 Le Marais &amp; Place des Vosges: Open 24/7</span> <span class=\\"schedule-note\\">Closed state museums (Louvre/Orsay/Versailles) intentionally avoided!</span>",`;
const newAppD18Open = `"openingHtml": "<strong>🕒 Hours &amp; Open Status:</strong> <span class=\\"opening-pill open\\">🟢 Jardin du Luxembourg: Open 365 Days (08:00–17:00)</span> <span class=\\"opening-pill open\\">🟢 Le Marais &amp; Place des Vosges: Open 24/7</span> <span class=\\"opening-pill open\\">🟢 Latin Quarter &amp; Saint-Germain: Open 24/7</span> <span class=\\"schedule-note\\">Closed state museums (Louvre/Orsay/Versailles) intentionally avoided!</span>",`;
appJs = appJs.replace(oldAppD18Open, newAppD18Open);

const oldAppD18Transit = `"transitInfo": "🚇 Paris Metro Line 4/10 + Bateaux Parisiens Cruise",`;
const newAppD18Transit = `"transitInfo": "🚇 Paris Metro Line 4/10 (Central Paris Walkable Districts)",`;
appJs = appJs.replace(oldAppD18Transit, newAppD18Transit);

// Update destinationData line 397
const oldAppDestName = `name: "Seine River Cruise & Galeries Lafayette Holiday Dome",`;
const newAppDestName = `name: "Jardin du Luxembourg & Galeries Lafayette Holiday Dome",`;
appJs = appJs.replace(oldAppDestName, newAppDestName);

const oldAppDestDesc = `desc: "Cruise past Notre-Dame and illuminated bridges, then admire the giant animated Christmas tree beneath the stained-glass dome at Haussmann.",`;
const newAppDestDesc = `desc: "Stroll the serene royal Luxembourg Gardens and historic Saint-Germain, then admire the giant animated Christmas tree beneath the stained-glass dome at Haussmann.",`;
appJs = appJs.replace(oldAppDestDesc, newAppDestDesc);

const oldAppDestImg = `image: "public/images/sights/seine-river-cruise.jpg",\n        coords: [48.8530, 2.3499]`;
const newAppDestImg = `image: "public/images/sights/jardin-du-luxembourg.jpg",\n        coords: [48.8462, 2.3372]`;
appJs = appJs.replace(oldAppDestImg, newAppDestImg);

fs.writeFileSync(appJsPath, appJs, 'utf8');
console.log('Successfully updated js/app.js without Seine cruise!');

// 3. Update js/gallery-data.js
let gData = fs.readFileSync(galleryDataPath, 'utf8');

const oldGDataD18Title = `title: "Jardin du Luxembourg & Twilight Seine River Cruise",`;
const newGDataD18Title = `title: "Jardin du Luxembourg & Historic Le Marais",`;
gData = gData.replace(oldGDataD18Title, newGDataD18Title);

const oldGDataD18Transit = `transit: "🚇 Paris Metro Line 4/10 + 🛥️ Bateaux Parisiens Cruise",`;
const newGDataD18Transit = `transit: "🚇 Paris Metro Line 4/10 (Central Paris Walkable Districts)",`;
gData = gData.replace(oldGDataD18Transit, newGDataD18Transit);

const oldGDataSight2 = `      {
        name: "Bateaux Parisiens Seine River Cruise",
        category: "🛥️ Gliding River Cruise",
        time: "Evening (17:30 – 19:30)",
        location: "Port de la Bourdonnais (Eiffel Tower Dock)",
        image: "public/images/sights/seine-river-cruise.jpg",
        admission: "€18.00 (~A$30 AUD) · 70-min River Cruise",
        isPaid: true,
        hours: "Open New Year's Day 10:30–21:00 (Continuous Sailings)",
        desc: "70-minute glass-canopied cruise down the historic Seine River, gliding beneath illuminated arches (Pont Alexandre III, Pont Neuf) and past floodlit monuments under winter twilight.",
        mapsQuery: "Bateaux Parisiens Port de la Bourdonnais",
        coords: [48.8596, 2.2965]
      }`;

const newGDataSight2 = `      {
        name: "Place des Vosges & Historic Le Marais",
        category: "👑 Renaissance Historic Square",
        time: "Afternoon (14:00 – 17:00)",
        location: "Place des Vosges, 4th Arr., Paris",
        image: "public/images/sights/place-des-vosges.jpg",
        admission: "Free ($0 AUD) · Public Historic Square",
        isPaid: false,
        hours: "Open 24/7 (Public Historic Arcades & Garden)",
        desc: "Paris's oldest planned royal square (completed in 1612), featuring harmonious vaulted red-brick arcades, peaceful central fountain gardens, and historic tea salons in the aristocratic Marais district.",
        mapsQuery: "Place des Vosges Paris",
        coords: [48.8556, 2.3656]
      }`;

if (gData.includes(oldGDataSight2)) {
  gData = gData.replace(oldGDataSight2, newGDataSight2);
  console.log('Successfully replaced Seine cruise with Place des Vosges in gallery-data.js!');
} else {
  console.error('Could not find oldGDataSight2 in gallery-data.js');
}

fs.writeFileSync(galleryDataPath, gData, 'utf8');
