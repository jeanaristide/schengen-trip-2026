const fs = require('fs');
const path = require('path');

const appJsPath = path.join(__dirname, '../js/app.js');
const indexHtmlPath = path.join(__dirname, '../index.html');

const dayAdmissions = {
  1: '<strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (London departure & overnight coach transit)',
  2: '<strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (Canal Ring walking, Dam Square & Light Festival)',
  3: '<strong>Sightseeing Admission:</strong> <span class="admission-pill paid">🎟️ Rijksmuseum: €22.50 (~A$38 AUD)</span> <span class="admission-pill paid">🎟️ Canal Cruise: €18.00 (~A$30 AUD)</span> <span class="admission-pill free">✨ Zaanse Schans: Free ($0 AUD)</span> <em>(Day 3 total paid: ~A$68 AUD)</em>',
  4: '<strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (Peace Palace exterior, ICC & The Hague Temple)',
  5: '<strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (Frankfurt Temple, Römerberg & Christmas Market)',
  6: '<strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (Altstadt & Main River walking) · <span class="admission-pill optional">Optional Goethe House: €10 (~A$17 AUD)</span>',
  7: '<strong>Sightseeing Admission:</strong> <span class="admission-pill paid">🎟️ Lindt Chocolate Museum: €17.50 (~A$29 AUD)</span> <span class="admission-pill free">✨ Cologne Cathedral Nave: Free ($0 AUD)</span> <span class="admission-pill free">✨ Düsseldorf Markets: Free ($0 AUD)</span>',
  8: '<strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (Strasbourg Cathedral nave, Petite France & Christkindelsmärik)',
  9: '<strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (Colmar Petite Venise, Maison Pfister & 6 Christmas Markets)',
  10: '<strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (Bern Temple & Interlaken Höhematte Jungfrau view)',
  11: '<strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (First Cliff Walk by Tissot summit walkway is Free; gondola covered by Swiss pass)',
  12: '<strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (Lauterbrunnen Valley, Staubbach Falls & Mürren car-free village)',
  13: '<strong>Sightseeing Admission:</strong> <span class="admission-pill paid">🎟️ Iseltwald CLOY Pier: 5 CHF (~A$9 AUD)</span> <span class="admission-pill paid">🎟️ Sigriswil Bridge: 8 CHF (~A$14 AUD)</span> <em>(Day 13 total paid: 13 CHF / ~A$23 AUD)</em>',
  14: '<strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (Lucerne Kapellbrücke, Lion Monument & Zurich Lake)',
  15: '<strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (Sacré-Cœur nave & Place du Tertre Montmartre)',
  16: '<strong>Sightseeing Admission:</strong> <span class="admission-pill paid">🎟️ Musée du Louvre: €22.00 (~A$37 AUD)</span> <span class="admission-pill paid">🎟️ Arc de Triomphe Terrace: €16.00 (~A$27 AUD)</span> <span class="admission-pill free">✨ Tuileries: Free ($0 AUD)</span> <em>(Day 16 total: ~A$64 AUD)</em>',
  17: '<strong>Sightseeing Admission:</strong> <span class="admission-pill paid">🎟️ Musée d\'Orsay: €16.00 (~A$27 AUD)</span> <span class="admission-pill free">✨ Notre-Dame Nave: Free ($0 AUD)</span> <span class="admission-pill free">✨ Eiffel Tower & NYE Countdown: Free ($0 AUD)</span>',
  18: '<strong>Sightseeing Admission:</strong> <span class="admission-pill paid">🎟️ Seine River Cruise: €18.00 (~A$30 AUD)</span> <span class="admission-pill free">✨ Luxembourg Gardens & Le Marais: Free ($0 AUD)</span>',
  19: '<strong>Sightseeing Admission:</strong> <span class="admission-pill paid">🎟️ Palace of Versailles: €24.00 (~A$40 AUD)</span> <span class="admission-pill free">✨ Paris France Temple: Free ($0 AUD)</span>',
  20: '<strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (Pont Alexandre III, Paris walking & Eurotunnel coach transit)',
  21: '<strong>Sightseeing Admission:</strong> <span class="admission-pill free">✨ Free ($0 AUD)</span> (London UK rest & flight departure)'
};

