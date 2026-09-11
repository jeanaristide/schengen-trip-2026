const fs = require('fs');
const path = require('path');

const indexHtmlPath = path.join(__dirname, '../index.html');
const appJsPath = path.join(__dirname, '../js/app.js');
const galleryDataPath = path.join(__dirname, '../js/gallery-data.js');
const generatePdfPath = path.join(__dirname, '../generate_pdf.py');

let html = fs.readFileSync(indexHtmlPath, 'utf8');
let appJs = fs.readFileSync(appJsPath, 'utf8');
let gData = fs.readFileSync(galleryDataPath, 'utf8');
let pdfPy = fs.readFileSync(generatePdfPath, 'utf8');

console.log('Read all 4 files successfully.');

// =========================================================================
// 1. UPDATE index.html: 21-Day Schedule Matrix
// =========================================================================
html = html.replace(
  `<tr><td><strong>Day 13</strong> (27 Dec)</td><td>Sunday</td><td>Lake Brienz &amp; Sigriswil</td><td>Iseltwald CLOY Pier, Sigriswil Suspension Bridge</td><td>Open 24/7 (Iseltwald) · 08:00–20:00 (Sigriswil)</td><td><span class="badge-status-open">🟢 Verified Open</span></td></tr>`,
  `<tr><td><strong>Day 13</strong> (27 Dec)</td><td>Sunday</td><td>Lake Brienz, Sigriswil &amp; Blausee</td><td>Iseltwald CLOY Pier, Sigriswil Suspension Bridge, Blausee Nature Park (Path of 1,000 Lights)</td><td>Open 24/7 (Iseltwald) · 08:00–20:00 (Sigriswil) · 09:00–21:00 (Blausee)</td><td><span class="badge-status-open">🟢 Verified Open</span></td></tr>`
);

html = html.replace(
  `<tr><td><strong>Day 14</strong> (28 Dec)</td><td>Monday</td><td>Grindelwald &amp; Zurich ➔ Paris</td><td>Grindelwald First Cliff Walk by Tissot, Lake Zurich Promenade, Bahnhofstrasse, Overnight Coach</td><td>Gondola 08:30–16:30 · Lake Zurich 24/7 · Coach 21:00 departure</td><td><span class="badge-status-open">🟢 Verified Open</span></td></tr>`,
  `<tr><td><strong>Day 14</strong> (28 Dec)</td><td>Monday</td><td>Grindelwald, Rheinfall &amp; Zurich ➔ Paris</td><td>Grindelwald First Cliff Walk by Tissot, Rhine Falls (Schaffhausen free promenade), Lake Zurich &amp; Bahnhofstrasse, Overnight Coach</td><td>Gondola 08:30–16:30 · Rheinfall 24/7 (Free) · Lake Zurich 24/7 · Coach 21:00</td><td><span class="badge-status-open">🟢 Verified Open</span></td></tr>`
);

console.log('Updated 21-Day Schedule Matrix in index.html');

// =========================================================================
// 2. UPDATE index.html: Master Table Rows for Day 13 and Day 14
// =========================================================================
const oldD13Row = `            <tr class="itinerary-table-row row-badge-ch" data-country="Switzerland">
              <td class="col-table-day">
                <span class="table-day-badge">Day 13</span>
                <span class="table-date-str">27 Dec 2026</span>
              </td>
              <td class="col-table-loc">
                <div class="table-loc-name">Lake Brienz & Sigriswil</div>
                <span class="badge-country badge-ch">Switzerland</span>
              </td>
              <td class="col-table-plan">
                <div class="table-plan-title">Crash Landing on You (CLOY) Alpine Tour</div>
                <div class="table-activities-list">
        <div class="table-activity-item">• <b>Morning (09:30 – 12:30):</b> Take PostBus 103 to <b>Iseltwald</b> on Lake Brienz. Visit the world-famous wooden jetty where Captain Ri played the piano in <i>Crash Landing on You</i> with turquoise glacial waters.</div>
        <div class="table-activity-item">• <b>Afternoon (13:30 – 16:30):</b> Travel along Lake Thun to the <b>Sigriswil Panoramic Suspension Bridge</b>. Walk across the 340m pedestrian bridge suspended 182m above the Gummischlucht gorge (where Jeong-hyeok took Se-ri's photo).</div>
        <div class="table-activity-item">• <b>Evening (17:30 – 20:30):</b> Lakeside dinner overlooking the illuminated lights of Unterseen and Lake Brienz.</div>
      </div>
                <div class="table-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill paid">🎟️ Iseltwald CLOY Pier: 5 CHF (~A$9 AUD)</span> <span class="admission-pill paid">🎟️ Sigriswil Bridge: 8 CHF (~A$14 AUD)</span> <em>(Day 13 total paid: 13 CHF / ~A$23 AUD)</em></div>
                <div class="table-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 Iseltwald CLOY Pier: Open 24/7 (Automated 5 CHF Turnstile)</span> <span class="opening-pill open">🟢 Sigriswil Panoramic Bridge: Open 08:00–20:00 (365 Days)</span></div>
              </td>
              <td class="col-table-stay">
                <div class="table-hotel-name">Swiss Alps Base (Interlaken)</div>
                <div class="table-hotel-addr">Central Interlaken, Switzerland</div>
                <div class="table-transit-mode"><i>🚌 PostBus 103 + STI Bus 21/25 (Half Fare Card)</i></div>
              </td>
              <td class="col-table-action">
                <button type="button" class="btn-table-map" title="Focus map on Lake Brienz & Sigriswil">
                  📍 Map
                </button>
              </td>
            </tr>`;

