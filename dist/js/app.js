// Master Destinations & Sights Data with Real Wikimedia Commons High-Res Imagery
const destinationData = [
  {
    id: "london",
    name: "London & Southampton",
    country: "United Kingdom",
    dates: "12–15 Dec 2026",
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
    name: "Amsterdam & The Hague",
    country: "Netherlands",
    dates: "16–18 Dec 2026 (3 Nights Base)",
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
        desc: "Day trip to the International Criminal Court, historic Peace Palace, Mauritshuis, and The Hague Netherlands Temple in Zoetermeer.",
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
    id: "cologne-dusseldorf",
    name: "Cologne & Düsseldorf",
    country: "Germany",
    dates: "19–21 Dec 2026 (2 Nights Base)",
    coords: [50.9413, 6.9583],
    badgeClass: "badge-de",
    category: "Gothic Splendor & Themed Christmas Markets",
    heroImage: "public/images/destinations/cologne-dusseldorf.jpg",
    description: "Our 2-night base along the Rhine: marvel at the monumental twin spires of Kölner Dom and the Lindt Chocolate Museum in Cologne, then take a 20-min train to explore Düsseldorf's 7 magical themed Christmas markets.",
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
    id: "frankfurt",
    name: "Frankfurt am Main & Temple",
    country: "Germany",
    dates: "21–23 Dec 2026 (2 Nights Base)",
    coords: [50.1109, 8.6821],
    badgeClass: "badge-de",
    category: "Historic Altstadt, Sacred Temple & Skyline",
    heroImage: "public/images/destinations/frankfurt.jpg",
    description: "Our comfortable 2-night holiday base in central Germany: combining historic half-timbered Römerberg, Paulsplatz markets, Goethe House, Museumsufer, and the sacred Frankfurt Germany LDS Temple.",
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
        name: "Frankfurter Weihnachtsmarkt (Römerberg & Paulsplatz)",
        type: "Historic Christmas Market (Est. 1393)",
        desc: "One of Germany's grandest and oldest holiday markets, filling the medieval square with festive lights, a 30m Christmas tree, and hot spiced Apfelwein.",
        image: "public/images/sights/roemerberg.jpg",
        coords: [50.1103, 8.6821]
      }
    ]
  },
  {
    id: "strasbourg-colmar",
    name: "Strasbourg & Colmar (Alsace)",
    country: "France",
    dates: "23–25 Dec 2026 (2 Nights · Kehl Base)",
    coords: [48.5734, 7.7521],
    badgeClass: "badge-fr",
    category: "Capitale de Noël & Fairytale Alsace (Beauty & the Beast & Howl's Castle Inspiration)",
    heroImage: "public/images/destinations/strasbourg-colmar.jpg",
    description: "Staying at B&B Hotel Kehl across the Rhine as our strategic base to visit Strasbourg ('Capital of Christmas') and fairytale Colmar in France—the real-world inspiration for Disney's Beauty and the Beast and Studio Ghibli's Howl's Moving Castle.",
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
        image: "public/images/sights/maison-pfister-colmar.jpg",
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
    id: "bern-base",
    name: "Bern (UNESCO Old Town & Base)",
    country: "Switzerland",
    dates: "25 Dec 2026 (Alpenblick Base · Night 1 of 4)",
    coords: [46.9480, 7.4474],
    badgeClass: "badge-ch",
    category: "UNESCO World Heritage Capital & 4-Night Swiss Base",
    heroImage: "public/images/sights/zytglogge-bern.jpg",
    description: "Our confirmed 4-night Swiss base at Alpenblick CoLiving: exploring the UNESCO medieval Old Town, 6 km of weather-protected Lauben covered stone arcades, the 800-year-old Zytglogge astronomical clock, and Rosengarten panoramic river overlook.",
    mustVisitSites: [
      {
        name: "Zytglogge Astronomical Clock Tower",
        type: "13th-Century Landmark",
        desc: "Iconic medieval clock tower built in 1218 with moving mechanical figurines performing four minutes before every hour.",
        image: "public/images/sights/zytglogge-bern.jpg",
        coords: [46.9480, 7.4474]
      },
      {
        name: "Bern 6 km Lauben Covered Arcades",
        type: "UNESCO Architecture",
        desc: "One of Europe's longest covered shopping promenades, lined with sandstone arches, cozy artisan boutiques, and Swiss cafes.",
        image: "public/images/sights/bern-arcades.jpg",
        coords: [46.9482, 7.4510]
      },
      {
        name: "Rosengarten Panoramic Overlook",
        type: "Panoramic Vantage Point",
        desc: "Elevated park garden offering world-famous panoramic vistas of the horseshoe bend of the turquoise Aare River wrapping around the medieval Old Town.",
        image: "public/images/sights/bern-rosengarten.jpg",
        coords: [46.9515, 7.4608]
      }
    ]
  },
  {
    id: "grindelwald-iseltwald",
    name: "Grindelwald & Iseltwald",
    country: "Switzerland",
    dates: "26 Dec 2026 (Alps & CLOY Pier)",
    coords: [46.6242, 8.0414],
    badgeClass: "badge-ch",
    category: "Alpine Peaks & The CLOY Piano Pier",
    heroImage: "public/images/destinations/grindelwald.jpg",
    description: "Snow-dusted Alpine heights and Crash Landing on You signature filming spots: ascending Mount First (2,168m) for the thrilling Cliff Walk facing the Eiger, then taking PostBus to Iseltwald's wooden pier on turquoise Lake Brienz.",
    mustVisitSites: [
      {
        name: "Grindelwald First & Cliff Walk by Tissot",
        type: "CLOY Paragliding & Reunion Vista",
        desc: "Gondola ride up to 2,168 meters for the exhilarating metal walkway clinging to the mountain face with 360-degree views of the Eiger North Face.",
        image: "public/images/sights/grindelwald-first-cliff-walk.jpg",
        coords: [46.6590, 8.0645]
      },
      {
        name: "Iseltwald Landing Stage (Captain Ri's Piano)",
        type: "CLOY Signature Scene",
        desc: "The famous wooden dock on Lake Brienz where Captain Ri played his piano song for his brother while Se-ri listened from the ferry.",
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
    id: "lauterbrunnen-blausee",
    name: "Lauterbrunnen & Blausee",
    country: "Switzerland",
    dates: "27 Dec 2026 (Waterfalls & 1,000 Lights)",
    coords: [46.5935, 7.9077],
    badgeClass: "badge-ch",
    category: "Valley of 72 Waterfalls & Enchanted Winter Park",
    heroImage: "public/images/sights/staubbach-falls-lauterbrunnen.jpg",
    description: "The dramatic U-shaped glacial valley of Lauterbrunnen: gazing up at the 297m free-falling Staubbach Falls, ascending to car-free Mürren village, and journeying to Blausee Nature Park for the magical evening 'Path of the 1,000 Lights'.",
    mustVisitSites: [
      {
        name: "Staubbach Falls & Lauterbrunnen Valley",
        type: "Iconic Glacial Waterfall",
        desc: "Towering 297-meter waterfall cascading down vertical limestone cliffs right behind the traditional Swiss village church.",
        image: "public/images/sights/staubbach-falls-lauterbrunnen.jpg",
        coords: [46.5935, 7.9077]
      },
      {
        name: "Mürren Alpine Village & BLM Mountain Rail",
        type: "Car-Free Alpine Gem",
        desc: "Perched 1,638 meters on a high cliff terrace directly facing the majestic trio of the Eiger, Mönch, and Jungfrau peaks.",
        image: "public/images/sights/muerren-village.jpg",
        coords: [46.5594, 7.8927]
      },
      {
        name: "Blausee Nature Park (Path of the 1,000 Lights)",
        type: "Enchanted Illuminated Lake",
        desc: "Crystal-clear subterranean-fed sapphire-blue lake nestled in an ancient pine forest, glowing with hundreds of floating lanterns during winter twilight.",
        image: "public/images/sights/blausee.jpg",
        coords: [46.5332, 7.6653]
      }
    ]
  },
  {
    id: "spiez-sigriswil",
    name: "Spiez & Sigriswil",
    country: "Switzerland",
    dates: "28 Dec 2026 (Lake Thun & CLOY Bridge)",
    coords: [46.7167, 7.7167],
    badgeClass: "badge-ch",
    category: "Lake Thun Panorama & Suspension Bridge",
    heroImage: "public/images/destinations/sigriswil.jpg",
    description: "Picturesque Spiez Bay and castle vineyards on Lake Thun, followed by the awe-inspiring Panoramabrücke Sigriswil suspended 182 meters above Gummischlucht gorge where Jeong-hyeok asked Se-ri to take a photograph.",
    mustVisitSites: [
      {
        name: "Panoramabrücke Sigriswil (CLOY Bridge Scene)",
        type: "Suspension Bridge Landmark",
        desc: "The 340-meter-long suspension bridge hanging 182 meters over Gummischlucht gorge with panoramic vistas of Lake Thun and Mount Niesen.",
        image: "public/images/sights/panoramabruecke-sigriswil.jpg",
        coords: [46.7190, 7.7210]
      },
      {
        name: "Spiez Castle Waterfront & Lake Thun Bay",
        type: "Medieval Castle & Alpine Harbor",
        desc: "1,000-year-old castle guarding the turquoise waters of Spiez Bay, surrounded by hillside vineyards and snowy peaks.",
        image: "public/images/sights/lake-thun-spiez.jpg",
        coords: [46.6847, 7.6780]
      }
    ]
  },
  {
    id: "bern-temple",
    name: "Bern Temple & TGV to Paris",
    country: "Switzerland",
    dates: "29 Dec 2026 (Sacred Session & Transit)",
    coords: [47.0022, 7.4582],
    badgeClass: "badge-ch",
    category: "Sacred Temple Worship & High-Speed Transit",
    heroImage: "public/images/temples/bern-temple.jpg",
    description: "A sacred morning worship session at the historic Bern Switzerland Temple in Zollikofen, followed by high-speed TGV Lyria bullet train direct from Bern Hbf to Paris Gare de Lyon.",
    mustVisitSites: [
      {
        name: "Bern Switzerland LDS Temple",
        type: "Sacred Temple & Spiritual Sanctuary",
        desc: "The historic first LDS temple in Europe (dedicated in 1955), nestled among tall alpine pine trees in Zollikofen with views of the snow-capped Alps.",
        image: "public/images/temples/bern-temple.jpg",
        coords: [47.0022, 7.4582]
      },
      {
        name: "High-Speed TGV Lyria to Paris Gare de Lyon",
        type: "International High-Speed Rail",
        desc: "Smooth 4-hour 15-minute high-speed rail connection across the Franco-Swiss border directly into the heart of Paris.",
        image: "public/images/sights/tgv-lyria.jpg",
        coords: [46.9490, 7.4380]
      }
    ]
  },
  {
    id: "paris",
    name: "Paris & Palace of Versailles",
    country: "France",
    dates: "29 Dec 2026 – 03 Jan 2027 (5 Nights Base)",
    coords: [48.8566, 2.3522],
    badgeClass: "badge-fr",
    category: "City of Light & Royal Splendor",
    heroImage: "public/images/destinations/paris.jpg",
    description: "The grand finale: 5 full nights based at Break & Home Paris Italie ringing in the New Year 2027 amidst world-famous art, romantic boulevards, and royal history.",
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
    itineraryMatch: "Day 19: Sacred Visit & Reflection beside Versailles (Sat 02 Jan 2027)",
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
    itineraryMatch: "Day 15: Confirmed Morning Endowment Session (Tue 29 Dec 2026 @ 9:30 AM)",
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
  { id: "amsterdam", flag: "🇳🇱", shortName: "Amsterdam & The Hague", shortDates: "16–18 Dec" },
  { id: "cologne-dusseldorf", flag: "🇩🇪", shortName: "Cologne & Düsseldorf", shortDates: "19–21 Dec" },
  { id: "frankfurt", flag: "🇩🇪", shortName: "Frankfurt & Temple", shortDates: "21–23 Dec" },
  { id: "strasbourg-colmar", flag: "🇫🇷", shortName: "Strasbourg & Colmar", shortDates: "23–25 Dec" },
  { id: "bern-base", flag: "🇨🇭", shortName: "Bern Old Town", shortDates: "25 Dec" },
  { id: "grindelwald-iseltwald", flag: "🇨🇭", shortName: "Grindelwald & Iseltwald", shortDates: "26 Dec" },
  { id: "lauterbrunnen-blausee", flag: "🇨🇭", shortName: "Lauterbrunnen & Blausee", shortDates: "27 Dec" },
  { id: "spiez-sigriswil", flag: "🇨🇭", shortName: "Spiez & Sigriswil", shortDates: "28 Dec" },
  { id: "bern-temple", flag: "🇨🇭", shortName: "Bern Temple & TGV", shortDates: "29 Dec" },
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

    // Check if this is Germany (Cologne & Düsseldorf + Frankfurt Base & Temple)
    if (dest.id === 'cologne-dusseldorf') {
      const cdIndex = i; // 2
      const fraIndex = destinationData.findIndex(d => d.id === 'frankfurt'); // 3

      // Create One Large Box for Germany (19–23 Dec · 4 Nights)
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
          <button type="button" class="itinerary-stop-chip germany-sub-chip" data-index="${fraIndex}" title="Focus map on Frankfurt am Main & Temple (21–23 Dec · 2 Nights)">
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

      // Add arrow after Germany box
      if (fraIndex < destinationData.length - 1) {
        const arrow = document.createElement('span');
        arrow.className = 'itinerary-arrow';
        arrow.innerHTML = '➔';
        bar.appendChild(arrow);
      }

      i = (fraIndex !== -1 && fraIndex >= i) ? fraIndex + 1 : i + 1;
      continue;
    }

    // Check if this is Switzerland (Bern Base + Grindelwald/Iseltwald + Lauterbrunnen/Blausee + Spiez/Sigriswil + Bern Temple)
    if (dest.id === 'bern-base') {
      const bernIdx = i; // 5
      const grindelwaldIdx = destinationData.findIndex(d => d.id === 'grindelwald-iseltwald'); // 6
      const lauterbrunnenIdx = destinationData.findIndex(d => d.id === 'lauterbrunnen-blausee'); // 7
      const sigriswilIdx = destinationData.findIndex(d => d.id === 'spiez-sigriswil'); // 8
      const templeIdx = destinationData.findIndex(d => d.id === 'bern-temple'); // 9

      // Create One Large Box for Switzerland (25–29 Dec · 4 Nights Base at Alpenblick CoLiving)
      const swissBox = document.createElement('div');
      swissBox.className = 'itinerary-switzerland-box';
      swissBox.setAttribute('title', 'Switzerland: Bern Base (Alpenblick CoLiving) & Alps (25–29 Dec · 4 Nights)');

      swissBox.innerHTML = `
        <div class="switzerland-box-header">
          <span class="switzerland-box-title">
            <span class="switzerland-box-flag">🇨🇭</span> Switzerland: Bern Base &amp; Alps
          </span>
          <span class="switzerland-box-badge">25–29 Dec · 4 Nights (Alpenblick Base)</span>
        </div>
        <div class="switzerland-box-content">
          <!-- Step 6: Bern UNESCO Old Town -->
          <button type="button" class="itinerary-stop-chip switzerland-sub-chip" data-index="${bernIdx}" title="Focus map on Bern (25 Dec · UNESCO Old Town & Arcades)">
            <span class="itinerary-step-num" style="background: #ef4444;">6</span>
            <div class="itinerary-stop-text">
              <span class="itinerary-stop-title">🇨🇭 Bern Old Town</span>
              <span class="itinerary-stop-sub">25 Dec · UNESCO Base</span>
            </div>
          </button>

          <span class="itinerary-sub-arrow-ch">➔</span>

          <!-- Step 7: Grindelwald & Iseltwald -->
          <button type="button" class="itinerary-stop-chip switzerland-sub-chip" data-index="${grindelwaldIdx}" title="Focus map on Grindelwald & Iseltwald (26 Dec · First Cliff Walk & CLOY Pier)">
            <span class="itinerary-step-num" style="background: #ef4444;">7</span>
            <div class="itinerary-stop-text">
              <span class="itinerary-stop-title">🇨🇭 Grindelwald &amp; Iseltwald</span>
              <span class="itinerary-stop-sub">26 Dec · First &amp; CLOY Pier</span>
            </div>
          </button>

          <span class="itinerary-sub-arrow-ch">➔</span>

          <!-- Step 8: Lauterbrunnen & Blausee -->
          <button type="button" class="itinerary-stop-chip switzerland-sub-chip" data-index="${lauterbrunnenIdx}" title="Focus map on Lauterbrunnen & Blausee (27 Dec · Staubbach Falls & 1,000 Lights)">
            <span class="itinerary-step-num" style="background: #ef4444;">8</span>
            <div class="itinerary-stop-text">
              <span class="itinerary-stop-title">🇨🇭 Lauterbrunnen &amp; Blausee</span>
              <span class="itinerary-stop-sub">27 Dec · Falls &amp; Lanterns</span>
            </div>
          </button>

          <span class="itinerary-sub-arrow-ch">➔</span>

          <!-- Step 9: Spiez & Sigriswil -->
          <button type="button" class="itinerary-stop-chip switzerland-sub-chip" data-index="${sigriswilIdx}" title="Focus map on Spiez & Sigriswil (28 Dec · Lake Thun & CLOY Bridge)">
            <span class="itinerary-step-num" style="background: #ef4444;">9</span>
            <div class="itinerary-stop-text">
              <span class="itinerary-stop-title">🇨🇭 Spiez &amp; Sigriswil</span>
              <span class="itinerary-stop-sub">28 Dec · Lake Thun &amp; Bridge</span>
            </div>
          </button>

          <span class="itinerary-sub-arrow-ch">➔</span>

          <!-- Step 10: Bern Temple & TGV -->
          <button type="button" class="itinerary-stop-chip switzerland-sub-chip" data-index="${templeIdx}" title="Focus map on Bern Temple (29 Dec · Sacred Session & TGV Lyria to Paris)">
            <span class="itinerary-step-num" style="background: #ef4444;">10</span>
            <div class="itinerary-stop-text">
              <span class="itinerary-stop-title">🇨🇭 Bern Temple &amp; TGV</span>
              <span class="itinerary-stop-sub">29 Dec · Sacred Session</span>
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

      // Add arrow after Switzerland box
      const lastSwissIdx = (templeIdx !== -1) ? templeIdx : i;
      if (lastSwissIdx < destinationData.length - 1) {
        const arrow = document.createElement('span');
        arrow.className = 'itinerary-arrow';
        arrow.innerHTML = '➔';
        bar.appendChild(arrow);
      }

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
        <span class="itinerary-step-num" style="background: ${color};">5</span>
        <div class="itinerary-stop-text">
          <span class="itinerary-stop-title">${flag} Strasbourg &amp; Colmar <span class="badge-kehl-base">Kehl Base</span></span>
          <span class="itinerary-stop-sub">23–25 Dec · Kehl Base (Alsace)</span>
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
    "date": "15 Dec 2026 (Tue)",
    "city": "London ➔ Amsterdam",
    "country": "Transit",
    "badgeClass": "badge-transit",
    "cardHighlight": "highlight-transit",
    "title": "Departure Across English Channel · FlixBus Route N824 (Confirmed)",
    "locations": [
      {
        "name": "London Victoria Coach Station (164 Buckingham Palace Rd)"
      },
      {
        "name": "FlixBus Route N824 (Eurotunnel / Dover)"
      }
    ],
    "activities": [
      "• Arrive at London Victoria Coach Station (164 Buckingham Palace Rd) by 20:30 PM (60–90 min before departure).",
      "• Complete baggage tagging for 2×20kg hold luggage and present passports for Schengen visa verification.",
      "• Board FlixBus Route N824 (Seats 11C & 11D · Booking Ref: 338 890 0447) departing at 22:00 (10:00 PM) sharp.",
      "• Overnight sleeper coach transit via Dover Port and Eurotunnel LeShuttle crossing into France, Belgium, and the Netherlands."
    ],
    "stayTitle": "Transit: FlixBus Route N824 Sleeper (Confirmed)",
    "stayDesc": "164 Buckingham Palace Rd, London ➔ De Ruijterkade 153, Amsterdam Centraal (Seats 11C & 11D · Ref: 338 890 0447)",
    "transitInfo": "🚌 FlixBus N824 (22:00–10:25+1d) · AUD $135.96 Paid · Seats 11C & 11D",
    "keyTip": "Arrive by 21:00 (1h before departure). Keep passports in daypack ready for French border police (PAF) entry stamps at Dover/Eurotunnel.",
    "costs": {
      "sightseeing": "Free ($0 AUD)",
      "transit": "AUD $135.96 (Prepaid)",
      "stay": "Included on Sleeper Coach",
      "totalHighlight": "Free Sightseeing ($0 AUD)"
    }
  },
  {
    "day": "Day 2",
    "date": "16 Dec 2026 (Wed)",
    "city": "Amsterdam",
    "country": "Netherlands",
    "badgeClass": "badge-nl",
    "cardHighlight": "highlight-nl",
    "title": "Canal Ring & Amsterdam Light Festival",
    "locations": [
      {
        "name": "Amsterdam Central Station (De Ruijterkade 153)"
      },
      {
        "name": "Amsterdam Hostel Leidseplein (Korte Leidsedwarsstraat 79)"
      },
      {
        "name": "Herengracht"
      },
      {
        "name": "Dam"
      },
      {
        "name": "Royal Palace Amsterdam"
      },
      {
        "name": "Begijnhof"
      },
      {
        "name": "Leidseplein"
      }
    ],
    "activities": [
      "• FlixBus Route N824 arrives at Amsterdam Central Station (De Ruijterkade 153) at 10:25 AM.",
      "• Disembark, refresh at station facilities, and board GVB Tram Line 2 or 12 south to Leidseplein.",
      "• Drop luggage early at Amsterdam Hostel Leidseplein (Korte Leidsedwarsstraat 79) at 11:30 AM (official room check-in opens 14:00).",
      "• Stroll along the UNESCO Herengracht 'Gentlemen's Canal' admiring 17th-century merchant mansions.",
      "• Cross Dam Square to photograph the monumental Royal Palace (Koninklijk Paleis) exterior.",
      "• Step through the arched wooden gateway into the peaceful 14th-century Begijnhof courtyard and English Reformed Church.",
      "• Return to Leidseplein hub to experience the Amsterdam Light Festival illuminated bridge artworks, installations, and canal dining."
    ],
    "stayTitle": "Amsterdam Hostel Leidseplein (Confirmed: 5969.499.141)",
    "stayDesc": "Korte Leidsedwarsstraat 79, Amsterdam · Check-in 14:00 / Early luggage drop 11:30 AM · Night 1 of 3",
    "transitInfo": "🚇 GVB Tram Line 2/12 (€3.40 / ride or GVB Multi-Day Pass)",
    "keyTip": "Pay tourist taxes at front desk (€137.69 total for 3 nights for 2). Keep valuables in hostel lockers.",
    "costs": {
      "sightseeing": "Free ($0 AUD)",
      "transit": "€3.40 (GVB Tram)",
      "stay": "€45.90 / night (€137.69 total 3N)",
      "totalHighlight": "Free Sightseeing ($0 AUD)"
    }
  },
  {
    "day": "Day 3",
    "date": "17 Dec 2026 (Thu)",
    "city": "Amsterdam & Zaandam",
    "country": "Netherlands",
    "badgeClass": "badge-nl",
    "cardHighlight": "highlight-nl",
    "title": "Zaanse Schans Windmills & Museumplein Masterpieces",
    "locations": [
      {
        "name": "Zaanse Schans (Zaandam)"
      },
      {
        "name": "Museumplein"
      },
      {
        "name": "Rijksmuseum"
      },
      {
        "name": "Van Gogh Museum"
      },
      {
        "name": "Rosarium Vondelpark"
      },
      {
        "name": "De Gooyer Windmill"
      },
      {
        "name": "Jordaan"
      }
    ],
    "activities": [
      "• Board NS Sprinter train from Amsterdam Centraal to Zaandijk (17 min, €3.60).",
      "• Stroll through Zaanse Schans historic village to explore operating 18th-century windmills, wooden clog carving, and Catharina Hoeve cheese farm.",
      "• Return to Amsterdam Museumplein cultural park.",
      "• Enter Rijksmuseum (13:00 timed entry) to view Rembrandt's <i>The Night Watch</i> and Vermeer's <i>The Milkmaid</i>.",
      "• Visit the Van Gogh Museum (14:00 timed entry) for <i>Sunflowers</i> and <i>Almond Blossom</i>.",
      "• Stroll through Vondelpark to the circular Rosarium rose garden pavilion.",
      "• Photograph De Gooyer Windmill, the tallest wooden grain windmill in the Netherlands (next to Brouwerij 't IJ).",
      "• Evening walking tour through the picturesque Jordaan canal ring, illuminated bridges, and cozy brown cafés."
    ],
    "stayTitle": "Amsterdam Hostel Leidseplein (Night 2 of 3)",
    "stayDesc": "Korte Leidsedwarsstraat 79, Amsterdam (Hostel base near Leidseplein)",
    "transitInfo": "🚆 NS Train to Zaandijk (€3.60 return) + 🚇 GVB Tram Day Pass",
    "keyTip": "Book Rijksmuseum and Van Gogh Museum online well in advance. Entry slots are strictly timed.",
    "costs": {
      "sightseeing": "Rijksmuseum: €22.50 · Van Gogh: €22.00 · Zaanse Schans: Free",
      "transit": "€3.60 (NS Train) + €3.40 (Tram)",
      "stay": "€45.90 / night (Night 2 of 3)",
      "totalHighlight": "Paid Sightseeing: ~A$68 AUD (€44.50)"
    }
  },
  {
    "day": "Day 4",
    "date": "18 Dec 2026 (Fri)",
    "city": "The Hague & Amsterdam",
    "country": "Netherlands",
    "badgeClass": "badge-nl",
    "cardHighlight": "highlight-nl",
    "title": "Sacred Temple Worship, Peace Palace & Street Markets",
    "locations": [
      {
        "name": "The Hague Netherlands Temple (Osylaan 2, Zoetermeer)",
        "badge": "✨ Sacred LDS Temple Appointment",
        "badgeClass": "badge-temple"
      },
      {
        "name": "Peace Palace (Vredespaleis, The Hague)"
      },
      {
        "name": "International Criminal Court (ICC, The Hague)"
      },
      {
        "name": "Albert Cuyp Markt (Amsterdam)"
      },
      {
        "name": "Anne Frank House (Amsterdam)"
      }
    ],
    "activities": [
      "• Board 07:45 AM NS Intercity train from Amsterdam Centraal to Zoetermeer using contactless OVpay.",
      "• Arrive at The Hague Netherlands Temple by 09:10 AM.",
      "• Attend confirmed Sacred Endowment Session from 09:30 AM – 11:30 AM.",
      "• Stroll through the landscaped grounds and peaceful gardens of the temple.",
      "• Board RandstadRail tram into central Den Haag.",
      "• Visit the Peace Palace (Vredespaleis), seat of the UN International Court of Justice and Carnegie Library.",
      "• View the International Criminal Court (ICC) contemporary glass judicial campus on Oude Waalsdorperweg.",
      "• Return NS train to Amsterdam.",
      "• Browse 260 market stalls at Albert Cuyp Markt for freshly made warm stroopwafels and Dutch herring.",
      "• Stroll along Prinsengracht to view the Anne Frank House exterior and historic Westerkerk tower."
    ],
    "stayTitle": "Amsterdam Hostel Leidseplein (Night 3 of 3)",
    "stayDesc": "Korte Leidsedwarsstraat 79, Amsterdam (Final night in Netherlands)",
    "transitInfo": "🚆 NS Intercity + RandstadRail Day Return (Contactless OVpay ~€13.20)",
    "keyTip": "Arrive at temple entrance 20 minutes prior to session. Pack Temple recommend & white attire in daypack.",
    "costs": {
      "sightseeing": "Temple, Peace Palace, ICC: Free ($0 AUD)",
      "transit": "€13.20 (NS Train OVpay)",
      "stay": "€45.90 / night (Night 3 of 3)",
      "totalHighlight": "Free Sightseeing ($0 AUD)"
    }
  },
  {
    "day": "Day 5",
    "date": "19 Dec 2026 (Sat)",
    "city": "Amsterdam ➔ Cologne",
    "country": "Germany",
    "badgeClass": "badge-de",
    "cardHighlight": "highlight-de",
    "title": "High-Speed Rail to Cologne & Rhine River Christmas Markets",
    "locations": [
      {
        "name": "Amsterdam Hostel Leidseplein"
      },
      {
        "name": "DB ICE 123 Train (Amsterdam ➔ Köln Hbf)"
      },
      {
        "name": "Room in Cologne (Brucknerstraße 3, Lindenthal)"
      },
      {
        "name": "Cologne Cathedral (Kölner Dom)"
      },
      {
        "name": "Museum Ludwig"
      },
      {
        "name": "Hohenzollern Bridge"
      },
      {
        "name": "Cologne Triangle (KölnTriangle)"
      },
      {
        "name": "Schokoladenmuseum Köln"
      },
      {
        "name": "Old Town Cologne 1922 e.V."
      }
    ],
    "activities": [
      "• Check out of Amsterdam Hostel Leidseplein by 08:00 AM and take tram to Amsterdam Centraal.",
      "• Board DB ICE 123 high-speed train (08:38 AM – 11:15 AM) direct to Köln Hauptbahnhof (2h 38m).",
      "• Transfer via KVB Stadtbahn to Lindenthal and check in at Airbnb 'Room in Cologne' hosted by Ina (Brucknerstraße 3) at 1:00 PM (13:00).",
      "• Tour landmark Cologne Cathedral (Kölner Dom) to view the 43-meter ribbed Gothic vaults and Shrine of the Three Kings.",
      "• Explore modern art exhibitions at Museum Ludwig.",
      "• Walk across Hohenzollern Bridge adorned with hundreds of thousands of engraved love padlocks.",
      "• Take high-speed lift to Cologne Triangle (KölnTriangle) 103 m open-air observation deck for panoramic skyline views of Kölner Dom and Rhine.",
      "• Visit the Imhoff Chocolate Museum on the Rheinauhafen peninsula and sample the warm Lindt chocolate fountain.",
      "• Stroll through Old Town Cologne (Altstadt), Alter Markt, and Heinzels Wintermärchen Christmas Market with ice skating rinks and artisan chalets."
    ],
    "stayTitle": "Airbnb: Room in Cologne (Hosted by Ina)",
    "stayDesc": "Brucknerstraße 3, 50931 Cologne (Lindenthal) · Check-in 1:00 PM (13:00) / Checkout 1:00 PM · Night 1 of 2",
    "transitInfo": "🚆 DB ICE 123 High-Speed Train (2h 38m · Amsterdam Centraal ➔ Köln Hbf)",
    "keyTip": "Quiet residential location in Lindenthal near Hiroshima-Nagasaki-Park and Aachener Straße, with convenient KVB Stadtbahn connections to central Cologne.",
    "costs": {
      "sightseeing": "Cologne Triangle: €5.00 · Chocolate Museum: €15.50 – €17.50 · Cathedral: Free",
      "transit": "€29.90 – €39.90 (DB ICE 123)",
      "stay": "€85.00 / night (€170.00 total 2N)",
      "totalHighlight": "Paid Sightseeing: ~A$29 AUD (€21)"
    }
  },
  {
    "day": "Day 6",
    "date": "20 Dec 2026 (Sun)",
    "city": "Cologne & Düsseldorf",
    "country": "Germany",
    "badgeClass": "badge-de",
    "cardHighlight": "highlight-de",
    "title": "Sunday Worship, River Rhine Cableway & Düsseldorf Little Tokyo",
    "locations": [
      {
        "name": "Sunday Worship (Cologne)"
      },
      {
        "name": "Flora und Botanischer Garten Köln"
      },
      {
        "name": "Rhein-Seilbahn"
      },
      {
        "name": "Classic Remise Düsseldorf"
      },
      {
        "name": "Schlosspark Benrath"
      },
      {
        "name": "Nord Park"
      },
      {
        "name": "Wildpark Düsseldorf Grafenberg"
      },
      {
        "name": "Rheinuferpromenade Düsseldorf"
      },
      {
        "name": "Little Tokyo Düsseldorf"
      }
    ],
    "activities": [
      "• Attend Sunday church worship services in central Cologne.",
      "• Walk through the historic 1864 Flora und Botanischer Garten palace grounds and tropical winter glasshouses.",
      "• Ride the Rhein-Seilbahn aerial cable car gliding over the Rhine River.",
      "• Take 20 min regional train from Cologne to Düsseldorf (€7.50).",
      "• Explore Classic Remise, a historic 1930s locomotive roundhouse displaying vintage, classic, and exotic sports cars.",
      "• Tour the baroque palace grounds and formal reflecting pond of Schlosspark Benrath.",
      "• Stroll through the authentic Japanese Garden in Nord Park and forested Grafenberg wildlife reserve.",
      "• Walk along the pedestrian Rheinuferpromenade along the Rhine towards Düsseldorf Altstadt.",
      "• Explore Little Tokyo along Immermannstraße for authentic Japanese ramen, gyoza, and bakeries before regional train return to Cologne base."
    ],
    "stayTitle": "Airbnb: Room in Cologne (Hosted by Ina)",
    "stayDesc": "Brucknerstraße 3, 50931 Cologne (Lindenthal) · Night 2 of 2",
    "transitInfo": "🚆 Regional Express Train (Köln ➔ Düsseldorf 20 mins) + 🚠 Rhein-Seilbahn",
    "keyTip": "Düsseldorf's 7 themed Christmas Markets (Marktplatz, Heinrich-Heine-Platz, Shadowplatz) are all free to enter and within walking distance of Little Tokyo.",
    "costs": {
      "sightseeing": "Markets, Classic Remise, Benrath, Nord Park: Free ($0 AUD)",
      "transit": "€5.50 (Cableway) + €7.50 (Regional Train)",
      "stay": "€85.00 / night (Night 2 of 2)",
      "totalHighlight": "Free Sightseeing ($0 AUD)"
    }
  },
  {
    "day": "Day 7",
    "date": "21 Dec 2026 (Mon)",
    "city": "Cologne ➔ Frankfurt",
    "country": "Germany",
    "badgeClass": "badge-de",
    "cardHighlight": "highlight-de",
    "title": "High-Speed Rail to Frankfurt & Historic Römerberg Markets",
    "locations": [
      {
        "name": "Room in Cologne (Brucknerstraße 3, Lindenthal)"
      },
      {
        "name": "DB ICE Train (Köln ➔ Frankfurt Hbf)"
      },
      {
        "name": "Premier Inn Frankfurt City Centre"
      },
      {
        "name": "Palmengarten Frankfurt"
      },
      {
        "name": "Eiserner Steg"
      },
      {
        "name": "Frankfurt Cathedral (Kaiserdom)"
      },
      {
        "name": "New Old Town (Neue Altstadt)"
      },
      {
        "name": "Römerberg"
      }
    ],
    "activities": [
      "• Check out of Airbnb 'Room in Cologne' (Brucknerstraße 3) by 08:30 AM (official checkout 1:00 PM) and take KVB Stadtbahn to Köln Hbf.",
      "• Board DB ICE high-speed train (09:00 AM – 10:05 AM) direct to Frankfurt (Main) Hbf (1h 05m).",
      "• Drop luggage at Premier Inn Frankfurt City Centre at 10:30 AM (Conf: 6320.027.566; room check-in opens 15:00).",
      "• Explore Palmengarten, one of Europe's largest botanical gardens, walking through the historic tropical palm house and desert biomes.",
      "• Walk across the 1868 neo-Gothic Eiserner Steg iron footbridge over the River Main for panoramic financial skyline views.",
      "• Tour Frankfurt Cathedral (Kaiserdom St. Bartholomäus), election and coronation site of Holy Roman Emperors.",
      "• Stroll through the Neue Altstadt reconstructed timbered courtyards along the historic 'Coronation Route'.",
      "• Photograph the iconic timbered town hall square at Römerberg.",
      "• Experience the Frankfurt Christmas Market across Römerberg and Paulsplatz."
    ],
    "stayTitle": "Premier Inn Frankfurt City Centre (Confirmed: 6320.027.566)",
    "stayDesc": "Near Frankfurt Central Station · Check-in 15:00 / Drop 10:30 AM · Night 1 of 2",
    "transitInfo": "🚆 DB ICE High-Speed Train (Köln Hbf ➔ Frankfurt Hbf, 1h 05m)",
    "keyTip": "Frankfurt Hbf is easily walkable to the hotel. The Christmas market extends from Hauptwache down to Römerberg.",
    "costs": {
      "sightseeing": "Palmengarten: €7.00 · Altstadt, Cathedral, Römerberg: Free",
      "transit": "€19.90 – €29.90 (DB ICE)",
      "stay": "€78.00 / night (€156.00 total 2N)",
      "totalHighlight": "Paid Sightseeing: ~A$12 AUD (€7)"
    }
  },
  {
    "day": "Day 8",
    "date": "22 Dec 2026 (Tue)",
    "city": "Frankfurt & Friedrichsdorf",
    "country": "Germany",
    "badgeClass": "badge-de",
    "cardHighlight": "highlight-de",
    "title": "Museumsufer, Zeil & Sacred Frankfurt Temple Session",
    "locations": [
      {
        "name": "Museumsufer & Main Riverside"
      },
      {
        "name": "Zeil & Frankfurt City Center"
      },
      {
        "name": "S-Bahn Line S5 (Taunus hills)"
      },
      {
        "name": "Frankfurt Germany Temple (Talstraße 10, Friedrichsdorf)",
        "badge": "✨ Sacred LDS Temple Appointment",
        "badgeClass": "badge-temple"
      },
      {
        "name": "Premier Inn Frankfurt"
      }
    ],
    "activities": [
      "• Stroll along the River Main museum promenade (Museumsufer) photographing high-rise banking skyline reflections.",
      "• Browse the central pedestrian shopping boulevard along Zeil and view the MyZeil architectural glass wave facade.",
      "• Board S-Bahn Line S5 from Frankfurt Hbf to Friedrichsdorf in the Taunus hills (26 min ride + 10 min walk).",
      "• Arrive at Frankfurt Germany Temple by 05:15 PM (17:15).",
      "• Attend confirmed Sacred Endowment Session from 06:00 PM – 08:00 PM (18:00 – 20:00).",
      "• Return via S-Bahn Line S5 to Frankfurt Hbf and Premier Inn Frankfurt.",
      "• Pack bags and set alarms for 03:30 AM wake-up for early morning cross-border coach into France."
    ],
    "stayTitle": "Premier Inn Frankfurt City Centre (Night 2 of 2)",
    "stayDesc": "Near Frankfurt Central Station (Night 2 of 2)",
    "transitInfo": "🚇 Frankfurt RMV / S-Bahn S5 Day Pass to Friedrichsdorf (€12.50)",
    "keyTip": "Pack temple attire in daypack. Frankfurt Central Station FlixBus stop (Stuttgarter Str. 26) is a 7 min walk from hotel.",
    "costs": {
      "sightseeing": "Temple, Main River, Zeil: Free ($0 AUD)",
      "transit": "€5.80 (S-Bahn) or €12.50 (RMV Day Pass)",
      "stay": "€78.00 / night (Night 2 of 2)",
      "totalHighlight": "Free Sightseeing ($0 AUD)"
    }
  },
  {
    "day": "Day 9",
    "date": "23 Dec 2026 (Wed)",
    "city": "Frankfurt ➔ Strasbourg & Kehl",
    "country": "France",
    "badgeClass": "badge-fr",
    "cardHighlight": "highlight-fr",
    "title": "Cross-Border Coach to Alsace, Petite-France & Strasbourg Great Tree",
    "locations": [
      {
        "name": "Premier Inn Frankfurt"
      },
      {
        "name": "FlixBus Route N13 (Frankfurt ➔ Strasbourg)"
      },
      {
        "name": "B&B Hotel Kehl (Allensteiner Str. 15, Kehl)"
      },
      {
        "name": "Place Kléber (Strasbourg)"
      },
      {
        "name": "Cathédrale Notre-Dame-de-Strasbourg"
      },
      {
        "name": "Palais Rohan"
      },
      {
        "name": "Petite-France (Strasbourg)",
        "badge": "🥀 Beauty and the Beast: Disney Storybook Village",
        "badgeClass": "badge-disney"
      },
      {
        "name": "Barrage Vauban"
      },
      {
        "name": "Église Saint-Paul"
      },
      {
        "name": "Christkindelsmärik (Place Broglie)"
      }
    ],
    "activities": [
      "• Check out of Premier Inn Frankfurt by 03:45 AM and walk 7 min to Frankfurt Hbf coach terminal (Stuttgarter Str. 26).",
      "• Board FlixBus Route N13 (Booking Ref: 339 153 0857 · Seats 3A & 3B) departing at 04:35 AM sharp.",
      "• Arrive at Strasbourg Central Bus Station (Place de l'Étoile) at 08:35 AM.",
      "• Take cross-border Tram Line D over the Rhine River into Kehl, Germany.",
      "• Drop luggage early at B&B Hotel Kehl (Allensteiner Str. 15) at 09:30 AM (Conf: 5159.618.641).",
      "• Take Tram Line D back across the border into central Strasbourg.",
      "• Marvel at the 30-meter illuminated Great Christmas Tree (<i>Grand Sapin</i>) in Place Kléber.",
      "• Enter pink sandstone Cathédrale Notre-Dame-de-Strasbourg to view the 18-meter Renaissance Astronomical Clock.",
      "• Stroll past the riverside Palais Rohan on the River Ill.",
      "• Explore Petite-France, the fairytale half-timbered tanners' quarters that inspired Disney's <i>Beauty and the Beast</i> village.",
      "• Climb to the Barrage Vauban rooftop terrace for panoramic views over Ponts Couverts and canal locks.",
      "• Photograph the twin-spired neo-Gothic Église Saint-Paul at the river confluence.",
      "• Experience Christkindelsmärik in Place Broglie (France's oldest Christmas market, established 1570) enjoying warm spiced apple cider (<i>jus de pomme chaud</i>), gingerbread, and Alsatian bretzels."
    ],
    "stayTitle": "B&B Hotel Kehl (Confirmed: 5159.618.641)",
    "stayDesc": "15 Allensteiner Str., 77694 Kehl, Germany (Base for Alsace · Tram Line D direct to Strasbourg) · Night 1 of 2",
    "transitInfo": "🚌 FlixBus N13 (04:35–08:35 · AUD $79.96 Paid) + 🚋 Strasbourg-Kehl Tram Line D (€1.90)",
    "keyTip": "Tram Line D runs frequently between Kehl station and central Strasbourg (Place Kléber). Buy 24h Tram card (€4.60).",
    "costs": {
      "sightseeing": "Cathedral, Petite-France, Place Kléber: Free ($0 AUD)",
      "transit": "AUD $79.96 (FlixBus Paid) + €1.90 (Tram D)",
      "stay": "€75.00 / night (€226.90 total 2N for 2)",
      "totalHighlight": "Free Sightseeing ($0 AUD)"
    }
  },
  {
    "day": "Day 10",
    "date": "24 Dec 2026 (Thu)",
    "city": "Colmar (Alsace)",
    "country": "France",
    "badgeClass": "badge-fr",
    "cardHighlight": "highlight-fr",
    "title": "Colmar Fairytale Day: Real-Life Beauty and the Beast Village",
    "locations": [
      {
        "name": "SNCF TER Train (Strasbourg ➔ Colmar)"
      },
      {
        "name": "Vieille Ville de Colmar",
        "badge": "🥀 Beauty and the Beast: Belle's 'Little Town'",
        "badgeClass": "badge-disney"
      },
      {
        "name": "La Maison des Têtes",
        "badge": "🥀 Beauty and the Beast: Renaissance Facade",
        "badgeClass": "badge-disney"
      },
      {
        "name": "Maison Pfister",
        "badge": "🥀 Beauty and the Beast: Iconic Gallery in Disney Sketches",
        "badgeClass": "badge-disney"
      },
      {
        "name": "Rue des Marchands",
        "badge": "🥀 Beauty and the Beast: Belle's Village Street",
        "badgeClass": "badge-disney"
      },
      {
        "name": "Collégiale Saint-Martin de Colmar",
        "badge": "🥀 Beauty and the Beast: Parish Church",
        "badgeClass": "badge-disney"
      },
      {
        "name": "Fontaine Schwendi",
        "badge": "🥀 Beauty and the Beast: The Exact Fountain Belle Sits On!",
        "badgeClass": "badge-disney"
      },
      {
        "name": "Marché Couvert Colmar",
        "badge": "🥀 Beauty and the Beast: Real-Life Food Market",
        "badgeClass": "badge-disney"
      },
      {
        "name": "Quai de la Poissonnerie",
        "badge": "🥀 Beauty and the Beast: Pastel Canal Row",
        "badgeClass": "badge-disney"
      },
      {
        "name": "La Petite Venise",
        "badge": "🥀 Beauty and the Beast: Fairytale Canal Quarter",
        "badgeClass": "badge-disney"
      },
      {
        "name": "B&B Hotel Kehl"
      }
    ],
    "activities": [
      "• Board 30 min SNCF TER Fluo train from Strasbourg to Colmar (08:45 AM – 09:25 AM).",
      "• Step into Colmar's medieval old town (Vieille Ville), primary real-life visual inspiration for Belle's 'Poor Provincial Town' in Disney's <i>Beauty and the Beast</i>.",
      "• Photograph La Maison des Têtes (1609 Renaissance facade sculpted with 106 grotesque heads).",
      "• Admire Maison Pfister, Colmar's iconic 1537 wooden gallery residence with two-story corner oriel turret and painted frescoes featured in Disney sketches.",
      "• Walk down Rue des Marchands, the cobblestone lane Belle walks through singing <i>'Little town, it's a quiet village...'</i>.",
      "• Tour Collégiale Saint-Martin de Colmar with its green and yellow glazed Alsatian roof tiles.",
      "• Photograph Fontaine Schwendi at Place de l'Ancienne Douane (Koïfhus square) — the exact stone fountain Belle sits on while reading her sheep/book story.",
      "• Sample local Munster cheeses, kougelhopf, and warm baguettes inside the 1865 Marché Couvert (<i>'There goes the baker with his tray, like always'</i>).",
      "• Stroll along Quai de la Poissonnerie, the pastel half-timbered fisherman's row reflecting in the water.",
      "• Explore La Petite Venise where the Lauch River branches beneath flower-lined timber footbridges.",
      "• Return via TER train to Strasbourg and B&B Hotel Kehl base.",
      "• Festive Christmas Eve dinner and prep backpacks for early 03:00 AM checkout and dawn coach into the Swiss Alps."
    ],
    "stayTitle": "B&B Hotel Kehl (Night 2 of 2)",
    "stayDesc": "15 Allensteiner Str., Kehl (Base for Alsace · Night 2 of 2)",
    "transitInfo": "🚆 SNCF TER Fluo Train (€16.00 Return) + 🚋 Tram Line D",
    "keyTip": "Colmar old town is compact and 100% walkable from Colmar station (10 min stroll). All Beauty & the Beast fairytale spots are free to visit.",
    "costs": {
      "sightseeing": "All Beauty & the Beast sites, markets & old town: Free ($0 AUD)",
      "transit": "€16.00 (SNCF TER Return)",
      "stay": "€75.00 / night (Night 2 of 2)",
      "totalHighlight": "Free Sightseeing ($0 AUD)"
    }
  },
  {
    "day": "Day 11",
    "date": "25 Dec 2026 (Fri)",
    "city": "Strasbourg ➔ Lauterbrunnen",
    "country": "Switzerland",
    "badgeClass": "badge-ch",
    "cardHighlight": "highlight-ch",
    "title": "Christmas Dawn Coach to Swiss Alps & Frozen Staubbach Falls",
    "locations": [
      {
        "name": "B&B Hotel Kehl"
      },
      {
        "name": "FlixBus Route N846 (Strasbourg ➔ Lucerne)"
      },
      {
        "name": "Zentralbahn Brünig Pass Train (Lucerne ➔ Lauterbrunnen)",
        "badge": "🎬 CLOY: Panoramic Alpine Railway",
        "badgeClass": "badge-cloy"
      },
      {
        "name": "Valley Hostel (Fuhren 423, Lauterbrunnen)"
      },
      {
        "name": "Staubbach Falls",
        "badge": "🎬 CLOY: Signature Swiss Valley Backdrop",
        "badgeClass": "badge-cloy"
      },
      {
        "name": "Lauterbrunnen Valley Trail"
      }
    ],
    "activities": [
      "• Check out of B&B Hotel Kehl at 03:00 AM and take Uber transfer across the Rhine to Strasbourg Central Bus Station (Place de l'Étoile).",
      "• Board FlixBus Route N846 (Booking Ref: 339 152 8020 · Seats 11C & 11D) departing at 04:05 AM sharp.",
      "• Cross the Swiss border and arrive at Lucerne (Inseliquai) at 07:10 AM.",
      "• Walk 2 min to Lucerne rail station and board the 07:55 AM Zentralbahn Luzern-Interlaken Express climbing over snow-covered Brünig Pass.",
      "• Transfer at Interlaken Ost to the yellow/blue BOB mountain train climbing into the Lauterbrunnen valley, arriving at 11:15 AM.",
      "• Walk 5 min along the village street to Valley Hostel (Fuhren 423) for check-in and gear unpack (Conf: 5275.904.352 · Night 1 of 4).",
      "• Walk along the valley floor to the base of Staubbach Falls to witness the 297 m waterfall plunging vertically from limestone cliffs, featured in <i>Crash Landing on You</i>.",
      "• Enjoy a peaceful Christmas evening stroll along frosted chalet paths and cook holiday dinner in Valley Hostel's communal kitchen."
    ],
    "stayTitle": "Valley Hostel, Lauterbrunnen (Confirmed: 5275.904.352)",
    "stayDesc": "Fuhren 423, 3822 Lauterbrunnen, Switzerland (Free Communal Kitchen · Views of Staubbach Falls) · Night 1 of 4",
    "transitInfo": "🚌 FlixBus N846 (04:05–07:10 · AUD $76.96 Paid) + 🚆 Zentralbahn (Brünig Pass) + 🚆 BOB Train",
    "keyTip": "Sit on the right side of Zentralbahn for postcard views of Lake Sarnen, Lake Lungern, and frozen alpine peaks.",
    "costs": {
      "sightseeing": "Staubbach Falls & valley walking: Free ($0 AUD)",
      "transit": "AUD $76.96 (FlixBus Paid) + CHF 28.00 (Zentralbahn/BOB)",
      "stay": "CHF 48.00 – CHF 55.00 / night (Night 1 of 4)",
      "totalHighlight": "Free Sightseeing ($0 AUD)"
    }
  },
  {
    "day": "Day 12",
    "date": "26 Dec 2026 (Sat)",
    "city": "Grindelwald & Kleine Scheidegg",
    "country": "Switzerland",
    "badgeClass": "badge-ch",
    "cardHighlight": "highlight-ch",
    "title": "Eiger Express, Jungfraujoch & CLOY Paraglider Mountain Pass",
    "locations": [
      {
        "name": "Grindelwald Terminal",
        "badge": "🎬 CLOY: Jungfrau Gateway Terminal",
        "badgeClass": "badge-cloy"
      },
      {
        "name": "Eiger Express Gondola",
        "badge": "🎬 CLOY: 3S Alpine Gondola under Eiger",
        "badgeClass": "badge-cloy"
      },
      {
        "name": "Jungfraujoch ('Top of Europe')",
        "badge": "🎬 CLOY: High Alpine Glacial Station",
        "badgeClass": "badge-cloy"
      },
      {
        "name": "Kleine Scheidegg",
        "badge": "🎬 CLOY: Where Ri & Se-ri Watched Paragliders!",
        "badgeClass": "badge-cloy"
      },
      {
        "name": "Wengen",
        "badge": "🎬 CLOY: Car-Free Chalet Village",
        "badgeClass": "badge-cloy"
      },
      {
        "name": "Valley Hostel"
      }
    ],
    "activities": [
      "• Board BOB mountain rail from Lauterbrunnen to Grindelwald Terminal (08:30 AM).",
      "• Board the 3S Eiger Express tricable gondola soaring directly beneath the sheer 1,800 m Eiger North Face to Eigergletscher.",
      "• Ride the cogwheel train through the Eiger rock tunnel to Jungfraujoch ('Top of Europe', 3,454 m).",
      "• Explore the Ice Palace tunnels, Sphinx observation terrace, and the vast Aletsch Glacier.",
      "• Descend via cogwheel rail to Kleine Scheidegg (2,061 m) — the exact mountain pass railway junction where Captain Ri Jeong-hyeok and Yoon Se-ri first watched paragliders together in Switzerland in <i>Crash Landing on You</i>.",
      "• Board the Wengernalpbahn cogwheel train down to car-free Wengen.",
      "• Walk the panoramic Wengen village path overlooking the Lauterbrunnen valley trough.",
      "• Cogwheel train descent back to Valley Hostel in Lauterbrunnen for hot chocolate and alpine relaxation."
    ],
    "stayTitle": "Valley Hostel, Lauterbrunnen (Night 2 of 4)",
    "stayDesc": "Fuhren 423, Lauterbrunnen (Near station)",
    "transitInfo": "🚆 Wengernalpbahn / BOB Train + 🚠 Eiger Express Gondola + 🚂 Jungfrau Cogwheel Rail",
    "keyTip": "Check mountain webcams at station before heading up. First Cliff Walk walkway is free and included with mountain transport.",
    "costs": {
      "sightseeing": "Kleine Scheidegg & Wengen: Free pass area",
      "transit": "Jungfraujoch Round-Trip: CHF 95.00 – CHF 190.00 (Pass dependent)",
      "stay": "CHF 48.00 – CHF 55.00 / night (Night 2 of 4)",
      "totalHighlight": "Mountain Excursion Day"
    }
  },
  {
    "day": "Day 13",
    "date": "27 Dec 2026 (Sun)",
    "city": "Lake Brienz, Iseltwald & Sigriswil",
    "country": "Switzerland",
    "badgeClass": "badge-ch",
    "cardHighlight": "highlight-ch",
    "title": "CLOY Piano Pier at Iseltwald & Sigriswil Suspension Bridge",
    "locations": [
      {
        "name": "Interlaken Ost",
        "badge": "🎬 CLOY: Central Swiss Transport Hub",
        "badgeClass": "badge-cloy"
      },
      {
        "name": "Lake Brienz (Brienzersee)",
        "badge": "🎬 CLOY: Turquoise Glacial Lake",
        "badgeClass": "badge-cloy"
      },
      {
        "name": "Pier Crash Landing on You (Iseltwald)",
        "badge": "🎬 CLOY: THE Iconic Piano Pier on the Lake!",
        "badgeClass": "badge-cloy"
      },
      {
        "name": "Interlaken Promenade",
        "badge": "🎬 CLOY: Höheweg Facing Jungfrau",
        "badgeClass": "badge-cloy"
      },
      {
        "name": "Lake Thun (Thunersee)",
        "badge": "🎬 CLOY: Opening Montage Deep Blue Lake",
        "badgeClass": "badge-cloy"
      },
      {
        "name": "Panorama bridge Sigriswil",
        "badge": "🎬 CLOY: Bridge Where Ri Saves Se-ri's Life!",
        "badgeClass": "badge-cloy"
      }
    ],
    "activities": [
      "• Catch morning train from Lauterbrunnen to Interlaken Ost (08:30 AM).",
      "• Board PostBus 103 along the turquoise shoreline of Lake Brienz to Iseltwald.",
      "• Visit the world-famous wooden jetty at Strandhotel Iseltwald — the exact piano pier where Captain Ri Jeong-hyeok plays the piano song for his brother while Yoon Se-ri listens from the boat in <i>Crash Landing on You</i> (5 CHF turnstile token).",
      "• Return to Interlaken and stroll along the Höheweg promenade facing the snow-capped Jungfrau summit.",
      "• Travel along the deep blue shores of Lake Thun towards Sigriswil.",
      "• Walk across Panorama Bridge Sigriswil — the 340-meter-long suspension bridge hanging 182 meters above Gummischlucht gorge where Ri Jeong-hyeok asks Se-ri to take his photo with Seo Dan, saving her life!",
      "• Savor traditional Swiss cheese fondue in Interlaken before returning to Valley Hostel."
    ],
    "stayTitle": "Valley Hostel, Lauterbrunnen (Night 3 of 4)",
    "stayDesc": "Fuhren 423, Lauterbrunnen",
    "transitInfo": "🚆 BOB Train + 🚌 PostBus 103 (Lake Brienz) + 🚌 Bus to Sigriswil",
    "keyTip": "Carry a 5 CHF coin or contactless card for the Iseltwald pier turnstile gate.",
    "costs": {
      "sightseeing": "Iseltwald CLOY Pier: CHF 5.00 · Sigriswil Bridge: CHF 8.00",
      "transit": "CHF 11.80 (Local trains & PostBus)",
      "stay": "CHF 48.00 – CHF 55.00 / night (Night 3 of 4)",
      "totalHighlight": "Paid Sightseeing: ~A$23 AUD (13 CHF)"
    }
  },
  {
    "day": "Day 14",
    "date": "28 Dec 2026 (Mon)",
    "city": "Mürren & Schilthorn",
    "country": "Switzerland",
    "badgeClass": "badge-ch",
    "cardHighlight": "highlight-ch",
    "title": "Mürren Alpine Cliff Village & 2,970m Schilthorn Summit",
    "locations": [
      {
        "name": "Grütschalp",
        "badge": "🎬 CLOY: Mountain Valley Cableway",
        "badgeClass": "badge-cloy"
      },
      {
        "name": "Mürren",
        "badge": "🎬 CLOY: Pristine Snowy Mountain Village",
        "badgeClass": "badge-cloy"
      },
      {
        "name": "Schilthorn (Piz Gloria)",
        "badge": "🎬 James Bond 007 Site & CLOY Skyline",
        "badgeClass": "badge-cloy"
      },
      {
        "name": "Mürren & Gimmelwald Trail"
      },
      {
        "name": "Valley Hostel"
      }
    ],
    "activities": [
      "• Board Lauterbrunnen aerial cable car climbing steeply up the valley rock wall to Grütschalp transfer station (08:45 AM).",
      "• Switch to mountain railway to car-free cliffside village of Mürren (1,638 m).",
      "• Stroll through pristine snowy village lanes directly facing the Eiger, Mönch, and Jungfrau peaks.",
      "• Board Schilthornbahn cable car via Birg (experience the glass-floored Thrill Walk) to Schilthorn summit (Piz Gloria, 2,970 m).",
      "• Explore the 360° revolving panoramic restaurant, Spy World exhibition, and James Bond 007 skyline featured in <i>On Her Majesty's Secret Service</i>.",
      "• Descend through quiet alpine hamlets of Mürren and Gimmelwald down to Stechelberg on the valley floor.",
      "• Return to Valley Hostel in Lauterbrunnen.",
      "• Pack luggage and consolidate mobile rail tickets for tomorrow's cross-border transfer into France."
    ],
    "stayTitle": "Valley Hostel, Lauterbrunnen (Night 4 of 4)",
    "stayDesc": "Fuhren 423, Lauterbrunnen (Final night in Swiss Alps)",
    "transitInfo": "🚠 Grütschalp Cable Car + 🚂 BLM Mountain Rail + 🚠 Schilthorn Aerial Cableway",
    "keyTip": "Schilthorn ticket is heavily discounted with Swiss Half Fare Card. Check summit weather forecast before boarding.",
    "costs": {
      "sightseeing": "Mürren & Gimmelwald: Free · Schilthorn Cableway: CHF 42.80 (with Half Fare)",
      "transit": "CHF 8.40 (Local cable car)",
      "stay": "CHF 48.00 – CHF 55.00 / night (Night 4 of 4)",
      "totalHighlight": "Alpine Summit Day"
    }
  },
  {
    "day": "Day 15",
    "date": "29 Dec 2026 (Tue)",
    "city": "Lauterbrunnen ➔ Bern ➔ Paris",
    "country": "France",
    "badgeClass": "badge-fr",
    "cardHighlight": "highlight-fr",
    "title": "Bern Temple Endowment Session, UNESCO Old Town & TGV to Paris",
    "locations": [
      {
        "name": "Valley Hostel (Lauterbrunnen)"
      },
      {
        "name": "Train to Bern Hauptbahnhof"
      },
      {
        "name": "Bern Hbf Electronic Lockers"
      },
      {
        "name": "Bern Switzerland Temple (Zollikofen)",
        "badge": "✨ Sacred LDS Temple Appointment",
        "badgeClass": "badge-temple"
      },
      {
        "name": "Altstadt Bern UNESCO-Weltkulturerbe"
      },
      {
        "name": "Bern Old Town Viewpoint (Rosengarten)"
      },
      {
        "name": "TGV Lyria High-Speed Train (Bern ➔ Paris)"
      },
      {
        "name": "Break & Home Paris Italie"
      }
    ],
    "activities": [
      "• Check out of Valley Hostel by 07:15 AM.",
      "• Board 07:32 AM BOB train from Lauterbrunnen to Interlaken Ost, connecting to Bern Hbf (arriving at 08:52 AM).",
      "• Deposit heavy 20kg hold bags inside Bern Hbf electronic lockers.",
      "• Take RBS S-Bahn Line S8 to Zollikofen (8 min ride).",
      "• Arrive at Bern Switzerland Temple by 09:15 AM.",
      "• Attend confirmed Sacred Endowment Session from 09:30 AM – 11:30 AM.",
      "• Stroll the tranquil temple grounds and gardens until 12:00 PM.",
      "• Return via S-Bahn S8 to Bern historic UNESCO center.",
      "• Walk 6 km of medieval covered sandstone arcades, view the Zytglogge astronomical clock tower, and stroll down Kramgasse.",
      "• Cross Nydeggbrücke up to the Rosengarten park terrace for an elevated panorama over the emerald Aare river loop and Bern city skyline.",
      "• Retrieve luggage from Bern Hbf electronic lockers and pick up dinner.",
      "• Board TGV Lyria high-speed train (Departs 18:04 PM sharp) racing at 320 km/h across the French border into Paris Gare de Lyon (Arriving 22:44 PM).",
      "• Take Metro Line 14 direct from Gare de Lyon to Maison Blanche / Porte d'Italie.",
      "• Check-in at Break & Home Paris Italie at 23:00 PM (Conf: 5135.300.413 · Night 1 of 5)."
    ],
    "stayTitle": "Break & Home Paris Italie (Confirmed: 5135.300.413)",
    "stayDesc": "Porte d'Italie, Paris (Metro Line 14 direct from Gare de Lyon) · Check-in 23:00 PM · Night 1 of 5",
    "transitInfo": "🚆 SBB Rail + 🚄 TGV Lyria High-Speed Train (18:04–22:44) + 🚇 Paris Metro Line 14",
    "keyTip": "Bern station lockers take contactless cards (CHF 7–9). TGV Lyria has luggage racks at end of each car.",
    "costs": {
      "sightseeing": "Temple, Bern Old Town, Rosengarten: Free ($0 AUD)",
      "transit": "CHF 19.80 (SBB) + €29.00 – €49.00 (TGV Lyria) + CHF 8.00 (Locker)",
      "stay": "€83.06 / night (€415.30 total 5N)",
      "totalHighlight": "Free Sightseeing ($0 AUD)"
    }
  },
  {
    "day": "Day 16",
    "date": "30 Dec 2026 (Wed)",
    "city": "Paris",
    "country": "France",
    "badgeClass": "badge-fr",
    "cardHighlight": "highlight-fr",
    "title": "Musée du Louvre, Historic Axis & Arc de Triomphe Sunset",
    "locations": [
      {
        "name": "Louvre Museum (Musée du Louvre)"
      },
      {
        "name": "Tuileries Garden",
        "badge": "🎶 Taylor Swift: 'Begin Again' Site",
        "badgeClass": "badge-swift"
      },
      {
        "name": "Place de la Concorde",
        "badge": "🎶 Taylor Swift: 'Begin Again' Site",
        "badgeClass": "badge-swift"
      },
      {
        "name": "Grand Palais & Pont Alexandre III",
        "badge": "🎶 Taylor Swift: 'Begin Again' Site",
        "badgeClass": "badge-swift"
      },
      {
        "name": "Av. des Champs-Élysées & 100 Av. des Champs-Élysées"
      },
      {
        "name": "Arc de Triomphe"
      },
      {
        "name": "Galeries Lafayette Haussmann",
        "badge": "🎶 Taylor Swift: 'Begin Again' Rooftop Scene!",
        "badgeClass": "badge-swift"
      }
    ],
    "activities": [
      "• Enter Musée du Louvre via the Cour Napoléon glass pyramid (09:00 AM timed entry).",
      "• Tour masterpieces including the <i>Mona Lisa</i>, <i>Winged Victory of Samothrace</i>, <i>Venus de Milo</i>, and French royal state apartments.",
      "• Stroll through formal Tuileries Gardens connecting the Louvre to Concorde (where Taylor Swift strolls and writes in her journal in <i>Begin Again</i>).",
      "• Explore Place de la Concorde, the 3,300-year-old Luxor Obelisk, and monumental fountains.",
      "• Photograph the Beaux-Arts glass-vaulted Grand Palais.",
      "• Walk across Paris's most ornate bridge, Pont Alexandre III, with golden winged pegasus sculptures.",
      "• Stroll down Av. des Champs-Élysées and 100 Av. des Champs-Élysées illuminated in festive holiday canopy lights.",
      "• Climb 284 steps to the open-air rooftop terrace of the Arc de Triomphe for the 12-avenue starburst panorama of Paris.",
      "• Visit Galeries Lafayette Haussmann to admire the giant Christmas tree beneath the Art Nouveau glass dome.",
      "• Step onto the free rooftop terrace of Galeries Lafayette facing Opéra Garnier — the exact rooftop scene where Taylor Swift wears the lilac Elie Saab gown in the <i>Begin Again</i> music video!"
    ],
    "stayTitle": "Break & Home Paris Italie (Night 2 of 5)",
    "stayDesc": "Porte d'Italie, Paris",
    "transitInfo": "🚇 Paris Metro Line 7 + Metro Line 1 (€2.15 / ride)",
    "keyTip": "Book Louvre and Arc de Triomphe tickets online in advance. Galeries Lafayette rooftop access is completely free.",
    "costs": {
      "sightseeing": "Musée du Louvre: €22.00 · Arc de Triomphe: €16.00 · Tuileries & Galeries Lafayette: Free",
      "transit": "€4.30 (Metro tickets)",
      "stay": "€83.06 / night (Night 2 of 5)",
      "totalHighlight": "Paid Sightseeing: ~A$64 AUD (€38)"
    }
  },
  {
    "day": "Day 17",
    "date": "31 Dec 2026 (Thu)",
    "city": "Paris (New Year's Eve)",
    "country": "France",
    "badgeClass": "badge-fr",
    "cardHighlight": "highlight-fr",
    "title": "Île de la Cité, Latin Quarter Panthéon & Champs-Élysées NYE",
    "locations": [
      {
        "name": "Île de la Cité & Square du Vert-Galant",
        "badge": "🎶 Taylor Swift: 'Begin Again' Island Tip",
        "badgeClass": "badge-swift"
      },
      {
        "name": "Notre-Dame Cathedral of Paris"
      },
      {
        "name": "Panthéon"
      },
      {
        "name": "Jardin du Luxembourg & Luxembourg Palace"
      },
      {
        "name": "Rest & Dinner Prep"
      },
      {
        "name": "Espl. du Trocadéro"
      },
      {
        "name": "Champs-Élysées NYE Countdown"
      }
    ],
    "activities": [
      "• Walk the historic cradle of Paris on Île de la Cité and Square du Vert-Galant (where Taylor Swift walks the cobblestone tip of the island along the Seine in <i>Begin Again</i>).",
      "• View the newly restored twin Gothic towers, carved portals, and parvis of Notre-Dame Cathedral.",
      "• Explore the historic Latin Quarter and enter the Neoclassical dome of the Panthéon to view Foucault's pendulum and crypt tombs of Voltaire, Rousseau, Victor Hugo, and Marie Curie.",
      "• Walk through the gravel allées of Jardin du Luxembourg, the 1630 Medici Fountain, and French Senate Luxembourg Palace facade.",
      "• Return to hotel (16:30 – 18:30) to rest and recharge before evening festivities.",
      "• Gather at Esplanade du Trocadéro across the Seine for panoramic evening views of the sparkling Eiffel Tower.",
      "• Head to the Champs-Élysées (Sweet Spot No. 100–110) for the official New Year's Eve countdown, 3D laser mapping projection on the Arc de Triomphe, and public celebration.",
      "• Take advantage of 100% free all-night Metro transit across Paris to return safely to hotel."
    ],
    "stayTitle": "Break & Home Paris Italie (Night 3 of 5)",
    "stayDesc": "Porte d'Italie, Paris (Free all-night Metro on NYE)",
    "transitInfo": "🚇 Paris Metro (100% FREE All-Night Transit for New Year's Eve)",
    "keyTip": "Arrive at Champs-Élysées by 22:30. Metro Line 1, 4, 14 run 24 hours free of charge on NYE night.",
    "costs": {
      "sightseeing": "Panthéon: €13.00 · Notre-Dame, Trocadéro, NYE Countdown: Free",
      "transit": "Free ($0 AUD · All-Night NYE Metro)",
      "stay": "€83.06 / night (Night 3 of 5)",
      "totalHighlight": "Paid Sightseeing: ~A$22 AUD (€13)"
    }
  },
  {
    "day": "Day 18",
    "date": "01 Jan 2027 (Fri)",
    "city": "Paris (New Year's Day)",
    "country": "France",
    "badgeClass": "badge-fr",
    "cardHighlight": "highlight-fr",
    "title": "Le Marais Historic Mansions, Place des Vosges & Saint-Germain",
    "locations": [
      {
        "name": "Le Marais",
        "badge": "🎶 Taylor Swift: 'Begin Again' Cobblestone Lanes",
        "badgeClass": "badge-swift"
      },
      {
        "name": "Place des Vosges",
        "badge": "🎶 Taylor Swift: 'Begin Again' Arcaded Square",
        "badgeClass": "badge-swift"
      },
      {
        "name": "Musée d'Orsay / Left Bank Quays (Quai de Conti)",
        "badge": "🎶 Taylor Swift: 'Begin Again' Seine Quays",
        "badgeClass": "badge-swift"
      },
      {
        "name": "Saint-Germain-des-Prés (Place de Furstemberg & Café La Palette)",
        "badge": "🎶 Taylor Swift: 'Begin Again' Bike & Café Scene!",
        "badgeClass": "badge-swift"
      }
    ],
    "activities": [
      "• Enjoy a relaxed New Year's Day morning walk through the cobblestone streets of Le Marais: historic aristocratic mansions, independent art galleries, and artisan bakeries (where Taylor Swift wanders in <i>Begin Again</i>).",
      "• Stroll around Place des Vosges, Paris's oldest planned residential square with 36 symmetrical red-brick arcaded pavilions.",
      "• Walk along the Seine riverbank quays (Quai Voltaire & Quai de Conti) past vintage green bookseller boxes (<i>bouquinistes</i>).",
      "• Explore Saint-Germain-des-Prés and visit intimate Place de Furstemberg.",
      "• Sit at a sidewalk café terrace at Café La Palette on Rue de Seine — the exact café where Taylor Swift sits in <i>Begin Again</i> after riding her vintage bicycle with a fresh baguette in the basket!"
    ],
    "stayTitle": "Break & Home Paris Italie (Night 4 of 5)",
    "stayDesc": "Porte d'Italie, Paris",
    "transitInfo": "🚇 Paris Metro Line 4 / 10 (€2.15 / ride)",
    "keyTip": "Most shops are closed on New Year's Day, but Le Marais and Saint-Germain bakeries and cafes remain open and lively.",
    "costs": {
      "sightseeing": "Marais, Place des Vosges, Saint-Germain: Free ($0 AUD)",
      "transit": "€4.30 (Metro tickets)",
      "stay": "€83.06 / night (Night 4 of 5)",
      "totalHighlight": "Free Sightseeing ($0 AUD)"
    }
  },
  {
    "day": "Day 19",
    "date": "02 Jan 2027 (Sat)",
    "city": "Versailles & Paris",
    "country": "France",
    "badgeClass": "badge-fr",
    "cardHighlight": "highlight-fr",
    "title": "Palace of Versailles Hall of Mirrors & Sacred Paris France Temple",
    "locations": [
      {
        "name": "RER C Train (Paris ➔ Versailles)"
      },
      {
        "name": "Palace of Versailles (Château de Versailles)"
      },
      {
        "name": "Phébus Bus 2 (Versailles ➔ Le Chesnay)"
      },
      {
        "name": "Paris France Temple (46 Bd Saint-Antoine, Le Chesnay)",
        "badge": "✨ Sacred LDS Temple Appointment",
        "badgeClass": "badge-temple"
      },
      {
        "name": "Return RER C to Paris"
      },
      {
        "name": "Parisian Farewell Dinner"
      }
    ],
    "activities": [
      "• Board 08:30 AM RER Line C suburban rail to Versailles Château Rive Gauche (40 min, €4.15).",
      "• Enter the monumental Palace of Versailles (09:30 AM timed entry).",
      "• Tour the King's Grand Apartments, the magnificent Hall of Mirrors (<i>Galerie des Glaces</i>), the Royal Chapel, and the formal palace gardens.",
      "• Take Phébus Bus 2 or walk 20 min north from Versailles to Le Chesnay.",
      "• Arrive at Paris France Temple by 14:30 PM.",
      "• Sacred afternoon temple worship, reflection, and peaceful stroll through the manicured temple grounds beside Versailles.",
      "• Board return RER Line C rail transit back into central Paris.",
      "• Enjoy final celebration dinner marking the completion of the continental European loop."
    ],
    "stayTitle": "Break & Home Paris Italie (Night 5 of 5)",
    "stayDesc": "Porte d'Italie, Paris (Final night in France)",
    "transitInfo": "🚆 RER Line C direct (€4.15 flat single fare) + Phébus Bus 2 (€2.00)",
    "keyTip": "Passport Ticket covers Palace, Hall of Mirrors, and Gardens. RER C trains run every 15 minutes.",
    "costs": {
      "sightseeing": "Palace of Versailles: €21.00 – €24.00 · Paris Temple: Free",
      "transit": "€8.30 (RER C Return) + €2.00 (Bus)",
      "stay": "€83.06 / night (Night 5 of 5)",
      "totalHighlight": "Paid Sightseeing: ~A$40 AUD (€24)"
    }
  },
  {
    "day": "Day 20",
    "date": "03 Jan 2027 (Sun)",
    "city": "Paris ➔ London",
    "country": "Transit",
    "badgeClass": "badge-transit",
    "cardHighlight": "highlight-transit",
    "title": "Final Seine River Promenade & Overnight FlixBus N700 to UK",
    "locations": [
      {
        "name": "Pont Alexandre III & Seine Riverside",
        "badge": "🎶 Taylor Swift: 'Begin Again' Seine Promenade",
        "badgeClass": "badge-swift"
      },
      {
        "name": "Break & Home Paris Italie (Official Check-out)"
      },
      {
        "name": "Latin Quarter & Boulevard Saint-Michel"
      },
      {
        "name": "Paris Bercy Seine Coach Terminal (210 Quai de Bercy)"
      },
      {
        "name": "FlixBus Route N700 (Direct Sleeper)"
      }
    ],
    "activities": [
      "• Final morning daylight photography walk along the Seine, Pont Alexandre III, and Invalides esplanade.",
      "• Return to Break & Home Paris Italie; official check-out by 11:30 AM; leave luggage safely stored with front desk.",
      "• Spend final relaxed afternoon in the Latin Quarter and Boulevard Saint-Michel with souvenir shopping, afternoon crêpes, and bistro dinner.",
      "• Return to Break & Home Paris Italie to retrieve stored bags.",
      "• Take Metro Line 14 direct from Maison Blanche to Bercy station (6 min ride).",
      "• Walk through Parc de Bercy to Paris Bercy Seine Coach Terminal (210 Quai de Bercy) by 20:15 PM.",
      "• Board FlixBus Route N700 departing at 21:00 (9:00 PM) sharp.",
      "• Overnight sleeper coach transit via Eurotunnel back into the United Kingdom."
    ],
    "stayTitle": "Transit: FlixBus Route N700 Sleeper (Confirmed)",
    "stayDesc": "Paris Bercy Seine ➔ London Victoria Coach Station (Departs 21:00 / 9:00 PM · Arrives 05:25 AM)",
    "transitInfo": "🚌 FlixBus N700 (21:00–05:25+1d) · AUD $169.98 Paid",
    "keyTip": "Arrive at Bercy terminal by 20:15 (45 min prior). Have passports ready for French exit control and UK Border Force entry at Calais/Eurotunnel.",
    "costs": {
      "sightseeing": "Free ($0 AUD)",
      "transit": "€2.15 (Metro 14) + AUD $169.98 (FlixBus Paid)",
      "stay": "Included on Sleeper Coach",
      "totalHighlight": "Free Sightseeing ($0 AUD)"
    }
  },
  {
    "day": "Day 21",
    "date": "04 Jan 2027 (Mon)",
    "city": "London ➔ Southampton",
    "country": "United Kingdom",
    "badgeClass": "badge-uk",
    "cardHighlight": "highlight-uk",
    "title": "Arrival at London Victoria & Return to Southampton Residence",
    "locations": [
      {
        "name": "London Victoria Coach Station"
      },
      {
        "name": "London Waterloo Station"
      },
      {
        "name": "South Western Railway Train"
      },
      {
        "name": "Southampton Residence"
      }
    ],
    "activities": [
      "• FlixBus Route N700 arrives at London Victoria Coach Station at 05:25 AM.",
      "• Disembark, collect 20kg hold luggage, and enjoy warm coffee and hearty traditional English breakfast at Victoria.",
      "• Take London Underground across central London to London Waterloo mainline terminal.",
      "• Board South Western Railway mainline train (Departs 10:00 AM, arrives Southampton Central at 11:15 AM · 1h 15m direct).",
      "• Arrive safely at family residence in Southampton; unpack, rest, and celebrate the completed 21-day European winter holiday!"
    ],
    "stayTitle": "UK Family Residence",
    "stayDesc": "Southampton, United Kingdom (Home sweet home!)",
    "transitInfo": "🚆 London Underground + South Western Railway Mainline Rail",
    "keyTip": "Contactless payment accepted on London Underground. South Western Railway off-peak tickets are flexible.",
    "costs": {
      "sightseeing": "Free ($0 AUD)",
      "transit": "£2.80 (Tube) + £16.00 – £22.00 (SWR Train)",
      "stay": "Free (Family Home)",
      "totalHighlight": "Tour Complete!"
    }
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

    // Find matching destination marker (strictly following master itinerary flow)
    let destIndex = -1;
    if (item.day) {
      const dayNum = parseInt(item.day.replace(/\D+/g, ''), 10);
      if (dayNum === 1) destIndex = 0; // London & Southampton
      else if (dayNum >= 2 && dayNum <= 4) destIndex = 1; // Amsterdam & The Hague
      else if (dayNum >= 5 && dayNum <= 6) destIndex = 2; // Cologne & Düsseldorf
      else if (dayNum >= 7 && dayNum <= 8) destIndex = 3; // Frankfurt am Main & Temple
      else if (dayNum >= 9 && dayNum <= 10) destIndex = 4; // Strasbourg & Colmar (Kehl Base)
      else if (dayNum === 11) destIndex = 5; // Bern UNESCO Old Town & Base
      else if (dayNum === 12) destIndex = 6; // Grindelwald & Iseltwald
      else if (dayNum === 13) destIndex = 7; // Lauterbrunnen & Blausee
      else if (dayNum === 14) destIndex = 8; // Spiez & Sigriswil
      else if (dayNum === 15) destIndex = 9; // Bern Temple & TGV to Paris
      else if (dayNum >= 16 && dayNum <= 20) destIndex = 10; // Paris & Versailles
      else if (dayNum === 21) destIndex = 11; // London Return
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

    const pinsHtml = (item.locations || []).map(loc => {
      const badgeHtml = loc.badge ? `<span class="table-pin-culture-badge ${loc.badgeClass || ''}">${loc.badge}</span>` : '';
      return `<li class="table-pin-item"><span class="pin-name-text"><strong>${loc.name}</strong></span>${badgeHtml}</li>`;
    }).join('');

    const activitiesHtml = Array.isArray(item.activities)
      ? `<div class="table-activities-list">
          ${item.activities.map(act => `<div class="table-activity-item">${act}</div>`).join('')}
        </div>`
      : `<p class="table-activity-item">${item.activities}</p>`;

    const subcardHtml = `
      <div class="table-meta-subcard">
        <div class="meta-subcard-item">
          <span class="meta-subcard-icon">🏨</span>
          <div class="meta-subcard-content">
            <strong>${item.stayTitle || ''}</strong>
            <div class="meta-subcard-desc">${item.stayDesc || ''}</div>
          </div>
        </div>
        ${item.transitInfo ? `
        <div class="meta-subcard-item">
          <span class="meta-subcard-icon">🚌</span>
          <div class="meta-subcard-content">
            <em>${item.transitInfo}</em>
          </div>
        </div>` : ''}
      </div>`;

    const tipHtml = item.keyTip ? `<div class="table-day-tip">💡 <strong>Day Tip:</strong> ${item.keyTip}</div>` : '';

    const costs = item.costs || { sightseeing: 'Free', transit: '-', stay: '-' };
    const costBoxHtml = `
      <div class="table-cost-box">
        <div class="cost-line"><span class="cost-lbl">🎟️ Sightseeing:</span> <span class="cost-val">${costs.sightseeing}</span></div>
        <div class="cost-line"><span class="cost-lbl">🚆 Transit:</span> <span class="cost-val">${costs.transit}</span></div>
        <div class="cost-line"><span class="cost-lbl">🏨 Lodging:</span> <span class="cost-val">${costs.stay}</span></div>
        ${costs.totalHighlight ? `<div class="cost-highlight-badge">${costs.totalHighlight}</div>` : ''}
      </div>`;

    tr.innerHTML = `
      <td class="col-table-day">
        <div class="table-day-badge">${item.day}</div>
        <div class="table-date-str">${item.date}</div>
        <span class="badge-country ${item.badgeClass}">${item.country}</span>
      </td>
      <td class="col-table-loc">
        <div class="table-loc-city">📍 ${item.city}</div>
        <ul class="table-pins-list">
          ${pinsHtml}
        </ul>
      </td>
      <td class="col-table-plan">
        <div class="table-plan-title">${item.title}</div>
        ${activitiesHtml}
        ${subcardHtml}
        ${tipHtml}
        ${item.day === 'Day 17' ? `<div style="margin-top: 8px;"><a href="#viewCardsBtn" class="fatigue-alert-link" onclick="document.getElementById('viewCardsBtn').click(); setTimeout(() => { const el = document.querySelector('.nye-fireworks-guide-card'); if (el) el.scrollIntoView({behavior: 'smooth'}); }, 100);">🎆 Arc de Triomphe NYE Fireworks Guide (Sweet Spot No. 100–110 &amp; Free Metro) ➔</a></div>` : ''}
      </td>
      <td class="col-table-cost">
        ${costBoxHtml}
      </td>
    `;

    tbody.appendChild(tr);
  });
}

function getHotelGmapsBtn(item) {
  if (!item.stayTitle || item.stayTitle.includes('FlixBus') || item.stayTitle.includes('Transit') || item.stayTitle.includes('Overnight Sleeper') || item.stayTitle.includes('UK Family Residence')) {
    return '';
  }
  let query;
  if (item.stayTitle.toLowerCase().includes('airbnb') && item.stayDesc) {
    const addr = item.stayDesc.split('·')[0].trim();
    query = encodeURIComponent(addr);
  } else {
    const cleanName = item.stayTitle.replace(/\(.*?\)/g, '').trim();
    query = encodeURIComponent(`${cleanName}, ${item.city}`);
  }
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

function getNyeFireworksGuideHtml() {
  return `
    <div class="nye-fireworks-guide-card">
      <div class="nye-guide-header">
        <div class="nye-guide-title">
          <span style="font-size: 1.4rem;">🎆</span>
          <h4>Arc de Triomphe New Year's Eve Midnight Fireworks Guide</h4>
        </div>
        <span style="background: #eab308; color: #000; font-size: 0.75rem; font-weight: 800; padding: 3px 10px; border-radius: 9999px;">✨ Verified Local Intel</span>
      </div>

      <div class="nye-sweet-spot-box">
        <div class="nye-sweet-spot-title">
          <span>📍</span>
          <span>The "Goldilocks" Sweet Spot: No. 100–110 Avenue des Champs-Élysées</span>
        </div>
        <p style="margin: 0; font-size: 0.84rem; color: #e2e8f0; line-height: 1.5;">
          Position yourself mid-avenue between <b>Avenue George V</b> and <b>Rue Pierre Charron / Rue de Berri</b> (approx. 350 to 450 meters from the monument).
        </p>

        <div class="nye-perks-grid">
          <div class="nye-perk-item">
            <strong>👁️ Perfect Eye-Level Framing:</strong>
            Avoids the painful 75° neck crane of standing right under the 50m Arc. Fits the entire facade and high-altitude fireworks in your photo frame.
          </div>
          <div class="nye-perk-item">
            <strong>🎬 Direct 3D Video Mapping:</strong>
            The official musical projection show (starts 23:40) faces directly down the Champs-Élysées onto this eastern facade.
          </div>
          <div class="nye-perk-item">
            <strong>💨 Fast Midnight Escape Route:</strong>
            When the show finishes, slip immediately down side streets (Rue Pierre Charron) without being trapped in the 500,000-person bottleneck at the roundabout.
          </div>
        </div>
      </div>

      <div class="nye-mistakes-row">
        <div class="nye-mistake-pill">
          <strong>🚫 Avoid Place de l'Étoile Roundabout:</strong> Fenced off by police barricades; heavy crowd crush and blocked visibility of fireworks bursts.
        </div>
        <div class="nye-mistake-pill">
          <strong>🚫 Avoid Rear/Side Avenues (Grande Armée / Kléber):</strong> You will completely miss the famous 3D projection show and countdown.
        </div>
      </div>

      <div class="nye-transit-footer">
        <strong>🚇 Inbound &amp; Return Transit Strategy (100% Free All Night):</strong><br>
        • <b>Inbound (Arrive 21:30–22:15):</b> Take Metro Line 1/9 to <i>Franklin D. Roosevelt</i> or Line 9 to <i>Saint-Philippe-du-Roule</i> (stations near the Arc close early).<br>
        • <b>Outbound (Post-Midnight):</b> Walk east away from the crowd to <i>Franklin D. Roosevelt</i> or walk 15 mins to <i>Madeleine</i> for <b>automated Metro Line 14</b> direct to <i>Porte de Choisy</i> (Break &amp; Home Paris Italie)!
      </div>
    </div>
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

    const pinsHtml = (item.locations || []).map(loc => {
      const badgeHtml = loc.badge ? `<span class="table-pin-culture-badge ${loc.badgeClass || ''}">${loc.badge}</span>` : '';
      return `<li class="card-pin-item"><strong>${loc.name}</strong> ${badgeHtml}</li>`;
    }).join('');

    const activitiesHtml = Array.isArray(item.activities)
      ? `<div class="card-activities-list">
          ${item.activities.map(act => `<div class="card-activity-item">${act}</div>`).join('')}
        </div>`
      : `<p class="card-activity-item">${item.activities}</p>`;

    const costs = item.costs || { sightseeing: 'Free', transit: '-', stay: '-' };

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
          
          <div class="card-stops-section">
            <span class="card-stops-lbl">Stops &amp; Highlights:</span>
            <ul class="card-pins-list">
              ${pinsHtml}
            </ul>
          </div>

          ${activitiesHtml}

          <div class="card-meta-box">
            <div class="card-meta-line">🏨 <strong>${item.stayTitle || ''}</strong> — <span>${item.stayDesc || ''}</span></div>
            ${item.transitInfo ? `<div class="card-meta-line">🚌 <em>${item.transitInfo}</em></div>` : ''}
            ${item.keyTip ? `<div class="card-meta-tip">💡 <strong>Day Tip:</strong> ${item.keyTip}</div>` : ''}
          </div>

          <div class="card-cost-chips">
            <span class="cost-pill">🎟️ ${costs.sightseeing}</span>
            <span class="cost-pill">🚆 ${costs.transit}</span>
            <span class="cost-pill">🏨 ${costs.stay}</span>
            ${costs.totalHighlight ? `<span class="cost-pill highlight">${costs.totalHighlight}</span>` : ''}
          </div>
        </div>
      </div>
    `;

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
    setupPlacePhotoInteractions();
  setupLightboxSwipeListeners(); // Ensure photo interactions active
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
          const photos = sight.photos || [{ url: sight.image, caption: sight.name }];
          return `
            <div class="sight-photo-card" data-global-index="${globalIdx}" id="sight-card-${globalIdx}">
              <div class="sight-img-wrapper" onclick="openDayPhotosModal(${day.dayNum}, ${day.sights.indexOf(sight)}, 0)" title="Click to open 5-photo full-resolution gallery">
                <img src="${photos[0].url}" alt="${sight.name}" loading="lazy" class="card-hero-img">
                <span class="sight-category-tag">${sight.category}</span>
                <span class="card-multi-photo-count-badge">📸 ${photos.length} Photos</span>
                <div class="sight-expand-overlay">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                  <span>View All ${photos.length} Photos</span>
                </div>
              </div>

              <div class="sight-card-body">
                <!-- 5-Photo Interactive Thumbnail Strip -->
                <div class="card-photo-thumbnails-strip" title="Browse all 5 perspectives of ${sight.name}">
                  ${photos.map((p, pIdx) => `
                    <button type="button" class="card-perspective-thumb ${pIdx === 0 ? 'active' : ''}" 
                            data-photo-idx="${pIdx}" 
                            title="${p.caption}"
                            onclick="swapCardActivePhoto(${globalIdx}, ${pIdx})">
                      <img src="${p.url}" alt="${p.caption}">
                      <span class="thumb-step-num">${pIdx + 1}</span>
                    </button>
                  `).join('')}
                </div>
                <div class="card-active-caption-row">
                  <span class="card-caption-icon">🔍</span>
                  <span class="card-active-caption-text" id="card-caption-${globalIdx}">${photos[0].caption}</span>
                </div>

                <div class="sight-time-loc" style="margin-top: 8px;">
                  <span class="sight-time">⏰ ${sight.time}</span>
                  <span>📍 ${sight.location.split(',')[0]}</span>
                </div>
                <h4 class="sight-name" style="font-size: 1.15rem; margin-bottom: 8px;">${sight.name}</h4>
                ${sight.admission ? `<div class="sight-admission-badge ${sight.isPaid ? 'paid' : 'free'}">${sight.isPaid ? '🎟️ Admission: ' : '✨ Entry: '}${sight.admission}</div>` : ''}
                ${sight.hours ? `<div class="sight-hours-badge">🕒 <strong>Hours:</strong> ${sight.hours}</div>` : ''}
                <p class="sight-desc" style="font-size: 0.88rem; line-height: 1.55; margin-bottom: 14px; margin-top: 8px;">${sight.desc}</p>
                
                <div class="sight-actions-row">
                  <button type="button" class="btn-sight-action" onclick="openDayPhotosModal(${day.dayNum}, ${day.sights.indexOf(sight)}, 0)">
                    📸 View ${photos.length} Photos
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

function isTravelOrReflectionText(text) {
  if (!text) return true;
  const t = text.trim();
  const lower = t.toLowerCase();
  if (t.includes("➔") || t.includes("->") || t.includes("→") || t.includes("&rarr;") || t.includes("&#10140;")) return true;
  if (lower.includes("sunday church") || lower.includes("sunday reflection") || lower.includes("church worship") || lower.includes("sacrament meeting") || lower.includes("worship & reflection")) return true;
  if (lower.includes("rer line c return") || lower.includes("return to paris") || lower.includes("celebration dinner")) return true;
  if (lower.includes("eurotunnel") || lower.includes("leshuttle") || lower.includes("flixbus") || lower.includes("terminal")) return true;
  if (lower.includes("café rest") || lower.includes("cafe rest") || lower.includes("warm drinks") || lower.includes("early rest") || lower.includes("rest & recovery") || lower.includes("sleep in real hotel bed") || lower.includes("relaxing evening")) return true;
  if (lower.includes("check-in") || lower.includes("check in") || lower.includes("check-out") || lower.includes("check out") || lower.includes("luggage drop") || lower.includes("leave luggage") || lower.includes("baggage check-in") || lower.includes("pack bags")) return true;
  if (lower.includes("hotel cristall") || lower.includes("amsterdam base") || lower.includes("alpenblick coliving") || lower.includes("valley hostel") || lower.includes("break & home") || lower.includes("premier inn") || lower.includes("cologne base") || lower.includes("hotel innception") || lower.includes("brucknerstraße") || lower.includes("airbnb") || lower.includes("b&b hotel kehl")) return true;
  if (lower.includes("dinner") || lower.includes("fondue dinner") || lower.includes("roesti dinner") || lower.includes("bistro dinner") || lower.includes("swiss dinner") || lower.includes("lunch in old town") || lower.includes("breakfast at victoria")) return true;
  if (lower.includes("return ns train") || lower.includes("ns intercity train back") || lower.includes("scenic train to spiez") || lower.includes("train return to bern")) return true;
  if (lower.includes("sbb train") || lower.includes("sbb intercity") || lower.includes("db ice") || lower.includes("sncf ter") || lower.includes("sncf tgv") || lower.includes("high-speed tgv") || lower.includes("tgv lyria")) return true;
  if ((lower.includes("postbus") && !lower.includes("lake brienz")) || lower.includes("sti bus") || lower.includes("bus 230") || lower.includes("s-bahn") || lower.includes("u-bahn") || lower.includes("rer line") || lower.includes("metro line") || lower.includes("automated metro") || lower.includes("tram line") || lower.includes("phébus bus")) return true;
  if (lower.includes("arrive amsterdam") || lower.includes("arrive paris") || lower.includes("arrive london") || lower.includes("descend to valley") || lower.includes("overnight coach")) return true;
  return false;
}

function findSightForText(dayNum, text) {
  const day = (window.galleryData || []).find(d => d.dayNum === dayNum);
  if (!day || !day.sights || !day.sights.length) return { day: null, sight: null, index: -1 };
  const lower = (text || '').toLowerCase().trim();

  // If text is transit or logistics, strictly return null
  if (isTravelOrReflectionText(lower)) {
    return { day: null, sight: null, index: -1 };
  }

  let bestSight = null;
  let bestScore = 0;
  let bestIndex = -1;

  day.sights.forEach((s, idx) => {
    let score = 0;
    const sNameLower = s.name.toLowerCase();

    if (lower.includes(sNameLower)) {
      score += 100;
    } else if (sNameLower.includes(lower)) {
      score += 80;
    }

    if (s.aliases && Array.isArray(s.aliases)) {
      for (const alias of s.aliases) {
        const aLower = alias.toLowerCase();
        if (lower.includes(aLower)) {
          const aliasScore = 40 + (aLower.length * 5);
          if (aliasScore > score) score = aliasScore;
        }
      }
    }

    const words = sNameLower.split(/[\s,()&-]+/).filter(w => w.length > 3);
    let wordMatches = 0;
    words.forEach(w => {
      if (lower.includes(w)) wordMatches++;
    });
    if (wordMatches > 0) {
      score += wordMatches * 10;
    }

    if (score > bestScore) {
      bestScore = score;
      bestSight = s;
      bestIndex = idx;
    }
  });

  if (bestScore <= 0 || !bestSight) {
    return { day: null, sight: null, index: -1 };
  }

  return { day, sight: bestSight, index: bestIndex };
}

let currentPhotoIndex = 0; // Current photo of the active sight (0 to 4)

function openDayPhotosModal(dayNum, sightIndex = 0, photoIndex = 0) {
  const day = (window.galleryData || []).find(d => d.dayNum === dayNum);
  if (!day || !day.sights || !day.sights.length) return;

  currentPhotoDayNum = dayNum;
  currentPhotoSightIndex = (sightIndex >= 0 && sightIndex < day.sights.length) ? sightIndex : 0;
  currentPhotoIndex = (photoIndex >= 0) ? photoIndex : 0;

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
  const photos = sight.photos && sight.photos.length ? sight.photos : [{ url: sight.image, caption: sight.name }];

  if (currentPhotoIndex < 0 || currentPhotoIndex >= photos.length) {
    currentPhotoIndex = 0;
  }
  const currentPhoto = photos[currentPhotoIndex];

  const modal = document.getElementById('lightboxModal');
  if (!modal) return;

  const imgEl = modal.querySelector('.lightbox-img');
  const dayBadgeEl = modal.querySelector('.lightbox-day-badge');
  const titleEl = modal.querySelector('.lightbox-title');
  const descEl = modal.querySelector('.lightbox-desc');
  const mapsBtnEl = modal.querySelector('.lightbox-maps-btn');
  const counterEl = modal.querySelector('.lightbox-counter');

  if (imgEl) {
    imgEl.src = currentPhoto.url;
    imgEl.alt = currentPhoto.caption;
  }
  if (dayBadgeEl) {
    dayBadgeEl.innerHTML = `<span class="badge-country ${day.badgeClass}">${day.day}</span> <strong>${day.city}</strong> · ${sight.category}${sight.admission ? ` · <span style="font-weight:700; color:${sight.isPaid ? '#ef4444' : '#22c55e'};">${sight.isPaid ? '🎟️ ' : '✨ '}${sight.admission}</span>` : ''}`;
  }
  if (titleEl) {
    titleEl.innerHTML = `${sight.name} <span class="lightbox-perspective-indicator">Perspective ${currentPhotoIndex + 1} of ${photos.length}</span>`;
  }
  if (descEl) {
    descEl.innerHTML = `
      <div class="lightbox-caption-box">
        <span class="caption-tag">📸 Perspective ${currentPhotoIndex + 1} of ${photos.length}:</span>
        <strong class="caption-text">${currentPhoto.caption}</strong>
      </div>
      <p class="sight-main-desc" style="margin-top: 10px; color: #94a3b8; font-size: 0.92rem; line-height: 1.55;">${sight.desc}</p>
    `;
  }
  if (counterEl) {
    counterEl.textContent = `Photo ${currentPhotoIndex + 1} of ${photos.length} · Stop ${currentPhotoSightIndex + 1} of ${day.sights.length} on ${day.day} · 📍 ${sight.location}`;
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

  // Render Day Sights Switcher Bar (if more than 1 sight in the day)
  let placeBar = modal.querySelector('#lightboxPlaceBar');
  if (!placeBar) {
    placeBar = document.createElement('div');
    placeBar.id = 'lightboxPlaceBar';
    placeBar.className = 'lightbox-place-bar';
    const mediaContainer = modal.querySelector('.lightbox-media-container');
    if (mediaContainer && mediaContainer.parentNode) {
      mediaContainer.parentNode.insertBefore(placeBar, mediaContainer);
    }
  }

  if (day.sights.length > 1) {
    placeBar.style.display = 'flex';
    placeBar.innerHTML = day.sights.map((s, idx) => `
      <button type="button" class="lightbox-place-chip ${idx === currentPhotoSightIndex ? 'active' : ''}" data-sight-idx="${idx}" title="${s.name}">
        <span class="place-chip-flag">${s.location ? '📍' : '⭐'}</span>
        <span class="place-chip-name">${s.name}</span>
        <span class="place-chip-count">(${(s.photos ? s.photos.length : 1)})</span>
      </button>
    `).join('');

    placeBar.querySelectorAll('.lightbox-place-chip').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const idx = parseInt(btn.getAttribute('data-sight-idx'), 10);
        currentPhotoSightIndex = idx;
        currentPhotoIndex = 0;
        renderDayPhotoInModal();
      });
    });
  } else {
    placeBar.style.display = 'none';
  }

  // Render 5-Photo Perspective Thumbnails Bar for THIS SIGHT
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

  thumbsBar.innerHTML = `
    <div class="thumbs-label-strip">
      <span class="thumbs-label-title">📸 ${sight.name} (${photos.length} Angles &amp; Views):</span>
      <span class="thumbs-label-hint">Tap any thumbnail to view</span>
    </div>
    <div class="thumbs-items-row">
      ${photos.map((p, idx) => `
        <button type="button" class="lightbox-thumb-item ${idx === currentPhotoIndex ? 'active' : ''}" data-idx="${idx}" title="${p.caption}">
          <img src="${p.url}" alt="${p.caption}">
          <span class="thumb-badge-num">${idx + 1}</span>
          <div class="thumb-info">
            <span class="thumb-name">${p.caption}</span>
          </div>
        </button>
      `).join('')}
    </div>
  `;

  thumbsBar.querySelectorAll('.lightbox-thumb-item').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const idx = parseInt(btn.getAttribute('data-idx'), 10);
      currentPhotoIndex = idx;
      renderDayPhotoInModal();
    });
  });
}

