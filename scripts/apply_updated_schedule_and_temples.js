const fs = require('fs');
const path = require('path');
const { templeDossierHtml, nyeFireworksGuideHtml } = require('./temple_and_nye_blocks.js');

const indexHtmlPath = path.join(__dirname, '../index.html');
const appJsPath = path.join(__dirname, '../js/app.js');
const galleryDataPath = path.join(__dirname, '../js/gallery-data.js');

let html = fs.readFileSync(indexHtmlPath, 'utf8');
let appJs = fs.readFileSync(appJsPath, 'utf8');
let gData = fs.readFileSync(galleryDataPath, 'utf8');

// =========================================================================
// 1. Insert Temple Dossier in index.html (before templesGrid)
// =========================================================================
if (!html.includes('temple-reservations-dossier')) {
  html = html.replace('<div class="temples-grid" id="templesGrid">', templeDossierHtml + '\n    <div class="temples-grid" id="templesGrid">');
  console.log('Inserted Temple Reservations Dossier in index.html');
}

// =========================================================================
// 2. Insert NYE Fireworks Guide in index.html (inside Day 17)
// =========================================================================
if (!html.includes('nye-fireworks-guide-card')) {
  // Add into Day 17 in Cards view
  const d17CardEnd = `<div class="card-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 Musée d'Orsay: Open Thu 09:30–18:00 (Closed Mondays · Day 17 is Thursday!)</span> <span class="opening-pill open">🟢 Notre-Dame Cathedral: Open 07:45–19:00</span> <span class="opening-pill open">🟢 Champs-Élysées NYE Celebration: Open All Night (Metro is Free!)</span></div>`;
  if (html.includes(d17CardEnd)) {
    html = html.replace(d17CardEnd, d17CardEnd + '\n' + nyeFireworksGuideHtml);
    console.log('Inserted NYE Fireworks Guide in Day 17 Card');
  }
}

// =========================================================================
// 3. Update Day 4, 5, 6, 7, 8 in index.html (Table & Cards)
// =========================================================================

// --- DAY 4: 18 Dec ---
// Table
const oldDay4Table = `            <tr class="itinerary-table-row row-badge-nl" data-country="Netherlands">
              <td class="col-table-day">
                <span class="table-day-badge">Day 4</span>
                <span class="table-date-str">18 Dec 2026</span>
              </td>
              <td class="col-table-loc">
                <div class="table-loc-name">The Hague & Zoetermeer ➔ Overnight Coach</div>
                <span class="badge-country badge-nl">Netherlands</span>
              </td>
              <td class="col-table-plan">
                <div class="table-plan-title">The Hague Temple Endowment Session ➔ Overnight Coach to Frankfurt</div>
                <div class="table-activities-list">
        <div class="table-activity-item">• <b>Morning (08:45 – 12:15):</b> Check out of hostel (store bags or carry daypacks). 48-minute Dutch NS Intercity train from Amsterdam Centraal to Den Haag Centraal. Visit the <b>International Criminal Court (ICC)</b> at Oude Waalsdorperweg for photos and the historic <b>Peace Palace (Vredespaleis)</b> & World Peace Flame.</div>
        <div class="table-activity-item">• <b>Midday & Afternoon (12:30 – 17:00):</b> Direct transit via Prins Bernhardviaduct / RandstadRail 3 to Zoetermeer for <b>The Hague Netherlands Temple</b> (Osylaan 2). Attend scheduled sacred <b>Temple Endowment Session</b>, followed by temple grounds photography and reverent reflection along the canal park.</div>
        <div class="table-activity-item">• <b>Evening & Night (17:30 – 00:45):</b> Direct train return to Amsterdam Centraal. Celebration farewell Dutch dinner in Amsterdam, retrieve backpacks, transfer to Amsterdam Sloterdijk station. Board 12:45 AM overnight FlixBus to Frankfurt am Main.</div>
      </div>
                <div class="table-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (Peace Palace exterior, ICC & The Hague Temple)</div>
                <div class="table-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 The Hague Temple: Open for Friday Sessions</span> <span class="opening-pill open">🟢 Peace Palace Visitor Centre: Open Fri 12:00–16:00</span> <span class="opening-pill open">🟢 ICC Exterior: Open 24/7</span></div>
              </td>
              <td class="col-table-stay">
                <div class="table-hotel-name">FlixBus Overnight Sleeper (Coach Transit)</div>
                <div class="table-hotel-addr">Amsterdam Sloterdijk ➔ Frankfurt am Main Hbf</div>
                <div class="table-transit-mode"><i>🚆 NS Intercity / RandstadRail + 🚌 FlixBus Sleeper (Departs 12:45 AM, 19 Dec)</i></div>
              </td>
              <td class="col-table-action">
                <button type="button" class="btn-table-map" title="Focus map on The Hague & Zoetermeer ➔ Overnight Coach">
                  📍 Map
                </button>
                <div style="margin-top: 6px;"><a href="#travelWellnessSection" class="fatigue-alert-link">🛡️ Travel Wellness: Night Coach Sleep Tips &amp; Energy Pacing ➔</a></div>
              </td>
            </tr>`;

const newDay4Table = `            <tr class="itinerary-table-row row-badge-nl" data-country="Netherlands">
              <td class="col-table-day">
                <span class="table-day-badge">Day 4</span>
                <span class="table-date-str">18 Dec 2026</span>
              </td>
              <td class="col-table-loc">
                <div class="table-loc-name">The Hague &amp; Amsterdam</div>
                <span class="badge-country badge-nl">Netherlands</span>
              </td>
              <td class="col-table-plan">
                <div class="table-plan-title">The Hague Temple (9:30 AM Session) &amp; Peace Palace</div>
                <div class="table-activities-list">
        <div class="table-activity-item">• <b>Morning (08:00 – 12:30):</b> 48-min Dutch NS Intercity train from Amsterdam Centraal to Den Haag / Zoetermeer. <b>The Hague Netherlands Temple: Arrive by 9:10 AM for the 9:30 AM Proxy Endowment Session (Confirmed Reservation for Jean Aquino)</b>. Reverent photos and peaceful reflection along the temple canal park.</div>
        <div class="table-activity-item">• <b>Afternoon (13:00 – 16:30):</b> Visit the historic <b>Peace Palace (Vredespaleis)</b> &amp; World Peace Flame (Visitor Centre open 12:00–16:00) and the International Criminal Court (ICC) exterior.</div>
        <div class="table-activity-item">• <b>Evening (17:30 – 21:30):</b> Return train to Amsterdam Centraal. Festive dinner in Amsterdam; enjoy a restful 3rd night in Amsterdam—<b>no midnight coach fatigue!</b></div>
      </div>
                <div class="table-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (The Hague Temple, Peace Palace exterior &amp; ICC)</div>
                <div class="table-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 The Hague Temple: 9:30 AM Session (Arrive 9:10 AM)</span> <span class="opening-pill open">🟢 Peace Palace Visitor Centre: Open 12:00–16:00</span> <span class="opening-pill open">🟢 ICC Exterior: Open 24/7</span></div>
              </td>
              <td class="col-table-stay">
                <div class="table-hotel-name">Amsterdam Base (Night 3 of 3)</div>
                <div class="table-hotel-addr">Central Amsterdam · <i>Sleep in a real bed!</i></div>
                <div class="table-transit-mode"><i>🚆 NS Intercity + RandstadRail Day Return</i></div>
              </td>
              <td class="col-table-action">
                <button type="button" class="btn-table-map" title="Focus map on The Hague &amp; Amsterdam">
                  📍 Map
                </button>
              </td>
            </tr>`;

