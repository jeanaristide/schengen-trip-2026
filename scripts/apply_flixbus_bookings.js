const fs = require('fs');
const path = require('path');

const indexHtmlPath = path.join(__dirname, '../index.html');
const styleCssPath = path.join(__dirname, '../css/style.css');
const appJsPath = path.join(__dirname, '../js/app.js');
const galleryDataPath = path.join(__dirname, '../js/gallery-data.js');

let html = fs.readFileSync(indexHtmlPath, 'utf8');
let css = fs.readFileSync(styleCssPath, 'utf8');
let appJs = fs.readFileSync(appJsPath, 'utf8');
let gData = fs.readFileSync(galleryDataPath, 'utf8');

console.log('Read all 4 files successfully.');

// =========================================================================
// 1. ADD FLIXBUS DOSSIER CSS TO css/style.css
// =========================================================================
const flixbusCss = `
/* ==========================================================================
   Confirmed FlixBus Inter-City & Cross-Border Bookings Dossier
   ========================================================================== */
.flixbus-reservations-dossier {
  background: linear-gradient(135deg, #f0fdf4 0%, #ffffff 50%, #eff6ff 100%);
  border: 2px solid #10b981;
  border-radius: 16px;
  padding: 22px 24px;
  margin-bottom: 24px;
  box-shadow: 0 4px 16px rgba(16, 185, 129, 0.12);
}

.flixbus-dossier-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 18px;
  border-bottom: 1px solid #bbf7d0;
  padding-bottom: 14px;
}

.flixbus-dossier-title-group {
  display: flex;
  align-items: center;
  gap: 12px;
}

.flixbus-dossier-icon {
  font-size: 2.2rem;
  line-height: 1;
}

.flixbus-dossier-h3 {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 800;
  color: #065f46;
  letter-spacing: -0.01em;
}

.flixbus-dossier-subtitle {
  margin: 3px 0 0;
  font-size: 0.85rem;
  color: #047857;
}

.flixbus-dossier-badge-group {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.flixbus-dossier-badge {
  background: #059669;
  color: #ffffff;
  font-size: 0.78rem;
  font-weight: 800;
  padding: 4px 12px;
  border-radius: 9999px;
  box-shadow: 0 2px 6px rgba(5, 150, 105, 0.25);
}

.flixbus-dossier-subbadge {
  background: #dbeafe;
  color: #1d4ed8;
  border: 1px solid #bfdbfe;
  font-size: 0.78rem;
  font-weight: 800;
  padding: 3px 10px;
  border-radius: 9999px;
}

.flixbus-reservations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 16px;
}

.flixbus-res-card {
  background: #ffffff;
  border: 1px solid #cbd5e1;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
  position: relative;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
}

.flixbus-res-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  border-color: #10b981;
}

.flixbus-res-card.highlight-christmas {
  border-color: #f59e0b;
  background: linear-gradient(180deg, #fffdf5 0%, #ffffff 45%);
}

.flixbus-res-card.highlight-christmas:hover {
  border-color: #d97706;
}

.flixbus-card-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 8px;
}

.flixbus-route-pill {
  background: #f0fdf4;
  color: #15803d;
  border: 1px solid #bbf7d0;
  font-size: 0.75rem;
  font-weight: 800;
  padding: 2px 8px;
  border-radius: 6px;
}

.flixbus-price-pill {
  background: #ecfdf5;
  color: #047857;
  font-size: 0.8rem;
  font-weight: 800;
  padding: 2px 8px;
  border-radius: 9999px;
  border: 1px solid #a7f3d0;
}

.flixbus-booking-num {
  font-size: 0.78rem;
  color: #475569;
  margin-bottom: 6px;
}

.flixbus-booking-num strong {
  font-size: 0.92rem;
  font-family: monospace;
  color: #0f172a;
  background: #f1f5f9;
  padding: 2px 6px;
  border-radius: 4px;
}

.flixbus-journey-title {
  font-size: 0.98rem;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 8px;
  line-height: 1.35;
}

.flixbus-special-note {
  font-size: 0.78rem;
  font-weight: 700;
  color: #b45309;
  background: #fef3c7;
  border: 1px solid #fde68a;
  padding: 3px 8px;
  border-radius: 6px;
  margin-bottom: 8px;
}

.flixbus-timing-box {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 10px 12px;
  margin-bottom: 10px;
  font-size: 0.8rem;
}

.flixbus-time-row {
  display: flex;
  align-items: baseline;
  gap: 6px;
}

.time-lbl {
  color: #64748b;
  font-weight: 600;
  font-size: 0.75rem;
}

.time-val {
  color: #0f172a;
  font-size: 0.82rem;
}

.flixbus-station-val {
  font-size: 0.75rem;
  color: #334155;
  margin-top: 2px;
  line-height: 1.35;
}

.flixbus-passengers-box {
  font-size: 0.78rem;
  color: #334155;
  background: #f1f5f9;
  border-radius: 6px;
  padding: 8px 10px;
  margin-bottom: 8px;
}

.pass-label {
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 3px;
}

.pass-item {
  line-height: 1.4;
}

.flixbus-luggage-tag {
  font-size: 0.74rem;
  color: #475569;
  background: #f8fafc;
  border: 1px dashed #cbd5e1;
  border-radius: 6px;
  padding: 5px 8px;
  margin-top: auto;
}
`;

if (!css.includes('flixbus-reservations-dossier')) {
  css += '\n' + flixbusCss;
  fs.writeFileSync(styleCssPath, css, 'utf8');
  console.log('Added FlixBus Dossier CSS to style.css');
}

// =========================================================================
// 2. CREATE FLIXBUS DOSSIER HTML COMPONENT
// =========================================================================
const flixbusDossierHtml = `
    <!-- Confirmed FlixBus Inter-City & Cross-Border Bookings Dossier -->
    <div class="flixbus-reservations-dossier" id="flixbusReservationsDossier">
      <div class="flixbus-dossier-header">
        <div class="flixbus-dossier-title-group">
          <span class="flixbus-dossier-icon">🚌</span>
          <div>
            <h3 class="flixbus-dossier-h3">Confirmed FlixBus Inter-City Sleeper &amp; Cross-Border Bookings</h3>
            <p class="flixbus-dossier-subtitle">Official Boarding Passes booked for Jean Aristide Belleza Aquino &amp; Avery Sinclair Belleza (Total Paid: AUD $462.86)</p>
          </div>
        </div>
        <div class="flixbus-dossier-badge-group">
          <span class="flixbus-dossier-badge">✅ 4 Bookings Confirmed</span>
          <span class="flixbus-dossier-subbadge">AUD $462.86 Total</span>
        </div>
      </div>

      <div class="flixbus-reservations-grid">
        <!-- 1. London to Amsterdam -->
        <div class="flixbus-res-card">
          <div class="flixbus-card-head">
            <span class="flixbus-route-pill">Route N824 · FlixBus B.V.</span>
            <span class="flixbus-price-pill">AUD $135.96</span>
          </div>
          <div class="flixbus-booking-num">
            <span>Booking Ref:</span> <strong>338 890 0447</strong>
          </div>
          <div class="flixbus-journey-title">🇬🇧 London ➔ 🇳🇱 Amsterdam Central</div>
          <div class="flixbus-timing-box">
            <div class="flixbus-time-row">
              <span class="time-lbl">Departure:</span>
              <span class="time-val">Tue, 15 Dec 2026 @ <strong>10:00 PM (22:00)</strong></span>
            </div>
            <div class="flixbus-station-val">📍 London Victoria Coach Station (164 Buckingham Palace Rd, SW1W9TP)</div>
            <div class="flixbus-time-row" style="margin-top: 6px;">
              <span class="time-lbl">Arrival:</span>
              <span class="time-val">Wed, 16 Dec 2026 @ <strong>10:25 AM</strong></span>
            </div>
            <div class="flixbus-station-val">📍 Amsterdam Central Station (De Ruijterkade 153, 1011AC)</div>
          </div>
          <div class="flixbus-passengers-box">
            <div class="pass-label">👥 Confirmed Passengers &amp; Seats:</div>
            <div class="pass-item">• <strong>Jean Aristide Belleza Aquino:</strong> Seat 11C</div>
            <div class="pass-item">• <strong>Avery Sinclair Belleza:</strong> Seat 11D</div>
          </div>
          <div class="flixbus-luggage-tag">
            🧳 2 × Cabin Bags (7kg) + 2 × Hold Luggage (20kg · 80×50×30 cm)
          </div>
        </div>

        <!-- 2. Frankfurt to Strasbourg -->
        <div class="flixbus-res-card">
          <div class="flixbus-card-head">
            <span class="flixbus-route-pill">Route N13 · FlixBus DACH</span>
            <span class="flixbus-price-pill">AUD $79.96</span>
          </div>
          <div class="flixbus-booking-num">
            <span>Booking Ref:</span> <strong>339 153 0857</strong>
          </div>
          <div class="flixbus-journey-title">🇩🇪 Frankfurt am Main ➔ 🇫🇷 Strasbourg</div>
          <div class="flixbus-timing-box">
            <div class="flixbus-time-row">
              <span class="time-lbl">Departure:</span>
              <span class="time-val">Wed, 23 Dec 2026 @ <strong>04:35 AM</strong></span>
            </div>
            <div class="flixbus-station-val">📍 Frankfurt Central Train Station (Stuttgarter Str. 26, 60329)</div>
            <div class="flixbus-time-row" style="margin-top: 6px;">
              <span class="time-lbl">Arrival:</span>
              <span class="time-val">Wed, 23 Dec 2026 @ <strong>08:35 AM</strong></span>
            </div>
            <div class="flixbus-station-val">📍 Strasbourg Central Bus Station (Place de l'Étoile, 67076)</div>
          </div>
          <div class="flixbus-passengers-box">
            <div class="pass-label">👥 Confirmed Passengers &amp; Seats:</div>
            <div class="pass-item">• <strong>Jean Aristide Belleza Aquino:</strong> Seat 3A</div>
            <div class="pass-item">• <strong>Avery Sinclair Belleza:</strong> Seat 3B</div>
          </div>
          <div class="flixbus-luggage-tag">
            🧳 2 × Cabin Bags (7kg) + 2 × Hold Luggage (20kg · 80×50×30 cm)
          </div>
        </div>

        <!-- 3. Strasbourg to Luzern -->
        <div class="flixbus-res-card highlight-christmas">
          <div class="flixbus-card-head">
            <span class="flixbus-route-pill">Route N846 · FlixBus B.V.</span>
            <span class="flixbus-price-pill">AUD $76.96</span>
          </div>
          <div class="flixbus-booking-num">
            <span>Booking Ref:</span> <strong>339 152 8020</strong>
          </div>
          <div class="flixbus-journey-title">🇫🇷 Strasbourg ➔ 🇨🇭 Luzern (Lucerne)</div>
          <div class="flixbus-special-note">🎅 <i>Christmas Morning Dawn Coach to the Swiss Alps!</i></div>
          <div class="flixbus-timing-box">
            <div class="flixbus-time-row">
              <span class="time-lbl">Departure:</span>
              <span class="time-val">Fri, 25 Dec 2026 @ <strong>04:05 AM</strong></span>
            </div>
            <div class="flixbus-station-val">📍 Strasbourg Central Bus Station (Place de l'Étoile, 67076)</div>
            <div class="flixbus-time-row" style="margin-top: 6px;">
              <span class="time-lbl">Arrival:</span>
              <span class="time-val">Fri, 25 Dec 2026 @ <strong>07:10 AM</strong></span>
            </div>
            <div class="flixbus-station-val">📍 Luzern Landenberg (Landenbergstrasse, 6005 Luzern)</div>
          </div>
          <div class="flixbus-passengers-box">
            <div class="pass-label">👥 Confirmed Passengers &amp; Seats:</div>
            <div class="pass-item">• <strong>Jean Aristide Belleza Aquino:</strong> Seat 11C</div>
            <div class="pass-item">• <strong>Avery Sinclair Belleza:</strong> Seat 11D</div>
          </div>
          <div class="flixbus-luggage-tag">
            🧳 2 × Cabin Bags (7kg) + 2 × Hold Luggage (20kg · 80×50×30 cm)
          </div>
        </div>

        <!-- 4. Paris to London -->
        <div class="flixbus-res-card">
          <div class="flixbus-card-head">
            <span class="flixbus-route-pill">Route 1700 · FlixBus France</span>
            <span class="flixbus-price-pill">AUD $169.98</span>
          </div>
          <div class="flixbus-booking-num">
            <span>Booking Ref:</span> <strong>338 920 9866</strong>
          </div>
          <div class="flixbus-journey-title">🇫🇷 Paris Bercy ➔ 🇬🇧 London Victoria</div>
          <div class="flixbus-timing-box">
            <div class="flixbus-time-row">
              <span class="time-lbl">Departure:</span>
              <span class="time-val">Sun, 03 Jan 2027 @ <strong>11:00 PM (23:00)</strong></span>
            </div>
            <div class="flixbus-station-val">📍 Paris Bercy Seine (210 Quai de Bercy, 75012 Paris)</div>
            <div class="flixbus-time-row" style="margin-top: 6px;">
              <span class="time-lbl">Arrival:</span>
              <span class="time-val">Mon, 04 Jan 2027 @ <strong>07:25 AM</strong></span>
            </div>
            <div class="flixbus-station-val">📍 London Victoria Coach Station (164 Buckingham Palace Rd, SW1W9TP)</div>
          </div>
          <div class="flixbus-passengers-box">
            <div class="pass-label">👥 Confirmed Passengers:</div>
            <div class="pass-item">• <strong>Jean Aristide Belleza Aquino:</strong> Unassigned</div>
            <div class="pass-item">• <strong>Avery Sinclair Belleza:</strong> Unassigned</div>
          </div>
          <div class="flixbus-luggage-tag">
            🧳 2 × Cabin Bags (7kg) + 2 × Hold Luggage (20kg · 80×50×30 cm)
          </div>
        </div>
      </div>
    </div>`;

