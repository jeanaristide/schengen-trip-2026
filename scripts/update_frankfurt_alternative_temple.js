const fs = require('fs');
const path = require('path');

const indexHtmlPath = path.join(__dirname, '../index.html');
const appJsPath = path.join(__dirname, '../js/app.js');

// 1. Update index.html
let html = fs.readFileSync(indexHtmlPath, 'utf8');

// Update Flag 1 in travelWellnessSection
const oldFlag1 = `      <!-- Flag 1: Amsterdam to Frankfurt Temple Rush -->
      <div class="fatigue-card critical">
        <div>
          <div class="fatigue-card-top">
            <span class="fatigue-card-day">DAY 4 ➔ DAY 5 (18–19 DEC)</span>
            <span class="fatigue-level-badge critical">🔴 CRITICAL RISK (10/10)</span>
          </div>
          <h4 class="fatigue-card-title">Amsterdam Midnight Coach ➔ 8:15 AM Frankfurt Temple Rush</h4>
          <p class="fatigue-card-issue">
            Departing Amsterdam at 00:45 AM and arriving in Frankfurt at 07:15 AM leaves only 60 minutes to collect luggage, navigate S-Bahn S5 to Friedrichsdorf (22 km away), dress in Sunday attire, and enter a sacred temple session on ~3 hours of disrupted bus sleep.
          </p>
        </div>
        <div class="fatigue-card-solution">
          <strong>💡 Solution:</strong> Switch to <b>Option B (Hotel Madison am Dom in Cologne)</b> to eliminate the bus completely, OR reschedule the Frankfurt Temple session to Saturday afternoon (14:00 / 15:30) or Sunday morning (Day 6).
        </div>
      </div>`;

