const fs = require('fs');
const path = require('path');

const indexHtmlPath = path.join(__dirname, '../index.html');
let html = fs.readFileSync(indexHtmlPath, 'utf8');

// 1. Add hero button if not present
const heroTarget = `<a href="#borderComplianceSection" class="btn btn-secondary" style="background: rgba(255, 255, 255, 0.15); color: #ffffff; border: 1px solid rgba(255, 255, 255, 0.35); backdrop-filter: blur(8px);">
          ⚖️ Border Control
        </a>`;

const heroReplacement = `<a href="#travelWellnessSection" class="btn btn-secondary" style="background: rgba(255, 255, 255, 0.15); color: #ffffff; border: 1px solid rgba(255, 255, 255, 0.35); backdrop-filter: blur(8px);">
          🛌 Travel Wellness &amp; Alternatives
        </a>
        <a href="#borderComplianceSection" class="btn btn-secondary" style="background: rgba(255, 255, 255, 0.15); color: #ffffff; border: 1px solid rgba(255, 255, 255, 0.35); backdrop-filter: blur(8px);">
          ⚖️ Border Control
        </a>`;

if (!html.includes('href="#travelWellnessSection"') && html.includes(heroTarget)) {
  html = html.replace(heroTarget, heroReplacement);
}

// 2. Add #travelWellnessSection before #borderComplianceSection
const wellnessSectionHtml = `
  <!-- TRAVEL WELLNESS, FATIGUE AUDIT & ALTERNATIVE ROUTING SECTION -->
  <section class="container wellness-container" id="travelWellnessSection">
    <div class="section-header wellness-header">
      <div class="section-tag-gold">🛌 Health &amp; Pacing Management</div>
      <h2>🛌 Travel Wellness, Fatigue Risk Audit &amp; Rest-Optimized Alternative</h2>
      <p>A proactive pacing and sleep-quality analysis of your 21-day winter journey across 4 countries. Identifying potential exhaustion bottlenecks and comparing your confirmed schedule with the recommended Cologne stopover at Hotel Madison am Dom.</p>
    </div>

    <!-- 1. Route Comparison: Original vs Cologne Alternative -->
    <div class="route-comparison-wrapper">
      <div class="route-comparison-header">
        <div>
          <h3>⚖️ Route Strategy Comparison: Original Schedule vs. Cologne Stopover</h3>
          <p>Addressing the acute Day 4/5 overnight coach fatigue and 08:15 AM Frankfurt Temple rush</p>
        </div>
        <span style="background: rgba(255,255,255,0.2); padding: 5px 14px; border-radius: 9999px; font-size: 0.82rem; font-weight: 800;">💡 Pacing Optimization</span>
      </div>

      <div class="route-comparison-body">
        <div class="route-options-grid">
          
          <!-- Option A: Original Route -->
          <div class="route-option-card standard">
            <div>
              <span class="route-badge-standard">Option A: Original Dossier Route</span>
              <h4 class="route-option-title">Overnight Sleeper Coach to Frankfurt (3 Nights Base)</h4>
              <ul class="route-timeline-steps">
                <li><b>16–18 Dec:</b> Amsterdam base (2 nights hostel) + The Hague Temple excursion.</li>
                <li><b>Night of 18 Dec (00:45 AM):</b> Overnight FlixBus sleeper coach from Amsterdam to Frankfurt (6.5 hrs).</li>
                <li><b>Day 5 (19 Dec):</b> Arrive Frankfurt Hbf at 07:15 AM ➔ <span style="color: #b91c1c; font-weight: 700;">Rush 22 km to Friedrichsdorf for 08:15 AM Temple session</span> on ~3–4 hrs of broken bus sleep.</li>
                <li><b>19–21 Dec:</b> Stay 3 nights in Frankfurt (Hotel Cristall).</li>
                <li><b>Day 7 (21 Dec):</b> Full-day twin-city roundtrip train excursion (Frankfurt ➔ Cologne ➔ Düsseldorf ➔ Frankfurt — 3 trains in 1 day).</li>
                <li><b>22 Dec:</b> Daytime train from Frankfurt south to Kehl (for Alsace).</li>
              </ul>
            </div>
            <div style="background: #f1f5f9; border-radius: 8px; padding: 10px 14px; font-size: 0.8rem; color: #475569;">
              ⚠️ <b>Fatigue Assessment:</b> Significant physical strain on Day 5 morning; long day trip on Day 7.
            </div>
          </div>

          <!-- Option B: Recommended Alternative -->
          <div class="route-option-card recommended">
            <div>
              <span class="route-badge-recommended">🌟 Option B: Recommended Rest-Optimized Route</span>
              <h4 class="route-option-title">Cologne Stopover at Hotel Madison am Dom (2 Nights)</h4>
              <ul class="route-timeline-steps">
                <li><b>16–19 Dec:</b> Amsterdam base (3 nights) + The Hague Temple on 18 Dec. <span style="color: #15803d; font-weight: 700;">No midnight coach! Sleep in a real bed.</span></li>
                <li><b>19 Dec Morning:</b> Relaxed 2h 38m daytime DB ICE train direct from Amsterdam Centraal to Köln Hbf. Check in at <b>Hotel Madison am Dom</b> (350m from Cathedral).</li>
                <li><b>19–21 Dec:</b> 2 nights in Cologne. Walk right outside to Cologne Cathedral &amp; Lindt Chocolate Museum; hop on a quick 20-min local train to Düsseldorf Christmas markets. <span style="color: #15803d; font-weight: 700;">Zero backtrack travel!</span></li>
                <li><b>21 Dec Morning:</b> Smooth 1-hour fast ICE train from Cologne to Frankfurt. Attend Frankfurt Temple session with <span style="color: #15803d; font-weight: 700;">full energy, peaceful focus &amp; 8+ hours of sleep</span>!</li>
                <li><b>21–22 Dec (or 21–23 Dec):</b> Frankfurt stay ➔ early morning direct train to Kehl / Strasbourg.</li>
              </ul>
            </div>
            <div style="background: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 8px; padding: 10px 14px; font-size: 0.8rem; color: #065f46;">
              ✅ <b>Fatigue Assessment:</b> Eliminates the redeye coach completely; guarantees 100% refreshed temple attendance; preserves full Schengen visa compliance.
            </div>
          </div>

        </div>

        <!-- Hotel Madison am Dom Spotlight Box -->
        <div class="hotel-booking-spotlight">
          <div class="hotel-spotlight-inner">
            <div class="hotel-spotlight-info">
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                <span style="background: #003580; color: white; font-size: 0.72rem; font-weight: 800; padding: 2px 7px; border-radius: 4px;">Booking.com Confirmed Option</span>
                <span style="color: #ca8a04; font-size: 0.85rem;">⭐⭐⭐ City Hotel</span>
              </div>
              <div class="hotel-spotlight-title">
                <span>🏨</span>
                <span>Hotel Madison am Dom (Cologne / Köln)</span>
              </div>
              <div class="hotel-spotlight-addr">
                📍 Ursulakloster 4-6, Altstadt-Nord, 50668 Cologne, Germany · <b>350m (4 mins walk) to Köln Hbf &amp; Kölner Dom</b>
              </div>
              <div class="hotel-spotlight-perks">
                <span class="hotel-perk-chip">✅ Check-in: 19 Dec 2026</span>
                <span class="hotel-perk-chip">✅ Check-out: 20/21 Dec 2026</span>
                <span class="hotel-perk-chip">✅ 2 Adults</span>
                <span class="hotel-perk-chip">✅ Steps to Christmas Markets</span>
                <span class="hotel-perk-chip">✅ Free WiFi &amp; Private Bath</span>
              </div>
            </div>
            <div>
              <a href="https://www.booking.com/hotel/de/madison-am-dom.en-gb.html?aid=304142&checkin=2026-12-19&checkout=2026-12-20&dest_id=-1810561&dest_type=city&group_adults=2&group_children=0&label=gen173bo-10CAEoggI46AdIM1gDaA-IAQGYATO4AQfIAQzYAQPoAQH4AQGIAgGYAgKoAgG4AoD-5NQGwAIB0gIkZDQ1NzEyNGUtMjM0My00NjMzLWIyZTUtYmI1Nzg3M2I4NTdm2AIB4AIB-Share-ElSzzHj%401788603780&no_rooms=1" 
                 target="_blank" rel="noopener noreferrer" class="btn-booking-direct" title="Open Hotel Madison am Dom on Booking.com">
                <span>View Booking Details on Booking.com</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- 2. The 6 Flagged Fatigue Bottlenecks Scorecard -->
    <h3 style="font-size: 1.25rem; font-weight: 800; color: #0f172a; margin-bottom: 16px;">
      🚦 Proactive Travel Fatigue Audit: 6 Flagged Instances &amp; Solutions
    </h3>

    <div class="fatigue-grid">
      
      <!-- Flag 1: Amsterdam to Frankfurt Temple Rush -->
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
      </div>

      <!-- Flag 2: Zurich to Paris Dawn Arrival -->
      <div class="fatigue-card high">
        <div>
          <div class="fatigue-card-top">
            <span class="fatigue-card-day">DAY 14 ➔ DAY 15 (28–29 DEC)</span>
            <span class="fatigue-level-badge high">🟠 HIGH RISK (8.5/10)</span>
          </div>
          <h4 class="fatigue-card-title">Zurich Overnight Sleeper ➔ Paris Dawn &amp; Montmartre Stairs</h4>
          <p class="fatigue-card-issue">
            Arriving at Paris Bercy at 06:40 AM in freezing winter darkness when hotel check-in is not until 15:00 (8-hour wait). Ascending 222 steep stairs to Sacré-Cœur while operating on bus sleep creates acute physical fatigue.
          </p>
        </div>
        <div class="fatigue-card-solution">
          <strong>💡 Solution:</strong> Take the <b>Funiculaire de Montmartre</b> (included with standard Metro/Navigo tickets) instead of climbing the 222 stairs. Enjoy a relaxed 2-hour café breakfast from 07:30 to 09:30 AM before sightseeing.
        </div>
      </div>

      <!-- Flag 3: London to Amsterdam Border Wake-up -->
      <div class="fatigue-card moderate">
        <div>
          <div class="fatigue-card-top">
            <span class="fatigue-card-day">DAY 1 ➔ DAY 2 (15–16 DEC)</span>
            <span class="fatigue-level-badge moderate">🟡 MODERATE-HIGH (7.5/10)</span>
          </div>
          <h4 class="fatigue-card-title">English Channel Crossing 02:00 AM Border Wake-Up</h4>
          <p class="fatigue-card-issue">
            UK/French border immigration requires all bus passengers to disembark at Dover/Calais between 01:30 and 03:00 AM for physical passport checks, fragmenting core REM sleep before a full walking day in Amsterdam.
          </p>
        </div>
        <div class="fatigue-card-solution">
          <strong>💡 Solution:</strong> Pack a 3D contoured eye mask and memory foam neck pillow. Keep passport in a chest pouch for fast processing. Take a 90-minute afternoon rest in the Amsterdam hostel before the evening Light Festival.
        </div>
      </div>

      <!-- Flag 4: Paris Walking Marathon -->
      <div class="fatigue-card moderate">
        <div>
          <div class="fatigue-card-top">
            <span class="fatigue-card-day">DAY 16 (30 DEC)</span>
            <span class="fatigue-level-badge moderate">🟡 MODERATE-HIGH (7.5/10)</span>
          </div>
          <h4 class="fatigue-card-title">The Paris Walking Marathon (Louvre + Arc de Triomphe Climb)</h4>
          <p class="fatigue-card-issue">
            Louvre museum visits involve 8–10 km of indoor marble walking, followed by the Tuileries, Champs-Élysées, and climbing 284 narrow spiral steps of the Arc de Triomphe (exceeding 25,000 steps in one day).
          </p>
        </div>
        <div class="fatigue-card-solution">
          <strong>💡 Solution:</strong> Focus your Louvre visit on the 3 primary Denon Wing masterworks (Mona Lisa, Winged Victory, Venus de Milo). Use the <b>Arc de Triomphe elevator</b> to the attic mezzanine to skip the stair climb!
        </div>
      </div>

      <!-- Flag 5: New Year's Eve Outdoor Exposure -->
      <div class="fatigue-card moderate">
        <div>
          <div class="fatigue-card-top">
            <span class="fatigue-card-day">DAY 17 ➔ DAY 18 (31 DEC – 01 JAN)</span>
            <span class="fatigue-level-badge moderate">🟡 MODERATE-HIGH (7.5/10)</span>
          </div>
          <h4 class="fatigue-card-title">New Year's Eve Midnight Exposure &amp; Late Bedtime</h4>
          <p class="fatigue-card-issue">
            Standing outside on Champs-Élysées pavement for 4+ hours in 0°C–4°C winter temperatures, followed by dense post-midnight Metro crowds. Getting to bed around 02:30–03:00 AM can cause cumulative exhaustion.
          </p>
        </div>
        <div class="fatigue-card-solution">
          <strong>💡 Solution:</strong> Wear thermal base layers (HEATTECH) and bring pocket hand-warmers. Sleep in late on New Year's Day (Day 18) until 10:30 AM—the afternoon Seine river cruise is already perfectly structured for rest!
        </div>
      </div>

      <!-- Flag 6: Paris to London Eurotunnel -->
      <div class="fatigue-card moderate">
        <div>
          <div class="fatigue-card-top">
            <span class="fatigue-card-day">DAY 20 ➔ DAY 21 (03–04 JAN)</span>
            <span class="fatigue-level-badge moderate">🟡 MODERATE-HIGH (7.5/10)</span>
          </div>
          <h4 class="fatigue-card-title">Final Paris Night Coach &amp; 03:00 AM Eurotunnel Wake-Up</h4>
          <p class="fatigue-card-issue">
            Middle-of-the-night border control in Calais/Folkestone before arriving in London Victoria at 07:25 AM with luggage, followed by an onward regional train trip to Southampton.
          </p>
        </div>
        <div class="fatigue-card-solution">
          <strong>💡 Solution:</strong> Store bags at Paris Bercy terminal on Day 20 afternoon to walk hands-free. Have a sit-down hot English breakfast at Victoria Station on arrival before taking the quiet train to Southampton.
        </div>
      </div>

    </div>

  </section>
`;