// Insert before Country Filters in index.html
if (!html.includes('id="flixbusReservationsDossier"')) {
  html = html.replace('    <!-- Country Filters -->', flixbusDossierHtml + '\n\n    <!-- Country Filters -->');
  console.log('Inserted FlixBus Reservations Dossier into index.html');
}

// =========================================================================
// 3. UPDATE 21-DAY SCHEDULE MATRIX IN index.html
// =========================================================================
html = html.replace(
  `<tr><td><strong>Day 1</strong> (15 Dec)</td><td>Tuesday</td><td>London ➔ Channel</td><td>London Victoria Coach Station &amp; Dover LeShuttle</td><td>Open 24/7 (365 days)</td><td><span class="badge-status-open">🟢 Verified Open</span></td></tr>`,
  `<tr><td><strong>Day 1</strong> (15 Dec)</td><td>Tuesday</td><td>London ➔ Amsterdam</td><td>London Victoria Coach Station ➔ Amsterdam Central (De Ruijterkade)</td><td>Open 24/7 · FlixBus N824 Departs 22:00 (Arr 10:25)</td><td><span class="badge-status-open">🟢 Confirmed Ticket (Ref 338 890 0447)</span></td></tr>`
);

html = html.replace(
  `<tr><td><strong>Day 9</strong> (23 Dec)</td><td>Wednesday</td><td>Colmar</td><td>Petite Venise, Maison Pfister, 6 Christmas Markets</td><td>11:00–19:00 (Markets open through 29 Dec)</td><td><span class="badge-status-open">🟢 Verified Open</span></td></tr>`,
  `<tr><td><strong>Day 9</strong> (23 Dec)</td><td>Wednesday</td><td>Frankfurt ➔ Strasbourg</td><td>FlixBus N13 (04:35–08:35), Place Kléber Great Christmas Tree, Petite France, Strasbourg Cathedral</td><td>FlixBus 04:35–08:35 · Markets 11:00–20:00 · Cathedral 08:30–19:00</td><td><span class="badge-status-open">🟢 Confirmed Ticket (Ref 339 153 0857)</span></td></tr>`
);

html = html.replace(
  `<tr><td><strong>Day 10</strong> (24 Dec)</td><td>Thursday</td><td>Bern &amp; Interlaken</td><td>Bern Old Town, Zytglogge, Höhematte, Bern Temple Grounds</td><td>Open 24/7 (Public sites &amp; Swiss holiday trains)</td><td><span class="badge-status-open">🟢 Christmas Eve Open</span></td></tr>`,
  `<tr><td><strong>Day 10</strong> (24 Dec)</td><td>Thursday</td><td>Colmar &amp; Alsace</td><td>Colmar Petite Venise, Maison Pfister, Christmas Eve in Alsace</td><td>Markets open until 17:00 (Christmas Eve) · Districts 24/7</td><td><span class="badge-status-open">🟢 Christmas Eve in Alsace</span></td></tr>`
);

html = html.replace(
  `<tr><td><strong>Day 11</strong> (25 Dec)</td><td>Friday</td><td>Grindelwald First</td><td>Grindelwald-First Gondola Cableway &amp; First Cliff Walk</td><td>08:30–16:30 (Winter season daily operation)</td><td><span class="badge-status-open">🟢 Christmas Day Open</span></td></tr>`,
  `<tr><td><strong>Day 11</strong> (25 Dec)</td><td>Friday</td><td>Strasbourg ➔ Luzern ➔ Interlaken</td><td>FlixBus N846 (04:05–07:10), Kapellbrücke, Lion Monument, Scenic Train over Brünig Pass to Interlaken</td><td>FlixBus 04:05–07:10 · Kapellbrücke 24/7 · Swiss Trains regular holiday timetable</td><td><span class="badge-status-open">🟢 Confirmed Ticket (Ref 339 152 8020)</span></td></tr>`
);

html = html.replace(
  `<tr><td><strong>Day 14</strong> (28 Dec)</td><td>Monday</td><td>Lucerne &amp; Zurich</td><td>Kapellbrücke, Lion Monument, Lake Zurich, Bahnhofstrasse</td><td>Open 24/7 (Public landmarks) · Shops 09:00–19:00</td><td><span class="badge-status-open">🟢 Verified Open</span></td></tr>`,
  `<tr><td><strong>Day 14</strong> (28 Dec)</td><td>Monday</td><td>Grindelwald &amp; Zurich ➔ Paris</td><td>Grindelwald First Cliff Walk by Tissot, Lake Zurich Promenade, Bahnhofstrasse, Overnight Coach</td><td>Gondola 08:30–16:30 · Lake Zurich 24/7 · Coach 21:00 departure</td><td><span class="badge-status-open">🟢 Verified Open</span></td></tr>`
);

html = html.replace(
  `<tr><td><strong>Day 20</strong> (03 Jan)</td><td>Sunday</td><td>Paris ➔ London</td><td>Pont Alexandre III, Seine Promenade, Ladurée Bakeries</td><td>10:00–18:00 (Bakeries) · FlixBus 23:00 departure</td><td><span class="badge-status-open">🟢 Verified Open</span></td></tr>`,
  `<tr><td><strong>Day 20</strong> (03 Jan)</td><td>Sunday</td><td>Paris ➔ London</td><td>Pont Alexandre III, Seine Promenade, Ladurée Bakeries, FlixBus Route 1700 to London</td><td>10:00–18:00 (Bakeries) · FlixBus Route 1700 Departs 23:00</td><td><span class="badge-status-open">🟢 Confirmed Ticket (Ref 338 920 9866)</span></td></tr>`
);

console.log('Updated 21-Day Schedule Matrix in index.html');

// =========================================================================
// 4. UPDATE MASTER TABLE ROWS IN index.html
// =========================================================================

// Day 1 Master Table Row
const oldD1Row = `            <tr class="itinerary-table-row row-badge-transit" data-country="Transit">
              <td class="col-table-day">
                <span class="table-day-badge">Day 1</span>
                <span class="table-date-str">15 Dec 2026</span>
              </td>
              <td class="col-table-loc">
                <div class="table-loc-name">London ➔ Amsterdam</div>
                <span class="badge-country badge-transit">Transit</span>
              </td>
              <td class="col-table-plan">
                <div class="table-plan-title">Departure Across the English Channel</div>
                <div class="table-activities-list">
        <div class="table-activity-item">• <b>Evening (18:30 – 21:30):</b> Departure prep & baggage check-in at <b>London Victoria Coach Station</b> (164 Buckingham Palace Rd).</div>
        <div class="table-activity-item">• <b>Night (22:00 – 03:00):</b> Board <b>FlixBus N824</b> overnight coach. Transit across Kent countryside to Dover port. LeShuttle / Ferry crossing beneath the English Channel into France/Belgium.</div>
        <div class="table-activity-item">• <b>Early Morning (03:00 – 08:30+1d):</b> Continuous overnight sleeper coach transit across northern France and Belgium towards the Netherlands.</div>
      </div>
                <div class="table-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (London departure & overnight coach transit)</div>
                <div class="table-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 Victoria Coach Station: Open 24/7 (365 Days)</span> <span class="opening-pill open">🟢 Eurotunnel / LeShuttle: 24/7 departures</span> <span class="schedule-note">FlixBus N824 boarding 21:30–22:00</span></div>
              </td>
              <td class="col-table-stay">
                <div class="table-hotel-name">FlixBus N824 Sleeper Coach</div>
                <div class="table-hotel-addr">London Victoria ➔ Amsterdam Sloterdijk</div>
                <div class="table-transit-mode"><i>🚌 FlixBus N824 (Overnight Reclining Coach)</i></div>
              </td>
              <td class="col-table-action">
                <button type="button" class="btn-table-map" title="Focus map on London ➔ Amsterdam">
                  📍 Map
                </button>
              </td>
            </tr>`;

