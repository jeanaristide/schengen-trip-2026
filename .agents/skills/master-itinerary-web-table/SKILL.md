---
name: master-itinerary-web-table
description: >-
  Build, update, or style the Master Itinerary Table in an HTML website or web application. Implements a compact, responsive 4-column HTML table with interactive country filtering, embedded CSS culture badges, atomic activity bullet lists with underlined sites, GPS coordinate injection for Leaflet map markers, and build verification.
---

# Master Itinerary Web Table Skill

This skill governs the architecture, implementation, styling, and data synchronization of the **Master Itinerary Table** within HTML web applications, client dossiers, and travel portals.

Whenever the user requests creating, updating, compacting, or enhancing the itinerary table in an HTML site, this skill provides the definitive engineering and design standard.

---

## 1. Core Architectural Directives

1. **Compact Table-First Design (Card-Free)**:
   - When the user requests the master table format, the table serves as the primary visual display.
   - Deprecate or remove bulky legacy card views, card grid containers, and redundant view-switcher toggle buttons unless explicitly requested otherwise.
2. **Standard 4-Column Layout**:
   - The table must feature exactly four columns:
     1. `Day & Date`
     2. `Location`
     3. `Action / Activity`
     4. `Cost`
3. **Full Map & Data Synchronization**:
   - Every location listed in the itinerary data store must possess valid decimal GPS coordinates (`coords: [lat, lng]`).
   - Sights are plotted as country-colored SVG star markers on the interactive Leaflet map, linking back to Google Reviews.
4. **Pure White / Light Background Architecture**:
   - When requested or defaulted, itinerary websites must feature a clean, pure white background (`#ffffff`), crisp borders (`#e2e8f0`), and dark charcoal typography (`#0f172a`), strictly omitting dark mode toggles or extraneous sections (cards, print buttons) to maintain sole focus on the Master Itinerary Table.

---

## 2. HTML Table Structure

The table must reside inside a responsive container with horizontal scroll handling and ARIA accessibility attributes:

```html
<section class="itinerary-section" id="itinerarySection">
  <!-- Interactive Country Filter Pills -->
  <div class="itinerary-filter-bar">
    <button type="button" class="filter-btn active" data-filter="all">All (21 Days)</button>
    <button type="button" class="filter-btn" data-filter="France">France</button>
    <button type="button" class="filter-btn" data-filter="Switzerland">Switzerland</button>
    <button type="button" class="filter-btn" data-filter="Germany">Germany</button>
    <button type="button" class="filter-btn" data-filter="Netherlands">Netherlands</button>
    <button type="button" class="filter-btn" data-filter="United Kingdom">United Kingdom</button>
  </div>

  <!-- Responsive Master Table Wrapper -->
  <div class="table-responsive-wrapper">
    <table class="master-itinerary-table" id="masterItineraryTable">
      <thead>
        <tr>
          <th scope="col" style="width: 14%;">Day &amp; Date</th>
          <th scope="col" style="width: 24%;">Location</th>
          <th scope="col" style="width: 48%;">Action / Activity</th>
          <th scope="col" style="width: 14%;">Cost</th>
        </tr>
      </thead>
      <tbody id="itineraryTableBody">
        <!-- Rendered dynamically by JavaScript or static server-side HTML -->
      </tbody>
    </table>
  </div>
</section>
```

---

## 3. Cell Content & Styling Guidelines

### Column 1: Day & Date Cell
- Structure:
  ```html
  <td class="col-day-date">
    <div class="day-badge">Day 4</div>
    <div class="date-label">Fri 18 Dec 2026</div>
    <div class="country-pill pill-netherlands">Netherlands</div>
  </td>
  ```

