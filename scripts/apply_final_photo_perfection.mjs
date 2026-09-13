/**
 * apply_final_photo_perfection.mjs
 * Performs precise, surgical photo perfection on the remaining sights that needed specific replacements:
 * - Cologne Cathedral: Certified Quality Images of the West Facade and Rhine panorama
 * - Galerie des Glaces: Golden chandeliers, mirrors, and vaulted royal hall
 * - Paris France LDS Temple: Real photos of Le Chesnay temple architecture and grounds
 * - Grand Palais: Colossal glass vault / Nave and Beaux-Arts facade
 * - Palace of Versailles: Royal golden gate and Cour d'Honneur (no train station)
 * - Bern Temple Alpine Grounds: Zollikofen pine paths and gardens (no LA temple)
 * - Rijksmuseum: Iconic Cuypers building facade and Great Hall (no burnt palace)
 * - Frankfurt Kaiserdom: Majestic red-sandstone gothic tower and interior
 * - Paulsplatz: Paulskirche square and festive holiday market
 * - Champs-Élysées: Grand illuminated avenue and Arc de Triomphe vista
 * - Colmar Koïfhus: Panoramic medieval market view (no door frame)
 * - Bern Temple: Full temple exterior angles (no door close-ups)
 * - Boulevard Saint-Michel: Fontaine Saint-Michel and bustling boulevard (no door)
 * - Seine Quays: Historic stone quays and green bouquinistes boxes (no Cezanne painting)
 */
import { readFileSync, writeFileSync } from 'fs';

const GALLERY_PATH = '/Users/jeana/Projects/schengen-trip-2026/js/gallery-data.js';
const DIST_PATH = '/Users/jeana/Projects/schengen-trip-2026/dist/js/gallery-data.js';

