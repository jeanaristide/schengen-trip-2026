const fs = require('fs');
const path = require('path');

const repoDir = '/Users/jeana/Projects/schengen-trip-2026';

// 1. UPDATE js/app.js
let appJs = fs.readFileSync(path.join(repoDir, 'js/app.js'), 'utf8');

// Update ldsTemplesData itineraryMatch for Bern and Paris
appJs = appJs.replace(
  /itineraryMatch:\s*"Days 10–14:\s*Swiss Alps Base \(24–28 Dec 2026\)"/,
  'itineraryMatch: "Day 15: Confirmed Morning Endowment Session (Tue 29 Dec 2026 @ 9:30 AM)"'
);
appJs = appJs.replace(
  /itineraryMatch:\s*"Day 15:\s*Confirmed Session \(Tue 29 Dec 2026 @ 2:30 PM, Arrive 2:00 PM\) & Day 19 Versailles"/,
  'itineraryMatch: "Day 19: Sacred Visit & Reflection beside Versailles (Sat 02 Jan 2027)"'
);

// Find Day 11 in app.js
const day11AppRegex = /\{\s*"day":\s*"Day 11",[\s\S]*?"coords":\s*\[\s*47\.0502,\s*8\.3093\s*\]\s*\}/;
const newDay11App = `{
    "day": "Day 11",
    "date": "25 Dec 2026",
    "city": "Strasbourg ➔ Bern",
    "country": "Switzerland",
    "badgeClass": "badge-ch",
    "cardHighlight": "highlight-swiss",
    "title": "Christmas Day Transit to Bern (Alpenblick CoLiving) & UNESCO Covered Arcades",
    "activities": [
      "• <b>Morning (08:30 – 12:00):</b><ul class=\\"activity-sublist\\"><li>Direct transit from Strasbourg to Bern Hbf</li><li>Tram Line 9 to Alpenblick CoLiving (Kasernenstrasse 29 · check-in / luggage drop)</li></ul>",
      "• <b>Afternoon (13:00 – 17:00):</b><ul class=\\"activity-sublist\\"><li>Bern UNESCO Old Town stroll under 6 km of weather-sheltered sandstone arcades (Lauben)</li><li>Zytglogge astronomical clock tower & Bern Münster cathedral</li><li>Bundeshaus (Federal Palace) terrace</li></ul>",
      "• <b>Evening (17:30 – 21:00):</b><ul class=\\"activity-sublist\\"><li>Nydeggbrücke bridge & Bear Park Aare river panorama</li><li>Christmas Fondue Dinner in historic vaulted Bern cellar</li></ul>"
    ],
    "admissionHtml": "<strong>Sightseeing Admission:</strong> <span class=\\"admission-pill free\\">✨ Free ($0 AUD)</span> (Bern Old Town, Zytglogge, Lauben arcades & Bear Park overlook)",
    "openingHtml": "<strong>🕒 Hours &amp; Open Status:</strong> <span class=\\"opening-pill open\\">🟢 Bern Arcades &amp; Old Town: Open 24/7 (Weatherproof)</span> <span class=\\"opening-pill open\\">🟢 Swiss Trains &amp; Trams: Regular holiday schedule</span>",
    "stayTitle": "Alpenblick CoLiving, Bern (Night 1 of 4 · Confirmed: 5525.615.675)",
    "stayDesc": "Kasernenstrasse 29, 3013 Bern, Switzerland (Free Bern Transit)",
    "transitInfo": "🚆 SBB Train / Coach (Strasbourg ➔ Bern) + 🚋 Bern Tram Line 9",
    "coords": [
      46.948,
      7.4474
    ]
  }`;
appJs = appJs.replace(day11AppRegex, newDay11App);

