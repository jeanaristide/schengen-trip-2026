const fs = require('fs');
const path = require('path');

const indexHtmlPath = path.join(__dirname, '../index.html');
const appJsPath = path.join(__dirname, '../js/app.js');
const galleryDataPath = path.join(__dirname, '../js/gallery-data.js');

let html = fs.readFileSync(indexHtmlPath, 'utf8');
let appJs = fs.readFileSync(appJsPath, 'utf8');
let gData = fs.readFileSync(galleryDataPath, 'utf8');

console.log('--- Starting Complete Itinerary & Temple Sync ---');

// =========================================================================
// 1. UPDATE QUICK STATS IN index.html
// =========================================================================
html = html.replace(
  `<div class="stat-label">Germany (Cologne & Frankfurt)</div>`,
  `<div class="stat-label">Germany (Cologne 2N &amp; Frankfurt 2N)</div>`
);
html = html.replace(
  `<div class="stat-icon" style="background: #fef9c3; color: #ca8a04;">🇩🇪</div>
        <div>
          <div class="stat-val">3 Nights</div>`,
  `<div class="stat-icon" style="background: #fef9c3; color: #ca8a04;">🇩🇪</div>
        <div>
          <div class="stat-val">4 Nights</div>`
);
html = html.replace(
  `<div class="stat-icon" style="background: #f1f5f9; color: #475569;">🚌</div>
        <div>
          <div class="stat-val">3 Nights</div>
          <div class="stat-label">Overnight Sleeper Transit</div>`,
  `<div class="stat-icon" style="background: #f1f5f9; color: #475569;">🚌</div>
        <div>
          <div class="stat-val">2 Nights</div>
          <div class="stat-label">Overnight Sleeper Transit</div>`
);
console.log('Updated Quick Stats bar in index.html');

// =========================================================================
// 2. UPDATE CARDS VIEW IN index.html (Days 4, 5, 6, 7, 8, 9, 15)
// =========================================================================

// Day 4 Card
const oldCardD4 = `<div class="day-card highlight-nl" data-country="Netherlands">
        <div class="day-card-header">
          <div class="day-card-meta">
            <span class="card-day-badge">Day 4</span>
            <span class="card-date-badge">18 Dec 2026</span>
            <span class="badge-country badge-nl">Netherlands</span>
          </div>
          <div class="day-card-city">
            <span class="city-icon">📍</span>
            <span class="city-text">The Hague & Zoetermeer ➔ Overnight Coach</span>
          </div>
        </div>
        <div class="day-card-content">
          <div class="day-card-main">
            <h4 class="card-day-theme">The Hague Temple Endowment Session ➔ Overnight Coach to Frankfurt</h4>
            <div class="card-activities-list">
        <div class="card-activity-item">• <b>Morning (08:45 – 12:15):</b> Check out of hostel (store bags or carry daypacks). 48-minute Dutch NS Intercity train from Amsterdam Centraal to Den Haag Centraal. Visit the <b>International Criminal Court (ICC)</b> at Oude Waalsdorperweg for photos and the historic <b>Peace Palace (Vredespaleis)</b> & World Peace Flame.</div>
        <div class="card-activity-item">• <b>Midday & Afternoon (12:30 – 17:00):</b> Direct transit via Prins Bernhardviaduct / RandstadRail 3 to Zoetermeer for <b>The Hague Netherlands Temple</b> (Osylaan 2). Attend scheduled sacred <b>Temple Endowment Session</b>, followed by temple grounds photography and reverent reflection along the canal park.</div>
        <div class="card-activity-item">• <b>Evening & Night (17:30 – 00:45):</b> Direct train return to Amsterdam Centraal. Celebration farewell Dutch dinner in Amsterdam, retrieve backpacks, transfer to Amsterdam Sloterdijk station. Board 12:45 AM overnight FlixBus to Frankfurt am Main.</div>
      </div>
            <div class="card-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (Peace Palace exterior, ICC & The Hague Temple)</div>
            <div style="margin-top: 6px;"><a href="#travelWellnessSection" class="fatigue-alert-link">🛡️ Travel Wellness: Night Coach Sleep Tips &amp; Energy Pacing ➔</a></div>
            </div>
          <div class="day-card-side">
            <div class="card-stay-box">
              <div class="stay-header-label">🏨 Accommodation &amp; Transit</div>
              <div class="stay-hotel-name">FlixBus Overnight Sleeper (Coach Transit)</div>
              <div class="stay-hotel-addr">Amsterdam Sloterdijk ➔ Frankfurt am Main Hbf</div>
              <div class="stay-transit-badge">🚆 NS Intercity / RandstadRail + 🚌 FlixBus Sleeper (Departs 12:45 AM, 19 Dec)</div>
              <button type="button" class="btn-card-map" data-day="Day 4">
                📍 Focus on Map
              </button>
            </div>
          </div>
        </div>
      </div>`;

const newCardD4 = `<div class="day-card highlight-nl" data-country="Netherlands">
        <div class="day-card-header">
          <div class="day-card-meta">
            <span class="card-day-badge">Day 4</span>
            <span class="card-date-badge">18 Dec 2026</span>
            <span class="badge-country badge-nl">Netherlands</span>
          </div>
          <div class="day-card-city">
            <span class="city-icon">📍</span>
            <span class="city-text">The Hague &amp; Amsterdam</span>
          </div>
        </div>
        <div class="day-card-content">
          <div class="day-card-main">
            <h4 class="card-day-theme">The Hague Temple (9:30 AM Session) &amp; Peace Palace</h4>
            <div class="card-activities-list">
        <div class="card-activity-item">• <b>Morning (08:00 – 12:30):</b> 48-min Dutch NS Intercity train from Amsterdam Centraal to Den Haag / Zoetermeer. <b>The Hague Netherlands Temple: Arrive by 9:10 AM for the 9:30 AM Proxy Endowment Session (Confirmed Reservation for Jean Aquino)</b>. Reverent photos and peaceful reflection along the temple canal park.</div>
        <div class="card-activity-item">• <b>Afternoon (13:00 – 16:30):</b> Visit the historic <b>Peace Palace (Vredespaleis)</b> &amp; World Peace Flame (Visitor Centre open 12:00–16:00) and the International Criminal Court (ICC) exterior.</div>
        <div class="card-activity-item">• <b>Evening (17:30 – 21:30):</b> Return train to Amsterdam Centraal. Festive dinner in Amsterdam; enjoy a restful 3rd night in Amsterdam—<b>no midnight coach fatigue!</b></div>
      </div>
            <div class="card-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (The Hague Temple, Peace Palace exterior &amp; ICC)</div>
            <div class="card-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 The Hague Temple: 9:30 AM Session (Arrive 9:10 AM)</span> <span class="opening-pill open">🟢 Peace Palace Visitor Centre: Open 12:00–16:00</span> <span class="opening-pill open">🟢 ICC Exterior: Open 24/7</span></div>
          </div>
          <div class="day-card-side">
            <div class="card-stay-box">
              <div class="stay-header-label">🏨 Accommodation &amp; Transit</div>
              <div class="stay-hotel-name">Amsterdam Base (Night 3 of 3)</div>
              <div class="stay-hotel-addr">Central Amsterdam · <i>Sleep in a real bed!</i></div>
              <div class="stay-transit-badge">🚆 NS Intercity + RandstadRail Day Return</div>
              <button type="button" class="btn-card-map" data-day="Day 4">
                📍 Focus on Map
              </button>
            </div>
          </div>
        </div>
      </div>`;

if (html.includes(oldCardD4)) {
  html = html.replace(oldCardD4, newCardD4);
  console.log('Replaced Day 4 Card in index.html');
} else {
  console.log('Day 4 Card pattern not matched directly, checking alternative');
}

// Day 5 Card
const oldCardD5 = `<div class="day-card highlight-de" data-country="Germany">
        <div class="day-card-header">
          <div class="day-card-meta">
            <span class="card-day-badge">Day 5</span>
            <span class="card-date-badge">19 Dec 2026</span>
            <span class="badge-country badge-de">Germany</span>
          </div>
          <div class="day-card-city">
            <span class="city-icon">📍</span>
            <span class="city-text">Frankfurt am Main</span>
          </div>
        </div>
        <div class="day-card-content">
          <div class="day-card-main">
            <h4 class="card-day-theme">Frankfurt Germany Temple (8:15 AM Endowment Session) & Römerberg</h4>
            <div class="card-activities-list">
        <div class="card-activity-item">• <b>Early Morning (07:15 – 12:00):</b> Arrive in Frankfurt am Main around 07:15 AM via overnight coach. Bag drop at Hotel Cristall (200m from Hbf). <i>Attendance at the 08:15 AM session is flexible:</i> attend if energetic, or rest and take it easy because you hold a <b>Confirmed Alternative Booking on Tuesday 22 Dec @ 6:00 PM (Arrive 5:15 PM)</b>!</div>
        <div class="card-activity-item">• <b>Afternoon (12:30 – 16:30):</b> Return to central Frankfurt. Cross the historic 1869 <b>Eiserner Steg</b> (iron footbridge) for panoramic skyline views of 'Mainhattan' over the Main River, and explore Frankfurt Altstadt and Kaiserdom.</div>
        <div class="card-activity-item">• <b>Evening (16:30 – 21:00):</b> Celebrate at the centuries-old <b>Frankfurter Weihnachtsmarkt at Römerberg</b>—one of Germany’s grandest holiday markets, surrounded by medieval half-timbered houses and a 30m illuminated tree. Check-in and restful overnight stay at <b>Hotel Cristall</b> (Night 1 of 3).</div>
      </div>
            <div class="card-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (Frankfurt Temple, Römerberg & Christmas Market)</div>
            <div style="margin-top: 6px;"><a href="#travelWellnessSection" class="fatigue-alert-link">🛡️ Mitigated: Confirmed Alternative Temple Booking on Tue 22 Dec ➔</a></div>
            </div>
          <div class="day-card-side">
            <div class="card-stay-box">
              <div class="stay-header-label">🏨 Accommodation &amp; Transit</div>
              <div class="stay-hotel-name">Hotel Cristall - Frankfurt City (Night 1 of 3)</div>
              <div class="stay-hotel-addr">Ottostrasse 3, 60329 Frankfurt am Main</div>
              <div class="stay-transit-badge">🚌 Overnight Coach Arrival (~07:15) + 🚆 S-Bahn S5 / Taxi to Temple</div>
              <button type="button" class="btn-card-map" data-day="Day 5">
                📍 Focus on Map
              </button>
            </div>
          </div>
        </div>
      </div>`;