const newD1Row = `            <tr class="itinerary-table-row row-badge-transit" data-country="Transit">
              <td class="col-table-day">
                <span class="table-day-badge">Day 1</span>
                <span class="table-date-str">15 Dec 2026</span>
              </td>
              <td class="col-table-loc">
                <div class="table-loc-name">London ➔ Amsterdam Central</div>
                <span class="badge-country badge-transit">Transit</span>
              </td>
              <td class="col-table-plan">
                <div class="table-plan-title">Departure Across English Channel · FlixBus Route N824 (Confirmed)</div>
                <div class="table-activities-list">
        <div class="table-activity-item">• <b>Evening (19:00 – 21:30):</b> Departure prep & baggage check-in at <b>London Victoria Coach Station</b> (164 Buckingham Palace Rd).</div>
        <div class="table-activity-item">• <b>Night (22:00 – 03:00):</b> Board confirmed <b>FlixBus Route N824</b> (Departs 10:00 PM / 22:00 · Booking Ref: <b>338 890 0447</b> · Seats: <b>11C &amp; 11D</b> for Jean Aquino &amp; Avery Belleza). Transit across Kent countryside to Dover port; Eurotunnel / LeShuttle undersea crossing into France.</div>
        <div class="table-activity-item">• <b>Early Morning (03:00 – 10:25+1d):</b> Continuous overnight sleeper coach transit across northern France and Belgium directly to <b>Amsterdam Central Station (De Ruijterkade 153)</b> arriving at 10:25 AM.</div>
      </div>
                <div class="table-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (London departure & overnight coach transit)</div>
                <div class="table-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 Victoria Coach Station: Open 24/7 (365 Days)</span> <span class="opening-pill open">🟢 FlixBus N824: Departs 22:00</span> <span class="schedule-note">Confirmed Booking: 338 890 0447</span></div>
              </td>
              <td class="col-table-stay">
                <div class="table-hotel-name">FlixBus N824 Sleeper (Confirmed)</div>
                <div class="table-hotel-addr">London Victoria ➔ Amsterdam Central (De Ruijterkade 153)</div>
                <div class="table-transit-mode"><i>🚌 FlixBus N824 · Seats 11C &amp; 11D (AUD $135.96 Paid)</i></div>
              </td>
              <td class="col-table-action">
                <button type="button" class="btn-table-map" title="Focus map on London ➔ Amsterdam">
                  📍 Map
                </button>
              </td>
            </tr>`;

html = html.replace(oldD1Row, newD1Row);

// Day 9 Master Table Row
const oldD9Row = `            <tr class="itinerary-table-row row-badge-fr" data-country="France">
              <td class="col-table-day">
                <span class="table-day-badge">Day 9</span>
                <span class="table-date-str">23 Dec 2026</span>
              </td>
              <td class="col-table-loc">
                <div class="table-loc-name">Colmar (from Kehl Base)</div>
                <span class="badge-country badge-fr">France</span>
              </td>
              <td class="col-table-plan">
                <div class="table-plan-title">Frankfurt ➔ Alsace · Fairytale Colmar &amp; Strasbourg Capital of Christmas</div>
                <div class="table-activities-list">
        <div class="table-activity-item">• <b>Morning (09:00 – 10:30):</b> Scenic 30-minute SNCF TER regional train journey along the Alsatian Wine Route from Strasbourg Gare to Colmar.</div>
        <div class="table-activity-item">• <b>Daytime (10:30 – 15:30):</b> Stroll through <b>Petite Venise</b> &amp; Quai de la Poissonnerie, whose pastel half-timbered canals and fountains inspired Belle's village in Disney's <b>Beauty and the Beast</b>. Walk down Rue des Marchands to marvel at the 1537 Renaissance <b>Maison Pfister</b>, the iconic architectural inspiration for Hayao Miyazaki's Studio Ghibli classic <b>Howl's Moving Castle</b>. Explore the medieval Koïfhus customs house.</div>
        <div class="table-activity-item">• <b>Evening (16:00 – 19:30):</b> Explore Colmar's 6 magical Christmas Markets (Place des Dominicains &amp; Place de l'Ancienne Douane). Savor warm Alsatian Tarte Flambée (Flammekueche) and spiced Vin Chaud. Return via 30-min TER train to Kehl base.</div>
      </div>
                <div class="table-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (Colmar Petite Venise, Maison Pfister & 6 Christmas Markets)</div>
                <div class="table-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 Colmar 6 Christmas Markets: Open 11:00–19:00 (Runs through 29 Dec)</span> <span class="opening-pill open">🟢 Petite Venise &amp; Maison Pfister: Open 24/7</span></div>
              </td>
              <td class="col-table-stay">
                <div class="table-hotel-name">B&B Hotel Kehl (Base for Alsace)</div>
                <div class="table-hotel-addr">15 Allensteiner Str., 77694 Kehl · <i>Base to visit Strasbourg &amp; Colmar</i></div>
                <div class="table-transit-mode"><i>🚆 SNCF TER Fluo Train Return (€16.00)</i></div>
              </td>
              <td class="col-table-action">
                <button type="button" class="btn-table-map" title="Focus map on Colmar">
                  📍 Map
                </button>
              </td>
            </tr>`;

const newD9Row = `            <tr class="itinerary-table-row row-badge-fr" data-country="France">
              <td class="col-table-day">
                <span class="table-day-badge">Day 9</span>
                <span class="table-date-str">23 Dec 2026</span>
              </td>
              <td class="col-table-loc">
                <div class="table-loc-name">Frankfurt ➔ Strasbourg</div>
                <span class="badge-country badge-fr">France</span>
              </td>
              <td class="col-table-plan">
                <div class="table-plan-title">FlixBus N13 ➔ Strasbourg Capital of Christmas · Christkindelsmärik &amp; Petite France</div>
                <div class="table-activities-list">
        <div class="table-activity-item">• <b>Early Morning (04:35 – 08:35):</b> Board confirmed <b>FlixBus Route N13</b> at Frankfurt Central Train Station (Stuttgarter Str. 26). Cross the Rhine into France, arriving at <b>Strasbourg Place de l'Étoile at 08:35 AM</b> (Booking Ref: <b>339 153 0857</b> · Seats: <b>3A &amp; 3B</b> for Jean Aquino &amp; Avery Belleza · AUD $79.96 Paid).</div>
        <div class="table-activity-item">• <b>Morning &amp; Midday (09:00 – 14:00):</b> Drop luggage at Alsace base. Stroll to <b>Place Kléber</b> to behold the towering 30-meter illuminated Great Christmas Tree (<i>Grand Sapin</i>) and explore the world-famous <b>Christkindelsmärik</b> (held since 1570).</div>
        <div class="table-activity-item">• <b>Afternoon &amp; Evening (14:30 – 20:30):</b> Wander through the fairytale half-timbered canal quarter of <b>Petite France</b> and marvel at the pink sandstone Gothic spire of <b>Strasbourg Cathedral (Cathédrale Notre-Dame)</b>. Savor warm Flammekueche (tarte flambée) and spiced vin chaud.</div>
      </div>
                <div class="table-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (Strasbourg Cathedral, Petite France & Place Kléber Great Tree)</div>
                <div class="table-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 FlixBus N13: Departs 04:35 (Arr 08:35)</span> <span class="opening-pill open">🟢 Strasbourg Christmas Markets: Open 11:00–20:00</span> <span class="opening-pill open">🟢 Cathedral: Open 08:30–19:00</span></div>
              </td>
              <td class="col-table-stay">
                <div class="table-hotel-name">B&B Hotel Kehl (Base for Alsace · Night 1 of 2)</div>
                <div class="table-hotel-addr">15 Allensteiner Str., 77694 Kehl · <i>15-min direct Tram D into Strasbourg</i></div>
                <div class="table-transit-mode"><i>🚌 FlixBus N13 (04:35–08:35) + 🚋 Strasbourg Tram Line D</i></div>
              </td>
              <td class="col-table-action">
                <button type="button" class="btn-table-map" title="Focus map on Strasbourg">
                  📍 Map
                </button>
              </td>
            </tr>`;

html = html.replace(oldD9Row, newD9Row);

// Day 10 Master Table Row
const oldD10Row = `            <tr class="itinerary-table-row row-badge-ch" data-country="Switzerland">
              <td class="col-table-day">
                <span class="table-day-badge">Day 10</span>
                <span class="table-date-str">24 Dec 2026</span>
              </td>
              <td class="col-table-loc">
                <div class="table-loc-name">Interlaken</div>
                <span class="badge-country badge-ch">Switzerland</span>
              </td>
              <td class="col-table-plan">
                <div class="table-plan-title">Swiss Alpine Gateway & Christmas Eve</div>
                <div class="table-activities-list">
        <div class="table-activity-item">• <b>Morning (08:30 – 12:00):</b> Scenic Swiss rail journey south via Basel SBB and the Swiss capital of <b>Bern</b> towards the snow-covered Bernese Oberland.</div>
        <div class="table-activity-item">• <b>Afternoon (12:30 – 16:00):</b> Check in at <b>Swiss Alps Base</b> in Interlaken. Winter walk through Höhematte park with panoramic views of the Jungfrau, Mönch, and Eiger massifs.</div>
        <div class="table-activity-item">• <b>Evening (17:00 – 20:30):</b> Christmas Eve in the Swiss Alps. Enjoy an authentic Swiss cheese fondue dinner; evening winter stroll along the turquoise Aare River.</div>
        <div class="table-activity-item">• <i>Nearby Sacred Site: Bern Switzerland Temple in Zollikofen is located just 9 mins from Bern HB via S-Bahn S3/S31.</i></div>
      </div>
                <div class="table-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (Bern Temple & Interlaken Höhematte Jungfrau view)</div>
                <div class="table-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 Bern Old Town &amp; Zytglogge: Open 24/7</span> <span class="opening-pill open">🟢 Interlaken Höhematte: Open 24/7</span> <span class="opening-pill open">🟢 Swiss Trains: Regular holiday timetable</span> <span class="schedule-note">Bern Temple exterior grounds open (session rooms close early for Christmas Eve)</span></div>
              </td>
              <td class="col-table-stay">
                <div class="table-hotel-name">Swiss Alps Base (Interlaken)</div>
                <div class="table-hotel-addr">Central Interlaken, Switzerland</div>
                <div class="table-transit-mode"><i>🚆 SBB EuroCity / InterCity Train (Half Fare Card)</i></div>
              </td>
              <td class="col-table-action">
                <button type="button" class="btn-table-map" title="Focus map on Interlaken">
                  📍 Map
                </button>
              </td>
            </tr>`;

