const fs = require('fs');
const path = require('path');

const repoDir = '/Users/jeana/Projects/schengen-trip-2026';

// 1. UPDATE index.html
let indexHtml = fs.readFileSync(path.join(repoDir, 'index.html'), 'utf8');

// --- Table Row Day 11 ---
const oldDay11TableRegex = /<tr class="itinerary-table-row row-badge-ch" data-country="Switzerland">\s*<td class="col-table-day">\s*<span class="table-day-badge">Day 11<\/span>[\s\S]*?<\/tr>/;
const newDay11Table = `<tr class="itinerary-table-row row-badge-ch" data-country="Switzerland">
              <td class="col-table-day">
                <span class="table-day-badge">Day 11</span>
                <span class="table-date-str">25 Dec 2026</span>
              </td>
              <td class="col-table-loc">
                <div class="table-loc-name">Strasbourg ➔ Bern</div>
                <span class="badge-country badge-ch">Switzerland</span>
              </td>
              <td class="col-table-plan">
                <div class="table-plan-title">Christmas Day Transit to Bern (Alpenblick CoLiving) &amp; UNESCO Covered Arcades</div>
                <div class="table-activities-list">
        <div class="table-activity-item">• <b>Morning (08:30 – 12:00):</b><ul class="activity-sublist"><li>Direct transit from Strasbourg to Bern Hbf</li><li>Tram Line 9 to Alpenblick CoLiving (Kasernenstrasse 29 · check-in / luggage drop)</li></ul></div>
        <div class="table-activity-item">• <b>Afternoon (13:00 – 17:00):</b><ul class="activity-sublist"><li>Bern UNESCO Old Town stroll under 6 km of weather-sheltered sandstone arcades (Lauben)</li><li>Zytglogge astronomical clock tower &amp; Bern Münster cathedral</li><li>Bundeshaus (Federal Palace) terrace</li></ul></div>
        <div class="table-activity-item">• <b>Evening (17:30 – 21:00):</b><ul class="activity-sublist"><li>Nydeggbrücke bridge &amp; Bear Park Aare river panorama</li><li>Christmas Fondue Dinner in historic vaulted Bern cellar</li></ul></div>
      </div>
                <div class="table-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (Bern Old Town, Zytglogge, Lauben arcades &amp; Bear Park overlook)</div>
                <div class="table-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 Bern Arcades &amp; Old Town: Open 24/7 (Weatherproof)</span> <span class="opening-pill open">🟢 Swiss Trains &amp; Trams: Regular holiday schedule</span></div>
              </td>
              <td class="col-table-stay">
                <div class="table-hotel-name">Alpenblick CoLiving, Bern (Night 1 of 4 · Confirmed: 5525.615.675)</div>
                <div class="table-hotel-addr">Kasernenstrasse 29, 3013 Bern, Switzerland</div>
                <div class="table-transit-mode"><i>🚆 SBB Train / Coach (Strasbourg ➔ Bern) + 🚋 Bern Tram Line 9</i></div>
              </td>
              <td class="col-table-action">
                <button type="button" class="btn-table-photos" title="View Photos of Bern">📸 Photos</button>
              </td>
            </tr>`;

indexHtml = indexHtml.replace(oldDay11TableRegex, newDay11Table);

