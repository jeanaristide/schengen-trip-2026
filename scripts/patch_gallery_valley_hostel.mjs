import fs from 'fs';

// Read existing gallery-data.js
let fileContent = fs.readFileSync('js/gallery-data.js', 'utf8');

// The array starts at window.galleryData = [ and ends at ];\n\nwindow.allSightsFlat
const startMarker = 'window.galleryData = ';
const endMarker = '];\n\nwindow.allSightsFlat';

const startIndex = fileContent.indexOf(startMarker);
const endIndex = fileContent.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
  console.error("Could not find array boundaries!");
  process.exit(1);
}

const rawArrayStr = fileContent.slice(startIndex + startMarker.length, endIndex + 1);
const data = JSON.parse(rawArrayStr);

const days11to15 = [
  {
    "dayNum": 11,
    "day": "Day 11",
    "date": "25 Dec 2026",
    "city": "Strasbourg ➔ Lucerne ➔ Lauterbrunnen",
    "country": "Switzerland",
    "countryFilter": "switzerland",
    "badgeClass": "badge-ch",
    "title": "Christmas Arrival via Lucerne, Brünig Pass & Lauterbrunnen Valley",
    "stay": "Valley Hostel, Lauterbrunnen (Night 1 of 4 · Check-in 25 Dec)",
    "transit": "🚌 FlixBus N846 (04:05–07:10) + 🚆 Zentralbahn (Brünig Pass) + 🚆 BOB Train",
    "coords": [46.5935, 7.909],
    "sights": [
      {
        "name": "Zentralbahn Scenic Brünig Pass & Lucerne",
        "category": "🚆 Alpine Panoramic Railway",
        "time": "Morning (07:30 – 11:30)",
        "location": "Lucerne to Interlaken Ost, Switzerland",
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d3/Kapellbruecke_mit_Wasserturm_Herbst_2020.jpg/1280px-Kapellbruecke_mit_Wasserturm_Herbst_2020.jpg",
        "admission": "Free with valid rail ticket",
        "isPaid": false,
        "hours": "Regular holiday schedule",
        "desc": "Panoramic train journey climbing south from historic Lucerne over the snow-covered Brünig Pass, passing turquoise Lake Lungern and icy peaks into the Bernese Oberland.",
        "mapsQuery": "Zentralbahn Lucerne Interlaken",
        "coords": [47.0502, 8.3093],
        "aliases": [
          "zentralbahn",
          "brünig pass",
          "brunig pass",
          "lucerne",
          "luzern",
          "interlaken express",
          "panoramic train",
          "scenic train"
        ],
        "photos": [
          {
            "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d3/Kapellbruecke_mit_Wasserturm_Herbst_2020.jpg/1280px-Kapellbruecke_mit_Wasserturm_Herbst_2020.jpg",
            "caption": "Historic Lucerne Kapellbrücke & Water Tower - Featured Departure Hub"
          },
          {
            "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e0/Zentralbahn_ABeh_160_Luzern.jpg/1280px-Zentralbahn_ABeh_160_Luzern.jpg",
            "caption": "Zentralbahn Express Train - Panoramic Alpine Rolling Stock"
          },
          {
            "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f0/Lungerersee_Lungern_Obwalden_Switzerland.jpg/1280px-Lungerersee_Lungern_Obwalden_Switzerland.jpg",
            "caption": "Lake Lungern & Brünig Pass Ascent - Postcard Winter View"
          },
          {
            "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b8/Interlaken_Ost_Station.jpg/1280px-Interlaken_Ost_Station.jpg",
            "caption": "Interlaken Ost Alpine Railway Interchange - Platform Transfer"
          },
          {
            "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/db/Kapellbr%C3%BCcke_Luzern_2019.jpg/1280px-Kapellbr%C3%BCcke_Luzern_2019.jpg",
            "caption": "Lucerne Historic Riverfront & Reuss River - Morning Alpine Panorama"
          }
        ],
        "images": [
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d3/Kapellbruecke_mit_Wasserturm_Herbst_2020.jpg/1280px-Kapellbruecke_mit_Wasserturm_Herbst_2020.jpg",
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e0/Zentralbahn_ABeh_160_Luzern.jpg/1280px-Zentralbahn_ABeh_160_Luzern.jpg",
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f0/Lungerersee_Lungern_Obwalden_Switzerland.jpg/1280px-Lungerersee_Lungern_Obwalden_Switzerland.jpg",
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b8/Interlaken_Ost_Station.jpg/1280px-Interlaken_Ost_Station.jpg",
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/db/Kapellbr%C3%BCcke_Luzern_2019.jpg/1280px-Kapellbr%C3%BCcke_Luzern_2019.jpg"
        ]
      },
      {
        "name": "Staubbach Falls Viewpoint (Lauterbrunnen)",
        "category": "🌊 Glacial Waterfall & Frozen Mist",
        "time": "Afternoon (12:30 – 16:30)",
        "location": "Staubbachfall, 3822 Lauterbrunnen, Switzerland",
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5f/Lauterbrunnen_-_Staubbachfall.jpg/1280px-Lauterbrunnen_-_Staubbachfall.jpg",
        "admission": "Free ($0 AUD)",
        "isPaid": false,
        "hours": "Open 24/7",
        "desc": "Enchanting glacial waterfall plunging 297 meters down vertical cliff faces, where freezing alpine spray crystallizes into glittering ice formations along the rock wall.",
        "mapsQuery": "Staubbach Falls Lauterbrunnen",
        "coords": [46.5935, 7.909],
        "aliases": [
          "staubbach falls",
          "staubbach",
          "lauterbrunnen",
          "freezing mist",
          "mist",
          "sheer rock face",
          "crystallizing mist",
          "falls viewpoint"
        ],
        "photos": [
          {
            "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5f/Lauterbrunnen_-_Staubbachfall.jpg/1280px-Lauterbrunnen_-_Staubbachfall.jpg",
            "caption": "Staubbach Falls Viewpoint - Featured Landmark View"
          },
          {
            "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cb/Staubbachfall_in_Lauterbrunnen_BE.jpg/1280px-Staubbachfall_in_Lauterbrunnen_BE.jpg",
            "caption": "Staubbach Falls Viewpoint - Wide-Angle Perspective"
          },
          {
            "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ae/Staubbachfall_-_Lauterbrunnen_BE_-_Winter_2020_01.jpg/1280px-Staubbachfall_-_Lauterbrunnen_BE_-_Winter_2020_01.jpg",
            "caption": "Staubbach Falls Viewpoint - Architectural Detail"
          },
          {
            "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f6/Staubbachfall_-_Lauterbrunnen_BE_-_Winter_2020_02.jpg/1280px-Staubbachfall_-_Lauterbrunnen_BE_-_Winter_2020_02.jpg",
            "caption": "Staubbach Falls Viewpoint - Atmospheric Angle"
          },
          {
            "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0f/Staubbachfall_-_Lauterbrunnen_BE_-_Winter_2020_03.jpg/1280px-Staubbachfall_-_Lauterbrunnen_BE_-_Winter_2020_03.jpg",
            "caption": "Staubbach Falls Viewpoint - Alternate Vantage Point"
          }
        ],
        "images": [
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5f/Lauterbrunnen_-_Staubbachfall.jpg/1280px-Lauterbrunnen_-_Staubbachfall.jpg",
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cb/Staubbachfall_in_Lauterbrunnen_BE.jpg/1280px-Staubbachfall_in_Lauterbrunnen_BE.jpg",
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ae/Staubbachfall_-_Lauterbrunnen_BE_-_Winter_2020_01.jpg/1280px-Staubbachfall_-_Lauterbrunnen_BE_-_Winter_2020_01.jpg",
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f6/Staubbachfall_-_Lauterbrunnen_BE_-_Winter_2020_02.jpg/1280px-Staubbachfall_-_Lauterbrunnen_BE_-_Winter_2020_02.jpg",
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0f/Staubbachfall_-_Lauterbrunnen_BE_-_Winter_2020_03.jpg/1280px-Staubbachfall_-_Lauterbrunnen_BE_-_Winter_2020_03.jpg"
        ]
      },
      {
        "name": "Valley Hostel Lauterbrunnen (Communal Kitchen)",
        "category": "🏨 Alpine Hostel Base",
        "time": "Evening (17:00 – 20:30)",
        "location": "Fuhren 423, 3822 Lauterbrunnen, Switzerland",
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cb/Staubbachfall_in_Lauterbrunnen_BE.jpg/1280px-Staubbachfall_in_Lauterbrunnen_BE.jpg",
        "admission": "Free (Hostel amenity)",
        "isPaid": false,
        "hours": "Open 24/7 for guests",
        "desc": "Comfortable alpine base located in Lauterbrunnen village, featuring views of Staubbach Falls and fully equipped communal kitchens perfect for warm Christmas dinners.",
        "mapsQuery": "Valley Hostel Lauterbrunnen",
        "coords": [46.5966, 7.9075],
        "aliases": [
          "valley hostel",
          "fuhren 423",
          "communal kitchen",
          "hostel",
          "hostel's fully equipped communal kitchen"
        ],
        "photos": [
          {
            "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cb/Staubbachfall_in_Lauterbrunnen_BE.jpg/1280px-Staubbachfall_in_Lauterbrunnen_BE.jpg",
            "caption": "Valley Hostel Surroundings - Lauterbrunnen Village Alpine Panorama"
          },
          {
            "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5f/Lauterbrunnen_-_Staubbachfall.jpg/1280px-Lauterbrunnen_-_Staubbachfall.jpg",
            "caption": "Hostel Balcony View - Staubbach Falls Waterfall Face"
          },
          {
            "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ae/Staubbachfall_-_Lauterbrunnen_BE_-_Winter_2020_01.jpg/1280px-Staubbachfall_-_Lauterbrunnen_BE_-_Winter_2020_01.jpg",
            "caption": "Lauterbrunnen Village Winter Street - Steps from Valley Hostel"
          },
          {
            "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f6/Staubbachfall_-_Lauterbrunnen_BE_-_Winter_2020_02.jpg/1280px-Staubbachfall_-_Lauterbrunnen_BE_-_Winter_2020_02.jpg",
            "caption": "Valley Floor Trail - Peaceful Alpine Evening Ambience"
          },
          {
            "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0f/Staubbachfall_-_Lauterbrunnen_BE_-_Winter_2020_03.jpg/1280px-Staubbachfall_-_Lauterbrunnen_BE_-_Winter_2020_03.jpg",
            "caption": "Snow-Covered Swiss Chalets - Lauterbrunnen Traditional Architecture"
          }
        ],
        "images": [
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cb/Staubbachfall_in_Lauterbrunnen_BE.jpg/1280px-Staubbachfall_in_Lauterbrunnen_BE.jpg",
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5f/Lauterbrunnen_-_Staubbachfall.jpg/1280px-Lauterbrunnen_-_Staubbachfall.jpg",
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ae/Staubbachfall_-_Lauterbrunnen_BE_-_Winter_2020_01.jpg/1280px-Staubbachfall_-_Lauterbrunnen_BE_-_Winter_2020_01.jpg",
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f6/Staubbachfall_-_Lauterbrunnen_BE_-_Winter_2020_02.jpg/1280px-Staubbachfall_-_Lauterbrunnen_BE_-_Winter_2020_02.jpg",
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0f/Staubbachfall_-_Lauterbrunnen_BE_-_Winter_2020_03.jpg/1280px-Staubbachfall_-_Lauterbrunnen_BE_-_Winter_2020_03.jpg"
        ]
      }
    ]
  },
  {
    "dayNum": 12,
    "day": "Day 12",
    "date": "26 Dec 2026",
    "city": "Grindelwald & Kleine Scheidegg",
    "country": "Switzerland",
    "countryFilter": "switzerland",
    "badgeClass": "badge-ch",
    "title": "Grindelwald-First Cliff Walk & Kleine Scheidegg (CLOY Mountain Pass)",
    "stay": "Valley Hostel, Lauterbrunnen (Night 2 of 4)",
    "transit": "🚆 Wengernalpbahn / BOB + 🚠 First Gondola + 🚂 Historic Cogwheel Train",
    "coords": [46.5853, 7.9609],
    "sights": [
      {
        "name": "First Cliff Walk by Tissot (Mount First, 2,168m)",
        "category": "🏔️ Alpine Suspension Walkway",
        "time": "Morning (09:30 – 13:00)",
        "location": "First 2168m, 3818 Grindelwald, Switzerland",
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/db/First_Cliff_Walk_Felsen.jpg/1280px-First_Cliff_Walk_Felsen.jpg",
        "admission": "Free walkway (Gondola ticket required)",
        "isPaid": false,
        "hours": "08:30–16:30 (Daily in winter)",
        "desc": "Thrilling steel walkway curving around the dramatic limestone cliff face of Mount First (2,168m) with a 45m cantilever bridge directly facing the iconic snowy Eiger North Face.",
        "mapsQuery": "First Cliff Walk by Tissot Grindelwald",
        "coords": [46.6588, 8.0538],
        "aliases": [
          "first cliff walk",
          "cliff walk",
          "tissot",
          "first gondola",
          "mount first",
          "cliff walkway",
          "suspension bridge",
          "eiger north face",
          "cantilever abyss",
          "suspended first cliff walk"
        ],
        "photos": [
          {
            "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/db/First_Cliff_Walk_Felsen.jpg/1280px-First_Cliff_Walk_Felsen.jpg",
            "caption": "First Cliff Walk by Tissot (Mount First, 2,168m) - Featured Landmark View"
          },
          {
            "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/44/First_Cliff_Walk.jpg/1280px-First_Cliff_Walk.jpg",
            "caption": "First Cliff Walk by Tissot (Mount First, 2,168m) - Wide-Angle Perspective"
          },
          {
            "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ec/First_Cliff_Walk_Steg.jpg/1280px-First_Cliff_Walk_Steg.jpg",
            "caption": "First Cliff Walk by Tissot (Mount First, 2,168m) - Architectural Detail"
          },
          {
            "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fa/First_Cliff_Walk_Br%C3%BCcke.jpg/1280px-First_Cliff_Walk_Br%C3%BCcke.jpg",
            "caption": "First Cliff Walk by Tissot (Mount First, 2,168m) - Atmospheric Angle"
          },
          {
            "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f0/Cliff-Walk_First_Grindelwald._Sicht_auf_den_Eiger.jpg/1280px-Cliff-Walk_First_Grindelwald._Sicht_auf_den_Eiger.jpg",
            "caption": "First Cliff Walk by Tissot (Mount First, 2,168m) - Alternate Vantage Point"
          }
        ],
        "images": [
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/db/First_Cliff_Walk_Felsen.jpg/1280px-First_Cliff_Walk_Felsen.jpg",
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/44/First_Cliff_Walk.jpg/1280px-First_Cliff_Walk.jpg",
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ec/First_Cliff_Walk_Steg.jpg/1280px-First_Cliff_Walk_Steg.jpg",
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fa/First_Cliff_Walk_Br%C3%BCcke.jpg/1280px-First_Cliff_Walk_Br%C3%BCcke.jpg",
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f0/Cliff-Walk_First_Grindelwald._Sicht_auf_den_Eiger.jpg/1280px-Cliff-Walk_First_Grindelwald._Sicht_auf_den_Eiger.jpg"
        ]
      },
      {
        "name": "Kleine Scheidegg High Alpine Pass (CLOY Filming Location)",
        "category": "🚂 Historic Cogwheel Pass (2,061m)",
        "time": "Afternoon (13:30 – 16:30)",
        "location": "Kleine Scheidegg, 3823 Lauterbrunnen, Switzerland",
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/37/Kleine_Scheidegg_Eiger_Nordwand_%285057057931%29.jpg/1280px-Kleine_Scheidegg_Eiger_Nordwand_%285057057931%29.jpg",
        "admission": "Included in transit / cogwheel rail",
        "isPaid": false,
        "hours": "Wengernalpbahn active daily",
        "desc": "High alpine pass at 2,061m directly below the sheer Eiger North Face, where Captain Ri and Yoon Se-ri watched paragliders cruise over snowy Swiss peaks in Crash Landing on You.",
        "mapsQuery": "Kleine Scheidegg Switzerland",
        "coords": [46.5853, 7.9609],
        "aliases": [
          "kleine scheidegg",
          "cloy",
          "crash landing on you",
          "paragliders",
          "cogwheel train",
          "wengernalpbahn",
          "scheidegg",
          "high pass",
          "mountain pass",
          "high mountain pass"
        ],
        "photos": [
          {
            "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/37/Kleine_Scheidegg_Eiger_Nordwand_%285057057931%29.jpg/1280px-Kleine_Scheidegg_Eiger_Nordwand_%285057057931%29.jpg",
            "caption": "Kleine Scheidegg High Pass directly beneath Eiger North Face - Featured View"
          },
          {
            "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6f/Jungfraubahn_train_at_the_Kleine_Scheidegg_railway_station.jpg/1280px-Jungfraubahn_train_at_the_Kleine_Scheidegg_railway_station.jpg",
            "caption": "Historic Cogwheel Rail Station at Kleine Scheidegg - Alpine Platform"
          },
          {
            "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ed/Eiger-KleineScheidegg.jpg/1280px-Eiger-KleineScheidegg.jpg",
            "caption": "Kleine Scheidegg Alpine Meadows & Glacial Slopes - CLOY Panorama"
          },
          {
            "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a5/HPS_Kleine_Scheidegg_03.JPG/1280px-HPS_Kleine_Scheidegg_03.JPG",
            "caption": "Wengernalpbahn Mountain Train climbing to Kleine Scheidegg Pass"
          },
          {
            "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fb/20060704.Kleine_Scheidegg.-024.jpg/1280px-20060704.Kleine_Scheidegg.-024.jpg",
            "caption": "Kleine Scheidegg Grand Mountain Hotel & Alpine Crossroads"
          }
        ],
        "images": [
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/37/Kleine_Scheidegg_Eiger_Nordwand_%285057057931%29.jpg/1280px-Kleine_Scheidegg_Eiger_Nordwand_%285057057931%29.jpg",
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6f/Jungfraubahn_train_at_the_Kleine_Scheidegg_railway_station.jpg/1280px-Jungfraubahn_train_at_the_Kleine_Scheidegg_railway_station.jpg",
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ed/Eiger-KleineScheidegg.jpg/1280px-Eiger-KleineScheidegg.jpg",
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a5/HPS_Kleine_Scheidegg_03.JPG/1280px-HPS_Kleine_Scheidegg_03.JPG",
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fb/20060704.Kleine_Scheidegg.-024.jpg/1280px-20060704.Kleine_Scheidegg.-024.jpg"
        ]
      },
      {
        "name": "Grindelwald Alpine Valley & Eiger North Face",
        "category": "🏡 Swiss Alpine Village & Peaks",
        "time": "Midday (13:00 – 14:30)",
        "location": "Dorfstrasse, 3818 Grindelwald, Switzerland",
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/80/Eiger_met_Grindelwald%2C_Zwitserland.jpg/1280px-Eiger_met_Grindelwald%2C_Zwitserland.jpg",
        "admission": "Free ($0 AUD)",
        "isPaid": false,
        "hours": "Open 24/7",
        "desc": "Fairytale glacier village nestled beneath the sheer 1,800m north face of the Eiger, dotted with traditional timber chalets and scenic snowy slopes.",
        "mapsQuery": "Grindelwald Switzerland",
        "coords": [46.6242, 8.0414],
        "aliases": [
          "grindelwald",
          "eiger",
          "eiger north face",
          "grindelwald village",
          "alpine valley",
          "chalets",
          "swiss chalets"
        ],
        "photos": [
          {
            "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/80/Eiger_met_Grindelwald%2C_Zwitserland.jpg/1280px-Eiger_met_Grindelwald%2C_Zwitserland.jpg",
            "caption": "Grindelwald Alpine Valley & Eiger North Face - Featured Landmark View"
          },
          {
            "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d8/Grindelwald%2C_with_Eiger%2C_Bernese_Oberland%2C_Switzerland-LCCN2001701161.jpg/1280px-Grindelwald%2C_with_Eiger%2C_Bernese_Oberland%2C_Switzerland-LCCN2001701161.jpg",
            "caption": "Grindelwald Alpine Valley & Eiger North Face - Wide-Angle Perspective"
          },
          {
            "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/50/Grindelwald%2C_Hotel_Eiger%2C_Bernese_Oberland%2C_Switzerland-LCCN2001701169.jpg/1280px-Grindelwald%2C_Hotel_Eiger%2C_Bernese_Oberland%2C_Switzerland-LCCN2001701169.jpg",
            "caption": "Grindelwald Alpine Valley & Eiger North Face - Architectural Detail"
          },
          {
            "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2f/Grindelwald%2C_church_and_Eiger%2C_Bernese_Oberland%2C_Switzerland-LCCN2001701172.jpg/1280px-Grindelwald%2C_church_and_Eiger%2C_Bernese_Oberland%2C_Switzerland-LCCN2001701172.jpg",
            "caption": "Grindelwald Alpine Valley & Eiger North Face - Atmospheric Angle"
          },
          {
            "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/18/Swisstopo_Eiger_-_Grindelwald.jpg/1280px-Swisstopo_Eiger_-_Grindelwald.jpg",
            "caption": "Grindelwald Alpine Valley & Eiger North Face - Alternate Vantage Point"
          }
        ],
        "images": [
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/80/Eiger_met_Grindelwald%2C_Zwitserland.jpg/1280px-Eiger_met_Grindelwald%2C_Zwitserland.jpg",
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d8/Grindelwald%2C_with_Eiger%2C_Bernese_Oberland%2C_Switzerland-LCCN2001701161.jpg/1280px-Grindelwald%2C_with_Eiger%2C_Bernese_Oberland%2C_Switzerland-LCCN2001701161.jpg",
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/50/Grindelwald%2C_Hotel_Eiger%2C_Bernese_Oberland%2C_Switzerland-LCCN2001701169.jpg/1280px-Grindelwald%2C_Hotel_Eiger%2C_Bernese_Oberland%2C_Switzerland-LCCN2001701169.jpg",
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2f/Grindelwald%2C_church_and_Eiger%2C_Bernese_Oberland%2C_Switzerland-LCCN2001701172.jpg/1280px-Grindelwald%2C_church_and_Eiger%2C_Bernese_Oberland%2C_Switzerland-LCCN2001701172.jpg",
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/18/Swisstopo_Eiger_-_Grindelwald.jpg/1280px-Swisstopo_Eiger_-_Grindelwald.jpg"
        ]
      }
    ]
  },
  {
    "dayNum": 13,
    "day": "Day 13",
    "date": "27 Dec 2026",
    "city": "Lake Brienz & Iseltwald",
    "country": "Switzerland",
    "countryFilter": "switzerland",
    "badgeClass": "badge-ch",
    "title": "Lake Brienz Shoreline & Iseltwald Crash Landing on You Piano Pier",
    "stay": "Valley Hostel, Lauterbrunnen (Night 3 of 4)",
    "transit": "🚆 BOB Train (Lauterbrunnen ➔ Interlaken) + 🚌 PostBus 103 (Lake Brienz)",
    "coords": [46.7115, 7.9628],
    "sights": [
      {
        "name": "Lake Brienz Turquoise Shoreline & Mountain Reflections",
        "category": "🌊 Glacial Alpine Lake",
        "time": "Morning (09:30 – 12:00)",
        "location": "Lake Brienz, 3807 Iseltwald, Switzerland",
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/5501-5504_-_Iseltwald%2C_Ringgenberg%2C_Niederried%2C_and_Oberried_on_the_Brienzersee.jpg/1280px-5501-5504_-_Iseltwald%2C_Ringgenberg%2C_Niederried%2C_and_Oberried_on_the_Brienzersee.jpg",
        "admission": "Free ($0 AUD)",
        "isPaid": false,
        "hours": "Open 24/7 (PostBus 103 hourly)",
        "desc": "Breathtaking glacial lake famous for its luminous turquoise waters and sheer mountain slopes reflecting snow-capped peaks along PostBus Route 103.",
        "mapsQuery": "Lake Brienz Switzerland",
        "coords": [46.7115, 7.9628],
        "aliases": [
          "lake brienz",
          "brienzersee",
          "turquoise shoreline",
          "postbus 103",
          "lake brienz shoreline",
          "mountain reflections",
          "shoreline"
        ],
        "photos": [
          {
            "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/5501-5504_-_Iseltwald%2C_Ringgenberg%2C_Niederried%2C_and_Oberried_on_the_Brienzersee.jpg/1280px-5501-5504_-_Iseltwald%2C_Ringgenberg%2C_Niederried%2C_and_Oberried_on_the_Brienzersee.jpg",
            "caption": "Lake Brienz Shoreline & Alpine Peaks - Featured Panoramic View"
          },
          {
            "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b0/5505_-_Iseltwald_-_Brienzersee.JPG/1280px-5505_-_Iseltwald_-_Brienzersee.JPG",
            "caption": "Turquoise Glacial Water along Lake Brienz - Lakeshore Road"
          },
          {
            "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3a/5506_-_Iseltwald_-_Brienzersee.JPG/1280px-5506_-_Iseltwald_-_Brienzersee.JPG",
            "caption": "Snow-Kissed Mountains Rising above Lake Brienz - Reflections"
          },
          {
            "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d1/5507_-_Iseltwald_-_Brienzersee.JPG/1280px-5507_-_Iseltwald_-_Brienzersee.JPG",
            "caption": "PostBus 103 Route wrapping around Lake Brienz - Coastal Vista"
          },
          {
            "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b4/5508_-_Iseltwald_-_Brienzersee.JPG/1280px-5508_-_Iseltwald_-_Brienzersee.JPG",
            "caption": "Winter Atmosphere on Lake Brienz - Serene Alpine Shoreline"
          }
        ],
        "images": [
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/5501-5504_-_Iseltwald%2C_Ringgenberg%2C_Niederried%2C_and_Oberried_on_the_Brienzersee.jpg/1280px-5501-5504_-_Iseltwald%2C_Ringgenberg%2C_Niederried%2C_and_Oberried_on_the_Brienzersee.jpg",
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b0/5505_-_Iseltwald_-_Brienzersee.JPG/1280px-5505_-_Iseltwald_-_Brienzersee.JPG",
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3a/5506_-_Iseltwald_-_Brienzersee.JPG/1280px-5506_-_Iseltwald_-_Brienzersee.JPG",
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d1/5507_-_Iseltwald_-_Brienzersee.JPG/1280px-5507_-_Iseltwald_-_Brienzersee.JPG",
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b4/5508_-_Iseltwald_-_Brienzersee.JPG/1280px-5508_-_Iseltwald_-_Brienzersee.JPG"
        ]
      },
      {
        "name": "Iseltwald Landing Stage (Lake Brienz CLOY Pier)",
        "category": "🎬 Scenic Lake Landmark",
        "time": "Afternoon (12:30 – 16:30)",
        "location": "Am Strand 1, 3807 Iseltwald, Switzerland",
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/5501-5504_-_Iseltwald%2C_Ringgenberg%2C_Niederried%2C_and_Oberried_on_the_Brienzersee.jpg/1280px-5501-5504_-_Iseltwald%2C_Ringgenberg%2C_Niederried%2C_and_Oberried_on_the_Brienzersee.jpg",
        "admission": "5 CHF (~A$9 AUD)",
        "isPaid": true,
        "hours": "Open 24/7 (Card turnstile access)",
        "desc": "Iconic wooden jetty extending into the pristine, mirror-like turquoise waters of Lake Brienz made world-famous by the drama series Crash Landing on You.",
        "mapsQuery": "Iseltwald Landing Stage Lake Brienz",
        "coords": [46.7118, 7.9628],
        "aliases": [
          "iseltwald",
          "lake brienz",
          "cloy",
          "cloy pier",
          "landing stage",
          "pier",
          "crash landing on you",
          "crash landing",
          "brienz",
          "pier crash landing on you",
          "dock",
          "piano theme",
          "piano pier",
          "turnstile"
        ],
        "photos": [
          {
            "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/5501-5504_-_Iseltwald%2C_Ringgenberg%2C_Niederried%2C_and_Oberried_on_the_Brienzersee.jpg/1280px-5501-5504_-_Iseltwald%2C_Ringgenberg%2C_Niederried%2C_and_Oberried_on_the_Brienzersee.jpg",
            "caption": "Iseltwald Landing Stage (Lake Brienz CLOY Pier) - Featured Landmark View"
          },
          {
            "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b0/5505_-_Iseltwald_-_Brienzersee.JPG/1280px-5505_-_Iseltwald_-_Brienzersee.JPG",
            "caption": "Iseltwald Landing Stage (Lake Brienz CLOY Pier) - Wide-Angle Perspective"
          },
          {
            "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3a/5506_-_Iseltwald_-_Brienzersee.JPG/1280px-5506_-_Iseltwald_-_Brienzersee.JPG",
            "caption": "Iseltwald Landing Stage (Lake Brienz CLOY Pier) - Architectural Detail"
          },
          {
            "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d1/5507_-_Iseltwald_-_Brienzersee.JPG/1280px-5507_-_Iseltwald_-_Brienzersee.JPG",
            "caption": "Iseltwald Landing Stage (Lake Brienz CLOY Pier) - Atmospheric Angle"
          },
          {
            "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b4/5508_-_Iseltwald_-_Brienzersee.JPG/1280px-5508_-_Iseltwald_-_Brienzersee.JPG",
            "caption": "Iseltwald Landing Stage (Lake Brienz CLOY Pier) - Alternate Vantage Point"
          }
        ],
        "images": [
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/5501-5504_-_Iseltwald%2C_Ringgenberg%2C_Niederried%2C_and_Oberried_on_the_Brienzersee.jpg/1280px-5501-5504_-_Iseltwald%2C_Ringgenberg%2C_Niederried%2C_and_Oberried_on_the_Brienzersee.jpg",
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b0/5505_-_Iseltwald_-_Brienzersee.JPG/1280px-5505_-_Iseltwald_-_Brienzersee.JPG",
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3a/5506_-_Iseltwald_-_Brienzersee.JPG/1280px-5506_-_Iseltwald_-_Brienzersee.JPG",
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d1/5507_-_Iseltwald_-_Brienzersee.JPG/1280px-5507_-_Iseltwald_-_Brienzersee.JPG",
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b4/5508_-_Iseltwald_-_Brienzersee.JPG/1280px-5508_-_Iseltwald_-_Brienzersee.JPG"
        ]
      },
      {
        "name": "Traditional Swiss Cheese Fondue in Interlaken",
        "category": "🫕 Authentic Alpine Dining",
        "time": "Evening (17:30 – 20:30)",
        "location": "Höheweg, 3800 Interlaken, Switzerland",
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/87/Interlaken_001.JPG/1280px-Interlaken_001.JPG",
        "admission": "Dining / Meal",
        "isPaid": true,
        "hours": "Open daily for dinner",
        "desc": "Classic Swiss fondue dinner in the historic streets of Interlaken with bubbling Gruyère and Emmentaler cheese, crusty artisan bread, and roesti.",
        "mapsQuery": "Interlaken Switzerland",
        "coords": [46.6863, 7.8632],
        "aliases": [
          "fondue",
          "swiss fondue",
          "cheese fondue",
          "interlaken",
          "traditional, warm swiss cheese fondue dinner"
        ],
        "photos": [
          {
            "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/87/Interlaken_001.JPG/1280px-Interlaken_001.JPG",
            "caption": "Interlaken Town Promenade & Alpine Dining - Featured View"
          },
          {
            "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/38/Interlaken_-_panoramio_%283%29.jpg/1280px-Interlaken_-_panoramio_%283%29.jpg",
            "caption": "Interlaken Historic Centre - Evening Ambience"
          },
          {
            "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cb/Staubbachfall_in_Lauterbrunnen_BE.jpg/1280px-Staubbachfall_in_Lauterbrunnen_BE.jpg",
            "caption": "Bernese Oberland Alpine Chalets & Dining"
          },
          {
            "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b8/Interlaken_Ost_Station.jpg/1280px-Interlaken_Ost_Station.jpg",
            "caption": "Interlaken Night Connections - Gateway to the Jungfrau"
          },
          {
            "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/5501-5504_-_Iseltwald%2C_Ringgenberg%2C_Niederried%2C_and_Oberried_on_the_Brienzersee.jpg/1280px-5501-5504_-_Iseltwald%2C_Ringgenberg%2C_Niederried%2C_and_Oberried_on_the_Brienzersee.jpg",
            "caption": "Lake Brienz Twilight View from Interlaken"
          }
        ],
        "images": [
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/87/Interlaken_001.JPG/1280px-Interlaken_001.JPG",
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/38/Interlaken_-_panoramio_%283%29.jpg/1280px-Interlaken_-_panoramio_%283%29.jpg",
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cb/Staubbachfall_in_Lauterbrunnen_BE.jpg/1280px-Staubbachfall_in_Lauterbrunnen_BE.jpg",
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b8/Interlaken_Ost_Station.jpg/1280px-Interlaken_Ost_Station.jpg",
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/5501-5504_-_Iseltwald%2C_Ringgenberg%2C_Niederried%2C_and_Oberried_on_the_Brienzersee.jpg/1280px-5501-5504_-_Iseltwald%2C_Ringgenberg%2C_Niederried%2C_and_Oberried_on_the_Brienzersee.jpg"
        ]
      }
    ]
  },
  {
    "dayNum": 14,
    "day": "Day 14",
    "date": "28 Dec 2026",
    "city": "Mürren & Schilthorn Peak",
    "country": "Switzerland",
    "countryFilter": "switzerland",
    "badgeClass": "badge-ch",
    "title": "Car-Free Mürren & Schilthorn Piz Gloria 360° Alpine Summit",
    "stay": "Valley Hostel, Lauterbrunnen (Night 4 of 4)",
    "transit": "🚠 Grütschalp Cable Car + 🚂 BLM Mountain Rail + 🚠 Schilthorn Aerial Cableway",
    "coords": [46.5592, 7.8354],
    "sights": [
      {
        "name": "Mürren Car-Free Alpine Village (1,638m)",
        "category": "🏔️ Traditional Mountain Village",
        "time": "Daytime (09:00 – 11:30)",
        "location": "3825 Mürren, Switzerland",
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fb/Lauterbrunnen_Valley_and_Murren_Railway%2C_Bernese_Oberland%2C_Switzerland-LCCN2001701218.jpg/1280px-Lauterbrunnen_Valley_and_Murren_Railway%2C_Bernese_Oberland%2C_Switzerland-LCCN2001701218.jpg",
        "admission": "Free ($0 AUD)",
        "isPaid": false,
        "hours": "BLM Transit 06:00–20:30 (365 Days)",
        "desc": "Peaceful car-free clifftop village perched high above the Lauterbrunnen valley, commanding uninterrupted panoramas of the Eiger, Mönch, and Jungfrau peaks.",
        "mapsQuery": "Muerren Switzerland",
        "coords": [46.5594, 7.8927],
        "aliases": [
          "muerren",
          "mürren",
          "blm",
          "gruetschalp",
          "grütschalp",
          "mountain railway",
          "car-free village",
          "clifftop village",
          "car-free cliffside village of mürren"
        ],
        "photos": [
          {
            "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fb/Lauterbrunnen_Valley_and_Murren_Railway%2C_Bernese_Oberland%2C_Switzerland-LCCN2001701218.jpg/1280px-Lauterbrunnen_Valley_and_Murren_Railway%2C_Bernese_Oberland%2C_Switzerland-LCCN2001701218.jpg",
            "caption": "Mürren Car-Free Alpine Village (1,638m) - Featured Landmark View"
          },
          {
            "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3d/Murren%2C_general_view%2C_Bernese_Oberland%2C_Switzerland-LCCN2001701229.jpg/1280px-Murren%2C_general_view%2C_Bernese_Oberland%2C_Switzerland-LCCN2001701229.jpg",
            "caption": "Mürren Car-Free Alpine Village (1,638m) - Wide-Angle Perspective"
          },
          {
            "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6f/Murren%2C_general_view%2C_Bernese_Oberland%2C_Switzerland-LCCN2001701230.jpg/1280px-Murren%2C_general_view%2C_Bernese_Oberland%2C_Switzerland-LCCN2001701230.jpg",
            "caption": "Mürren Car-Free Alpine Village (1,638m) - Architectural Detail"
          },
          {
            "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/ff/Murren%2C_Grutschalp%2C_I%2C_Eiger%2C_Monch_and_Jungfrau%2C_Bernese_Oberland%2C_Switzerland-LCCN2001701231.jpg/1280px-Murren%2C_Grutschalp%2C_I%2C_Eiger%2C_Monch_and_Jungfrau%2C_Bernese_Oberland%2C_Switzerland-LCCN2001701231.jpg",
            "caption": "Mürren Car-Free Alpine Village (1,638m) - Atmospheric Angle"
          },
          {
            "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/17/Murren%2C_Grutschalp%2C_II%2C_Eiger%2C_Monch_and_Jungfrau%2C_Bernese_Oberland%2C_Switzerland-LCCN2001701232.jpg/1280px-Murren%2C_Grutschalp%2C_II%2C_Eiger%2C_Monch_and_Jungfrau%2C_Bernese_Oberland%2C_Switzerland-LCCN2001701232.jpg",
            "caption": "Mürren Car-Free Alpine Village (1,638m) - Alternate Vantage Point"
          }
        ],
        "images": [
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fb/Lauterbrunnen_Valley_and_Murren_Railway%2C_Bernese_Oberland%2C_Switzerland-LCCN2001701218.jpg/1280px-Lauterbrunnen_Valley_and_Murren_Railway%2C_Bernese_Oberland%2C_Switzerland-LCCN2001701218.jpg",
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3d/Murren%2C_general_view%2C_Bernese_Oberland%2C_Switzerland-LCCN2001701229.jpg/1280px-Murren%2C_general_view%2C_Bernese_Oberland%2C_Switzerland-LCCN2001701229.jpg",
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6f/Murren%2C_general_view%2C_Bernese_Oberland%2C_Switzerland-LCCN2001701230.jpg/1280px-Murren%2C_general_view%2C_Bernese_Oberland%2C_Switzerland-LCCN2001701230.jpg",
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/ff/Murren%2C_Grutschalp%2C_I%2C_Eiger%2C_Monch_and_Jungfrau%2C_Bernese_Oberland%2C_Switzerland-LCCN2001701231.jpg/1280px-Murren%2C_Grutschalp%2C_I%2C_Eiger%2C_Monch_and_Jungfrau%2C_Bernese_Oberland%2C_Switzerland-LCCN2001701231.jpg",
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/17/Murren%2C_Grutschalp%2C_II%2C_Eiger%2C_Monch_and_Jungfrau%2C_Bernese_Oberland%2C_Switzerland-LCCN2001701232.jpg/1280px-Murren%2C_Grutschalp%2C_II%2C_Eiger%2C_Monch_and_Jungfrau%2C_Bernese_Oberland%2C_Switzerland-LCCN2001701232.jpg"
        ]
      },
      {
        "name": "Schilthorn Summit Piz Gloria (2,970m 360° Panorama)",
        "category": "🏔️ High Alpine Summit & James Bond 007",
        "time": "Daytime (11:30 – 16:00)",
        "location": "Schilthorn, 3825 Mürren, Switzerland",
        "image": "https://upload.wikimedia.org/wikipedia/commons/3/39/Schilthorn_-_Piz_Gloria.jpg",
        "admission": "Mountain cableway ticket",
        "isPaid": true,
        "hours": "Cableway 07:55–16:55 (Weather permitting)",
        "desc": "Iconic 2,970-meter summit featuring revolving restaurant Piz Gloria, 007 Spy World exhibition, and a 360-degree panorama of over 200 Alpine summits including Eiger, Mönch, and Jungfrau.",
        "mapsQuery": "Schilthorn Piz Gloria Switzerland",
        "coords": [46.5574, 7.8353],
        "aliases": [
          "schilthorn",
          "piz gloria",
          "360-degree",
          "360 degree",
          "summit",
          "007",
          "james bond",
          "birg",
          "schilthorn summit",
          "full 360-degree view",
          "panoramic viewpoint",
          "alpine panorama"
        ],
        "photos": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/3/39/Schilthorn_-_Piz_Gloria.jpg",
            "caption": "Schilthorn Piz Gloria Revolving Restaurant (2,970m) - Featured Landmark View"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/b/bb/Piz_Gloria%2C_Schilthorn_%28_Ank_Kumar%29_01.jpg",
            "caption": "Piz Gloria Summit Observation Terrace - 360° High Alpine Panorama"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/2/28/Piz_Gloria%2C_Schilthorn_%28_Ank_Kumar%29_02.jpg",
            "caption": "Eiger, Mönch and Jungfrau Peaks viewed from Schilthorn Summit"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/e/eb/Piz_Gloria%2C_Schilthorn_%28_Ank_Kumar%29_04.jpg",
            "caption": "Aerial Cableway Platform ascending to Schilthorn Summit"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/8/89/Piz_Gloria%2C_The_revolving_restaurant_at_Schilthorn%2C_Swiss_Alps_%28Ank_Kumar%29_01.jpg",
            "caption": "James Bond 007 Heritage at Piz Gloria Revolving Restaurant"
          }
        ],
        "images": [
          "https://upload.wikimedia.org/wikipedia/commons/3/39/Schilthorn_-_Piz_Gloria.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/b/bb/Piz_Gloria%2C_Schilthorn_%28_Ank_Kumar%29_01.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/2/28/Piz_Gloria%2C_Schilthorn_%28_Ank_Kumar%29_02.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/e/eb/Piz_Gloria%2C_Schilthorn_%28_Ank_Kumar%29_04.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/8/89/Piz_Gloria%2C_The_revolving_restaurant_at_Schilthorn%2C_Swiss_Alps_%28Ank_Kumar%29_01.jpg"
        ]
      }
    ]
  },
  {
    "dayNum": 15,
    "day": "Day 15",
    "date": "29 Dec 2026",
    "city": "Lauterbrunnen ➔ Bern ➔ Paris",
    "country": "Transit",
    "countryFilter": "france",
    "badgeClass": "badge-transit",
    "title": "Bern Switzerland Temple Session, UNESCO Old Town & High-Speed TGV Lyria to Paris",
    "stay": "Break & Home Paris Italie (CONFIRMED)",
    "transit": "🚆 BOB / SBB IC + 🚆 S-Bahn S3/S4 + 🚄 High-Speed TGV Lyria + 🚇 Paris Metro Line 14",
    "coords": [47.0022, 7.4582],
    "sights": [
      {
        "name": "Bern Switzerland LDS Temple",
        "category": "🏛️ Sacred LDS Temple (First in Europe)",
        "time": "Morning (11:00 – 13:30)",
        "location": "Tempelstrasse 2, 3052 Zollikofen, Switzerland",
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c4/Bern_Tempel_6_September_2006.JPG/1280px-Bern_Tempel_6_September_2006.JPG",
        "admission": "Free ($0 AUD) · Sacred Endowment Session & Grounds",
        "isPaid": false,
        "hours": "Proxy Endowment Session (11:00 AM – 01:30 PM)",
        "desc": "Dedicated in 1955 as the very first Latter-day Saint temple in Europe, featuring a soaring single spire crowned by the angel Moroni against a dramatic alpine backdrop.",
        "mapsQuery": "Bern Switzerland Temple Tempelstrasse 2 Zollikofen",
        "coords": [46.9886, 7.4589],
        "aliases": [
          "bern switzerland temple",
          "bern temple",
          "zollikofen",
          "temple session",
          "proxy endowment session",
          "sacred temple grounds",
          "bern switzerland temple session"
        ],
        "photos": [
          {
            "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c4/Bern_Tempel_6_September_2006.JPG/1280px-Bern_Tempel_6_September_2006.JPG",
            "caption": "Bern Switzerland LDS Temple - Featured Landmark View"
          },
          {
            "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/db/LDS_Bern_Switzerland_Temple.jpg/1280px-LDS_Bern_Switzerland_Temple.jpg",
            "caption": "Bern Switzerland LDS Temple - Wide-Angle Perspective"
          },
          {
            "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/85/TempleSuisseHiv1.JPG/1280px-TempleSuisseHiv1.JPG",
            "caption": "Bern Switzerland LDS Temple - Architectural Detail"
          },
          {
            "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fd/MORONI2.JPG/1280px-MORONI2.JPG",
            "caption": "Bern Switzerland LDS Temple - Atmospheric Angle"
          },
          {
            "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/62/Bern_Switzerland_Temple.jpg/1280px-Bern_Switzerland_Temple.jpg",
            "caption": "Bern Switzerland LDS Temple - Alternate Vantage Point"
          }
        ],
        "images": [
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c4/Bern_Tempel_6_September_2006.JPG/1280px-Bern_Tempel_6_September_2006.JPG",
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/db/LDS_Bern_Switzerland_Temple.jpg/1280px-LDS_Bern_Switzerland_Temple.jpg",
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/85/TempleSuisseHiv1.JPG/1280px-TempleSuisseHiv1.JPG",
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fd/MORONI2.JPG/1280px-MORONI2.JPG",
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/62/Bern_Switzerland_Temple.jpg/1280px-Bern_Switzerland_Temple.jpg"
        ]
      },
      {
        "name": "Bern UNESCO Old Town & Covered Sandstone Arcades (Lauben)",
        "category": "🏛️ UNESCO World Heritage Arcades",
        "time": "Afternoon (14:00 – 17:00)",
        "location": "Kramgasse, 3011 Bern, Switzerland",
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bf/CH_Bern_Kramgasse.jpg/1280px-CH_Bern_Kramgasse.jpg",
        "admission": "Free ($0 AUD)",
        "isPaid": false,
        "hours": "Open 24/7 (Sheltered promenade)",
        "desc": "6 kilometers of continuous 15th-century covered sandstone arcades (Lauben) providing a sheltered, atmospheric promenade through Bern's historic medieval core.",
        "mapsQuery": "Kramgasse Bern Switzerland",
        "coords": [46.948, 7.45],
        "aliases": [
          "lauben",
          "arcades",
          "covered arcades",
          "sandstone arcades",
          "bern old town",
          "old town",
          "unesco old town",
          "tour bern unesco old town"
        ],
        "photos": [
          {
            "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bf/CH_Bern_Kramgasse.jpg/1280px-CH_Bern_Kramgasse.jpg",
            "caption": "Bern UNESCO Old Town & Covered Sandstone Arcades (Lauben) - Featured Landmark View"
          },
          {
            "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b5/Kramgasse%2C_Bern_1.jpg/1280px-Kramgasse%2C_Bern_1.jpg",
            "caption": "Bern UNESCO Old Town & Covered Sandstone Arcades (Lauben) - Wide-Angle Perspective"
          },
          {
            "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/87/The_Zytglogge_clock_tower.jpg/1280px-The_Zytglogge_clock_tower.jpg",
            "caption": "Bern UNESCO Old Town & Covered Sandstone Arcades (Lauben) - Architectural Detail"
          },
          {
            "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d5/Bern_1993_-_Kramgasse_-_Clock.jpg/1280px-Bern_1993_-_Kramgasse_-_Clock.jpg",
            "caption": "Bern UNESCO Old Town & Covered Sandstone Arcades (Lauben) - Atmospheric Angle"
          },
          {
            "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d0/Bern_1993_-_Kramgasse_-_View_from_Einstein_House_Window.jpg/1280px-Bern_1993_-_Kramgasse_-_View_from_Einstein_House_Window.jpg",
            "caption": "Bern UNESCO Old Town & Covered Sandstone Arcades (Lauben) - Alternate Vantage Point"
          }
        ],
        "images": [
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bf/CH_Bern_Kramgasse.jpg/1280px-CH_Bern_Kramgasse.jpg",
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b5/Kramgasse%2C_Bern_1.jpg/1280px-Kramgasse%2C_Bern_1.jpg",
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/87/The_Zytglogge_clock_tower.jpg/1280px-The_Zytglogge_clock_tower.jpg",
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d5/Bern_1993_-_Kramgasse_-_Clock.jpg/1280px-Bern_1993_-_Kramgasse_-_Clock.jpg",
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d0/Bern_1993_-_Kramgasse_-_View_from_Einstein_House_Window.jpg/1280px-Bern_1993_-_Kramgasse_-_View_from_Einstein_House_Window.jpg"
        ]
      },
      {
        "name": "Zytglogge Astronomical Clock Tower",
        "category": "🕰️ Medieval Astronomical Clock",
        "time": "Afternoon (14:30 – 16:30)",
        "location": "Bim Zytglogge 1, 3011 Bern, Switzerland",
        "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/17/Zytglogge_01.jpg/1280px-Zytglogge_01.jpg",
        "admission": "Free ($0 AUD)",
        "isPaid": false,
        "hours": "Open 24/7 (Hourly mechanical chime)",
        "desc": "13th-century landmark clock tower featuring dancing mechanical figurines, rooster crow, rotating bear parade, and revolving astrological dial.",
        "mapsQuery": "Zytglogge Bern",
        "coords": [46.9479, 7.4478],
        "aliases": [
          "zytglogge",
          "clock tower",
          "astronomical clock",
          "astronomical clock tower",
          "clock chime",
          "chime",
          "clock",
          "zytglogge clock tower"
        ],
        "photos": [
          {
            "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/17/Zytglogge_01.jpg/1280px-Zytglogge_01.jpg",
            "caption": "Zytglogge Astronomical Clock Tower - Featured Landmark View"
          },
          {
            "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/61/Zytglogge_1865.jpg/1280px-Zytglogge_1865.jpg",
            "caption": "Zytglogge Astronomical Clock Tower - Wide-Angle Perspective"
          },
          {
            "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/74/Bern_Zytglogge_171008.jpg/1280px-Bern_Zytglogge_171008.jpg",
            "caption": "Zytglogge Astronomical Clock Tower - Architectural Detail"
          },
          {
            "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a4/Zytglogge_turm_%28Bern%29.JPG/1280px-Zytglogge_turm_%28Bern%29.JPG",
            "caption": "Zytglogge Astronomical Clock Tower - Atmospheric Angle"
          },
          {
            "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c6/Bern-Altstadt13.jpg/1280px-Bern-Altstadt13.jpg",
            "caption": "Zytglogge Astronomical Clock Tower - Alternate Vantage Point"
          }
        ],
        "images": [
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/17/Zytglogge_01.jpg/1280px-Zytglogge_01.jpg",
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/61/Zytglogge_1865.jpg/1280px-Zytglogge_1865.jpg",
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/74/Bern_Zytglogge_171008.jpg/1280px-Bern_Zytglogge_171008.jpg",
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a4/Zytglogge_turm_%28Bern%29.JPG/1280px-Zytglogge_turm_%28Bern%29.JPG",
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c6/Bern-Altstadt13.jpg/1280px-Bern-Altstadt13.jpg"
        ]
      },
      {
        "name": "High-Speed TGV Lyria Bullet Train",
        "category": "🚄 High-Speed International Rail",
        "time": "Evening (18:04 – 22:44)",
        "location": "Basel SBB to Paris Gare de Lyon",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/TGV_POS_4402_Gare_de_Lyon.jpg/1280px-TGV_POS_4402_Gare_de_Lyon.jpg",
        "admission": "Confirmed Reservation",
        "isPaid": true,
        "hours": "Departs Basel SBB 19:34, Arrives Paris 22:44",
        "desc": "Ultra-fast TGV Lyria Euroduplex bullet train racing across the French countryside at 320 km/h, delivering passengers into Paris Gare de Lyon.",
        "mapsQuery": "Paris Gare de Lyon",
        "coords": [48.8448, 2.3735],
        "aliases": [
          "tgv lyria",
          "tgv",
          "bullet train",
          "lyria",
          "high-speed tgv lyria"
        ],
        "photos": [
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/TGV_POS_4402_Gare_de_Lyon.jpg/1280px-TGV_POS_4402_Gare_de_Lyon.jpg",
            "caption": "TGV Lyria High-Speed Bullet Train arriving at Paris Gare de Lyon"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/TGV_Lyria_Euroduplex.jpg/1280px-TGV_Lyria_Euroduplex.jpg",
            "caption": "High-Speed TGV Lyria Euroduplex at Basel SBB Platform"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Interlaken_Ost_Station.jpg/1280px-Interlaken_Ost_Station.jpg",
            "caption": "Swiss InterCity Railway Connection"
          },
          {
            "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/First_Cliff_Walk_Br%C3%BCcke.jpg/1280px-First_Cliff_Walk_Br%C3%BCcke.jpg",
            "caption": "Alpine Scenic Departure"
          },
          {
            "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c4/Bern_Tempel_6_September_2006.JPG/1280px-Bern_Tempel_6_September_2006.JPG",
            "caption": "Bern Temple Grounds Farewell"
          }
        ],
        "images": [
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/TGV_POS_4402_Gare_de_Lyon.jpg/1280px-TGV_POS_4402_Gare_de_Lyon.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/TGV_Lyria_Euroduplex.jpg/1280px-TGV_Lyria_Euroduplex.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Interlaken_Ost_Station.jpg/1280px-Interlaken_Ost_Station.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/First_Cliff_Walk_Br%C3%BCcke.jpg/1280px-First_Cliff_Walk_Br%C3%BCcke.jpg",
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c4/Bern_Tempel_6_September_2006.JPG/1280px-Bern_Tempel_6_September_2006.JPG"
        ]
      }
    ]
  }
];

// Remove existing days 11 to 15
const filtered = data.filter(d => ![11, 12, 13, 14, 15].includes(d.dayNum));

// Find insertion index (after Day 10)
let insertIndex = filtered.findIndex(d => d.dayNum === 10) + 1;
filtered.splice(insertIndex, 0, ...days11to15);

// Construct new file content
const newArrayJson = JSON.stringify(filtered, null, 2);
const newFileContent = fileContent.slice(0, startIndex + startMarker.length) + newArrayJson + fileContent.slice(endIndex);

fs.writeFileSync('js/gallery-data.js', newFileContent, 'utf8');
console.log("✅ js/gallery-data.js successfully updated with Days 11-15 Valley Hostel data!");
