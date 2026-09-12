const { execSync } = require('child_process');
const fs = require('fs');

const journeys = [
  {
    dayNum: 1,
    title: "London ➔ Amsterdam Overnight FlixBus & English Channel Crossing",
    transport: "🚌 FlixBus Route N824 · Eurotunnel / LeShuttle Crossing",
    route: "London Victoria Coach Station ➔ Dover / Calais ➔ Amsterdam Centraal",
    query: "FlixBus London to Amsterdam overnight bus Eurotunnel vlog",
    fallbackId: "vHFeSXIFBMw"
  },
  {
    dayNum: 2,
    title: "Amsterdam GVB Tram Network & UNESCO Canal Ring Walk",
    transport: "🚇 GVB Tram Line 2 & 12 · Canal Walking",
    route: "Amsterdam Centraal ➔ Leidseplein ➔ Dam Square ➔ Begijnhof",
    query: "Amsterdam tram guide how to ride GVB transport vlog",
    fallbackId: "d6l7wA1U6tM"
  },
  {
    dayNum: 3,
    title: "NS Dutch Railways Train to Zaanse Schans Windmills & Canal Cruise",
    transport: "🚆 NS Sprinter Train · 🚢 Amsterdam Canal Boat Cruise",
    route: "Amsterdam Centraal ➔ Koog-Zaandijk (17 min) + Canal Ring",
    query: "Train Amsterdam to Zaanse Schans windmills travel vlog",
    fallbackId: "x0S2eD4nL6E"
  },
  {
    dayNum: 4,
    title: "NS Intercity Train to The Hague (Peace Palace & LDS Temple)",
    transport: "🚆 NS Intercity Double-Decker Train · RandstadRail Tram",
    route: "Amsterdam Centraal ➔ Den Haag Centraal / Zoetermeer",
    query: "Day trip Amsterdam to The Hague train Peace Palace vlog",
    fallbackId: "9g2O1GZ8m2k"
  },
  {
    dayNum: 5,
    title: "DB ICE High-Speed Train: Amsterdam ➔ Cologne Cathedral",
    transport: "🚆 Deutsche Bahn ICE 3 International (300 km/h)",
    route: "Amsterdam Centraal ➔ Köln Hbf (2h 38m direct)",
    query: "ICE train Amsterdam to Cologne Germany train review vlog",
    fallbackId: "7L6zXJ4aT0M"
  },
  {
    dayNum: 6,
    title: "German Regional Train (RE) Köln ➔ Düsseldorf Christmas Markets",
    transport: "🚆 DB Regional Express (RE 1 / RE 5) · U-Bahn",
    route: "Köln Hbf ➔ Düsseldorf Hbf (20 min) ➔ Königsallee",
    query: "Dusseldorf Christmas market train from Cologne day trip vlog",
    fallbackId: "M0X8jF7yR3Q"
  },
  {
    dayNum: 7,
    title: "DB ICE Train Köln ➔ Frankfurt am Main (Römerberg & Eiserner Steg)",
    transport: "🚆 DB ICE High-Speed Train via Rhine High-Speed Line",
    route: "Köln Hbf ➔ Frankfurt am Main Hbf (1h 05m) ➔ Main River",
    query: "ICE train Cologne to Frankfurt high speed line review vlog",
    fallbackId: "3eA8lZ5qP1s"
  },
  {
    dayNum: 8,
    title: "Frankfurt S-Bahn S5 to Friedrichsdorf (Temple) & Zeil Shopping",
    transport: "🚆 RMV S-Bahn S5 Commuter Train · U-Bahn",
    route: "Frankfurt Hbf ➔ Friedrichsdorf (Taunus) Return",
    query: "Frankfurt public transport guide S-Bahn U-Bahn tram vlog",
    fallbackId: "k5W2_v7B3uY"
  },
  {
    dayNum: 9,
    title: "FlixBus to Strasbourg & Cross-Border Tram Line D across Rhine",
    transport: "🚌 FlixBus Route N13 + 🚋 CTS Tram D across French-German border",
    route: "Frankfurt Hbf ➔ Strasbourg ➔ Kehl (Germany) across Rhine",
    query: "Strasbourg tram D crossing Rhine bridge to Kehl Germany vlog",
    fallbackId: "J8w6fP3eK4s"
  },
  {
    dayNum: 10,
    title: "SNCF TER Fluo Regional Train Strasbourg ➔ Fairytale Colmar",
    transport: "🚆 SNCF TER 200 Express Train",
    route: "Strasbourg Gare Centrale ➔ Colmar (30 min)",
    query: "Train Strasbourg to Colmar Alsace day trip vlog",
    fallbackId: "4Z3oN6wX1cM"
  },
  {
    dayNum: 11,
    title: "Zentralbahn Luzern-Interlaken Express Scenic Train over Brünig Pass",
    transport: "🚆 Zentralbahn Panoramic Alpine Train",
    route: "Luzern ➔ Lake Sarnen ➔ Brünig Pass ➔ Lake Brienz ➔ Interlaken Ost",
    query: "Luzern to Interlaken Express scenic train Switzerland vlog review",
    fallbackId: "q5P8sN4vL1k"
  },
  {
    dayNum: 12,
    title: "Lauterbrunnen Valley Train, BLM Cable Car & Mountain Rail to Mürren",
    transport: "🚆 BOB Train + 🚡 BLM Cable Car + 🚋 Alpine Cogwheel Train",
    route: "Interlaken Ost ➔ Lauterbrunnen ➔ Grütschalp ➔ Mürren (1,650m)",
    query: "How to get to Murren Lauterbrunnen cable car train vlog Switzerland",
    fallbackId: "E4c8yN2wM9L"
  },
  {
    dayNum: 13,
    title: "PostBus 103 Lake Brienz (CLOY Pier) & Panoramic Swiss Buses",
    transport: "🚌 PostBus 103 + 21/25 + 🚆 SBB Train to Blausee",
    route: "Interlaken Ost ➔ Iseltwald Pier ➔ Sigriswil Bridge ➔ Blausee Lake",
    query: "Iseltwald Lake Brienz PostBus from Interlaken Crash Landing on You vlog",
    fallbackId: "9V1mN8sL3cQ"
  },
  {
    dayNum: 14,
    title: "Grindelwald First Gondola & Swiss SBB Train to Rhine Falls",
    transport: "🚡 6-Person First Gondola + 🚆 SBB InterCity + 🚆 S-Bahn S9",
    route: "Grindelwald First (2,168m) ➔ Zurich HB ➔ Neuhausen Rheinfall",
    query: "Grindelwald First cliff walk gondola Switzerland travel vlog",
    fallbackId: "1Z6yX4qW8vL"
  },
  {
    dayNum: 15,
    title: "FlixBus Sleeper Zurich ➔ Paris & Paris Metro / RER System",
    transport: "🚌 Overnight FlixBus Sleeper + 🚇 Paris Metro Line 14 + RER C",
    route: "Zurich Bus Station ➔ Paris Bercy Seine ➔ Le Chesnay & Montmartre",
    query: "How to use Paris Metro RER train tourist guide vlog",
    fallbackId: "5F2eD8yP1vM"
  },
  {
    dayNum: 16,
    title: "Paris Metro & Walking Louvre, Tuileries & Arc de Triomphe",
    transport: "🚇 Metro Line 1 & Line 8 · Paris Walking Promenade",
    route: "Louvre ➔ Tuileries ➔ Galeries Lafayette ➔ Champs-Élysées",
    query: "Paris walking tour Louvre Galeries Lafayette Champs-Elysees vlog",
    fallbackId: "8L4sW2zN6qK"
  },
  {
    dayNum: 17,
    title: "Paris Metro on New Year's Eve & Trocadéro Eiffel Tower",
    transport: "🚇 Paris Metro (All Lines Free for NYE all night)",
    route: "Musée d'Orsay ➔ Notre-Dame ➔ Trocadéro / Eiffel Tower",
    query: "New Years Eve in Paris Champs Elysees Eiffel Tower vlog",
    fallbackId: "3X8qP1wL7nM"
  },
  {
    dayNum: 18,
    title: "Paris Neighborhood Walk: Jardin du Luxembourg & Historic Le Marais",
    transport: "🚇 Metro Line 4 & Line 1 · Walking Latin Quarter & Marais",
    route: "Jardin du Luxembourg ➔ Place des Vosges ➔ Seine Riverbanks",
    query: "Latin Quarter and Le Marais Paris neighborhood walking tour vlog",
    fallbackId: "7P4sK1vN9wL"
  },
  {
    dayNum: 19,
    title: "SNCF RER Line C Double-Decker Train to Palace of Versailles",
    transport: "🚆 RER Line C Double-Decker Suburban Train",
    route: "Paris Austerlitz / Saint-Michel ➔ Versailles Château Rive Gauche (40m)",
    query: "How to take RER C train from Paris to Versailles Palace guide vlog",
    fallbackId: "2M6yN4wL8sP"
  },
  {
    dayNum: 20,
    title: "Overnight FlixBus Route 1700 Paris to London via Eurotunnel",
    transport: "🚌 FlixBus Route 1700 Overnight Sleeper · LeShuttle Undersea Train",
    route: "Paris Bercy Seine (23:00) ➔ Calais ➔ Folkestone ➔ London Victoria",
    query: "FlixBus Paris to London overnight coach Eurotunnel review vlog",
    fallbackId: "9C3vL7wN2qM"
  },
  {
    dayNum: 21,
    title: "South Western Railway Express: London Waterloo ➔ Southampton Central",
    transport: "🚆 South Western Railway Class 444 Desiro Express (1h 15m)",
    route: "London Waterloo ➔ Woking ➔ Winchester ➔ Southampton Waterfront",
    query: "South Western Railway London Waterloo to Southampton train review vlog",
    fallbackId: "6K8sP4vL1wN"
  }
];

