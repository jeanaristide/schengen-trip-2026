---
name: master-itinerary-chat-table
description: >-
  Generate, format, or update the Master Itinerary Table directly in the chat or markdown documents. Formats a compact, highly readable 4-column GitHub-Flavored Markdown table (Day & Date, Location with embedded culture badges, atomic Action/Activity bullet points with underlined site names and embedded times, and itemized Cost) with zero LaTeX syntax.
---

# Master Itinerary Chat Table Skill

This skill governs the generation, formatting, and updating of the **Master Itinerary Table** within chat responses, markdown reports, and dossier summaries.

Every master itinerary table produced in chat must be compact, instantly scannable, and strictly adhere to the user's verified 4-column schema and formatting rules.

---

## 1. Mandatory Table Schema (4 Columns)

Always render the itinerary using a standard GitHub-Flavored Markdown table with exactly these four headers:

```markdown
| Day & Date | Location | Action / Activity | Cost |
| :--- | :--- | :--- | :--- |
```

### Column Specifications:

| Column | Header | Formatting & Content Directives |
| :--- | :--- | :--- |
| **Col 1** | **Day & Date** | Bold day identifier followed by `<br>` and standard date format: `**Day X**<br>Day-of-Week DD Mon YYYY` (e.g., `**Day 4**<br>Fri 18 Dec 2026`). |
| **Col 2** | **Location** | Base city, transit stations, accommodations, and exact place names. **Film & Cultural Connections MUST be embedded directly inside this column** (never as a separate column). |
| **Col 3** | **Action / Activity** | **Atomic sentence bullet points** (`• ...`). **NO** morning/afternoon/evening grouping headers. **NO** separate Time column—embed all time-bounded info directly in the sentence. **Underline all exact site names** with `<u>...</u>`. |
| **Col 4** | **Cost** | Itemized costs for transport, entrance fees, activities, accommodation, or meals, labeled with explicit currency (`€`, `CHF`, `£`, `₱`, or `Free`), followed by an explicit daily total. |

---

## 2. Formatting & Writing Rules

### Rule 1: Zero LaTeX / KaTeX Syntax (Strictly Enforced)
- **NEVER** use `$$ ... $$` or `$ ... $`.
- **NEVER** use LaTeX commands like `\text{...}`, `\to`, `\times`, `\frac{...}{...}`.
- **ALWAYS** use clean Markdown and Unicode symbols:
  - Arrows: `➔`, `→`
  - Math & Currency: `×`, `÷`, `+`, `−`, `=`, `≈`, `€`, `CHF`, `£`, `₱`
  - Bullets: `•`

### Rule 2: Embedded Cultural & Film Connection Badges (Column 2)
Incorporate cultural badges directly under the relevant location name in the **Location** column using emojis and bold text:
- **Taylor Swift "Begin Again" Film Sites**:
  `🎶 **Taylor Swift: "Begin Again"** · *[Specific Scene Description]*`
- **Beauty and the Beast Inspiration Sites**:
  `🏰 **Beauty and the Beast Inspiration** · *[Architectural/Visual Connection]*`
- **Crash Landing on You (CLOY) Film Sites**:
  `🎬 **Crash Landing on You** · *[Specific Scene / Landmark Details]*`
- **Sacred LDS Temples**:
  `✨ **Sacred LDS Temple Appointment** · *[Session Time / Reservation]*`

### Rule 3: Atomic Sentence Bullets (Column 3)
- **Do NOT divide into Morning / Afternoon / Evening sections or subheadings.**
- Every single activity, transfer, or visit must be its own independent bullet point (`• ...`).
- Keep sentences concise, punchy, and actionable.

### Rule 4: Embed All Time Information (No Separate Time Column)
- For any event that has a fixed schedule or confirmed time, state the exact time clearly inside the activity sentence bullet:
  - Transit departures & arrivals: `• Depart on FlixBus Route 805 at 06:45 AM from ...`
  - Temple appointments: `• Arrive at <u>The Hague Netherlands Temple</u> by 09:10 AM for the confirmed 09:30 AM endowment session.`
  - Accommodation check-in/out: `• Official check-in at <u>Room in Cologne</u> from 03:00 PM.`

### Rule 5: Underline Exact Places & Sites (Column 3)
- Whenever a specific landmark, restaurant, market, lodging, station, or scenic spot is mentioned in an activity sentence, wrap the exact name in HTML underline tags: `<u>Exact Place Name</u>`.
- Example:
  `• Board the S-Bahn at <u>Köln Hauptbahnhof</u> and travel to <u>Bonn Hauptbahnhof</u>.`
  `• Explore the festive stalls at <u>Markt der Engel</u> and sip warm Kinderpunsch.`

### Rule 6: Itemized Costs & Totals (Column 4)
- Break down every expenditure item on a separate line or bullet using `<br>• `:
  - `• NS Sprinter Train: €4.60`
  - `• Mauritshuis Entry: €19.00`
  - `• Lunch / Snacks: €12.00`
  - `• Temple Session: Free`
- Provide an explicit daily total at the bottom:
  `**Day Total**: **€35.60**`

---

## 3. Reference Verification Protocol

Before printing or modifying any day's row in chat:
1. **FlixBus Timing**: Cross-reference exact departure, arrival, and stop locations against verified FlixBus booking PDFs/confirmations.
2. **Lodging Verification**: Cross-reference current active accommodations (e.g., Cologne accommodation is Airbnb *Room in Cologne*, Brucknerstraße 3, 50931 Cologne).
3. **Temple Sessions**: Ensure confirmed session times, arrival lead-times (typically 15–45 minutes prior), and addresses are exact.
4. **Google Maps Place Alignment**: Ensure places match the user's master list of starred locations.

---

## 4. Example Output

```markdown
| Day & Date | Location | Action / Activity | Cost |
| :--- | :--- | :--- | :--- |
| **Day 4**<br>Fri 18 Dec 2026 | **The Hague & Zoetermeer**<br>• The Hague Central<br>• Zoetermeer Park<br><br>✨ **Sacred LDS Temple Appointment** · *The Hague Netherlands Temple (09:30 AM Session)* | • Depart Amsterdam Centraal on NS Intercity train at 07:45 AM toward The Hague.<br>• Arrive at <u>The Hague Netherlands Temple</u> in Zoetermeer by 09:10 AM.<br>• Participate in sacred endowment session from 09:30 AM to 11:30 AM.<br>• Travel to The Hague city center and admire masterpieces at <u>Mauritshuis</u>.<br>• Photograph the historic courtyard of the <u>Binnenhof</u> and Dutch Parliament.<br>• Return to Amsterdam base in the evening via direct NS Intercity. | • NS Intercity Roundtrip: €29.40<br>• Mauritshuis Admission: €19.00<br>• Temple Ordinance: Free<br>• Lunch & Stroopwafels: €14.50<br><br>**Day Total**: **€62.90** |
```
