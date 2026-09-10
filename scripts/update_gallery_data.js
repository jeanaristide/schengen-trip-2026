const fs = require('fs');
const path = require('path');

const galleryDataPath = path.join(__dirname, '../js/gallery-data.js');
let gData = fs.readFileSync(galleryDataPath, 'utf8');

// Replace Day 9, 10, 11
const oldDays9to11 = `  {
    dayNum: 9,
    day: "Day 9",
    date: "23 Dec 2026",
    city: "Colmar",
    country: "France",
    countryFilter: "france",
    badgeClass: "badge-fr",
    title: "Fairytale Colmar · Beauty & the Beast & Howl's Moving Castle Trail",
    stay: "B&B Hotel Kehl (Confirmed Base for Alsace)",
    transit: "🚆 SNCF TER Fluo Regional Train Return (€16.00)",
    coords: [48.0794, 7.3585],
    sights: [
      {
        name: "Colmar Petite Venise (Beauty & the Beast)",
        category: "🎬 Disney Inspiration Landmark",
        time: "Daytime (10:30 – 14:00)",
        location: "Quai de la Poissonnerie, Colmar",
        image: "public/images/sights/colmar-petite-venise.jpg",
        admission: "Free ($0 AUD) · Historic Canal Walk",
        isPaid: false,
        hours: "Open 24/7 (Public Historic Canal Quarter)",
        desc: "Pastel half-timbered merchant houses lining the Lauch River canals that directly inspired Belle's village in Disney's 'Beauty and the Beast'. One of Europe's most photographed fairytale canal bends.",
        mapsQuery: "Petite Venise Colmar",
        coords: [48.0740, 7.3590]
      },
      {
        name: "Maison Pfister (Howl's Moving Castle)",
        category: "🎬 Studio Ghibli Inspiration",
        time: "Afternoon (14:00 – 16:30)",
        location: "Rue des Marchands 11, Colmar",
        image: "public/images/sights/maison-pfister-colmar.jpg",
        admission: "Free ($0 AUD) · Landmark Exterior",
        isPaid: false,
        hours: "Open 24/7 (Exterior Renaissance Landmark)",
        desc: "The famous 1537 wooden turreted Renaissance house on Rue des Marchands that directly inspired Hayao Miyazaki's Studio Ghibli classic 'Howl's Moving Castle', with painted frescoes and timber bay windows.",
        mapsQuery: "Maison Pfister Colmar",
        coords: [48.0768, 7.3582]
      }
    ]
  },
  {
    dayNum: 10,
    day: "Day 10",
    date: "24 Dec 2026",
    city: "Bern & Interlaken",
    country: "Switzerland",
    countryFilter: "switzerland",
    badgeClass: "badge-ch",
    title: "Medieval Bern, Bern LDS Temple & Swiss Alpine Christmas Eve",
    stay: "Swiss Alps Base (Interlaken)",
    transit: "🚆 SBB EuroCity / InterCity Train (Half Fare Card)",
    coords: [46.6863, 7.8632],
    sights: [
      {
        name: "Bern Old Town & Zytglogge Clock Tower",
        category: "🏛️ UNESCO Swiss Capital",
        time: "Morning (09:30 – 11:30)",
        location: "Kramgasse 49, Bern",
        image: "public/images/sights/zytglogge-bern.jpg",
        admission: "Free ($0 AUD) · UNESCO Medieval City",
        isPaid: false,
        hours: "Open 24/7 (UNESCO Historic Streets)",
        desc: "The medieval capital of Switzerland: cobblestone arcades, sandstone fountains, and the 13th-century Zytglogge astronomical clock tower with its mechanized dancing figures.",
        mapsQuery: "Zytglogge Bern",
        coords: [46.9479, 7.4478]
      },
      {
        name: "Bern Switzerland LDS Temple",
        category: "🏛️ Historic Europe First Temple",
        time: "Midday (11:30 – 13:00)",
        location: "Tempelstrasse 2, Zollikofen",
        image: "public/images/temples/bern-temple.jpg",
        admission: "Free ($0 AUD) · Sacred Temple Grounds",
        isPaid: false,
        hours: "Grounds open for reverent photos (Holiday session recess)",
        desc: "The historic first temple of the Church of Jesus Christ of Latter-day Saints built in Europe (dedicated in 1955), nestled in peaceful pine forests just 9 minutes north of Bern HB.",
        mapsQuery: "Bern Switzerland Temple",
        coords: [46.9886, 7.4619]
      },
      {
        name: "Interlaken & Jungfrau Massif Panorama",
        category: "🏔️ Alpine Gateway",
        time: "Afternoon (14:30 – 17:30)",
        location: "Höhematte Park, Interlaken",
        image: "public/images/destinations/iseltwald.jpg",
        admission: "Free ($0 AUD) · Höhematte Alpine Park",
        isPaid: false,
        hours: "Open 24/7 (Höhematte Park & Alpine Views)",
        desc: "Open parkland in the center of Interlaken offering unobstructed views toward the snow-cloaked peaks of the Jungfrau, Mönch, and Eiger massifs on Christmas Eve.",
        mapsQuery: "Hohematte Interlaken",
        coords: [46.6863, 7.8632]
      }
    ]
  },
  {
    dayNum: 11,
    day: "Day 11",
    date: "25 Dec 2026",
    city: "Grindelwald First",
    country: "Switzerland",
    countryFilter: "switzerland",
    badgeClass: "badge-ch",
    title: "Grindelwald First Cliff Walk & Snowy Eiger Slopes",
    stay: "Swiss Alps Base (Interlaken)",
    transit: "🚠 BOB Train + First Gondola Cableway (Half Fare)",
    coords: [46.6242, 8.0414],
    sights: [
      {
        name: "Grindelwald First Cliff Walk by Tissot",
        category: "🏔️ High-Altitude Suspended Walkway",
        time: "Morning (10:00 – 13:00)",
        location: "First, Grindelwald (2,168m)",
        image: "public/images/sights/grindelwald-first-cliff-walk.jpg",
        admission: "Free ($0 AUD) Summit Walkway · Gondola pass covered",
        isPaid: false,
        hours: "Open Christmas Day 09:00–16:00 (Gondola 08:30–16:30)",
        desc: "Breathtaking steel walkway clinging to the sheer rock face of Mount First at 2,168 meters, culminating in a 45-meter single-rope suspension cantilever over the abyss facing the Eiger.",
        mapsQuery: "First Cliff Walk Grindelwald",
        coords: [46.6590, 8.0645]
      },
      {
        name: "Schreckfeld & Kleine Scheidegg Slopes",
        category: "🎬 CLOY Alpine Reunion Slopes",
        time: "Afternoon (13:30 – 16:30)",
        location: "Kleine Scheidegg / Grindelwald",
        image: "public/images/sights/schreckfeld-kleine-scheidegg.jpg",
        admission: "Free ($0 AUD) · Alpine Winter Trails",
        isPaid: false,
        hours: "Open Daily (Winter Ski Season in Operation)",
        desc: "Snow-covered ski trails and traditional chalets beneath the towering Eiger North Face where Captain Ri and Se-ri famously cross paths in 'Crash Landing on You'.",
        mapsQuery: "Kleine Scheidegg Switzerland",
        coords: [46.5851, 7.9612]
      }
    ]
  }`;