if (html.includes(oldDay4Table)) {
  html = html.replace(oldDay4Table, newDay4Table);
  console.log('Updated Day 4 Table Row in index.html');
}

// --- DAY 5: 19 Dec ---
// Table
const oldDay5Table = `            <tr class="itinerary-table-row row-badge-de" data-country="Germany">
              <td class="col-table-day">
                <span class="table-day-badge">Day 5</span>
                <span class="table-date-str">19 Dec 2026</span>
              </td>
              <td class="col-table-loc">
                <div class="table-loc-name">Frankfurt am Main</div>
                <span class="badge-country badge-de">Germany</span>
              </td>
              <td class="col-table-plan">
                <div class="table-plan-title">Frankfurt Germany Temple (8:15 AM Endowment Session) & Römerberg</div>
                <div class="table-activities-list">
        <div class="table-activity-item">• <b>Early Morning (07:15 – 12:00):</b> Arrive in Frankfurt am Main around 07:15 AM via overnight coach. Bag drop at Hotel Cristall (200m from Hbf). <i>Attendance at the 08:15 AM session is completely flexible:</i> attend if feeling energetic, or rest and sleep in because you hold a <b>Confirmed Alternative Booking on Tuesday 22 Dec @ 6:00 PM (Arrive 5:15 PM)</b>!</div>
        <div class="table-activity-item">• <b>Afternoon (12:30 – 16:30):</b> Return to central Frankfurt. Cross the historic 1869 <b>Eiserner Steg</b> (iron footbridge) for panoramic skyline views of 'Mainhattan' over the Main River, and explore Frankfurt Altstadt and Kaiserdom.</div>
        <div class="table-activity-item">• <b>Evening (16:30 – 21:00):</b> Celebrate at the centuries-old <b>Frankfurter Weihnachtsmarkt at Römerberg</b>—one of Germany’s grandest holiday markets, surrounded by medieval half-timbered houses and a 30m illuminated tree. Check-in and restful overnight stay at <b>Hotel Cristall</b> (Night 1 of 3).</div>
      </div>
                <div class="table-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (Frankfurt Temple, Römerberg & Christmas Market)</div>
                <div class="table-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 Frankfurt Temple: Open Saturdays (08:15 AM Session)</span> <span class="opening-pill open">🟢 Römerberg Christmas Market: Open 10:00–21:00</span> <span class="opening-pill open">🟢 Kaiserdom: Open 09:00–20:00</span></div>
              </td>
              <td class="col-table-stay">
                <div class="table-hotel-name">Hotel Cristall - Frankfurt City (Night 1 of 3)</div>
                <div class="table-hotel-addr">Ottostrasse 3, 60329 Frankfurt am Main</div>
                <div class="table-transit-mode"><i>🚌 Overnight Coach Arrival (~07:15) + 🚆 S-Bahn S5 / Taxi to Temple</i></div>
              </td>
              <td class="col-table-action">
                <button type="button" class="btn-table-map" title="Focus map on Frankfurt am Main">
                  📍 Map
                </button>
                <div style="margin-top: 6px;"><a href="#travelWellnessSection" class="fatigue-alert-link">🛡️ Mitigated: Confirmed Alternative Temple Booking on Tue 22 Dec ➔</a></div>
              </td>
            </tr>`;

const newDay5Table = `            <tr class="itinerary-table-row row-badge-de" data-country="Germany">
              <td class="col-table-day">
                <span class="table-day-badge">Day 5</span>
                <span class="table-date-str">19 Dec 2026</span>
              </td>
              <td class="col-table-loc">
                <div class="table-loc-name">Amsterdam ➔ Cologne</div>
                <span class="badge-country badge-de">Germany</span>
              </td>
              <td class="col-table-plan">
                <div class="table-plan-title">High-Speed Rail to Cologne: Kölner Dom &amp; Lindt Chocolate Museum</div>
                <div class="table-activities-list">
        <div class="table-activity-item">• <b>Morning (08:30 – 11:45):</b> Well-rested morning in Amsterdam. Board direct daytime <b>DB ICE</b> high-speed train from Amsterdam Centraal to Köln Hbf (2h 38m). Check in at Cologne base hotel.</div>
        <div class="table-activity-item">• <b>Afternoon (12:30 – 16:30):</b> Step right out into the shadow of the monumental twin Gothic spires of <b>Cologne Cathedral</b> (<i>Kölner Dom</i>, UNESCO World Heritage site). Stroll love-locked <b>Hohenzollern Bridge</b> and explore the <b>Lindt Chocolate Museum</b> along the Rhine with its 3m golden chocolate fountain.</div>
        <div class="table-activity-item">• <b>Evening (17:00 – 21:00):</b> Experience the festive <b>Cologne Cathedral Christmas Market</b> (<i>Weihnachtsmarkt am Kölner Dom</i>), sampling fresh hot waffles, roasted chestnuts, and Kinderpunsch.</div>
      </div>
                <div class="table-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill paid">🎟️ Lindt Chocolate Museum: €17.50 (~A$29 AUD)</span> <span class="admission-pill free">✨ Cologne Cathedral Nave: Free ($0 AUD)</span> <span class="admission-pill free">✨ Cologne Christmas Markets: Free ($0 AUD)</span></div>
                <div class="table-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 Cologne Cathedral: Open 06:00–20:00 (Open 365 Days)</span> <span class="opening-pill open">🟢 Lindt Chocolate Museum: Open 10:00–18:00</span> <span class="opening-pill open">🟢 Cologne Markets: Open 11:00–21:00</span></div>
              </td>
              <td class="col-table-stay">
                <div class="table-hotel-name">Cologne Base (Night 1 of 2)</div>
                <div class="table-hotel-addr">Central Cologne, Germany · <i>Steps to Cathedral</i></div>
                <div class="table-transit-mode"><i>🚆 DB ICE Train Amsterdam ➔ Köln Hbf (2h 38m)</i></div>
              </td>
              <td class="col-table-action">
                <button type="button" class="btn-table-map" title="Focus map on Cologne">
                  📍 Map
                </button>
              </td>
            </tr>`;

if (html.includes(oldDay5Table)) {
  html = html.replace(oldDay5Table, newDay5Table);
  console.log('Updated Day 5 Table Row in index.html');
}