const complianceTarget = `  <!-- SCHENGEN BORDER COMPLIANCE & LEGAL ARTICLES SECTION -->
  <section class="container compliance-container" id="borderComplianceSection">`;

if (!html.includes('id="travelWellnessSection"')) {
  html = html.replace(complianceTarget, wellnessSectionHtml + '\n' + complianceTarget);
}

// 3. Add fatigue alerts on Day 4 & Day 5 in Table and Cards view in index.html
const day4TableAdmission = `<span class="table-day-badge">Day 4</span>`;
const day5TableAdmission = `<span class="table-day-badge">Day 5</span>`;

// Day 4 Table notice
const d4TableNotice = `<div style="margin-top: 6px;"><a href="#travelWellnessSection" class="fatigue-alert-link">⚠️ Fatigue Notice: Overnight Coach &amp; Temple Timing ➔ View Cologne Hotel Alternative</a></div>`;
if (!html.includes(d4TableNotice)) {
  const d4Idx = html.indexOf(day4TableAdmission);
  if (d4Idx !== -1) {
    const endRowIdx = html.indexOf('</tr>', d4Idx);
    const planCloseIdx = html.lastIndexOf('</td>', endRowIdx);
    html = html.slice(0, planCloseIdx) + '  ' + d4TableNotice + '\n              ' + html.slice(planCloseIdx);
  }
}