const newDays9to11 = `  {
    dayNum: 9,
    day: "Day 9",
    date: "23 Dec 2026",
    city: "Frankfurt ➔ Strasbourg",
    country: "France",
    countryFilter: "france",
    badgeClass: "badge-fr",
    title: "FlixBus N13 ➔ Strasbourg Capital of Christmas · Christkindelsmärik & Petite France",
    stay: "B&B Hotel Kehl (Base for Alsace · Night 1 of 2)",
    transit: "🚌 FlixBus N13 (04:35–08:35) + 🚋 Strasbourg Tram Line D",
    coords: [48.5734, 7.7521],
    sights: [
      {
        name: "Place Kléber 30m Great Christmas Tree",
        category: "🎄 Capital of Christmas Icon",
        time: "Midday (11:00 – 14:00)",
        location: "Place Kléber, Strasbourg",
        image: "public/images/sights/place-kleber.jpg",
        admission: "Free ($0 AUD) · Public City Square",
        isPaid: false,
        hours: "Open 24/7 · Markets 11:00–20:00",
        desc: "Strasbourg's towering 30-meter natural fir tree brought from the Vosges mountains, illuminated with thousands of fairy lights at the center of Europe's oldest Christmas Market (Christkindelsmärik, founded 1570).",
        mapsQuery: "Place Kleber Strasbourg",
        coords: [48.5833, 7.7458]
      },
      {
        name: "Petite France Half-Timbered Quarter",
        category: "🏛️ UNESCO Medieval Waterways",
        time: "Afternoon (14:30 – 17:00)",
        location: "Petite France, Strasbourg",
        image: "public/images/sights/strasbourg-petite-france.jpg",
        admission: "Free ($0 AUD) · Historic Quarter",
        isPaid: false,
        hours: "Open 24/7 (Public Walking Quarter)",
        desc: "Fairytale district where the River Ill splits into tranquil canals flanked by 16th-century half-timbered tanners' houses, flower-lined footbridges, and peaceful lock gates.",
        mapsQuery: "Petite France Strasbourg",
        coords: [48.5807, 7.7406]
      },
      {
        name: "Strasbourg Cathedral (Cathédrale Notre-Dame)",
        category: "⛪ Gothic Sandstone Spire",
        time: "Late Afternoon (17:00 – 18:30)",
        location: "Place de la Cathédrale, Strasbourg",
        image: "public/images/sights/strasbourg-cathedral.jpg",
        admission: "Free ($0 AUD) · Historic Cathedral Nave",
        isPaid: false,
        hours: "Open Daily 08:30–11:15 & 12:45–19:00",
        desc: "Magnificent pink Vosges sandstone Gothic masterpiece that was the world's tallest building for 227 years, famed for its 142-meter spire and 16th-century astronomical clock.",
        mapsQuery: "Cathedrale Notre Dame Strasbourg",
        coords: [48.5818, 7.7509]
      }
    ]
  },
  {
    dayNum: 10,
    day: "Day 10",
    date: "24 Dec 2026",
    city: "Colmar & Alsace",
    country: "France",
    countryFilter: "france",
    badgeClass: "badge-fr",
    title: "Fairytale Colmar · Petite Venise, Maison Pfister & Christmas Eve in Alsace",
    stay: "B&B Hotel Kehl (Base for Alsace · Night 2 of 2)",
    transit: "🚆 SNCF TER Fluo Regional Train (€16.00) + 🚋 Tram Line D",
    coords: [48.0794, 7.3585],
    sights: [
      {
        name: "Colmar Petite Venise (Beauty & the Beast)",
        category: "🎬 Disney Inspiration Landmark",
        time: "Morning (10:00 – 13:00)",
        location: "Quai de la Poissonnerie, Colmar",
        image: "public/images/sights/colmar-petite-venise.jpg",
        admission: "Free ($0 AUD) · Historic Canal Walk",
        isPaid: false,
        hours: "Open 24/7 (Public Historic Canal Quarter)",
        desc: "Pastel half-timbered merchant houses lining the Lauch River canals that directly inspired Belle's village in Disney's 'Beauty and the Beast'. One of Europe's most photographed fairytale canal bends.",
        mapsQuery: "Petite Venise Colmar",
        coords: [48.0740, 7.3590]
      },
      {
        name: "Maison Pfister (Howl's Moving Castle)",
        category: "🎬 Studio Ghibli Inspiration",
        time: "Afternoon (13:30 – 16:30)",
        location: "Rue des Marchands 11, Colmar",
        image: "public/images/sights/maison-pfister-colmar.jpg",
        admission: "Free ($0 AUD) · Landmark Exterior",
        isPaid: false,
        hours: "Open 24/7 (Exterior Renaissance Landmark)",
        desc: "The famous 1537 wooden turreted Renaissance house on Rue des Marchands that directly inspired Hayao Miyazaki's Studio Ghibli classic 'Howl's Moving Castle', with painted frescoes and timber bay windows.",
        mapsQuery: "Maison Pfister Colmar",
        coords: [48.0768, 7.3582]
      }
    ]
  },
  {
    dayNum: 11,
    day: "Day 11",
    date: "25 Dec 2026",
    city: "Luzern & Interlaken",
    country: "Switzerland",
    countryFilter: "switzerland",
    badgeClass: "badge-ch",
    title: "Christmas Dawn Coach ➔ Lucerne (Kapellbrücke) ➔ Scenic Alpine Train to Interlaken",
    stay: "Swiss Alps Base (Interlaken · Night 1 of 3)",
    transit: "🚌 FlixBus N846 (04:05–07:10) + 🚆 SBB Zentralbahn Express",
    coords: [47.0502, 8.3093],
    sights: [
      {
        name: "Chapel Bridge (Kapellbrücke) & Water Tower",
        category: "🌉 14th-Century Wooden Covered Bridge",
        time: "Morning (07:30 – 10:00)",
        location: "Reuss River, Lucerne",
        image: "public/images/sights/kapellbruecke-lucerne.jpg",
        admission: "Free ($0 AUD) · 14th-Century Wooden Bridge",
        isPaid: false,
        hours: "Open 24/7 (Covered Wooden Bridge)",
        desc: "Europe's oldest surviving covered wooden truss footbridge (14th century) containing 17th-century triangular ceiling paintings of Swiss history, anchored by the octagonal stone Water Tower on Christmas morning.",
        mapsQuery: "Chapel Bridge Lucerne",
        coords: [47.0516, 8.3073]
      },
      {
        name: "Lion Monument (Löwendenkmal)",
        category: "🦁 Mark Twain's Poignant Monument",
        time: "Morning (10:15 – 11:30)",
        location: "Denkmalstrasse 4, Lucerne",
        image: "public/images/sights/lion-monument-lucerne.jpg",
        admission: "Free ($0 AUD) · Monument Quarry Park",
        isPaid: false,
        hours: "Open 24/7 (Public Rock Relief Monument)",
        desc: "A giant dying lion carved directly into a cliffside sandstone quarry honoring Swiss Guards fallen in 1792—praised by Mark Twain as 'the most mournful and moving piece of stone in the world'.",
        mapsQuery: "Lion Monument Lucerne",
        coords: [47.0583, 8.3108]
      },
      {
        name: "Interlaken & Jungfrau Massif Panorama",
        category: "🏔️ Alpine Gateway",
        time: "Afternoon (15:00 – 17:30)",
        location: "Höhematte Park, Interlaken",
        image: "public/images/destinations/iseltwald.jpg",
        admission: "Free ($0 AUD) · Höhematte Alpine Park",
        isPaid: false,
        hours: "Open 24/7 (Höhematte Park & Alpine Views)",
        desc: "Open parkland in the center of Interlaken offering unobstructed views toward the snow-cloaked peaks of the Jungfrau, Mönch, and Eiger massifs on Christmas Day.",
        mapsQuery: "Hohematte Interlaken",
        coords: [46.6863, 7.8632]
      }
    ]
  }`;

