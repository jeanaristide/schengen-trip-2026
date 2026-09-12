const fs = require('fs');
const path = require('path');

const repoDir = '/Users/jeana/Projects/schengen-trip-2026';

// ==========================================
// 1. UPDATE index.html
// ==========================================
let indexHtml = fs.readFileSync(path.join(repoDir, 'index.html'), 'utf8');

// --- DAY 1: Remove photo buttons ---
indexHtml = indexHtml.replace(
  /<button type="button" class="btn-table-photos" title="View Photos of London ➔ Amsterdam">📸 Photos<\/button>/,
  '<span class="badge-transit-uk" style="font-size: 0.75rem; color: #64748b; font-weight: 600;">🇬🇧 UK Departure</span>'
);
indexHtml = indexHtml.replace(
  /<button type="button" class="btn-card-photos" data-day="Day 1">📸 View Photos \(\d+\)<\/button>/,
  '<span class="badge-transit-uk" style="font-size: 0.78rem; color: #64748b; font-weight: 600; padding: 4px 0; display: inline-block;">🇬🇧 UK Departure Hub (No Schengen Photos)</span>'
);

// --- DAY 21: Remove photo buttons ---
indexHtml = indexHtml.replace(
  /<button type="button" class="btn-table-photos" title="View Photos of London &amp; Return">📸 Photos<\/button>/,
  '<span class="badge-transit-uk" style="font-size: 0.75rem; color: #64748b; font-weight: 600;">🇬🇧 UK Residence</span>'
);
indexHtml = indexHtml.replace(
  /<button type="button" class="btn-card-photos" data-day="Day 21">📸 View Photos \(\d+\)<\/button>/,
  '<span class="badge-transit-uk" style="font-size: 0.78rem; color: #64748b; font-weight: 600; padding: 4px 0; display: inline-block;">🇬🇧 UK Family Base (No Schengen Photos)</span>'
);

// --- TABLE: Day 11 ---
const tableDay11Old = /<tr class="itinerary-table-row row-badge-transit" data-country="Transit">\s*<td class="col-table-day">\s*<span class="table-day-badge">Day 11<\/span>[\s\S]*?<\/tr>/;
const tableDay11New = `<tr class="itinerary-table-row row-badge-ch" data-country="Switzerland">
              <td class="col-table-day">
                <span class="table-day-badge">Day 11</span>
                <span class="table-date-str">25 Dec 2026</span>
              </td>
              <td class="col-table-loc">
                <div class="table-loc-name">Strasbourg ➔ Bern</div>
                <span class="badge-country badge-ch">Switzerland</span>
              </td>
              <td class="col-table-plan">
                <div class="table-plan-title">Christmas Day Transit to Bern &amp; UNESCO Covered Sandstone Arcades</div>
                <div class="table-activities-list">
        <div class="table-activity-item">• <b>Morning (08:30 – 12:30):</b><ul class="activity-sublist"><li>Christmas morning departure from Alsace base (Kehl/Strasbourg)</li><li>Direct scenic transit: Strasbourg ➔ Basel SBB ➔ Bern Hbf (~2h 15m)</li><li>Drop bags &amp; check in at <b>Alpenblick CoLiving, Bern</b> (Kasernenstrasse 29)</li></ul></div>
        <div class="table-activity-item">• <b>Afternoon (13:30 – 17:00):</b><ul class="activity-sublist"><li>Explore Bern UNESCO World Heritage Old Town sheltered beneath 6 km of 15th-century covered sandstone arcades (<i>Lauben</i>)</li><li>Watch the animated astronomical chime at the historic <b>Zytglogge</b> Clock Tower</li><li>Walk across <b>Nydeggbrücke</b> bridge for breathtaking views of the turquoise Aare river loop &amp; Bear Park (<i>Bärengraben</i>)</li></ul></div>
        <div class="table-activity-item">• <b>Evening (17:30 – 21:00):</b><ul class="activity-sublist"><li>Cosy Christmas fondue dinner at a traditional Bernese cellar restaurant</li><li>Evening stroll through fairytale illuminated cobblestone alleys (Night 1 of 4 in Bern!)</li></ul></div>
      </div>
                <div class="table-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (Bern UNESCO Old Town, Covered Arcades &amp; Zytglogge are Free!)</div>
                <div class="table-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 Covered Arcades (Lauben): Open 24/7 sheltered</span> <span class="opening-pill open">🟢 Zytglogge: Open 24/7 (Hourly chime)</span> <span class="opening-pill open">🟢 Bern Dining: Open Christmas Day</span></div>
              </td>
              <td class="col-table-stay">
                <div class="table-hotel-name">Alpenblick CoLiving, Bern (Night 1 of 4 · Confirmed: 5525.615.675)</div>
                <div class="table-hotel-addr">Kasernenstrasse 29, 3013 Bern, Switzerland</div>
                <div class="table-transit-mode"><i>🚆 SBB Swiss Federal Railways + Bern Local Tram</i></div>
              </td>
              <td class="col-table-action">
                <button type="button" class="btn-table-photos" title="View Photos of Bern Old Town">📸 Photos</button>
              </td>
            </tr>`;

indexHtml = indexHtml.replace(tableDay11Old, tableDay11New);

// --- TABLE: Day 12 ---
const tableDay12Old = /<tr class="itinerary-table-row row-badge-ch" data-country="Switzerland">\s*<td class="col-table-day">\s*<span class="table-day-badge">Day 12<\/span>[\s\S]*?<\/tr>/;
const tableDay12New = `<tr class="itinerary-table-row row-badge-ch" data-country="Switzerland">
              <td class="col-table-day">
                <span class="table-day-badge">Day 12</span>
                <span class="table-date-str">26 Dec 2026</span>
              </td>
              <td class="col-table-loc">
                <div class="table-loc-name">Grindelwald &amp; Lake Brienz</div>
                <span class="badge-country badge-ch">Switzerland</span>
              </td>
              <td class="col-table-plan">
                <div class="table-plan-title">Grindelwald First Cliff Walk &amp; Lake Brienz (CLOY Pier)</div>
                <div class="table-activities-list">
        <div class="table-activity-item">• <b>Morning (08:30 – 13:00):</b><ul class="activity-sublist"><li>SBB InterCity: Bern Hbf ➔ Interlaken Ost ➔ Grindelwald (1h 34m)</li><li>Board Grindelwald First Gondola gliding above snow-covered pine forests to 2,168m</li><li>Walk the exhilarating <b>First Cliff Walk by Tissot</b> (metal walkway &amp; cantilever bridge directly facing the iconic snowy Eiger North Face)</li></ul></div>
        <div class="table-activity-item">• <b>Afternoon (13:30 – 17:30):</b><ul class="activity-sublist"><li>Descend to Grindelwald alpine village; train to Interlaken Ost</li><li>PostBus 103: Interlaken Ost ➔ Iseltwald (20 min)</li><li>Stroll onto <b>Iseltwald Landing Stage</b> (Lake Brienz Crash Landing on You wooden pier surrounded by glassy turquoise alpine waters)</li></ul></div>
        <div class="table-activity-item">• <b>Evening (18:00 – 21:00):</b><ul class="activity-sublist"><li>PostBus 103 + SBB Train back to Bern base (Alpenblick CoLiving)</li><li>Hot Swiss roesti dinner &amp; relaxing evening (Night 2 of 4 in Bern!)</li></ul></div>
      </div>
                <div class="table-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill paid">🎟️ Iseltwald CLOY Pier: 5 CHF (~A$9 AUD)</span> <span class="admission-pill free">✨ First Cliff Walk walkway is Free</span> <em>(Day 12 total paid: 5 CHF / ~A$9 AUD)</em></div>
                <div class="table-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 Grindelwald First Gondola: 08:30–16:30</span> <span class="opening-pill open">🟢 First Cliff Walk: Open daily in winter</span> <span class="opening-pill open">🟢 Iseltwald Pier: Open 24/7</span></div>
              </td>
              <td class="col-table-stay">
                <div class="table-hotel-name">Alpenblick CoLiving, Bern (Night 2 of 4 · Confirmed: 5525.615.675)</div>
                <div class="table-hotel-addr">Kasernenstrasse 29, 3013 Bern, Switzerland</div>
                <div class="table-transit-mode"><i>🚆 SBB InterCity (Bern ➔ Grindelwald) + 🚠 First Gondola + 🚌 PostBus 103</i></div>
              </td>
              <td class="col-table-action">
                <button type="button" class="btn-table-photos" title="View Photos of Grindelwald &amp; Iseltwald">📸 Photos</button>
              </td>
            </tr>`;

