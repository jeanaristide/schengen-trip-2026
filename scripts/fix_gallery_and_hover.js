const fs = require('fs');
const path = require('path');

const repoDir = '/Users/jeana/Projects/schengen-trip-2026';

// Read base rich data from update_gallery_data.js
const baseFile = fs.readFileSync(path.join(repoDir, 'scripts/update_gallery_data.js'), 'utf8');
const match = baseFile.match(/const galleryData = (\[[\s\S]*?\n\];)/);
if (!match) {
  throw new Error('Could not find galleryData in scripts/update_gallery_data.js');
}

const rawGallery = eval(match[1]);

// Map days 2 to 20 (filter out Day 1 and Day 21)
const filteredGallery = rawGallery.filter(d => d.dayNum >= 2 && d.dayNum <= 20);

// Fix Day 11 (Strasbourg ➔ Bern)
const day11 = filteredGallery.find(d => d.dayNum === 11);
if (day11) {
  day11.city = "Strasbourg ➔ Bern";
  day11.country = "Switzerland";
  day11.countryFilter = "switzerland";
  day11.badgeClass = "badge-ch";
  day11.title = "Christmas Day Transit to Bern (Alpenblick CoLiving) & UNESCO Covered Arcades";
  day11.stay = "Alpenblick CoLiving, Bern (Night 1 of 4 · Confirmed: 5525.615.675)";
  day11.transit = "🚆 SBB Swiss Federal Railways + Bern Local Tram";
  day11.coords = [46.9480, 7.4474];
  day11.sights = [
    {
      name: "Bern UNESCO Old Town & Covered Sandstone Arcades (Lauben)",
      category: "🏛️ UNESCO World Heritage Arcades",
      time: "Afternoon (13:30 – 15:30)",
      location: "Kramgasse, 3011 Bern, Switzerland",
      image: "/images/sights/bern-arcades.jpg",
      admission: "Free ($0 AUD)",
      isPaid: false,
      hours: "Open 24/7 (Sheltered promenade)",
      desc: "6 kilometers of continuous 15th-century covered sandstone arcades (Lauben) providing a sheltered, atmospheric promenade through Bern's historic medieval core.",
      mapsQuery: "Kramgasse Bern Switzerland",
      coords: [46.9480, 7.4500],
      aliases: ["lauben", "arcades", "covered arcades", "unesco old town", "kramgasse", "sandstone arcades", "bern old town", "arcades promenade"]
    },
    {
      name: "Zytglogge Astronomical Clock Tower",
      category: "🕰️ Medieval Astronomical Clock",
      time: "Afternoon (15:30 – 16:30)",
      location: "Bim Zytglogge 1, 3011 Bern, Switzerland",
      image: "/images/sights/zytglogge-bern.jpg",
      admission: "Free ($0 AUD)",
      isPaid: false,
      hours: "Open 24/7 (Hourly mechanical chime)",
      desc: "13th-century landmark clock tower featuring dancing mechanical figurines, rooster crow, rotating bear parade, and revolving astrological dial.",
      mapsQuery: "Zytglogge Bern",
      coords: [46.9479, 7.4478],
      aliases: ["zytglogge", "clock tower", "astronomical clock", "astronomical clock tower", "clock chime", "chime", "clock"]
    },
    {
      name: "Nydeggbrücke Bridge & Bear Park Overlook",
      category: "🌉 Historic Arch Bridge & Overlook",
      time: "Late Afternoon (16:30 – 18:00)",
      location: "Grosser Muristalden 6, 3006 Bern, Switzerland",
      image: "/images/sights/bern-nydeggbruecke.jpg",
      admission: "Free ($0 AUD)",
      isPaid: false,
      hours: "Open 24/7",
      desc: "Grand 19th-century sandstone arch bridge spanning the turquoise Aare River, with panoramic views of medieval timber houses and the Bärengraben hillside.",
      mapsQuery: "Nydeggbruecke Bern",
      coords: [46.9484, 7.4590],
      aliases: ["nydeggbruecke", "nydegg bridge", "bear park", "baerenpark", "baerengraben", "aare river loop", "nydegg", "river overlook"]
    }
  ];
}