if (!gData.includes(oldDays9to11)) {
  console.error('Could not find oldDays9to11 in js/gallery-data.js');
} else {
  gData = gData.replace(oldDays9to11, newDays9to11);
  console.log('Replaced Days 9-11 in js/gallery-data.js');
}

// Replace Day 14
const oldDay14 = `  {
    dayNum: 14,
    day: "Day 14",
    date: "28 Dec 2026",
    city: "Lucerne & Zurich ➔ Paris",
    country: "Transit",
    countryFilter: "transit",
    badgeClass: "badge-transit",
    title: "Lucerne Historic Stopover & Lake Zurich Promenade",
    stay: "FlixBus Overnight Sleeper Coach to Paris",
    transit: "🚆 Panoramic Luzern-Interlaken Express + 🚌 Night Coach",
    coords: [47.0502, 8.3093],
    sights: [
      {
        name: "Chapel Bridge (Kapellbrücke) & Water Tower",
        category: "🌉 14th-Century Wooden Covered Bridge",
        time: "Midday (11:15 – 13:00)",
        location: "Reuss River, Lucerne",
        image: "public/images/sights/kapellbruecke-lucerne.jpg",
        admission: "Free ($0 AUD) · 14th-Century Wooden Bridge",
        isPaid: false,
        hours: "Open 24/7 (Covered Wooden Bridge)",
        desc: "Europe's oldest surviving covered wooden truss footbridge (14th century) containing 17th-century triangular ceiling paintings of Swiss history, anchored by the octagonal stone Water Tower.",
        mapsQuery: "Chapel Bridge Lucerne",
        coords: [47.0516, 8.3073]
      },
      {
        name: "Lion Monument (Löwendenkmal)",
        category: "🦁 Mark Twain's Poignant Monument",
        time: "Afternoon (13:30 – 14:45)",
        location: "Denkmalstrasse 4, Lucerne",
        image: "public/images/sights/lion-monument-lucerne.jpg",
        admission: "Free ($0 AUD) · Monument Quarry Park",
        isPaid: false,
        hours: "Open 24/7 (Public Rock Relief Monument)",
        desc: "A giant dying lion carved directly into a cliffside sandstone quarry honoring Swiss Guards fallen in 1792—praised by Mark Twain as 'the most mournful and moving piece of stone in the world'.",
        mapsQuery: "Lion Monument Lucerne",
        coords: [47.0583, 8.3108]
      },
      {
        name: "Lake Zurich Promenade & Bürkliplatz",
        category: "⛵ Scenic Waterfront Stroll",
        time: "Late Afternoon (16:45 – 18:00)",
        location: "Bürkliplatz, Zurich",
        image: "public/images/sights/lake-zurich-promenade.jpg",
        admission: "Free ($0 AUD) · Waterfront Walk",
        isPaid: false,
        hours: "Open 24/7 (Lakeside Promenade)",
        desc: "Peaceful waterfront promenade gazing out across crystal-clear waters toward the snow-capped Glarus Alps, dotted with swans and lakeside parks.",
        mapsQuery: "Burkliplatz Zurich",
        coords: [47.3667, 8.5414]
      },
      {
        name: "Lindenhof Hill (CLOY Opening Sequence)",
        category: "🎬 CLOY Historic Overlook",
        time: "Evening (18:00 – 19:30)",
        location: "Lindenhof, Zurich Altstadt",
        image: "public/images/sights/lindenhof-hill.jpg",
        admission: "Free ($0 AUD) · Historic Viewpoint Terrace",
        isPaid: false,
        hours: "Open 24/7 (Public Hilltop Park overlooking Limmat)",
        desc: "The elevated hilltop park overlooking the Limmat River and Grossmünster cathedral where Captain Ri and Yoon Se-ri pass by each other in the opening title sequence of 'Crash Landing on You'.",
        mapsQuery: "Lindenhof Zurich",
        coords: [47.3730, 8.5405]
      }
    ]
  }`;

