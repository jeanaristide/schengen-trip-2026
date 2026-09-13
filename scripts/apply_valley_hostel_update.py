#!/usr/bin/env python3
import json
import re

# 1. READ & UPDATE index.html
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Replace Table rows Days 11-15
table_rows_11_15 = '''            <tr class="itinerary-table-row row-badge-ch" data-country="Switzerland">
              <td class="col-table-day">
                <span class="table-day-badge">Day 11</span>
                <span class="table-date-str">25 Dec 2026</span>
              </td>
              <td class="col-table-loc">
                <div class="table-loc-name">Strasbourg ➔ Lucerne ➔ Lauterbrunnen</div>
                <span class="badge-country badge-ch">Switzerland</span>
              </td>
              <td class="col-table-plan">
                <div class="table-plan-title">Christmas Arrival via Lucerne, Brünig Pass &amp; Lauterbrunnen Valley</div>
                <div class="table-activities-list">
        <div class="table-activity-item">• <b>Morning (04:05 – 11:30):</b><ul class="activity-sublist"><li class="transit-bullet-item">Board direct FlixBus Route N846 from Strasbourg (04:05 AM, Seats 11C &amp; 11D); arrive Lucerne Bus Station at 07:10 AM</li><li class="sight-bullet-item"><span class="has-photo-preview" title="📸 Hover to preview photo">Zentralbahn scenic panoramic train over snow-covered Brünig Pass to Interlaken Ost</span></li><li class="transit-bullet-item">Swap platforms for BOB local train climbing into the Lauterbrunnen valley</li></ul></div>
        <div class="table-activity-item">• <b>Afternoon (12:00 – 16:30):</b><ul class="activity-sublist"><li class="transit-bullet-item">Check into Valley Hostel (Fuhren 423 · 5 min walk from station)</li><li class="sight-bullet-item"><span class="has-photo-preview" title="📸 Hover to preview photo">Walk past the village floor to Staubbach Falls Viewpoint to witness freezing alpine mist crystallizing along the 297m sheer rock face</span></li></ul></div>
        <div class="table-activity-item">• <b>Evening (17:00 – 20:30):</b><ul class="activity-sublist"><li class="transit-bullet-item">Local grocery stores &amp; restaurants close early on Christmas night</li><li class="transit-bullet-item">Enjoy a warm, relaxed holiday dinner utilizing Valley Hostel\'s fully equipped communal kitchen</li></ul></div>
      </div>
                <div class="table-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (Staubbach Falls &amp; Lauterbrunnen village walking)</div>
                <div class="table-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 FlixBus N846: Departs 04:05</span> <span class="opening-pill open">🟢 Zentralbahn &amp; BOB: Regular holiday schedule</span> <span class="opening-pill open">🟢 Staubbach Falls: Open 24/7</span></div>
              </td>
              
              <td class="col-table-nav">
                <div class="table-nav-list">
    <div class="nav-step-card">
      <div class="nav-step-header">
        <span class="nav-step-spot">Strasbourg ➔ Lucerne Bus Station</span>
        <span class="nav-step-badge">🚌 FlixBus N846 (04:05–07:10)</span>
      </div>
      <div class="nav-step-route"><strong>Transit:</strong> Direct FlixBus N846 departing Strasbourg Central Bus Station (Place de l\'Étoile) at 04:05 AM</div>
      <div class="nav-step-desc"><strong>Directions:</strong> Catch up on sleep during smooth 3-hour direct overnight transit across the Swiss border to Lucerne Inseliquai Bus Station.</div>
      <div class="nav-step-tip">💡 <strong>Day Tip:</strong> Seats 11C &amp; 11D. Arrive cleanly at Lucerne at 07:10 AM with fresh alpine morning air.</div>
    </div>
  
    <div class="nav-step-card">
      <div class="nav-step-header">
        <span class="nav-step-spot">Lucerne ➔ Interlaken Ost ➔ Lauterbrunnen</span>
        <span class="nav-step-badge">🚆 Zentralbahn + BOB (2h 20m)</span>
      </div>
      <div class="nav-step-route"><strong>Transit:</strong> Walk 2 mins to Lucerne main station; board Zentralbahn Luzern-Interlaken Express over Brünig Pass to Interlaken Ost, then BOB train to Lauterbrunnen</div>
      <div class="nav-step-desc"><strong>Directions:</strong> Panoramic scenic train climbs over the snow-covered Brünig Pass. At Interlaken Ost, cross platform to the yellow/blue BOB train climbing into Lauterbrunnen valley.</div>
      <div class="nav-step-tip">💡 <strong>Day Tip:</strong> Sit on the right side of the Zentralbahn for postcard views of Lake Sarnen, Lake Lungern, and frozen alpine peaks.</div>
    </div>
  
    <div class="nav-step-card">
      <div class="nav-step-header">
        <span class="nav-step-spot">Lauterbrunnen Station ➔ Valley Hostel</span>
        <span class="nav-step-badge">🏨 Check-in (5m Walk)</span>
      </div>
      <div class="nav-step-route"><strong>Transit:</strong> Short 400m walk along the main village street (Fuhren 423)</div>
      <div class="nav-step-desc"><strong>Directions:</strong> Walk south from the station past the bakery; Valley Hostel is right along the road with views of Staubbach Falls.</div>
      <div class="nav-step-tip">💡 <strong>Day Tip:</strong> Drop your bags and complete check-in (Night 1 of 4). Unpack in your cosy alpine base.</div>
    </div>
  
    <div class="nav-step-card">
      <div class="nav-step-header">
        <span class="nav-step-spot">Valley Hostel ➔ Staubbach Falls Viewpoint</span>
        <span class="nav-step-badge">❄️ 297m Frozen Mist</span>
      </div>
      <div class="nav-step-route"><strong>Transit:</strong> 5-min gentle stroll along the valley floor</div>
      <div class="nav-step-desc"><strong>Directions:</strong> Walk toward the roaring 297-meter waterfall cascading down the sheer vertical rock wall.</div>
      <div class="nav-step-tip">💡 <strong>Day Tip:</strong> Witness freezing alpine mist crystallizing along the massive rock face. In the evening, cook a warm holiday dinner in the hostel\'s fully equipped communal kitchen!</div>
    </div>
  </div>
              </td>
              <td class="col-table-stay">
                <div class="table-hotel-name">Valley Hostel, Lauterbrunnen (Night 1 of 4 · Check-in 25 Dec)</div>
                <div class="table-hotel-addr">Fuhren 423, 3822 Lauterbrunnen, Switzerland (Free Communal Kitchen)</div>
                <div class="table-transit-mode"><i>🚌 FlixBus N846 (04:05–07:10) + 🚆 Zentralbahn (Brünig Pass) + 🚆 BOB Train</i></div>
              </td>
              <td class="col-table-action">
                <button type="button" class="btn-table-photos" title="View Photos of Lauterbrunnen">📸 Photos</button>
              </td>
            </tr>
            <tr class="itinerary-table-row row-badge-ch" data-country="Switzerland">
              <td class="col-table-day">
                <span class="table-day-badge">Day 12</span>
                <span class="table-date-str">26 Dec 2026</span>
              </td>
              <td class="col-table-loc">
                <div class="table-loc-name">Grindelwald &amp; Kleine Scheidegg</div>
                <span class="badge-country badge-ch">Switzerland</span>
              </td>
              <td class="col-table-plan">
                <div class="table-plan-title">Grindelwald-First Cliff Walk &amp; Kleine Scheidegg (CLOY Mountain Pass)</div>
                <div class="table-activities-list">
        <div class="table-activity-item">• <b>Morning (08:30 – 13:00):</b><ul class="activity-sublist"><li class="transit-bullet-item">Catch mountain railway to Grindelwald; board continuous 6-seater gondola soaring up to Grindelwald-First (2,168m)</li><li class="sight-bullet-item"><span class="has-photo-preview" title="📸 Hover to preview photo">Step out onto the suspended First Cliff Walk by Tissot for endless snowy mountain horizons facing the icy Eiger North Face</span></li></ul></div>
        <div class="table-activity-item">• <b>Afternoon (13:30 – 16:30):</b><ul class="activity-sublist"><li class="transit-bullet-item">Travel down to Grindelwald village and board the historic cogwheel train up to Kleine Scheidegg pass (2,061m)</li><li class="sight-bullet-item"><span class="has-photo-preview" title="📸 Hover to preview photo">Kleine Scheidegg: High mountain pass where Captain Ri &amp; Yoon Se-ri famously watched paragliders cruise over snowy peaks</span></li></ul></div>
        <div class="table-activity-item">• <b>Evening (17:00 – 20:30):</b><ul class="activity-sublist"><li class="transit-bullet-item">Direct Wengernalpbahn cogwheel train descent via Wengen down into Lauterbrunnen valley</li><li class="transit-bullet-item">Return to Valley Hostel to unwind after a full day of high alpine summits (Night 2 of 4)</li></ul></div>
      </div>
                <div class="table-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ First Cliff Walk walkway is Free</span> <em>(Included with mountain transport)</em></div>
                <div class="table-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 Grindelwald-First Gondola: 08:30–16:30</span> <span class="opening-pill open">🟢 Wengernalpbahn Cogwheel: Active daily</span> <span class="opening-pill open">🟢 Kleine Scheidegg: Open 24/7</span></div>
              </td>
              
              <td class="col-table-nav">
                <div class="table-nav-list">
    <div class="nav-step-card">
      <div class="nav-step-header">
        <span class="nav-step-spot">Lauterbrunnen ➔ Grindelwald Terminal & First</span>
        <span class="nav-step-badge">🚆 BOB + 🚠 Gondola</span>
      </div>
      <div class="nav-step-route"><strong>Transit:</strong> BOB train from Lauterbrunnen to Zweilütschinen (swap to Grindelwald, 35m) or direct bus</div>
      <div class="nav-step-desc"><strong>Directions:</strong> From Grindelwald village, board the continuous 6-seater gondola soaring up through snowy pine forests to Grindelwald-First at 2,168m.</div>
      <div class="nav-step-tip">💡 <strong>Day Tip:</strong> Sit back and enjoy the dramatic winter mountain panorama as you ascend into the high alpine zone.</div>
    </div>
  
    <div class="nav-step-card">
      <div class="nav-step-header">
        <span class="nav-step-spot">Grindelwald-First ➔ First Cliff Walk by Tissot</span>
        <span class="nav-step-badge">🌉 Cantilever Abyss</span>
      </div>
      <div class="nav-step-route"><strong>Transit:</strong> Summit walking walkway starting right next to the gondola top station</div>
      <div class="nav-step-desc"><strong>Directions:</strong> Step onto the metal cliff-clinging walkway and the 45-meter suspended cantilever observation bridge hanging over the mountain abyss.</div>
      <div class="nav-step-tip">💡 <strong>Day Tip:</strong> Endless snowy horizons directly facing the icy Eiger North Face! Included free with gondola ticket.</div>
    </div>
  
    <div class="nav-step-card">
      <div class="nav-step-header">
        <span class="nav-step-spot">Grindelwald ➔ Kleine Scheidegg (CLOY High Pass)</span>
        <span class="nav-step-badge">🚂 Wengernalpbahn Cogwheel</span>
      </div>
      <div class="nav-step-route"><strong>Transit:</strong> Descend gondola to Grindelwald; board historic Wengernalpbahn yellow-and-green cogwheel train climbing to Kleine Scheidegg (2,061m)</div>
      <div class="nav-step-desc"><strong>Directions:</strong> The cogwheel railway climbs directly beneath the towering Eiger, Mönch, and Jungfrau peaks to the high mountain pass.</div>
      <div class="nav-step-tip">💡 <strong>Day Tip:</strong> Famous Crash Landing on You filming location where Captain Ri and Yoon Se-ri watched paragliders cruise over snowy peaks!</div>
    </div>
  
    <div class="nav-step-card">
      <div class="nav-step-header">
        <span class="nav-step-spot">Kleine Scheidegg ➔ Lauterbrunnen Valley Return</span>
        <span class="nav-step-badge">🚂 Cogwheel Descent</span>
      </div>
      <div class="nav-step-route"><strong>Transit:</strong> Direct Wengernalpbahn cogwheel train descending down the western slope via Wengen directly into Lauterbrunnen</div>
      <div class="nav-step-desc"><strong>Directions:</strong> Board the train down through snowy Wengen village back to Lauterbrunnen station. 5-min walk back to Valley Hostel.</div>
      <div class="nav-step-tip">💡 <strong>Day Tip:</strong> Unwind at Valley Hostel with a hot beverage after a full day of high alpine summits.</div>
    </div>
  </div>
              </td>
              <td class="col-table-stay">
                <div class="table-hotel-name">Valley Hostel, Lauterbrunnen (Night 2 of 4)</div>
                <div class="table-hotel-addr">Fuhren 423, 3822 Lauterbrunnen, Switzerland</div>
                <div class="table-transit-mode"><i>🚆 Wengernalpbahn / BOB + 🚠 First Gondola + 🚂 Historic Cogwheel Train</i></div>
              </td>
              <td class="col-table-action">
                <button type="button" class="btn-table-photos" title="View Photos of Grindelwald &amp; Kleine Scheidegg">📸 Photos</button>
              </td>
            </tr>
            <tr class="itinerary-table-row row-badge-ch" data-country="Switzerland">
              <td class="col-table-day">
                <span class="table-day-badge">Day 13</span>
                <span class="table-date-str">27 Dec 2026</span>
              </td>
              <td class="col-table-loc">
                <div class="table-loc-name">Lake Brienz &amp; Iseltwald</div>
                <span class="badge-country badge-ch">Switzerland</span>
              </td>
              <td class="col-table-plan">
                <div class="table-plan-title">Lake Brienz Shoreline &amp; Iseltwald Crash Landing on You Piano Pier</div>
                <div class="table-activities-list">
        <div class="table-activity-item">• <b>Morning (09:00 – 12:00):</b><ul class="activity-sublist"><li class="transit-bullet-item">BOB train down from Lauterbrunnen to Interlaken Ost (20m)</li><li class="sight-bullet-item"><span class="has-photo-preview" title="📸 Hover to preview photo">Step onto regional PostBus Route 103 wrapping around the bright turquoise shoreline of Lake Brienz with sweeping mountain reflections</span></li></ul></div>
        <div class="table-activity-item">• <b>Afternoon (12:30 – 16:30):</b><ul class="activity-sublist"><li class="transit-bullet-item">Arrive at the quiet, snow-kissed lakeside peninsula of Iseltwald</li><li class="sight-bullet-item"><span class="has-photo-preview" title="📸 Hover to preview photo">Walk out onto the iconic Pier Crash Landing on You wooden dock where the signature piano theme was filmed</span></li></ul></div>
        <div class="table-activity-item">• <b>Evening (17:00 – 20:30):</b><ul class="activity-sublist"><li class="transit-bullet-item">Travel back via Interlaken to sit down for a traditional, warm Swiss cheese fondue dinner</li><li class="transit-bullet-item">Evening train back to Lauterbrunnen Valley Hostel (Night 3 of 4)</li></ul></div>
      </div>
                <div class="table-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill paid">🎟️ Iseltwald CLOY Pier: 5 CHF (~A$9 AUD)</span></div>
                <div class="table-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 PostBus 103: Hourly service</span> <span class="opening-pill open">🟢 Iseltwald Pier: Open 24/7</span> <span class="opening-pill open">🟢 Lake Brienz Shoreline: Open 24/7</span></div>
              </td>
              
              <td class="col-table-nav">
                <div class="table-nav-list">
    <div class="nav-step-card">
      <div class="nav-step-header">
        <span class="nav-step-spot">Lauterbrunnen ➔ Interlaken Ost ➔ Lake Brienz</span>
        <span class="nav-step-badge">🚆 BOB + 🚌 PostBus 103</span>
      </div>
      <div class="nav-step-route"><strong>Transit:</strong> BOB train down to Interlaken Ost (20m) + PostBus Route 103 from station plaza</div>
      <div class="nav-step-desc"><strong>Directions:</strong> Ride PostBus 103 wrapping along the bright turquoise southern shoreline of Lake Brienz with sweeping mountain reflections.</div>
      <div class="nav-step-tip">💡 <strong>Day Tip:</strong> Keep camera ready: Lake Brienz is renowned for its intense glacial turquoise color even in mid-winter.</div>
    </div>
  
    <div class="nav-step-card">
      <div class="nav-step-header">
        <span class="nav-step-spot">Lake Brienz ➔ Iseltwald Landing Stage (CLOY Pier)</span>
        <span class="nav-step-badge">🎹 Iconic Piano Pier</span>
      </div>
      <div class="nav-step-route"><strong>Transit:</strong> Alight at Iseltwald Dorfplatz; 2-min walk down to the lakeshore wooden dock</div>
      <div class="nav-step-desc"><strong>Directions:</strong> Walk onto the quiet, snow-kissed peninsula and out onto the famous Crash Landing on You wooden pier.</div>
      <div class="nav-step-tip">💡 <strong>Day Tip:</strong> Keep a 5 CHF coin or card ready to clear the turnstile gate. Recreate Captain Ri\'s iconic piano scene on the glassy water!</div>
    </div>
  
    <div class="nav-step-card">
      <div class="nav-step-header">
        <span class="nav-step-spot">Iseltwald ➔ Interlaken (Traditional Fondue Dinner)</span>
        <span class="nav-step-badge">🫕 Authentic Swiss Fondue</span>
      </div>
      <div class="nav-step-route"><strong>Transit:</strong> PostBus 103 back to Interlaken Ost (20m)</div>
      <div class="nav-step-desc"><strong>Directions:</strong> Stroll into Interlaken\'s charming streets for a traditional, warm Swiss cheese fondue dinner with crusty bread and roesti.</div>
      <div class="nav-step-tip">💡 <strong>Day Tip:</strong> The perfect winter comfort meal after an afternoon along the frosty lakeside.</div>
    </div>
  
    <div class="nav-step-card">
      <div class="nav-step-header">
        <span class="nav-step-spot">Interlaken Ost ➔ Valley Hostel Lauterbrunnen</span>
        <span class="nav-step-badge">🚆 Evening BOB Train</span>
      </div>
      <div class="nav-step-route"><strong>Transit:</strong> BOB train from Interlaken Ost direct to Lauterbrunnen (20m)</div>
      <div class="nav-step-desc"><strong>Directions:</strong> Quick 20-minute ride up into the illuminated, peaceful valley. Walk 5 mins back to Valley Hostel.</div>
      <div class="nav-step-tip">💡 <strong>Day Tip:</strong> Rest up for tomorrow\'s cable car ascent to Mürren and the Schilthorn summit.</div>
    </div>
  </div>
              </td>
              <td class="col-table-stay">
                <div class="table-hotel-name">Valley Hostel, Lauterbrunnen (Night 3 of 4)</div>
                <div class="table-hotel-addr">Fuhren 423, 3822 Lauterbrunnen, Switzerland</div>
                <div class="table-transit-mode"><i>🚆 BOB Train (Lauterbrunnen ➔ Interlaken) + 🚌 PostBus 103 (Lake Brienz)</i></div>
              </td>
              <td class="col-table-action">
                <button type="button" class="btn-table-photos" title="View Photos of Lake Brienz &amp; Iseltwald">📸 Photos</button>
              </td>
            </tr>
            <tr class="itinerary-table-row row-badge-ch" data-country="Switzerland">
              <td class="col-table-day">
                <span class="table-day-badge">Day 14</span>
                <span class="table-date-str">28 Dec 2026</span>
              </td>
              <td class="col-table-loc">
                <div class="table-loc-name">Mürren &amp; Schilthorn Peak</div>
                <span class="badge-country badge-ch">Switzerland</span>
              </td>
              <td class="col-table-plan">
                <div class="table-plan-title">Car-Free Mürren &amp; Schilthorn Piz Gloria 360° Alpine Summit</div>
                <div class="table-activities-list">
        <div class="table-activity-item">• <b>Daytime (09:00 – 16:00):</b><ul class="activity-sublist"><li class="transit-bullet-item">Board mountain cable car from Lauterbrunnen up to car-free cliffside village of Mürren (1,638m) perched directly above the valley</li><li class="sight-bullet-item"><span class="has-photo-preview" title="📸 Hover to preview photo">Continue up aerial cable car network to Schilthorn summit (Piz Gloria, 2,970m) for a full 360-degree panorama of Eiger, Mönch &amp; Jungfrau peaks</span></li></ul></div>
        <div class="table-activity-item">• <b>Evening (16:30 – 21:00):</b><ul class="activity-sublist"><li class="transit-bullet-item">Return to Valley Hostel to pack bags for tomorrow\'s city connection (Night 4 of 4 in Lauterbrunnen!)</li><li class="transit-bullet-item">Pre-purchase train tickets on mobile device for tomorrow\'s journey via Bern to Paris</li></ul></div>
      </div>
                <div class="table-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Mürren Village: Free ($0 AUD)</span> <span class="admission-pill paid">🎟️ Schilthorn Cableway: Mountain pass / ticket</span></div>
                <div class="table-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 Mürren BLM Cable Car: 06:00–20:30</span> <span class="opening-pill open">🟢 Schilthorn Cableway: 07:55–16:55 (Weather permitting)</span></div>
              </td>
              
              <td class="col-table-nav">
                <div class="table-nav-list">
    <div class="nav-step-card">
      <div class="nav-step-header">
        <span class="nav-step-spot">Valley Hostel ➔ Lauterbrunnen BLM Cable Car</span>
        <span class="nav-step-badge">🚠 Grütschalp Cable Car</span>
      </div>
      <div class="nav-step-route"><strong>Transit:</strong> 2-min walk across the road to Lauterbrunnen Cable Car station</div>
      <div class="nav-step-desc"><strong>Directions:</strong> Board the aerial cable car rising 700 meters up the vertical valley cliff face to Grütschalp (4m).</div>
      <div class="nav-step-tip">💡 <strong>Day Tip:</strong> Look out the valley-facing windows to see Lauterbrunnen\'s waterfall floor shrink beneath you.</div>
    </div>
  
    <div class="nav-step-card">
      <div class="nav-step-header">
        <span class="nav-step-spot">Grütschalp ➔ Mürren Car-Free Clifftop Village</span>
        <span class="nav-step-badge">🚂 Mountain Rail (1,638m)</span>
      </div>
      <div class="nav-step-route"><strong>Transit:</strong> Transfer across the platform to the narrow-gauge BLM mountain train to Mürren (14m)</div>
      <div class="nav-step-desc"><strong>Directions:</strong> Ride along the cliff rim directly opposite the massive triad: Eiger, Mönch, and Jungfrau. Arrive at car-free Mürren village.</div>
      <div class="nav-step-tip">💡 <strong>Day Tip:</strong> Completely peaceful, no car traffic, fresh alpine snow, and wooden chalets with icicles.</div>
    </div>
  
    <div class="nav-step-card">
      <div class="nav-step-header">
        <span class="nav-step-spot">Mürren ➔ Schilthorn Summit Piz Gloria (2,970m)</span>
        <span class="nav-step-badge">🏔️ 360° Alpine Summit</span>
      </div>
      <div class="nav-step-route"><strong>Transit:</strong> Aerial cable car via Birg station to Schilthorn summit (Piz Gloria at 2,970m)</div>
      <div class="nav-step-desc"><strong>Directions:</strong> Step out onto the panoramic observation deck for an uninterrupted 360-degree view of over 200 Alpine peaks.</div>
      <div class="nav-step-tip">💡 <strong>Day Tip:</strong> Famous James Bond 007 filming location (On Her Majesty\'s Secret Service) with revolving restaurant and Spy World exhibition.</div>
    </div>
  
    <div class="nav-step-card">
      <div class="nav-step-header">
        <span class="nav-step-spot">Schilthorn ➔ Valley Hostel Return &amp; Mobile Ticket Prep</span>
        <span class="nav-step-badge">🎒 Pre-pack &amp; Evening Rest</span>
      </div>
      <div class="nav-step-route"><strong>Transit:</strong> Cable car descent back via Mürren &amp; Grütschalp to Lauterbrunnen</div>
      <div class="nav-step-desc"><strong>Directions:</strong> Return to Valley Hostel. Pack luggage for tomorrow\'s checkout and pre-purchase SBB tickets on mobile for the Bern connection.</div>
      <div class="nav-step-tip">💡 <strong>Day Tip:</strong> Ensure train tickets for tomorrow\'s Bern and Paris connection are downloaded to your phone.</div>
    </div>
  </div>
              </td>
              <td class="col-table-stay">
                <div class="table-hotel-name">Valley Hostel, Lauterbrunnen (Night 4 of 4)</div>
                <div class="table-hotel-addr">Fuhren 423, 3822 Lauterbrunnen, Switzerland</div>
                <div class="table-transit-mode"><i>🚠 Grütschalp Cable Car + 🚂 BLM Mountain Rail + 🚠 Schilthorn Aerial Cableway</i></div>
              </td>
              <td class="col-table-action">
                <button type="button" class="btn-table-photos" title="View Photos of Mürren &amp; Schilthorn">📸 Photos</button>
              </td>
            </tr>
            <tr class="itinerary-table-row row-badge-transit" data-country="Transit">
              <td class="col-table-day">
                <span class="table-day-badge">Day 15</span>
                <span class="table-date-str">29 Dec 2026</span>
              </td>
              <td class="col-table-loc">
                <div class="table-loc-name">Lauterbrunnen ➔ Bern ➔ Paris</div>
                <span class="badge-country badge-transit">Transit</span>
              </td>
              <td class="col-table-plan">
                <div class="table-plan-title">Bern Switzerland Temple Session, UNESCO Old Town &amp; High-Speed TGV Lyria to Paris</div>
                <div class="table-activities-list">
        <div class="table-activity-item">• <b>Morning (08:30 – 10:15):</b><ul class="activity-sublist"><li class="transit-bullet-item">08:30 AM – 10:00 AM: Complete check-out at Valley Hostel; board morning train straight to Bern Hauptbahnhof</li><li class="transit-bullet-item">10:15 AM: Arrive at Bern main station; drop heavy luggage securely into electronic luggage lockers</li></ul></div>
        <div class="table-activity-item">• <b>Temple &amp; Afternoon (10:30 – 17:00):</b><ul class="activity-sublist"><li class="transit-bullet-item">10:30 AM: S-Bahn Line S3 or S4 (8-min hop) to Zollikofen station, walk to temple gates</li><li class="sight-bullet-item"><span class="has-photo-preview" title="📸 Hover to preview photo">11:00 AM – 01:30 PM: Bern Switzerland Temple Session — peaceful, completely unhurried sacred block on temple grounds</span></li><li class="sight-bullet-item"><span class="has-photo-preview" title="📸 Hover to preview photo">02:00 PM – 05:00 PM: Return to Bern city center; tour Bern UNESCO Old Town, sandstone arcades (Lauben), Zytglogge astronomical clock tower &amp; relaxed hot lunch</span></li></ul></div>
        <div class="table-activity-item">• <b>Evening (17:45 – 22:44):</b><ul class="activity-sublist"><li class="transit-bullet-item">05:45 PM: Retrieve stored bags at Bern Hbf</li><li class="transit-bullet-item">06:04 PM: Board train to Basel SBB; cross-platform transfer to high-speed TGV Lyria 9222 cruising at 320 km/h to Paris Gare de Lyon (arr 22:44)</li><li class="transit-bullet-item">Automated Metro Line 14 direct to Break &amp; Home Paris Italie; check in, unpack, and sleep comfortably (Night 1 of 5 in Paris!)</li></ul></div>
      </div>
                <div class="table-admission-item"><strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (Bern Switzerland Temple, Bern Old Town &amp; Zytglogge)</div>
                <div class="table-opening-item"><strong>🕒 Hours &amp; Open Status:</strong> <span class="opening-pill open">🟢 Bern Switzerland Temple: Morning Session (11:00–13:30)</span> <span class="opening-pill open">🟢 Bern Arcades &amp; Zytglogge: Open 24/7</span> <span class="opening-pill open">🟢 TGV Lyria: On schedule (18:04 departure)</span></div>
              </td>
              
              <td class="col-table-nav">
                <div class="table-nav-list">
    <div class="nav-step-card">
      <div class="nav-step-header">
        <span class="nav-step-spot">Valley Hostel ➔ Bern Hauptbahnhof</span>
        <span class="nav-step-badge">🚆 BOB + SBB IC (1h 15m)</span>
      </div>
      <div class="nav-step-route"><strong>Transit:</strong> Check out of Valley Hostel at 08:30 AM. BOB train to Interlaken Ost (20m) + SBB IC train to Bern Hbf (53m, arr 10:15 AM)</div>
      <div class="nav-step-desc"><strong>Directions:</strong> Scenic ride out of the valley through Thun to Bern main station. Arrive smoothly at 10:15 AM.</div>
      <div class="nav-step-tip">💡 <strong>Day Tip:</strong> Lower concourse at Bern Hbf has electronic luggage lockers (~CHF 9–12, accepts card). Store heavy bags securely.</div>
    </div>
  
    <div class="nav-step-card">
      <div class="nav-step-header">
        <span class="nav-step-spot">Bern Hbf ➔ Bern Switzerland Temple (Zollikofen)</span>
        <span class="nav-step-badge">🏛️ Sacred Temple Session</span>
      </div>
      <div class="nav-step-route"><strong>Transit:</strong> S-Bahn Line S3 or S4 (8 mins) from Bern Hbf to Zollikofen station</div>
      <div class="nav-step-desc"><strong>Directions:</strong> Walk 8 mins (650m) along Tempelstrasse to Tempelstrasse 2. Attend sacred proxy endowment session (11:00 AM – 01:30 PM).</div>
      <div class="nav-step-tip">💡 <strong>Day Tip:</strong> Historic first temple built in Europe (1955). Beautiful pine-fringed grounds. Completely unhurried spiritual experience.</div>
    </div>
  
    <div class="nav-step-card">
      <div class="nav-step-header">
        <span class="nav-step-spot">Temple ➔ Bern UNESCO Old Town & Zytglogge</span>
        <span class="nav-step-badge">🕰️ 3-Hour Old Town Tour</span>
      </div>
      <div class="nav-step-route"><strong>Transit:</strong> S-Bahn back to Bern Hbf (8m); walk into UNESCO Old Town</div>
      <div class="nav-step-desc"><strong>Directions:</strong> With your session finished early, enjoy 3 relaxed hours (14:00–17:00) strolling 6 km of sandstone arcades (Lauben), seeing the Zytglogge clock tower, and having a hot lunch.</div>
      <div class="nav-step-tip">💡 <strong>Day Tip:</strong> Sandstone arcades are 100% weather-sheltered. Savor authentic Swiss chocolate and hot coffee in the medieval center.</div>
    </div>
  
    <div class="nav-step-card">
      <div class="nav-step-header">
        <span class="nav-step-spot">Bern Hbf ➔ Basel SBB ➔ Paris Gare de Lyon</span>
        <span class="nav-step-badge">🚄 High-Speed TGV Lyria</span>
      </div>
      <div class="nav-step-route"><strong>Transit:</strong> 18:04 train from Bern Hbf to Basel SBB (56m); cross-platform transfer to TGV Lyria 9222 to Paris (3h 04m, arr 22:44)</div>
      <div class="nav-step-desc"><strong>Directions:</strong> Retrieve bags from lockers by 17:45. Board train to Basel; board TGV Lyria bullet train cruising at 320 km/h to Paris Gare de Lyon.</div>
      <div class="nav-step-tip">💡 <strong>Day Tip:</strong> Automated Metro Line 14 direct from Gare de Lyon to Porte de Choisy (Break & Home Paris Italie) for a comfortable sleep!</div>
    </div>
  </div>
              </td>
              <td class="col-table-stay">
                <div class="table-hotel-name">Break &amp; Home Paris Italie (CONFIRMED)</div>
                <div class="table-hotel-addr">Porte de Choisy, Paris (Booked: Jean Aquino)</div>
                <div class="table-transit-mode"><i>🚆 BOB / SBB IC + 🚆 S-Bahn S3/S4 + 🚄 High-Speed TGV Lyria + 🚇 Paris Metro Line 14</i></div>
              </td>
              <td class="col-table-action">
                <button type="button" class="btn-table-photos" title="View Photos of Bern &amp; Paris">📸 Photos</button>
              </td>
            </tr>'''