// Fix Day 12 (Grindelwald First Cliff Walk & Lake Brienz)
const day12 = filteredGallery.find(d => d.dayNum === 12);
if (day12) {
  day12.city = "Grindelwald & Lake Brienz";
  day12.country = "Switzerland";
  day12.countryFilter = "switzerland";
  day12.badgeClass = "badge-ch";
  day12.title = "Grindelwald First Cliff Walk & Lake Brienz (CLOY Pier)";
  day12.stay = "Alpenblick CoLiving, Bern (Night 2 of 4 · Confirmed: 5525.615.675)";
  day12.transit = "🚆 SBB InterCity (Bern ➔ Grindelwald) + 🚠 First Gondola + 🚌 PostBus 103";
  day12.coords = [46.6588, 8.0538];
  day12.sights = [
    {
      name: "First Cliff Walk by Tissot (Mount First, 2,168m)",
      category: "🏔️ Alpine Suspension Walkway",
      time: "Morning (09:30 – 13:00)",
      location: "First 2168m, 3818 Grindelwald, Switzerland",
      image: "/images/sights/grindelwald-first-cliff-walk.jpg",
      admission: "Free walkway (Gondola ticket required)",
      isPaid: false,
      hours: "08:30–16:30 (Daily in winter)",
      desc: "Thrilling steel walkway curving around the dramatic limestone cliff face of Mount First (2,168m) with a 45m cantilever bridge directly facing the iconic snowy Eiger North Face.",
      mapsQuery: "First Cliff Walk by Tissot Grindelwald",
      coords: [46.6588, 8.0538],
      aliases: ["first cliff walk", "cliff walk", "tissot", "first gondola", "mount first", "cliff walkway", "suspension bridge", "eiger north face"]
    },
    {
      name: "Grindelwald Alpine Valley & Eiger North Face",
      category: "🏡 Swiss Alpine Village & Peaks",
      time: "Midday (13:00 – 14:30)",
      location: "Dorfstrasse, 3818 Grindelwald, Switzerland",
      image: "/images/sights/grindelwald-valley.jpg",
      admission: "Free ($0 AUD)",
      isPaid: false,
      hours: "Open 24/7",
      desc: "Fairytale glacier village nestled beneath the sheer 1,800m north face of the Eiger, dotted with traditional timber chalets and scenic snowy slopes.",
      mapsQuery: "Grindelwald Switzerland",
      coords: [46.6242, 8.0414],
      aliases: ["grindelwald", "eiger", "eiger north face", "grindelwald village", "alpine valley", "chalets", "swiss chalets"]
    },
    {
      name: "Iseltwald Landing Stage (Lake Brienz CLOY Pier)",
      category: "🎬 Scenic Lake Landmark",
      time: "Afternoon (15:00 – 17:30)",
      location: "Am Strand 1, 3807 Iseltwald, Switzerland",
      image: "/images/sights/iseltwald-landing-stage.jpg",
      admission: "5 CHF (~A$9 AUD)",
      isPaid: true,
      hours: "Open 24/7 (Card turnstile access)",
      desc: "Iconic wooden jetty extending into the pristine, mirror-like turquoise waters of Lake Brienz made world-famous by the drama series Crash Landing on You.",
      mapsQuery: "Iseltwald Landing Stage Lake Brienz",
      coords: [46.7118, 7.9628],
      aliases: ["iseltwald", "lake brienz", "cloy", "cloy pier", "landing stage", "pier", "crash landing on you", "crash landing", "brienz"]
    }
  ];
}