const newDay14 = `  {
    dayNum: 14,
    day: "Day 14",
    date: "28 Dec 2026",
    city: "Grindelwald & Zurich ➔ Paris",
    country: "Transit",
    countryFilter: "transit",
    badgeClass: "badge-transit",
    title: "Grindelwald First Cliff Walk & Lake Zurich ➔ Overnight Sleeper Coach to Paris",
    stay: "FlixBus Overnight Sleeper",
    transit: "🚆 SBB InterCity + 🚌 Overnight Sleeper Coach (Saves a hotel night!)",
    coords: [46.6590, 8.0645],
    sights: [
      {
        name: "Grindelwald First Cliff Walk by Tissot",
        category: "🏔️ High-Altitude Suspended Walkway",
        time: "Morning (09:00 – 12:30)",
        location: "First, Grindelwald (2,168m)",
        image: "public/images/sights/grindelwald-first-cliff-walk.jpg",
        admission: "Free ($0 AUD) Summit Walkway · Gondola pass covered",
        isPaid: false,
        hours: "Open 09:00–16:00 (Gondola 08:30–16:30)",
        desc: "Breathtaking steel walkway clinging to the sheer rock face of Mount First at 2,168 meters, culminating in a 45-meter single-rope suspension cantilever over the abyss facing the Eiger.",
        mapsQuery: "First Cliff Walk Grindelwald",
        coords: [46.6590, 8.0645]
      },
      {
        name: "Lake Zurich Promenade & Bürkliplatz",
        category: "⛵ Scenic Waterfront Stroll",
        time: "Late Afternoon (15:00 – 17:00)",
        location: "Bürkliplatz, Zurich",
        image: "public/images/sights/lake-zurich-promenade.jpg",
        admission: "Free ($0 AUD) · Waterfront Walk",
        isPaid: false,
        hours: "Open 24/7 (Lakeside Promenade)",
        desc: "Peaceful waterfront promenade gazing out across crystal-clear waters toward the snow-capped Glarus Alps, dotted with swans and lakeside parks.",
        mapsQuery: "Burkliplatz Zurich",
        coords: [47.3667, 8.5414]
      },
      {
        name: "Lindenhof Hill (CLOY Opening Sequence)",
        category: "🎬 CLOY Historic Overlook",
        time: "Evening (17:00 – 18:30)",
        location: "Lindenhof, Zurich Altstadt",
        image: "public/images/sights/lindenhof-hill.jpg",
        admission: "Free ($0 AUD) · Historic Viewpoint Terrace",
        isPaid: false,
        hours: "Open 24/7 (Public Hilltop Park overlooking Limmat)",
        desc: "The elevated hilltop park overlooking the Limmat River and Grossmünster cathedral where Captain Ri and Yoon Se-ri pass by each other in the opening title sequence of 'Crash Landing on You'.",
        mapsQuery: "Lindenhof Zurich",
        coords: [47.3730, 8.5405]
      },
      {
        name: "Bahnhofstrasse Luxury Chocolate Boutiques",
        category: "🍫 Swiss Luxury & Chocolatiers",
        time: "Evening (18:30 – 20:30)",
        location: "Bahnhofstrasse, Zurich",
        image: "public/images/sights/bahnhofstrasse.jpg",
        admission: "Free ($0 AUD) · Window Shopping & Chocolates",
        isPaid: false,
        hours: "Open Daily 09:00–19:00 / 20:00",
        desc: "World-renowned shopping boulevard featuring flagship Läderach, Lindt, and Sprüngli chocolate houses illuminated with dazzling holiday light displays.",
        mapsQuery: "Bahnhofstrasse Zurich",
        coords: [47.3717, 8.5380]
      }
    ]
  }`;

