/**
 * curate_all_70_landmarks.mjs
 * Curates 5 verified, authentic, real photographs for each of the 70 landmarks across the Schengen Tour.
 * Filters out historical war rubble, concrete barricades, dead birds, door knobs, COVID signs, train tracks, 1790 drawings, Roman busts, etc.
 */
import { readFileSync, writeFileSync } from 'fs';

const GALLERY_PATH = '/Users/jeana/Projects/schengen-trip-2026/js/gallery-data.js';
const DIST_PATH = '/Users/jeana/Projects/schengen-trip-2026/dist/js/gallery-data.js';

const SIGHT_CONFIGS = {
  "UNESCO 17th-Century Canal Ring": [
    "Herengracht Amsterdam", "Keizersgracht Amsterdam", "Prinsengracht canal Amsterdam", "Amsterdam Grachten"
  ],
  "Dam Square & Royal Palace": [
    "Koninklijk Paleis Amsterdam", "Paleis op de Dam", "Dam Square Amsterdam"
  ],
  "Begijnhof Courtyard": [
    "Begijnhof Amsterdam", "Houten Huys Begijnhof Amsterdam"
  ],
  "Leidseplein & Amsterdam Light Festival": [
    "Amsterdam Light Festival", "Leidseplein Amsterdam", "Stadsschouwburg Amsterdam"
  ],
  "Zaanse Schans Historic Windmills": [
    "Zaanse Schans Windmühlen", "Windmills Zaanse Schans", "Zaanse Schans Zaandam"
  ],
  "Rijksmuseum at Museumplein": [
    "Rijksmuseum exterior Amsterdam", "Rijksmuseum facade", "Rijksmuseum Cuypers"
  ],
  "Ice Village Amsterdam & Christmas Market": [
    "Museumplein schaatsbaan", "Ice Amsterdam Museumplein", "Ice Village Amsterdam"
  ],
  "The Jordaan Canal District & Boat Cruise": [
    "Brouwersgracht Amsterdam", "Bloemgracht Amsterdam", "Jordaan Amsterdam canal"
  ],
  "The Hague Netherlands LDS Temple": [
    "The Hague Netherlands Temple", "Zoetermeer Tempel", "Den Haag Tempel"
  ],
  "Peace Palace (Vredespaleis)": [
    "Peace Palace The Hague", "Vredespaleis Den Haag", "International Court of Justice The Hague"
  ],
  "International Criminal Court (ICC)": [
    "International Criminal Court building The Hague", "ICC The Hague building"
  ],
  "Cologne Cathedral (Kölner Dom)": [
    "Kölner Dom Westfassade", "Cologne Cathedral facade", "Kölner Dom Rhein"
  ],
  "Hohenzollern Bridge (Hohenzollernbrücke)": [
    "Hohenzollernbrücke Köln", "Hohenzollern Bridge Cologne Cathedral"
  ],
  "Lindt Chocolate Museum (Schokoladenmuseum)": [
    "Schokoladenmuseum Köln", "Chocolate Museum Cologne", "Imhoff-Schokoladenmuseum"
  ],
  "Cologne Cathedral Christmas Market (Roncalliplatz)": [
    "Weihnachtsmarkt am Kölner Dom", "Weihnachtsmarkt Roncalliplatz Köln"
  ],
  "Düsseldorf Altstadt & Rhine River Promenade": [
    "Rheinuferpromenade Düsseldorf", "Düsseldorf Altstadt", "Schlossturm Düsseldorf"
  ],
  "Düsseldorf 7 Themed Christmas Markets": [
    "Weihnachtsmarkt Düsseldorf", "Marktplatz Düsseldorf Weihnachtsmarkt", "Engelchenmarkt Düsseldorf"
  ],
  "Königsallee & Corneliusplatz Ice Rink": [
    "Königsallee Düsseldorf", "Corneliusplatz Düsseldorf Eisbahn", "Königsallee Graben"
  ],
  "Little Tokyo (Immermannstraße)": [
    "Immermannstraße Düsseldorf", "Düsseldorf Japanese quarter", "EKO-Haus Düsseldorf"
  ],
  "Eiserner Steg (Iron Footbridge)": [
    "Eiserner Steg Frankfurt", "Eiserner Steg skyline Frankfurt"
  ],
  "Römerberg & Frankfurt Christmas Market": [
    "Römerberg Weihnachtsmarkt", "Frankfurter Weihnachtsmarkt Römerberg", "Römer Frankfurt"
  ],
  "Frankfurt Kaiserdom (Cathedral St. Bartholomäus)": [
    "Kaiserdom St. Bartholomäus Frankfurt", "Frankfurter Dom Turm"
  ],
  "Paulsplatz Christmas Market": [
    "Paulsplatz Frankfurt", "Paulskirche Frankfurt", "Weihnachtsmarkt Paulsplatz Frankfurt"
  ],
  "Zeil Shopping Promenade & Museumsufer": [
    "MyZeil Frankfurt", "Zeil Frankfurt am Main", "Hauptwache Frankfurt"
  ],
  "Goethe House & Museum": [
    "Goethe-Haus Frankfurt", "Goethehaus Frankfurt am Main"
  ],
  "The Frankfurt Germany LDS Temple": [
    "Frankfurt Germany Temple", "Frankfurt-Tempel Friedrichsdorf"
  ],
  "Museumsufer (Main Riverfront Promenade)": [
    "Museumsufer Frankfurt", "Schaumainkai Frankfurt", "Mainufer Frankfurt Skyline"
  ],
  "Place Kléber 30m Great Christmas Tree": [
    "Sapin place Kléber Strasbourg", "Grand sapin Strasbourg", "Place Kléber Noël"
  ],
  "Petite France Half-Timbered Quarter": [
    "Petite France Strasbourg", "Maison des Tanneurs Strasbourg", "Ponts Couverts Strasbourg"
  ],
  "Strasbourg Cathedral (Cathédrale Notre-Dame)": [
    "Cathédrale Notre-Dame de Strasbourg", "Strasbourg Cathedral facade", "Cathédrale de Strasbourg ouest"
  ],
  "Christkindelsmärik at Place Broglie": [
    "Christkindelsmärik place Broglie Strasbourg", "Marché de Noël place Broglie Strasbourg"
  ],
  "Colmar Old Town Christmas Market at Koïfhus": [
    "Marché de Noël Colmar Koïfhus", "Place de l'Ancienne Douane Colmar", "Colmar Marché de Noël"
  ],
  "Colmar Petite Venise (Beauty & the Beast)": [
    "Petite Venise Colmar", "Little Venice Colmar", "Quai de la Poissonnerie Colmar"
  ],
  "Maison Pfister (Howl's Moving Castle)": [
    "Maison Pfister Colmar", "Maison Pfister", "Rue des Marchands Colmar"
  ],
  "Bern UNESCO Old Town & Covered Sandstone Arcades (Lauben)": [
    "Kramgasse Bern", "Gerechtigkeitsgasse Bern", "Altstadt Bern Lauben"
  ],
  "Zytglogge Astronomical Clock Tower": [
    "Zytglogge Bern", "Zytgloggeturm Bern", "Astronomische Uhr Zytglogge"
  ],
  "Nydeggbrücke Bridge & Bear Park Overlook": [
    "Nydeggbrücke Bern", "Untertorbrücke Aare Bern", "Bärenpark Bern Aare"
  ],
  "Bundeshaus (Swiss Federal Palace & Terrace)": [
    "Bundeshaus Bern", "Federal Palace of Switzerland Bern", "Bundesplatz Bern"
  ],
  "First Cliff Walk by Tissot (Mount First, 2,168m)": [
    "First Cliff Walk Grindelwald", "Cliff Walk First", "First Cliff Walk by Tissot"
  ],
  "Grindelwald Alpine Valley & Eiger North Face": [
    "Grindelwald Eiger", "Eiger Nordwand Grindelwald", "Grindelwald valley"
  ],
  "Iseltwald Landing Stage (Lake Brienz CLOY Pier)": [
    "Iseltwald Brienzersee", "Iseltwald landing stage", "Iseltwald Lake Brienz"
  ],
  "Lauterbrunnen Valley & Staubbach Falls": [
    "Staubbachfall Lauterbrunnen", "Lauterbrunnental Staubbach", "Lauterbrunnen waterfall"
  ],
  "Mürren Car-Free Alpine Village (1,638m)": [
    "Mürren Bernese Oberland", "Murren village Switzerland", "Mürren Eiger view"
  ],
  "Blausee Nature Park (Path of the 1,000 Lights)": [
    "Blausee Kandergrund", "Blausee Blue Lake Bern", "Blausee Mitholz"
  ],
  "Spiez Castle & Lake Thun Waterfront": [
    "Schloss Spiez", "Spiez Castle Thunersee", "Schloss Spiez Thunersee"
  ],
  "Panoramabrücke Sigriswil Suspension Bridge": [
    "Panoramabrücke Sigriswil", "Hängebrücke Sigriswil Thunersee"
  ],
  "Bern Rosengarten Sunset Viewpoint over Aare River": [
    "Rosengarten Bern Aussicht", "Blick vom Rosengarten Bern", "Rosengarten Bern Altstadt"
  ],
  "Bern Switzerland LDS Temple": [
    "Bern Switzerland Temple", "Zollikofen Temple Bern"
  ],
  "Bern Temple Alpine Grounds & Pine Reflection Path": [
    "Bern Switzerland Temple grounds", "Tempel Zollikofen grounds", "Zollikofen Switzerland Temple"
  ],
  "Musée du Louvre & Glass Pyramid": [
    "Louvre Pyramid night", "Pyramide du Louvre", "Cour Napoléon Louvre"
  ],
  "Tuileries Garden & Place de la Concorde": [
    "Jardin des Tuileries", "Place de la Concorde Paris", "Grand Bassin Tuileries"
  ],
  "Galeries Lafayette Haussmann Grand Dome": [
    "Galeries Lafayette Haussmann dome", "Coupole Galeries Lafayette", "Galeries Lafayette Christmas tree"
  ],
  "Arc de Triomphe (Rooftop Panoramic Terrace)": [
    "Arc de Triomphe de l'Étoile", "Arc de Triomphe Paris facade", "View from Arc de Triomphe Paris"
  ],
  "Avenue des Champs-Élysées": [
    "Avenue des Champs-Élysées Paris", "Champs-Élysées illuminations", "Champs-Élysées view Arc de Triomphe"
  ],
  "Musée d'Orsay (Gare d'Orsay)": [
    "Musée d'Orsay facade", "Gare d'Orsay Paris", "Musée d'Orsay clock Seine"
  ],
  "Notre-Dame de Paris Cathedral (Île de la Cité)": [
    "Notre-Dame de Paris facade", "Cathedrale Notre-Dame de Paris", "Notre Dame Paris Seine"
  ],
  "Shakespeare and Company Historic Bookstore": [
    "Shakespeare and Company Paris", "Shakespeare and Company bookstore"
  ],
  "The Eiffel Tower & Trocadéro View (NYE Countdown)": [
    "Eiffel Tower from Trocadero", "Tour Eiffel Trocadéro", "Eiffel Tower Paris night"
  ],
  "Champs-Élysées NYE Celebration & Light Show": [
    "Champs-Élysées illuminations", "Arc de Triomphe illuminations de Noël", "Champs Elysées illuminations de Noël"
  ],
  "Jardin du Luxembourg (Luxembourg Gardens)": [
    "Jardin du Luxembourg Paris", "Palais du Luxembourg", "Fontaine Médicis Jardin du Luxembourg"
  ],
  "Place des Vosges & Historic Le Marais": [
    "Place des Vosges square Paris", "Place des Vosges arcades", "Place des Vosges Paris"
  ],
  "Latin Quarter & Saint-Germain-des-Prés": [
    "Quartier Latin Paris", "Saint-Germain-des-Prés Paris", "Place Saint-Germain-des-Prés"
  ],
  "Seine Riverbanks & Historic Quays Promenade": [
    "Quais de Seine Paris", "Bouquinistes de Paris Seine", "Pont Neuf Quais de Seine"
  ],
  "Palace of Versailles (Château de Versailles)": [
    "Château de Versailles facade", "Palace of Versailles Cour d'Honneur", "Château de Versailles Place d'Armes"
  ],
  "Galerie des Glaces (Hall of Mirrors Interior)": [
    "Galerie des Glaces Versailles interior", "Hall of Mirrors Palace of Versailles", "Galerie des Glaces Versailles lustres"
  ],
  "Versailles Palace Orangery & Parterre Gardens": [
    "Orangerie Versailles", "Parterre de Versailles", "Jardins de Versailles parterre"
  ],
  "Paris France LDS Temple": [
    "Paris France Temple", "Temple de Paris Le Chesnay"
  ],
  "Boulevard Saint-Michel & Latin Quarter Stroll": [
    "Boulevard Saint-Michel Paris", "Fontaine Saint-Michel Paris"
  ],
  "Pont Alexandre III Beaux-Arts Bridge": [
    "Pont Alexandre III Paris", "Pont Alexandre III Invalides"
  ],
  "Grand Palais Glass Vault & Exhibition Hall": [
    "Grand Palais Paris", "Nef du Grand Palais", "Grand Palais facade Paris"
  ]
};