// --- DAY 6: 20 Dec ---
// Table
const oldDay6Table = `            <tr class="itinerary-table-row row-badge-de" data-country="Germany">
              <td class="col-table-day">
                <span class="table-day-badge">Day 6</span>
                <span class="table-date-str">20 Dec 2026</span>
              </td>
              <td class="col-table-loc">
                <div class="table-loc-name">Frankfurt am Main</div>
                <span class="badge-country badge-de">Germany</span>
              </td>
              <td class="col-table-plan">
                <div class="table-plan-title">Sunday Reflection, Historic Altstadt & Museumsufer</div>
                <div class="table-activities-list">
        <div class="table-activity-item">• <b>Morning (09:30 – 13:00):</b> Sunday church worship / spiritual reflection; peaceful winter morning stroll along the River Main promenade.</div>
        <div class="table-activity-item">• <b>Afternoon (13:30 – 16:30):</b> Cultural exploration of the Goethe House (birthplace of Johann Wolfgang von Goethe) and historic Museumsufer district (Städel Museum).</div>
        <div class="table-activity-item">• <b>Evening (17:00 – 21:00):</b> Traditional Hessian dinner in Alt-Sachsenhausen (sampling regional specialties and warm Apfelwein); evening illuminated skyline walk.</div>
      </div>
                <div class="table-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (Altstadt & Main River walking) · <span class="admission-pill optional">Optional Goethe House: €10 (~A$17 AUD)</span></div>
                <div class="table-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 Sunday Church Worship: Open for services</span> <span class="opening-pill open">🟢 Goethe House: Open Sundays 10:00–18:00</span> <span class="opening-pill open">🟢 Altstadt &amp; River Main: Open 24/7</span></div>
              </td>
              <td class="col-table-stay">
                <div class="table-hotel-name">Hotel Cristall - Frankfurt City (Night 2 of 3)</div>
                <div class="table-hotel-addr">Ottostrasse 3, 60329 Frankfurt am Main</div>
                <div class="table-transit-mode"><i>🚇 Frankfurt Tram & U-Bahn Network Day Pass</i></div>
              </td>
              <td class="col-table-action">
                <button type="button" class="btn-table-map" title="Focus map on Frankfurt am Main">
                  📍 Map
                </button>
              </td>
            </tr>`;

const newDay6Table = `            <tr class="itinerary-table-row row-badge-de" data-country="Germany">
              <td class="col-table-day">
                <span class="table-day-badge">Day 6</span>
                <span class="table-date-str">20 Dec 2026</span>
              </td>
              <td class="col-table-loc">
                <div class="table-loc-name">Cologne &amp; Düsseldorf</div>
                <span class="badge-country badge-de">Germany</span>
              </td>
              <td class="col-table-plan">
                <div class="table-plan-title">Sunday Reflection &amp; Düsseldorf 7 Themed Christmas Markets</div>
                <div class="table-activities-list">
        <div class="table-activity-item">• <b>Morning (09:30 – 12:30):</b> Sunday church worship &amp; spiritual reflection in Cologne; peaceful morning walk along the Rhine promenade.</div>
        <div class="table-activity-item">• <b>Afternoon (13:00 – 17:30):</b> Short 20-minute direct train to Düsseldorf Hbf. Walk the magical <b>7 Themed Christmas Markets Trail</b>: golden Art Nouveau angels at <i>Engelchen-Markt</i>, romantic crystal stars at <i>Sternchen-Markt</i>, and <i>Handwerker-Markt</i> before the historic Rathaus.</div>
        <div class="table-activity-item">• <b>Evening (17:30 – 20:30):</b> Stroll along the famous Königsallee canal and <i>Corneliusplatz Ice Rink</i>. Enjoy dinner in authentic 'Little Tokyo' (Immermannstraße); smooth 20-min train return to Cologne base.</div>
      </div>
                <div class="table-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (Düsseldorf 7 Christmas Markets &amp; Königsallee)</div>
                <div class="table-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 Düsseldorf Markets: Open 11:00–20:00</span> <span class="opening-pill open">🟢 Corneliusplatz Ice Rink: Open 11:00–21:00</span></div>
              </td>
              <td class="col-table-stay">
                <div class="table-hotel-name">Cologne Base (Night 2 of 2)</div>
                <div class="table-hotel-addr">Central Cologne, Germany</div>
                <div class="table-transit-mode"><i>🚆 Regional Express Train (Köln ➔ Düsseldorf 20 mins)</i></div>
              </td>
              <td class="col-table-action">
                <button type="button" class="btn-table-map" title="Focus map on Cologne &amp; Düsseldorf">
                  📍 Map
                </button>
              </td>
            </tr>`;

if (html.includes(oldDay6Table)) {
  html = html.replace(oldDay6Table, newDay6Table);
  console.log('Updated Day 6 Table Row in index.html');
}

// --- DAY 7: 21 Dec ---
// Table
const oldDay7Table = `            <tr class="itinerary-table-row row-badge-de" data-country="Germany">
              <td class="col-table-day">
                <span class="table-day-badge">Day 7</span>
                <span class="table-date-str">21 Dec 2026</span>
              </td>
              <td class="col-table-loc">
                <div class="table-loc-name">Cologne & Düsseldorf (Twin-City Excursion)</div>
                <span class="badge-country badge-de">Germany</span>
              </td>
              <td class="col-table-plan">
                <div class="table-plan-title">Cologne Cathedral, Lindt Museum & Düsseldorf Christmas Markets</div>
                <div class="table-activities-list">
        <div class="table-activity-item">• <b>Morning in Cologne (08:30 – 13:00):</b> 1-hour fast DB ICE train from Frankfurt Hbf to Köln Hbf (💡 <i>use free onboard train restroom before arrival</i>). Marvel at the monumental Gothic spires of <b>Cologne Cathedral</b> (<i>Kölner Dom</i>, UNESCO World Heritage site). Walk across love-locked <b>Hohenzollern Bridge</b> and explore the <b>Lindt Chocolate Museum</b> along the Rhine (🚻 <i>free customer restrooms inside</i>) with its 3m golden fountain.</div>
        <div class="table-activity-item">• <b>Afternoon in Düsseldorf (13:30 – 17:30):</b> Scenic 20-minute direct train to Düsseldorf Hbf. Walk the magical <b>7 Themed Christmas Markets Trail</b>: golden Art Nouveau angels at <i>Engelchen-Markt</i>, romantic crystal stars at <i>Sternchen-Markt</i>, and artisanal craft booths at <i>Handwerker-Markt</i> before the historic 16th-century Rathaus on Marktplatz.</div>
        <div class="table-activity-item">• <b>Evening & Return (17:30 – 21:00):</b> Riverside stroll along Rhine Embankment Promenade to the <i>Corneliusplatz Ice Rink</i> on the famous Königsallee canal (🚻 <i>free facilities at Kö-Bogen / Sevens mall</i>). Dinner in authentic "Little Tokyo" (Immermannstraße) or traditional Altbier tavern. Direct 1h 20m high-speed ICE train back to Frankfurt Hbf (💡 <i>free train restroom onboard</i>). Overnight at <b>Hotel Cristall</b> (Night 3 of 3).</div>
      </div>
                <div class="table-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill paid">🎟️ Lindt Chocolate Museum: €17.50 (~A$29 AUD)</span> <span class="admission-pill free">✨ Cologne Cathedral Nave: Free ($0 AUD)</span> <span class="admission-pill free">✨ Düsseldorf Markets: Free ($0 AUD)</span></div>
                <div class="table-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 Cologne Cathedral: Open 06:00–20:00 (365 Days)</span> <span class="opening-pill open">🟢 Lindt Chocolate Museum: Confirmed Open Mon in Dec (10:00–18:00)</span> <span class="opening-pill open">🟢 Düsseldorf Markets: Open 11:00–20:00</span></div>
              </td>
              <td class="col-table-stay">
                <div class="table-hotel-name">Hotel Cristall - Frankfurt City (Night 3 of 3)</div>
                <div class="table-hotel-addr">Ottostrasse 3, 60329 Frankfurt am Main</div>
                <div class="table-transit-mode"><i>🚆 DB ICE Triangle Circuit (FRA ➔ CGN ➔ DUS ➔ FRA)</i></div>
              </td>
              <td class="col-table-action">
                <button type="button" class="btn-table-map" title="Focus map on Cologne & Düsseldorf (Twin-City Excursion)">
                  📍 Map
                </button>
              </td>
            </tr>`;

