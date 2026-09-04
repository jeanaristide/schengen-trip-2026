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
    heroImage: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
    description: "Our holiday home base in Southampton, and gateway through London Victoria Coach Station across the Channel.",
    mustVisitSites: [
      {
        name: "London Victoria & Westminster",
        type: "Landmark / Transit Hub",
        desc: "Historic departure station for overnight European sleeper coaches, right beside iconic Westminster and Big Ben.",
        image: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=600&q=80",
        coords: [51.4952, -0.1441]
      },
      {
        name: "Southampton Historic Waterfront & Old Town",
        type: "Holiday Base",
        desc: "Cozy holiday base in Hampshire, historic medieval city walls, and seaside docks.",
        image: "https://images.unsplash.com/photo-1589802829985-817e51171b92?auto=format&fit=crop&w=600&q=80",
        coords: [50.8998, -1.4044]
      }
    ]
  },
  {
    id: "amsterdam",
    name: "Amsterdam",
    country: "Netherlands",
    dates: "16–18 Dec 2026 (3 Nights)",
    coords: [52.3676, 4.9041],
    badgeClass: "badge-nl",
    category: "Canals, Culture & Festive Lights",
    heroImage: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=800&q=80",
    description: "Famous for its UNESCO World Heritage canal rings, historic merchant houses, Rembrandt masterpieces, and winter light festival installations.",
    mustVisitSites: [
      {
        name: "Rijksmuseum & Museumplein",
        type: "Art & Culture",
        desc: "Home to Rembrandt's The Night Watch and Vermeer's masterpieces with grand 19th-century brick architecture.",
        image: "https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?auto=format&fit=crop&w=600&q=80",
        coords: [52.3600, 4.8852]
      },
      {
        name: "Amsterdam Light Festival & UNESCO Canals",
        type: "Seasonal Highlight",
        desc: "Magical illuminated art installations suspended over romantic bridges and reflecting upon the canal waters.",
        image: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=600&q=80",
        coords: [52.3702, 4.8952]
      },
      {
        name: "Ice Village & Museumplein Christmas Market",
        type: "Holiday Market",
        desc: "Festive open-air ice rink surrounded by wooden chalets serving fresh Dutch stroopwafels, poffertjes, and warm spiced cider.",
        image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=600&q=80",
        coords: [52.3579, 4.8828]
      },
      {
        name: "The Jordaan & Nine Streets (De Negen Straatjes)",
        type: "Charming Neighborhood",
        desc: "Quintessential Amsterdam stroll with quaint bridges, boutique shops, and cozy candlelit bruin cafés.",
        image: "https://images.unsplash.com/photo-1584003564911-a7a321c84e1c?auto=format&fit=crop&w=600&q=80",
        coords: [52.3738, 4.8820]
      }
    ]
  },
  {
    id: "cologne",
    name: "Cologne (Köln)",
    country: "Germany",
    dates: "19–21 Dec 2026 (2 Nights)",
    coords: [50.9375, 6.9603],
    badgeClass: "badge-de",
    category: "Gothic Splendor & Winter Markets",
    heroImage: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80",
    description: "Dominated by the twin spires of the High Gothic Cathedral and world-renowned for having some of Germany's most enchanting Christmas markets.",
    mustVisitSites: [
      {
        name: "Cologne Cathedral (Kölner Dom)",
        type: "UNESCO World Heritage Landmark",
        desc: "Monumental Gothic cathedral housing the Shrine of the Three Kings, towering 157 meters over the Rhine River.",
        image: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=600&q=80",
        coords: [50.9413, 6.9583]
      },
      {
        name: "Weihnachtsmarkt am Kölner Dom & Heinzels Wintermärchen",
        type: "Fairytale Christmas Market",
        desc: "Dramatic holiday market directly under the illuminated cathedral spires and the gnome-themed fairytale market in Alter Markt.",
        image: "https://images.unsplash.com/photo-1543257580-7269da773bf5?auto=format&fit=crop&w=600&q=80",
        coords: [50.9380, 6.9565]
      },
      {
        name: "Lindt Chocolate Museum (Schokoladenmuseum)",
        type: "Culinary Experience",
        desc: "Located on a peninsula right along the Rhine with a 3-meter-tall golden chocolate fountain offering freshly dipped warm waffles.",
        image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=600&q=80",
        coords: [50.9322, 6.9642]
      },
      {
        name: "Hohenzollern Bridge & Old Town Altstadt",
        type: "Scenic Walk & Brauhaus",
        desc: "Famous railway footbridge with thousands of love padlocks, leading to traditional brewery taverns serving freshly poured Kölsch.",
        image: "https://images.unsplash.com/photo-1587330979470-3595ac045ab0?auto=format&fit=crop&w=600&q=80",
        coords: [50.9412, 6.9647]
      }
    ]
  },
  {
    id: "strasbourg-colmar",
    name: "Strasbourg & Colmar (Alsace)",
    country: "France",
    dates: "22–24 Dec 2026 (2 Nights Base)",
    coords: [48.5734, 7.7521],
    badgeClass: "badge-fr",
    category: "Capital of Christmas & Fairytale Towns",
    heroImage: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    description: "The fairytale borderland between France and Germany. Strasbourg is celebrated worldwide as the 'Capital of Christmas' (*Capitale de Noël*), paired with romantic Colmar.",
    mustVisitSites: [
      {
        name: "Strasbourg Place Kléber & Great Christmas Tree",
        type: "Capitale de Noël",
        desc: "The towering 30-meter authentic illuminated fir tree at Place Kléber and the historic Christkindelsmärik around the pink sandstone Cathedral.",
        image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80",
        coords: [48.5839, 7.7455]
      },
      {
        name: "Colmar Petite Venise (Little Venice)",
        type: "Fairytale Half-Timbered Canals",
        desc: "Gingerbread-like pastel half-timbered houses reflecting in quiet canals, draped with sparkling holiday garlands and fairy lights.",
        image: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&w=600&q=80",
        coords: [48.0769, 7.3558]
      },
      {
        name: "Petite France & Covered Bridges (Ponts Couverts)",
        type: "Historic District",
        desc: "Medieval tanners' quarter surrounded by the Ill River canals, weeping willows, and ancient stone watchtowers.",
        image: "https://images.unsplash.com/photo-1584646098378-0874589d76b1?auto=format&fit=crop&w=600&q=80",
        coords: [48.5797, 7.7399]
      }
    ]
  },
  {
    id: "zurich",
    name: "Zurich",
    country: "Switzerland",
    dates: "24 Dec & 28 Dec 2026",
    coords: [47.3769, 8.5417],
    badgeClass: "badge-ch",
    category: "Swiss City & CLOY Opening Scene",
    heroImage: "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?auto=format&fit=crop&w=800&q=80",
    description: "Nestled along Lake Zurich and the Limmat River, featuring medieval spires, luxury shopping, and iconic film viewpoints.",
    mustVisitSites: [
      {
        name: "Lindenhof Hill (CLOY Opening Credits)",
        type: "Iconic Drama Location",
        desc: "The elevated hilltop park overlooking the Old Town where Captain Ri Jeong-hyeok and Yoon Se-ri pass by each other in the famous opening sequence.",
        image: "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?auto=format&fit=crop&w=600&q=80",
        coords: [47.3730, 8.5405]
      },
      {
        name: "Münsterbrücke & Grossmünster",
        type: "Historic Center",
        desc: "The scenic stone bridge over the Limmat River connecting the twin towers of Grossmünster and Fraumünster church.",
        image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=600&q=80",
        coords: [47.3697, 8.5425]
      },
      {
        name: "Lake Zurich Promenade & Bahnhofstrasse",
        type: "Scenic Stroll & Shopping",
        desc: "Lakeside strolls gazing toward the snowy Alps, Swiss artisan chocolate houses (Sprüngli, Lindt), and Christmas illuminations.",
        image: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?auto=format&fit=crop&w=600&q=80",
        coords: [47.3667, 8.5414]
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
    heroImage: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80",
    description: "A tranquil fishing village along the vibrant turquoise waters of Lake Brienz, home to the most emotionally memorable scene in Crash Landing on You.",
    mustVisitSites: [
      {
        name: "Iseltwald Landing Stage (Captain Ri's Piano)",
        type: "CLOY Signature Scene",
        desc: "The wooden landing dock where Captain Ri played his heartfelt song for his brother on the grand piano while Se-ri listened from the ferry.",
        image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=600&q=80",
        coords: [46.7105, 7.9635]
      },
      {
        name: "Seeburg Castle & Lake Brienz Promenade",
        type: "Scenic Lakeside Nature",
        desc: "Fairytale lakeside peninsula with Seeburg Castle backdropped by steep snow-dusted Alpine peaks and mirror-still turquoise waters.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
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
    heroImage: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=800&q=80",
    description: "Perched high above Lake Thun in the Bernese Oberland, offering awe-inspiring panoramas of Mount Niesen and the high Alps.",
    mustVisitSites: [
      {
        name: "Panoramabrücke Sigriswil (CLOY Bridge Scene)",
        type: "Suspension Bridge Landmark",
        desc: "The 340-meter-long suspension bridge hanging 182 meters over Gummischlucht gorge where Jeong-hyeok asked Se-ri to take a photo of him and Seo Dan.",
        image: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=600&q=80",
        coords: [46.7190, 7.7210]
      },
      {
        name: "Lake Thun Panorama & Spiez Castle",
        type: "Alpine Views",
        desc: "Sweeping views of Lake Thun framed by the pyramid-shaped Mount Niesen and charming mountain chalets.",
        image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=600&q=80",
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
    heroImage: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=80",
    description: "The world-famous glacier village in the shadow of the mighty Eiger North Face, covered in deep winter snow.",
    mustVisitSites: [
      {
        name: "Grindelwald First & Cliff Walk",
        type: "CLOY Paragliding & Reunion Vista",
        desc: "Gondola ride up to 2,168 meters for the exhilarating metal walkway clinging to the mountain face with 360-degree views of the Eiger.",
        image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=600&q=80",
        coords: [46.6590, 8.0645]
      },
      {
        name: "Schreckfeld & Kleine Scheidegg Panorama",
        type: "Alpine Wonder",
        desc: "Snow-covered ski slopes and iconic wooden mountain chalets where Se-ri and Captain Ri famously cross paths in Switzerland.",
        image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=600&q=80",
        coords: [46.5851, 7.9612]
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
    heroImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
    description: "The crown jewel of the journey: 5 full nights ringing in the New Year 2027 amidst world-famous art, romantic boulevards, and royal history.",
    mustVisitSites: [
      {
        name: "Eiffel Tower & New Year's Eve on Champs-Élysées",
        type: "World Wonder & NYE 2027",
        desc: "Witness the sparkling golden lights of the Eiffel Tower from Trocadéro and join thousands celebrating the countdown at the Arc de Triomphe.",
        image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=600&q=80",
        coords: [48.8584, 2.2945]
      },
      {
        name: "Musée du Louvre & Tuileries Garden",
        type: "Masterpiece Museum",
        desc: "Marvel at the Mona Lisa, Venus de Milo, and the Winged Victory of Samothrace inside the former royal fortress palace.",
        image: "https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=600&q=80",
        coords: [48.8606, 2.3376]
      },
      {
        name: "Palace of Versailles (Château de Versailles)",
        type: "UNESCO Royal Estate Excursion",
        desc: "Tour the breathtaking Hall of Mirrors, the King's Grand Apartments, and walk the grand royal gardens of the Sun King Louis XIV.",
        image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=600&q=80",
        coords: [48.8049, 2.1204]
      },
      {
        name: "Montmartre & Basilique du Sacré-Cœur",
        type: "Bohemian Hilltop",
        desc: "Climb the steps to Sacré-Cœur for panoramic views over Paris, wander artists' Place du Tertre, and discover hidden cobbled alleys.",
        image: "https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?auto=format&fit=crop&w=600&q=80",
        coords: [48.8867, 2.3431]
      },
      {
        name: "Seine River Cruise & Galeries Lafayette Holiday Dome",
        type: "Festive Splendor",
        desc: "Cruise past Notre-Dame and illuminated bridges, then admire the giant animated Christmas tree beneath the stained-glass dome at Haussmann.",
        image: "https://images.unsplash.com/photo-1520939817895-060bdaf4fe1b?auto=format&fit=crop&w=600&q=80",
        coords: [48.8530, 2.3499]
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
    itineraryMatch: "Days 2–4: Amsterdam Stay (16–18 Dec 2026)",
    distanceFromStop: "45–50 mins from Amsterdam Centraal via Dutch NS rail",
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
    itineraryMatch: "Days 7–8: Cologne ➔ Frankfurt ➔ Kehl/Strasbourg (21–22 Dec 2026)",
    distanceFromStop: "20 km north of Frankfurt am Main (along the travel route towards Alsace)",
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
// Google Maps Tile Layers
const googleLayers = {
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

const DETAIL_ZOOM = window.innerWidth <= 768 ? 9 : 10;
let isProgrammaticZoom = false;
let currentLayer = 'roadmap';

// Itinerary overview metadata for the top navigation bar
const itineraryOverview = [
  { id: "london", flag: "🇬🇧", shortName: "London & Southampton", shortDates: "12–15 Dec" },
  { id: "amsterdam", flag: "🇳🇱", shortName: "Amsterdam", shortDates: "16–18 Dec" },
  { id: "cologne", flag: "🇩🇪", shortName: "Cologne", shortDates: "19–21 Dec" },
  { id: "strasbourg-colmar", flag: "🇫🇷", shortName: "Strasbourg & Colmar", shortDates: "22–24 Dec" },
  { id: "zurich", flag: "🇨🇭", shortName: "Zurich", shortDates: "24 & 28 Dec" },
  { id: "iseltwald", flag: "🇨🇭", shortName: "Iseltwald", shortDates: "25 Dec" },
  { id: "sigriswil", flag: "🇨🇭", shortName: "Sigriswil", shortDates: "26 Dec" },
  { id: "grindelwald", flag: "🇨🇭", shortName: "Grindelwald", shortDates: "27 Dec" },
  { id: "paris", flag: "🇫🇷", shortName: "Paris & Versailles", shortDates: "29 Dec – 03 Jan" }
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
      markers[index].openPopup();
    }
    isProgrammaticZoom = false;
  }, 650);

  setActiveItineraryStop(index);
}

// Highlight the corresponding chip in the top itinerary overview bar
function setActiveItineraryStop(index) {
  const chips = document.querySelectorAll('.itinerary-stop-chip');
  chips.forEach((chip, i) => {
    const isActive = (i === index);
    chip.classList.toggle('active', isActive);
    if (isActive) {
      chip.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  });
}

// Render the top itinerary overview bar
function renderItineraryNavBar() {
  const bar = document.getElementById('itineraryNavBar');
  if (!bar) return;
  bar.innerHTML = '';

  destinationData.forEach((dest, index) => {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = `itinerary-stop-chip ${index === 0 ? 'active' : ''}`;
    chip.setAttribute('data-index', index);
    chip.setAttribute('title', `Click to focus map on ${dest.name}`);

    const color = getCountryColor(dest.country);
    const flag = dest.flag || '📍';
    const shortName = dest.shortName || dest.name;
    const shortDates = dest.shortDates || dest.dates.split('(')[0].trim();

    chip.innerHTML = `
      <span class="itinerary-step-num" style="background: ${color};">${index + 1}</span>
      <div class="itinerary-stop-text">
        <span class="itinerary-stop-title">${flag} ${shortName}</span>
        <span class="itinerary-stop-sub">${shortDates} · ${dest.country}</span>
      </div>
    `;

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
  });
}

function initMap() {
  map = L.map('leafletMap', {
    scrollWheelZoom: true, // Allow smooth wheel zooming on computer
    tap: false,
    zoomControl: true
  }).setView(DEFAULT_CENTER, DEFAULT_ZOOM);
  window.map = map;

  // Add initial Google Roadmap layer
  googleLayers[currentLayer].addTo(map);

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
      const sightPopupHtml = `
        <div class="sight-star-popup">
          <div class="sight-star-thumb-wrap">
            <img src="${site.image}" alt="${site.name}" class="sight-star-thumb" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=400&q=80'" />
            <span class="sight-star-badge" style="background: ${color};">${dest.name}</span>
          </div>
          <div class="sight-star-content">
            <div class="sight-star-type">${site.type}</div>
            <h4 class="sight-star-title">${site.name}</h4>
            <p class="sight-star-desc">${site.desc}</p>
          </div>
        </div>
      `;

      starMarker.bindPopup(sightPopupHtml, {
        maxWidth: 240,
        minWidth: 210,
        autoPanPadding: [15, 15],
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

    const templePopupHtml = `
      <div class="sight-star-popup lds-temple-popup">
        <button type="button" class="popup-custom-close" aria-label="Close" onclick="if(window.map){window.map.closePopup();}">✕</button>
        <div class="sight-star-thumb-wrap temple-thumb-wrap">
          <img src="${temple.image}" alt="${temple.name}" class="sight-star-thumb" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1548625361-197e411b7470?auto=format&fit=crop&w=400&q=80'" />
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
        </div>
      </div>
    `;

    templeMarker.bindPopup(templePopupHtml, {
      maxWidth: 270,
      minWidth: 240,
      autoPanPadding: [15, 15],
      className: 'custom-sight-popup custom-temple-popup'
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
        <img src="${s.image}" alt="${s.name}" class="popup-site-thumb" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=400&q=80'" />
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
          <img src="${dest.heroImage}" alt="${dest.name}" class="popup-hero-img" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80'" />
          <span class="popup-country-tag ${dest.badgeClass}">${dest.country}</span>
        </div>
        <div class="popup-body">
          <div class="popup-dates">${dest.dates}</div>
          <h3 class="popup-title">${dest.name}</h3>
          
          <div class="popup-sites-title">⭐ Key Sights (starred on map):</div>
          <div class="popup-sites-list">
            ${sightsListHtml}
          </div>
        </div>
      </div>
    `;

    marker.bindPopup(popupHtml, {
      maxWidth: window.innerWidth <= 480 ? 250 : 280,
      minWidth: window.innerWidth <= 480 ? 230 : 260,
      autoPanPadding: [15, 15],
      closeButton: false, // We use our custom prominent close button
      className: 'custom-leaflet-popup'
    });

    // Zoom-in when clicking on the dot and sync with itinerary bar
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
    card.innerHTML = `
      <div class="dest-gallery-img-wrap">
        <img src="${dest.heroImage}" alt="${dest.name}" class="dest-gallery-img" loading="lazy">
        <span class="badge-country ${dest.badgeClass}">${dest.country}</span>
      </div>
      <div class="dest-gallery-content">
        <div class="dest-dates">${dest.dates}</div>
        <h3>${dest.name}</h3>
        <p class="dest-sub">${dest.category}</p>
        <p class="dest-desc">${dest.description}</p>
        
        <div class="dest-sights-label">Must-See Sights:</div>
        <div class="dest-sights-chips">
          ${dest.mustVisitSites.map(s => `<span class="site-chip" title="${s.desc}">${s.name}</span>`).join('')}
        </div>
        
        <button class="btn btn-sm-map" data-index="${index}">
          📍 Locate on Map & View Sights
        </button>
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
      templeMarkers[templeIndex].openPopup();
    }
    isProgrammaticZoom = false;
  }, 750);
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

// Render LDS Temples Showcase Grid
function renderTemplesGrid() {
  const grid = document.getElementById('templesGrid');
  if (!grid) return;
  grid.innerHTML = '';

  ldsTemplesData.forEach(temple => {
    const card = document.createElement('div');
    card.className = 'temple-card';
    card.innerHTML = `
      <div class="temple-img-wrap">
        <img src="${temple.image}" alt="${temple.name}" class="temple-img" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1548625361-197e411b7470?auto=format&fit=crop&w=600&q=80'">
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
    day: "Day 1",
    date: "15 Dec 2026",
    city: "London ➔ Amsterdam",
    country: "Transit",
    badgeClass: "badge-transit",
    cardHighlight: "highlight-transit",
    title: "Departure Across the Channel",
    activities: "Board FlixBus N824 at London Victoria Coach Station at 10:00 pm. Overnight coach transit across the English Channel to the Netherlands.",
    stayTitle: "FlixBus N824",
    stayDesc: "Overnight Sleeper Coach",
    coords: [51.5074, -0.1278]
  },
  {
    day: "Day 2",
    date: "16 Dec 2026",
    city: "Amsterdam",
    country: "Netherlands",
    badgeClass: "badge-nl",
    cardHighlight: "highlight-nl",
    title: "Canals & Amsterdam Light Festival",
    activities: "Arrive at Amsterdam Centraal at 10:25 am. Hotel check-in. Evening walking tour of the Amsterdam Light Festival illuminating historic bridges.",
    stayTitle: "Amsterdam Hostel Leidseplein",
    stayDesc: "Leidseplein, Amsterdam",
    coords: [52.3676, 4.9041]
  },
  {
    day: "Day 3",
    date: "17 Dec 2026",
    city: "Amsterdam",
    country: "Netherlands",
    badgeClass: "badge-nl",
    cardHighlight: "highlight-nl",
    title: "Dutch Masters & Ice Village",
    activities: "Morning cultural visit to the Rijksmuseum (Rembrandt, Vermeer). Afternoon enjoying the festive Ice Village Christmas Market at Museumplein. (Nearby LDS Temple: The Hague Netherlands Temple in Zoetermeer is accessible in ~45m by NS train from Amsterdam Centraal).",
    stayTitle: "Amsterdam Hostel Leidseplein",
    stayDesc: "Leidseplein, Amsterdam",
    coords: [52.3599, 4.8852]
  },
  {
    day: "Day 4",
    date: "18 Dec 2026",
    city: "Amsterdam",
    country: "Netherlands",
    badgeClass: "badge-nl",
    cardHighlight: "highlight-nl",
    title: "Historic Canals & Departure",
    activities: "Daytime canal boat cruise through the UNESCO ring. Stroll Jordaan and Nine Streets. Pack and head to Amsterdam Sloterdijk for midnight FlixBus departure.",
    stayTitle: "Amsterdam Hostel Leidseplein",
    stayDesc: "Late Checkout / Sloterdijk Transit",
    coords: [52.3702, 4.8952]
  },
  {
    day: "Day 5",
    date: "19 Dec 2026",
    city: "Cologne",
    country: "Germany",
    badgeClass: "badge-de",
    cardHighlight: "highlight-de",
    title: "Rhine & Lindt Chocolate Museum",
    activities: "FlixBus arrives at Cologne Airport at 04:40 am. S-Bahn train into city center. Check in at Hotel Innception. Visit the Lindt Chocolate Museum.",
    stayTitle: "Hotel Innception",
    stayDesc: "Hohenzollernring, Cologne",
    coords: [50.9375, 6.9603]
  },
  {
    day: "Day 6",
    date: "20 Dec 2026",
    city: "Cologne",
    country: "Germany",
    badgeClass: "badge-de",
    cardHighlight: "highlight-de",
    title: "Cologne Cathedral & Winter Markets",
    activities: "Marvel at the Cologne Cathedral (Kölner Dom). Tour the grand Cathedral Christmas Market & Heinzels Wintermärchen Market in the Old Town.",
    stayTitle: "Hotel Innception",
    stayDesc: "Hohenzollernring, Cologne",
    coords: [50.9413, 6.9583]
  },
  {
    day: "Day 7",
    date: "21 Dec 2026",
    city: "Cologne ➔ Kehl",
    country: "Transit",
    badgeClass: "badge-transit",
    cardHighlight: "highlight-transit",
    title: "Belgisches Viertel & Night Coach",
    activities: "Check out by 12:00 pm. Explore the trendy Belgian Quarter. Late night transfer to Cologne Airport for 02:20 am overnight FlixBus to Kehl.",
    stayTitle: "FlixBus Overnight",
    stayDesc: "Transfer via Frankfurt",
    coords: [50.9333, 6.9333]
  },
  {
    day: "Day 8",
    date: "22 Dec 2026",
    city: "Kehl & Strasbourg",
    country: "France",
    badgeClass: "badge-fr",
    cardHighlight: "highlight-france",
    title: "Strasbourg: Capital of Christmas",
    activities: "Arrive in Kehl at 09:15 am. Check into B&B Hotel. Hop on the cross-border Strasbourg Tram into France. View the iconic Great Tree at Place Kléber & historic Christkindelsmärik.",
    stayTitle: "B&B Hotel Kehl",
    stayDesc: "15 Allensteiner Str., 77694 Kehl",
    coords: [48.5734, 7.7521]
  },
  {
    day: "Day 9",
    date: "23 Dec 2026",
    city: "Colmar",
    country: "France",
    badgeClass: "badge-fr",
    cardHighlight: "highlight-france",
    title: "Fairytale Petite Venise",
    activities: "30-minute TER regional train excursion to fairytale Colmar. Explore illuminated half-timbered houses, canal bridges, and Christmas market stalls.",
    stayTitle: "B&B Hotel Kehl",
    stayDesc: "15 Allensteiner Str., 77694 Kehl",
    coords: [48.0794, 7.3585]
  },
  {
    day: "Day 10",
    date: "24 Dec 2026",
    city: "Zurich",
    country: "Switzerland",
    badgeClass: "badge-ch",
    cardHighlight: "highlight-swiss",
    title: "Alps Transit & Lindenhof CLOY",
    activities: "Scenic morning train into Switzerland via Basel & Bern. Explore Zurich Altstadt, Münsterbrücke, and Lindenhof hill viewpoint (CLOY opening sequence). (Nearby LDS Temple: Bern Switzerland Temple in Zollikofen is directly on the mainline rail route, 9 mins from Bern HB).",
    stayTitle: "Swiss Alps Base",
    stayDesc: "Zurich / Interlaken TBD (4 Nights)",
    coords: [47.3769, 8.5417]
  },
  {
    day: "Day 11",
    date: "25 Dec 2026",
    city: "Lake Brienz (Iseltwald)",
    country: "Switzerland",
    badgeClass: "badge-ch",
    cardHighlight: "highlight-swiss",
    title: "CLOY Piano Pier at Iseltwald",
    activities: "Christmas in the Alps: Excursion to Lake Brienz and the famous lakeside piano landing stage in Iseltwald where Captain Ri played his song.",
    stayTitle: "Swiss Alps Base",
    stayDesc: "Zurich / Interlaken TBD",
    coords: [46.7118, 7.9622]
  },
  {
    day: "Day 12",
    date: "26 Dec 2026",
    city: "Sigriswil",
    country: "Switzerland",
    badgeClass: "badge-ch",
    cardHighlight: "highlight-swiss",
    title: "CLOY Panorama Suspension Bridge",
    activities: "Day trip to Lake Thun and the breathtaking Sigriswil Panoramic Suspension Bridge with stunning views across the Bernese Alps.",
    stayTitle: "Swiss Alps Base",
    stayDesc: "Zurich / Interlaken TBD",
    coords: [46.7167, 7.7167]
  },
  {
    day: "Day 13",
    date: "27 Dec 2026",
    city: "Grindelwald",
    country: "Switzerland",
    badgeClass: "badge-ch",
    cardHighlight: "highlight-swiss",
    title: "Grindelwald First & Alpine Peaks",
    activities: "Ride the gondola up to First Flieger in Grindelwald (CLOY reunion setting). Experience the cliff walk and snowy Swiss Alpine vistas.",
    stayTitle: "Swiss Alps Base",
    stayDesc: "Zurich / Interlaken TBD",
    coords: [46.6242, 8.0414]
  },
  {
    day: "Day 14",
    date: "28 Dec 2026",
    city: "Zurich ➔ Paris",
    country: "Transit",
    badgeClass: "badge-transit",
    cardHighlight: "highlight-transit",
    title: "Lake Zurich & Overnight Sleeper",
    activities: "Final day in Zurich. Lakeside promenade walk and chocolate tasting. Board 09:00 pm overnight FlixBus sleeper direct to Paris Bercy.",
    stayTitle: "FlixBus Overnight",
    stayDesc: "Direct to Paris Bercy Seine",
    coords: [47.3686, 8.5432]
  },
  {
    day: "Day 15",
    date: "29 Dec 2026",
    city: "Paris",
    country: "France",
    badgeClass: "badge-fr",
    cardHighlight: "highlight-france",
    title: "Arrival & Montmartre Sacré-Cœur",
    activities: "Arrive at Paris Bercy at 06:40 am. Drop bags at hotel. Ascend the steps to Sacré-Cœur basilica in Montmartre, explore Place du Tertre.",
    stayTitle: "Break & Home Paris Italie",
    stayDesc: "Porte de Choisy, Paris",
    coords: [48.8867, 2.3431]
  },
  {
    day: "Day 16",
    date: "30 Dec 2026",
    city: "Paris",
    country: "France",
    badgeClass: "badge-fr",
    cardHighlight: "highlight-france",
    title: "Louvre Museum & Galeries Lafayette",
    activities: "Morning cultural immersion at the Musée du Louvre (Mona Lisa, Winged Victory). Afternoon at Galeries Lafayette holiday dome & rooftop terrace.",
    stayTitle: "Break & Home Paris Italie",
    stayDesc: "Porte de Choisy, Paris",
    coords: [48.8606, 2.3376]
  },
  {
    day: "Day 17",
    date: "31 Dec 2026",
    city: "Paris (NYE)",
    country: "France",
    badgeClass: "badge-fr",
    cardHighlight: "highlight-france",
    title: "Eiffel Tower & New Year's Eve",
    activities: "Eiffel Tower & Trocadéro viewpoints. Ring in 2027 during the grand midnight celebration on the Champs-Élysées with illuminated projections.",
    stayTitle: "Break & Home Paris Italie",
    stayDesc: "Porte de Choisy, Paris",
    coords: [48.8584, 2.2945]
  },
  {
    day: "Day 18",
    date: "01 Jan 2027",
    city: "Paris",
    country: "France",
    badgeClass: "badge-fr",
    cardHighlight: "highlight-france",
    title: "New Year's Day & Seine Cruise",
    activities: "Peaceful morning walk through the historic Luxembourg Gardens and Latin Quarter. Evening illuminated Seine River Dinner Cruise.",
    stayTitle: "Break & Home Paris Italie",
    stayDesc: "Porte de Choisy, Paris",
    coords: [48.8462, 2.3372]
  },
  {
    day: "Day 19",
    date: "02 Jan 2027",
    city: "Versailles",
    country: "France",
    badgeClass: "badge-fr",
    cardHighlight: "highlight-france",
    title: "Royal Palace of Versailles",
    activities: "Full-day excursion via RER Line C to the royal Palace of Versailles. Tour the magnificent Hall of Mirrors and Royal Gardens. (Proximity Highlight: The Paris France Temple in Le Chesnay is located just 2.2 km / ~5 mins from the Palace of Versailles).",
    stayTitle: "Break & Home Paris Italie",
    stayDesc: "Porte de Choisy, Paris",
    coords: [48.8049, 2.1204]
  },
  {
    day: "Day 20",
    date: "03 Jan 2027",
    city: "Paris ➔ London",
    country: "Transit",
    badgeClass: "badge-transit",
    cardHighlight: "highlight-transit",
    title: "Schengen Exit via Paris Bercy",
    activities: "Final souvenir shopping in Le Marais. Pick up luggage and board the 11:00 pm FlixBus at Paris Bercy to return to London.",
    stayTitle: "FlixBus Overnight",
    stayDesc: "Paris Bercy ➔ London Victoria",
    coords: [48.8398, 2.3783]
  },
  {
    day: "Day 21",
    date: "04 Jan 2027",
    city: "London",
    country: "United Kingdom",
    badgeClass: "badge-uk",
    cardHighlight: "highlight-uk",
    title: "Arrival Back in UK",
    activities: "Arrive at London Victoria Coach Station at 07:25 am. Return to the Southampton residence for remainder of UK stay. (Nearby LDS Temple: London England Temple in Newchapel, Surrey is located south of London along the travel corridor towards Southampton).",
    stayTitle: "UK Residence",
    stayDesc: "Southampton, United Kingdom",
    coords: [50.9097, -1.4044]
  }
];

// Render Timeline List
function renderTimeline(filter = 'all') {
  const container = document.getElementById('timelineContainer');
  if (!container) return;
  container.innerHTML = '';

  itineraryData.forEach((item, index) => {
    if (filter !== 'all') {
      if (filter === 'France' && item.country !== 'France') return;
      if (filter === 'Switzerland' && item.country !== 'Switzerland') return;
      if (filter === 'Netherlands' && item.country !== 'Netherlands') return;
      if (filter === 'Germany' && item.country !== 'Germany') return;
      if (filter === 'Transit' && item.country !== 'Transit') return;
    }

    const card = document.createElement('div');
    card.className = `day-card ${item.cardHighlight}`;
    card.innerHTML = `
      <div class="col-date">
        <div class="day-num">${item.day}</div>
        <div class="date-str">${item.date}</div>
      </div>
      <div class="col-loc">
        <div class="loc-name">${item.city}</div>
        <span class="badge-country ${item.badgeClass}">${item.country}</span>
      </div>
      <div class="col-activities">
        <h4>${item.title}</h4>
        <p>${item.activities}</p>
      </div>
      <div class="col-stay">
        <div class="stay-title">🏨 ${item.stayTitle}</div>
        <div class="stay-desc">${item.stayDesc}</div>
      </div>
    `;

    card.addEventListener('click', () => {
      const mapElem = document.getElementById('interactiveMap');
      if (mapElem) {
        mapElem.scrollIntoView({ behavior: 'smooth' });
      }
      isProgrammaticZoom = true;
      map.flyTo(item.coords, DETAIL_ZOOM, { duration: 1.0 });
      
      // Find matching destination marker
      const destIndex = destinationData.findIndex(d => 
        item.city.toLowerCase().includes(d.name.toLowerCase().split(' ')[0]) || 
        d.name.toLowerCase().includes(item.city.toLowerCase())
      );
      if (destIndex !== -1) {
        setActiveItineraryStop(destIndex);
        setTimeout(() => {
          if (markers[destIndex]) {
            markers[destIndex].openPopup();
          }
          isProgrammaticZoom = false;
        }, 800);
      } else {
        setTimeout(() => {
          isProgrammaticZoom = false;
        }, 800);
      }
    });

    container.appendChild(card);
  });
}

// Filter button handlers
document.addEventListener('DOMContentLoaded', () => {
  initMap();
  renderItineraryNavBar();
  renderDestinationsGrid();
  renderTemplesGrid();
  renderTimeline('all');

  // Map Layer Switcher (Google Roadmap, Terrain, Satellite)
  const layerBtns = document.querySelectorAll('.layer-btn');
  layerBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // If it's the temple toggle button, handle separately
      if (btn.id === 'templeToggleBtn') {
        toggleTemplesLayer();
        return;
      }

      const layerType = btn.getAttribute('data-layer');
      if (layerType === currentLayer || !googleLayers[layerType]) return;

      // Swap active layer
      map.removeLayer(googleLayers[currentLayer]);
      googleLayers[layerType].addTo(map);
      currentLayer = layerType;

      // Update button state (only for layer buttons, not temple toggle)
      document.querySelectorAll('.layer-btn[data-layer]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Temple toggle button event
  const templeBtn = document.getElementById('templeToggleBtn');
  if (templeBtn) {
    templeBtn.addEventListener('click', () => {
      toggleTemplesLayer();
    });
  }

  // Itinerary Filter buttons
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filterVal = btn.getAttribute('data-filter');
      renderTimeline(filterVal);
    });
  });
});