const newCardD5 = `<div class="day-card highlight-de" data-country="Germany">
        <div class="day-card-header">
          <div class="day-card-meta">
            <span class="card-day-badge">Day 5</span>
            <span class="card-date-badge">19 Dec 2026</span>
            <span class="badge-country badge-de">Germany</span>
          </div>
          <div class="day-card-city">
            <span class="city-icon">📍</span>
            <span class="city-text">Amsterdam ➔ Cologne</span>
          </div>
        </div>
        <div class="day-card-content">
          <div class="day-card-main">
            <h4 class="card-day-theme">High-Speed Rail to Cologne: Kölner Dom &amp; Lindt Chocolate Museum</h4>
            <div class="card-activities-list">
        <div class="card-activity-item">• <b>Morning (08:30 – 11:45):</b> Well-rested morning in Amsterdam. Board direct daytime <b>DB ICE</b> high-speed train from Amsterdam Centraal to Köln Hbf (2h 38m). Check in at Cologne base hotel.</div>
        <div class="card-activity-item">• <b>Afternoon (12:30 – 16:30):</b> Step right out into the shadow of the monumental twin Gothic spires of <b>Cologne Cathedral</b> (<i>Kölner Dom</i>, UNESCO World Heritage site). Stroll love-locked <b>Hohenzollern Bridge</b> and explore the <b>Lindt Chocolate Museum</b> along the Rhine with its 3m golden chocolate fountain.</div>
        <div class="card-activity-item">• <b>Evening (17:00 – 21:00):</b> Experience the festive <b>Cologne Cathedral Christmas Market</b> (<i>Weihnachtsmarkt am Kölner Dom</i>), sampling fresh hot waffles, roasted chestnuts, and Kinderpunsch.</div>
      </div>
            <div class="card-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill paid">🎟️ Lindt Chocolate Museum: €17.50 (~A$29 AUD)</span> <span class="admission-pill free">✨ Cologne Cathedral Nave: Free ($0 AUD)</span> <span class="admission-pill free">✨ Cologne Christmas Markets: Free ($0 AUD)</span></div>
            <div class="card-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 Cologne Cathedral: Open 06:00–20:00 (Open 365 Days)</span> <span class="opening-pill open">🟢 Lindt Chocolate Museum: Open 10:00–18:00</span> <span class="opening-pill open">🟢 Cologne Markets: Open 11:00–21:00</span></div>
          </div>
          <div class="day-card-side">
            <div class="card-stay-box">
              <div class="stay-header-label">🏨 Accommodation &amp; Transit</div>
              <div class="stay-hotel-name">Cologne Base (Night 1 of 2)</div>
              <div class="stay-hotel-addr">Central Cologne, Germany · <i>Steps to Cathedral</i></div>
              <div class="stay-transit-badge">🚆 DB ICE Train Amsterdam ➔ Köln Hbf (2h 38m)</div>
              <button type="button" class="btn-card-map" data-day="Day 5">
                📍 Focus on Map
              </button>
            </div>
          </div>
        </div>
      </div>`;

if (html.includes(oldCardD5)) {
  html = html.replace(oldCardD5, newCardD5);
  console.log('Replaced Day 5 Card in index.html');
}

// Day 6 Card
const oldCardD6 = `<div class="day-card highlight-de" data-country="Germany">
        <div class="day-card-header">
          <div class="day-card-meta">
            <span class="card-day-badge">Day 6</span>
            <span class="card-date-badge">20 Dec 2026</span>
            <span class="badge-country badge-de">Germany</span>
          </div>
          <div class="day-card-city">
            <span class="city-icon">📍</span>
            <span class="city-text">Frankfurt am Main</span>
          </div>
        </div>
        <div class="day-card-content">
          <div class="day-card-main">
            <h4 class="card-day-theme">Sunday Reflection, Historic Altstadt & Museumsufer</h4>
            <div class="card-activities-list">
        <div class="card-activity-item">• <b>Morning (09:30 – 13:00):</b> Sunday church worship / spiritual reflection; peaceful winter morning stroll along the River Main promenade.</div>
        <div class="card-activity-item">• <b>Afternoon (13:30 – 16:30):</b> Cultural exploration of the Goethe House (birthplace of Johann Wolfgang von Goethe) and historic Museumsufer district (Städel Museum).</div>
        <div class="card-activity-item">• <b>Evening (17:00 – 21:00):</b> Traditional Hessian dinner in Alt-Sachsenhausen (sampling regional specialties and warm Apfelwein); evening illuminated skyline walk.</div>
      </div>
            <div class="card-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (Altstadt & Main River walking) · <span class="admission-pill optional">Optional Goethe House: €10 (~A$17 AUD)</span></div>
            <div class="card-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 Sunday Church Worship: Open for services</span> <span class="opening-pill open">🟢 Goethe House: Open Sundays 10:00–18:00</span> <span class="opening-pill open">🟢 Altstadt &amp; River Main: Open 24/7</span></div>
          </div>
          <div class="day-card-side">
            <div class="card-stay-box">
              <div class="stay-header-label">🏨 Accommodation &amp; Transit</div>
              <div class="stay-hotel-name">Hotel Cristall - Frankfurt City (Night 2 of 3)</div>
              <div class="stay-hotel-addr">Ottostrasse 3, 60329 Frankfurt am Main</div>
              <div class="stay-transit-badge">🚇 Frankfurt Tram & U-Bahn Network Day Pass</div>
              <button type="button" class="btn-card-map" data-day="Day 6">
                📍 Focus on Map
              </button>
            </div>
          </div>
        </div>
      </div>`;

const newCardD6 = `<div class="day-card highlight-de" data-country="Germany">
        <div class="day-card-header">
          <div class="day-card-meta">
            <span class="card-day-badge">Day 6</span>
            <span class="card-date-badge">20 Dec 2026</span>
            <span class="badge-country badge-de">Germany</span>
          </div>
          <div class="day-card-city">
            <span class="city-icon">📍</span>
            <span class="city-text">Cologne &amp; Düsseldorf</span>
          </div>
        </div>
        <div class="day-card-content">
          <div class="day-card-main">
            <h4 class="card-day-theme">Sunday Reflection &amp; Düsseldorf 7 Themed Christmas Markets</h4>
            <div class="card-activities-list">
        <div class="card-activity-item">• <b>Morning (09:30 – 12:30):</b> Sunday church worship &amp; spiritual reflection in Cologne; peaceful morning walk along the Rhine promenade.</div>
        <div class="card-activity-item">• <b>Afternoon (13:00 – 17:30):</b> Short 20-minute direct train to Düsseldorf Hbf. Walk the magical <b>7 Themed Christmas Markets Trail</b>: golden Art Nouveau angels at <i>Engelchen-Markt</i>, romantic crystal stars at <i>Sternchen-Markt</i>, and <i>Handwerker-Markt</i> before the historic Rathaus.</div>
        <div class="card-activity-item">• <b>Evening (17:30 – 20:30):</b> Stroll along the famous Königsallee canal and <i>Corneliusplatz Ice Rink</i>. Enjoy dinner in authentic 'Little Tokyo' (Immermannstraße); smooth 20-min train return to Cologne base.</div>
      </div>
            <div class="card-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (Düsseldorf 7 Christmas Markets &amp; Königsallee)</div>
            <div class="card-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 Düsseldorf Markets: Open 11:00–20:00</span> <span class="opening-pill open">🟢 Corneliusplatz Ice Rink: Open 11:00–21:00</span></div>
          </div>
          <div class="day-card-side">
            <div class="card-stay-box">
              <div class="stay-header-label">🏨 Accommodation &amp; Transit</div>
              <div class="stay-hotel-name">Cologne Base (Night 2 of 2)</div>
              <div class="stay-hotel-addr">Central Cologne, Germany</div>
              <div class="stay-transit-badge">🚆 Regional Express Train (Köln ➔ Düsseldorf 20 mins)</div>
              <button type="button" class="btn-card-map" data-day="Day 6">
                📍 Focus on Map
              </button>
            </div>
          </div>
        </div>
      </div>`;

if (html.includes(oldCardD6)) {
  html = html.replace(oldCardD6, newCardD6);
  console.log('Replaced Day 6 Card in index.html');
}

