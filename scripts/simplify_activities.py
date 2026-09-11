#!/usr/bin/env python3
import os
import re

BASE_DIR = "/Users/jeana/Projects/schengen-trip-2026"

DAYS_DATA = [
    # Day 1
    {
        "day": 1,
        "parts": [
            ("Evening (19:00 – 21:30)", [
                "London Victoria Coach Station (164 Buckingham Palace Rd) – Baggage check-in"
            ]),
            ("Night (22:00 – 03:00)", [
                "FlixBus Route N824 (Departs 22:00 · Booking Ref: 338 890 0447 · Seats 11C & 11D)",
                "Dover Port (Eurotunnel / LeShuttle crossing to France)"
            ]),
            ("Early Morning (03:00 – 10:25+1d)", [
                "Overnight coach transit across France & Belgium",
                "Arrive Amsterdam Central Station (De Ruijterkade 153) at 10:25 AM"
            ])
        ],
        "pdf_summary": "<b>Evening (19:00 – 21:30):</b><br/>&nbsp;&nbsp;• London Victoria Coach Station (Check-in)<br/><b>Night (22:00 – 10:25+1d):</b><br/>&nbsp;&nbsp;• FlixBus N824 (Departs 22:00 · Ref: 338 890 0447 · Seats 11C/11D)<br/>&nbsp;&nbsp;• Dover Port Eurotunnel crossing<br/>&nbsp;&nbsp;• Arrive Amsterdam Central Station (10:25 AM)"
    },
    # Day 2
    {
        "day": 2,
        "parts": [
            ("Morning (10:25 – 12:00)", [
                "Arrive Amsterdam Central Station (10:25 AM)",
                "GVB Tram Line 2 or 12 to Leidseplein",
                "Amsterdam Hostel Leidseplein (luggage drop)"
            ]),
            ("Afternoon (12:30 – 16:30)", [
                "UNESCO Canal Ring",
                "Dam Square & Royal Palace exterior",
                "Begijnhof Courtyard"
            ]),
            ("Evening (17:00 – 20:30)", [
                "Amsterdam Light Festival (Herengracht & Keizersgracht)",
                "Leidseplein"
            ])
        ],
        "pdf_summary": "<b>Morning (10:25 – 12:00):</b><br/>&nbsp;&nbsp;• Arrive Amsterdam Central (10:25 AM)<br/>&nbsp;&nbsp;• GVB Tram Line 2/12 to Leidseplein (Hostel drop)<br/><b>Afternoon (12:30 – 16:30):</b><br/>&nbsp;&nbsp;• UNESCO Canal Ring & Dam Square<br/>&nbsp;&nbsp;• Begijnhof Courtyard<br/><b>Evening (17:00 – 20:30):</b><br/>&nbsp;&nbsp;• Amsterdam Light Festival & Leidseplein"
    },
    # Day 3
    {
        "day": 3,
        "parts": [
            ("Morning (09:00 – 12:30)", [
                "NS Train: Amsterdam Centraal ➔ Koog-Zaandijk (17 min)",
                "Zaanse Schans (Windmills & Catharina Hoeve Cheese Farm)",
                "Return NS Train to Amsterdam Centraal"
            ]),
            ("Afternoon (13:30 – 17:00)", [
                "Rijksmuseum (Museumplein)",
                "Ice Village Christmas Market"
            ]),
            ("Evening (17:30 – 20:30)", [
                "UNESCO Canal Boat Cruise (75 min)",
                "The Jordaan canal walk"
            ])
        ],
        "pdf_summary": "<b>Morning (09:00 – 12:30):</b><br/>&nbsp;&nbsp;• NS Train to Zaanse Schans (17 min)<br/>&nbsp;&nbsp;• Zaanse Schans Windmills & Cheese Farm<br/><b>Afternoon (13:30 – 17:00):</b><br/>&nbsp;&nbsp;• Rijksmuseum (Museumplein)<br/>&nbsp;&nbsp;• Ice Village Christmas Market<br/><b>Evening (17:30 – 20:30):</b><br/>&nbsp;&nbsp;• UNESCO Canal Boat Cruise (75 min)<br/>&nbsp;&nbsp;• The Jordaan canal walk"
    },
    # Day 4
    {
        "day": 4,
        "parts": [
            ("Morning (08:00 – 12:30)", [
                "NS Intercity Train: Amsterdam Centraal ➔ Den Haag / Zoetermeer (48 min)",
                "The Hague Netherlands Temple (09:30 AM Endowment Session · Arrive 09:10 AM)"
            ]),
            ("Afternoon (13:00 – 16:30)", [
                "Peace Palace (Vredespaleis Visitor Centre)",
                "International Criminal Court (ICC) exterior"
            ]),
            ("Evening (17:30 – 21:00)", [
                "NS Intercity Train back to Amsterdam Centraal",
                "Amsterdam Base (Leidseplein)"
            ])
        ],
        "pdf_summary": "<b>Morning (08:00 – 12:30):</b><br/>&nbsp;&nbsp;• NS Intercity to Den Haag / Zoetermeer (48 min)<br/>&nbsp;&nbsp;• The Hague Netherlands Temple (09:30 AM Session)<br/><b>Afternoon (13:00 – 16:30):</b><br/>&nbsp;&nbsp;• Peace Palace & ICC exterior<br/><b>Evening (17:30 – 21:00):</b><br/>&nbsp;&nbsp;• Return train to Amsterdam Base"
    },
    # Day 5
    {
        "day": 5,
        "parts": [
            ("Morning (08:30 – 11:45)", [
                "DB ICE Train: Amsterdam Centraal ➔ Köln Hbf (Departs 08:38, 2h 38m)",
                "Cologne Base Hotel (check-in / luggage drop)"
            ]),
            ("Afternoon (12:30 – 16:30)", [
                "Cologne Cathedral (Kölner Dom)",
                "Hohenzollern Bridge",
                "Lindt Chocolate Museum"
            ]),
            ("Evening (17:00 – 21:00)", [
                "Cologne Cathedral Christmas Market (Weihnachtsmarkt am Kölner Dom)",
                "Alter Markt & Heinzels Wintermärchen"
            ])
        ],
        "pdf_summary": "<b>Morning (08:30 – 11:45):</b><br/>&nbsp;&nbsp;• DB ICE: Amsterdam ➔ Köln Hbf (08:38–11:15, 2h 38m)<br/>&nbsp;&nbsp;• Hotel check-in / luggage drop<br/><b>Afternoon (12:30 – 16:30):</b><br/>&nbsp;&nbsp;• Cologne Cathedral (Kölner Dom)<br/>&nbsp;&nbsp;• Hohenzollern Bridge & Lindt Museum<br/><b>Evening (17:00 – 21:00):</b><br/>&nbsp;&nbsp;• Cologne Cathedral Christmas Market<br/>&nbsp;&nbsp;• Alter Markt & Heinzels Wintermärchen"
    },
    # Day 6
    {
        "day": 6,
        "parts": [
            ("Morning (09:30 – 12:30)", [
                "Sunday Church Worship & Reflection (Cologne)",
                "Rhine River Promenade"
            ]),
            ("Afternoon (13:00 – 17:30)", [
                "Regional Train: Köln Hbf ➔ Düsseldorf Hbf (20 min)",
                "Düsseldorf 7 Themed Christmas Markets (Engelchen-Markt, Sternchen-Markt, Handwerker-Markt)"
            ]),
            ("Evening (17:30 – 20:30)", [
                "Königsallee Canal & Corneliusplatz Ice Rink",
                "Little Tokyo (Immermannstraße)",
                "Regional Train: Düsseldorf Hbf ➔ Köln Hbf (20 min)"
            ])
        ],
        "pdf_summary": "<b>Morning (09:30 – 12:30):</b><br/>&nbsp;&nbsp;• Sunday Church Worship (Cologne)<br/>&nbsp;&nbsp;• Rhine River Promenade<br/><b>Afternoon (13:00 – 17:30):</b><br/>&nbsp;&nbsp;• Regional Train to Düsseldorf (20 min)<br/>&nbsp;&nbsp;• Düsseldorf 7 Themed Christmas Markets<br/><b>Evening (17:30 – 20:30):</b><br/>&nbsp;&nbsp;• Königsallee & Little Tokyo<br/>&nbsp;&nbsp;• Train return to Cologne base"
    },
    # Day 7
    {
        "day": 7,
        "parts": [
            ("Morning (09:00 – 10:30)", [
                "DB ICE Train: Köln Hbf ➔ Frankfurt am Main Hbf (1h 05m)",
                "Hotel Cristall (Ottostrasse 3 · check-in / luggage drop)"
            ]),
            ("Afternoon (12:00 – 16:30)", [
                "Eiserner Steg (Iron Footbridge over Main River)",
                "Frankfurt Altstadt & Kaiserdom"
            ]),
            ("Evening (16:30 – 21:00)", [
                "Frankfurter Weihnachtsmarkt at Römerberg (Main square & 30m tree)",
                "Paulsplatz Christmas Market"
            ])
        ],
        "pdf_summary": "<b>Morning (09:00 – 10:30):</b><br/>&nbsp;&nbsp;• DB ICE: Köln ➔ Frankfurt Hbf (1h 05m)<br/>&nbsp;&nbsp;• Hotel Cristall check-in<br/><b>Afternoon (12:00 – 16:30):</b><br/>&nbsp;&nbsp;• Eiserner Steg & Frankfurt Altstadt<br/>&nbsp;&nbsp;• Kaiserdom Cathedral<br/><b>Evening (16:30 – 21:00):</b><br/>&nbsp;&nbsp;• Römerberg & Paulsplatz Christmas Markets"
    },
    # Day 8
    {
        "day": 8,
        "parts": [
            ("Morning & Midday (09:30 – 15:30)", [
                "Goethe House & Museum",
                "Museumsufer (Main River)",
                "Zeil shopping street"
            ]),
            ("Late Afternoon & Evening (16:45 – 20:30)", [
                "S-Bahn S5: Frankfurt Hbf ➔ Friedrichsdorf (26 min)",
                "Frankfurt Germany Temple (06:00 PM Endowment Session · Arrive 05:15 PM)"
            ]),
            ("Night (20:30 – 22:00)", [
                "S-Bahn S5: Friedrichsdorf ➔ Frankfurt Hbf (26 min)",
                "Hotel Cristall"
            ])
        ],
        "pdf_summary": "<b>Morning & Midday (09:30 – 15:30):</b><br/>&nbsp;&nbsp;• Goethe House & Museumsufer<br/>&nbsp;&nbsp;• Zeil shopping street<br/><b>Evening (16:45 – 22:00):</b><br/>&nbsp;&nbsp;• S-Bahn S5 to Friedrichsdorf (26 min)<br/>&nbsp;&nbsp;• Frankfurt Germany Temple (06:00 PM Session)<br/>&nbsp;&nbsp;• Return S-Bahn to Frankfurt Hbf"
    },
    # Day 9
    {
        "day": 9,
        "parts": [
            ("Early Morning (04:35 – 08:35)", [
                "FlixBus Route N13: Frankfurt Hbf ➔ Strasbourg Place de l'Étoile (Departs 04:35, Arrives 08:35 · Booking Ref: 339 153 0857 · Seats 3A & 3B)",
                "Strasbourg Tram Line D to Kehl base (luggage drop)"
            ]),
            ("Morning & Midday (09:30 – 14:00)", [
                "Place Kléber (30m Great Christmas Tree / Grand Sapin)",
                "Christkindelsmärik (Place Broglie)"
            ]),
            ("Afternoon & Evening (14:30 – 20:30)", [
                "Petite France (Canals & Ponts Couverts)",
                "Strasbourg Cathedral (Cathédrale Notre-Dame)"
            ])
        ],
        "pdf_summary": "<b>Early Morning (04:35 – 08:35):</b><br/>&nbsp;&nbsp;• FlixBus N13: Frankfurt ➔ Strasbourg (Ref: 339 153 0857)<br/>&nbsp;&nbsp;• Tram Line D to Kehl base<br/><b>Daytime & Evening (09:30 – 20:30):</b><br/>&nbsp;&nbsp;• Place Kléber (30m Great Tree)<br/>&nbsp;&nbsp;• Christkindelsmärik (Place Broglie)<br/>&nbsp;&nbsp;• Petite France & Strasbourg Cathedral"
    },
    # Day 10
    {
        "day": 10,
        "parts": [
            ("Morning (09:30 – 12:30)", [
                "SNCF TER Train: Strasbourg ➔ Colmar (30 min)",
                "Petite Venise & Quai de la Poissonnerie"
            ]),
            ("Afternoon (13:00 – 16:30)", [
                "Maison Pfister (Rue des Marchands)",
                "Colmar Old Town Christmas Markets (Closes 17:00 Christmas Eve)"
            ]),
            ("Evening (17:00 – 20:30)", [
                "SNCF TER Train: Colmar ➔ Strasbourg (30 min)",
                "Christmas Eve dinner & early rest for 04:05 AM coach"
            ])
        ],
        "pdf_summary": "<b>Morning (09:30 – 12:30):</b><br/>&nbsp;&nbsp;• SNCF TER: Strasbourg ➔ Colmar (30 min)<br/>&nbsp;&nbsp;• Petite Venise & Quai de la Poissonnerie<br/><b>Afternoon (13:00 – 16:30):</b><br/>&nbsp;&nbsp;• Maison Pfister & Colmar Christmas Markets<br/><b>Evening (17:00 – 20:30):</b><br/>&nbsp;&nbsp;• Train return to Strasbourg<br/>&nbsp;&nbsp;• Christmas Eve dinner"
    },
    # Day 11
    {
        "day": 11,
        "parts": [
            ("Christmas Dawn (04:05 – 07:10)", [
                "FlixBus Route N846: Strasbourg Place de l'Étoile ➔ Luzern Landenberg (Departs 04:05, Arrives 07:10 · Booking Ref: 339 152 8020 · Seats 11C & 11D)"
            ]),
            ("Morning (07:30 – 11:30)", [
                "Kapellbrücke (Chapel Bridge & Water Tower)",
                "Lion Monument (Löwendenkmal)",
                "Lake Lucerne Promenade"
            ]),
            ("Afternoon (12:05 – 14:00)", [
                "Zentralbahn (Luzern-Interlaken Express) over Brünig Pass to Interlaken Ost",
                "Swiss Alps Base Hotel (check-in)"
            ]),
            ("Evening (16:30 – 20:30)", [
                "Höhematte Park (Jungfrau view)",
                "Christmas Fondue Dinner (Interlaken)"
            ])
        ],
        "pdf_summary": "<b>Christmas Dawn (04:05 – 07:10):</b><br/>&nbsp;&nbsp;• FlixBus N846: Strasbourg ➔ Luzern (Ref: 339 152 8020)<br/><b>Morning (07:30 – 11:30):</b><br/>&nbsp;&nbsp;• Kapellbrücke & Lion Monument<br/>&nbsp;&nbsp;• Lake Lucerne Promenade<br/><b>Afternoon & Evening (12:05 – 20:30):</b><br/>&nbsp;&nbsp;• Zentralbahn Express over Brünig Pass to Interlaken<br/>&nbsp;&nbsp;• Christmas Fondue Dinner"
    },
    # Day 12
    {
        "day": 12,
        "parts": [
            ("Morning (09:00 – 12:30)", [
                "BOB Train: Interlaken Ost ➔ Lauterbrunnen (20 min)",
                "Lauterbrunnen Valley & Staubbach Falls"
            ]),
            ("Afternoon (13:00 – 16:30)", [
                "BLM Cable Car: Lauterbrunnen ➔ Grütschalp (5 min)",
                "Mountain Railway: Grütschalp ➔ Mürren (15 min)",
                "Mürren car-free village (Eiger, Mönch & Jungfrau viewpoints)"
            ]),
            ("Evening (17:00 – 20:00)", [
                "BLM Cable Car + BOB Train back to Interlaken Ost",
                "Interlaken Base"
            ])
        ],
        "pdf_summary": "<b>Morning (09:00 – 12:30):</b><br/>&nbsp;&nbsp;• BOB Train: Interlaken ➔ Lauterbrunnen (20 min)<br/>&nbsp;&nbsp;• Lauterbrunnen Valley & Staubbach Falls<br/><b>Afternoon (13:00 – 16:30):</b><br/>&nbsp;&nbsp;• BLM Cable Car & Rail to Mürren (1,650m)<br/>&nbsp;&nbsp;• Mürren alpine viewpoints<br/><b>Evening (17:00 – 20:00):</b><br/>&nbsp;&nbsp;• Return train to Interlaken Base"
    },
    # Day 13
    {
        "day": 13,
        "parts": [
            ("Morning (09:30 – 12:30)", [
                "PostBus 103: Interlaken Ost ➔ Iseltwald (20 min)",
                "Iseltwald Landing Stage (Lake Brienz CLOY Pier)"
            ]),
            ("Midday (13:15 – 15:30)", [
                "PostBus 103 back to Interlaken + STI Bus 21/25 to Sigriswil",
                "Sigriswil Panoramic Suspension Bridge"
            ]),
            ("Late Afternoon & Twilight (16:15 – 19:15)", [
                "SBB Train + Bus 230 (via Spiez & Frutigen) to Blausee",
                "Blausee Nature Park (Path of the 1,000 Lights lantern walk)",
                "Return Bus 230 + SBB Train to Interlaken Base"
            ])
        ],
        "pdf_summary": "<b>Morning (09:30 – 12:30):</b><br/>&nbsp;&nbsp;• PostBus 103 to Iseltwald (Lake Brienz CLOY Pier)<br/><b>Midday (13:15 – 15:30):</b><br/>&nbsp;&nbsp;• STI Bus 21/25 to Sigriswil Suspension Bridge<br/><b>Evening (16:15 – 19:15):</b><br/>&nbsp;&nbsp;• SBB Train + Bus 230 to Blausee Nature Park<br/>&nbsp;&nbsp;• Path of the 1,000 Lights lantern walk"
    },
    # Day 14
    {
        "day": 14,
        "parts": [
            ("Morning (08:30 – 12:00)", [
                "BOB Train: Interlaken Ost ➔ Grindelwald (35 min)",
                "Grindelwald First Gondola to 2,168m",
                "First Cliff Walk by Tissot (Suspension bridge & cliff walkway)"
            ]),
            ("Afternoon (13:00 – 17:00)", [
                "SBB InterCity Train: Interlaken Ost ➔ Zurich HB (2h · Luggage storage at HB)",
                "S-Bahn S9: Zurich HB ➔ Neuhausen Rheinfall (48 min)",
                "Rhine Falls / Rheinfall (Northern bank promenade & Schlössli Wörth)"
            ]),
            ("Evening & Night (17:30 – 21:00)", [
                "S-Bahn S9 back to Zurich HB (48 min)",
                "Lake Zurich Promenade, Lindenhof Hill & Bahnhofstrasse",
                "21:00 FlixBus Overnight Sleeper Coach: Zurich Bus Station ➔ Paris Bercy Seine (Arrives 06:40+1d)"
            ])
        ],
        "pdf_summary": "<b>Morning (08:30 – 12:00):</b><br/>&nbsp;&nbsp;• Grindelwald First Gondola & First Cliff Walk<br/><b>Afternoon (13:00 – 17:00):</b><br/>&nbsp;&nbsp;• Train to Zurich HB + S-Bahn S9 to Rhine Falls<br/>&nbsp;&nbsp;• Rhine Falls (Rheinfall northern bank promenade)<br/><b>Evening & Night (17:30 – 21:00):</b><br/>&nbsp;&nbsp;• Lake Zurich Promenade & Bahnhofstrasse<br/>&nbsp;&nbsp;• 21:00 FlixBus Sleeper Coach to Paris"
    },
    # Day 15
    {
        "day": 15,
        "parts": [
            ("Morning (06:40 – 11:30)", [
                "Arrive Paris Bercy Seine (06:40 AM)",
                "Metro Line 14 / Tram T3a to Break & Home Paris Italie Porte de Choisy (luggage drop)"
            ]),
            ("Afternoon (13:15 – 17:00)", [
                "RER Line C + Phébus Bus to Le Chesnay",
                "Paris France Temple (02:30 PM Endowment Session · Arrive 02:00 PM)"
            ]),
            ("Evening (17:30 – 21:00)", [
                "Metro to Montmartre",
                "Sacré-Cœur Basilica & Place du Tertre",
                "Latin Quarter bistro dinner"
            ])
        ],
        "pdf_summary": "<b>Morning (06:40 – 11:30):</b><br/>&nbsp;&nbsp;• Arrive Paris Bercy (06:40 AM) · Hotel luggage drop<br/><b>Afternoon (13:15 – 17:00):</b><br/>&nbsp;&nbsp;• RER C to Le Chesnay<br/>&nbsp;&nbsp;• Paris France Temple (02:30 PM Session)<br/><b>Evening (17:30 – 21:00):</b><br/>&nbsp;&nbsp;• Montmartre (Sacré-Cœur Basilica) & Latin Quarter"
    },
    # Day 16
    {
        "day": 16,
        "parts": [
            ("Morning (09:00 – 13:00)", [
                "Musée du Louvre (Mona Lisa, Venus de Milo, Winged Victory)"
            ]),
            ("Afternoon (13:30 – 16:30)", [
                "Tuileries Garden & Place de la Concorde",
                "Galeries Lafayette Haussmann (Christmas tree & glass dome)"
            ]),
            ("Evening (17:00 – 21:00)", [
                "Avenue des Champs-Élysées",
                "Arc de Triomphe (Rooftop panoramic terrace)"
            ])
        ],
        "pdf_summary": "<b>Morning (09:00 – 13:00):</b><br/>&nbsp;&nbsp;• Musée du Louvre (Mona Lisa & masterpieces)<br/><b>Afternoon (13:30 – 16:30):</b><br/>&nbsp;&nbsp;• Tuileries Garden & Place de la Concorde<br/>&nbsp;&nbsp;• Galeries Lafayette Haussmann dome<br/><b>Evening (17:00 – 21:00):</b><br/>&nbsp;&nbsp;• Champs-Élysées & Arc de Triomphe rooftop"
    },
    # Day 17
    {
        "day": 17,
        "parts": [
            ("Morning (09:30 – 13:00)", [
                "Musée d'Orsay (Impressionist masterpieces)"
            ]),
            ("Afternoon (14:00 – 17:00)", [
                "Île de la Cité & Notre-Dame Cathedral exterior",
                "Shakespeare and Company bookstore"
            ]),
            ("Evening & Midnight (20:00 – 01:00)", [
                "Trocadéro (Eiffel Tower light show)",
                "Champs-Élysées & Arc de Triomphe (Official NYE countdown · Metro runs free all night)"
            ])
        ],
        "pdf_summary": "<b>Morning (09:30 – 13:00):</b><br/>&nbsp;&nbsp;• Musée d'Orsay (Impressionist art)<br/><b>Afternoon (14:00 – 17:00):</b><br/>&nbsp;&nbsp;• Notre-Dame Cathedral exterior & Île de la Cité<br/><b>Evening & Midnight (20:00 – 01:00):</b><br/>&nbsp;&nbsp;• Trocadéro (Eiffel Tower sparkle)<br/>&nbsp;&nbsp;• NYE Countdown on Champs-Élysées (Free Metro)"
    },
    # Day 18
    {
        "day": 18,
        "parts": [
            ("Morning (10:30 – 13:00)", [
                "Jardin du Luxembourg (Gardens & Medici Fountain)"
            ]),
            ("Afternoon (13:30 – 16:30)", [
                "Le Marais historic district",
                "Place des Vosges"
            ]),
            ("Evening (17:30 – 20:30)", [
                "Latin Quarter & Saint-Germain-des-Prés",
                "Seine riverbanks stroll"
            ])
        ],
        "pdf_summary": "<b>Morning (10:30 – 13:00):</b><br/>&nbsp;&nbsp;• Jardin du Luxembourg & Medici Fountain<br/><b>Afternoon (13:30 – 16:30):</b><br/>&nbsp;&nbsp;• Le Marais & Place des Vosges<br/><b>Evening (17:30 – 20:30):</b><br/>&nbsp;&nbsp;• Latin Quarter & Saint-Germain-des-Prés"
    },
    # Day 19
    {
        "day": 19,
        "parts": [
            ("Morning (09:00 – 13:30)", [
                "RER Line C: Paris ➔ Versailles Château Rive Gauche (40 min)",
                "Palace of Versailles (Hall of Mirrors & State Apartments)"
            ]),
            ("Afternoon (14:00 – 16:30)", [
                "Phébus Bus 2: Versailles Palace ➔ Le Chesnay (5 min)",
                "Paris France LDS Temple grounds & reflection gardens"
            ]),
            ("Evening (17:30 – 21:00)", [
                "RER Line C return to Paris",
                "Celebration dinner in central Paris"
            ])
        ],
        "pdf_summary": "<b>Morning (09:00 – 13:30):</b><br/>&nbsp;&nbsp;• RER C: Paris ➔ Versailles (40 min)<br/>&nbsp;&nbsp;• Palace of Versailles (Hall of Mirrors)<br/><b>Afternoon (14:00 – 16:30):</b><br/>&nbsp;&nbsp;• Phébus Bus 2 to Le Chesnay<br/>&nbsp;&nbsp;• Paris France LDS Temple grounds<br/><b>Evening (17:30 – 21:00):</b><br/>&nbsp;&nbsp;• RER C return to Paris"
    },
    # Day 20
    {
        "day": 20,
        "parts": [
            ("Morning (10:00 – 13:00)", [
                "Boulevard Saint-Michel & Latin Quarter",
                "Pont Alexandre III & Grand Palais view"
            ]),
            ("Afternoon (14:00 – 18:00)", [
                "Break & Home Paris Italie (pack bags & check-out)",
                "Seine riverbank café rest"
            ]),
            ("Night (21:30 – 23:00)", [
                "Transfer to Paris Bercy Seine terminal (210 Quai de Bercy)",
                "FlixBus Route 1700 (Departs 23:00 · Booking Ref: 338 920 9866 · direct overnight coach to London Victoria)",
                "Eurotunnel crossing back into UK"
            ])
        ],
        "pdf_summary": "<b>Daytime (10:00 – 18:00):</b><br/>&nbsp;&nbsp;• Pont Alexandre III & Seine stroll<br/>&nbsp;&nbsp;• Hotel pack bags & check-out<br/><b>Night (21:30 – 23:00):</b><br/>&nbsp;&nbsp;• Transfer to Paris Bercy Seine<br/>&nbsp;&nbsp;• FlixBus 1700 (Departs 23:00 · Ref: 338 920 9866)<br/>&nbsp;&nbsp;• Eurotunnel crossing into UK"
    },
    # Day 21
    {
        "day": 21,
        "parts": [
            ("Morning (07:25 – 10:30)", [
                "Arrive London Victoria Coach Station (07:25 AM)",
                "Breakfast at Victoria"
            ]),
            ("Afternoon (11:30 – 14:30)", [
                "South Western Railway: London Waterloo ➔ Southampton Central (1h 15m)",
                "Return to UK family base (Southampton)"
            ]),
            ("Evening", [
                "Rest & recovery"
            ])
        ],
        "pdf_summary": "<b>Morning (07:25 – 10:30):</b><br/>&nbsp;&nbsp;• Arrive London Victoria (07:25 AM)<br/>&nbsp;&nbsp;• Breakfast at Victoria<br/><b>Afternoon (11:30 – 14:30):</b><br/>&nbsp;&nbsp;• South Western Railway to Southampton (1h 15m)<br/>&nbsp;&nbsp;• Return to Southampton family base"
    }
]