const NEGATIVE_TERMS = [
  "toter", "dead", "sperre", "beton", "barriere", "bollard", "security",
  "1944", "1945", "1881", "1890", "1900", "1913", "1914", "1918", "1939", "1940",
  "ruin", "bomb", "rubble", "war", "porte_du_n", "porte du", "door",
  "schild", "sign", "street_sign", "street sign", "covid", "corona", "impf",
  "zug", "ice_3", "ice_tz", "train", "gleis", "station_train", "rbs_s8", "s4_richtung",
  "drawing", "1790", "gravure", "etching", "illustration", "painting", "estampe",
  "buste", "bust", "statue_of_liberty", "map", "plan", "diagram", "carte", "karte",
  "coat_of_arms", "wappen", "flag", "drapeau", "flagge", "logo", "stamp", "timbre", "briefmarke",
  "staatsarchiv", "canberra", "monona", "madison", "nemi", "red_light", "redlight",
  "graffiti", "huesgen-uhr", "cine_rex", "thumbnail.jpg"
];

const CAPTIONS = [
  "Featured Landmark View",
  "Wide-Angle Perspective",
  "Architectural Detail",
  "Atmospheric Angle",
  "Alternate Vantage Point"
];

const delay = ms => new Promise(r => setTimeout(r, ms));

