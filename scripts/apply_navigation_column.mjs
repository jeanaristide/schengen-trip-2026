import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { NAVIGATION_DATA } from './navigation_data.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

console.log('--- Applying Navigation Column Updates to app.js and index.html ---');

// Helper to generate HTML for navigation items
function generateNavHtml(dayKey, isTable = true) {
  const steps = NAVIGATION_DATA[dayKey] || [];
  if (steps.length === 0) return '';

  const listClass = isTable ? 'table-nav-list' : 'card-nav-list';
  const stepsHtml = steps.map(s => `
    <div class="nav-step-card">
      <div class="nav-step-header">
        <span class="nav-step-spot">${s.spot}</span>
        <span class="nav-step-badge">${s.badge}</span>
      </div>
      <div class="nav-step-route"><strong>Transit:</strong> ${s.transit}</div>
      <div class="nav-step-desc"><strong>Directions:</strong> ${s.directions}</div>
      ${s.tip ? `<div class="nav-step-tip">💡 <strong>Day Tip:</strong> ${s.tip}</div>` : ''}
    </div>
  `).join('');

  return `<div class="${listClass}">${stepsHtml}</div>`;
}

// =========================================================================
// 1. UPDATE js/app.js
// =========================================================================
const appJsPath = path.join(rootDir, 'js/app.js');
let appJs = readFileSync(appJsPath, 'utf8');

// Insert navigationGuide into each day in itineraryData if not present
for (let i = 1; i <= 21; i++) {
  const dayKey = `Day ${i}`;
  const navSteps = JSON.stringify(NAVIGATION_DATA[dayKey] || [], null, 6);
  
  // Find "day": "Day X"
  const dayPattern = new RegExp(`("day":\\s*"${dayKey}"[\\s\\S]*?"activities":\\s*\\[[\\s\\S]*?\\])(,?)`);
  if (!appJs.includes(`"day": "${dayKey}"`)) continue;

  if (!appJs.includes(`"navigationGuide":`) || !appJs.includes(dayKey)) {
    // Check if day already has navigationGuide
    const dayBlockRegex = new RegExp(`"day":\\s*"${dayKey}"[\\s\\S]*?(?=\\{\\s*"day"|const destinationData|\\];)`);
    const match = appJs.match(dayBlockRegex);
    if (match && !match[0].includes('"navigationGuide":')) {
      appJs = appJs.replace(dayPattern, `$1,\n    "navigationGuide": ${navSteps}$2`);
    }
  }
}

// Update renderItineraryTable in app.js to output 6 columns
const oldRenderTableCode = `    tr.innerHTML = \`
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
        \${openingHtml}
      </td>
      <td class="col-table-stay">
        <div class="table-hotel-name">\${item.stayTitle}</div>
        <div class="table-hotel-addr">\${item.stayDesc}</div>
        \${item.transitInfo ? \`<div class="table-transit-mode"><i>\${item.transitInfo}</i></div>\` : ''}
      </td>
      <td class="col-table-action">
        <button type="button" class="btn-table-photos" title="View Photos of \${item.city}">
          📸 Photos
        </button>
      </td>
    \`;`;

const newRenderTableCode = `    const navSteps = item.navigationGuide || [];
    const navHtml = navSteps.length > 0
      ? \`<div class="table-nav-list">
          \${navSteps.map(s => \`
            <div class="nav-step-card">
              <div class="nav-step-header">
                <span class="nav-step-spot">\${s.spot}</span>
                <span class="nav-step-badge">\${s.badge}</span>
              </div>
              <div class="nav-step-route"><strong>Transit:</strong> \${s.transit}</div>
              <div class="nav-step-desc"><strong>Directions:</strong> \${s.directions}</div>
              \${s.tip ? \`<div class="nav-step-tip">💡 <strong>Day Tip:</strong> \${s.tip}</div>\` : ''}
            </div>
          \`).join('')}
        </div>\`
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
        \${openingHtml}
      </td>
      <td class="col-table-nav">
        \${navHtml}
      </td>
      <td class="col-table-stay">
        <div class="table-hotel-name">\${item.stayTitle}</div>
        <div class="table-hotel-addr">\${item.stayDesc}</div>
        \${item.transitInfo ? \`<div class="table-transit-mode"><i>\${item.transitInfo}</i></div>\` : ''}
      </td>
      <td class="col-table-action">
        <button type="button" class="btn-table-photos" title="View Photos of \${item.city}">
          📸 Photos
        </button>
      </td>
    \`;`;

if (appJs.includes(oldRenderTableCode)) {
  appJs = appJs.replace(oldRenderTableCode, newRenderTableCode);
  console.log('Updated renderItineraryTable in js/app.js');
} else {
  console.log('oldRenderTableCode pattern not found in app.js, checking alternate replacement');
  const tableInnerRegex = /tr\.innerHTML\s*=\s*`\s*<td class="col-table-day">[\s\S]*?<td class="col-table-plan">[\s\S]*?<\/td>\s*<td class="col-table-stay">[\s\S]*?<\/td>\s*<td class="col-table-action">[\s\S]*?<\/td>\s*`;/;
  if (tableInnerRegex.test(appJs)) {
    appJs = appJs.replace(tableInnerRegex, newRenderTableCode);
    console.log('Replaced tableInnerRegex in js/app.js');
  }
}

// Update renderTimeline in app.js to include card-nav-section
const oldRenderTimelineCode = `        <div class="day-card-main">
          <h4 class="card-day-theme">\${item.title}</h4>
          \${activitiesHtml}
          \${cardAdmissionHtml}
          \${cardOpeningHtml}
        </div>`;

