const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const indexPath = path.join(rootDir, 'index.html');
const appJsPath = path.join(rootDir, 'js/app.js');
const styleCssPath = path.join(rootDir, 'css/style.css');

console.log('--- 1. Modifying index.html ---');
let indexHtml = fs.readFileSync(indexPath, 'utf8');

// 1.1 Remove hero-actions block (the buttons in user screenshot)
indexHtml = indexHtml.replace(/<div class="hero-actions">[\s\S]*?<\/div>\s*<\/div>\s*<\/header>/, '</div>\n  </header>');

// 1.2 Remove viewGalleryBtn from itinerary-view-toggles
indexHtml = indexHtml.replace(/<button type="button" class="view-toggle-btn" id="viewGalleryBtn" data-view="gallery">[\s\S]*?<\/button>/, '');

// 1.3 Remove all btn-table-photos
indexHtml = indexHtml.replace(/<button type="button" class="btn-table-photos"[^>]*>[\s\S]*?<\/button>/g, '');

// 1.4 Remove span.has-photo-preview wrappers across index.html
indexHtml = indexHtml.replace(/<span class="has-photo-preview"[^>]*>([\s\S]*?)<\/span>/g, '$1');

// 1.5 Remove galleryViewContainer block
indexHtml = indexHtml.replace(/<!-- 3\. Visual Day-by-Day Photo Gallery Container[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/, '</section>');

// 1.6 Remove lightboxModal and placePhotoPopover
indexHtml = indexHtml.replace(/<!-- Lightbox Modal for Day Photos -->[\s\S]*?<!-- Floating Instant Photo Popover on Hover -->[\s\S]*?<\/div>\s*<\/div>/, '');

fs.writeFileSync(indexPath, indexHtml, 'utf8');
console.log('✅ index.html updated successfully.');

console.log('--- 2. Modifying js/app.js ---');
let appJs = fs.readFileSync(appJsPath, 'utf8');

// 2.1 Remove span.has-photo-preview from activities in appJs
appJs = appJs.replace(/<span class=\\"has-photo-preview\\"[^>]*>([\s\S]*?)<\\\/span>/g, '$1');
appJs = appJs.replace(/<span class="has-photo-preview"[^>]*>([\s\S]*?)<\/span>/g, '$1');

// 2.2 In renderTimeline, remove btn-card-photos
appJs = appJs.replace(/<button type="button" class="btn-card-photos" data-day="\${item\.day}">[\s\S]*?<\/button>\s*/g, '');

// 2.3 In renderTimeline, remove card click listener leading to map
const oldCardClick = `    const mapBtn = card.querySelector('.btn-card-map');
    if (mapBtn) {
      mapBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        focusDayOnMap(item);
      });
    }

    card.addEventListener('click', () => {
      focusDayOnMap(item);
    });`;

const newCardClick = `    // Map jump disabled per user request to keep cards view clean & un-annoying`;

if (appJs.includes(oldCardClick)) {
  appJs = appJs.replace(oldCardClick, newCardClick);
  console.log('✅ Removed card map jump event listener from renderTimeline.');
} else {
  // Regex fallback
  appJs = appJs.replace(/card\.addEventListener\('click',\s*\(\)\s*=>\s*\{\s*focusDayOnMap\(item\);\s*\}\);/g, '// card map jump removed');
  console.log('✅ Fallback: disabled card map jump.');
}

// 2.4 Disable setupPlacePhotoInteractions
appJs = appJs.replace(/function setupPlacePhotoInteractions\(\)\s*\{[\s\S]*?\n\}/, `function setupPlacePhotoInteractions() {
  // Disabled per user request - photo popover and photo modal removed
  return;
}`);

fs.writeFileSync(appJsPath, appJs, 'utf8');
console.log('✅ js/app.js updated successfully.');

console.log('--- 3. Modifying css/style.css ---');
let styleCss = fs.readFileSync(styleCssPath, 'utf8');

// 3.1 Change day-card cursor: pointer to cursor: default
styleCss = styleCss.replace(/\.day-card\s*\{([^}]*?)cursor:\s*pointer;/g, '.day-card {$1cursor: default;');
styleCss = styleCss.replace(/\.day-card:hover\s*\{[\s\S]*?\}/g, `.day-card:hover {
  border-color: #cbd5e1;
}`);

// 3.2 Override has-photo-preview & photo button styling
const cleanPhotoOverrides = `
/* Unbloat Overrides: Clean text for sights without hyperlink style or photo icons */
span.has-photo-preview {
  color: inherit !important;
  font-weight: inherit !important;
  cursor: default !important;
  text-decoration: none !important;
  padding: 0 !important;
  margin: 0 !important;
  background: transparent !important;
}

span.has-photo-preview::after {
  display: none !important;
  content: "" !important;
}

span.has-photo-preview:hover {
  color: inherit !important;
  background: transparent !important;
  text-decoration: none !important;
}

span.has-photo-preview:hover::after {
  display: none !important;
}

.btn-table-photos,
.btn-card-photos,
.place-photo-popover,
.lightbox-modal,
#viewGalleryBtn,
#galleryViewContainer {
  display: none !important;
}
`;

if (!styleCss.includes('Unbloat Overrides: Clean text for sights')) {
  styleCss += '\n' + cleanPhotoOverrides;
}

fs.writeFileSync(styleCssPath, styleCss, 'utf8');
console.log('✅ css/style.css updated successfully.');