indexHtml = indexHtml.replace(tableDay12Old, tableDay12New);

// --- TABLE: Day 13 ---
const tableDay13Old = /<tr class="itinerary-table-row row-badge-ch" data-country="Switzerland">\s*<td class="col-table-day">\s*<span class="table-day-badge">Day 13<\/span>[\s\S]*?<\/tr>/;
const tableDay13New = `<tr class="itinerary-table-row row-badge-ch" data-country="Switzerland">
              <td class="col-table-day">
                <span class="table-day-badge">Day 13</span>
                <span class="table-date-str">27 Dec 2026</span>
              </td>
              <td class="col-table-loc">
                <div class="table-loc-name">Lauterbrunnen, Mürren &amp; Blausee</div>
                <span class="badge-country badge-ch">Switzerland</span>
              </td>
              <td class="col-table-plan">
                <div class="table-plan-title">Lauterbrunnen Valley, Car-Free Mürren &amp; Magical Blausee Winter Park</div>
                <div class="table-activities-list">
        <div class="table-activity-item">• <b>Morning (08:30 – 12:30):</b><ul class="activity-sublist"><li>SBB Train: Bern Hbf ➔ Interlaken Ost ➔ Lauterbrunnen (1h 15m)</li><li>Marvel at <b>Lauterbrunnen Valley</b> &amp; Staubbach Falls plunging 297m down frozen cliffs</li><li>BLM Cable Car &amp; Mountain Rail to <b>Mürren</b> car-free clifftop village (1,638m) facing Eiger, Mönch &amp; Jungfrau</li></ul></div>
        <div class="table-activity-item">• <b>Afternoon &amp; Twilight (13:30 – 19:30):</b><ul class="activity-sublist"><li>Descend to valley; SBB Train via Spiez/Frutigen + Bus 230 to <b>Blausee Nature Park</b></li><li>Experience the enchanting <b>Path of the 1,000 Lights</b> lantern walk through snowy pine woods</li><li>Admire crystal-clear illuminated turquoise subterranean spring lake surrounded by glowing lanterns</li></ul></div>
        <div class="table-activity-item">• <b>Evening (20:00 – 21:30):</b><ul class="activity-sublist"><li>Bus 230 + SBB Train return to Bern base (Alpenblick CoLiving)</li><li>Warm drinks &amp; rest (Night 3 of 4 in Bern!)</li></ul></div>
      </div>
                <div class="table-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (Lauterbrunnen &amp; Mürren) <span class="admission-pill paid">🎟️ Blausee: 13 CHF (~A$22 AUD)</span> <em>(Day 13 total paid: 13 CHF / ~A$22 AUD)</em></div>
                <div class="table-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 Lauterbrunnen Valley: Open 24/7</span> <span class="opening-pill open">🟢 Mürren BLM Transit: 365 Days (06:00–20:30)</span> <span class="opening-pill open">🟢 Blausee: 09:00–21:00 (1,000 Lights 16:00–20:00)</span></div>
              </td>
              <td class="col-table-stay">
                <div class="table-hotel-name">Alpenblick CoLiving, Bern (Night 3 of 4 · Confirmed: 5525.615.675)</div>
                <div class="table-hotel-addr">Kasernenstrasse 29, 3013 Bern, Switzerland</div>
                <div class="table-transit-mode"><i>🚆 SBB Train + 🚠 BLM Cable Car &amp; Mountain Rail + 🚌 Bus 230</i></div>
              </td>
              <td class="col-table-action">
                <button type="button" class="btn-table-photos" title="View Photos of Lauterbrunnen, Mürren &amp; Blausee">📸 Photos</button>
              </td>
            </tr>`;

indexHtml = indexHtml.replace(tableDay13Old, tableDay13New);

// --- TABLE: Day 14 ---
const tableDay14Old = /<tr class="itinerary-table-row row-badge-ch" data-country="Switzerland">\s*<td class="col-table-day">\s*<span class="table-day-badge">Day 14<\/span>[\s\S]*?<\/tr>/;
const tableDay14New = `<tr class="itinerary-table-row row-badge-ch" data-country="Switzerland">
              <td class="col-table-day">
                <span class="table-day-badge">Day 14</span>
                <span class="table-date-str">28 Dec 2026</span>
              </td>
              <td class="col-table-loc">
                <div class="table-loc-name">Lake Thun, Sigriswil &amp; Bern</div>
                <span class="badge-country badge-ch">Switzerland</span>
              </td>
              <td class="col-table-plan">
                <div class="table-plan-title">Lake Thun Waterfront, Sigriswil Suspension Bridge &amp; Bern Rosengarten Sunset</div>
                <div class="table-activities-list">
        <div class="table-activity-item">• <b>Morning (09:30 – 12:30):</b><ul class="activity-sublist"><li>SBB InterCity: Bern Hbf ➔ Spiez on Lake Thun (30 min)</li><li>Stroll picturesque <b>Spiez Castle</b> medieval bay, peaceful winter vineyards &amp; tranquil lakeside promenade</li></ul></div>
        <div class="table-activity-item">• <b>Afternoon (13:00 – 15:30):</b><ul class="activity-sublist"><li>STI Bus to Sigriswil (20 min)</li><li>Walk the 340-meter <b>Panoramabrücke Sigriswil</b> suspension bridge hanging 182m above the Gummischlucht gorge with sweeping views of Lake Thun &amp; Bernese Alps</li></ul></div>
        <div class="table-activity-item">• <b>Sunset &amp; Evening (16:00 – 21:00):</b><ul class="activity-sublist"><li>Train return to Bern base; head up to <b>Rosengarten</b> for the famous golden-hour sunset panorama overlooking the horseshoe Aare river loop &amp; Old Town</li><li>Final cosy Swiss dinner in Bern; pack bags for Paris transit tomorrow (Night 4 of 4 in Bern!)</li></ul></div>
      </div>
                <div class="table-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (Spiez Bay &amp; Rosengarten) <span class="admission-pill paid">🎟️ Sigriswil Bridge: 8 CHF (~A$14 AUD)</span> <em>(Day 14 total paid: 8 CHF / ~A$14 AUD)</em></div>
                <div class="table-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 Spiez Waterfront: Open 24/7</span> <span class="opening-pill open">🟢 Sigriswil Bridge: Open 08:00–20:00</span> <span class="opening-pill open">🟢 Bern Rosengarten: Open 24/7 (Sunset ~16:45)</span></div>
              </td>
              <td class="col-table-stay">
                <div class="table-hotel-name">Alpenblick CoLiving, Bern (Night 4 of 4 · Confirmed: 5525.615.675)</div>
                <div class="table-hotel-addr">Kasernenstrasse 29, 3013 Bern, Switzerland</div>
                <div class="table-transit-mode"><i>🚆 SBB InterCity (Bern ➔ Spiez) + 🚌 STI Bus to Sigriswil + Bern Local Tram</i></div>
              </td>
              <td class="col-table-action">
                <button type="button" class="btn-table-photos" title="View Photos of Lake Thun, Sigriswil &amp; Bern">📸 Photos</button>
              </td>
            </tr>`;

indexHtml = indexHtml.replace(tableDay14Old, tableDay14New);

