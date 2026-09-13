/**
 * patch_the_last_9_photos.mjs
 * Patches the exact verified CDN URLs for the last remaining photos.
 */
import { readFileSync, writeFileSync } from 'fs';

const GALLERY_PATH = '/Users/jeana/Projects/schengen-trip-2026/js/gallery-data.js';
const DIST_PATH = '/Users/jeana/Projects/schengen-trip-2026/dist/js/gallery-data.js';

const SIGHT_UPDATES = {
  "Rijksmuseum at Museumplein": [
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/25/Rijksmuseum_in_Amsterdam.jpg/1280px-Rijksmuseum_in_Amsterdam.jpg",
      caption: "Rijksmuseum at Museumplein - Featured Landmark View"
    },
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/07/Rijksmuseum_winter_7441.jpg/1280px-Rijksmuseum_winter_7441.jpg",
      caption: "Rijksmuseum at Museumplein - Wide-Angle Perspective"
    },
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a3/South_facade_of_the_Rijksmuseum_Amsterdam_20180702.jpg/1280px-South_facade_of_the_Rijksmuseum_Amsterdam_20180702.jpg",
      caption: "Rijksmuseum at Museumplein - Architectural Detail"
    },
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/80/South_facade_of_the_Rijksmuseum_Amsterdam_%28DSCF0528%29.jpg/1280px-South_facade_of_the_Rijksmuseum_Amsterdam_%28DSCF0528%29.jpg",
      caption: "Rijksmuseum at Museumplein - Atmospheric Angle"
    },
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/95/Amsterdam_-_Stadhouderskade_-_North_facade_of_the_Rijksmuseum_Amsterdam_-_Fisheye_Image.jpg/1280px-Amsterdam_-_Stadhouderskade_-_North_facade_of_the_Rijksmuseum_Amsterdam_-_Fisheye_Image.jpg",
      caption: "Rijksmuseum at Museumplein - Alternate Vantage Point"
    }
  ],
  "Palace of Versailles (Château de Versailles)": [
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f1/Versailles_-_vasque_et_fa%C3%A7ade.jpg/1280px-Versailles_-_vasque_et_fa%C3%A7ade.jpg",
      caption: "Palace of Versailles (Château de Versailles) - Featured Landmark View"
    },
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/77/Le_ch%C3%A2teau_de_Versailles_sous_la_neige.jpg/1280px-Le_ch%C3%A2teau_de_Versailles_sous_la_neige.jpg",
      caption: "Palace of Versailles (Château de Versailles) - Wide-Angle Perspective"
    },
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c9/Facade_principale_du_ch%C3%A2teau_de_Versailles%2C_c%C3%B4t%C3%A9_jardins_-_DSC_0600.jpg/1280px-Facade_principale_du_ch%C3%A2teau_de_Versailles%2C_c%C3%B4t%C3%A9_jardins_-_DSC_0600.jpg",
      caption: "Palace of Versailles (Château de Versailles) - Architectural Detail"
    },
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1b/Ch%C3%A2teau_de_Versailles_au_coucher_du_soleil_en_2013_13.jpg/1280px-Ch%C3%A2teau_de_Versailles_au_coucher_du_soleil_en_2013_13.jpg",
      caption: "Palace of Versailles (Château de Versailles) - Atmospheric Angle"
    },
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3e/2017_Cour_de_Marbre_du_Ch%C3%A2teau_de_Versailles_P22.jpg/1280px-2017_Cour_de_Marbre_du_Ch%C3%A2teau_de_Versailles_P22.jpg",
      caption: "Palace of Versailles (Château de Versailles) - Alternate Vantage Point"
    }
  ],
  "Boulevard Saint-Michel & Latin Quarter Stroll": [
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c1/Boulevard_Saint-Michel_1.jpg/1280px-Boulevard_Saint-Michel_1.jpg",
      caption: "Boulevard Saint-Michel & Latin Quarter Stroll - Featured Landmark View"
    },
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d6/Boulevard_Saint-Michel_%28Paris%29%2C_num%C3%A9ro_4.jpg/1280px-Boulevard_Saint-Michel_%28Paris%29%2C_num%C3%A9ro_4.jpg",
      caption: "Boulevard Saint-Michel & Latin Quarter Stroll - Wide-Angle Perspective"
    },
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4f/Fontaine_Saint-Michel_Paris_DSC_4355.JPG/1280px-Fontaine_Saint-Michel_Paris_DSC_4355.JPG",
      caption: "Boulevard Saint-Michel & Latin Quarter Stroll - Architectural Detail"
    },
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d1/Fontaine_Saint-Michel%2C_Paris_25_June_2016.jpg/1280px-Fontaine_Saint-Michel%2C_Paris_25_June_2016.jpg",
      caption: "Boulevard Saint-Michel & Latin Quarter Stroll - Atmospheric Angle"
    },
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/86/Boulevard_Saint-Michel%2C_Paris_5.jpg/1280px-Boulevard_Saint-Michel%2C_Paris_5.jpg",
      caption: "Boulevard Saint-Michel & Latin Quarter Stroll - Alternate Vantage Point"
    }
  ],
  "Grand Palais Glass Vault & Exhibition Hall": [
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4e/Grand_Palais_Paris_02.jpg/1280px-Grand_Palais_Paris_02.jpg",
      caption: "Grand Palais Glass Vault & Exhibition Hall - Featured Landmark View"
    },
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b2/Grand_Palais_-_PA00088877_-_Bonhams_2013_-_Vue_d%27ensemble_-_007.jpg/1280px-Grand_Palais_-_PA00088877_-_Bonhams_2013_-_Vue_d%27ensemble_-_007.jpg",
      caption: "Grand Palais Glass Vault & Exhibition Hall - Wide-Angle Perspective"
    },
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/78/Nef_du_Grand_Palais_%28d%C3%A9tails%29%2C_juin_2018_%281%29.jpg/1280px-Nef_du_Grand_Palais_%28d%C3%A9tails%29%2C_juin_2018_%281%29.jpg",
      caption: "Grand Palais Glass Vault & Exhibition Hall - Architectural Detail"
    },
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f8/Nef_du_Grand_Palais_%28d%C3%A9tails%29%2C_juin_2018_%284%29.jpg/1280px-Nef_du_Grand_Palais_%28d%C3%A9tails%29%2C_juin_2018_%284%29.jpg",
      caption: "Grand Palais Glass Vault & Exhibition Hall - Atmospheric Angle"
    },
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/81/Nef_du_Grand_Palais_%28d%C3%A9tails%29%2C_juin_2018_%2813%29.jpg/1280px-Nef_du_Grand_Palais_%28d%C3%A9tails%29%2C_juin_2018_%2813%29.jpg",
      caption: "Grand Palais Glass Vault & Exhibition Hall - Alternate Vantage Point"
    }
  ]
};

const content = readFileSync(GALLERY_PATH, 'utf8');
const si = content.indexOf('window.galleryData = [');
let bc = 0, ei = -1;
for (let i = si + 'window.galleryData = '.length; i < content.length; i++) {
  if (content[i] === '[') bc++;
  if (content[i] === ']') bc--;
  if (bc === 0) { ei = i + 1; break; }
}
const data = JSON.parse(content.substring(si + 'window.galleryData = '.length, ei));

for (const day of data) {
  for (const s of (day.sights || [])) {
    if (SIGHT_UPDATES[s.name]) {
      const p = SIGHT_UPDATES[s.name];
      s.photos = p;
      s.images = p.map(item => item.url);
      s.image = p[0].url;
      console.log(`✅ Patched: ${s.name}`);
    }
  }
}

const prefix = content.substring(0, si + 'window.galleryData = '.length);
const suffix = content.substring(ei);
const out = prefix + JSON.stringify(data, null, 2) + suffix;

writeFileSync(GALLERY_PATH, out, 'utf8');
writeFileSync(DIST_PATH, out, 'utf8');
console.log('Saved to js/gallery-data.js and dist/js/gallery-data.js');