const newDay7Table = `            <tr class="itinerary-table-row row-badge-de" data-country="Germany">
              <td class="col-table-day">
                <span class="table-day-badge">Day 7</span>
                <span class="table-date-str">21 Dec 2026</span>
              </td>
              <td class="col-table-loc">
                <div class="table-loc-name">Cologne ➔ Frankfurt</div>
                <span class="badge-country badge-de">Germany</span>
              </td>
              <td class="col-table-plan">
                <div class="table-plan-title">High-Speed Rail to Frankfurt: Römerberg Christmas Market &amp; Altstadt</div>
                <div class="table-activities-list">
        <div class="table-activity-item">• <b>Morning (09:00 – 10:30):</b> Check out of Cologne base. Board direct <b>DB ICE</b> high-speed train from Köln Hbf to Frankfurt am Main Hbf (fast 1h 05m journey). Check in at <b>Hotel Cristall</b> (Ottostrasse 3, 200m from Hbf).</div>
        <div class="table-activity-item">• <b>Afternoon (12:00 – 16:30):</b> Walk across the historic 1869 <b>Eiserner Steg</b> (iron footbridge) for panoramic skyline views of "Mainhattan" over the Main River, explore Frankfurt Altstadt, and visit the historic Kaiserdom.</div>
        <div class="table-activity-item">• <b>Evening (16:30 – 21:00):</b> Celebrate at the centuries-old <b>Frankfurter Weihnachtsmarkt at Römerberg</b>—one of Germany’s grandest holiday markets, surrounded by medieval half-timbered houses and a 30m illuminated tree (last full day of the market!). Overnight at Hotel Cristall (Night 1 of 2).</div>
      </div>
                <div class="table-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (Frankfurt Altstadt, Römerberg &amp; Skyline)</div>
                <div class="table-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 Römerberg Christmas Market: Open 10:00–21:00 (Runs through 22 Dec)</span> <span class="opening-pill open">🟢 Kaiserdom: Open 09:00–20:00</span></div>
              </td>
              <td class="col-table-stay">
                <div class="table-hotel-name">Hotel Cristall - Frankfurt City (Night 1 of 2)</div>
                <div class="table-hotel-addr">Ottostrasse 3, 60329 Frankfurt am Main</div>
                <div class="table-transit-mode"><i>🚆 DB ICE High-Speed Train (Köln ➔ Frankfurt Hbf, 1h 05m)</i></div>
              </td>
              <td class="col-table-action">
                <button type="button" class="btn-table-map" title="Focus map on Cologne ➔ Frankfurt">
                  📍 Map
                </button>
              </td>
            </tr>`;

if (html.includes(oldDay7Table)) {
  html = html.replace(oldDay7Table, newDay7Table);
  console.log('Updated Day 7 Table Row in index.html');
}

// --- DAY 8: 22 Dec ---
// Table
const oldDay8Table = `            <tr class="itinerary-table-row row-badge-fr" data-country="France">
              <td class="col-table-day">
                <span class="table-day-badge">Day 8</span>
                <span class="table-date-str">22 Dec 2026</span>
              </td>
              <td class="col-table-loc">
                <div class="table-loc-name">Strasbourg (Kehl Base)</div>
                <span class="badge-country badge-fr">France</span>
              </td>
              <td class="col-table-plan">
                <div class="table-plan-title">Strasbourg (Kehl Base) · Confirmed Alternative Frankfurt Temple Session (6:00 PM)</div>
                <div class="table-activities-list">
        <div class="table-activity-item">• <b>Option A (Standard Morning Alsace Transfer):</b> If Frankfurt Temple completed on Saturday, take morning ICE train south to Kehl/Strasbourg (1h 45m) for a full afternoon exploring Petite France, Place Kléber Great Tree, and Christkindelsmärik.</div>
        <div class="table-activity-item">• <b>Option B (⭐ Confirmed Alternative Temple Schedule in Frankfurt):</b><br>
          &nbsp;&nbsp;• <i>Morning &amp; Midday (10:00 – 16:30):</i> Check out of Hotel Cristall (bags safely stored). Relaxed morning stroll through Frankfurt Altstadt, River Main, or shopping along the Zeil.<br>
          &nbsp;&nbsp;• <i>Late Afternoon &amp; Evening (16:45 – 20:00):</i> 26-min S-Bahn S5 from Frankfurt Hbf to Friedrichsdorf. <b>Frankfurt Germany Temple Proxy Endowment Session: Arrive by 5:15 PM for the 6:00 PM Session (Confirmed Booking for Jean Aquino)</b>.<br>
          &nbsp;&nbsp;• <i>Night (20:30 – 22:30):</i> S-Bahn S5 back to Frankfurt Hbf, collect luggage, board fast DB ICE train south to Kehl/Strasbourg base (1h 45m) for check-in at <b>B&B Hotel Kehl</b>.</div>
      </div>
                <div class="table-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (Strasbourg Cathedral nave, Petite France & Christkindelsmärik)</div>
                <div class="table-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 Strasbourg Cathedral: Open 08:30–11:15 &amp; 12:45–18:00</span> <span class="opening-pill open">🟢 Christkindelsmärik: Open 11:00–20:00</span> <span class="opening-pill open">🟢 Petite France: Open 24/7</span></div>
              </td>
              <td class="col-table-stay">
                <div class="table-hotel-name">B&B Hotel Kehl (Base for Alsace)</div>
                <div class="table-hotel-addr">15 Allensteiner Str., 77694 Kehl · <i>Base to visit Strasbourg &amp; Colmar</i></div>
                <div class="table-transit-mode"><i>🚆 DB ICE Train (1h45m) + Strasbourg Tram Line D (€1.90)</i></div>
              </td>
              <td class="col-table-action">
                <button type="button" class="btn-table-map" title="Focus map on Kehl & Strasbourg">
                  📍 Map
                </button>
              </td>
            </tr>`;