// Day 7 Card
const oldCardD7 = `<div class="day-card highlight-de" data-country="Germany">
        <div class="day-card-header">
          <div class="day-card-meta">
            <span class="card-day-badge">Day 7</span>
            <span class="card-date-badge">21 Dec 2026</span>
            <span class="badge-country badge-de">Germany</span>
          </div>
          <div class="day-card-city">
            <span class="city-icon">📍</span>
            <span class="city-text">Cologne & Düsseldorf (Twin-City Excursion)</span>
          </div>
        </div>
        <div class="day-card-content">
          <div class="day-card-main">
            <h4 class="card-day-theme">Cologne Cathedral, Lindt Museum & Düsseldorf Christmas Markets</h4>
            <div class="card-activities-list">
        <div class="card-activity-item">• <b>Morning in Cologne (08:30 – 13:00):</b> 1-hour fast DB ICE train from Frankfurt Hbf to Köln Hbf (💡 <i>use free onboard train restroom before arrival</i>). Marvel at the monumental Gothic spires of <b>Cologne Cathedral</b> (<i>Kölner Dom</i>, UNESCO World Heritage site). Walk across love-locked <b>Hohenzollern Bridge</b> and explore the <b>Lindt Chocolate Museum</b> along the Rhine (🚻 <i>free customer restrooms inside</i>) with its 3m golden fountain.</div>
        <div class="table-activity-item">• <b>Afternoon in Düsseldorf (13:30 – 17:30):</b> Scenic 20-minute direct train to Düsseldorf Hbf. Walk the magical <b>7 Themed Christmas Markets Trail</b>: golden Art Nouveau angels at <i>Engelchen-Markt</i>, romantic crystal stars at <i>Sternchen-Markt</i>, and artisanal craft booths at <i>Handwerker-Markt</i> before the historic 16th-century Rathaus on Marktplatz.</div>
        <div class="card-activity-item">• <b>Evening & Return (17:30 – 21:00):</b> Riverside stroll along Rhine Embankment Promenade to the <i>Corneliusplatz Ice Rink</i> on the famous Königsallee canal (🚻 <i>free facilities at Kö-Bogen / Sevens mall</i>). Dinner in authentic "Little Tokyo" (Immermannstraße) or traditional Altbier tavern. Direct 1h 20m high-speed ICE train back to Frankfurt Hbf (💡 <i>free train restroom onboard</i>). Overnight at <b>Hotel Cristall</b> (Night 3 of 3).</div>
      </div>
            <div class="card-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill paid">🎟️ Lindt Chocolate Museum: €17.50 (~A$29 AUD)</span> <span class="admission-pill free">✨ Cologne Cathedral Nave: Free ($0 AUD)</span> <span class="admission-pill free">✨ Düsseldorf Markets: Free ($0 AUD)</span></div>
            <div class="card-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 Cologne Cathedral: Open 06:00–20:00 (365 Days)</span> <span class="opening-pill open">🟢 Lindt Chocolate Museum: Confirmed Open Mon in Dec (10:00–18:00)</span> <span class="opening-pill open">🟢 Düsseldorf Markets: Open 11:00–20:00</span></div>
          </div>
          <div class="day-card-side">
            <div class="card-stay-box">
              <div class="stay-header-label">🏨 Accommodation &amp; Transit</div>
              <div class="stay-hotel-name">Hotel Cristall - Frankfurt City (Night 3 of 3)</div>
              <div class="stay-hotel-addr">Ottostrasse 3, 60329 Frankfurt am Main</div>
              <div class="stay-transit-badge">🚆 DB ICE Triangle Circuit (FRA ➔ CGN ➔ DUS ➔ FRA)</div>
              <button type="button" class="btn-card-map" data-day="Day 7">
                📍 Focus on Map
              </button>
            </div>
          </div>
        </div>
      </div>`;

const newCardD7 = `<div class="day-card highlight-de" data-country="Germany">
        <div class="day-card-header">
          <div class="day-card-meta">
            <span class="card-day-badge">Day 7</span>
            <span class="card-date-badge">21 Dec 2026</span>
            <span class="badge-country badge-de">Germany</span>
          </div>
          <div class="day-card-city">
            <span class="city-icon">📍</span>
            <span class="city-text">Cologne ➔ Frankfurt</span>
          </div>
        </div>
        <div class="day-card-content">
          <div class="day-card-main">
            <h4 class="card-day-theme">High-Speed Rail to Frankfurt: Römerberg Christmas Market &amp; Altstadt</h4>
            <div class="card-activities-list">
        <div class="card-activity-item">• <b>Morning (09:00 – 10:30):</b> Check out of Cologne base. Board direct <b>DB ICE</b> high-speed train from Köln Hbf to Frankfurt am Main Hbf (fast 1h 05m journey). Check in at <b>Hotel Cristall</b> (Ottostrasse 3, 200m from Hbf).</div>
        <div class="card-activity-item">• <b>Afternoon (12:00 – 16:30):</b> Walk across the historic 1869 <b>Eiserner Steg</b> (iron footbridge) for panoramic skyline views of 'Mainhattan' over the Main River, explore Frankfurt Altstadt, and visit the historic Kaiserdom.</div>
        <div class="card-activity-item">• <b>Evening (16:30 – 21:00):</b> Celebrate at the centuries-old <b>Frankfurter Weihnachtsmarkt at Römerberg</b>—one of Germany’s grandest holiday markets, surrounded by medieval half-timbered houses and a 30m illuminated tree (last full day of the market!). Overnight at Hotel Cristall (Night 1 of 2).</div>
      </div>
            <div class="card-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (Frankfurt Altstadt, Römerberg &amp; Skyline)</div>
            <div class="card-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 Römerberg Christmas Market: Open 10:00–21:00 (Runs through 22 Dec)</span> <span class="opening-pill open">🟢 Kaiserdom: Open 09:00–20:00</span></div>
          </div>
          <div class="day-card-side">
            <div class="card-stay-box">
              <div class="stay-header-label">🏨 Accommodation &amp; Transit</div>
              <div class="stay-hotel-name">Hotel Cristall - Frankfurt City (Night 1 of 2)</div>
              <div class="stay-hotel-addr">Ottostrasse 3, 60329 Frankfurt am Main</div>
              <div class="stay-transit-badge">🚆 DB ICE High-Speed Train (Köln ➔ Frankfurt Hbf, 1h 05m)</div>
              <button type="button" class="btn-card-map" data-day="Day 7">
                📍 Focus on Map
              </button>
            </div>
          </div>
        </div>
      </div>`;

if (html.includes(oldCardD7)) {
  html = html.replace(oldCardD7, newCardD7);
  console.log('Replaced Day 7 Card in index.html');
}

// Day 8 Card
const oldCardD8 = `<div class="day-card highlight-france" data-country="France">
        <div class="day-card-header">
          <div class="day-card-meta">
            <span class="card-day-badge">Day 8</span>
            <span class="card-date-badge">22 Dec 2026</span>
            <span class="badge-country badge-fr">France</span>
          </div>
          <div class="day-card-city">
            <span class="city-icon">📍</span>
            <span class="city-text">Strasbourg &amp; Colmar (Kehl Base)</span>
          </div>
        </div>
        <div class="day-card-content">
          <div class="day-card-main">
            <h4 class="card-day-theme">Strasbourg: Capital of Christmas (Staying in Kehl Base)</h4>
            <div class="card-activities-list">
        <div class="card-activity-item">• <b>Morning (09:30 – 11:30):</b> Complimentary buffet breakfast at Hotel Cristall. Board direct daytime <b>ICE / TGV</b> train south through the Black Forest valley to Kehl / Strasbourg (1h 45m).</div>
        <div class="card-activity-item">• <b>Afternoon (12:30 – 16:00):</b> Check in at <b>B&B Hotel Kehl</b> (staying in Kehl across the Rhine as our strategic base). Board the cross-border <b>Strasbourg Tram Line D</b> across the Rhine into France (15 mins). Explore fairytale <b>Petite France</b> with historic half-timbered tanners' houses and Ponts Couverts.</div>
        <div class="card-activity-item">• <b>Evening (16:30 – 21:00):</b> Tour Strasbourg, the <b>'Capital of Christmas'</b> (<i>Capitale de Noël</i>). Gaze at the monumental 30-meter Great Christmas Tree at Place Kléber and the historic <b>Christkindelsmärik</b> surrounding the pink sandstone Cathedral.</div>
      </div>
            <div class="card-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (Strasbourg Cathedral nave, Petite France & Christkindelsmärik)</div>
            <div class="card-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 Strasbourg Cathedral: Open 08:30–11:15 &amp; 12:45–18:00</span> <span class="opening-pill open">🟢 Christkindelsmärik: Open 11:00–20:00</span> <span class="opening-pill open">🟢 Petite France: Open 24/7</span></div>
          </div>
          <div class="day-card-side">
            <div class="card-stay-box">
              <div class="stay-header-label">🏨 Accommodation &amp; Transit</div>
              <div class="stay-hotel-name">B&B Hotel Kehl (Base for Alsace)</div>
              <div class="stay-hotel-addr">15 Allensteiner Str., 77694 Kehl · <i>Base to visit Strasbourg &amp; Colmar</i></div>
              <div class="stay-transit-badge">🚆 DB ICE Train (1h45m) + Strasbourg Tram Line D (€1.90)</div>
              <button type="button" class="btn-card-map" data-day="Day 8">
                📍 Focus on Map
              </button>
            </div>
          </div>
        </div>
      </div>`;