// --- DAY CARDS: Update Days 11 to 14 & Buttons ---
// Day 11 Card
const cardDay11Old = /<div class="itinerary-card" data-day="Day 11">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/;
// Let's find card Day 11 accurately
const card11Regex = /<div class="itinerary-card"[^>]*data-day="Day 11"[\s\S]*?(?=<div class="itinerary-card"[^>]*data-day="Day 12")/ ;
const card11Replacement = `<div class="itinerary-card" data-day="Day 11">
          <div class="card-header">
            <span class="card-day-badge">Day 11</span>
            <span class="card-date-str">25 Dec 2026</span>
            <span class="badge-country badge-ch">Switzerland</span>
          </div>
          <div class="card-body">
            <h3 class="card-title">Christmas Day Transit to Bern (Alpenblick CoLiving) &amp; UNESCO Covered Arcades</h3>
            <div class="card-activities">
              <div class="card-activity-item">• <b>Morning (08:30 – 12:30):</b><ul class="activity-sublist"><li>Christmas morning departure from Alsace base (Kehl/Strasbourg)</li><li>Direct scenic transit: Strasbourg ➔ Basel SBB ➔ Bern Hbf (~2h 15m)</li><li>Drop bags &amp; check in at <b>Alpenblick CoLiving, Bern</b> (Kasernenstrasse 29)</li></ul></div>
              <div class="card-activity-item">• <b>Afternoon (13:30 – 17:00):</b><ul class="activity-sublist"><li>Explore Bern UNESCO World Heritage Old Town sheltered beneath 6 km of 15th-century covered sandstone arcades (<i>Lauben</i>)</li><li>Watch the animated astronomical chime at the historic <b>Zytglogge</b> Clock Tower</li><li>Walk across <b>Nydeggbrücke</b> bridge for breathtaking views of the turquoise Aare river loop &amp; Bear Park (<i>Bärengraben</i>)</li></ul></div>
              <div class="card-activity-item">• <b>Evening (17:30 – 21:00):</b><ul class="activity-sublist"><li>Cosy Christmas fondue dinner at a traditional Bernese cellar restaurant</li><li>Evening stroll through fairytale illuminated cobblestone alleys (Night 1 of 4 in Bern!)</li></ul></div>
            </div>
            <div class="card-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (Bern UNESCO Old Town, Covered Arcades &amp; Zytglogge are Free!)</div>
            <div class="card-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 Covered Arcades (Lauben): Open 24/7 sheltered</span> <span class="opening-pill open">🟢 Zytglogge: Open 24/7 (Hourly chime)</span> <span class="opening-pill open">🟢 Bern Dining: Open Christmas Day</span></div>
            <div class="card-hotel">
              <strong>Stay:</strong> Alpenblick CoLiving, Bern (Night 1 of 4 · Confirmed: 5525.615.675)<br>
              <span class="hotel-addr">Kasernenstrasse 29, 3013 Bern, Switzerland</span>
            </div>
            <div class="card-transit">
              <strong>Transit:</strong> 🚆 SBB Swiss Federal Railways + Bern Local Tram
            </div>
            <div class="card-footer-actions">
              <button type="button" class="btn-card-photos" data-day="Day 11">📸 View Photos (3)</button>
            </div>
          </div>
        </div>
        `;

indexHtml = indexHtml.replace(card11Regex, card11Replacement);

// Day 12 Card
const card12Regex = /<div class="itinerary-card"[^>]*data-day="Day 12"[\s\S]*?(?=<div class="itinerary-card"[^>]*data-day="Day 13")/ ;
const card12Replacement = `<div class="itinerary-card" data-day="Day 12">
          <div class="card-header">
            <span class="card-day-badge">Day 12</span>
            <span class="card-date-str">26 Dec 2026</span>
            <span class="badge-country badge-ch">Switzerland</span>
          </div>
          <div class="card-body">
            <h3 class="card-title">Grindelwald First Cliff Walk &amp; Lake Brienz (CLOY Pier)</h3>
            <div class="card-activities">
              <div class="card-activity-item">• <b>Morning (08:30 – 13:00):</b><ul class="activity-sublist"><li>SBB InterCity: Bern Hbf ➔ Interlaken Ost ➔ Grindelwald (1h 34m)</li><li>Board Grindelwald First Gondola gliding above snow-covered pine forests to 2,168m</li><li>Walk the exhilarating <b>First Cliff Walk by Tissot</b> (metal walkway &amp; cantilever bridge directly facing the iconic snowy Eiger North Face)</li></ul></div>
              <div class="card-activity-item">• <b>Afternoon (13:30 – 17:30):</b><ul class="activity-sublist"><li>Descend to Grindelwald alpine village; train to Interlaken Ost</li><li>PostBus 103: Interlaken Ost ➔ Iseltwald (20 min)</li><li>Stroll onto <b>Iseltwald Landing Stage</b> (Lake Brienz Crash Landing on You wooden pier surrounded by glassy turquoise alpine waters)</li></ul></div>
              <div class="card-activity-item">• <b>Evening (18:00 – 21:00):</b><ul class="activity-sublist"><li>PostBus 103 + SBB Train back to Bern base (Alpenblick CoLiving)</li><li>Hot Swiss roesti dinner &amp; relaxing evening (Night 2 of 4 in Bern!)</li></ul></div>
            </div>
            <div class="card-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill paid">🎟️ Iseltwald CLOY Pier: 5 CHF (~A$9 AUD)</span> <span class="admission-pill free">✨ First Cliff Walk walkway is Free</span> <em>(Day 12 total paid: 5 CHF / ~A$9 AUD)</em></div>
            <div class="card-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 Grindelwald First Gondola: 08:30–16:30</span> <span class="opening-pill open">🟢 First Cliff Walk: Open daily in winter</span> <span class="opening-pill open">🟢 Iseltwald Pier: Open 24/7</span></div>
            <div class="card-hotel">
              <strong>Stay:</strong> Alpenblick CoLiving, Bern (Night 2 of 4 · Confirmed: 5525.615.675)<br>
              <span class="hotel-addr">Kasernenstrasse 29, 3013 Bern, Switzerland</span>
            </div>
            <div class="card-transit">
              <strong>Transit:</strong> 🚆 SBB InterCity (Bern ➔ Grindelwald) + 🚠 First Gondola + 🚌 PostBus 103
            </div>
            <div class="card-footer-actions">
              <button type="button" class="btn-card-photos" data-day="Day 12">📸 View Photos (3)</button>
            </div>
          </div>
        </div>
        `;

indexHtml = indexHtml.replace(card12Regex, card12Replacement);