const newD10Row = `            <tr class="itinerary-table-row row-badge-fr" data-country="France">
              <td class="col-table-day">
                <span class="table-day-badge">Day 10</span>
                <span class="table-date-str">24 Dec 2026</span>
              </td>
              <td class="col-table-loc">
                <div class="table-loc-name">Colmar &amp; Alsace</div>
                <span class="badge-country badge-fr">France</span>
              </td>
              <td class="col-table-plan">
                <div class="table-plan-title">Fairytale Colmar · Petite Venise, Maison Pfister &amp; Christmas Eve in Alsace</div>
                <div class="table-activities-list">
        <div class="table-activity-item">• <b>Morning (09:30 – 12:30):</b> Scenic 30-minute SNCF TER Fluo train along the Alsatian Wine Route to fairytale <b>Colmar</b>. Stroll through <b>Petite Venise</b> &amp; Quai de la Poissonnerie, whose pastel half-timbered canals and bridges directly inspired Belle's village in Disney's <i>Beauty and the Beast</i>.</div>
        <div class="table-activity-item">• <b>Afternoon (13:00 – 16:30):</b> Walk down Rue des Marchands to marvel at the 1537 Renaissance <b>Maison Pfister</b>, the iconic architectural inspiration for Hayao Miyazaki's Studio Ghibli masterpiece <i>Howl's Moving Castle</i>. Explore Colmar's holiday markets before early Christmas Eve closing.</div>
        <div class="table-activity-item">• <b>Evening (17:00 – 21:00):</b> Celebrate an unforgettable <b>Christmas Eve in Alsace</b>! Savor authentic Kougelhopf pastries, festive dinner, and peaceful evening illuminations. Return to Alsace Base (Night 2 of 2). Rest early for early dawn Christmas coach to Switzerland!</div>
      </div>
                <div class="table-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (Colmar Petite Venise, Maison Pfister & Christmas Eve illuminations)</div>
                <div class="table-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 Colmar Markets: Open until 17:00 (Christmas Eve)</span> <span class="opening-pill open">🟢 Petite Venise &amp; Maison Pfister: Open 24/7</span> <span class="schedule-note">Early night rest for 04:05 AM Christmas coach</span></div>
              </td>
              <td class="col-table-stay">
                <div class="table-hotel-name">B&B Hotel Kehl (Base for Alsace · Night 2 of 2)</div>
                <div class="table-hotel-addr">15 Allensteiner Str., 77694 Kehl · <i>Christmas Eve in Alsace</i></div>
                <div class="table-transit-mode"><i>🚆 SNCF TER Fluo Train (€16.00) + 🚋 Tram Line D</i></div>
              </td>
              <td class="col-table-action">
                <button type="button" class="btn-table-map" title="Focus map on Colmar">
                  📍 Map
                </button>
              </td>
            </tr>`;

html = html.replace(oldD10Row, newD10Row);

// Day 11 Master Table Row
const oldD11Row = `            <tr class="itinerary-table-row row-badge-ch" data-country="Switzerland">
              <td class="col-table-day">
                <span class="table-day-badge">Day 11</span>
                <span class="table-date-str">25 Dec 2026</span>
              </td>
              <td class="col-table-loc">
                <div class="table-loc-name">Grindelwald First</div>
                <span class="badge-country badge-ch">Switzerland</span>
              </td>
              <td class="col-table-plan">
                <div class="table-plan-title">Alpine Cliff Walk & Bachalpsee Snow Trail</div>
                <div class="table-activities-list">
        <div class="table-activity-item">• <b>Morning (09:00 – 12:30):</b> Take the Bernese Oberland Bahn (BOB) train to Grindelwald, then ascend 2,168m via the 6-seater First gondola. Brave the thrilling <b>First Cliff Walk by Tissot</b> suspended along sheer alpine rock faces.</div>
        <div class="table-activity-item">• <b>Afternoon (13:00 – 15:30):</b> Winter walking trail towards frozen <b>Lake Bachalpsee</b> with dramatic views of the Eiger North Face. Optional First Flieger zipline flight.</div>
        <div class="table-activity-item">• <b>Evening (16:30 – 20:00):</b> Christmas Day celebratory dinner in the snowy alpine chalets of Grindelwald village before scenic train return to Interlaken.</div>
      </div>
                <div class="table-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (First Cliff Walk by Tissot summit walkway is Free; gondola covered by Swiss pass)</div>
                <div class="table-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 Grindelwald-First Gondola: Confirmed Open Christmas Day (08:30–16:30)</span> <span class="opening-pill open">🟢 First Cliff Walk by Tissot: Open 09:00–16:00</span> <span class="schedule-note">Winter ski season in daily operation</span></div>
              </td>
              <td class="col-table-stay">
                <div class="table-hotel-name">Swiss Alps Base (Interlaken)</div>
                <div class="table-hotel-addr">Central Interlaken, Switzerland</div>
                <div class="table-transit-mode"><i>🚠 BOB Train + First Gondola Cableway (50% off Half Fare)</i></div>
              </td>
              <td class="col-table-action">
                <button type="button" class="btn-table-map" title="Focus map on Grindelwald First">
                  📍 Map
                </button>
              </td>
            </tr>`;

const newD11Row = `            <tr class="itinerary-table-row row-badge-ch" data-country="Switzerland">
              <td class="col-table-day">
                <span class="table-day-badge">Day 11</span>
                <span class="table-date-str">25 Dec 2026</span>
              </td>
              <td class="col-table-loc">
                <div class="table-loc-name">Luzern &amp; Interlaken</div>
                <span class="badge-country badge-ch">Switzerland</span>
              </td>
              <td class="col-table-plan">
                <div class="table-plan-title">Christmas Dawn Coach ➔ Lucerne (Kapellbrücke) ➔ Scenic Alpine Train to Interlaken</div>
                <div class="table-activities-list">
        <div class="table-activity-item">• <b>Christmas Dawn (04:05 – 07:10):</b> Board confirmed <b>FlixBus Route N846</b> at Strasbourg Place de l'Étoile. Travel across the Swiss border, arriving in <b>Luzern (Lucerne) at 07:10 AM on Christmas Morning</b>! (Booking Ref: <b>339 152 8020</b> · Seats: <b>11C &amp; 11D</b> for Jean Aquino &amp; Avery Belleza · AUD $76.96 Paid).</div>
        <div class="table-activity-item">• <b>Morning (07:30 – 11:30):</b> <b>Christmas Morning in Lucerne</b>! Walk across the world-famous medieval wooden <b>Kapellbrücke (Chapel Bridge)</b> with its historic octagonal Water Tower on the Reuss River. Visit the poignant <b>Lion Monument (Löwendenkmal)</b> carved into natural cliff rock, and stroll the Lake Lucerne promenade facing snow-covered Mount Pilatus and Mount Rigi.</div>
        <div class="table-activity-item">• <b>Midday &amp; Afternoon (12:00 – 15:30):</b> Board the scenic <b>Zentralbahn (Luzern-Interlaken Express)</b> panoramic train over the Brünig Pass, passing turquoise alpine lakes and snow-capped peaks into Interlaken. Check in at <b>Swiss Alps Base</b>.</div>
        <div class="table-activity-item">• <b>Evening (16:30 – 20:30):</b> Christmas walk through Höhematte park with panoramic views of the Jungfrau, Mönch, and Eiger massifs. Celebratory Christmas Day dinner with an authentic Swiss cheese fondue!</div>
      </div>
                <div class="table-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (Kapellbrücke, Lion Monument, Lake Lucerne & Interlaken Höhematte)</div>
                <div class="table-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 FlixBus N846: Departs 04:05 (Arr 07:10)</span> <span class="opening-pill open">🟢 Kapellbrücke &amp; Lion Monument: Open 24/7</span> <span class="opening-pill open">🟢 Swiss Trains: Regular holiday timetable</span></div>
              </td>
              <td class="col-table-stay">
                <div class="table-hotel-name">Swiss Alps Base (Interlaken · Night 1 of 3)</div>
                <div class="table-hotel-addr">Central Interlaken, Switzerland</div>
                <div class="table-transit-mode"><i>🚌 FlixBus N846 (04:05–07:10) + 🚆 SBB Zentralbahn Express</i></div>
              </td>
              <td class="col-table-action">
                <button type="button" class="btn-table-map" title="Focus map on Luzern &amp; Interlaken">
                  📍 Map
                </button>
              </td>
            </tr>`;

html = html.replace(oldD11Row, newD11Row);

// Day 14 Master Table Row
const oldD14Row = `            <tr class="itinerary-table-row row-badge-transit" data-country="Transit">
              <td class="col-table-day">
                <span class="table-day-badge">Day 14</span>
                <span class="table-date-str">28 Dec 2026</span>
              </td>
              <td class="col-table-loc">
                <div class="table-loc-name">Zurich ➔ Paris</div>
                <span class="badge-country badge-transit">Transit</span>
              </td>
              <td class="col-table-plan">
                <div class="table-plan-title">Lake Zurich & Overnight Sleeper Coach</div>
                <div class="table-activities-list">
        <div class="table-activity-item">• <b>Morning (09:00 – 11:30):</b> Scenic train journey across central Switzerland from Interlaken Ost via Lucerne to <b>Zurich Hauptbahnhof</b>.</div>
        <div class="table-activity-item">• <b>Afternoon (12:00 – 17:00):</b> Walk along the <b>Lake Zurich</b> promenade, explore historic Lindenhof hill overlooking the Limmat River, and taste world-class chocolate along Bahnhofstrasse.</div>
        <div class="table-activity-item">• <b>Night (21:00 – 06:40+1d):</b> Board the direct overnight FlixBus sleeper coach from Zurich Bus Station (near HB) to Paris Bercy Seine.</div>
      </div>
                <div class="table-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (Lucerne Kapellbrücke, Lion Monument & Zurich Lake)</div>
                <div class="table-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 Lucerne Kapellbrücke &amp; Lion Monument: Open 24/7</span> <span class="opening-pill open">🟢 Lake Zurich &amp; Lindenhof: Open 24/7</span> <span class="opening-pill open">🟢 Bahnhofstrasse Chocolate Boutiques: Open 09:00–19:00</span></div>
              </td>
              <td class="col-table-stay">
                <div class="table-hotel-name">FlixBus Overnight</div>
                <div class="table-hotel-addr">Direct to Paris Bercy Seine</div>
                <div class="table-transit-mode"><i>🚆 SBB InterCity Train + Overnight FlixBus Coach</i></div>
              </td>
              <td class="col-table-action">
                <button type="button" class="btn-table-map" title="Focus map on Zurich ➔ Paris">
                  📍 Map
                </button>
              </td>
            </tr>`;

const newD14Row = `            <tr class="itinerary-table-row row-badge-transit" data-country="Transit">
              <td class="col-table-day">
                <span class="table-day-badge">Day 14</span>
                <span class="table-date-str">28 Dec 2026</span>
              </td>
              <td class="col-table-loc">
                <div class="table-loc-name">Grindelwald &amp; Zurich ➔ Paris</div>
                <span class="badge-country badge-transit">Transit</span>
              </td>
              <td class="col-table-plan">
                <div class="table-plan-title">Grindelwald First Cliff Walk &amp; Lake Zurich ➔ Overnight Sleeper Coach to Paris</div>
                <div class="table-activities-list">
        <div class="table-activity-item">• <b>Morning (08:30 – 12:30):</b> Morning excursion to Grindelwald. Ascend 2,168m via the 6-seater First gondola cableway; brave the thrilling metal walkway of the <b>First Cliff Walk by Tissot</b> suspended along sheer alpine rock faces facing the snowy Eiger North Face.</div>
        <div class="table-activity-item">• <b>Afternoon (13:00 – 17:30):</b> Scenic train journey from the Bernese Oberland through the Swiss heartland via Bern to <b>Zurich Hauptbahnhof</b>. Walk the <b>Lake Zurich</b> promenade, admire Limmat views from Lindenhof hill, and browse luxury chocolate boutiques on Bahnhofstrasse.</div>
        <div class="table-activity-item">• <b>Night (21:00 – 06:40+1d):</b> Board the direct overnight sleeper coach from Zurich Bus Station (near HB) to Paris Bercy Seine.</div>
      </div>
                <div class="table-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (First Cliff Walk by Tissot walkway is Free; Lake Zurich & Lindenhof)</div>
                <div class="table-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 Grindelwald First Gondola: Open 08:30–16:30</span> <span class="opening-pill open">🟢 Lake Zurich &amp; Lindenhof: Open 24/7</span> <span class="opening-pill open">🟢 Overnight Coach: Departs 21:00</span></div>
              </td>
              <td class="col-table-stay">
                <div class="table-hotel-name">FlixBus Overnight Sleeper</div>
                <div class="table-hotel-addr">Zurich Bus Station ➔ Paris Bercy Seine</div>
                <div class="table-transit-mode"><i>🚆 SBB InterCity + 🚌 Overnight Sleeper Coach (Saves a hotel night!)</i></div>
              </td>
              <td class="col-table-action">
                <button type="button" class="btn-table-map" title="Focus map on Zurich ➔ Paris">
                  📍 Map
                </button>
              </td>
            </tr>`;

