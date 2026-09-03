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
        image: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Southampton Historic Waterfront & Old Town",
        type: "Holiday Base",
        desc: "Cozy holiday base in Hampshire, historic medieval city walls, and seaside docks.",
        image: "https://images.unsplash.com/photo-1589802829985-817e51171b92?auto=format&fit=crop&w=600&q=80"
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
        image: "https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Amsterdam Light Festival & UNESCO Canals",
        type: "Seasonal Highlight",
        desc: "Magical illuminated art installations suspended over romantic bridges and reflecting upon the canal waters.",
        image: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Ice Village & Museumplein Christmas Market",
        type: "Holiday Market",
        desc: "Festive open-air ice rink surrounded by wooden chalets serving fresh Dutch stroopwafels, poffertjes, and warm spiced cider.",
        image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "The Jordaan & Nine Streets (De Negen Straatjes)",
        type: "Charming Neighborhood",
        desc: "Quintessential Amsterdam stroll with quaint bridges, boutique shops, and cozy candlelit bruin cafés.",
        image: "https://images.unsplash.com/photo-1584003564911-a7a321c84e1c?auto=format&fit=crop&w=600&q=80"
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
        image: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Weihnachtsmarkt am Kölner Dom & Heinzels Wintermärchen",
        type: "Fairytale Christmas Market",
        desc: "Dramatic holiday market directly under the illuminated cathedral spires and the gnome-themed fairytale market in Alter Markt.",
        image: "https://images.unsplash.com/photo-1543257580-7269da773bf5?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Lindt Chocolate Museum (Schokoladenmuseum)",
        type: "Culinary Experience",
        desc: "Located on a peninsula right along the Rhine with a 3-meter-tall golden chocolate fountain offering freshly dipped warm waffles.",
        image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Hohenzollern Bridge & Old Town Altstadt",
        type: "Scenic Walk & Brauhaus",
        desc: "Famous railway footbridge with thousands of love padlocks, leading to traditional brewery taverns serving freshly poured Kölsch.",
        image: "https://images.unsplash.com/photo-1587330979470-3595ac045ab0?auto=format&fit=crop&w=600&q=80"
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
        image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Colmar Petite Venise (Little Venice)",
        type: "Fairytale Half-Timbered Canals",
        desc: "Gingerbread-like pastel half-timbered houses reflecting in quiet canals, draped with sparkling holiday garlands and fairy lights.",
        image: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Petite France & Covered Bridges (Ponts Couverts)",
        type: "Historic District",
        desc: "Medieval tanners' quarter surrounded by the Ill River canals, weeping willows, and ancient stone watchtowers.",
        image: "https://images.unsplash.com/photo-1584646098378-0874589d76b1?auto=format&fit=crop&w=600&q=80"
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
        image: "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Münsterbrücke & Grossmünster",
        type: "Historic Center",
        desc: "The scenic stone bridge over the Limmat River connecting the twin towers of Grossmünster and Fraumünster church.",
        image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Lake Zurich Promenade & Bahnhofstrasse",
        type: "Scenic Stroll & Shopping",
        desc: "Lakeside strolls gazing toward the snowy Alps, Swiss artisan chocolate houses (Sprüngli, Lindt), and Christmas illuminations.",
        image: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?auto=format&fit=crop&w=600&q=80"
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
        image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Seeburg Castle & Lake Brienz Promenade",
        type: "Scenic Lakeside Nature",
        desc: "Fairytale lakeside peninsula with Seeburg Castle backdropped by steep snow-dusted Alpine peaks and mirror-still turquoise waters.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
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
        image: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Lake Thun Panorama & Spiez Castle",
        type: "Alpine Views",
        desc: "Sweeping views of Lake Thun framed by the pyramid-shaped Mount Niesen and charming mountain chalets.",
        image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=600&q=80"
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
        image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Schreckfeld & Kleine Scheidegg Panorama",
        type: "Alpine Wonder",
        desc: "Snow-covered ski slopes and iconic wooden mountain chalets where Se-ri and Captain Ri famously cross paths in Switzerland.",
        image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=600&q=80"
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
        image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Musée du Louvre & Tuileries Garden",
        type: "Masterpiece Museum",
        desc: "Marvel at the Mona Lisa, Venus de Milo, and the Winged Victory of Samothrace inside the former royal fortress palace.",
        image: "https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Palace of Versailles (Château de Versailles)",
        type: "UNESCO Royal Estate Excursion",
        desc: "Tour the breathtaking Hall of Mirrors, the King's Grand Apartments, and walk the grand royal gardens of the Sun King Louis XIV.",
        image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Montmartre & Basilique du Sacré-Cœur",
        type: "Bohemian Hilltop",
        desc: "Climb the steps to Sacré-Cœur for panoramic views over Paris, wander artists' Place du Tertre, and discover hidden cobbled alleys.",
        image: "https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?auto=format&fit=crop&w=600&q=80"
      },
      {
        name: "Seine River Cruise & Galeries Lafayette Holiday Dome",
        type: "Festive Splendor",
        desc: "Cruise past Notre-Dame and illuminated bridges, then admire the giant animated Christmas tree beneath the stained-glass dome at Haussmann.",
        image: "https://images.unsplash.com/photo-1520939817895-060bdaf4fe1b?auto=format&fit=crop&w=600&q=80"
      }
    ]
  }
];