def make_html_activities(day_entry, item_class):
    out = []
    for part, items in day_entry["parts"]:
        li_items = "".join([f"<li>{item}</li>" for item in items])
        out.append(f'<div class="{item_class}">• <b>{part}:</b><ul class="activity-sublist">{li_items}</ul></div>')
    return "\n        ".join(out)

def make_js_activities(day_entry):
    out = []
    for part, items in day_entry["parts"]:
        li_items = "".join([f"<li>{item}</li>" for item in items])
        out.append(f'      "• <b>{part}:</b><ul class=\\"activity-sublist\\">{li_items}</ul>"')
    return ",\n".join(out)

# 1. Update css/style.css
css_path = os.path.join(BASE_DIR, "css/style.css")
with open(css_path, "r", encoding="utf-8") as f:
    css_content = f.read()

sublist_css = """
/* Clean Activity Sublist & Timetable Partition Styling */
.activity-sublist {
  margin: 4px 0 6px 18px;
  padding: 0;
  list-style-type: disc;
}

.activity-sublist li {
  font-size: 12px;
  line-height: 1.5;
  color: #334155;
  margin-bottom: 2px;
}

.card-activity-item .activity-sublist li {
  font-size: 12.5px;
}

.activity-sublist li b,
.activity-sublist li strong {
  color: #0f172a;
  font-weight: 600;
}
"""