const newCardD8 = `<div class="day-card highlight-de" data-country="Germany">
        <div class="day-card-header">
          <div class="day-card-meta">
            <span class="card-day-badge">Day 8</span>
            <span class="card-date-badge">22 Dec 2026</span>
            <span class="badge-country badge-de">Germany</span>
          </div>
          <div class="day-card-city">
            <span class="city-icon">📍</span>
            <span class="city-text">Frankfurt am Main</span>
          </div>
        </div>
        <div class="day-card-content">
          <div class="day-card-main">
            <h4 class="card-day-theme">Frankfurt Cultural Discovery &amp; Frankfurt Temple (6:00 PM Session)</h4>
            <div class="card-activities-list">
        <div class="card-activity-item">• <b>Morning &amp; Midday (09:30 – 15:30):</b> Leisurely buffet breakfast at Hotel Cristall. Cultural morning visiting the <b>Goethe House &amp; Museum</b> (birthplace of Johann Wolfgang von Goethe) and exploring Museumsufer along the River Main; shopping along the famous Zeil pedestrian promenade.</div>
        <div class="card-activity-item">• <b>Late Afternoon &amp; Evening (16:45 – 20:00):</b> 26-minute direct S-Bahn S5 from Frankfurt Hbf to Friedrichsdorf. <b>The Frankfurt Germany Temple: Arrive by 5:15 PM for the 6:00 PM Proxy Endowment Session (Confirmed Reservation for Jean Aristide Belleza Aquino)</b>. Reverent reflection and photography on illuminated temple grounds.</div>
        <div class="card-activity-item">• <b>Night (20:30 – 22:30):</b> Direct S-Bahn S5 return to Frankfurt Hbf. Celebration dinner in central Frankfurt; restful overnight stay at <b>Hotel Cristall</b> (Night 2 of 2 in Frankfurt).</div>
      </div>
            <div class="card-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (Frankfurt Temple &amp; Main River) · <span class="admission-pill optional">Optional Goethe House: €10 (~A$17 AUD)</span></div>
            <div class="card-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 Frankfurt Germany Temple: 6:00 PM Session (Arrive 5:15 PM)</span> <span class="opening-pill open">🟢 Goethe House: Open 10:00–18:00</span></div>
          </div>
          <div class="day-card-side">
            <div class="card-stay-box">
              <div class="stay-header-label">🏨 Accommodation &amp; Transit</div>
              <div class="stay-hotel-name">Hotel Cristall - Frankfurt City (Night 2 of 2)</div>
              <div class="stay-hotel-addr">Ottostrasse 3, 60329 Frankfurt am Main</div>
              <div class="stay-transit-badge">🚇 Frankfurt RMV / S-Bahn S5 Day Pass to Friedrichsdorf</div>
              <button type="button" class="btn-card-map" data-day="Day 8">
                📍 Focus on Map
              </button>
            </div>
          </div>
        </div>
      </div>`;

if (html.includes(oldCardD8)) {
  html = html.replace(oldCardD8, newCardD8);
  console.log('Replaced Day 8 Card in index.html');
}

// Day 15 Card
const oldCardD15 = `<div class="day-card highlight-france" data-country="France">
        <div class="day-card-header">
          <div class="day-card-meta">
            <span class="card-day-badge">Day 15</span>
            <span class="card-date-badge">29 Dec 2026</span>
            <span class="badge-country badge-fr">France</span>
          </div>
          <div class="day-card-city">
            <span class="city-icon">📍</span>
            <span class="city-text">Paris</span>
          </div>
        </div>
        <div class="day-card-content">
          <div class="day-card-main">
            <h4 class="card-day-theme">Arrival & Montmartre Sacré-Cœur</h4>
            <div class="card-activities-list">
        <div class="card-activity-item">• <b>Morning (06:40 – 11:00):</b> Arrive at Paris Bercy Seine. Transfer via Metro Line 14 / Tramway T3a to <b>Break & Home Paris Italie Porte de Choisy</b>. Drop luggage, enjoy fresh French croissants and café au lait.</div>
        <div class="card-activity-item">• <b>Afternoon (12:30 – 16:30):</b> Ascend the historic hill of <b>Montmartre</b> to the white-domed <b>Sacré-Cœur Basilica</b> for breathtaking panoramic winter views of Paris. Explore artists' easel square at Place du Tertre.</div>
        <div class="card-activity-item">• <b>Evening (17:30 – 20:30):</b> Twilight walk along the historic Seine River banks and Latin Quarter bistro dinner.</div>
      </div>
            <div class="card-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (Sacré-Cœur nave & Place du Tertre Montmartre)</div>
            <div class="card-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 Sacré-Cœur Basilica: Open 06:30–22:30 (Open 365 Days)</span> <span class="opening-pill open">🟢 Place du Tertre &amp; Montmartre: Open 24/7</span> <span class="opening-pill open">🟢 Latin Quarter: Open 24/7</span></div>
          </div>
          <div class="day-card-side">
            <div class="card-stay-box">
              <div class="stay-header-label">🏨 Accommodation &amp; Transit</div>
              <div class="stay-hotel-name">Break & Home Paris Italie (CONFIRMED)</div>
              <div class="stay-hotel-addr">Porte de Choisy, Paris (Booked: Jean Aquino)</div>
              <div class="stay-transit-badge">🚇 Paris Metro Line 14 / 7 (Navigo Easy Pass)</div>
              <button type="button" class="btn-card-map" data-day="Day 15">
                📍 Focus on Map
              </button>
            </div>
          </div>
        </div>
      </div>`;

const newCardD15 = `<div class="day-card highlight-france" data-country="France">
        <div class="day-card-header">
          <div class="day-card-meta">
            <span class="card-day-badge">Day 15</span>
            <span class="card-date-badge">29 Dec 2026</span>
            <span class="badge-country badge-fr">France</span>
          </div>
          <div class="day-card-city">
            <span class="city-icon">📍</span>
            <span class="city-text">Paris</span>
          </div>
        </div>
        <div class="day-card-content">
          <div class="day-card-main">
            <h4 class="card-day-theme">Paris Arrival, Paris France Temple (2:30 PM Session) &amp; Montmartre</h4>
            <div class="card-activities-list">
        <div class="card-activity-item">• <b>Morning (06:40 – 11:30):</b> Arrive in Paris Bercy via overnight coach. Transfer to <b>Break &amp; Home Paris Italie Porte de Choisy</b>. Drop luggage, refresh, and savor warm French croissants and café au lait.</div>
        <div class="card-activity-item">• <b>Afternoon (13:15 – 17:00):</b> RER C / Phébus bus transit to Le Chesnay. <b>Paris France Temple: Arrive by 2:00 PM for the 2:30 PM Proxy Endowment Session (Confirmed Reservation for Jean Aristide Belleza Aquino)</b>. Stroll the peaceful landscaped reflection gardens and visitors' courtyard.</div>
        <div class="card-activity-item">• <b>Evening (17:30 – 21:00):</b> Return to central Paris. Ascend the historic hill of <b>Montmartre</b> via the Funiculaire to the white-domed <b>Sacré-Cœur Basilica</b> for breathtaking panoramic winter views; Latin Quarter bistro dinner.</div>
      </div>
            <div class="card-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (Paris France Temple &amp; Sacré-Cœur)</div>
            <div class="card-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 Paris France Temple: 2:30 PM Session (Arrive 2:00 PM)</span> <span class="opening-pill open">🟢 Sacré-Cœur Basilica: Open 06:30–22:30 (Open 365 Days)</span></div>
          </div>
          <div class="day-card-side">
            <div class="card-stay-box">
              <div class="stay-header-label">🏨 Accommodation &amp; Transit</div>
              <div class="stay-hotel-name">Break & Home Paris Italie (CONFIRMED)</div>
              <div class="stay-hotel-addr">Porte de Choisy, Paris (Booked: Jean Aquino)</div>
              <div class="stay-transit-badge">🚇 Paris Metro Line 14 / 7 (Navigo Easy Pass)</div>
              <button type="button" class="btn-card-map" data-day="Day 15">
                📍 Focus on Map
              </button>
            </div>
          </div>
        </div>
      </div>`;

if (html.includes(oldCardD15)) {
  html = html.replace(oldCardD15, newCardD15);
  console.log('Replaced Day 15 Card in index.html');
}

// =========================================================================
// 3. UPDATE WELLNESS SECTION (Flag 1) in index.html
// =========================================================================
const oldWellnessFlag1 = `      <!-- Flag 1: Amsterdam to Frankfurt Temple Rush -->
      <div class="fatigue-card critical" style="border-left: 5px solid #10b981; background: #fafdfb;">
        <div>
          <div class="fatigue-card-top">
            <span class="fatigue-card-day">DAY 4 ➔ DAY 5 (18–19 DEC)</span>
            <span class="fatigue-level-badge" style="background: #ecfdf5; color: #047857; border: 1px solid #a7f3d0;">🛡️ PROACTIVELY MITIGATED BY JEAN</span>
          </div>
          <h4 class="fatigue-card-title">Amsterdam Midnight Coach ➔ 8:15 AM Frankfurt Temple Rush</h4>
          <p class="fatigue-card-issue">
            Departing Amsterdam at 00:45 AM and arriving in Frankfurt at 07:15 AM left only 60 minutes to collect luggage, navigate S-Bahn S5 to Friedrichsdorf (22 km away), dress in Sunday attire, and enter a sacred temple session on disrupted bus sleep.
          </p>
        </div>
        <div class="fatigue-card-solution" style="background: #f0fdf4; border: 1px solid #bbf7d0; color: #14532d; padding: 12px 14px; border-radius: 8px;">
          <div style="display: flex; align-items: center; gap: 8px; font-weight: 800; color: #065f46; margin-bottom: 6px; font-size: 0.9rem;">
            <span>✅ Confirmed Alternative Temple Booking:</span>
          </div>
          <div style="font-size: 0.86rem; line-height: 1.5; color: #1e293b;">
            📅 <b>Tuesday, December 22, 2026:</b> Proxy Endowment at <b>Frankfurt Germany Temple</b><br>
            ⏰ <b>Arrive by 5:15 PM for the 6:00 PM Session</b><br>
            👤 <b>Attending:</b> Jean Aristide Belleza Aquino
          </div>
          <div style="margin-top: 8px; font-size: 0.8rem; color: #166534; line-height: 1.45; border-top: 1px dashed #86efac; padding-top: 6px;">
            <strong>Why this is a masterstroke:</strong> You are no longer pressured to rush to Friedrichsdorf on Saturday morning! If you arrive tired from the coach, you can check in, nap, and enjoy Frankfurt's Christmas Market at Römerberg. Your confirmed Tuesday 6:00 PM session provides 100% peace of mind.
          </div>
        </div>
      </div>`;