// Initialize Interactive Map with Smooth Zoom In/Out & Responsive Popups
let map;
let markers = [];
let routeLine;
const DEFAULT_CENTER = [48.2, 5.0];
const DEFAULT_ZOOM = window.innerWidth <= 768 ? 4 : 5;
const DETAIL_ZOOM = window.innerWidth <= 768 ? 9 : 10;
let isProgrammaticZoom = false;

function initMap() {
  map = L.map('leafletMap', {
    scrollWheelZoom: false,
    tap: false
  }).setView(DEFAULT_CENTER, DEFAULT_ZOOM);

  // High-contrast clean CartoDB Voyager map
  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19
  }).addTo(map);

  const latlngs = [];

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
      fillOpacity: 0.95
    }).addTo(map);

    // Build rich popup HTML with photography and bulleted sights
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
        <div class="popup-hero-wrap">
          <img src="${dest.heroImage}" alt="${dest.name}" class="popup-hero-img" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80'" />
          <span class="popup-country-tag ${dest.badgeClass}">${dest.country}</span>
        </div>
        <div class="popup-body">
          <div class="popup-dates">${dest.dates}</div>
          <h3 class="popup-title">${dest.name}</h3>
          <p class="popup-desc">${dest.description}</p>
          
          <div class="popup-sites-title">✨ Key Sights to Visit:</div>
          <div class="popup-sites-list">
            ${sightsListHtml}
          </div>
        </div>
      </div>
    `;

    marker.bindPopup(popupHtml, {
      maxWidth: window.innerWidth <= 480 ? 280 : 340,
      minWidth: window.innerWidth <= 480 ? 260 : 300,
      autoPanPadding: [20, 20],
      className: 'custom-leaflet-popup'
    });

    // Zoom-in when clicking on the dot
    marker.on('click', () => {
      isProgrammaticZoom = true;
      map.flyTo(dest.coords, DETAIL_ZOOM, {
        duration: 1.0,
        easeLinearity: 0.25
      });
      setTimeout(() => {
        isProgrammaticZoom = false;
      }, 1100);
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

  // Zoom back out to full European overview when popup/textbox is closed!
  map.on('popupclose', () => {
    if (!isProgrammaticZoom) {
      map.flyTo(DEFAULT_CENTER, DEFAULT_ZOOM, {
        duration: 1.1,
        easeLinearity: 0.25
      });
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
      isProgrammaticZoom = true;
      map.flyTo(dest.coords, DETAIL_ZOOM, { duration: 1.0 });
      setTimeout(() => {
        markers[index].openPopup();
        isProgrammaticZoom = false;
      }, 750);
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
    activities: "Morning cultural visit to the Rijksmuseum (Rembrandt, Vermeer). Afternoon enjoying the festive Ice Village Christmas Market at Museumplein.",
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
    activities: "Scenic morning train into Switzerland. Explore Zurich Altstadt, Münsterbrücke, and Lindenhof hill viewpoint (CLOY opening sequence location).",
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
    activities: "Full-day excursion via RER Line C to the royal Palace of Versailles. Tour the magnificent Hall of Mirrors and Royal Gardens.",
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
    activities: "Arrive at London Victoria Coach Station at 07:25 am. Return to the Southampton residence for remainder of UK stay.",
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
        d.name.toLowerCase().includes(item.city.toLowerCase().split(' ')[0])
      );
      if (destIndex !== -1 && markers[destIndex]) {
        setTimeout(() => {
          markers[destIndex].openPopup();
          isProgrammaticZoom = false;
        }, 750);
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
  renderDestinationsGrid();
  renderTimeline('all');

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