// --- Table Row Day 14 ---
const oldDay14TableRegex = /<tr class="itinerary-table-row row-badge-transit" data-country="Transit">\s*<td class="col-table-day">\s*<span class="table-day-badge">Day 14<\/span>[\s\S]*?<\/tr>/;
const newDay14Table = `<tr class="itinerary-table-row row-badge-ch" data-country="Switzerland">
              <td class="col-table-day">
                <span class="table-day-badge">Day 14</span>
                <span class="table-date-str">28 Dec 2026</span>
              </td>
              <td class="col-table-loc">
                <div class="table-loc-name">Grindelwald &amp; Lake Thun</div>
                <span class="badge-country badge-ch">Switzerland</span>
              </td>
              <td class="col-table-plan">
                <div class="table-plan-title">Grindelwald First Cliff Walk &amp; Lake Thun Spiez Waterfront Stroll (Night 4 in Bern)</div>
                <div class="table-activities-list">
        <div class="table-activity-item">• <b>Morning (08:30 – 12:30):</b><ul class="activity-sublist"><li>SBB InterCity: Bern ➔ Interlaken Ost ➔ Grindelwald (1h 34m)</li><li>Grindelwald First Gondola to 2,168m</li><li>First Cliff Walk by Tissot (Suspension bridge &amp; cliff walkway)</li></ul></div>
        <div class="table-activity-item">• <b>Afternoon (13:30 – 17:00):</b><ul class="activity-sublist"><li>Scenic train to Spiez on Lake Thun</li><li>Spiez Castle medieval waterfront &amp; Lake Thun winter promenade</li><li>Optional PostBus 103 to Iseltwald Landing Stage (Lake Brienz CLOY Pier)</li></ul></div>
        <div class="table-activity-item">• <b>Evening (17:30 – 21:00):</b><ul class="activity-sublist"><li>Return train to Bern base (Alpenblick CoLiving)</li><li>Rosengarten viewpoint overlooking the illuminated Aare river loop</li><li>Cosy Swiss bistro dinner in Bern</li></ul></div>
      </div>
                <div class="table-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (First Cliff Walk by Tissot walkway, Spiez waterfront &amp; Rosengarten are Free!)</div>
                <div class="table-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 First Gondola: 08:30–16:30</span> <span class="opening-pill open">🟢 Lake Thun &amp; Spiez: Open 24/7</span> <span class="opening-pill open">🟢 Rosengarten: Open 24/7</span></div>
              </td>
              <td class="col-table-stay">
                <div class="table-hotel-name">Alpenblick CoLiving, Bern (Night 4 of 4 · Confirmed: 5525.615.675)</div>
                <div class="table-hotel-addr">Kasernenstrasse 29, 3013 Bern, Switzerland</div>
                <div class="table-transit-mode"><i>🚆 SBB InterCity (Bern ➔ Grindelwald / Spiez) + 🚠 First Gondola</i></div>
              </td>
              <td class="col-table-action">
                <button type="button" class="btn-table-photos" title="View Photos of Grindelwald &amp; Bern">📸 Photos</button>
              </td>
            </tr>`;

indexHtml = indexHtml.replace(oldDay14TableRegex, newDay14Table);

// --- Table Row Day 15 ---
const oldDay15TableRegex = /<tr class="itinerary-table-row row-badge-fr" data-country="France">\s*<td class="col-table-day">\s*<span class="table-day-badge">Day 15<\/span>[\s\S]*?<\/tr>/;
const newDay15Table = `<tr class="itinerary-table-row row-badge-transit" data-country="Transit">
              <td class="col-table-day">
                <span class="table-day-badge">Day 15</span>
                <span class="table-date-str">29 Dec 2026</span>
              </td>
              <td class="col-table-loc">
                <div class="table-loc-name">Bern ➔ Paris</div>
                <span class="badge-country badge-transit">Transit</span>
              </td>
              <td class="col-table-plan">
                <div class="table-plan-title">Bern Switzerland Temple (Morning Endowment Session) ➔ High-Speed TGV Lyria to Paris</div>
                <div class="table-activities-list">
        <div class="table-activity-item">• <b>Morning (08:30 – 12:30):</b><ul class="activity-sublist"><li>Alpenblick CoLiving check-out (leave luggage at Bern Hbf)</li><li>S-Bahn S3/S4: Bern Hbf ➔ Zollikofen (8 min)</li><li><b>Bern Switzerland Temple</b> (Tempelstrasse 2): Attend sacred morning <b>Proxy Endowment Session</b> &amp; peaceful stroll through pine-fringed grounds</li></ul></div>
        <div class="table-activity-item">• <b>Afternoon (13:00 – 19:45):</b><ul class="activity-sublist"><li>S-Bahn back to Bern Hbf, pick up bags, lunch in Old Town</li><li><b>High-Speed TGV Lyria</b>: Bern Hbf ➔ Basel SBB (56m) ➔ Paris Gare de Lyon (3h 04m) (~4h 15m total cruising @ 320 km/h)</li></ul></div>
        <div class="table-activity-item">• <b>Evening (20:00 – 22:00):</b><ul class="activity-sublist"><li>Arrive Paris Gare de Lyon (center of Paris)</li><li>Automated Metro Line 14 direct to <b>Break &amp; Home Paris Italie Porte de Choisy</b></li><li>Check in, unpack, and sleep in real hotel bed (Night 1 of 5 in Paris!)</li></ul></div>
      </div>
                <div class="table-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (Bern Switzerland Temple Endowment Session &amp; Grounds)</div>
                <div class="table-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 Bern Switzerland Temple: Morning Session (Arrive by 9:00 AM)</span> <span class="opening-pill open">🟢 TGV Lyria: Cruising @ 320 km/h</span> <span class="opening-pill open">🟢 Paris Metro Line 14: Direct to Hotel</span></div>
              </td>
              <td class="col-table-stay">
                <div class="table-hotel-name">Break &amp; Home Paris Italie (CONFIRMED)</div>
                <div class="table-hotel-addr">Porte de Choisy, Paris (Booked: Jean Aquino)</div>
                <div class="table-transit-mode"><i>🚆 S-Bahn S3/S4 + 🚄 TGV Lyria High-Speed Train + 🚇 Paris Metro Line 14</i></div>
              </td>
              <td class="col-table-action">
                <button type="button" class="btn-table-photos" title="View Photos of Bern Temple &amp; Paris">📸 Photos</button>
              </td>
            </tr>`;