if (!gData.includes(oldDay14)) {
  console.error('Could not find oldDay14 in js/gallery-data.js');
} else {
  gData = gData.replace(oldDay14, newDay14);
  console.log('Replaced Day 14 in js/gallery-data.js');
}

// Replace Day 20
const oldDay20 = `  {
    dayNum: 20,
    day: "Day 20",
    date: "03 Jan 2027",
    city: "Paris ➔ London",
    country: "Transit",
    countryFilter: "transit",
    badgeClass: "badge-transit",
    title: "Historic Bridges, Souvenir Shopping & Eurotunnel Night Coach",
    stay: "FlixBus Overnight Coach to London Victoria",
    transit: "🚇 Paris Metro Line 14 + 🚌 Overnight Sleeper Transit",
    coords: [48.8398, 2.3783],
    sights: [
      {
        name: "Pont Alexandre III & Historic Seine",
        category: "🌉 Beaux-Arts Bridge Landmark",
        time: "Afternoon (14:00 – 16:30)",
        location: "Pont Alexandre III, Paris",
        image: "public/images/sights/pont-alexandre-iii.jpg",
        admission: "Free ($0 AUD) · Historic Beaux-Arts Bridge",
        isPaid: false,
        hours: "Open 24/7 (Pedestrian Bridge & Seine Banks)",
        desc: "Widely considered the most ornate bridge in Paris, adorned with Art Nouveau candelabras, nymphs, and gilded Fames on 17-meter stone pylons connecting the Grand Palais to Les Invalides.",
        mapsQuery: "Pont Alexandre III Paris",
        coords: [48.8639, 2.3135]
      },
      {
        name: "Eurotunnel Crossing & Paris Farewell",
        category: "🚌 Cross-Channel Coach Transit",
        time: "Night (21:30 – 05:00+1d)",
        location: "Paris Bercy Seine ➔ London Victoria",
        image: "public/images/destinations/paris.jpg",
        admission: "Free ($0 AUD) · Cross-Channel Coach Transit",
        isPaid: false,
        hours: "FlixBus overnight departure 23:00 to London",
        desc: "Boarding the overnight FlixBus sleeper coach from Paris Bercy Seine terminal, crossing the English Channel via the undersea Eurotunnel rail shuttle back into Great Britain.",
        mapsQuery: "Paris Bercy Seine bus station",
        coords: [48.8378, 2.3804]
      }
    ]
  }`;

