const fs = require('fs');

console.log('--- Applying Finalized Accommodation Updates ---');

// 1. Update js/app.js
let appJs = fs.readFileSync('js/app.js', 'utf8');

// Update Day 4 stayTitle
appJs = appJs.replace(
  'stayTitle": "Amsterdam Base (Night 3 of 3)"',
  'stayTitle": "Amsterdam Hostel Leidseplein (Night 3 of 3 · Confirmed: 5969.499.141)"'
);
appJs = appJs.replace(
  'stayDesc": "Central Amsterdam · Sleep in a real bed!"',
  'stayDesc": "Korte Leidsedwarsstraat 79, Leidseplein, Amsterdam"'
);

// Update Cologne (Day 5 & 6)
appJs = appJs.replace(
  'stayTitle": "Cologne Base (Night 1 of 2)"',
  'stayTitle": "Hotel Innception, Cologne (Night 1 of 2 · Confirmed: 6778.253.486)"'
);
appJs = appJs.replace(
  'stayDesc": "Central Cologne, Germany · Steps to Cathedral"',
  'stayDesc": "86 Hohenzollernring, Neustadt Nord, 50672 Cologne, Germany"'
);
appJs = appJs.replace(
  'stayTitle": "Cologne Base (Night 2 of 2)"',
  'stayTitle": "Hotel Innception, Cologne (Night 2 of 2 · Confirmed: 6778.253.486)"'
);
appJs = appJs.replace(
  'stayDesc": "Central Cologne, Germany"',
  'stayDesc": "86 Hohenzollernring, Neustadt Nord, 50672 Cologne, Germany"'
);

// Update Frankfurt (Day 7 & 8)
appJs = appJs.replace(
  'stayTitle": "Hotel Cristall - Frankfurt City (Night 1 of 2)"',
  'stayTitle": "Premier Inn Frankfurt City Centre (Night 1 of 2 · Confirmed: 6320.027.566)"'
);
appJs = appJs.replace(
  'stayDesc": "Ottostrasse 3, 60329 Frankfurt am Main"',
  'stayDesc": "7 Elbestraße, Bahnhofsviertel, 60329 Frankfurt, Germany"'
);
appJs = appJs.replace(
  'stayTitle": "Hotel Cristall - Frankfurt City (Night 2 of 2)"',
  'stayTitle": "Premier Inn Frankfurt City Centre (Night 2 of 2 · Confirmed: 6320.027.566)"'
);
appJs = appJs.replace(
  'stayDesc": "Ottostrasse 3, 60329 Frankfurt am Main"',
  'stayDesc": "7 Elbestraße, Bahnhofsviertel, 60329 Frankfurt, Germany"'
);

// Update Kehl (Day 9 & 10)
appJs = appJs.replace(
  'stayTitle": "B&B Hotel Kehl (Base for Alsace · Night 1 of 2)"',
  'stayTitle": "B&B Hotel Kehl (Base for Alsace · 1 Night Confirmed: 5159.618.641)"'
);
appJs = appJs.replace(
  'stayTitle": "B&B Hotel Kehl (Base for Alsace · Night 2 of 2)"',
  'stayTitle": "Alsace / Christmas Eve Base (Lodging Voucher Pending)"'
);
appJs = appJs.replace(
  'stayDesc": "15 Allensteiner Str., 77694 Kehl · Christmas Eve in Alsace"',
  'stayDesc": "Strasbourg / Kehl Region · Christmas Eve in Alsace (Voucher to be provided)"'
);

// Update Switzerland (Day 11, 12, 13, 14)
appJs = appJs.replace(
  'stayTitle": "Swiss Alps Base (Interlaken · Night 1 of 3)"',
  'stayTitle": "Alpenblick CoLiving, Bern (Night 1 of 4 · Confirmed: 5525.615.675)"'
);
appJs = appJs.replace(
  'stayDesc": "Central Interlaken, Switzerland"',
  'stayDesc": "Kasernenstrasse 29, 3013 Bern, Switzerland (Free Bern Transit)"'
);
appJs = appJs.replace(
  'stayTitle": "Swiss Alps Base (Interlaken)"',
  'stayTitle": "Alpenblick CoLiving, Bern (Night 2 of 4 · Confirmed: 5525.615.675)"'
);
appJs = appJs.replace(
  'stayTitle": "Swiss Alps Base (Interlaken · Night 3 of 3)"',
  'stayTitle": "Alpenblick CoLiving, Bern (Night 3 of 4 · Confirmed: 5525.615.675)"'
);

// Day 14 update: Grindelwald First + Bern UNESCO Old Town (Night 4 in Bern)
const oldDay14Title = 'Grindelwald First Cliff Walk & Rhine Falls Excursion ➔ Lake Zurich & Overnight Sleeper to Paris';
const newDay14Title = 'Grindelwald First Cliff Walk & Bern UNESCO Old Town Stroll (Night 4 in Bern)';
if (appJs.includes(oldDay14Title)) {
  appJs = appJs.replace(oldDay14Title, newDay14Title);
}

