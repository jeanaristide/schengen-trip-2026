import os
from generate_all_maps import create_map_html, MAPS_DIR

days_data = [
    # ----------------------------------------------------
    # DAY 4
    # ----------------------------------------------------
    {
        "filename": "day4_the_hague_rotterdam_map.html",
        "day_num": 4,
        "title": "The Hague Temple & International Courts",
        "short_title": "The Hague Temple & Courts",
        "date_str": "Fri 18 Dec 2026 · Visits (1★ ➔ 8★)",
        "header_pills": [
            "🚆 <strong>NS Intercity:</strong> Amsterdam ➔ Den Haag (51m)",
            "✨ <strong>The Hague Temple:</strong> 09:30 AM Session (Zoetermeer)",
            "⚖️ <strong>International Courts:</strong> Peace Palace &amp; ICC",
            "🛍️ <strong>Albert Cuypmarkt:</strong> Amsterdam De Pijp"
        ],
        "legend_items": [
            ("pin", "pin-temple", "Sacred Temple / Cultural Landmark"),
            ("rail", "line-gold", "NS Intercity Heavy Rail (➔ Den Haag)"),
            ("line", "line-blue", "HTM RandstadRail 3/4 &amp; GVB Metro 52"),
            ("dotted", "line-dotted-red", "Walking Path with Arrows (➔)")
        ],
        "center": [52.18, 4.60],
        "zoom": 11,
        "pins": [
            {"lat": 52.3638, "lng": 4.8833, "num": "1", "name": "Hostel Leidseplein", "time": "07:15 AM Dep", "customClass": "pin-hostel", "offX": 10, "offY": -25},
            {"lat": 52.3791, "lng": 4.9003, "num": "2", "name": "Amsterdam Centraal", "time": "07:45 AM NS Train", "customClass": "pin-rail", "offX": -140, "offY": -15},
            {"lat": 52.0808, "lng": 4.3242, "num": "3", "name": "Den Haag Centraal", "time": "08:36 AM Transfer", "customClass": "pin-rail", "offX": -140, "offY": 10},
            {"lat": 52.0543, "lng": 4.4984, "num": "4", "name": "The Hague Temple", "time": "09:30 AM Session", "customClass": "pin-temple", "offX": 12, "offY": -26},
            {"lat": 52.08694, "lng": 4.29547, "num": "5", "name": "Peace Palace (Vredespaleis)", "time": "12:30 PM", "customClass": "pin-museum", "offX": -140, "offY": -20},
            {"lat": 52.1056, "lng": 4.31774, "num": "6", "name": "ICC International Court", "time": "14:00 PM", "customClass": "pin-museum", "offX": 12, "offY": -22},
            {"lat": 52.35531, "lng": 4.89155, "num": "7", "name": "Albert Cuyp Markt", "time": "16:30 PM Stroopwafels", "customClass": "", "offX": 12, "offY": 10},
            {"lat": 52.37522, "lng": 4.88398, "num": "8", "name": "Anne Frank House &amp; Canals", "time": "18:30 PM", "customClass": "", "offX": -140, "offY": -25}
        ],
        "polylines": [
            # Heavy Rail: Amsterdam Centraal ➔ Den Haag Centraal
            {
                "casingColor": "#1e3a8a", "casingWeight": 8,
                "color": "#f59e0b", "weight": 4.5, "opacity": 1.0,
                "coords": [[52.3791, 4.9003], [52.342, 4.870], [52.308, 4.762], [52.220, 4.600], [52.165, 4.490], [52.0808, 4.3242]],
                "arrows": {"color": "#f59e0b", "size": 10, "offset": 30, "repeat": 70, "borderColor": "#1e3a8a"}
            },
            # RandstadRail Tram: Den Haag Centraal ➔ The Hague Temple (Zoetermeer)
            {
                "casingColor": "#ffffff", "casingWeight": 7,
                "color": "#2563eb", "weight": 4.5, "opacity": 1.0,
                "coords": [[52.0808, 4.3242], [52.072, 4.380], [52.062, 4.440], [52.0543, 4.4984]],
                "arrows": {"color": "#2563eb", "size": 9, "offset": 20, "repeat": 50, "borderColor": "#ffffff"}
            },
            # Return Transit to The Hague City Center
            {
                "casingColor": "#ffffff", "casingWeight": 6,
                "color": "#8b5cf6", "weight": 4.0, "opacity": 0.9,
                "coords": [[52.0543, 4.4984], [52.070, 4.420], [52.0808, 4.3242], [52.08694, 4.29547], [52.1056, 4.31774]],
                "arrows": {"color": "#8b5cf6", "size": 8, "offset": 25, "repeat": 55, "borderColor": "#ffffff"}
            }
        ],
        "badges": [
            {"lat": 52.20, "lng": 4.65, "html": '<div class="transit-badge badge-rail">🚆 NS Intercity (51 min)</div>', "iconAnchor": [60, 10]},
            {"lat": 52.065, "lng": 4.41, "html": '<div class="transit-badge">🚋 RandstadRail 3/4 (14m)</div>', "iconAnchor": [65, 10]}
        ]
    },

    # ----------------------------------------------------
    # DAY 5
    # ----------------------------------------------------
    {
        "filename": "day5_cologne_arrival_map.html",
        "day_num": 5,
        "title": "Amsterdam to Cologne ICE & Cathedral Christmas Markets",
        "short_title": "Amsterdam ➔ Cologne ICE & Markets",
        "date_str": "Sat 19 Dec 2026 · Visits (1★ ➔ 9★)",
        "header_pills": [
            "🚆 <strong>DB ICE 123:</strong> Amsterdam ➔ Köln Hbf (2h 38m direct)",
            "🏰 <strong>Kölner Dom:</strong> Gothic Cathedral &amp; Shrine",
            "🌉 <strong>Hohenzollernbrücke &amp; Triangle:</strong> 103m Skyline Panorama",
            "🍫 <strong>Chocolate Museum &amp; Heinzels:</strong> Alter Markt Market"
        ],
        "legend_items": [
            ("pin", "pin-rail", "Rail Station / Transport Hub"),
            ("rail", "line-gold", "DB ICE 123 High-Speed Track (➔ Köln)"),
            ("line", "line-blue", "KVB Stadtbahn Tram (➔ Lindenthal)"),
            ("dotted", "line-dotted-red", "Cologne River &amp; Old Town Walk (➔)")
        ],
        "center": [50.938, 6.955],
        "zoom": 14,
        "pins": [
            {"lat": 52.3638, "lng": 4.8833, "num": "1", "name": "Hostel Leidseplein", "time": "08:00 AM Checkout", "customClass": "pin-hostel", "offX": 10, "offY": -25},
            {"lat": 52.3791, "lng": 4.9003, "num": "2", "name": "Amsterdam Centraal", "time": "08:38 AM ICE 123", "customClass": "pin-rail", "offX": -140, "offY": -20},
            {"lat": 50.9432, "lng": 6.9586, "num": "3", "name": "Köln Hauptbahnhof", "time": "11:15 AM Arrival", "customClass": "pin-rail", "offX": 12, "offY": -25},
            {"lat": 50.9348, "lng": 6.9205, "num": "4", "name": "Room in Cologne (Lindenthal)", "time": "13:00 PM Check-in", "customClass": "pin-arrival", "offX": 12, "offY": 10},
            {"lat": 50.94128, "lng": 6.95828, "num": "5", "name": "Cologne Cathedral (Kölner Dom)", "time": "14:15 PM", "customClass": "pin-museum", "offX": -140, "offY": -25},
            {"lat": 50.94144, "lng": 6.96578, "num": "6", "name": "Hohenzollern Bridge", "time": "15:30 PM Love Locks", "customClass": "", "offX": 10, "offY": -26},
            {"lat": 50.94041, "lng": 6.97181, "num": "7", "name": "KölnTriangle Observatory", "time": "16:15 PM Sunset Deck", "customClass": "", "offX": 12, "offY": 10},
            {"lat": 50.93189, "lng": 6.96440, "num": "8", "name": "Schokoladenmuseum", "time": "17:30 PM Lindt Fountain", "customClass": "pin-museum", "offX": -140, "offY": 10},
            {"lat": 50.93829, "lng": 6.96053, "num": "9", "name": "Heinzels Wintermärchen", "time": "19:00 PM Alter Markt", "customClass": "", "offX": -140, "offY": -22}
        ],
        "polylines": [
            # KVB Stadtbahn: Köln Hbf ➔ Lindenthal Lodging
            {
                "casingColor": "#ffffff", "casingWeight": 7,
                "color": "#2563eb", "weight": 4.5, "opacity": 1.0,
                "coords": [[50.9432, 6.9586], [50.9380, 6.9500], [50.9360, 6.9400], [50.9350, 6.9300], [50.9348, 6.9205]],
                "arrows": {"color": "#2563eb", "size": 9, "offset": 20, "repeat": 50, "borderColor": "#ffffff"}
            },
            # Rhine Loop Walking Circuit: Kölner Dom ➔ Hohenzollern ➔ Triangle ➔ Deutz Bridge ➔ Chocolate Museum ➔ Alter Markt
            {
                "casingColor": "#ffffff", "casingWeight": 7,
                "color": "#ea580c", "weight": 4.5, "dashArray": "6, 8", "opacity": 1.0,
                "coords": [
                    [50.94128, 6.95828], [50.94144, 6.96578], [50.94041, 6.97181],
                    [50.9370, 6.9700], [50.9355, 6.9640], [50.93189, 6.96440],
                    [50.9340, 6.9620], [50.93829, 6.96053], [50.94128, 6.95828]
                ],
                "arrows": {"color": "#ea580c", "size": 8, "offset": 20, "repeat": 45, "borderColor": "#ffffff"}
            }
        ],
        "badges": [
            {"lat": 50.939, "lng": 6.938, "html": '<div class="transit-badge">🚋 KVB Stadtbahn (10 min)</div>', "iconAnchor": [60, 10]}
        ]
    },

    # ----------------------------------------------------
    # DAY 6
    # ----------------------------------------------------
    {
        "filename": "day6_dusseldorf_cologne_map.html",
        "day_num": 6,
        "title": "Cologne River Cableway & Düsseldorf Little Tokyo",
        "short_title": "Rhine Cableway & Little Tokyo",
        "date_str": "Sun 20 Dec 2026 · Visits (1★ ➔ 8★)",
        "header_pills": [
            "⛪ <strong>Sunday Worship:</strong> Central Cologne (09:30 AM)",
            "🚠 <strong>Rhein-Seilbahn:</strong> River Cable Car over the Rhine",
            "🚆 <strong>RE Regional Train:</strong> Cologne ➔ Düsseldorf (20 mins)",
            "🍜 <strong>Little Tokyo:</strong> Immermannstraße Ramen &amp; Altstadt"
        ],
        "legend_items": [
            ("pin", "pin-rail", "Transit Hub / Cable Car Station"),
            ("rail", "line-gold", "DB Regional Express Track (Köln ➔ Düsseldorf)"),
            ("line", "line-red", "Rhein-Seilbahn Aerial Cableway (Gliding over Rhine)"),
            ("dotted", "line-dotted-red", "Düsseldorf City &amp; Promenade Walk (➔)")
        ],
        "center": [51.22, 6.80],
        "zoom": 12,
        "pins": [
            {"lat": 50.9348, "lng": 6.9205, "num": "1", "name": "Room in Cologne", "time": "08:30 AM", "customClass": "pin-arrival", "offX": 10, "offY": -22},
            {"lat": 50.95915, "lng": 6.97235, "num": "2", "name": "Flora &amp; Botanischer Garten", "time": "10:30 AM", "customClass": "pin-museum", "offX": -140, "offY": -20},
            {"lat": 50.95716, "lng": 6.97353, "num": "3", "name": "Rhein-Seilbahn Cable Car", "time": "11:30 AM", "customClass": "", "offX": 12, "offY": -24},
            {"lat": 51.2198, "lng": 6.7944, "num": "4", "name": "Düsseldorf Hauptbahnhof", "time": "13:15 PM RE Train", "customClass": "pin-rail", "offX": -140, "offY": -15},
            {"lat": 51.19503, "lng": 6.82381, "num": "5", "name": "Classic Remise", "time": "14:00 PM Vintage Cars", "customClass": "pin-museum", "offX": 12, "offY": -22},
            {"lat": 51.15810, "lng": 6.86687, "num": "6", "name": "Schlosspark Benrath", "time": "15:30 PM Baroque Palace", "customClass": "pin-museum", "offX": 12, "offY": 10},
            {"lat": 51.22849, "lng": 6.77056, "num": "7", "name": "Rheinuferpromenade Altstadt", "time": "17:15 PM Rhine Stroll", "customClass": "", "offX": -140, "offY": -25},
            {"lat": 51.22374, "lng": 6.78803, "num": "8", "name": "Little Tokyo (Immermannstr.)", "time": "18:30 PM Dinner", "customClass": "", "offX": 12, "offY": 10}
        ],
        "polylines": [
            # Cable Car Line over Rhine
            {
                "casingColor": "#ffffff", "casingWeight": 6,
                "color": "#dc2626", "weight": 4.0, "opacity": 1.0,
                "coords": [[50.95716, 6.97353], [50.9585, 6.9830]],
                "arrows": {"color": "#dc2626", "size": 8, "offset": 15, "repeat": 40, "borderColor": "#ffffff"}
            },
            # Regional Express: Köln Hbf ➔ Düsseldorf Hbf
            {
                "casingColor": "#1e3a8a", "casingWeight": 8,
                "color": "#f59e0b", "weight": 4.5, "opacity": 1.0,
                "coords": [[50.9432, 6.9586], [51.020, 6.920], [51.120, 6.870], [51.2198, 6.7944]],
                "arrows": {"color": "#f59e0b", "size": 10, "offset": 30, "repeat": 70, "borderColor": "#1e3a8a"}
            },
            # Düsseldorf Metro / Walk to Benrath & Little Tokyo
            {
                "casingColor": "#ffffff", "casingWeight": 6,
                "color": "#ea580c", "weight": 4.0, "dashArray": "5, 7", "opacity": 1.0,
                "coords": [[51.2198, 6.7944], [51.22374, 6.78803], [51.2260, 6.7750], [51.22849, 6.77056]],
                "arrows": {"color": "#ea580c", "size": 8, "offset": 20, "repeat": 45, "borderColor": "#ffffff"}
            }
        ],
        "badges": [
            {"lat": 51.08, "lng": 6.90, "html": '<div class="transit-badge badge-rail">🚆 Regional Express (20 min)</div>', "iconAnchor": [65, 10]}
        ]
    },

    # ----------------------------------------------------
    # DAY 7
    # ----------------------------------------------------
    {
        "filename": "day7_frankfurt_arrival_map.html",
        "day_num": 7,
        "title": "Cologne to Frankfurt ICE & Römerberg Christmas Market",
        "short_title": "Cologne ➔ Frankfurt ICE & Römerberg",
        "date_str": "Mon 21 Dec 2026 · Visits (1★ ➔ 9★)",
        "header_pills": [
            "🚆 <strong>DB ICE Sprint:</strong> Köln Hbf ➔ Frankfurt Hbf (1h 05m at 300km/h)",
            "🏨 <strong>Premier Inn:</strong> Frankfurt City Centre (10:30 AM Bag Drop)",
            "🌺 <strong>Palmengarten:</strong> Historic Tropical Winter Biomes",
            "🎄 <strong>Römerberg:</strong> Timbered Altstadt &amp; Christmas Market"
        ],
        "legend_items": [
            ("pin", "pin-rail", "ICE Terminal / Transport Hub"),
            ("rail", "line-gold", "DB ICE High-Speed Line (300 km/h)"),
            ("line", "line-blue", "Frankfurt U-Bahn Line U4 / U5"),
            ("dotted", "line-dotted-red", "River Main &amp; Altstadt Walking Route (➔)")
        ],
        "center": [50.112, 8.675],
        "zoom": 14,
        "pins": [
            {"lat": 50.9348, "lng": 6.9205, "num": "1", "name": "Room in Cologne", "time": "08:30 AM Check-out", "customClass": "pin-arrival", "offX": 10, "offY": -22},
            {"lat": 50.9432, "lng": 6.9586, "num": "2", "name": "Köln Hbf ICE Track", "time": "09:00 AM Dep", "customClass": "pin-rail", "offX": -140, "offY": -20},
            {"lat": 50.1065, "lng": 8.6631, "num": "3", "name": "Frankfurt (Main) Hbf", "time": "10:05 AM Arr", "customClass": "pin-rail", "offX": -140, "offY": 10},
            {"lat": 50.1068, "lng": 8.6653, "num": "4", "name": "Premier Inn City Centre", "time": "10:30 AM Drop", "customClass": "pin-hostel", "offX": 12, "offY": -22},
            {"lat": 50.12321, "lng": 8.65783, "num": "5", "name": "Palmengarten Frankfurt", "time": "11:45 AM Biomes", "customClass": "pin-museum", "offX": 12, "offY": -20},
            {"lat": 50.10811, "lng": 8.68213, "num": "6", "name": "Eiserner Steg Footbridge", "time": "14:30 PM Skyline", "customClass": "", "offX": -140, "offY": 10},
            {"lat": 50.11066, "lng": 8.68542, "num": "7", "name": "Kaiserdom Cathedral", "time": "15:30 PM", "customClass": "pin-museum", "offX": 12, "offY": -22},
            {"lat": 50.11066, "lng": 8.68371, "num": "8", "name": "Neue Altstadt Courtyards", "time": "16:30 PM", "customClass": "", "offX": -140, "offY": -20},
            {"lat": 50.11029, "lng": 8.68215, "num": "9", "name": "Römerberg Christmas Market", "time": "18:00 PM Glühwein", "customClass": "", "offX": 12, "offY": 10}
        ],
        "polylines": [
            # U-Bahn: Hbf to Palmengarten
            {
                "casingColor": "#ffffff", "casingWeight": 7,
                "color": "#2563eb", "weight": 4.5, "opacity": 1.0,
                "coords": [[50.1065, 8.6631], [50.1130, 8.6530], [50.12321, 8.65783]],
                "arrows": {"color": "#2563eb", "size": 9, "offset": 20, "repeat": 50, "borderColor": "#ffffff"}
            },
            # Walking Tour: Palmengarten to Main River & Römerberg
            {
                "casingColor": "#ffffff", "casingWeight": 7,
                "color": "#ea580c", "weight": 4.5, "dashArray": "6, 8", "opacity": 1.0,
                "coords": [
                    [50.12321, 8.65783], [50.1150, 8.6670], [50.1090, 8.6750],
                    [50.10811, 8.68213], [50.11066, 8.68542], [50.11066, 8.68371], [50.11029, 8.68215]
                ],
                "arrows": {"color": "#ea580c", "size": 8, "offset": 20, "repeat": 45, "borderColor": "#ffffff"}
            }
        ],
        "badges": [
            {"lat": 50.118, "lng": 8.659, "html": '<div class="transit-badge">🚇 U-Bahn U4 (8 min)</div>', "iconAnchor": [55, 10]}
        ]
    },

    # ----------------------------------------------------
    # DAY 8
    # ----------------------------------------------------
    {
        "filename": "day8_frankfurt_temple_map.html",
        "day_num": 8,
        "title": "Frankfurt Museumsufer & Sacred Friedrichsdorf Temple",
        "short_title": "Museumsufer & Frankfurt Temple",
        "date_str": "Tue 22 Dec 2026 · Visits (1★ ➔ 7★)",
        "header_pills": [
            "🏛️ <strong>Museumsufer:</strong> River Main Morning Skyline Promenade",
            "🛍️ <strong>Zeil Boulevard:</strong> MyZeil Glass Wave Architecture",
            "🚆 <strong>S-Bahn S5:</strong> Frankfurt Hbf ➔ Friedrichsdorf (26 mins)",
            "✨ <strong>Frankfurt Temple:</strong> Sacred 18:00–20:00 Endowment Session"
        ],
        "legend_items": [
            ("pin", "pin-temple", "Sacred Temple / Cultural Landmark"),
            ("rail", "line-gold", "RMV S-Bahn Line S5 (Frankfurt ➔ Taunus Hills)"),
            ("line", "line-blue", "City Center Metro / Walking Transit"),
            ("dotted", "line-dotted-red", "Museumsufer &amp; Temple Grounds Walk (➔)")
        ],
        "center": [50.165, 8.655],
        "zoom": 11,
        "pins": [
            {"lat": 50.1068, "lng": 8.6653, "num": "1", "name": "Premier Inn City Centre", "time": "09:30 AM", "customClass": "pin-hostel", "offX": -140, "offY": -15},
            {"lat": 50.1065, "lng": 8.6780, "num": "2", "name": "Museumsufer River Main", "time": "10:00 AM Skyline", "customClass": "pin-museum", "offX": 10, "offY": 10},
            {"lat": 50.1147, "lng": 8.6853, "num": "3", "name": "Zeil &amp; MyZeil Glass Wave", "time": "12:00 PM Shopping", "customClass": "", "offX": 10, "offY": -26},
            {"lat": 50.1065, "lng": 8.6631, "num": "4", "name": "Frankfurt Hbf (S5 Track)", "time": "16:30 PM Dep", "customClass": "pin-rail", "offX": -140, "offY": -10},
            {"lat": 50.2220, "lng": 8.6490, "num": "5", "name": "Friedrichsdorf Station", "time": "17:00 PM Arrival", "customClass": "pin-rail", "offX": -140, "offY": -15},
            {"lat": 50.2185, "lng": 8.6418, "num": "6", "name": "Frankfurt Germany Temple", "time": "17:15 PM Arrival · 18:00", "customClass": "pin-temple", "offX": 12, "offY": -28},
            {"lat": 50.1040, "lng": 8.6620, "num": "7", "name": "FlixBus Terminal Survey", "time": "21:30 PM Terminal Check", "customClass": "pin-arrival", "offX": 10, "offY": 10}
        ],
        "polylines": [
            # S-Bahn Line S5 to Friedrichsdorf
            {
                "casingColor": "#1e3a8a", "casingWeight": 8,
                "color": "#f59e0b", "weight": 4.5, "opacity": 1.0,
                "coords": [[50.1065, 8.6631], [50.1200, 8.6500], [50.1400, 8.6300], [50.1700, 8.6000], [50.1900, 8.6100], [50.2220, 8.6490]],
                "arrows": {"color": "#f59e0b", "size": 10, "offset": 30, "repeat": 70, "borderColor": "#1e3a8a"}
            },
            # Walk from Friedrichsdorf Station to Temple
            {
                "casingColor": "#ffffff", "casingWeight": 6,
                "color": "#d97706", "weight": 4.0, "dashArray": "5, 7", "opacity": 1.0,
                "coords": [[50.2220, 8.6490], [50.2200, 8.6450], [50.2185, 8.6418]],
                "arrows": {"color": "#d97706", "size": 8, "offset": 15, "repeat": 40, "borderColor": "#ffffff"}
            }
        ],
        "badges": [
            {"lat": 50.165, "lng": 8.625, "html": '<div class="transit-badge badge-rail">🚆 S-Bahn S5 to Taunus (26 min)</div>', "iconAnchor": [70, 10]}
        ]
    }
]

# Write Days 4 to 8
for d in days_data:
    html = create_map_html(
        day_num=d["day_num"],
        title=d["title"],
        short_title=d["short_title"],
        date_str=d["date_str"],
        header_pills=d["header_pills"],
        legend_items=d["legend_items"],
        center=d["center"],
        zoom=d["zoom"],
        pins=d["pins"],
        polylines=d["polylines"],
        badges=d.get("badges", [])
    )
    filepath = os.path.join(MAPS_DIR, d["filename"])
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"Generated: {filepath}")
