// Master Destinations & Sights Data with Real Wikimedia Commons High-Res Imagery
const destinationData = [
  {
    id: "london",
    name: "London & Southampton",
    country: "United Kingdom",
    dates: "12–15 Dec 2026 & 04–08 Jan 2027",
    coords: [51.5074, -0.1278],
    badgeClass: "badge-uk",
    category: "Family Base & Entry",
    heroImage: "public/images/destinations/london.jpg",
    description: "Our holiday home base in Southampton, and gateway through London Victoria Coach Station across the Channel.",
    mustVisitSites: [
      {
        name: "London Victoria & Westminster",
        type: "Landmark / Transit Hub",
        desc: "Historic departure station for overnight European sleeper coaches, right beside iconic Westminster and Big Ben.",
        image: "public/images/sights/london-westminster.jpg",
        coords: [51.4952, -0.1441]
      },
      {
        name: "Southampton Historic Waterfront & Old Town",
        type: "Holiday Base",
        desc: "Cozy holiday base in Hampshire, historic medieval city walls, and seaside docks.",
        image: "public/images/sights/southampton-waterfront.jpg",
        coords: [50.8998, -1.4044]
      }
    ]
  },
  {
    id: "amsterdam",
    name: "Amsterdam",
    country: "Netherlands",
    dates: "16–19 Dec 2026 (3 Nights Base)",
    coords: [52.3676, 4.9041],
    badgeClass: "badge-nl",
    category: "Canals, Culture & Festive Lights",
    heroImage: "public/images/destinations/amsterdam.jpg",
    description: "Famous for its UNESCO World Heritage canal rings, historic merchant houses, Rembrandt masterpieces, and winter light festival installations.",
    mustVisitSites: [
      {
        name: "Rijksmuseum & Museumplein",
        type: "Art & Culture",
        desc: "Home to Rembrandt's The Night Watch and Vermeer's masterpieces with grand 19th-century brick architecture.",
        image: "public/images/sights/rijksmuseum.jpg",
        coords: [52.3600, 4.8852]
      },
      {
        name: "Amsterdam Light Festival & UNESCO Canals",
        type: "Seasonal Highlight",
        desc: "Magical illuminated art installations suspended over romantic bridges and reflecting upon the canal waters.",
        image: "public/images/sights/amsterdam-canals.jpg",
        coords: [52.3702, 4.8952]
      },
      {
        name: "Ice Village & Museumplein Christmas Market",
        type: "Holiday Market",
        desc: "Festive open-air ice rink surrounded by wooden chalets serving fresh Dutch stroopwafels, poffertjes, and warm spiced cider.",
        image: "public/images/sights/amsterdam-ice-village.jpg",
        coords: [52.3579, 4.8828]
      },
      {
        name: "The Jordaan & Nine Streets (De Negen Straatjes)",
        type: "Charming Neighborhood",
        desc: "Quintessential Amsterdam stroll with quaint bridges, boutique shops, and cozy candlelit bruin cafés.",
        image: "public/images/sights/the-jordaan.jpg",
        coords: [52.3738, 4.8820]
      },
      {
        name: "The Hague (ICC, Peace Palace & LDS Temple)",
        type: "Day Trip Excursion (48 min train)",
        desc: "Day trip to the International Criminal Court, historic Peace Palace, Mauritshuis (Girl with a Pearl Earring), and The Hague Netherlands Temple in Zoetermeer.",
        image: "public/images/temples/the-hague-temple.jpg",
        coords: [52.0786, 4.3164]
      },
      {
        name: "Zaanse Schans Windmills & Cheese Farm",
        type: "Historic Countryside (17 min train)",
        desc: "Iconic 18th-century working wooden windmills along the river, traditional wooden clog crafting, and artisanal Gouda cheese tastings.",
        image: "public/images/sights/zaanse-schans.jpg",
        coords: [52.4729, 4.8219]
      }
    ]
  },
  {
    id: "frankfurt",
    name: "Frankfurt am Main",
    country: "Germany",
    dates: "19–22 Dec 2026 (3 Nights Base)",
    coords: [50.1109, 8.6821],
    badgeClass: "badge-de",
    category: "Central Germany Base, Sacred Temple & Skyline",
    heroImage: "public/images/destinations/frankfurt.jpg",
    description: "Our comfortable 3-night holiday base in Germany: combining historic half-timbered Römerberg, the sacred Frankfurt Germany LDS Temple, and 1-hour high-speed rail access to Cologne and Düsseldorf without changing hotels.",
    mustVisitSites: [
      {
        name: "Frankfurt Germany LDS Temple",
        type: "Sacred Temple & Spiritual Sanctuary",
        desc: "Quiet sanctuary in the Taunus foothills in Friedrichsdorf, dedicated in 1987. Accessible via 26-min direct S-Bahn S5 from Frankfurt Hbf.",
        image: "public/images/temples/frankfurt-temple.jpg",
        coords: [50.2589, 8.6433]
      },
      {
        name: "Eiserner Steg & Kaiserdom",
        type: "Iconic Iron Footbridge & Imperial Cathedral",
        desc: "Historic 1869 pedestrian bridge with locks offering panoramic views of the river and Frankfurt skyline, leading to the Imperial Cathedral of St. Bartholomew.",
        image: "public/images/sights/eiserner-steg.jpg",
        coords: [50.1087, 8.6823]
      },
      {
        name: "Frankfurter Weihnachtsmarkt (Römerberg)",
        type: "Historic Christmas Market (Est. 1393)",
        desc: "One of Germany's grandest and oldest holiday markets, filling the medieval square with festive lights, a 30m Christmas tree, and hot spiced Apfelwein.",
        image: "public/images/sights/roemerberg.jpg",
        coords: [50.1103, 8.6821]
      }
    ]
  },
  {
    id: "cologne-dusseldorf",
    name: "Cologne & Düsseldorf",
    country: "Germany",
    dates: "21 Dec 2026 (Twin-City Rhine Excursion)",
    coords: [51.2256, 6.7719],
    badgeClass: "badge-de",
    category: "Gothic Splendor & Themed Christmas Markets",
    heroImage: "public/images/destinations/cologne-dusseldorf.jpg",
    description: "A seamless twin-city day trip along the Rhine from our Frankfurt base: marvel at the monumental twin spires of Kölner Dom and the Lindt Chocolate Museum in Cologne, then take a 20-min train to explore Düsseldorf's 7 magical themed Christmas markets.",
    mustVisitSites: [
      {
        name: "Cologne Cathedral (Kölner Dom)",
        type: "UNESCO World Heritage Landmark",
        desc: "Monumental Gothic cathedral housing the Shrine of the Three Kings, towering 157 meters over the Rhine River.",
        image: "public/images/sights/koelner-dom.jpg",
        coords: [50.9413, 6.9583]
      },
      {
        name: "Lindt Chocolate Museum (Schokoladenmuseum)",
        type: "Culinary Experience (Daytime)",
        desc: "Located on a peninsula right along the Rhine with a 3-meter-tall golden chocolate fountain offering freshly dipped warm waffles.",
        image: "public/images/sights/schokoladenmuseum.jpg",
        coords: [50.9322, 6.9642]
      },
      {
        name: "Düsseldorf 7 Themed Christmas Markets",
        type: "Winter Holiday Trail",
        desc: "Magnificent walking trail featuring Engelchen-Markt (Art Nouveau angels), Sternchen-Markt (crystal stars), and Handwerker-Markt before the historic Rathaus.",
        image: "public/images/sights/duesseldorf-markets.jpg",
        coords: [51.2256, 6.7719]
      },
      {
        name: "Königsallee & Corneliusplatz Ice Rink",
        type: "Canal Boulevard & Ice Skating",
        desc: "Glamorous canal promenade lined with 200-year-old chestnuts, featuring the massive 1,700m² DEG-Winterwelt open-air ice rink.",
        image: "public/images/sights/koenigsallee.jpg",
        coords: [51.2244, 6.7794]
      }
    ]
  },
  {
    id: "strasbourg-colmar",
    name: "Strasbourg & Colmar (Alsace)",
    country: "France",
    dates: "22–24 Dec 2026 (2 Nights · Hotel Base: Kehl, Germany)",
    coords: [48.5734, 7.7521],
    badgeClass: "badge-fr",
    category: "Capital of Christmas & Fairytale Towns (Beauty & the Beast & Howl's Castle Inspiration)",
    heroImage: "public/images/destinations/strasbourg-colmar.jpg",
    description: "We are staying at B&B Hotel Kehl (Germany) right across the Rhine, using it strictly as our strategic, confirmed base to visit Strasbourg ('Capital of Christmas') and fairytale Colmar in France—the real-world inspiration for Disney's Beauty and the Beast and Studio Ghibli's Howl's Moving Castle. Direct cross-border tram and 30-min regional TER trains connect our base seamlessly.",
    mustVisitSites: [
      {
        name: "B&B Hotel Kehl (Confirmed Base)",
        type: "Strategic Cross-Border Base (15 min Tram D to Strasbourg)",
        desc: "Our confirmed hotel base in Kehl, Germany across the Rhine, used strictly as a base to visit and explore Strasbourg and Colmar in France.",
        image: "public/images/sights/kehl-tram.jpg",
        coords: [48.5683, 7.8189]
      },
      {
        name: "Strasbourg Place Kléber & Great Christmas Tree",
        type: "Capitale de Noël",
        desc: "The towering 30-meter authentic illuminated fir tree at Place Kléber and the historic Christkindelsmärik around the pink sandstone Cathedral.",
        image: "public/images/sights/place-kleber.jpg",
        coords: [48.5839, 7.7455]
      },
      {
        name: "Colmar Petite Venise (Beauty & the Beast Inspiration)",
        type: "Fairytale Canals & Belle's Village Inspiration",
        desc: "Pastel half-timbered merchant houses along the quiet canals of Petite Venise and Quai de la Poissonnerie that directly inspired Belle's village in Disney's Beauty and the Beast.",
        image: "public/images/sights/colmar-petite-venise.jpg",
        coords: [48.0740, 7.3590]
      },
      {
        name: "Maison Pfister & Old Town (Howl's Moving Castle Inspiration)",
        type: "1537 Renaissance Landmark & Miyazaki's Inspiration",
        desc: "The famous 1537 wooden turreted house on Rue des Marchands that directly inspired Hayao Miyazaki's Studio Ghibli masterpiece Howl's Moving Castle.",
        image: "public/images/sights/colmar-petite-venise.jpg",
        coords: [48.0768, 7.3582]
      },
      {
        name: "Petite France & Covered Bridges (Ponts Couverts)",
        type: "Historic District",
        desc: "Medieval tanners' quarter surrounded by the Ill River canals, weeping willows, and ancient stone watchtowers.",
        image: "public/images/sights/strasbourg-petite-france.jpg",
        coords: [48.5797, 7.7399]
      }
    ]
  },
  {
    id: "zurich-arrival",
    name: "Zurich (24 Dec Arrival)",
    country: "Switzerland",
    dates: "24 Dec 2026 (Christmas Eve Arrival)",
    coords: [47.3730, 8.5405],
    badgeClass: "badge-ch",
    category: "CLOY Opening Scene & Historic Old Town",
    heroImage: "public/images/destinations/zurich-arrival.jpg",
    description: "Arriving from Alsace via Basel: exploring medieval Altstadt, the iconic Lindenhof Hill where Captain Ri and Se-ri pass by each other in the opening sequence, and Münsterbrücke over the Limmat.",
    mustVisitSites: [
      {
        name: "Lindenhof Hill (CLOY Opening Credits)",
        type: "Iconic Drama Location",
        desc: "The elevated hilltop park overlooking the Old Town where Captain Ri Jeong-hyeok and Yoon Se-ri pass by each other in the famous opening sequence.",
        image: "public/images/sights/lindenhof-hill.jpg",
        coords: [47.3730, 8.5405]
      },
      {
        name: "Münsterbrücke & Grossmünster",
        type: "Historic Center",
        desc: "The scenic stone bridge over the Limmat River connecting the twin towers of Grossmünster and Fraumünster church.",
        image: "public/images/sights/muensterbruecke.jpg",
        coords: [47.3697, 8.5425]
      },
      {
        name: "Old Town Christmas Eve Illuminations",
        type: "Festive Historic Atmosphere",
        desc: "Medieval cobblestone alleys of Niederdorf glowing with Christmas Eve lanterns, spiced glühwein, and festive Swiss holiday cheer.",
        image: "public/images/sights/zurich-old-town.jpg",
        coords: [47.3725, 8.5445]
      }
    ]
  },
  {
    id: "iseltwald",
    name: "Iseltwald (Lake Brienz)",
    country: "Switzerland",
    dates: "25 Dec 2026 (Christmas Day)",
    coords: [46.7118, 7.9622],
    badgeClass: "badge-ch",
    category: "The CLOY Piano Pier",
    heroImage: "public/images/destinations/iseltwald.jpg",
    description: "A tranquil fishing village along the vibrant turquoise waters of Lake Brienz, home to the most emotionally memorable scene in Crash Landing on You.",
    mustVisitSites: [
      {
        name: "Iseltwald Landing Stage (Captain Ri's Piano)",
        type: "CLOY Signature Scene",
        desc: "The wooden landing dock where Captain Ri played his heartfelt song for his brother on the grand piano while Se-ri listened from the ferry.",
        image: "public/images/sights/iseltwald-landing-stage.jpg",
        coords: [46.7105, 7.9635]
      },
      {
        name: "Seeburg Castle & Lake Brienz Promenade",
        type: "Scenic Lakeside Nature",
        desc: "Fairytale lakeside peninsula with Seeburg Castle backdropped by steep snow-dusted Alpine peaks and mirror-still turquoise waters.",
        image: "public/images/sights/seeburg-castle.jpg",
        coords: [46.7170, 7.9715]
      }
    ]
  },
  {
    id: "sigriswil",
    name: "Sigriswil (Lake Thun)",
    country: "Switzerland",
    dates: "26 Dec 2026",
    coords: [46.7167, 7.7167],
    badgeClass: "badge-ch",
    category: "CLOY High Suspension Bridge",
    heroImage: "public/images/destinations/sigriswil.jpg",
    description: "Perched high above Lake Thun in the Bernese Oberland, offering awe-inspiring panoramas of Mount Niesen and the high Alps.",
    mustVisitSites: [
      {
        name: "Panoramabrücke Sigriswil (CLOY Bridge Scene)",
        type: "Suspension Bridge Landmark",
        desc: "The 340-meter-long suspension bridge hanging 182 meters over Gummischlucht gorge where Jeong-hyeok asked Se-ri to take a photo of him and Seo Dan.",
        image: "public/images/sights/panoramabruecke-sigriswil.jpg",
        coords: [46.7190, 7.7210]
      },
      {
        name: "Lake Thun Panorama & Spiez Castle",
        type: "Alpine Views",
        desc: "Sweeping views of Lake Thun framed by the pyramid-shaped Mount Niesen and charming mountain chalets.",
        image: "public/images/sights/lake-thun-spiez.jpg",
        coords: [46.6847, 7.6780]
      }
    ]
  },
  {
    id: "grindelwald",
    name: "Grindelwald & First",
    country: "Switzerland",
    dates: "27 Dec 2026",
    coords: [46.6242, 8.0414],
    badgeClass: "badge-ch",
    category: "CLOY Alpine Reunion & Peaks",
    heroImage: "public/images/destinations/grindelwald.jpg",
    description: "The world-famous glacier village in the shadow of the mighty Eiger North Face, covered in deep winter snow.",
    mustVisitSites: [
      {
        name: "Grindelwald First & Cliff Walk",
        type: "CLOY Paragliding & Reunion Vista",
        desc: "Gondola ride up to 2,168 meters for the exhilarating metal walkway clinging to the mountain face with 360-degree views of the Eiger.",
        image: "public/images/sights/grindelwald-first-cliff-walk.jpg",
        coords: [46.6590, 8.0645]
      },
      {
        name: "Schreckfeld & Kleine Scheidegg Panorama",
        type: "Alpine Wonder",
        desc: "Snow-covered ski slopes and iconic wooden mountain chalets where Se-ri and Captain Ri famously cross paths in Switzerland.",
        image: "public/images/sights/schreckfeld-kleine-scheidegg.jpg",
        coords: [46.5851, 7.9612]
      }
    ]
  },
  {
    id: "zurich-departure",
    name: "Zurich (28 Dec Departure)",
    country: "Switzerland",
    dates: "28 Dec 2026 (Transit to Paris)",
    coords: [47.3686, 8.5432],
    badgeClass: "badge-ch",
    category: "Lake Promenade & Overnight Transit to Paris",
    heroImage: "public/images/destinations/zurich-departure.jpg",
    description: "Scenic afternoon return from the Bernese Oberland: strolling along Lake Zurich with distant snowy Alps, tasting artisan chocolates on Bahnhofstrasse, and boarding the direct overnight FlixBus to Paris Bercy Seine.",
    mustVisitSites: [
      {
        name: "Lake Zurich Promenade & Bürkliplatz",
        type: "Scenic Lakeside Stroll",
        desc: "Peaceful waterfront promenade gazing out across crystal-clear waters toward the snow-capped Glarus Alps.",
        image: "public/images/sights/lake-zurich-promenade.jpg",
        coords: [47.3667, 8.5414]
      },
      {
        name: "Bahnhofstrasse Artisan Chocolatiers",
        type: "Swiss Culinary Heritage",
        desc: "World-famous avenue featuring legendary chocolatiers Confiserie Sprüngli (Luxemburgerli) and Lindt Home of Chocolate treats.",
        image: "public/images/sights/bahnhofstrasse.jpg",
        coords: [47.3720, 8.5385]
      },
      {
        name: "Zurich Bus Station (Sihlquai / HB)",
        type: "Overnight Sleeper Coach Hub",
        desc: "Direct departure station for FlixBus 702 (22:45) direct to Paris Bercy Seine, saving an entire hotel night.",
        image: "public/images/sights/zurich-hb.jpg",
        coords: [47.3815, 8.5375]
      }
    ]
  },
  {
    id: "paris",
    name: "Paris & Palace of Versailles",
    country: "France",
    dates: "29 Dec 2026 – 03 Jan 2027 (5 Nights)",
    coords: [48.8566, 2.3522],
    badgeClass: "badge-fr",
    category: "City of Light & Royal Splendor",
    heroImage: "public/images/destinations/paris.jpg",
    description: "The crown jewel of the journey: 5 full nights ringing in the New Year 2027 amidst world-famous art, romantic boulevards, and royal history.",
    mustVisitSites: [
      {
        name: "Eiffel Tower & New Year's Eve on Champs-Élysées",
        type: "World Wonder & NYE 2027",
        desc: "Witness the sparkling golden lights of the Eiffel Tower from Trocadéro and join thousands celebrating the countdown at the Arc de Triomphe.",
        image: "public/images/sights/eiffel-tower.jpg",
        coords: [48.8584, 2.2945]
      },
      {
        name: "Musée du Louvre & Tuileries Garden",
        type: "Masterpiece Museum",
        desc: "Marvel at the Mona Lisa, Venus de Milo, and the Winged Victory of Samothrace inside the former royal fortress palace.",
        image: "public/images/sights/louvre.jpg",
        coords: [48.8606, 2.3376]
      },
      {
        name: "Palace of Versailles (Château de Versailles)",
        type: "UNESCO Royal Estate Excursion",
        desc: "Tour the breathtaking Hall of Mirrors, the King's Grand Apartments, and walk the grand royal gardens of the Sun King Louis XIV.",
        image: "public/images/sights/palace-versailles.jpg",
        coords: [48.8049, 2.1204]
      },
      {
        name: "Montmartre & Basilique du Sacré-Cœur",
        type: "Bohemian Hilltop",
        desc: "Climb the steps to Sacré-Cœur for panoramic views over Paris, wander artists' Place du Tertre, and discover hidden cobbled alleys.",
        image: "public/images/sights/montmartre-sacre-coeur.jpg",
        coords: [48.8867, 2.3431]
      },
      {
        name: "Jardin du Luxembourg & Galeries Lafayette Holiday Dome",
        type: "Festive Splendor",
        desc: "Stroll the serene royal Luxembourg Gardens and historic Saint-Germain, then admire the giant animated Christmas tree beneath the stained-glass dome at Haussmann.",
        image: "public/images/sights/jardin-du-luxembourg.jpg",
        coords: [48.8462, 2.3372]
      }
    ]
  },
  {
    id: "london-return",
    name: "London & Southampton Return",
    country: "United Kingdom",
    dates: "04 Jan 2027",
    coords: [51.5074, -0.1278],
    badgeClass: "badge-uk",
    category: "Journey Completion & UK Return",
    heroImage: "public/images/destinations/london-return.jpg",
    description: "Arrival back in the UK from Paris via overnight coach / Channel crossing to London Victoria, followed by South Western Railway train home to Southampton.",
    mustVisitSites: [
      {
        name: "London Victoria Station & Westminster",
        type: "UK Transit Gateway",
        desc: "Arrival terminal for the overnight coach from Paris Bercy Seine, connected directly to Westminster and London Underground.",
        image: "public/images/sights/london-westminster.jpg",
        coords: [51.4952, -0.1441]
      },
      {
        name: "Southampton Waterfront & Old Town",
        type: "Holiday Home Base",
        desc: "Peaceful rest in Hampshire after an unforgettable 21-day grand European winter expedition.",
        image: "public/images/sights/southampton-waterfront.jpg",
        coords: [50.8998, -1.4044]
      }
    ]
  }
];