// Find Day 14 in app.js
const day14AppRegex = /\{\s*"day":\s*"Day 14",[\s\S]*?"coords":\s*\[\s*47\.6779,\s*8\.6156\s*\]\s*\}/;
const newDay14App = `{
    "day": "Day 14",
    "date": "28 Dec 2026",
    "city": "Grindelwald & Lake Thun",
    "country": "Switzerland",
    "badgeClass": "badge-ch",
    "cardHighlight": "highlight-swiss",
    "title": "Grindelwald First Cliff Walk & Lake Thun Spiez Waterfront Stroll (Night 4 in Bern)",
    "activities": [
      "• <b>Morning (08:30 – 12:30):</b><ul class=\\"activity-sublist\\"><li>SBB InterCity: Bern ➔ Interlaken Ost ➔ Grindelwald (1h 34m)</li><li>Grindelwald First Gondola to 2,168m</li><li>First Cliff Walk by Tissot (Suspension bridge & cliff walkway)</li></ul>",
      "• <b>Afternoon (13:30 – 17:00):</b><ul class=\\"activity-sublist\\"><li>Scenic train to Spiez on Lake Thun</li><li>Spiez Castle medieval waterfront & Lake Thun winter promenade</li><li>Optional PostBus 103 to Iseltwald Landing Stage (Lake Brienz CLOY Pier)</li></ul>",
      "• <b>Evening (17:30 – 21:00):</b><ul class=\\"activity-sublist\\"><li>Return train to Bern base (Alpenblick CoLiving)</li><li>Rosengarten viewpoint overlooking the illuminated Aare river loop</li><li>Cosy Swiss bistro dinner in Bern</li></ul>"
    ],
    "admissionHtml": "<strong>Sightseeing Admission:</strong> <span class=\\"admission-pill free\\">✨ Free ($0 AUD)</span> (First Cliff Walk by Tissot walkway, Spiez waterfront & Rosengarten are Free!)",
    "openingHtml": "<strong>🕒 Hours &amp; Open Status:</strong> <span class=\\"opening-pill open\\">🟢 First Gondola: 08:30–16:30</span> <span class=\\"opening-pill open\\">🟢 Lake Thun &amp; Spiez: Open 24/7</span> <span class=\\"opening-pill open\\">🟢 Rosengarten: Open 24/7</span>",
    "stayTitle": "Alpenblick CoLiving, Bern (Night 4 of 4 · Confirmed: 5525.615.675)",
    "stayDesc": "Kasernenstrasse 29, 3013 Bern, Switzerland (Free Bern Transit)",
    "transitInfo": "🚆 SBB InterCity (Bern ➔ Grindelwald / Spiez) + 🚠 First Gondola",
    "coords": [
      46.6908,
      7.6853
    ]
  }`;
appJs = appJs.replace(day14AppRegex, newDay14App);

// Find Day 15 in app.js
const day15AppRegex = /\{\s*"day":\s*"Day 15",[\s\S]*?"coords":\s*\[\s*48\.8867,\s*2\.3431\s*\]\s*\}/;
const newDay15App = `{
    "day": "Day 15",
    "date": "29 Dec 2026",
    "city": "Bern ➔ Paris",
    "country": "Transit",
    "badgeClass": "badge-transit",
    "cardHighlight": "highlight-transit",
    "title": "Bern Switzerland Temple (Morning Endowment Session) ➔ High-Speed TGV Lyria to Paris",
    "activities": [
      "• <b>Morning (08:30 – 12:30):</b><ul class=\\"activity-sublist\\"><li>Alpenblick CoLiving check-out (leave luggage at Bern Hbf)</li><li>S-Bahn S3/S4: Bern Hbf ➔ Zollikofen (8 min)</li><li><b>Bern Switzerland Temple</b> (Tempelstrasse 2): Attend sacred morning <b>Proxy Endowment Session</b> & peaceful stroll through pine-fringed grounds</li></ul>",
      "• <b>Afternoon (13:00 – 19:45):</b><ul class=\\"activity-sublist\\"><li>S-Bahn back to Bern Hbf, pick up bags, lunch in Old Town</li><li><b>High-Speed TGV Lyria</b>: Bern Hbf ➔ Basel SBB (56m) ➔ Paris Gare de Lyon (3h 04m) (~4h 15m total cruising @ 320 km/h)</li></ul>",
      "• <b>Evening (20:00 – 22:00):</b><ul class=\\"activity-sublist\\"><li>Arrive Paris Gare de Lyon (center of Paris)</li><li>Automated Metro Line 14 direct to <b>Break & Home Paris Italie Porte de Choisy</b></li><li>Check in, unpack, and sleep in real hotel bed (Night 1 of 5 in Paris!)</li></ul>"
    ],
    "admissionHtml": "<strong>Sightseeing Admission:</strong> <span class=\\"admission-pill free\\">✨ Free ($0 AUD)</span> (Bern Switzerland Temple Endowment Session & Grounds)",
    "openingHtml": "<strong>🕒 Hours &amp; Open Status:</strong> <span class=\\"opening-pill open\\">🟢 Bern Switzerland Temple: Morning Session (Arrive by 9:00 AM)</span> <span class=\\"opening-pill open\\">🟢 TGV Lyria: Cruising @ 320 km/h</span> <span class=\\"opening-pill open\\">🟢 Paris Metro Line 14: Direct to Hotel</span>",
    "stayTitle": "Break & Home Paris Italie (CONFIRMED)",
    "stayDesc": "Porte de Choisy, Paris (Booked: Jean Aquino)",
    "transitInfo": "🚆 S-Bahn S3/S4 + 🚄 TGV Lyria High-Speed Train + 🚇 Paris Metro Line 14",
    "coords": [
      47.0022,
      7.4582
    ]
  }`;
