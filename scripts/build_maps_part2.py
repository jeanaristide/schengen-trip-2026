import os
from generate_all_maps import create_map_html, MAPS_DIR

days_data = [
    # ----------------------------------------------------
    # DAY 9
    # ----------------------------------------------------
    {
        "filename": "day9_colmar_strasbourg_map.html",
        "day_num": 9,
        "title": "Cross-Border Coach to Alsace, Petite-France & Strasbourg Great Tree",
        "short_title": "Alsace Arrival & Petite-France",
        "date_str": "Wed 23 Dec 2026 · Visits (1★ ➔ 9★)",
        "header_pills": [
            "🚌 <strong>FlixBus N13:</strong> Frankfurt ➔ Strasbourg (04:35–08:35)",
            "🏨 <strong>B&amp;B Hotel Kehl:</strong> Tram D direct cross-border base",
            "🎄 <strong>Place Kléber:</strong> 30m Illuminated Grand Sapin Tree",
            "🥀 <strong>Petite-France:</strong> Disney Storybook Village &amp; Vauban"
        ],
        "legend_items": [
            ("pin", "pin-cloy", "Historic Alsace Landmark / Market"),
            ("line", "line-green", "FlixBus Route N13 (Frankfurt ➔ Strasbourg)"),
            ("line", "line-blue", "Strasbourg-Kehl Tram Line D (Over Rhine)"),
            ("dotted", "line-dotted-red", "Petite-France &amp; Grand Île Walking Route (➔)")
        ],
        "center": [48.580, 7.760],
        "zoom": 13,
        "pins": [
            {"lat": 50.1040, "lng": 8.6620, "num": "1", "name": "Frankfurt Coach Terminal", "time": "04:35 AM FlixBus Dep", "customClass": "pin-arrival", "offX": -140, "offY": -15},
            {"lat": 48.5746, "lng": 7.7535, "num": "2", "name": "Strasbourg Central Bus Station", "time": "08:35 AM Arrival", "customClass": "pin-arrival", "offX": -140, "offY": 10},
            {"lat": 48.5683, "lng": 7.8202, "num": "3", "name": "B&amp;B Hotel Kehl", "time": "09:30 AM Bag Drop", "customClass": "pin-hostel", "offX": 12, "offY": 10},
            {"lat": 48.58354, "lng": 7.74575, "num": "4", "name": "Place Kléber (Grand Sapin)", "time": "11:30 AM 30m Great Tree", "customClass": "pin-museum", "offX": 12, "offY": -26},
            {"lat": 48.58188, "lng": 7.75103, "num": "5", "name": "Notre-Dame Cathedral", "time": "13:00 PM Astronomical Clock", "customClass": "pin-museum", "offX": 12, "offY": -24},
            {"lat": 48.58084, "lng": 7.75253, "num": "6", "name": "Palais Rohan", "time": "14:30 PM River Ill", "customClass": "", "offX": 12, "offY": 10},
            {"lat": 48.58111, "lng": 7.74151, "num": "7", "name": "Petite-France (Tanners)", "time": "15:30 PM Disney Village", "customClass": "pin-cloy", "offX": -140, "offY": -20},
            {"lat": 48.57957, "lng": 7.73798, "num": "8", "name": "Barrage Vauban Terrace", "time": "16:45 PM Sunset Vista", "customClass": "", "offX": -140, "offY": 10},
            {"lat": 48.5850, "lng": 7.7495, "num": "9", "name": "Christkindelsmärik (Broglie)", "time": "18:00 PM Oldest Market", "customClass": "", "offX": 12, "offY": -22}
        ],
        "polylines": [
            # Tram Line D: Strasbourg Central ➔ Kehl B&B Hotel
            {
                "casingColor": "#ffffff", "casingWeight": 7,
                "color": "#2563eb", "weight": 4.5, "opacity": 1.0,
                "coords": [[48.58354, 7.74575], [48.5760, 7.7580], [48.5730, 7.7800], [48.5710, 7.8000], [48.5683, 7.8202]],
                "arrows": {"color": "#2563eb", "size": 9, "offset": 20, "repeat": 50, "borderColor": "#ffffff"}
            },
            # Walking Tour across Grand Île & Petite-France
            {
                "casingColor": "#ffffff", "casingWeight": 7,
                "color": "#ea580c", "weight": 4.5, "dashArray": "6, 8", "opacity": 1.0,
                "coords": [
                    [48.58354, 7.74575], [48.5850, 7.7495], [48.58188, 7.75103],
                    [48.58084, 7.75253], [48.58111, 7.74151], [48.57957, 7.73798]
                ],
                "arrows": {"color": "#ea580c", "size": 8, "offset": 20, "repeat": 45, "borderColor": "#ffffff"}
            }
        ],
        "badges": [
            {"lat": 48.572, "lng": 7.785, "html": '<div class="transit-badge">🚋 Tram Line D (Rhine Bridge)</div>', "iconAnchor": [65, 10]}
        ]
    },

    # ----------------------------------------------------
    # DAY 10
    # ----------------------------------------------------
    {
        "filename": "day10_strasbourg_christmas_map.html",
        "day_num": 10,
        "title": "Colmar Fairytale Christmas Eve: Real-Life Beauty and the Beast Village",
        "short_title": "Colmar Fairytale Christmas Eve",
        "date_str": "Thu 24 Dec 2026 · Visits (1★ ➔ 9★)",
        "header_pills": [
            "🚆 <strong>SNCF TER:</strong> Strasbourg ➔ Colmar (30 mins along Vosges)",
            "🥀 <strong>Maison Pfister:</strong> Disney Beauty &amp; the Beast Storybook Model",
            "🛶 <strong>Petite Venise:</strong> Half-Timbered Canals &amp; Covered Market",
            "🎄 <strong>Christmas Eve:</strong> Marché aux Épices &amp; Place Jeanne d'Arc"
        ],
        "legend_items": [
            ("pin", "pin-cloy", "Beauty &amp; the Beast Storybook Site"),
            ("rail", "line-gold", "SNCF TER Express Rail (➔ Colmar)"),
            ("dotted", "line-dotted-red", "Colmar Old Town Fairytale Walking Circuit (➔)")
        ],
        "center": [48.076, 7.357],
        "zoom": 15,
        "pins": [
            {"lat": 48.5683, "lng": 7.8202, "num": "1", "name": "B&amp;B Hotel Kehl", "time": "08:15 AM Dep", "customClass": "pin-hostel", "offX": 10, "offY": -22},
            {"lat": 48.5850, "lng": 7.7340, "num": "2", "name": "Gare de Strasbourg", "time": "08:50 AM TER Rail", "customClass": "pin-rail", "offX": -140, "offY": -20},
            {"lat": 48.0725, "lng": 7.3465, "num": "3", "name": "Gare de Colmar", "time": "09:25 AM Arrival", "customClass": "pin-rail", "offX": -140, "offY": 10},
            {"lat": 48.07849, "lng": 7.35563, "num": "4", "name": "Maison des Têtes", "time": "10:15 AM Renaissance Heads", "customClass": "pin-cloy", "offX": 12, "offY": -26},
            {"lat": 48.07669, "lng": 7.35824, "num": "5", "name": "Maison Pfister (Disney Facade)", "time": "11:15 AM Belle's Town", "customClass": "pin-cloy", "offX": 12, "offY": -24},
            {"lat": 48.07527, "lng": 7.35958, "num": "6", "name": "Koïfhus &amp; Schwendi Fountain", "time": "12:30 PM", "customClass": "", "offX": 12, "offY": 10},
            {"lat": 48.07398, "lng": 7.36015, "num": "7", "name": "Petite Venise (Little Venice)", "time": "14:00 PM Lauch River Canals", "customClass": "pin-cloy", "offX": -140, "offY": 10},
            {"lat": 48.07780, "lng": 7.36100, "num": "8", "name": "Marché aux Épices", "time": "16:00 PM Christmas Eve", "customClass": "", "offX": 12, "offY": -22},
            {"lat": 48.0725, "lng": 7.3465, "num": "9", "name": "Gare de Colmar (Return Rail)", "time": "18:30 PM TER Return", "customClass": "pin-rail", "offX": -140, "offY": -20}
        ],
        "polylines": [
            # Colmar Station to Old Town Walk
            {
                "casingColor": "#ffffff", "casingWeight": 7,
                "color": "#ea580c", "weight": 4.5, "dashArray": "6, 8", "opacity": 1.0,
                "coords": [
                    [48.0725, 7.3465], [48.0740, 7.3510], [48.0760, 7.3540],
                    [48.07849, 7.35563], [48.07669, 7.35824], [48.07527, 7.35958],
                    [48.07398, 7.36015], [48.07780, 7.36100], [48.0740, 7.3510], [48.0725, 7.3465]
                ],
                "arrows": {"color": "#ea580c", "size": 8, "offset": 20, "repeat": 45, "borderColor": "#ffffff"}
            }
        ],
        "badges": [
            {"lat": 48.075, "lng": 7.351, "html": '<div class="transit-badge badge-bus">🚶 Champ-de-Mars Walk (10 min)</div>', "iconAnchor": [65, 10]}
        ]
    },

    # ----------------------------------------------------
    # DAY 11
    # ----------------------------------------------------
    {
        "filename": "day11_zurich_lucerne_lauterbrunnen_map.html",
        "day_num": 11,
        "title": "Zurich Morning & Lucerne Afternoon ➔ Lauterbrunnen Alpine Base",
        "short_title": "Zurich, Lucerne & Alpine Express",
        "date_str": "Fri 25 Dec 2026 · Visits (1★ ➔ 11★)",
        "header_pills": [
            "🚌 <strong>FlixBus N846:</strong> Strasbourg ➔ Lucerne (04:05–07:10 AM Paid)",
            "🎬 <strong>CLOY Lindenhof:</strong> Opening Title Viewpoint over Zurich",
            "🌉 <strong>Kapellbrücke:</strong> 14th-Century Wooden Chapel Bridge &amp; Lion",
            "🏔️ <strong>Valley Hostel:</strong> Lauterbrunnen 4-Night Alpine Base"
        ],
        "legend_items": [
            ("pin", "pin-cloy", "Crash Landing on You / Scenic Landmark"),
            ("rail", "line-gold", "SBB Swiss Federal Rail &amp; Luzern-Interlaken Express"),
            ("line", "line-blue", "BOB Berner Oberland Mountain Rail (➔ Valley)"),
            ("dotted", "line-dotted-red", "Zurich &amp; Lucerne Old Town Walks (➔)")
        ],
        "center": [47.05, 8.31],
        "zoom": 10,
        "pins": [
            {"lat": 47.0502, "lng": 8.3103, "num": "1", "name": "Bahnhof Luzern (SBB Lockers)", "time": "07:10 AM Arrival", "customClass": "pin-rail", "offX": -140, "offY": 10},
            {"lat": 47.3782, "lng": 8.5402, "num": "2", "name": "Zürich HB", "time": "08:25 AM Sunrise", "customClass": "pin-rail", "offX": -140, "offY": -15},
            {"lat": 47.3728, "lng": 8.5414, "num": "3", "name": "Lindenhof Hill (CLOY Intro)", "time": "09:15 AM River View", "customClass": "pin-cloy", "offX": 12, "offY": -26},
            {"lat": 47.3699, "lng": 8.5432, "num": "4", "name": "Münsterbrücke (CLOY)", "time": "10:15 AM Grossmünster", "customClass": "pin-cloy", "offX": 12, "offY": 10},
            {"lat": 47.3663, "lng": 8.5413, "num": "5", "name": "Lake Zurich (Bellevue)", "time": "11:15 AM Swans &amp; Alps", "customClass": "", "offX": -140, "offY": 10},
            {"lat": 47.0516, "lng": 8.3075, "num": "6", "name": "Chapel Bridge (Kapellbrücke)", "time": "13:45 PM Sunlight", "customClass": "pin-cloy", "offX": -140, "offY": -22},
            {"lat": 47.0526, "lng": 8.3045, "num": "7", "name": "Old Town Lucerne (Weinmarkt)", "time": "14:45 PM Painted Squares", "customClass": "", "offX": -140, "offY": 10},
            {"lat": 47.0583, "lng": 8.3108, "num": "8", "name": "Lion Monument (Löwendenkmal)", "time": "15:45 PM", "customClass": "pin-museum", "offX": 12, "offY": -22},
            {"lat": 46.7865, "lng": 8.1560, "num": "9", "name": "Luzern-Interlaken Express", "time": "18:06 PM Brünig Pass", "customClass": "pin-rail", "offX": 12, "offY": -24},
            {"lat": 46.69043, "lng": 7.86905, "num": "10", "name": "Interlaken Ost (BOB Transfer)", "time": "20:00 PM Transfer", "customClass": "pin-rail", "offX": -140, "offY": -15},
            {"lat": 46.5956, "lng": 7.9079, "num": "11", "name": "Valley Hostel Lauterbrunnen", "time": "20:30 PM Night 1 of 4", "customClass": "pin-hostel", "offX": 12, "offY": 10}
        ],
        "polylines": [
            # SBB Rail: Lucerne ➔ Zurich return
            {
                "casingColor": "#1e3a8a", "casingWeight": 8,
                "color": "#f59e0b", "weight": 4.5, "opacity": 1.0,
                "coords": [[47.0502, 8.3103], [47.180, 8.420], [47.300, 8.500], [47.3782, 8.5402]],
                "arrows": {"color": "#f59e0b", "size": 10, "offset": 30, "repeat": 70, "borderColor": "#1e3a8a"}
            },
            # Zentralbahn: Lucerne ➔ Brünig Pass ➔ Interlaken Ost
            {
                "casingColor": "#1e3a8a", "casingWeight": 8,
                "color": "#f59e0b", "weight": 4.5, "opacity": 1.0,
                "coords": [[47.0502, 8.3103], [46.900, 8.250], [46.800, 8.180], [46.7865, 8.1560], [46.720, 8.000], [46.69043, 7.86905]],
                "arrows": {"color": "#f59e0b", "size": 10, "offset": 30, "repeat": 70, "borderColor": "#1e3a8a"}
            },
            # BOB Mountain Rail: Interlaken Ost ➔ Lauterbrunnen
            {
                "casingColor": "#ffffff", "casingWeight": 7,
                "color": "#2563eb", "weight": 4.5, "opacity": 1.0,
                "coords": [[46.69043, 7.86905], [46.650, 7.880], [46.632, 7.901], [46.5956, 7.9079]],
                "arrows": {"color": "#2563eb", "size": 9, "offset": 20, "repeat": 50, "borderColor": "#ffffff"}
            }
        ],
        "badges": [
            {"lat": 46.75, "lng": 8.10, "html": '<div class="transit-badge badge-rail">🚆 Luzern-Interlaken Express</div>', "iconAnchor": [70, 10]},
            {"lat": 46.64, "lng": 7.89, "html": '<div class="transit-badge">🚂 BOB Mountain Rail (20m)</div>', "iconAnchor": [65, 10]}
        ]
    },

    # ----------------------------------------------------
    # DAY 12
    # ----------------------------------------------------
    {
        "filename": "day12_lauterbrunnen_schilthorn_muerren_map.html",
        "day_num": 12,
        "title": "Lauterbrunnen Valley, Staubbach Falls, Mürren & Schilthorn 2,970m",
        "short_title": "Lauterbrunnen Valley & Schilthorn",
        "date_str": "Sat 26 Dec 2026 · Visits (1★ ➔ 8★)",
        "header_pills": [
            "🌊 <strong>Staubbach Falls:</strong> 297m Vertical Waterfall CLOY Backdrop",
            "🚠 <strong>Grütschalp &amp; BLM:</strong> Cable Car &amp; Cliffside Rail",
            "🏔️ <strong>Mürren &amp; Birg:</strong> Car-Free Village &amp; Glass Thrill Walk",
            "🎬 <strong>Schilthorn 2,970m:</strong> James Bond 007 Piz Gloria &amp; Spy World"
        ],
        "legend_items": [
            ("pin", "pin-cloy", "CLOY Backdrop / Summit Landmark"),
            ("line", "line-red", "Schilthorn Aerial Cableways (➔ 2,970m)"),
            ("line", "line-blue", "Grütschalp-Mürren Mountain Railway"),
            ("line", "line-green", "PostBus 141 (Valley Floor Transit)"),
            ("dotted", "line-dotted-red", "Alpine Village &amp; Falls Stroll (➔)")
        ],
        "center": [46.575, 7.875],
        "zoom": 13,
        "pins": [
            {"lat": 46.5956, "lng": 7.9079, "num": "1", "name": "Valley Hostel Base", "time": "08:30 AM Start", "customClass": "pin-hostel", "offX": 10, "offY": -22},
            {"lat": 46.58963, "lng": 7.90529, "num": "2", "name": "Staubbach Falls", "time": "08:45 AM CLOY Backdrop", "customClass": "pin-cloy", "offX": -140, "offY": -15},
            {"lat": 46.59652, "lng": 7.89087, "num": "3", "name": "Grütschalp Cable Car", "time": "09:30 AM 700m Ascent", "customClass": "pin-rail", "offX": -140, "offY": -20},
            {"lat": 46.55944, "lng": 7.89267, "num": "4", "name": "Mürren Alpine Village", "time": "10:15 AM Car-Free 1,638m", "customClass": "pin-cloy", "offX": 12, "offY": -24},
            {"lat": 46.5583, "lng": 7.8608, "num": "5", "name": "Birg &amp; Thrill Walk", "time": "11:30 AM 2,677m Glass Walk", "customClass": "", "offX": 12, "offY": -22},
            {"lat": 46.55748, "lng": 7.83528, "num": "6", "name": "Schilthorn / Piz Gloria", "time": "12:30 PM 2,970m 007 Site", "customClass": "pin-cloy", "offX": -140, "offY": -20},
            {"lat": 46.5450, "lng": 7.9010, "num": "7", "name": "Gimmelwald Chalets", "time": "15:30 PM Peaceful Hamlet", "customClass": "", "offX": -140, "offY": 10},
            {"lat": 46.5520, "lng": 7.9030, "num": "8", "name": "Stechelberg Valley Floor", "time": "16:15 PM PostBus 141", "customClass": "pin-arrival", "offX": 12, "offY": 10}
        ],
        "polylines": [
            # Cableway: Lauterbrunnen ➔ Grütschalp ➔ Mürren
            {
                "casingColor": "#ffffff", "casingWeight": 7,
                "color": "#2563eb", "weight": 4.5, "opacity": 1.0,
                "coords": [[46.5956, 7.9079], [46.59652, 7.89087], [46.5800, 7.8920], [46.55944, 7.89267]],
                "arrows": {"color": "#2563eb", "size": 9, "offset": 20, "repeat": 50, "borderColor": "#ffffff"}
            },
            # Schilthorn Aerial Cableway: Mürren ➔ Birg ➔ Schilthorn
            {
                "casingColor": "#ffffff", "casingWeight": 7,
                "color": "#dc2626", "weight": 4.5, "opacity": 1.0,
                "coords": [[46.55944, 7.89267], [46.5583, 7.8608], [46.55748, 7.83528]],
                "arrows": {"color": "#dc2626", "size": 9, "offset": 25, "repeat": 55, "borderColor": "#ffffff"}
            },
            # Cable descent to Stechelberg
            {
                "casingColor": "#ffffff", "casingWeight": 6,
                "color": "#8b5cf6", "weight": 4.0, "opacity": 0.9,
                "coords": [[46.55944, 7.89267], [46.5450, 7.9010], [46.5520, 7.9030]],
                "arrows": {"color": "#8b5cf6", "size": 8, "offset": 20, "repeat": 45, "borderColor": "#ffffff"}
            },
            # PostBus 141 valley floor to Lauterbrunnen
            {
                "casingColor": "#ffffff", "casingWeight": 7,
                "color": "#059669", "weight": 4.5, "opacity": 1.0,
                "coords": [[46.5520, 7.9030], [46.5700, 7.9050], [46.58963, 7.90529], [46.5956, 7.9079]],
                "arrows": {"color": "#059669", "size": 9, "offset": 25, "repeat": 55, "borderColor": "#ffffff"}
            }
        ],
        "badges": [
            {"lat": 46.558, "lng": 7.848, "html": '<div class="transit-badge badge-gondola">🚠 Schilthornbahn Cableway</div>', "iconAnchor": [70, 10]},
            {"lat": 46.570, "lng": 7.905, "html": '<div class="transit-badge badge-bus">🚌 PostBus 141 (Valley)</div>', "iconAnchor": [60, 10]}
        ]
    },

    # ----------------------------------------------------
    # DAY 13
    # ----------------------------------------------------
    {
        "filename": "day13_jungfraujoch_grindelwald_cloy_map.html",
        "day_num": 13,
        "title": "Wengen, Jungfraujoch 'Top of Europe' & Grindelwald CLOY Reunion Sites",
        "short_title": "Jungfraujoch & Grindelwald CLOY",
        "date_str": "Sun 27 Dec 2026 · Visits (1★ ➔ 9★)",
        "header_pills": [
            "🏔️ <strong>Wengen &amp; Kleine Scheidegg:</strong> Ri &amp; Se-ri Paragliding Vista",
            "❄️ <strong>Jungfraujoch 3,454m:</strong> Top of Europe, Aletsch Glacier &amp; Ice Palace",
            "🚡 <strong>Eiger Express 3S:</strong> Tricable Gondola under Eiger North Face",
            "🎬 <strong>Grindelwald First:</strong> Cliff Walk &amp; Paraglider Reunion Slopes"
        ],
        "legend_items": [
            ("pin", "pin-cloy", "CLOY Filming Site / Summit"),
            ("rail", "line-gold", "Wengernalpbahn &amp; Jungfraubahn Cogwheel Rail"),
            ("line", "line-red", "Eiger Express 3S &amp; Firstbahn Gondola"),
            ("line", "line-blue", "BOB Mountain Rail (Grindelwald ➔ Lauterbrunnen)")
        ],
        "center": [46.60, 7.99],
        "zoom": 12,
        "pins": [
            {"lat": 46.5956, "lng": 7.9079, "num": "1", "name": "Valley Hostel", "time": "08:30 AM Cogwheel Dep", "customClass": "pin-hostel", "offX": 10, "offY": -22},
            {"lat": 46.60543, "lng": 7.92154, "num": "2", "name": "Wengen Reformed Church", "time": "09:00 AM Valley Vista", "customClass": "pin-cloy", "offX": -140, "offY": -20},
            {"lat": 46.58502, "lng": 7.96123, "num": "3", "name": "Kleine Scheidegg (CLOY)", "time": "10:15 AM Ri &amp; Se-ri Pass", "customClass": "pin-cloy", "offX": -140, "offY": 10},
            {"lat": 46.54828, "lng": 7.98064, "num": "4", "name": "Jungfraujoch Top of Europe", "time": "11:15 AM 3,454m Sphinx", "customClass": "pin-cloy", "offX": 12, "offY": -26},
            {"lat": 46.5475, "lng": 7.9850, "num": "5", "name": "Aletsch Glacier &amp; Ice Palace", "time": "12:15 PM Blue Grotto", "customClass": "", "offX": 12, "offY": 10},
            {"lat": 46.6100, "lng": 8.0000, "num": "6", "name": "Eiger Express 3S Gondola", "time": "14:15 PM Eiger North Face", "customClass": "", "offX": -140, "offY": -20},
            {"lat": 46.62472, "lng": 8.0189, "num": "7", "name": "Grindelwald Terminal", "time": "14:45 PM Hub", "customClass": "pin-rail", "offX": -140, "offY": 10},
            {"lat": 46.6608, "lng": 8.0536, "num": "8", "name": "Grindelwald First Cliff Walk", "time": "15:30 PM CLOY Reunion", "customClass": "pin-cloy", "offX": 12, "offY": -22},
            {"lat": 46.6320, "lng": 7.9010, "num": "9", "name": "Zweilütschinen Rail Junction", "time": "17:00 PM Transfer", "customClass": "pin-rail", "offX": -140, "offY": -15}
        ],
        "polylines": [
            # Wengernalpbahn: Lauterbrunnen ➔ Wengen ➔ Kleine Scheidegg
            {
                "casingColor": "#1e3a8a", "casingWeight": 8,
                "color": "#f59e0b", "weight": 4.5, "opacity": 1.0,
                "coords": [[46.5956, 7.9079], [46.60543, 7.92154], [46.5900, 7.9400], [46.58502, 7.96123]],
                "arrows": {"color": "#f59e0b", "size": 10, "offset": 25, "repeat": 60, "borderColor": "#1e3a8a"}
            },
            # Jungfraubahn: Kleine Scheidegg ➔ Jungfraujoch
            {
                "casingColor": "#1e3a8a", "casingWeight": 8,
                "color": "#f59e0b", "weight": 4.5, "opacity": 1.0,
                "coords": [[46.58502, 7.96123], [46.5700, 7.9750], [46.54828, 7.98064]],
                "arrows": {"color": "#f59e0b", "size": 10, "offset": 25, "repeat": 60, "borderColor": "#1e3a8a"}
            },
            # Eiger Express 3S Gondola: Eigergletscher ➔ Grindelwald Terminal
            {
                "casingColor": "#ffffff", "casingWeight": 7,
                "color": "#dc2626", "weight": 4.5, "opacity": 1.0,
                "coords": [[46.5750, 7.9700], [46.6100, 8.0000], [46.62472, 8.0189]],
                "arrows": {"color": "#dc2626", "size": 9, "offset": 25, "repeat": 55, "borderColor": "#ffffff"}
            },
            # Firstbahn Gondola: Grindelwald ➔ First
            {
                "casingColor": "#ffffff", "casingWeight": 7,
                "color": "#dc2626", "weight": 4.5, "opacity": 1.0,
                "coords": [[46.6260, 8.0350], [46.6400, 8.0450], [46.6608, 8.0536]],
                "arrows": {"color": "#dc2626", "size": 9, "offset": 25, "repeat": 55, "borderColor": "#ffffff"}
            },
            # BOB Mountain Rail: Grindelwald ➔ Zweilütschinen ➔ Lauterbrunnen
            {
                "casingColor": "#ffffff", "casingWeight": 7,
                "color": "#2563eb", "weight": 4.5, "opacity": 1.0,
                "coords": [[46.62472, 8.0189], [46.6320, 7.9010], [46.5956, 7.9079]],
                "arrows": {"color": "#2563eb", "size": 9, "offset": 25, "repeat": 55, "borderColor": "#ffffff"}
            }
        ],
        "badges": [
            {"lat": 46.565, "lng": 7.975, "html": '<div class="transit-badge badge-rail">🚂 Jungfraubahn (Tunnel)</div>', "iconAnchor": [70, 10]},
            {"lat": 46.615, "lng": 8.010, "html": '<div class="transit-badge badge-gondola">🚠 Eiger Express 3S</div>', "iconAnchor": [65, 10]}
        ]
    },

    # ----------------------------------------------------
    # DAY 14
    # ----------------------------------------------------
    {
        "filename": "day14_lake_brienz_iseltwald_sigriswil_thun_map.html",
        "day_num": 14,
        "title": "The Ultimate CLOY & Lakes Day: Iseltwald Pier, Sigriswil Bridge & Lake Thun",
        "short_title": "Lake Brienz, Iseltwald Pier & Sigriswil",
        "date_str": "Mon 28 Dec 2026 · Visits (1★ ➔ 9★)",
        "header_pills": [
            "🎹 <strong>Iseltwald Pier:</strong> Captain Ri's Iconic Piano Jetty on Lake Brienz",
            "🌁 <strong>Sigriswil Suspension Bridge:</strong> Ri &amp; Se-ri Life-Saving Bridge Scene",
            "🏰 <strong>Thun Old Town:</strong> Scherzligschleuse Wooden Locks &amp; Thun Castle",
            "🏔️ <strong>Höhematte:</strong> Interlaken Paragliders &amp; Victoria-Jungfrau Grand Hotel"
        ],
        "legend_items": [
            ("pin", "pin-cloy", "Crash Landing on You Landmark"),
            ("rail", "line-gold", "SBB InterCity &amp; BOB Mountain Railway"),
            ("line", "line-green", "PostBus 103 &amp; STI Bus 25 (Lakeside Coaches)"),
            ("dotted", "line-dotted-red", "Lakeside Piers &amp; Suspension Bridge Walks (➔)")
        ],
        "center": [46.70, 7.82],
        "zoom": 12,
        "pins": [
            {"lat": 46.5956, "lng": 7.9079, "num": "1", "name": "Valley Hostel", "time": "08:33 AM Train Dep", "customClass": "pin-hostel", "offX": 10, "offY": -22},
            {"lat": 46.69043, "lng": 7.86905, "num": "2", "name": "Interlaken Ost", "time": "08:54 AM Hub", "customClass": "pin-rail", "offX": -140, "offY": -15},
            {"lat": 46.72674, "lng": 7.96747, "num": "3", "name": "Lake Brienz (PostBus 103)", "time": "09:10 AM Scenic Shore", "customClass": "", "offX": 12, "offY": -24},
            {"lat": 46.71142, "lng": 7.96260, "num": "4", "name": "Iseltwald Piano Pier (CLOY)", "time": "09:30 AM Captain Ri Jetty", "customClass": "pin-cloy", "offX": -140, "offY": 10},
            {"lat": 46.6863, "lng": 7.8632, "num": "5", "name": "Höhematte &amp; Grand Hotel", "time": "11:30 AM Interlaken", "customClass": "pin-cloy", "offX": 12, "offY": 10},
            {"lat": 46.71797, "lng": 7.70789, "num": "6", "name": "Panoramabrücke Sigriswil", "time": "14:00 PM CLOY 340m Bridge", "customClass": "pin-cloy", "offX": -140, "offY": -22},
            {"lat": 46.7594, "lng": 7.6288, "num": "7", "name": "Thun Scherzligschleuse", "time": "16:00 PM Wooden Bridges", "customClass": "pin-museum", "offX": -140, "offY": 10},
            {"lat": 46.7600, "lng": 7.6300, "num": "8", "name": "Schloss Thun (Castle)", "time": "16:45 PM 12th-C. Fortress", "customClass": "", "offX": 12, "offY": -22},
            {"lat": 46.69584, "lng": 7.72122, "num": "9", "name": "Lake Thun (SBB Fast IC)", "time": "17:41 PM Train Return", "customClass": "pin-rail", "offX": 12, "offY": 10}
        ],
        "polylines": [
            # PostBus 103: Interlaken Ost ➔ Iseltwald
            {
                "casingColor": "#ffffff", "casingWeight": 7,
                "color": "#059669", "weight": 4.5, "opacity": 1.0,
                "coords": [[46.69043, 7.86905], [46.7050, 7.9000], [46.72674, 7.96747], [46.71142, 7.96260]],
                "arrows": {"color": "#059669", "size": 9, "offset": 20, "repeat": 50, "borderColor": "#ffffff"}
            },
            # Train: Interlaken West ➔ Thun
            {
                "casingColor": "#1e3a8a", "casingWeight": 8,
                "color": "#f59e0b", "weight": 4.5, "opacity": 1.0,
                "coords": [[46.6863, 7.8632], [46.69584, 7.72122], [46.7100, 7.6700], [46.7594, 7.6288]],
                "arrows": {"color": "#f59e0b", "size": 10, "offset": 30, "repeat": 70, "borderColor": "#1e3a8a"}
            },
            # STI Bus 25: Thun ➔ Sigriswil
            {
                "casingColor": "#ffffff", "casingWeight": 7,
                "color": "#059669", "weight": 4.5, "opacity": 1.0,
                "coords": [[46.7594, 7.6288], [46.7350, 7.6800], [46.71797, 7.70789]],
                "arrows": {"color": "#059669", "size": 9, "offset": 20, "repeat": 50, "borderColor": "#ffffff"}
            }
        ],
        "badges": [
            {"lat": 46.715, "lng": 7.945, "html": '<div class="transit-badge badge-bus">🚌 PostBus 103 (Lake Brienz)</div>', "iconAnchor": [70, 10]},
            {"lat": 46.730, "lng": 7.695, "html": '<div class="transit-badge badge-bus">🚌 STI Bus 25 to Sigriswil</div>', "iconAnchor": [65, 10]}
        ]
    }
]

# Write Days 9 to 14
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