const newFlag1 = `      <!-- Flag 1: Amsterdam to Frankfurt Temple Rush -->
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

if (html.includes(oldFlag1)) {
  html = html.replace(oldFlag1, newFlag1);
}

// Update Day 5 Table Row in index.html
const oldDay5TablePlan = `<div class="table-activity-item">• <b>Early Morning (07:15 – 12:00):</b> Arrive in Frankfurt am Main around 07:15 AM via overnight coach. Quick bag drop at Hotel Cristall (200m from Hbf) or direct transit/taxi to Friedrichsdorf. Attend scheduled sacred <b>Temple Endowment Session at 08:15 AM</b> at <b>The Frankfurt Germany Temple</b> (Talstraße 10, Friedrichsdorf). Reverent reflection and photography on temple grounds.</div>`;

const newDay5TablePlan = `<div class="table-activity-item">• <b>Early Morning (07:15 – 12:00):</b> Arrive in Frankfurt am Main around 07:15 AM via overnight coach. Bag drop at Hotel Cristall (200m from Hbf). <i>Attendance at the 08:15 AM session is completely flexible:</i> attend if feeling energetic, or rest and sleep in because you hold a <b>Confirmed Alternative Booking on Tuesday 22 Dec @ 6:00 PM (Arrive 5:15 PM)</b>!</div>`;

if (html.includes(oldDay5TablePlan)) {
  html = html.replace(oldDay5TablePlan, newDay5TablePlan);
}

// Update Day 5 Cards in index.html
const oldDay5CardPlan = `<div class="card-activity-item">• <b>Early Morning (07:15 – 12:00):</b> Arrive in Frankfurt am Main around 07:15 AM via overnight coach. Quick bag drop at Hotel Cristall (200m from Hbf) or direct transit/taxi to Friedrichsdorf. Attend scheduled sacred <b>Temple Endowment Session at 08:15 AM</b> at <b>The Frankfurt Germany Temple</b> (Talstraße 10, Friedrichsdorf). Reverent reflection and photography on temple grounds.</div>`;

const newDay5CardPlan = `<div class="card-activity-item">• <b>Early Morning (07:15 – 12:00):</b> Arrive in Frankfurt am Main around 07:15 AM via overnight coach. Bag drop at Hotel Cristall (200m from Hbf). <i>Attendance at the 08:15 AM session is flexible:</i> attend if energetic, or rest and take it easy because you hold a <b>Confirmed Alternative Booking on Tuesday 22 Dec @ 6:00 PM (Arrive 5:15 PM)</b>!</div>`;

if (html.includes(oldDay5CardPlan)) {
  html = html.replace(oldDay5CardPlan, newDay5CardPlan);
}

// Update Day 8 Table Row in index.html to include confirmed alternative temple session
const oldDay8TablePlan = `<div class="table-plan-title">Strasbourg: Capital of Christmas (Staying in Kehl Base)</div>
                <div class="table-activities-list">
        <div class="table-activity-item">• <b>Morning (09:30 – 11:30):</b> Complimentary buffet breakfast at Hotel Cristall. Board direct daytime <b>ICE / TGV</b> train south through the Black Forest valley to Kehl / Strasbourg (1h 45m).</div>
        <div class="table-activity-item">• <b>Afternoon (12:30 – 16:00):</b> Check in at <b>B&B Hotel Kehl</b> (staying in Kehl across the Rhine as our strategic base). Board the cross-border <b>Strasbourg Tram Line D</b> across the Rhine into France (15 mins). Explore fairytale <b>Petite France</b> with historic half-timbered tanners' houses and Ponts Couverts.</div>
        <div class="table-activity-item">• <b>Evening (16:30 – 21:00):</b> Tour Strasbourg, the <b>'Capital of Christmas'</b> (<i>Capitale de Noël</i>). Gaze at the monumental 30-meter Great Christmas Tree at Place Kléber and the historic <b>Christkindelsmärik</b> surrounding the pink sandstone Cathedral.</div>
      </div>`;

const newDay8TablePlan = `<div class="table-plan-title">Strasbourg (Kehl Base) · Confirmed Alternative Frankfurt Temple Session (6:00 PM)</div>
                <div class="table-activities-list">
        <div class="table-activity-item">• <b>Option A (Standard Morning Alsace Transfer):</b> If Frankfurt Temple completed on Saturday, take morning ICE train south to Kehl/Strasbourg (1h 45m) for a full afternoon exploring Petite France, Place Kléber Great Tree, and Christkindelsmärik.</div>
        <div class="table-activity-item">• <b>Option B (⭐ Confirmed Alternative Temple Schedule in Frankfurt):</b><br>
          &nbsp;&nbsp;• <i>Morning &amp; Midday (10:00 – 16:30):</i> Check out of Hotel Cristall (bags safely stored). Relaxed morning stroll through Frankfurt Altstadt, River Main, or shopping along the Zeil.<br>
          &nbsp;&nbsp;• <i>Late Afternoon &amp; Evening (16:45 – 20:00):</i> 26-min S-Bahn S5 from Frankfurt Hbf to Friedrichsdorf. <b>Frankfurt Germany Temple Proxy Endowment Session: Arrive by 5:15 PM for the 6:00 PM Session (Confirmed Booking for Jean Aquino)</b>.<br>
          &nbsp;&nbsp;• <i>Night (20:30 – 22:30):</i> S-Bahn S5 back to Frankfurt Hbf, collect luggage, board fast DB ICE train south to Kehl/Strasbourg base (1h 45m) for check-in at <b>B&B Hotel Kehl</b>.</div>
      </div>`;

if (html.includes(oldDay8TablePlan)) {
  html = html.replace(oldDay8TablePlan, newDay8TablePlan);
}

// Update Day 8 Cards in index.html
const oldDay8CardPlan = `<h4 class="card-day-theme">Strasbourg: Capital of Christmas (Staying in Kehl Base)</h4>
          <div class="card-activities-list">
          <div class="card-activity-item">• <b>Morning (09:30 – 11:30):</b> Complimentary buffet breakfast at Hotel Cristall. Board direct daytime <b>ICE / TGV</b> train south through the Black Forest valley to Kehl / Strasbourg (1h 45m).</div>
          <div class="card-activity-item">• <b>Afternoon (12:30 – 16:00):</b> Check in at <b>B&B Hotel Kehl</b> (staying in Kehl across the Rhine as our strategic base). Board the cross-border <b>Strasbourg Tram Line D</b> across the Rhine into France (15 mins). Explore fairytale <b>Petite France</b> with historic half-timbered tanners' houses and Ponts Couverts.</div>
          <div class="card-activity-item">• <b>Evening (16:30 – 21:00):</b> Tour Strasbourg, the <b>'Capital of Christmas'</b> (<i>Capitale de Noël</i>). Gaze at the monumental 30-meter Great Christmas Tree at Place Kléber and the historic <b>Christkindelsmärik</b> surrounding the pink sandstone Cathedral.</div>
        </div>`;

const newDay8CardPlan = `<h4 class="card-day-theme">Strasbourg (Kehl Base) · Confirmed Alternative Frankfurt Temple Session (6:00 PM)</h4>
          <div class="card-activities-list">
          <div class="card-activity-item">• <b>Option A (Standard Morning Alsace Transfer):</b> If temple completed on Saturday, take morning ICE train south to Kehl/Strasbourg (1h 45m) for full afternoon at Strasbourg Christmas Markets.</div>
          <div class="card-activity-item">• <b>Option B (⭐ Confirmed Alternative Temple Schedule in Frankfurt):</b><br>
            &nbsp;&nbsp;• <i>Daytime:</i> Check out Hotel Cristall (bags stored). Relaxed morning exploring Frankfurt Altstadt &amp; River Main.<br>
            &nbsp;&nbsp;• <i>Late Afternoon:</i> S-Bahn S5 to Friedrichsdorf. <b>Frankfurt Temple Proxy Endowment: Arrive 5:15 PM for 6:00 PM Session (Confirmed Booking for Jean Aquino)</b>.<br>
            &nbsp;&nbsp;• <i>Evening:</i> S5 to Frankfurt Hbf, collect bags, fast evening ICE train south to Kehl base (1h 45m). Check-in at <b>B&B Hotel Kehl</b>.</div>
        </div>`;

if (html.includes(oldDay8CardPlan)) {
  html = html.replace(oldDay8CardPlan, newDay8CardPlan);
}

fs.writeFileSync(indexHtmlPath, html, 'utf8');
console.log('Successfully updated index.html with alternative Frankfurt temple schedule!');

// 2. Update js/app.js itineraryData for Day 5 and Day 8
let appJs = fs.readFileSync(appJsPath, 'utf8');

// Update Day 5 in js/app.js
const oldAppDay5Activity = `"• <b>Early Morning (07:15 – 12:00):</b> Arrive in Frankfurt am Main around 07:15 AM via overnight coach. Quick bag drop at Hotel Cristall (200m from Hbf) or direct transit/taxi to Friedrichsdorf. Attend scheduled sacred <b>Temple Endowment Session at 08:15 AM</b> at <b>The Frankfurt Germany Temple</b> (Talstraße 10, Friedrichsdorf). Reverent reflection and photography on temple grounds.",`;

const newAppDay5Activity = `"• <b>Early Morning (07:15 – 12:00):</b> Arrive in Frankfurt am Main around 07:15 AM via overnight coach. Bag drop at Hotel Cristall (200m from Hbf). Attendance at 08:15 AM session is flexible: attend if energetic, or rest and sleep in because you hold a <b>Confirmed Alternative Booking on Tuesday 22 Dec @ 6:00 PM (Arrive 5:15 PM)</b>!",`;

if (appJs.includes(oldAppDay5Activity)) {
  appJs = appJs.replace(oldAppDay5Activity, newAppDay5Activity);
}

// Update Day 8 in js/app.js
const oldAppDay8Title = `"title": "Strasbourg: Capital of Christmas",`;
const newAppDay8Title = `"title": "Strasbourg (Kehl Base) · Confirmed Alternative Frankfurt Temple Session (6:00 PM)",`;

if (appJs.includes(oldAppDay8Title)) {
  appJs = appJs.replace(oldAppDay8Title, newAppDay8Title);
}

const oldAppDay8Activities = `    "activities": [
      "• <b>Morning (09:30 – 11:30):</b> Complimentary buffet breakfast at Hotel Cristall. Board direct daytime <b>ICE / TGV</b> train south through the Black Forest valley to Kehl / Strasbourg (1h 45m).",
      "• <b>Afternoon (12:30 – 16:00):</b> Check in at <b>B&B Hotel Kehl</b>. Board the cross-border <b>Strasbourg Tram Line D</b> across the Rhine into France. Explore fairytale <b>Petite France</b> with historic half-timbered tanners' houses and Ponts Couverts.",
      "• <b>Evening (16:30 – 21:00):</b> Tour Strasbourg, the <b>'Capital of Christmas'</b> (<i>Capitale de Noël</i>). Gaze at the monumental 30-meter Great Christmas Tree at Place Kléber and the historic <b>Christkindelsmärik</b> surrounding the pink sandstone Cathedral."
    ],`;

const newAppDay8Activities = `    "activities": [
      "• <b>Option A (Standard Morning Alsace Transfer):</b> If temple completed on Saturday, take morning ICE train south to Kehl/Strasbourg (1h 45m) for a full afternoon exploring Petite France, Place Kléber Great Tree, and Christkindelsmärik.",
      "• <b>Option B (⭐ Confirmed Alternative Temple Schedule in Frankfurt):</b><br>&nbsp;&nbsp;• <i>Morning & Midday (10:00 – 16:30):</i> Check out of Hotel Cristall (bags safely stored). Relaxed morning in Frankfurt Altstadt & River Main.<br>&nbsp;&nbsp;• <i>Late Afternoon & Evening (16:45 – 20:00):</i> 26-min S-Bahn S5 to Friedrichsdorf. <b>Frankfurt Germany Temple Proxy Endowment Session: Arrive by 5:15 PM for the 6:00 PM Session (Confirmed Booking for Jean Aquino)</b>.<br>&nbsp;&nbsp;• <i>Night (20:30 – 22:30):</i> S5 to Frankfurt Hbf, collect luggage, board fast DB ICE train south to Kehl/Strasbourg base (1h 45m) for check-in at <b>B&B Hotel Kehl</b>."
    ],`;

if (appJs.includes(oldAppDay8Activities)) {
  appJs = appJs.replace(oldAppDay8Activities, newAppDay8Activities);
}

fs.writeFileSync(appJsPath, appJs, 'utf8');
console.log('Successfully updated js/app.js with alternative Frankfurt temple schedule!');
