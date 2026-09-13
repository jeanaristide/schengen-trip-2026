import { readFileSync, writeFileSync } from 'fs';
import { NAVIGATION_DATA } from './navigation_data.mjs';

const appJsPath = 'js/app.js';
let appJs = readFileSync(appJsPath, 'utf8');

const startMarker = 'const itineraryData = [';
const endMarker = '];\n\nlet currentItineraryView';

const startIndex = appJs.indexOf(startMarker);
const endIndex = appJs.indexOf(endMarker);

if (startIndex !== -1 && endIndex !== -1) {
  const jsonText = appJs.slice(startIndex + startMarker.length, endIndex).trim();
  try {
    const rawArray = JSON.parse('[' + jsonText + ']');
    console.log(`Parsed ${rawArray.length} items from itineraryData`);

    rawArray.forEach(item => {
      const dayKey = item.day;
      if (NAVIGATION_DATA[dayKey]) {
        item.navigationGuide = NAVIGATION_DATA[dayKey];
      }
    });

    const newJsonText = JSON.stringify(rawArray, null, 2);
    // Replace array contents cleanly
    appJs = appJs.slice(0, startIndex + startMarker.length) + '\n' + newJsonText.slice(1, -1) + '\n' + appJs.slice(endIndex);
    writeFileSync(appJsPath, appJs, 'utf8');
    console.log('Successfully updated all 21 items in itineraryData with navigationGuide!');
  } catch (err) {
    console.error('Error parsing JSON:', err.message);
  }
} else {
  console.error('Could not find start/end markers in js/app.js');
}