const newDay8Table = `            <tr class="itinerary-table-row row-badge-de" data-country="Germany">
              <td class="col-table-day">
                <span class="table-day-badge">Day 8</span>
                <span class="table-date-str">22 Dec 2026</span>
              </td>
              <td class="col-table-loc">
                <div class="table-loc-name">Frankfurt am Main</div>
                <span class="badge-country badge-de">Germany</span>
              </td>
              <td class="col-table-plan">
                <div class="table-plan-title">Frankfurt Cultural Discovery &amp; Frankfurt Temple (6:00 PM Session)</div>
                <div class="table-activities-list">
        <div class="table-activity-item">• <b>Morning &amp; Midday (09:30 – 15:30):</b> Leisurely buffet breakfast at Hotel Cristall. Cultural morning visiting the <b>Goethe House &amp; Museum</b> (birthplace of Johann Wolfgang von Goethe) and exploring Museumsufer along the River Main; shopping along the famous Zeil pedestrian promenade.</div>
        <div class="table-activity-item">• <b>Late Afternoon &amp; Evening (16:45 – 20:00):</b> 26-minute direct S-Bahn S5 from Frankfurt Hbf to Friedrichsdorf. <b>The Frankfurt Germany Temple: Arrive by 5:15 PM for the 6:00 PM Proxy Endowment Session (Confirmed Reservation for Jean Aristide Belleza Aquino)</b>. Reverent reflection and photography on illuminated temple grounds.</div>
        <div class="table-activity-item">• <b>Night (20:30 – 22:30):</b> Direct S-Bahn S5 return to Frankfurt Hbf. Celebration dinner in central Frankfurt; restful overnight stay at <b>Hotel Cristall</b> (Night 2 of 2 in Frankfurt).</div>
      </div>
                <div class="table-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (Frankfurt Temple &amp; Main River) · <span class="admission-pill optional">Optional Goethe House: €10 (~A$17 AUD)</span></div>
                <div class="table-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 Frankfurt Germany Temple: 6:00 PM Session (Arrive 5:15 PM)</span> <span class="opening-pill open">🟢 Goethe House: Open 10:00–18:00</span></div>
              </td>
              <td class="col-table-stay">
                <div class="table-hotel-name">Hotel Cristall - Frankfurt City (Night 2 of 2)</div>
                <div class="table-hotel-addr">Ottostrasse 3, 60329 Frankfurt am Main</div>
                <div class="table-transit-mode"><i>🚇 Frankfurt RMV / S-Bahn S5 Day Pass to Friedrichsdorf</i></div>
              </td>
              <td class="col-table-action">
                <button type="button" class="btn-table-map" title="Focus map on Frankfurt am Main">
                  📍 Map
                </button>
              </td>
            </tr>`;

if (html.includes(oldDay8Table)) {
  html = html.replace(oldDay8Table, newDay8Table);
  console.log('Updated Day 8 Table Row in index.html');
}

// --- DAY 9: 23 Dec ---
// Update Day 9 title/plan to show departure from Frankfurt to Alsace
const oldDay9Title = `<div class="table-plan-title">Fairytale Colmar · Petite Venise, Beauty &amp; the Beast &amp; Howl's Moving Castle Trail</div>`;
const newDay9Title = `<div class="table-plan-title">Frankfurt ➔ Alsace · Fairytale Colmar &amp; Strasbourg Capital of Christmas</div>`;
html = html.replace(oldDay9Title, newDay9Title);

// --- DAY 15: 29 Dec (Paris France Temple Session) ---
const oldDay15Title = `<div class="table-plan-title">Arrival & Montmartre Sacré-Cœur</div>`;
const newDay15Title = `<div class="table-plan-title">Paris Arrival, Paris France Temple (2:30 PM Session) &amp; Montmartre</div>`;
html = html.replace(oldDay15Title, newDay15Title);

const oldDay15Act = `<div class="table-activities-list">
        <div class="table-activity-item">• <b>Morning (06:40 – 11:00):</b> Arrive at Paris Bercy Seine. Transfer via Metro Line 14 / Tramway T3a to <b>Break & Home Paris Italie Porte de Choisy</b>. Drop luggage, enjoy fresh French croissants and café au lait.</div>
        <div class="table-activity-item">• <b>Afternoon (12:30 – 16:30):</b> Ascend the historic hill of <b>Montmartre</b> to the white-domed <b>Sacré-Cœur Basilica</b> for breathtaking panoramic winter views of Paris. Explore artists' easel square at Place du Tertre.</div>
        <div class="table-activity-item">• <b>Evening (17:30 – 20:30):</b> Twilight walk along the historic Seine River banks and Latin Quarter bistro dinner.</div>
      </div>`;

const newDay15Act = `<div class="table-activities-list">
        <div class="table-activity-item">• <b>Morning (06:40 – 11:30):</b> Arrive in Paris Bercy via overnight coach. Transfer to <b>Break &amp; Home Paris Italie Porte de Choisy</b>. Drop luggage, refresh, and savor warm French croissants and café au lait.</div>
        <div class="table-activity-item">• <b>Afternoon (13:15 – 17:00):</b> RER C / Phébus bus transit to Le Chesnay. <b>Paris France Temple: Arrive by 2:00 PM for the 2:30 PM Proxy Endowment Session (Confirmed Reservation for Jean Aristide Belleza Aquino)</b>. Stroll the peaceful landscaped reflection gardens and visitors' courtyard.</div>
        <div class="table-activity-item">• <b>Evening (17:30 – 21:00):</b> Return to central Paris. Ascend the historic hill of <b>Montmartre</b> via the Funiculaire to the white-domed <b>Sacré-Cœur Basilica</b> for breathtaking panoramic winter views; Latin Quarter bistro dinner.</div>
      </div>`;
html = html.replace(oldDay15Act, newDay15Act);

const oldDay15Open = `<div class="table-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 Sacré-Cœur Basilica: Open 06:30–22:30 (Open 365 Days)</span> <span class="opening-pill open">🟢 Place du Tertre &amp; Montmartre: Open 24/7</span> <span class="opening-pill open">🟢 Latin Quarter: Open 24/7</span></div>`;
const newDay15Open = `<div class="table-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 Paris France Temple: 2:30 PM Session (Arrive 2:00 PM)</span> <span class="opening-pill open">🟢 Sacré-Cœur Basilica: Open 06:30–22:30 (Open 365 Days)</span> <span class="opening-pill open">🟢 Montmartre: Open 24/7</span></div>`;
html = html.replace(oldDay15Open, newDay15Open);

// Update matrix table rows for Days 4, 5, 6, 7, 8, 15
const oldMatrixD4 = `<tr><td><strong>Day 4</strong> (18 Dec)</td><td>Friday</td><td>The Hague &amp; Zoetermeer</td><td>The Hague Temple, Peace Palace Visitor Centre, ICC</td><td>12:00–16:00 (Peace Palace) · Fri Temple Sessions</td><td><span class="badge-status-open">🟢 Verified Open</span></td></tr>`;
const newMatrixD4 = `<tr><td><strong>Day 4</strong> (18 Dec)</td><td>Friday</td><td>The Hague &amp; Amsterdam</td><td>The Hague Temple (9:30 AM Session), Peace Palace, ICC</td><td>Temple: Arrive 9:10 AM (9:30 AM Session) · Palace 12:00–16:00</td><td><span class="badge-status-open">🟢 Confirmed Reservation</span></td></tr>`;
html = html.replace(oldMatrixD4, newMatrixD4);