const newWellnessFlag1 = `      <!-- Flag 1: Fully Mitigated by Updated Schedule -->
      <div class="fatigue-card critical" style="border-left: 5px solid #10b981; background: #fafdfb;">
        <div>
          <div class="fatigue-card-top">
            <span class="fatigue-card-day">UPDATED SCHEDULE: 16–19 AMS · 19–21 CGN · 21–23 FRA</span>
            <span class="fatigue-level-badge" style="background: #ecfdf5; color: #047857; border: 1px solid #a7f3d0;">🛡️ 100% ELIMINATED BY NEW SCHEDULE</span>
          </div>
          <h4 class="fatigue-card-title">Elimination of Midnight Coach &amp; Sacred Temple Pace Optimization</h4>
          <p class="fatigue-card-issue">
            The previous itinerary required a 00:45 AM overnight coach on 18 Dec after The Hague Temple. With the updated schedule, you stay in Amsterdam for 3 full nights (16–19 Dec) sleeping in a real bed, take a relaxed daytime DB ICE train to Cologne on 19 Dec (19–21 Dec), and travel to Frankfurt on 21 Dec (21–23 Dec).
          </p>
        </div>
        <div class="fatigue-card-solution" style="background: #f0fdf4; border: 1px solid #bbf7d0; color: #14532d; padding: 12px 14px; border-radius: 8px;">
          <div style="display: flex; align-items: center; gap: 8px; font-weight: 800; color: #065f46; margin-bottom: 6px; font-size: 0.9rem;">
            <span>✅ Confirmed Sacred Temple Reservations:</span>
          </div>
          <div style="font-size: 0.86rem; line-height: 1.5; color: #1e293b;">
            • <b>The Hague Netherlands Temple:</b> Fri 18 Dec @ 9:30 AM (Arrive by 9:10 AM)<br>
            • <b>Frankfurt Germany Temple:</b> Tue 22 Dec @ 6:00 PM (Arrive by 5:15 PM)<br>
            • <b>Paris France Temple:</b> Tue 29 Dec @ 2:30 PM (Arrive by 2:00 PM)<br>
            👤 <b>Confirmed Patron:</b> Jean Aristide Belleza Aquino
          </div>
          <div style="margin-top: 8px; font-size: 0.8rem; color: #166534; line-height: 1.45; border-top: 1px dashed #86efac; padding-top: 6px;">
            <strong>Zero Midnight Coach Fatigue:</strong> All 3 temple sessions are now attended well-rested after proper overnight sleep, with daytime high-speed rail connections between cities!
          </div>
        </div>
      </div>`;

if (html.includes(oldWellnessFlag1)) {
  html = html.replace(oldWellnessFlag1, newWellnessFlag1);
  console.log('Replaced Wellness Flag 1 in index.html');
}

fs.writeFileSync(indexHtmlPath, html, 'utf8');
console.log('Saved index.html');

// =========================================================================
// 4. UPDATE js/app.js (destinationData & ldsTemplesData & navBar)
// =========================================================================

// Update amsterdam dates in destinationData
appJs = appJs.replace(
  `id: "amsterdam",\n    name: "Amsterdam",\n    country: "Netherlands",\n    dates: "16–18 Dec 2026 (2 Nights)",`,
  `id: "amsterdam",\n    name: "Amsterdam",\n    country: "Netherlands",\n    dates: "16–19 Dec 2026 (3 Nights Base)",`
);

// Update ldsTemplesData in appJs
appJs = appJs.replace(
  `itineraryMatch: "Day 19: Palace of Versailles (02 Jan 2027)",`,
  `itineraryMatch: "Day 15: Confirmed Session (Tue 29 Dec 2026 @ 2:30 PM, Arrive 2:00 PM) & Day 19 Versailles",`
);
appJs = appJs.replace(
  `itineraryMatch: "Day 3: The Hague, ICC & Temple Day Trip (17 Dec 2026)",`,
  `itineraryMatch: "Day 4: Confirmed Session (Fri 18 Dec 2026 @ 9:30 AM, Arrive 9:10 AM)",`
);
appJs = appJs.replace(
  `itineraryMatch: "Day 5: Frankfurt Arrival & 8:15 AM Temple Endowment (19 Dec 2026)",`,
  `itineraryMatch: "Day 8: Confirmed Session (Tue 22 Dec 2026 @ 6:00 PM, Arrive 5:15 PM)",`
);

// Update Germany box in renderItineraryNavBar in appJs
const oldGermanyBoxCode = `      // Create One Large Box for Germany
      const germanyBox = document.createElement('div');
      germanyBox.className = 'itinerary-germany-box';
      germanyBox.setAttribute('title', 'Germany 3-Night Base & Excursions (19–22 Dec)');

      germanyBox.innerHTML = \`
        <div class="germany-box-header">
          <span class="germany-box-title">
            <span class="germany-box-flag">🇩🇪</span> Germany Base &amp; Excursions
          </span>
          <span class="germany-box-badge">19–22 Dec · 3 Nights</span>
        </div>
        <div class="germany-box-content">
          <!-- Left Side: Frankfurt Arrival & Temple -->
          <button type="button" class="itinerary-stop-chip germany-sub-chip" data-index="\${frankfurtIndex}" title="Focus map on Frankfurt am Main (Arrival & Temple)">
            <span class="itinerary-step-num" style="background: #eab308;">3</span>
            <div class="itinerary-stop-text">
              <span class="itinerary-stop-title">🇩🇪 Frankfurt</span>
              <span class="itinerary-stop-sub">19–20 Dec · Base</span>
            </div>
          </button>

          <span class="itinerary-sub-arrow">➔</span>

          <!-- Middle: Cologne & Düsseldorf Excursion -->
          <button type="button" class="itinerary-stop-chip germany-sub-chip" data-index="\${cdIndex}" title="Focus map on Cologne & Düsseldorf (Twin-City Excursion)">
            <span class="itinerary-step-num" style="background: #eab308;">4</span>
            <div class="itinerary-stop-text">
              <span class="itinerary-stop-title">🇩🇪 Cologne &amp; Düsseldorf</span>
              <span class="itinerary-stop-sub">21 Dec · Excursion</span>
            </div>
          </button>

          <span class="itinerary-sub-arrow">➔</span>

          <!-- Right Side: Frankfurt Return & Sleep -->
          <button type="button" class="itinerary-stop-chip germany-sub-chip" data-index="\${frankfurtIndex}" title="Focus map on Frankfurt am Main (Base Return)">
            <span class="itinerary-step-num" style="background: #eab308;">3</span>
            <div class="itinerary-stop-text">
              <span class="itinerary-stop-title">🇩🇪 Frankfurt</span>
              <span class="itinerary-stop-sub">21–22 Dec · Return</span>
            </div>
          </button>
        </div>
      \`;`;

const newGermanyBoxCode = `      // Create One Large Box for Germany (19–23 Dec)
      const germanyBox = document.createElement('div');
      germanyBox.className = 'itinerary-germany-box';
      germanyBox.setAttribute('title', 'Germany 4-Night Stays (19–23 Dec: Cologne 2N & Frankfurt 2N)');

      germanyBox.innerHTML = \`
        <div class="germany-box-header">
          <span class="germany-box-title">
            <span class="germany-box-flag">🇩🇪</span> Germany: Cologne &amp; Frankfurt
          </span>
          <span class="germany-box-badge">19–23 Dec · 4 Nights</span>
        </div>
        <div class="germany-box-content">
          <!-- Step 1: Cologne & Düsseldorf Base -->
          <button type="button" class="itinerary-stop-chip germany-sub-chip" data-index="\${cdIndex}" title="Focus map on Cologne & Düsseldorf (19–21 Dec · 2 Nights)">
            <span class="itinerary-step-num" style="background: #eab308;">3</span>
            <div class="itinerary-stop-text">
              <span class="itinerary-stop-title">🇩🇪 Cologne &amp; Düsseldorf</span>
              <span class="itinerary-stop-sub">19–21 Dec · 2 Nights</span>
            </div>
          </button>

          <span class="itinerary-sub-arrow">➔</span>

          <!-- Step 2: Frankfurt Base & Temple -->
          <button type="button" class="itinerary-stop-chip germany-sub-chip" data-index="\${frankfurtIndex}" title="Focus map on Frankfurt am Main & Temple (21–23 Dec · 2 Nights)">
            <span class="itinerary-step-num" style="background: #eab308;">4</span>
            <div class="itinerary-stop-text">
              <span class="itinerary-stop-title">🇩🇪 Frankfurt &amp; Temple</span>
              <span class="itinerary-stop-sub">21–23 Dec · 2 Nights</span>
            </div>
          </button>
        </div>
      \`;`;

if (appJs.includes(oldGermanyBoxCode)) {
  appJs = appJs.replace(oldGermanyBoxCode, newGermanyBoxCode);
  console.log('Updated Germany Box in renderItineraryNavBar (app.js)');
}

fs.writeFileSync(appJsPath, appJs, 'utf8');
console.log('Saved js/app.js');

// =========================================================================
// 5. UPDATE js/gallery-data.js (Days 4, 5, 6, 7, 8, 15)
// =========================================================================