// Day 5 Table notice
const d5TableNotice = `<div style="margin-top: 6px;"><a href="#travelWellnessSection" class="fatigue-alert-link">⚠️ Fatigue Notice: 07:15 Arrival vs 08:15 Temple ➔ View Cologne Hotel Alternative</a></div>`;
if (!html.includes(d5TableNotice)) {
  const d5Idx = html.indexOf(day5TableAdmission);
  if (d5Idx !== -1) {
    const endRowIdx = html.indexOf('</tr>', d5Idx);
    const planCloseIdx = html.lastIndexOf('</td>', endRowIdx);
    html = html.slice(0, planCloseIdx) + '  ' + d5TableNotice + '\n              ' + html.slice(planCloseIdx);
  }
}

// Day 4 Card notice
const d4CardDay = `<span class="card-day-badge">Day 4</span>`;
if (html.includes(d4CardDay)) {
  const d4CardIdx = html.indexOf(d4CardDay);
  const cardSideIdx = html.indexOf('<div class="day-card-side">', d4CardIdx);
  if (cardSideIdx !== -1) {
    const prevDivIdx = html.lastIndexOf('</div>', cardSideIdx);
    const cardSnippet = html.slice(d4CardIdx, cardSideIdx);
    if (!cardSnippet.includes('fatigue-alert-link')) {
      html = html.slice(0, prevDivIdx) + '  ' + d4TableNotice + '\n            ' + html.slice(prevDivIdx);
    }
  }
}

// Day 5 Card notice
const d5CardDay = `<span class="card-day-badge">Day 5</span>`;
if (html.includes(d5CardDay)) {
  const d5CardIdx = html.indexOf(d5CardDay);
  const cardSideIdx = html.indexOf('<div class="day-card-side">', d5CardIdx);
  if (cardSideIdx !== -1) {
    const prevDivIdx = html.lastIndexOf('</div>', cardSideIdx);
    const cardSnippet = html.slice(d5CardIdx, cardSideIdx);
    if (!cardSnippet.includes('fatigue-alert-link')) {
      html = html.slice(0, prevDivIdx) + '  ' + d5TableNotice + '\n            ' + html.slice(prevDivIdx);
    }
  }
}

fs.writeFileSync(indexHtmlPath, html, 'utf8');
console.log('Successfully added travel wellness section and fatigue alerts to index.html!');