const oldMatrixD5 = `<tr><td><strong>Day 5</strong> (19 Dec)</td><td>Saturday</td><td>Frankfurt am Main</td><td>Frankfurt Temple, Römerberg Christmas Market, Kaiserdom</td><td>08:15 AM Session · Market: 10:00–21:00</td><td><span class="badge-status-open">🟢 Verified Open</span></td></tr>`;
const newMatrixD5 = `<tr><td><strong>Day 5</strong> (19 Dec)</td><td>Saturday</td><td>Amsterdam ➔ Cologne</td><td>Cologne Cathedral (Kölner Dom), Lindt Museum, Xmas Market</td><td>Dom 06:00–20:00 · Lindt 10:00–18:00 · Market 11:00–21:00</td><td><span class="badge-status-open">🟢 Verified Open</span></td></tr>`;
html = html.replace(oldMatrixD5, newMatrixD5);

const oldMatrixD6 = `<tr><td><strong>Day 6</strong> (20 Dec)</td><td>Sunday</td><td>Frankfurt am Main</td><td>Sunday Church Worship, Goethe House, Altstadt &amp; Main</td><td>10:00–18:00 (Goethe House open Sundays)</td><td><span class="badge-status-open">🟢 Verified Open</span></td></tr>`;
const newMatrixD6 = `<tr><td><strong>Day 6</strong> (20 Dec)</td><td>Sunday</td><td>Cologne &amp; Düsseldorf</td><td>Sunday Reflection, Düsseldorf 7 Themed Christmas Markets</td><td>Markets: 11:00–20:00 · Corneliusplatz 11:00–21:00</td><td><span class="badge-status-open">🟢 Verified Open</span></td></tr>`;
html = html.replace(oldMatrixD6, newMatrixD6);

const oldMatrixD7 = `<tr><td><strong>Day 7</strong> (21 Dec)</td><td>Monday</td><td>Cologne &amp; Düsseldorf</td><td>Kölner Dom, Lindt Chocolate Museum, 7 Xmas Markets</td><td>06:00–20:00 (Dom) · 10:00–18:00 (Lindt open Mon)</td><td><span class="badge-status-open">🟢 Verified Open</span></td></tr>`;
const newMatrixD7 = `<tr><td><strong>Day 7</strong> (21 Dec)</td><td>Monday</td><td>Cologne ➔ Frankfurt</td><td>High-Speed ICE to Frankfurt, Römerberg Market, Eiserner Steg</td><td>Market: 10:00–21:00 (Runs through 22 Dec) · Kaiserdom 09:00–20:00</td><td><span class="badge-status-open">🟢 Verified Open</span></td></tr>`;
html = html.replace(oldMatrixD7, newMatrixD7);

const oldMatrixD8 = `<tr><td><strong>Day 8</strong> (22 Dec)</td><td>Tuesday</td><td>Strasbourg</td><td>Strasbourg Cathedral, Petite France, Christkindelsmärik</td><td>08:30–18:00 (Cathedral) · Market: 11:00–20:00</td><td><span class="badge-status-open">🟢 Verified Open</span></td></tr>`;
const newMatrixD8 = `<tr><td><strong>Day 8</strong> (22 Dec)</td><td>Tuesday</td><td>Frankfurt am Main</td><td>Goethe House, Frankfurt Germany Temple (6:00 PM Session)</td><td>Goethe: 10:00–18:00 · Temple: Arrive 5:15 PM (6:00 PM Session)</td><td><span class="badge-status-open">🟢 Confirmed Reservation</span></td></tr>`;
html = html.replace(oldMatrixD8, newMatrixD8);

const oldMatrixD15 = `<tr><td><strong>Day 15</strong> (29 Dec)</td><td>Tuesday</td><td>Paris</td><td>Sacré-Cœur Basilica, Place du Tertre, Latin Quarter</td><td>06:30–22:30 (Sacré-Cœur open 365 days)</td><td><span class="badge-status-open">🟢 Verified Open</span></td></tr>`;
const newMatrixD15 = `<tr><td><strong>Day 15</strong> (29 Dec)</td><td>Tuesday</td><td>Paris</td><td>Paris France Temple (2:30 PM Session), Montmartre Sacré-Cœur</td><td>Temple: Arrive 2:00 PM (2:30 PM Session) · Sacré-Cœur 06:30–22:30</td><td><span class="badge-status-open">🟢 Confirmed Reservation</span></td></tr>`;
html = html.replace(oldMatrixD15, newMatrixD15);

fs.writeFileSync(indexHtmlPath, html, 'utf8');
console.log('Successfully updated index.html with new schedule, temple dossier, and NYE guide!');