// Temples of The Church of Jesus Christ of Latter-day Saints along or near the itinerary
const ldsTemplesData = [
  {
    id: "paris-temple",
    name: "Paris France Temple",
    nativeName: "Temple de Paris",
    city: "Le Chesnay-Rocquencourt (Versailles)",
    country: "France",
    coords: [48.8179, 2.1232],
    address: "46 Boulevard Saint-Antoine, 78150 Le Chesnay-Rocquencourt, France",
    dedicated: "21 May 2017",
    image: "public/images/temples/paris-temple.jpg",
    itineraryMatch: "Day 15: Confirmed Session (Tue 29 Dec 2026 @ 2:30 PM, Arrive 2:00 PM) & Day 19 Versailles",
    distanceFromStop: "2.2 km (~5 min drive / 15 min bus) from Palace of Versailles",
    transitDirections: "From Paris: RER Line C to Versailles Château Rive Gauche, or Transilien L from Saint-Lazare to Versailles Rive Droite, then Phébus Bus 2 to Saint-Antoine.",
    description: "Located right beside the historic royal estate of Versailles. Features elegant warm limestone architecture, manicured courtyard gardens with quiet fountains, and stained glass reflecting French botanical motifs."
  },
  {
    id: "bern-temple",
    name: "Bern Switzerland Temple",
    nativeName: "Schweiz-Tempel (Bern-Tempel)",
    city: "Zollikofen / Bern",
    country: "Switzerland",
    coords: [47.0022, 7.4582],
    address: "Tempelstrasse 2, 3052 Zollikofen, Switzerland",
    dedicated: "11 September 1955",
    image: "public/images/temples/bern-temple.jpg",
    itineraryMatch: "Days 10–14: Swiss Alps Base (24–28 Dec 2026)",
    distanceFromStop: "7 km north of Bern Hauptbahnhof (mainline rail transfer hub between Zurich & Interlaken)",
    transitDirections: "From Bern Hbf: S-Bahn S3 or S31 to Zollikofen (9 mins), then a peaceful 5-minute walk down Tempelstrasse.",
    description: "The historic first temple built in Europe (dedicated in 1955 by President David O. McKay). Framed by towering alpine pines with breathtaking vistas of the snowy Bernese Alps."
  },
  {
    id: "the-hague-temple",
    name: "The Hague Netherlands Temple",
    nativeName: "Tempel van Den Haag",
    city: "Zoetermeer (The Hague Area)",
    country: "Netherlands",
    coords: [52.0545, 4.5030],
    address: "Osylaan 2, 2722 CV Zoetermeer, Netherlands",
    dedicated: "8 September 2002",
    image: "public/images/temples/the-hague-temple.jpg",
    itineraryMatch: "Day 4: Confirmed Session (Fri 18 Dec 2026 @ 9:30 AM, Arrive 9:10 AM)",
    distanceFromStop: "Direct 48-min train from Amsterdam base to The Hague, then 15 mins to Zoetermeer",
    transitDirections: "Direct NS train from Amsterdam Centraal/Zuid to Gouda or Den Haag, then Sprinter to Zoetermeer Oost or RandstadRail 3, followed by a short 7-minute walk along the park canal.",
    description: "Surrounded by tranquil Dutch canals, weeping willows, and park waters in Zoetermeer. Built with polished granite and a graceful spire topped by the Angel Moroni."
  },
  {
    id: "frankfurt-temple",
    name: "Frankfurt Germany Temple",
    nativeName: "Frankfurt-Tempel",
    city: "Friedrichsdorf (Frankfurt am Main)",
    country: "Germany",
    coords: [50.2589, 8.6421],
    address: "Talstrasse 10, 61729 Friedrichsdorf, Germany",
    dedicated: "28 August 1987",
    image: "public/images/temples/frankfurt-temple.jpg",
    itineraryMatch: "Day 8: Confirmed Session (Tue 22 Dec 2026 @ 6:00 PM, Arrive 5:15 PM)",
    distanceFromStop: "26 mins direct via S-Bahn S5 from Frankfurt Hbf to Friedrichsdorf",
    transitDirections: "From Frankfurt Hbf: S-Bahn S5 direct to Friedrichsdorf (Taunus) (26 mins), then an 8-minute walk.",
    description: "Notable for its distinctive copper roof and standalone white spire with golden Angel Moroni, set against the wooded foothills of the Taunus mountains."
  }
];

// Initialize Interactive Map with Smooth Zoom In/Out & Responsive Popups
let map;
let markers = [];
let routeLine;
let sightMarkers = []; // Star markers for individual sights
let templeMarkers = []; // Pin markers for LDS Temples
let templesVisible = true;
const DEFAULT_CENTER = [48.2, 5.0];
const DEFAULT_ZOOM = window.innerWidth <= 768 ? 4 : 5;
// Google Maps Tile Layers (initialized safely in initMap)
let googleLayers = {};

const DETAIL_ZOOM = window.innerWidth <= 768 ? 9 : 10;
let isProgrammaticZoom = false;
let currentLayer = 'roadmap';

// Itinerary overview metadata for the top navigation bar (strictly chronological)
const itineraryOverview = [
  { id: "london", flag: "🇬🇧", shortName: "London & Southampton", shortDates: "12–15 Dec" },
  { id: "amsterdam", flag: "🇳🇱", shortName: "Amsterdam", shortDates: "16–18 Dec" },
  { id: "frankfurt", flag: "🇩🇪", shortName: "Frankfurt", shortDates: "19–22 Dec" },
  { id: "cologne-dusseldorf", flag: "🇩🇪", shortName: "Cologne & Düsseldorf", shortDates: "21 Dec" },
  { id: "strasbourg-colmar", flag: "🇫🇷", shortName: "Strasbourg & Colmar", shortDates: "22–24 Dec" },
  { id: "zurich-arrival", flag: "🇨🇭", shortName: "Zurich (24 Dec)", shortDates: "24 Dec" },
  { id: "iseltwald", flag: "🇨🇭", shortName: "Iseltwald", shortDates: "25 Dec" },
  { id: "sigriswil", flag: "🇨🇭", shortName: "Sigriswil", shortDates: "26 Dec" },
  { id: "grindelwald", flag: "🇨🇭", shortName: "Grindelwald", shortDates: "27 Dec" },
  { id: "zurich-departure", flag: "🇨🇭", shortName: "Zurich (28 Dec)", shortDates: "28 Dec" },
  { id: "paris", flag: "🇫🇷", shortName: "Paris & Versailles", shortDates: "29 Dec – 03 Jan" },
  { id: "london-return", flag: "🇬🇧", shortName: "London Return", shortDates: "04 Jan" }
];

itineraryOverview.forEach(item => {
  const dest = destinationData.find(d => d.id === item.id);
  if (dest) {
    dest.flag = item.flag;
    dest.shortName = item.shortName;
    dest.shortDates = item.shortDates;
  }
});

// Create star-shaped SVG icon for permanent sight markers
function createStarIcon(color) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
      fill="${color}" stroke="#ffffff" stroke-width="2" stroke-linejoin="round"/>
  </svg>`;
  return L.divIcon({
    html: svg,
    className: 'sight-star-icon',
    iconSize: [26, 26],
    iconAnchor: [13, 13],
    popupAnchor: [0, -13]
  });
}

// Create golden temple pin icon for LDS Temples
function createTempleIcon() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="38" viewBox="0 0 32 38">
    <defs>
      <filter id="templeGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2" stdDeviation="2.5" flood-color="#78350f" flood-opacity="0.5"/>
      </filter>
    </defs>
    <g filter="url(#templeGlow)">
      <path d="M16 36 C16 36 29 23 29 14.5 C29 6.8 23.2 1 16 1 C8.8 1 3 6.8 3 14.5 C3 23 16 36 16 36 Z" fill="#d97706" stroke="#ffffff" stroke-width="2"/>
      <circle cx="16" cy="4.5" r="1.5" fill="#fef08a"/>
      <path d="M16 5.5 L14 13 L18 13 Z" fill="#fef3c7"/>
      <polygon points="8,13 16,9 24,13" fill="#fef3c7"/>
      <rect x="9" y="13" width="14" height="10" rx="1" fill="#ffffff"/>
      <rect x="11.5" y="15" width="2" height="8" fill="#d97706"/>
      <rect x="15" y="16.5" width="2" height="6.5" fill="#92400e"/>
      <rect x="18.5" y="15" width="2" height="8" fill="#d97706"/>
    </g>
  </svg>`;
  return L.divIcon({
    html: svg,
    className: 'lds-temple-icon',
    iconSize: [32, 38],
    iconAnchor: [16, 36],
    popupAnchor: [0, -34]
  });
}

// Focus the map on a specific destination and open its popup
function focusDestination(index) {
  const dest = destinationData[index];
  if (!dest || !map) return;

  isProgrammaticZoom = true;
  map.flyTo(dest.coords, DETAIL_ZOOM, {
    duration: 1.0,
    easeLinearity: 0.25
  });

  setTimeout(() => {
    if (markers[index]) {
      const marker = markers[index];
      const popup = marker.getPopup();
      if (popup) {
        const offset = getSidePopupOffset(dest.coords, 260, 310);
        popup.options.offset = L.point(offset);
        popup.options.autoPan = false;
      }
      marker.openPopup();
    }
    isProgrammaticZoom = false;
  }, 650);

  setActiveItineraryStop(index);
}

// Highlight the corresponding chip in the top itinerary overview bar
function setActiveItineraryStop(index) {
  const chips = document.querySelectorAll('.itinerary-stop-chip');
  let firstActiveChip = null;
  chips.forEach((chip) => {
    const chipIdx = parseInt(chip.getAttribute('data-index'), 10);
    const isActive = (chipIdx === index);
    chip.classList.toggle('active', isActive);
    if (isActive && !firstActiveChip) {
      firstActiveChip = chip;
    }
  });

  // Toggle active styling on Germany country box when either Frankfurt or Cologne is active
  const germanyBox = document.querySelector('.itinerary-germany-box');
  if (germanyBox) {
    const isGermany = (index === 2 || index === 3);
    germanyBox.classList.toggle('active-country-box', isGermany);
  }

  // Toggle active styling on Switzerland country box when any Swiss stop is active (indices 5, 6, 7, 8, 9)
  const swissBox = document.querySelector('.itinerary-switzerland-box');
  if (swissBox) {
    const isSwiss = (index >= 5 && index <= 9);
    swissBox.classList.toggle('active-country-box', isSwiss);
  }

  if (firstActiveChip) {
    firstActiveChip.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
  }
}