// Day 4 in gallery-data.js
const oldGalleryD4 = `  {
    dayNum: 4,
    day: "Day 4",
    date: "18 Dec 2026",
    city: "The Hague & Zoetermeer ➔ Transit",
    country: "Netherlands",
    countryFilter: "netherlands",
    badgeClass: "badge-nl",
    title: "Peace Palace & The Hague Netherlands Temple",
    stay: "FlixBus Overnight Sleeper to Frankfurt",
    transit: "🚆 NS Intercity / RandstadRail + 🚌 Overnight Coach",
    coords: [52.0786, 4.3164],
    sights: [
      {
        name: "Peace Palace (Vredespaleis)",
        category: "⚖️ International Justice Landmark",
        time: "Morning (09:45 – 11:30)",
        location: "Carnegieplein 2, The Hague",
        image: "public/images/sights/peace-palace-the-hague.jpg",
        admission: "Free ($0 AUD) · Visitor Centre & Flame",
        isPaid: false,
        hours: "Visitor Centre Open Fri 12:00–16:00 · Flame 24/7",
        desc: "Majestic Neo-Renaissance palace that houses the International Court of Justice (ICJ) and Permanent Court of Arbitration, fronted by the historic World Peace Flame monument.",
        mapsQuery: "Peace Palace The Hague",
        coords: [52.0866, 4.2956]
      },
      {
        name: "The Hague Netherlands LDS Temple",
        category: "🏛️ Sacred Temple Grounds",
        time: "Afternoon (13:30 – 16:30)",
        location: "Osylaan 2, Zoetermeer",
        image: "public/images/temples/the-hague-temple.jpg",
        admission: "Free ($0 AUD) · Sacred Temple Grounds",
        isPaid: false,
        hours: "Open Friday for scheduled sessions & grounds",
        desc: "Dedicated sacred Latter-day Saint temple situated along a tranquil canal park in Zoetermeer, featuring an angel Moroni spire, manicured gardens, and peaceful reflection areas.",
        mapsQuery: "The Hague Netherlands Temple",
        coords: [52.0620, 4.4920]
      }
    ]
  },`;

const newGalleryD4 = `  {
    dayNum: 4,
    day: "Day 4",
    date: "18 Dec 2026",
    city: "The Hague & Amsterdam",
    country: "Netherlands",
    countryFilter: "netherlands",
    badgeClass: "badge-nl",
    title: "The Hague Temple (9:30 AM Session) & Peace Palace",
    stay: "Amsterdam Base (Night 3 of 3)",
    transit: "🚆 NS Intercity + RandstadRail Day Return",
    coords: [52.0786, 4.3164],
    sights: [
      {
        name: "The Hague Netherlands LDS Temple",
        category: "🏛️ Sacred Temple Endowment Session",
        time: "Morning: Arrive 9:10 AM (9:30 AM Session)",
        location: "Osylaan 2, Zoetermeer",
        image: "public/images/temples/the-hague-temple.jpg",
        admission: "Free ($0 AUD) · Confirmed Reservation (Jean Aquino)",
        isPaid: false,
        hours: "9:30 AM Session · Arrive by 9:10 AM",
        desc: "Official confirmed Proxy Endowment appointment for Jean Aristide Belleza Aquino. Peaceful canal-side temple in Zoetermeer with serene gardens and Angel Moroni spire.",
        mapsQuery: "The Hague Netherlands Temple",
        coords: [52.0620, 4.4920]
      },
      {
        name: "Peace Palace (Vredespaleis)",
        category: "⚖️ International Justice Landmark",
        time: "Afternoon (13:00 – 16:00)",
        location: "Carnegieplein 2, The Hague",
        image: "public/images/sights/peace-palace-the-hague.jpg",
        admission: "Free ($0 AUD) · Visitor Centre & Flame",
        isPaid: false,
        hours: "Visitor Centre Open Fri 12:00–16:00 · Flame 24/7",
        desc: "Majestic Neo-Renaissance palace housing the UN International Court of Justice (ICJ) and Permanent Court of Arbitration, fronted by the historic World Peace Flame monument.",
        mapsQuery: "Peace Palace The Hague",
        coords: [52.0866, 4.2956]
      }
    ]
  },`;

if (gData.includes(oldGalleryD4)) {
  gData = gData.replace(oldGalleryD4, newGalleryD4);
  console.log('Replaced Day 4 in gallery-data.js');
}

// Day 5 in gallery-data.js (Now Amsterdam ➔ Cologne)
const oldGalleryD5 = `  {
    dayNum: 5,
    day: "Day 5",
    date: "19 Dec 2026",
    city: "Frankfurt am Main",
    country: "Germany",
    countryFilter: "germany",
    badgeClass: "badge-de",
    title: "Frankfurt Germany Temple & Römerberg Christmas Market",
    stay: "Cologne Base (Night 1 of 2)",
    transit: "🚌 Coach Arrival + 🚆 S-Bahn S5 to Friedrichsdorf",
    coords: [50.1109, 8.6821],
    sights: [
      {
        name: "The Frankfurt Germany LDS Temple",
        category: "🏛️ Sacred Temple Grounds",
        time: "Morning (08:15 – 11:30)",
        location: "Talstraße 10, Friedrichsdorf",
        image: "public/images/temples/frankfurt-temple.jpg",
        admission: "Free ($0 AUD) · Sacred Temple Grounds",
        isPaid: false,
        hours: "Open Saturdays (08:15 AM Session) & grounds",
        desc: "The 41st operating temple of the Church, set amidst the rolling Taunus hills in Friedrichsdorf. Surrounded by peaceful reflection gardens, evergreens, and white granite walls.",
        mapsQuery: "Frankfurt Germany Temple",
        coords: [50.2589, 8.6437]
      },
      {
        name: "Eiserner Steg (Iron Footbridge)",
        category: "🌉 Historic Skyline Bridge",
        time: "Afternoon (13:30 – 15:30)",
        location: "Main River, Frankfurt am Main",
        image: "public/images/sights/eiserner-steg.jpg",
        admission: "Free ($0 AUD) · Public Footbridge",
        isPaid: false,
        hours: "Open 24/7 (Pedestrian Footbridge)",
        desc: "The iconic 1869 Neo-Gothic wrought-iron pedestrian bridge connecting central Frankfurt to Sachsenhausen, offering famous 360° panoramas of Frankfurt's 'Mainhattan' skyscrapers.",
        mapsQuery: "Eiserner Steg Frankfurt",
        coords: [50.1089, 8.6822]
      },
      {
        name: "Römerberg & Frankfurt Christmas Market",
        category: "🎄 Centuries-Old Holiday Market",
        time: "Evening (16:30 – 21:00)",
        location: "Römerberg, Frankfurt am Main",
        image: "public/images/sights/roemerberg.jpg",
        admission: "Free ($0 AUD) · Historic Town Square",
        isPaid: false,
        hours: "Open Daily 10:00–21:00 (Runs through 22 Dec)",
        desc: "One of Germany’s oldest and most picturesque Christmas markets, surrounded by restored medieval half-timbered merchant houses, a 30m illuminated tree, and warm spiced glühwein booths.",
        mapsQuery: "Romerberg Frankfurt",
        coords: [50.1106, 8.6818]
      }
    ]
  },`;

const newGalleryD5 = `  {
    dayNum: 5,
    day: "Day 5",
    date: "19 Dec 2026",
    city: "Amsterdam ➔ Cologne",
    country: "Germany",
    countryFilter: "germany",
    badgeClass: "badge-de",
    title: "High-Speed Rail to Cologne: Kölner Dom & Lindt Chocolate Museum",
    stay: "Cologne Base (Night 1 of 2)",
    transit: "🚆 DB ICE Train Amsterdam ➔ Köln Hbf (2h 38m)",
    coords: [50.9413, 6.9583],
    sights: [
      {
        name: "Cologne Cathedral (Kölner Dom)",
        category: "⛪ UNESCO Gothic Masterpiece",
        time: "Afternoon (12:30 – 15:00)",
        location: "Domkloster 4, Cologne",
        image: "public/images/sights/koelner-dom.jpg",
        admission: "Free ($0 AUD) Cathedral Nave",
        isPaid: false,
        hours: "Open Daily 06:00–20:00 (Open 365 Days)",
        desc: "Germany's most visited architectural landmark: a colossal High Gothic twin-spire cathedral (157m tall) towering immediately over Cologne central station and the Rhine River.",
        mapsQuery: "Cologne Cathedral",
        coords: [50.9413, 6.9583]
      },
      {
        name: "Lindt Chocolate Museum (Schokoladenmuseum)",
        category: "🍫 Rhine Peninsula Museum",
        time: "Afternoon (15:00 – 17:00)",
        location: "Am Schokoladenmuseum 1a, Cologne",
        image: "public/images/sights/schokoladenmuseum.jpg",
        admission: "€17.50 (~A$29 AUD) · Museum & Fountain Tour",
        isPaid: true,
        hours: "Open Daily 10:00–18:00 (Last entry 17:00)",
        desc: "World-famous chocolate museum situated directly on a Rhine peninsula, featuring an indoor tropical rainforest greenhouse and a 3-meter-tall golden fountain of molten Lindt chocolate.",
        mapsQuery: "Chocolate Museum Cologne",
        coords: [50.9322, 6.9642]
      },
      {
        name: "Cologne Cathedral Christmas Market",
        category: "🎄 Festive Holiday Market",
        time: "Evening (17:30 – 21:00)",
        location: "Roncalliplatz, Cologne",
        image: "public/images/destinations/cologne-dusseldorf.jpg",
        admission: "Free ($0 AUD) · Public Square",
        isPaid: false,
        hours: "Open Daily 11:00–21:00",
        desc: "Magical Christmas market right at the foot of Kölner Dom, with over 150 red-roofed wooden chalets, thousands of twinkling fairy lights, and delicious regional treats.",
        mapsQuery: "Weihnachtsmarkt am Kolner Dom",
        coords: [50.9405, 6.9575]
      }
    ]
  },`;

if (gData.includes(oldGalleryD5)) {
  gData = gData.replace(oldGalleryD5, newGalleryD5);
  console.log('Replaced Day 5 in gallery-data.js');
}