const SPECIFIC_REPLACEMENTS = {
  "Cologne Cathedral (Kölner Dom)": [
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a2/Cologne_Germany_Exterior-view-of-Cologne-Cathedral-01.jpg/1280px-Cologne_Germany_Exterior-view-of-Cologne-Cathedral-01.jpg",
      caption: "Cologne Cathedral (Kölner Dom) - Featured Landmark View"
    },
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8b/Cologne_Germany_Exterior-view-of-Cologne-Cathedral-02.jpg/1280px-Cologne_Germany_Exterior-view-of-Cologne-Cathedral-02.jpg",
      caption: "Cologne Cathedral (Kölner Dom) - Wide-Angle Perspective"
    },
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/03/Cologne_cathedrale_vue_sud.jpg/1280px-Cologne_cathedrale_vue_sud.jpg",
      caption: "Cologne Cathedral (Kölner Dom) - Architectural Detail"
    },
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f9/Cologne_Germany_Exterior-of-Cologne-Cathedral-01.jpg/1280px-Cologne_Germany_Exterior-of-Cologne-Cathedral-01.jpg",
      caption: "Cologne Cathedral (Kölner Dom) - Atmospheric Angle"
    },
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f0/Cologne_Germany_Cologne-Cathedral-West-Facade-01.jpg/1280px-Cologne_Germany_Cologne-Cathedral-West-Facade-01.jpg",
      caption: "Cologne Cathedral (Kölner Dom) - Alternate Vantage Point"
    }
  ],
  "Galerie des Glaces (Hall of Mirrors Interior)": [
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f1/Chateau_Versailles_Galerie_des_Glaces.jpg/1280px-Chateau_Versailles_Galerie_des_Glaces.jpg",
      caption: "Galerie des Glaces (Hall of Mirrors Interior) - Featured Landmark View"
    },
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/df/Chateau_de_Versailles_2011_Galerie_des_Glaces.jpg/1280px-Chateau_de_Versailles_2011_Galerie_des_Glaces.jpg",
      caption: "Galerie des Glaces (Hall of Mirrors Interior) - Wide-Angle Perspective"
    },
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4d/Ch%C3%A2teau_de_Versailles_-_Galerie_des_Glaces_%281%29.jpg/1280px-Ch%C3%A2teau_de_Versailles_-_Galerie_des_Glaces_%281%29.jpg",
      caption: "Galerie des Glaces (Hall of Mirrors Interior) - Architectural Detail"
    },
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0f/Ch%C3%A2teau_de_Versailles_-_Galerie_des_Glaces_%282%29.jpg/1280px-Ch%C3%A2teau_de_Versailles_-_Galerie_des_Glaces_%282%29.jpg",
      caption: "Galerie des Glaces (Hall of Mirrors Interior) - Atmospheric Angle"
    },
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4e/Ch%C3%A2teau_de_Versailles_-_Galerie_des_Glaces_%283%29.jpg/1280px-Ch%C3%A2teau_de_Versailles_-_Galerie_des_Glaces_%283%29.jpg",
      caption: "Galerie des Glaces (Hall of Mirrors Interior) - Alternate Vantage Point"
    }
  ],
  "Paris France LDS Temple": [
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/87/Temple_mormon_de_Paris_au_Chesnay_le_8_avril_2017_-_11.jpg/1280px-Temple_mormon_de_Paris_au_Chesnay_le_8_avril_2017_-_11.jpg",
      caption: "Paris France LDS Temple - Featured Landmark View"
    },
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ca/Temple_mormon_de_Paris_au_Chesnay_le_8_avril_2017_-_17.jpg/1280px-Temple_mormon_de_Paris_au_Chesnay_le_8_avril_2017_-_17.jpg",
      caption: "Paris France LDS Temple - Wide-Angle Perspective"
    },
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/14/Temple_mormon_de_Paris_au_Chesnay_le_8_avril_2017_-_20.jpg/1280px-Temple_mormon_de_Paris_au_Chesnay_le_8_avril_2017_-_20.jpg",
      caption: "Paris France LDS Temple - Architectural Detail"
    },
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f6/Temple_mormon_de_Paris_au_Chesnay_le_8_avril_2017_-_28.jpg/1280px-Temple_mormon_de_Paris_au_Chesnay_le_8_avril_2017_-_28.jpg",
      caption: "Paris France LDS Temple - Atmospheric Angle"
    },
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/69/Temple_mormon_de_Paris_au_Chesnay_le_9_avril_2017_-_15.jpg/1280px-Temple_mormon_de_Paris_au_Chesnay_le_9_avril_2017_-_15.jpg",
      caption: "Paris France LDS Temple - Alternate Vantage Point"
    }
  ],
  "Grand Palais Glass Vault & Exhibition Hall": [
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/05/Grand_Palais_Paris_02.jpg/1280px-Grand_Palais_Paris_02.jpg",
      caption: "Grand Palais Glass Vault & Exhibition Hall - Featured Landmark View"
    },
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/67/Grand_Palais_-_PA00088877_-_Bonhams_2013_-_Vue_d%27ensemble_-_007.jpg/1280px-Grand_Palais_-_PA00088877_-_Bonhams_2013_-_Vue_d%27ensemble_-_007.jpg",
      caption: "Grand Palais Glass Vault & Exhibition Hall - Wide-Angle Perspective"
    },
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/30/Grand_Palais_Paris_-_Nave.jpg/1280px-Grand_Palais_Paris_-_Nave.jpg",
      caption: "Grand Palais Glass Vault & Exhibition Hall - Architectural Detail"
    },
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/61/Verri%C3%A8re_du_Grand_Palais%2C_Paris.jpg/1280px-Verri%C3%A8re_du_Grand_Palais%2C_Paris.jpg",
      caption: "Grand Palais Glass Vault & Exhibition Hall - Atmospheric Angle"
    },
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2b/Fa%C3%A7ade_du_Grand_Palais%2C_Paris.jpg/1280px-Fa%C3%A7ade_du_Grand_Palais%2C_Paris.jpg",
      caption: "Grand Palais Glass Vault & Exhibition Hall - Alternate Vantage Point"
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
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/90/Ch%C3%A2teau_de_Versailles_Cour_de_Marbre.jpg/1280px-Ch%C3%A2teau_de_Versailles_Cour_de_Marbre.jpg",
      caption: "Palace of Versailles (Château de Versailles) - Alternate Vantage Point"
    }
  ],
  "Bern Temple Alpine Grounds & Pine Reflection Path": [
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b2/Bern_Tempel_6_September_2006.JPG/1280px-Bern_Tempel_6_September_2006.JPG",
      caption: "Bern Temple Alpine Grounds & Pine Reflection Path - Featured Landmark View"
    },
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/60/LDS_Bern_Switzerland_Temple.jpg/1280px-LDS_Bern_Switzerland_Temple.jpg",
      caption: "Bern Temple Alpine Grounds & Pine Reflection Path - Wide-Angle Perspective"
    },
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1a/TempleSuisseHiv1.JPG/1280px-TempleSuisseHiv1.JPG",
      caption: "Bern Temple Alpine Grounds & Pine Reflection Path - Architectural Detail"
    },
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f6/Fr%C3%BChlingslandschft_Aaretal_Schweiz.jpg/1280px-Fr%C3%BChlingslandschft_Aaretal_Schweiz.jpg",
      caption: "Bern Temple Alpine Grounds & Pine Reflection Path - Atmospheric Angle"
    },
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/91/Zollikofen_Schloss.jpg/1280px-Zollikofen_Schloss.jpg",
      caption: "Bern Temple Alpine Grounds & Pine Reflection Path - Alternate Vantage Point"
    }
  ],
  "Bern Switzerland LDS Temple": [
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b2/Bern_Tempel_6_September_2006.JPG/1280px-Bern_Tempel_6_September_2006.JPG",
      caption: "Bern Switzerland LDS Temple - Featured Landmark View"
    },
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/60/LDS_Bern_Switzerland_Temple.jpg/1280px-LDS_Bern_Switzerland_Temple.jpg",
      caption: "Bern Switzerland LDS Temple - Wide-Angle Perspective"
    },
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1a/TempleSuisseHiv1.JPG/1280px-TempleSuisseHiv1.JPG",
      caption: "Bern Switzerland LDS Temple - Architectural Detail"
    },
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d4/MORONI2.JPG/1280px-MORONI2.JPG",
      caption: "Bern Switzerland LDS Temple - Atmospheric Angle"
    },
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ad/Bern_Switzerland_Temple.jpg/1280px-Bern_Switzerland_Temple.jpg",
      caption: "Bern Switzerland LDS Temple - Alternate Vantage Point"
    }
  ],
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
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b5/Amsterdam_-_Rijksmuseum_1885_P.H.J._Cuypers_-_Front_view.jpg/1280px-Amsterdam_-_Rijksmuseum_1885_P.H.J._Cuypers_-_Front_view.jpg",
      caption: "Rijksmuseum at Museumplein - Architectural Detail"
    },
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4b/Rijksmuseum_Amsterdam_Passage.jpg/1280px-Rijksmuseum_Amsterdam_Passage.jpg",
      caption: "Rijksmuseum at Museumplein - Atmospheric Angle"
    },
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7b/Rijksmuseum_Amsterdam_night.jpg/1280px-Rijksmuseum_Amsterdam_night.jpg",
      caption: "Rijksmuseum at Museumplein - Alternate Vantage Point"
    }
  ],
  "Frankfurt Kaiserdom (Cathedral St. Bartholomäus)": [
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/53/Frankfurter_Dom_Eiserner_Steg.jpg/1280px-Frankfurter_Dom_Eiserner_Steg.jpg",
      caption: "Frankfurt Kaiserdom (Cathedral St. Bartholomäus) - Featured Landmark View"
    },
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0f/Kaiserdom_St._Bartholom%C3%A4us_-_Frankfurt_-_Germany_-_02.jpg/1280px-Kaiserdom_St._Bartholom%C3%A4us_-_Frankfurt_-_Germany_-_02.jpg",
      caption: "Frankfurt Kaiserdom (Cathedral St. Bartholomäus) - Wide-Angle Perspective"
    },
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/44/Kaiserdom_St._Bartholom%C3%A4us_-_Frankfurt_-_Germany_-_01.jpg/1280px-Kaiserdom_St._Bartholom%C3%A4us_-_Frankfurt_-_Germany_-_01.jpg",
      caption: "Frankfurt Kaiserdom (Cathedral St. Bartholomäus) - Architectural Detail"
    },
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/14/Frankfurt_am_Main%2C_Kaiserdom_--_2015_--_6727.jpg/1280px-Frankfurt_am_Main%2C_Kaiserdom_--_2015_--_6727.jpg",
      caption: "Frankfurt Kaiserdom (Cathedral St. Bartholomäus) - Atmospheric Angle"
    },
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6f/Frankfurt_am_Main%2C_Kaiserdom_--_2015_--_6728.jpg/1280px-Frankfurt_am_Main%2C_Kaiserdom_--_2015_--_6728.jpg",
      caption: "Frankfurt Kaiserdom (Cathedral St. Bartholomäus) - Alternate Vantage Point"
    }
  ],
  "Paulsplatz Christmas Market": [
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/Frankfurt_Am_Main-Paulsplatz_mit_Paulskirche-Ansicht_vom_Domturm-20101024.jpg/1280px-Frankfurt_Am_Main-Paulsplatz_mit_Paulskirche-Ansicht_vom_Domturm-20101024.jpg",
      caption: "Paulsplatz Christmas Market - Featured Landmark View"
    },
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/52/Frankfurt_am_Main%2C_Paulskirche_--_2015_--_6701.jpg/1280px-Frankfurt_am_Main%2C_Paulskirche_--_2015_--_6701.jpg",
      caption: "Paulsplatz Christmas Market - Wide-Angle Perspective"
    },
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f2/Frankfurt_am_Main%2C_Paulskirche_--_2015_--_6740.jpg/1280px-Frankfurt_am_Main%2C_Paulskirche_--_2015_--_6740.jpg",
      caption: "Paulsplatz Christmas Market - Architectural Detail"
    },
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2f/Paulskirche%2C_Paulsplatz_11%2C_60311_Frankfurt_am_Main%2C_Germany.jpg/1280px-Paulskirche%2C_Paulsplatz_11%2C_60311_Frankfurt_am_Main%2C_Germany.jpg",
      caption: "Paulsplatz Christmas Market - Atmospheric Angle"
    },
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d1/Paulskirche%2C_Paulsplatz_11%2C_60311_Frankfurt_am_Main%2C_Germany_%282%29.jpg/1280px-Paulskirche%2C_Paulsplatz_11%2C_60311_Frankfurt_am_Main%2C_Germany_%282%29.jpg",
      caption: "Paulsplatz Christmas Market - Alternate Vantage Point"
    }
  ],
  "Avenue des Champs-Élysées": [
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e0/Avenue_des_Champs-Elys%C3%A9es_from_top_of_Arc_de_triomphe_Paris.jpg/1280px-Avenue_des_Champs-Elys%C3%A9es_from_top_of_Arc_de_triomphe_Paris.jpg",
      caption: "Avenue des Champs-Élysées - Featured Landmark View"
    },
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/45/Champs-Elys%C3%A9es-Illuminations.jpg/1280px-Champs-Elys%C3%A9es-Illuminations.jpg",
      caption: "Avenue des Champs-Élysées - Wide-Angle Perspective"
    },
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/69/Illuminations_de_No%C3%ABl_%28Champs_Elys%C3%A9es%2C_Paris%29_%283092950707%29.jpg/1280px-Illuminations_de_No%C3%ABl_%28Champs_Elys%C3%A9es%2C_Paris%29_%283092950707%29.jpg",
      caption: "Avenue des Champs-Élysées - Architectural Detail"
    },
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/82/Champs-%C3%89lys%C3%A9es_d%C3%A9cembre_2019.jpg/1280px-Champs-%C3%89lys%C3%A9es_d%C3%A9cembre_2019.jpg",
      caption: "Avenue des Champs-Élysées - Atmospheric Angle"
    },
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/52/Th%C3%A9%C3%A2tre_des_Champs-%C3%89lys%C3%A9es%2C_21_April_2013.jpg/1280px-Th%C3%A9%C3%A2tre_des_Champs-%C3%89lys%C3%A9es%2C_21_April_2013.jpg",
      caption: "Avenue des Champs-Élysées - Alternate Vantage Point"
    }
  ],
  "Colmar Old Town Christmas Market at Koïfhus": [
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7c/March%C3%A9_de_No%C3%ABl_de_Colmar%2C_2005.jpg/1280px-March%C3%A9_de_No%C3%ABl_de_Colmar%2C_2005.jpg",
      caption: "Colmar Old Town Christmas Market at Koïfhus - Featured Landmark View"
    },
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ad/Colmar_March%C3%A9_de_No%C3%ABl_0543.JPG/1280px-Colmar_March%C3%A9_de_No%C3%ABl_0543.JPG",
      caption: "Colmar Old Town Christmas Market at Koïfhus - Wide-Angle Perspective"
    },
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/54/March%C3%A9_de_No%C3%ABl_%C3%A0_Colmar_-_BH5A6874_%2824089736945%29.jpg/1280px-March%C3%A9_de_No%C3%ABl_%C3%A0_Colmar_-_BH5A6874_%2824089736945%29.jpg",
      caption: "Colmar Old Town Christmas Market at Koïfhus - Architectural Detail"
    },
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ca/March%C3%A9_no%C3%ABl_Colmar_1.JPG/1280px-March%C3%A9_no%C3%ABl_Colmar_1.JPG",
      caption: "Colmar Old Town Christmas Market at Koïfhus - Atmospheric Angle"
    },
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/07/March%C3%A9_no%C3%ABl_Colmar_2.JPG/1280px-March%C3%A9_no%C3%ABl_Colmar_2.JPG",
      caption: "Colmar Old Town Christmas Market at Koïfhus - Alternate Vantage Point"
    }
  ],
  "Boulevard Saint-Michel & Latin Quarter Stroll": [
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a2/Boulevard_Saint-Michel_1.jpg/1280px-Boulevard_Saint-Michel_1.jpg",
      caption: "Boulevard Saint-Michel & Latin Quarter Stroll - Featured Landmark View"
    },
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/07/Boulevard_Saint-Michel_%28Paris%29%2C_num%C3%A9ro_4.jpg/1280px-Boulevard_Saint-Michel_%28Paris%29%2C_num%C3%A9ro_4.jpg",
      caption: "Boulevard Saint-Michel & Latin Quarter Stroll - Wide-Angle Perspective"
    },
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/50/Fontaine_Saint-Michel_-_Paris_-_panoramio.jpg/1280px-Fontaine_Saint-Michel_-_Paris_-_panoramio.jpg",
      caption: "Boulevard Saint-Michel & Latin Quarter Stroll - Architectural Detail"
    },
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0c/Fontaine_Saint-Michel_Paris.jpg/1280px-Fontaine_Saint-Michel_Paris.jpg",
      caption: "Boulevard Saint-Michel & Latin Quarter Stroll - Atmospheric Angle"
    },
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/91/Boulevard_Saint-Michel%2C_Paris_5.jpg/1280px-Boulevard_Saint-Michel%2C_Paris_5.jpg",
      caption: "Boulevard Saint-Michel & Latin Quarter Stroll - Alternate Vantage Point"
    }
  ],
  "Seine Riverbanks & Historic Quays Promenade": [
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b3/Quais_de_Seine.jpg/1280px-Quais_de_Seine.jpg",
      caption: "Seine Riverbanks & Historic Quays Promenade - Featured Landmark View"
    },
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7b/Paris_75005_Quai_de_Montebello_Bouquinistes_20071014.jpg/1280px-Paris_75005_Quai_de_Montebello_Bouquinistes_20071014.jpg",
      caption: "Seine Riverbanks & Historic Quays Promenade - Wide-Angle Perspective"
    },
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/98/Paris%2C_Quai_des_Orf%C3%A8vres_riverside_--_2014_--_1427.jpg/1280px-Paris%2C_Quai_des_Orf%C3%A8vres_riverside_--_2014_--_1427.jpg",
      caption: "Seine Riverbanks & Historic Quays Promenade - Architectural Detail"
    },
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/07/Escaliers_des_quais_de_Seine_%C3%A0_Paris_%2826796672416%29.jpg/1280px-Escaliers_des_quais_de_Seine_%C3%A0_Paris_%2826796672416%29.jpg",
      caption: "Seine Riverbanks & Historic Quays Promenade - Atmospheric Angle"
    },
    {
      url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/eb/Seine_River_in_Paris_%2834801498830%29.jpg/1280px-Seine_River_in_Paris_%2834801498830%29.jpg",
      caption: "Seine Riverbanks & Historic Quays Promenade - Alternate Vantage Point"
    }
  ]
};

