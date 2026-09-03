# 21-Day European Winter Journey (2026–2027)

> **Master Travel Overview, Interactive Itinerary & Confirmed Bookings**  
> *Travelers:* Jean Aristide Belleza Aquino & Avery Sinclair Belleza  
> *Schengen Status:* Approved Visa · Continuous Journey: 15 Dec 2026 – 04 Jan 2027  
> *Destinations:* France, Switzerland, Netherlands, Germany, United Kingdom  

---

## 🌟 Overview & Highlights

- **France (7 Nights Total):** 5 nights in Paris (Louvre, Eiffel Tower NYE 2027, Palace of Versailles, Seine Cruise) + 2 nights based in Kehl exploring Strasbourg (Capital of Christmas) and fairytale Colmar.
- **Switzerland (4 Nights):** Alpine tour visiting the iconic *Crash Landing on You* (CLOY) locations: Lindenhof in Zurich, the piano pier in Iseltwald (Lake Brienz), Panoramabrücke Sigriswil, and Grindelwald First Flieger.
- **Netherlands (3 Nights):** Amsterdam UNESCO canal ring, Rijksmuseum, Amsterdam Light Festival, and Ice Village Christmas Market.
- **Germany (2 Nights):** Cologne Cathedral (*Kölner Dom*), Lindt Chocolate Museum, and historic Christmas markets.
- **Overnight Sleeper Coach (4 Nights):** Inter-city night FlixBus routes maximizing daytime exploration.

---

## 📂 Project Structure

```text
schengen-trip-2026/
├── index.html                                        # Modern responsive web app with interactive route map
├── css/
│   └── style.css                                     # Custom clean design system
├── js/
│   └── app.js                                        # Interactive Leaflet map & dynamic country filtering
├── generate_pdf.py                                   # Python script to regenerate the master trip overview PDF
├── Schengen_Trip_Overview_Itinerary_Jean_Aquino.pdf  # Master trip overview document
├── public/
│   └── Schengen_Trip_Overview_Itinerary_Jean_Aquino.pdf # Public download asset for web app
├── package.json                                      # Node.js project metadata
└── vercel.json                                       # Vercel zero-config static deployment settings
```

---

## 🚀 Live Web Preview & Deployment

### Local Preview
To preview locally:
```bash
npx serve . -l 3000
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Deploying to Vercel
1. Push this repository to your GitHub account:
   ```bash
   git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/schengen-trip-2026.git
   git branch -M main
   git push -u origin main
   ```
2. In [Vercel](https://vercel.com), click **Add New... ➔ Project**.
3. Select `schengen-trip-2026` and click **Deploy**.