# Regex to match the Day 11 to Day 15 rows
pattern_table_rows = re.compile(r'<tr class="itinerary-table-row row-badge-ch" data-country="Switzerland">\s*<td class="col-table-day">\s*<span class="table-day-badge">Day 11</span>.*?Day 15</span>.*?</tr>', re.DOTALL)
if pattern_table_rows.search(html):
    html = pattern_table_rows.sub(table_rows_11_15, html, count=1)
    print("✅ Table rows Days 11-15 updated in index.html")
else:
    print("❌ Could not match Table rows Days 11-15 regex in index.html")

# Verification Matrix replacement
verif_old = re.compile(r'<tr><td><strong>Day 11</strong> \(25 Dec\)</td><td>Friday</td><td>Strasbourg.*?<tr><td><strong>Day 15</strong> \(29 Dec\)</td><td>Tuesday</td><td>Bern ➔ Paris.*?</tr>', re.DOTALL)
verif_new = '''<tr><td><strong>Day 11</strong> (25 Dec)</td><td>Friday</td><td>Strasbourg ➔ Lucerne ➔ Lauterbrunnen</td><td>FlixBus N846 (04:05), Zentralbahn Brünig Pass, Staubbach Falls mist, Valley Hostel kitchen</td><td>FlixBus 04:05–07:10 · Zentralbahn regular holiday schedule · Staubbach Falls 24/7</td><td><span class="badge-status-open">🟢 Christmas Day Open</span></td></tr>
              <tr><td><strong>Day 12</strong> (26 Dec)</td><td>Saturday</td><td>Grindelwald &amp; Kleine Scheidegg</td><td>Grindelwald-First Gondola (2,168m), First Cliff Walk by Tissot, Kleine Scheidegg pass (CLOY paragliding pass)</td><td>First Gondola 08:30–16:30 · Cliff Walk open · Wengernalpbahn daily</td><td><span class="badge-status-open">🟢 Boxing Day Open</span></td></tr>
              <tr><td><strong>Day 13</strong> (27 Dec)</td><td>Sunday</td><td>Lake Brienz &amp; Iseltwald</td><td>Lake Brienz turquoise shoreline (PostBus 103), Iseltwald Landing Stage (CLOY Piano Pier turnstile), Traditional Fondue</td><td>PostBus 103 hourly · Iseltwald Pier open 24/7 · Shoreline open 24/7</td><td><span class="badge-status-open">🟢 Verified Open</span></td></tr>
              <tr><td><strong>Day 14</strong> (28 Dec)</td><td>Monday</td><td>Mürren &amp; Schilthorn Peak</td><td>Lauterbrunnen BLM cable car to car-free Mürren (1,638m), Schilthorn Summit Piz Gloria (2,970m 360° panorama)</td><td>Mürren BLM 06:00–20:30 · Schilthorn Cableway 07:55–16:55</td><td><span class="badge-status-open">🟢 Verified Open</span></td></tr>
              <tr><td><strong>Day 15</strong> (29 Dec)</td><td>Tuesday</td><td>Lauterbrunnen ➔ Bern ➔ Paris</td><td>Valley Hostel check-out, Bern electronic lockers, Bern Switzerland Temple (11:00 AM – 01:30 PM Session), UNESCO Old Town &amp; Zytglogge (14:00–17:00), 18:04 TGV Lyria to Paris</td><td>Temple: Tuesday Session 11:00–13:30 · Arcades 24/7 · TGV Lyria 18:04 departure</td><td><span class="badge-status-open">🟢 Confirmed Schedule</span></td></tr>'''