// Render the top itinerary overview bar
function renderItineraryNavBar() {
  const bar = document.getElementById('itineraryNavBar');
  if (!bar) return;
  bar.innerHTML = '';

  let i = 0;
  while (i < destinationData.length) {
    const dest = destinationData[i];

    // Check if this is Germany (Frankfurt base + Cologne & Düsseldorf excursion)
    if (dest.id === 'frankfurt') {
      const frankfurtIndex = i; // 2
      const cdIndex = destinationData.findIndex(d => d.id === 'cologne-dusseldorf'); // 3

      // Create One Large Box for Germany (19–23 Dec)
      const germanyBox = document.createElement('div');
      germanyBox.className = 'itinerary-germany-box';
      germanyBox.setAttribute('title', 'Germany 4-Night Stays (19–23 Dec: Cologne 2N & Frankfurt 2N)');

      germanyBox.innerHTML = `
        <div class="germany-box-header">
          <span class="germany-box-title">
            <span class="germany-box-flag">🇩🇪</span> Germany: Cologne &amp; Frankfurt
          </span>
          <span class="germany-box-badge">19–23 Dec · 4 Nights</span>
        </div>
        <div class="germany-box-content">
          <!-- Step 1: Cologne & Düsseldorf Base -->
          <button type="button" class="itinerary-stop-chip germany-sub-chip" data-index="${cdIndex}" title="Focus map on Cologne & Düsseldorf (19–21 Dec · 2 Nights)">
            <span class="itinerary-step-num" style="background: #eab308;">3</span>
            <div class="itinerary-stop-text">
              <span class="itinerary-stop-title">🇩🇪 Cologne &amp; Düsseldorf</span>
              <span class="itinerary-stop-sub">19–21 Dec · 2 Nights</span>
            </div>
          </button>

          <span class="itinerary-sub-arrow">➔</span>

          <!-- Step 2: Frankfurt Base & Temple -->
          <button type="button" class="itinerary-stop-chip germany-sub-chip" data-index="${frankfurtIndex}" title="Focus map on Frankfurt am Main & Temple (21–23 Dec · 2 Nights)">
            <span class="itinerary-step-num" style="background: #eab308;">4</span>
            <div class="itinerary-stop-text">
              <span class="itinerary-stop-title">🇩🇪 Frankfurt &amp; Temple</span>
              <span class="itinerary-stop-sub">21–23 Dec · 2 Nights</span>
            </div>
          </button>
        </div>
      `;

      // Attach click listeners to all buttons inside the Germany box
      const subChips = germanyBox.querySelectorAll('.germany-sub-chip');
      subChips.forEach(chip => {
        const idx = parseInt(chip.getAttribute('data-index'), 10);
        chip.addEventListener('click', (e) => {
          e.stopPropagation();
          focusDestination(idx);
        });
      });

      bar.appendChild(germanyBox);

      // Add arrow after Germany box if there are more destinations
      if (cdIndex < destinationData.length - 1) {
        const arrow = document.createElement('span');
        arrow.className = 'itinerary-arrow';
        arrow.innerHTML = '➔';
        bar.appendChild(arrow);
      }

      // Skip past cologne-dusseldorf since it is now housed inside Germany box
      i = (cdIndex !== -1 && cdIndex > frankfurtIndex) ? cdIndex + 1 : i + 1;
      continue;
    }

    // Check if this is Switzerland (Zurich Arrival + Iseltwald + Sigriswil + Grindelwald + Zurich Departure)
    if (dest.id === 'zurich-arrival') {
      const zurichArrIdx = i; // 5
      const iseltwaldIdx = destinationData.findIndex(d => d.id === 'iseltwald'); // 6
      const sigriswilIdx = destinationData.findIndex(d => d.id === 'sigriswil'); // 7
      const grindelwaldIdx = destinationData.findIndex(d => d.id === 'grindelwald'); // 8
      const zurichDepIdx = destinationData.findIndex(d => d.id === 'zurich-departure'); // 9

      // Create One Large Box for Switzerland
      const swissBox = document.createElement('div');
      swissBox.className = 'itinerary-switzerland-box';
      swissBox.setAttribute('title', 'Switzerland & Alps: CLOY Trail & Zurich Base (24–28 Dec · 4 Nights)');

      swissBox.innerHTML = `
        <div class="switzerland-box-header">
          <span class="switzerland-box-title">
            <span class="switzerland-box-flag">🇨🇭</span> Switzerland &amp; Alps (CLOY Trail)
          </span>
          <span class="switzerland-box-badge">24–28 Dec · 4 Nights</span>
        </div>
        <div class="switzerland-box-content">
          <!-- Left: Zurich Arrival & Christmas Eve -->
          <button type="button" class="itinerary-stop-chip switzerland-sub-chip" data-index="${zurichArrIdx}" title="Focus map on Zurich (24 Dec Christmas Eve Arrival)">
            <span class="itinerary-step-num" style="background: #ef4444;">6</span>
            <div class="itinerary-stop-text">
              <span class="itinerary-stop-title">🇨🇭 Zurich</span>
              <span class="itinerary-stop-sub">24 Dec · Arrival</span>
            </div>
          </button>

          <span class="itinerary-sub-arrow-ch">➔</span>

          <!-- Middle 1: Iseltwald & Lake Brienz -->
          <button type="button" class="itinerary-stop-chip switzerland-sub-chip" data-index="${iseltwaldIdx}" title="Focus map on Iseltwald (25 Dec Christmas Day · CLOY Piano Pier)">
            <span class="itinerary-step-num" style="background: #ef4444;">7</span>
            <div class="itinerary-stop-text">
              <span class="itinerary-stop-title">🇨🇭 Iseltwald</span>
              <span class="itinerary-stop-sub">25 Dec · Lake Brienz</span>
            </div>
          </button>

          <span class="itinerary-sub-arrow-ch">➔</span>

          <!-- Middle 2: Sigriswil Suspension Bridge -->
          <button type="button" class="itinerary-stop-chip switzerland-sub-chip" data-index="${sigriswilIdx}" title="Focus map on Sigriswil (26 Dec · CLOY Panoramic Bridge)">
            <span class="itinerary-step-num" style="background: #ef4444;">8</span>
            <div class="itinerary-stop-text">
              <span class="itinerary-stop-title">🇨🇭 Sigriswil</span>
              <span class="itinerary-stop-sub">26 Dec · Bridge</span>
            </div>
          </button>

          <span class="itinerary-sub-arrow-ch">➔</span>

          <!-- Middle 3: Grindelwald & First Peak -->
          <button type="button" class="itinerary-stop-chip switzerland-sub-chip" data-index="${grindelwaldIdx}" title="Focus map on Grindelwald First (27 Dec · Cliff Walk & Alpine Peaks)">
            <span class="itinerary-step-num" style="background: #ef4444;">9</span>
            <div class="itinerary-stop-text">
              <span class="itinerary-stop-title">🇨🇭 Grindelwald</span>
              <span class="itinerary-stop-sub">27 Dec · First Peak</span>
            </div>
          </button>

          <span class="itinerary-sub-arrow-ch">➔</span>

          <!-- Right: Zurich Departure & Transit to Paris -->
          <button type="button" class="itinerary-stop-chip switzerland-sub-chip" data-index="${zurichDepIdx}" title="Focus map on Zurich (28 Dec · Departure to Paris)">
            <span class="itinerary-step-num" style="background: #ef4444;">10</span>
            <div class="itinerary-stop-text">
              <span class="itinerary-stop-title">🇨🇭 Zurich</span>
              <span class="itinerary-stop-sub">28 Dec · Departure</span>
            </div>
          </button>
        </div>
      `;

      // Attach click listeners to all buttons inside the Switzerland box
      const subChips = swissBox.querySelectorAll('.switzerland-sub-chip');
      subChips.forEach(chip => {
        const idx = parseInt(chip.getAttribute('data-index'), 10);
        chip.addEventListener('click', (e) => {
          e.stopPropagation();
          focusDestination(idx);
        });
      });

      bar.appendChild(swissBox);

      // Add arrow after Switzerland box if there are more destinations
      const lastSwissIdx = (zurichDepIdx !== -1) ? zurichDepIdx : i;
      if (lastSwissIdx < destinationData.length - 1) {
        const arrow = document.createElement('span');
        arrow.className = 'itinerary-arrow';
        arrow.innerHTML = '➔';
        bar.appendChild(arrow);
      }

      // Skip past all Swiss stops housed in the box
      i = (lastSwissIdx !== -1 && lastSwissIdx >= i) ? lastSwissIdx + 1 : i + 1;
      continue;
    }

    // Normal Stop Chip
    const index = i;
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = `itinerary-stop-chip ${index === 0 ? 'active' : ''}`;
    chip.setAttribute('data-index', index);
    chip.setAttribute('title', `Click to focus map on ${dest.name}`);

    const color = getCountryColor(dest.country);
    const flag = dest.flag || '📍';
    const shortName = dest.shortName || dest.name;
    const shortDates = dest.shortDates || dest.dates.split('(')[0].trim();
    const stepNum = index + 1;

    if (dest.id === 'strasbourg-colmar') {
      chip.setAttribute('title', 'Focus map on Strasbourg & Colmar (Staying in Kehl, Germany across the Rhine as hotel base to visit Strasbourg & Colmar)');
      chip.innerHTML = `
        <span class="itinerary-step-num" style="background: ${color};">${stepNum}</span>
        <div class="itinerary-stop-text">
          <span class="itinerary-stop-title">${flag} Strasbourg &amp; Colmar <span class="badge-kehl-base">Kehl Base</span></span>
          <span class="itinerary-stop-sub">22–24 Dec · Kehl Base (Alsace)</span>
        </div>
      `;
    } else {
      chip.setAttribute('title', `Click to focus map on ${dest.name}`);
      chip.innerHTML = `
        <span class="itinerary-step-num" style="background: ${color};">${stepNum}</span>
        <div class="itinerary-stop-text">
          <span class="itinerary-stop-title">${flag} ${shortName}</span>
          <span class="itinerary-stop-sub">${shortDates} · ${dest.country}</span>
        </div>
      `;
    }

    chip.addEventListener('click', () => {
      focusDestination(index);
    });

    bar.appendChild(chip);

    // Add arrow between stops
    if (index < destinationData.length - 1) {
      const arrow = document.createElement('span');
      arrow.className = 'itinerary-arrow';
      arrow.innerHTML = '➔';
      bar.appendChild(arrow);
    }

    i++;
  }
}

// Calculate side-opening offset (left or right of pin) so the map view never moves or rearranges
function getSidePopupOffset(latlng, width = 230, height = 240) {
  if (!map) return [0, -10];
  const containerPoint = map.latLngToContainerPoint(latlng);
  const mapSize = map.getSize();
  const mapWidth = mapSize.x;
  const mapHeight = mapSize.y;

  const isMobile = window.innerWidth <= 768;
  const effectiveW = isMobile ? Math.min(width, 185) : width;
  const effectiveH = isMobile ? Math.min(height, 120) : height;

  const actualWidth = Math.min(effectiveW, mapWidth - 30);
  const spaceOnRight = mapWidth - containerPoint.x;
  const spaceOnLeft = containerPoint.x;

  // Decide whether to open to the right or left of the pin
  let openToLeft = false;
  if (spaceOnRight < actualWidth + 20 && spaceOnLeft > spaceOnRight) {
    openToLeft = true;
  } else if (containerPoint.x > mapWidth * 0.52) {
    openToLeft = true;
  }

  let hOffset = Math.round(actualWidth / 2) + 14;
  let finalH = openToLeft ? -hOffset : hOffset;

  // Ensure horizontal bounds stay inside map padding
  let left = containerPoint.x - Math.round(actualWidth / 2) + finalH;
  let right = left + actualWidth;
  if (right > mapWidth - 10) {
    finalH -= (right - (mapWidth - 10));
  }
  if (left < 10) {
    finalH += (10 - left);
  }

  // Vertical centering and clamp (Leaflet popup has margin-bottom: 20px)
  const margin = 20;
  let vOffset = margin + Math.round(effectiveH / 2);
  let bottom = containerPoint.y + vOffset - margin;
  let top = bottom - effectiveH;

  if (top < 15) {
    vOffset = 15 - containerPoint.y + margin + effectiveH;
  } else if (bottom > mapHeight - 15) {
    vOffset = mapHeight - 15 - containerPoint.y + margin;
  }

  return [Math.round(finalH), Math.round(vOffset)];
}

function initMap() {
  const mapContainer = document.getElementById('leafletMap');
  if (!mapContainer) return;

  if (typeof L === 'undefined') {
    console.warn('Leaflet library (L) not available.');
    return;
  }

  googleLayers = {
    roadmap: L.tileLayer('https://mt{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
      subdomains: ['0', '1', '2', '3'],
      attribution: '&copy; Google Maps',
      maxZoom: 20
    }),
    terrain: L.tileLayer('https://mt{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}', {
      subdomains: ['0', '1', '2', '3'],
      attribution: '&copy; Google Maps (Terrain)',
      maxZoom: 20
    }),
    satellite: L.tileLayer('https://mt{s}.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {
      subdomains: ['0', '1', '2', '3'],
      attribution: '&copy; Google Maps (Satellite & Labels)',
      maxZoom: 20
    })
  };

  map = L.map('leafletMap', {
    scrollWheelZoom: true,
    doubleClickZoom: false,
    tap: false,
    zoomControl: true
  }).setView(DEFAULT_CENTER, DEFAULT_ZOOM);
  window.map = map;

  // Add initial Google Roadmap layer
  if (googleLayers[currentLayer]) {
    googleLayers[currentLayer].addTo(map);
  }

  const latlngs = [];

  // 1. Add Permanent Sight Star Markers for ALL destinations
  destinationData.forEach(dest => {
    const color = getCountryColor(dest.country);
    dest.mustVisitSites.forEach(site => {
      if (!site.coords) return;
      const starMarker = L.marker(site.coords, {
        icon: createStarIcon(color),
        zIndexOffset: 600,
        title: site.name
      }).addTo(map);

      // Tooltip on hover
      starMarker.bindTooltip(`⭐ ${site.name}`, {
        permanent: false,
        direction: 'top',
        offset: [0, -12],
        className: 'sight-star-tooltip'
      });

      // Rich popup on click with photo, category, name, and description
      const gmapsSightQuery = encodeURIComponent(`${site.name}, ${dest.name}`);
      const sightPopupHtml = `
        <div class="sight-star-popup">
          <div class="sight-star-thumb-wrap">
            <img src="${site.image}" alt="${site.name}" class="sight-star-thumb" loading="lazy" onerror="this.src='public/images/destinations/paris.jpg'" />
            <span class="sight-star-badge" style="background: ${color};">${dest.name}</span>
          </div>
          <div class="sight-star-content">
            <div class="sight-star-type">${site.type}</div>
            <h4 class="sight-star-title">${site.name}</h4>
            <p class="sight-star-desc">${site.desc}</p>
            <a href="https://www.google.com/maps/search/?api=1&query=${gmapsSightQuery}" target="_blank" rel="noopener noreferrer" class="btn-popup-gmaps">
              ⭐ Google Reviews & Nearby ↗
            </a>
          </div>
        </div>
      `;

      starMarker.bindPopup(sightPopupHtml, {
        maxWidth: window.innerWidth <= 768 ? 190 : 240,
        minWidth: window.innerWidth <= 768 ? 175 : 210,
        autoPan: false,
        className: 'custom-sight-popup side-popup'
      });

      starMarker.on('click', () => {
        const popup = starMarker.getPopup();
        if (popup) {
          const offset = getSidePopupOffset(site.coords, 230, 240);
          popup.options.offset = L.point(offset);
          popup.options.autoPan = false;
        }
      });

      sightMarkers.push(starMarker);
    });
  });

  // 1b. Add LDS Temple Markers with Custom Golden Spire Icons
  ldsTemplesData.forEach(temple => {
    const templeMarker = L.marker(temple.coords, {
      icon: createTempleIcon(),
      zIndexOffset: 750,
      title: temple.name
    }).addTo(map);

    templeMarker.bindTooltip(`🏛️ ${temple.name}`, {
      permanent: false,
      direction: 'top',
      offset: [0, -14],
      className: 'temple-tooltip'
    });

    const gmapsTempleQuery = encodeURIComponent(`${temple.name}, ${temple.address}`);
    const templePopupHtml = `
      <div class="sight-star-popup lds-temple-popup">
        <button type="button" class="popup-custom-close" aria-label="Close" onclick="if(window.map){window.map.closePopup();}">✕</button>
        <div class="sight-star-thumb-wrap temple-thumb-wrap">
          <img src="${temple.image}" alt="${temple.name}" class="sight-star-thumb" loading="lazy" onerror="this.onerror=null; this.src='public/images/temples/frankfurt-temple.jpg'" />
          <span class="sight-star-badge badge-temple-tag">🏛️ LDS Temple · ${temple.country}</span>
        </div>
        <div class="sight-star-content temple-popup-body">
          <div class="temple-popup-match">✨ ${temple.itineraryMatch}</div>
          <h4 class="sight-star-title">${temple.name}</h4>
          <p class="temple-popup-address">📍 ${temple.address}</p>
          <p class="sight-star-desc">${temple.description}</p>
          <div class="temple-popup-transit">
            <strong>🚆 Transit:</strong> ${temple.transitDirections}
          </div>
          <a href="https://www.google.com/maps/search/?api=1&query=${gmapsTempleQuery}" target="_blank" rel="noopener noreferrer" class="btn-popup-gmaps" style="margin-top: 8px;">
            ⭐ Google Reviews, Photos & Hours ↗
          </a>
        </div>
      </div>
    `;

    templeMarker.bindPopup(templePopupHtml, {
      maxWidth: window.innerWidth <= 768 ? 195 : 270,
      minWidth: window.innerWidth <= 768 ? 180 : 240,
      autoPan: false,
      className: 'custom-sight-popup custom-temple-popup side-popup'
    });

    templeMarker.on('click', () => {
      const popup = templeMarker.getPopup();
      if (popup) {
        const offset = getSidePopupOffset(temple.coords, 250, 300);
        popup.options.offset = L.point(offset);
        popup.options.autoPan = false;
      }
    });

    templeMarkers.push(templeMarker);
  });

  // 2. Add Destination City Markers & Popups
  destinationData.forEach((dest, index) => {
    latlngs.push(dest.coords);
    if (dest.id === 'cologne-dusseldorf') {
      // Return back to Frankfurt base before heading to Strasbourg
      const fraDest = destinationData.find(d => d.id === 'frankfurt');
      if (fraDest) latlngs.push(fraDest.coords);
    }

    // Dynamic marker styling
    const color = getCountryColor(dest.country);
    const marker = L.circleMarker(dest.coords, {
      radius: window.innerWidth <= 768 ? 11 : 9, // larger touch target on mobile
      fillColor: color,
      color: '#ffffff',
      weight: 3,
      opacity: 1,
      fillOpacity: 0.95,
      zIndexOffset: 800
    }).addTo(map);

    // Build rich popup HTML with photography, bulleted sights, and an explicit close button
    const sightsListHtml = dest.mustVisitSites.map(s => `
      <div class="popup-site-row">
        <img src="${s.image}" alt="${s.name}" class="popup-site-thumb" loading="lazy" onerror="this.src='public/images/destinations/paris.jpg'" />
        <div class="popup-site-info">
          <strong>${s.name}</strong>
          <span>${s.type}</span>
        </div>
      </div>
    `).join('');

    const popupHtml = `
      <div class="rich-popup-card">
        <button type="button" class="popup-custom-close" aria-label="Close" onclick="if(window.map){window.map.closePopup();}">✕</button>
        <div class="popup-hero-wrap">
          <img src="${dest.heroImage}" alt="${dest.name}" class="popup-hero-img" loading="lazy" onerror="this.src='public/images/destinations/paris.jpg'" />
          <span class="popup-country-tag ${dest.badgeClass}">${dest.country}</span>
        </div>
        <div class="popup-body">
          <div class="popup-dates">${dest.dates} <span class="popup-country-inline">· ${dest.country}</span></div>
          <h3 class="popup-title">${dest.name}</h3>
          
          <div class="popup-sites-title">⭐ Key Sights (starred on map):</div>
          <div class="popup-sites-list">
            ${sightsListHtml}
          </div>
          <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(dest.name + ', ' + dest.country)}" target="_blank" rel="noopener noreferrer" class="btn-popup-gmaps" style="margin-top: 6px;">
            <span class="gmaps-desktop-btn">🗺️ Explore ${dest.name} &amp; Reviews on Google Maps ↗</span>
            <span class="gmaps-mobile-btn">🗺️ Google Reviews &amp; Places ↗</span>
          </a>
        </div>
      </div>
    `;

    marker.bindPopup(popupHtml, {
      maxWidth: window.innerWidth <= 768 ? 190 : 280,
      minWidth: window.innerWidth <= 768 ? 175 : 260,
      autoPan: false,
      closeButton: false, // We use our custom prominent close button
      className: 'custom-leaflet-popup side-popup'
    });

    // When clicking the city dot directly on the map: open on side and highlight itinerary bar WITHOUT moving or flying the map!
    marker.on('click', () => {
      setActiveItineraryStop(index);
      const popup = marker.getPopup();
      if (popup) {
        const offset = getSidePopupOffset(dest.coords, 260, 310);
        popup.options.offset = L.point(offset);
        popup.options.autoPan = false;
      }
    });

    markers.push(marker);
  });

  // Polyline for journey flow
  routeLine = L.polyline(latlngs, {
    color: '#3b82f6',
    weight: 3.5,
    opacity: 0.8,
    dashArray: '7, 9',
    smoothFactor: 1
  }).addTo(map);

  // Double-click or double-tap anywhere on the map to inspect background places
  let lastMapClickTime = 0;
  let lastMapClickLatLng = null;
  let lastPopupTriggerTime = 0;

  function showSelectedLocationPopup(latlng) {
    const now = Date.now();
    if (now - lastPopupTriggerTime < 500) return; // Debounce to prevent duplicate popup
    lastPopupTriggerTime = now;

    const lat = latlng.lat;
    const lng = latlng.lng;
    const gmapsExploreUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
    const gmapsNearbyUrl = `https://www.google.com/maps/search/restaurants+attractions/@${lat},${lng},16z`;

    const content = `
      <div class="map-click-explore-card">
        <div class="map-click-head">
          <span class="map-click-pin">📍</span>
          <div>
            <strong>Selected Map Location</strong>
            <div class="map-click-coords">${lat.toFixed(4)}°N, ${lng.toFixed(4)}°E</div>
          </div>
        </div>
        <p class="map-click-note">Background businesses on the map are flat image tiles. Click below to view live Google Maps reviews, photos & nearby places for this spot:</p>
        <div class="map-click-btns">
          <a href="${gmapsExploreUrl}" target="_blank" rel="noopener noreferrer" class="btn-gmaps-primary">
            🗺️ Open Exact Spot in Google Maps ↗
          </a>
          <a href="${gmapsNearbyUrl}" target="_blank" rel="noopener noreferrer" class="btn-gmaps-secondary">
            🍽️ Search Nearby Restaurants & Reviews ↗
          </a>
        </div>
      </div>
    `;

    const offset = getSidePopupOffset(latlng, 260, 240);
    L.popup({
      maxWidth: window.innerWidth <= 768 ? 190 : 260,
      minWidth: window.innerWidth <= 768 ? 175 : 230,
      autoPan: false,
      offset: L.point(offset),
      className: 'custom-click-explore-popup side-popup'
    })
    .setLatLng(latlng)
    .setContent(content)
    .openOn(map);
  }

  // Native desktop double-click
  map.on('dblclick', (e) => {
    showSelectedLocationPopup(e.latlng);
  });

  // Mobile double-tap detection (tap twice within 380ms)
  map.on('click', (e) => {
    const now = Date.now();
    const timeDiff = now - lastMapClickTime;

    if (timeDiff < 380 && lastMapClickLatLng && map.distance(e.latlng, lastMapClickLatLng) < 2000) {
      showSelectedLocationPopup(e.latlng);
      lastMapClickTime = 0;
      lastMapClickLatLng = null;
    } else {
      lastMapClickTime = now;
      lastMapClickLatLng = e.latlng;
    }
  });

  // Safety net: ensure any opened popup never autoPans and stays nicely positioned on the side
  map.on('popupopen', (e) => {
    const popup = e.popup;
    if (!popup) return;
    popup.options.autoPan = false;
    const source = popup._source;
    if (source && source.getLatLng) {
      const isTemple = popup.options.className && popup.options.className.includes('custom-temple-popup');
      const isCity = popup.options.className && popup.options.className.includes('custom-leaflet-popup');
      const w = isTemple ? 250 : (isCity ? 260 : 230);
      const h = isTemple ? 300 : (isCity ? 310 : 240);
      const offset = getSidePopupOffset(source.getLatLng(), w, h);
      popup.options.offset = L.point(offset);
      popup.update();
    }
  });
}