function stepDayPhoto(delta) {
  const day = (window.galleryData || []).find(d => d.dayNum === currentPhotoDayNum);
  if (!day || !day.sights || !day.sights.length) return;

  const sight = day.sights[currentPhotoSightIndex] || day.sights[0];
  const photos = sight.photos && sight.photos.length ? sight.photos : [{ url: sight.image, caption: sight.name }];

  currentPhotoIndex += delta;

  // Seamless transition: forward wraps or steps to next sight
  if (currentPhotoIndex >= photos.length) {
    if (day.sights.length > 1) {
      currentPhotoSightIndex = (currentPhotoSightIndex + 1) % day.sights.length;
      currentPhotoIndex = 0;
    } else {
      currentPhotoIndex = 0;
    }
  } else if (currentPhotoIndex < 0) {
    if (day.sights.length > 1) {
      currentPhotoSightIndex = (currentPhotoSightIndex - 1 + day.sights.length) % day.sights.length;
      const prevSight = day.sights[currentPhotoSightIndex];
      currentPhotoIndex = (prevSight.photos && prevSight.photos.length) ? prevSight.photos.length - 1 : 0;
    } else {
      currentPhotoIndex = photos.length - 1;
    }
  }

  renderDayPhotoInModal();
}

// Attach hover popover and click listeners
function setupPlacePhotoInteractions() {
  // Disabled per user request - photo popover and photo modal removed
  return;
}