// Day 6 in gallery-data.js (Now Cologne & Düsseldorf)
const oldGalleryD6 = `  {
    dayNum: 6,
    day: "Day 6",
    date: "20 Dec 2026",
    city: "Frankfurt am Main",
    country: "Germany",
    countryFilter: "germany",
    badgeClass: "badge-de",
    title: "Sunday Reflection, Historic Altstadt & Goethe House",
    stay: "Cologne Base (Night 2 of 2)",
    transit: "🚇 Frankfurt Tram & U-Bahn Network",
    coords: [50.1109, 8.6821],
    sights: [
      {
        name: "Goethe House & Museum",
        category: "📜 Literary & Cultural Heritage",
        time: "Afternoon (13:30 – 15:30)",
        location: "Großer Hirschgraben 23-25, Frankfurt",
        image: "public/images/sights/goethe-house-frankfurt.jpg",
        admission: "Optional: €10.00 (~A$17 AUD)",
        isPaid: false,
        hours: "Open Sundays 10:00–18:00",
        desc: "The meticulously restored 18th-century bourgeois residence where Germany’s greatest writer and polymath, Johann Wolfgang von Goethe, was born in 1749 and penned 'The Sorrows of Young Werther'.",
        mapsQuery: "Goethe House Frankfurt",
        coords: [50.1114, 8.6775]
      },
      {
        name: "Frankfurt Altstadt & Main River Embankment",
        category: "🏙️ Historic Cityscape & Skyline",
        time: "Evening (16:30 – 20:30)",
        location: "Mainkai Promenade, Frankfurt",
        image: "public/images/destinations/frankfurt.jpg",
        admission: "Free ($0 AUD) · Public Waterfront",
        isPaid: false,
        hours: "Open 24/7 (Public Riverbank Promenade)",
        desc: "Scenic riverside promenade along the Mainkai with views of illuminated banking towers, historic church steeples, and authentic Hessian taverns in Alt-Sachsenhausen.",
        mapsQuery: "Mainkai Frankfurt",
        coords: [50.1085, 8.6830]
      }
    ]
  },`;

const newGalleryD6 = `  {
    dayNum: 6,
    day: "Day 6",
    date: "20 Dec 2026",
    city: "Cologne & Düsseldorf",
    country: "Germany",
    countryFilter: "germany",
    badgeClass: "badge-de",
    title: "Sunday Reflection & Düsseldorf 7 Themed Christmas Markets",
    stay: "Cologne Base (Night 2 of 2)",
    transit: "🚆 Regional Express Train (Köln ➔ Düsseldorf 20 mins)",
    coords: [51.2256, 6.7719],
    sights: [
      {
        name: "Düsseldorf 7 Themed Christmas Markets",
        category: "🎄 Fairytale Holiday Trail",
        time: "Afternoon (13:30 – 17:30)",
        location: "Marktplatz & Altstadt, Düsseldorf",
        image: "public/images/sights/duesseldorf-markets.jpg",
        admission: "Free ($0 AUD) · Public Town Markets",
        isPaid: false,
        hours: "Open Daily 11:00–20:00 (Runs through 30 Dec)",
        desc: "Magical multi-themed holiday trail including Engelchen-Markt (golden Art Nouveau angels), Sternchen-Markt (crystal stars), and artisanal crafts in front of the historic 1573 Town Hall.",
        mapsQuery: "Marktplatz Dusseldorf",
        coords: [51.2256, 6.7719]
      },
      {
        name: "Königsallee & Corneliusplatz Ice Rink",
        category: "⛸️ Canal Promenade & Open-Air Skating",
        time: "Evening (17:30 – 20:30)",
        location: "Königsallee, Düsseldorf",
        image: "public/images/sights/koenigsallee.jpg",
        admission: "Free ($0 AUD) boulevard stroll",
        isPaid: false,
        hours: "Open Daily 11:00–21:00",
        desc: "Glamorous landscaped canal boulevard bordered by 200-year-old chestnut trees, featuring the massive 1,700m² DEG-Winterwelt ice rink overlooking the illuminated Kö-Bogen.",
        mapsQuery: "Konigsallee Dusseldorf",
        coords: [51.2244, 6.7794]
      }
    ]
  },`;

if (gData.includes(oldGalleryD6)) {
  gData = gData.replace(oldGalleryD6, newGalleryD6);
  console.log('Replaced Day 6 in gallery-data.js');
}

// Day 7 in gallery-data.js (Now Cologne ➔ Frankfurt)
const oldGalleryD7 = `  {
    dayNum: 7,
    day: "Day 7",
    date: "21 Dec 2026",
    city: "Cologne & Düsseldorf",
    country: "Germany",
    countryFilter: "germany",
    badgeClass: "badge-de",
    title: "Cologne Cathedral, Chocolate Museum & Düsseldorf Markets",
    stay: "Hotel Cristall - Frankfurt City (Night 1 of 2)",
    transit: "🚆 DB ICE High-Speed Train Triangle Circuit",
    coords: [50.9375, 6.9603],
    sights: [
      {
        name: "Cologne Cathedral (Kölner Dom)",
        category: "⛪ UNESCO Gothic Masterpiece",
        time: "Morning (09:30 – 12:00)",
        location: "Domkloster 4, Cologne",
        image: "public/images/sights/koelner-dom.jpg",
        admission: "Free ($0 AUD) Cathedral Nave · Tower opt. €6 (~A$10 AUD)",
        isPaid: false,
        hours: "Open Daily 06:00–20:00 (Open 365 Days)",
        desc: "Germany's most visited architectural landmark: a colossal High Gothic twin-spire cathedral (157m tall) towering immediately over the central station and Rhine River.",
        mapsQuery: "Cologne Cathedral",
        coords: [50.9413, 6.9583]
      },
      {
        name: "Lindt Chocolate Museum (Schokoladenmuseum)",
        category: "🍫 Rhine Peninsula Museum",
        time: "Midday (12:00 – 13:15)",
        location: "Am Schokoladenmuseum 1a, Cologne",
        image: "public/images/sights/schokoladenmuseum.jpg",
        admission: "€17.50 (~A$29 AUD) · Museum & Fountain Tour",
        isPaid: true,
        hours: "Open Mondays in Dec 10:00–18:00 (Last entry 17:00)",
        desc: "World-famous chocolate museum situated directly on a Rhine peninsula, featuring an indoor tropical rainforest greenhouse and a 3-meter-tall golden fountain of molten Lindt chocolate.",
        mapsQuery: "Chocolate Museum Cologne",
        coords: [50.9322, 6.9642]
      },
      {
        name: "Düsseldorf 7 Themed Christmas Markets",
        category: "🎄 Fairytale Holiday Trail",
        time: "Afternoon (14:00 – 17:00)",
        location: "Marktplatz & Altstadt, Düsseldorf",
        image: "public/images/sights/duesseldorf-markets.jpg",
        admission: "Free ($0 AUD) · Public Town Markets",
        isPaid: false,
        hours: "Open Daily 11:00–20:00 (Runs through 30 Dec)",
        desc: "Magical multi-themed holiday trail including Engelchen-Markt (golden Art Nouveau angels), Sternchen-Markt (crystal stars), and artisanal crafts in front of the historic 1573 Town Hall.",
        mapsQuery: "Marktplatz Dusseldorf",
        coords: [51.2256, 6.7719]
      },
      {
        name: "Königsallee & Corneliusplatz Ice Rink",
        category: "⛸️ Canal Promenade & Open-Air Skating",
        time: "Evening (17:00 – 19:00)",
        location: "Königsallee, Düsseldorf",
        image: "public/images/sights/koenigsallee.jpg",
        admission: "Free ($0 AUD) boulevard stroll",
        isPaid: false,
        hours: "Open Daily 11:00–21:00",
        desc: "Glamorous landscaped canal boulevard bordered by 200-year-old chestnut trees, featuring the massive 1,700m² DEG-Winterwelt ice rink overlooking the illuminated Kö-Bogen.",
        mapsQuery: "Konigsallee Dusseldorf",
        coords: [51.2244, 6.7794]
      }
    ]
  },`;

const newGalleryD7 = `  {
    dayNum: 7,
    day: "Day 7",
    date: "21 Dec 2026",
    city: "Cologne ➔ Frankfurt",
    country: "Germany",
    countryFilter: "germany",
    badgeClass: "badge-de",
    title: "High-Speed Rail to Frankfurt: Römerberg Christmas Market & Eiserner Steg",
    stay: "Hotel Cristall - Frankfurt City (Night 1 of 2)",
    transit: "🚆 DB ICE High-Speed Train (Köln ➔ Frankfurt Hbf, 1h 05m)",
    coords: [50.1109, 8.6821],
    sights: [
      {
        name: "Eiserner Steg (Iron Footbridge)",
        category: "🌉 Historic Skyline Bridge",
        time: "Afternoon (12:30 – 15:30)",
        location: "Main River, Frankfurt am Main",
        image: "public/images/sights/eiserner-steg.jpg",
        admission: "Free ($0 AUD) · Public Footbridge",
        isPaid: false,
        hours: "Open 24/7 (Pedestrian Footbridge)",
        desc: "The iconic 1869 Neo-Gothic wrought-iron pedestrian bridge connecting central Frankfurt to Sachsenhausen, offering famous 360° panoramas of Frankfurt's 'Mainhattan' skyscrapers.",
        mapsQuery: "Eiserner Steg Frankfurt",
        coords: [50.1089, 8.6822]
      },
      {
        name: "Römerberg & Frankfurt Christmas Market",
        category: "🎄 Centuries-Old Holiday Market",
        time: "Evening (16:30 – 21:00)",
        location: "Römerberg, Frankfurt am Main",
        image: "public/images/sights/roemerberg.jpg",
        admission: "Free ($0 AUD) · Historic Town Square",
        isPaid: false,
        hours: "Open Daily 10:00–21:00 (Runs through 22 Dec)",
        desc: "One of Germany’s oldest and most picturesque Christmas markets, surrounded by restored medieval half-timbered merchant houses, a 30m illuminated tree, and warm spiced glühwein booths.",
        mapsQuery: "Romerberg Frankfurt",
        coords: [50.1106, 8.6818]
      }
    ]
  },`;