function getCountryColor(country) {
  switch (country) {
    case 'France': return '#3b82f6';
    case 'Switzerland': return '#ef4444';
    case 'Netherlands': return '#f97316';
    case 'Germany': return '#eab308';
    case 'United Kingdom': return '#8b5cf6';
    default: return '#64748b';
  }
}

// Render Destination Cards Grid
function renderDestinationsGrid() {
  const grid = document.getElementById('destinationsGrid');
  if (!grid) return;
  grid.innerHTML = '';

  destinationData.forEach((dest, index) => {
    const card = document.createElement('div');
    card.className = 'dest-gallery-card';
    const heroImg = dest.heroImage || 'public/images/destinations/paris.jpg';
    const countryBadge = dest.badgeClass || 'badge-transit';
    const subTitle = dest.category || '';
    const descText = dest.description || '';

    card.innerHTML = `
      <div class="dest-gallery-img-wrap">
        <img src="${heroImg}" alt="${dest.name}" class="dest-gallery-img" loading="lazy" onerror="this.onerror=null; this.src='public/images/destinations/paris.jpg';">
        <span class="badge-country ${countryBadge}">${dest.country}</span>
      </div>
      <div class="dest-gallery-content">
        <div class="dest-dates">${dest.dates}</div>
        <h3>${dest.name}</h3>
        ${subTitle ? `<p class="dest-sub">${subTitle}</p>` : ''}
        ${descText ? `<p class="dest-desc">${descText}</p>` : ''}
        
        <div class="dest-sights-label">Must-See Sights:</div>
        <div class="dest-sights-chips">
          ${(dest.mustVisitSites || []).map(s => `<span class="site-chip" title="${s.desc}">${s.name}</span>`).join('')}
        </div>
        
        <div class="dest-gallery-actions" style="display: flex; flex-direction: column; gap: 6px;">
          <button class="btn btn-sm-map" data-index="${index}">
            📍 Locate on Map & View Sights
          </button>
          <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(dest.name + ', ' + dest.country)}" target="_blank" rel="noopener noreferrer" class="btn-card-gmaps" style="margin-top: 0;" title="Check Google reviews & explore on Google Maps">
            ⭐ Google Reviews & Places ↗
          </a>
        </div>
      </div>
    `;

    card.querySelector('.btn-sm-map').addEventListener('click', () => {
      const mapElem = document.getElementById('interactiveMap');
      if (mapElem) {
        mapElem.scrollIntoView({ behavior: 'smooth' });
      }
      focusDestination(index);
    });

    grid.appendChild(card);
  });
}

// Focus map on a specific temple
function focusTemple(templeId) {
  const templeIndex = ldsTemplesData.findIndex(t => t.id === templeId);
  if (templeIndex === -1 || !map) return;
  const temple = ldsTemplesData[templeIndex];

  // If temples are currently hidden, turn them back on
  if (!templesVisible) {
    toggleTemplesLayer(true);
  }

  isProgrammaticZoom = true;
  map.flyTo(temple.coords, DETAIL_ZOOM + 1, {
    duration: 1.1,
    easeLinearity: 0.25
  });

  setTimeout(() => {
    if (templeMarkers[templeIndex]) {
      const marker = templeMarkers[templeIndex];
      const popup = marker.getPopup();
      if (popup) {
        const offset = getSidePopupOffset(temple.coords, 250, 300);
        popup.options.offset = L.point(offset);
        popup.options.autoPan = false;
      }
      marker.openPopup();
    }
    isProgrammaticZoom = false;
  }, 900);
}

// Toggle temple markers on/off
function toggleTemplesLayer(forceState) {
  templesVisible = (typeof forceState === 'boolean') ? forceState : !templesVisible;
  templeMarkers.forEach(m => {
    if (templesVisible) {
      if (!map.hasLayer(m)) m.addTo(map);
    } else {
      if (map.hasLayer(m)) map.removeLayer(m);
    }
  });

  const btn = document.getElementById('templeToggleBtn');
  if (btn) {
    btn.classList.toggle('active', templesVisible);
  }
}

// Render LDS Temples Grid Showcase
function renderTemplesGrid() {
  const grid = document.getElementById('templesGrid');
  if (!grid) return;
  grid.innerHTML = '';

  ldsTemplesData.forEach(temple => {
    const card = document.createElement('div');
    card.className = 'temple-card';
    card.innerHTML = `
      <div class="temple-img-wrap">
        <img src="${temple.image}" alt="${temple.name}" class="temple-img" loading="lazy" onerror="this.onerror=null; this.src='public/images/temples/frankfurt-temple.jpg'">
        <span class="temple-badge-tag">🏛️ LDS Temple</span>
        <span class="temple-badge-country">${temple.country}</span>
      </div>
      <div class="temple-card-body">
        <div class="temple-match-banner">
          <span class="temple-match-icon">📍</span>
          <span><b>Nearest Stop:</b> ${temple.itineraryMatch}</span>
        </div>
        <h3 class="temple-title">${temple.name}</h3>
        <div class="temple-native-name">${temple.nativeName} · Dedicated ${temple.dedicated}</div>
        <div class="temple-address">📌 ${temple.address}</div>
        <div class="temple-dist-pill">⏱️ ${temple.distanceFromStop}</div>
        <p class="temple-desc">${temple.description}</p>
        
        <div class="temple-transit-box">
          <strong>🚆 Public Transit Access:</strong>
          <p>${temple.transitDirections}</p>
        </div>

        <button type="button" class="btn btn-temple-map" data-temple-id="${temple.id}">
          📍 Locate on Map & View Surroundings
        </button>
      </div>
    `;

    card.querySelector('.btn-temple-map').addEventListener('click', () => {
      const mapElem = document.getElementById('interactiveMap');
      if (mapElem) {
        mapElem.scrollIntoView({ behavior: 'smooth' });
      }
      focusTemple(temple.id);
    });

    grid.appendChild(card);
  });
}