const newD13Row = `            <tr class="itinerary-table-row row-badge-ch" data-country="Switzerland">
              <td class="col-table-day">
                <span class="table-day-badge">Day 13</span>
                <span class="table-date-str">27 Dec 2026</span>
              </td>
              <td class="col-table-loc">
                <div class="table-loc-name">Lake Brienz, Sigriswil &amp; Blausee</div>
                <span class="badge-country badge-ch">Switzerland</span>
              </td>
              <td class="col-table-plan">
                <div class="table-plan-title">CLOY Alpine Tour &amp; Magical Blausee Winter Illuminated Lake</div>
                <div class="table-activities-list">
        <div class="table-activity-item">• <b>Morning (09:30 – 12:30):</b> Take PostBus 103 to <b>Iseltwald</b> on Lake Brienz. Visit the world-famous wooden jetty where Captain Ri played the piano in <i>Crash Landing on You</i> with crystal turquoise glacial waters.</div>
        <div class="table-activity-item">• <b>Midday (13:15 – 15:30):</b> Travel along Lake Thun to the <b>Sigriswil Panoramic Suspension Bridge</b>. Walk across the 340m pedestrian bridge suspended 182m above the Gummischlucht gorge (where Jeong-hyeok took Se-ri's photo).</div>
        <div class="table-activity-item">• <b>Late Afternoon &amp; Twilight (16:15 – 19:15):</b> Short scenic train/bus transit via Spiez and Frutigen into the fairy-tale Kandersteg Valley to <b>Blausee Nature Park</b>! Fed by subterranean mountain springs that keep it unfrozen at 8°C year-round, marvel at the glowing turquoise water and stroll the Christmas <b>"Path of the 1,000 Lights"</b> (*Pfad der 1.000 Lichter*) illuminated lantern walk by the fire pits.</div>
      </div>
                <div class="table-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill paid">🎟️ Iseltwald CLOY Pier: 5 CHF (~A$9 AUD)</span> <span class="admission-pill paid">🎟️ Sigriswil Bridge: 8 CHF (~A$14 AUD)</span> <span class="admission-pill paid">🎟️ Blausee: 13 CHF (~A$22 AUD)</span> <em>(Day 13 total paid: 26 CHF / ~A$45 AUD)</em></div>
                <div class="table-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 Iseltwald CLOY Pier: Open 24/7</span> <span class="opening-pill open">🟢 Sigriswil Bridge: Open 08:00–20:00</span> <span class="opening-pill open">🟢 Blausee: Open 09:00–21:00 (1,000 Lights 16:00–20:00)</span></div>
              </td>
              <td class="col-table-stay">
                <div class="table-hotel-name">Swiss Alps Base (Interlaken · Night 3 of 3)</div>
                <div class="table-hotel-addr">Central Interlaken, Switzerland</div>
                <div class="table-transit-mode"><i>🚌 PostBus 103 + 🚆 SBB to Spiez/Frutigen + Bus 230 to Blausee</i></div>
              </td>
              <td class="col-table-action">
                <button type="button" class="btn-table-map" title="Focus map on Lake Brienz, Sigriswil &amp; Blausee">
                  📍 Map
                </button>
              </td>
            </tr>`;

html = html.replace(oldD13Row, newD13Row);