appJs = appJs.replace(day15AppRegex, newDay15App);

fs.writeFileSync(path.join(repoDir, 'js/app.js'), appJs, 'utf8');
console.log('Successfully updated js/app.js');

// 2. UPDATE js/gallery-data.js
let galleryJs = fs.readFileSync(path.join(repoDir, 'js/gallery-data.js'), 'utf8');

// Find Day 14 in gallery-data.js
const day14GalleryRegex = /\{\s*"dayNum":\s*14,[\s\S]*?"day":\s*"Day 14",[\s\S]*?"sights":\s*\[[\s\S]*?\]\s*\}/;
const newDay14Gallery = `{
    "dayNum": 14,
    "day": "Day 14",
    "date": "28 Dec 2026",
    "city": "Grindelwald & Lake Thun",
    "country": "Switzerland",
    "countryFilter": "switzerland",
    "badgeClass": "badge-ch",
    "title": "Grindelwald First Cliff Walk & Lake Thun Spiez Waterfront Stroll",
    "stay": "Alpenblick CoLiving, Bern (Night 4 of 4 · Confirmed: 5525.615.675)",
    "transit": "🚆 SBB InterCity (Bern ➔ Grindelwald / Spiez) + 🚠 First Gondola",
    "coords": [
      46.6908,
      7.6853
    ],
    "sights": [
      {
        "name": "First Cliff Walk by Tissot (Grindelwald First)",
        "category": "🏔️ Alpine Suspension Bridge & Cliff Walkway",
        "time": "Morning (09:30 – 12:30)",
        "location": "Mount First, Grindelwald (2,168m)",
        "image": "public/images/sights/grindelwald-first-cliff-walk.jpg",
        "admission": "Free with First Gondola Ticket (Walkway is Free)",
        "isPaid": false,
        "hours": "Open Daily 08:30–16:30 (Weather Permitting)",
        "desc": "Thrilling 45-meter metal walkway bolted directly to the sheer rock face of Mount First, featuring a 40-meter single-rope suspension bridge.",
        "mapsQuery": "First Cliff Walk by Tissot Grindelwald",
        "coords": [
          46.6577,
          8.0531
        ],
        "aliases": [
          "grindelwald first",
          "cliff walk",
          "tissot",
          "grindelwald"
        ]
      },
      {
        "name": "Spiez Castle & Lake Thun Waterfront",
        "category": "🏰 Medieval Lakeside Castle & Bay",
        "time": "Afternoon (13:30 – 16:30)",
        "location": "Schlossstrasse 16, 3700 Spiez",
        "image": "public/images/sights/lake-thun-spiez.jpg",
        "admission": "Free ($0 AUD) Lakeside Grounds Stroll",
        "isPaid": false,
        "hours": "Open 24/7 (Lakeside Promenade)",
        "desc": "Fairytale 1,000-year-old medieval castle set against the turquoise expanse of Lake Thun and snow-capped Alpine peaks.",
        "mapsQuery": "Spiez Castle Switzerland",
        "coords": [
          46.6908,
          7.6853
        ],
        "aliases": [
          "spiez",
          "spiez castle",
          "lake thun",
          "thunersee"
        ]
      },
      {
        "name": "Iseltwald Landing Stage (Lake Brienz)",
        "category": "🌊 Crash Landing on You Classic Pier",
        "time": "Afternoon (14:00 – 15:30)",
        "location": "Am Strand 2, 3807 Iseltwald",
        "image": "public/images/sights/iseltwald-landing-stage.jpg",
        "admission": "5 CHF (~A$9 AUD) Pier Access Turnstile",
        "isPaid": true,
        "hours": "Open 24/7",
        "desc": "Iconic wooden boat jetty on Lake Brienz immortalized in Crash Landing on You, framed by emerald waters and snow-capped peaks.",
        "mapsQuery": "Iseltwald Landing Stage",
        "coords": [
          46.7118,
          7.9622
        ],
        "aliases": [
          "iseltwald",
          "cloy pier",
          "lake brienz",
          "brienzersee"
        ]
      },
      {
        "name": "Bern UNESCO Old Town & Rosengarten Viewpoint",
        "category": "🏛️ UNESCO World Heritage Old Town & Panorama",
        "time": "Evening (17:30 – 21:00)",
        "location": "Alter Aargauerstalden 31b, 3006 Bern",
        "image": "public/images/sights/zytglogge-bern.jpg",
        "admission": "Free ($0 AUD)",
        "isPaid": false,
        "hours": "Open 24/7",
        "desc": "Magnificent elevated rose garden park offering the most iconic panoramic postcard view over the medieval Aare river loop and Zytglogge.",
        "mapsQuery": "Rosengarten Bern",
        "coords": [
          46.9515,
          7.4601
        ],
        "aliases": [
          "rosengarten",
          "bern old town",
          "zytglogge",
          "aare"
        ]
      }
    ]
  }`;