if verif_old.search(html):
    html = verif_old.sub(verif_new, html, count=1)
    print("✅ Verification matrix updated in index.html")
else:
    print("❌ Could not match Verification matrix regex in index.html")

# Update Hub and Transit references in index.html
html = html.replace('<b>Swiss Alps Base</b> (Bern (Alpenblick CoLiving))<br>', '<b>Swiss Alps Base</b> (Lauterbrunnen (Valley Hostel))<br>')
html = html.replace('<span class="calc-sub-gray">Zurich, Iseltwald, Sigriswil, Grindelwald</span>', '<span class="calc-sub-gray">Lucerne, Grindelwald, Kleine Scheidegg, Iseltwald, Mürren, Schilthorn</span>')
html = html.replace('<span class="calc-metric-subtext">(Bern (Alpenblick CoLiving))</span>', '<span class="calc-metric-subtext">(Lauterbrunnen (Valley Hostel))</span>')
html = html.replace('Alpine Tourism:</b> Filming locations for <i>Crash Landing on You</i> (CLOY), First Cliff Walk, Lauterbrunnen waterfalls, Lake Brienz, and Christmas Eve in the Swiss Alps.', 'Alpine Tourism:</b> Filming locations for <i>Crash Landing on You</i> (CLOY Pier & Kleine Scheidegg pass), First Cliff Walk, Staubbach Falls, Lake Brienz, Mürren & Schilthorn 360° Summit.')
html = html.replace('<span class="table-sub">Zurich, Bern, Bern (Alpenblick CoLiving), Iseltwald, Sigriswil, First Gondola</span>', '<span class="table-sub">Lucerne, Interlaken, Lauterbrunnen (Valley Hostel), Grindelwald-First, Kleine Scheidegg, Iseltwald, Mürren, Schilthorn, Bern</span>')
html = html.replace('✅ All SBB mainline trains (Zurich ➔ Bern ➔ Bern (Alpenblick CoLiving) ➔ Thun)', '✅ All SBB mainline trains (Lucerne ➔ Interlaken ➔ Lauterbrunnen ➔ Bern)')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("✅ index.html successfully saved.")