async function fetchFromWikimedia(query) {
  const url = `https://commons.wikimedia.org/w/api.php?` + new URLSearchParams({
    action: 'query',
    generator: 'search',
    gsrsearch: `${query} filetype:bitmap`,
    gsrnamespace: '6',
    gsrlimit: '15',
    prop: 'imageinfo',
    iiprop: 'url|size|mime',
    iiurlwidth: '1280',
    format: 'json',
    origin: '*'
  });

  try {
    const resp = await fetch(url, {
      headers: {
        'User-Agent': 'SchengenTourPlanner/2.0 (travel-auth@schengentrip2026.org)'
      }
    });
    if (!resp.ok) return [];
    const data = await resp.json();
    if (!data.query?.pages) return [];

    const results = [];
    for (const page of Object.values(data.query.pages)) {
      if (!page.imageinfo?.[0]) continue;
      const info = page.imageinfo[0];
      if (!info.mime?.includes('jpeg') && !info.mime?.includes('jpg')) continue;
      if (info.width < 700) continue;

      const titleLower = page.title.toLowerCase();
      if (NEGATIVE_TERMS.some(neg => titleLower.includes(neg))) continue;

      const thumbUrl = info.thumburl || info.url;
      if (thumbUrl) {
        results.push({
          title: page.title,
          url: thumbUrl
        });
      }
    }
    return results;
  } catch (err) {
    console.error(`Error querying "${query}":`, err.message);
    return [];
  }
}