// Fix Day 13 (Lauterbrunnen, Mürren & Blausee)
const day13 = filteredGallery.find(d => d.dayNum === 13);
if (day13) {
  day13.city = "Lauterbrunnen, Mürren & Blausee";
  day13.country = "Switzerland";
  day13.countryFilter = "switzerland";
  day13.badgeClass = "badge-ch";
  day13.title = "Lauterbrunnen Valley, Car-Free Mürren & Magical Blausee Winter Park";
  day13.stay = "Alpenblick CoLiving, Bern (Night 3 of 4 · Confirmed: 5525.615.675)";
  day13.transit = "🚆 SBB Train + 🚠 BLM Cable Car & Mountain Rail + 🚌 Bus 230";
  day13.coords = [46.5935, 7.9090];
  day13.sights = [
    {
      name: "Lauterbrunnen Valley & Staubbach Falls",
      category: "🌊 Glacial Waterfall Valley",
      time: "Morning (09:00 – 11:30)",
      location: "Staubbachfall, 3822 Lauterbrunnen, Switzerland",
      image: "/images/sights/staubbach-falls-lauterbrunnen.jpg",
      admission: "Free ($0 AUD)",
      isPaid: false,
      hours: "Open 24/7",
      desc: "Enchanting U-shaped glacial valley of 72 waterfalls, where Staubbach Falls plunges 297 meters from vertical rock cliffs into powdery winter mist.",
      mapsQuery: "Staubbach Falls Lauterbrunnen",
      coords: [46.5935, 7.9090],
      aliases: ["lauterbrunnen", "staubbach", "staubbach falls", "72 waterfalls", "valley of 72 waterfalls", "waterfalls", "falls"]
    },
    {
      name: "Mürren Car-Free Alpine Village (1,638m)",
      category: "🏔️ Traditional Mountain Village",
      time: "Midday (11:45 – 14:00)",
      location: "3825 Mürren, Switzerland",
      image: "/images/sights/muerren-village.jpg",
      admission: "Free ($0 AUD)",
      isPaid: false,
      hours: "BLM Transit 06:00–20:30 (365 Days)",
      desc: "Peaceful car-free clifftop village perched high above the Lauterbrunnen valley, commanding uninterrupted panoramas of the Eiger, Mönch, and Jungfrau peaks.",
      mapsQuery: "Muerren Switzerland",
      coords: [46.5594, 7.8927],
      aliases: ["muerren", "mürren", "blm", "gruetschalp", "grütschalp", "mountain railway", "car-free village", "clifftop village"]
    },
    {
      name: "Blausee Nature Park (Path of the 1,000 Lights)",
      category: "✨ Illuminated Winter Nature Park",
      time: "Twilight & Evening (15:30 – 19:30)",
      location: "Blausee, 3717 Kandergrund, Switzerland",
      image: "/images/sights/blausee.jpg",
      admission: "13 CHF (~A$22 AUD)",
      isPaid: true,
      hours: "09:00–21:00 (1,000 Lights 16:00–20:00)",
      desc: "Crystal-clear, subterranean-fed turquoise lake deep in a snow-covered pine forest, illuminated during winter twilight by hundreds of glowing lanterns on the romantic Path of the 1,000 Lights.",
      mapsQuery: "Blausee Nature Park Switzerland",
      coords: [46.5332, 7.6653],
      aliases: ["blausee", "1,000 lights", "1000 lights", "path of the 1,000 lights", "illuminated lake", "kandergrund", "frutigen", "nature park"]
    }
  ];
}