// Global helper to swap active photo in sight card
function swapCardActivePhoto(globalIdx, photoIdx) {
  const card = document.getElementById(`sight-card-${globalIdx}`);
  if (!card) return;

  const flatSights = window.allSightsFlat || [];
  const sight = flatSights[globalIdx];
  if (!sight || !sight.photos || !sight.photos[photoIdx]) return;

  const photo = sight.photos[photoIdx];

  // Update Hero Image
  const heroImg = card.querySelector('.card-hero-img');
  if (heroImg) {
    heroImg.src = photo.url;
    heroImg.alt = photo.caption;
  }

  // Update Caption
  const capEl = document.getElementById(`card-caption-${globalIdx}`);
  if (capEl) {
    capEl.textContent = photo.caption;
  }

  // Update Active Thumbnail
  card.querySelectorAll('.card-perspective-thumb').forEach(btn => {
    const idx = parseInt(btn.getAttribute('data-photo-idx'), 10);
    if (idx === photoIdx) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}
window.swapCardActivePhoto = swapCardActivePhoto;
window.openDayPhotosModal = openDayPhotosModal;
window.stepDayPhoto = stepDayPhoto;
// Mobile Touch Swipe & Keyboard Arrow navigation for Lightbox
let touchStartX = 0;
let touchEndX = 0;

function setupLightboxSwipeListeners() {
  const modal = document.getElementById('lightboxModal');
  if (!modal || modal.__swipeBound) return;
  modal.__swipeBound = true;

  const media = modal.querySelector('.lightbox-media-container');
  if (media) {
    media.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    media.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });
  }

  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      stepDayPhoto(-1);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      stepDayPhoto(1);
    }
  });
}

function handleSwipe() {
  const diff = touchEndX - touchStartX;
  if (Math.abs(diff) > 45) {
    if (diff < 0) {
      // Swipe left -> Next photo
      stepDayPhoto(1);
    } else {
      // Swipe right -> Prev photo
      stepDayPhoto(-1);
    }
  }
}

// =========================================================================
// AUTO-INITIALIZE: Ensure hover popover + lightbox listeners are always active
// =========================================================================
(function autoInitPhotoInteractions() {
  // Use a short delay to ensure DOM is ready and galleryData is loaded
  setTimeout(function() {
    try {
      setupPlacePhotoInteractions();
      setupLightboxSwipeListeners();
    } catch(e) {
      console.warn('[Photo Interactions] Auto-init error:', e);
    }
  }, 300);
})();