html = html.replace(oldD14Row, newD14Row);

// Day 20 Master Table Row
const oldD20Row = `            <tr class="itinerary-table-row row-badge-transit" data-country="Transit">
              <td class="col-table-day">
                <span class="table-day-badge">Day 20</span>
                <span class="table-date-str">03 Jan 2027</span>
              </td>
              <td class="col-table-loc">
                <div class="table-loc-name">Paris ➔ London</div>
                <span class="badge-country badge-transit">Transit</span>
              </td>
              <td class="col-table-plan">
                <div class="table-plan-title">Final Shopping & Eurotunnel Night Coach</div>
                <div class="table-activities-list">
        <div class="table-activity-item">• <b>Morning (10:00 – 13:00):</b> Final souvenir shopping along Boulevard Saint-Michel and Le Marais; pick up Parisian macarons (Ladurée) and French pastries.</div>
        <div class="table-activity-item">• <b>Afternoon (14:00 – 18:00):</b> Pack suitcases at hotel, relaxed afternoon café time along the Seine.</div>
        <div class="table-activity-item">• <b>Night (21:30 – 23:00):</b> Transfer to Paris Bercy Seine terminal; board 23:00 FlixBus overnight coach crossing back to London via the Eurotunnel.</div>
      </div>
                <div class="table-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (Pont Alexandre III, Paris walking & Eurotunnel coach transit)</div>
                <div class="table-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 Pont Alexandre III &amp; Seine Stroll: Open 24/7</span> <span class="opening-pill open">🟢 Paris Bakeries &amp; Ladurée: Open Sunday 10:00–18:00</span> <span class="opening-pill open">🟢 FlixBus Overnight Coach: Departs 23:00</span></div>
              </td>
              <td class="col-table-stay">
                <div class="table-hotel-name">FlixBus Overnight</div>
                <div class="table-hotel-addr">Paris Bercy ➔ London Victoria</div>
                <div class="table-transit-mode"><i>🚇 Metro Line 14 + FlixBus Sleeper Transit</i></div>
              </td>
              <td class="col-table-action">
                <button type="button" class="btn-table-map" title="Focus map on Paris ➔ London">
                  📍 Map
                </button>
              </td>
            </tr>`;

const newD20Row = `            <tr class="itinerary-table-row row-badge-transit" data-country="Transit">
              <td class="col-table-day">
                <span class="table-day-badge">Day 20</span>
                <span class="table-date-str">03 Jan 2027</span>
              </td>
              <td class="col-table-loc">
                <div class="table-loc-name">Paris ➔ London Victoria</div>
                <span class="badge-country badge-transit">Transit</span>
              </td>
              <td class="col-table-plan">
                <div class="table-plan-title">Final Parisian Highlights · Confirmed FlixBus Route 1700 to London</div>
                <div class="table-activities-list">
        <div class="table-activity-item">• <b>Morning (10:00 – 13:00):</b> Final souvenir shopping along Boulevard Saint-Michel and Le Marais; pick up Parisian macarons (Ladurée) and French pastries. Stroll across the golden <b>Pont Alexandre III</b> overlooking the Grand Palais.</div>
        <div class="table-activity-item">• <b>Afternoon (14:00 – 18:00):</b> Pack bags, relaxed afternoon café time along the Seine and peaceful reflection on 21 incredible days.</div>
        <div class="table-activity-item">• <b>Night (21:30 – 23:00):</b> Transfer to <b>Paris Bercy Seine</b> terminal (210 Quai de Bercy). Board confirmed <b>FlixBus Route 1700</b> departing at 11:00 PM (23:00) direct to London Victoria Coach Station (Booking Ref: <b>338 920 9866</b> · AUD $169.98 Paid). Undersea Eurotunnel crossing back into Great Britain!</div>
      </div>
                <div class="table-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (Pont Alexandre III, Paris walking & Eurotunnel coach transit)</div>
                <div class="table-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 Pont Alexandre III &amp; Seine: Open 24/7</span> <span class="opening-pill open">🟢 Paris Bakeries &amp; Ladurée: Open Sun 10:00–18:00</span> <span class="opening-pill open">🟢 FlixBus Route 1700: Departs 23:00</span> <span class="schedule-note">Confirmed Booking: 338 920 9866</span></div>
              </td>
              <td class="col-table-stay">
                <div class="table-hotel-name">FlixBus Route 1700 Sleeper (Confirmed)</div>
                <div class="table-hotel-addr">Paris Bercy Seine ➔ London Victoria Coach Station</div>
                <div class="table-transit-mode"><i>🚌 FlixBus 1700 (23:00–07:25+1d) · AUD $169.98 Paid</i></div>
              </td>
              <td class="col-table-action">
                <button type="button" class="btn-table-map" title="Focus map on Paris ➔ London">
                  📍 Map
                </button>
              </td>
            </tr>`;

html = html.replace(oldD20Row, newD20Row);

console.log('Updated Master Table rows in index.html');

// =========================================================================
// 5. UPDATE DAY CARDS IN index.html (EXACT STRING REPLACEMENTS)
// =========================================================================

// Day 1 Card
const exactD1CardOld = `      <div class="day-card highlight-transit" data-country="Transit">
        <div class="day-card-header">
          <div class="day-card-meta">
            <span class="card-day-badge">Day 1</span>
            <span class="card-date-badge">15 Dec 2026</span>
            <span class="badge-country badge-transit">Transit</span>
          </div>
          <div class="day-card-city">
            <span class="city-icon">📍</span>
            <span class="city-text">London ➔ Amsterdam</span>
          </div>
        </div>
        <div class="day-card-content">
          <div class="day-card-main">
            <h4 class="card-day-theme">Departure Across the English Channel</h4>
            <div class="card-activities-list">
        <div class="card-activity-item">• <b>Evening (18:30 – 21:30):</b> Departure prep & baggage check-in at <b>London Victoria Coach Station</b> (164 Buckingham Palace Rd).</div>
        <div class="card-activity-item">• <b>Night (22:00 – 03:00):</b> Board <b>FlixBus N824</b> overnight coach. Transit across Kent countryside to Dover port. LeShuttle / Ferry crossing beneath the English Channel into France/Belgium.</div>
        <div class="card-activity-item">• <b>Early Morning (03:00 – 08:30+1d):</b> Continuous overnight sleeper coach transit across northern France and Belgium towards the Netherlands.</div>
      </div>
            <div class="card-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (London departure & overnight coach transit)</div>
            <div class="card-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 Victoria Coach Station: Open 24/7 (365 Days)</span> <span class="opening-pill open">🟢 Eurotunnel / LeShuttle: 24/7 departures</span> <span class="schedule-note">FlixBus N824 boarding 21:30–22:00</span></div>
          </div>
          <div class="day-card-side">
            <div class="card-stay-box">
              <div class="stay-header-label">🏨 Accommodation &amp; Transit</div>
              <div class="stay-hotel-name">FlixBus N824 Sleeper Coach</div>
              <div class="stay-hotel-addr">London Victoria ➔ Amsterdam Sloterdijk</div>
              <div class="stay-transit-badge">🚌 FlixBus N824 (Overnight Reclining Coach)</div>
              <button type="button" class="btn-card-map" data-day="Day 1">
                📍 Focus on Map
              </button>
            </div>
          </div>
        </div>
      </div>`;

const exactD1CardNew = `      <div class="day-card highlight-transit" data-country="Transit">
        <div class="day-card-header">
          <div class="day-card-meta">
            <span class="card-day-badge">Day 1</span>
            <span class="card-date-badge">15 Dec 2026</span>
            <span class="badge-country badge-transit">Transit</span>
          </div>
          <div class="day-card-city">
            <span class="city-icon">📍</span>
            <span class="city-text">London ➔ Amsterdam Central</span>
          </div>
        </div>
        <div class="day-card-content">
          <div class="day-card-main">
            <h4 class="card-day-theme">Departure Across English Channel · FlixBus Route N824 (Confirmed)</h4>
            <div class="card-activities-list">
        <div class="card-activity-item">• <b>Evening (19:00 – 21:30):</b> Departure prep & baggage check-in at <b>London Victoria Coach Station</b> (164 Buckingham Palace Rd).</div>
        <div class="card-activity-item">• <b>Night (22:00 – 03:00):</b> Board confirmed <b>FlixBus Route N824</b> (Departs 10:00 PM / 22:00 · Booking Ref: <b>338 890 0447</b> · Seats: <b>11C &amp; 11D</b> for Jean Aquino &amp; Avery Belleza). Transit across Kent to Dover port; Eurotunnel / LeShuttle undersea crossing into France.</div>
        <div class="card-activity-item">• <b>Early Morning (03:00 – 10:25+1d):</b> Continuous overnight sleeper coach transit across northern France and Belgium directly to <b>Amsterdam Central Station (De Ruijterkade 153)</b> arriving at 10:25 AM.</div>
      </div>
            <div class="card-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (London departure & overnight coach transit)</div>
            <div class="card-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 Victoria Coach Station: Open 24/7 (365 Days)</span> <span class="opening-pill open">🟢 FlixBus N824: Departs 22:00</span> <span class="schedule-note">Confirmed Booking: 338 890 0447</span></div>
          </div>
          <div class="day-card-side">
            <div class="card-stay-box">
              <div class="stay-header-label">🏨 Accommodation &amp; Transit</div>
              <div class="stay-hotel-name">FlixBus N824 Sleeper (Confirmed)</div>
              <div class="stay-hotel-addr">London Victoria ➔ Amsterdam Central (De Ruijterkade 153)</div>
              <div class="stay-transit-badge">🚌 FlixBus N824 · Seats 11C &amp; 11D (AUD $135.96 Paid)</div>
              <button type="button" class="btn-card-map" data-day="Day 1">
                📍 Focus on Map
              </button>
            </div>
          </div>
        </div>
      </div>`;

html = html.replace(exactD1CardOld, exactD1CardNew);