// Fix Day 14 (Lake Thun, Sigriswil & Bern)
const day14 = filteredGallery.find(d => d.dayNum === 14);
if (day14) {
  day14.city = "Lake Thun, Sigriswil & Bern";
  day14.country = "Switzerland";
  day14.countryFilter = "switzerland";
  day14.badgeClass = "badge-ch";
  day14.title = "Lake Thun Waterfront, Sigriswil Suspension Bridge & Bern Rosengarten Sunset";
  day14.stay = "Alpenblick CoLiving, Bern (Night 4 of 4 · Confirmed: 5525.615.675)";
  day14.transit = "🚆 SBB InterCity (Bern ➔ Spiez) + 🚌 STI Bus to Sigriswil + Bern Local Tram";
  day14.coords = [46.6863, 7.6844];
  day14.sights = [
    {
      name: "Spiez Castle & Lake Thun Waterfront",
      category: "🏰 Medieval Castle & Lake Bay",
      time: "Morning (09:30 – 12:30)",
      location: "Schlossstrasse 16, 3700 Spiez, Switzerland",
      image: "/images/sights/lake-thun-spiez.jpg",
      admission: "Free ($0 AUD)",
      isPaid: false,
      hours: "Open 24/7 (Waterfront & Grounds)",
      desc: "Picturesque 1,000-year-old medieval castle set in a tranquil bay on deep-blue Lake Thun, surrounded by winter vineyards and snow-capped peaks.",
      mapsQuery: "Spiez Castle Lake Thun",
      coords: [46.6896, 7.6874],
      aliases: ["spiez", "lake thun", "spiez castle", "thun", "lake thun waterfront", "castle bay", "waterfront promenade", "castle"]
    },
    {
      name: "Panoramabrücke Sigriswil Suspension Bridge",
      category: "🌉 Panoramic Suspension Bridge",
      time: "Afternoon (13:00 – 15:30)",
      location: "Raftstrasse 37, 3655 Sigriswil, Switzerland",
      image: "/images/sights/panoramabruecke-sigriswil.jpg",
      admission: "8 CHF (~A$14 AUD)",
      isPaid: true,
      hours: "08:00–20:00 Daily",
      desc: "Breathtaking 340-meter-long pedestrian suspension bridge swinging 182 meters above the Gummischlucht gorge with sweeping views of Lake Thun and the Bernese Alps.",
      mapsQuery: "Panoramabruecke Sigriswil",
      coords: [46.7176, 7.7121],
      aliases: ["sigriswil", "panoramabruecke", "panoramabrücke", "suspension bridge", "gummischlucht", "sigriswil bridge", "bridge"]
    },
    {
      name: "Bern Rosengarten Sunset Viewpoint over Aare River",
      category: "🌅 Elevated City Panorama",
      time: "Sunset & Evening (16:00 – 18:30)",
      location: "Alter Aargauerstalden 31b, 3006 Bern, Switzerland",
      image: "/images/sights/bern-rosengarten.jpg",
      admission: "Free ($0 AUD)",
      isPaid: false,
      hours: "Open 24/7 (Sunset ~16:45)",
      desc: "Elevated rose garden park providing the premier golden-hour sunset panorama over the horseshoe loop of the emerald Aare river and the red roofs of Bern UNESCO Old Town.",
      mapsQuery: "Rosengarten Bern",
      coords: [46.9515, 7.4599],
      aliases: ["rosengarten", "rose garden", "sunset viewpoint", "aare panorama", "aare river loop", "viewpoint", "sunset"]
    }
  ];
}

// Fix Day 15 (Bern ➔ Paris)
const day15 = filteredGallery.find(d => d.dayNum === 15);
if (day15) {
  day15.city = "Bern ➔ Paris";
  day15.country = "Transit";
  day15.countryFilter = "france";
  day15.badgeClass = "badge-transit";
  day15.title = "Bern Switzerland Temple (Morning Endowment Session) ➔ High-Speed TGV Lyria to Paris";
  day15.stay = "Break & Home Paris Italie (CONFIRMED)";
  day15.transit = "🚆 S-Bahn + 🚄 High-Speed TGV Lyria (320 km/h) + 🚇 Paris Metro Line 14";
  day15.coords = [46.9904, 7.4608];
  day15.sights = [
    {
      name: "Bern Switzerland LDS Temple",
      category: "🏛️ Sacred House of the Lord",
      time: "Morning (08:45 – 12:30)",
      location: "Tempelstrasse 2, 3052 Zollikofen, Switzerland",
      image: "/images/temples/bern-temple.jpg",
      admission: "Free ($0 AUD)",
      isPaid: false,
      hours: "Morning Proxy Endowment Session",
      desc: "First Latter-day Saint temple dedicated in Europe (1955) in peaceful Zollikofen, set among evergreen pine trees and serene gardens.",
      mapsQuery: "Bern Switzerland Temple Zollikofen",
      coords: [46.9904, 7.4608],
      aliases: ["bern temple", "bern switzerland temple", "zollikofen", "endowment session", "proxy endowment", "temple grounds", "temple"]
    },
    {
      name: "High-Speed TGV Lyria (Bern ➔ Paris Gare de Lyon)",
      category: "🚄 International Bullet Train",
      time: "Afternoon (13:30 – 19:45)",
      location: "Bern Hbf / Paris Gare de Lyon",
      image: "/images/sights/tgv-lyria.jpg",
      admission: "Included in Train Booking",
      isPaid: false,
      hours: "Cruising @ 320 km/h",
      desc: "Sleek double-decker French-Swiss high-speed bullet train crossing borders at 320 km/h, delivering passengers directly into the heart of Paris at Gare de Lyon.",
      mapsQuery: "Paris Gare de Lyon",
      coords: [48.8448, 2.3735],
      aliases: ["tgv", "tgv lyria", "bullet train", "high-speed train", "gare de lyon", "basel sbb", "lyria"]
    },
    {
      name: "Break & Home Paris Italie Porte de Choisy",
      category: "🏨 Paris Accommodation Base",
      time: "Evening (20:00 Arrival)",
      location: "60 Rue Voltaire, 94200 Ivry-sur-Seine / Paris Porte de Choisy",
      image: "/images/sights/break-home-paris-italie.jpg",
      admission: "Confirmed Reservation (Booking.com)",
      isPaid: false,
      hours: "24/7 Front Desk Check-in",
      desc: "Comfortable modern Parisian aparthotel featuring equipped kitchenettes, peaceful courtyard, and direct rapid transit via automated Metro Line 14.",
      mapsQuery: "Break & Home Paris Italie Porte de Choisy",
      coords: [48.8184, 2.3756],
      aliases: ["break & home", "break and home", "paris italie", "porte de choisy", "metro line 14", "hotel check-in", "hotel"]
    }
  ];
}