// 1. Update index.html
let html = fs.readFileSync(indexHtmlPath, 'utf8');

// Insert admission summary banner if not already present
const summaryBannerHtml = `    <!-- Sightseeing Admission & Cost Summary -->
    <div class="itinerary-admission-summary">
      <div class="summary-title">
        <span>🎟️</span>
        <span>Sightseeing Admission & Ticket Costs (AUD Estimates · 1 EUR ≈ A$1.68 · 1 CHF ≈ A$1.76)</span>
      </div>
      <div class="summary-stats">
        <span class="stat-chip highlight">Total Paid Sightseeing: ~A$281 AUD / person</span>
        <span class="stat-chip">🇳🇱 Netherlands: ~A$68 AUD</span>
        <span class="stat-chip">🇩🇪 Germany: ~A$29 AUD</span>
        <span class="stat-chip">🇨🇭 Switzerland: ~A$23 AUD (13 CHF)</span>
        <span class="stat-chip">🇫🇷 France: ~A$161 AUD</span>
        <span class="stat-chip" style="background: #f0fdf4; color: #15803d; border-color: #bbf7d0;">✨ Temples & Cathedrals: Free ($0 AUD)</span>
      </div>
    </div>\n\n`;

if (!html.includes('itinerary-admission-summary')) {
  html = html.replace('<!-- Country Filters -->', summaryBannerHtml + '    <!-- Country Filters -->');
}

// Split into lines or regex replace for table rows and cards
// Master Table View rows
for (let d = 1; d <= 21; d++) {
  const dayTag = `<span class="table-day-badge">Day ${d}</span>`;
  const nextDayTag = d < 21 ? `<span class="table-day-badge">Day ${d + 1}</span>` : '</tbody>';
  
  const startIdx = html.indexOf(dayTag);
  if (startIdx !== -1) {
    const endIdx = html.indexOf(nextDayTag, startIdx);
    const rowSnippet = html.slice(startIdx, endIdx !== -1 ? endIdx : undefined);
    
    // Check if table-admission-item is already in this snippet
    if (!rowSnippet.includes('table-admission-item')) {
      // Find col-table-plan closing </td>
      const planClosing = '</div>\n              </td>';
      const planClosingAlt = '</div>\r\n              </td>';
      const targetStr = rowSnippet.includes(planClosing) ? planClosing : planClosingAlt;
      
      const newPlanContent = `</div>\n                <div class="table-admission-item">${dayAdmissions[d]}</div>\n              </td>`;
      const updatedSnippet = rowSnippet.replace(targetStr, newPlanContent);
      html = html.slice(0, startIdx) + updatedSnippet + html.slice(startIdx + rowSnippet.length);
    }
  }
}

// Cards View
for (let d = 1; d <= 21; d++) {
  const cardDayTag = `<span class="card-day-badge">Day ${d}</span>`;
  const nextCardDayTag = d < 21 ? `<span class="card-day-badge">Day ${d + 1}</span>` : '<!-- 3. Integrated Visual Photo Gallery';
  
  const startIdx = html.indexOf(cardDayTag);
  if (startIdx !== -1) {
    const endIdx = html.indexOf(nextCardDayTag, startIdx);
    const cardSnippet = html.slice(startIdx, endIdx !== -1 ? endIdx : undefined);
    
    if (!cardSnippet.includes('card-admission-item')) {
      const cardMainClose = '</div>\n          </div>\n          <div class="day-card-side">';
      const cardMainCloseAlt = '</div>\r\n          </div>\r\n          <div class="day-card-side">';
      const targetStr = cardSnippet.includes(cardMainClose) ? cardMainClose : cardMainCloseAlt;
      
      const newCardContent = `</div>\n            <div class="card-admission-item">${dayAdmissions[d]}</div>\n          </div>\n          <div class="day-card-side">`;
      const updatedCardSnippet = cardSnippet.replace(targetStr, newCardContent);
      html = html.slice(0, startIdx) + updatedCardSnippet + html.slice(startIdx + cardSnippet.length);
    }
  }
}