async function main() {
  const content = readFileSync(GALLERY_PATH, 'utf8');
  const si = content.indexOf('window.galleryData = [');
  let bc = 0, ei = -1;
  for (let i = si + 'window.galleryData = '.length; i < content.length; i++) {
    if (content[i] === '[') bc++;
    if (content[i] === ']') bc--;
    if (bc === 0) { ei = i + 1; break; }
  }
  const data = JSON.parse(content.substring(si + 'window.galleryData = '.length, ei));

  let count = 0;
  for (const day of data) {
    for (const sight of (day.sights || [])) {
      if (SPECIFIC_REPLACEMENTS[sight.name]) {
        count++;
        const newPhotos = SPECIFIC_REPLACEMENTS[sight.name];
        sight.photos = newPhotos;
        sight.images = newPhotos.map(p => p.url);
        sight.image = newPhotos[0].url;
        console.log(`✨ Applied pristine photos to: "${sight.name}"`);
      }
    }
  }

  const prefix = content.substring(0, si + 'window.galleryData = '.length);
  const suffix = content.substring(ei);
  const out = prefix + JSON.stringify(data, null, 2) + suffix;

  writeFileSync(GALLERY_PATH, out, 'utf8');
  writeFileSync(DIST_PATH, out, 'utf8');

  console.log(`\n🎉 Applied perfection to ${count} landmarks! Synced to both source and dist.`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