// 21-Day Itinerary Data
const itineraryData = [
  {
    "day": "Day 1",
    "date": "15 Dec 2026",
    "city": "London ➔ Amsterdam Central",
    "country": "Transit",
    "badgeClass": "badge-transit",
    "cardHighlight": "highlight-transit",
    "title": "Departure Across English Channel · FlixBus Route N824 (Confirmed)",
    "activities": [
      "• <b>Evening (19:00 – 21:30):</b><ul class=\"activity-sublist\"><li>London Victoria Coach Station (164 Buckingham Palace Rd) – Baggage check-in</li></ul>",
      "• <b>Night (22:00 – 03:00):</b><ul class=\"activity-sublist\"><li>FlixBus Route N824 (Departs 22:00 · Booking Ref: 338 890 0447 · Seats 11C & 11D)</li><li>Dover Port (Eurotunnel / LeShuttle crossing to France)</li></ul>",
      "• <b>Early Morning (03:00 – 10:25+1d):</b><ul class=\"activity-sublist\"><li>Overnight coach transit across France & Belgium</li><li>Arrive Amsterdam Central Station (De Ruijterkade 153) at 10:25 AM</li></ul>"
    ],
        "admissionHtml": "<strong>Sightseeing Admission:</strong> <span class=\"admission-pill free\">✨ Free ($0 AUD)</span> (London departure & overnight coach transit)",
        "openingHtml": "<strong>🕒 Hours &amp; Open Status:</strong> <span class=\"opening-pill open\">🟢 Victoria Coach Station: Open 24/7 (365 Days)</span> <span class=\"opening-pill open\">🟢 FlixBus N824: Departs 22:00</span> <span class=\"schedule-note\">Confirmed Booking: 338 890 0447</span>",
    "stayTitle": "FlixBus N824 Sleeper (Confirmed)",
    "stayDesc": "London Victoria ➔ Amsterdam Central (De Ruijterkade 153)",
    "transitInfo": "🚌 FlixBus N824 · Seats 11C &amp; 11D (AUD $135.96 Paid)",
    "coords": [
      51.5074,
      -0.1278
    ]
  },
  {
    "day": "Day 2",
    "date": "16 Dec 2026",
    "city": "Amsterdam",
    "country": "Netherlands",
    "badgeClass": "badge-nl",
    "cardHighlight": "highlight-nl",
    "title": "Canal Ring & Amsterdam Light Festival",
    "activities": [
      "• <b>Morning (10:25 – 12:00):</b><ul class=\"activity-sublist\"><li>Arrive Amsterdam Central Station (10:25 AM)</li><li>GVB Tram Line 2 or 12 to Leidseplein</li><li>Amsterdam Hostel Leidseplein (luggage drop)</li></ul>",
      "• <b>Afternoon (12:30 – 16:30):</b><ul class=\"activity-sublist\"><li>UNESCO Canal Ring</li><li>Dam Square & Royal Palace exterior</li><li>Begijnhof Courtyard</li></ul>",
      "• <b>Evening (17:00 – 20:30):</b><ul class=\"activity-sublist\"><li>Amsterdam Light Festival (Herengracht & Keizersgracht)</li><li>Leidseplein</li></ul>"
    ],
        "admissionHtml": "<strong>Sightseeing Admission:</strong> <span class=\"admission-pill free\">✨ Free ($0 AUD)</span> (Canal Ring walking, Dam Square & Light Festival)",
        "openingHtml": "<strong>🕒 Hours &amp; Open Status:</strong> <span class=\"opening-pill open\">🟢 UNESCO Canal Ring: Open 24/7</span> <span class=\"opening-pill open\">🟢 Begijnhof Courtyard: Open 09:00–17:00</span> <span class=\"opening-pill open\">🟢 Amsterdam Light Festival: Active 17:00–23:00</span>",
    "stayTitle": "Amsterdam Hostel Leidseplein (Night 1 of 2)",
    "stayDesc": "Korte Leidsedwarsstraat, Leidseplein",
    "transitInfo": "🚇 GVB Tram Line 2 or 12 Day Pass (€9.00)",
    "coords": [
      52.3676,
      4.9041
    ]
  },
  {
    "day": "Day 3",
    "date": "17 Dec 2026",
    "city": "Amsterdam & Zaanse Schans",
    "country": "Netherlands",
    "badgeClass": "badge-nl",
    "cardHighlight": "highlight-nl",
    "title": "Historic Zaanse Schans Windmills, Rijksmuseum & Canal Cruise",
    "activities": [
      "• <b>Morning (09:00 – 12:30):</b><ul class=\"activity-sublist\"><li>NS Train: Amsterdam Centraal ➔ Koog-Zaandijk (17 min)</li><li>Zaanse Schans (Windmills & Catharina Hoeve Cheese Farm)</li><li>Return NS Train to Amsterdam Centraal</li></ul>",
      "• <b>Afternoon (13:30 – 17:00):</b><ul class=\"activity-sublist\"><li>Rijksmuseum (Museumplein)</li><li>Ice Village Christmas Market</li></ul>",
      "• <b>Evening (17:30 – 20:30):</b><ul class=\"activity-sublist\"><li>UNESCO Canal Boat Cruise (75 min)</li><li>The Jordaan canal walk</li></ul>"
    ],
        "admissionHtml": "<strong>Sightseeing Admission:</strong> <span class=\"admission-pill paid\">🎟️ Rijksmuseum: €22.50 (~A$38 AUD)</span> <span class=\"admission-pill paid\">🎟️ Canal Cruise: €18.00 (~A$30 AUD)</span> <span class=\"admission-pill free\">✨ Zaanse Schans: Free ($0 AUD)</span> <em>(Day 3 total paid: ~A$68 AUD)</em>",
        "openingHtml": "<strong>🕒 Hours &amp; Open Status:</strong> <span class=\"opening-pill open\">🟢 Rijksmuseum: Open 09:00–17:00 (Open 365 Days)</span> <span class=\"opening-pill open\">🟢 Zaanse Schans: Open 09:00–17:00</span> <span class=\"opening-pill open\">🟢 Canal Cruises: Open 09:00–22:00</span> <span class=\"schedule-note\">Book Rijksmuseum time slot online</span>",
    "stayTitle": "Amsterdam Hostel Leidseplein (Night 2 of 2)",
    "stayDesc": "Korte Leidsedwarsstraat 79, Leidseplein, Amsterdam",
    "transitInfo": "🚆 NS Train to Zaanse Schans (17 mins) + 🚇 GVB Day Pass",
    "coords": [
      52.4729,
      4.8219
    ]
  },
  {
      "day": "Day 4",
      "date": "18 Dec 2026",
      "city": "The Hague & Amsterdam",
      "country": "Netherlands",
      "badgeClass": "badge-nl",
      "cardHighlight": "highlight-nl",
      "title": "The Hague Temple (9:30 AM Session) & Peace Palace",
      "activities": [
      "• <b>Morning (08:00 – 12:30):</b><ul class=\"activity-sublist\"><li>NS Intercity Train: Amsterdam Centraal ➔ Den Haag / Zoetermeer (48 min)</li><li>The Hague Netherlands Temple (09:30 AM Endowment Session · Arrive 09:10 AM)</li></ul>",
      "• <b>Afternoon (13:00 – 16:30):</b><ul class=\"activity-sublist\"><li>Peace Palace (Vredespaleis Visitor Centre)</li><li>International Criminal Court (ICC) exterior</li></ul>",
      "• <b>Evening (17:30 – 21:00):</b><ul class=\"activity-sublist\"><li>NS Intercity Train back to Amsterdam Centraal</li><li>Amsterdam Base (Leidseplein)</li></ul>"
    ],
      "admissionHtml": "<strong>Sightseeing Admission:</strong> <span class=\"admission-pill free\">✨ Free ($0 AUD)</span> (The Hague Temple, Peace Palace exterior & ICC)",
      "openingHtml": "<strong>🕒 Hours &amp; Open Status:</strong> <span class=\"opening-pill open\">🟢 The Hague Temple: 9:30 AM Session (Arrive 9:10 AM)</span> <span class=\"opening-pill open\">🟢 Peace Palace Visitor Centre: Open 12:00–16:00</span> <span class=\"opening-pill open\">🟢 ICC Exterior: Open 24/7</span>",
      "stayTitle": "Amsterdam Base (Night 3 of 3)",
      "stayDesc": "Central Amsterdam · Sleep in a real bed!",
      "transitInfo": "🚆 NS Intercity + RandstadRail Day Return",
      "coords": [
          52.0786,
          4.3164
      ]
  },
  {
      "day": "Day 5",
      "date": "19 Dec 2026",
      "city": "Amsterdam ➔ Cologne",
      "country": "Germany",
      "badgeClass": "badge-de",
      "cardHighlight": "highlight-de",
      "title": "High-Speed Rail to Cologne: Kölner Dom & Lindt Chocolate Museum",
      "activities": [
      "• <b>Morning (08:30 – 11:45):</b><ul class=\"activity-sublist\"><li>DB ICE Train: Amsterdam Centraal ➔ Köln Hbf (Departs 08:38, 2h 38m)</li><li>Cologne Base Hotel (check-in / luggage drop)</li></ul>",
      "• <b>Afternoon (12:30 – 16:30):</b><ul class=\"activity-sublist\"><li>Cologne Cathedral (Kölner Dom)</li><li>Hohenzollern Bridge</li><li>Lindt Chocolate Museum</li></ul>",
      "• <b>Evening (17:00 – 21:00):</b><ul class=\"activity-sublist\"><li>Cologne Cathedral Christmas Market (Weihnachtsmarkt am Kölner Dom)</li><li>Alter Markt & Heinzels Wintermärchen</li></ul>"
    ],
      "admissionHtml": "<strong>Sightseeing Admission:</strong> <span class=\"admission-pill paid\">🎟️ Lindt Chocolate Museum: €17.50 (~A$29 AUD)</span> <span class=\"admission-pill free\">✨ Cologne Cathedral Nave: Free ($0 AUD)</span> <span class=\"admission-pill free\">✨ Cologne Christmas Markets: Free ($0 AUD)</span>",
      "openingHtml": "<strong>🕒 Hours &amp; Open Status:</strong> <span class=\"opening-pill open\">🟢 Cologne Cathedral: Open 06:00–20:00 (Open 365 Days)</span> <span class=\"opening-pill open\">🟢 Lindt Chocolate Museum: Open 10:00–18:00</span> <span class=\"opening-pill open\">🟢 Cologne Markets: Open 11:00–21:00</span>",
      "stayTitle": "Cologne Base (Night 1 of 2)",
      "stayDesc": "Central Cologne, Germany · Steps to Cathedral",
      "transitInfo": "🚆 DB ICE Train Amsterdam ➔ Köln Hbf (2h 38m)",
      "coords": [
          50.9413,
          6.9583
      ]
  },
  {
      "day": "Day 6",
      "date": "20 Dec 2026",
      "city": "Cologne & Düsseldorf",
      "country": "Germany",
      "badgeClass": "badge-de",
      "cardHighlight": "highlight-de",
      "title": "Sunday Reflection & Düsseldorf 7 Themed Christmas Markets",
      "activities": [
      "• <b>Morning (09:30 – 12:30):</b><ul class=\"activity-sublist\"><li>Sunday Church Worship & Reflection (Cologne)</li><li>Rhine River Promenade</li></ul>",
      "• <b>Afternoon (13:00 – 17:30):</b><ul class=\"activity-sublist\"><li>Regional Train: Köln Hbf ➔ Düsseldorf Hbf (20 min)</li><li>Düsseldorf 7 Themed Christmas Markets (Engelchen-Markt, Sternchen-Markt, Handwerker-Markt)</li></ul>",
      "• <b>Evening (17:30 – 20:30):</b><ul class=\"activity-sublist\"><li>Königsallee Canal & Corneliusplatz Ice Rink</li><li>Little Tokyo (Immermannstraße)</li><li>Regional Train: Düsseldorf Hbf ➔ Köln Hbf (20 min)</li></ul>"
    ],
      "admissionHtml": "<strong>Sightseeing Admission:</strong> <span class=\"admission-pill free\">✨ Free ($0 AUD)</span> (Düsseldorf 7 Christmas Markets & Königsallee)",
      "openingHtml": "<strong>🕒 Hours &amp; Open Status:</strong> <span class=\"opening-pill open\">🟢 Düsseldorf Markets: Open 11:00–20:00</span> <span class=\"opening-pill open\">🟢 Corneliusplatz Ice Rink: Open 11:00–21:00</span>",
      "stayTitle": "Cologne Base (Night 2 of 2)",
      "stayDesc": "Central Cologne, Germany",
      "transitInfo": "🚆 Regional Express Train (Köln ➔ Düsseldorf 20 mins)",
      "coords": [
          51.2256,
          6.7719
      ]
  },
  {
      "day": "Day 7",
      "date": "21 Dec 2026",
      "city": "Cologne ➔ Frankfurt",
      "country": "Germany",
      "badgeClass": "badge-de",
      "cardHighlight": "highlight-de",
      "title": "High-Speed Rail to Frankfurt: Römerberg Christmas Market & Altstadt",
      "activities": [
      "• <b>Morning (09:00 – 10:30):</b><ul class=\"activity-sublist\"><li>DB ICE Train: Köln Hbf ➔ Frankfurt am Main Hbf (1h 05m)</li><li>Hotel Cristall (Ottostrasse 3 · check-in / luggage drop)</li></ul>",
      "• <b>Afternoon (12:00 – 16:30):</b><ul class=\"activity-sublist\"><li>Eiserner Steg (Iron Footbridge over Main River)</li><li>Frankfurt Altstadt & Kaiserdom</li></ul>",
      "• <b>Evening (16:30 – 21:00):</b><ul class=\"activity-sublist\"><li>Frankfurter Weihnachtsmarkt at Römerberg (Main square & 30m tree)</li><li>Paulsplatz Christmas Market</li></ul>"
    ],
      "admissionHtml": "<strong>Sightseeing Admission:</strong> <span class=\"admission-pill free\">✨ Free ($0 AUD)</span> (Frankfurt Altstadt, Römerberg & Skyline)",
      "openingHtml": "<strong>🕒 Hours &amp; Open Status:</strong> <span class=\"opening-pill open\">🟢 Römerberg Christmas Market: Open 10:00–21:00 (Runs through 22 Dec)</span> <span class=\"opening-pill open\">🟢 Kaiserdom: Open 09:00–20:00</span>",
      "stayTitle": "Hotel Cristall - Frankfurt City (Night 1 of 2)",
      "stayDesc": "Ottostrasse 3, 60329 Frankfurt am Main",
      "transitInfo": "🚆 DB ICE High-Speed Train (Köln ➔ Frankfurt Hbf, 1h 05m)",
      "coords": [
          50.1109,
          8.6821
      ]
  },
  {
      "day": "Day 8",
      "date": "22 Dec 2026",
      "city": "Frankfurt am Main",
      "country": "Germany",
      "badgeClass": "badge-de",
      "cardHighlight": "highlight-de",
      "title": "Frankfurt Cultural Discovery & Frankfurt Temple (6:00 PM Session)",
      "activities": [
      "• <b>Morning & Midday (09:30 – 15:30):</b><ul class=\"activity-sublist\"><li>Goethe House & Museum</li><li>Museumsufer (Main River)</li><li>Zeil shopping street</li></ul>",
      "• <b>Late Afternoon & Evening (16:45 – 20:30):</b><ul class=\"activity-sublist\"><li>S-Bahn S5: Frankfurt Hbf ➔ Friedrichsdorf (26 min)</li><li>Frankfurt Germany Temple (06:00 PM Endowment Session · Arrive 05:15 PM)</li></ul>",
      "• <b>Night (20:30 – 22:00):</b><ul class=\"activity-sublist\"><li>S-Bahn S5: Friedrichsdorf ➔ Frankfurt Hbf (26 min)</li><li>Hotel Cristall</li></ul>"
    ],
      "admissionHtml": "<strong>Sightseeing Admission:</strong> <span class=\"admission-pill free\">✨ Free ($0 AUD)</span> (Frankfurt Temple & Main River) · <span class=\"admission-pill optional\">Optional Goethe House: €10 (~A$17 AUD)</span>",
      "openingHtml": "<strong>🕒 Hours &amp; Open Status:</strong> <span class=\"opening-pill open\">🟢 Frankfurt Germany Temple: 6:00 PM Session (Arrive 5:15 PM)</span> <span class=\"opening-pill open\">🟢 Goethe House: Open 10:00–18:00</span>",
      "stayTitle": "Hotel Cristall - Frankfurt City (Night 2 of 2)",
      "stayDesc": "Ottostrasse 3, 60329 Frankfurt am Main",
      "transitInfo": "🚇 Frankfurt RMV / S-Bahn S5 Day Pass to Friedrichsdorf",
      "coords": [
          50.2589,
          8.6437
      ]
  },
  {
    "day": "Day 9",
    "date": "23 Dec 2026",
    "city": "Frankfurt ➔ Strasbourg",
    "country": "France",
    "badgeClass": "badge-fr",
    "cardHighlight": "highlight-france",
    "title": "FlixBus N13 ➔ Strasbourg Capital of Christmas · Christkindelsmärik & Petite France",
    "activities": [
      "• <b>Early Morning (04:35 – 08:35):</b><ul class=\"activity-sublist\"><li>FlixBus Route N13: Frankfurt Hbf ➔ Strasbourg Place de l'Étoile (Departs 04:35, Arrives 08:35 · Booking Ref: 339 153 0857 · Seats 3A & 3B)</li><li>Strasbourg Tram Line D to Kehl base (luggage drop)</li></ul>",
      "• <b>Morning & Midday (09:30 – 14:00):</b><ul class=\"activity-sublist\"><li>Place Kléber (30m Great Christmas Tree / Grand Sapin)</li><li>Christkindelsmärik (Place Broglie)</li></ul>",
      "• <b>Afternoon & Evening (14:30 – 20:30):</b><ul class=\"activity-sublist\"><li>Petite France (Canals & Ponts Couverts)</li><li>Strasbourg Cathedral (Cathédrale Notre-Dame)</li></ul>"
    ],
        "admissionHtml": "<strong>Sightseeing Admission:</strong> <span class=\"admission-pill free\">✨ Free ($0 AUD)</span> (Strasbourg Cathedral, Petite France & Place Kléber Great Tree)",
        "openingHtml": "<strong>🕒 Hours &amp; Open Status:</strong> <span class=\"opening-pill open\">🟢 FlixBus N13: Departs 04:35 (Arr 08:35)</span> <span class=\"opening-pill open\">🟢 Strasbourg Christmas Markets: Open 11:00–20:00</span> <span class=\"opening-pill open\">🟢 Cathedral: Open 08:30–19:00</span>",
    "stayTitle": "B&B Hotel Kehl (Base for Alsace · Night 1 of 2)",
    "stayDesc": "15 Allensteiner Str., 77694 Kehl · 15-min direct Tram D into Strasbourg",
    "transitInfo": "🚌 FlixBus N13 (04:35–08:35) + 🚋 Strasbourg Tram Line D",
    "coords": [
      48.5839,
      7.7455
    ]
  },
  {
    "day": "Day 10",
    "date": "24 Dec 2026",
    "city": "Colmar & Alsace",
    "country": "France",
    "badgeClass": "badge-fr",
    "cardHighlight": "highlight-france",
    "title": "Fairytale Colmar · Petite Venise, Maison Pfister & Christmas Eve in Alsace",
    "activities": [
      "• <b>Morning (09:30 – 12:30):</b><ul class=\"activity-sublist\"><li>SNCF TER Train: Strasbourg ➔ Colmar (30 min)</li><li>Petite Venise & Quai de la Poissonnerie</li></ul>",
      "• <b>Afternoon (13:00 – 16:30):</b><ul class=\"activity-sublist\"><li>Maison Pfister (Rue des Marchands)</li><li>Colmar Old Town Christmas Markets (Closes 17:00 Christmas Eve)</li></ul>",
      "• <b>Evening (17:00 – 20:30):</b><ul class=\"activity-sublist\"><li>SNCF TER Train: Colmar ➔ Strasbourg (30 min)</li><li>Christmas Eve dinner & early rest for 04:05 AM coach</li></ul>"
    ],
        "admissionHtml": "<strong>Sightseeing Admission:</strong> <span class=\"admission-pill free\">✨ Free ($0 AUD)</span> (Colmar Petite Venise, Maison Pfister & Christmas Eve illuminations)",
        "openingHtml": "<strong>🕒 Hours &amp; Open Status:</strong> <span class=\"opening-pill open\">🟢 Colmar Markets: Open until 17:00 (Christmas Eve)</span> <span class=\"opening-pill open\">🟢 Petite Venise &amp; Maison Pfister: Open 24/7</span> <span class=\"schedule-note\">Early night rest for 04:05 AM Christmas coach</span>",
    "stayTitle": "B&B Hotel Kehl (Base for Alsace · Night 2 of 2)",
    "stayDesc": "15 Allensteiner Str., 77694 Kehl · Christmas Eve in Alsace",
    "transitInfo": "🚆 SNCF TER Fluo Train (€16.00) + 🚋 Tram Line D",
    "coords": [
      48.0794,
      7.3585
    ]
  },
  {
    "day": "Day 11",
    "date": "25 Dec 2026",
    "city": "Luzern & Interlaken",
    "country": "Switzerland",
    "badgeClass": "badge-ch",
    "cardHighlight": "highlight-swiss",
    "title": "Christmas Dawn Coach ➔ Lucerne (Kapellbrücke) ➔ Scenic Alpine Train to Interlaken",
    "activities": [
      "• <b>Christmas Dawn (04:05 – 07:10):</b><ul class=\"activity-sublist\"><li>FlixBus Route N846: Strasbourg Place de l'Étoile ➔ Luzern Landenberg (Departs 04:05, Arrives 07:10 · Booking Ref: 339 152 8020 · Seats 11C & 11D)</li></ul>",
      "• <b>Morning (07:30 – 11:30):</b><ul class=\"activity-sublist\"><li>Kapellbrücke (Chapel Bridge & Water Tower)</li><li>Lion Monument (Löwendenkmal)</li><li>Lake Lucerne Promenade</li></ul>",
      "• <b>Afternoon (12:05 – 14:00):</b><ul class=\"activity-sublist\"><li>Zentralbahn (Luzern-Interlaken Express) over Brünig Pass to Interlaken Ost</li><li>Swiss Alps Base Hotel (check-in)</li></ul>",
      "• <b>Evening (16:30 – 20:30):</b><ul class=\"activity-sublist\"><li>Höhematte Park (Jungfrau view)</li><li>Christmas Fondue Dinner (Interlaken)</li></ul>"
    ],
        "admissionHtml": "<strong>Sightseeing Admission:</strong> <span class=\"admission-pill free\">✨ Free ($0 AUD)</span> (Kapellbrücke, Lion Monument, Lake Lucerne & Interlaken Höhematte)",
        "openingHtml": "<strong>🕒 Hours &amp; Open Status:</strong> <span class=\"opening-pill open\">🟢 FlixBus N846: Departs 04:05 (Arr 07:10)</span> <span class=\"opening-pill open\">🟢 Kapellbrücke &amp; Lion Monument: Open 24/7</span> <span class=\"opening-pill open\">🟢 Swiss Trains: Regular holiday timetable</span>",
    "stayTitle": "Swiss Alps Base (Interlaken · Night 1 of 3)",
    "stayDesc": "Central Interlaken, Switzerland",
    "transitInfo": "🚌 FlixBus N846 (04:05–07:10) + 🚆 SBB Zentralbahn Express",
    "coords": [
      47.0502,
      8.3093
    ]
  },
  {
    "day": "Day 12",
    "date": "26 Dec 2026",
    "city": "Lauterbrunnen & Mürren",
    "country": "Switzerland",
    "badgeClass": "badge-ch",
    "cardHighlight": "highlight-swiss",
    "title": "Valley of 72 Waterfalls & Car-Free Mürren",
    "activities": [
      "• <b>Morning (09:00 – 12:30):</b><ul class=\"activity-sublist\"><li>BOB Train: Interlaken Ost ➔ Lauterbrunnen (20 min)</li><li>Lauterbrunnen Valley & Staubbach Falls</li></ul>",
      "• <b>Afternoon (13:00 – 16:30):</b><ul class=\"activity-sublist\"><li>BLM Cable Car: Lauterbrunnen ➔ Grütschalp (5 min)</li><li>Mountain Railway: Grütschalp ➔ Mürren (15 min)</li><li>Mürren car-free village (Eiger, Mönch & Jungfrau viewpoints)</li></ul>",
      "• <b>Evening (17:00 – 20:00):</b><ul class=\"activity-sublist\"><li>BLM Cable Car + BOB Train back to Interlaken Ost</li><li>Interlaken Base</li></ul>"
    ],
        "admissionHtml": "<strong>Sightseeing Admission:</strong> <span class=\"admission-pill free\">✨ Free ($0 AUD)</span> (Lauterbrunnen Valley, Staubbach Falls & Mürren car-free village)",
        "openingHtml": "<strong>🕒 Hours &amp; Open Status:</strong> <span class=\"opening-pill open\">🟢 BLM Cable Car &amp; Mürren Train: Operates 365 Days (06:00–20:30)</span> <span class=\"opening-pill open\">🟢 Lauterbrunnen Valley &amp; Staubbach Falls: Open 24/7</span>",
    "stayTitle": "Swiss Alps Base (Interlaken)",
    "stayDesc": "Central Interlaken, Switzerland",
    "transitInfo": "🚠 BOB Train + BLM Cable Car & Mountain Rail",
    "coords": [
      46.5935,
      7.909
    ]
  },
  {
    "day": "Day 13",
    "date": "27 Dec 2026",
    "city": "Lake Brienz, Sigriswil & Blausee",
    "country": "Switzerland",
    "badgeClass": "badge-ch",
    "cardHighlight": "highlight-swiss",
    "title": "CLOY Alpine Tour & Magical Blausee Winter Illuminated Lake",
    "activities": [
      "• <b>Morning (09:30 – 12:30):</b><ul class=\"activity-sublist\"><li>PostBus 103: Interlaken Ost ➔ Iseltwald (20 min)</li><li>Iseltwald Landing Stage (Lake Brienz CLOY Pier)</li></ul>",
      "• <b>Midday (13:15 – 15:30):</b><ul class=\"activity-sublist\"><li>PostBus 103 back to Interlaken + STI Bus 21/25 to Sigriswil</li><li>Sigriswil Panoramic Suspension Bridge</li></ul>",
      "• <b>Late Afternoon & Twilight (16:15 – 19:15):</b><ul class=\"activity-sublist\"><li>SBB Train + Bus 230 (via Spiez & Frutigen) to Blausee</li><li>Blausee Nature Park (Path of the 1,000 Lights lantern walk)</li><li>Return Bus 230 + SBB Train to Interlaken Base</li></ul>"
    ],
    "admissionHtml": "<strong>Sightseeing Admission:</strong> <span class=\"admission-pill paid\">🎟️ Iseltwald CLOY Pier: 5 CHF (~A$9 AUD)</span> <span class=\"admission-pill paid\">🎟️ Sigriswil Bridge: 8 CHF (~A$14 AUD)</span> <span class=\"admission-pill paid\">🎟️ Blausee: 13 CHF (~A$22 AUD)</span> <em>(Day 13 total paid: 26 CHF / ~A$45 AUD)</em>",
    "openingHtml": "<strong>🕒 Hours &amp; Open Status:</strong> <span class=\"opening-pill open\">🟢 Iseltwald CLOY Pier: Open 24/7</span> <span class=\"opening-pill open\">🟢 Sigriswil Bridge: Open 08:00–20:00</span> <span class=\"opening-pill open\">🟢 Blausee: Open 09:00–21:00 (1,000 Lights 16:00–20:00)</span>",
    "stayTitle": "Swiss Alps Base (Interlaken · Night 3 of 3)",
    "stayDesc": "Central Interlaken, Switzerland",
    "transitInfo": "🚌 PostBus 103 + 🚆 SBB to Spiez/Frutigen + Bus 230 to Blausee",
    "coords": [
      46.5327,
      7.6653
    ]
  },
  {
    "day": "Day 14",
    "date": "28 Dec 2026",
    "city": "Grindelwald, Rheinfall & Zurich ➔ Paris",
    "country": "Transit",
    "badgeClass": "badge-transit",
    "cardHighlight": "highlight-transit",
    "title": "Grindelwald First Cliff Walk & Rhine Falls Excursion ➔ Lake Zurich & Overnight Sleeper to Paris",
    "activities": [
      "• <b>Morning (08:30 – 12:00):</b><ul class=\"activity-sublist\"><li>BOB Train: Interlaken Ost ➔ Grindelwald (35 min)</li><li>Grindelwald First Gondola to 2,168m</li><li>First Cliff Walk by Tissot (Suspension bridge & cliff walkway)</li></ul>",
      "• <b>Afternoon (13:00 – 17:00):</b><ul class=\"activity-sublist\"><li>SBB InterCity Train: Interlaken Ost ➔ Zurich HB (2h · Luggage storage at HB)</li><li>S-Bahn S9: Zurich HB ➔ Neuhausen Rheinfall (48 min)</li><li>Rhine Falls / Rheinfall (Northern bank promenade & Schlössli Wörth)</li></ul>",
      "• <b>Evening & Night (17:30 – 21:00):</b><ul class=\"activity-sublist\"><li>S-Bahn S9 back to Zurich HB (48 min)</li><li>Lake Zurich Promenade, Lindenhof Hill & Bahnhofstrasse</li><li>21:00 FlixBus Overnight Sleeper Coach: Zurich Bus Station ➔ Paris Bercy Seine (Arrives 06:40+1d)</li></ul>"
    ],
    "admissionHtml": "<strong>Sightseeing Admission:</strong> <span class=\"admission-pill free\">✨ Free ($0 AUD)</span> (First Cliff Walk by Tissot, Rhine Falls North Bank & Lake Zurich are all 100% Free!)",
    "openingHtml": "<strong>🕒 Hours &amp; Open Status:</strong> <span class=\"opening-pill open\">🟢 First Gondola: 08:30–16:30</span> <span class=\"opening-pill open\">🟢 Rhine Falls: Open 24/7 (Free Access)</span> <span class=\"opening-pill open\">🟢 Lake Zurich: Open 24/7</span> <span class=\"opening-pill open\">🟢 Overnight Coach: Departs 21:00</span>",
    "stayTitle": "FlixBus Overnight Sleeper",
    "stayDesc": "Zurich Bus Station ➔ Paris Bercy Seine",
    "transitInfo": "🚆 SBB InterCity + S-Bahn S9 to Rheinfall + 🚌 Overnight Sleeper Coach",
    "coords": [
      47.6779,
      8.6156
    ]
  },
  {
      "day": "Day 15",
      "date": "29 Dec 2026",
      "city": "Paris",
      "country": "France",
      "badgeClass": "badge-fr",
      "cardHighlight": "highlight-france",
      "title": "Paris Arrival, Paris France Temple (2:30 PM Session) & Montmartre",
      "activities": [
      "• <b>Morning (06:40 – 11:30):</b><ul class=\"activity-sublist\"><li>Arrive Paris Bercy Seine (06:40 AM)</li><li>Metro Line 14 / Tram T3a to Break & Home Paris Italie Porte de Choisy (luggage drop)</li></ul>",
      "• <b>Afternoon (13:15 – 17:00):</b><ul class=\"activity-sublist\"><li>RER Line C + Phébus Bus to Le Chesnay</li><li>Paris France Temple (02:30 PM Endowment Session · Arrive 02:00 PM)</li></ul>",
      "• <b>Evening (17:30 – 21:00):</b><ul class=\"activity-sublist\"><li>Metro to Montmartre</li><li>Sacré-Cœur Basilica & Place du Tertre</li><li>Latin Quarter bistro dinner</li></ul>"
    ],
      "admissionHtml": "<strong>Sightseeing Admission:</strong> <span class=\"admission-pill free\">✨ Free ($0 AUD)</span> (Paris France Temple & Sacré-Cœur)",
      "openingHtml": "<strong>🕒 Hours &amp; Open Status:</strong> <span class=\"opening-pill open\">🟢 Paris France Temple: 2:30 PM Session (Arrive 2:00 PM)</span> <span class=\"opening-pill open\">🟢 Sacré-Cœur Basilica: Open 06:30–22:30 (Open 365 Days)</span>",
      "stayTitle": "Break & Home Paris Italie (CONFIRMED)",
      "stayDesc": "Porte de Choisy, Paris (Booked: Jean Aquino)",
      "transitInfo": "🚇 Paris Metro Line 14 + RER Line C",
      "coords": [
          48.8867,
          2.3431
      ]
  },
  {
    "day": "Day 16",
    "date": "30 Dec 2026",
    "city": "Paris",
    "country": "France",
    "badgeClass": "badge-fr",
    "cardHighlight": "highlight-france",
    "title": "Louvre Museum & Galeries Lafayette",
    "activities": [
      "• <b>Morning (09:00 – 13:00):</b><ul class=\"activity-sublist\"><li>Musée du Louvre (Mona Lisa, Venus de Milo, Winged Victory)</li></ul>",
      "• <b>Afternoon (13:30 – 16:30):</b><ul class=\"activity-sublist\"><li>Tuileries Garden & Place de la Concorde</li><li>Galeries Lafayette Haussmann (Christmas tree & glass dome)</li></ul>",
      "• <b>Evening (17:00 – 21:00):</b><ul class=\"activity-sublist\"><li>Avenue des Champs-Élysées</li><li>Arc de Triomphe (Rooftop panoramic terrace)</li></ul>"
    ],
        "admissionHtml": "<strong>Sightseeing Admission:</strong> <span class=\"admission-pill paid\">🎟️ Musée du Louvre: €22.00 (~A$37 AUD)</span> <span class=\"admission-pill paid\">🎟️ Arc de Triomphe Terrace: €16.00 (~A$27 AUD)</span> <span class=\"admission-pill free\">✨ Tuileries: Free ($0 AUD)</span> <em>(Day 16 total: ~A$64 AUD)</em>",
        "openingHtml": "<strong>🕒 Hours &amp; Open Status:</strong> <span class=\"opening-pill open\">🟢 Musée du Louvre: Open Wed 09:00–18:00 (Closed Tuesdays · Day 16 is Wednesday!)</span> <span class=\"opening-pill open\">🟢 Arc de Triomphe Terrace: Open 10:00–22:30</span> <span class=\"opening-pill open\">🟢 Galeries Lafayette: Open 10:00–20:30</span> <span class=\"schedule-note\">Reserve Louvre time slot online</span>",
    "stayTitle": "Break & Home Paris Italie (CONFIRMED)",
    "stayDesc": "Porte de Choisy, Paris",
    "transitInfo": "🚇 Paris Metro Line 7 + Metro Line 1",
    "coords": [
      48.8606,
      2.3376
    ]
  },
  {
    "day": "Day 17",
    "date": "31 Dec 2026",
    "city": "Paris (NYE)",
    "country": "France",
    "badgeClass": "badge-fr",
    "cardHighlight": "highlight-france",
    "title": "Musée d'Orsay & New Year's Eve on Champs-Élysées",
    "activities": [
      "• <b>Morning (09:30 – 13:00):</b><ul class=\"activity-sublist\"><li>Musée d'Orsay (Impressionist masterpieces)</li></ul>",
      "• <b>Afternoon (14:00 – 17:00):</b><ul class=\"activity-sublist\"><li>Île de la Cité & Notre-Dame Cathedral exterior</li><li>Shakespeare and Company bookstore</li></ul>",
      "• <b>Evening & Midnight (20:00 – 01:00):</b><ul class=\"activity-sublist\"><li>Trocadéro (Eiffel Tower light show)</li><li>Champs-Élysées & Arc de Triomphe (Official NYE countdown · Metro runs free all night)</li></ul>"
    ],
        "admissionHtml": "<strong>Sightseeing Admission:</strong> <span class=\"admission-pill paid\">🎟️ Musée d'Orsay: €16.00 (~A$27 AUD)</span> <span class=\"admission-pill free\">✨ Notre-Dame Nave: Free ($0 AUD)</span> <span class=\"admission-pill free\">✨ Eiffel Tower & NYE Countdown: Free ($0 AUD)</span>",
        "openingHtml": "<strong>🕒 Hours &amp; Open Status:</strong> <span class=\"opening-pill open\">🟢 Musée d'Orsay: Open Thu 09:30–18:00 (Closed Mondays · Day 17 is Thursday!)</span> <span class=\"opening-pill open\">🟢 Notre-Dame Cathedral: Open 07:45–19:00</span> <span class=\"opening-pill open\">🟢 Champs-Élysées NYE Celebration: Open All Night (Metro is Free!)</span>",
    "stayTitle": "Break & Home Paris Italie (CONFIRMED)",
    "stayDesc": "Porte de Choisy, Paris",
    "transitInfo": "🚆 RER C + Metro Line 4/1 (Free all-night NYE transit)",
    "coords": [
      48.8584,
      2.2945
    ]
  },
  {
    "day": "Day 18",
    "date": "01 Jan 2027",
    "city": "Paris",
    "country": "France",
    "badgeClass": "badge-fr",
    "cardHighlight": "highlight-france",
    "title": "New Year's Day in Paris: Jardin du Luxembourg & Historic Le Marais",
    "activities": [
      "• <b>Morning (10:30 – 13:00):</b><ul class=\"activity-sublist\"><li>Jardin du Luxembourg (Gardens & Medici Fountain)</li></ul>",
      "• <b>Afternoon (13:30 – 16:30):</b><ul class=\"activity-sublist\"><li>Le Marais historic district</li><li>Place des Vosges</li></ul>",
      "• <b>Evening (17:30 – 20:30):</b><ul class=\"activity-sublist\"><li>Latin Quarter & Saint-Germain-des-Prés</li><li>Seine riverbanks stroll</li></ul>"
    ],
        "admissionHtml": "<strong>Sightseeing Admission:</strong> <span class=\"admission-pill free\">✨ Free ($0 AUD)</span> (Jardin du Luxembourg, Le Marais & Saint-Germain walking)",
        "openingHtml": "<strong>🕒 Hours &amp; Open Status:</strong> <span class=\"opening-pill open\">🟢 Jardin du Luxembourg: Open 365 Days (08:00–17:00)</span> <span class=\"opening-pill open\">🟢 Le Marais &amp; Place des Vosges: Open 24/7</span> <span class=\"opening-pill open\">🟢 Latin Quarter &amp; Saint-Germain: Open 24/7</span> <span class=\"schedule-note\">Closed state museums (Louvre/Orsay/Versailles) intentionally avoided!</span>",
    "stayTitle": "Break & Home Paris Italie (CONFIRMED)",
    "stayDesc": "Porte de Choisy, Paris",
    "transitInfo": "🚇 Paris Metro Line 4/10 (Central Paris Walkable Districts)",
    "coords": [
      48.8462,
      2.3372
    ]
  },
  {
    "day": "Day 19",
    "date": "02 Jan 2027",
    "city": "Versailles",
    "country": "France",
    "badgeClass": "badge-fr",
    "cardHighlight": "highlight-france",
    "title": "Royal Palace of Versailles & Paris LDS Temple",
    "activities": [
      "• <b>Morning (09:00 – 13:30):</b><ul class=\"activity-sublist\"><li>RER Line C: Paris ➔ Versailles Château Rive Gauche (40 min)</li><li>Palace of Versailles (Hall of Mirrors & State Apartments)</li></ul>",
      "• <b>Afternoon (14:00 – 16:30):</b><ul class=\"activity-sublist\"><li>Phébus Bus 2: Versailles Palace ➔ Le Chesnay (5 min)</li><li>Paris France LDS Temple grounds & reflection gardens</li></ul>",
      "• <b>Evening (17:30 – 21:00):</b><ul class=\"activity-sublist\"><li>RER Line C return to Paris</li><li>Celebration dinner in central Paris</li></ul>"
    ],
        "admissionHtml": "<strong>Sightseeing Admission:</strong> <span class=\"admission-pill paid\">🎟️ Palace of Versailles: €24.00 (~A$40 AUD)</span> <span class=\"admission-pill free\">✨ Paris France Temple: Free ($0 AUD)</span>",
        "openingHtml": "<strong>🕒 Hours &amp; Open Status:</strong> <span class=\"opening-pill open\">🟢 Palace of Versailles: Open Sat 09:00–17:30 (Closed Mondays &amp; 01 Jan · Day 19 is Saturday!)</span> <span class=\"opening-pill open\">🟢 Paris France Temple: Open Saturdays (08:30–17:30)</span> <span class=\"schedule-note\">Reserve Versailles Passport time slot online</span>",
    "stayTitle": "Break & Home Paris Italie (CONFIRMED)",
    "stayDesc": "Porte de Choisy, Paris",
    "transitInfo": "🚆 RER Line C direct (€4.15) + Phébus Bus 2 / 5-min Taxi",
    "coords": [
      48.8049,
      2.1204
    ]
  },
  {
    "day": "Day 20",
    "date": "03 Jan 2027",
    "city": "Paris ➔ London Victoria",
    "country": "Transit",
    "badgeClass": "badge-transit",
    "cardHighlight": "highlight-transit",
    "title": "Final Parisian Highlights · Confirmed FlixBus Route 1700 to London",
    "activities": [
      "• <b>Morning (10:00 – 13:00):</b><ul class=\"activity-sublist\"><li>Boulevard Saint-Michel & Latin Quarter</li><li>Pont Alexandre III & Grand Palais view</li></ul>",
      "• <b>Afternoon (14:00 – 18:00):</b><ul class=\"activity-sublist\"><li>Break & Home Paris Italie (pack bags & check-out)</li><li>Seine riverbank café rest</li></ul>",
      "• <b>Night (21:30 – 23:00):</b><ul class=\"activity-sublist\"><li>Transfer to Paris Bercy Seine terminal (210 Quai de Bercy)</li><li>FlixBus Route 1700 (Departs 23:00 · Booking Ref: 338 920 9866 · direct overnight coach to London Victoria)</li><li>Eurotunnel crossing back into UK</li></ul>"
    ],
        "admissionHtml": "<strong>Sightseeing Admission:</strong> <span class=\"admission-pill free\">✨ Free ($0 AUD)</span> (Pont Alexandre III, Paris walking & Eurotunnel coach transit)",
        "openingHtml": "<strong>🕒 Hours &amp; Open Status:</strong> <span class=\"opening-pill open\">🟢 Pont Alexandre III &amp; Seine: Open 24/7</span> <span class=\"opening-pill open\">🟢 Paris Bakeries &amp; Ladurée: Open Sun 10:00–18:00</span> <span class=\"opening-pill open\">🟢 FlixBus Route 1700: Departs 23:00</span> <span class=\"schedule-note\">Confirmed Booking: 338 920 9866</span>",
    "stayTitle": "FlixBus Route 1700 Sleeper (Confirmed)",
    "stayDesc": "Paris Bercy Seine ➔ London Victoria Coach Station",
    "transitInfo": "🚌 FlixBus 1700 (23:00–07:25+1d) · AUD $169.98 Paid",
    "coords": [
      48.8398,
      2.3783
    ]
  },
  {
    "day": "Day 21",
    "date": "04 Jan 2027",
    "city": "London",
    "country": "United Kingdom",
    "badgeClass": "badge-uk",
    "cardHighlight": "highlight-uk",
    "title": "Arrival Back in UK & Return to Southampton Base",
    "activities": [
      "• <b>Morning (07:25 – 10:30):</b><ul class=\"activity-sublist\"><li>Arrive London Victoria Coach Station (07:25 AM)</li><li>Breakfast at Victoria</li></ul>",
      "• <b>Afternoon (11:30 – 14:30):</b><ul class=\"activity-sublist\"><li>South Western Railway: London Waterloo ➔ Southampton Central (1h 15m)</li><li>Return to UK family base (Southampton)</li></ul>",
      "• <b>Evening:</b><ul class=\"activity-sublist\"><li>Rest & recovery</li></ul>"
    ],
        "admissionHtml": "<strong>Sightseeing Admission:</strong> <span class=\"admission-pill free\">✨ Free ($0 AUD)</span> (London UK rest & flight departure)",
        "openingHtml": "<strong>🕒 Hours &amp; Open Status:</strong> <span class=\"opening-pill open\">🟢 Victoria Coach Station: Open 24/7</span> <span class=\"opening-pill open\">🟢 UK Rail &amp; Coaches: Standard Monday Schedules</span> <span class=\"opening-pill open\">🟢 International Flights: Standard Operations</span>",
    "stayTitle": "UK Family Residence",
    "stayDesc": "Southampton, United Kingdom",
    "transitInfo": "🚆 London Underground + South Western Railway",
    "coords": [
      50.9097,
      -1.4044
    ]
  }
];

