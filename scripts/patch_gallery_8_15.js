const fs = require('fs');
const path = require('path');

const galleryDataPath = path.join(__dirname, '../js/gallery-data.js');
let gData = fs.readFileSync(galleryDataPath, 'utf8');

// 1. Day 8 replacement
const day8StartMarker = '    dayNum: 8,';
const day9StartMarker = '    dayNum: 9,';

const d8Start = gData.indexOf(day8StartMarker);
const d9Start = gData.indexOf(day9StartMarker);

if (d8Start !== -1 && d9Start !== -1) {
  const blockStart = gData.lastIndexOf('  {\n', d8Start);
  const blockEnd = gData.lastIndexOf('  {\n', d9Start);

  const newDay8Block = `  {
    dayNum: 8,
    day: "Day 8",
    date: "22 Dec 2026",
    city: "Frankfurt am Main",
    country: "Germany",
    countryFilter: "germany",
    badgeClass: "badge-de",
    title: "Goethe House & Frankfurt Germany Temple (6:00 PM Session)",
    stay: "Hotel Cristall - Frankfurt City (Night 2 of 2)",
    transit: "🚇 Frankfurt RMV / S-Bahn S5 Day Pass to Friedrichsdorf",
    coords: [50.2589, 8.6437],
    sights: [
      {
        name: "Goethe House & Museum",
        category: "📜 Literary & Cultural Heritage",
        time: "Morning & Midday (10:00 – 14:00)",
        location: "Großer Hirschgraben 23-25, Frankfurt",
        image: "public/images/sights/goethe-house-frankfurt.jpg",
        admission: "Optional: €10.00 (~A$17 AUD)",
        isPaid: false,
        hours: "Open Daily 10:00–18:00",
        desc: "The meticulously restored 18th-century bourgeois residence where Germany’s greatest writer and polymath, Johann Wolfgang von Goethe, was born in 1749.",
        mapsQuery: "Goethe House Frankfurt",
        coords: [50.1114, 8.6775]
      },
      {
        name: "The Frankfurt Germany LDS Temple",
        category: "🏛️ Sacred Temple Endowment Session",
        time: "Evening: Arrive 5:15 PM (6:00 PM Session)",
        location: "Talstraße 10, Friedrichsdorf",
        image: "public/images/temples/frankfurt-temple.jpg",
        admission: "Free ($0 AUD) · Confirmed Reservation (Jean Aquino)",
        isPaid: false,
        hours: "6:00 PM Session · Arrive by 5:15 PM",
        desc: "Official confirmed Proxy Endowment appointment for Jean Aristide Belleza Aquino. Distinctive copper roof and white spire with Angel Moroni amidst the peaceful Taunus foothills.",
        mapsQuery: "Frankfurt Germany Temple",
        coords: [50.2589, 8.6437]
      }
    ]
  },\n`;

  gData = gData.slice(0, blockStart) + newDay8Block + gData.slice(blockEnd);
  console.log('Successfully replaced Day 8 in js/gallery-data.js');
}

// 2. Day 15 replacement
const day15StartMarker = '    dayNum: 15,';
const day16StartMarker = '    dayNum: 16,';

const d15Start = gData.indexOf(day15StartMarker);
const d16Start = gData.indexOf(day16StartMarker);

if (d15Start !== -1 && d16Start !== -1) {
  const blockStart = gData.lastIndexOf('  {\n', d15Start);
  const blockEnd = gData.lastIndexOf('  {\n', d16Start);

  const newDay15Block = `  {
    dayNum: 15,
    day: "Day 15",
    date: "29 Dec 2026",
    city: "Paris",
    country: "France",
    countryFilter: "france",
    badgeClass: "badge-fr",
    title: "Paris France Temple (2:30 PM Session) & Montmartre Sacré-Cœur",
    stay: "Break & Home Paris Italie Porte de Choisy (Night 1 of 5)",
    transit: "🚇 Paris Metro Line 14 / RER Line C",
    coords: [48.8867, 2.3431],
    sights: [
      {
        name: "Paris France LDS Temple",
        category: "🏛️ Sacred Temple Endowment Session",
        time: "Afternoon: Arrive 2:00 PM (2:30 PM Session)",
        location: "46 Boulevard Saint-Antoine, Le Chesnay",
        image: "public/images/temples/paris-temple.jpg",
        admission: "Free ($0 AUD) · Confirmed Reservation (Jean Aquino)",
        isPaid: false,
        hours: "2:30 PM Session · Arrive by 2:00 PM",
        desc: "Official confirmed Proxy Endowment appointment for Jean Aristide Belleza Aquino. Elegant warm limestone architecture and landscaped reflection courtyard beside Versailles.",
        mapsQuery: "Paris France Temple",
        coords: [48.8179, 2.1232]
      },
      {
        name: "Sacré-Cœur Basilica & Montmartre Hill",
        category: "⛪ Romano-Byzantine Landmark",
        time: "Evening (17:30 – 20:30)",
        location: "35 Rue du Chevalier de la Barre, Paris",
        image: "public/images/sights/montmartre-sacre-coeur.jpg",
        admission: "Free ($0 AUD) Basilica Nave",
        isPaid: false,
        hours: "Open Daily 06:30–22:30 (Open 365 Days · Free Nave)",
        desc: "Perched atop the highest natural point in Paris: the dazzling white Romano-Byzantine basilica offering 360-degree winter views across the City of Light, surrounded by the artists of Place du Tertre.",
        mapsQuery: "Sacre-Coeur Paris",
        coords: [48.8867, 2.3431]
      }
    ]
  },\n`;

  gData = gData.slice(0, blockStart) + newDay15Block + gData.slice(blockEnd);
  console.log('Successfully replaced Day 15 in js/gallery-data.js');
}

fs.writeFileSync(galleryDataPath, gData, 'utf8');
console.log('Finished updating gallery-data.js!');
