import urllib.request
import urllib.parse
import re
import json
import time

sights_per_day = [
    {
        "dayNum": 1,
        "location": "London, England",
        "query": "London Westminster Big Ben walking tour travel vlog",
        "keySights": ["Westminster Abbey", "Big Ben", "Parliament Square", "Victoria Coach Station"]
    },
    {
        "dayNum": 2,
        "location": "Amsterdam, Netherlands",
        "query": "Amsterdam travel vlog Dam Square Begijnhof canals flower market",
        "keySights": ["Dam Square", "Royal Palace", "Begijnhof Courtyard", "17th-Century Canal Ring", "Bloemenmarkt", "Museumplein Ice Village"]
    },
    {
        "dayNum": 3,
        "location": "Amsterdam & Zaanse Schans, Netherlands",
        "query": "Zaanse Schans windmills Amsterdam canal cruise travel vlog",
        "keySights": ["Zaanse Schans Windmills", "Clog Workshop & Cheese Farm", "Amsterdam Canal Cruise", "The Jordaan & Nine Streets"]
    },
    {
        "dayNum": 4,
        "location": "The Hague & Scheveningen, Netherlands",
        "query": "The Hague travel vlog Peace Palace Mauritshuis Scheveningen",
        "keySights": ["Peace Palace (Vredespaleis)", "Binnenhof & Mauritshuis", "Scheveningen Pier & Beach Promenade", "The Hague Netherlands Temple"]
    },
    {
        "dayNum": 5,
        "location": "Cologne (Köln), Germany",
        "query": "Cologne Cathedral travel vlog Heinzelmännchen Christmas Market Hohenzollern",
        "keySights": ["Cologne Cathedral (Kölner Dom)", "Heinzelmännchen Christmas Market at Alter Markt & Heumarkt", "Hohenzollern Love Locks Bridge", "Chocolate Museum"]
    },
    {
        "dayNum": 6,
        "location": "Düsseldorf & Cologne, Germany",
        "query": "Dusseldorf travel vlog Konigsallee Altstadt Christmas market",
        "keySights": ["Königsallee Canal Boulevard", "Düsseldorf Altstadt", "Marktplatz Christmas Market by Historic Rathaus", "Rheinuferpromenade"]
    },
    {
        "dayNum": 7,
        "location": "Frankfurt am Main, Germany",
        "query": "Frankfurt travel vlog Romerberg Christmas Market Eiserner Steg",
        "keySights": ["Römerberg Medieval Square", "Frankfurt Christmas Market", "Eiserner Steg Iron Bridge over Main River", "Goethe House"]
    },
    {
        "dayNum": 8,
        "location": "Frankfurt am Main & Friedrichsdorf, Germany",
        "query": "Frankfurt Palmengarten Kleinmarkthalle travel vlog",
        "keySights": ["Palmengarten Botanical Gardens & Glasshouses", "Kleinmarkthalle Indoor Food Market", "Frankfurt Germany LDS Temple in Friedrichsdorf"]
    },
    {
        "dayNum": 9,
        "location": "Strasbourg, France & Kehl, Germany",
        "query": "Strasbourg travel vlog Petite France Cathedral Christmas Market",
        "keySights": ["Strasbourg Cathedral (Cathédrale Notre-Dame)", "Petite France Canal Quarter", "Place Kléber Giant Christmas Tree", "Kehl Rhine River Park"]
    },
    {
        "dayNum": 10,
        "location": "Colmar (\"Little Venice\"), France",
        "query": "Colmar travel vlog Little Venice Petite Venise Christmas Market",
        "keySights": ["La Petite Venise (Little Venice)", "Maison Pfister (1537 Renaissance)", "Koïfhus Old Customs House", "Marché Couvert", "Fairytale Christmas Markets"]
    },
    {
        "dayNum": 11,
        "location": "Lucerne & Interlaken, Switzerland",
        "query": "Lucerne Switzerland travel vlog Chapel Bridge Lion Monument Interlaken",
        "keySights": ["Chapel Bridge (Kapellbrücke) & Water Tower", "Lion Monument (Löwendenkmal)", "Lucerne Old Town Weinmarkt", "Interlaken Höheweg Promenade"]
    },
    {
        "dayNum": 12,
        "location": "Lauterbrunnen & Mürren, Switzerland",
        "query": "Lauterbrunnen Staubbach Falls Murren travel vlog",
        "keySights": ["Lauterbrunnen Valley of 72 Waterfalls", "Staubbach Falls (300m Drop)", "Car-Free Alpine Village of Mürren", "Eiger, Mönch & Jungfrau Panoramas"]
    },
    {
        "dayNum": 13,
        "location": "Lake Brienz, Iseltwald, Lake Thun & Blausee, Switzerland",
        "query": "Iseltwald Crash Landing on You pier Sigriswil bridge Blausee vlog",
        "keySights": ["Iseltwald CLOY Wooden Pier on Lake Brienz", "Seeburg Castle Shores", "Panorama Bridge Sigriswil", "Spiez Castle on Lake Thun", "Crystal Turquoise Blausee"]
    },
    {
        "dayNum": 14,
        "location": "Grindelwald First, Zurich & Rhine Falls, Switzerland",
        "query": "Grindelwald First cliff walk Zurich old town Rhine Falls vlog",
        "keySights": ["Grindelwald First Cliff Walk by Tissot (2,168m)", "Zurich Old Town (Altstadt)", "Lindenhof Hill Viewpoint", "Rhine Falls (Rheinfall Schaffhausen)"]
    },
    {
        "dayNum": 15,
        "location": "Paris, France",
        "query": "Paris travel vlog Montmartre Sacre Coeur Place du Tertre",
        "keySights": ["Montmartre & Sacré-Cœur Basilica Dome View", "Place du Tertre Artists Square", "Rue de Steinkerque", "Latin Quarter & Notre-Dame Paris Exterior"]
    }
]

headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept-Language': 'en-US,en;q=0.9'
}

results = []

for item in sights_per_day:
    day = item["dayNum"]
    q = item["query"]
    url = "https://www.youtube.com/results?search_query=" + urllib.parse.quote(q)
    print(f"Searching Day {day}: {q}...")
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=10) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
        
        # Extract unique video IDs
        all_ids = re.findall(r'"videoId":"([a-zA-Z0-9_-]{11})"', html)
        seen = set()
        unique_ids = []
        for vid in all_ids:
            if vid not in seen:
                seen.add(vid)
                unique_ids.append(vid)
        
        # Try top candidate IDs using noembed
        selected_video = None
        for candidate_id in unique_ids[:6]:
            try:
                noembed_url = f"https://noembed.com/embed?url=https://www.youtube.com/watch?v={candidate_id}"
                nreq = urllib.request.Request(noembed_url, headers=headers)
                with urllib.request.urlopen(nreq, timeout=5) as nresp:
                    meta = json.loads(nresp.read().decode('utf-8'))
                    if "title" in meta and "author_name" in meta:
                        selected_video = {
                            "dayNum": day,
                            "location": item["location"],
                            "keySights": item["keySights"],
                            "videoId": candidate_id,
                            "videoUrl": f"https://www.youtube.com/watch?v={candidate_id}",
                            "embedUrl": f"https://www.youtube.com/embed/{candidate_id}",
                            "videoTitle": meta["title"],
                            "channelName": meta["author_name"],
                            "channelUrl": meta.get("author_url", f"https://www.youtube.com/channel/{candidate_id}"),
                            "thumbnailUrl": f"https://i.ytimg.com/vi/{candidate_id}/hqdefault.jpg"
                        }
                        print(f"  -> Found: [{meta['author_name']}] {meta['title']}")
                        break
            except Exception as e:
                continue
            time.sleep(0.2)
            
        if selected_video:
            results.append(selected_video)
        else:
            print(f"  -> No video found for Day {day}")
            
    except Exception as e:
        print(f"  -> Error for Day {day}: {e}")
    time.sleep(0.5)

with open("js/youtube-tourism-vlogs.json", "w", encoding="utf-8") as f:
    json.dump(results, f, indent=2, ensure_ascii=False)

print(f"\nSaved {len(results)} tourism vlogs to js/youtube-tourism-vlogs.json")