// Day 14 stay:
appJs = appJs.replace(
  'stayTitle": "FlixBus Overnight Sleeper",\n    "stayDesc": "Zurich Bus Station ➔ Paris Bercy Seine",\n    "transitInfo": "🚆 SBB InterCity + S-Bahn S9 to Rheinfall + 🚌 Overnight Sleeper Coach"',
  'stayTitle": "Alpenblick CoLiving, Bern (Night 4 of 4 · Confirmed: 5525.615.675)",\n    "stayDesc": "Kasernenstrasse 29, 3013 Bern, Switzerland (Free Bern Transit)",\n    "transitInfo": "🚆 SBB InterCity (Bern ➔ Grindelwald, 1h 34m) + 🚠 First Gondola"'
);

// Day 15 update: Rhine Falls in Daylight + Zurich + Overnight Coach to Paris
const oldDay15Title = 'Paris Arrival, Paris France Temple (2:30 PM Session) & Montmartre';
const newDay15Title = 'Rhine Falls in Full Daylight ➔ Lake Zurich & Lindenhof ➔ Overnight Sleeper to Paris';
if (appJs.includes(oldDay15Title)) {
  appJs = appJs.replace(oldDay15Title, newDay15Title);
}

fs.writeFileSync('js/app.js', appJs, 'utf8');
console.log('Updated js/app.js successfully.');

// 2. Update index.html
let indexHtml = fs.readFileSync('index.html', 'utf8');

// Update Table Rows
indexHtml = indexHtml.replace(/Cologne Base \(Night 1 of 2\)/g, 'Hotel Innception, Cologne (Night 1 of 2 · Confirmed: 6778.253.486)');
indexHtml = indexHtml.replace(/Cologne Base \(Night 2 of 2\)/g, 'Hotel Innception, Cologne (Night 2 of 2 · Confirmed: 6778.253.486)');
indexHtml = indexHtml.replace(/Central Cologne, Germany · Steps to Cathedral/g, '86 Hohenzollernring, Neustadt Nord, 50672 Cologne, Germany');
indexHtml = indexHtml.replace(/Central Cologne, Germany/g, '86 Hohenzollernring, Neustadt Nord, 50672 Cologne, Germany');

indexHtml = indexHtml.replace(/Hotel Cristall - Frankfurt City \(Night 1 of 2\)/g, 'Premier Inn Frankfurt City Centre (Night 1 of 2 · Confirmed: 6320.027.566)');
indexHtml = indexHtml.replace(/Hotel Cristall - Frankfurt City \(Night 2 of 2\)/g, 'Premier Inn Frankfurt City Centre (Night 2 of 2 · Confirmed: 6320.027.566)');
indexHtml = indexHtml.replace(/Ottostrasse 3, 60329 Frankfurt am Main/g, '7 Elbestraße, Bahnhofsviertel, 60329 Frankfurt, Germany');

indexHtml = indexHtml.replace(/B&B Hotel Kehl \(Base for Alsace · Night 1 of 2\)/g, 'B&B Hotel Kehl (Base for Alsace · 1 Night Confirmed: 5159.618.641)');
indexHtml = indexHtml.replace(/B&B Hotel Kehl \(Base for Alsace · Night 2 of 2\)/g, 'Alsace / Christmas Eve Base (Lodging Voucher Pending)');

indexHtml = indexHtml.replace(/Swiss Alps Base \(Interlaken · Night 1 of 3\)/g, 'Alpenblick CoLiving, Bern (Night 1 of 4 · Confirmed: 5525.615.675)');
indexHtml = indexHtml.replace(/Swiss Alps Base \(Interlaken\)/g, 'Alpenblick CoLiving, Bern (Night 2 of 4 · Confirmed: 5525.615.675)');
indexHtml = indexHtml.replace(/Swiss Alps Base \(Interlaken · Night 3 of 3\)/g, 'Alpenblick CoLiving, Bern (Night 3 of 4 · Confirmed: 5525.615.675)');
indexHtml = indexHtml.replace(/Central Interlaken, Switzerland/g, 'Kasernenstrasse 29, 3013 Bern, Switzerland');

// Update Officer Card / Compliance Table text
indexHtml = indexHtml.replace(/Hotel Cristall/g, 'Premier Inn Frankfurt City Centre');
indexHtml = indexHtml.replace(/Interlaken/g, 'Bern (Alpenblick CoLiving)');

fs.writeFileSync('index.html', indexHtml, 'utf8');
console.log('Updated index.html successfully.');

// 3. Update js/gallery-data.js
let galleryData = fs.readFileSync('js/gallery-data.js', 'utf8');
galleryData = galleryData.replace(/Hotel Cristall, Frankfurt/g, 'Premier Inn Frankfurt City Centre');
galleryData = galleryData.replace(/Cologne Base/g, 'Hotel Innception, Cologne');
galleryData = galleryData.replace(/Swiss Alps Base, Interlaken/g, 'Alpenblick CoLiving, Bern');
galleryData = galleryData.replace(/Swiss Alps Base \(Interlaken\)/g, 'Alpenblick CoLiving, Bern');
fs.writeFileSync('js/gallery-data.js', galleryData, 'utf8');
console.log('Updated js/gallery-data.js successfully.');

console.log('All accommodation files updated.');