indexHtml = indexHtml.replace(oldDay15TableRegex, newDay15Table);

// --- Card View Day 11 ---
const oldDay11CardRegex = /<div class="day-card highlight-swiss" data-country="Switzerland">\s*<div class="day-card-header">\s*<div class="day-card-meta">\s*<span class="card-day-badge">Day 11<\/span>[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/;
const newDay11Card = `<div class="day-card highlight-swiss" data-country="Switzerland">
        <div class="day-card-header">
          <div class="day-card-meta">
            <span class="card-day-badge">Day 11</span>
            <span class="card-date-badge">25 Dec 2026</span>
            <span class="badge-country badge-ch">Switzerland</span>
          </div>
          <div class="day-card-city">
            <span class="city-icon">📍</span>
            <span class="city-text">Strasbourg ➔ Bern</span>
          </div>
        </div>
        <div class="day-card-content">
          <div class="day-card-main">
            <h4 class="card-day-theme">Christmas Day Transit to Bern (Alpenblick CoLiving) &amp; UNESCO Covered Arcades</h4>
            <div class="card-activities-list">
        <div class="card-activity-item">• <b>Morning (08:30 – 12:00):</b><ul class="activity-sublist"><li>Direct transit from Strasbourg to Bern Hbf</li><li>Tram Line 9 to Alpenblick CoLiving (Kasernenstrasse 29 · check-in / luggage drop)</li></ul></div>
        <div class="card-activity-item">• <b>Afternoon (13:00 – 17:00):</b><ul class="activity-sublist"><li>Bern UNESCO Old Town stroll under 6 km of weather-sheltered sandstone arcades (Lauben)</li><li>Zytglogge astronomical clock tower &amp; Bern Münster cathedral</li><li>Bundeshaus (Federal Palace) terrace</li></ul></div>
        <div class="card-activity-item">• <b>Evening (17:30 – 21:00):</b><ul class="activity-sublist"><li>Nydeggbrücke bridge &amp; Bear Park Aare river panorama</li><li>Christmas Fondue Dinner in historic vaulted Bern cellar</li></ul></div>
      </div>
            <div class="card-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (Bern Old Town, Zytglogge, Lauben arcades &amp; Bear Park overlook)</div>
            <div class="card-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 Bern Arcades &amp; Old Town: Open 24/7 (Weatherproof)</span> <span class="opening-pill open">🟢 Swiss Trains &amp; Trams: Regular holiday schedule</span></div>
          </div>
          <div class="day-card-side">
            <div class="card-stay-box">
              <div class="stay-header-label">🏨 Accommodation &amp; Transit</div>
              <div class="stay-hotel-name">Alpenblick CoLiving, Bern (Night 1 of 4 · Confirmed: 5525.615.675)</div>
              <div class="stay-hotel-addr">Kasernenstrasse 29, 3013 Bern, Switzerland</div>
              <div class="stay-transit-badge">🚆 SBB Train / Coach (Strasbourg ➔ Bern) + 🚋 Bern Tram Line 9</div>
              <button type="button" class="btn-card-photos" data-day="Day 11">📸 View Photos (3)</button>
              <a href="https://www.youtube.com/watch?v=k1RI_pEARlQ" target="_blank" rel="noopener noreferrer" class="btn-card-video" title="Arli Sabs - Byahe Ni Bru: LUZERN-INTERLAKEN EXPRESS EXPERIENCE [One Of Switzerland's Cheapest Panoramic & Scenic Trains!]" onclick="event.stopPropagation();">🎥 Transit Vlog (Arli Sabs - Byahe Ni Bru) ↗</a>
            </div>
          </div>
        </div>
      </div>`;

indexHtml = indexHtml.replace(oldDay11CardRegex, newDay11Card);

// --- Card View Day 14 ---
const oldDay14CardRegex = /<div class="day-card highlight-transit" data-country="Transit">\s*<div class="day-card-header">\s*<div class="day-card-meta">\s*<span class="card-day-badge">Day 14<\/span>[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/;
const newDay14Card = `<div class="day-card highlight-swiss" data-country="Switzerland">
        <div class="day-card-header">
          <div class="day-card-meta">
            <span class="card-day-badge">Day 14</span>
            <span class="card-date-badge">28 Dec 2026</span>
            <span class="badge-country badge-ch">Switzerland</span>
          </div>
          <div class="day-card-city">
            <span class="city-icon">📍</span>
            <span class="city-text">Grindelwald &amp; Lake Thun</span>
          </div>
        </div>
        <div class="day-card-content">
          <div class="day-card-main">
            <h4 class="card-day-theme">Grindelwald First Cliff Walk &amp; Lake Thun Spiez Waterfront Stroll (Night 4 in Bern)</h4>
            <div class="card-activities-list">
        <div class="card-activity-item">• <b>Morning (08:30 – 12:30):</b><ul class="activity-sublist"><li>SBB InterCity: Bern ➔ Interlaken Ost ➔ Grindelwald (1h 34m)</li><li>Grindelwald First Gondola to 2,168m</li><li>First Cliff Walk by Tissot (Suspension bridge &amp; cliff walkway)</li></ul></div>
        <div class="card-activity-item">• <b>Afternoon (13:30 – 17:00):</b><ul class="activity-sublist"><li>Scenic train to Spiez on Lake Thun</li><li>Spiez Castle medieval waterfront &amp; Lake Thun winter promenade</li><li>Optional PostBus 103 to Iseltwald Landing Stage (Lake Brienz CLOY Pier)</li></ul></div>
        <div class="card-activity-item">• <b>Evening (17:30 – 21:00):</b><ul class="activity-sublist"><li>Return train to Bern base (Alpenblick CoLiving)</li><li>Rosengarten viewpoint overlooking the illuminated Aare river loop</li><li>Cosy Swiss bistro dinner in Bern</li></ul></div>
      </div>
            <div class="card-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (First Cliff Walk by Tissot walkway, Spiez waterfront &amp; Rosengarten are Free!)</div>
            <div class="card-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 Grindelwald First Gondola: Open 08:30–16:30</span> <span class="opening-pill open">🟢 Lake Thun &amp; Spiez: Open 24/7</span> <span class="opening-pill open">🟢 Rosengarten: Open 24/7</span></div>
          </div>
          <div class="day-card-side">
            <div class="card-stay-box">
              <div class="stay-header-label">🏨 Accommodation &amp; Transit</div>
              <div class="stay-hotel-name">Alpenblick CoLiving, Bern (Night 4 of 4 · Confirmed: 5525.615.675)</div>
              <div class="stay-hotel-addr">Kasernenstrasse 29, 3013 Bern, Switzerland</div>
              <div class="stay-transit-badge">🚆 SBB InterCity (Bern ➔ Grindelwald / Spiez) + 🚠 First Gondola</div>
              <button type="button" class="btn-card-photos" data-day="Day 14">📸 View Photos (5)</button>
              <a href="https://www.youtube.com/watch?v=fdZXgJOTz_8" target="_blank" rel="noopener noreferrer" class="btn-card-video" title="Traveling A to Z: “Grindelwald Switzerland 🇨🇭 | First Cliff Walk, Gondola Ride & Hike to Lake Bachalpsee”" onclick="event.stopPropagation();">🎥 Transit Vlog (Traveling A to Z) ↗</a>
            </div>
          </div>
        </div>
      </div>`;

indexHtml = indexHtml.replace(oldDay14CardRegex, newDay14Card);

// --- Card View Day 15 ---
const oldDay15CardRegex = /<div class="day-card highlight-france" data-country="France">\s*<div class="day-card-header">\s*<div class="day-card-meta">\s*<span class="card-day-badge">Day 15<\/span>[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/;
const newDay15Card = `<div class="day-card highlight-transit" data-country="Transit">
        <div class="day-card-header">
          <div class="day-card-meta">
            <span class="card-day-badge">Day 15</span>
            <span class="card-date-badge">29 Dec 2026</span>
            <span class="badge-country badge-transit">Transit</span>
          </div>
          <div class="day-card-city">
            <span class="city-icon">📍</span>
            <span class="city-text">Bern ➔ Paris</span>
          </div>
        </div>
        <div class="day-card-content">
          <div class="day-card-main">
            <h4 class="card-day-theme">Bern Switzerland Temple (Morning Endowment Session) ➔ High-Speed TGV Lyria to Paris</h4>
            <div class="card-activities-list">
        <div class="card-activity-item">• <b>Morning (08:30 – 12:30):</b><ul class="activity-sublist"><li>Alpenblick CoLiving check-out (leave luggage at Bern Hbf)</li><li>S-Bahn S3/S4: Bern Hbf ➔ Zollikofen (8 min)</li><li><b>Bern Switzerland Temple</b> (Tempelstrasse 2): Attend sacred morning <b>Proxy Endowment Session</b> &amp; peaceful stroll through pine-fringed grounds</li></ul></div>
        <div class="card-activity-item">• <b>Afternoon (13:00 – 19:45):</b><ul class="activity-sublist"><li>S-Bahn back to Bern Hbf, pick up bags, lunch in Old Town</li><li><b>High-Speed TGV Lyria</b>: Bern Hbf ➔ Basel SBB (56m) ➔ Paris Gare de Lyon (3h 04m) (~4h 15m total cruising @ 320 km/h)</li></ul></div>
        <div class="card-activity-item">• <b>Evening (20:00 – 22:00):</b><ul class="activity-sublist"><li>Arrive Paris Gare de Lyon (center of Paris)</li><li>Automated Metro Line 14 direct to <b>Break &amp; Home Paris Italie Porte de Choisy</b></li><li>Check in, unpack, and sleep in real hotel bed (Night 1 of 5 in Paris!)</li></ul></div>
      </div>
            <div class="card-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (Bern Switzerland Temple Endowment Session &amp; Grounds)</div>
            <div class="card-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 Bern Switzerland Temple: Morning Session (Arrive by 9:00 AM)</span> <span class="opening-pill open">🟢 TGV Lyria: Cruising @ 320 km/h</span> <span class="opening-pill open">🟢 Paris Metro Line 14: Direct to Hotel</span></div>
          </div>
          <div class="day-card-side">
            <div class="card-stay-box">
              <div class="stay-header-label">🏨 Accommodation &amp; Transit</div>
              <div class="stay-hotel-name">Break &amp; Home Paris Italie (CONFIRMED)</div>
              <div class="stay-hotel-addr">Porte de Choisy, Paris (Booked: Jean Aquino)</div>
              <div class="stay-transit-badge">🚆 S-Bahn S3/S4 + 🚄 TGV Lyria High-Speed Rail + 🚇 Paris Metro Line 14</div>
              <button type="button" class="btn-card-photos" data-day="Day 15">📸 View Photos (4)</button>
              <a href="https://www.youtube.com/watch?v=Q6PLqFIvqWY" target="_blank" rel="noopener noreferrer" class="btn-card-video" title="Les Frenchies: Paris Metro & RER: Travel Guide for Beginners" onclick="event.stopPropagation();">🎥 Transit Vlog (Les Frenchies) ↗</a>
            </div>
          </div>
        </div>
      </div>`;

indexHtml = indexHtml.replace(oldDay15CardRegex, newDay15Card);

// --- Temple Reservations Dossier ---
const oldTempleDossierRegex = /<!-- Confirmed LDS Temple Reservations Dossier -->[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<div class="temples-grid"/;
const newTempleDossier = `<!-- Confirmed LDS Temple Reservations Dossier -->
    <div class="temple-reservations-dossier" id="templeReservationsDossier">
      <div class="temple-dossier-header">
        <div class="temple-dossier-title-group">
          <span class="temple-dossier-icon">🏛️</span>
          <div>
            <h3 class="temple-dossier-h3">Confirmed LDS Temple Endowment Reservations &amp; Visits</h3>
            <p class="temple-dossier-subtitle">Sacred appointments and visits for Jean Aristide Belleza Aquino across Netherlands, Germany, Switzerland &amp; France</p>
          </div>
        </div>
        <span class="temple-dossier-badge">✅ 4 Sacred Temple Visits</span>
      </div>

      <div class="temple-reservations-grid">
        <!-- 1. The Hague Temple -->
        <div class="temple-res-card">
          <div class="temple-res-top">
            <span class="temple-res-date">📅 Friday, 18 Dec 2026</span>
            <span class="temple-res-tag">Netherlands</span>
          </div>
          <div class="temple-res-session">⏰ Arrive by 9:10 AM (9:30 AM Session)</div>
          <div class="temple-res-name">The Hague Netherlands Temple</div>
          <div style="font-size: 0.78rem; color: #475569;">Osylaan 2, 2712 BZ Zoetermeer (near Den Haag)</div>
          <div class="temple-res-patron">👤 <strong>Attending:</strong> Jean Aristide Belleza Aquino · Proxy Endowment</div>
        </div>

        <!-- 2. Frankfurt Temple -->
        <div class="temple-res-card">
          <div class="temple-res-top">
            <span class="temple-res-date">📅 Tuesday, 22 Dec 2026</span>
            <span class="temple-res-tag">Germany</span>
          </div>
          <div class="temple-res-session">⏰ Arrive by 5:15 PM (6:00 PM Session)</div>
          <div class="temple-res-name">Frankfurt Germany Temple</div>
          <div style="font-size: 0.78rem; color: #475569;">Talstraße 10, 61381 Friedrichsdorf (Taunus)</div>
          <div class="temple-res-patron">👤 <strong>Attending:</strong> Jean Aristide Belleza Aquino · Proxy Endowment</div>
        </div>

        <!-- 3. Bern Switzerland Temple -->
        <div class="temple-res-card">
          <div class="temple-res-top">
            <span class="temple-res-date">📅 Tuesday, 29 Dec 2026</span>
            <span class="temple-res-tag">Switzerland</span>
          </div>
          <div class="temple-res-session">⏰ Morning Session (Arrive by 9:00 AM)</div>
          <div class="temple-res-name">Bern Switzerland Temple</div>
          <div style="font-size: 0.78rem; color: #475569;">Tempelstrasse 2, 3052 Zollikofen (near Bern)</div>
          <div class="temple-res-patron">👤 <strong>Attending:</strong> Jean Aristide Belleza Aquino · Proxy Endowment</div>
        </div>

        <!-- 4. Paris France Temple -->
        <div class="temple-res-card">
          <div class="temple-res-top">
            <span class="temple-res-date">📅 Saturday, 02 Jan 2027</span>
            <span class="temple-res-tag">France</span>
          </div>
          <div class="temple-res-session">⏰ Afternoon Session / Grounds Reflection (Beside Versailles)</div>
          <div class="temple-res-name">Paris France Temple</div>
          <div style="font-size: 0.78rem; color: #475569;">46 Boulevard Saint-Antoine, 78150 Le Chesnay (Versailles)</div>
          <div class="temple-res-patron">👤 <strong>Attending:</strong> Jean Aristide Belleza Aquino · Sacred Worship &amp; Reflection</div>
        </div>
      </div>
    </div>

    <div class="temples-grid"`;

indexHtml = indexHtml.replace(oldTempleDossierRegex, newTempleDossier);

fs.writeFileSync(path.join(repoDir, 'index.html'), indexHtml, 'utf8');
console.log('Successfully updated index.html');