// Day 13 Card
const card13Regex = /<div class="itinerary-card"[^>]*data-day="Day 13"[\s\S]*?(?=<div class="itinerary-card"[^>]*data-day="Day 14")/ ;
const card13Replacement = `<div class="itinerary-card" data-day="Day 13">
          <div class="card-header">
            <span class="card-day-badge">Day 13</span>
            <span class="card-date-str">27 Dec 2026</span>
            <span class="badge-country badge-ch">Switzerland</span>
          </div>
          <div class="card-body">
            <h3 class="card-title">Lauterbrunnen Valley, Car-Free Mürren &amp; Magical Blausee Winter Park</h3>
            <div class="card-activities">
              <div class="card-activity-item">• <b>Morning (08:30 – 12:30):</b><ul class="activity-sublist"><li>SBB Train: Bern Hbf ➔ Interlaken Ost ➔ Lauterbrunnen (1h 15m)</li><li>Marvel at <b>Lauterbrunnen Valley</b> &amp; Staubbach Falls plunging 297m down frozen cliffs</li><li>BLM Cable Car &amp; Mountain Rail to <b>Mürren</b> car-free clifftop village (1,638m) facing Eiger, Mönch &amp; Jungfrau</li></ul></div>
              <div class="card-activity-item">• <b>Afternoon &amp; Twilight (13:30 – 19:30):</b><ul class="activity-sublist"><li>Descend to valley; SBB Train via Spiez/Frutigen + Bus 230 to <b>Blausee Nature Park</b></li><li>Experience the enchanting <b>Path of the 1,000 Lights</b> lantern walk through snowy pine woods</li><li>Admire crystal-clear illuminated turquoise subterranean spring lake surrounded by glowing lanterns</li></ul></div>
              <div class="card-activity-item">• <b>Evening (20:00 – 21:30):</b><ul class="activity-sublist"><li>Bus 230 + SBB Train return to Bern base (Alpenblick CoLiving)</li><li>Warm drinks &amp; rest (Night 3 of 4 in Bern!)</li></ul></div>
            </div>
            <div class="card-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (Lauterbrunnen &amp; Mürren) <span class="admission-pill paid">🎟️ Blausee: 13 CHF (~A$22 AUD)</span> <em>(Day 13 total paid: 13 CHF / ~A$22 AUD)</em></div>
            <div class="card-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 Lauterbrunnen Valley: Open 24/7</span> <span class="opening-pill open">🟢 Mürren BLM Transit: 365 Days (06:00–20:30)</span> <span class="opening-pill open">🟢 Blausee: 09:00–21:00 (1,000 Lights 16:00–20:00)</span></div>
            <div class="card-hotel">
              <strong>Stay:</strong> Alpenblick CoLiving, Bern (Night 3 of 4 · Confirmed: 5525.615.675)<br>
              <span class="hotel-addr">Kasernenstrasse 29, 3013 Bern, Switzerland</span>
            </div>
            <div class="card-transit">
              <strong>Transit:</strong> 🚆 SBB Train + 🚠 BLM Cable Car &amp; Mountain Rail + 🚌 Bus 230
            </div>
            <div class="card-footer-actions">
              <button type="button" class="btn-card-photos" data-day="Day 13">📸 View Photos (3)</button>
            </div>
          </div>
        </div>
        `;

indexHtml = indexHtml.replace(card13Regex, card13Replacement);

// Day 14 Card
const card14Regex = /<div class="itinerary-card"[^>]*data-day="Day 14"[\s\S]*?(?=<div class="itinerary-card"[^>]*data-day="Day 15")/ ;
const card14Replacement = `<div class="itinerary-card" data-day="Day 14">
          <div class="card-header">
            <span class="card-day-badge">Day 14</span>
            <span class="card-date-str">28 Dec 2026</span>
            <span class="badge-country badge-ch">Switzerland</span>
          </div>
          <div class="card-body">
            <h3 class="card-title">Lake Thun Waterfront, Sigriswil Suspension Bridge &amp; Bern Rosengarten Sunset</h3>
            <div class="card-activities">
              <div class="card-activity-item">• <b>Morning (09:30 – 12:30):</b><ul class="activity-sublist"><li>SBB InterCity: Bern Hbf ➔ Spiez on Lake Thun (30 min)</li><li>Stroll picturesque <b>Spiez Castle</b> medieval bay, peaceful winter vineyards &amp; tranquil lakeside promenade</li></ul></div>
              <div class="card-activity-item">• <b>Afternoon (13:00 – 15:30):</b><ul class="activity-sublist"><li>STI Bus to Sigriswil (20 min)</li><li>Walk the 340-meter <b>Panoramabrücke Sigriswil</b> suspension bridge hanging 182m above the Gummischlucht gorge with sweeping views of Lake Thun &amp; Bernese Alps</li></ul></div>
              <div class="card-activity-item">• <b>Sunset &amp; Evening (16:00 – 21:00):</b><ul class="activity-sublist"><li>Train return to Bern base; head up to <b>Rosengarten</b> for the famous golden-hour sunset panorama overlooking the horseshoe Aare river loop &amp; Old Town</li><li>Final cosy Swiss dinner in Bern; pack bags for Paris transit tomorrow (Night 4 of 4 in Bern!)</li></ul></div>
            </div>
            <div class="card-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (Spiez Bay &amp; Rosengarten) <span class="admission-pill paid">🎟️ Sigriswil Bridge: 8 CHF (~A$14 AUD)</span> <em>(Day 14 total paid: 8 CHF / ~A$14 AUD)</em></div>
            <div class="card-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 Spiez Waterfront: Open 24/7</span> <span class="opening-pill open">🟢 Sigriswil Bridge: Open 08:00–20:00</span> <span class="opening-pill open">🟢 Bern Rosengarten: Open 24/7 (Sunset ~16:45)</span></div>
            <div class="card-hotel">
              <strong>Stay:</strong> Alpenblick CoLiving, Bern (Night 4 of 4 · Confirmed: 5525.615.675)<br>
              <span class="hotel-addr">Kasernenstrasse 29, 3013 Bern, Switzerland</span>
            </div>
            <div class="card-transit">
              <strong>Transit:</strong> 🚆 SBB InterCity (Bern ➔ Spiez) + 🚌 STI Bus to Sigriswil + Bern Local Tram
            </div>
            <div class="card-footer-actions">
              <button type="button" class="btn-card-photos" data-day="Day 14">📸 View Photos (3)</button>
            </div>
          </div>
        </div>
        `;

indexHtml = indexHtml.replace(card14Regex, card14Replacement);

// Day 15 Card Photo button update
indexHtml = indexHtml.replace(
  /<button type="button" class="btn-card-photos" data-day="Day 15">📸 View Photos \(\d+\)<\/button>/,
  '<button type="button" class="btn-card-photos" data-day="Day 15">📸 View Photos (3)</button>'
);

// Day 19 Card Photo button update (Versailles + Paris Temple = 4 sights)
indexHtml = indexHtml.replace(
  /<button type="button" class="btn-card-photos" data-day="Day 19">📸 View Photos \(\d+\)<\/button>/,
  '<button type="button" class="btn-card-photos" data-day="Day 19">📸 View Photos (4)</button>'
);

// --- OPENING HOURS TABLE: Update Days 11 to 15 ---
indexHtml = indexHtml.replace(
  /<tr><td><strong>Day 11<\/strong> \(25 Dec\)<\/td><td>Friday<\/td><td>[\s\S]*?<\/tr>/,
  '<tr><td><strong>Day 11</strong> (25 Dec)</td><td>Friday</td><td>Strasbourg ➔ Bern (Alpenblick CoLiving)</td><td>Bern UNESCO Old Town, 6 km Covered Sandstone Arcades (Lauben), Zytglogge Clock Tower, Nydeggbrücke</td><td>Arcades open 24/7 (Sheltered) · Zytglogge hourly chime · Swiss rail holiday service</td><td><span class="badge-status-open">🟢 Christmas Day Open</span></td></tr>'
);
indexHtml = indexHtml.replace(
  /<tr><td><strong>Day 12<\/strong> \(26 Dec\)<\/td><td>Saturday<\/td><td>[\s\S]*?<\/tr>/,
  '<tr><td><strong>Day 12</strong> (26 Dec)</td><td>Saturday</td><td>Grindelwald &amp; Lake Brienz</td><td>Grindelwald First Gondola (2,168m), First Cliff Walk by Tissot, Iseltwald Landing Stage (CLOY Pier)</td><td>First Gondola 08:30–16:30 · Cliff Walk open · Iseltwald Pier open 24/7</td><td><span class="badge-status-open">🟢 Boxing Day Open</span></td></tr>'
);
indexHtml = indexHtml.replace(
  /<tr><td><strong>Day 13<\/strong> \(27 Dec\)<\/td><td>Sunday<\/td><td>[\s\S]*?<\/tr>/,
  '<tr><td><strong>Day 13</strong> (27 Dec)</td><td>Sunday</td><td>Lauterbrunnen, Mürren &amp; Blausee</td><td>Lauterbrunnen Valley &amp; Staubbach Falls, BLM Mountain Rail to Mürren, Blausee Nature Park (Path of the 1,000 Lights)</td><td>Lauterbrunnen 24/7 · Mürren BLM 06:00–20:30 · Blausee 09:00–21:00 (1,000 Lights 16:00–20:00)</td><td><span class="badge-status-open">🟢 Verified Open</span></td></tr>'
);
indexHtml = indexHtml.replace(
  /<tr><td><strong>Day 14<\/strong> \(28 Dec\)<\/td><td>Monday<\/td><td>[\s\S]*?<\/tr>/,
  '<tr><td><strong>Day 14</strong> (28 Dec)</td><td>Monday</td><td>Lake Thun, Sigriswil &amp; Bern</td><td>Spiez Castle &amp; Lake Thun Waterfront, Panoramabrücke Sigriswil (182m high), Bern Rosengarten Sunset</td><td>Spiez 24/7 · Sigriswil Bridge 08:00–20:00 · Rosengarten 24/7 (Sunset ~16:45)</td><td><span class="badge-status-open">🟢 Verified Open</span></td></tr>'
);
indexHtml = indexHtml.replace(
  /<tr><td><strong>Day 15<\/strong> \(29 Dec\)<\/td><td>Tuesday<\/td><td>[\s\S]*?<\/tr>/,
  '<tr><td><strong>Day 15</strong> (29 Dec)</td><td>Tuesday</td><td>Bern ➔ Paris</td><td>Bern Switzerland LDS Temple (Morning Proxy Endowment Session), High-Speed TGV Lyria to Paris Gare de Lyon</td><td>Temple: Arrive by 8:45 AM (Morning Session) · TGV Lyria cruising @ 320 km/h · Metro 14 open</td><td><span class="badge-status-open">🟢 Confirmed Schedule</span></td></tr>'
);