if ".activity-sublist" not in css_content:
    css_content += sublist_css
    with open(css_path, "w", encoding="utf-8") as f:
        f.write(css_content)
    print("Updated css/style.css with .activity-sublist styles")

# 2. Update js/app.js
app_path = os.path.join(BASE_DIR, "js/app.js")
with open(app_path, "r", encoding="utf-8") as f:
    app_content = f.read()

for day_entry in DAYS_DATA:
    d_num = day_entry["day"]
    # Find the day object in itineraryData
    # Regex to match "day": "Day X", ... "activities": [ ... ],
    day_marker = f'"day": "Day {d_num}"'
    start_pos = app_content.find(day_marker)
    if start_pos == -1:
        print(f"Error: Could not find Day {d_num} in js/app.js")
        continue
    
    # Find "activities": [
    act_marker = '"activities": ['
    act_pos = app_content.find(act_marker, start_pos)
    end_act_pos = app_content.find('],', act_pos)
    if act_pos == -1 or end_act_pos == -1:
        print(f"Error: Could not find activities bounds for Day {d_num} in js/app.js")
        continue
    
    new_js_acts = '"activities": [\n' + make_js_activities(day_entry) + '\n    ]'
    old_act_str = app_content[act_pos:end_act_pos + 1]
    app_content = app_content[:act_pos] + new_js_acts + app_content[end_act_pos + 1:]

