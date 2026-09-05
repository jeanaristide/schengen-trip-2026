const fs = require('fs');
const path = require('path');

const distIndexPath = path.join(__dirname, '../dist/index.html');
const distGalleryPath = path.join(__dirname, '../dist/gallery.html');
const distAppJsPath = path.join(__dirname, '../dist/js/app.js');
const distGalleryDataPath = path.join(__dirname, '../dist/js/gallery-data.js');
const distGalleryJsPath = path.join(__dirname, '../dist/js/gallery.js');

let errors = [];

// 1. Check index.html
console.log('--- Verifying dist/index.html ---');
const indexHtml = fs.readFileSync(distIndexPath, 'utf8');

if (!indexHtml.includes('itinerary-admission-summary')) {
  errors.push('Missing itinerary-admission-summary in dist/index.html');
}

const tableMatches = (indexHtml.match(/class="table-admission-item"/g) || []).length;
console.log(`Table admission items count: ${tableMatches} (Expected: 21)`);
if (tableMatches !== 21) {
  errors.push(`Expected 21 table-admission-item elements, found ${tableMatches}`);
}

const cardMatches = (indexHtml.match(/class="card-admission-item"/g) || []).length;
console.log(`Card admission items count: ${cardMatches} (Expected: 21)`);
if (cardMatches !== 21) {
  errors.push(`Expected 21 card-admission-item elements, found ${cardMatches}`);
}

// 2. Check gallery-data.js
console.log('--- Verifying dist/js/gallery-data.js ---');
global.window = global;
require(distGalleryDataPath);
const days = window.galleryData || [];
console.log(`Total days in galleryData: ${days.length}`);
let totalSights = 0;
let paidSights = 0;
let freeSights = 0;

days.forEach(day => {
  day.sights.forEach(sight => {
    totalSights++;
    if (!sight.admission) {
      errors.push(`Sight ${sight.name} on Day ${day.dayNum} is missing admission property`);
    }
    if (typeof sight.isPaid !== 'boolean') {
      errors.push(`Sight ${sight.name} on Day ${day.dayNum} is missing isPaid boolean`);
    }
    if (sight.isPaid) paidSights++;
    else freeSights++;
  });
});

console.log(`Total sights: ${totalSights}, Paid sights: ${paidSights}, Free sights: ${freeSights}`);

// 3. Check app.js
console.log('--- Verifying dist/js/app.js ---');
const appJsContent = fs.readFileSync(distAppJsPath, 'utf8');
const appJsAdmissions = (appJsContent.match(/"admissionHtml":/g) || []).length;
console.log(`app.js itineraryData admissionHtml count: ${appJsAdmissions} (Expected: 21)`);
if (appJsAdmissions !== 21) {
  errors.push(`Expected 21 admissionHtml in itineraryData, found ${appJsAdmissions}`);
}

if (!appJsContent.includes('table-admission-item')) {
  errors.push('renderItineraryTable in app.js does not render table-admission-item');
}
if (!appJsContent.includes('card-admission-item')) {
  errors.push('renderTimeline in app.js does not render card-admission-item');
}
if (!appJsContent.includes('sight-admission-badge')) {
  errors.push('renderGalleryView in app.js does not render sight-admission-badge');
}

// 4. Check gallery.js
console.log('--- Verifying dist/js/gallery.js ---');
const galleryJsContent = fs.readFileSync(distGalleryJsPath, 'utf8');
if (!galleryJsContent.includes('sight-admission-badge')) {
  errors.push('gallery.js does not render sight-admission-badge');
}

if (errors.length > 0) {
  console.error('FAILED with errors:');
  errors.forEach(e => console.error(' - ' + e));
  process.exit(1);
} else {
  console.log('✅ ALL VERIFICATION CHECKS PASSED PERFECTLY!');
}
