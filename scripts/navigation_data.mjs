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
      spot: "Strasbourg ➔ Lucerne Bus Station",
      badge: "🚌 FlixBus N846 (04:05–07:10)",
      transit: "Direct FlixBus N846 departing Strasbourg Central Bus Station (Place de l'Étoile) at 04:05 AM",
      directions: "Catch up on sleep during smooth 3-hour direct overnight transit across the Swiss border to Lucerne Inseliquai Bus Station.",
      tip: "Seats 11C & 11D. Arrive cleanly at Lucerne at 07:10 AM with fresh alpine morning air."
    },
    {
      spot: "Lucerne ➔ Interlaken Ost ➔ Lauterbrunnen",
      badge: "🚆 Zentralbahn + BOB (2h 20m)",
      transit: "Walk 2 mins to Lucerne main station; board Zentralbahn Luzern-Interlaken Express over Brünig Pass to Interlaken Ost, then BOB train to Lauterbrunnen",
      directions: "Panoramic scenic train climbs over the snow-covered Brünig Pass. At Interlaken Ost, cross platform to the yellow/blue BOB train climbing into Lauterbrunnen valley.",
      tip: "Sit on the right side of the Zentralbahn for postcard views of Lake Sarnen, Lake Lungern, and frozen alpine peaks."
    },
    {
      spot: "Lauterbrunnen Station ➔ Valley Hostel",
      badge: "🏨 Check-in (5m Walk)",
      transit: "Short 400m walk along the main village street (Fuhren 423)",
      directions: "Walk south from the station past the bakery; Valley Hostel is right along the road with views of Staubbach Falls.",
      tip: "Drop your bags and complete check-in (Night 1 of 4). Unpack in your cosy alpine base."
    },
    {
      spot: "Valley Hostel ➔ Staubbach Falls Viewpoint",
      badge: "❄️ 297m Frozen Mist",
      transit: "5-min gentle stroll along the valley floor",
      directions: "Walk toward the roaring 297-meter waterfall cascading down the sheer vertical rock wall.",
      tip: "Witness freezing alpine mist crystallizing along the massive rock face. In the evening, cook a warm holiday dinner in the hostel's fully equipped communal kitchen!"
    }
  ],
  "Day 12": [
    {
      spot: "Lauterbrunnen ➔ Grindelwald Terminal & First",
      badge: "🚆 BOB + 🚠 Gondola",
      transit: "BOB train from Lauterbrunnen to Zweilütschinen (swap to Grindelwald, 35m) or direct bus",
      directions: "From Grindelwald village, board the continuous 6-seater gondola soaring up through snowy pine forests to Grindelwald-First at 2,168m.",
      tip: "Sit back and enjoy the dramatic winter mountain panorama as you ascend into the high alpine zone."
    },
    {
      spot: "Grindelwald-First ➔ First Cliff Walk by Tissot",
      badge: "🌉 Cantilever Abyss",
      transit: "Summit walking walkway starting right next to the gondola top station",
      directions: "Step onto the metal cliff-clinging walkway and the 45-meter suspended cantilever observation bridge hanging over the mountain abyss.",
      tip: "Endless snowy horizons directly facing the icy Eiger North Face! Included free with gondola ticket."
    },
    {
      spot: "Grindelwald ➔ Kleine Scheidegg (CLOY High Pass)",
      badge: "🚂 Wengernalpbahn Cogwheel",
      transit: "Descend gondola to Grindelwald; board historic Wengernalpbahn yellow-and-green cogwheel train climbing to Kleine Scheidegg (2,061m)",
      directions: "The cogwheel railway climbs directly beneath the towering Eiger, Mönch, and Jungfrau peaks to the high mountain pass.",
      tip: "Famous Crash Landing on You filming location where Captain Ri and Yoon Se-ri watched paragliders cruise over snowy peaks!"
    },
    {
      spot: "Kleine Scheidegg ➔ Lauterbrunnen Valley Return",
      badge: "🚂 Cogwheel Descent",
      transit: "Direct Wengernalpbahn cogwheel train descending down the western slope via Wengen directly into Lauterbrunnen",
      directions: "Board the train down through snowy Wengen village back to Lauterbrunnen station. 5-min walk back to Valley Hostel.",
      tip: "Unwind at Valley Hostel with a hot beverage after a full day of high alpine summits."
    }
  ],
  "Day 13": [
    {
      spot: "Lauterbrunnen ➔ Interlaken Ost ➔ Lake Brienz",
      badge: "🚆 BOB + 🚌 PostBus 103",
      transit: "BOB train down to Interlaken Ost (20m) + PostBus Route 103 from station plaza",
      directions: "Ride PostBus 103 wrapping along the bright turquoise southern shoreline of Lake Brienz with sweeping mountain reflections.",
      tip: "Keep camera ready: Lake Brienz is renowned for its intense glacial turquoise color even in mid-winter."
    },
    {
      spot: "Lake Brienz ➔ Iseltwald Landing Stage (CLOY Pier)",
      badge: "🎹 Iconic Piano Pier",
      transit: "Alight at Iseltwald Dorfplatz; 2-min walk down to the lakeshore wooden dock",
      directions: "Walk onto the quiet, snow-kissed peninsula and out onto the famous Crash Landing on You wooden pier.",
      tip: "Keep a 5 CHF coin or card ready to clear the turnstile gate. Recreate Captain Ri's iconic piano scene on the glassy water!"
    },
    {
      spot: "Iseltwald ➔ Interlaken (Traditional Fondue Dinner)",
      badge: "🫕 Authentic Swiss Fondue",
      transit: "PostBus 103 back to Interlaken Ost (20m)",
      directions: "Stroll into Interlaken's charming streets for a traditional, warm Swiss cheese fondue dinner with crusty bread and roesti.",
      tip: "The perfect winter comfort meal after an afternoon along the frosty lakeside."
    },
    {
      spot: "Interlaken Ost ➔ Valley Hostel Lauterbrunnen",
      badge: "🚆 Evening BOB Train",
      transit: "BOB train from Interlaken Ost direct to Lauterbrunnen (20m)",
      directions: "Quick 20-minute ride up into the illuminated, peaceful valley. Walk 5 mins back to Valley Hostel.",
      tip: "Rest up for tomorrow's cable car ascent to Mürren and the Schilthorn summit."
    }
  ],
  "Day 14": [
    {
      spot: "Valley Hostel ➔ Lauterbrunnen BLM Cable Car",
      badge: "🚠 Grütschalp Cable Car",
      transit: "2-min walk across the road to Lauterbrunnen Cable Car station",
      directions: "Board the aerial cable car rising 700 meters up the vertical valley cliff face to Grütschalp (4m).",
      tip: "Look out the valley-facing windows to see Lauterbrunnen's waterfall floor shrink beneath you."
    },
    {
      spot: "Grütschalp ➔ Mürren Car-Free Clifftop Village",
      badge: "🚂 Mountain Rail (1,638m)",
      transit: "Transfer across the platform to the narrow-gauge BLM mountain train to Mürren (14m)",
      directions: "Ride along the cliff rim directly opposite the massive triad: Eiger, Mönch, and Jungfrau. Arrive at car-free Mürren village.",
      tip: "Completely peaceful, no car traffic, fresh alpine snow, and wooden chalets with icicles."
    },
    {
      spot: "Mürren ➔ Schilthorn Summit Piz Gloria (2,970m)",
      badge: "🏔️ 360° Alpine Summit",
      transit: "Aerial cable car via Birg station to Schilthorn summit (Piz Gloria at 2,970m)",
      directions: "Step out onto the panoramic observation deck for an uninterrupted 360-degree view of over 200 Alpine peaks.",
      tip: "Famous James Bond 007 filming location (On Her Majesty's Secret Service) with revolving restaurant and Spy World exhibition."
    },
    {
      spot: "Schilthorn ➔ Valley Hostel Return & Mobile Ticket Prep",
      badge: "🎒 Pre-pack & Evening Rest",
      transit: "Cable car descent back via Mürren & Grütschalp to Lauterbrunnen",
      directions: "Return to Valley Hostel. Pack luggage for tomorrow's checkout and pre-purchase SBB tickets on mobile for the Bern connection.",
      tip: "Ensure train tickets for tomorrow's Bern and Paris connection are downloaded to your phone."
    }
  ],
  "Day 15": [
    {
      spot: "Valley Hostel ➔ Bern Hauptbahnhof",
      badge: "🚆 BOB + SBB IC (1h 15m)",
      transit: "Check out of Valley Hostel at 08:30 AM. BOB train to Interlaken Ost (20m) + SBB IC train to Bern Hbf (53m, arr 10:15 AM)",
      directions: "Scenic ride out of the valley through Thun to Bern main station. Arrive smoothly at 10:15 AM.",
      tip: "Lower concourse at Bern Hbf has electronic luggage lockers (~CHF 9–12, accepts card). Store heavy bags securely."
    },
    {
      spot: "Bern Hbf ➔ Bern Switzerland Temple (Zollikofen)",
      badge: "🏛️ Sacred Temple Session",
      transit: "S-Bahn Line S3 or S4 (8 mins) from Bern Hbf to Zollikofen station",
      directions: "Walk 8 mins (650m) along Tempelstrasse to Tempelstrasse 2. Attend sacred proxy endowment session (11:00 AM – 01:30 PM).",
      tip: "Historic first temple built in Europe (1955). Beautiful pine-fringed grounds. Completely unhurried spiritual experience."
    },
    {
      spot: "Temple ➔ Bern UNESCO Old Town & Zytglogge",
      badge: "🕰️ 3-Hour Old Town Tour",
      transit: "S-Bahn back to Bern Hbf (8m); walk into UNESCO Old Town",
      directions: "With your session finished early, enjoy 3 relaxed hours (14:00–17:00) strolling 6 km of sandstone arcades (Lauben), seeing the Zytglogge clock tower, and having a hot lunch.",
      tip: "Sandstone arcades are 100% weather-sheltered. Savor authentic Swiss chocolate and hot coffee in the medieval center."
    },
    {
      spot: "Bern Hbf ➔ Basel SBB ➔ Paris Gare de Lyon",
      badge: "🚄 High-Speed TGV Lyria",
      transit: "18:04 train from Bern Hbf to Basel SBB (56m); cross-platform transfer to TGV Lyria 9222 to Paris (3h 04m, arr 22:44)",
      directions: "Retrieve bags from lockers by 17:45. Board train to Basel; board TGV Lyria bullet train cruising at 320 km/h to Paris Gare de Lyon.",
      tip: "Automated Metro Line 14 direct from Gare de Lyon to Porte de Choisy (Break & Home Paris Italie) for a comfortable sleep!"
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