with open(app_path, "w", encoding="utf-8") as f:
    f.write(app_content)
print("Updated js/app.js itineraryData with structured activities")

# 3. Update index.html (Master Table and Day Cards)
index_path = os.path.join(BASE_DIR, "index.html")
with open(index_path, "r", encoding="utf-8") as f:
    html_content = f.read()

# Replace in Master Table
for day_entry in DAYS_DATA:
    d_num = day_entry["day"]
    # Find <span class="table-day-badge">Day X</span>
    badge_str = f'<span class="table-day-badge">Day {d_num}</span>'
    b_pos = html_content.find(badge_str)
    if b_pos == -1:
        print(f"Error: Could not find table badge for Day {d_num}")
        continue
    
    act_start = html_content.find('<div class="table-activities-list">', b_pos)
    act_end = html_content.find('</div>\n                <div class="table-admission-item">', act_start)
    if act_start == -1 or act_end == -1:
        # Try alternate closing
        act_end = html_content.find('</div>\n                <div class="table-opening-item">', act_start)
    
    if act_start != -1 and act_end != -1:
        new_table_acts = '<div class="table-activities-list">\n        ' + make_html_activities(day_entry, "table-activity-item") + '\n      '
        html_content = html_content[:act_start] + new_table_acts + html_content[act_end:]
    else:
        print(f"Warning: could not locate table activities bounds for Day {d_num}")