fs.writeFileSync(path.join(repoDir, 'index.html'), indexHtml, 'utf8');
console.log('✅ index.html updated successfully!');

// ==========================================
// 2. UPDATE js/app.js
// ==========================================
let appJs = fs.readFileSync(path.join(repoDir, 'js/app.js'), 'utf8');

const matchItin = appJs.match(/const itineraryData = (\[[\s\S]*?\n\];)/);
if (!matchItin) {
  throw new Error('Could not find itineraryData in js/app.js');
}

const itin = eval(matchItin[1]);

// Day 12
itin[11] = {
  day: "Day 12",
  date: "26 Dec 2026",
  city: "Grindelwald & Lake Brienz",
  country: "Switzerland",
  badgeClass: "badge-ch",
  cardHighlight: "highlight-swiss",
  title: "Grindelwald First Cliff Walk & Lake Brienz (CLOY Pier)",
  activities: [
    "• <b>Morning (08:30 – 13:00):</b><ul class=\"activity-sublist\"><li>SBB InterCity: Bern Hbf ➔ Interlaken Ost ➔ Grindelwald (1h 34m)</li><li>Board Grindelwald First Gondola gliding above snow-covered pine forests to 2,168m</li><li>Walk the exhilarating <b>First Cliff Walk by Tissot</b> (metal walkway &amp; cantilever bridge directly facing the iconic snowy Eiger North Face)</li></ul>",
    "• <b>Afternoon (13:30 – 17:30):</b><ul class=\"activity-sublist\"><li>Descend to Grindelwald alpine village; train to Interlaken Ost</li><li>PostBus 103: Interlaken Ost ➔ Iseltwald (20 min)</li><li>Stroll onto <b>Iseltwald Landing Stage</b> (Lake Brienz Crash Landing on You wooden pier surrounded by glassy turquoise alpine waters)</li></ul>",
    "• <b>Evening (18:00 – 21:00):</b><ul class=\"activity-sublist\"><li>PostBus 103 + SBB Train back to Bern base (Alpenblick CoLiving)</li><li>Hot Swiss roesti dinner &amp; relaxing evening (Night 2 of 4 in Bern!)</li></ul>"
  ],
  admissionHtml: "<strong>Sightseeing Admission:</strong> <span class=\"admission-pill paid\">🎟️ Iseltwald CLOY Pier: 5 CHF (~A$9 AUD)</span> <span class=\"admission-pill free\">✨ First Cliff Walk walkway is Free</span> <em>(Day 12 total paid: 5 CHF / ~A$9 AUD)</em>",
  openingHtml: "<strong>🕒 Hours &amp; Open Status:</strong> <span class=\"opening-pill open\">🟢 Grindelwald First Gondola: 08:30–16:30</span> <span class=\"opening-pill open\">🟢 First Cliff Walk: Open daily in winter</span> <span class=\"opening-pill open\">🟢 Iseltwald Pier: Open 24/7</span>",
  stayTitle: "Alpenblick CoLiving, Bern (Night 2 of 4 · Confirmed: 5525.615.675)",
  stayDesc: "Kasernenstrasse 29, 3013 Bern, Switzerland",
  transitInfo: "🚆 SBB InterCity (Bern ➔ Grindelwald) + 🚠 First Gondola + 🚌 PostBus 103",
  coords: [46.6588, 8.0538]
};

// Day 13
itin[12] = {
  day: "Day 13",
  date: "27 Dec 2026",
  city: "Lauterbrunnen, Mürren & Blausee",
  country: "Switzerland",
  badgeClass: "badge-ch",
  cardHighlight: "highlight-swiss",
  title: "Lauterbrunnen Valley, Car-Free Mürren & Magical Blausee Winter Park",
  activities: [
    "• <b>Morning (08:30 – 12:30):</b><ul class=\"activity-sublist\"><li>SBB Train: Bern Hbf ➔ Interlaken Ost ➔ Lauterbrunnen (1h 15m)</li><li>Marvel at <b>Lauterbrunnen Valley</b> &amp; Staubbach Falls plunging 297m down frozen cliffs</li><li>BLM Cable Car &amp; Mountain Rail to <b>Mürren</b> car-free clifftop village (1,638m) facing Eiger, Mönch &amp; Jungfrau</li></ul>",
    "• <b>Afternoon &amp; Twilight (13:30 – 19:30):</b><ul class=\"activity-sublist\"><li>Descend to valley; SBB Train via Spiez/Frutigen + Bus 230 to <b>Blausee Nature Park</b></li><li>Experience the enchanting <b>Path of the 1,000 Lights</b> lantern walk through snowy pine woods</li><li>Admire crystal-clear illuminated turquoise subterranean spring lake surrounded by glowing lanterns</li></ul>",
    "• <b>Evening (20:00 – 21:30):</b><ul class=\"activity-sublist\"><li>Bus 230 + SBB Train return to Bern base (Alpenblick CoLiving)</li><li>Warm drinks &amp; rest (Night 3 of 4 in Bern!)</li></ul>"
  ],
  admissionHtml: "<strong>Sightseeing Admission:</strong> <span class=\"admission-pill free\">✨ Free ($0 AUD)</span> (Lauterbrunnen &amp; Mürren) <span class=\"admission-pill paid\">🎟️ Blausee: 13 CHF (~A$22 AUD)</span> <em>(Day 13 total paid: 13 CHF / ~A$22 AUD)</em>",
  openingHtml: "<strong>🕒 Hours &amp; Open Status:</strong> <span class=\"opening-pill open\">🟢 Lauterbrunnen Valley: Open 24/7</span> <span class=\"opening-pill open\">🟢 Mürren BLM Transit: 365 Days (06:00–20:30)</span> <span class=\"opening-pill open\">🟢 Blausee: 09:00–21:00 (1,000 Lights 16:00–20:00)</span>",
  stayTitle: "Alpenblick CoLiving, Bern (Night 3 of 4 · Confirmed: 5525.615.675)",
  stayDesc: "Kasernenstrasse 29, 3013 Bern, Switzerland",
  transitInfo: "🚆 SBB Train + 🚠 BLM Cable Car &amp; Mountain Rail + 🚌 Bus 230",
  coords: [46.5935, 7.9090]
};