### Column 2: Location & Cultural Badges Cell
- Exact places listed with country-colored pin dots or icons.
- **Cultural and Film Connection Badges** must be styled with distinct modern CSS pills:
  - **Taylor Swift**: `<span class="table-pin-culture-badge badge-swift">🎶 Taylor Swift: "Begin Again" Rooftop</span>`
  - **Beauty and the Beast**: `<span class="table-pin-culture-badge badge-disney">🏰 Beauty &amp; the Beast Inspiration</span>`
  - **Crash Landing on You**: `<span class="table-pin-culture-badge badge-cloy">🎬 Crash Landing on You: Lake Brienz</span>`
  - **LDS Temples**: `<span class="table-pin-culture-badge badge-temple">✨ Sacred LDS Temple Appointment</span>`

### Column 3: Action / Activity Cell
- **Atomic Bullet List**: Use `<ul class="activity-bullets">` where every action or visit is an independent `<li>`.
- **NO Morning / Afternoon / Evening headers**: Keep the sequence flat and readable.
- **Embedded Times**: Include departure, arrival, check-in, and session times directly in the text (e.g., `<span class="time-chip">09:10 AM</span>`).
- **Underlined Exact Places**: Wrap exact landmarks, lodgings, and transit hubs in `<u>...</u>`:
  ```html
  <li>Depart Amsterdam Centraal on NS Intercity train at 07:45 AM.</li>
  <li>Arrive at <u>The Hague Netherlands Temple</u> in Zoetermeer by 09:10 AM for the 09:30 AM endowment session.</li>
  <li>View Vermeer's "Girl with a Pearl Earring" at the <u>Mauritshuis</u>.</li>
  ```
- **Collapsible Deep Guides**: For extensive guides (such as NYE fireworks tips or special transit survival instructions), embed an inline collapsible disclosure:
  ```html
  <details class="itinerary-inline-details">
    <summary>🎆 Arc de Triomphe NYE Survival &amp; Fireworks Guide</summary>
    <div class="inline-details-body">
      <!-- Bulleted tactical tips -->
    </div>
  </details>
  ```

### Column 4: Cost Cell
- Itemized lines with dedicated styling tags:
  ```html
  <td class="col-cost">
    <div class="cost-item-list">
      <div class="cost-row"><span>NS Train:</span> <strong>€29.40</strong></div>
      <div class="cost-row"><span>Mauritshuis:</span> <strong>€19.00</strong></div>
      <div class="cost-row"><span>Temple Session:</span> <span class="cost-free">Free</span></div>
      <div class="cost-row"><span>Meals:</span> <strong>€14.50</strong></div>
    </div>
    <div class="cost-daily-total">Total: €62.90</div>
  </td>
  ```

---

## 4. CSS Design System Rules

Add or maintain these core CSS utility classes in `css/style.css`:

```css
/* Master Itinerary Table */
.master-itinerary-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  font-size: 0.88rem;
}

.master-itinerary-table th {
  background: #f8fafc;
  color: #334155;
  font-weight: 700;
  padding: 12px 16px;
  border-bottom: 2px solid #e2e8f0;
  text-align: left;
}

.master-itinerary-table td {
  padding: 14px 16px;
  border-bottom: 1px solid #f1f5f9;
  vertical-align: top;
}

/* Underlined Sites in Activity Bullets */
.activity-bullets li u {
  text-decoration: none;
  border-bottom: 1.5px solid #94a3b8;
  font-weight: 600;
  color: #0f172a;
  transition: border-color 0.2s ease;
}

.activity-bullets li u:hover {
  border-bottom-color: #2563eb;
  color: #1d4ed8;
}

/* Culture Badges */
.table-pin-culture-badge {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 6px;
  font-size: 0.72rem;
  font-weight: 700;
  line-height: 1.3;
  margin-top: 4px;
}

.badge-swift {
  background: #fdf2f8;
  color: #be185d;
  border: 1px solid #fbcfe8;
}

.badge-disney {
  background: #fffbeb;
  color: #b45309;
  border: 1px solid #fde68a;
}

.badge-cloy {
  background: #fef2f2;
  color: #b91c1c;
  border: 1px solid #fecaca;
}

.badge-temple {
  background: #fff7ed;
  color: #c2410c;
  border: 1px solid #ffedd5;
}

/* Collapsible Inline Details */
.itinerary-inline-details {
  margin-top: 10px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background: #f8fafc;
  padding: 6px 10px;
}

.itinerary-inline-details summary {
  cursor: pointer;
  font-weight: 700;
  color: #1e293b;
  font-size: 0.8rem;
}
```