const newDay20 = `  {
    dayNum: 20,
    day: "Day 20",
    date: "03 Jan 2027",
    city: "Paris ➔ London Victoria",
    country: "Transit",
    countryFilter: "transit",
    badgeClass: "badge-transit",
    title: "Final Parisian Highlights · Confirmed FlixBus Route 1700 to London",
    stay: "FlixBus Route 1700 Sleeper (Confirmed)",
    transit: "🚌 FlixBus Route 1700 (23:00–07:25+1d) · AUD $169.98 Paid",
    coords: [48.8398, 2.3783],
    sights: [
      {
        name: "Pont Alexandre III & Historic Seine",
        category: "🌉 Beaux-Arts Bridge Landmark",
        time: "Afternoon (14:00 – 16:30)",
        location: "Pont Alexandre III, Paris",
        image: "public/images/sights/pont-alexandre-iii.jpg",
        admission: "Free ($0 AUD) · Historic Beaux-Arts Bridge",
        isPaid: false,
        hours: "Open 24/7 (Pedestrian Bridge & Seine Banks)",
        desc: "Widely considered the most ornate bridge in Paris, adorned with Art Nouveau candelabras, nymphs, and gilded Fames on 17-meter stone pylons connecting the Grand Palais to Les Invalides.",
        mapsQuery: "Pont Alexandre III Paris",
        coords: [48.8639, 2.3135]
      },
      {
        name: "Confirmed FlixBus Route 1700 & Eurotunnel Crossing",
        category: "🚌 Cross-Channel Coach Transit",
        time: "Night (21:30 – 07:25+1d)",
        location: "Paris Bercy Seine ➔ London Victoria",
        image: "public/images/destinations/paris.jpg",
        admission: "Free ($0 AUD) · Confirmed Coach Ticket (AUD $169.98 Paid)",
        isPaid: false,
        hours: "FlixBus 1700 departs 23:00 (Ref 338 920 9866)",
        desc: "Boarding confirmed FlixBus Route 1700 from Paris Bercy Seine terminal (210 Quai de Bercy), crossing beneath the English Channel via the undersea Eurotunnel back into London Victoria Coach Station.",
        mapsQuery: "Paris Bercy Seine bus station",
        coords: [48.8378, 2.3804]
      }
    ]
  }`;

if (!gData.includes(oldDay20)) {
  console.error('Could not find oldDay20 in js/gallery-data.js');
} else {
  gData = gData.replace(oldDay20, newDay20);
  console.log('Replaced Day 20 in js/gallery-data.js');
}

fs.writeFileSync(galleryDataPath, gData, 'utf8');
console.log('Wrote updated gallery-data.js successfully');