// Day 9 Card
const exactD9CardOld = `      <div class="day-card highlight-france" data-country="France">
        <div class="day-card-header">
          <div class="day-card-meta">
            <span class="card-day-badge">Day 9</span>
            <span class="card-date-badge">23 Dec 2026</span>
            <span class="badge-country badge-fr">France</span>
          </div>
          <div class="day-card-city">
            <span class="city-icon">📍</span>
            <span class="city-text">Colmar (from Kehl Base)</span>
          </div>
        </div>
        <div class="day-card-content">
          <div class="day-card-main">
            <h4 class="card-day-theme">Fairytale Colmar · Petite Venise, Beauty &amp; the Beast &amp; Howl's Moving Castle Trail</h4>
            <div class="card-activities-list">
        <div class="card-activity-item">• <b>Morning (09:00 – 10:30):</b> Scenic 30-minute SNCF TER regional train journey along the Alsatian Wine Route from Strasbourg Gare to Colmar.</div>
        <div class="card-activity-item">• <b>Daytime (10:30 – 15:30):</b> Stroll through <b>Petite Venise</b> &amp; Quai de la Poissonnerie, whose pastel half-timbered canals and fountains inspired Belle's village in Disney's <b>Beauty and the Beast</b>. Walk down Rue des Marchands to marvel at the 1537 Renaissance <b>Maison Pfister</b>, the iconic architectural inspiration for Hayao Miyazaki's Studio Ghibli classic <b>Howl's Moving Castle</b>. Explore the medieval Koïfhus customs house.</div>
        <div class="card-activity-item">• <b>Evening (16:00 – 19:30):</b> Explore Colmar's 6 magical Christmas Markets (Place des Dominicains &amp; Place de l'Ancienne Douane). Savor warm Alsatian Tarte Flambée (Flammekueche) and spiced Vin Chaud. Return via 30-min TER train to Kehl base.</div>
      </div>
            <div class="card-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (Colmar Petite Venise, Maison Pfister & 6 Christmas Markets)</div>
            <div class="card-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 Colmar 6 Christmas Markets: Open 11:00–19:00 (Runs through 29 Dec)</span> <span class="opening-pill open">🟢 Petite Venise &amp; Maison Pfister: Open 24/7</span></div>
          </div>
          <div class="day-card-side">
            <div class="card-stay-box">
              <div class="stay-header-label">🏨 Accommodation &amp; Transit</div>
              <div class="stay-hotel-name">B&B Hotel Kehl (Base for Alsace)</div>
              <div class="stay-hotel-addr">15 Allensteiner Str., 77694 Kehl · <i>Base to visit Strasbourg &amp; Colmar</i></div>
              <div class="stay-transit-badge">🚆 SNCF TER Fluo Train Return (€16.00)</div>
              <button type="button" class="btn-card-map" data-day="Day 9">
                📍 Focus on Map
              </button>
            </div>
          </div>
        </div>
      </div>`;

const exactD9CardNew = `      <div class="day-card highlight-france" data-country="France">
        <div class="day-card-header">
          <div class="day-card-meta">
            <span class="card-day-badge">Day 9</span>
            <span class="card-date-badge">23 Dec 2026</span>
            <span class="badge-country badge-fr">France</span>
          </div>
          <div class="day-card-city">
            <span class="city-icon">📍</span>
            <span class="city-text">Frankfurt ➔ Strasbourg</span>
          </div>
        </div>
        <div class="day-card-content">
          <div class="day-card-main">
            <h4 class="card-day-theme">FlixBus N13 ➔ Strasbourg Capital of Christmas · Christkindelsmärik &amp; Petite France</h4>
            <div class="card-activities-list">
        <div class="card-activity-item">• <b>Early Morning (04:35 – 08:35):</b> Board confirmed <b>FlixBus Route N13</b> at Frankfurt Central Train Station (Stuttgarter Str. 26). Cross the Rhine into France, arriving at <b>Strasbourg Place de l'Étoile at 08:35 AM</b> (Booking Ref: <b>339 153 0857</b> · Seats: <b>3A &amp; 3B</b> for Jean Aquino &amp; Avery Belleza · AUD $79.96 Paid).</div>
        <div class="card-activity-item">• <b>Morning &amp; Midday (09:00 – 14:00):</b> Drop luggage at Alsace base. Stroll to <b>Place Kléber</b> to behold the towering 30-meter illuminated Great Christmas Tree (<i>Grand Sapin</i>) and explore the world-famous <b>Christkindelsmärik</b> (held since 1570).</div>
        <div class="card-activity-item">• <b>Afternoon &amp; Evening (14:30 – 20:30):</b> Wander through the fairytale half-timbered canal quarter of <b>Petite France</b> and marvel at the pink sandstone Gothic spire of <b>Strasbourg Cathedral (Cathédrale Notre-Dame)</b>. Savor warm Flammekueche (tarte flambée) and spiced vin chaud.</div>
      </div>
            <div class="card-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (Strasbourg Cathedral, Petite France & Place Kléber Great Tree)</div>
            <div class="card-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 FlixBus N13: Departs 04:35 (Arr 08:35)</span> <span class="opening-pill open">🟢 Strasbourg Christmas Markets: Open 11:00–20:00</span> <span class="opening-pill open">🟢 Cathedral: Open 08:30–19:00</span></div>
          </div>
          <div class="day-card-side">
            <div class="card-stay-box">
              <div class="stay-header-label">🏨 Accommodation &amp; Transit</div>
              <div class="stay-hotel-name">B&B Hotel Kehl (Base for Alsace · Night 1 of 2)</div>
              <div class="stay-hotel-addr">15 Allensteiner Str., 77694 Kehl · <i>15-min direct Tram D into Strasbourg</i></div>
              <div class="stay-transit-badge">🚌 FlixBus N13 (04:35–08:35) + 🚋 Strasbourg Tram Line D</div>
              <button type="button" class="btn-card-map" data-day="Day 9">
                📍 Focus on Map
              </button>
            </div>
          </div>
        </div>
      </div>`;

html = html.replace(exactD9CardOld, exactD9CardNew);

// Day 10 Card
const exactD10CardOld = `      <div class="day-card highlight-swiss" data-country="Switzerland">
        <div class="day-card-header">
          <div class="day-card-meta">
            <span class="card-day-badge">Day 10</span>
            <span class="card-date-badge">24 Dec 2026</span>
            <span class="badge-country badge-ch">Switzerland</span>
          </div>
          <div class="day-card-city">
            <span class="city-icon">📍</span>
            <span class="city-text">Interlaken</span>
          </div>
        </div>
        <div class="day-card-content">
          <div class="day-card-main">
            <h4 class="card-day-theme">Swiss Alpine Gateway & Christmas Eve</h4>
            <div class="card-activities-list">
        <div class="card-activity-item">• <b>Morning (08:30 – 12:00):</b> Scenic Swiss rail journey south via Basel SBB and the Swiss capital of <b>Bern</b> towards the snow-covered Bernese Oberland.</div>
        <div class="card-activity-item">• <b>Afternoon (12:30 – 16:00):</b> Check in at <b>Swiss Alps Base</b> in Interlaken. Winter walk through Höhematte park with panoramic views of the Jungfrau, Mönch, and Eiger massifs.</div>
        <div class="card-activity-item">• <b>Evening (17:00 – 20:30):</b> Christmas Eve in the Swiss Alps. Enjoy an authentic Swiss cheese fondue dinner; evening winter stroll along the turquoise Aare River.</div>
        <div class="card-activity-item">• <i>Nearby Sacred Site: Bern Switzerland Temple in Zollikofen is located just 9 mins from Bern HB via S-Bahn S3/S31.</i></div>
      </div>
            <div class="card-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (Bern Temple & Interlaken Höhematte Jungfrau view)</div>
            <div class="card-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 Bern Old Town &amp; Zytglogge: Open 24/7</span> <span class="opening-pill open">🟢 Interlaken Höhematte: Open 24/7</span> <span class="opening-pill open">🟢 Swiss Trains: Regular holiday timetable</span> <span class="schedule-note">Bern Temple exterior grounds open (session rooms close early for Christmas Eve)</span></div>
          </div>
          <div class="day-card-side">
            <div class="card-stay-box">
              <div class="stay-header-label">🏨 Accommodation &amp; Transit</div>
              <div class="stay-hotel-name">Swiss Alps Base (Interlaken)</div>
              <div class="stay-hotel-addr">Central Interlaken, Switzerland</div>
              <div class="stay-transit-badge">🚆 SBB EuroCity / InterCity Train (Half Fare Card)</div>
              <button type="button" class="btn-card-map" data-day="Day 10">
                📍 Focus on Map
              </button>
            </div>
          </div>
        </div>
      </div>`;

const exactD10CardNew = `      <div class="day-card highlight-france" data-country="France">
        <div class="day-card-header">
          <div class="day-card-meta">
            <span class="card-day-badge">Day 10</span>
            <span class="card-date-badge">24 Dec 2026</span>
            <span class="badge-country badge-fr">France</span>
          </div>
          <div class="day-card-city">
            <span class="city-icon">📍</span>
            <span class="city-text">Colmar &amp; Alsace</span>
          </div>
        </div>
        <div class="day-card-content">
          <div class="day-card-main">
            <h4 class="card-day-theme">Fairytale Colmar · Petite Venise, Maison Pfister &amp; Christmas Eve in Alsace</h4>
            <div class="card-activities-list">
        <div class="card-activity-item">• <b>Morning (09:30 – 12:30):</b> Scenic 30-minute SNCF TER Fluo train along the Alsatian Wine Route to fairytale <b>Colmar</b>. Stroll through <b>Petite Venise</b> &amp; Quai de la Poissonnerie, whose pastel half-timbered canals and bridges directly inspired Belle's village in Disney's <i>Beauty and the Beast</i>.</div>
        <div class="card-activity-item">• <b>Afternoon (13:00 – 16:30):</b> Walk down Rue des Marchands to marvel at the 1537 Renaissance <b>Maison Pfister</b>, the iconic architectural inspiration for Hayao Miyazaki's Studio Ghibli masterpiece <i>Howl's Moving Castle</i>. Explore Colmar's holiday markets before early Christmas Eve closing.</div>
        <div class="card-activity-item">• <b>Evening (17:00 – 21:00):</b> Celebrate an unforgettable <b>Christmas Eve in Alsace</b>! Savor authentic Kougelhopf pastries, festive dinner, and peaceful evening illuminations. Return to Alsace Base (Night 2 of 2). Rest early for early dawn Christmas coach to Switzerland!</div>
      </div>
            <div class="card-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (Colmar Petite Venise, Maison Pfister & Christmas Eve illuminations)</div>
            <div class="card-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 Colmar Markets: Open until 17:00 (Christmas Eve)</span> <span class="opening-pill open">🟢 Petite Venise &amp; Maison Pfister: Open 24/7</span> <span class="schedule-note">Early night rest for 04:05 AM Christmas coach</span></div>
          </div>
          <div class="day-card-side">
            <div class="card-stay-box">
              <div class="stay-header-label">🏨 Accommodation &amp; Transit</div>
              <div class="stay-hotel-name">B&B Hotel Kehl (Base for Alsace · Night 2 of 2)</div>
              <div class="stay-hotel-addr">15 Allensteiner Str., 77694 Kehl · <i>Christmas Eve in Alsace</i></div>
              <div class="stay-transit-badge">🚆 SNCF TER Fluo Train (€16.00) + 🚋 Tram Line D</div>
              <button type="button" class="btn-card-map" data-day="Day 10">
                📍 Focus on Map
              </button>
            </div>
          </div>
        </div>
      </div>`;

html = html.replace(exactD10CardOld, exactD10CardNew);

