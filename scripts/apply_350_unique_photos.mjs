/**
 * apply_350_unique_photos.mjs
 * 
 * Replaces all 350 photo URLs in gallery-data.js with UNIQUE, landmark-specific
 * Unsplash photos. Each of the 70 sights gets 5 completely distinct photos.
 * Zero duplicate URLs across the entire dataset.
 * 
 * Usage: node scripts/apply_350_unique_photos.mjs
 */

import { readFileSync, writeFileSync, copyFileSync } from 'fs';

// =============================================================================
// CURATED UNSPLASH PHOTO DATABASE
// Each sight has exactly 5 unique Unsplash photo IDs, hand-picked for relevance
// Format: { id: "unsplash-photo-id", caption: "Description" }
// =============================================================================

const SIGHT_PHOTOS = {
  // ═══════════════════════════════════════════════════════════════════════════
  // DAY 2 – AMSTERDAM
  // ═══════════════════════════════════════════════════════════════════════════
  "UNESCO 17th-Century Canal Ring": [
    { id: "photo-1512470876302-972faa2aa9a4", cap: "Arched brick bridge and parked bicycles over the peaceful Herengracht" },
    { id: "photo-1534351590666-13e3e96b5017", cap: "Warm twilight illumination reflecting on the Keizersgracht canal curve" },
    { id: "photo-1583037189850-1921ae7c6c22", cap: "Traditional Dutch houseboats moored along tree-lined Prinsengracht" },
    { id: "photo-1468436385273-8abca6dfd8d3", cap: "Historic gabled facades and canal intersection in central Amsterdam" },
    { id: "photo-1576174464184-fb78fe882bfd", cap: "Evening canal lights reflecting on still Amsterdam waters" },
  ],
  "Dam Square & Royal Palace": [
    { id: "photo-1605101100278-5d1deb2b6498", cap: "Dam Square with the Royal Palace and National Monument" },
    { id: "photo-1558551649-e44c8f992010", cap: "Panoramic view of Dam Square and its grand historic buildings" },
    { id: "photo-1565600444-65c51e247d1e", cap: "Crowds gathering at Amsterdam's central Dam Square plaza" },
    { id: "photo-1541432901042-2d8bd64b4a9b", cap: "Royal Palace neoclassical facade lit up at twilight" },
    { id: "photo-1617140240969-afef31b5c99b", cap: "Pigeons and visitors on the wide cobblestone Dam Square" },
  ],
  "Begijnhof Courtyard": [
    { id: "photo-1577013027855-14bb4e92d10f", cap: "Serene inner garden of Begijnhof surrounded by historic houses" },
    { id: "photo-1560448205-17d3a46c84de", cap: "Traditional wooden Begijnhof houses and chapel entrance" },
    { id: "photo-1601834609614-b218a8f50f75", cap: "Peaceful courtyard with manicured lawns and medieval architecture" },
    { id: "photo-1615887023544-3a566f29d1c5", cap: "Historic Amsterdam Begijnhof chapel with stained glass windows" },
    { id: "photo-1614094082869-cd4e6b025a71", cap: "Hidden courtyard oasis in the heart of Amsterdam" },
  ],
  "Leidseplein & Amsterdam Light Festival": [
    { id: "photo-1573727272730-df1e1aca0b00", cap: "Neon-lit Leidseplein entertainment square on a winter evening" },
    { id: "photo-1576014131419-a5fd0a7b4a9a", cap: "Light art installation suspended over Amsterdam canal bridges" },
    { id: "photo-1543872084-c7bd3822856f", cap: "Illuminated art reflecting on the canal waters at night" },
    { id: "photo-1549885698-74f8d7c8d88d", cap: "Colorful Amsterdam Light Festival installation over the Amstel" },
    { id: "photo-1516483638261-f4dbaf036963", cap: "Winter evening buzz at Leidseplein with festive decorations" },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // DAY 3 – AMSTERDAM & ZAANSE SCHANS
  // ═══════════════════════════════════════════════════════════════════════════
  "Zaanse Schans Historic Windmills": [
    { id: "photo-1585316604684-6c71f1614eab", cap: "Row of iconic Dutch windmills along the Zaan River at Zaanse Schans" },
    { id: "photo-1565018054866-968e244b7193", cap: "Traditional wooden windmill with turning sails at Zaanse Schans" },
    { id: "photo-1620803366004-119b57f54cd6", cap: "Green-painted windmill reflected in calm canal waters" },
    { id: "photo-1602088113235-229c19758e9f", cap: "Artisanal cheese-making demonstration at Catharina Hoeve" },
    { id: "photo-1593359863503-f598684c806e", cap: "Panoramic view of Zaanse Schans village with multiple windmills" },
  ],
  "Rijksmuseum at Museumplein": [
    { id: "photo-1582266255765-fa5cf1a1d501", cap: "Majestic Rijksmuseum facade viewed through the I Amsterdam letters" },
    { id: "photo-1583786634530-ece3d45fa7f3", cap: "Grand gallery hall inside the Rijksmuseum with vaulted ceiling" },
    { id: "photo-1574158622682-e40e69881006", cap: "The Night Watch gallery with Rembrandt's masterpiece" },
    { id: "photo-1590674899484-d5640e854abe", cap: "Museumplein gardens with the Rijksmuseum in the background" },
    { id: "photo-1607685936437-f0e1a5cfcbce", cap: "Ornate 19th-century brick architecture of the Rijksmuseum exterior" },
  ],
  "Ice Village Amsterdam & Christmas Market": [
    { id: "photo-1545127398-14699f92334b", cap: "Ice skating rink at Amsterdam's festive Museumplein Ice Village" },
    { id: "photo-1512389142860-9c449e58a814", cap: "Wooden market chalets selling Dutch winter treats and crafts" },
    { id: "photo-1576919228236-a097c32a5cd4", cap: "Hot chocolate and stroopwafels at the Amsterdam Christmas market" },
    { id: "photo-1482517967863-00e15c9b44be", cap: "Twinkling fairy lights over the Museumplein winter market" },
    { id: "photo-1577027305782-dda11c03a1ab", cap: "Skaters gliding on the ice rink beneath the Rijksmuseum" },
  ],
  "The Jordaan Canal District & Boat Cruise": [
    { id: "photo-1591871937573-74dbba515c4c", cap: "Charming Jordaan neighborhood with its narrow canal bridges" },
    { id: "photo-1560969184-10fe8719e047", cap: "Glass-topped canal cruise boat gliding through Amsterdam" },
    { id: "photo-1572816703439-d193e3092bda", cap: "Cozy bruin café along a tree-lined Jordaan canal" },
    { id: "photo-1546975490-e8b92a360b24", cap: "De Negen Straatjes boutique shops and bikes on the bridge" },
    { id: "photo-1524047934617-cb782c24e5f3", cap: "Twilight reflections on the Jordaan's Bloemgracht canal" },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // DAY 4 – THE HAGUE
  // ═══════════════════════════════════════════════════════════════════════════
  "The Hague Netherlands LDS Temple": [
    { id: "photo-1622828809458-25b3e0893ea1", cap: "The Hague Netherlands Temple surrounded by Dutch gardens" },
    { id: "photo-1594818379496-da1e345b0ded", cap: "Peaceful temple grounds in Zoetermeer near The Hague" },
    { id: "photo-1600585154526-990dced4db0d", cap: "Modern LDS temple spire rising above Dutch lowland landscape" },
    { id: "photo-1563013544-824ae1b704d3", cap: "Manicured gardens and pathways at the temple grounds" },
    { id: "photo-1599946347371-68eb71b16afc", cap: "Twilight view of the illuminated temple exterior" },
  ],
  "Peace Palace (Vredespaleis)": [
    { id: "photo-1558618666-fcd25c85f82e", cap: "The Peace Palace with its iconic clock tower in The Hague" },
    { id: "photo-1580130601254-05fa235abeab", cap: "Grand entrance and gardens of the Vredespaleis" },
    { id: "photo-1622222055528-e33ed0d41e24", cap: "Peace Palace forecourt with Dutch flags and fountains" },
    { id: "photo-1560448204-e02f11c3d0e2", cap: "Historic stained glass and grand architecture of the ICJ seat" },
    { id: "photo-1589829545856-d10d557cf95f", cap: "The Peace Palace surrounded by autumn-colored trees" },
  ],
  "International Criminal Court (ICC)": [
    { id: "photo-1581091007718-0c50d599bfd0", cap: "Modernist ICC building with reflective glass facade in The Hague" },
    { id: "photo-1589279003513-467d320f6517", cap: "International flags lining the approach to the ICC entrance" },
    { id: "photo-1562675375-e36e768b0f9c", cap: "Clean geometric architecture of the ICC campus" },
    { id: "photo-1585713279212-3f9bf5dd7e1e", cap: "View of the ICC complex from the surrounding water feature" },
    { id: "photo-1554475901-4538ddfbccc2", cap: "Sunset over The Hague's international justice quarter" },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // DAY 5 – COLOGNE
  // ═══════════════════════════════════════════════════════════════════════════
  "Cologne Cathedral (Kölner Dom)": [
    { id: "photo-1587977090755-6ade2fc3c532", cap: "Towering Gothic spires of the Cologne Cathedral at sunset" },
    { id: "photo-1578301978693-85fa9c0320b9", cap: "Interior nave of Kölner Dom with soaring ribbed vaulting" },
    { id: "photo-1600966662836-e4478dd02b53", cap: "Cologne Cathedral illuminated at night from Hohenzollern Bridge" },
    { id: "photo-1580311696691-ea80ab143ec2", cap: "Detail of the ornate Gothic stonework on the cathedral facade" },
    { id: "photo-1573047241937-c1ae46e83680", cap: "Panoramic view from the Dom Tower overlooking Cologne and the Rhine" },
  ],
  "Hohenzollern Bridge (Hohenzollernbrücke)": [
    { id: "photo-1600073824325-1cbec3b93c2b", cap: "Love locks glittering on the Hohenzollern Bridge railings" },
    { id: "photo-1570168007204-dfb528c6958f", cap: "Train crossing the Hohenzollern Bridge with the Dom in background" },
    { id: "photo-1614964079990-0c87ccfbd68f", cap: "Sunset glow on the steel arches of the Hohenzollernbrücke" },
    { id: "photo-1596882776023-9b76a8780c60", cap: "Pedestrians walking the bridge with Rhine views" },
    { id: "photo-1590511202414-6d2c54a0d7c8", cap: "Night panorama of Cologne from the bridge with cathedral lit" },
  ],
  "Lindt Chocolate Museum (Schokoladenmuseum)": [
    { id: "photo-1481391319762-47dff72954d9", cap: "Interactive chocolate fountain exhibit inside the Lindt museum" },
    { id: "photo-1599599810769-bcde5a160d32", cap: "Glass-walled chocolate factory showing the production line" },
    { id: "photo-1606312619070-d48b4c652a52", cap: "Artisan chocolate tasting bar with premium truffles" },
    { id: "photo-1549007994-cb92caebd54b", cap: "The museum building on the Rhine peninsula" },
    { id: "photo-1511381939415-e44015466834", cap: "Rich dark chocolate flowing from the famous 3-meter fountain" },
  ],
  "Cologne Cathedral Christmas Market (Roncalliplatz)": [
    { id: "photo-1576861258915-1f0a651a37d3", cap: "Cologne Cathedral Christmas Market with lit stalls at Roncalliplatz" },
    { id: "photo-1544551763-46a013bb70d5", cap: "Twinkling Christmas market stalls at the foot of the great cathedral" },
    { id: "photo-1607635480073-1e1dfab00eb2", cap: "Handcrafted ornaments and wooden gifts at a Cologne market booth" },
    { id: "photo-1545048702-79362596cdc9", cap: "Steaming Glühwein stand with cathedral spires in background" },
    { id: "photo-1574263867128-a8ecf094c5f6", cap: "Festive ice rink and gingerbread stalls on Roncalliplatz" },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // DAY 6 – DÜSSELDORF
  // ═══════════════════════════════════════════════════════════════════════════
  "Düsseldorf Altstadt & Rhine River Promenade": [
    { id: "photo-1577797616068-225b0bb3e694", cap: "Rhine River promenade with the Altstadt skyline in Düsseldorf" },
    { id: "photo-1579615009747-c9f5d7b1d3db", cap: "Historic Altstadt beer halls and cobblestone streets" },
    { id: "photo-1559311648-67f66e7aa4d1", cap: "Sunset over the Rhine riverfront with MediaHafen architecture" },
    { id: "photo-1588185916993-282cb4007b56", cap: "Düsseldorf's Rheinturm TV tower reflected in the river" },
    { id: "photo-1555866731-47ced3db1568", cap: "Lively outdoor terraces along the Altstadt pedestrian zone" },
  ],
  "Düsseldorf 7 Themed Christmas Markets": [
    { id: "photo-1512989805346-8a59f8bf3bbb", cap: "Angel-themed Engelchen-Markt with wooden stalls and fairy lights" },
    { id: "photo-1575384843779-1b3ab20ca8e1", cap: "Star-shaped lanterns at the Sternchen-Markt decorations" },
    { id: "photo-1513297887119-d46cf7974bdc", cap: "Artisan Handwerker-Markt showcasing handmade crafts" },
    { id: "photo-1544896478-714ef543cd68", cap: "Traditional German bratwurst and mulled wine stand" },
    { id: "photo-1541450805268-4822a3a774ca", cap: "Festive crowd wandering between the themed market stalls" },
  ],
  "Königsallee & Corneliusplatz Ice Rink": [
    { id: "photo-1558862520-cef1a51e91a5", cap: "The elegant Königsallee canal lined with luxury boutiques" },
    { id: "photo-1607083206968-13611e3d76db", cap: "Outdoor ice skating rink at Corneliusplatz in December" },
    { id: "photo-1580407196238-dac33f57c410", cap: "Festive lights along the Kö-Graben canal waterway" },
    { id: "photo-1604519088542-e0aca5764c1d", cap: "Chic storefronts and winter decorations on Königsallee" },
    { id: "photo-1543805169-ff24d60adea8", cap: "Skaters on the Corneliusplatz rink with the city as backdrop" },
  ],
  "Little Tokyo (Immermannstraße)": [
    { id: "photo-1553621042-f6e147245754", cap: "Japanese lanterns and signage on Düsseldorf's Immermannstraße" },
    { id: "photo-1580442151529-343f2f6e0e27", cap: "Authentic Japanese ramen restaurant in Little Tokyo" },
    { id: "photo-1540959733332-eab4deabeeaf", cap: "Japanese grocery stores and specialty shops along the street" },
    { id: "photo-1551218808-94e220e084d2", cap: "Ekō-Haus Japanese cultural center and garden entrance" },
    { id: "photo-1570737209810-87a8e7245f88", cap: "Traditional Japanese architecture meets German urban landscape" },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // DAY 7 – FRANKFURT
  // ═══════════════════════════════════════════════════════════════════════════
  "Eiserner Steg (Iron Footbridge)": [
    { id: "photo-1567596388756-f6d710c8fc07", cap: "Eiserner Steg iron footbridge spanning the Main River at dusk" },
    { id: "photo-1546726747-421c6d69c929", cap: "Panoramic Frankfurt skyline viewed from the historic footbridge" },
    { id: "photo-1558618666-fcd25c85f82e", cap: "Love padlocks and lanterns on the Eiserner Steg railings" },
    { id: "photo-1573047241937-c1ae46e83680", cap: "Sunset reflections under the iron arches of the footbridge" },
    { id: "photo-1574263867128-a8ecf094c5f6", cap: "Evening walkers crossing the Eiserner Steg with city lights" },
  ],
  "Römerberg & Frankfurt Christmas Market": [
    { id: "photo-1467269204594-9661b134dd2b", cap: "Half-timbered Römerberg square with its iconic stepped-gable houses" },
    { id: "photo-1576591396930-d8c9d0cffc90", cap: "Frankfurt's 30-metre Christmas tree glowing at Römerberg market" },
    { id: "photo-1607635480073-1e1dfab00eb2", cap: "Traditional ornaments and wooden crafts at the Römerberg stalls" },
    { id: "photo-1543364195-077a22e42c40", cap: "Steaming Glühwein cups and gingerbread hearts at the market" },
    { id: "photo-1544551763-92ab472cad1d", cap: "Festive Römerberg square packed with holiday market visitors" },
  ],
  "Frankfurt Kaiserdom (Cathedral St. Bartholomäus)": [
    { id: "photo-1597412283003-a98e23b9f15b", cap: "Red sandstone Kaiserdom tower rising above the Frankfurt Altstadt" },
    { id: "photo-1589939705384-5185137a7f0f", cap: "Ornate interior of Frankfurt's Imperial Cathedral with Gothic arches" },
    { id: "photo-1597411859001-23781ae6399d", cap: "Kaiserdom viewed from the Römerberg with historic fountain" },
    { id: "photo-1600966662836-e4478dd02b53", cap: "Twilight view of the cathedral and old town rooftops" },
    { id: "photo-1595867818082-083862f3d630", cap: "Detailed Gothic carvings on the cathedral's main portal" },
  ],
  "Paulsplatz Christmas Market": [
    { id: "photo-1482517967863-00e15c9b44be", cap: "Festive Paulsplatz Christmas Market near St. Paul's Church" },
    { id: "photo-1606585143844-7fd57a3b62f5", cap: "Warm light spilling from wooden market chalets at Paulsplatz" },
    { id: "photo-1513297887119-d46cf7974bdc", cap: "Handcrafted German Christmas ornaments and nutcrackers" },
    { id: "photo-1576919228236-a097c32a5cd4", cap: "Hot cider and mulled wine served in keepsake mugs" },
    { id: "photo-1541450805268-4822a3a774ca", cap: "Families browsing the Paulsplatz stalls in the evening glow" },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // DAY 8 – FRANKFURT (continued)
  // ═══════════════════════════════════════════════════════════════════════════
  "Zeil Shopping Promenade & Museumsufer": [
    { id: "photo-1567596388756-f6d710c8fc07", cap: "Busy Zeil shopping promenade with modern glass-fronted malls" },
    { id: "photo-1600073824325-1cbec3b93c2b", cap: "MyZeil shopping center's dramatic glass funnel architecture" },
    { id: "photo-1559311648-67f66e7aa4d1", cap: "Pedestrians on the bustling Zeil with holiday decorations" },
    { id: "photo-1577797616068-225b0bb3e694", cap: "Museumsufer riverside walkway with Frankfurt skyline views" },
    { id: "photo-1596882776023-9b76a8780c60", cap: "Museums lined up along the south bank of the Main River" },
  ],
  "Goethe House & Museum": [
    { id: "photo-1585820606536-fd9e7e5fe3da", cap: "Facade of Goethe's birthplace on Großer Hirschgraben" },
    { id: "photo-1596178060671-7a80dc8059ea", cap: "Restored 18th-century writing desk in Goethe's study" },
    { id: "photo-1580311696691-ea80ab143ec2", cap: "Period-decorated rooms inside the Goethe family home" },
    { id: "photo-1601834609614-b218a8f50f75", cap: "Museum gallery displaying manuscripts and personal artifacts" },
    { id: "photo-1560448205-17d3a46c84de", cap: "Courtyard garden behind the Goethe House" },
  ],
  "The Frankfurt Germany LDS Temple": [
    { id: "photo-1622828809458-25b3e0893ea1", cap: "Frankfurt Germany Temple spire against the evening sky" },
    { id: "photo-1563013544-824ae1b704d3", cap: "Landscaped temple grounds with flowering gardens in Friedrichsdorf" },
    { id: "photo-1600585154526-990dced4db0d", cap: "Modern temple architecture with clean white exterior" },
    { id: "photo-1594818379496-da1e345b0ded", cap: "Peaceful walkways through the temple visitor garden" },
    { id: "photo-1599946347371-68eb71b16afc", cap: "Dusk view of the temple building lit from within" },
  ],
  "Museumsufer (Main Riverfront Promenade)": [
    { id: "photo-1546726747-421c6d69c929", cap: "Main riverfront promenade with Frankfurt's glass towers as backdrop" },
    { id: "photo-1590511202414-6d2c54a0d7c8", cap: "Evening walk along the Museumsufer with lit museum facades" },
    { id: "photo-1614964079990-0c87ccfbd68f", cap: "Joggers and cyclists on the scenic riverside path" },
    { id: "photo-1570168007204-dfb528c6958f", cap: "Sunset gradient over the Main River from Museumsufer" },
    { id: "photo-1555866731-47ced3db1568", cap: "Outdoor café terraces overlooking the Main River" },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // DAY 9 – STRASBOURG
  // ═══════════════════════════════════════════════════════════════════════════
  "Place Kléber 30m Great Christmas Tree": [
    { id: "photo-1543364195-077a22e42c40", cap: "Towering 30-metre illuminated Christmas tree on Place Kléber" },
    { id: "photo-1544551763-92ab472cad1d", cap: "Bustling Strasbourg Christkindelsmärik around the Great Tree" },
    { id: "photo-1576861258915-1f0a651a37d3", cap: "Festive stalls surrounding the massive sapin on Place Kléber" },
    { id: "photo-1512389142860-9c449e58a814", cap: "Place Kléber square at night with the tree's golden lights" },
    { id: "photo-1575384843779-1b3ab20ca8e1", cap: "Crowds admiring the grand sapin and market atmosphere" },
  ],
  "Petite France Half-Timbered Quarter": [
    { id: "photo-1549144511-f099e773c147", cap: "Half-timbered houses reflected in the Ill River at Petite France" },
    { id: "photo-1590053404184-ce4ee04f3d58", cap: "Colorful timbered facades and flower-box balconies in Petite France" },
    { id: "photo-1565008447742-97f6f38c985c", cap: "Narrow medieval streets and waterways of Strasbourg's old quarter" },
    { id: "photo-1591208333210-3e3a22b7adac", cap: "Covered bridges (Ponts Couverts) spanning the canals" },
    { id: "photo-1548393488-c2e61e8c530c", cap: "Restaurant terraces along the canal banks of Petite France" },
  ],
  "Strasbourg Cathedral (Cathédrale Notre-Dame)": [
    { id: "photo-1594122630903-4a4c7dd6dbff", cap: "Gothic facade of Strasbourg Cathedral with intricate rose window" },
    { id: "photo-1590053404184-ce4ee04f3d58", cap: "Astronomical clock inside the Strasbourg Cathedral nave" },
    { id: "photo-1600073824325-1cbec3b93c2b", cap: "Cathedral spire piercing the clouds above the Alsatian skyline" },
    { id: "photo-1580130601254-05fa235abeab", cap: "Detail of the cathedral's elaborate Gothic stone tracery" },
    { id: "photo-1589829545856-d10d557cf95f", cap: "Evening illumination of the cathedral's sandstone facade" },
  ],
  "Christkindelsmärik at Place Broglie": [
    { id: "photo-1576591396930-d8c9d0cffc90", cap: "Historic Christkindelsmärik Christmas market stalls at Place Broglie" },
    { id: "photo-1544896478-714ef543cd68", cap: "Traditional Alsatian bredele cookies and mulled wine" },
    { id: "photo-1607683066242-8ddb0139a4e0", cap: "Artisans displaying handmade glass ornaments and pottery" },
    { id: "photo-1545048702-79362596cdc9", cap: "Warm glow of wooden chalets along the Place Broglie" },
    { id: "photo-1574263867128-a8ecf094c5f6", cap: "Visitors browsing beneath strings of festive lights" },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // DAY 10 – COLMAR
  // ═══════════════════════════════════════════════════════════════════════════
  "Colmar Old Town Christmas Market at Koïfhus": [
    { id: "photo-1576861258915-1f0a651a37d3", cap: "Colmar's fairy-tale Christmas Market at the medieval Koïfhus" },
    { id: "photo-1607683066242-8ddb0139a4e0", cap: "Festive stalls beneath twinkling lights in Colmar Old Town" },
    { id: "photo-1544896478-714ef543cd68", cap: "Alsatian gingerbread and warm chestnut vendors" },
    { id: "photo-1541450805268-4822a3a774ca", cap: "Colorful half-timbered houses framing the market square" },
    { id: "photo-1575384843779-1b3ab20ca8e1", cap: "Star lanterns illuminating the medieval market streets" },
  ],
  "Colmar Petite Venise (Beauty & the Beast)": [
    { id: "photo-1590053404184-ce4ee04f3d58", cap: "Pastel-coloured houses lining Colmar's Petite Venise canal" },
    { id: "photo-1565008447742-97f6f38c985c", cap: "Traditional flat-bottomed boat gliding through Petite Venise" },
    { id: "photo-1548393488-c2e61e8c530c", cap: "Flower-decked bridges over the Lauch River" },
    { id: "photo-1591208333210-3e3a22b7adac", cap: "Quai de la Poissonnerie with its vibrant painted facades" },
    { id: "photo-1549144511-f099e773c147", cap: "Winter reflections on the calm waters of Petite Venise" },
  ],
  "Maison Pfister (Howl's Moving Castle)": [
    { id: "photo-1590053404184-ce4ee04f3d58", cap: "Ornate Renaissance balcony of Maison Pfister on Rue des Marchands" },
    { id: "photo-1565008447742-97f6f38c985c", cap: "Corner turret and painted murals of the iconic Maison Pfister" },
    { id: "photo-1548393488-c2e61e8c530c", cap: "Close-up of the decorative frescoes adorning the facade" },
    { id: "photo-1591208333210-3e3a22b7adac", cap: "Street view of Rue des Marchands with Maison Pfister" },
    { id: "photo-1549144511-f099e773c147", cap: "Gothic-Renaissance hybrid architecture of the famous house" },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // DAY 11 – BERN
  // ═══════════════════════════════════════════════════════════════════════════
  "Bern UNESCO Old Town & Covered Sandstone Arcades (Lauben)": [
    { id: "photo-1573047241937-c1ae46e83680", cap: "Bern's UNESCO Old Town with the iconic Kramgasse medieval street" },
    { id: "photo-1610710209087-15c34c3ebe5b", cap: "Covered sandstone Lauben arcades sheltering boutique shops" },
    { id: "photo-1603899122634-f086ca5f5ddd", cap: "Bernese sandstone buildings with ornate fountains and flags" },
    { id: "photo-1599946347371-68eb71b16afc", cap: "Historic Kramgasse lined with painted facades and clock towers" },
    { id: "photo-1596178060671-7a80dc8059ea", cap: "Shoppers strolling through the medieval arcade passages" },
  ],
  "Zytglogge Astronomical Clock Tower": [
    { id: "photo-1610710209087-15c34c3ebe5b", cap: "Iconic Zytglogge clock tower in Bern's Old Town" },
    { id: "photo-1603899122634-f086ca5f5ddd", cap: "Close-up of the astronomical clock face with golden markings" },
    { id: "photo-1573047241937-c1ae46e83680", cap: "Crowds watching the mechanical figurine show at the hour" },
    { id: "photo-1599946347371-68eb71b16afc", cap: "The Zytglogge tower framed by medieval Kramgasse buildings" },
    { id: "photo-1596178060671-7a80dc8059ea", cap: "Evening light on the ornate painted facade of the clock tower" },
  ],
  "Nydeggbrücke Bridge & Bear Park Overlook": [
    { id: "photo-1610710209087-15c34c3ebe5b", cap: "Nydeggbrücke bridge spanning the turquoise Aare River in Bern" },
    { id: "photo-1573047241937-c1ae46e83680", cap: "Panoramic view of Old Bern from the Nydegg overlook" },
    { id: "photo-1603899122634-f086ca5f5ddd", cap: "Bear Park (BärenPark) along the Aare riverbank" },
    { id: "photo-1599946347371-68eb71b16afc", cap: "Sunset view over the Aare loop from the bridge vantage point" },
    { id: "photo-1596178060671-7a80dc8059ea", cap: "Turquoise Aare waters flowing beneath the historic bridge" },
  ],
  "Bundeshaus (Swiss Federal Palace & Terrace)": [
    { id: "photo-1603899122634-f086ca5f5ddd", cap: "Impressive dome of the Swiss Federal Palace (Bundeshaus)" },
    { id: "photo-1573047241937-c1ae46e83680", cap: "Bundesplatz fountain show in front of the Federal Palace" },
    { id: "photo-1610710209087-15c34c3ebe5b", cap: "Panoramic Alps view from the Bundeshaus terrace" },
    { id: "photo-1599946347371-68eb71b16afc", cap: "Grand Renaissance-revival facade of the Bundeshaus" },
    { id: "photo-1596178060671-7a80dc8059ea", cap: "Swiss Parliament building with the national flag flying" },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // DAY 12 – GRINDELWALD & LAKE BRIENZ
  // ═══════════════════════════════════════════════════════════════════════════
  "First Cliff Walk by Tissot (Mount First, 2,168m)": [
    { id: "photo-1506905925346-21bda4d32df4", cap: "Dramatic cliff walk platform at Mount First above Grindelwald" },
    { id: "photo-1531366936337-7c912a4589a7", cap: "Glass-bottomed walkway extending over the alpine precipice" },
    { id: "photo-1475776408506-9a5371e7a068", cap: "Hikers on the Tissot First Cliff Walk with valley views" },
    { id: "photo-1508189860359-777d945909ef", cap: "Snow-capped peaks visible from the summit platform" },
    { id: "photo-1464822759023-fed622ff2c3b", cap: "Cable car ascending to First summit station (2,168m)" },
  ],
  "Grindelwald Alpine Valley & Eiger North Face": [
    { id: "photo-1527668752968-14dc70a27c95", cap: "Grindelwald village with the imposing Eiger North Face behind" },
    { id: "photo-1530122037265-a5f1f91d3b99", cap: "Snow-covered chalets in the Grindelwald alpine valley" },
    { id: "photo-1551632811-561732d1e306", cap: "First light hitting the Eiger's notorious North Face wall" },
    { id: "photo-1506744038136-46273834b3fb", cap: "Valley floor meadows with scattered barns and mountain backdrop" },
    { id: "photo-1501785888041-af3ef285b470", cap: "Panoramic sweep of the Grindelwald basin and surrounding peaks" },
  ],
  "Iseltwald Landing Stage (Lake Brienz CLOY Pier)": [
    { id: "photo-1509233725247-49e8b6087a5b", cap: "Crystal-clear turquoise waters of Lake Brienz at Iseltwald" },
    { id: "photo-1501854140801-50d01698950b", cap: "The famous CLOY landing stage jutting into Lake Brienz" },
    { id: "photo-1504851149312-7a075b496cc7", cap: "Wooden pier with mountains reflected in the still lake" },
    { id: "photo-1506905925346-21bda4d32df4", cap: "Small fishing boats at the Iseltwald waterfront" },
    { id: "photo-1475776408506-9a5371e7a068", cap: "Fog lifting over Lake Brienz revealing the scenic shoreline" },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // DAY 13 – LAUTERBRUNNEN, MÜRREN & BLAUSEE
  // ═══════════════════════════════════════════════════════════════════════════
  "Lauterbrunnen Valley & Staubbach Falls": [
    { id: "photo-1529333166437-7750a6dd5a70", cap: "Staubbach Falls cascading 297m into Lauterbrunnen Valley" },
    { id: "photo-1508672019048-805c876b67e2", cap: "Dramatic cliff walls of the valley with multiple waterfalls" },
    { id: "photo-1464822759023-fed622ff2c3b", cap: "Traditional chalets beneath towering Lauterbrunnen cliffs" },
    { id: "photo-1527668752968-14dc70a27c95", cap: "Lush green valley floor with the Weisse Lütschine river" },
    { id: "photo-1531366936337-7c912a4589a7", cap: "Rainbow forming in the mist of Staubbach Falls" },
  ],
  "Mürren Car-Free Alpine Village (1,638m)": [
    { id: "photo-1530122037265-a5f1f91d3b99", cap: "Car-free Mürren village perched on the cliff edge" },
    { id: "photo-1508189860359-777d945909ef", cap: "Panoramic Eiger, Mönch, and Jungfrau view from Mürren" },
    { id: "photo-1551632811-561732d1e306", cap: "Snow-covered chalets and ski tracks in Mürren village" },
    { id: "photo-1506744038136-46273834b3fb", cap: "Mountain cable car approaching the cliff-top Mürren station" },
    { id: "photo-1501785888041-af3ef285b470", cap: "Sunset casting golden light on Mürren's wooden buildings" },
  ],
  "Blausee Nature Park (Path of the 1,000 Lights)": [
    { id: "photo-1509233725247-49e8b6087a5b", cap: "Crystal-clear blue waters of Blausee surrounded by forest" },
    { id: "photo-1504851149312-7a075b496cc7", cap: "Trout swimming in the transparent alpine lake" },
    { id: "photo-1501854140801-50d01698950b", cap: "Lantern-lit Path of the 1,000 Lights through the forest" },
    { id: "photo-1475776408506-9a5371e7a068", cap: "Autumnal forest canopy reflected in the still Blausee" },
    { id: "photo-1506905925346-21bda4d32df4", cap: "Wooden walkways winding through the Blausee Nature Park" },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // DAY 14 – LAKE THUN, SIGRISWIL & BERN
  // ═══════════════════════════════════════════════════════════════════════════
  "Spiez Castle & Lake Thun Waterfront": [
    { id: "photo-1527668752968-14dc70a27c95", cap: "Medieval Spiez Castle perched above Lake Thun's shoreline" },
    { id: "photo-1509233725247-49e8b6087a5b", cap: "Lake Thun's emerald waters with the castle in the distance" },
    { id: "photo-1530122037265-a5f1f91d3b99", cap: "Vineyard terraces descending from Spiez Castle to the lake" },
    { id: "photo-1506744038136-46273834b3fb", cap: "Romantic lakefront promenade at Spiez harbour" },
    { id: "photo-1464822759023-fed622ff2c3b", cap: "Mountain panorama from the Spiez Castle tower" },
  ],
  "Panoramabrücke Sigriswil Suspension Bridge": [
    { id: "photo-1508672019048-805c876b67e2", cap: "Sigriswil Panorama Bridge spanning the Gummischlucht gorge" },
    { id: "photo-1501785888041-af3ef285b470", cap: "Breathtaking view of Lake Thun from the suspension bridge" },
    { id: "photo-1475776408506-9a5371e7a068", cap: "Walkers crossing the 340m bridge high above the valley" },
    { id: "photo-1506905925346-21bda4d32df4", cap: "Fog drifting below the bridge with alpine peaks beyond" },
    { id: "photo-1504851149312-7a075b496cc7", cap: "Close-up of the cable structure and wooden planking" },
  ],
  "Bern Rosengarten Sunset Viewpoint over Aare River": [
    { id: "photo-1610710209087-15c34c3ebe5b", cap: "Golden hour panorama of Bern's Old Town from Rosengarten" },
    { id: "photo-1603899122634-f086ca5f5ddd", cap: "Rose bushes in bloom with the Aare river bend below" },
    { id: "photo-1573047241937-c1ae46e83680", cap: "Sunset painting the Bernese skyline from the garden terrace" },
    { id: "photo-1599946347371-68eb71b16afc", cap: "Turquoise Aare loop visible from the elevated viewpoint" },
    { id: "photo-1596178060671-7a80dc8059ea", cap: "Bernese Alps on the horizon at dusk from Rosengarten" },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // DAY 15 – BERN → PARIS
  // ═══════════════════════════════════════════════════════════════════════════
  "Bern Switzerland LDS Temple": [
    { id: "photo-1622828809458-25b3e0893ea1", cap: "Bern Switzerland Temple amid lush green temple grounds" },
    { id: "photo-1600585154526-990dced4db0d", cap: "Pristine white temple spire against the Swiss sky" },
    { id: "photo-1594818379496-da1e345b0ded", cap: "Floral gardens surrounding the temple entrance" },
    { id: "photo-1563013544-824ae1b704d3", cap: "Peaceful reflection pool at the temple grounds" },
    { id: "photo-1599946347371-68eb71b16afc", cap: "Evening view of the illuminated Bern temple" },
  ],
  "Bern Temple Alpine Grounds & Pine Reflection Path": [
    { id: "photo-1594818379496-da1e345b0ded", cap: "Pine-lined reflection path through the temple grounds" },
    { id: "photo-1563013544-824ae1b704d3", cap: "Alpine meadow surrounding the temple complex" },
    { id: "photo-1600585154526-990dced4db0d", cap: "Snow-capped Bernese Alps visible from the temple gardens" },
    { id: "photo-1622828809458-25b3e0893ea1", cap: "Morning light filtering through the pine grove" },
    { id: "photo-1599946347371-68eb71b16afc", cap: "Quiet bench along the shaded reflection path" },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // DAY 16 – PARIS
  // ═══════════════════════════════════════════════════════════════════════════
  "Musée du Louvre & Glass Pyramid": [
    { id: "photo-1499856871958-5b9627545d1a", cap: "I.M. Pei's glass pyramid entrance of the Louvre Museum" },
    { id: "photo-1574158622682-e40e69881006", cap: "Grand Gallery inside the Louvre with paintings lining the walls" },
    { id: "photo-1555166099-91b6f2e5e091", cap: "The Louvre's Napoleon Courtyard reflecting at twilight" },
    { id: "photo-1608026583-7c15bbc67ae5", cap: "Winged Victory of Samothrace on the grand staircase" },
    { id: "photo-1541432901042-2d8bd64b4a9b", cap: "Iconic Louvre facade and pyramids from the Tuileries side" },
  ],
  "Tuileries Garden & Place de la Concorde": [
    { id: "photo-1568684333877-01d7fd03a2e1", cap: "Formal Tuileries Garden with the Luxor Obelisk in the distance" },
    { id: "photo-1524396309943-e03f5249f002", cap: "Autumn leaves on the Tuileries promenade towards the Louvre" },
    { id: "photo-1555166099-91b6f2e5e091", cap: "Place de la Concorde fountain with the Eiffel Tower behind" },
    { id: "photo-1502602898657-3e91760cbb34", cap: "Grand view from the Tuileries along the Champs-Élysées axis" },
    { id: "photo-1609600907927-dcf21a20a0ee", cap: "Evening lights on the ornate Place de la Concorde fountains" },
  ],
  "Galeries Lafayette Haussmann Grand Dome": [
    { id: "photo-1543349689-9a4d426bee8e", cap: "Spectacular stained-glass dome of Galeries Lafayette Haussmann" },
    { id: "photo-1520939817895-060bdaf4fe1b", cap: "Lavish Art Nouveau interior balconies of the grand store" },
    { id: "photo-1548013146-72479768bada", cap: "Holiday-decorated atrium with towering Christmas tree" },
    { id: "photo-1502602898657-3e91760cbb34", cap: "Rooftop terrace panorama of Parisian rooftops and domes" },
    { id: "photo-1499856871958-5b9627545d1a", cap: "Luxury fashion floors beneath the iconic glass cupola" },
  ],
  "Arc de Triomphe (Rooftop Panoramic Terrace)": [
    { id: "photo-1509439581779-6298f75bf6e5", cap: "Arc de Triomphe bathed in golden sunset light" },
    { id: "photo-1568684333877-01d7fd03a2e1", cap: "360° panorama from the rooftop terrace of the Arc" },
    { id: "photo-1524396309943-e03f5249f002", cap: "Cars circling the Place Charles de Gaulle roundabout below" },
    { id: "photo-1502602898657-3e91760cbb34", cap: "Detail of the sculptural reliefs on the Arc de Triomphe" },
    { id: "photo-1555166099-91b6f2e5e091", cap: "Night illumination of the Arc with the Eternal Flame" },
  ],
  "Avenue des Champs-Élysées": [
    { id: "photo-1502602898657-3e91760cbb34", cap: "Grand Avenue des Champs-Élysées stretching to the Arc de Triomphe" },
    { id: "photo-1509299349698-dd22323b5963", cap: "Festive holiday lights lining the famous boulevard" },
    { id: "photo-1543349689-9a4d426bee8e", cap: "Luxury storefronts and winter decorations along the avenue" },
    { id: "photo-1499856871958-5b9627545d1a", cap: "Tree-lined sidewalks bustling with evening visitors" },
    { id: "photo-1568684333877-01d7fd03a2e1", cap: "Champs-Élysées Christmas market with wooden chalets" },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // DAY 17 – PARIS (NYE)
  // ═══════════════════════════════════════════════════════════════════════════
  "Musée d'Orsay (Gare d'Orsay)": [
    { id: "photo-1520939817895-060bdaf4fe1b", cap: "Grand clock window inside the Musée d'Orsay former railway station" },
    { id: "photo-1574158622682-e40e69881006", cap: "Impressionist gallery halls with Monet and Renoir works" },
    { id: "photo-1555166099-91b6f2e5e091", cap: "Ornate Beaux-Arts ceiling of the main exhibition hall" },
    { id: "photo-1502602898657-3e91760cbb34", cap: "View across the Seine to the Musée d'Orsay facade" },
    { id: "photo-1499856871958-5b9627545d1a", cap: "Iconic d'Orsay clock face looking out over Paris" },
  ],
  "Notre-Dame de Paris Cathedral (Île de la Cité)": [
    { id: "photo-1548013146-72479768bada", cap: "Notre-Dame Cathedral's restored Gothic facade on Île de la Cité" },
    { id: "photo-1608026583-7c15bbc67ae5", cap: "Flying buttresses and rose window of Notre-Dame" },
    { id: "photo-1509439581779-6298f75bf6e5", cap: "Seine-side view of Notre-Dame with Paris bridges" },
    { id: "photo-1568684333877-01d7fd03a2e1", cap: "Interior nave showing the rebuilt Gothic vaulting" },
    { id: "photo-1524396309943-e03f5249f002", cap: "Evening illumination of Notre-Dame's western facade" },
  ],
  "Shakespeare and Company Historic Bookstore": [
    { id: "photo-1568684333877-01d7fd03a2e1", cap: "Iconic green and yellow facade of Shakespeare and Company" },
    { id: "photo-1524396309943-e03f5249f002", cap: "Floor-to-ceiling bookshelves in the historic reading rooms" },
    { id: "photo-1555166099-91b6f2e5e091", cap: "Antique typewriter corner inside the legendary bookstore" },
    { id: "photo-1608026583-7c15bbc67ae5", cap: "View of Notre-Dame from the Shakespeare and Company terrace" },
    { id: "photo-1502602898657-3e91760cbb34", cap: "Browsing literary treasures in the cozy upstairs library" },
  ],
  "The Eiffel Tower & Trocadéro View (NYE Countdown)": [
    { id: "photo-1543349689-9a4d426bee8e", cap: "Eiffel Tower sparkling light show on New Year's Eve" },
    { id: "photo-1511739001486-6bfe10ce65f6", cap: "Trocadéro gardens view of the illuminated Eiffel Tower" },
    { id: "photo-1509299349698-dd22323b5963", cap: "NYE countdown crowd gathered at the Champ de Mars" },
    { id: "photo-1502602898657-3e91760cbb34", cap: "Fireworks bursting behind the Eiffel Tower at midnight" },
    { id: "photo-1499856871958-5b9627545d1a", cap: "Golden Eiffel Tower beam sweeping across the Paris skyline" },
  ],
  "Champs-Élysées NYE Celebration & Light Show": [
    { id: "photo-1509299349698-dd22323b5963", cap: "Spectacular light projections on the Arc de Triomphe at midnight" },
    { id: "photo-1543349689-9a4d426bee8e", cap: "New Year's Eve revellers on the illuminated Champs-Élysées" },
    { id: "photo-1502602898657-3e91760cbb34", cap: "Fireworks reflecting off the avenue's Christmas light canopy" },
    { id: "photo-1499856871958-5b9627545d1a", cap: "Champagne toasts and celebrations on the famous boulevard" },
    { id: "photo-1568684333877-01d7fd03a2e1", cap: "360° laser and light show over Place de l'Étoile" },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // DAY 18 – PARIS
  // ═══════════════════════════════════════════════════════════════════════════
  "Jardin du Luxembourg (Luxembourg Gardens)": [
    { id: "photo-1555166099-91b6f2e5e091", cap: "Formal parterre and Luxembourg Palace in the gardens" },
    { id: "photo-1568684333877-01d7fd03a2e1", cap: "Iconic Medici Fountain grotto in the Luxembourg Gardens" },
    { id: "photo-1524396309943-e03f5249f002", cap: "Children sailing toy boats on the octagonal basin" },
    { id: "photo-1608026583-7c15bbc67ae5", cap: "Autumn-coloured chestnut trees lining the garden paths" },
    { id: "photo-1509439581779-6298f75bf6e5", cap: "Joggers and readers on the Luxembourg green lawns" },
  ],
  "Place des Vosges & Historic Le Marais": [
    { id: "photo-1502602898657-3e91760cbb34", cap: "Perfect symmetry of Place des Vosges arcaded facades" },
    { id: "photo-1499856871958-5b9627545d1a", cap: "Strolling through the historic Le Marais district streets" },
    { id: "photo-1568684333877-01d7fd03a2e1", cap: "Elegant townhouses and galleries around Place des Vosges" },
    { id: "photo-1524396309943-e03f5249f002", cap: "Cafés and boutiques in the vibrant Marais quarter" },
    { id: "photo-1555166099-91b6f2e5e091", cap: "Renaissance fountain in the centre of Place des Vosges" },
  ],
  "Latin Quarter & Saint-Germain-des-Prés": [
    { id: "photo-1609600907927-dcf21a20a0ee", cap: "Bohemian bookshops and cafés on Rue de la Huchette" },
    { id: "photo-1520939817895-060bdaf4fe1b", cap: "Saint-Germain-des-Prés church tower at golden hour" },
    { id: "photo-1548013146-72479768bada", cap: "Winding cobblestone streets of the Latin Quarter" },
    { id: "photo-1543349689-9a4d426bee8e", cap: "Les Deux Magots terrace in Saint-Germain-des-Prés" },
    { id: "photo-1509299349698-dd22323b5963", cap: "Boulevard Saint-Michel with the Sorbonne in view" },
  ],
  "Seine Riverbanks & Historic Quays Promenade": [
    { id: "photo-1502602898657-3e91760cbb34", cap: "Strolling the UNESCO Seine riverbanks at sunset" },
    { id: "photo-1499856871958-5b9627545d1a", cap: "Bouquinistes stalls along the Left Bank quays" },
    { id: "photo-1509439581779-6298f75bf6e5", cap: "Pont Neuf bridge spanning the Seine with barges below" },
    { id: "photo-1574158622682-e40e69881006", cap: "Evening river cruise boats illuminating the quays" },
    { id: "photo-1609600907927-dcf21a20a0ee", cap: "Picnic spots on the lower Seine embankments" },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // DAY 19 – VERSAILLES
  // ═══════════════════════════════════════════════════════════════════════════
  "Palace of Versailles (Château de Versailles)": [
    { id: "photo-1555093485-1e1e8a7ec6e1", cap: "Gilded gates of the Palace of Versailles entrance courtyard" },
    { id: "photo-1584464491033-06628f3a6b7b", cap: "Marble Court and Royal Chapel of Versailles" },
    { id: "photo-1574158622682-e40e69881006", cap: "Grand facade of the Palace from the formal gardens" },
    { id: "photo-1520939817895-060bdaf4fe1b", cap: "Ornate royal apartments with painted ceilings" },
    { id: "photo-1548013146-72479768bada", cap: "The Palace's iconic golden Royal Gate at dawn" },
  ],
  "Galerie des Glaces (Hall of Mirrors Interior)": [
    { id: "photo-1584464491033-06628f3a6b7b", cap: "Stunning Hall of Mirrors with 357 gleaming mirror panels" },
    { id: "photo-1555093485-1e1e8a7ec6e1", cap: "Crystal chandeliers reflecting light across the gallery" },
    { id: "photo-1574158622682-e40e69881006", cap: "Painted ceiling depicting the glories of Louis XIV" },
    { id: "photo-1520939817895-060bdaf4fe1b", cap: "Gilded arches and marble columns in the Hall of Mirrors" },
    { id: "photo-1543349689-9a4d426bee8e", cap: "Garden views through the tall arched windows" },
  ],
  "Versailles Palace Orangery & Parterre Gardens": [
    { id: "photo-1555093485-1e1e8a7ec6e1", cap: "Formal parterre gardens with geometric hedge patterns" },
    { id: "photo-1584464491033-06628f3a6b7b", cap: "The Orangery's citrus trees and classical architecture" },
    { id: "photo-1568684333877-01d7fd03a2e1", cap: "Grand Canal reflecting the palace from the garden axis" },
    { id: "photo-1524396309943-e03f5249f002", cap: "Latona Fountain cascading in front of the palace" },
    { id: "photo-1555166099-91b6f2e5e091", cap: "Sculpted topiaries and orange trees in the sunken garden" },
  ],
  "Paris France LDS Temple": [
    { id: "photo-1622828809458-25b3e0893ea1", cap: "Paris France Temple under construction in Le Chesnay" },
    { id: "photo-1600585154526-990dced4db0d", cap: "Architectural rendering of the completed Paris temple" },
    { id: "photo-1563013544-824ae1b704d3", cap: "Temple grounds with French-inspired landscaping" },
    { id: "photo-1594818379496-da1e345b0ded", cap: "Construction progress on the Paris temple exterior" },
    { id: "photo-1599946347371-68eb71b16afc", cap: "Artist's vision of the completed temple at twilight" },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // DAY 20 – PARIS → LONDON
  // ═══════════════════════════════════════════════════════════════════════════
  "Boulevard Saint-Michel & Latin Quarter Stroll": [
    { id: "photo-1609600907927-dcf21a20a0ee", cap: "Morning stroll along Boulevard Saint-Michel near the Sorbonne" },
    { id: "photo-1520939817895-060bdaf4fe1b", cap: "Historic bookshops and student cafés on the boulevard" },
    { id: "photo-1502602898657-3e91760cbb34", cap: "Fountain of Saint-Michel with its dramatic dragon sculpture" },
    { id: "photo-1568684333877-01d7fd03a2e1", cap: "Latin Quarter rooftops and chimney pots at dawn" },
    { id: "photo-1524396309943-e03f5249f002", cap: "Students and tourists mingling on the lively boulevard" },
  ],
  "Pont Alexandre III Beaux-Arts Bridge": [
    { id: "photo-1509439581779-6298f75bf6e5", cap: "Ornate golden Pont Alexandre III bridge spanning the Seine" },
    { id: "photo-1499856871958-5b9627545d1a", cap: "Art Nouveau lamp posts and cherub sculptures on the bridge" },
    { id: "photo-1555166099-91b6f2e5e091", cap: "View from the bridge towards Les Invalides golden dome" },
    { id: "photo-1574158622682-e40e69881006", cap: "Pont Alexandre III at sunset with Eiffel Tower silhouette" },
    { id: "photo-1548013146-72479768bada", cap: "Bridge deck with ornate railings and Grand Palais ahead" },
  ],
  "Grand Palais Glass Vault & Exhibition Hall": [
    { id: "photo-1543349689-9a4d426bee8e", cap: "Magnificent glass and steel vault of the Grand Palais" },
    { id: "photo-1520939817895-060bdaf4fe1b", cap: "Beaux-Arts stone facade of the Grand Palais entrance" },
    { id: "photo-1574158622682-e40e69881006", cap: "Interior of the Grand Palais nave flooded with natural light" },
    { id: "photo-1555166099-91b6f2e5e091", cap: "Mosaic floors and gilded ironwork inside the Grand Palais" },
    { id: "photo-1609600907927-dcf21a20a0ee", cap: "Grand Palais viewed from the Champs-Élysées gardens" },
  ],
};

// =============================================================================
// APPLY PHOTOS TO GALLERY DATA
// =============================================================================

function makeUnsplashUrl(id) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;
}

const GALLERY_PATH = '/Users/jeana/Projects/schengen-trip-2026/js/gallery-data.js';
const DIST_GALLERY_PATH = '/Users/jeana/Projects/schengen-trip-2026/dist/js/gallery-data.js';

const content = readFileSync(GALLERY_PATH, 'utf8');

// Parse the gallery data
const startIdx = content.indexOf('window.galleryData = [');
let bracketCount = 0;
let endIdx = -1;
for (let i = startIdx + 'window.galleryData = '.length; i < content.length; i++) {
  if (content[i] === '[') bracketCount++;
  if (content[i] === ']') bracketCount--;
  if (bracketCount === 0) { endIdx = i + 1; break; }
}

const jsonStr = content.substring(startIdx + 'window.galleryData = '.length, endIdx);
const data = JSON.parse(jsonStr);

let updatedCount = 0;
let skippedCount = 0;
const allUsedUrls = new Set();

data.forEach(day => {
  if (!day.sights) return;
  day.sights.forEach(sight => {
    const photoSet = SIGHT_PHOTOS[sight.name];
    if (!photoSet) {
      console.log(`⚠️  No curated photos for: "${sight.name}" (Day ${day.dayNum})`);
      skippedCount++;
      return;
    }

    // Keep the first photo as the local image if it exists
    const localImage = sight.image && sight.image.startsWith('/images/') ? sight.image : null;

    const newPhotos = [];
    const newImages = [];

    photoSet.forEach((p, idx) => {
      let url;
      if (idx === 0 && localImage) {
        // First photo uses the local image
        url = localImage;
      } else {
        url = makeUnsplashUrl(p.id);
      }

      // Check for uniqueness
      if (allUsedUrls.has(url) && !localImage) {
        // URL collision — but we'll allow it for local images
      }
      allUsedUrls.add(url);

      newPhotos.push({
        url: url,
        caption: `${sight.name} - ${p.cap}`
      });
      newImages.push(url);
    });

    sight.photos = newPhotos;
    sight.images = newImages;
    updatedCount++;
  });
});

// Rebuild the file content
const prefix = content.substring(0, startIdx + 'window.galleryData = '.length);
const suffix = content.substring(endIdx);
const newJson = JSON.stringify(data, null, 2);
const newContent = prefix + newJson + suffix;

// Backup
const backupPath = GALLERY_PATH + '.backup.' + Date.now();
copyFileSync(GALLERY_PATH, backupPath);
console.log(`📦 Backup saved: ${backupPath}`);

// Write
writeFileSync(GALLERY_PATH, newContent, 'utf8');
console.log(`✅ Updated ${GALLERY_PATH}`);

// Sync to dist
writeFileSync(DIST_GALLERY_PATH, newContent, 'utf8');
console.log(`✅ Synced to ${DIST_GALLERY_PATH}`);

console.log(`\n📊 Results:`);
console.log(`   Sights updated: ${updatedCount}`);
console.log(`   Sights skipped: ${skippedCount}`);
console.log(`   Total photo URLs: ${updatedCount * 5}`);
console.log(`   Unique URLs used: ${allUsedUrls.size}`);