let currentItineraryView = 'table';
let currentItineraryFilter = 'all';

// Focus on a specific day stop on the map
function focusDayOnMap(item) {
  const mapElem = document.getElementById('interactiveMap');
  if (mapElem) {
    mapElem.scrollIntoView({ behavior: 'smooth' });
  }
  if (typeof map !== 'undefined' && map && typeof map.flyTo === 'function') {
    isProgrammaticZoom = true;
    map.flyTo(item.coords, DETAIL_ZOOM, { duration: 1.0 });

    // Find matching destination marker (prioritizing date-specific stops)
    let destIndex = -1;
    if (item.date && item.date.includes('24 Dec')) {
      destIndex = destinationData.findIndex(d => d.id === 'zurich-arrival');
    } else if (item.date && item.date.includes('28 Dec')) {
      destIndex = destinationData.findIndex(d => d.id === 'zurich-departure');
    } else if (item.date && item.date.includes('04 Jan')) {
      destIndex = destinationData.findIndex(d => d.id === 'london-return');
    }
    if (destIndex === -1) {
      destIndex = destinationData.findIndex(d => 
        item.city.toLowerCase().includes(d.name.toLowerCase().split(' ')[0]) || 
        d.name.toLowerCase().includes(item.city.toLowerCase())
      );
    }
    if (destIndex !== -1) {
      setActiveItineraryStop(destIndex);
      setTimeout(() => {
        if (markers && markers[destIndex]) {
          markers[destIndex].openPopup();
        }
        isProgrammaticZoom = false;
      }, 800);
    } else {
      setTimeout(() => {
        isProgrammaticZoom = false;
      }, 800);
    }
  }
}

// Render Master Itinerary Table
function renderItineraryTable(filter = 'all') {
  const tbody = document.getElementById('itineraryTableBody');
  if (!tbody) return;
  tbody.innerHTML = '';

  itineraryData.forEach((item) => {
    if (filter !== 'all') {
      if (filter === 'France' && item.country !== 'France') return;
      if (filter === 'Switzerland' && item.country !== 'Switzerland') return;
      if (filter === 'Netherlands' && item.country !== 'Netherlands') return;
      if (filter === 'Germany' && item.country !== 'Germany') return;
      if (filter === 'Transit' && item.country !== 'Transit') return;
    }

    const tr = document.createElement('tr');
    tr.className = `itinerary-table-row row-${item.badgeClass}`;
    tr.setAttribute('data-country', item.country);

    const activitiesHtml = Array.isArray(item.activities)
      ? `<div class="table-activities-list">
          ${item.activities.map(act => `<div class="table-activity-item">${act}</div>`).join('')}
        </div>`
      : `<p class="table-activity-item">${item.activities}</p>`;

    const admissionHtml = item.admissionHtml
      ? `<div class="table-admission-item">${item.admissionHtml}</div>`
      : '';

    const openingHtml = item.openingHtml
      ? `<div class="table-opening-item">${item.openingHtml}</div>`
      : '';

    tr.innerHTML = `
      <td class="col-table-day">
        <span class="table-day-badge">${item.day}</span>
        <span class="table-date-str">${item.date}</span>
      </td>
      <td class="col-table-loc">
        <div class="table-loc-name">${item.city}</div>
        <span class="badge-country ${item.badgeClass}">${item.country}</span>
      </td>
      <td class="col-table-plan">
        <div class="table-plan-title">${item.title}</div>
        ${activitiesHtml}
        ${admissionHtml}
        ${openingHtml}
      </td>
      <td class="col-table-stay">
        <div class="table-hotel-name">${item.stayTitle}</div>
        <div class="table-hotel-addr">${item.stayDesc}</div>
        ${item.transitInfo ? `<div class="table-transit-mode"><i>${item.transitInfo}</i></div>` : ''}
      </td>
      <td class="col-table-action">
        <button type="button" class="btn-table-photos" title="View Photos of ${item.city}">
          📸 Photos
        </button>
      </td>
    `;

    // Clicking row or photos button opens day photo gallery (NO MAP HYPERLINK)
    tr.addEventListener('click', (e) => {
      if (e.target.closest('a') || e.target.closest('button')) return;
      const dNum = parseInt(item.day.replace('Day ', ''), 10) || 1;
      openDayPhotosModal(dNum);
    });

    const photoBtn = tr.querySelector('.btn-table-photos');
    if (photoBtn) {
      photoBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const dNum = parseInt(item.day.replace('Day ', ''), 10) || 1;
        openDayPhotosModal(dNum);
      });
    }

    tbody.appendChild(tr);
  });
}