// Day 11 Card
const exactD11CardOld = `      <div class="day-card highlight-swiss" data-country="Switzerland">
        <div class="day-card-header">
          <div class="day-card-meta">
            <span class="card-day-badge">Day 11</span>
            <span class="card-date-badge">25 Dec 2026</span>
            <span class="badge-country badge-ch">Switzerland</span>
          </div>
          <div class="day-card-city">
            <span class="city-icon">📍</span>
            <span class="city-text">Grindelwald First</span>
          </div>
        </div>
        <div class="day-card-content">
          <div class="day-card-main">
            <h4 class="card-day-theme">Alpine Cliff Walk & Bachalpsee Snow Trail</h4>
            <div class="card-activities-list">
        <div class="card-activity-item">• <b>Morning (09:00 – 12:30):</b> Take the Bernese Oberland Bahn (BOB) train to Grindelwald, then ascend 2,168m via the 6-seater First gondola. Brave the thrilling <b>First Cliff Walk by Tissot</b> suspended along sheer alpine rock faces.</div>
        <div class="card-activity-item">• <b>Afternoon (13:00 – 15:30):</b> Winter walking trail towards frozen <b>Lake Bachalpsee</b> with dramatic views of the Eiger North Face. Optional First Flieger zipline flight.</div>
        <div class="card-activity-item">• <b>Evening (16:30 – 20:00):</b> Christmas Day celebratory dinner in the snowy alpine chalets of Grindelwald village before scenic train return to Interlaken.</div>
      </div>
            <div class="card-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (First Cliff Walk by Tissot summit walkway is Free; gondola covered by Swiss pass)</div>
            <div class="card-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 Grindelwald-First Gondola: Confirmed Open Christmas Day (08:30–16:30)</span> <span class="opening-pill open">🟢 First Cliff Walk by Tissot: Open 09:00–16:00</span> <span class="schedule-note">Winter ski season in daily operation</span></div>
          </div>
          <div class="day-card-side">
            <div class="card-stay-box">
              <div class="stay-header-label">🏨 Accommodation &amp; Transit</div>
              <div class="stay-hotel-name">Swiss Alps Base (Interlaken)</div>
              <div class="stay-hotel-addr">Central Interlaken, Switzerland</div>
              <div class="stay-transit-badge">🚠 BOB Train + First Gondola Cableway (50% off Half Fare)</div>
              <button type="button" class="btn-card-map" data-day="Day 11">
                📍 Focus on Map
              </button>
            </div>
          </div>
        </div>
      </div>`;

const exactD11CardNew = `      <div class="day-card highlight-swiss" data-country="Switzerland">
        <div class="day-card-header">
          <div class="day-card-meta">
            <span class="card-day-badge">Day 11</span>
            <span class="card-date-badge">25 Dec 2026</span>
            <span class="badge-country badge-ch">Switzerland</span>
          </div>
          <div class="day-card-city">
            <span class="city-icon">📍</span>
            <span class="city-text">Luzern &amp; Interlaken</span>
          </div>
        </div>
        <div class="day-card-content">
          <div class="day-card-main">
            <h4 class="card-day-theme">Christmas Dawn Coach ➔ Lucerne (Kapellbrücke) ➔ Scenic Alpine Train to Interlaken</h4>
            <div class="card-activities-list">
        <div class="card-activity-item">• <b>Christmas Dawn (04:05 – 07:10):</b> Board confirmed <b>FlixBus Route N846</b> at Strasbourg Place de l'Étoile. Travel across the Swiss border, arriving in <b>Luzern (Lucerne) at 07:10 AM on Christmas Morning</b>! (Booking Ref: <b>339 152 8020</b> · Seats: <b>11C &amp; 11D</b> for Jean Aquino &amp; Avery Belleza · AUD $76.96 Paid).</div>
        <div class="card-activity-item">• <b>Morning (07:30 – 11:30):</b> <b>Christmas Morning in Lucerne</b>! Walk across the world-famous medieval wooden <b>Kapellbrücke (Chapel Bridge)</b> with its historic octagonal Water Tower on the Reuss River. Visit the poignant <b>Lion Monument (Löwendenkmal)</b> carved into natural cliff rock, and stroll the Lake Lucerne promenade facing snow-covered Mount Pilatus and Mount Rigi.</div>
        <div class="card-activity-item">• <b>Midday &amp; Afternoon (12:00 – 15:30):</b> Board the scenic <b>Zentralbahn (Luzern-Interlaken Express)</b> panoramic train over the Brünig Pass, passing turquoise alpine lakes and snow-capped peaks into Interlaken. Check in at <b>Swiss Alps Base</b>.</div>
        <div class="card-activity-item">• <b>Evening (16:30 – 20:30):</b> Christmas walk through Höhematte park with panoramic views of the Jungfrau, Mönch, and Eiger massifs. Celebratory Christmas Day dinner with an authentic Swiss cheese fondue!</div>
      </div>
            <div class="card-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (Kapellbrücke, Lion Monument, Lake Lucerne & Interlaken Höhematte)</div>
            <div class="card-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 FlixBus N846: Departs 04:05 (Arr 07:10)</span> <span class="opening-pill open">🟢 Kapellbrücke &amp; Lion Monument: Open 24/7</span> <span class="opening-pill open">🟢 Swiss Trains: Regular holiday timetable</span></div>
          </div>
          <div class="day-card-side">
            <div class="card-stay-box">
              <div class="stay-header-label">🏨 Accommodation &amp; Transit</div>
              <div class="stay-hotel-name">Swiss Alps Base (Interlaken · Night 1 of 3)</div>
              <div class="stay-hotel-addr">Central Interlaken, Switzerland</div>
              <div class="stay-transit-badge">🚌 FlixBus N846 (04:05–07:10) + 🚆 SBB Zentralbahn Express</div>
              <button type="button" class="btn-card-map" data-day="Day 11">
                📍 Focus on Map
              </button>
            </div>
          </div>
        </div>
      </div>`;

html = html.replace(exactD11CardOld, exactD11CardNew);

// Day 14 Card
const exactD14CardOld = `      <div class="day-card highlight-transit" data-country="Transit">
        <div class="day-card-header">
          <div class="day-card-meta">
            <span class="card-day-badge">Day 14</span>
            <span class="card-date-badge">28 Dec 2026</span>
            <span class="badge-country badge-transit">Transit</span>
          </div>
          <div class="day-card-city">
            <span class="city-icon">📍</span>
            <span class="city-text">Zurich ➔ Paris</span>
          </div>
        </div>
        <div class="day-card-content">
          <div class="day-card-main">
            <h4 class="card-day-theme">Lake Zurich & Overnight Sleeper Coach</h4>
            <div class="card-activities-list">
        <div class="card-activity-item">• <b>Morning (09:00 – 11:30):</b> Scenic train journey across central Switzerland from Interlaken Ost via Lucerne to <b>Zurich Hauptbahnhof</b>.</div>
        <div class="card-activity-item">• <b>Afternoon (12:00 – 17:00):</b> Walk along the <b>Lake Zurich</b> promenade, explore historic Lindenhof hill overlooking the Limmat River, and taste world-class chocolate along Bahnhofstrasse.</div>
        <div class="card-activity-item">• <b>Night (21:00 – 06:40+1d):</b> Board the direct overnight FlixBus sleeper coach from Zurich Bus Station (near HB) to Paris Bercy Seine.</div>
      </div>
            <div class="card-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (Lucerne Kapellbrücke, Lion Monument & Zurich Lake)</div>
            <div class="card-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 Lucerne Kapellbrücke &amp; Lion Monument: Open 24/7</span> <span class="opening-pill open">🟢 Lake Zurich &amp; Lindenhof: Open 24/7</span> <span class="opening-pill open">🟢 Bahnhofstrasse Chocolate Boutiques: Open 09:00–19:00</span></div>
          </div>
          <div class="day-card-side">
            <div class="card-stay-box">
              <div class="stay-header-label">🏨 Accommodation &amp; Transit</div>
              <div class="stay-hotel-name">FlixBus Overnight</div>
              <div class="stay-hotel-addr">Direct to Paris Bercy Seine</div>
              <div class="stay-transit-badge">🚆 SBB InterCity Train + Overnight FlixBus Coach</div>
              <button type="button" class="btn-card-map" data-day="Day 14">
                📍 Focus on Map
              </button>
            </div>
          </div>
        </div>
      </div>`;

const exactD14CardNew = `      <div class="day-card highlight-transit" data-country="Transit">
        <div class="day-card-header">
          <div class="day-card-meta">
            <span class="card-day-badge">Day 14</span>
            <span class="card-date-badge">28 Dec 2026</span>
            <span class="badge-country badge-transit">Transit</span>
          </div>
          <div class="day-card-city">
            <span class="city-icon">📍</span>
            <span class="city-text">Grindelwald &amp; Zurich ➔ Paris</span>
          </div>
        </div>
        <div class="day-card-content">
          <div class="day-card-main">
            <h4 class="card-day-theme">Grindelwald First Cliff Walk &amp; Lake Zurich ➔ Overnight Sleeper Coach to Paris</h4>
            <div class="card-activities-list">
        <div class="card-activity-item">• <b>Morning (08:30 – 12:30):</b> Morning excursion to Grindelwald. Ascend 2,168m via the 6-seater First gondola cableway; brave the thrilling metal walkway of the <b>First Cliff Walk by Tissot</b> suspended along sheer alpine rock faces facing the snowy Eiger North Face.</div>
        <div class="card-activity-item">• <b>Afternoon (13:00 – 17:30):</b> Scenic train journey from the Bernese Oberland through the Swiss heartland via Bern to <b>Zurich Hauptbahnhof</b>. Walk the <b>Lake Zurich</b> promenade, admire Limmat views from Lindenhof hill, and browse luxury chocolate boutiques on Bahnhofstrasse.</div>
        <div class="card-activity-item">• <b>Night (21:00 – 06:40+1d):</b> Board the direct overnight sleeper coach from Zurich Bus Station (near HB) to Paris Bercy Seine.</div>
      </div>
            <div class="card-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (First Cliff Walk by Tissot walkway is Free; Lake Zurich & Lindenhof)</div>
            <div class="card-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 Grindelwald First Gondola: Open 08:30–16:30</span> <span class="opening-pill open">🟢 Lake Zurich &amp; Lindenhof: Open 24/7</span> <span class="opening-pill open">🟢 Overnight Coach: Departs 21:00</span></div>
          </div>
          <div class="day-card-side">
            <div class="card-stay-box">
              <div class="stay-header-label">🏨 Accommodation &amp; Transit</div>
              <div class="stay-hotel-name">FlixBus Overnight Sleeper</div>
              <div class="stay-hotel-addr">Zurich Bus Station ➔ Paris Bercy Seine</div>
              <div class="stay-transit-badge">🚆 SBB InterCity + 🚌 Overnight Sleeper Coach (Saves a hotel night!)</div>
              <button type="button" class="btn-card-map" data-day="Day 14">
                📍 Focus on Map
              </button>
            </div>
          </div>
        </div>
      </div>`;

html = html.replace(exactD14CardOld, exactD14CardNew);