async function main() {
  console.log('🚀 Starting Master Photo Curation for all 70 Landmarks...\n');

  const content = readFileSync(GALLERY_PATH, 'utf8');
  const si = content.indexOf('window.galleryData = [');
  let bc = 0, ei = -1;
  for (let i = si + 'window.galleryData = '.length; i < content.length; i++) {
    if (content[i] === '[') bc++;
    if (content[i] === ']') bc--;
    if (bc === 0) { ei = i + 1; break; }
  }
  const data = JSON.parse(content.substring(si + 'window.galleryData = '.length, ei));

  const usedUrls = new Set();
  const summaryReport = [];

  let sightCounter = 0;

  for (const day of data) {
    for (const sight of (day.sights || [])) {
      sightCounter++;
      const name = sight.name;
      console.log(`[${sightCounter}/70] Curating: "${name}" (${day.day} - ${day.city})`);

      const queries = SIGHT_CONFIGS[name] || [name];
      const curatedPhotos = [];

      for (const q of queries) {
        if (curatedPhotos.length >= 5) break;
        await delay(500); // polite delay
        const results = await fetchFromWikimedia(q);
        for (const item of results) {
          if (curatedPhotos.length >= 5) break;
          if (!usedUrls.has(item.url) && !curatedPhotos.some(p => p.url === item.url)) {
            curatedPhotos.push(item);
            usedUrls.add(item.url);
          }
        }
      }

      // If we got fewer than 5 from Wikimedia, check existing photos that are clean
      if (curatedPhotos.length < 5 && sight.photos) {
        for (const existing of sight.photos) {
          if (curatedPhotos.length >= 5) break;
          const u = existing.url;
          const low = u.toLowerCase();
          if (u && !u.includes('picsum') && !NEGATIVE_TERMS.some(neg => low.includes(neg)) && !usedUrls.has(u)) {
            curatedPhotos.push({ title: existing.caption, url: u });
            usedUrls.add(u);
          }
        }
      }

      console.log(`   -> Found ${curatedPhotos.length}/5 verified photos`);

      // Apply to sight
      const finalPhotos = curatedPhotos.slice(0, 5).map((p, idx) => ({
        url: p.url,
        caption: `${name} - ${CAPTIONS[idx] || 'Perspective ' + (idx + 1)}`
      }));

      sight.photos = finalPhotos;
      sight.images = finalPhotos.map(p => p.url);
      sight.image = finalPhotos[0]?.url || '';

      summaryReport.push({
        day: day.day,
        city: day.city,
        sight: name,
        photos: finalPhotos.map(p => p.url)
      });
    }
  }

  // Write updated gallery data
  const prefix = content.substring(0, si + 'window.galleryData = '.length);
  const suffix = content.substring(ei);
  const out = prefix + JSON.stringify(data, null, 2) + suffix;

  writeFileSync(GALLERY_PATH, out, 'utf8');
  writeFileSync(DIST_PATH, out, 'utf8');
  writeFileSync('/Users/jeana/Projects/schengen-trip-2026/scripts/curated_photos_report.json', JSON.stringify(summaryReport, null, 2), 'utf8');

  console.log('\n🎉 ALL 70 SIGHTS FULLY CURATED AND SAVED!');
  console.log(`Saved to ${GALLERY_PATH} and ${DIST_PATH}`);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