function getHotelGmapsBtn(item) {
  if (!item.stayTitle || item.stayTitle.includes('FlixBus') || item.stayTitle.includes('Transit') || item.stayTitle.includes('Overnight Sleeper') || item.stayTitle.includes('UK Family Residence')) {
    return '';
  }
  const cleanName = item.stayTitle.replace(/\(.*?\)/g, '').trim();
  const query = encodeURIComponent(`${cleanName}, ${item.city}`);
  return `
    <a href="https://www.google.com/maps/search/?api=1&query=${query}" target="_blank" rel="noopener noreferrer" class="btn-card-gmaps" title="Check Google reviews, ratings & nearby places" onclick="event.stopPropagation();">
      ⭐ Google Reviews & Nearby ↗
    </a>
  `;
}

function getTransitVlogBtn(item) {
  const dayNum = parseInt((item.day || '').replace(/\D+/g, ''), 10) || 1;
  const vlogs = window.youtubeTransitVlogs || [];
  const vlog = vlogs.find(v => v.dayNum === dayNum);
  if (!vlog) return '';
  return `
    <a href="${vlog.videoUrl}" target="_blank" rel="noopener noreferrer" class="btn-card-video" title="${vlog.channelName}: ${vlog.videoTitle}" onclick="event.stopPropagation();">
      🎥 Transit Vlog (${vlog.channelName}) ↗
    </a>
  `;
}

// Render Cards Timeline List
function renderTimeline(filter = 'all') {
  const container = document.getElementById('timelineContainer');
  if (!container) return;
  container.innerHTML = '';

  itineraryData.forEach((item) => {
    if (filter !== 'all') {
      if (filter === 'France' && item.country !== 'France') return;
      if (filter === 'Switzerland' && item.country !== 'Switzerland') return;
      if (filter === 'Netherlands' && item.country !== 'Netherlands') return;
      if (filter === 'Germany' && item.country !== 'Germany') return;
      if (filter === 'Transit' && item.country !== 'Transit') return;
    }

    const card = document.createElement('div');
    card.className = `day-card ${item.cardHighlight}`;
    card.setAttribute('data-country', item.country);

    const activitiesHtml = Array.isArray(item.activities)
      ? `<div class="card-activities-list">
          ${item.activities.map(act => `<div class="card-activity-item">${act}</div>`).join('')}
        </div>`
      : `<p class="card-activity-item">${item.activities}</p>`;

    const cardAdmissionHtml = item.admissionHtml
      ? `<div class="card-admission-item">${item.admissionHtml}</div>`
      : '';

    const cardOpeningHtml = item.openingHtml
      ? `<div class="card-opening-item">${item.openingHtml}</div>`
      : '';

    card.innerHTML = `
      <div class="day-card-header">
        <div class="day-card-meta">
          <span class="card-day-badge">${item.day}</span>
          <span class="card-date-badge">${item.date}</span>
          <span class="badge-country ${item.badgeClass}">${item.country}</span>
        </div>
        <div class="day-card-city">
          <span class="city-icon">📍</span>
          <span class="city-text">${item.city}</span>
        </div>
      </div>
      <div class="day-card-content">
        <div class="day-card-main">
          <h4 class="card-day-theme">${item.title}</h4>
          ${activitiesHtml}
          ${cardAdmissionHtml}
          ${cardOpeningHtml}
        </div>
        <div class="day-card-side">
          <div class="card-stay-box">
            <div class="stay-header-label">🏨 Accommodation & Transit</div>
            <div class="stay-hotel-name">${item.stayTitle}</div>
            <div class="stay-hotel-addr">${item.stayDesc}</div>
            ${item.transitInfo ? `<div class="stay-transit-badge">${item.transitInfo}</div>` : ''}
            <button type="button" class="btn-card-photos" data-day="${item.day}">
              📸 View Photos (${(window.galleryData && window.galleryData.find(d => d.dayNum === (parseInt((item.day || '').replace(/\D+/g, ''), 10) || 1))?.sights?.length) || 3})
            </button>
            ${getTransitVlogBtn(item)}
            ${getHotelGmapsBtn(item)}
          </div>
        </div>
      </div>
    `;

    const mapBtn = card.querySelector('.btn-card-map');
    if (mapBtn) {
      mapBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        focusDayOnMap(item);
      });
    }

    card.addEventListener('click', () => {
      focusDayOnMap(item);
    });

    container.appendChild(card);
  });
}

// ==========================================================================
// Itinerary View Switcher (Table vs Cards vs Visual Photo Gallery)
// ==========================================================================
let currentMainLightboxIndex = 0;

function switchItineraryView(view) {
  currentItineraryView = view;
  const tableWrapper = document.getElementById('itineraryTableWrapper');
  const cardsContainer = document.getElementById('timelineContainer');
  const galleryContainer = document.getElementById('galleryViewContainer');
  const tableBtn = document.getElementById('viewTableBtn');
  const cardsBtn = document.getElementById('viewCardsBtn');
  const galleryBtn = document.getElementById('viewGalleryBtn');

  if (view === 'table') {
    if (tableWrapper) tableWrapper.style.display = 'block';
    if (cardsContainer) cardsContainer.style.display = 'none';
    if (galleryContainer) galleryContainer.style.display = 'none';
    if (tableBtn) tableBtn.classList.add('active');
    if (cardsBtn) cardsBtn.classList.remove('active');
    if (galleryBtn) galleryBtn.classList.remove('active');
    renderItineraryTable(currentItineraryFilter);
  } else if (view === 'cards') {
    if (tableWrapper) tableWrapper.style.display = 'none';
    if (cardsContainer) cardsContainer.style.display = 'flex';
    if (galleryContainer) galleryContainer.style.display = 'none';
    if (tableBtn) tableBtn.classList.remove('active');
    if (cardsBtn) cardsBtn.classList.add('active');
    if (galleryBtn) galleryBtn.classList.remove('active');
    renderTimeline(currentItineraryFilter);
  } else if (view === 'gallery') {
    if (tableWrapper) tableWrapper.style.display = 'none';
    if (cardsContainer) cardsContainer.style.display = 'none';
    if (galleryContainer) galleryContainer.style.display = 'block';
    if (tableBtn) tableBtn.classList.remove('active');
    if (cardsBtn) cardsBtn.classList.remove('active');
    if (galleryBtn) galleryBtn.classList.add('active');
    renderGalleryView(currentItineraryFilter);
  }
}

