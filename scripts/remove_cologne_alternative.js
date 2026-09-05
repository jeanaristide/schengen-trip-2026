const fs = require('fs');
const path = require('path');

const indexHtmlPath = path.join(__dirname, '../index.html');
const appJsPath = path.join(__dirname, '../js/app.js');

// 1. Update index.html
let html = fs.readFileSync(indexHtmlPath, 'utf8');

// Update section header description
const oldHeaderP = `<p>A proactive pacing and sleep-quality analysis of your 21-day winter journey across 4 countries. Identifying potential exhaustion bottlenecks and comparing your confirmed schedule with the recommended Cologne stopover at Hotel Madison am Dom.</p>`;
const newHeaderP = `<p>A proactive pacing and sleep-quality analysis of your 21-day winter journey across 4 countries. Identifying potential exhaustion bottlenecks and practical solutions to ensure you stay energized, well-rested, and fully refreshed throughout your trip.</p>`;

if (html.includes(oldHeaderP)) {
  html = html.replace(oldHeaderP, newHeaderP);
}

// Remove the route-comparison-wrapper block
const startMarker = '    <!-- 1. Route Comparison: Original vs Cologne Alternative -->';
const endMarker = '    <!-- 2. The 6 Flagged Fatigue Bottlenecks Scorecard -->';

const startIdx = html.indexOf(startMarker);
const endIdx = html.indexOf(endMarker);

if (startIdx !== -1 && endIdx !== -1) {
  html = html.slice(0, startIdx) + endMarker + html.slice(endIdx + endMarker.length);
  console.log('Successfully removed route-comparison-wrapper from index.html!');
} else {
  console.error('Could not find start/end marker for route-comparison-wrapper');
}

// Replace Day 4 and Day 5 fatigue notice links in index.html
const oldD4Link = `<a href="#travelWellnessSection" class="fatigue-alert-link">⚠️ Fatigue Notice: Overnight Coach &amp; Temple Timing ➔ View Cologne Hotel Alternative</a>`;
const newD4Link = `<a href="#travelWellnessSection" class="fatigue-alert-link">🛡️ Travel Wellness: Night Coach Sleep Tips &amp; Energy Pacing ➔</a>`;

const oldD5Link = `<a href="#travelWellnessSection" class="fatigue-alert-link">⚠️ Fatigue Notice: 07:15 Arrival vs 08:15 Temple ➔ View Cologne Hotel Alternative</a>`;
const newD5Link = `<a href="#travelWellnessSection" class="fatigue-alert-link">🛡️ Mitigated: Confirmed Alternative Temple Booking on Tue 22 Dec ➔</a>`;

html = html.split(oldD4Link).join(newD4Link);
html = html.split(oldD5Link).join(newD5Link);

fs.writeFileSync(indexHtmlPath, html, 'utf8');

// 2. Update js/app.js
let appJs = fs.readFileSync(appJsPath, 'utf8');

const oldAppD4Link = `⚠️ Fatigue Notice: Overnight Coach &amp; Temple Timing ➔ View Cologne Hotel Alternative`;
const newAppD4Link = `🛡️ Travel Wellness: Night Coach Sleep Tips &amp; Energy Pacing ➔`;

const oldAppD5Link = `⚠️ Fatigue Notice: 07:15 Arrival vs 08:15 Temple ➔ View Cologne Hotel Alternative`;
const newAppD5Link = `🛡️ Mitigated: Confirmed Alternative Temple Booking on Tue 22 Dec ➔`;

appJs = appJs.split(oldAppD4Link).join(newAppD4Link);
appJs = appJs.split(oldAppD5Link).join(newAppD5Link);

fs.writeFileSync(appJsPath, appJs, 'utf8');
console.log('Successfully updated js/app.js!');