---

## 5. JavaScript Data Model & Map Integration

### Data Structure (`itineraryData` in `js/app.js`):
Ensure all location objects contain `coords: [lat, lng]` for Leaflet map plotting:

```javascript
{
  day: "Day 4",
  date: "Fri 18 Dec 2026",
  city: "The Hague & Zoetermeer",
  country: "Netherlands",
  locations: [
    {
      name: "The Hague Netherlands Temple (Osylaan 2, Zoetermeer)",
      badge: "✨ Sacred LDS Temple Appointment",
      badgeClass: "badge-temple",
      coords: [52.0545, 4.5030]
    },
    {
      name: "Mauritshuis",
      coords: [52.0804, 4.3144]
    }
  ],
  activities: [
    "• Depart Amsterdam Centraal on NS Intercity train at 07:45 AM toward The Hague.",
    "• Arrive at <u>The Hague Netherlands Temple</u> in Zoetermeer by 09:10 AM for the confirmed 09:30 AM endowment session.",
    "• Travel to The Hague city center and admire masterpieces at <u>Mauritshuis</u>."
  ],
  cost: "• NS Train: €29.40<br>• Mauritshuis: €19.00<br>• Temple: Free<br>• Meals: €14.50<br><br><strong>Total: €62.90</strong>"
}
```

### Map Star Markers:
Iterate over `itineraryData` in `initMap()` and plot country-colored SVG star markers (`createStarIcon(color)`):
```javascript
itineraryData.forEach(dayItem => {
  const color = getCountryColor(dayItem.country);
  (dayItem.locations || []).forEach(loc => {
    if (!loc.coords) return;
    const starMarker = L.marker(loc.coords, {
      icon: createStarIcon(color),
      zIndexOffset: 650,
      title: loc.name
    }).addTo(map);
    starMarker.bindTooltip(`⭐ ${loc.name} (${dayItem.day})`);
  });
});
```

---

## 6. Mobile Detection & Responsive Card Stream Mode

To ensure a first-class mobile user experience without awkward horizontal scrolling:
1. **Dynamic Mobile Detection (`initMobileDetection()`)**:
   - Detects mobile OS (iOS, Android), viewport width (`<= 768px`), and touch screen capabilities.
   - Automatically toggles `is-mobile` on `document.body` and `is-mobile-device` on `<html>`.
   - Listens to `resize` and `orientationchange` events to instantly adapt layout.
2. **Mobile Card Stream Reflow**:
   - On screens `<= 768px` (or when `body.is-mobile` is active), the table automatically reflows into a vertical stack of sleek cards (`.itinerary-table-row`).
   - Each card features:
     - Prominent left country accent border (`6px solid`).
     - Header row with Day badge, Date, and Country tag.
     - Location row with City pin, starred sites, and culture badges.
     - Action / Activity atomic bullet list with underlined places (`<u>...</u>`), stay & transit meta subcards, and day tips.
     - Cost breakdown and highlight badge.
3. **Mobile Layout Switcher (`#mobileTableHeaderBar`)**:
   - Renders a top helper pill bar on mobile: `📱 Cards` (default card stream) and `📊 Table` (wide spreadsheet view with horizontal touch scrolling and swipe hint).

---

## 7. Build & Verification Protocol

After creating or modifying the table in the website:
1. **Node Syntax Validation**: Run `node -c js/app.js` to ensure zero parsing errors.
2. **Distribution Build**: Run `npm run build` to synchronize source code into `dist/`.
3. **Verify Mobile Reflow**: Verify both card stream mode and table swipe mode on mobile viewports (`<= 768px`).
4. **Git Sync**: Commit and push changes to the active remote repository.