# Replace in Day Cards
for day_entry in DAYS_DATA:
    d_num = day_entry["day"]
    badge_str = f'<span class="card-day-badge">Day {d_num}</span>'
    b_pos = html_content.find(badge_str)
    if b_pos == -1:
        print(f"Error: Could not find card badge for Day {d_num}")
        continue
    
    act_start = html_content.find('<div class="card-activities-list">', b_pos)
    act_end = html_content.find('</div>\n            <div class="card-admission-item">', act_start)
    if act_start == -1 or act_end == -1:
        act_end = html_content.find('</div>\n            <div class="card-opening-item">', act_start)
        
    if act_start != -1 and act_end != -1:
        new_card_acts = '<div class="card-activities-list">\n        ' + make_html_activities(day_entry, "card-activity-item") + '\n      '
        html_content = html_content[:act_start] + new_card_acts + html_content[act_end:]
    else:
        print(f"Warning: could not locate card activities bounds for Day {d_num}")

with open(index_path, "w", encoding="utf-8") as f:
    f.write(html_content)
print("Updated index.html table rows and day cards with structured activities")

# 4. Update generate_pdf.py
pdf_script_path = os.path.join(BASE_DIR, "generate_pdf.py")
with open(pdf_script_path, "r", encoding="utf-8") as f:
    pdf_content = f.read()

