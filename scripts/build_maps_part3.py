import os
from generate_all_maps import create_map_html, MAPS_DIR

days_data = [
    # ----------------------------------------------------
    # DAY 15
    # ----------------------------------------------------
    {
        "filename": "day15_bern_temple_paris_map.html",
        "day_num": 15,
        "title": "Bern UNESCO Old Town, Sacred Temple & High-Speed TGV to Paris",
        "short_title": "Bern Old Town, Temple & TGV to Paris",
        "date_str": "Tue 29 Dec 2026 · Visits (1★ ➔ 9★)",
        "header_pills": [
            "✨ <strong>Bern Temple:</strong> 11:15 AM Session (Zollikofen S-Bahn S9)",
            "🏰 <strong>UNESCO Altstadt:</strong> Zytglogge, Münster &amp; Rosengarten Loop",
            "🚄 <strong>TGV Lyria 9284:</strong> Bern Hbf ➔ Paris Gare de Lyon (17:34–22:08)",
            "🏨 <strong>Break &amp; Home Paris:</strong> Porte d'Italie 5-Night Paris Base"
        ],
        "legend_items": [
            ("pin", "pin-temple", "Sacred Temple / UNESCO Landmark"),
            ("rail", "line-gold", "TGV Lyria High-Speed Bullet Track (➔ Paris)"),
            ("line", "line-blue", "Bern S-Bahn S9 (Hbf ➔ Zollikofen)"),
            ("dotted", "line-dotted-red", "Medieval Aare River Loop Walk (➔)")
        ],
        "center": [46.955, 7.450],
        "zoom": 13,
        "pins": [
            {"lat": 46.5956, "lng": 7.9079, "num": "1", "name": "Valley Hostel (Checkout)", "time": "08:30 AM Dep", "customClass": "pin-hostel", "offX": 10, "offY": -22},
            {"lat": 46.9490, "lng": 7.4395, "num": "2", "name": "Bern Hauptbahnhof", "time": "10:15 AM SBB Lockers", "customClass": "pin-rail", "offX": -140, "offY": -15},
            {"lat": 46.9881, "lng": 7.4619, "num": "3", "name": "Bern Switzerland Temple", "time": "10:45 AM Arrival · 11:15", "customClass": "pin-temple", "offX": 12, "offY": -26},
            {"lat": 46.94792, "lng": 7.44778, "num": "4", "name": "Zytglogge Clock Tower", "time": "14:30 PM Medieval Clock", "customClass": "pin-museum", "offX": -140, "offY": -20},
            {"lat": 46.94811, "lng": 7.44753, "num": "5", "name": "Altstadt UNESCO Arcades", "time": "15:00 PM Kramgasse", "customClass": "", "offX": 12, "offY": -20},
            {"lat": 46.94722, "lng": 7.45111, "num": "6", "name": "Berner Münster Cathedral", "time": "15:45 PM Gothic Spire", "customClass": "pin-museum", "offX": 12, "offY": 10},
            {"lat": 46.94719, "lng": 7.45951, "num": "7", "name": "Rosengarten Panoramic View", "time": "16:30 PM Aare River Vista", "customClass": "", "offX": -140, "offY": -22},
            {"lat": 46.9490, "lng": 7.4395, "num": "8", "name": "Bern Hbf TGV Platform", "time": "17:34 PM TGV Lyria Dep", "customClass": "pin-rail", "offX": -140, "offY": 10},
            {"lat": 48.8207, "lng": 2.3615, "num": "9", "name": "Break &amp; Home Paris Italie", "time": "22:45 PM Check-in", "customClass": "pin-arrival", "offX": 12, "offY": 10}
        ],
        "polylines": [
            # S-Bahn S9: Bern Hbf ➔ Zollikofen (Temple)
            {
                "casingColor": "#ffffff", "casingWeight": 7,
                "color": "#2563eb", "weight": 4.5, "opacity": 1.0,
                "coords": [[46.9490, 7.4395], [46.9650, 7.4500], [46.9800, 7.4580], [46.9881, 7.4619]],
                "arrows": {"color": "#2563eb", "size": 9, "offset": 20, "repeat": 50, "borderColor": "#ffffff"}
            },
            # Bern UNESCO Aare Loop Walk
            {
                "casingColor": "#ffffff", "casingWeight": 7,
                "color": "#ea580c", "weight": 4.5, "dashArray": "6, 8", "opacity": 1.0,
                "coords": [
                    [46.9490, 7.4395], [46.9485, 7.4440], [46.94792, 7.44778],
                    [46.94811, 7.44753], [46.94722, 7.45111], [46.9470, 7.4560], [46.94719, 7.45951]
                ],
                "arrows": {"color": "#ea580c", "size": 8, "offset": 20, "repeat": 45, "borderColor": "#ffffff"}
            }
        ],
        "badges": [
            {"lat": 46.970, "lng": 7.453, "html": '<div class="transit-badge">🚆 S-Bahn S9 to Temple (8m)</div>', "iconAnchor": [65, 10]}
        ]
    },

    # ----------------------------------------------------
    # DAY 16 (UPDATED: 30 Dec 2026 - Paris France Temple 11:00 AM & Palace of Versailles Grand Tour)
    # ----------------------------------------------------
    {
        "filename": "day16_paris_temple_city_map.html",
        "day_num": 16,
        "title": "Paris France Temple Sacred Session & Palace of Versailles Grand Tour",
        "short_title": "Paris Temple & Palace of Versailles",
        "date_str": "Wed 30 Dec 2026 · Visits (1★ ➔ 9★)",
        "header_pills": [
            "✨ <strong>Paris France Temple:</strong> Arrive 10:30 AM · 11:00 AM Proxy Endowment Session",
            "🌿 <strong>Temple Grounds:</strong> Reflection Gardens &amp; Patron Center in Le Chesnay",
            "👑 <strong>Palace of Versailles:</strong> Afternoon Grand Tour &amp; Hall of Mirrors (14:15 PM)",
            "🌳 <strong>Versailles Gardens:</strong> Royal Grand Canal &amp; Orangerie Vistas"
        ],
        "legend_items": [
            ("pin", "pin-temple", "Paris France LDS Temple (Le Chesnay)"),
            ("pin", "pin-museum", "Palace of Versailles &amp; Royal Apartments"),
            ("rail", "line-gold", "RER Line C &amp; Phébus Bus (Paris ➔ Le Chesnay / Versailles)"),
            ("dotted", "line-dotted-red", "Royal Estate &amp; Gardens Walking Trail (➔)")
        ],
        "center": [48.815, 2.128],
        "zoom": 13,
        "pins": [
            {"lat": 48.8207, "lng": 2.3615, "num": "1", "name": "Break &amp; Home Paris Italie", "time": "09:15 AM Dep", "customClass": "pin-hostel", "offX": -140, "offY": -15},
            {"lat": 48.8350, "lng": 2.2200, "num": "2", "name": "RER C / Phébus Transit", "time": "09:45 AM Transit", "customClass": "pin-rail", "offX": 12, "offY": -20},
            {"lat": 48.8208, "lng": 2.1331, "num": "3", "name": "Paris France Temple", "time": "10:30 AM Arrive · 11:00 AM Session", "customClass": "pin-temple", "offX": 12, "offY": -26},
            {"lat": 48.8215, "lng": 2.1345, "num": "4", "name": "Temple Reflection Gardens", "time": "13:00 PM Stroll &amp; Lunch", "customClass": "pin-temple", "offX": -140, "offY": 10},
            {"lat": 48.80486, "lng": 2.12036, "num": "5", "name": "Château de Versailles", "time": "14:15 PM Grand Tour Entry", "customClass": "pin-museum", "offX": -140, "offY": -22},
            {"lat": 48.80490, "lng": 2.12040, "num": "6", "name": "Hall of Mirrors (Galerie)", "time": "15:00 PM Royal Apartments", "customClass": "pin-museum", "offX": 12, "offY": -24},
            {"lat": 48.80700, "lng": 2.11000, "num": "7", "name": "Gardens of Versailles", "time": "16:15 PM Grand Canal", "customClass": "", "offX": -140, "offY": 10},
            {"lat": 48.8000, "lng": 2.1285, "num": "8", "name": "Versailles Château Rive Gauche", "time": "17:30 PM RER C Return", "customClass": "pin-rail", "offX": 12, "offY": 10},
            {"lat": 48.8207, "lng": 2.3615, "num": "9", "name": "Break &amp; Home Paris Italie", "time": "18:45 PM Evening Rest", "customClass": "pin-hostel", "offX": 12, "offY": 10}
        ],
        "polylines": [
            # RER Line C / Bus to Le Chesnay Temple
            {
                "casingColor": "#1e3a8a", "casingWeight": 8,
                "color": "#f59e0b", "weight": 4.5, "opacity": 1.0,
                "coords": [[48.8207, 2.3615], [48.8350, 2.2800], [48.8200, 2.2200], [48.8208, 2.1331]],
                "arrows": {"color": "#f59e0b", "size": 10, "offset": 30, "repeat": 70, "borderColor": "#1e3a8a"}
            },
            # Le Chesnay Temple to Château de Versailles (Phébus Bus 2 / 5m taxi)
            {
                "casingColor": "#ffffff", "casingWeight": 7,
                "color": "#2563eb", "weight": 4.5, "opacity": 1.0,
                "coords": [[48.8208, 2.1331], [48.8150, 2.1260], [48.8080, 2.1220], [48.80486, 2.12036]],
                "arrows": {"color": "#2563eb", "size": 9, "offset": 20, "repeat": 45, "borderColor": "#ffffff"}
            },
            # Versailles Estate grounds walk
            {
                "casingColor": "#ffffff", "casingWeight": 7,
                "color": "#ea580c", "weight": 4.5, "dashArray": "6, 8", "opacity": 1.0,
                "coords": [[48.80486, 2.12036], [48.80490, 2.12040], [48.80700, 2.11000], [48.8030, 2.1220], [48.8000, 2.1285]],
                "arrows": {"color": "#ea580c", "size": 8, "offset": 15, "repeat": 35, "borderColor": "#ffffff"}
            }
        ],
        "badges": [
            {"lat": 48.816, "lng": 2.130, "html": '<div class="transit-badge badge-rail">🚆 Temple ➔ Versailles (8m)</div>', "iconAnchor": [70, 10]},
            {"lat": 48.805, "lng": 2.115, "html": '<div class="transit-badge badge-ferry">👑 Palace of Versailles</div>', "iconAnchor": [65, 10]}
        ]
    },

    # ----------------------------------------------------
    # DAY 17
    # ----------------------------------------------------
    {
        "filename": "day17_paris_monuments_nye_map.html",
        "day_num": 17,
        "title": "Île de la Cité, Latin Quarter Panthéon & Champs-Élysées NYE Countdown",
        "short_title": "Île de la Cité, Panthéon & NYE Countdown",
        "date_str": "Thu 31 Dec 2026 · Visits (1★ ➔ 7★)",
        "header_pills": [
            "🎶 <strong>Square du Vert-Galant:</strong> Taylor Swift Island Tip on the Seine",
            "⛪ <strong>Notre-Dame &amp; Panthéon:</strong> Restored Gothic Towers &amp; Crypt",
            "🗼 <strong>Trocadéro:</strong> Sparkling Eiffel Tower Twilight Panorama",
            "🎆 <strong>Champs-Élysées NYE:</strong> Official Midnight Countdown &amp; Lasers"
        ],
        "legend_items": [
            ("pin", "pin-swift", "Taylor Swift / Historic Landmark"),
            ("line", "line-blue", "Paris Metro Line 7 &amp; Line 10 (➔ Latin Quarter)"),
            ("line", "line-purple", "All-Night Free NYE Metro Lines (1, 4, 14)"),
            ("dotted", "line-dotted-red", "Historic Seine &amp; Latin Quarter Walking Path (➔)")
        ],
        "center": [48.855, 2.325],
        "zoom": 13,
        "pins": [
            {"lat": 48.85488, "lng": 2.34749, "num": "1", "name": "Square du Vert-Galant (Swift)", "time": "09:30 AM Island Tip", "customClass": "pin-swift", "offX": -140, "offY": -20},
            {"lat": 48.85297, "lng": 2.34990, "num": "2", "name": "Notre-Dame Cathedral", "time": "10:30 AM Parvis", "customClass": "pin-museum", "offX": 12, "offY": -24},
            {"lat": 48.84622, "lng": 2.34641, "num": "3", "name": "Panthéon (Latin Quarter)", "time": "12:00 PM Foucault Pendulum", "customClass": "pin-museum", "offX": 12, "offY": 10},
            {"lat": 48.84827, "lng": 2.33729, "num": "4", "name": "Jardin du Luxembourg", "time": "14:00 PM Medici Fountain", "customClass": "", "offX": -140, "offY": 10},
            {"lat": 48.8207, "lng": 2.3615, "num": "5", "name": "Break &amp; Home Paris Italie", "time": "16:30 PM Rest &amp; Prep", "customClass": "pin-hostel", "offX": 12, "offY": 10},
            {"lat": 48.86215, "lng": 2.28845, "num": "6", "name": "Trocadéro Eiffel View", "time": "20:30 PM Sparkling Tower", "customClass": "pin-museum", "offX": -140, "offY": -22},
            {"lat": 48.87180, "lng": 2.30260, "num": "7", "name": "Champs-Élysées NYE Countdown", "time": "22:30 PM – Midnight", "customClass": "pin-arrival", "offX": 12, "offY": -22}
        ],
        "polylines": [
            # Walking Tour through Latin Quarter
            {
                "casingColor": "#ffffff", "casingWeight": 7,
                "color": "#ea580c", "weight": 4.5, "dashArray": "6, 8", "opacity": 1.0,
                "coords": [
                    [48.85488, 2.34749], [48.85297, 2.34990], [48.8500, 2.3480],
                    [48.84622, 2.34641], [48.84827, 2.33729]
                ],
                "arrows": {"color": "#ea580c", "size": 8, "offset": 20, "repeat": 45, "borderColor": "#ffffff"}
            },
            # Evening Transit to Trocadéro & NYE Countdown
            {
                "casingColor": "#ffffff", "casingWeight": 7,
                "color": "#8b5cf6", "weight": 4.5, "opacity": 1.0,
                "coords": [
                    [48.8207, 2.3615], [48.8350, 2.3200], [48.8550, 2.2900],
                    [48.86215, 2.28845], [48.8660, 2.2980], [48.87180, 2.30260]
                ],
                "arrows": {"color": "#8b5cf6", "size": 9, "offset": 25, "repeat": 55, "borderColor": "#ffffff"}
            }
        ],
        "badges": [
            {"lat": 48.866, "lng": 2.295, "html": '<div class="transit-badge badge-rail">🎉 Free All-Night NYE Transit</div>', "iconAnchor": [70, 10]}
        ]
    },

    # ----------------------------------------------------
    # DAY 18
    # ----------------------------------------------------
    {
        "filename": "day18_paris_louvre_montmartre_map.html",
        "day_num": 18,
        "title": "Le Marais Historic Mansions, Place des Vosges & Saint-Germain 'Begin Again' Café",
        "short_title": "Le Marais & Saint-Germain 'Begin Again'",
        "date_str": "Fri 01 Jan 2027 · Visits (1★ ➔ 7★)",
        "header_pills": [
            "✨ <strong>New Year's Day:</strong> Relaxed Morning Walk in Le Marais",
            "🎶 <strong>Place des Vosges:</strong> Taylor Swift 'Begin Again' Arcaded Square",
            "📚 <strong>Seine Quays:</strong> Vintage Green Bouquinistes Book Stalls",
            "☕ <strong>Café La Palette:</strong> Exact Sidewalk Café from 'Begin Again' Video!"
        ],
        "legend_items": [
            ("pin", "pin-swift", "Taylor Swift 'Begin Again' Music Video Site"),
            ("line", "line-blue", "Paris Metro Line 4 &amp; 10 (➔ Left Bank)"),
            ("dotted", "line-dotted-red", "Le Marais &amp; Saint-Germain Romantic Walk (➔)")
        ],
        "center": [48.857, 2.350],
        "zoom": 14,
        "pins": [
            {"lat": 48.8207, "lng": 2.3615, "num": "1", "name": "Break &amp; Home Paris Italie", "time": "10:00 AM Start", "customClass": "pin-hostel", "offX": -140, "offY": -15},
            {"lat": 48.86123, "lng": 2.35819, "num": "2", "name": "Le Marais Historic Lanes", "time": "10:30 AM New Year Walk", "customClass": "pin-swift", "offX": -140, "offY": -20},
            {"lat": 48.85561, "lng": 2.36553, "num": "3", "name": "Place des Vosges (Swift)", "time": "11:30 AM Red-Brick Square", "customClass": "pin-swift", "offX": 12, "offY": -24},
            {"lat": 48.86000, "lng": 2.32660, "num": "4", "name": "Quai de Conti (Bouquinistes)", "time": "13:00 PM Seine Stroll", "customClass": "pin-swift", "offX": -140, "offY": 10},
            {"lat": 48.85400, "lng": 2.33600, "num": "5", "name": "Place de Furstemberg", "time": "14:00 PM Romantic Square", "customClass": "pin-swift", "offX": 12, "offY": -20},
            {"lat": 48.85380, "lng": 2.33450, "num": "6", "name": "Café La Palette (Swift Video!)", "time": "14:30 PM Exact Café Table", "customClass": "pin-swift", "offX": -140, "offY": 10},
            {"lat": 48.85380, "lng": 2.33330, "num": "7", "name": "Saint-Germain-des-Prés", "time": "16:00 PM Church &amp; Boulevard", "customClass": "pin-museum", "offX": 12, "offY": 10}
        ],
        "polylines": [
            # Walking Route through Marais to Saint-Germain
            {
                "casingColor": "#ffffff", "casingWeight": 7,
                "color": "#ea580c", "weight": 4.5, "dashArray": "6, 8", "opacity": 1.0,
                "coords": [
                    [48.86123, 2.35819], [48.85561, 2.36553], [48.8530, 2.3580],
                    [48.85488, 2.34749], [48.86000, 2.32660], [48.85400, 2.33600],
                    [48.85380, 2.33450], [48.85380, 2.33330]
                ],
                "arrows": {"color": "#ea580c", "size": 8, "offset": 20, "repeat": 45, "borderColor": "#ffffff"}
            }
        ],
        "badges": [
            {"lat": 48.855, "lng": 2.341, "html": '<div class="transit-badge badge-bus">☕ Saint-Germain Café Promenade</div>', "iconAnchor": [70, 10]}
        ]
    },

    # ----------------------------------------------------
    # ----------------------------------------------------
    # DAY 19 (UPDATED: 02 Jan 2027 - Musée du Louvre, Champs-Élysées, Arc de Triomphe & Farewell Dinner)
    # ----------------------------------------------------
    {
        "filename": "day19_versailles_champs_elysees_map.html",
        "day_num": 19,
        "title": "Musée du Louvre Masterpieces, Champs-Élysées, Arc de Triomphe Sunset & Farewell Dinner",
        "short_title": "Louvre, Arc de Triomphe Sunset & Farewell Dinner",
        "date_str": "Sat 02 Jan 2027 · Visits (1★ ➔ 9★)",
        "header_pills": [
            "🏛️ <strong>Musée du Louvre:</strong> 09:30 AM Timed Entry · Mona Lisa, Winged Victory &amp; Venus de Milo",
            "🌳 <strong>Tuileries &amp; Concorde:</strong> Royal Gardens, Luxor Obelisk &amp; Pont Alexandre III",
            "🌟 <strong>Arc de Triomphe:</strong> Open-Air Rooftop 360° Sunset Panorama (16:15 PM)",
            "🎶 <strong>Galeries Lafayette:</strong> Art Nouveau Dome Christmas Tree &amp; Swift Rooftop"
        ],
        "legend_items": [
            ("pin", "pin-museum", "Musée du Louvre &amp; Historic Monuments"),
            ("pin", "pin-swift", "Taylor Swift 'Begin Again' Site"),
            ("line", "line-blue", "Paris Metro Line 7 / Line 1 / Line 14"),
            ("dotted", "line-dotted-red", "Historic Axis &amp; Champs-Élysées Walking Trail (➔)")
        ],
        "center": [48.862, 2.315],
        "zoom": 13,
        "pins": [
            {"lat": 48.8207, "lng": 2.3615, "num": "1", "name": "Break &amp; Home Paris Italie", "time": "09:00 AM Dep", "customClass": "pin-hostel", "offX": -140, "offY": -15},
            {"lat": 48.86061, "lng": 2.33764, "num": "2", "name": "Musée du Louvre (Pyramid)", "time": "09:30 AM Timed Entry", "customClass": "pin-museum", "offX": 12, "offY": -26},
            {"lat": 48.86380, "lng": 2.32750, "num": "3", "name": "Tuileries Gardens", "time": "12:45 PM Stroll", "customClass": "pin-swift", "offX": 12, "offY": 10},
            {"lat": 48.86560, "lng": 2.32120, "num": "4", "name": "Place de la Concorde", "time": "13:30 PM Luxor Obelisk", "customClass": "pin-swift", "offX": -140, "offY": 10},
            {"lat": 48.86611, "lng": 2.31245, "num": "5", "name": "Pont Alexandre III", "time": "14:15 PM Golden Bridge", "customClass": "pin-swift", "offX": 12, "offY": -22},
            {"lat": 48.87181, "lng": 2.30266, "num": "6", "name": "Av. des Champs-Élysées", "time": "15:15 PM Holiday Lights", "customClass": "", "offX": -140, "offY": 10},
            {"lat": 48.87379, "lng": 2.29503, "num": "7", "name": "Arc de Triomphe (Rooftop)", "time": "16:15 PM 360° Sunset", "customClass": "pin-museum", "offX": -140, "offY": -20},
            {"lat": 48.87362, "lng": 2.33211, "num": "8", "name": "Galeries Lafayette Rooftop", "time": "17:45 PM Swift Scene", "customClass": "pin-swift", "offX": 12, "offY": -22},
            {"lat": 48.85200, "lng": 2.34200, "num": "9", "name": "Parisian Farewell Dinner", "time": "19:30 PM Celebration", "customClass": "pin-arrival", "offX": -140, "offY": 10}
        ],
        "polylines": [
            # Metro Line 7 from Break & Home to Palais Royal - Musée du Louvre
            {
                "casingColor": "#ffffff", "casingWeight": 7,
                "color": "#ec4899", "weight": 4.5, "opacity": 1.0,
                "coords": [[48.8207, 2.3615], [48.8350, 2.3550], [48.8530, 2.3480], [48.86061, 2.33764]],
                "arrows": {"color": "#ec4899", "size": 9, "offset": 20, "repeat": 50, "borderColor": "#ffffff"}
            },
            # Walking Trail: Louvre ➔ Tuileries ➔ Concorde ➔ Pont Alexandre III ➔ Champs-Élysées ➔ Arc de Triomphe
            {
                "casingColor": "#ffffff", "casingWeight": 7,
                "color": "#ea580c", "weight": 4.5, "dashArray": "6, 8", "opacity": 1.0,
                "coords": [
                    [48.86061, 2.33764], [48.86380, 2.32750], [48.86560, 2.32120],
                    [48.86611, 2.31245], [48.87181, 2.30266], [48.87379, 2.29503]
                ],
                "arrows": {"color": "#ea580c", "size": 8, "offset": 15, "repeat": 35, "borderColor": "#ffffff"}
            },
            # Metro Line 1 / 9 to Galeries Lafayette Haussmann
            {
                "casingColor": "#ffffff", "casingWeight": 7,
                "color": "#2563eb", "weight": 4.5, "opacity": 1.0,
                "coords": [[48.87379, 2.29503], [48.8730, 2.3150], [48.87362, 2.33211]],
                "arrows": {"color": "#2563eb", "size": 9, "offset": 20, "repeat": 45, "borderColor": "#ffffff"}
            }
        ],
        "badges": [
            {"lat": 48.862, "lng": 2.335, "html": '<div class="transit-badge badge-ferry">🏛️ Louvre Cour Napoléon</div>', "iconAnchor": [70, 10]},
            {"lat": 48.872, "lng": 2.300, "html": '<div class="transit-badge badge-bus">🌟 Arc de Triomphe Sunset</div>', "iconAnchor": [70, 10]}
        ]
    },

    # ----------------------------------------------------
    # DAY 20
    # ----------------------------------------------------
    {
        "filename": "day20_paris_to_london_transit_map.html",
        "day_num": 20,
        "title": "Paris Farewell Seine Walk & Overnight FlixBus N700 Cross-Channel to UK",
        "short_title": "Paris Farewell & FlixBus N700 to UK",
        "date_str": "Sun 03 Jan 2027 · Visits (1★ ➔ 8★)",
        "header_pills": [
            "🌉 <strong>Pont Alexandre III:</strong> Final Morning Daylight Walk on the Seine",
            "🛍️ <strong>Latin Quarter:</strong> Boulevard Saint-Michel Souvenirs &amp; Crêpes",
            "🚌 <strong>FlixBus N700:</strong> Paris Bercy ➔ London Victoria (21:00–05:25+1d Paid)",
            "🇬🇧 <strong>Eurotunnel:</strong> Cross-Channel Sleeper Transit back to UK"
        ],
        "legend_items": [
            ("pin", "pin-arrival", "Border Crossing / Overnight Terminal"),
            ("line", "line-green", "FlixBus Line N700 (Paris ➔ Calais ➔ London)"),
            ("line", "line-blue", "Paris Metro Line 14 (Direct to Bercy)"),
            ("dotted", "line-dotted-red", "Final Paris Walking Promenade (➔)")
        ],
        "center": [50.0, 1.0],
        "zoom": 7,
        "pins": [
            {"lat": 48.86390, "lng": 2.31356, "num": "1", "name": "Pont Alexandre III", "time": "09:30 AM Morning Walk", "customClass": "pin-swift", "offX": 10, "offY": -24},
            {"lat": 48.8207, "lng": 2.3615, "num": "2", "name": "Break &amp; Home Paris Italie", "time": "11:30 AM Check-out", "customClass": "pin-hostel", "offX": -140, "offY": 10},
            {"lat": 48.85100, "lng": 2.34400, "num": "3", "name": "Latin Quarter Souvenirs", "time": "13:30 PM Crêpes", "customClass": "", "offX": 12, "offY": -22},
            {"lat": 48.83500, "lng": 2.38000, "num": "4", "name": "Parc de Bercy", "time": "20:00 PM Evening Transit", "customClass": "", "offX": 12, "offY": 10},
            {"lat": 48.8355, "lng": 2.3813, "num": "5", "name": "Paris Bercy Seine Terminal", "time": "20:15 PM FlixBus N700", "customClass": "pin-arrival", "offX": 12, "offY": -26},
            {"lat": 50.9300, "lng": 1.8100, "num": "6", "name": "Calais / Eurotunnel", "time": "01:30 AM French Exit", "customClass": "pin-rail", "offX": -140, "offY": -15},
            {"lat": 51.1270, "lng": 1.3130, "num": "7", "name": "Dover Port", "time": "03:15 AM UK Entry", "customClass": "pin-rail", "offX": 12, "offY": -20},
            {"lat": 51.4925, "lng": -0.1480, "num": "8", "name": "London Victoria Coach Station", "time": "05:25 AM Final Arrival", "customClass": "pin-arrival", "offX": -140, "offY": -20}
        ],
        "polylines": [
            # FlixBus Route N700: Paris ➔ Calais ➔ Eurotunnel ➔ Dover ➔ London Victoria
            {
                "casingColor": "#ffffff", "casingWeight": 8,
                "color": "#059669", "weight": 5.0, "opacity": 1.0,
                "coords": [
                    [48.8355, 2.3813], [49.200, 2.450], [49.800, 2.500],
                    [50.450, 2.100], [50.9300, 1.8100], [51.050, 1.500],
                    [51.1270, 1.3130], [51.250, 0.700], [51.450, 0.100], [51.4925, -0.1480]
                ],
                "arrows": {"color": "#059669", "size": 10, "offset": 35, "repeat": 75, "borderColor": "#ffffff"}
            }
        ],
        "badges": [
            {"lat": 49.9, "lng": 2.2, "html": '<div class="transit-badge badge-bus">🚌 FlixBus Line N700 Sleeper</div>', "iconAnchor": [70, 10]},
            {"lat": 51.0, "lng": 1.6, "html": '<div class="transit-badge badge-rail">🚆 Eurotunnel Crossing</div>', "iconAnchor": [65, 10]}
        ]
    }
]

# Write Days 15 to 20
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