fs.writeFileSync(indexHtmlPath, html, 'utf8');
console.log('Successfully updated index.html with admission details!');

// 2. Update js/app.js
let appJs = fs.readFileSync(appJsPath, 'utf8');

// Update renderItineraryTable in js/app.js
const tableRenderOld = `    const activitiesHtml = Array.isArray(item.activities)
      ? \`<div class="table-activities-list">
          \${item.activities.map(act => \`<div class="table-activity-item">\${act}</div>\`).join('')}
        </div>\`
      : \`<p class="table-activity-item">\${item.activities}</p>\`;

    tr.innerHTML = \`
      <td class="col-table-day">
        <span class="table-day-badge">\${item.day}</span>
        <span class="table-date-str">\${item.date}</span>
      </td>
      <td class="col-table-loc">
        <div class="table-loc-name">\${item.city}</div>
        <span class="badge-country \${item.badgeClass}">\${item.country}</span>
      </td>
      <td class="col-table-plan">
        <div class="table-plan-title">\${item.title}</div>
        \${activitiesHtml}
      </td>`;

const tableRenderNew = `    const activitiesHtml = Array.isArray(item.activities)
      ? \`<div class="table-activities-list">
          \${item.activities.map(act => \`<div class="table-activity-item">\${act}</div>\`).join('')}
        </div>\`
      : \`<p class="table-activity-item">\${item.activities}</p>\`;

    const admissionHtml = item.admissionHtml
      ? \`<div class="table-admission-item">\${item.admissionHtml}</div>\`
      : '';

    tr.innerHTML = \`
      <td class="col-table-day">
        <span class="table-day-badge">\${item.day}</span>
        <span class="table-date-str">\${item.date}</span>
      </td>
      <td class="col-table-loc">
        <div class="table-loc-name">\${item.city}</div>
        <span class="badge-country \${item.badgeClass}">\${item.country}</span>
      </td>
      <td class="col-table-plan">
        <div class="table-plan-title">\${item.title}</div>
        \${activitiesHtml}
        \${admissionHtml}
      </td>`;

if (appJs.includes(tableRenderOld)) {
  appJs = appJs.replace(tableRenderOld, tableRenderNew);
}

// Update renderTimeline in js/app.js
const timelineRenderOld = `    const activitiesHtml = Array.isArray(item.activities)
      ? \`<div class="card-activities-list">
          \${item.activities.map(act => \`<div class="card-activity-item">\${act}</div>\`).join('')}
        </div>\`
      : \`<p class="card-activity-item">\${item.activities}</p>\`;

    card.innerHTML = \`
      <div class="day-card-header">
        <div class="day-card-meta">
          <span class="card-day-badge">\${item.day}</span>
          <span class="card-date-badge">\${item.date}</span>
          <span class="badge-country \${item.badgeClass}">\${item.country}</span>
        </div>
        <div class="day-card-city">
          <span class="city-icon">📍</span>
          <span class="city-text">\${item.city}</span>
        </div>
      </div>
      <div class="day-card-content">
        <div class="day-card-main">
          <h4 class="card-day-theme">\${item.title}</h4>
          \${activitiesHtml}
        </div>`;