// =========================================================================
// 4. Update js/app.js itineraryData
// =========================================================================
const updatedItineraryDataSlice = [
  // Day 4
  {
    "day": "Day 4",
    "date": "18 Dec 2026",
    "city": "The Hague & Amsterdam",
    "country": "Netherlands",
    "badgeClass": "badge-nl",
    "cardHighlight": "highlight-nl",
    "title": "The Hague Temple (9:30 AM Session) & Peace Palace",
    "activities": [
      "• <b>Morning (08:00 – 12:30):</b> 48-min Dutch NS Intercity train from Amsterdam Centraal to Den Haag / Zoetermeer. <b>The Hague Netherlands Temple: Arrive by 9:10 AM for the 9:30 AM Proxy Endowment Session (Confirmed Reservation for Jean Aquino)</b>. Reverent photos and peaceful reflection along the temple canal park.",
      "• <b>Afternoon (13:00 – 16:30):</b> Visit the historic <b>Peace Palace (Vredespaleis)</b> & World Peace Flame (Visitor Centre open 12:00–16:00) and the International Criminal Court (ICC) exterior.",
      "• <b>Evening (17:30 – 21:30):</b> Return train to Amsterdam Centraal. Festive dinner in Amsterdam; enjoy a restful 3rd night in Amsterdam—<b>no midnight coach fatigue!</b>"
    ],
    "admissionHtml": "<strong>Sightseeing Admission:</strong> <span class=\"admission-pill free\">✨ Free ($0 AUD)</span> (The Hague Temple, Peace Palace exterior & ICC)",
    "openingHtml": "<strong>🕒 Hours &amp; Open Status:</strong> <span class=\"opening-pill open\">🟢 The Hague Temple: 9:30 AM Session (Arrive 9:10 AM)</span> <span class=\"opening-pill open\">🟢 Peace Palace Visitor Centre: Open 12:00–16:00</span> <span class=\"opening-pill open\">🟢 ICC Exterior: Open 24/7</span>",
    "stayTitle": "Amsterdam Base (Night 3 of 3)",
    "stayDesc": "Central Amsterdam · Sleep in a real bed!",
    "transitInfo": "🚆 NS Intercity + RandstadRail Day Return",
    "coords": [52.0786, 4.3164]
  },
  // Day 5
  {
    "day": "Day 5",
    "date": "19 Dec 2026",
    "city": "Amsterdam ➔ Cologne",
    "country": "Germany",
    "badgeClass": "badge-de",
    "cardHighlight": "highlight-de",
    "title": "High-Speed Rail to Cologne: Kölner Dom & Lindt Chocolate Museum",
    "activities": [
      "• <b>Morning (08:30 – 11:45):</b> Well-rested morning in Amsterdam. Board direct daytime <b>DB ICE</b> high-speed train from Amsterdam Centraal to Köln Hbf (2h 38m). Check in at Cologne base hotel.",
      "• <b>Afternoon (12:30 – 16:30):</b> Step right out into the shadow of the monumental twin Gothic spires of <b>Cologne Cathedral</b> (<i>Kölner Dom</i>, UNESCO World Heritage site). Stroll love-locked <b>Hohenzollern Bridge</b> and explore the <b>Lindt Chocolate Museum</b> along the Rhine with its 3m golden chocolate fountain.",
      "• <b>Evening (17:00 – 21:00):</b> Experience the festive <b>Cologne Cathedral Christmas Market</b> (<i>Weihnachtsmarkt am Kölner Dom</i>), sampling fresh hot waffles, roasted chestnuts, and Kinderpunsch."
    ],
    "admissionHtml": "<strong>Sightseeing Admission:</strong> <span class=\"admission-pill paid\">🎟️ Lindt Chocolate Museum: €17.50 (~A$29 AUD)</span> <span class=\"admission-pill free\">✨ Cologne Cathedral Nave: Free ($0 AUD)</span> <span class=\"admission-pill free\">✨ Cologne Christmas Markets: Free ($0 AUD)</span>",
    "openingHtml": "<strong>🕒 Hours &amp; Open Status:</strong> <span class=\"opening-pill open\">🟢 Cologne Cathedral: Open 06:00–20:00 (Open 365 Days)</span> <span class=\"opening-pill open\">🟢 Lindt Chocolate Museum: Open 10:00–18:00</span> <span class=\"opening-pill open\">🟢 Cologne Markets: Open 11:00–21:00</span>",
    "stayTitle": "Cologne Base (Night 1 of 2)",
    "stayDesc": "Central Cologne, Germany · Steps to Cathedral",
    "transitInfo": "🚆 DB ICE Train Amsterdam ➔ Köln Hbf (2h 38m)",
    "coords": [50.9413, 6.9583]
  },
  // Day 6
  {
    "day": "Day 6",
    "date": "20 Dec 2026",
    "city": "Cologne & Düsseldorf",
    "country": "Germany",
    "badgeClass": "badge-de",
    "cardHighlight": "highlight-de",
    "title": "Sunday Reflection & Düsseldorf 7 Themed Christmas Markets",
    "activities": [
      "• <b>Morning (09:30 – 12:30):</b> Sunday church worship & spiritual reflection in Cologne; peaceful morning walk along the Rhine promenade.",
      "• <b>Afternoon (13:00 – 17:30):</b> Short 20-minute direct train to Düsseldorf Hbf. Walk the magical <b>7 Themed Christmas Markets Trail</b>: golden Art Nouveau angels at <i>Engelchen-Markt</i>, romantic crystal stars at <i>Sternchen-Markt</i>, and <i>Handwerker-Markt</i> before the historic Rathaus.",
      "• <b>Evening (17:30 – 20:30):</b> Stroll along the famous Königsallee canal and <i>Corneliusplatz Ice Rink</i>. Enjoy dinner in authentic 'Little Tokyo' (Immermannstraße); smooth 20-min train return to Cologne base."
    ],
    "admissionHtml": "<strong>Sightseeing Admission:</strong> <span class=\"admission-pill free\">✨ Free ($0 AUD)</span> (Düsseldorf 7 Christmas Markets & Königsallee)",
    "openingHtml": "<strong>🕒 Hours &amp; Open Status:</strong> <span class=\"opening-pill open\">🟢 Düsseldorf Markets: Open 11:00–20:00</span> <span class=\"opening-pill open\">🟢 Corneliusplatz Ice Rink: Open 11:00–21:00</span>",
    "stayTitle": "Cologne Base (Night 2 of 2)",
    "stayDesc": "Central Cologne, Germany",
    "transitInfo": "🚆 Regional Express Train (Köln ➔ Düsseldorf 20 mins)",
    "coords": [51.2256, 6.7719]
  },
  // Day 7
  {
    "day": "Day 7",
    "date": "21 Dec 2026",
    "city": "Cologne ➔ Frankfurt",
    "country": "Germany",
    "badgeClass": "badge-de",
    "cardHighlight": "highlight-de",
    "title": "High-Speed Rail to Frankfurt: Römerberg Christmas Market & Altstadt",
    "activities": [
      "• <b>Morning (09:00 – 10:30):</b> Check out of Cologne base. Board direct <b>DB ICE</b> high-speed train from Köln Hbf to Frankfurt am Main Hbf (fast 1h 05m journey). Check in at <b>Hotel Cristall</b> (Ottostrasse 3, 200m from Hbf).",
      "• <b>Afternoon (12:00 – 16:30):</b> Walk across the historic 1869 <b>Eiserner Steg</b> (iron footbridge) for panoramic skyline views of 'Mainhattan' over the Main River, explore Frankfurt Altstadt, and visit the historic Kaiserdom.",
      "• <b>Evening (16:30 – 21:00):</b> Celebrate at the centuries-old <b>Frankfurter Weihnachtsmarkt at Römerberg</b>—one of Germany’s grandest holiday markets, surrounded by medieval half-timbered houses and a 30m illuminated tree (last full day of the market!). Overnight at Hotel Cristall (Night 1 of 2)."
    ],
    "admissionHtml": "<strong>Sightseeing Admission:</strong> <span class=\"admission-pill free\">✨ Free ($0 AUD)</span> (Frankfurt Altstadt, Römerberg & Skyline)",
    "openingHtml": "<strong>🕒 Hours &amp; Open Status:</strong> <span class=\"opening-pill open\">🟢 Römerberg Christmas Market: Open 10:00–21:00 (Runs through 22 Dec)</span> <span class=\"opening-pill open\">🟢 Kaiserdom: Open 09:00–20:00</span>",
    "stayTitle": "Hotel Cristall - Frankfurt City (Night 1 of 2)",
    "stayDesc": "Ottostrasse 3, 60329 Frankfurt am Main",
    "transitInfo": "🚆 DB ICE High-Speed Train (Köln ➔ Frankfurt Hbf, 1h 05m)",
    "coords": [50.1109, 8.6821]
  },
  // Day 8
  {
    "day": "Day 8",
    "date": "22 Dec 2026",
    "city": "Frankfurt am Main",
    "country": "Germany",
    "badgeClass": "badge-de",
    "cardHighlight": "highlight-de",
    "title": "Frankfurt Cultural Discovery & Frankfurt Temple (6:00 PM Session)",
    "activities": [
      "• <b>Morning & Midday (09:30 – 15:30):</b> Leisurely buffet breakfast at Hotel Cristall. Cultural morning visiting the <b>Goethe House & Museum</b> (birthplace of Johann Wolfgang von Goethe) and exploring Museumsufer along the River Main; shopping along the famous Zeil pedestrian promenade.",
      "• <b>Late Afternoon & Evening (16:45 – 20:00):</b> 26-minute direct S-Bahn S5 from Frankfurt Hbf to Friedrichsdorf. <b>The Frankfurt Germany Temple: Arrive by 5:15 PM for the 6:00 PM Proxy Endowment Session (Confirmed Reservation for Jean Aristide Belleza Aquino)</b>. Reverent reflection and photography on illuminated temple grounds.",
      "• <b>Night (20:30 – 22:30):</b> Direct S-Bahn S5 return to Frankfurt Hbf. Celebration dinner in central Frankfurt; restful overnight stay at <b>Hotel Cristall</b> (Night 2 of 2 in Frankfurt)."
    ],
    "admissionHtml": "<strong>Sightseeing Admission:</strong> <span class=\"admission-pill free\">✨ Free ($0 AUD)</span> (Frankfurt Temple & Main River) · <span class=\"admission-pill optional\">Optional Goethe House: €10 (~A$17 AUD)</span>",
    "openingHtml": "<strong>🕒 Hours &amp; Open Status:</strong> <span class=\"opening-pill open\">🟢 Frankfurt Germany Temple: 6:00 PM Session (Arrive 5:15 PM)</span> <span class=\"opening-pill open\">🟢 Goethe House: Open 10:00–18:00</span>",
    "stayTitle": "Hotel Cristall - Frankfurt City (Night 2 of 2)",
    "stayDesc": "Ottostrasse 3, 60329 Frankfurt am Main",
    "transitInfo": "🚇 Frankfurt RMV / S-Bahn S5 Day Pass to Friedrichsdorf",
    "coords": [50.2589, 8.6437]
  }
];

