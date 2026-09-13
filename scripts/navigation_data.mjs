/**
 * navigation_data.mjs
 * Complete spot-by-spot navigation guides for all 21 days of the Schengen trip.
 */

export const NAVIGATION_DATA = {
  "Day 1": [
    {
      spot: "London Victoria Coach Station (Departure Check-in)",
      badge: "🚇 Tube + 🚶 5m",
      transit: "London Underground Victoria, District, or Circle Lines to Victoria Station",
      directions: "Exit towards Terminus Place / Buckingham Palace Road. Walk 5 mins (300m) south along Buckingham Palace Rd to Victoria Coach Station (164 Buckingham Palace Rd).",
      tip: "Arrive by 21:00 (1h before 22:00 departure). Check overhead digital board for FlixBus N824 boarding gate. Keep passports ready for luggage tagging."
    },
    {
      spot: "Dover Port ➔ Calais Crossing",
      badge: "🛂 French Border Control",
      transit: "FlixBus Route N824 across English Channel via Eurotunnel / LeShuttle ferry",
      directions: "Coach proceeds down M20 to Dover Eastern Docks. All passengers disembark for juxtaposed French border police (PAF) inspection.",
      tip: "Your passport will be stamped into the Schengen area here. Re-board coach for overnight sleep through France and Belgium."
    }
  ],
  "Day 2": [
    {
      spot: "Amsterdam Centraal ➔ Hostel Leidseplein",
      badge: "🚇 GVB Tram 2/12",
      transit: "GVB Tram Line 2 (dir. Nieuw Sloten) or Line 12 (dir. Amstelstation) from Centraal Station",
      directions: "Walk out front station plaza (Stationsplein); board Tram 2 or 12 to stop Leidseplein (6 stops, ~13 mins). Walk 150m down Korte Leidsedwarsstraat to #79.",
      tip: "Tap in & out with bank card or GVB Day Pass (€9.00). Leave bags at hostel reception; remember €137.69 cash is required at check-in!"
    },
    {
      spot: "Leidseplein ➔ UNESCO Canal Ring & Dam Square",
      badge: "🚶 Scenic Walk (15m)",
      transit: "Walking or GVB Tram 2/12 (4 stops to Dam)",
      directions: "Walk north along Leidsestraat across concentric canals (Herengracht, Keizersgracht, Prinsengracht) into Spuistraat and Dam Square.",
      tip: "Dam Square and Royal Palace exterior are pedestrian zones. Keep watch for cyclists—never stand or walk in the red-paved bike lanes!"
    },
    {
      spot: "Dam Square ➔ Begijnhof Courtyard",
      badge: "🚶 Walk 3m (250m)",
      transit: "Short walking connection south along Kalverstraat",
      directions: "Walk south from Dam Square to Spui square. Look for the small arched wooden door next to the American Book Center into the secluded medieval courtyard.",
      tip: "Open 09:00–17:00 (Free entry). This is an active quiet residential sanctuary—please maintain silence and respect residents."
    },
    {
      spot: "Canal Ring ➔ Amsterdam Light Festival & Leidseplein",
      badge: "✨ Evening Light Walk",
      transit: "Pedestrian walking route along Herengracht & Keizersgracht",
      directions: "Head east to Herengracht and the Amstel River (Magere Brug / Skinny Bridge). Light art installations illuminate the canals from 17:00.",
      tip: "Walk the 6.5 km festival route along the canal bridges. Finish with dinner around lively Leidseplein."
    }
  ],
  "Day 3": [
    {
      spot: "Leidseplein ➔ Zaanse Schans Historic Windmills",
      badge: "🚆 NS Sprinter (17m)",
      transit: "GVB Tram 2/12 to Amsterdam Centraal + NS Sprinter Train towards Uitgeest",
      directions: "From Centraal Station Platform 7/8, take NS Sprinter to Zaandijk Zaanse Schans (17 min). Follow the signposted trail (12–15 min walk) across Julianabrug drawbridge.",
      tip: "Free entrance to the village and Catharina Hoeve Cheese Farm (free tastings!). Windmill interiors charge €5–€7 entry."
    },
    {
      spot: "Zaanse Schans ➔ Rijksmuseum & Museumplein",
      badge: "🚇 Metro Line 52",
      transit: "NS Sprinter back to Centraal + Metro 52 (North-South line, dir. Zuid)",
      directions: "Ride Metro 52 two stops to Vijzelgracht (4 min). Walk 5 mins west through the famous Rijksmuseum bicycle underpass onto Museumplein.",
      tip: "Book Rijksmuseum timed-entry slot online in advance! Coat check and luggage lockers are free inside with museum ticket barcode."
    },
    {
      spot: "Museumplein ➔ Ice Village Christmas Market",
      badge: "⛸️ Adjacent Walk",
      transit: "Immediate walking access on Museumplein lawn",
      directions: "Step directly outside the Rijksmuseum rear garden onto the festive ice skating plaza facing the iconic pond.",
      tip: "Open 12:00–21:00. Grab warm Dutch poffertjes (mini pancakes with melted butter) or warm spiced cider by the chalets."
    },
    {
      spot: "Museumplein ➔ UNESCO Canal Cruise & The Jordaan",
      badge: "🛥️ 75m Cruise",
      transit: "10-min walk north to Stadhouderskade / Leidsegracht cruise pier",
      directions: "Board 75-min UNESCO canal cruise (Lovers or Stromma). After cruise, walk 5 mins northwest along Prinsengracht into the Jordaan.",
      tip: "Stroll along Brouwersgracht and Bloemgracht for the most picturesque, serene winter canal photography in Amsterdam."
    }
  ],
  "Day 4": [
    {
      spot: "Amsterdam Centraal ➔ The Hague LDS Temple (Zoetermeer)",
      badge: "🚆 NS Train + 🚇 Tram",
      transit: "NS Intercity Train to Den Haag Centraal (50m) + HTM RandstadRail Tram 3",
      directions: "From Den Haag Centraal, take RandstadRail Tram 3 (dir. Zoetermeer Centrum) to stop Voorweg Laag (14m). Walk 6 mins (500m) along Buytenwegh to Tempelstrasse 2.",
      tip: "Arrive by 09:10 AM for the 09:30 AM proxy endowment session. Temple grounds feature peaceful reflection paths."
    },
    {
      spot: "The Hague Temple ➔ Peace Palace (Vredespaleis)",
      badge: "🚇 Tram 3 + 🚊 Tram 16",
      transit: "RandstadRail Tram 3 back to Den Haag Centraal + HTM Tram 16 or Tram 1",
      directions: "Board HTM Tram 16 (dir. Statenkwartier) from station upper tram deck to stop Vredespaleis (10 min).",
      tip: "Alight right in front of the ornate wrought-iron gates. Visit the free Visitor Centre (interactive exhibits on international law and UN ICJ)."
    },
    {
      spot: "Peace Palace ➔ International Criminal Court (ICC)",
      badge: "🚌 HTM Bus 24",
      transit: "HTM Bus 24 (dir. Kijkduin) or 18-min walk through Scheveningen woods",
      directions: "Board Bus 24 to stop World Forum (6 min) or walk north to Oude Waalsdorperweg 10.",
      tip: "Marvel at the world judicial headquarters' striking modern glass-and-steel architecture."
    },
    {
      spot: "The Hague ➔ Amsterdam Centraal Return",
      badge: "🚆 NS Intercity (50m)",
      transit: "Bus 24 back to Den Haag Centraal + NS Intercity to Amsterdam Centraal",
      directions: "Frequent fast trains run every 15 mins. Tram 2 or 12 from Centraal back to Leidseplein to pack bags for tomorrow's DB ICE train to Germany.",
      tip: "Ensure all luggage is organized for smooth morning departure."
    }
  ],
  "Day 5": [
    {
      spot: "Amsterdam Centraal ➔ Köln Hauptbahnhof (Germany)",
      badge: "🚄 DB ICE 123 (2h 38m)",
      transit: "Deutsche Bahn High-Speed ICE 123 (Direct, 08:38 ➔ 11:15)",
      directions: "Board from Amsterdam Centraal. International high-speed rail direct to Köln Hbf across the German border.",
      tip: "Carriage numbers are shown on overhead platform screens (Wagenstandsanzeiger). Keep passports accessible for spot DB police checks."
    },
    {
      spot: "Köln Hbf ➔ Hotel Innception (Check-in & Bag Drop)",
      badge: "🚇 U-Bahn 5 (4m)",
      transit: "Köln U-Bahn Line 5 (dir. Butzweilerhof) 2 stops to Friesenplatz",
      directions: "Take Friesenplatz Hohenzollernring exit. Walk 150m north to Hohenzollernring 86.",
      tip: "Drop bags at reception or check in. Friesenplatz is a vibrant central hub with bakeries and cafes."
    },
    {
      spot: "Hotel ➔ Cologne Cathedral (Kölner Dom) & Hohenzollern Bridge",
      badge: "🚶 Walk 12m or U-Bahn",
      transit: "Walk down Christophstraße / Komödienstraße or U-Bahn 5 back to Dom/Hbf",
      directions: "Walk out onto Roncalliplatz; Cathedral twin spires tower directly above. Walk 50m east behind the choir onto Hohenzollernbrücke.",
      tip: "Free entry to the Cathedral nave! Walk the pedestrian railway bridge to see 500,000+ engraved love padlocks overlooking the Rhine."
    },
    {
      spot: "Hohenzollern Bridge ➔ Lindt Chocolate Museum & Christmas Markets",
      badge: "🍫 Rhine Walk (15m)",
      transit: "Walk south along Rheingarten promenade or ride mini-train Bimmelbahn",
      directions: "Follow the Rhine riverbank 1.2 km south into Rheinauhafen glass peninsula. Visit Chocolate Museum and sample the warm golden fountain.",
      tip: "Afterward, walk into Alter Markt (Heinzels Wintermärchen ice rink) and Roncalliplatz market right beneath the lit Cathedral spires."
    }
  ],
  "Day 6": [
    {
      spot: "Morning Church Worship & Rhine River Walk (Cologne)",
      badge: "⛪ Sunday Worship",
      transit: "Walk or U-Bahn to local Cologne LDS chapel for Sunday meetings",
      directions: "Enjoy Sunday spiritual rest and fellowship followed by a crisp morning walk along the Rhine riverbank promenade.",
      tip: "Recharge before taking the short regional train trip to Düsseldorf."
    },
    {
      spot: "Köln Hbf ➔ Düsseldorf Hauptbahnhof",
      badge: "🚆 RE 1 / RE 5 (20m)",
      transit: "DB Regional-Express RE 1 (dir. Hamm) or RE 5 (dir. Wesel)",
      directions: "Board from Köln Hbf Platforms 1–3. High-frequency double-decker train to Düsseldorf Hbf (20 min).",
      tip: "Trains run every 15–20 minutes. Keep tickets handy."
    },
    {
      spot: "Düsseldorf Hbf ➔ 7 Themed Christmas Markets & Altstadt",
      badge: "🚇 U-Bahn (3m)",
      transit: "Underground U-Bahn (Lines U70–U79) 3 stops to Heinrich-Heine-Allee",
      directions: "Exit towards Altstadt. Stroll through Marktplatz (giant tree & historic Rathaus), Engelchen-Markt, and Handwerker-Markt.",
      tip: "Düsseldorf's markets are known for distinct themed architectural designs. Grab warm potato pancakes (Reibekuchen) with applesauce."
    },
    {
      spot: "Königsallee & Corneliusplatz Ice Rink ➔ Little Tokyo",
      badge: "🍜 Little Tokyo Stroll",
      transit: "Walk 2 mins east to Königsallee canal, then 8 mins down Immermannstraße",
      directions: "Watch skaters on Corneliusplatz ice rink at the head of luxury canal avenue. Walk down Immermannstraße toward Düsseldorf Hbf.",
      tip: "Europe's most vibrant Japanese quarter: enjoy authentic piping hot ramen at Takumi or Naniwa before taking the 20-min RE train back to Cologne."
    }
  ],
  "Day 7": [
    {
      spot: "Köln Hbf ➔ Frankfurt am Main Hbf",
      badge: "🚄 DB ICE (1h 05m)",
      transit: "Deutsche Bahn High-Speed ICE line via Montabaur (up to 300 km/h)",
      directions: "Board from Köln Hbf to Frankfurt (Main) Hbf. Direct express connection arrives at main terminal hall.",
      tip: "Scenic ride slicing through the Taunus hills. Exit Frankfurt Hbf towards Kaiserstraße / Bahnhofsviertel."
    },
    {
      spot: "Frankfurt Hbf ➔ Premier Inn Frankfurt City Centre",
      badge: "🚶 Walk 3m (250m)",
      transit: "Short walk from Frankfurt Hbf north exit",
      directions: "Walk 250m down Kaiserstraße, turn left into Elbestraße to #7.",
      tip: "Check in, drop luggage, and refresh. Fast and friendly check-in."
    },
    {
      spot: "Hotel ➔ Eiserner Steg Footbridge & Main River",
      badge: "🚶 Walk 12m",
      transit: "Walk east along Kaiserstraße through financial district skyscrapers",
      directions: "Continue past Willy-Brandt-Platz down to the Main riverbank. Step onto the historic iron pedestrian footbridge (Eiserner Steg).",
      tip: "Spectacular vantage point of Frankfurt's modern skyline reflected in the river."
    },
    {
      spot: "Eiserner Steg ➔ Römerberg Christmas Market & Kaiserdom",
      badge: "🎄 Römerberg Plaza",
      transit: "Walk 3 mins north from the footbridge into Römerberg town square",
      directions: "Enter the fairytale square surrounded by rebuilt half-timbered merchant houses and the 30-meter lit Christmas tree.",
      tip: "Frankfurter Weihnachtsmarkt dates back to 1393. Walk 2 mins east to the imposing red-sandstone Imperial Cathedral (Kaiserdom)."
    }
  ],
  "Day 8": [
    {
      spot: "Hotel ➔ Goethe House & Museumsufer",
      badge: "🚶 Walk 10m",
      transit: "Walk east along Kaiserstraße to Großer Hirschgraben 23–25",
      directions: "Visit the faithfully restored birthplace of author Johann Wolfgang von Goethe (Open 10:00–18:00). Stroll across bridge to Museumsufer.",
      tip: "Combine with quick shopping along the bustling pedestrian Zeil avenue."
    },
    {
      spot: "Frankfurt Hbf ➔ Frankfurt Germany Temple (Friedrichsdorf)",
      badge: "🚆 S-Bahn S5 (26m)",
      transit: "Frankfurt Hbf low-level Platforms 101/102 · S-Bahn Line S5 (dir. Friedrichsdorf)",
      directions: "Ride S-Bahn S5 to terminus Friedrichsdorf (Taunus) (26 mins, departs every 15–30 mins). Exit station; walk 8 mins (650m) west along Talstraße to Tempelstift.",
      tip: "Arrive by 05:15 PM for the 06:00 PM Proxy Endowment Session. Peaceful temple grounds nestled in the Taunus foothills."
    },
    {
      spot: "Friedrichsdorf ➔ Frankfurt Hbf Return",
      badge: "🚆 S-Bahn S5 (26m)",
      transit: "S-Bahn S5 back to Frankfurt Hbf",
      directions: "Return to Frankfurt Hbf. Walk 3 mins back to Premier Inn on Elbestraße.",
      tip: "Pack luggage and rest early for the early morning 04:35 AM coach to Alsace tomorrow!"
    }
  ],
  "Day 9": [
    {
      spot: "Frankfurt Hbf ➔ Strasbourg Place de l'Étoile",
      badge: "🚌 FlixBus N13 (4h)",
      transit: "FlixBus Route N13 (Departs 04:35 AM · Booking Ref: 339 153 0857 · Seats 3A & 3B)",
      directions: "Board from Frankfurt Hbf south bus bays (Stuttgarter Straße 26). Arrives Strasbourg Place de l'Étoile at 08:35 AM.",
      tip: "Comfortable overnight/dawn sleeper route. Keep passports and FlixBus QR codes ready on your phone."
    },
    {
      spot: "Strasbourg ➔ Kehl Base (B&B Hotel Kehl)",
      badge: "🚊 Cross-Border Tram D",
      transit: "CTS Tram Line D (dir. Kehl Rathaus) across the Rhine bridge (18 min)",
      directions: "From Place de l'Étoile, board Tram D across the border into Germany to stop Kehl Bahnhof. Ride local bus 106 or walk 12 mins to Allensteiner Str. 15.",
      tip: "Tram D smoothly connects France and Germany every 12 mins. Drop luggage at B&B Hotel Kehl."
    },
    {
      spot: "Kehl ➔ Place Kléber & Christkindelsmärik (Strasbourg)",
      badge: "🎄 Capital of Christmas",
      transit: "Tram Line D back into France to stop Homme de Fer or Langstross (16 min)",
      directions: "Walk 1 min to Place Kléber to gaze at the colossal 30-meter Great Christmas Tree (Grand Sapin). Walk 3 mins east to Place Broglie.",
      tip: "Place Broglie hosts the historic Christkindelsmärik (established 1570). Incredible holiday aromas of cinnamon, bretzels, and hot spiced cider."
    },
    {
      spot: "Petite France ➔ Strasbourg Cathedral (Notre-Dame)",
      badge: "🏰 Fairytale Canals",
      transit: "5-min walk southwest into Petite France; 8-min walk east to Cathedral",
      directions: "Wander through the timbered canals, covered bridges (Ponts Couverts), and Vauban Dam. Walk along Rue Mercière to the cathedral.",
      tip: "Strasbourg Cathedral's pink sandstone facade glows under holiday illuminations. Ride Tram D back to Kehl base."
    }
  ],
  "Day 10": [
    {
      spot: "Kehl ➔ Colmar Fairytale Village",
      badge: "🚆 TER Fluo Train (30m)",
      transit: "Tram D to Strasbourg Gare Centrale + SNCF TER Fluo train direct to Colmar",
      directions: "From Strasbourg Gare Centrale, board TER Fluo train (runs every 30 mins). Arrives Colmar station in 30 mins.",
      tip: "Sit upstairs on the double-decker train for snowy views of Alsatian vineyards and Vosges castles."
    },
    {
      spot: "Colmar Station ➔ Petite Venise & Quai de la Poissonnerie",
      badge: "🚶 Walk 10m (800m)",
      transit: "Walk east via Rue Georges Clemenceau and Rue Turenne",
      directions: "Cross Saint-Pierre bridge directly into Petite Venise. Admire candy-colored half-timbered medieval houses reflected in the canal.",
      tip: "One of Europe's most photographed fairytale locations. Quai de la Poissonnerie is directly adjacent."
    },
    {
      spot: "Petite Venise ➔ Maison Pfister & Christmas Markets",
      badge: "⭐ Christmas Eve Notice",
      transit: "Walk 5 mins north along Rue des Marchands to Place de l'Ancienne Douane",
      directions: "Pass Maison Pfister (built 1537, inspiration for Howl's Moving Castle). Explore the 6 Colmar festive markets.",
      tip: "CRITICAL CHRISTMAS EVE NOTICE: All Colmar Christmas markets close at 17:00 sharp today! Complete market visits by 16:30."
    },
    {
      spot: "Colmar ➔ Strasbourg & Kehl Return",
      badge: "🚆 TER Train (30m)",
      transit: "SNCF TER train back to Strasbourg + Tram D to Kehl",
      directions: "Return to Colmar station by 17:00. Board TER train to Strasbourg, then cross Rhine on Tram D.",
      tip: "Enjoy Christmas Eve dinner and rest early for tomorrow's Christmas morning train into the Swiss Alps!"
    }
  ],
  "Day 11": [
    {
      spot: "Strasbourg ➔ Bern Hauptbahnhof (Swiss Alps Base)",
      badge: "🚆 TER + SBB IC (2h 15m)",
      transit: "Morning train: Strasbourg to Basel SBB (1h 18m) + SBB IC 61 to Bern Hbf (56m)",
      directions: "Direct scenic rail connection south through the Upper Rhine into Switzerland, arriving at Bern Hbf.",
      tip: "Bern Hbf lower concourse has full luggage lockers if needed. Relax and enjoy Christmas morning alpine views."
    },
    {
      spot: "Bern Hbf ➔ Alpenblick CoLiving (Kasernenstrasse 29)",
      badge: "🚊 Bernmobil Tram 9 (6m)",
      transit: "Bernmobil Tram Line 9 (dir. Guamligen) from Bahnhofplatz to stop Viktoriaplatz",
      directions: "Walk 150m down Kasernenstrasse to #29. Automated keyless self-check-in.",
      tip: "Remember: CHF 500 cash damage deposit collected on arrival (refunded at checkout). Free Bern Transit Ticket included with stay!"
    },
    {
      spot: "Hotel ➔ Bern UNESCO Old Town & Zytglogge",
      badge: "🏛️ 6km Sandstone Arcades",
      transit: "Tram 9 back 4 stops to Zytglogge (4 min) or 12-min walk across Kornhausbrücke",
      directions: "Stroll under 6 km of weather-sheltered sandstone arcades (Lauben). Watch the Zytglogge clock figures dance 4 mins before the hour.",
      tip: "Completely sheltered from winter rain/snow. Admire 16th-century painted Renaissance fountains along Kramgasse."
    },
    {
      spot: "Bundeshaus ➔ Nydeggbrücke & Bear Park (Aare Panorama)",
      badge: "🐻 Aare River Vista",
      transit: "4-min walk south to Bundesplatz, then east along Kramgasse to Nydeggbrücke",
      directions: "Step onto the Federal Palace (Bundeshaus) terrace for Alpine views. Walk to Nydeggbrücke bridge overlooking the turquoise Aare river loop.",
      tip: "Look down at the historic BärenPark (Bear Park). Savor an authentic Christmas Swiss cheese fondue in an ancient vaulted cellar."
    }
  ],
  "Day 12": [
    {
      spot: "Bern Hbf ➔ Grindelwald (Berner Oberland)",
      badge: "🚆 SBB IC + BOB (1h 34m)",
      transit: "SBB IC 61 to Interlaken Ost (53m) + Berner Oberland-Bahn (BOB) to Grindelwald (34m)",
      directions: "Board from Bern Hbf. Cross platform at Interlaken Ost to yellow/blue BOB train (board rear carriages marked Grindelwald).",
      tip: "Sit on the right side of the train for dramatic views entering the deep glacial valley beneath the towering Wetterhorn."
    },
    {
      spot: "Grindelwald ➔ First Cliff Walk by Tissot (2,168m)",
      badge: "🚠 First Gondola (25m)",
      transit: "10-min walk through village to First Gondola station; 25-min cableway to summit",
      directions: "Board continuous 6-seater gondola via Bort and Schreckfeld to First at 2,168m. Walkway starts right beside summit station.",
      tip: "Metal cliff-clinging walkway and 45-meter cantilever bridge extending over the abyss directly facing the icy Eiger North Face! Free with gondola ticket."
    },
    {
      spot: "Grindelwald ➔ Iseltwald Landing Stage (Lake Brienz CLOY Pier)",
      badge: "🚌 PostBus 103 (20m)",
      transit: "Gondola down + BOB train to Interlaken Ost + PostBus 103 from Bay B",
      directions: "Ride PostBus 103 along Lake Brienz shoreline to stop Iseltwald Dorfplatz (20 min). Walk 2 mins down to the lakeshore wooden pier.",
      tip: "The iconic Crash Landing on You wooden pier where Captain Ri plays piano on glassy turquoise water. (CHF 5 coin/card turnstile fee)."
    },
    {
      spot: "Iseltwald ➔ Bern Base Return",
      badge: "🚆 SBB IC (53m)",
      transit: "PostBus 103 back to Interlaken Ost + SBB IC train back to Bern Hbf",
      directions: "Take Tram 9 back to Alpenblick CoLiving. Hot roesti dinner and relaxing evening after an epic alpine adventure.",
      tip: "Recharge phone and camera batteries for tomorrow's waterfall valley excursion."
    }
  ],
  "Day 13": [
    {
      spot: "Bern Hbf ➔ Lauterbrunnen Valley & Staubbach Falls",
      badge: "🚆 SBB IC + BOB (1h 15m)",
      transit: "SBB IC to Interlaken Ost (53m) + BOB train (front carriages marked Lauterbrunnen, 20m)",
      directions: "Arrive Lauterbrunnen station; walk 8 mins south along the valley road toward the roaring 297-meter Staubbach Falls.",
      tip: "Valley of 72 waterfalls! The spray freezes into dramatic ice sculptures along the sheer cliff base in winter."
    },
    {
      spot: "Lauterbrunnen ➔ Mürren Car-Free Clifftop Village (1,638m)",
      badge: "🚠 Cable Car + 🚂 Train",
      transit: "Grütschalp Cable Car (4m) + connecting BLM mountain train to Mürren (14m)",
      directions: "Across from Lauterbrunnen station, board cable car soaring 700m up cliff face. Switch to narrow-gauge mountain train to Mürren BLM station.",
      tip: "Entirely car-free village perched on the cliff rim directly opposite Eiger, Mönch & Jungfrau. Quiet, pristine winter wonderland."
    },
    {
      spot: "Mürren ➔ Blausee Nature Park (Path of 1,000 Lights)",
      badge: "✨ 1,000 Lights Walk",
      transit: "Descend to Lauterbrunnen; train to Frutigen + PostBus 230 to stop Blausee BE (12m)",
      directions: "Walk 3 mins from bus stop through snowy pine forest illuminated by hundreds of glowing lanterns to the crystal-clear subterranean lake.",
      tip: "Magical winter twilight experience! The mineral-rich turquoise waters never freeze and glow beneath evening lantern light."
    },
    {
      spot: "Blausee ➔ Bern Base Return",
      badge: "🚌 Bus 230 + 🚆 Train",
      transit: "PostBus 230 back to Frutigen station + BLS / SBB train via Spiez to Bern Hbf",
      directions: "Smooth return journey taking ~40 mins. Tram 9 back to Alpenblick CoLiving.",
      tip: "Enjoy warm Swiss hot chocolate in Bern."
    }
  ],
  "Day 14": [
    {
      spot: "Bern Hbf ➔ Spiez Castle & Lake Thun Promenade",
      badge: "🚆 SBB IC (30m)",
      transit: "SBB InterCity train direct from Bern Hbf to Spiez (runs every 30 mins)",
      directions: "Walk 10 mins downhill from Spiez elevated station through terraced vineyards to the medieval castle bay and lakeside path.",
      tip: "Spiez bay offers tranquil alpine views across Lake Thun with the snow-draped pyramidal Niesen mountain in the background."
    },
    {
      spot: "Spiez ➔ Panoramabrücke Sigriswil (Suspension Bridge)",
      badge: "🌉 340m Hanging Bridge",
      transit: "STI Bus 21 / scenic lake hop to Gunten + STI Bus 25 up to Sigriswil Dorf",
      directions: "Walk 2 mins to bridge turnstile. Cross the 340-meter-long pedestrian suspension bridge hanging 182 meters above Gummischlucht gorge.",
      tip: "Iconic Crash Landing on You filming location! Sweeping vistas of Lake Thun and the Bernese high peaks (CHF 8 turnstile fee)."
    },
    {
      spot: "Sigriswil ➔ Bern Rosengarten Sunset Panorama",
      badge: "🌅 Sunset Over Bern",
      transit: "Bus 25 back to Thun/Spiez + SBB train to Bern Hbf + Bernmobil Bus 10 to Rosengarten",
      directions: "Hop on Bus 10 (dir. Ostermundigen) 6 stops to stop Rosengarten (7 min). Walk up to viewing terrace.",
      tip: "The finest sunset panorama in Switzerland: watch golden hour light illuminate Bern's UNESCO Old Town enclosed by the glowing Aare river loop."
    },
    {
      spot: "Rosengarten ➔ Old Town Arcades & Packing",
      badge: "🎒 Farewell Switzerland",
      transit: "Walk down through Bear Park across Nydeggbrücke into Old Town",
      directions: "Enjoy a celebratory farewell Swiss dinner in the medieval arcades. Return to Alpenblick CoLiving to pack bags for Paris tomorrow!",
      tip: "TGV Lyria bullet train departs early afternoon tomorrow."
    }
  ],
  "Day 15": [
    {
      spot: "Bern Hbf ➔ Bern Switzerland Temple (Zollikofen)",
      badge: "🚆 S-Bahn S3/S4 (8m)",
      transit: "Check out of Alpenblick (store bags at Bern Hbf). S-Bahn S3/S4 to Zollikofen (8m)",
      directions: "Walk 8 mins (650m) west along Tempelstrasse to Tempelstrasse 2. Attend sacred morning Proxy Endowment Session.",
      tip: "Historic first temple built in Europe (1955). Beautiful pine-fringed grounds. S-Bahn runs every 15 mins back to Bern Hbf."
    },
    {
      spot: "Bern Hbf ➔ Paris Gare de Lyon (High-Speed TGV Lyria)",
      badge: "🚄 TGV Lyria (320 km/h)",
      transit: "SBB IC to Basel SBB (56m) + TGV Lyria 9222 direct to Paris Gare de Lyon (3h 04m)",
      directions: "Cross to French platforms at Basel SBB; board high-speed TGV Lyria bullet train cruising at 320 km/h straight into central Paris.",
      tip: "Arrives at Paris Gare de Lyon (Hall 1/2). Follow digital signs downstairs to automated Metro Line 14."
    },
    {
      spot: "Paris Gare de Lyon ➔ Break & Home Paris Italie",
      badge: "🚇 Metro Line 14 (6m)",
      transit: "Automated Metro Line 14 (dir. Orly) to Maison Blanche or Porte de Choisy",
      directions: "Alight at Porte de Choisy (or ride Tram T3a). Walk 4 mins (300m) along Blvd Masséna to 101 Rue François Mitterrand.",
      tip: "Check in, unpack, and settle into a real hotel bed—Night 1 of 5 in Paris!"
    }
  ],
  "Day 16": [
    {
      spot: "Hotel ➔ Musée du Louvre",
      badge: "🚇 Metro Line 7 (18m)",
      transit: "Metro Line 7 from Porte de Choisy direct to Palais Royal - Musée du Louvre",
      directions: "Skip the pyramid line outside! Enter via underground Carrousel du Louvre mall (99 Rue de Rivoli) for faster security screening.",
      tip: "Pre-booked timed ticket is strictly mandatory! See the Mona Lisa, Venus de Milo, and Winged Victory of Samothrace."
    },
    {
      spot: "Louvre ➔ Tuileries Garden & Galeries Lafayette",
      badge: "🚶 Stroll & Shopping",
      transit: "Walk through Tuileries to Concorde (12m), then north on Rue Tronchet to Haussmann",
      directions: "Enter Galeries Lafayette Haussmann main building. Look up at the neo-Byzantine stained-glass dome and suspended 4-story Christmas tree.",
      tip: "Head to the free 7th-floor rooftop terrace for panoramic views over Paris and the Opera Garnier."
    },
    {
      spot: "Galeries Lafayette ➔ Champs-Élysées & Arc de Triomphe",
      badge: "🏛️ Arc Rooftop Terrace",
      transit: "Walk or Metro Line 1 from Concorde up Avenue des Champs-Élysées",
      directions: "Stroll up the illuminated boulevard. Use the underground tunnel (Passage du Souvenir) from the north avenue side to access the Arc center.",
      tip: "Climb the 284 steps to the Arc de Triomphe roof for an unforgettable 360° sunset overlooking 12 radiating grand avenues."
    }
  ],
  "Day 17": [
    {
      spot: "Hotel ➔ Musée d'Orsay",
      badge: "🚇 Metro 7 ➔ RER C",
      transit: "Metro 7 to Châtelet + transfer to RER C / Metro 1 to Musée d'Orsay (25m)",
      directions: "Housed in a grand 1900 Beaux-Arts railway terminal. Tour impressionist masterpieces by Monet, Van Gogh, and Renoir.",
      tip: "Walk behind the giant glass railway clock on the top floor for silhouette photos over Montmartre."
    },
    {
      spot: "Musée d'Orsay ➔ Île de la Cité & Notre-Dame",
      badge: "🚶 Seine Walk (15m)",
      transit: "Walk east along Quai Voltaire by the green Seine bookseller stalls (bouquinistes)",
      directions: "Cross Pont Saint-Michel onto Île de la Cité to Notre-Dame Cathedral square. Walk across Petit Pont to Shakespeare and Company.",
      tip: "Admire Notre-Dame's freshly restored Gothic facade and explore the historic English bookstore at 37 Rue de la Bûcherie."
    },
    {
      spot: "Notre-Dame ➔ Trocadéro (Eiffel Tower Sparkle)",
      badge: "🗼 Eiffel Tower Vista",
      transit: "RER Line C from Saint-Michel to Champ de Mars or Metro 4 + Metro 9 to Trocadéro",
      directions: "Step onto the Palais de Chaillot marble terrace overlooking the Eiffel Tower across the Seine.",
      tip: "Watch the Eiffel Tower sparkle with 20,000 flashbulbs on the top of the hour for 5 magical minutes."
    },
    {
      spot: "Trocadéro ➔ Champs-Élysées Official NYE Countdown",
      badge: "🎉 FREE NYE Metro",
      transit: "Walk 15 mins across Pont d'Iéna or Metro 9 to Franklin D. Roosevelt",
      directions: "Join the official New Year's Eve celebration on the Champs-Élysées. Laser light projections on the Arc de Triomphe leading to midnight!",
      tip: "IMPORTANT NYE BONUS: All Paris Metro lines run 100% FREE all night from 17:00 on 31 Dec to 12:00 on 01 Jan!"
    }
  ],
  "Day 18": [
    {
      spot: "Hotel ➔ Jardin du Luxembourg (New Year's Morning)",
      badge: "🚇 Metro Line 7 (12m)",
      transit: "Metro Line 7 from Porte de Choisy to Place Monge or Censier-Daubenton",
      directions: "Walk 8 mins west along Rue Lacépède into the Luxembourg Gardens.",
      tip: "Peaceful New Year's Day stroll around the 1630 Medici Fountain (Fontaine Médicis) and gravel palace paths."
    },
    {
      spot: "Luxembourg ➔ Le Marais & Place des Vosges",
      badge: "🚶 Historic Marais",
      transit: "Walk northeast across Pont de Sully into Saint-Paul / Le Marais (18m walk)",
      directions: "Walk down Rue des Francs-Bourgeois into Place des Vosges, Paris's oldest planned royal residential square.",
      tip: "Explore warm boutique galleries and arcades. Stop for hot falafel or pastries on Rue des Rosiers."
    },
    {
      spot: "Le Marais ➔ Latin Quarter & Saint-Germain",
      badge: "☕ Parisian Bistro",
      transit: "Walk west across Pont Neuf into the Latin Quarter",
      directions: "Stroll through Rue Saint-André-des-Arts, Odéon, and Boulevard Saint-Germain.",
      tip: "Warm up with French onion soup or crêpes at a cozy sidewalk café as winter dusk settles over the Seine."
    }
  ],
  "Day 19": [
    {
      spot: "Paris ➔ Palace of Versailles (Hall of Mirrors)",
      badge: "🚆 RER Line C (40m)",
      transit: "RER Line C train marked C5 / VICK to terminus Versailles Château Rive Gauche",
      directions: "From station exit, walk 8 mins (600m) west along Avenue de Paris straight to the gilded palace gates.",
      tip: "Requires RER Zone 4 ticket (~€4.15). Book passport timed ticket online! Explore the Hall of Mirrors, King's State Apartments, and Royal Gardens."
    },
    {
      spot: "Versailles Palace ➔ Paris France LDS Temple (Le Chesnay)",
      badge: "🚌 Phébus Bus 2 (7m)",
      transit: "Phébus Bus Line 2 (dir. Le Chesnay - Hôpital) from stop Château or Gare Rive Droite",
      directions: "Alight at stop Bel-Air or Hôpital Mignot (7 mins). Walk 2 mins (150m) along Boulevard Saint-Antoine to #46.",
      tip: "Tour the peaceful Paris France Temple grounds, landscaped gardens, and patron arrival center in Le Chesnay."
    },
    {
      spot: "Le Chesnay ➔ Central Paris Return",
      badge: "🚆 Train / RER C",
      transit: "Bus 2 back to Versailles Rive Droite + Transilien Line L to Paris Saint-Lazare (36m) or RER C",
      directions: "Smooth direct rail connection back into central Paris for an evening farewell dinner.",
      tip: "Pack luggage tonight for tomorrow night's sleeper coach to London."
    }
  ],
  "Day 20": [
    {
      spot: "Morning Walk: Boulevard Saint-Michel, Pont Alexandre III & Grand Palais",
      badge: "🌉 Beaux-Arts Bridges",
      transit: "Metro 7/14 to central Paris. Stroll along Seine riverbanks",
      directions: "Walk across gilded Pont Alexandre III (sculpted nymphs, winged horses) and view Grand Palais glass barrel dome.",
      tip: "Return to hotel by 11:30 AM to check out of Break & Home Paris Italie."
    },
    {
      spot: "Hotel ➔ Paris Bercy Seine Coach Terminal",
      badge: "🚌 FlixBus 1700",
      transit: "Metro Line 14 direct from hotel to Bercy station (6m). Walk 8 mins through Parc de Bercy",
      directions: "Walk down the covered ramp to FlixBus Terminal (210 Quai de Bercy). Board FlixBus Route 1700 to London Victoria (Departs 23:00).",
      tip: "Arrive by 22:15. Booking Ref: 338 920 9866. Have passports ready for UK Border Force controls at Calais/Eurotunnel."
    }
  ],
  "Day 21": [
    {
      spot: "London Victoria Coach Station ➔ London Waterloo",
      badge: "🇬🇧 London Arrival",
      transit: "Arrive Victoria Coach Station at 07:25 AM. Walk or Tube to Waterloo",
      directions: "Clear UK Border arrivals hall. Walk 10 mins or take Tube (Victoria Line ➔ Jubilee Line to Waterloo, 12 mins).",
      tip: "Enjoy a hearty English breakfast and hot tea at Victoria or Waterloo station concourse."
    },
    {
      spot: "London Waterloo ➔ Southampton Central",
      badge: "🚆 SWR Fast Train (1h 15m)",
      transit: "South Western Railway express train from London Waterloo to Southampton Central",
      directions: "Departures every 15–30 mins. Fast direct service southwest through Hampshire to Southampton.",
      tip: "Return home to family base, unpack, rest, and celebrate a flawless 21-day Schengen winter tour!"
    }
  ]
};