// Fix Day 19 (Versailles & Paris Temple)
const day19 = filteredGallery.find(d => d.dayNum === 19);
if (day19) {
  day19.sights = [
    {
      name: "Palace of Versailles (Château de Versailles)",
      category: "👑 Royal Palace & State Apartments",
      time: "Morning (09:00 – 12:30)",
      location: "Place d'Armes, 78000 Versailles, France",
      image: "/images/sights/palace-versailles.jpg",
      admission: "Passport Ticket (€32 / ~A$52 AUD)",
      isPaid: true,
      hours: "09:00–17:30 (Open Saturday 02 Jan)",
      desc: "Magnificent golden royal residence of Louis XIV, the Sun King, showcasing peak French baroque architecture and royal grandeur.",
      mapsQuery: "Palace of Versailles",
      coords: [48.8049, 2.1204],
      aliases: ["versailles", "palace of versailles", "chateau de versailles", "château de versailles", "palace"]
    },
    {
      name: "Galerie des Glaces (Hall of Mirrors Interior)",
      category: "✨ Iconic Historic Grand Gallery",
      time: "Morning (11:00 – 12:30)",
      location: "Inside Palace of Versailles",
      image: "/images/sights/versailles-hall-of-mirrors.jpg",
      admission: "Included in Palace Ticket",
      isPaid: false,
      hours: "09:00–17:30",
      desc: "Breathtaking 73-meter central gallery lined with 357 mirrors, gilded chandeliers, and ceiling frescoes depicting French triumphs.",
      mapsQuery: "Hall of Mirrors Versailles",
      coords: [48.8049, 2.1204],
      aliases: ["hall of mirrors", "galerie des glaces", "mirrors", "mirror gallery"]
    },
    {
      name: "Versailles Palace Orangery & Parterre Gardens",
      category: "🌳 French Formal Royal Gardens",
      time: "Midday (12:30 – 14:00)",
      location: "Gardens of Versailles, 78000 Versailles",
      image: "/images/sights/versailles-gardens.jpg",
      admission: "Free Access in Winter",
      isPaid: false,
      hours: "08:00–18:00 (Open 365 Days)",
      desc: "Geometric winter parterres, grand stone staircases, and sweeping views over the Swiss Guard basin and vast royal parklands.",
      mapsQuery: "Gardens of Versailles",
      coords: [48.8035, 2.1158],
      aliases: ["versailles gardens", "orangery", "parterre", "royal gardens", "gardens"]
    },
    {
      name: "Paris France LDS Temple",
      category: "🏛️ Sacred House of the Lord",
      time: "Afternoon (14:30 – 17:00)",
      location: "46 Boulevard Saint-Antoine, 78150 Le Chesnay, France",
      image: "/images/temples/paris-temple.jpg",
      admission: "Free ($0 AUD)",
      isPaid: false,
      hours: "Afternoon Temple Grounds Stroll",
      desc: "Elegant French limestone temple in Le Chesnay adjacent to Versailles, featuring peaceful reflection gardens and warm stone arches.",
      mapsQuery: "Paris France Temple Le Chesnay",
      coords: [48.8267, 2.1332],
      aliases: ["paris temple", "paris france temple", "le chesnay", "temple", "chesnay"]
    }
  ];
}