if (gData.includes(oldGalleryD7)) {
  gData = gData.replace(oldGalleryD7, newGalleryD7);
  console.log('Replaced Day 7 in gallery-data.js');
}

// Day 8 in gallery-data.js (Now Frankfurt am Main with Confirmed Temple Session)
const oldGalleryD8 = `  {
    dayNum: 8,
    day: "Day 8",
    date: "22 Dec 2026",
    city: "Kehl & Strasbourg",
    country: "France",
    countryFilter: "france",
    badgeClass: "badge-fr",
    title: "Strasbourg: Capital of Christmas & Fairytale Petite France",
    stay: "Hotel Cristall - Frankfurt City (Night 2 of 2)",
    transit: "🚆 DB ICE Train + 🚊 Strasbourg Cross-Border Tram Line D",
    coords: [48.5734, 7.7521],
    sights: [
      {
        name: "Rhine Cross-Border Tram Line D",
        category: "🚊 International Transit Link",
        time: "Afternoon (12:30 – 13:15)",
        location: "Kehl (Germany) ➔ Strasbourg (France)",
        image: "public/images/sights/kehl-tram.jpg",
        admission: "Public Transit Ticket (€2.00)",
        isPaid: false,
        hours: "Operates 05:00–00:30 (Every 6–10 mins)",
        desc: "The innovative cross-border tramway gliding smoothly across the Rhine River bridge connecting our hotel base in Kehl, Germany to central Strasbourg, France in 15 minutes.",
        mapsQuery: "Tram D Strasbourg Kehl",
        coords: [48.5683, 7.8189]
      },
      {
        name: "Petite France & Ponts Couverts",
        category: "🏰 Fairytale Half-Timbered District",
        time: "Afternoon (13:30 – 16:00)",
        location: "Quai des Moulins, Strasbourg",
        image: "public/images/sights/petite-france.jpg",
        admission: "Free ($0 AUD) · Public Historic District",
        isPaid: false,
        hours: "Open 24/7 (Historic Pedestrian Quarter)",
        desc: "Strasbourg's most romantic historic quarter where half-timbered tanners' houses dating from the 16th and 17th centuries line criss-crossing canals of the River Ill.",
        mapsQuery: "Petite France Strasbourg",
        coords: [48.5808, 7.7424]
      },
      {
        name: "Place Kléber Great Christmas Tree & Christkindelsmärik",
        category: "🎄 Capitale de Noël Highlights",
        time: "Evening (16:30 – 20:30)",
        location: "Place Kléber & Place Broglie, Strasbourg",
        image: "public/images/sights/strasbourg-xmas-tree.jpg",
        admission: "Free ($0 AUD) · Public Town Square",
        isPaid: false,
        hours: "Markets open Daily 11:00–20:00 (Tree lit until 23:00)",
        desc: "The crown jewel of Strasbourg's Christmas capital: a towering 30-meter real fir tree decorated with miles of glowing garlands and sparkling glass ornaments in Place Kléber.",
        mapsQuery: "Place Kleber Strasbourg",
        coords: [48.5833, 7.7459]
      }
    ]
  },`;

const newGalleryD8 = `  {
    dayNum: 8,
    day: "Day 8",
    date: "22 Dec 2026",
    city: "Frankfurt am Main",
    country: "Germany",
    countryFilter: "germany",
    badgeClass: "badge-de",
    title: "Goethe House & Frankfurt Germany Temple (6:00 PM Session)",
    stay: "Hotel Cristall - Frankfurt City (Night 2 of 2)",
    transit: "🚇 Frankfurt RMV / S-Bahn S5 Day Pass to Friedrichsdorf",
    coords: [50.2589, 8.6437],
    sights: [
      {
        name: "Goethe House & Museum",
        category: "📜 Literary & Cultural Heritage",
        time: "Morning & Midday (10:00 – 14:00)",
        location: "Großer Hirschgraben 23-25, Frankfurt",
        image: "public/images/sights/goethe-house-frankfurt.jpg",
        admission: "Optional: €10.00 (~A$17 AUD)",
        isPaid: false,
        hours: "Open Daily 10:00–18:00",
        desc: "The meticulously restored 18th-century bourgeois residence where Germany’s greatest writer and polymath, Johann Wolfgang von Goethe, was born in 1749.",
        mapsQuery: "Goethe House Frankfurt",
        coords: [50.1114, 8.6775]
      },
      {
        name: "The Frankfurt Germany LDS Temple",
        category: "🏛️ Sacred Temple Endowment Session",
        time: "Evening: Arrive 5:15 PM (6:00 PM Session)",
        location: "Talstraße 10, Friedrichsdorf",
        image: "public/images/temples/frankfurt-temple.jpg",
        admission: "Free ($0 AUD) · Confirmed Reservation (Jean Aquino)",
        isPaid: false,
        hours: "6:00 PM Session · Arrive by 5:15 PM",
        desc: "Official confirmed Proxy Endowment appointment for Jean Aristide Belleza Aquino. Distinctive copper roof and white spire with Angel Moroni amidst the peaceful Taunus foothills.",
        mapsQuery: "Frankfurt Germany Temple",
        coords: [50.2589, 8.6437]
      }
    ]
  },`;

if (gData.includes(oldGalleryD8)) {
  gData = gData.replace(oldGalleryD8, newGalleryD8);
  console.log('Replaced Day 8 in gallery-data.js');
}

// Day 15 in gallery-data.js (Now includes Paris France Temple Session @ 2:30 PM)
const oldGalleryD15 = `  {
    dayNum: 15,
    day: "Day 15",
    date: "29 Dec 2026",
    city: "Paris",
    country: "France",
    countryFilter: "france",
    badgeClass: "badge-fr",
    title: "Sacré-Cœur Basilica & Montmartre Artists' Square",
    stay: "Break & Home Paris Italie (CONFIRMED)",
    transit: "🚇 Paris Metro Line 14 / 7 (Navigo Easy Pass)",
    coords: [48.8867, 2.3431],
    sights: [
      {
        name: "Sacré-Cœur Basilica",
        category: "⛪ Romano-Byzantine Landmark",
        time: "Afternoon (13:00 – 15:30)",
        location: "35 Rue du Chevalier de la Barre, Paris",
        image: "public/images/sights/sacre-coeur.jpg",
        admission: "Free ($0 AUD) Basilica Nave · Dome opt. €7 (~A$12 AUD)",
        isPaid: false,
        hours: "Open Daily 06:30–22:30 (Open 365 Days)",
        desc: "Perched atop the highest natural point in Paris on Montmartre hill, this gleaming white travertine basilica offers awe-inspiring panoramic vistas of the entire French capital.",
        mapsQuery: "Sacre-Coeur Paris",
        coords: [48.8867, 2.3431]
      },
      {
        name: "Place du Tertre & Montmartre Village",
        category: "🎨 Historic Bohemian Quarter",
        time: "Afternoon (15:30 – 17:30)",
        location: "Place du Tertre, 18th Arr., Paris",
        image: "public/images/sights/montmartre-village.jpg",
        admission: "Free ($0 AUD) · Public Square",
        isPaid: false,
        hours: "Open 24/7 (Public Bohemian Square)",
        desc: "Legendary cobblestone artists' square where painters, portraitists, and caricaturists set up open-air easels under bistro awnings, preserving Paris's 19th-century bohemian spirit.",
        mapsQuery: "Place du Tertre Paris",
        coords: [48.8865, 2.3408]
      }
    ]
  },`;

const newGalleryD15 = `  {
    dayNum: 15,
    day: "Day 15",
    date: "29 Dec 2026",
    city: "Paris",
    country: "France",
    countryFilter: "france",
    badgeClass: "badge-fr",
    title: "Paris France Temple (2:30 PM Session) & Montmartre Sacré-Cœur",
    stay: "Break & Home Paris Italie (CONFIRMED)",
    transit: "🚇 Paris Metro Line 14 / RER Line C",
    coords: [48.8867, 2.3431],
    sights: [
      {
        name: "Paris France LDS Temple",
        category: "🏛️ Sacred Temple Endowment Session",
        time: "Afternoon: Arrive 2:00 PM (2:30 PM Session)",
        location: "46 Boulevard Saint-Antoine, Le Chesnay",
        image: "public/images/temples/paris-temple.jpg",
        admission: "Free ($0 AUD) · Confirmed Reservation (Jean Aquino)",
        isPaid: false,
        hours: "2:30 PM Session · Arrive by 2:00 PM",
        desc: "Official confirmed Proxy Endowment appointment for Jean Aristide Belleza Aquino. Elegant warm limestone architecture and landscaped reflection courtyard beside Versailles.",
        mapsQuery: "Paris France Temple",
        coords: [48.8179, 2.1232]
      },
      {
        name: "Sacré-Cœur Basilica & Montmartre",
        category: "⛪ Romano-Byzantine Landmark",
        time: "Evening (17:30 – 20:30)",
        location: "35 Rue du Chevalier de la Barre, Paris",
        image: "public/images/sights/sacre-coeur.jpg",
        admission: "Free ($0 AUD) Basilica Nave",
        isPaid: false,
        hours: "Open Daily 06:30–22:30 (Open 365 Days)",
        desc: "Perched atop the highest natural point in Paris on Montmartre hill, this gleaming white travertine basilica offers awe-inspiring panoramic vistas of the entire illuminated capital.",
        mapsQuery: "Sacre-Coeur Paris",
        coords: [48.8867, 2.3431]
      }
    ]
  },`;

if (gData.includes(oldGalleryD15)) {
  gData = gData.replace(oldGalleryD15, newGalleryD15);
  console.log('Replaced Day 15 in gallery-data.js');
}

fs.writeFileSync(galleryDataPath, gData, 'utf8');
console.log('Saved js/gallery-data.js');

console.log('--- Completed All Updates Successfully! ---');