# Build updated days list in generate_pdf.py
# Let's see the days array pattern
days_start = pdf_content.find("    days = [")
days_end = pdf_content.find("    ]", days_start)

if days_start != -1 and days_end != -1:
    # We can reconstruct days using the pdf_summary
    pdf_days_rows = [
        ("Day 1<br/>15 Dec 2026", "London ➔<br/>Amsterdam Central", DAYS_DATA[0]["pdf_summary"], "Transit: FlixBus N824<br/>(Seats 11C & 11D Paid)"),
        ("Day 2<br/>16 Dec 2026", "Amsterdam<br/>(Netherlands)", DAYS_DATA[1]["pdf_summary"], "Amsterdam Hostel Leidseplein<br/>(Night 1 of 2)"),
        ("Day 3<br/>17 Dec 2026", "Amsterdam &<br/>Zaanse Schans (NL)", DAYS_DATA[2]["pdf_summary"], "Amsterdam Hostel Leidseplein<br/>(Night 2 of 2)"),
        ("Day 4<br/>18 Dec 2026", "The Hague (NL) &<br/>Amsterdam", DAYS_DATA[3]["pdf_summary"], "Amsterdam Base<br/>(Night 3 of 3)"),
        ("Day 5<br/>19 Dec 2026", "Amsterdam ➔<br/>Cologne (DE)", DAYS_DATA[4]["pdf_summary"], "Cologne Base<br/>(Night 1 of 2)"),
        ("Day 6<br/>20 Dec 2026", "Cologne &<br/>Düsseldorf (DE)", DAYS_DATA[5]["pdf_summary"], "Cologne Base<br/>(Night 2 of 2)"),
        ("Day 7<br/>21 Dec 2026", "Cologne ➔<br/>Frankfurt am Main", DAYS_DATA[6]["pdf_summary"], "Hotel Cristall<br/>(Night 1 of 2, Frankfurt)"),
        ("Day 8<br/>22 Dec 2026", "Frankfurt am Main<br/>(Germany)", DAYS_DATA[7]["pdf_summary"], "Hotel Cristall<br/>(Night 2 of 2, Frankfurt)"),
        ("Day 9<br/>23 Dec 2026", "Frankfurt ➔<br/>Strasbourg (FR)", DAYS_DATA[8]["pdf_summary"], "B&B Hotel Kehl<br/>(Base for Alsace · Night 1 of 2)"),
        ("Day 10<br/>24 Dec 2026", "Colmar & Alsace<br/>(France)", DAYS_DATA[9]["pdf_summary"], "B&B Hotel Kehl<br/>(Base for Alsace · Night 2 of 2)"),
        ("Day 11<br/>25 Dec 2026", "Strasbourg ➔<br/>Luzern ➔ Interlaken", DAYS_DATA[10]["pdf_summary"], "Swiss Alps Base<br/>(Central Interlaken · Night 1 of 3)"),
        ("Day 12<br/>26 Dec 2026", "Lauterbrunnen &<br/>Mürren (CH)", DAYS_DATA[11]["pdf_summary"], "Swiss Alps Base<br/>(Central Interlaken · Night 2 of 3)"),
        ("Day 13<br/>27 Dec 2026", "Lake Brienz, Sigriswil<br/>& Blausee (CH)", DAYS_DATA[12]["pdf_summary"], "Swiss Alps Base<br/>(Central Interlaken · Night 3 of 3)"),
        ("Day 14<br/>28 Dec 2026", "Grindelwald, Rheinfall<br/>& Zurich ➔ Paris", DAYS_DATA[13]["pdf_summary"], "Transit: FlixBus Overnight<br/>(Zurich to Paris Bercy)"),
        ("Day 15<br/>29 Dec 2026", "Paris<br/>(France - Main)", DAYS_DATA[14]["pdf_summary"], "Break & Home Paris Italie<br/>(Porte de Choisy, Paris)"),
        ("Day 16<br/>30 Dec 2026", "Paris<br/>(France - Main)", DAYS_DATA[15]["pdf_summary"], "Break & Home Paris Italie<br/>(Porte de Choisy, Paris)"),
        ("Day 17<br/>31 Dec 2026", "Paris (NYE)<br/>(France - Main)", DAYS_DATA[16]["pdf_summary"], "Break & Home Paris Italie<br/>(Porte de Choisy, Paris)"),
        ("Day 18<br/>01 Jan 2027", "Paris<br/>(France - Main)", DAYS_DATA[17]["pdf_summary"], "Break & Home Paris Italie<br/>(Porte de Choisy, Paris)"),
        ("Day 19<br/>02 Jan 2027", "Versailles<br/>(France - Main)", DAYS_DATA[18]["pdf_summary"], "Break & Home Paris Italie<br/>(Porte de Choisy, Paris)"),
        ("Day 20<br/>03 Jan 2027", "Paris ➔ London<br/>(Exit Schengen)", DAYS_DATA[19]["pdf_summary"], "Transit: FlixBus Route 1700<br/>(AUD $169.98 Paid)"),
        ("Day 21<br/>04 Jan 2027", "London<br/>(United Kingdom)", DAYS_DATA[20]["pdf_summary"], "UK Residence<br/>(Southampton, UK)")
    ]
    
    formatted_days = "    days = [\n"
    for d, loc, act, acc in pdf_days_rows:
        formatted_days += f'        ("{d}", "{loc}", "{act}", "{acc}"),\n'
    formatted_days += "    ]"
    
    pdf_content = pdf_content[:days_start] + formatted_days + pdf_content[days_end + 5:]
    with open(pdf_script_path, "w", encoding="utf-8") as f:
        f.write(pdf_content)
    print("Updated generate_pdf.py with clean structured activities")

print("All file updates completed successfully!")