const timelineRenderNew = `    const activitiesHtml = Array.isArray(item.activities)
      ? \`<div class="card-activities-list">
          \${item.activities.map(act => \`<div class="card-activity-item">\${act}</div>\`).join('')}
        </div>\`
      : \`<p class="card-activity-item">\${item.activities}</p>\`;

    const cardAdmissionHtml = item.admissionHtml
      ? \`<div class="card-admission-item">\${item.admissionHtml}</div>\`
      : '';

    card.innerHTML = \`
      <div class="day-card-header">
        <div class="day-card-meta">
          <span class="card-day-badge">\${item.day}</span>
          <span class="card-date-badge">\${item.date}</span>
          <span class="badge-country \${item.badgeClass}">\${item.country}</span>
        </div>
        <div class="day-card-city">
          <span class="city-icon">📍</span>
          <span class="city-text">\${item.city}</span>
        </div>
      </div>
      <div class="day-card-content">
        <div class="day-card-main">
          <h4 class="card-day-theme">\${item.title}</h4>
          \${activitiesHtml}
          \${cardAdmissionHtml}
        </div>`;

if (appJs.includes(timelineRenderOld)) {
  appJs = appJs.replace(timelineRenderOld, timelineRenderNew);
}

// Update renderGalleryView in js/app.js to show admission badge
const galleryRenderOld = `<h4 class="sight-name" style="font-size: 1.15rem; margin-bottom: 8px;">\${sight.name}</h4>
                <p class="sight-desc" style="font-size: 0.88rem; line-height: 1.55; margin-bottom: 14px;">\${sight.desc}</p>`;

const galleryRenderNew = `<h4 class="sight-name" style="font-size: 1.15rem; margin-bottom: 8px;">\${sight.name}</h4>
                \${sight.admission ? \`<div class="sight-admission-badge \${sight.isPaid ? 'paid' : 'free'}">\${sight.isPaid ? '🎟️ Admission: ' : '✨ Entry: '}\${sight.admission}</div>\` : ''}
                <p class="sight-desc" style="font-size: 0.88rem; line-height: 1.55; margin-bottom: 14px; margin-top: 8px;">\${sight.desc}</p>`;

if (appJs.includes(galleryRenderOld)) {
  appJs = appJs.replace(galleryRenderOld, galleryRenderNew);
}

// Update updateMainLightboxContent in js/app.js
const lightboxBadgeOld = `if (dayBadgeEl) dayBadgeEl.innerHTML = \`\${sight.dayTitle} · \${sight.date} · <strong>\${sight.category}</strong>\`;`;
const lightboxBadgeNew = `if (dayBadgeEl) dayBadgeEl.innerHTML = \`\${sight.dayTitle} · \${sight.date} · <strong>\${sight.category}</strong>\${sight.admission ? \` · <span style="font-weight:700; color:\${sight.isPaid ? '#ef4444' : '#22c55e'};">\${sight.isPaid ? '🎟️ ' : '✨ '}\${sight.admission}</span>\` : ''}\`;`;

if (appJs.includes(lightboxBadgeOld)) {
  appJs = appJs.replace(lightboxBadgeOld, lightboxBadgeNew);
}

// Inject admissionHtml into itineraryData in js/app.js
for (let d = 1; d <= 21; d++) {
  const dayStr = `"day": "Day ${d}",`;
  const nextProp = `"stayTitle":`;
  
  const dayIdx = appJs.indexOf(dayStr);
  if (dayIdx !== -1) {
    const stayIdx = appJs.indexOf(nextProp, dayIdx);
    if (stayIdx !== -1 && stayIdx - dayIdx < 2500) {
      const segment = appJs.slice(dayIdx, stayIdx);
      if (!segment.includes('admissionHtml')) {
        const insertion = `    "admissionHtml": ${JSON.stringify(dayAdmissions[d])},\n    `;
        appJs = appJs.slice(0, stayIdx) + insertion + appJs.slice(stayIdx);
      }
    }
  }
}

fs.writeFileSync(appJsPath, appJs, 'utf8');
console.log('Successfully updated js/app.js with admission details!');