// Day 20 Card
const exactD20CardOld = `      <div class="day-card highlight-transit" data-country="Transit">
        <div class="day-card-header">
          <div class="day-card-meta">
            <span class="card-day-badge">Day 20</span>
            <span class="card-date-badge">03 Jan 2027</span>
            <span class="badge-country badge-transit">Transit</span>
          </div>
          <div class="day-card-city">
            <span class="city-icon">📍</span>
            <span class="city-text">Paris ➔ London</span>
          </div>
        </div>
        <div class="day-card-content">
          <div class="day-card-main">
            <h4 class="card-day-theme">Final Shopping & Eurotunnel Night Coach</h4>
            <div class="card-activities-list">
        <div class="card-activity-item">• <b>Morning (10:00 – 13:00):</b> Final souvenir shopping along Boulevard Saint-Michel and Le Marais; pick up Parisian macarons (Ladurée) and French pastries.</div>
        <div class="card-activity-item">• <b>Afternoon (14:00 – 18:00):</b> Pack suitcases at hotel, relaxed afternoon café time along the Seine.</div>
        <div class="card-activity-item">• <b>Night (21:30 – 23:00):</b> Transfer to Paris Bercy Seine terminal; board 23:00 FlixBus overnight coach crossing back to London via the Eurotunnel.</div>
      </div>
            <div class="card-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (Pont Alexandre III, Paris walking & Eurotunnel coach transit)</div>
            <div class="card-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 Pont Alexandre III &amp; Seine Stroll: Open 24/7</span> <span class="opening-pill open">🟢 Paris Bakeries &amp; Ladurée: Open Sunday 10:00–18:00</span> <span class="opening-pill open">🟢 FlixBus Overnight Coach: Departs 23:00</span></div>
          </div>
          <div class="day-card-side">
            <div class="card-stay-box">
              <div class="stay-header-label">🏨 Accommodation &amp; Transit</div>
              <div class="stay-hotel-name">FlixBus Overnight</div>
              <div class="stay-hotel-addr">Paris Bercy ➔ London Victoria</div>
              <div class="stay-transit-badge">🚇 Metro Line 14 + FlixBus Sleeper Transit</div>
              <button type="button" class="btn-card-map" data-day="Day 20">
                📍 Focus on Map
              </button>
            </div>
          </div>
        </div>
      </div>`;

const exactD20CardNew = `      <div class="day-card highlight-transit" data-country="Transit">
        <div class="day-card-header">
          <div class="day-card-meta">
            <span class="card-day-badge">Day 20</span>
            <span class="card-date-badge">03 Jan 2027</span>
            <span class="badge-country badge-transit">Transit</span>
          </div>
          <div class="day-card-city">
            <span class="city-icon">📍</span>
            <span class="city-text">Paris ➔ London Victoria</span>
          </div>
        </div>
        <div class="day-card-content">
          <div class="day-card-main">
            <h4 class="card-day-theme">Final Parisian Highlights · Confirmed FlixBus Route 1700 to London</h4>
            <div class="card-activities-list">
        <div class="card-activity-item">• <b>Morning (10:00 – 13:00):</b> Final souvenir shopping along Boulevard Saint-Michel and Le Marais; pick up Parisian macarons (Ladurée) and French pastries. Stroll across the golden <b>Pont Alexandre III</b> overlooking the Grand Palais.</div>
        <div class="card-activity-item">• <b>Afternoon (14:00 – 18:00):</b> Pack bags, relaxed afternoon café time along the Seine and peaceful reflection on 21 incredible days.</div>
        <div class="card-activity-item">• <b>Night (21:30 – 23:00):</b> Transfer to <b>Paris Bercy Seine</b> terminal (210 Quai de Bercy). Board confirmed <b>FlixBus Route 1700</b> departing at 11:00 PM (23:00) direct to London Victoria Coach Station (Booking Ref: <b>338 920 9866</b> · AUD $169.98 Paid). Undersea Eurotunnel crossing back into Great Britain!</div>
      </div>
            <div class="card-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (Pont Alexandre III, Paris walking & Eurotunnel coach transit)</div>
            <div class="card-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 Pont Alexandre III &amp; Seine: Open 24/7</span> <span class="opening-pill open">🟢 Paris Bakeries &amp; Ladurée: Open Sun 10:00–18:00</span> <span class="opening-pill open">🟢 FlixBus Route 1700: Departs 23:00</span> <span class="schedule-note">Confirmed Booking: 338 920 9866</span></div>
          </div>
          <div class="day-card-side">
            <div class="card-stay-box">
              <div class="stay-header-label">🏨 Accommodation &amp; Transit</div>
              <div class="stay-hotel-name">FlixBus Route 1700 Sleeper (Confirmed)</div>
              <div class="stay-hotel-addr">Paris Bercy Seine ➔ London Victoria Coach Station</div>
              <div class="stay-transit-badge">🚌 FlixBus 1700 (23:00–07:25+1d) · AUD $169.98 Paid</div>
              <button type="button" class="btn-card-map" data-day="Day 20">
                📍 Focus on Map
              </button>
            </div>
          </div>
        </div>
      </div>`;

html = html.replace(exactD20CardOld, exactD20CardNew);

console.log('Updated Day Cards in index.html');

// =========================================================================
// 6. ADD CONFIRMED CROSS-BORDER COACH TABLE TO BORDER COMPLIANCE SECTION
// =========================================================================
const borderFlixbusBlock = `
      <!-- Confirmed Cross-Border Coach Bookings Audit (Annex I Compliance) -->
      <div style="margin-top: 24px; background: white; border-radius: var(--radius-md); border: 1.5px solid #10b981; box-shadow: var(--shadow-sm); overflow: hidden;">
        <div style="background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%); padding: 14px 20px; border-bottom: 1px solid #a7f3d0; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
          <div style="font-weight: 800; font-size: 0.95rem; color: #065f46; display: flex; align-items: center; gap: 8px;">
            <span>🚌</span> Confirmed Cross-Border Transit Documents (FlixBus Official Bookings · Borders Code Annex I)
          </div>
          <span style="background: #059669; color: white; padding: 3px 10px; border-radius: 9999px; font-size: 0.75rem; font-weight: 800;">
            100% Verified &amp; Paid (AUD $462.86)
          </span>
        </div>
        <div class="table-responsive">
          <table style="width: 100%; border-collapse: collapse; font-size: 0.8rem; text-align: left;">
            <thead>
              <tr style="background: #f8fafc; border-bottom: 1px solid #e2e8f0; color: #475569; font-weight: 700;">
                <th style="padding: 10px 14px;">Booking Ref</th>
                <th style="padding: 10px 14px;">Route &amp; Carrier</th>
                <th style="padding: 10px 14px;">Journey &amp; Stations</th>
                <th style="padding: 10px 14px;">Departure ➔ Arrival</th>
                <th style="padding: 10px 14px;">Seats &amp; Passengers</th>
                <th style="padding: 10px 14px;">Legal Schengen Function</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 10px 14px; font-family: monospace; font-weight: 700; color: #0f172a;">338 890 0447</td>
                <td style="padding: 10px 14px;"><b>Route N824</b><br><span style="font-size: 0.72rem; color: #64748b;">FlixBus B.V.</span></td>
                <td style="padding: 10px 14px;"><b>London Victoria</b> (164 Buckingham Palace Rd)<br>➔ <b>Amsterdam Central</b> (De Ruijterkade 153)</td>
                <td style="padding: 10px 14px;">15 Dec 2026 @ 22:00<br>➔ 16 Dec @ 10:25</td>
                <td style="padding: 10px 14px;"><b>11C</b> (Jean Aquino)<br><b>11D</b> (Avery Belleza)</td>
                <td style="padding: 10px 14px;"><span class="badge-status-open">🟢 Art. 5(1)(c) External Entry</span><br><span style="font-size: 0.72rem; color: #475569;">Juxtaposed French border control at Dover</span></td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9; background: #fafdfb;">
                <td style="padding: 10px 14px; font-family: monospace; font-weight: 700; color: #0f172a;">339 153 0857</td>
                <td style="padding: 10px 14px;"><b>Route N13</b><br><span style="font-size: 0.72rem; color: #64748b;">FlixBus DACH</span></td>
                <td style="padding: 10px 14px;"><b>Frankfurt Hbf</b> (Stuttgarter Str. 26)<br>➔ <b>Strasbourg</b> (Place de l'Étoile)</td>
                <td style="padding: 10px 14px;">23 Dec 2026 @ 04:35<br>➔ 23 Dec @ 08:35</td>
                <td style="padding: 10px 14px;"><b>3A</b> (Jean Aquino)<br><b>3B</b> (Avery Belleza)</td>
                <td style="padding: 10px 14px;"><span class="badge-status-open">🟢 Internal Cross-Border DE➔FR</span><br><span style="font-size: 0.72rem; color: #475569;">Entering Alsace main destination hub</span></td>
              </tr>
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 10px 14px; font-family: monospace; font-weight: 700; color: #0f172a;">339 152 8020</td>
                <td style="padding: 10px 14px;"><b>Route N846</b><br><span style="font-size: 0.72rem; color: #64748b;">FlixBus B.V.</span></td>
                <td style="padding: 10px 14px;"><b>Strasbourg</b> (Place de l'Étoile)<br>➔ <b>Luzern</b> (Landenbergstrasse, CH)</td>
                <td style="padding: 10px 14px;">25 Dec 2026 @ 04:05<br>➔ 25 Dec @ 07:10</td>
                <td style="padding: 10px 14px;"><b>11C</b> (Jean Aquino)<br><b>11D</b> (Avery Belleza)</td>
                <td style="padding: 10px 14px;"><span class="badge-status-open">🟢 Internal Cross-Border FR➔CH</span><br><span style="font-size: 0.72rem; color: #475569;">Christmas dawn transit into Switzerland</span></td>
              </tr>
              <tr style="background: #fafdfb;">
                <td style="padding: 10px 14px; font-family: monospace; font-weight: 700; color: #0f172a;">338 920 9866</td>
                <td style="padding: 10px 14px;"><b>Route 1700</b><br><span style="font-size: 0.72rem; color: #64748b;">FlixBus France</span></td>
                <td style="padding: 10px 14px;"><b>Paris Bercy</b> (210 Quai de Bercy)<br>➔ <b>London Victoria</b> (164 Buckingham Palace Rd)</td>
                <td style="padding: 10px 14px;">03 Jan 2027 @ 23:00<br>➔ 04 Jan @ 07:25</td>
                <td style="padding: 10px 14px;"><b>Unassigned</b><br>(Both Passengers)</td>
                <td style="padding: 10px 14px;"><span class="badge-status-open">🟢 Annex I(3)(b) External Exit</span><br><span style="font-size: 0.72rem; color: #475569;">Definitive return ticket departing Schengen</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>`;

if (!html.includes('Confirmed Cross-Border Transit Documents (FlixBus')) {
  html = html.replace('    <!-- 3. Legal Articles Verbatim -->', borderFlixbusBlock + '\n\n    <!-- 3. Legal Articles Verbatim -->');
  console.log('Added Confirmed Cross-Border Coach Table to Border Compliance Section');
}

fs.writeFileSync(indexHtmlPath, html, 'utf8');
console.log('Successfully wrote updated index.html');

console.log('ALL UPDATES APPLIED CLEANLY!');