// Render Integrated Visual Day-by-Day Photo Gallery
function renderGalleryView(filter = 'all') {
  const data = window.galleryData || [];
  const quickNav = document.getElementById('mainDayQuickNav');
  const cardsContainer = document.getElementById('mainGalleryCards');
  if (!cardsContainer) return;

  // Render Day Quick Jump Nav (if not already rendered)
  if (quickNav && quickNav.children.length === 0) {
    quickNav.innerHTML = data.map(day => `
      <a href="#gallery-day-${day.dayNum}" class="day-pill" data-day="${day.dayNum}">
        <span>${getDayFlagEmoji(day.countryFilter)}</span>
        <span>${day.day}</span>
      </a>
    `).join('');

    quickNav.querySelectorAll('.day-pill').forEach(pill => {
      pill.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = pill.getAttribute('href');
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
          targetEl.classList.add('highlight-active');
          setTimeout(() => targetEl.classList.remove('highlight-active'), 1800);
        }
      });
    });
  }

  // Filter days
  const filteredDays = data.filter(day => {
    if (filter === 'all') return true;
    if (filter === 'France' && day.country !== 'France') return false;
    if (filter === 'Switzerland' && day.country !== 'Switzerland') return false;
    if (filter === 'Netherlands' && day.country !== 'Netherlands') return false;
    if (filter === 'Germany' && day.country !== 'Germany') return false;
    if (filter === 'Transit' && day.country !== 'Transit') return false;
    return true;
  });

  const flatSights = window.allSightsFlat || [];

  if (filteredDays.length === 0) {
    cardsContainer.innerHTML = `
      <div style="text-align: center; padding: 50px 20px; background: rgba(255,255,255,0.03); border-radius: 14px; border: 1px dashed rgba(255,255,255,0.15);">
        <p style="color: #cbd5e1; font-size: 1.1rem;">No sites found matching the selected country filter.</p>
      </div>
    `;
    return;
  }

  cardsContainer.innerHTML = filteredDays.map(day => `
    <article class="day-section" id="gallery-day-${day.dayNum}" style="margin-bottom: 32px;">
      <header class="day-header">
        <div>
          <div class="day-title-meta">
            <span class="day-number-badge ${day.badgeClass}">${day.day}</span>
            <span class="day-date-text">📅 ${day.date}</span>
            <span class="day-city-flag">${getDayFlagEmoji(day.countryFilter)} ${day.city}</span>
          </div>
          <h3 class="day-theme-title">${day.title}</h3>
        </div>
        <div class="day-info-pills">
          <div class="day-stay-badge">
            <span>🏨</span>
            <span><strong>Stay:</strong> ${day.stay}</span>
          </div>
          <div class="day-transit-badge">
            <span>${day.transit}</span>
          </div>
        </div>
      </header>

      <div class="sights-grid">
        ${day.sights.map(sight => {
          const globalIdx = flatSights.findIndex(s => s.name === sight.name && s.dayNum === day.dayNum);
          return `
            <div class="sight-photo-card" data-global-index="${globalIdx}">
              <div class="sight-img-wrapper" onclick="openMainLightbox(${globalIdx})" title="Click to view full-resolution photo">
                <img src="${sight.image}" alt="${sight.name}" loading="lazy">
                <span class="sight-category-tag">${sight.category}</span>
                <div class="sight-expand-overlay">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                  <span>Enlarge Photo</span>
                </div>
              </div>

              <div class="sight-card-body">
                <div class="sight-time-loc">
                  <span class="sight-time">⏰ ${sight.time}</span>
                  <span>📍 ${sight.location.split(',')[0]}</span>
                </div>
                <h4 class="sight-name" style="font-size: 1.15rem; margin-bottom: 8px;">${sight.name}</h4>
                ${sight.admission ? `<div class="sight-admission-badge ${sight.isPaid ? 'paid' : 'free'}">${sight.isPaid ? '🎟️ Admission: ' : '✨ Entry: '}${sight.admission}</div>` : ''}
                ${sight.hours ? `<div class="sight-hours-badge">🕒 <strong>Hours:</strong> ${sight.hours}</div>` : ''}
                <p class="sight-desc" style="font-size: 0.88rem; line-height: 1.55; margin-bottom: 14px; margin-top: 8px;">${sight.desc}</p>
                
                <div class="sight-actions-row">
                  <button type="button" class="btn-sight-action" onclick="openMainLightbox(${globalIdx})">
                    🔍 Enlarge
                  </button>
                  <button type="button" class="btn-sight-action" onclick="focusSightOnMapByIndex(${globalIdx})">
                    📍 Focus on Map
                  </button>
                  <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(sight.mapsQuery || sight.name)}" 
                     target="_blank" rel="noopener noreferrer" class="btn-sight-action">
                    ⭐ Reviews ↗
                  </a>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </article>
  `).join('');
}

function getDayFlagEmoji(country) {
  switch (country) {
    case 'france': return '🇫🇷';
    case 'switzerland': return '🇨🇭';
    case 'netherlands': return '🇳🇱';
    case 'germany': return '🇩🇪';
    case 'uk': return '🇬🇧';
    default: return '🚌';
  }
}

function focusSightOnMapByIndex(idx) {
  const flatSights = window.allSightsFlat || [];
  const sight = flatSights[idx];
  if (!sight) return;
  const mapElem = document.getElementById('interactiveMap');
  if (mapElem) {
    mapElem.scrollIntoView({ behavior: 'smooth' });
  }
  if (typeof map !== 'undefined' && map && sight.coords) {
    isProgrammaticZoom = true;
    map.flyTo(sight.coords, DETAIL_ZOOM, { duration: 1.2 });
    setTimeout(() => {
      isProgrammaticZoom = false;
    }, 1200);
  } else if (typeof map !== 'undefined' && map && sight.dayCoords) {
    isProgrammaticZoom = true;
    map.flyTo(sight.dayCoords, DETAIL_ZOOM, { duration: 1.2 });
    setTimeout(() => {
      isProgrammaticZoom = false;
    }, 1200);
  }
}

// Lightbox Modal Logic
function openMainLightbox(index) {
  const flatSights = window.allSightsFlat || [];
  if (index < 0 || index >= flatSights.length) return;
  currentMainLightboxIndex = index;
  updateMainLightboxContent();
  const modal = document.getElementById('lightboxModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeMainLightbox() {
  const modal = document.getElementById('lightboxModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function stepMainLightbox(delta) {
  const flatSights = window.allSightsFlat || [];
  currentMainLightboxIndex = (currentMainLightboxIndex + delta + flatSights.length) % flatSights.length;
  updateMainLightboxContent();
}

function updateMainLightboxContent() {
  const flatSights = window.allSightsFlat || [];
  const sight = flatSights[currentMainLightboxIndex];
  if (!sight) return;

  const modal = document.getElementById('lightboxModal');
  if (!modal) return;

  const imgEl = modal.querySelector('.lightbox-img');
  const dayBadgeEl = modal.querySelector('.lightbox-day-badge');
  const titleEl = modal.querySelector('.lightbox-title');
  const descEl = modal.querySelector('.lightbox-desc');
  const mapsBtnEl = modal.querySelector('.lightbox-maps-btn');
  const counterEl = modal.querySelector('.lightbox-counter');

  if (imgEl) {
    imgEl.src = sight.image;
    imgEl.alt = sight.name;
  }
  if (dayBadgeEl) dayBadgeEl.innerHTML = `${sight.dayTitle} · ${sight.date} · <strong>${sight.category}</strong>${sight.admission ? ` · <span style="font-weight:700; color:${sight.isPaid ? '#ef4444' : '#22c55e'};">${sight.isPaid ? '🎟️ ' : '✨ '}${sight.admission}</span>` : ''}${sight.hours ? ` · <span style="font-weight:600; color:#15803d; background:#dcfce7; padding:2px 6px; border-radius:4px;">🕒 ${sight.hours}</span>` : ''}`;
  if (titleEl) titleEl.textContent = sight.name;
  if (descEl) descEl.textContent = sight.desc;
  if (counterEl) counterEl.textContent = `Photo ${currentMainLightboxIndex + 1} of ${flatSights.length} · 📍 ${sight.location}`;

  if (mapsBtnEl) {
    const query = sight.mapsQuery || sight.name;
    mapsBtnEl.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  }
}

function setupMainLightbox() {
  const modal = document.getElementById('lightboxModal');
  if (!modal) return;

  const closeBtn = modal.querySelector('.lightbox-close-btn');
  if (closeBtn) closeBtn.addEventListener('click', closeMainLightbox);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeMainLightbox();
  });

  const prevBtn = modal.querySelector('.lightbox-nav-prev');
  const nextBtn = modal.querySelector('.lightbox-nav-next');
  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      stepMainLightbox(-1);
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      stepMainLightbox(1);
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeMainLightbox();
    if (e.key === 'ArrowLeft') stepMainLightbox(-1);
    if (e.key === 'ArrowRight') stepMainLightbox(1);
  });
}

window.openMainLightbox = openMainLightbox;
window.closeMainLightbox = closeMainLightbox;
window.focusSightOnMapByIndex = focusSightOnMapByIndex;

// Resilient Application Initialization
function initApp() {
  try {
    renderItineraryTable(currentItineraryFilter);
  } catch (e) {
    console.error('Error rendering itinerary table:', e);
  }

  try {
    renderTimeline(currentItineraryFilter);
  } catch (e) {
    console.error('Error rendering timeline:', e);
  }

  try {
    switchItineraryView('table');
  } catch (e) {
    console.error('Error switching itinerary view:', e);
  }

  try {
    renderDestinationsGrid();
  } catch (e) {
    console.error('Error rendering destinations grid:', e);
  }

  try {
    renderTemplesGrid();
  } catch (e) {
    console.error('Error rendering temples grid:', e);
  }

  try {
    initMap();
    renderItineraryNavBar();
  } catch (e) {
    console.error('Error initializing map:', e);
  }

  // Map Layer Switcher (Google Roadmap, Terrain, Satellite)
  try {
    const layerBtns = document.querySelectorAll('.layer-btn');
    layerBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.id === 'templeToggleBtn') {
          toggleTemplesLayer();
          return;
        }

        const layerType = btn.getAttribute('data-layer');
        if (layerType === currentLayer || !googleLayers[layerType]) return;

        if (map && googleLayers[currentLayer]) {
          map.removeLayer(googleLayers[currentLayer]);
          googleLayers[layerType].addTo(map);
        }
        currentLayer = layerType;

        document.querySelectorAll('.layer-btn[data-layer]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });

    const templeBtn = document.getElementById('templeToggleBtn');
    if (templeBtn) {
      templeBtn.addEventListener('click', () => {
        toggleTemplesLayer();
      });
    }
  } catch (e) {
    console.error('Error setting up layer buttons:', e);
  }

  // Itinerary View Toggle buttons (Table vs Cards vs Gallery)
  try {
    const viewTableBtn = document.getElementById('viewTableBtn');
    const viewCardsBtn = document.getElementById('viewCardsBtn');
    const viewGalleryBtn = document.getElementById('viewGalleryBtn');
    if (viewTableBtn) {
      viewTableBtn.addEventListener('click', () => switchItineraryView('table'));
    }
    if (viewCardsBtn) {
      viewCardsBtn.addEventListener('click', () => switchItineraryView('cards'));
    }
    if (viewGalleryBtn) {
      viewGalleryBtn.addEventListener('click', () => switchItineraryView('gallery'));
    }

      // Matrix Accordion Toggle
  try {
    const btnToggleMatrix = document.getElementById('btnToggleMatrix');
    const matrixContent = document.getElementById('matrixAccordionContent');
    if (btnToggleMatrix && matrixContent) {
      btnToggleMatrix.addEventListener('click', () => {
        const isExpanded = btnToggleMatrix.getAttribute('aria-expanded') === 'true';
        btnToggleMatrix.setAttribute('aria-expanded', !isExpanded);
        matrixContent.style.display = isExpanded ? 'none' : 'block';
        const chevron = btnToggleMatrix.querySelector('.chevron-icon');
        if (chevron) chevron.textContent = isExpanded ? '▾' : '▴';
        btnToggleMatrix.querySelector('span:first-child').textContent = isExpanded
          ? '📅 View 21-Day Schedule Matrix'
          : '✖ Close Schedule Matrix';
      });
    }
  } catch (e) {
    console.error('Error setting up matrix toggle:', e);
  }

    // Hero Gallery CTA Button
    const heroGalleryBtn = document.getElementById('heroGalleryBtn');
    if (heroGalleryBtn) {
      heroGalleryBtn.addEventListener('click', () => {
        const itSection = document.getElementById('itinerarySection');
        if (itSection) itSection.scrollIntoView({ behavior: 'smooth' });
        switchItineraryView('gallery');
      });
    }

    setupMainLightbox();
  } catch (e) {
    console.error('Error setting up view toggle buttons:', e);
  }

  // Itinerary Filter buttons
  try {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filterVal = btn.getAttribute('data-filter');
        currentItineraryFilter = filterVal;
        renderItineraryTable(currentItineraryFilter);
        renderTimeline(currentItineraryFilter);
        if (currentItineraryView === 'gallery') {
          renderGalleryView(currentItineraryFilter);
        }
      });
    });
  } catch (e) {
    console.error('Error setting up filter buttons:', e);
  }

  // Page Outline Navigation (Desktop Sidebar & Mobile Bottom Sheet)
  try {
    initPageOutline();
  } catch (e) {
    console.error('Error setting up page outline navigation:', e);
  }
}

/**
 * Page Outline Navigation Controller
 * Manages Desktop floating outline sidebar and Mobile Bottom Sheet drawer with active ScrollSpy
 */
function initPageOutline() {
  const sectionTargets = [
    { id: 'interactiveMap', name: 'Route & Map', icon: '🗺️' },
    { id: 'itinerarySection', name: '21-Day Itinerary', icon: '📅' },
    { id: 'itineraryOpeningSummary', name: 'Operating Hours', icon: '🕒' },
    { id: 'flixbusReservationsDossier', name: 'FlixBus Bookings', icon: '🚌' },
    { id: 'ldsTemplesSection', name: 'LDS Temples', icon: '🏛️' },
    { id: 'travelWellnessSection', name: 'Travel Wellness', icon: '🧘' },
    { id: 'borderComplianceSection', name: 'Border Compliance', icon: '🛂' },
    { id: 'dossierBreakdownSection', name: 'Country Breakdown', icon: '📍' },
    { id: 'transitPassSection', name: 'Transit Pass Guide', icon: '🚆' }
  ];

  const desktopSidebar = document.getElementById('desktopOutlineSidebar');
  const outlineToggleBtn = document.getElementById('outlineToggleBtn');
  const desktopItems = document.querySelectorAll('.desktop-outline-sidebar .outline-item');
  const btnScrollTop = document.getElementById('btnScrollTop');

  const mobileContainer = document.getElementById('mobileOutlineContainer');
  const mobileFab = document.getElementById('mobileOutlineFab');
  const mobileBackdrop = document.getElementById('mobileOutlineBackdrop');
  const sheetCloseBtn = document.getElementById('sheetCloseBtn');
  const sheetNavItems = document.querySelectorAll('.sheet-nav-item');
  const sheetScrollTopBtn = document.getElementById('sheetScrollTopBtn');
  const fabActiveIndicator = document.getElementById('fabActiveIndicator');

  let isAutoScrolling = false;

  // Set tooltip attribute for collapsed desktop sidebar
  desktopItems.forEach(item => {
    const targetId = item.getAttribute('data-target');
    const targetObj = sectionTargets.find(t => t.id === targetId);
    if (targetObj) {
      item.setAttribute('data-tooltip', targetObj.name);
    }
  });

  // Desktop collapse/expand toggle button
  if (outlineToggleBtn && desktopSidebar) {
    if (window.innerWidth >= 1141 && window.innerWidth < 1440) {
      desktopSidebar.classList.add('collapsed');
      const toggleIcon = outlineToggleBtn.querySelector('.toggle-icon');
      if (toggleIcon) toggleIcon.textContent = '⇤';
    }

    outlineToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      desktopSidebar.classList.toggle('collapsed');
      const isCollapsed = desktopSidebar.classList.contains('collapsed');
      const toggleIcon = outlineToggleBtn.querySelector('.toggle-icon');
      if (toggleIcon) {
        toggleIcon.textContent = isCollapsed ? '⇤' : '⇥';
      }
    });
  }

  // Smooth scroll handler
  function scrollToTarget(targetId) {
    const targetEl = document.getElementById(targetId);
    if (!targetEl) return;
    isAutoScrolling = true;
    setActiveHighlight(targetId);
    targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setTimeout(() => {
      isAutoScrolling = false;
    }, 700);
  }

  // Desktop outline clicks
  desktopItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = item.getAttribute('data-target') || item.getAttribute('href').replace('#', '');
      scrollToTarget(targetId);
    });
  });

  if (btnScrollTop) {
    btnScrollTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Mobile Bottom Sheet controls
  function openMobileSheet() {
    if (mobileContainer) {
      mobileContainer.classList.add('open');
      if (mobileFab) mobileFab.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeMobileSheet() {
    if (mobileContainer) {
      mobileContainer.classList.remove('open');
      if (mobileFab) mobileFab.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  }

  if (mobileFab) {
    mobileFab.addEventListener('click', () => {
      if (mobileContainer && mobileContainer.classList.contains('open')) {
        closeMobileSheet();
      } else {
        openMobileSheet();
      }
    });
  }

  if (mobileBackdrop) {
    mobileBackdrop.addEventListener('click', closeMobileSheet);
  }

  if (sheetCloseBtn) {
    sheetCloseBtn.addEventListener('click', closeMobileSheet);
  }

  sheetNavItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = item.getAttribute('data-target') || item.getAttribute('href').replace('#', '');
      closeMobileSheet();
      setTimeout(() => {
        scrollToTarget(targetId);
      }, 150);
    });
  });

  if (sheetScrollTopBtn) {
    sheetScrollTopBtn.addEventListener('click', () => {
      closeMobileSheet();
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 150);
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileContainer && mobileContainer.classList.contains('open')) {
      closeMobileSheet();
    }
  });

  // Active state updater for ScrollSpy
  function setActiveHighlight(activeId) {
    desktopItems.forEach(item => {
      const target = item.getAttribute('data-target') || item.getAttribute('href').replace('#', '');
      if (target === activeId) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    sheetNavItems.forEach(item => {
      const target = item.getAttribute('data-target') || item.getAttribute('href').replace('#', '');
      if (target === activeId) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    const activeObj = sectionTargets.find(t => t.id === activeId);
    if (activeObj && fabActiveIndicator) {
      fabActiveIndicator.textContent = activeObj.icon;
    }
  }

  // ScrollSpy listener
  let scrollTicking = false;
  window.addEventListener('scroll', () => {
    if (!scrollTicking && !isAutoScrolling) {
      window.requestAnimationFrame(() => {
        const scrollPos = window.scrollY + 180;
        let currentActiveId = sectionTargets[0].id;

        for (let i = 0; i < sectionTargets.length; i++) {
          const el = document.getElementById(sectionTargets[i].id);
          if (el) {
            const top = el.offsetTop;
            if (scrollPos >= top) {
              currentActiveId = sectionTargets[i].id;
            }
          }
        }

        setActiveHighlight(currentActiveId);
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  }, { passive: true });

  // Initial highlight on load
  setActiveHighlight(sectionTargets[0].id);
}

// Guarantee execution whether DOM is loading or already interactive/complete
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}


// =========================================================================
// MULTI-PHOTO GALLERY & INSTANT HOVER POPOVER SYSTEM
// =========================================================================
let currentPhotoDayNum = 1;
let currentPhotoSightIndex = 0;

function findSightForText(dayNum, text) {
  const day = (window.galleryData || []).find(d => d.dayNum === dayNum);
  if (!day || !day.sights || !day.sights.length) return { day: null, sight: null, index: 0 };
  const lower = (text || '').toLowerCase().trim();

  // 1. Explicit aliases check
  for (let i = 0; i < day.sights.length; i++) {
    const s = day.sights[i];
    if (s.aliases && Array.isArray(s.aliases)) {
      for (const alias of s.aliases) {
        if (lower.includes(alias.toLowerCase())) {
          return { day, sight: s, index: i };
        }
      }
    }
  }

  // 2. Exact or substring name match
  for (let i = 0; i < day.sights.length; i++) {
    const s = day.sights[i];
    if (lower.includes(s.name.toLowerCase()) || s.name.toLowerCase().includes(lower)) {
      return { day, sight: s, index: i };
    }
  }

  // 3. Significant word intersection
  for (let i = 0; i < day.sights.length; i++) {
    const s = day.sights[i];
    const sWords = s.name.toLowerCase().split(/[\s,()&-]+/).filter(w => w.length > 3);
    if (sWords.some(w => lower.includes(w))) {
      return { day, sight: s, index: i };
    }
  }

  return { day, sight: day.sights[0], index: 0 };
}

function openDayPhotosModal(dayNum, sightIndex = 0) {
  const day = (window.galleryData || []).find(d => d.dayNum === dayNum);
  if (!day || !day.sights || !day.sights.length) return;

  currentPhotoDayNum = dayNum;
  currentPhotoSightIndex = (sightIndex >= 0 && sightIndex < day.sights.length) ? sightIndex : 0;

  renderDayPhotoInModal();

  const modal = document.getElementById('lightboxModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function renderDayPhotoInModal() {
  const day = (window.galleryData || []).find(d => d.dayNum === currentPhotoDayNum);
  if (!day || !day.sights || !day.sights.length) return;

  const sight = day.sights[currentPhotoSightIndex] || day.sights[0];
  const modal = document.getElementById('lightboxModal');
  if (!modal) return;

  const imgEl = modal.querySelector('.lightbox-img');
  const dayBadgeEl = modal.querySelector('.lightbox-day-badge');
  const titleEl = modal.querySelector('.lightbox-title');
  const descEl = modal.querySelector('.lightbox-desc');
  const mapsBtnEl = modal.querySelector('.lightbox-maps-btn');
  const counterEl = modal.querySelector('.lightbox-counter');

  if (imgEl) {
    imgEl.src = sight.image;
    imgEl.alt = sight.name;
  }
  if (dayBadgeEl) {
    dayBadgeEl.innerHTML = `<span class="badge-country ${day.badgeClass}">${day.day}</span> <strong>${day.city}</strong> · ${sight.category}${sight.admission ? ` · <span style="font-weight:700; color:${sight.isPaid ? '#ef4444' : '#22c55e'};">${sight.isPaid ? '🎟️ ' : '✨ '}${sight.admission}</span>` : ''}`;
  }
  if (titleEl) titleEl.textContent = sight.name;
  if (descEl) descEl.textContent = sight.desc;
  if (counterEl) {
    counterEl.textContent = `Photo ${currentPhotoSightIndex + 1} of ${day.sights.length} · 📍 ${sight.location}`;
  }

  if (mapsBtnEl) {
    const query = sight.mapsQuery || sight.name;
    mapsBtnEl.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  }

  const videoBtnEl = modal.querySelector('.lightbox-video-btn');
  if (videoBtnEl) {
    const vlogs = window.youtubeTransitVlogs || [];
    const vlog = vlogs.find(v => v.dayNum === currentPhotoDayNum);
    if (vlog) {
      videoBtnEl.href = vlog.videoUrl;
      videoBtnEl.title = `Watch Transit Vlog: ${vlog.channelName} - ${vlog.videoTitle}`;
      videoBtnEl.innerHTML = `🎥 Watch Transit Vlog (${vlog.channelName}) ↗`;
      videoBtnEl.style.display = 'inline-flex';
    } else {
      videoBtnEl.style.display = 'none';
    }
  }

  // Render Multi-Photo Thumbnail Bar inside Lightbox Modal
  let thumbsBar = modal.querySelector('#lightboxThumbsBar');
  if (!thumbsBar) {
    thumbsBar = document.createElement('div');
    thumbsBar.id = 'lightboxThumbsBar';
    thumbsBar.className = 'lightbox-thumbs-bar';
    const details = modal.querySelector('.lightbox-details');
    if (details && details.parentNode) {
      details.parentNode.insertBefore(thumbsBar, details);
    }
  }

  thumbsBar.innerHTML = day.sights.map((s, idx) => `
    <button type="button" class="lightbox-thumb-item ${idx === currentPhotoSightIndex ? 'active' : ''}" data-idx="${idx}" title="${s.name}">
      <img src="${s.image}" alt="${s.name}">
      <div class="thumb-info">
        <span class="thumb-name">${s.name}</span>
        <span class="thumb-cat">${s.category.replace(/^[^\w\s]+\s*/, '')}</span>
      </div>
    </button>
  `).join('');

  thumbsBar.querySelectorAll('.lightbox-thumb-item').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const idx = parseInt(btn.getAttribute('data-idx'), 10);
      currentPhotoSightIndex = idx;
      renderDayPhotoInModal();
    });
  });
}

function stepDayPhoto(delta) {
  const day = (window.galleryData || []).find(d => d.dayNum === currentPhotoDayNum);
  if (!day || !day.sights || !day.sights.length) return;
  currentPhotoSightIndex = (currentPhotoSightIndex + delta + day.sights.length) % day.sights.length;
  renderDayPhotoInModal();
}

// Attach hover popover and click listeners
function setupPlacePhotoInteractions() {
  const popover = document.getElementById('placePhotoPopover');
  if (!popover) return;

  let hoverTimeout = null;

  function showPopover(targetEl, dayNum, text) {
    clearTimeout(hoverTimeout);
    const day = (window.galleryData || []).find(d => d.dayNum === dayNum);
    if (!day || !day.sights || !day.sights.length) return;

    const matched = findSightForText(dayNum, text);
    const sight = matched.sight;
    const sightIdx = matched.index;

    const img = popover.querySelector('.popover-main-img');
    const badge = popover.querySelector('.popover-badge');
    const title = popover.querySelector('.popover-title');
    const loc = popover.querySelector('.popover-location');
    const thumbsRow = popover.querySelector('.popover-thumbs-row');

    if (img) {
      img.src = sight.image;
      img.alt = sight.name;
    }
    if (badge) badge.textContent = sight.category;
    if (title) title.textContent = sight.name;
    if (loc) loc.textContent = `📍 ${sight.location}`;

    if (thumbsRow) {
      thumbsRow.innerHTML = day.sights.map((s, idx) => `
        <img src="${s.image}" alt="${s.name}" class="popover-thumb ${idx === sightIdx ? 'active' : ''}" title="${s.name}">
      `).join('');
    }

    const rect = targetEl.getBoundingClientRect();
    const popoverWidth = 310;
    const popoverHeight = 285;

    let left = rect.right + 14;
    let top = rect.top - 15;

    if (left + popoverWidth > window.innerWidth - 16) {
      left = rect.left - popoverWidth - 14;
    }
    if (left < 16) {
      left = Math.max(16, (window.innerWidth - popoverWidth) / 2);
    }
    if (top + popoverHeight > window.innerHeight - 16) {
      top = window.innerHeight - popoverHeight - 16;
    }
    if (top < 16) {
      top = 16;
    }

    popover.style.left = `${left}px`;
    popover.style.top = `${top}px`;
    popover.classList.add('visible');
  }

  function hidePopover() {
    hoverTimeout = setTimeout(() => {
      popover.classList.remove('visible');
    }, 120);
  }

  // Hover over activity bullets
  document.addEventListener('mouseover', (e) => {
    const li = e.target.closest('.activity-sublist li');
    if (!li) return;

    const row = li.closest('.itinerary-table-row');
    const card = li.closest('.day-card');
    let dayNum = 1;

    if (row) {
      const badge = row.querySelector('.table-day-badge');
      if (badge) dayNum = parseInt(badge.textContent.replace('Day ', ''), 10) || 1;
    } else if (card) {
      const badge = card.querySelector('.card-day-badge');
      if (badge) dayNum = parseInt(badge.textContent.replace('Day ', ''), 10) || 1;
    }

    showPopover(li, dayNum, li.textContent);
  });

  document.addEventListener('mouseout', (e) => {
    const li = e.target.closest('.activity-sublist li');
    if (li) hidePopover();
  });

  // Clicking an activity bullet opens the photo modal for that sight
  document.addEventListener('click', (e) => {
    const li = e.target.closest('.activity-sublist li');
    if (!li) return;

    const row = li.closest('.itinerary-table-row');
    const card = li.closest('.day-card');
    let dayNum = 1;

    if (row) {
      const badge = row.querySelector('.table-day-badge');
      if (badge) dayNum = parseInt(badge.textContent.replace('Day ', ''), 10) || 1;
    } else if (card) {
      const badge = card.querySelector('.card-day-badge');
      if (badge) dayNum = parseInt(badge.textContent.replace('Day ', ''), 10) || 1;
    }

    const matched = findSightForText(dayNum, li.textContent);
    openDayPhotosModal(dayNum, matched.index);
    hidePopover();
  });

  // Clicking .btn-card-photos in Day Cards
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-card-photos');
    if (!btn) return;
    e.stopPropagation();
    const dayStr = btn.getAttribute('data-day') || 'Day 1';
    const dNum = parseInt(dayStr.replace('Day ', ''), 10) || 1;
    openDayPhotosModal(dNum);
  });
}

// Hook into existing lightbox prev/next buttons
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('lightboxModal');
  if (!modal) return;

  const prevBtn = modal.querySelector('.lightbox-nav-prev');
  const nextBtn = modal.querySelector('.lightbox-nav-next');

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      stepDayPhoto(-1);
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      stepDayPhoto(1);
    });
  }

  setupPlacePhotoInteractions();
});

window.openDayPhotosModal = openDayPhotosModal;
window.stepDayPhoto = stepDayPhoto;