// Ensure all image paths start with /images/
filteredGallery.forEach(day => {
  day.sights.forEach(sight => {
    if (sight.image.startsWith('public/')) {
      sight.image = sight.image.replace(/^public\//, '/');
    }
    if (!sight.image.startsWith('/')) {
      sight.image = '/' + sight.image;
    }
  });
});

const galleryJsContent = `// Schengen Tour 2026-2027 - Complete Verified Visual Gallery Data
// Granular, dedicated photography for every distinct destination (Excluding UK)

window.galleryData = ${JSON.stringify(filteredGallery, null, 2)};

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

fs.writeFileSync(path.join(repoDir, 'js/gallery-data.js'), galleryJsContent, 'utf8');
console.log('✅ js/gallery-data.js rebuilt with complete schema for Days 2 to 20!');

// =========================================================================
// 2. Fix js/gallery.js to prevent any undefined crashes
// =========================================================================
let galleryJs = fs.readFileSync(path.join(repoDir, 'js/gallery.js'), 'utf8');

// Safeguard sight.location.split
galleryJs = galleryJs.replace(
  /<span>📍 \$\{sight\.location\.split\(','\)\[0\]\}<\/span>/g,
  "<span>📍 ${sight.location ? sight.location.split(',')[0] : (sight.city || 'Europe')}</span>"
);

fs.writeFileSync(path.join(repoDir, 'js/gallery.js'), galleryJs, 'utf8');
console.log('✅ js/gallery.js safeguarded against missing location splits!');

// =========================================================================
// 3. Update js/app.js for robust place photo hover and modal trigger
// =========================================================================
let appJs = fs.readFileSync(path.join(repoDir, 'js/app.js'), 'utf8');

const oldSetupIdx = appJs.indexOf('function setupPlacePhotoInteractions() {');
if (oldSetupIdx !== -1) {
  const endSetupIdx = appJs.indexOf('// Hook into existing lightbox prev/next buttons', oldSetupIdx);
  if (endSetupIdx !== -1) {
    const newSetupCode = `function setupPlacePhotoInteractions() {
  const popover = document.getElementById('placePhotoPopover');
  if (!popover) return;

  let hoverTimeout = null;

  function showPopover(targetEl, dayNum, text, mouseX, mouseY) {
    clearTimeout(hoverTimeout);
    if (!dayNum || dayNum === 1 || dayNum === 21) {
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
    }, 120);
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

  // Hover over activity bullets, table cells, card activities, and landmark titles
  document.addEventListener('mouseover', (e) => {
    const targetEl = e.target.closest('.activity-sublist li, .table-activity-item, .card-activity-item, .table-plan-title, .card-title, .table-loc-name, .col-table-loc');
    if (!targetEl) return;

    const dayNum = resolveDayNum(targetEl);
    if (!dayNum || dayNum === 1 || dayNum === 21) return;

    showPopover(targetEl, dayNum, targetEl.textContent, e.clientX, e.clientY);
  });

  document.addEventListener('mousemove', (e) => {
    if (!popover.classList.contains('visible')) return;
    const targetEl = e.target.closest('.activity-sublist li, .table-activity-item, .card-activity-item, .table-plan-title, .card-title, .table-loc-name, .col-table-loc');
    if (!targetEl) return;

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
    const targetEl = e.target.closest('.activity-sublist li, .table-activity-item, .card-activity-item, .table-plan-title, .card-title, .table-loc-name, .col-table-loc');
    if (targetEl) hidePopover();
  });

  // Clicking an activity bullet opens the photo modal for that sight
  document.addEventListener('click', (e) => {
    const targetEl = e.target.closest('.activity-sublist li, .table-activity-item, .card-activity-item, .btn-table-photos, .btn-card-photos');
    if (!targetEl) return;

    const dayNum = resolveDayNum(targetEl) || (targetEl.getAttribute('data-day') ? parseInt(targetEl.getAttribute('data-day').replace('Day ', ''), 10) : 0);
    if (!dayNum || dayNum === 1 || dayNum === 21) return;

    const matched = findSightForText(dayNum, targetEl.textContent);
    openDayPhotosModal(dayNum, matched.index);
    hidePopover();
  });
}
`;
    appJs = appJs.slice(0, oldSetupIdx) + newSetupCode + '\n' + appJs.slice(endSetupIdx);
    fs.writeFileSync(path.join(repoDir, 'js/app.js'), appJs, 'utf8');
    console.log('✅ js/app.js updated with advanced cursor-following hover and robust selectors!');
  }
}