const newRenderTimelineCode = `        <div class="day-card-main">
          <h4 class="card-day-theme">\${item.title}</h4>
          \${activitiesHtml}
          \${cardAdmissionHtml}
          \${cardOpeningHtml}
          \${(item.navigationGuide && item.navigationGuide.length > 0) ? \`
            <div class="card-nav-section">
              <div class="card-nav-title">🧭 <strong>How to Get There & Navigation Guide:</strong></div>
              <div class="card-nav-list">
                \${item.navigationGuide.map(s => \`
                  <div class="nav-step-card">
                    <div class="nav-step-header">
                      <span class="nav-step-spot">\${s.spot}</span>
                      <span class="nav-step-badge">\${s.badge}</span>
                    </div>
                    <div class="nav-step-route"><strong>Transit:</strong> \${s.transit}</div>
                    <div class="nav-step-desc"><strong>Directions:</strong> \${s.directions}</div>
                    \${s.tip ? \`<div class="nav-step-tip">💡 <strong>Day Tip:</strong> \${s.tip}</div>\` : ''}
                  </div>
                \`).join('')}
              </div>
            </div>
          \` : ''}
        </div>`;

if (appJs.includes(oldRenderTimelineCode)) {
  appJs = appJs.replace(oldRenderTimelineCode, newRenderTimelineCode);
  console.log('Updated renderTimeline in js/app.js');
}

writeFileSync(appJsPath, appJs, 'utf8');
console.log('Saved updated js/app.js');

// =========================================================================
// 2. UPDATE index.html
// =========================================================================
const indexHtmlPath = path.join(rootDir, 'index.html');
let html = readFileSync(indexHtmlPath, 'utf8');

// Update <thead> in table
const oldTheadRegex = /<thead>\s*<tr>\s*<th style="width: 110px;">Day \/ Date<\/th>\s*<th style="width: 140px;">City & Country<\/th>\s*<th>Detailed Daily Activities & Sights \(Highlights\)<\/th>\s*<th style="width: 250px;">Confirmed Accommodation & Transit<\/th>\s*<th style="width: 95px; text-align: center;">Photos<\/th>\s*<\/tr>\s*<\/thead>/;

const newThead = `<thead>
            <tr>
              <th style="width: 95px;">Day / Date</th>
              <th style="width: 125px;">City & Country</th>
              <th style="min-width: 290px;">Places to Visit & Highlights</th>
              <th style="min-width: 320px;">How to Get There & Navigation Guide</th>
              <th style="width: 230px;">Confirmed Accommodation & Transit</th>
              <th style="width: 85px; text-align: center;">Photos</th>
            </tr>
          </thead>`;

if (oldTheadRegex.test(html)) {
  html = html.replace(oldTheadRegex, newThead);
  console.log('Updated <thead> in index.html');
} else {
  console.log('oldTheadRegex not matched, trying substring replace');
  const simpleOldThead = `<th>Detailed Daily Activities & Sights (Highlights)</th>`;
  const simpleNewThead = `<th style="min-width: 290px;">Places to Visit & Highlights</th>\n              <th style="min-width: 320px;">How to Get There & Navigation Guide</th>`;
  if (html.includes(simpleOldThead)) {
    html = html.replace(simpleOldThead, simpleNewThead);
    console.log('Replaced simpleOldThead in index.html');
  }
}

// Update each table row in index.html
// We match each <tr class="itinerary-table-row..."> ... </tr>
html = html.replace(/<tr class="itinerary-table-row[^"]*"[^>]*>([\s\S]*?)<\/tr>/g, (fullRow) => {
  // If already has col-table-nav, skip
  if (fullRow.includes('col-table-nav')) return fullRow;

  // Extract day number (e.g. Day 1, Day 2)
  const dayMatch = fullRow.match(/<span class="table-day-badge">(Day \d+)<\/span>/);
  if (!dayMatch) return fullRow;
  const dayKey = dayMatch[1];

  const navHtml = generateNavHtml(dayKey, true);
  const navCell = `\n              <td class="col-table-nav">\n                ${navHtml}\n              </td>`;

  // Insert before <td class="col-table-stay">
  if (fullRow.includes('<td class="col-table-stay">')) {
    return fullRow.replace('<td class="col-table-stay">', `${navCell}\n              <td class="col-table-stay">`);
  }
  return fullRow;
});

// Update each card in #timelineContainer
html = html.replace(/<div class="day-card[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/g, (fullCard) => {
  if (fullCard.includes('card-nav-section')) return fullCard;

  const dayMatch = fullCard.match(/<span class="card-day-badge">(Day \d+)<\/span>/);
  if (!dayMatch) return fullCard;
  const dayKey = dayMatch[1];

  const navHtml = generateNavHtml(dayKey, false);
  const navSection = `
          <div class="card-nav-section">
            <div class="card-nav-title">🧭 <strong>How to Get There & Navigation Guide:</strong></div>
            ${navHtml}
          </div>`;

  // Insert at end of .day-card-main (before <div class="day-card-side">)
  if (fullCard.includes('<div class="day-card-side">')) {
    return fullCard.replace('<div class="day-card-side">', `${navSection}\n        </div>\n        <div class="day-card-side">`);
  }
  return fullCard;
});

writeFileSync(indexHtmlPath, html, 'utf8');
console.log('Saved updated index.html');

console.log('--- Completed navigation column updates ---');
