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
    dates: "16–18 Dec 2026 (2 Nights)",
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
    category: "Capital of Christmas & Fairytale Towns (Staying in Kehl Base)",
    heroImage: "public/images/destinations/strasbourg-colmar.jpg",
    description: "We are staying at B&B Hotel Kehl (Germany) right across the Rhine, using it strictly as our strategic, confirmed base to visit Strasbourg ('Capital of Christmas') and Colmar in France. The cross-border Strasbourg Tram Line D (€1.90) whisks us directly into central Strasbourg in just 15 minutes.",
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
        name: "Colmar Petite Venise (Little Venice)",
        type: "Fairytale Half-Timbered Canals",
        desc: "Gingerbread-like pastel half-timbered houses reflecting in quiet canals, draped with sparkling holiday garlands and fairy lights.",
        image: "public/images/sights/colmar-petite-venise.jpg",
        coords: [48.0769, 7.3558]
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
        name: "Seine River Cruise & Galeries Lafayette Holiday Dome",
        type: "Festive Splendor",
        desc: "Cruise past Notre-Dame and illuminated bridges, then admire the giant animated Christmas tree beneath the stained-glass dome at Haussmann.",
        image: "public/images/sights/seine-river-cruise.jpg",
        coords: [48.8530, 2.3499]
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
    itineraryMatch: "Day 19: Palace of Versailles (02 Jan 2027)",
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
    itineraryMatch: "Day 3: The Hague, ICC & Temple Day Trip (17 Dec 2026)",
    distanceFromStop: "Direct 48-min train from Amsterdam base to The Hague, then 15 mins to Zoetermeer",
    transitDirections: "Direct NS train from Amsterdam Centraal/Zuid to Gouda or Den Haag, then Sprinter to Zoetermeer Oost or RandstadRail 3, followed by a short 7-minute walk along the park canal.",
    description: "Surrounded by tranquil Dutch canals, weeping willows, and park waters in Zoetermeer. Built with polished granite and a graceful spire topped by the Angel Moroni."
  },
  {
    id: "london-temple",
    name: "London England Temple",
    nativeName: "London England Temple",
    city: "Newchapel, Surrey",
    country: "United Kingdom",
    coords: [51.1626, -0.0522],
    address: "West Park Road, Newchapel, Lingfield, Surrey RH7 6HW, United Kingdom",
    dedicated: "7 September 1958",
    image: "public/images/temples/london-temple.jpg",
    itineraryMatch: "Days 1 & 21 (UK Base & Southampton: 12–15 Dec & 04–08 Jan)",
    distanceFromStop: "South of London near Surrey/Sussex border, along the corridor towards Southampton",
    transitDirections: "Southern Rail from London Victoria to East Grinstead or Dormans (~50 mins), then a 5-minute taxi or Metrobus 400 to West Park Road.",
    description: "England's historic first temple, nestled in 32 acres of manicured estate gardens, mirror-like reflection ponds, flowering rhododendrons, and mature oaks in the Surrey countryside."
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
    itineraryMatch: "Day 5: Frankfurt Arrival & 8:15 AM Temple Endowment (19 Dec 2026)",
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

      // Create One Large Box for Germany
      const germanyBox = document.createElement('div');
      germanyBox.className = 'itinerary-germany-box';
      germanyBox.setAttribute('title', 'Germany 3-Night Base & Excursions (19–22 Dec)');

      germanyBox.innerHTML = `
        <div class="germany-box-header">
          <span class="germany-box-title">
            <span class="germany-box-flag">🇩🇪</span> Germany Base &amp; Excursions
          </span>
          <span class="germany-box-badge">19–22 Dec · 3 Nights</span>
        </div>
        <div class="germany-box-content">
          <!-- Left Side: Frankfurt Arrival & Temple -->
          <button type="button" class="itinerary-stop-chip germany-sub-chip" data-index="${frankfurtIndex}" title="Focus map on Frankfurt am Main (Arrival & Temple)">
            <span class="itinerary-step-num" style="background: #eab308;">3</span>
            <div class="itinerary-stop-text">
              <span class="itinerary-stop-title">🇩🇪 Frankfurt</span>
              <span class="itinerary-stop-sub">19–20 Dec · Base</span>
            </div>
          </button>

          <span class="itinerary-sub-arrow">➔</span>

          <!-- Middle: Cologne & Düsseldorf Excursion -->
          <button type="button" class="itinerary-stop-chip germany-sub-chip" data-index="${cdIndex}" title="Focus map on Cologne & Düsseldorf (Twin-City Excursion)">
            <span class="itinerary-step-num" style="background: #eab308;">4</span>
            <div class="itinerary-stop-text">
              <span class="itinerary-stop-title">🇩🇪 Cologne &amp; Düsseldorf</span>
              <span class="itinerary-stop-sub">21 Dec · Excursion</span>
            </div>
          </button>

          <span class="itinerary-sub-arrow">➔</span>

          <!-- Right Side: Frankfurt Return & Sleep -->
          <button type="button" class="itinerary-stop-chip germany-sub-chip" data-index="${frankfurtIndex}" title="Focus map on Frankfurt am Main (Base Return)">
            <span class="itinerary-step-num" style="background: #eab308;">3</span>
            <div class="itinerary-stop-text">
              <span class="itinerary-stop-title">🇩🇪 Frankfurt</span>
              <span class="itinerary-stop-sub">21–22 Dec · Return</span>
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

  const actualWidth = Math.min(width, mapWidth - 30);
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
  let vOffset = margin + Math.round(height / 2);
  let bottom = containerPoint.y + vOffset - margin;
  let top = bottom - height;

  if (top < 15) {
    vOffset = 15 - containerPoint.y + margin + height;
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
        maxWidth: 240,
        minWidth: 210,
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
      maxWidth: 270,
      minWidth: 240,
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
          <div class="popup-dates">${dest.dates}</div>
          <h3 class="popup-title">${dest.name}</h3>
          
          <div class="popup-sites-title">⭐ Key Sights (starred on map):</div>
          <div class="popup-sites-list">
            ${sightsListHtml}
          </div>
          <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(dest.name + ', ' + dest.country)}" target="_blank" rel="noopener noreferrer" class="btn-popup-gmaps" style="margin-top: 10px;">
            🗺️ Explore ${dest.name} & Reviews on Google Maps ↗
          </a>
        </div>
      </div>
    `;

    marker.bindPopup(popupHtml, {
      maxWidth: window.innerWidth <= 480 ? 250 : 280,
      minWidth: window.innerWidth <= 480 ? 230 : 260,
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
      maxWidth: 260,
      minWidth: 230,
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
    "city": "London ➔ Amsterdam",
    "country": "Transit",
    "badgeClass": "badge-transit",
    "cardHighlight": "highlight-transit",
    "title": "Departure Across the English Channel",
    "activities": [
      "• <b>Evening (18:30 – 21:30):</b> Departure prep & baggage check-in at <b>London Victoria Coach Station</b> (164 Buckingham Palace Rd).",
      "• <b>Night (22:00 – 03:00):</b> Board <b>FlixBus N824</b> overnight coach. Transit across Kent countryside to Dover port. LeShuttle / Ferry crossing beneath the English Channel into France/Belgium.",
      "• <b>Early Morning (03:00 – 08:30+1d):</b> Continuous overnight sleeper coach transit across northern France and Belgium towards the Netherlands."
    ],
    "stayTitle": "FlixBus N824 Sleeper Coach",
    "stayDesc": "London Victoria ➔ Amsterdam Sloterdijk",
    "transitInfo": "🚌 FlixBus N824 (Overnight Reclining Coach)",
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
      "• <b>Morning (10:00 – 11:45):</b> Arrive in Amsterdam from London at 10:00 am. Transfer via GVB Tram to Leidseplein. Luggage drop and check-in prep at <b>Amsterdam Hostel Leidseplein</b>.",
      "• <b>Afternoon (12:30 – 16:00):</b> Daytime walking exploration of the historic 17th-century <b>UNESCO Canal Ring</b>, <b>Dam Square</b>, Royal Palace exterior, and the tranquil <b>Begijnhof</b> courtyard.",
      "• <b>Evening (17:00 – 20:30):</b> Walking tour of the world-famous <b>Amsterdam Light Festival</b> along Herengracht and Keizersgracht canals, viewing illuminated light art installations reflecting on the water."
    ],
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
      "• <b>Morning (09:00 – 12:45):</b> 17-minute direct train from Amsterdam Centraal to <b>Zaanse Schans</b>. Stroll among iconic 18th-century working wooden windmills along the river, taste artisanal Dutch cheeses at Catharina Hoeve Farm, and watch traditional wooden clog crafting.",
      "• <b>Afternoon (13:30 – 17:00):</b> Return to Amsterdam. Cultural immersion at the prestigious <b>Rijksmuseum</b> at Museumplein (Rembrandt's <i>The Night Watch</i>, Vermeer's <i>The Milkmaid</i>), followed by festive treats at the <b>Ice Village Christmas Market</b>.",
      "• <b>Evening (17:30 – 21:00):</b> 75-minute glass-topped <b>UNESCO Canal Boat Cruise</b> under the illuminated bridges; traditional Dutch dinner in the Jordaan or Leidseplein. Overnight at hostel."
    ],
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
    "city": "The Hague & Zoetermeer ➔ Overnight Coach",
    "country": "Netherlands",
    "badgeClass": "badge-nl",
    "cardHighlight": "highlight-nl",
    "title": "The Hague Temple Endowment Session ➔ Overnight Coach to Frankfurt",
    "activities": [
      "• <b>Morning (08:45 – 12:15):</b> Check out of hostel (store bags or carry daypacks). 48-minute Dutch NS Intercity train from Amsterdam Centraal to Den Haag Centraal. Visit the <b>International Criminal Court (ICC)</b> at Oude Waalsdorperweg for photos and the historic <b>Peace Palace (Vredespaleis)</b> & World Peace Flame.",
      "• <b>Midday & Afternoon (12:30 – 17:00):</b> Direct transit via Prins Bernhardviaduct / RandstadRail 3 to Zoetermeer for <b>The Hague Netherlands Temple</b> (Osylaan 2). Attend scheduled sacred <b>Temple Endowment Session</b>, followed by temple grounds photography and reverent reflection along the canal park.",
      "• <b>Evening & Night (17:30 – 00:45):</b> Direct train return to Amsterdam Centraal. Celebration farewell Dutch dinner in Amsterdam, retrieve backpacks, transfer to Amsterdam Sloterdijk station. Board 12:45 AM overnight FlixBus to Frankfurt am Main."
    ],
    "stayTitle": "FlixBus Overnight Sleeper (Coach Transit)",
    "stayDesc": "Amsterdam Sloterdijk ➔ Frankfurt am Main Hbf",
    "transitInfo": "🚆 NS Intercity / RandstadRail + 🚌 FlixBus Sleeper (Departs 12:45 AM, 19 Dec)",
    "coords": [
      52.0786,
      4.3164
    ]
  },
  {
    "day": "Day 5",
    "date": "19 Dec 2026",
    "city": "Frankfurt am Main",
    "country": "Germany",
    "badgeClass": "badge-de",
    "cardHighlight": "highlight-de",
    "title": "Frankfurt Germany Temple (8:15 AM Endowment Session) & Römerberg",
    "activities": [
      "• <b>Early Morning (07:15 – 12:00):</b> Arrive in Frankfurt am Main around 07:15 AM via overnight coach. Quick bag drop at Hotel Cristall (200m from Hbf) or direct transit/taxi to Friedrichsdorf. Attend scheduled sacred <b>Temple Endowment Session at 08:15 AM</b> at <b>The Frankfurt Germany Temple</b> (Talstraße 10, Friedrichsdorf). Reverent reflection and photography on temple grounds.",
      "• <b>Afternoon (12:30 – 16:30):</b> Return to central Frankfurt. Cross the historic 1869 <b>Eiserner Steg</b> (iron footbridge) for panoramic skyline views of 'Mainhattan' over the Main River, and explore Frankfurt Altstadt and Kaiserdom.",
      "• <b>Evening (16:30 – 21:00):</b> Celebrate at the centuries-old <b>Frankfurter Weihnachtsmarkt at Römerberg</b>—one of Germany’s grandest holiday markets, surrounded by medieval half-timbered houses and a 30m illuminated tree. Check-in and restful overnight stay at <b>Hotel Cristall</b> (Night 1 of 3)."
    ],
    "stayTitle": "Hotel Cristall - Frankfurt City (Night 1 of 3)",
    "stayDesc": "Ottostrasse 3, 60329 Frankfurt am Main",
    "transitInfo": "🚌 Overnight Coach Arrival (~07:15) + 🚆 S-Bahn S5 / Taxi to Temple",
    "coords": [
      50.2589,
      8.6437
    ]
  },
  {
    "day": "Day 6",
    "date": "20 Dec 2026",
    "city": "Frankfurt am Main",
    "country": "Germany",
    "badgeClass": "badge-de",
    "cardHighlight": "highlight-de",
    "title": "Sunday Reflection, Historic Altstadt & Museumsufer",
    "activities": [
      "• <b>Morning (09:30 – 13:00):</b> Sunday church worship / spiritual reflection; peaceful winter morning stroll along the River Main promenade.",
      "• <b>Afternoon (13:30 – 16:30):</b> Cultural exploration of the Goethe House (birthplace of Johann Wolfgang von Goethe) and historic Museumsufer district (Städel Museum).",
      "• <b>Evening (17:00 – 21:00):</b> Traditional Hessian dinner in Alt-Sachsenhausen (sampling regional specialties and warm Apfelwein); evening illuminated skyline walk."
    ],
    "stayTitle": "Hotel Cristall - Frankfurt City (Night 2 of 3)",
    "stayDesc": "Ottostrasse 3, 60329 Frankfurt am Main",
    "transitInfo": "🚇 Frankfurt Tram & U-Bahn Network Day Pass",
    "coords": [
      50.1109,
      8.6821
    ]
  },
  {
    "day": "Day 7",
    "date": "21 Dec 2026",
    "city": "Cologne & Düsseldorf (Twin-City Excursion)",
    "country": "Germany",
    "badgeClass": "badge-de",
    "cardHighlight": "highlight-de",
    "title": "Cologne Cathedral, Lindt Museum & Düsseldorf Christmas Markets",
    "activities": [
      "• <b>Morning in Cologne (08:30 – 13:00):</b> 1-hour fast DB ICE train from Frankfurt Hbf to Köln Hbf (💡 <i>use free onboard train restroom before arrival</i>). Step out directly into the shadow of the monumental Gothic spires of <b>Cologne Cathedral</b> (<i>Kölner Dom</i>, UNESCO World Heritage site). Stroll love-locked <b>Hohenzollern Bridge</b> and explore the <b>Lindt Chocolate Museum</b> along the Rhine (🚻 <i>free customer restrooms inside</i>) with its 3m golden fountain.",
      "• <b>Afternoon in Düsseldorf (13:30 – 17:30):</b> Scenic 20-minute direct train to Düsseldorf Hbf. Walk the magical <b>7 Themed Christmas Markets Trail</b>: golden Art Nouveau angels at <i>Engelchen-Markt</i>, romantic crystal stars at <i>Sternchen-Markt</i>, and artisanal craft booths at <i>Handwerker-Markt</i> before the historic 16th-century Rathaus on Marktplatz.",
      "• <b>Evening & Return (17:30 – 21:00):</b> Riverside stroll along Rhine Embankment Promenade to the <i>Corneliusplatz Ice Rink</i> on the famous Königsallee canal (🚻 <i>free facilities at Kö-Bogen / Sevens mall</i>). Dinner in authentic 'Little Tokyo' (Immermannstraße) or traditional Altbier tavern. Direct 1h 20m high-speed ICE train back to Frankfurt Hbf (💡 <i>free train restroom onboard</i>). Overnight at <b>Hotel Cristall</b> (Night 3 of 3)."
    ],
    "stayTitle": "Hotel Cristall - Frankfurt City (Night 3 of 3)",
    "stayDesc": "Ottostrasse 3, 60329 Frankfurt am Main",
    "transitInfo": "🚆 DB ICE Triangle Circuit (FRA ➔ CGN ➔ DUS ➔ FRA)",
    "coords": [
      51.2256,
      6.7719
    ]
  },
  {
    "day": "Day 8",
    "date": "22 Dec 2026",
    "city": "Kehl & Strasbourg",
    "country": "France",
    "badgeClass": "badge-fr",
    "cardHighlight": "highlight-france",
    "title": "Strasbourg: Capital of Christmas",
    "activities": [
      "• <b>Morning (09:30 – 11:30):</b> Complimentary buffet breakfast at Hotel Cristall. Board direct daytime <b>ICE / TGV</b> train south through the Black Forest valley to Kehl / Strasbourg (1h 45m).",
      "• <b>Afternoon (12:30 – 16:00):</b> Check in at <b>B&B Hotel Kehl</b>. Board the cross-border <b>Strasbourg Tram Line D</b> across the Rhine into France. Explore fairytale <b>Petite France</b> with historic half-timbered tanners' houses and Ponts Couverts.",
      "• <b>Evening (16:30 – 21:00):</b> Tour Strasbourg, the <b>'Capital of Christmas'</b> (<i>Capitale de Noël</i>). Gaze at the monumental 30-meter Great Christmas Tree at Place Kléber and the historic <b>Christkindelsmärik</b> surrounding the pink sandstone Cathedral."
    ],
    "stayTitle": "B&B Hotel Kehl (Confirmed Base for Alsace)",
    "stayDesc": "15 Allensteiner Str., 77694 Kehl (Staying in Kehl as base to visit Strasbourg & Colmar)",
    "transitInfo": "🚆 DB ICE Train (1h45m) + Strasbourg Tram Line D (€1.90)",
    "coords": [
      48.5734,
      7.7521
    ]
  },
  {
    "day": "Day 9",
    "date": "23 Dec 2026",
    "city": "Colmar",
    "country": "France",
    "badgeClass": "badge-fr",
    "cardHighlight": "highlight-france",
    "title": "Fairytale Petite Venise & Alsatian Markets",
    "activities": [
      "• <b>Morning (09:00 – 10:30):</b> Scenic 30-minute SNCF TER regional train journey along the Alsatian Wine Route from Strasbourg Gare to Colmar.",
      "• <b>Daytime (10:30 – 15:30):</b> Walk through fairytale <b>Petite Venise</b> (Little Venice), admiring pastel half-timbered houses reflecting in quiet canals. Visit the medieval Koïfhus customs house and Unterlinden museum quarter.",
      "• <b>Evening (16:00 – 19:30):</b> Explore Colmar's 6 intimate Christmas Markets (Place des Dominicains & Place de l'Ancienne Douane). Savor warm Alsatian Tarte Flambée (Flammekueche). Return via TER train to Kehl base."
    ],
    "stayTitle": "B&B Hotel Kehl (Confirmed Base for Alsace)",
    "stayDesc": "15 Allensteiner Str., 77694 Kehl (Staying in Kehl as base to visit Strasbourg & Colmar)",
    "transitInfo": "🚆 SNCF TER Fluo Train Return (€16.00)",
    "coords": [
      48.0794,
      7.3585
    ]
  },
  {
    "day": "Day 10",
    "date": "24 Dec 2026",
    "city": "Interlaken",
    "country": "Switzerland",
    "badgeClass": "badge-ch",
    "cardHighlight": "highlight-swiss",
    "title": "Swiss Alpine Gateway & Christmas Eve",
    "activities": [
      "• <b>Morning (08:30 – 12:00):</b> Scenic Swiss rail journey south via Basel SBB and the Swiss capital of <b>Bern</b> towards the snow-covered Bernese Oberland.",
      "• <b>Afternoon (12:30 – 16:00):</b> Check in at <b>Swiss Alps Base</b> in Interlaken. Winter walk through Höhematte park with panoramic views of the Jungfrau, Mönch, and Eiger massifs.",
      "• <b>Evening (17:00 – 20:30):</b> Christmas Eve in the Swiss Alps. Enjoy an authentic Swiss cheese fondue dinner; evening winter stroll along the turquoise Aare River.",
      "• <i>Nearby Sacred Site: Bern Switzerland Temple in Zollikofen is located just 9 mins from Bern HB via S-Bahn S3/S31.</i>"
    ],
    "stayTitle": "Swiss Alps Base (Interlaken)",
    "stayDesc": "Central Interlaken, Switzerland",
    "transitInfo": "🚆 SBB EuroCity / InterCity Train (Half Fare Card)",
    "coords": [
      46.6863,
      7.8632
    ]
  },
  {
    "day": "Day 11",
    "date": "25 Dec 2026",
    "city": "Grindelwald First",
    "country": "Switzerland",
    "badgeClass": "badge-ch",
    "cardHighlight": "highlight-swiss",
    "title": "Alpine Cliff Walk & Bachalpsee Snow Trail",
    "activities": [
      "• <b>Morning (09:00 – 12:30):</b> Take the Bernese Oberland Bahn (BOB) train to Grindelwald, then ascend 2,168m via the 6-seater First gondola. Brave the thrilling <b>First Cliff Walk by Tissot</b> suspended along sheer alpine rock faces.",
      "• <b>Afternoon (13:00 – 15:30):</b> Winter walking trail towards frozen <b>Lake Bachalpsee</b> with dramatic views of the Eiger North Face. Optional First Flieger zipline flight.",
      "• <b>Evening (16:30 – 20:00):</b> Christmas Day celebratory dinner in the snowy alpine chalets of Grindelwald village before scenic train return to Interlaken."
    ],
    "stayTitle": "Swiss Alps Base (Interlaken)",
    "stayDesc": "Central Interlaken, Switzerland",
    "transitInfo": "🚠 BOB Train + First Gondola Cableway (50% off Half Fare)",
    "coords": [
      46.6242,
      8.0414
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
      "• <b>Morning (09:00 – 12:30):</b> Journey by train into the magical <b>Lauterbrunnen Valley</b>. Gaze up at the 300m <b>Staubbach Falls</b> cascading down sheer vertical cliffs (frozen into ice ribbons in winter).",
      "• <b>Afternoon (13:00 – 16:30):</b> Ascend via the Bergbahn Lauterbrunnen-Mürren (BLM cable car to Grütschalp + panoramic mountain railway) to the car-free mountain village of <b>Mürren</b> (1,650m) directly facing the Eiger, Mönch, and Jungfrau.",
      "• <b>Evening (17:00 – 20:00):</b> Hot Swiss chocolate overlooking snowy alpine peaks; descent via cable car back to Interlaken."
    ],
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
    "city": "Lake Brienz & Sigriswil",
    "country": "Switzerland",
    "badgeClass": "badge-ch",
    "cardHighlight": "highlight-swiss",
    "title": "Crash Landing on You (CLOY) Alpine Tour",
    "activities": [
      "• <b>Morning (09:30 – 12:30):</b> Take PostBus 103 to <b>Iseltwald</b> on Lake Brienz. Visit the world-famous wooden jetty where Captain Ri played the piano in <i>Crash Landing on You</i> with turquoise glacial waters.",
      "• <b>Afternoon (13:30 – 16:30):</b> Travel along Lake Thun to the <b>Sigriswil Panoramic Suspension Bridge</b>. Walk across the 340m pedestrian bridge suspended 182m above the Gummischlucht gorge (where Jeong-hyeok took Se-ri's photo).",
      "• <b>Evening (17:30 – 20:30):</b> Lakeside dinner overlooking the illuminated lights of Unterseen and Lake Brienz."
    ],
    "stayTitle": "Swiss Alps Base (Interlaken)",
    "stayDesc": "Central Interlaken, Switzerland",
    "transitInfo": "🚌 PostBus 103 + STI Bus 21/25 (Half Fare Card)",
    "coords": [
      46.7118,
      7.9587
    ]
  },
  {
    "day": "Day 14",
    "date": "28 Dec 2026",
    "city": "Zurich ➔ Paris",
    "country": "Transit",
    "badgeClass": "badge-transit",
    "cardHighlight": "highlight-transit",
    "title": "Lake Zurich & Overnight Sleeper Coach",
    "activities": [
      "• <b>Morning (09:00 – 11:30):</b> Scenic train journey across central Switzerland from Interlaken Ost via Lucerne to <b>Zurich Hauptbahnhof</b>.",
      "• <b>Afternoon (12:00 – 17:00):</b> Walk along the <b>Lake Zurich</b> promenade, explore historic Lindenhof hill overlooking the Limmat River, and taste world-class chocolate along Bahnhofstrasse.",
      "• <b>Night (21:00 – 06:40+1d):</b> Board the direct overnight FlixBus sleeper coach from Zurich Bus Station (near HB) to Paris Bercy Seine."
    ],
    "stayTitle": "FlixBus Overnight",
    "stayDesc": "Direct to Paris Bercy Seine",
    "transitInfo": "🚆 SBB InterCity Train + Overnight FlixBus Coach",
    "coords": [
      47.3686,
      8.5432
    ]
  },
  {
    "day": "Day 15",
    "date": "29 Dec 2026",
    "city": "Paris",
    "country": "France",
    "badgeClass": "badge-fr",
    "cardHighlight": "highlight-france",
    "title": "Arrival & Montmartre Sacré-Cœur",
    "activities": [
      "• <b>Morning (06:40 – 11:00):</b> Arrive at Paris Bercy Seine. Transfer via Metro Line 14 / Tramway T3a to <b>Break & Home Paris Italie Porte de Choisy</b>. Drop luggage, enjoy fresh French croissants and café au lait.",
      "• <b>Afternoon (12:30 – 16:30):</b> Ascend the historic hill of <b>Montmartre</b> to the white-domed <b>Sacré-Cœur Basilica</b> for breathtaking panoramic winter views of Paris. Explore artists' easel square at Place du Tertre.",
      "• <b>Evening (17:30 – 20:30):</b> Twilight walk along the historic Seine River banks and Latin Quarter bistro dinner."
    ],
    "stayTitle": "Break & Home Paris Italie (CONFIRMED)",
    "stayDesc": "Porte de Choisy, Paris (Booked: Jean Aquino)",
    "transitInfo": "🚇 Paris Metro Line 14 / 7 (Navigo Easy Pass)",
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
      "• <b>Morning (09:00 – 13:00):</b> Cultural visit to the <b>Musée du Louvre</b> (view the <i>Mona Lisa</i>, <i>Venus de Milo</i>, <i>Winged Victory of Samothrace</i>, and Napoleon III State Apartments).",
      "• <b>Afternoon (13:30 – 16:30):</b> Stroll through the royal <b>Tuileries Garden</b> to Place de la Concorde, then explore the famous animated holiday window displays and giant Christmas tree under the stained-glass dome at <b>Galeries Lafayette Haussmann</b>.",
      "• <b>Evening (17:00 – 21:00):</b> Walk the illuminated <b>Champs-Élysées</b> boulevard to the <b>Arc de Triomphe</b>; climb to the rooftop terrace for 360° illuminated views of Paris avenues."
    ],
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
      "• <b>Morning (09:30 – 13:00):</b> Tour the <b>Musée d'Orsay</b> inside the magnificent Beaux-Arts railway station, admiring Impressionist masterpieces by Monet, Van Gogh, Renoir, and Degas.",
      "• <b>Afternoon (14:00 – 17:00):</b> Walk Île de la Cité, view the newly restored Notre-Dame Cathedral exterior, and explore the historic Shakespeare and Company bookstore.",
      "• <b>Evening & Midnight (20:00 – 01:00):</b> Ring in the New Year 2027! View the sparkling lights of the <b>Eiffel Tower</b> from Trocadéro, then join the official Paris New Year's Eve celebration on the <b>Champs-Élysées</b> with countdown and video projections on the Arc de Triomphe (Metro runs free all night!)."
    ],
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
    "title": "New Year's Day Seine Cruise & Le Marais",
    "activities": [
      "• <b>Morning (10:30 – 13:00):</b> Relaxed New Year’s Day morning walk through the royal <b>Jardin du Luxembourg</b> and Saint-Germain-des-Prés.",
      "• <b>Afternoon (13:30 – 16:30):</b> Wander the cobblestone streets of historic <b>Le Marais</b>, visiting Place des Vosges and historic Parisian tea salons.",
      "• <b>Evening (17:30 – 20:30):</b> <b>Bateaux Parisiens Seine River Cruise</b> departing near the Eiffel Tower, gliding past illuminated monuments (Musée d'Orsay, Louvre, Pont Alexandre III) under the winter twilight."
    ],
    "stayTitle": "Break & Home Paris Italie (CONFIRMED)",
    "stayDesc": "Porte de Choisy, Paris",
    "transitInfo": "🚇 Paris Metro Line 4/10 + Bateaux Parisiens Cruise",
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
      "• <b>Morning (09:00 – 13:30):</b> Full-day excursion to the royal <b>Palace of Versailles</b> (<i>Château de Versailles</i>). Tour the magnificent <b>Hall of Mirrors</b> (<i>Galerie des Glaces</i>), King's State Apartments, and expansive Royal Gardens.",
      "• <b>Afternoon (14:00 – 16:30):</b> Visit the sacred <b>Paris France LDS Temple</b> (<i>Temple de Paris France</i>) in neighboring Le Chesnay. Tour the tranquil landscaped reflection gardens and visitors' courtyard (only 2.2 km / ~5 mins from Versailles Palace).",
      "• <b>Evening (17:30 – 21:00):</b> Return to Paris for celebratory farewell French bistro dinner."
    ],
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
    "city": "Paris ➔ London",
    "country": "Transit",
    "badgeClass": "badge-transit",
    "cardHighlight": "highlight-transit",
    "title": "Final Shopping & Eurotunnel Night Coach",
    "activities": [
      "• <b>Morning (10:00 – 13:00):</b> Final souvenir shopping along Boulevard Saint-Michel and Le Marais; pick up Parisian macarons (Ladurée) and French pastries.",
      "• <b>Afternoon (14:00 – 18:00):</b> Pack suitcases at hotel, relaxed afternoon café time along the Seine.",
      "• <b>Night (21:30 – 23:00):</b> Transfer to Paris Bercy Seine terminal; board 23:00 FlixBus overnight coach crossing back to London via the Eurotunnel."
    ],
    "stayTitle": "FlixBus Overnight",
    "stayDesc": "Paris Bercy ➔ London Victoria",
    "transitInfo": "🚇 Metro Line 14 + FlixBus Sleeper Transit",
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
    "title": "Arrival Back in UK & London Temple Proximity",
    "activities": [
      "• <b>Morning (07:25 – 10:30):</b> Arrive at London Victoria Coach Station. Full English breakfast at Victoria.",
      "• <b>Afternoon (11:30 – 14:30):</b> South Western Railway direct train from London Waterloo to Southampton Central (~1h 15m). Return to Aunt Maria's residence.",
      "• <b>Evening:</b> Rest and celebration after completing an extraordinary 21-day winter journey across 4 countries.",
      "• <i>Nearby Sacred Site: London England Temple in Newchapel, Surrey is located directly along the southern rail corridor between London and Southampton.</i>"
    ],
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
      </td>
      <td class="col-table-stay">
        <div class="table-hotel-name">${item.stayTitle}</div>
        <div class="table-hotel-addr">${item.stayDesc}</div>
        ${item.transitInfo ? `<div class="table-transit-mode"><i>${item.transitInfo}</i></div>` : ''}
      </td>
      <td class="col-table-action">
        <button type="button" class="btn-table-map" title="Focus map on ${item.city}">
          📍 Map
        </button>
      </td>
    `;

    // Clicking row or map button smoothly focuses map
    tr.addEventListener('click', (e) => {
      focusDayOnMap(item);
    });

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
        </div>
        <div class="day-card-side">
          <div class="card-stay-box">
            <div class="stay-header-label">🏨 Accommodation & Transit</div>
            <div class="stay-hotel-name">${item.stayTitle}</div>
            <div class="stay-hotel-addr">${item.stayDesc}</div>
            ${item.transitInfo ? `<div class="stay-transit-badge">${item.transitInfo}</div>` : ''}
            <button type="button" class="btn-card-map" data-day="${item.day}">
              📍 Focus on Map
            </button>
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

// Switch between Table View and Card View
function switchItineraryView(view) {
  currentItineraryView = view;
  const tableWrapper = document.getElementById('itineraryTableWrapper');
  const cardsContainer = document.getElementById('timelineContainer');
  const tableBtn = document.getElementById('viewTableBtn');
  const cardsBtn = document.getElementById('viewCardsBtn');

  if (view === 'table') {
    if (tableWrapper) tableWrapper.style.display = 'block';
    if (cardsContainer) cardsContainer.style.display = 'none';
    if (tableBtn) tableBtn.classList.add('active');
    if (cardsBtn) cardsBtn.classList.remove('active');
    renderItineraryTable(currentItineraryFilter);
  } else {
    if (tableWrapper) tableWrapper.style.display = 'none';
    if (cardsContainer) cardsContainer.style.display = 'flex';
    if (tableBtn) tableBtn.classList.remove('active');
    if (cardsBtn) cardsBtn.classList.add('active');
    renderTimeline(currentItineraryFilter);
  }
}

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

  // Itinerary View Toggle buttons (Table vs Cards)
  try {
    const viewTableBtn = document.getElementById('viewTableBtn');
    const viewCardsBtn = document.getElementById('viewCardsBtn');
    if (viewTableBtn) {
      viewTableBtn.addEventListener('click', () => switchItineraryView('table'));
    }
    if (viewCardsBtn) {
      viewCardsBtn.addEventListener('click', () => switchItineraryView('cards'));
    }
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
      });
    });
  } catch (e) {
    console.error('Error setting up filter buttons:', e);
  }
}

// Guarantee execution whether DOM is loading or already interactive/complete
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