// Read appJs and replace Days 4 through 8 in itineraryData
const day4Marker = `    "day": "Day 4",`;
const day9Marker = `    "day": "Day 9",`;

const d4Idx = appJs.indexOf(day4Marker);
const d9Idx = appJs.indexOf(day9Marker);

if (d4Idx !== -1 && d9Idx !== -1) {
  // Find opening brace before day 4
  const startBrace = appJs.lastIndexOf('  {', d4Idx);
  // Find opening brace for day 9
  const endBrace = appJs.lastIndexOf('  {', d9Idx);

  const replacementStr = updatedItineraryDataSlice.map(item => JSON.stringify(item, null, 4).replace(/^/gm, '  ')).join(',\n') + ',\n';
  appJs = appJs.slice(0, startBrace) + replacementStr + appJs.slice(endBrace);
  console.log('Successfully updated Days 4-8 in js/app.js itineraryData!');
}

// Update Day 15 in appJs (Paris France Temple)
const d15Marker = `    "day": "Day 15",`;
const d16Marker = `    "day": "Day 16",`;

const d15Idx = appJs.indexOf(d15Marker);
const d16Idx = appJs.indexOf(d16Marker);

if (d15Idx !== -1 && d16Idx !== -1) {
  const startBrace = appJs.lastIndexOf('  {', d15Idx);
  const endBrace = appJs.lastIndexOf('  {', d16Idx);

  const d15Item = {
    "day": "Day 15",
    "date": "29 Dec 2026",
    "city": "Paris",
    "country": "France",
    "badgeClass": "badge-fr",
    "cardHighlight": "highlight-france",
    "title": "Paris Arrival, Paris France Temple (2:30 PM Session) & Montmartre",
    "activities": [
      "• <b>Morning (06:40 – 11:30):</b> Arrive in Paris Bercy via overnight coach. Transfer to <b>Break & Home Paris Italie Porte de Choisy</b>. Drop luggage, refresh, and savor warm French croissants and café au lait.",
      "• <b>Afternoon (13:15 – 17:00):</b> RER C / Phébus bus transit to Le Chesnay. <b>Paris France Temple: Arrive by 2:00 PM for the 2:30 PM Proxy Endowment Session (Confirmed Reservation for Jean Aristide Belleza Aquino)</b>. Stroll the peaceful landscaped reflection gardens and visitors' courtyard.",
      "• <b>Evening (17:30 – 21:00):</b> Return to central Paris. Ascend the historic hill of <b>Montmartre</b> via the Funiculaire to the white-domed <b>Sacré-Cœur Basilica</b> for breathtaking panoramic winter views; Latin Quarter bistro dinner."
    ],
    "admissionHtml": "<strong>Sightseeing Admission:</strong> <span class=\"admission-pill free\">✨ Free ($0 AUD)</span> (Paris France Temple & Sacré-Cœur)",
    "openingHtml": "<strong>🕒 Hours &amp; Open Status:</strong> <span class=\"opening-pill open\">🟢 Paris France Temple: 2:30 PM Session (Arrive 2:00 PM)</span> <span class=\"opening-pill open\">🟢 Sacré-Cœur Basilica: Open 06:30–22:30 (Open 365 Days)</span>",
    "stayTitle": "Break & Home Paris Italie (CONFIRMED)",
    "stayDesc": "Porte de Choisy, Paris (Booked: Jean Aquino)",
    "transitInfo": "🚇 Paris Metro Line 14 + RER Line C",
    "coords": [48.8867, 2.3431]
  };

  const replacementD15 = JSON.stringify(d15Item, null, 4).replace(/^/gm, '  ') + ',\n';
  appJs = appJs.slice(0, startBrace) + replacementD15 + appJs.slice(endBrace);
  console.log('Successfully updated Day 15 in js/app.js itineraryData!');
}

fs.writeFileSync(appJsPath, appJs, 'utf8');

// =========================================================================
// 5. Update js/gallery-data.js
// =========================================================================
// Update Day 4, 5, 6, 7, 8 in gallery-data.js
// Day 4: Amsterdam (Night 3)
gData = gData.replace('stay: "Amsterdam Hostel Leidseplein (Night 2 of 2)",', 'stay: "Amsterdam Hostel Leidseplein (Night 3 of 3)",');
// Day 5: Cologne
gData = gData.replace('stay: "Hotel Cristall - Frankfurt City (Night 1 of 3)",', 'stay: "Cologne Base (Night 1 of 2)",');
// Day 6: Cologne
gData = gData.replace('stay: "Hotel Cristall - Frankfurt City (Night 2 of 3)",', 'stay: "Cologne Base (Night 2 of 2)",');
// Day 7: Frankfurt
gData = gData.replace('stay: "Hotel Cristall - Frankfurt City (Night 3 of 3)",', 'stay: "Hotel Cristall - Frankfurt City (Night 1 of 2)",');
// Day 8: Frankfurt
gData = gData.replace('stay: "B&B Hotel Kehl (Confirmed Base for Alsace)",', 'stay: "Hotel Cristall - Frankfurt City (Night 2 of 2)",');

fs.writeFileSync(galleryDataPath, gData, 'utf8');
console.log('Successfully updated gallery-data.js stays!');