// Day 14
itin[13] = {
  day: "Day 14",
  date: "28 Dec 2026",
  city: "Lake Thun, Sigriswil & Bern",
  country: "Switzerland",
  badgeClass: "badge-ch",
  cardHighlight: "highlight-swiss",
  title: "Lake Thun Waterfront, Sigriswil Suspension Bridge & Bern Rosengarten Sunset",
  activities: [
    "• <b>Morning (09:30 – 12:30):</b><ul class=\"activity-sublist\"><li>SBB InterCity: Bern Hbf ➔ Spiez on Lake Thun (30 min)</li><li>Stroll picturesque <b>Spiez Castle</b> medieval bay, peaceful winter vineyards &amp; tranquil lakeside promenade</li></ul>",
    "• <b>Afternoon (13:00 – 15:30):</b><ul class=\"activity-sublist\"><li>STI Bus to Sigriswil (20 min)</li><li>Walk the 340-meter <b>Panoramabrücke Sigriswil</b> suspension bridge hanging 182m above the Gummischlucht gorge with sweeping views of Lake Thun &amp; Bernese Alps</li></ul>",
    "• <b>Sunset &amp; Evening (16:00 – 21:00):</b><ul class=\"activity-sublist\"><li>Train return to Bern base; head up to <b>Rosengarten</b> for the famous golden-hour sunset panorama overlooking the horseshoe Aare river loop &amp; Old Town</li><li>Final cosy Swiss dinner in Bern; pack bags for Paris transit tomorrow (Night 4 of 4 in Bern!)</li></ul>"
  ],
  admissionHtml: "<strong>Sightseeing Admission:</strong> <span class=\"admission-pill free\">✨ Free ($0 AUD)</span> (Spiez Bay &amp; Rosengarten) <span class=\"admission-pill paid\">🎟️ Sigriswil Bridge: 8 CHF (~A$14 AUD)</span> <em>(Day 14 total paid: 8 CHF / ~A$14 AUD)</em>",
  openingHtml: "<strong>🕒 Hours &amp; Open Status:</strong> <span class=\"opening-pill open\">🟢 Spiez Waterfront: Open 24/7</span> <span class=\"opening-pill open\">🟢 Sigriswil Bridge: Open 08:00–20:00</span> <span class=\"opening-pill open\">🟢 Bern Rosengarten: Open 24/7 (Sunset ~16:45)</span>",
  stayTitle: "Alpenblick CoLiving, Bern (Night 4 of 4 · Confirmed: 5525.615.675)",
  stayDesc: "Kasernenstrasse 29, 3013 Bern, Switzerland",
  transitInfo: "🚆 SBB InterCity (Bern ➔ Spiez) + 🚌 STI Bus to Sigriswil + Bern Local Tram",
  coords: [46.6863, 7.6844]
};

appJs = appJs.replace(matchItin[0], 'const itineraryData = ' + JSON.stringify(itin, null, 2) + ';');
fs.writeFileSync(path.join(repoDir, 'js/app.js'), appJs, 'utf8');
console.log('✅ js/app.js updated successfully!');