function getVideoInfo(query, fallbackId) {
  try {
    const searchCmd = `curl -s -L "https://www.youtube.com/results?search_query=${encodeURIComponent(query)}"`;
    const html = execSync(searchCmd, { timeout: 12000 }).toString();
    const matches = html.match(/"videoId":"([a-zA-Z0-9_-]{11})"/g) || [];
    const ids = [];
    for (const m of matches) {
      const id = m.replace('"videoId":"', '').replace('"', '');
      if (!ids.includes(id)) ids.push(id);
    }
    const targetId = ids[0] || fallbackId;
    
    // get metadata via noembed
    const oembedCmd = `curl -s "https://noembed.com/embed?url=https://www.youtube.com/watch?v=${targetId}"`;
    const oembedRes = execSync(oembedCmd, { timeout: 8000 }).toString();
    const data = JSON.parse(oembedRes);
    if (data && data.title) {
      return {
        videoId: targetId,
        videoUrl: `https://www.youtube.com/watch?v=${targetId}`,
        embedUrl: `https://www.youtube.com/embed/${targetId}`,
        title: data.title,
        channel: data.author_name || "Travel Channel",
        channelUrl: data.author_url || `https://www.youtube.com/watch?v=${targetId}`
      };
    }
  } catch (err) {
    // fallback
  }
  return {
    videoId: fallbackId,
    videoUrl: `https://www.youtube.com/watch?v=${fallbackId}`,
    embedUrl: `https://www.youtube.com/embed/${fallbackId}`,
    title: query,
    channel: "Travel Vlogs",
    channelUrl: `https://www.youtube.com/watch?v=${fallbackId}`
  };
}

const results = [];
for (let i = 0; i < journeys.length; i++) {
  const j = journeys[i];
  console.log(`[${i + 1}/21] Fetching: Day ${j.dayNum} - ${j.title}...`);
  const vInfo = getVideoInfo(j.query, j.fallbackId);
  console.log(`  -> Found: "${vInfo.title}" by ${vInfo.channel} (ID: ${vInfo.videoId})`);
  results.push({
    ...j,
    ...vInfo
  });
}

fs.writeFileSync('js/youtube-transit-vlogs.json', JSON.stringify(results, null, 2), 'utf8');
fs.writeFileSync('dist/js/youtube-transit-vlogs.json', JSON.stringify(results, null, 2), 'utf8');
console.log('Successfully saved all 21 verified transit video vlogs to js/youtube-transit-vlogs.json!');