const oldD14Row = `            <tr class="itinerary-table-row row-badge-transit" data-country="Transit">
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

const newD14Row = `            <tr class="itinerary-table-row row-badge-transit" data-country="Transit">
              <td class="col-table-day">
                <span class="table-day-badge">Day 14</span>
                <span class="table-date-str">28 Dec 2026</span>
              </td>
              <td class="col-table-loc">
                <div class="table-loc-name">Grindelwald, Rheinfall &amp; Zurich ➔ Paris</div>
                <span class="badge-country badge-transit">Transit</span>
              </td>
              <td class="col-table-plan">
                <div class="table-plan-title">Grindelwald First Cliff Walk &amp; Rhine Falls Excursion ➔ Lake Zurich &amp; Overnight Sleeper to Paris</div>
                <div class="table-activities-list">
        <div class="table-activity-item">• <b>Morning (08:30 – 12:00):</b> Morning excursion to Grindelwald. Ascend 2,168m via the 6-seater First gondola cableway; brave the thrilling metal walkway of the <b>First Cliff Walk by Tissot</b> suspended along sheer alpine rock faces facing the snowy Eiger North Face.</div>
        <div class="table-activity-item">• <b>Afternoon (13:00 – 17:00):</b> Scenic train to <b>Zurich Hauptbahnhof</b>. Quick luggage storage at HB, then take the direct 48-minute S-Bahn S9 to <b>Rheinfall (Rhine Falls Schaffhausen)</b>, Europe's largest plain waterfall! Walk the public promenade along the northern bank by Schlössli Wörth for thunderous views and winter mist (Free 24/7 access).</div>
        <div class="table-activity-item">• <b>Evening &amp; Night (17:30 – 21:00):</b> Return to Zurich HB. Stroll along <b>Lake Zurich</b> promenade, admire Limmat views from Lindenhof hill, browse Bahnhofstrasse chocolatiers, then board the 21:00 overnight sleeper coach direct to Paris Bercy Seine.</div>
      </div>
                <div class="table-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (First Cliff Walk by Tissot, Rhine Falls North Bank &amp; Lake Zurich are all 100% Free!)</div>
                <div class="table-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 First Gondola: 08:30–16:30</span> <span class="opening-pill open">🟢 Rhine Falls: Open 24/7 (Free Access)</span> <span class="opening-pill open">🟢 Lake Zurich: Open 24/7</span> <span class="opening-pill open">🟢 Overnight Coach: Departs 21:00</span></div>
              </td>
              <td class="col-table-stay">
                <div class="table-hotel-name">FlixBus Overnight Sleeper</div>
                <div class="table-hotel-addr">Zurich Bus Station ➔ Paris Bercy Seine</div>
                <div class="table-transit-mode"><i>🚆 SBB InterCity + S-Bahn S9 to Rheinfall + 🚌 Overnight Sleeper Coach</i></div>
              </td>
              <td class="col-table-action">
                <button type="button" class="btn-table-map" title="Focus map on Grindelwald, Rheinfall &amp; Zurich">
                  📍 Map
                </button>
              </td>
            </tr>`;

html = html.replace(oldD14Row, newD14Row);

console.log('Updated Master Table rows in index.html');

// =========================================================================
// 3. UPDATE index.html: Day Cards for Day 13 and Day 14
// =========================================================================
const oldD13Card = `      <div class="day-card highlight-swiss" data-country="Switzerland">
        <div class="day-card-header">
          <div class="day-card-meta">
            <span class="card-day-badge">Day 13</span>
            <span class="card-date-badge">27 Dec 2026</span>
            <span class="badge-country badge-ch">Switzerland</span>
          </div>
          <div class="day-card-city">
            <span class="city-icon">📍</span>
            <span class="city-text">Lake Brienz & Sigriswil</span>
          </div>
        </div>
        <div class="day-card-content">
          <div class="day-card-main">
            <h4 class="card-day-theme">Crash Landing on You (CLOY) Alpine Tour</h4>
            <div class="card-activities-list">
        <div class="card-activity-item">• <b>Morning (09:30 – 12:30):</b> Take PostBus 103 to <b>Iseltwald</b> on Lake Brienz. Visit the world-famous wooden jetty where Captain Ri played the piano in <i>Crash Landing on You</i> with turquoise glacial waters.</div>
        <div class="card-activity-item">• <b>Afternoon (13:30 – 16:30):</b> Travel along Lake Thun to the <b>Sigriswil Panoramic Suspension Bridge</b>. Walk across the 340m pedestrian bridge suspended 182m above the Gummischlucht gorge (where Jeong-hyeok took Se-ri's photo).</div>
        <div class="card-activity-item">• <b>Evening (17:30 – 20:30):</b> Lakeside dinner overlooking the illuminated lights of Unterseen and Lake Brienz.</div>
      </div>
            <div class="card-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill paid">🎟️ Iseltwald CLOY Pier: 5 CHF (~A$9 AUD)</span> <span class="admission-pill paid">🎟️ Sigriswil Bridge: 8 CHF (~A$14 AUD)</span> <em>(Day 13 total paid: 13 CHF / ~A$23 AUD)</em></div>
            <div class="card-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 Iseltwald CLOY Pier: Open 24/7 (Automated 5 CHF Turnstile)</span> <span class="opening-pill open">🟢 Sigriswil Panoramic Bridge: Open 08:00–20:00 (365 Days)</span></div>
          </div>
          <div class="day-card-side">
            <div class="card-stay-box">
              <div class="stay-header-label">🏨 Accommodation &amp; Transit</div>
              <div class="stay-hotel-name">Swiss Alps Base (Interlaken)</div>
              <div class="stay-hotel-addr">Central Interlaken, Switzerland</div>
              <div class="stay-transit-badge">🚌 PostBus 103 + STI Bus 21/25 (Half Fare Card)</div>
              <button type="button" class="btn-card-map" data-day="Day 13">
                📍 Focus on Map
              </button>
            </div>
          </div>
        </div>
      </div>`;

const newD13Card = `      <div class="day-card highlight-swiss" data-country="Switzerland">
        <div class="day-card-header">
          <div class="day-card-meta">
            <span class="card-day-badge">Day 13</span>
            <span class="card-date-badge">27 Dec 2026</span>
            <span class="badge-country badge-ch">Switzerland</span>
          </div>
          <div class="day-card-city">
            <span class="city-icon">📍</span>
            <span class="city-text">Lake Brienz, Sigriswil &amp; Blausee</span>
          </div>
        </div>
        <div class="day-card-content">
          <div class="day-card-main">
            <h4 class="card-day-theme">CLOY Alpine Tour &amp; Magical Blausee Winter Illuminated Lake</h4>
            <div class="card-activities-list">
        <div class="card-activity-item">• <b>Morning (09:30 – 12:30):</b> Take PostBus 103 to <b>Iseltwald</b> on Lake Brienz. Visit the world-famous wooden jetty where Captain Ri played the piano in <i>Crash Landing on You</i> with crystal turquoise glacial waters.</div>
        <div class="card-activity-item">• <b>Midday (13:15 – 15:30):</b> Travel along Lake Thun to the <b>Sigriswil Panoramic Suspension Bridge</b>. Walk across the 340m pedestrian bridge suspended 182m above the Gummischlucht gorge (where Jeong-hyeok took Se-ri's photo).</div>
        <div class="card-activity-item">• <b>Late Afternoon &amp; Twilight (16:15 – 19:15):</b> Short scenic train/bus transit via Spiez and Frutigen into the fairy-tale Kandersteg Valley to <b>Blausee Nature Park</b>! Fed by subterranean mountain springs that keep it unfrozen at 8°C year-round, marvel at the glowing turquoise water and stroll the Christmas <b>"Path of the 1,000 Lights"</b> (*Pfad der 1.000 Lichter*) illuminated lantern walk by the fire pits.</div>
      </div>
            <div class="card-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill paid">🎟️ Iseltwald CLOY Pier: 5 CHF (~A$9 AUD)</span> <span class="admission-pill paid">🎟️ Sigriswil Bridge: 8 CHF (~A$14 AUD)</span> <span class="admission-pill paid">🎟️ Blausee: 13 CHF (~A$22 AUD)</span> <em>(Day 13 total paid: 26 CHF / ~A$45 AUD)</em></div>
            <div class="card-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 Iseltwald CLOY Pier: Open 24/7</span> <span class="opening-pill open">🟢 Sigriswil Bridge: Open 08:00–20:00</span> <span class="opening-pill open">🟢 Blausee: Open 09:00–21:00 (1,000 Lights 16:00–20:00)</span></div>
          </div>
          <div class="day-card-side">
            <div class="card-stay-box">
              <div class="stay-header-label">🏨 Accommodation &amp; Transit</div>
              <div class="stay-hotel-name">Swiss Alps Base (Interlaken · Night 3 of 3)</div>
              <div class="stay-hotel-addr">Central Interlaken, Switzerland</div>
              <div class="stay-transit-badge">🚌 PostBus 103 + 🚆 SBB to Spiez/Frutigen + Bus 230 to Blausee</div>
              <button type="button" class="btn-card-map" data-day="Day 13">
                📍 Focus on Map
              </button>
            </div>
          </div>
        </div>
      </div>`;

html = html.replace(oldD13Card, newD13Card);

const oldD14Card = `      <div class="day-card highlight-transit" data-country="Transit">
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

const newD14Card = `      <div class="day-card highlight-transit" data-country="Transit">
        <div class="day-card-header">
          <div class="day-card-meta">
            <span class="card-day-badge">Day 14</span>
            <span class="card-date-badge">28 Dec 2026</span>
            <span class="badge-country badge-transit">Transit</span>
          </div>
          <div class="day-card-city">
            <span class="city-icon">📍</span>
            <span class="city-text">Grindelwald, Rheinfall &amp; Zurich ➔ Paris</span>
          </div>
        </div>
        <div class="day-card-content">
          <div class="day-card-main">
            <h4 class="card-day-theme">Grindelwald First Cliff Walk &amp; Rhine Falls Excursion ➔ Lake Zurich &amp; Overnight Sleeper to Paris</h4>
            <div class="card-activities-list">
        <div class="card-activity-item">• <b>Morning (08:30 – 12:00):</b> Morning excursion to Grindelwald. Ascend 2,168m via the 6-seater First gondola cableway; brave the thrilling metal walkway of the <b>First Cliff Walk by Tissot</b> suspended along sheer alpine rock faces facing the snowy Eiger North Face.</div>
        <div class="card-activity-item">• <b>Afternoon (13:00 – 17:00):</b> Scenic train to <b>Zurich Hauptbahnhof</b>. Quick luggage storage at HB, then take the direct 48-minute S-Bahn S9 to <b>Rheinfall (Rhine Falls Schaffhausen)</b>, Europe's largest plain waterfall! Walk the public promenade along the northern bank by Schlössli Wörth for thunderous views and winter mist (Free 24/7 access).</div>
        <div class="card-activity-item">• <b>Evening &amp; Night (17:30 – 21:00):</b> Return to Zurich HB. Stroll along <b>Lake Zurich</b> promenade, admire Limmat views from Lindenhof hill, browse Bahnhofstrasse chocolatiers, then board the 21:00 overnight sleeper coach direct to Paris Bercy Seine.</div>
      </div>
            <div class="card-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (First Cliff Walk by Tissot, Rhine Falls North Bank &amp; Lake Zurich are all 100% Free!)</div>
            <div class="card-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 First Gondola: 08:30–16:30</span> <span class="opening-pill open">🟢 Rhine Falls: Open 24/7 (Free Access)</span> <span class="opening-pill open">🟢 Lake Zurich: Open 24/7</span> <span class="opening-pill open">🟢 Overnight Coach: Departs 21:00</span></div>
          </div>
          <div class="day-card-side">
            <div class="card-stay-box">
              <div class="stay-header-label">🏨 Accommodation &amp; Transit</div>
              <div class="stay-hotel-name">FlixBus Overnight Sleeper</div>
              <div class="stay-hotel-addr">Zurich Bus Station ➔ Paris Bercy Seine</div>
              <div class="stay-transit-badge">🚆 SBB InterCity + S-Bahn S9 to Rheinfall + 🚌 Overnight Sleeper Coach</div>
              <button type="button" class="btn-card-map" data-day="Day 14">
                📍 Focus on Map
              </button>
            </div>
          </div>
        </div>
      </div>`;

html = html.replace(oldD13Card, newD13Card);

console.log('Updated Day Cards in index.html');
fs.writeFileSync(indexHtmlPath, html, 'utf8');
console.log('Wrote updated index.html');

// =========================================================================
// 4. UPDATE js/app.js: itineraryData for Day 13 and Day 14
// =========================================================================
const oldAppD13 = `  {
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
        "admissionHtml": "<strong>Sightseeing Admission:</strong> <span class=\"admission-pill paid\">🎟️ Iseltwald CLOY Pier: 5 CHF (~A$9 AUD)</span> <span class=\"admission-pill paid\">🎟️ Sigriswil Bridge: 8 CHF (~A$14 AUD)</span> <em>(Day 13 total paid: 13 CHF / ~A$23 AUD)</em>",
        "openingHtml": "<strong>🕒 Hours &amp; Open Status:</strong> <span class=\"opening-pill open\">🟢 Iseltwald CLOY Pier: Open 24/7 (Automated 5 CHF Turnstile)</span> <span class=\"opening-pill open\">🟢 Sigriswil Panoramic Bridge: Open 08:00–20:00 (365 Days)</span>",
    "stayTitle": "Swiss Alps Base (Interlaken)",
    "stayDesc": "Central Interlaken, Switzerland",
    "transitInfo": "🚌 PostBus 103 + STI Bus 21/25 (Half Fare Card)",
    "coords": [
      46.7118,
      7.9587
    ]
  },`;

const newAppD13 = `  {
    "day": "Day 13",
    "date": "27 Dec 2026",
    "city": "Lake Brienz, Sigriswil & Blausee",
    "country": "Switzerland",
    "badgeClass": "badge-ch",
    "cardHighlight": "highlight-swiss",
    "title": "CLOY Alpine Tour & Magical Blausee Winter Illuminated Lake",
    "activities": [
      "• <b>Morning (09:30 – 12:30):</b> Take PostBus 103 to <b>Iseltwald</b> on Lake Brienz. Visit the world-famous wooden jetty where Captain Ri played the piano in <i>Crash Landing on You</i> with crystal turquoise glacial waters.",
      "• <b>Midday (13:15 – 15:30):</b> Travel along Lake Thun to the <b>Sigriswil Panoramic Suspension Bridge</b>. Walk across the 340m pedestrian bridge suspended 182m above the Gummischlucht gorge (where Jeong-hyeok took Se-ri's photo).",
      "• <b>Late Afternoon & Twilight (16:15 – 19:15):</b> Short scenic train/bus transit via Spiez and Frutigen into the fairy-tale Kandersteg Valley to <b>Blausee Nature Park</b>! Fed by subterranean mountain springs that keep it unfrozen at 8°C year-round, marvel at the glowing turquoise water and stroll the Christmas <b>\"Path of the 1,000 Lights\"</b> (*Pfad der 1.000 Lichter*) illuminated lantern walk by the fire pits."
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
  },`;

appJs = appJs.replace(oldAppD13, newAppD13);

const oldAppD14 = `  {
    "day": "Day 14",
    "date": "28 Dec 2026",
    "city": "Grindelwald & Zurich ➔ Paris",
    "country": "Transit",
    "badgeClass": "badge-transit",
    "cardHighlight": "highlight-transit",
    "title": "Grindelwald First Cliff Walk & Lake Zurich ➔ Overnight Sleeper Coach to Paris",
    "activities": [
      "• <b>Morning (08:30 – 12:30):</b> Morning excursion to Grindelwald. Ascend 2,168m via the 6-seater First gondola cableway; brave the thrilling metal walkway of the <b>First Cliff Walk by Tissot</b> suspended along sheer alpine rock faces facing the snowy Eiger North Face.",
      "• <b>Afternoon (13:00 – 17:30):</b> Scenic train journey from the Bernese Oberland through the Swiss heartland via Bern to <b>Zurich Hauptbahnhof</b>. Walk the <b>Lake Zurich</b> promenade, admire Limmat views from Lindenhof hill, and browse luxury chocolate boutiques on Bahnhofstrasse.",
      "• <b>Night (21:00 – 06:40+1d):</b> Board the direct overnight sleeper coach from Zurich Bus Station (near HB) to Paris Bercy Seine."
    ],
        "admissionHtml": "<strong>Sightseeing Admission:</strong> <span class=\"admission-pill free\">✨ Free ($0 AUD)</span> (First Cliff Walk by Tissot walkway is Free; Lake Zurich & Lindenhof)",
        "openingHtml": "<strong>🕒 Hours &amp; Open Status:</strong> <span class=\"opening-pill open\">🟢 Grindelwald First Gondola: Open 08:30–16:30</span> <span class=\"opening-pill open\">🟢 Lake Zurich &amp; Lindenhof: Open 24/7</span> <span class=\"opening-pill open\">🟢 Overnight Coach: Departs 21:00</span>",
    "stayTitle": "FlixBus Overnight Sleeper",
    "stayDesc": "Zurich Bus Station ➔ Paris Bercy Seine",
    "transitInfo": "🚆 SBB InterCity + 🚌 Overnight Sleeper Coach (Saves a hotel night!)",
    "coords": [
      47.3686,
      8.5432
    ]
  },`;

const newAppD14 = `  {
    "day": "Day 14",
    "date": "28 Dec 2026",
    "city": "Grindelwald, Rheinfall & Zurich ➔ Paris",
    "country": "Transit",
    "badgeClass": "badge-transit",
    "cardHighlight": "highlight-transit",
    "title": "Grindelwald First Cliff Walk & Rhine Falls Excursion ➔ Lake Zurich & Overnight Sleeper to Paris",
    "activities": [
      "• <b>Morning (08:30 – 12:00):</b> Morning excursion to Grindelwald. Ascend 2,168m via the 6-seater First gondola cableway; brave the thrilling metal walkway of the <b>First Cliff Walk by Tissot</b> suspended along sheer alpine rock faces facing the snowy Eiger North Face.",
      "• <b>Afternoon (13:00 – 17:00):</b> Scenic train to <b>Zurich Hauptbahnhof</b>. Quick luggage storage at HB, then take the direct 48-minute S-Bahn S9 to <b>Rheinfall (Rhine Falls Schaffhausen)</b>, Europe's largest plain waterfall! Walk the public promenade along the northern bank by Schlössli Wörth for thunderous views and winter mist (Free 24/7 access).",
      "• <b>Evening & Night (17:30 – 21:00):</b> Return to Zurich HB. Stroll along <b>Lake Zurich</b> promenade, admire Limmat views from Lindenhof hill, browse Bahnhofstrasse chocolatiers, then board the 21:00 overnight sleeper coach direct to Paris Bercy Seine."
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
  },`;

appJs = appJs.replace(oldAppD13, newAppD13);
appJs = appJs.replace(oldAppD14, newAppD14);

fs.writeFileSync(appJsPath, appJs, 'utf8');
console.log('Wrote updated js/app.js');

// =========================================================================
// 5. UPDATE js/gallery-data.js: Day 13 and Day 14
// =========================================================================
const oldGDataD13 = `  {
    dayNum: 13,
    day: "Day 13",
    date: "27 Dec 2026",
    city: "Lake Brienz & Sigriswil",
    country: "Switzerland",
    countryFilter: "switzerland",
    badgeClass: "badge-ch",
    title: "Crash Landing on You (CLOY) Signature Tour",
    stay: "Swiss Alps Base (Interlaken)",
    transit: "🚌 PostBus 103 + STI Bus 21/25 (Half Fare Card)",
    coords: [46.7118, 7.9587],
    sights: [
      {
        name: "Iseltwald Landing Stage (Captain Ri's Piano)",
        category: "🎬 CLOY Signature Scene",
        time: "Morning (09:30 – 12:30)",
        location: "Iseltwald, Lake Brienz",
        image: "public/images/sights/iseltwald-landing-stage.jpg",
        admission: "5 CHF (~A$9 AUD) · CLOY Pier Turnstile",
        isPaid: true,
        hours: "Open 24/7 (Automated 5 CHF Turnstile)",
        desc: "The world-famous wooden jetty on the turquoise glacial waters of Lake Brienz where Captain Ri played his heartbreaking piano melody for his brother while Se-ri listened from the ferry.",
        mapsQuery: "Iseltwald landing stage",
        coords: [46.7105, 7.9635]
      },
      {
        name: "Seeburg Castle & Lake Brienz Promenade",
        category: "🏰 Fairytale Peninsula",
        time: "Late Morning (11:30 – 13:00)",
        location: "Iseltwald Peninsula, Switzerland",
        image: "public/images/sights/seeburg-castle.jpg",
        admission: "Free ($0 AUD) · Lakeside Trail",
        isPaid: false,
        hours: "Open 24/7 (Public Lakeside Path)",
        desc: "Fairytale lakeside peninsula with Seeburg Castle backdropped by steep snow-dusted Alpine peaks and mirror-still turquoise waters.",
        mapsQuery: "Seeburg Castle Iseltwald",
        coords: [46.7170, 7.9715]
      },
      {
        name: "Panoramabrücke Sigriswil Suspension Bridge",
        category: "🎬 CLOY High Suspension Bridge",
        time: "Afternoon (13:30 – 16:00)",
        location: "Raftstrasse 34, Sigriswil",
        image: "public/images/sights/panoramabruecke-sigriswil.jpg",
        admission: "8 CHF (~A$14 AUD) · Suspension Bridge Turnstile",
        isPaid: true,
        hours: "Open Daily 08:00–20:00 (Automated 8 CHF Turnstile)",
        desc: "The 340-meter-long pedestrian suspension bridge hanging 182 meters above the Gummischlucht gorge where Jeong-hyeok asked Se-ri to take a photograph of him and Seo Dan.",
        mapsQuery: "Panoramabrucke Sigriswil",
        coords: [46.7190, 7.7210]
      },
      {
        name: "Lake Thun Panorama & Spiez Castle",
        category: "🌊 Alpine Lake Vista",
        time: "Late Afternoon (16:00 – 17:30)",
        location: "Lake Thun Shoreline, Switzerland",
        image: "public/images/sights/lake-thun-spiez.jpg",
        admission: "Free ($0 AUD) · Lake Shore Viewpoint",
        isPaid: false,
        hours: "Open 24/7 (Public Lakeside Viewpoint)",
        desc: "Sweeping views across Lake Thun framed by the iconic pyramid silhouette of Mount Niesen, snowy peaks, and medieval Spiez Castle.",
        mapsQuery: "Spiez Castle Lake Thun",
        coords: [46.6847, 7.6780]
      }
    ]
  },`;

const newGDataD13 = `  {
    dayNum: 13,
    day: "Day 13",
    date: "27 Dec 2026",
    city: "Lake Brienz, Sigriswil & Blausee",
    country: "Switzerland",
    countryFilter: "switzerland",
    badgeClass: "badge-ch",
    title: "CLOY Alpine Tour & Magical Blausee Winter Illuminated Lake",
    stay: "Swiss Alps Base (Interlaken · Night 3 of 3)",
    transit: "🚌 PostBus 103 + 🚆 SBB to Spiez/Frutigen + Bus 230 to Blausee",
    coords: [46.5327, 7.6653],
    sights: [
      {
        name: "Iseltwald Landing Stage (Captain Ri's Piano)",
        category: "🎬 CLOY Signature Scene",
        time: "Morning (09:30 – 12:30)",
        location: "Iseltwald, Lake Brienz",
        image: "public/images/sights/iseltwald-landing-stage.jpg",
        admission: "5 CHF (~A$9 AUD) · CLOY Pier Turnstile",
        isPaid: true,
        hours: "Open 24/7 (Automated 5 CHF Turnstile)",
        desc: "The world-famous wooden jetty on the turquoise glacial waters of Lake Brienz where Captain Ri played his heartbreaking piano melody for his brother while Se-ri listened from the ferry.",
        mapsQuery: "Iseltwald landing stage",
        coords: [46.7105, 7.9635]
      },
      {
        name: "Panoramabrücke Sigriswil Suspension Bridge",
        category: "🎬 CLOY High Suspension Bridge",
        time: "Midday (13:15 – 15:30)",
        location: "Raftstrasse 34, Sigriswil",
        image: "public/images/sights/panoramabruecke-sigriswil.jpg",
        admission: "8 CHF (~A$14 AUD) · Suspension Bridge Turnstile",
        isPaid: true,
        hours: "Open Daily 08:00–20:00 (Automated 8 CHF Turnstile)",
        desc: "The 340-meter-long pedestrian suspension bridge hanging 182 meters above the Gummischlucht gorge where Jeong-hyeok asked Se-ri to take a photograph of him and Seo Dan.",
        mapsQuery: "Panoramabrucke Sigriswil",
        coords: [46.7190, 7.7210]
      },
      {
        name: "Lake Thun Panorama & Spiez Castle",
        category: "🌊 Alpine Lake Vista",
        time: "Afternoon (15:30 – 16:30)",
        location: "Lake Thun Shoreline, Spiez",
        image: "public/images/sights/lake-thun-spiez.jpg",
        admission: "Free ($0 AUD) · Lake Shore Viewpoint",
        isPaid: false,
        hours: "Open 24/7 (Public Lakeside Viewpoint)",
        desc: "Sweeping views across Lake Thun framed by the iconic pyramid silhouette of Mount Niesen, snowy peaks, and medieval Spiez Castle.",
        mapsQuery: "Spiez Castle Lake Thun",
        coords: [46.6847, 7.6780]
      },
      {
        name: "Blausee Nature Park & Path of the 1,000 Lights",
        category: "🌲 Subterranean Turquoise Lake",
        time: "Twilight & Evening (16:45 – 19:15)",
        location: "Blausee, Kandersteg Valley",
        image: "public/images/sights/blausee.jpg",
        admission: "13 CHF (~A$22 AUD) · Nature Park Ticket",
        isPaid: true,
        hours: "Open Daily 09:00–21:00 (Path of 1,000 Lights 16:00–20:00)",
        desc: "Steaming crystal-clear turquoise alpine lake fed by subterranean mountain springs that never freezes, framed by snow-covered boulders, pine forests, and illuminated by the holiday 'Path of the 1,000 Lights' lanterns.",
        mapsQuery: "Blausee Nature Park Switzerland",
        coords: [46.5327, 7.6653]
      }
    ]
  },`;

gData = gData.replace(oldGDataD13, newGDataD13);

const oldGDataD14 = `  {
    dayNum: 14,
    day: "Day 14",
    date: "28 Dec 2026",
    city: "Grindelwald & Zurich ➔ Paris",
    country: "Transit",
    countryFilter: "transit",
    badgeClass: "badge-transit",
    title: "Grindelwald First Cliff Walk & Lake Zurich ➔ Overnight Sleeper Coach to Paris",
    stay: "FlixBus Overnight Sleeper",
    transit: "🚆 SBB InterCity + 🚌 Overnight Sleeper Coach (Saves a hotel night!)",
    coords: [46.6590, 8.0645],
    sights: [
      {
        name: "Grindelwald First Cliff Walk by Tissot",
        category: "🏔️ High-Altitude Suspended Walkway",
        time: "Morning (09:00 – 12:30)",
        location: "First, Grindelwald (2,168m)",
        image: "public/images/sights/grindelwald-first-cliff-walk.jpg",
        admission: "Free ($0 AUD) Summit Walkway · Gondola pass covered",
        isPaid: false,
        hours: "Open 09:00–16:00 (Gondola 08:30–16:30)",
        desc: "Breathtaking steel walkway clinging to the sheer rock face of Mount First at 2,168 meters, culminating in a 45-meter single-rope suspension cantilever over the abyss facing the Eiger.",
        mapsQuery: "First Cliff Walk Grindelwald",
        coords: [46.6590, 8.0645]
      },
      {
        name: "Lake Zurich Promenade & Bürkliplatz",
        category: "⛵ Scenic Waterfront Stroll",
        time: "Late Afternoon (15:00 – 17:00)",
        location: "Bürkliplatz, Zurich",
        image: "public/images/sights/lake-zurich-promenade.jpg",
        admission: "Free ($0 AUD) · Waterfront Walk",
        isPaid: false,
        hours: "Open 24/7 (Lakeside Promenade)",
        desc: "Peaceful waterfront promenade gazing out across crystal-clear waters toward the snow-capped Glarus Alps, dotted with swans and lakeside parks.",
        mapsQuery: "Burkliplatz Zurich",
        coords: [47.3667, 8.5414]
      },
      {
        name: "Lindenhof Hill (CLOY Opening Sequence)",
        category: "🎬 CLOY Historic Overlook",
        time: "Evening (17:00 – 18:30)",
        location: "Lindenhof, Zurich Altstadt",
        image: "public/images/sights/lindenhof-hill.jpg",
        admission: "Free ($0 AUD) · Historic Viewpoint Terrace",
        isPaid: false,
        hours: "Open 24/7 (Public Hilltop Park overlooking Limmat)",
        desc: "The elevated hilltop park overlooking the Limmat River and Grossmünster cathedral where Captain Ri and Yoon Se-ri pass by each other in the opening title sequence of 'Crash Landing on You'.",
        mapsQuery: "Lindenhof Zurich",
        coords: [47.3730, 8.5405]
      },
      {
        name: "Bahnhofstrasse Luxury Chocolate Boutiques",
        category: "🍫 Swiss Luxury & Chocolatiers",
        time: "Evening (18:30 – 20:30)",
        location: "Bahnhofstrasse, Zurich",
        image: "public/images/sights/bahnhofstrasse.jpg",
        admission: "Free ($0 AUD) · Window Shopping & Chocolates",
        isPaid: false,
        hours: "Open Daily 09:00–19:00 / 20:00",
        desc: "World-renowned shopping boulevard featuring flagship Läderach, Lindt, and Sprüngli chocolate houses illuminated with dazzling holiday light displays.",
        mapsQuery: "Bahnhofstrasse Zurich",
        coords: [47.3717, 8.5380]
      }
    ]
  }`;

const newGDataD14 = `  {
    dayNum: 14,
    day: "Day 14",
    date: "28 Dec 2026",
    city: "Grindelwald, Rheinfall & Zurich ➔ Paris",
    country: "Transit",
    countryFilter: "transit",
    badgeClass: "badge-transit",
    title: "Grindelwald First Cliff Walk & Rhine Falls Excursion ➔ Lake Zurich & Overnight Sleeper to Paris",
    stay: "FlixBus Overnight Sleeper",
    transit: "🚆 SBB InterCity + S-Bahn S9 to Rheinfall + 🚌 Overnight Sleeper Coach",
    coords: [47.6779, 8.6156],
    sights: [
      {
        name: "Grindelwald First Cliff Walk by Tissot",
        category: "🏔️ High-Altitude Suspended Walkway",
        time: "Morning (09:00 – 12:00)",
        location: "First, Grindelwald (2,168m)",
        image: "public/images/sights/grindelwald-first-cliff-walk.jpg",
        admission: "Free ($0 AUD) Summit Walkway · Gondola pass covered",
        isPaid: false,
        hours: "Open 09:00–16:00 (Gondola 08:30–16:30)",
        desc: "Breathtaking steel walkway clinging to the sheer rock face of Mount First at 2,168 meters, culminating in a 45-meter single-rope suspension cantilever over the abyss facing the Eiger.",
        mapsQuery: "First Cliff Walk Grindelwald",
        coords: [46.6590, 8.0645]
      },
      {
        name: "Rhine Falls (Rheinfall Schaffhausen)",
        category: "💧 Europe's Most Powerful Waterfall",
        time: "Afternoon (14:00 – 16:30)",
        location: "Rheinfallquai, 8212 Neuhausen am Rheinfall",
        image: "public/images/sights/rheinfall-schaffhausen.jpg",
        admission: "Free ($0 AUD) · Northern Bank Promenade",
        isPaid: false,
        hours: "Open 24/7 (Free Public Promenade at Schlössli Wörth / SIG)",
        desc: "Europe's mightiest plain waterfall roaring 23 meters down over a 150-meter-wide riverbed. Located just 48 minutes north of Zurich HB, with free 24/7 public walking trails along the misty northern riverbank.",
        mapsQuery: "Rhine Falls Neuhausen am Rheinfall",
        coords: [47.6779, 8.6156]
      },
      {
        name: "Lake Zurich Promenade & Bürkliplatz",
        category: "⛵ Scenic Waterfront Stroll",
        time: "Evening (17:30 – 19:00)",
        location: "Bürkliplatz, Zurich",
        image: "public/images/sights/lake-zurich-promenade.jpg",
        admission: "Free ($0 AUD) · Waterfront Walk",
        isPaid: false,
        hours: "Open 24/7 (Lakeside Promenade)",
        desc: "Peaceful waterfront promenade gazing out across crystal-clear waters toward the snow-capped Glarus Alps, dotted with swans and lakeside parks.",
        mapsQuery: "Burkliplatz Zurich",
        coords: [47.3667, 8.5414]
      },
      {
        name: "Lindenhof Hill (CLOY Opening Sequence)",
        category: "🎬 CLOY Historic Overlook",
        time: "Evening (19:00 – 20:00)",
        location: "Lindenhof, Zurich Altstadt",
        image: "public/images/sights/lindenhof-hill.jpg",
        admission: "Free ($0 AUD) · Historic Viewpoint Terrace",
        isPaid: false,
        hours: "Open 24/7 (Public Hilltop Park overlooking Limmat)",
        desc: "The elevated hilltop park overlooking the Limmat River and Grossmünster cathedral where Captain Ri and Yoon Se-ri pass by each other in the opening title sequence of 'Crash Landing on You'.",
        mapsQuery: "Lindenhof Zurich",
        coords: [47.3730, 8.5405]
      }
    ]
  }`;

gData = gData.replace(oldGDataD14, newGDataD14);

fs.writeFileSync(galleryDataPath, gData, 'utf8');
console.log('Wrote updated js/gallery-data.js');

// =========================================================================
// 6. UPDATE generate_pdf.py: Day 13 and Day 14
// =========================================================================
pdfPy = pdfPy.replace(
  `        ("Day 13<br/>27 Dec 2026", "Lake Brienz &<br/>CLOY Tour (CH)", "Crash Landing on You Trail: Visit lakeside piano landing stage in Iseltwald on Lake Brienz, Panoramabrücke Sigriswil suspension bridge, and Lake Thun panorama.", "Swiss Alps Base<br/>(Central Interlaken · Night 3 of 3)"),`,
  `        ("Day 13<br/>27 Dec 2026", "Lake Brienz, Sigriswil<br/>& Blausee (CH)", "CLOY Tour & Illuminated Blausee: Iseltwald CLOY piano pier on Lake Brienz, Sigriswil suspension bridge, and late afternoon at magical Blausee Nature Park (Path of the 1,000 Lights).", "Swiss Alps Base<br/>(Central Interlaken · Night 3 of 3)"),`
);

pdfPy = pdfPy.replace(
  `        ("Day 14<br/>28 Dec 2026", "Grindelwald & Zurich<br/>➔ Paris (CH / FR)", "Alpine Cliff Walk & Sleeper Coach: Grindelwald First Cliff Walk by Tissot beneath the Eiger. Train to Zurich for Lake Zurich promenade & Bahnhofstrasse. 09:00 pm overnight sleeper coach to Paris.", "Transit: FlixBus Overnight<br/>(Zurich to Paris Bercy)"),`,
  `        ("Day 14<br/>28 Dec 2026", "Grindelwald, Rheinfall<br/>& Zurich ➔ Paris", "Alpine Cliff Walk & Rhine Falls: Grindelwald First Cliff Walk by Tissot. Train to Zurich, 48-min S-Bahn to thunderous Rhine Falls (Schaffhausen free promenade), Lake Zurich walk, 09:00 pm overnight coach to Paris.", "Transit: FlixBus Overnight<br/>(Zurich to Paris Bercy)"),`
);

fs.writeFileSync(generatePdfPath, pdfPy, 'utf8');
console.log('Wrote updated generate_pdf.py');

console.log('ALL INTEGRATION COMPLETED CLEANLY!');
