// 21-Day Trip Data
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
    stayDesc: "Leidseplein, Amsterdam (Avery Belleza)",
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
    stayDesc: "Porte de Choisy (Jean Aquino)",
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
    activities: "Arrive at London Victoria Coach Station at 07:25 am. Rejoin family and Aunt Maria at the Southampton residence for remainder of UK stay.",
    stayTitle: "UK Family Residence",
    stayDesc: "Southampton, United Kingdom",
    coords: [50.9097, -1.4044]
  }
];

// Initialize Leaflet Map
let map;
let markers = [];
let routeLine;

function initMap() {
  map = L.map('leafletMap', {
    scrollWheelZoom: false
  }).setView([48.8566, 4.3517], 5);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19
  }).addTo(map);

  const latlngs = [];

  itineraryData.forEach((item, index) => {
    latlngs.push(item.coords);

    // Custom marker icon based on country
    const marker = L.circleMarker(item.coords, {
      radius: 7,
      fillColor: getCountryColor(item.country),
      color: '#ffffff',
      weight: 2,
      opacity: 1,
      fillOpacity: 0.9
    }).addTo(map);

    marker.bindPopup(`
      <div style="font-family: 'Plus Jakarta Sans', sans-serif; min-width: 180px;">
        <div style="font-size: 11px; font-weight: 700; color: #2563eb;">${item.day} · ${item.date}</div>
        <div style="font-size: 14px; font-weight: 800; color: #0f172a; margin: 2px 0;">${item.city}</div>
        <div style="font-size: 12px; color: #64748b;">${item.title}</div>
      </div>
    `);

    markers.push(marker);
  });

  // Draw itinerary polyline
  routeLine = L.polyline(latlngs, {
    color: '#3b82f6',
    weight: 3,
    opacity: 0.7,
    dashArray: '6, 8',
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

// Render Timeline List
function renderTimeline(filter = 'all') {
  const container = document.getElementById('timelineContainer');
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
      map.flyTo(item.coords, 10, { duration: 1.2 });
      markers[index].openPopup();
    });

    container.appendChild(card);
  });
}

// Filter button handlers
document.addEventListener('DOMContentLoaded', () => {
  initMap();
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
