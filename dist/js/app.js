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
    description: "Our confirmed 2-night Airbnb base at Brucknerstraße 3, Cologne (50931 Lindenthal): marvel at the monumental twin spires of Kölner Dom and the Lindt Chocolate Museum in Cologne, then take a 20-min train to explore Düsseldorf's 7 magical themed Christmas markets.",
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
    description: "Staying at B&B Hotel Kehl across the Rhine as our strategic base to visit Strasbourg ('Capital of Christmas') and fairytale Colmar in France, the real-world inspiration for Disney's Beauty and the Beast and Studio Ghibli's Howl's Moving Castle.",
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
    id: "lauterbrunnen-base",
    name: "Zurich, Lucerne & Lauterbrunnen Base",
    country: "Switzerland",
    dates: "25 Dec 2026 (Day 11 · Valley Hostel Base)",
    coords: [46.5935, 7.9077],
    badgeClass: "badge-ch",
    category: "CLOY Zurich Intro, Medieval Lucerne & Valley of 72 Waterfalls",
    heroImage: "public/images/sights/staubbach-falls-lauterbrunnen.jpg",
    description: "Christmas Day arrival in Switzerland: exploring Zurich's Lindenhof Hill (CLOY opening scene), medieval Lucerne's Chapel Bridge and Lion Monument, and riding the panoramic Luzern-Interlaken Express to our 4-night base at Valley Hostel in Lauterbrunnen.",
    mustVisitSites: [
      {
        name: "Lindenhof Hill & Münsterbrücke (Zurich)",
        type: "CLOY Opening Title Sequence Viewpoint",
        desc: "Elevated historic terrace above the Limmat River overlooking Grossmünster's twin towers and snow-dusted Alps.",
        image: "public/images/sights/lindenhof-hill.jpg",
        coords: [47.3728, 8.5414]
      },
      {
        name: "Chapel Bridge (Kapellbrücke) & Lion Monument",
        type: "Historic Medieval Lucerne",
        desc: "14th-century covered wooden footbridge across the Reuss River and Lucerne's poignant sandstone Lion Monument.",
        image: "public/images/sights/kapellbruecke-lucerne.jpg",
        coords: [47.0516, 8.3075]
      },
      {
        name: "Valley Hostel & Staubbach Falls Viewpoint",
        type: "Confirmed 4-Night Swiss Alpine Base",
        desc: "Cozy alpine base situated right on the Lauterbrunnen valley floor beneath the sheer 297m Staubbach Falls.",
        image: "public/images/sights/staubbach-falls-lauterbrunnen.jpg",
        coords: [46.5935, 7.9077]
      }
    ]
  },
  {
    id: "muerren-schilthorn",
    name: "Lauterbrunnen, Mürren & Schilthorn",
    country: "Switzerland",
    dates: "26 Dec 2026 (Day 12 · 2,970m Summit)",
    coords: [46.5594, 7.8927],
    badgeClass: "badge-ch",
    category: "Car-Free Alpine Terrace & Schilthorn Piz Gloria",
    heroImage: "public/images/sights/muerren-village.jpg",
    description: "Ascending from Lauterbrunnen Valley past the 297m Staubbach Falls to car-free Mürren (1,638m), walking the cliffside Birg Thrill Walk (2,677m), and reaching the 2,970m Schilthorn Piz Gloria 360-degree summit.",
    mustVisitSites: [
      {
        name: "Staubbach Falls & Lauterbrunnen Valley",
        type: "Iconic Glacial Waterfall",
        desc: "Towering 297-meter waterfall cascading down vertical limestone cliffs right behind the traditional Swiss village church.",
        image: "public/images/sights/staubbach-falls-lauterbrunnen.jpg",
        coords: [46.5896, 7.9053]
      },
      {
        name: "Mürren Alpine Village & BLM Mountain Rail",
        type: "Car-Free Alpine Gem (1,638m)",
        desc: "Perched on a high sunny cliff terrace directly facing the majestic trio of the Eiger, Mönch, and Jungfrau peaks.",
        image: "public/images/sights/muerren-village.jpg",
        coords: [46.5594, 7.8927]
      },
      {
        name: "Schilthorn / Piz Gloria (2,970m) & Birg Thrill Walk",
        type: "360-Degree Summit & James Bond 007 Site",
        desc: "High-alpine aerial cableway to Birg's glass-floor cliff walkway and the revolving Piz Gloria panorama terrace.",
        image: "public/images/sights/grindelwald-valley.jpg",
        coords: [46.5575, 7.8353]
      }
    ]
  },
  {
    id: "jungfraujoch-grindelwald",
    name: "Jungfraujoch & Grindelwald First",
    country: "Switzerland",
    dates: "27 Dec 2026 (Day 13 · Top of Europe & CLOY)",
    coords: [46.6242, 8.0414],
    badgeClass: "badge-ch",
    category: "3,454m Glacial Saddle & CLOY Reunion Slopes",
    heroImage: "public/images/destinations/grindelwald.jpg",
    description: "Cogwheel ascent via Wengen and Kleine Scheidegg to Jungfraujoch ('Top of Europe', 3,454m), descending on the Eiger Express 3S gondola to Grindelwald First (2,168m) for the Tissot Cliff Walk and CLOY paragliding reunion slopes.",
    mustVisitSites: [
      {
        name: "Kleine Scheidegg & Jungfraujoch (3,454m)",
        type: "Top of Europe & CLOY Paraglider Pass",
        desc: "Europe's highest railway station with the Sphinx Observatory, Aletsch Glacier panorama, and sculpted Ice Palace.",
        image: "public/images/sights/schreckfeld-kleine-scheidegg.jpg",
        coords: [46.5483, 7.9806]
      },
      {
        name: "Grindelwald First & Cliff Walk by Tissot",
        type: "CLOY Paragliding & Reunion Vista",
        desc: "Gondola ride up to 2,168 meters for the exhilarating metal walkway clinging to the mountain face facing the Eiger North Face.",
        image: "public/images/sights/grindelwald-first-cliff-walk.jpg",
        coords: [46.6608, 8.0536]
      }
    ]
  },
  {
    id: "iseltwald-sigriswil",
    name: "Iseltwald Pier, Sigriswil & Lake Thun",
    country: "Switzerland",
    dates: "28 Dec 2026 (Day 14 · CLOY Lakes Tour)",
    coords: [46.7114, 7.9626],
    badgeClass: "badge-ch",
    category: "Captain Ri's Piano Pier & Sigriswil Suspension Bridge",
    heroImage: "public/images/destinations/iseltwald.jpg",
    description: "Ultimate Crash Landing on You lakes circuit: riding PostBus 103 along turquoise Lake Brienz to Captain Ri's wooden piano jetty at Iseltwald, crossing the 182m-high Panoramabrücke Sigriswil above Lake Thun, and strolling historic Thun Old Town.",
    mustVisitSites: [
      {
        name: "Iseltwald Landing Stage (Captain Ri's Piano)",
        type: "CLOY Signature Scene",
        desc: "The famous wooden dock on Lake Brienz where Captain Ri played his piano song for his brother while Se-ri listened from the ferry.",
        image: "public/images/sights/iseltwald-landing-stage.jpg",
        coords: [46.7114, 7.9626]
      },
      {
        name: "Panoramabrücke Sigriswil (CLOY Bridge Scene)",
        type: "Suspension Bridge Landmark",
        desc: "The 340-meter-long suspension bridge hanging 182 meters over Gummischlucht gorge with panoramic vistas of Lake Thun and Mount Niesen.",
        image: "public/images/sights/panoramabruecke-sigriswil.jpg",
        coords: [46.7180, 7.7079]
      },
      {
        name: "Thun Old Town, Lock Bridges & Lake Thun",
        type: "Medieval Castle & Alpine Lake",
        desc: "Historic covered wooden sluice bridges over the Aare River and hilltop Thun Castle overlooking turquoise Lake Thun.",
        image: "public/images/sights/lake-thun-spiez.jpg",
        coords: [46.7594, 7.6288]
      }
    ]
  },
  {
    id: "bern-temple",
    name: "Bern Temple, Old Town & TGV to Paris",
    country: "Switzerland",
    dates: "29 Dec 2026 (Day 15 · Temple & TGV 9284)",
    coords: [47.0022, 7.4582],
    badgeClass: "badge-ch",
    category: "Sacred Temple Worship, UNESCO Arcades & High-Speed Rail",
    heroImage: "public/images/temples/bern-temple.jpg",
    description: "A sacred 09:00 AM morning endowment session at the historic Bern Switzerland Temple in Zollikofen, unhurried afternoon in Bern's UNESCO medieval arcades and Rosengarten, and direct TGV Lyria 9284 bullet train to Paris Gare de Lyon.",
    mustVisitSites: [
      {
        name: "Bern Switzerland LDS Temple",
        type: "Sacred Temple & Spiritual Sanctuary",
        desc: "The historic first LDS temple in Europe (dedicated in 1955), nestled among tall alpine pine trees in Zollikofen with views of the snow-capped Alps.",
        image: "public/images/temples/bern-temple.jpg",
        coords: [47.0022, 7.4582]
      },
      {
        name: "Bern UNESCO Old Town & Rosengarten Panorama",
        type: "Medieval Sandstone Arcades & Aare River Loop",
        desc: "15th-century covered shopping arcades, Zytglogge astronomical clock tower, and elevated Rose Garden viewpoint over the emerald Aare.",
        image: "public/images/sights/bern-rosengarten.jpg",
        coords: [46.9472, 7.4595]
      },
      {
        name: "High-Speed TGV Lyria 9284 to Paris Gare de Lyon",
        type: "International High-Speed Rail",
        desc: "Smooth evening high-speed rail connection (17:34–22:08) across the Franco-Swiss border directly into central Paris.",
        image: "public/images/sights/tgv-lyria.jpg",
        coords: [46.9490, 7.4395]
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
    itineraryMatch: "Day 16: Confirmed Morning Endowment Session (Wed 30 Dec 2026 @ 9:00 AM, Arrive 8:30 AM)",
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
    itineraryMatch: "Day 15: Confirmed Morning Endowment Session (Tue 29 Dec 2026 @ 9:00 AM, Arrive 8:30 AM)",
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
  { id: "lauterbrunnen-base", flag: "🇨🇭", shortName: "Zurich, Lucerne & Base", shortDates: "25 Dec" },
  { id: "muerren-schilthorn", flag: "🇨🇭", shortName: "Mürren & Schilthorn", shortDates: "26 Dec" },
  { id: "jungfraujoch-grindelwald", flag: "🇨🇭", shortName: "Jungfraujoch & First", shortDates: "27 Dec" },
  { id: "iseltwald-sigriswil", flag: "🇨🇭", shortName: "Iseltwald & Sigriswil", shortDates: "28 Dec" },
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

// Focus the map on a specific destination without opening popout text box
function focusDestination(index, skipCalendarSync = false) {
  const dest = destinationData[index];
  if (!dest || !map) return;

  isProgrammaticZoom = true;
  map.closePopup();
  map.flyTo(dest.coords, DETAIL_ZOOM, {
    duration: 1.0,
    easeLinearity: 0.25
  });

  setTimeout(() => {
    isProgrammaticZoom = false;
  }, 650);

  if (!skipCalendarSync) {
    setActiveItineraryStop(index);
  }
}

// Master Trip Calendar Data (Dec 2026 & Jan 2027)
const tripCalendarData = {
  // Pre-Trip UK
  '2026-12-12': {
    dateKey: '2026-12-12',
    dayNum: 12,
    month: 'dec',
    dayLabel: 'Pre-Trip',
    dayBadge: 'PRE',
    country: 'United Kingdom',
    countryClass: 'country-uk',
    flag: '🇬🇧',
    city: 'London & Southampton',
    title: 'Arrival in UK & Southampton Base',
    summary: 'Touchdown in London, journey to Hampshire seaside & historic Southampton Old Town base.',
    destIndex: 0,
    tableDayId: null
  },
  '2026-12-13': {
    dateKey: '2026-12-13',
    dayNum: 13,
    month: 'dec',
    dayLabel: 'Pre-Trip',
    dayBadge: 'PRE',
    country: 'United Kingdom',
    countryClass: 'country-uk',
    flag: '🇬🇧',
    city: 'Southampton',
    title: 'Southampton Old Town & Waterfront',
    summary: 'Historic medieval town walls, Bargate monument, maritime docks, and restful Sabbath prep.',
    destIndex: 0,
    tableDayId: null
  },
  '2026-12-14': {
    dateKey: '2026-12-14',
    dayNum: 14,
    month: 'dec',
    dayLabel: 'Pre-Trip',
    dayBadge: 'PRE',
    country: 'United Kingdom',
    countryClass: 'country-uk',
    flag: '🇬🇧',
    city: 'London Westminster',
    title: 'London Westminster & Big Ben',
    summary: 'Thames riverside walk, Houses of Parliament, Westminster Abbey, and pre-departure staging.',
    destIndex: 0,
    tableDayId: null
  },

  // Schengen Tour Days (Days 1–21)
  '2026-12-15': {
    dateKey: '2026-12-15',
    dayNum: 15,
    month: 'dec',
    dayLabel: 'Day 1',
    dayBadge: 'D1',
    country: 'Transit',
    countryClass: 'country-transit',
    flag: '🚌',
    city: 'London ➔ Dover',
    title: 'Departure Across English Channel · FlixBus N824',
    summary: 'Board FlixBus Line N824 at London Victoria Coach Station (10:00 PM / 22:00 departure), overnight Channel crossing to Amsterdam Central De Ruijterkade (arr 10:25 AM).',
    destIndex: 0,
    tableDayId: 'Day-1'
  },
  '2026-12-16': {
    dateKey: '2026-12-16',
    dayNum: 16,
    month: 'dec',
    dayLabel: 'Day 2',
    dayBadge: 'D2',
    country: 'Netherlands',
    countryClass: 'country-nl',
    flag: '🇳🇱',
    city: 'Amsterdam',
    title: 'Arrival in Amsterdam & UNESCO Canals',
    summary: 'Morning arrival at Amsterdam Central (De Ruijterkade at 10:25 AM), check into Amsterdam Hostel Leidseplein (Night 1 of 3), Dam Square, and Amsterdam Light Festival.',
    destIndex: 1,
    tableDayId: 'Day-2'
  },
  '2026-12-17': {
    dateKey: '2026-12-17',
    dayNum: 17,
    month: 'dec',
    dayLabel: 'Day 3',
    dayBadge: 'D3',
    country: 'Netherlands',
    countryClass: 'country-nl',
    flag: '🇳🇱',
    city: 'Zaanse Schans & Museumplein',
    title: 'Zaanse Schans Windmills, De Gooyer & Museumplein',
    summary: 'Morning Sprinter to Zaanse Schans windmills, midday stop at De Gooyer Windmill, timed afternoon entries at Rijksmuseum (12:30 PM) & Van Gogh Museum (14:45 PM), Vondelpark & Jordaan canals (Night 2 of 3).',
    destIndex: 1,
    tableDayId: 'Day-3'
  },
  '2026-12-18': {
    dateKey: '2026-12-18',
    dayNum: 18,
    month: 'dec',
    dayLabel: 'Day 4',
    dayBadge: 'D4',
    country: 'Netherlands',
    countryClass: 'country-nl',
    flag: '🇳🇱',
    city: 'The Hague & Temple',
    title: 'The Hague Diplomacy & Netherlands Temple',
    summary: 'Confirmed 9:30 AM session at The Hague Netherlands Temple in Zoetermeer (arrive 9:10 AM), Peace Palace, Albert Cuyp Markt, return to hostel (Night 3 of 3).',
    destIndex: 1,
    tableDayId: 'Day-4'
  },
  '2026-12-19': {
    dateKey: '2026-12-19',
    dayNum: 19,
    month: 'dec',
    dayLabel: 'Day 5',
    dayBadge: 'D5',
    country: 'Germany',
    countryClass: 'country-de',
    flag: '🇩🇪',
    city: 'Cologne (Airbnb Base)',
    title: 'DB ICE Train to Cologne, Kölner Dom & Chocolate Museum',
    summary: 'DB ICE 123 train to Cologne, check into Airbnb (Brucknerstraße 3, 50931 Lindenthal · Night 1 of 2), Kölner Dom, and Chocolate Museum.',
    destIndex: 2,
    tableDayId: 'Day-5'
  },
  '2026-12-20': {
    dateKey: '2026-12-20',
    dayNum: 20,
    month: 'dec',
    dayLabel: 'Day 6',
    dayBadge: 'D6',
    country: 'Germany',
    countryClass: 'country-de',
    flag: '🇩🇪',
    city: 'Cologne & Düsseldorf',
    title: 'Sunday Worship, Flora Glasshouses & Düsseldorf Little Tokyo',
    summary: 'Cologne Sunday worship, free Flora tropical botanical glasshouses, 20-min RE train to Düsseldorf (Classic Remise, Schlosspark Benrath, Rheinuferpromenade Christmas markets & Little Tokyo ramen), return to Cologne Airbnb (Night 2 of 2).',
    destIndex: 2,
    tableDayId: 'Day-6'
  },
  '2026-12-21': {
    dateKey: '2026-12-21',
    dayNum: 21,
    month: 'dec',
    dayLabel: 'Day 7',
    dayBadge: 'D7',
    country: 'Germany',
    countryClass: 'country-de',
    flag: '🇩🇪',
    city: 'Cologne ➔ Frankfurt',
    title: 'ICE Train to Frankfurt Base & Historic Römerberg',
    summary: 'Check out Cologne Airbnb, ICE train to Frankfurt, check into Premier Inn Frankfurt City Centre (Night 1 of 2), Römerberg market, and Main Tower.',
    destIndex: 3,
    tableDayId: 'Day-7'
  },
  '2026-12-22': {
    dateKey: '2026-12-22',
    dayNum: 22,
    month: 'dec',
    dayLabel: 'Day 8',
    dayBadge: 'D8',
    country: 'Germany',
    countryClass: 'country-de',
    flag: '🇩🇪',
    city: 'Frankfurt & Temple',
    title: 'Frankfurt Germany LDS Temple & Museumsufer',
    summary: 'Museumsufer stroll, S-Bahn S5 to Frankfurt Germany Temple in Friedrichsdorf for confirmed 6:00 PM session (arrive 5:15 PM), return Premier Inn (Night 2 of 2).',
    destIndex: 3,
    tableDayId: 'Day-8'
  },
  '2026-12-23': {
    dateKey: '2026-12-23',
    dayNum: 23,
    month: 'dec',
    dayLabel: 'Day 9',
    dayBadge: 'D9',
    country: 'France',
    countryClass: 'country-fr',
    flag: '🇫🇷',
    city: 'Frankfurt ➔ Strasbourg',
    title: 'FlixBus N13 to Alsace & B&B Hotel Kehl Base',
    summary: 'Board FlixBus Line N13 at Frankfurt central station (04:35 AM ➔ 08:35 AM Strasbourg), check in B&B Hotel Kehl base (Night 1 of 2), Place Kléber Great Tree & Petite-France.',
    destIndex: 4,
    tableDayId: 'Day-9'
  },
  '2026-12-24': {
    dateKey: '2026-12-24',
    dayNum: 24,
    month: 'dec',
    dayLabel: 'Day 10',
    dayBadge: 'D10',
    country: 'France',
    countryClass: 'country-fr',
    flag: '🇫🇷',
    city: 'Colmar (Alsace)',
    title: 'Colmar Fairy-Tale Village Christmas Eve',
    summary: '30-min TER train to Colmar, Little Venice canals, Pfister House (Beauty & the Beast inspiration), return B&B Hotel Kehl for Christmas Eve (Night 2 of 2).',
    destIndex: 4,
    tableDayId: 'Day-10'
  },
  '2026-12-25': {
    dateKey: '2026-12-25',
    dayNum: 25,
    month: 'dec',
    dayLabel: 'Day 11',
    dayBadge: 'D11',
    country: 'Switzerland',
    countryClass: 'country-ch',
    flag: '🇨🇭',
    city: 'Zurich & Lucerne ➔ Lauterbrunnen',
    title: 'Zurich Morning & Lucerne Afternoon (Christmas Day)',
    summary: '07:10 AM arrival in Lucerne, SBB lockers & 08:09 AM IR 70 train to Zurich (Lindenhof CLOY, Lake Zurich), afternoon in Lucerne (Chapel Bridge, Lion Monument), scenic Luzern-Interlaken Express via Lake Lungern to Valley Hostel (Night 1 of 4).',
    destIndex: 5,
    tableDayId: 'Day-11'
  },
  '2026-12-26': {
    dateKey: '2026-12-26',
    dayNum: 26,
    month: 'dec',
    dayLabel: 'Day 12',
    dayBadge: 'D12',
    country: 'Switzerland',
    countryClass: 'country-ch',
    flag: '🇨🇭',
    city: 'Lauterbrunnen & Schilthorn Ridge',
    title: 'Staubbach Falls, Mürren & 2,970m Schilthorn',
    summary: 'Staubbach Falls ice cascades, Grütschalp mountain train to Mürren, Birg Thrill Walk, Schilthorn Piz Gloria summit (2,970m, 007 museum), valley return via Stechelberg to Valley Hostel (Night 2 of 4).',
    destIndex: 6,
    tableDayId: 'Day-12'
  },
  '2026-12-27': {
    dateKey: '2026-12-27',
    dayNum: 27,
    month: 'dec',
    dayLabel: 'Day 13',
    dayBadge: 'D13',
    country: 'Switzerland',
    countryClass: 'country-ch',
    flag: '🇨🇭',
    city: 'Jungfraujoch & Grindelwald CLOY Sites',
    title: 'Jungfraujoch Top of Europe & Grindelwald First',
    summary: '07:55 AM cogwheel to Wengen & Kleine Scheidegg (CLOY pass), Jungfraujoch Top of Europe (3,454m) & Ice Palace, 13:30 PM Eiger Express to Grindelwald First & Tissot Cliff Walk (14:15 PM), return Valley Hostel (Night 3 of 4).',
    destIndex: 7,
    tableDayId: 'Day-13'
  },
  '2026-12-28': {
    dateKey: '2026-12-28',
    dayNum: 28,
    month: 'dec',
    dayLabel: 'Day 14',
    dayBadge: 'D14',
    country: 'Switzerland',
    countryClass: 'country-ch',
    flag: '🇨🇭',
    city: 'Iseltwald Pier, Sigriswil & Lake Thun',
    title: 'The Ultimate CLOY & Lakes Exploration',
    summary: 'PostBus 103 to Iseltwald Pier (Captain Ri piano jetty), Höhematte & Victoria-Jungfrau, Panoramabrücke Sigriswil (182m bridge), historic Thun lock bridges & Castle, return Valley Hostel (Night 4 of 4).',
    destIndex: 8,
    tableDayId: 'Day-14'
  },
  '2026-12-29': {
    dateKey: '2026-12-29',
    dayNum: 29,
    month: 'dec',
    dayLabel: 'Day 15',
    dayBadge: 'D15',
    country: 'France',
    countryClass: 'country-fr',
    flag: '🇫🇷',
    city: 'Bern UNESCO Old Town ➔ Paris',
    title: 'Bern Temple Session, UNESCO Old Town & TGV Lyria to Paris',
    summary: '06:20 AM Valley Hostel checkout (06:33 AM train), Bern Hbf lockers, confirmed 09:00 AM Bern Switzerland Temple session (arrive 08:30 AM), UNESCO arcades & Rosengarten, 17:34 TGV Lyria 9284 to Paris Break & Home (Night 1 of 5).',
    destIndex: 9,
    tableDayId: 'Day-15'
  },
  '2026-12-30': {
    dateKey: '2026-12-30',
    dayNum: 30,
    month: 'dec',
    dayLabel: 'Day 16',
    dayBadge: 'D16',
    country: 'France',
    countryClass: 'country-fr',
    flag: '🇫🇷',
    city: 'Le Chesnay & Versailles',
    title: 'Paris France Temple & Palace of Versailles',
    summary: 'Confirmed 09:00 AM Proxy Endowment session at Paris France LDS Temple in Le Chesnay (arrive 08:30 AM), temple reflection gardens, and 13:00 PM Palace of Versailles Hall of Mirrors & Royal Gardens (8-min bus away).',
    destIndex: 10,
    tableDayId: 'Day-16'
  },
  '2026-12-31': {
    dateKey: '2026-12-31',
    dayNum: 31,
    month: 'dec',
    dayLabel: 'Day 17',
    dayBadge: 'D17',
    country: 'France',
    countryClass: 'country-fr',
    flag: '🇫🇷',
    city: 'Paris New Year’s Eve',
    title: 'Île de la Cité, Panthéon & Champs-Élysées NYE Countdown',
    summary: 'Île de la Cité, Notre-Dame Cathedral, Panthéon (closes 17:00 NYE), Jardin du Luxembourg, Trocadéro Eiffel Tower views, and Champs-Élysées / Arc de Triomphe midnight NYE countdown (100% free all-night Metro).',
    destIndex: 10,
    tableDayId: 'Day-17'
  },

  // January 2027
  '2027-01-01': {
    dateKey: '2027-01-01',
    dayNum: 1,
    month: 'jan',
    dayLabel: 'Day 18',
    dayBadge: 'D18',
    country: 'France',
    countryClass: 'country-fr',
    flag: '🇫🇷',
    city: 'Paris New Year’s Day',
    title: 'Le Marais, Place des Vosges & Saint-Germain',
    summary: 'Relaxed New Year\'s Day stroll through Le Marais historic mansions, Place des Vosges, Seine quays, and Saint-Germain-des-Prés (Café La Palette).',
    destIndex: 10,
    tableDayId: 'Day-18'
  },
  '2027-01-02': {
    dateKey: '2027-01-02',
    dayNum: 2,
    month: 'jan',
    dayLabel: 'Day 19',
    dayBadge: 'D19',
    country: 'France',
    countryClass: 'country-fr',
    flag: '🇫🇷',
    city: 'Paris (Louvre & Arc)',
    title: 'Musée du Louvre Masterpieces, Champs-Élysées, Arc de Triomphe Sunset & Farewell Dinner',
    summary: 'Morning timed entry to Musée du Louvre (Cour Napoléon pyramid, Mona Lisa, Samothrace), stroll Tuileries Garden & Place de la Concorde, cross Pont Alexandre III, festive Champs-Élysées, Arc de Triomphe panoramic sunset rooftop (16:15), Galeries Lafayette rooftop, and celebratory farewell dinner.',
    destIndex: 10,
    tableDayId: 'Day-19'
  },
  '2027-01-03': {
    dateKey: '2027-01-03',
    dayNum: 3,
    month: 'jan',
    dayLabel: 'Day 20',
    dayBadge: 'D20',
    country: 'Transit',
    countryClass: 'country-transit',
    flag: '🚌',
    city: 'Paris ➔ London (FlixBus N700)',
    title: 'Final Paris Walk & Overnight FlixBus N700 to UK',
    summary: '09:30 AM checkout & bag storage at Break & Home Paris Italie, Pont Alexandre III Seine walk, Latin Quarter afternoon, board FlixBus Line N700 at Paris Bercy Seine (21:00 departure) to London Victoria (arr 05:25 AM).',
    destIndex: 11,
    tableDayId: 'Day-20'
  },
  '2027-01-04': {
    dateKey: '2027-01-04',
    dayNum: 4,
    month: 'jan',
    dayLabel: 'Day 21',
    dayBadge: 'D21',
    country: 'United Kingdom',
    countryClass: 'country-uk',
    flag: '🇬🇧',
    city: 'London ➔ Southampton',
    title: 'London Victoria Arrival & Return to Southampton',
    summary: 'Arrive London Victoria Coach Station at 05:25 AM on FlixBus N700, English breakfast & Tube to Waterloo, South Western Railway mainline train (10:00 AM) direct to Southampton Central (flights depart LGW on 08 Jan).',
    destIndex: 11,
    tableDayId: 'Day-21'
  }
};

function getCountryBadgeSlug(country) {
  switch (country) {
    case 'Netherlands': return 'nl';
    case 'Germany': return 'de';
    case 'France': return 'fr';
    case 'Switzerland': return 'ch';
    case 'United Kingdom': return 'uk';
    case 'Transit': return 'transit';
    default: return 'route';
  }
}

// Highlight the corresponding calendar cell(s) when destination is focused
function setActiveItineraryStop(index) {
  const matchingDateKeys = Object.keys(tripCalendarData).filter(k => tripCalendarData[k].destIndex === index);
  if (matchingDateKeys.length > 0) {
    document.querySelectorAll('.cal-day-cell').forEach(c => c.classList.remove('is-selected'));
    matchingDateKeys.forEach(k => {
      const cell = document.querySelector(`.cal-day-cell[data-date="${k}"]`);
      if (cell) cell.classList.add('is-selected');
    });

    // Populate drawer with first date of this stop
    const firstKey = matchingDateKeys[0];
    const info = tripCalendarData[firstKey];
    updateCalendarDrawer(info);
  }
}

// Update the Selected Day Drawer
function updateCalendarDrawer(info) {
  const drawer = document.getElementById('calSelectedDrawer');
  const drawerContent = document.getElementById('calDrawerContent');
  if (!drawer || !drawerContent || !info) return;

  const dateParts = info.dateKey.split('-');
  const dateFormatted = `${parseInt(dateParts[2], 10)} ${info.month === 'dec' ? 'Dec 2026' : 'Jan 2027'}`;

  drawerContent.innerHTML = `
    <div class="cal-drawer-inner">
      <div class="cal-drawer-info">
        <div class="cal-drawer-title-row">
          <span class="cal-drawer-tag badge-${getCountryBadgeSlug(info.country)}">${info.flag} ${info.dayLabel} · ${info.country}</span>
          <span class="cal-drawer-title">${dateFormatted}: ${info.city}</span>
        </div>
        <div class="cal-drawer-desc">
          <strong>${info.title}:</strong> ${info.summary}
        </div>
      </div>
      <div class="cal-drawer-actions">
        <button type="button" class="cal-action-btn btn-primary" id="calBtnFlyMap">
          <span>🗺️ Focus Map on ${info.city.split('➔')[0].trim()}</span>
        </button>
        ${info.tableDayId ? `
        <button type="button" class="cal-action-btn" id="calBtnScrollTable">
          <span>📋 View Schedule in Table</span>
        </button>` : ''}
      </div>
    </div>
  `;

  drawer.classList.add('active');

  const flyBtn = document.getElementById('calBtnFlyMap');
  if (flyBtn) {
    flyBtn.addEventListener('click', () => {
      if (typeof info.destIndex === 'number') {
        focusDestination(info.destIndex, true);
      }
    });
  }

  const scrollBtn = document.getElementById('calBtnScrollTable');
  if (scrollBtn && info.tableDayId) {
    scrollBtn.addEventListener('click', () => {
      scrollToItineraryDay(info.tableDayId);
    });
  }
}

// Switch Active Month on Mobile View
function switchCalendarMonth(targetMonth) {
  const monthTabs = document.querySelectorAll('#calMonthTabs .cal-month-tab');
  const monthDec = document.getElementById('calMonthDec');
  const monthJan = document.getElementById('calMonthJan');

  monthTabs.forEach(t => {
    t.classList.toggle('active', t.getAttribute('data-month') === targetMonth);
  });

  if (targetMonth === 'dec') {
    if (monthDec) monthDec.classList.add('active-tab');
    if (monthJan) monthJan.classList.remove('active-tab');
  } else {
    if (monthDec) monthDec.classList.remove('active-tab');
    if (monthJan) monthJan.classList.add('active-tab');
  }
}

// Select a day in the calendar
function selectCalendarDay(dateKey, shouldScrollTable = false) {
  const info = tripCalendarData[dateKey];
  if (!info) return;

  if (info.month) {
    switchCalendarMonth(info.month);
  }

  document.querySelectorAll('.cal-day-cell').forEach(c => c.classList.remove('is-selected'));
  const activeCells = document.querySelectorAll(`.cal-day-cell[data-date="${dateKey}"]`);
  activeCells.forEach(c => c.classList.add('is-selected'));

  updateCalendarDrawer(info);

  if (typeof info.destIndex === 'number') {
    focusDestination(info.destIndex, true);
  }

  if (shouldScrollTable && info.tableDayId) {
    scrollToItineraryDay(info.tableDayId);
  }
}

// Filter Calendar Days by Country
function filterCalendarByCountry(country) {
  const chips = document.querySelectorAll('#calLegendBar .cal-legend-chip');
  chips.forEach(chip => {
    const chipCountry = chip.getAttribute('data-country');
    chip.classList.toggle('active', chipCountry === country);
  });

  const dayCells = document.querySelectorAll('.cal-day-cell[data-country]');
  if (country === 'all') {
    dayCells.forEach(cell => cell.classList.remove('is-dimmed'));
    return;
  }

  dayCells.forEach(cell => {
    const cellCountry = cell.getAttribute('data-country');
    cell.classList.toggle('is-dimmed', cellCountry !== country);
  });

  // Automatically focus on the first day of that country
  const firstMatchingDate = Object.keys(tripCalendarData).find(key => tripCalendarData[key].country === country);
  if (firstMatchingDate) {
    selectCalendarDay(firstMatchingDate);
  }
}

// Scroll to Itinerary Day in Master Table
function scrollToItineraryDay(dayId) {
  // Reset table filter button to 'all' if the row might be filtered out
  const filterBtns = document.querySelectorAll('.table-filter-btn');
  filterBtns.forEach(btn => {
    if (btn.getAttribute('data-filter') === 'all' && !btn.classList.contains('active')) {
      btn.click();
    }
  });

  const cleanDayStr = dayId.replace('-', ' ').trim().toLowerCase();
  let row = document.getElementById(`tableRow-${dayId}`);
  if (!row) {
    const rows = document.querySelectorAll('.itinerary-table-row');
    row = Array.from(rows).find(r => {
      const badge = r.querySelector('.table-day-badge');
      return badge && badge.textContent.trim().toLowerCase() === cleanDayStr;
    });
  }

  if (row) {
    row.scrollIntoView({ behavior: 'smooth', block: 'center' });
    row.classList.add('table-row-highlight');
    setTimeout(() => {
      row.classList.remove('table-row-highlight');
    }, 2500);
  }
}

// Render Master Trip Calendar (December 2026 & January 2027)
function renderTripCalendar() {
  const decGrid = document.getElementById('calGridDec');
  const janGrid = document.getElementById('calGridJan');
  if (!decGrid || !janGrid) return;

  decGrid.innerHTML = '';
  janGrid.innerHTML = '';

  // 1. Render December 2026 (Sunday to Saturday: 1 Dec is Tuesday -> 2 leading pad days: Nov 29, 30)
  const decPadPre = [29, 30];
  decPadPre.forEach(num => {
    const pad = document.createElement('div');
    pad.className = 'cal-day-cell pad-day';
    pad.innerHTML = `<div class="cal-day-top"><span class="cal-day-num">${num}</span></div>`;
    decGrid.appendChild(pad);
  });

  // 31 days in Dec (1 to 31)
  for (let d = 1; d <= 31; d++) {
    const dateKey = `2026-12-${String(d).padStart(2, '0')}`;
    const cell = document.createElement('div');
    const info = tripCalendarData[dateKey];

    if (info) {
      cell.className = `cal-day-cell ${info.countryClass}`;
      cell.setAttribute('data-date', dateKey);
      cell.setAttribute('data-country', info.country);
      cell.setAttribute('title', `${info.dayLabel}: ${info.city} (${info.country})`);
      cell.innerHTML = `
        <div class="cal-day-top">
          <span class="cal-day-num">${d}</span>
          <span class="cal-day-badge">${info.dayBadge}</span>
        </div>
        <div class="cal-day-body">
          <span class="cal-day-flag">${info.flag}</span>
          <span class="cal-day-city">${info.city}</span>
        </div>
      `;
      cell.addEventListener('click', () => {
        selectCalendarDay(dateKey);
      });
    } else {
      cell.className = 'cal-day-cell non-trip-day';
      cell.setAttribute('title', `${d} Dec 2026`);
      cell.innerHTML = `
        <div class="cal-day-top">
          <span class="cal-day-num">${d}</span>
        </div>
      `;
    }
    decGrid.appendChild(cell);
  }

  // Trailing pad days for Dec (31 Dec is Thu -> Fri 1, Sat 2 to complete 5th week: 35 cells)
  const decPadPost = [1, 2];
  decPadPost.forEach(num => {
    const pad = document.createElement('div');
    pad.className = 'cal-day-cell pad-day';
    pad.innerHTML = `<div class="cal-day-top"><span class="cal-day-num">${num}</span></div>`;
    decGrid.appendChild(pad);
  });

  // 2. Render January 2027 (Sunday to Saturday: 1 Jan is Friday -> 5 leading pad days: Dec 27, 28, 29, 30, 31)
  const janPadDates = [27, 28, 29, 30, 31];
  janPadDates.forEach(num => {
    const pad = document.createElement('div');
    pad.className = 'cal-day-cell pad-day';
    pad.innerHTML = `<div class="cal-day-top"><span class="cal-day-num">${num}</span></div>`;
    janGrid.appendChild(pad);
  });

  // 31 days in Jan (Jan 1 to 31)
  for (let d = 1; d <= 31; d++) {
    const dateKey = `2027-01-${String(d).padStart(2, '0')}`;
    const cell = document.createElement('div');
    const info = tripCalendarData[dateKey];

    if (info) {
      cell.className = `cal-day-cell ${info.countryClass}`;
      cell.setAttribute('data-date', dateKey);
      cell.setAttribute('data-country', info.country);
      cell.setAttribute('title', `${info.dayLabel}: ${info.city} (${info.country})`);
      cell.innerHTML = `
        <div class="cal-day-top">
          <span class="cal-day-num">${d}</span>
          <span class="cal-day-badge">${info.dayBadge}</span>
        </div>
        <div class="cal-day-body">
          <span class="cal-day-flag">${info.flag}</span>
          <span class="cal-day-city">${info.city}</span>
        </div>
      `;
      cell.addEventListener('click', () => {
        selectCalendarDay(dateKey);
      });
    } else {
      cell.className = 'cal-day-cell non-trip-day';
      cell.setAttribute('title', `${d} Jan 2027`);
      cell.innerHTML = `
        <div class="cal-day-top">
          <span class="cal-day-num">${d}</span>
        </div>
      `;
    }
    janGrid.appendChild(cell);
  }

  // Trailing pad days for Jan (31 Jan is Sun -> Mon 1 to Sat 6 Feb to complete 6th week: 42 cells)
  const janPadPost = [1, 2, 3, 4, 5, 6];
  janPadPost.forEach(num => {
    const pad = document.createElement('div');
    pad.className = 'cal-day-cell pad-day';
    pad.innerHTML = `<div class="cal-day-top"><span class="cal-day-num">${num}</span></div>`;
    janGrid.appendChild(pad);
  });

  // 3. Setup Legend Country Filter Chips
  const legendChips = document.querySelectorAll('#calLegendBar .cal-legend-chip');
  legendChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const country = chip.getAttribute('data-country');
      filterCalendarByCountry(country);
    });
  });

  // 4. Setup Mobile Month Tabs Switcher
  const monthTabs = document.querySelectorAll('#calMonthTabs .cal-month-tab');
  const monthDec = document.getElementById('calMonthDec');
  const monthJan = document.getElementById('calMonthJan');

  monthTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetMonth = tab.getAttribute('data-month');
      switchCalendarMonth(targetMonth);
    });
  });

  // Select Day 1 by default to open with useful initial context
  const defaultDate = '2026-12-15';
  const defaultCell = document.querySelector(`.cal-day-cell[data-date="${defaultDate}"]`);
  if (defaultCell) {
    defaultCell.classList.add('is-selected');
    updateCalendarDrawer(tripCalendarData[defaultDate]);
  }

  // Support URL query parameters ?month=dec|jan and ?day=YYYY-MM-DD
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const qMonth = urlParams.get('month');
    const qDay = urlParams.get('day');
    if (qMonth === 'jan') switchCalendarMonth('jan');
    if (qDay && tripCalendarData[qDay]) {
      selectCalendarDay(qDay);
      if (tripCalendarData[qDay].month === 'jan') switchCalendarMonth('jan');
    }
  } catch (e) {
    // ignore
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

  // 1. Add Permanent Sight Star Markers for ALL visited places from the 21-day itinerary
  const addedCoords = new Set();
  
  // First add all itinerary locations
  itineraryData.forEach(dayItem => {
    const color = getCountryColor(dayItem.country);
    (dayItem.locations || []).forEach(loc => {
      if (!loc.coords) return;
      const coordKey = `${loc.coords[0].toFixed(4)},${loc.coords[1].toFixed(4)}`;
      if (addedCoords.has(coordKey)) return;
      addedCoords.add(coordKey);

      const starMarker = L.marker(loc.coords, {
        icon: createStarIcon(color),
        zIndexOffset: 650,
        title: loc.name
      }).addTo(map);

      // Tooltip on hover
      starMarker.bindTooltip(`⭐ ${loc.name} (${dayItem.day})`, {
        permanent: false,
        direction: 'top',
        offset: [0, -12],
        className: 'sight-star-tooltip'
      });

      // Rich popup on click with place details & Google reviews link
      const gmapsSightQuery = encodeURIComponent(`${loc.name}, ${dayItem.city}`);
      const cultureBadgeHtml = loc.badge ? `<div style="margin: 4px 0;"><span class="table-pin-culture-badge ${loc.badgeClass || ''}">${loc.badge}</span></div>` : '';
      
      const sightPopupHtml = `
        <div class="sight-star-popup" style="padding: 12px; min-width: 190px;">
          <div style="display: flex; align-items: center; justify-content: space-between; gap: 6px; margin-bottom: 6px;">
            <span class="sight-star-badge" style="background: ${color}; color: #fff; padding: 2px 7px; border-radius: 4px; font-size: 11px; font-weight: 700;">${dayItem.day} · ${dayItem.city}</span>
          </div>
          <h4 class="sight-star-title" style="margin: 4px 0 2px; font-size: 13.5px; font-weight: 800; color: #0f172a; line-height: 1.3;">${loc.name}</h4>
          ${cultureBadgeHtml}
          <div style="margin-top: 8px; border-top: 1px solid #f1f5f9; padding-top: 6px;">
            <a href="https://www.google.com/maps/search/?api=1&query=${gmapsSightQuery}" target="_blank" rel="noopener noreferrer" class="btn-popup-gmaps" style="display: inline-block; font-size: 11.5px; font-weight: 700; color: #2563eb; text-decoration: none;">
              ⭐ Google Reviews &amp; Nearby ↗
            </a>
          </div>
        </div>
      `;

      starMarker.bindPopup(sightPopupHtml, {
        maxWidth: 240,
        minWidth: 190,
        className: 'custom-sight-popup'
      });

      sightMarkers.push(starMarker);
    });
  });

  // Also ensure any destination mustVisitSites not in itinerary locations are plotted
  destinationData.forEach(dest => {
    const color = getCountryColor(dest.country);
    dest.mustVisitSites.forEach(site => {
      if (!site.coords) return;
      const coordKey = `${site.coords[0].toFixed(4)},${site.coords[1].toFixed(4)}`;
      if (addedCoords.has(coordKey)) return;
      addedCoords.add(coordKey);

      const starMarker = L.marker(site.coords, {
        icon: createStarIcon(color),
        zIndexOffset: 600,
        title: site.name
      }).addTo(map);

      starMarker.bindTooltip(`⭐ ${site.name}`, {
        permanent: false,
        direction: 'top',
        offset: [0, -12],
        className: 'sight-star-tooltip'
      });

      const gmapsSightQuery = encodeURIComponent(`${site.name}, ${dest.name}`);
      const sightPopupHtml = `
        <div class="sight-star-popup" style="padding: 12px; min-width: 190px;">
          <span class="sight-star-badge" style="background: ${color}; color: #fff; padding: 2px 7px; border-radius: 4px; font-size: 11px; font-weight: 700;">${dest.name}</span>
          <div class="sight-star-type" style="font-size: 11px; color: #64748b; margin-top: 4px;">${site.type}</div>
          <h4 class="sight-star-title" style="margin: 2px 0; font-size: 13.5px; font-weight: 800; color: #0f172a;">${site.name}</h4>
          <p class="sight-star-desc" style="font-size: 12px; color: #475569; margin: 4px 0 8px;">${site.desc}</p>
          <a href="https://www.google.com/maps/search/?api=1&query=${gmapsSightQuery}" target="_blank" rel="noopener noreferrer" class="btn-popup-gmaps" style="font-size: 11.5px; font-weight: 700; color: #2563eb; text-decoration: none;">
            ⭐ Google Reviews &amp; Nearby ↗
          </a>
        </div>
      `;

      starMarker.bindPopup(sightPopupHtml, {
        maxWidth: 240,
        minWidth: 190,
        className: 'custom-sight-popup'
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

    // When clicking the city dot directly on the map: focus destination and sync calendar WITHOUT opening any popout text box
    marker.on('click', () => {
      focusDestination(index);
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
        "name": "London Victoria Coach Station (164 Buckingham Palace Rd)",
        "coords": [
          51.4925,
          -0.1481
        ]
      },
      {
        "name": "FlixBus Route N824 (Eurotunnel / Dover)",
        "coords": [
          51.1279,
          1.3134
        ]
      }
    ],
    "activities": [
      "• <u>London Victoria Coach Station</u> by 20:30 PM (60–90 min before departure).",
      "• <u>FlixBus Route N824</u> departing at 22:00 (10:00 PM; Seats 11C & 11D · Booking Ref: 338 890 0447).",
      "• Overnight sleeper coach transit via <u>Dover Port</u> and <u>Eurotunnel</u> into the Netherlands."
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
        "name": "Amsterdam Central Station (De Ruijterkade 153)",
        "coords": [
          52.3791,
          4.9003
        ]
      },
      {
        "name": "Amsterdam Hostel Leidseplein (Korte Leidsedwarsstraat 79)",
        "coords": [
          52.3638,
          4.8833
        ]
      },
      {
        "name": "Herengracht",
        "coords": [
          52.37219,
          4.88725
        ]
      },
      {
        "name": "Dam",
        "coords": [
          52.37307,
          4.89265
        ]
      },
      {
        "name": "Royal Palace Amsterdam",
        "coords": [
          52.37318,
          4.89138
        ]
      },
      {
        "name": "Begijnhof",
        "coords": [
          52.36963,
          4.89018
        ]
      },
      {
        "name": "Leidseplein",
        "coords": [
          52.36377,
          4.88225
        ]
      }
    ],
    "activities": [
      "• <u>Amsterdam Centraal</u> (waterfront drop-off De Ruijterkade 153) at 10:25 AM.",
      "• <u>Amsterdam Hostel Leidseplein</u> via GVB Tram Line 2/12 at 11:30 AM (official room check-in opens 14:00).",
      "• <u>Leidsestraat</u> & UNESCO <u>Herengracht</u> 'Gentlemen's Canal'.",
      "• <u>Dam Square</u>, <u>Royal Palace (Koninklijk Paleis)</u> exterior and <u>Nieuwe Kerk</u>.",
      "• <u>Kalverstraat</u>; arched wooden gateway at Spui, <u>Begijnhof</u> courtyard, <u>English Reformed Church</u>.",
      "• <u>Amsterdam Light Festival</u> at <u>Leidseplein</u>."
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
    "title": "Zaanse Schans Windmills, De Gooyer, Museumplein Grounds & Vondelpark",
    "locations": [
      {
        "name": "Zaanse Schans (Zaandam)",
        "coords": [
          52.47402,
          4.82273
        ]
      },
      {
        "name": "De Gooyer Windmill & Brouwerij 't IJ",
        "coords": [
          52.36681,
          4.92619
        ]
      },
      {
        "name": "Museumplein",
        "coords": [
          52.35726,
          4.88233
        ]
      },
      {
        "name": "Rijksmuseum (Exterior Architecture & Gardens)",
        "coords": [
          52.36,
          4.88522
        ]
      },
      {
        "name": "Van Gogh Museum (Exterior & Museumplein Grounds)",
        "coords": [
          52.35808,
          4.88121
        ]
      },
      {
        "name": "Rosarium Vondelpark",
        "coords": [
          52.35763,
          4.86357
        ]
      },
      {
        "name": "Jordaan",
        "coords": [
          52.37325,
          4.88024
        ]
      }
    ],
    "activities": [
      "• <u>NS Sprinter Train</u> from <u>Amsterdam Centraal</u> (08:15 AM) to <u>Zaandijk Zaanse Schans</u> (17 min, €3.60).",
      "• <u>Zaanse Schans</u> historic windmills, clog workshop & <u>Catharina Hoeve cheese farm</u> (08:50 AM – 11:00 AM).",
      "• Return Sprinter to <u>Amsterdam Centraal</u> + GVB Bus 22 to <u>De Gooyer Windmill</u> & <u>Brouwerij 't IJ</u> (11:45 AM daylight stop).",
      "• <u>Rijksmuseum</u> via Tram 7/19 (12:30 PM); monumental neo-Renaissance facade, Cuypers passage & garden grounds stroll.",
      "• <u>Museumplein</u> green lawns, iconic photo stops & <u>Van Gogh Museum</u> exterior pavilion (14:00 PM).",
      "• Adjacent <u>Vondelpark</u> paths & <u>Rosarium</u> pavilion (16:45 PM), then evening canal walk through <u>Jordaan</u>."
    ],
    "stayTitle": "Amsterdam Hostel Leidseplein (Night 2 of 3)",
    "stayDesc": "Korte Leidsedwarsstraat 79, Amsterdam (Hostel base near Leidseplein)",
    "transitInfo": "🚆 NS Train to Zaandijk (€7.20 return) + 🚇 GVB Day Pass",
    "keyTip": "Visiting De Gooyer Windmill on the way down from Centraal keeps the loop clockwise in daylight, allowing a relaxed afternoon exploring the Museumplein grounds, Vondelpark, and Jordaan with zero museum queue stress.",
    "costs": {
      "sightseeing": "Free ($0 AUD · Exterior walks & park grounds)",
      "transit": "€7.20 (NS Return) + €9.00 (GVB 24h Pass)",
      "stay": "€45.90 / night (Night 2 of 3)",
      "totalHighlight": "Free Sightseeing ($0 AUD)"
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
        "badgeClass": "badge-temple",
        "coords": [
          52.0543,
          4.4984
        ]
      },
      {
        "name": "Peace Palace (Vredespaleis, The Hague)",
        "coords": [
          52.08694,
          4.29547
        ]
      },
      {
        "name": "International Criminal Court (ICC, The Hague)",
        "coords": [
          52.1056,
          4.31774
        ]
      },
      {
        "name": "Albert Cuyp Markt (Amsterdam)",
        "coords": [
          52.35531,
          4.89155
        ]
      },
      {
        "name": "Anne Frank House (Amsterdam)",
        "coords": [
          52.37522,
          4.88398
        ]
      }
    ],
    "activities": [
      "• <u>NS Intercity Train</u> to <u>Den Haag Centraal</u> + <u>RandstadRail Tram 3/4</u> to <u>Zoetermeer, Dorp</u>.",
      "• <u>The Hague Netherlands Temple</u> arrival by 09:10 AM; Sacred Endowment Session (09:30 AM – 11:30 AM).",
      "• <u>Binnenhof</u>, <u>Mauritshuis</u>, and <u>Peace Palace (Vredespaleis)</u> exterior via Tram Line 1.",
      "• <u>International Criminal Court (ICC)</u> judicial campus.",
      "• <u>Albert Cuyp Markt</u> via NS Intercity to Amsterdam Zuid & Metro 52 to De Pijp.",
      "• <u>Anne Frank House</u> exterior along <u>Prinsengracht</u> & Westerkerk docks."
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
        "name": "Amsterdam Hostel Leidseplein",
        "coords": [
          52.3638,
          4.8833
        ]
      },
      {
        "name": "DB ICE 123 Train (Amsterdam ➔ Köln Hbf)",
        "coords": [
          51.661,
          5.929
        ]
      },
      {
        "name": "Room in Cologne (Brucknerstraße 3, Lindenthal)",
        "coords": [
          50.9348,
          6.9205
        ]
      },
      {
        "name": "Cologne Cathedral (Kölner Dom)",
        "coords": [
          50.94128,
          6.95828
        ]
      },
      {
        "name": "Museum Ludwig",
        "coords": [
          50.94085,
          6.96023
        ]
      },
      {
        "name": "Hohenzollern Bridge",
        "coords": [
          50.94144,
          6.96578
        ]
      },
      {
        "name": "Cologne Triangle (KölnTriangle)",
        "coords": [
          50.94041,
          6.97181
        ]
      },
      {
        "name": "Schokoladenmuseum Köln",
        "coords": [
          50.93189,
          6.9644
        ]
      },
      {
        "name": "Old Town Cologne 1922 e.V.",
        "coords": [
          50.93829,
          6.96053
        ]
      }
    ],
    "activities": [
      "• <u>DB ICE 123</u> from <u>Amsterdam Centraal</u> (08:38 AM) direct to <u>Köln Hbf</u> (11:15 AM).",
      "• <u>Room in Cologne</u> (Brucknerstraße 3, Lindenthal) check-in at 13:00 via KVB Stadtbahn 1/7.",
      "• <u>Cologne Cathedral (Kölner Dom)</u> Gothic vaults & Shrine of the Three Kings.",
      "• <u>Hohenzollern Bridge</u> love locks & <u>Museum Ludwig</u> modern art.",
      "• <u>Cologne Triangle (KölnTriangle)</u> 103m observation deck for skyline views.",
      "• <u>Chocolate Museum (Schokoladenmuseum)</u> & Lindt fountain on Rheinauhafen.",
      "• <u>Old Town Cologne (Altstadt)</u> & <u>Heinzels Wintermärchen Christmas Market</u> at Alter Markt."
    ],
    "stayTitle": "Airbnb: Room in Cologne (Hosted by Ina)",
    "stayDesc": "Brucknerstraße 3, 50931 Cologne (Lindenthal) · Check-in 1:00 PM (13:00) / Checkout 1:00 PM · Night 1 of 2",
    "transitInfo": "🚆 DB ICE 123 High-Speed Train (2h 38m · Amsterdam Centraal ➔ Köln Hbf)",
    "keyTip": "Quiet residential location in Lindenthal near Hiroshima-Nagasaki-Park and Aachener Straße, with convenient KVB Stadtbahn connections to central Cologne.",
    "costs": {
      "sightseeing": "Cologne Triangle: €5.00 · Chocolate Museum: €16.50 · Cathedral: Free",
      "transit": "€29.90 – €39.90 (DB ICE 123)",
      "stay": "€85.00 / night (€170.00 total 2N)",
      "totalHighlight": "Paid Sightseeing: ~A$36 AUD (€21.50)"
    }
  },
  {
    "day": "Day 6",
    "date": "20 Dec 2026 (Sun)",
    "city": "Cologne & Düsseldorf",
    "country": "Germany",
    "badgeClass": "badge-de",
    "cardHighlight": "highlight-de",
    "title": "Sunday Worship, Flora Tropical Glasshouses & Düsseldorf Little Tokyo",
    "locations": [
      {
        "name": "Sunday Worship (Cologne)",
        "coords": [
          50.938,
          6.955
        ]
      },
      {
        "name": "Flora und Botanischer Garten Köln",
        "coords": [
          50.95915,
          6.97235
        ]
      },
      {
        "name": "DB Regional Express (Köln Hbf ➔ Düsseldorf Hbf)",
        "coords": [
          51.2198,
          6.7944
        ]
      },
      {
        "name": "Classic Remise Düsseldorf",
        "coords": [
          51.19503,
          6.82381
        ]
      },
      {
        "name": "Schlosspark Benrath",
        "coords": [
          51.1581,
          6.86687
        ]
      },
      {
        "name": "Rheinuferpromenade & Altstadt Markets",
        "coords": [
          51.22849,
          6.77056
        ]
      },
      {
        "name": "Little Tokyo Düsseldorf (Immermannstraße)",
        "coords": [
          51.22374,
          6.78803
        ]
      }
    ],
    "activities": [
      "• Morning church worship services in central <u>Cologne</u> (09:30 AM).",
      "• <u>Flora und Botanischer Garten Köln</u> year-round tropical glasshouses & camellia house (10:45 AM; free).",
      "• <u>DB Regional Express</u> from <u>Köln Hbf</u> (12:15 PM) direct to <u>Düsseldorf Hbf</u> (20 min).",
      "• <u>Classic Remise Düsseldorf</u> historic locomotive roundhouse & vintage cars (13:00 PM).",
      "• <u>Schlosspark Benrath</u> pink baroque palace & mirror pond in afternoon daylight (14:15 PM).",
      "• <u>Königsallee</u> canal & <u>Rheinuferpromenade</u> / <u>Altstadt Christmas Markets</u> at twilight (16:00 PM).",
      "• <u>Little Tokyo Düsseldorf</u> along <u>Immermannstraße</u> for authentic ramen & Japanese bakeries (18:00 PM)."
    ],
    "stayTitle": "Airbnb: Room in Cologne (Hosted by Ina)",
    "stayDesc": "Brucknerstraße 3, 50931 Cologne (Lindenthal) · Night 2 of 2",
    "transitInfo": "🚆 DB Regional Express (Köln Hbf ➔ Düsseldorf Hbf, 20 mins) + Local U-Bahn/Tram",
    "keyTip": "Note: Cologne's Rhein-Seilbahn cable car is closed Nov–Mar for annual winter maintenance; Flora's heated glasshouses next door are open daily and free. Düsseldorf's 7 themed Christmas Markets sit right beside Little Tokyo.",
    "costs": {
      "sightseeing": "Flora Glasshouses, Classic Remise, Benrath, Markets: Free ($0 AUD)",
      "transit": "€15.00 (Regional Return / VRS-VRR Ticket)",
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
        "name": "Room in Cologne (Brucknerstraße 3, Lindenthal)",
        "coords": [
          50.9348,
          6.9205
        ]
      },
      {
        "name": "DB ICE Train (Köln ➔ Frankfurt Hbf)",
        "coords": [
          50.525,
          7.82
        ]
      },
      {
        "name": "Premier Inn Frankfurt City Centre",
        "coords": [
          50.1068,
          8.6653
        ]
      },
      {
        "name": "Palmengarten Frankfurt",
        "coords": [
          50.12321,
          8.65783
        ]
      },
      {
        "name": "Eiserner Steg",
        "coords": [
          50.10811,
          8.68213
        ]
      },
      {
        "name": "Frankfurt Cathedral (Kaiserdom)",
        "coords": [
          50.11066,
          8.68542
        ]
      },
      {
        "name": "New Old Town (Neue Altstadt)",
        "coords": [
          50.11066,
          8.68371
        ]
      },
      {
        "name": "Römerberg",
        "coords": [
          50.11029,
          8.68215
        ]
      }
    ],
    "activities": [
      "• <u>DB ICE Train</u> from <u>Köln Hbf</u> (09:00 AM) direct to <u>Frankfurt (Main) Hbf</u> (10:05 AM).",
      "• <u>Premier Inn Frankfurt City Centre</u> luggage drop at 10:30 AM (Conf: 6320.027.566).",
      "• <u>Palmengarten Frankfurt</u> tropical palm house and winter botanical glasshouses.",
      "• <u>Eiserner Steg</u> iron footbridge overlooking River Main financial skyline.",
      "• <u>Frankfurt Cathedral (Kaiserdom)</u> & <u>New Old Town (Neue Altstadt)</u> coronation route.",
      "• <u>Römerberg</u> & <u>Frankfurt Christmas Market</u> across Paulsplatz."
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
        "name": "Museumsufer & Main Riverside",
        "coords": [
          50.1065,
          8.678
        ]
      },
      {
        "name": "Zeil & Frankfurt City Center",
        "coords": [
          50.1147,
          8.6853
        ]
      },
      {
        "name": "S-Bahn Line S5 (Taunus hills)",
        "coords": [
          50.16,
          8.65
        ]
      },
      {
        "name": "Frankfurt Germany Temple (Talstraße 10, Friedrichsdorf)",
        "badge": "✨ Sacred LDS Temple Appointment",
        "badgeClass": "badge-temple",
        "coords": [
          50.2185,
          8.6418
        ]
      },
      {
        "name": "Premier Inn Frankfurt",
        "coords": [
          50.1068,
          8.6653
        ]
      }
    ],
    "activities": [
      "• <u>Museumsufer</u> River Main promenade & banking skyline reflections.",
      "• <u>Zeil</u> pedestrian shopping boulevard & <u>MyZeil</u> glass wave facade.",
      "• <u>S-Bahn Line S5</u> from <u>Frankfurt Hbf</u> to <u>Friedrichsdorf</u> in the Taunus hills (26 min).",
      "• <u>Frankfurt Germany Temple</u> arrival by 05:15 PM; Sacred Endowment Session (06:00 PM – 08:00 PM).",
      "• Return to <u>Premier Inn Frankfurt</u> via S-Bahn S5; rest for 03:30 AM early morning departure."
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
        "name": "Premier Inn Frankfurt",
        "coords": [
          50.1068,
          8.6653
        ]
      },
      {
        "name": "FlixBus Route N13 (Frankfurt ➔ Strasbourg)",
        "coords": [
          49.34,
          8.19
        ]
      },
      {
        "name": "B&B Hotel Kehl (Allensteiner Str. 15, Kehl)",
        "coords": [
          48.5683,
          7.8202
        ]
      },
      {
        "name": "Place Kléber (Strasbourg)",
        "coords": [
          48.58354,
          7.74575
        ]
      },
      {
        "name": "Cathédrale Notre-Dame-de-Strasbourg",
        "coords": [
          48.58188,
          7.75103
        ]
      },
      {
        "name": "Palais Rohan",
        "coords": [
          48.58084,
          7.75253
        ]
      },
      {
        "name": "Petite-France (Strasbourg)",
        "badge": "🥀 Beauty and the Beast: Disney Storybook Village",
        "badgeClass": "badge-disney",
        "coords": [
          48.58111,
          7.74151
        ]
      },
      {
        "name": "Barrage Vauban",
        "coords": [
          48.57957,
          7.73798
        ]
      },
      {
        "name": "Église Saint-Paul",
        "coords": [
          48.58605,
          7.75967
        ]
      },
      {
        "name": "Christkindelsmärik (Place Broglie)",
        "coords": [
          48.585,
          7.7495
        ]
      }
    ],
    "activities": [
      "• <u>FlixBus Route N13</u> from <u>Frankfurt Hbf</u> (04:35 AM) to <u>Strasbourg</u> (08:35 AM; Booking Ref: 339 153 0857).",
      "• <u>B&B Hotel Kehl</u> luggage drop at 09:30 AM via cross-border Tram Line D (Conf: 5159.618.641).",
      "• <u>Place Kléber</u> 30-meter Great Christmas Tree (<i>Grand Sapin</i>).",
      "• <u>Cathédrale Notre-Dame-de-Strasbourg</u> pink sandstone spire & Astronomical Clock.",
      "• <u>Petite-France</u> half-timbered canals (Disney <i>Beauty and the Beast</i> inspiration).",
      "• <u>Barrage Vauban</u> rooftop terrace & <u>Ponts Couverts</u> panoramic lock views.",
      "• <u>Christkindelsmärik</u> at <u>Place Broglie</u> (France's oldest Christmas market, est. 1570)."
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
        "name": "SNCF TER Train (Strasbourg ➔ Colmar)",
        "coords": [
          48.33,
          7.55
        ]
      },
      {
        "name": "Vieille Ville de Colmar",
        "badge": "🥀 Beauty and the Beast: Belle's 'Little Town'",
        "badgeClass": "badge-disney",
        "coords": [
          48.07527,
          7.35958
        ]
      },
      {
        "name": "La Maison des Têtes",
        "badge": "🥀 Beauty and the Beast: Renaissance Facade",
        "badgeClass": "badge-disney",
        "coords": [
          48.07849,
          7.35563
        ]
      },
      {
        "name": "Maison Pfister",
        "badge": "🥀 Beauty and the Beast: Iconic Gallery in Disney Sketches",
        "badgeClass": "badge-disney",
        "coords": [
          48.07672,
          7.35816
        ]
      },
      {
        "name": "Rue des Marchands",
        "badge": "🥀 Beauty and the Beast: Belle's Village Street",
        "badgeClass": "badge-disney",
        "coords": [
          48.07687,
          7.35759
        ]
      },
      {
        "name": "Collégiale Saint-Martin de Colmar",
        "badge": "🥀 Beauty and the Beast: Parish Church",
        "badgeClass": "badge-disney",
        "coords": [
          48.07752,
          7.35783
        ]
      },
      {
        "name": "Fontaine Schwendi",
        "badge": "🥀 Beauty and the Beast: The Exact Fountain Belle Sits On!",
        "badgeClass": "badge-disney",
        "coords": [
          48.07585,
          7.35952
        ]
      },
      {
        "name": "Marché Couvert Colmar",
        "badge": "🥀 Beauty and the Beast: Real-Life Food Market",
        "badgeClass": "badge-disney",
        "coords": [
          48.07466,
          7.35983
        ]
      },
      {
        "name": "Quai de la Poissonnerie",
        "badge": "🥀 Beauty and the Beast: Pastel Canal Row",
        "badgeClass": "badge-disney",
        "coords": [
          48.07426,
          7.35983
        ]
      },
      {
        "name": "La Petite Venise",
        "badge": "🥀 Beauty and the Beast: Fairytale Canal Quarter",
        "badgeClass": "badge-disney",
        "coords": [
          48.07398,
          7.35729
        ]
      },
      {
        "name": "B&B Hotel Kehl",
        "coords": [
          48.5683,
          7.8202
        ]
      }
    ],
    "activities": [
      "• <u>SNCF TER Train</u> from <u>Strasbourg</u> to <u>Colmar</u> (30 min, 08:45 AM – 09:25 AM).",
      "• <u>Old Town Colmar (Vieille Ville)</u>: Belle's 'Poor Provincial Town' in Disney's <i>Beauty and the Beast</i>.",
      "• <u>Maison Pfister</u> 1537 wooden corner turret & <u>La Maison des Têtes</u> Renaissance facade.",
      "• <u>Rue des Marchands</u> cobblestones & <u>Collégiale Saint-Martin</u> tiled roof.",
      "• <u>Fontaine Schwendi</u> at <u>Place de l'Ancienne Douane</u> (exact fountain Belle sits on with her book).",
      "• <u>Marché Couvert</u> 1865 covered food market for fresh kougelhopf & Munster cheese.",
      "• <u>Quai de la Poissonnerie</u> & <u>La Petite Venise</u> pastel half-timbered canal bridges.",
      "• Afternoon return via TER train (before 16:30 PM early Christmas Eve market closing) to <u>Strasbourg</u> & <u>B&B Hotel Kehl</u>."
    ],
    "stayTitle": "B&B Hotel Kehl (Night 2 of 2)",
    "stayDesc": "15 Allensteiner Str., Kehl (Base for Alsace · Night 2 of 2)",
    "transitInfo": "🚆 SNCF TER Fluo Train (€16.00 Return) + 🚋 Tram Line D",
    "keyTip": "Alsace Christmas markets close early (~16:00–17:00 PM) on 24 Dec. Pre-book a 03:15 AM taxi/Uber from B&B Hotel Kehl to Strasbourg Place de l'Étoile for tomorrow's 04:05 AM FlixBus N846 (Tram D pauses ~00:30–04:30 AM).",
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
    "city": "Zurich & Lucerne ➔ Lauterbrunnen",
    "country": "Switzerland",
    "badgeClass": "badge-ch",
    "cardHighlight": "highlight-ch",
    "title": "Zurich Morning & Lucerne Afternoon (Christmas Day) ➔ Lauterbrunnen",
    "locations": [
      {
        "name": "FlixBus Route N846 (Strasbourg ➔ Lucerne)",
        "coords": [
          47.81,
          7.91
        ]
      },
      {
        "name": "Bahnhof Luzern (SBB Luggage Lockers)",
        "coords": [
          47.0502,
          8.3103
        ]
      },
      {
        "name": "Zürich HB",
        "coords": [
          47.3782,
          8.5402
        ]
      },
      {
        "name": "Lindenhof Hill (Zurich)",
        "badge": "🎬 CLOY: Opening Title Sequence Viewpoint",
        "badgeClass": "badge-cloy",
        "coords": [
          47.3728,
          8.5414
        ]
      },
      {
        "name": "Münsterbrücke (Zurich)",
        "badge": "🎬 CLOY: River Bridge & Grossmünster",
        "badgeClass": "badge-cloy",
        "coords": [
          47.3699,
          8.5432
        ]
      },
      {
        "name": "Lake Zurich Promenade (Bürkliplatz & Bellevue)",
        "coords": [
          47.3663,
          8.5413
        ]
      },
      {
        "name": "Chapel Bridge (Kapellbrücke & Water Tower, Lucerne)",
        "coords": [
          47.0516,
          8.3075
        ]
      },
      {
        "name": "Old Town Lucerne (Altstadt Painted Squares)",
        "coords": [
          47.0526,
          8.3045
        ]
      },
      {
        "name": "Lion Monument (Löwendenkmal, Lucerne)",
        "coords": [
          47.0583,
          8.3108
        ]
      },
      {
        "name": "Luzern-Interlaken Express (Brünig Pass & Lake Lungern)",
        "badge": "🎬 CLOY: Finale Lakeside Cottage Scene",
        "badgeClass": "badge-cloy",
        "coords": [
          46.7865,
          8.156
        ]
      },
      {
        "name": "Valley Hostel (Fuhren 423, Lauterbrunnen)",
        "coords": [
          46.5956,
          7.9079
        ]
      }
    ],
    "activities": [
      "• <u>FlixBus Route N846</u> arrives at <u>Luzern Landenberg</u> (07:10 AM); walk/bus 10 min to <u>Bahnhof Luzern</u> to lock bags in <u>SBB lockers</u>.",
      "• Direct <u>SBB IR 70 Train</u> to <u>Zürich HB</u> (08:09 AM – 08:55 AM) right at winter sunrise.",
      "• <u>Lindenhof Hill</u> (<i>Crash Landing on You</i> opening title viewpoint) & <u>Münsterbrücke</u>.",
      "• <u>Lake Zurich (Zürichsee)</u> promenade at <u>Bürkliplatz</u> & <u>Bellevue</u>.",
      "• Return train to Lucerne (arr 13:25); tour <u>Chapel Bridge (Kapellbrücke)</u> & <u>Water Tower</u>.",
      "• <u>Old Town Lucerne (Altstadt)</u> painted guild squares & <u>Lion Monument (Löwendenkmal)</u>.",
      "• <u>Luzern-Interlaken Express</u> (18:06 PM) over <u>Brünig Pass</u> along <u>Lake Lungern</u> (CLOY finale).",
      "• <u>BOB Mountain Train</u> to <u>Lauterbrunnen</u>; check in at <u>Valley Hostel</u> (20:30 PM; Conf: 5275.904.352)."
    ],
    "stayTitle": "Valley Hostel, Lauterbrunnen (Confirmed: 5275.904.352)",
    "stayDesc": "Fuhren 423, 3822 Lauterbrunnen · Check-in 20:30 PM · Night 1 of 4",
    "transitInfo": "🚌 FlixBus N846 (AUD $76.96 Paid) + 🚆 SBB Lucerne-Zurich Return + 🚆 Luzern-Interlaken Express + 🚆 BOB Train",
    "keyTip": "SBB lockers accept cards/coins (CHF 7–9). Spending the pre-dawn dark hour on the warm Zurich train ensures both Zurich and Lucerne are explored in peak daylight!",
    "costs": {
      "sightseeing": "Lindenhof, Chapel Bridge, Lion Monument: Free ($0 AUD)",
      "transit": "AUD $76.96 (FlixBus Paid) + SBB Pass / Half Fare Rail",
      "stay": "CHF 48.00 – CHF 55.00 / night (Night 1 of 4)",
      "totalHighlight": "Free Sightseeing ($0 AUD)"
    }
  },
  {
    "day": "Day 12",
    "date": "26 Dec 2026 (Sat)",
    "city": "Lauterbrunnen, Mürren & Schilthorn",
    "country": "Switzerland",
    "badgeClass": "badge-ch",
    "cardHighlight": "highlight-ch",
    "title": "Lauterbrunnen Valley & The Schilthorn / Mürren Ridge",
    "locations": [
      {
        "name": "Valley Hostel",
        "coords": [
          46.5956,
          7.9079
        ]
      },
      {
        "name": "Staubbach Falls",
        "badge": "🎬 CLOY: Signature Swiss Valley Backdrop",
        "badgeClass": "badge-cloy",
        "coords": [
          46.58963,
          7.90529
        ]
      },
      {
        "name": "Grütschalp Cable Car & Mountain Rail",
        "coords": [
          46.59652,
          7.89087
        ]
      },
      {
        "name": "Mürren Car-Free Alpine Village (1,638m)",
        "badge": "🎬 CLOY: Snowy Mountain Village",
        "badgeClass": "badge-cloy",
        "coords": [
          46.55944,
          7.89267
        ]
      },
      {
        "name": "Birg (2,677m) & Thrill Walk",
        "coords": [
          46.5583,
          7.8608
        ]
      },
      {
        "name": "Schilthorn / Piz Gloria (2,970m)",
        "badge": "🎬 James Bond 007 Site & CLOY Massif",
        "badgeClass": "badge-cloy",
        "coords": [
          46.55748,
          7.83528
        ]
      },
      {
        "name": "Gimmelwald & Stechelberg",
        "coords": [
          46.545,
          7.901
        ]
      },
      {
        "name": "PostBus 141 (Valley Floor)",
        "coords": [
          46.57,
          7.905
        ]
      }
    ],
    "activities": [
      "• <u>Staubbach Falls</u> 297m vertical cliff waterfall cascades (CLOY Swiss scenery).",
      "• <u>Grütschalp Cable Car</u> + cliffside rail to car-free <u>Mürren (1,638m)</u>.",
      "• <u>Birg (2,677m)</u> suspended glass-floor <u>Thrill Walk</u> over vertical cliffs.",
      "• <u>Schilthorn / Piz Gloria (2,970m)</u> 360° summit terrace & James Bond 007 <u>Spy World</u>.",
      "• Cable car descent via <u>Gimmelwald</u> to <u>Stechelberg</u>.",
      "• <u>PostBus 141</u> along canyon floor back to <u>Valley Hostel</u> for Swiss cheese fondue."
    ],
    "stayTitle": "Valley Hostel, Lauterbrunnen (Night 2 of 4)",
    "stayDesc": "Fuhren 423, Lauterbrunnen (Steps to station)",
    "transitInfo": "🚠 Grütschalp Cable Car + 🚂 BLM Mountain Rail + 🚠 Schilthorn Aerial Cableway + 🚌 PostBus 141",
    "keyTip": "Check live webcams at schilthorn.ch before ascending. Schilthorn cableway is 50% off with Swiss Half Fare Card or Swiss Travel Pass.",
    "costs": {
      "sightseeing": "Mürren & Gimmelwald: Free · Schilthorn Cableway: CHF 42.80 (with Half Fare)",
      "transit": "CHF 8.40 (Local cable car) + PostBus 141",
      "stay": "CHF 48.00 – CHF 55.00 / night (Night 2 of 4)",
      "totalHighlight": "Alpine Summit Day"
    }
  },
  {
    "day": "Day 13",
    "date": "27 Dec 2026 (Sun)",
    "city": "Wengen, Jungfraujoch & Grindelwald",
    "country": "Switzerland",
    "badgeClass": "badge-ch",
    "cardHighlight": "highlight-ch",
    "title": "Jungfraujoch 'Top of Europe' & Grindelwald CLOY Reunion Sites",
    "locations": [
      {
        "name": "Wengen Village & Reformed Church Overlook",
        "badge": "🎬 CLOY: Valley Canyon Vista",
        "badgeClass": "badge-cloy",
        "coords": [
          46.60543,
          7.92154
        ]
      },
      {
        "name": "Kleine Scheidegg (2,061m)",
        "badge": "🎬 CLOY: Where Ri & Se-ri Watched Paragliders!",
        "badgeClass": "badge-cloy",
        "coords": [
          46.58502,
          7.96123
        ]
      },
      {
        "name": "Jungfraujoch ('Top of Europe', 3,454m)",
        "badge": "🎬 High Alpine Glacial Station",
        "badgeClass": "badge-cloy",
        "coords": [
          46.54828,
          7.98064
        ]
      },
      {
        "name": "Aletsch Glacier & Sphinx Observatory",
        "coords": [
          46.5475,
          7.985
        ]
      },
      {
        "name": "Ice Palace (Eispalast)",
        "coords": [
          46.548,
          7.981
        ]
      },
      {
        "name": "Eiger Express 3S Cable Car (Eigergletscher ➔ Grindelwald Terminal)",
        "coords": [
          46.61,
          8.0
        ]
      },
      {
        "name": "Grindelwald First (2,168m) & First Cliff Walk by Tissot",
        "badge": "🎬 CLOY: Se-ri & Ri Reunion Slopes",
        "badgeClass": "badge-cloy",
        "coords": [
          46.6608,
          8.0536
        ]
      },
      {
        "name": "Valley Hostel (Lauterbrunnen)",
        "coords": [
          46.5956,
          7.9079
        ]
      }
    ],
    "activities": [
      "• <u>Wengernalpbahn</u> cogwheel train (07:55 AM) to <u>Wengen</u> & <u>Wengen Reformed Church</u> canyon overlook.",
      "• <u>Kleine Scheidegg (2,061m)</u> beneath Eiger North Face (09:30 AM; CLOY paraglider watching spot).",
      "• <u>Jungfraujoch ('Top of Europe', 3,454m)</u> (10:45 AM – 13:15 PM): <u>Sphinx Observatory</u>, <u>Aletsch Glacier</u> & <u>Ice Palace</u>.",
      "• <u>Eiger Express 3S Cable Car</u> (13:30 PM) gliding past Eiger rock face to <u>Grindelwald Terminal</u> (15 min).",
      "• <u>Grindelwald First (2,168m)</u> & <u>First Cliff Walk by Tissot</u> (14:15 PM, well before 16:00 last winter ascent).",
      "• <u>Bort</u> alpine slopes where Yoon Se-ri lands paraglider and reunites with Captain Ri.",
      "• <u>BOB Mountain Train</u> back to <u>Lauterbrunnen</u> and <u>Valley Hostel</u> (17:14 PM)."
    ],
    "stayTitle": "Valley Hostel, Lauterbrunnen (Night 3 of 4)",
    "stayDesc": "Fuhren 423, Lauterbrunnen (Near station)",
    "transitInfo": "🚂 Wengernalpbahn + 🚂 Jungfraubahn + 🚠 Eiger Express 3S + 🚠 Firstbahn Gondola + 🚆 BOB Train",
    "keyTip": "Depart by 07:55 AM so you board Firstbahn gondola before 14:15 PM (winter last ascent ~16:00, sunset 16:38). First Cliff Walk is free with gondola ticket.",
    "costs": {
      "sightseeing": "Kleine Scheidegg & First Cliff Walk: Free with transit pass",
      "transit": "Jungfraujoch Round-Trip: CHF 95.00 – CHF 190.00 (Pass dependent)",
      "stay": "CHF 48.00 – CHF 55.00 / night (Night 3 of 4)",
      "totalHighlight": "High Alpine Summit Day"
    }
  },
  {
    "day": "Day 14",
    "date": "28 Dec 2026 (Mon)",
    "city": "Lake Brienz, Iseltwald, Sigriswil & Thun",
    "country": "Switzerland",
    "badgeClass": "badge-ch",
    "cardHighlight": "highlight-ch",
    "title": "The Ultimate CLOY & Lakes Day: Iseltwald Pier, Sigriswil Bridge & Lake Thun",
    "locations": [
      {
        "name": "Interlaken Ost",
        "badge": "🎬 CLOY: Central Alpine Hub",
        "badgeClass": "badge-cloy",
        "coords": [
          46.69043,
          7.86905
        ]
      },
      {
        "name": "PostBus 103 (Lake Brienz Shoreline)",
        "badge": "🎬 CLOY: Turquoise Glacial Lake",
        "badgeClass": "badge-cloy",
        "coords": [
          46.72674,
          7.96747
        ]
      },
      {
        "name": "Iseltwald Pier / Landing Stage",
        "badge": "🎬 CLOY: Captain Ri's Iconic Piano Jetty!",
        "badgeClass": "badge-cloy",
        "coords": [
          46.71142,
          7.9626
        ]
      },
      {
        "name": "Höhematte Park & Victoria-Jungfrau Grand Hotel",
        "badge": "🎬 CLOY: Paraglider Meadow",
        "badgeClass": "badge-cloy",
        "coords": [
          46.6863,
          7.8632
        ]
      },
      {
        "name": "Panoramabrücke Sigriswil",
        "badge": "🎬 CLOY: Bridge Where Ri Saves Se-ri's Life!",
        "badgeClass": "badge-cloy",
        "coords": [
          46.71797,
          7.70789
        ]
      },
      {
        "name": "Thun Old Town, Lock Bridges & Thun Castle",
        "coords": [
          46.7594,
          7.6288
        ]
      },
      {
        "name": "Lake Thun (Thunersee)",
        "badge": "🎬 CLOY: Opening Montage Lake",
        "badgeClass": "badge-cloy",
        "coords": [
          46.69584,
          7.72122
        ]
      },
      {
        "name": "Valley Hostel (Lauterbrunnen)",
        "coords": [
          46.5956,
          7.9079
        ]
      }
    ],
    "activities": [
      "• Train to <u>Interlaken Ost</u> + <u>PostBus 103</u> along turquoise shores of <u>Lake Brienz</u>.",
      "• <u>Iseltwald Pier (Landing Stage)</u>: Captain Ri's iconic piano jetty on Lake Brienz (CLOY).",
      "• <u>Höhematte Park</u> paraglider views & <u>Victoria-Jungfrau Grand Hotel</u> facade.",
      "• <u>Panoramabrücke Sigriswil</u> 340m suspension bridge over Gummischlucht gorge (where Ri saves Se-ri).",
      "• <u>Lake Thun (Thunersee)</u>, <u>Scherzligschleuse</u> wooden lock bridges & <u>Thun Castle (Schloss Thun)</u>.",
      "• Fast train to Interlaken Ost + <u>BOB Mountain Train</u> (front carriage) back to <u>Lauterbrunnen</u> (19:00 PM)."
    ],
    "stayTitle": "Valley Hostel, Lauterbrunnen (Night 4 of 4)",
    "stayDesc": "Fuhren 423, Lauterbrunnen (Final night in Swiss Alps)",
    "transitInfo": "🚆 SBB / BOB Trains + 🚌 PostBus 103 + 🚌 STI Bus 25",
    "keyTip": "Carry CHF 5 coin or contactless card for Iseltwald pier and CHF 8 for Sigriswil bridge. Always verify you board the front carriage marked Lauterbrunnen at Interlaken Ost Platform 2!",
    "costs": {
      "sightseeing": "Iseltwald Pier: CHF 5.00 · Sigriswil Bridge: CHF 8.00",
      "transit": "CHF 11.80 (Local trains & PostBus)",
      "stay": "CHF 48.00 – CHF 55.00 / night (Night 4 of 4)",
      "totalHighlight": "Paid Sightseeing: ~A$23 AUD (13 CHF)"
    }
  },
  {
    "day": "Day 15",
    "date": "29 Dec 2026 (Tue)",
    "city": "Lauterbrunnen ➔ Bern ➔ Paris",
    "country": "France",
    "badgeClass": "badge-fr",
    "cardHighlight": "highlight-fr",
    "title": "Bern UNESCO Old Town, Zytglogge, Rosengarten & Journey to Paris",
    "locations": [
      {
        "name": "Valley Hostel (Check-out)",
        "coords": [
          46.5956,
          7.9079
        ]
      },
      {
        "name": "Bern Hauptbahnhof (Electronic Lockers)",
        "coords": [
          46.949,
          7.4395
        ]
      },
      {
        "name": "Bern Switzerland Temple (Zollikofen)",
        "badge": "✨ Sacred LDS Temple Appointment",
        "badgeClass": "badge-temple",
        "coords": [
          46.9881,
          7.4619
        ]
      },
      {
        "name": "Altstadt Bern UNESCO-Weltkulturerbe",
        "coords": [
          46.94811,
          7.44753
        ]
      },
      {
        "name": "Zytglogge (Astronomical Clock Tower)",
        "coords": [
          46.94792,
          7.44778
        ]
      },
      {
        "name": "Berner Münster (Cathedral)",
        "coords": [
          46.94722,
          7.45111
        ]
      },
      {
        "name": "Rosengarten (Aare River Loop Panorama)",
        "coords": [
          46.94719,
          7.45951
        ]
      },
      {
        "name": "TGV Lyria 9284 (Bern Hbf ➔ Paris Gare de Lyon)",
        "coords": [
          48.8443,
          2.3744
        ]
      },
      {
        "name": "Break & Home Paris Italie",
        "coords": [
          48.8207,
          2.3615
        ]
      }
    ],
    "activities": [
      "• <u>BOB Train</u> + <u>SBB Train</u> from <u>Lauterbrunnen</u> (06:33 AM) to <u>Bern Hbf</u> (07:52 AM); store bags in lockers.",
      "• <u>Bern Switzerland Temple</u> (Zollikofen) via S-Bahn; arrival by 08:30 AM for confirmed <b>Sacred Proxy Endowment Session (09:00 AM – 11:00 AM)</b>.",
      "• <u>Altstadt Bern (UNESCO Old Town)</u> medieval sandstone arcades (<i>Lauben</i>) & <u>Berner Münster</u> cathedral.",
      "• <u>Zytglogge</u> astronomical clock tower & <u>Bear Park (Bärengraben)</u> on the Aare River.",
      "• <u>Rosengarten (Rose Garden Viewpoint)</u> panoramic vista overlooking the emerald Aare loop.",
      "• <u>TGV Lyria 9284</u> from Bern Hbf (17:34) direct to <u>Paris Gare de Lyon</u> (22:08).",
      "• <u>Paris Metro Line 14</u> direct to <u>Break & Home Paris Italie</u> check-in (Conf: 5135.300.413)."
    ],
    "stayTitle": "Break & Home Paris Italie (Confirmed: 5135.300.413)",
    "stayDesc": "Porte d'Italie, Paris (Metro Line 14 direct from Gare de Lyon / Bercy) · Night 1 of 5",
    "transitInfo": "🚆 SBB Rail + 🚄 TGV Lyria 9284 to Paris + 🚇 Paris Metro Line 14",
    "keyTip": "Early departure from Lauterbrunnen ensures arriving at Bern Temple by 08:30 AM for the confirmed 09:00 AM session. Bern station lockers take contactless cards (CHF 7–9). Spend the unhurried afternoon in the medieval arcades and Rosengarten before boarding your 17:34 TGV to Paris.",
    "costs": {
      "sightseeing": "Temple, Bern Old Town, Rosengarten: Free ($0 AUD)",
      "transit": "CHF 19.80 (SBB) + Transit to Paris + CHF 8.00 (Locker)",
      "stay": "€83.06 / night (€415.30 total 5N)",
      "totalHighlight": "Free Sightseeing ($0 AUD)"
    }
  },
  {
    "day": "Day 16",
    "date": "30 Dec 2026 (Wed)",
    "city": "Le Chesnay & Versailles",
    "country": "France",
    "badgeClass": "badge-fr",
    "cardHighlight": "highlight-fr",
    "title": "Paris France Temple Sacred Session & Palace of Versailles",
    "locations": [
      {
        "name": "Break & Home Paris Italie (07:15 AM Departure)",
        "coords": [
          48.8207,
          2.3615
        ]
      },
      {
        "name": "Paris France Temple (46 Bd Saint-Antoine, Le Chesnay)",
        "badge": "✨ Sacred LDS Temple Appointment",
        "badgeClass": "badge-temple",
        "coords": [
          48.8208,
          2.1331
        ]
      },
      {
        "name": "Temple Reflection Gardens & Patron Courtyard",
        "coords": [
          48.8215,
          2.1345
        ]
      },
      {
        "name": "Palace of Versailles (Château de Versailles)",
        "coords": [
          48.80486,
          2.12036
        ]
      },
      {
        "name": "Hall of Mirrors (Galerie des Glaces)",
        "coords": [
          48.8049,
          2.1204
        ]
      },
      {
        "name": "Gardens of Versailles & Grand Canal",
        "coords": [
          48.807,
          2.11
        ]
      },
      {
        "name": "Versailles Château Rive Gauche (RER C Return)",
        "coords": [
          48.8,
          2.1285
        ]
      }
    ],
    "activities": [
      "• <u>Paris Metro Line 14</u> + <u>RER Line C</u> + <u>Phébus Bus 2</u> to <u>Le Chesnay</u> (depart 07:15 AM).",
      "• <u>Paris France Temple</u> arrival by 08:30 AM; confirmed <b>Sacred Proxy Endowment Session (09:00 AM – 11:00 AM)</b>.",
      "• <u>Temple Reflection Gardens</u> & patron courtyard stroll, then lunch in <u>Versailles</u> (8-min <u>Phébus Bus 2</u> ride, 2.2 km).",
      "• <u>Palace of Versailles (Château de Versailles)</u> (13:00 PM timed Passport entry): <u>Hall of Mirrors</u> & King's Grand Apartments.",
      "• <u>Gardens of Versailles</u>, <u>Orangerie</u> parterre & <u>Grand Canal</u> royal vistas (open until 18:00; free in winter).",
      "• <u>RER Line C</u> from <u>Versailles Château Rive Gauche</u> (16:30 PM) back to Paris & <u>Break & Home Paris Italie</u>."
    ],
    "stayTitle": "Break & Home Paris Italie (Night 2 of 5)",
    "stayDesc": "Porte d'Italie, Paris",
    "transitInfo": "🚆 Metro 14 + RER Line C Return + Phébus Bus 2 (€2.50 × 2 + €2.00)",
    "keyTip": "Paris France Temple sits just 2.2 km (8-min Phébus Bus 2) from Palace of Versailles, saving a 90-min RER round-trip! Book the 13:00 PM Versailles Passport slot in advance (open Wednesdays 09:00–17:30).",
    "costs": {
      "sightseeing": "Paris France Temple: Free ($0 AUD) · Palace of Versailles: €25.00",
      "transit": "€8.30 (RER C Return) + €2.00 (Phébus Bus 2)",
      "stay": "€83.06 / night (Night 2 of 5)",
      "totalHighlight": "Paid Sightseeing: ~A$42 AUD (€25)"
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
        "badgeClass": "badge-swift",
        "coords": [
          48.85488,
          2.34749
        ]
      },
      {
        "name": "Notre-Dame Cathedral of Paris",
        "coords": [
          48.85297,
          2.3499
        ]
      },
      {
        "name": "Panthéon",
        "coords": [
          48.84622,
          2.34641
        ]
      },
      {
        "name": "Jardin du Luxembourg & Luxembourg Palace",
        "coords": [
          48.84827,
          2.33729
        ]
      },
      {
        "name": "Break & Home Paris Italie (Afternoon Rest & Prep)",
        "coords": [
          48.8207,
          2.3615
        ]
      },
      {
        "name": "Espl. du Trocadéro",
        "coords": [
          48.86215,
          2.28845
        ]
      },
      {
        "name": "Champs-Élysées NYE Countdown",
        "coords": [
          48.8718,
          2.3026
        ]
      }
    ],
    "activities": [
      "• <u>Île de la Cité</u> & <u>Square du Vert-Galant</u> Seine cobblestone tip (Taylor Swift <i>Begin Again</i>).",
      "• <u>Notre-Dame Cathedral</u> restored Gothic towers, facade portals, and parvis.",
      "• <u>Panthéon</u> Neoclassical dome, Foucault's pendulum & crypt tombs in the <u>Latin Quarter</u> (12:00 PM; closes 17:00 NYE).",
      "• <u>Jardin du Luxembourg</u>, <u>Medici Fountain</u> & <u>Luxembourg Palace</u> gardens.",
      "• <u>Esplanade du Trocadéro</u> sparkling evening views of the <u>Eiffel Tower</u>.",
      "• <u>Av. des Champs-Élysées</u> official NYE countdown & 3D laser show on the <u>Arc de Triomphe</u> (free all-night Metro)."
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
        "badgeClass": "badge-swift",
        "coords": [
          48.86123,
          2.35819
        ]
      },
      {
        "name": "Place des Vosges",
        "badge": "🎶 Taylor Swift: 'Begin Again' Arcaded Square",
        "badgeClass": "badge-swift",
        "coords": [
          48.85561,
          2.36553
        ]
      },
      {
        "name": "Musée d'Orsay / Left Bank Quays (Quai de Conti)",
        "badge": "🎶 Taylor Swift: 'Begin Again' Seine Quays",
        "badgeClass": "badge-swift",
        "coords": [
          48.86,
          2.3266
        ]
      },
      {
        "name": "Saint-Germain-des-Prés (Place de Furstemberg & Café La Palette)",
        "badge": "🎶 Taylor Swift: 'Begin Again' Bike & Café Scene!",
        "badgeClass": "badge-swift",
        "coords": [
          48.854,
          2.336
        ]
      }
    ],
    "activities": [
      "• <u>Le Marais</u> historic aristocratic mansions, bakeries & cobblestone art lanes.",
      "• <u>Place des Vosges</u> 17th-century symmetrical red-brick arcaded pavilions (Taylor Swift <i>Begin Again</i>).",
      "• <u>Seine riverbank quays</u> (<u>Quai Voltaire</u> & <u>Quai de Conti</u>) past vintage green <i>bouquinistes</i>.",
      "• <u>Saint-Germain-des-Prés</u> & charming <u>Place de Furstemberg</u> square.",
      "• <u>Café La Palette</u> on <u>Rue de Seine</u> terrace (exact café where Taylor Swift sits in <i>Begin Again</i>)."
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
    "city": "Paris (Louvre, Champs-Élysées & Arc)",
    "country": "France",
    "badgeClass": "badge-fr",
    "cardHighlight": "highlight-fr",
    "title": "Musée du Louvre Masterpieces, Historic Axis, Arc de Triomphe Vista & Farewell Dinner",
    "locations": [
      {
        "name": "Musée du Louvre (Cour Napoléon Glass Pyramid)",
        "coords": [
          48.86061,
          2.33764
        ]
      },
      {
        "name": "Jardin des Tuileries",
        "badge": "🎶 Taylor Swift: 'Begin Again' Site",
        "badgeClass": "badge-swift",
        "coords": [
          48.8638,
          2.3275
        ]
      },
      {
        "name": "Place de la Concorde (Luxor Obelisk)",
        "coords": [
          48.8656,
          2.3212
        ]
      },
      {
        "name": "Grand Palais & Pont Alexandre III",
        "badge": "🎶 Taylor Swift: 'Begin Again' Site",
        "badgeClass": "badge-swift",
        "coords": [
          48.86611,
          2.31245
        ]
      },
      {
        "name": "Av. des Champs-Élysées",
        "coords": [
          48.87181,
          2.30266
        ]
      },
      {
        "name": "Arc de Triomphe (Place Charles de Gaulle & Eternal Flame)",
        "coords": [
          48.87379,
          2.29503
        ]
      },
      {
        "name": "Galeries Lafayette Haussmann",
        "badge": "🎶 Taylor Swift: 'Begin Again' Rooftop Scene!",
        "badgeClass": "badge-swift",
        "coords": [
          48.87362,
          2.33211
        ]
      },
      {
        "name": "Parisian Farewell Dinner (Central Paris)",
        "coords": [
          48.852,
          2.342
        ]
      }
    ],
    "activities": [
      "• <u>Paris Metro Line 7</u> direct from <u>Porte d'Italie</u> to <u>Palais Royal - Musée du Louvre</u> (20 min).",
      "• <u>Musée du Louvre</u> via <u>Cour Napoléon</u> pyramid (09:30 AM timed entry; <i>Mona Lisa</i>, <i>Winged Victory</i> & <i>Venus de Milo</i>).",
      "• Linear Historic Axis walk through <u>Jardin des Tuileries</u> & <u>Place de la Concorde</u> Luxor Obelisk (Taylor Swift <i>Begin Again</i>).",
      "• <u>Grand Palais</u> glass dome & <u>Pont Alexandre III</u> gilded bridge, continuing up <u>Av. des Champs-Élysées</u>.",
      "• <u>Arc de Triomphe</u> at <u>Place Charles de Gaulle</u> (16:15 PM); viewing the monumental arch, Tomb of the Unknown Soldier & eternal flame.",
      "• <u>Galeries Lafayette Haussmann</u> stained-glass holiday tree & rooftop terrace (Taylor Swift <i>Begin Again</i> finale).",
      "• Celebratory Parisian farewell dinner in central <u>Paris</u>."
    ],
    "stayTitle": "Break & Home Paris Italie (Night 5 of 5)",
    "stayDesc": "Porte d'Italie, Paris (Final night in France)",
    "transitInfo": "🚇 Paris Metro Line 7 / Line 1 / Line 14 (€2.50 / ride)",
    "keyTip": "Book Louvre 09:30 AM first-wave Saturday entry (€32 non-EEA rate) online in advance. Viewing the Arc de Triomphe from the pedestrian underpass/roundabout avoids the 284 spiral stairs and €16 rooftop ticket while keeping your sunset timeline intact.",
    "costs": {
      "sightseeing": "Musée du Louvre: €32.00 · Arc de Triomphe: Exterior (Free) · Galeries Lafayette: Free",
      "transit": "€7.50 (3 × Metro rides)",
      "stay": "€83.06 / night (Night 5 of 5)",
      "totalHighlight": "Paid Sightseeing: ~A$54 AUD (€32)"
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
        "name": "Break & Home Paris Italie (Check-out & Bag Storage)",
        "coords": [
          48.8207,
          2.3615
        ]
      },
      {
        "name": "Pont Alexandre III & Invalides Esplanade",
        "badge": "🎶 Taylor Swift: 'Begin Again' Seine Promenade",
        "badgeClass": "badge-swift",
        "coords": [
          48.8639,
          2.31356
        ]
      },
      {
        "name": "Latin Quarter & Boulevard Saint-Michel",
        "coords": [
          48.851,
          2.344
        ]
      },
      {
        "name": "Paris Bercy Seine Coach Terminal (210 Quai de Bercy)",
        "coords": [
          48.8355,
          2.3813
        ]
      },
      {
        "name": "FlixBus Route N700 (Direct Sleeper via Eurotunnel)",
        "coords": [
          50.93,
          1.81
        ]
      }
    ],
    "activities": [
      "• <u>Break & Home Paris Italie</u> check-out by 09:30 AM (official check-out 11:00 AM); store bags at front desk first.",
      "• Morning Seine walk across <u>Pont Alexandre III</u> & <u>Esplanade des Invalides</u> (10:15 AM).",
      "• Afternoon in <u>Latin Quarter</u> along <u>Boulevard Saint-Michel</u> & <u>Shakespeare and Company</u> for crêpes and souvenirs.",
      "• Collect stored bags (19:15 PM) & ride <u>Metro Line 14</u> to <u>Paris Bercy Seine Coach Terminal</u> (arrive 20:00 PM).",
      "• <u>FlixBus Route N700</u> sleeper departing at 21:00 (9:00 PM) via <u>Eurotunnel</u> to <u>London Victoria</u>."
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
        "name": "London Victoria Coach Station",
        "coords": [
          51.4925,
          -0.1481
        ]
      },
      {
        "name": "London Waterloo Station",
        "coords": [
          51.5031,
          -0.1132
        ]
      },
      {
        "name": "South Western Railway Train",
        "coords": [
          51.2,
          -0.75
        ]
      },
      {
        "name": "Southampton Residence",
        "coords": [
          50.9076,
          -1.4137
        ]
      }
    ],
    "activities": [
      "• <u>FlixBus Route N700</u> arrives at <u>London Victoria Coach Station</u> at 05:25 AM.",
      "• English breakfast & coffee at Victoria Station; London Underground to <u>London Waterloo Station</u>.",
      "• <u>South Western Railway</u> mainline train (10:00 AM) direct to <u>Southampton Central</u> (11:15 AM).",
      "• Arrive safely at <u>Southampton residence</u>; tour complete!"
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
      else if (dayNum === 11) destIndex = 5; // Zurich, Lucerne & Lauterbrunnen Base
      else if (dayNum === 12) destIndex = 6; // Lauterbrunnen, Mürren & Schilthorn
      else if (dayNum === 13) destIndex = 7; // Jungfraujoch & Grindelwald First
      else if (dayNum === 14) destIndex = 8; // Iseltwald Pier, Sigriswil & Lake Thun
      else if (dayNum === 15) destIndex = 9; // Bern Temple & TGV to Paris
      else if (dayNum >= 16 && dayNum <= 19) destIndex = 10; // Paris & Versailles
      else if (dayNum >= 20 && dayNum <= 21) destIndex = 11; // London & Southampton Return
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

// Helper for Day Route Map Thumbnail in Location Column
const dayMapConfigs = {
  'Day 2': {
    url: 'public/maps/day2_amsterdam_city_map.html',
    title: 'Day 2 · Amsterdam Canal Ring &amp; Transit Route Map',
    key: 'day2',
    img: 'public/img/day2_amsterdam_city_map.png',
    badge: '🗺️ Route Map (1★ ➔ 6★)'
  },
  'Day 3': {
    url: 'public/maps/day3_zaanse_schans_museumplein_map.html',
    title: 'Day 3 · Zaanse Schans &amp; Museumplein Route Map',
    key: 'day3',
    img: 'public/img/day3_zaanse_schans_museumplein_map.png',
    badge: '🗺️ Route Map (1★ ➔ 9★)'
  },
  'Day 4': {
    url: 'public/maps/day4_the_hague_rotterdam_map.html',
    title: 'Day 4 · The Hague Temple &amp; Courts Route Map',
    key: 'day4',
    img: 'public/img/day4_the_hague_rotterdam_map.png',
    badge: '🗺️ Route Map (1★ ➔ 8★)'
  },
  'Day 5': {
    url: 'public/maps/day5_cologne_arrival_map.html',
    title: 'Day 5 · Amsterdam ➔ Cologne ICE &amp; Cathedral Route Map',
    key: 'day5',
    img: 'public/img/day5_cologne_arrival_map.png',
    badge: '🗺️ Route Map (1★ ➔ 9★)'
  },
  'Day 6': {
    url: 'public/maps/day6_dusseldorf_cologne_map.html',
    title: 'Day 6 · Flora Glasshouses, Benrath &amp; Little Tokyo Route Map',
    key: 'day6',
    img: 'public/img/day6_dusseldorf_cologne_map.png',
    badge: '🗺️ Route Map (1★ ➔ 7★)'
  },
  'Day 7': {
    url: 'public/maps/day7_frankfurt_arrival_map.html',
    title: 'Day 7 · Cologne ➔ Frankfurt ICE &amp; Römerberg Route Map',
    key: 'day7',
    img: 'public/img/day7_frankfurt_arrival_map.png',
    badge: '🗺️ Route Map (1★ ➔ 9★)'
  },
  'Day 8': {
    url: 'public/maps/day8_frankfurt_temple_map.html',
    title: 'Day 8 · Frankfurt Museumsufer &amp; Temple Route Map',
    key: 'day8',
    img: 'public/img/day8_frankfurt_temple_map.png',
    badge: '🗺️ Route Map (1★ ➔ 7★)'
  },
  'Day 9': {
    url: 'public/maps/day9_colmar_strasbourg_map.html',
    title: 'Day 9 · Alsace Arrival &amp; Petite-France Route Map',
    key: 'day9',
    img: 'public/img/day9_colmar_strasbourg_map.png',
    badge: '🗺️ Route Map (1★ ➔ 9★)'
  },
  'Day 10': {
    url: 'public/maps/day10_strasbourg_christmas_map.html',
    title: 'Day 10 · Colmar Fairytale Christmas Eve Route Map',
    key: 'day10',
    img: 'public/img/day10_strasbourg_christmas_map.png',
    badge: '🗺️ Route Map (1★ ➔ 9★)'
  },
  'Day 11': {
    url: 'public/maps/day11_zurich_lucerne_lauterbrunnen_map.html',
    title: 'Day 11 · Zurich, Lucerne &amp; Alpine Express Route Map',
    key: 'day11',
    img: 'public/img/day11_zurich_lucerne_lauterbrunnen_map.png',
    badge: '🗺️ Route Map (1★ ➔ 11★)'
  },
  'Day 12': {
    url: 'public/maps/day12_lauterbrunnen_schilthorn_muerren_map.html',
    title: 'Day 12 · Lauterbrunnen Valley &amp; Schilthorn Route Map',
    key: 'day12',
    img: 'public/img/day12_lauterbrunnen_schilthorn_muerren_map.png',
    badge: '🗺️ Route Map (1★ ➔ 8★)'
  },
  'Day 13': {
    url: 'public/maps/day13_jungfraujoch_grindelwald_cloy_map.html',
    title: 'Day 13 · Jungfraujoch &amp; Grindelwald CLOY Route Map',
    key: 'day13',
    img: 'public/img/day13_jungfraujoch_grindelwald_cloy_map.png',
    badge: '🗺️ Route Map (1★ ➔ 9★)'
  },
  'Day 14': {
    url: 'public/maps/day14_lake_brienz_iseltwald_sigriswil_thun_map.html',
    title: 'Day 14 · Lake Brienz, Iseltwald Pier &amp; Sigriswil Route Map',
    key: 'day14',
    img: 'public/img/day14_lake_brienz_iseltwald_sigriswil_thun_map.png',
    badge: '🗺️ Route Map (1★ ➔ 9★)'
  },
  'Day 15': {
    url: 'public/maps/day15_bern_temple_paris_map.html',
    title: 'Day 15 · Bern Old Town, Temple &amp; TGV to Paris Route Map',
    key: 'day15',
    img: 'public/img/day15_bern_temple_paris_map.png',
    badge: '🗺️ Route Map (1★ ➔ 9★)'
  },
  'Day 16': {
    url: 'public/maps/day16_paris_temple_city_map.html',
    title: 'Day 16 · Paris France Temple &amp; Palace of Versailles Route Map',
    key: 'day16',
    img: 'public/img/day16_paris_temple_city_map.png',
    badge: '🗺️ Route Map (1★ ➔ 9★)'
  },
  'Day 17': {
    url: 'public/maps/day17_paris_monuments_nye_map.html',
    title: 'Day 17 · Île de la Cité, Panthéon &amp; NYE Countdown Route Map',
    key: 'day17',
    img: 'public/img/day17_paris_monuments_nye_map.png',
    badge: '🗺️ Route Map (1★ ➔ 7★)'
  },
  'Day 18': {
    url: 'public/maps/day18_paris_louvre_montmartre_map.html',
    title: 'Day 18 · Le Marais &amp; Saint-Germain Begin Again Route Map',
    key: 'day18',
    img: 'public/img/day18_paris_louvre_montmartre_map.png',
    badge: '🗺️ Route Map (1★ ➔ 7★)'
  },
  'Day 19': {
    url: 'public/maps/day19_versailles_champs_elysees_map.html',
    title: 'Day 19 · Musée du Louvre, Historic Axis &amp; Arc de Triomphe Route Map',
    key: 'day19',
    img: 'public/img/day19_versailles_champs_elysees_map.png',
    badge: '🗺️ Route Map (1★ ➔ 9★)'
  },
  'Day 20': {
    url: 'public/maps/day20_paris_to_london_transit_map.html',
    title: 'Day 20 · Paris Farewell &amp; FlixBus N700 Cross-Channel Route Map',
    key: 'day20',
    img: 'public/img/day20_paris_to_london_transit_map.png',
    badge: '🗺️ Route Map (1★ ➔ 7★)'
  }
};

function getMapThumbnailHtml(day) {
  const conf = dayMapConfigs[day];
  if (!conf) return '';
  return `
    <div class="loc-map-thumb-card" onclick="openRouteMapModal('${conf.url}', '${conf.title}', '${conf.key}')" title="Click to open interactive route map">
      <div class="loc-map-thumb-img-wrap">
        <img src="${conf.img}" alt="${conf.title}" loading="lazy" class="loc-map-thumb-img" />
        <div class="loc-map-thumb-overlay">
          <span class="loc-map-expand-btn">🔍 Interactive Map</span>
        </div>
      </div>
      <div class="loc-map-thumb-caption">
        <span class="loc-map-thumb-badge">${conf.badge}</span>
        <span class="loc-map-thumb-sub">Tap to explore ➔</span>
      </div>
    </div>`;
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
    tr.id = 'tableRow-' + (item.day || '').replace(/\s+/g, '-');
    tr.setAttribute('data-day', item.day || '');

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
        ${getMapThumbnailHtml(item.day)}
      </td>
      <td class="col-table-plan">
        <div class="table-plan-title">${item.title}</div>
        ${activitiesHtml}
        ${subcardHtml}
        ${tipHtml}
        ${item.day === 'Day 17' ? `<details class="nye-details-accordion" style="margin-top: 10px; background: #faf5ff; border: 1px solid #d8b4fe; border-radius: 8px; padding: 8px 12px;">
  <summary style="font-weight: 700; color: #7e22ce; font-size: 12.5px; cursor: pointer; user-select: none;">
    🎆 Arc de Triomphe NYE Fireworks Guide (Sweet Spot No. 100–110 &amp; Free Metro) ▾
  </summary>
  <div class="nye-fireworks-guide-card" style="margin-top: 10px;">
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
        <strong>🚫 Avoid Rear/Side Avenues:</strong> You will completely miss the famous 3D projection show and countdown.
      </div>
    </div>
    <div class="nye-transit-footer">
      <strong>🚇 Inbound &amp; Return Transit Strategy (100% Free All Night):</strong><br>
      • <b>Inbound (Arrive 21:30–22:15):</b> Take Metro Line 1/9 to <i>Franklin D. Roosevelt</i> or Line 9 to <i>Saint-Philippe-du-Roule</i>.<br>
      • <b>Outbound (Post-Midnight):</b> Walk east to <i>Franklin D. Roosevelt</i> or 15 mins to <i>Madeleine</i> for <b>automated Metro Line 14</b> direct to <i>Porte de Choisy / Maison Blanche</i>!
    </div>
  </div>
</details>` : ''}
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
  const galleryBtn = document.getElementById('viewGalleryBtn');

  if (view === 'table') {
    if (tableWrapper) tableWrapper.style.display = 'block';
    if (cardsContainer) cardsContainer.style.display = 'none';
    if (galleryContainer) galleryContainer.style.display = 'none';
    if (tableBtn) tableBtn.classList.add('active');
    if (galleryBtn) galleryBtn.classList.remove('active');
    renderItineraryTable(currentItineraryFilter);
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

// Interactive Route Map Modal Logic
function openRouteMapModal(mapUrl, title, dayKey) {
  const modal = document.getElementById('routeMapModal');
  const iframe = document.getElementById('routeMapIframe');
  const titleEl = document.getElementById('routeMapModalTitle');
  const subtitleEl = document.getElementById('routeMapModalSubtitle');
  const newTabBtn = document.getElementById('routeMapNewTabBtn');

  if (!modal || !iframe) return;

  if (titleEl) titleEl.textContent = title || 'Itinerary Route Map';
  if (subtitleEl) {
    subtitleEl.textContent = dayKey === 'day2'
      ? 'Interactive Amsterdam Canal Ring & Transit Navigation'
      : (dayKey === 'day3' ? 'Interactive Zaanse Schans & Museumplein Navigation' : 'Interactive Day Route Map');
  }
  if (newTabBtn) newTabBtn.href = mapUrl;

  iframe.src = mapUrl;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeRouteMapModal() {
  const modal = document.getElementById('routeMapModal');
  const iframe = document.getElementById('routeMapIframe');
  if (!modal) return;

  modal.classList.remove('active');
  document.body.style.overflow = '';
  setTimeout(() => {
    if (!modal.classList.contains('active') && iframe) {
      iframe.src = '';
    }
  }, 250);
}

window.openRouteMapModal = openRouteMapModal;
window.closeRouteMapModal = closeRouteMapModal;

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const modal = document.getElementById('routeMapModal');
    if (modal && modal.classList.contains('active')) {
      closeRouteMapModal();
    }
  }
});

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
    renderTripCalendar();
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

  // Itinerary View Toggle buttons
  try {
    const viewTableBtn = document.getElementById('viewTableBtn');
    const viewGalleryBtn = document.getElementById('viewGalleryBtn');
    if (viewTableBtn) {
      viewTableBtn.addEventListener('click', () => switchItineraryView('table'));
    }
    if (viewGalleryBtn) {
      viewGalleryBtn.addEventListener('click', () => switchItineraryView('gallery'));
    }
  } catch (e) {
    console.error('Error setting up view toggle buttons:', e);
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

  // Mobile Device & Viewport Detection + Controls
  try {
    initMobileDetection();
  } catch (e) {
    console.error('Error setting up mobile detection:', e);
  }
}

/**
 * Mobile Device & Viewport Detection Controller
 * Detects mobile phones/tablets via User Agent, viewport width, and touch capabilities.
 * Manages responsive table cards vs full table layout toggling.
 */
function initMobileDetection() {
  const table = document.getElementById('masterItineraryTable');
  const wrapper = document.getElementById('itineraryTableWrapper');
  const tableResponsive = wrapper ? wrapper.querySelector('.table-responsive') : null;
  const deviceLabel = document.getElementById('mobileDeviceLabel');
  const btnCards = document.getElementById('btnModeCards');
  const btnTable = document.getElementById('btnModeTable');
  const hint = document.getElementById('mobileTableHint');

  function updateMobileState() {
    const ua = navigator.userAgent || navigator.vendor || window.opera || '';
    const isIOS = /iPad|iPhone|iPod/.test(ua) && !window.MSStream;
    const isAndroid = /Android/.test(ua);
    const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
    const isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    const isSmallScreen = window.innerWidth <= 768;
    const isMobile = isMobileUA || (isSmallScreen && isTouch) || isSmallScreen;

    if (isMobile) {
      document.body.classList.add('is-mobile');
      document.documentElement.classList.add('is-mobile-device');

      if (deviceLabel) {
        if (isIOS) {
          deviceLabel.textContent = 'iPhone / iOS Mobile Active';
        } else if (isAndroid) {
          deviceLabel.textContent = 'Android Mobile Active';
        } else if (isSmallScreen) {
          deviceLabel.textContent = 'Mobile Screen Active';
        } else {
          deviceLabel.textContent = 'Touch Mobile Active';
        }
      }
    } else {
      document.body.classList.remove('is-mobile');
      document.documentElement.classList.remove('is-mobile-device');
    }
  }

  // Initial detection
  updateMobileState();

  // Dynamic listener for orientation and window resize
  window.addEventListener('resize', () => {
    updateMobileState();
  });
  window.addEventListener('orientationchange', () => {
    setTimeout(updateMobileState, 200);
  });

  // Mobile layout mode switcher buttons
  if (btnCards && btnTable && table) {
    btnCards.addEventListener('click', () => {
      btnCards.classList.add('active');
      btnTable.classList.remove('active');
      table.classList.remove('mode-force-table');
      if (tableResponsive) tableResponsive.classList.remove('mode-scrollable');
      if (hint) hint.style.display = 'none';
      try {
        sessionStorage.setItem('schengen_itinerary_mobile_view', 'cards');
      } catch (e) {}
    });

    btnTable.addEventListener('click', () => {
      btnTable.classList.add('active');
      btnCards.classList.remove('active');
      table.classList.add('mode-force-table');
      if (tableResponsive) tableResponsive.classList.add('mode-scrollable');
      if (hint) hint.style.display = 'block';
      try {
        sessionStorage.setItem('schengen_itinerary_mobile_view', 'table');
      } catch (e) {}
    });

    // Restore user preference
    try {
      const savedView = sessionStorage.getItem('schengen_itinerary_mobile_view');
      if (savedView === 'table') {
        btnTable.click();
      }
    } catch (e) {}
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
    { id: 'flixbusReservationsDossier', name: 'FlixBus Bookings', icon: '🚌' },
    { id: 'ldsTemplesSection', name: 'LDS Temples', icon: '🏛️' },
    { id: 'borderComplianceSection', name: 'Border Compliance', icon: '🛂' },
    { id: 'dossierBreakdownSection', name: 'Country Breakdown', icon: '📍' },
    { id: 'restroomGuideSection', name: 'Restroom Guide', icon: '🚻' }
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