// ==========================================
// 3. REBUILD js/gallery-data.js
// ==========================================
const completeGalleryData = [
  {
    day: "Day 2",
    date: "16 Dec 2026",
    city: "Amsterdam",
    sights: [
      {
        name: "UNESCO Canal Ring (Herengracht & Keizersgracht)",
        image: "/images/sights/amsterdam-canals.jpg",
        desc: "17th-century golden age merchant canal houses illuminated with sparkling holiday lights along the frozen water."
      },
      {
        name: "Dam Square & Koninklijk Paleis",
        image: "/images/sights/dam-square-amsterdam.jpg",
        desc: "The monumental heart of Amsterdam with the illuminated Royal Palace and giant festive Christmas tree."
      },
      {
        name: "Begijnhof Historic Courtyard & Chapel",
        image: "/images/sights/begijnhof-amsterdam.jpg",
        desc: "Quiet medieval sanctuary of gabled houses dating back to the 14th century tucked behind the bustling city centre."
      },
      {
        name: "Amsterdam Light Festival & Leidseplein Square",
        image: "/images/sights/leidseplein.jpg",
        desc: "Vibrant winter open-air light art installations and lively illuminated canal square bustling with holiday cheer."
      }
    ]
  },
  {
    day: "Day 3",
    date: "17 Dec 2026",
    city: "Amsterdam & Zaanse Schans",
    sights: [
      {
        name: "Zaanse Schans Windmills & Cheese Farm",
        image: "/images/sights/zaanse-schans.jpg",
        desc: "Iconic historic Dutch green windmills, working clog workshops, and authentic Catharina Hoeve cheese farm along River Zaan."
      },
      {
        name: "Rijksmuseum & The Night Watch",
        image: "/images/sights/rijksmuseum.jpg",
        desc: "World-renowned national museum housing Rembrandt's masterpiece The Night Watch and Vermeer's luminous paintings."
      },
      {
        name: "Ice Village Christmas Market (Museumplein)",
        image: "/images/sights/amsterdam-ice-village.jpg",
        desc: "Atmospheric holiday village with ice skating rink, Dutch poffertjes stalls, and artisanal wooden chalet market booths."
      },
      {
        name: "The Jordaan Historic Canal District",
        image: "/images/sights/the-jordaan.jpg",
        desc: "Charming labyrinth of narrow cobblestone alleyways, cosy brown cafés, indie boutiques, and picturesque canal bridges."
      }
    ]
  },
  {
    day: "Day 4",
    date: "18 Dec 2026",
    city: "The Hague & Amsterdam",
    sights: [
      {
        name: "The Hague Netherlands LDS Temple",
        image: "/images/temples/the-hague-temple.jpg",
        desc: "Serene sacred grounds of The Hague Netherlands Temple in Zoetermeer, surrounded by tranquil canals and winter landscaping."
      },
      {
        name: "Peace Palace (Vredespaleis)",
        image: "/images/sights/peace-palace-the-hague.jpg",
        desc: "Seat of the International Court of Justice (ICJ), a magnificent neo-Renaissance palace embodying global peace."
      },
      {
        name: "International Criminal Court (ICC)",
        image: "/images/sights/icc-the-hague.jpg",
        desc: "Striking modern glass architecture of the International Criminal Court representing modern international law."
      }
    ]
  },
  {
    day: "Day 5",
    date: "19 Dec 2026",
    city: "Amsterdam ➔ Cologne",
    sights: [
      {
        name: "Cologne Cathedral (Kölner Dom)",
        image: "/images/sights/koelner-dom.jpg",
        desc: "Towering Gothic twin spires rising 157 meters above the Rhine, UNESCO World Heritage landmark and shrine of the Three Kings."
      },
      {
        name: "Hohenzollern Bridge Love Locks",
        image: "/images/sights/hohenzollern-bridge.jpg",
        desc: "Historic railway and pedestrian bridge across the Rhine covered with tens of thousands of colorful love padlocks."
      },
      {
        name: "Lindt Chocolate Museum (Schokoladenmuseum)",
        image: "/images/sights/schokoladenmuseum.jpg",
        desc: "Fascinating museum situated directly on the Rhine harbour with a 3-meter-high golden chocolate fountain."
      },
      {
        name: "Cologne Cathedral Christmas Market",
        image: "/images/sights/cologne-christmas-market.jpg",
        desc: "Spectacular Christmas market with a red tent canopy of fairy lights directly beneath the illuminated spires of the cathedral."
      }
    ]
  },
  {
    day: "Day 6",
    date: "20 Dec 2026",
    city: "Cologne & Düsseldorf",
    sights: [
      {
        name: "Düsseldorf 7 Themed Christmas Markets",
        image: "/images/sights/duesseldorf-markets.jpg",
        desc: "Enchanting themed markets across the city including the Handwerker-Markt on Marktplatz and Angel Market."
      },
      {
        name: "Königsallee Canal Promenade & Corneliusplatz Ice Rink",
        image: "/images/sights/koenigsallee.jpg",
        desc: "Glamorous boulevard flanked by ancient chestnut trees, luxury boutiques, and the sprawling open-air Corneliusplatz skating rink."
      },
      {
        name: "Düsseldorf Altstadt & Little Tokyo",
        image: "/images/sights/dusseldorf-altstadt.jpg",
        desc: "Historic Old Town alleys and vibrant Immermannstraße Japanese district featuring authentic bakeries and ramen shops."
      }
    ]
  },
  {
    day: "Day 7",
    date: "21 Dec 2026",
    city: "Cologne ➔ Frankfurt",
    sights: [
      {
        name: "Eiserner Steg (Iron Footbridge over Main)",
        image: "/images/sights/eiserner-steg.jpg",
        desc: "Iconic 1869 neo-Gothic pedestrian footbridge spanning the Main River, offering panoramic skyline views of 'Mainhattan'."
      },
      {
        name: "Frankfurt Kaiserdom (Imperial Cathedral)",
        image: "/images/sights/frankfurt-kaiserdom.jpg",
        desc: "Gothic red sandstone imperial cathedral where Holy Roman Emperors were historically crowned."
      },
      {
        name: "Römerberg Historic Square & Christmas Market",
        image: "/images/sights/roemerberg.jpg",
        desc: "Reconstructed medieval timber-framed houses, festive carousel, and one of Germany's oldest and grandest Christmas markets."
      }
    ]
  },
  {
    day: "Day 8",
    date: "22 Dec 2026",
    city: "Frankfurt am Main",
    sights: [
      {
        name: "Goethe House & Museum",
        image: "/images/sights/goethe-house-frankfurt.jpg",
        desc: "Birthplace and childhood home of Johann Wolfgang von Goethe, authentically furnished with 18th-century bourgeois decor."
      },
      {
        name: "Zeil Shopping Boulevard & MyZeil Architectural Wave",
        image: "/images/sights/frankfurt-zeil.jpg",
        desc: "Frankfurt's premier pedestrian shopping street featuring the futuristic vortex glass-and-steel facade of MyZeil."
      },
      {
        name: "Frankfurt Germany LDS Temple",
        image: "/images/temples/frankfurt-temple.jpg",
        desc: "Sacred and peaceful grounds of the Frankfurt Germany Temple in Friedrichsdorf, framed by winter evergreen trees."
      }
    ]
  },
  {
    day: "Day 9",
    date: "23 Dec 2026",
    city: "Frankfurt ➔ Strasbourg",
    sights: [
      {
        name: "Place Kléber & The Great Christmas Tree (Grand Sapin)",
        image: "/images/sights/place-kleber.jpg",
        desc: "The monumental central square of Strasbourg featuring the 30-meter-tall decorated Christmas tree glistening with fairy lights."
      },
      {
        name: "Strasbourg Cathedral (Cathédrale Notre-Dame)",
        image: "/images/sights/strasbourg-cathedral.jpg",
        desc: "Masterpiece of Gothic art crafted from pink Vosges sandstone, featuring an ornate facade and medieval astronomical clock."
      },
      {
        name: "Petite France & Ponts Couverts",
        image: "/images/sights/strasbourg-petite-france.jpg",
        desc: "Half-timbered tanners' quarters built over the Ill River canals, fortified towers, and covered wooden bridges."
      },
      {
        name: "Cross-Border Tram Line D (Kehl ➔ Strasbourg)",
        image: "/images/sights/kehl-tram.jpg",
        desc: "The modern international tramway crossing the Rhine River bridge, seamlessly connecting Germany and France."
      }
    ]
  },
  {
    day: "Day 10",
    date: "24 Dec 2026",
    city: "Colmar & Alsace",
    sights: [
      {
        name: "Colmar Petite Venise & Quai de la Poissonnerie",
        image: "/images/sights/colmar-petite-venise.jpg",
        desc: "Fairytale pastel half-timbered houses reflecting in the Lauch River canals, adorned with lavish Christmas decorations."
      },
      {
        name: "Maison Pfister (Rue des Marchands)",
        image: "/images/sights/maison-pfister-colmar.jpg",
        desc: "Famous 1537 Renaissance merchant house with painted wood panels, two-story oriel corner window, and octagonal turret."
      },
      {
        name: "Colmar Old Town Christmas Markets",
        image: "/images/sights/colmar-christmas-market.jpg",
        desc: "Intimate Alsace holiday chalets on Place des Dominicains and Koïfhus square filled with gingerbread and vin chaud aromas."
      }
    ]
  },
  {
    day: "Day 11",
    date: "25 Dec 2026",
    city: "Strasbourg ➔ Bern",
    sights: [
      {
        name: "Bern UNESCO Old Town & Covered Sandstone Arcades (Lauben)",
        image: "/images/sights/bern-arcades.jpg",
        desc: "6 kilometers of continuous 15th-century covered sandstone arcades providing a sheltered, atmospheric promenade through Bern's historic medieval core."
      },
      {
        name: "Zytglogge Astronomical Clock Tower",
        image: "/images/sights/zytglogge-bern.jpg",
        desc: "13th-century astronomical clock tower featuring mechanical dancing figurines, rooster crow, and revolving astrological dial."
      },
      {
        name: "Nydeggbrücke Bridge & Bear Park Overlook",
        image: "/images/sights/bern-nydeggbruecke.jpg",
        desc: "Grand sandstone arch bridge spanning the turquoise Aare River, with panoramic views of medieval timber houses and the Bärengraben hillside."
      }
    ]
  },
  {
    day: "Day 12",
    date: "26 Dec 2026",
    city: "Grindelwald & Lake Brienz",
    sights: [
      {
        name: "First Cliff Walk by Tissot (Mount First, 2,168m)",
        image: "/images/sights/grindelwald-first-cliff-walk.jpg",
        desc: "Suspended steel cliff walkway and thrilling 45-meter cantilever observation platform directly facing the snow-capped Eiger North Face."
      },
      {
        name: "Grindelwald Alpine Valley & Eiger North Face",
        image: "/images/sights/grindelwald-valley.jpg",
        desc: "Picturesque winter village nestled in a snowy valley with traditional Swiss chalets framed by the towering limestone peaks of the Bernese Alps."
      },
      {
        name: "Iseltwald Landing Stage (Lake Brienz CLOY Pier)",
        image: "/images/sights/iseltwald-landing-stage.jpg",
        desc: "Famed wooden landing stage from Crash Landing on You jutting out into the tranquil, mirror-like turquoise waters of Lake Brienz."
      }
    ]
  },
  {
    day: "Day 13",
    date: "27 Dec 2026",
    city: "Lauterbrunnen, Mürren & Blausee",
    sights: [
      {
        name: "Lauterbrunnen Valley & Staubbach Falls",
        image: "/images/sights/staubbach-falls-lauterbrunnen.jpg",
        desc: "Dramatic glacial valley of 72 waterfalls with the iconic 297-meter Staubbach Falls plunging from vertical frosted cliffs."
      },
      {
        name: "Mürren Car-Free Alpine Village (1,638m)",
        image: "/images/sights/muerren-village.jpg",
        desc: "Tranquil, car-free clifftop village perched high above Lauterbrunnen with unhindered panoramic views of Eiger, Mönch, and Jungfrau."
      },
      {
        name: "Blausee Nature Park (Path of the 1,000 Lights)",
        image: "/images/sights/blausee.jpg",
        desc: "Crystal-clear subterranean spring lake illuminated with hundreds of glowing lanterns along snowy forest trails in winter twilight."
      }
    ]
  },
  {
    day: "Day 14",
    date: "28 Dec 2026",
    city: "Lake Thun, Sigriswil & Bern",
    sights: [
      {
        name: "Spiez Castle & Lake Thun Waterfront",
        image: "/images/sights/lake-thun-spiez.jpg",
        desc: "Medieval 1,000-year-old castle bay, peaceful hillside vineyards, and quiet alpine lakeside promenades along deep-blue Lake Thun."
      },
      {
        name: "Panoramabrücke Sigriswil Suspension Bridge",
        image: "/images/sights/panoramabruecke-sigriswil.jpg",
        desc: "Thrilling 340-meter pedestrian suspension bridge suspended 182 meters above the Gummischlucht gorge with sweeping views across the lake."
      },
      {
        name: "Bern Rosengarten Sunset Viewpoint over Aare River",
        image: "/images/sights/bern-rosengarten.jpg",
        desc: "Elevated rose garden park offering the premier sunset view over the loop of the emerald Aare river, Nydeggbrücke, and the red roofs of Bern."
      }
    ]
  },
  {
    day: "Day 15",
    date: "29 Dec 2026",
    city: "Bern ➔ Paris",
    sights: [
      {
        name: "Bern Switzerland LDS Temple",
        image: "/images/temples/bern-temple.jpg",
        desc: "The first Latter-day Saint temple in Europe (dedicated 1955) in Zollikofen, set among peaceful pine trees and Swiss gardens."
      },
      {
        name: "High-Speed TGV Lyria (Bern ➔ Paris Gare de Lyon)",
        image: "/images/sights/tgv-lyria.jpg",
        desc: "Sleek double-decker French high-speed train cruising comfortably across borders at 320 km/h, delivering passengers directly into central Paris."
      },
      {
        name: "Break & Home Paris Italie Porte de Choisy",
        image: "/images/sights/break-home-paris-italie.jpg",
        desc: "Modern Parisian aparthotel accommodation in Paris 13th / Ivry-sur-Seine with fully equipped kitchenettes and direct access via Metro Line 14."
      }
    ]
  },
  {
    day: "Day 16",
    date: "30 Dec 2026",
    city: "Paris",
    sights: [
      {
        name: "Musée du Louvre & Mona Lisa",
        image: "/images/sights/louvre.jpg",
        desc: "World's grandest art museum housed in the former royal palace, entered via I.M. Pei's iconic glass pyramid."
      },
      {
        name: "Tuileries Garden (Jardin des Tuileries)",
        image: "/images/sights/tuileries-garden.jpg",
        desc: "Historic French formal garden created by Catherine de' Medici connecting the Louvre with Place de la Concorde."
      },
      {
        name: "Galeries Lafayette Haussmann Giant Tree",
        image: "/images/sights/galeries-lafayette.jpg",
        desc: "Colossal multi-story Christmas tree and spectacular holiday window displays suspended beneath the Art Nouveau glass dome."
      },
      {
        name: "Arc de Triomphe & Champs-Élysées",
        image: "/images/sights/arc-de-triomphe.jpg",
        desc: "Monumental triumphal arch honoring French military victories, anchoring the illuminated Champs-Élysées boulevard."
      }
    ]
  },
  {
    day: "Day 17",
    date: "31 Dec 2026",
    city: "Paris (NYE)",
    sights: [
      {
        name: "Musée d'Orsay (Impressionist Masterpieces)",
        image: "/images/sights/musee-d-orsay.jpg",
        desc: "Stunning converted Beaux-Arts railway station on the Seine housing masterpieces by Monet, Renoir, Van Gogh, and Degas."
      },
      {
        name: "Cathédrale Notre-Dame de Paris (Île de la Cité)",
        image: "/images/sights/notre-dame-paris.jpg",
        desc: "Gothic masterpiece gracefully rising above the Seine river island, with its reconstructed spire and restored flying buttresses."
      },
      {
        name: "Shakespeare and Company & Latin Quarter Stroll",
        image: "/images/sights/shakespeare-and-company.jpg",
        desc: "Legendary bohemian English-language bookstore opposite Notre-Dame and charming literary alleyways of the Latin Quarter."
      },
      {
        name: "Eiffel Tower Sparkle & Champs-Élysées NYE Countdown",
        image: "/images/sights/eiffel-tower.jpg",
        desc: "Iconic Iron Lady sparkling with thousands of synchronized strobe lights over Paris, and vibrant New Year's Eve street celebration."
      }
    ]
  },
  {
    day: "Day 18",
    date: "01 Jan 2027",
    city: "Paris",
    sights: [
      {
        name: "Jardin du Luxembourg & Medici Fountain",
        image: "/images/sights/jardin-du-luxembourg.jpg",
        desc: "Peaceful 17th-century palace gardens featuring grand tree-lined gravel promenades, green metal chairs, and the romantic grotto fountain."
      },
      {
        name: "Place des Vosges & Historic Le Marais",
        image: "/images/sights/place-des-vosges.jpg",
        desc: "Paris's oldest planned square with harmonious red brick and stone vaulted arcades, former home of Victor Hugo."
      },
      {
        name: "Latin Quarter & Saint-Germain-des-Prés",
        image: "/images/sights/latin-quarter-paris.jpg",
        desc: "Historic intellectual quarter with medieval winding lanes, iconic literary cafés (Café de Flore, Les Deux Magots), and bistros."
      }
    ]
  },
  {
    day: "Day 19",
    date: "02 Jan 2027",
    city: "Versailles",
    sights: [
      {
        name: "Palace of Versailles (Château de Versailles)",
        image: "/images/sights/palace-versailles.jpg",
        desc: "Magnificent golden royal residence of Louis XIV, the Sun King, showcasing peak French baroque architecture."
      },
      {
        name: "Galerie des Glaces (Hall of Mirrors Interior)",
        image: "/images/sights/versailles-hall-of-mirrors.jpg",
        desc: "Breathtaking 73-meter central gallery lined with 357 mirrors, gilded chandeliers, and ceiling frescoes depicting French triumphs."
      },
      {
        name: "Versailles Palace Orangery & Parterre Gardens",
        image: "/images/sights/versailles-gardens.jpg",
        desc: "Geometric winter parterres, grand stone staircases, and sweeping views over the Swiss Guard basin and parklands."
      },
      {
        name: "Paris France LDS Temple",
        image: "/images/temples/paris-temple.jpg",
        desc: "Elegant French limestone temple in Le Chesnay adjacent to Versailles, featuring peaceful reflection gardens."
      }
    ]
  },
  {
    day: "Day 20",
    date: "03 Jan 2027",
    city: "Paris ➔ London Victoria",
    sights: [
      {
        name: "Pont Alexandre III & Grand Palais View",
        image: "/images/sights/pont-alexandre-iii.jpg",
        desc: "Most ornate bridge in Paris, adorned with gilded winged horses, Art Nouveau candelabras, and sculpted cherubs."
      },
      {
        name: "Grand Palais & Historic Champs-Élysées Promenade",
        image: "/images/sights/grand-palais-paris.jpg",
        desc: "Majestic Beaux-Arts exhibition hall with an immense glass vaulted ceiling, anchoring the classic Seine cultural axis."
      },
      {
        name: "Confirmed FlixBus Route 1700 & Eurotunnel LeShuttle Crossing",
        image: "/images/sights/eurotunnel-crossing.jpg",
        desc: "Comfortable overnight coach journey via the underwater Channel Tunnel train shuttle back across to Great Britain."
      }
    ]
  }
];

const galleryJsContent = `// Schengen Tour 2026-2027 - Complete Verified Visual Gallery Data
// Granular, dedicated photography for every distinct destination (Excluding UK)

window.galleryData = ${JSON.stringify(completeGalleryData, null, 2)};

// Dynamically generate allSightsFlat to ensure 100% synchronization
window.allSightsFlat = window.galleryData.flatMap(day => 
  day.sights.map(sight => ({
    ...sight,
    day: day.day,
    date: day.date,
    city: day.city
  }))
);
`;

fs.writeFileSync(path.join(repoDir, 'js/gallery-data.js'), galleryJsContent, 'utf8');
console.log('✅ js/gallery-data.js updated successfully!');