galleryJs = galleryJs.replace(day14GalleryRegex, newDay14Gallery);

// Find Day 15 in gallery-data.js
const day15GalleryRegex = /\{\s*"dayNum":\s*15,[\s\S]*?"day":\s*"Day 15",[\s\S]*?"sights":\s*\[[\s\S]*?\]\s*\}/;
const newDay15Gallery = `{
    "dayNum": 15,
    "day": "Day 15",
    "date": "29 Dec 2026",
    "city": "Bern ➔ Paris",
    "country": "Transit",
    "countryFilter": "transit",
    "badgeClass": "badge-transit",
    "title": "Bern Switzerland Temple (Morning Endowment Session) ➔ High-Speed TGV Lyria to Paris",
    "stay": "Break & Home Paris Italie Porte de Choisy (Night 1 of 5)",
    "transit": "🚆 S-Bahn S3/S4 + 🚄 High-Speed TGV Lyria + 🚇 Paris Metro Line 14",
    "coords": [
      47.0022,
      7.4582
    ],
    "sights": [
      {
        "name": "Bern Switzerland LDS Temple",
        "category": "🏛️ Sacred Temple Endowment Session",
        "time": "Morning: Arrive 9:00 AM (Morning Session)",
        "location": "Tempelstrasse 2, 3052 Zollikofen (Bern)",
        "image": "public/images/temples/bern-temple.jpg",
        "admission": "Free ($0 AUD) · Sacred Temple Session",
        "isPaid": false,
        "hours": "Morning Session · Arrive by 9:00 AM",
        "desc": "The historic first temple built in Europe (dedicated in 1955). Framed by towering alpine pine trees with serene reflection grounds and views toward the snowy Bernese Alps.",
        "mapsQuery": "Bern Switzerland Temple",
        "coords": [
          47.0022,
          7.4582
        ],
        "aliases": [
          "bern switzerland temple",
          "bern temple",
          "zollikofen",
          "endowment",
          "temple"
        ]
      },
      {
        "name": "High-Speed TGV Lyria (Bern ➔ Paris Gare de Lyon)",
        "category": "🚄 International 320 km/h High-Speed Rail",
        "time": "Afternoon (15:34 – 19:42)",
        "location": "Bern Hbf ➔ Basel SBB ➔ Paris Gare de Lyon",
        "image": "public/images/destinations/paris.jpg",
        "admission": "High-Speed Rail Ticket (€49–€89)",
        "isPaid": true,
        "hours": "TGV Lyria Service 320 km/h",
        "desc": "Ultra-smooth French-Swiss high-speed bullet train whisking travelers from central Bern across the French countryside into Paris Gare de Lyon in just 4h 15m.",
        "mapsQuery": "Gare de Lyon Paris",
        "coords": [
          48.8448,
          2.3735
        ],
        "aliases": [
          "tgv lyria",
          "gare de lyon",
          "high speed train",
          "rail"
        ]
      },
      {
        "name": "Break & Home Paris Italie Porte de Choisy",
        "category": "🏨 Confirmed Paris Accommodation (Night 1 of 5)",
        "time": "Evening (20:00 – 22:00)",
        "location": "Porte de Choisy, 13th Arr., Paris",
        "image": "public/images/destinations/paris.jpg",
        "admission": "Confirmed Reservation (Jean Aquino)",
        "isPaid": false,
        "hours": "24/7 Front Desk",
        "desc": "Modern Paris hotel base right by automated Metro Line 14 and Tramway T3a. Settle in, unpack, and sleep in a real bed for the next 5 nights in Paris!",
        "mapsQuery": "Break & Home Paris Italie Porte de Choisy",
        "coords": [
          48.8180,
          2.3660
        ],
        "aliases": [
          "break & home",
          "paris hotel",
          "porte de choisy"
        ]
      }
    ]
  }`;
galleryJs = galleryJs.replace(day15GalleryRegex, newDay15Gallery);

fs.writeFileSync(path.join(repoDir, 'js/gallery-data.js'), galleryJs, 'utf8');
console.log('Successfully updated js/gallery-data.js');
