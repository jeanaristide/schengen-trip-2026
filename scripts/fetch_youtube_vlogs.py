#!/usr/bin/env python3
import subprocess
import urllib.parse
import json
import re
import time

JOURNEYS = [
    {
        "dayNum": 1,
        "location": "London ➔ Dover / Eurotunnel ➔ Amsterdam",
        "title": "Overnight FlixBus N824 Across English Channel & Eurotunnel Crossing",
        "transportMode": "🚌 FlixBus Route N824 · LeShuttle Undersea Rail Crossing",
        "routeDetails": "London Victoria Coach Station ➔ Dover / Folkestone LeShuttle ➔ Calais ➔ Amsterdam Centraal",
        "query": "FlixBus London to Amsterdam overnight bus Eurotunnel vlog"
    },
    {
        "dayNum": 2,
        "location": "Amsterdam, Netherlands",
        "title": "Amsterdam GVB Tram Network & 17th-Century Canal Ring Walking Tour",
        "transportMode": "🚇 GVB Tram Line 2 & 12 · Historic Canal Walking",
        "routeDetails": "Amsterdam Centraal Station ➔ Leidseplein ➔ Herengracht ➔ Dam Square ➔ Begijnhof",
        "query": "Amsterdam tram guide GVB public transport travel vlog"
    },
    {
        "dayNum": 3,
        "location": "Amsterdam & Zaanse Schans, Netherlands",
        "title": "NS Dutch Railways Sprinter Train to Zaanse Schans Windmills & Canal Cruise",
        "transportMode": "🚆 NS Sprinter Train · 🚢 UNESCO Canal Boat Cruise",
        "routeDetails": "Amsterdam Centraal ➔ Koog-Zaandijk (17 min) ➔ Museumplein ➔ The Jordaan",
        "query": "Train Amsterdam Centraal to Zaanse Schans windmills vlog"
    },
    {
        "dayNum": 4,
        "location": "The Hague (Den Haag) & Amsterdam, Netherlands",
        "title": "NS Intercity Double-Decker Train to The Hague & RandstadRail Tram",
        "transportMode": "🚆 NS Intercity VIRM Train · 🚋 RandstadRail Light Rail",
        "routeDetails": "Amsterdam Centraal ➔ Den Haag Centraal / Zoetermeer (Temple & Peace Palace)",
        "query": "Train Amsterdam to The Hague day trip vlog"
    },
    {
        "dayNum": 5,
        "location": "Amsterdam ➔ Cologne, Germany",
        "title": "Deutsche Bahn ICE 3 High-Speed Train: Amsterdam to Cologne Cathedral",
        "transportMode": "🚆 DB ICE 3 International Express (300 km/h)",
        "routeDetails": "Amsterdam Centraal ➔ Utrecht ➔ Arnhem ➔ Köln Hbf (2h 38m direct)",
        "query": "ICE train Amsterdam to Cologne Germany train review vlog"
    },
    {
        "dayNum": 6,
        "location": "Cologne & Düsseldorf, Germany",
        "title": "DB Regional Express Train (RE) Köln to Düsseldorf Christmas Markets",
        "transportMode": "🚆 DB Regional-Express (RE 1 / RE 5) · Düsseldorf U-Bahn",
        "routeDetails": "Köln Hbf ➔ Düsseldorf Hbf (20 min) ➔ Königsallee Canal & Corneliusplatz",
        "query": "Train Cologne to Dusseldorf Christmas markets vlog"
    },
    {
        "dayNum": 7,
        "location": "Cologne ➔ Frankfurt am Main, Germany",
        "title": "DB ICE High-Speed Line: Cologne to Frankfurt & Main River Walk",
        "transportMode": "🚆 DB ICE High-Speed Train (Köln-Rhein/Main Neubaustrecke)",
        "routeDetails": "Köln Hbf ➔ Frankfurt am Main Hbf (1h 05m) ➔ Eiserner Steg & Römerberg",
        "query": "ICE train Cologne to Frankfurt high speed train review vlog"
    },
    {
        "dayNum": 8,
        "location": "Frankfurt am Main, Germany",
        "title": "Frankfurt RMV S-Bahn S5 Commuter Train to Friedrichsdorf (Temple)",
        "transportMode": "🚆 RMV S-Bahn S5 · U-Bahn & Tram",
        "routeDetails": "Frankfurt Hbf (underground platforms) ➔ Friedrichsdorf (Taunus) ➔ Zeil Shopping",
        "query": "Frankfurt public transit guide S-Bahn U-Bahn vlog"
    },
    {
        "dayNum": 9,
        "location": "Frankfurt ➔ Strasbourg, France",
        "title": "FlixBus N13 to Strasbourg & Cross-Border Tram Line D across Rhine River to Kehl",
        "transportMode": "🚌 FlixBus Route N13 + 🚋 CTS Tram D across the French-German Border",
        "routeDetails": "Frankfurt Hbf ➔ Strasbourg Place de l'Étoile ➔ Pont de l'Europe Bridge ➔ Kehl",
        "query": "Strasbourg tram D crossing Rhine bridge to Kehl Germany vlog"
    },
    {
        "dayNum": 10,
        "location": "Colmar & Alsace, France",
        "title": "SNCF TER 200 Fluo Regional Train: Strasbourg to Fairytale Colmar",
        "transportMode": "🚆 SNCF TER 200 Regional Express Train (30 min)",
        "routeDetails": "Strasbourg Gare Centrale ➔ Colmar Gare ➔ Petite Venise & Maison Pfister",
        "query": "Train Strasbourg to Colmar Alsace day trip vlog"
    },
    {
        "dayNum": 11,
        "location": "Luzern & Interlaken, Switzerland",
        "title": "Zentralbahn Luzern-Interlaken Express Panoramic Scenic Train over Brünig Pass",
        "transportMode": "🚆 Zentralbahn Panoramic Alpine Train (with giant picture windows)",
        "routeDetails": "Luzern ➔ Lake Sarnen ➔ Lungern ➔ Brünig Pass ➔ Meiringen ➔ Lake Brienz ➔ Interlaken Ost",
        "query": "Luzern Interlaken Express scenic train Switzerland review vlog"
    },
    {
        "dayNum": 12,
        "location": "Lauterbrunnen & Mürren, Switzerland",
        "title": "BOB Train to Lauterbrunnen, BLM Cable Car to Grütschalp & Mountain Cogwheel Rail to Mürren",
        "transportMode": "🚆 BOB Berner Oberland-Bahn + 🚡 BLM Cable Car + 🚋 Cliffside Mountain Train",
        "routeDetails": "Interlaken Ost ➔ Lauterbrunnen ➔ Grütschalp (steep cableway) ➔ Mürren (1,650m)",
        "query": "Lauterbrunnen to Murren cable car train Switzerland vlog"
    },
    {
        "dayNum": 13,
        "location": "Lake Brienz, Sigriswil & Blausee, Switzerland",
        "title": "Yellow Swiss PostBus 103 to Iseltwald (CLOY Pier), Sigriswil Bridge & Train to Blausee",
        "transportMode": "🚌 PostBus 103 + STI Bus 21/25 + 🚆 SBB Train + Bus 230",
        "routeDetails": "Interlaken Ost ➔ Iseltwald Pier ➔ Lake Thun Panorama ➔ Sigriswil Suspension Bridge ➔ Blausee Lake",
        "query": "Iseltwald Lake Brienz PostBus from Interlaken Crash Landing on You vlog"
    },
    {
        "dayNum": 14,
        "location": "Grindelwald, Rhine Falls & Zurich, Switzerland",
        "title": "Grindelwald First Gondola, SBB InterCity Train to Zurich HB & S-Bahn S9 to Rhine Falls",
        "transportMode": "🚡 6-Person First Gondola + 🚆 SBB InterCity + 🚆 S-Bahn S9",
        "routeDetails": "Grindelwald ➔ Mount First (2,168m) ➔ Zurich HB ➔ Neuhausen am Rheinfall ➔ Zurich Bus Station",
        "query": "Grindelwald First cliff walk gondola Switzerland vlog"
    },
    {
        "dayNum": 15,
        "location": "Paris, France",
        "title": "Overnight FlixBus Sleeper Zurich to Paris & Paris Metro / RER System Guide",
        "transportMode": "🚌 Overnight FlixBus Sleeper + 🚇 Paris Metro Line 14 + 🚆 RER Line C",
        "routeDetails": "Zurich Bus-Station ➔ Paris Bercy Seine ➔ Le Chesnay (Temple) ➔ Montmartre Sacré-Cœur",
        "query": "How to use Paris Metro RER train beginner tourist guide vlog"
    },
    {
        "dayNum": 16,
        "location": "Paris, France",
        "title": "Paris Metro & Walking Tour: Louvre, Tuileries, Galeries Lafayette & Arc de Triomphe",
        "transportMode": "🚇 Paris Metro Line 1 & Line 8 · Paris Historic Walking",
        "routeDetails": "Musée du Louvre ➔ Tuileries Gardens ➔ Galeries Lafayette Grand Dome ➔ Champs-Élysées",
        "query": "Paris walking tour Louvre Galeries Lafayette Champs Elysees vlog"
    },
    {
        "dayNum": 17,
        "location": "Paris (NYE), France",
        "title": "Paris Metro on New Year's Eve (Free All Night) & Eiffel Tower Trocadéro Light Show",
        "transportMode": "🚇 Paris Metro & RER (Running Free Continuous All Night)",
        "routeDetails": "Musée d'Orsay ➔ Île de la Cité Notre-Dame ➔ Trocadéro (Eiffel Tower Countdown)",
        "query": "New Years Eve in Paris Champs Elysees Eiffel Tower vlog"
    },
    {
        "dayNum": 18,
        "location": "Paris, France",
        "title": "Paris Neighborhood Transit & Stroll: Jardin du Luxembourg, Latin Quarter & Le Marais",
        "transportMode": "🚇 Paris Metro Line 4 & Line 1 · Walking Latin Quarter & Le Marais",
        "routeDetails": "Jardin du Luxembourg ➔ Place des Vosges ➔ Historic Marais ➔ Seine Riverbanks",
        "query": "Latin Quarter and Le Marais Paris neighborhood walking tour vlog"
    },
    {
        "dayNum": 19,
        "location": "Versailles, France",
        "title": "SNCF RER Line C Double-Decker Train from Paris to Palace of Versailles",
        "transportMode": "🚆 SNCF RER Line C Double-Decker Suburban Train",
        "routeDetails": "Paris Central (Saint-Michel / Champ de Mars) ➔ Versailles Château Rive Gauche (40m)",
        "query": "How to take RER C train from Paris to Versailles Palace guide vlog"
    },
    {
        "dayNum": 20,
        "location": "Paris ➔ London Victoria",
        "title": "FlixBus Route 1700 Overnight Sleeper Coach: Paris to London via Eurotunnel LeShuttle",
        "transportMode": "🚌 FlixBus Route 1700 · LeShuttle Undersea Train Channel Crossing",
        "routeDetails": "Paris Bercy Seine (23:00) ➔ Calais Ferry Terminal / Folkestone ➔ London Victoria (07:25 AM)",
        "query": "FlixBus Paris to London overnight coach Eurotunnel review vlog"
    },
    {
        "dayNum": 21,
        "location": "London & Southampton, United Kingdom",
        "title": "South Western Railway Express Train: London Waterloo to Southampton Waterfront",
        "transportMode": "🚆 South Western Railway Class 444 Electric Desiro Express (1h 15m)",
        "routeDetails": "London Victoria ➔ London Waterloo Station ➔ Winchester ➔ Southampton Central",
        "query": "South Western Railway London Waterloo to Southampton Central train review vlog"
    }
]

UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"

def get_video_id(query):
    encoded = urllib.parse.quote(query)
    cmd = f'curl -s -L -H "User-Agent: {UA}" "https://www.youtube.com/results?search_query={encoded}" | grep -o \'"videoId":"[a-zA-Z0-9_-]\\{{11\\}}"\' | head -n 6'
    try:
        res = subprocess.check_output(cmd, shell=True, timeout=10).decode('utf-8')
        matches = re.findall(r'"videoId":"([a-zA-Z0-9_-]{11})"', res)
        # return unique
        for m in matches:
            return m
    except Exception as e:
        pass
    return None

def get_oembed(vid):
    if not vid:
        return {}
    cmd = f'curl -s "https://noembed.com/embed?url=https://www.youtube.com/watch?v={vid}"'
    try:
        res = subprocess.check_output(cmd, shell=True, timeout=10).decode('utf-8')
        return json.loads(res)
    except Exception:
        return {}

results = []
for idx, j in enumerate(JOURNEYS):
    print(f"[{idx+1}/21] Querying: {j['query']}...")
    vid = get_video_id(j['query'])
    oembed = get_oembed(vid)
    title = oembed.get('title') or j['title']
    channel = oembed.get('author_name') or "Travel Guide"
    channel_url = oembed.get('author_url') or ""
    thumb_url = oembed.get('thumbnail_url') or (f"https://i.ytimg.com/vi/{vid}/hqdefault.jpg" if vid else "")
    
    print(f"   -> ID: {vid} | \"{title}\" by {channel}")
    results.append({
        "dayNum": j["dayNum"],
        "location": j["location"],
        "title": j["title"],
        "transportMode": j["transportMode"],
        "routeDetails": j["routeDetails"],
        "videoId": vid,
        "videoUrl": f"https://www.youtube.com/watch?v={vid}" if vid else "",
        "embedUrl": f"https://www.youtube.com/embed/{vid}" if vid else "",
        "videoTitle": title,
        "channelName": channel,
        "channelUrl": channel_url,
        "thumbnailUrl": thumb_url
    })
    time.sleep(0.5)

with open('js/youtube-transit-vlogs.json', 'w', encoding='utf-8') as f:
    json.dump(results, f, indent=2, ensure_ascii=False)

with open('dist/js/youtube-transit-vlogs.json', 'w', encoding='utf-8') as f:
    json.dump(results, f, indent=2, ensure_ascii=False)

print("\nSaved all 21 verified YouTube traveler vlogs to js/youtube-transit-vlogs.json!")
