---
name: executive-deck-builder
description: |
  Create high-impact executive presentation decks following the Minto Pyramid Principle
  and consulting action-title methodology. Generates structured decks with declarative takeaway
  headings, supporting evidence (tables, charts, figures), subheadings, captions/caveats,
  and flexible export options (HTML interactive presentation, PDF, or native PowerPoint PPTX).

  MANDATORY BEHAVIOR:
  Always asks the user first to select their preferred presentation format (HTML, PDF, PPTX, or all)
  before generating files, unless explicitly pre-specified in the user's prompt.

  Use when:
  - The user requests a presentation, slide deck, pitch deck, or executive report.
  - The user asks for slides where headings are declarative takeaway sentences.
  - The user needs data evidence (tables, charts, metrics) organized into presentation slides.
  - The user wants output in HTML, PDF, PPTX, or Markdown slide formats.
license: Apache-2.0
metadata:
  version: v1
  author: Antigravity
---

# Executive Deck Builder Skill

Architect and generate executive-grade presentation decks adhering to the **Minto Pyramid Principle** and consulting action-title methodology.

Every presentation built with this skill ensures that an executive or reader scanning solely the slide headings understands the full narrative arc and strategic conclusions immediately, without needing to decipher dense body paragraphs.

---

## 1. Core Presentation Philosophy & Rules

### Rule 1: Visual Theme – Plain White Background (Mandatory)
- **Always default to a clean, plain white background (`#ffffff` / pure white)** for all slides.
- **Never** default to dark mode or dark slate themes unless explicitly requested by the user.
- **Typography & Elements**:
  - High-contrast, sharp dark text (`#0f172a` / `#111827`).
  - Cards and containers should use subtle off-white backgrounds (`#f8fafc`) with light, crisp borders (`#e2e8f0` / `#cbd5e1`).
  - Accents in professional corporate tones (royal blue `#0284c7`, emerald `#059669`, amber `#d97706`).
- Ensures clean readability, corporate professionalism, and clean printing without toner waste.

### Rule 2: Declarative Action Headings (Mandatory)
- **Every slide heading must be a complete, active declarative sentence** stating the core insight or conclusion.
- **Never** use passive or generic topic labels like *"Financial Performance"*, *"System Architecture"*, or *"Next Steps"*.
- **Always** write the conclusion directly:
  - *Poor:* "Q3 Customer Acquisition Trends"
  - *Strong:* "Customer acquisition grew 34% in Q3 driven by enterprise self-service onboarding."
  - *Poor:* "Server Latency Overview"
  - *Strong:* "P99 latency declined by 180ms following the deployment of localized edge caching."

### Rule 2: Subheadings for Context, Scope & Caveats
- Directly below each action heading, provide a concise subheading setting the operational context, sample size, or time window.
- Example: *Data reflects audited production telemetry across 14 consecutive days (Aug 31 – Sep 14).*

### Rule 3: Structured Supporting Evidence
Every body slide must substantiate its headline claim using concrete, structured evidence:
- **Data Tables**: Clean GitHub-Flavored Markdown tables with aligned numeric values and explicit units.
- **Visual Charts & Diagrams**: High-resolution image references (`![Chart](path)`), SVG/Mermaid charts, or clean Unicode box-drawing trees.
- **Side-by-Side Cards**: 2-column or 3-column comparative layouts (e.g., *Left: Quantitative Metrics* vs. *Right: Strategic Drivers*).

### Rule 4: Captions & Footnotes
- Every data block or visual figure must include a dedicated caption or footnote detailing:
  - Data source and timestamp.
  - Assumptions, baseline comparisons, and explicit caveats (e.g., *"Transient hydration fluctuations excluded from rolling average"*).

### Rule 5: Visual Whitespace & Vertical Density Balance (The "Anti-Void" Rule)
- **The "Anti-Void" Balance Principle**:
  - **No Cavernous Dead Voids**: Avoid awkward, barren white space in the middle, lower half, or bottom-right quadrant of slides.
  - **The Bottom-Right Baseline Lock**: In 2-column layouts (`col-60 / col-40` or `col-half`), the right-hand column MUST NEVER stop halfway down while the left-hand chart extends to the bottom. Lengthen right-side cards, expand padding (`10px–14px`), increase text size (`11pt–12pt`), and add an anchor diagnostic verdict card so the right column locks to the exact same bottom baseline as the left chart.
  - **Never Balloon Fonts to Mask Sparse Content**: Blowing up body fonts to 24pt–36pt looks amateurish. Instead, keep typography disciplined and introduce structured analytical tiers.
  - **No Suffocation or Overcrowding**: Containers must preserve at least 10–14px internal padding and 8–12px gaps so charts and tables never feel cramped.
- **Filling Vertical Space Professionally (Tiered Information Architecture)**:
  - When primary content leaves empty vertical space below, never leave it blank. Balance the slide by adding high-value structured components:
    - **Top Tier**: Action-title and BLUF subtitle summarizing the governing strategic takeaway.
    - **Mid Tier**: Primary visual asset (embedded chart or core metric cards) paired with a structured 6–8 row verification ledger.
    - **Lower Tier**: Secondary diagnostic panels (e.g., biochemical mechanisms, metabolic rate ledgers, myocellular force panels, or multi-phase transition gates).
    - **Anchor Tier**: Clinical assessment / executive status bar resting with balanced breathing room (15–24px) above the footer.
- **The Flexbox Table-Clipping Trap & Mandatory Fix**:
  - **The Trap**: When `.col-40` or `.col-half` is styled with `height: 100%; display: flex; flex-direction: column; justify-content: space-between;`, the browser flex engine silently squeezes any child `.table-container` with default `flex-shrink: 1; overflow: hidden;`. This cuts off bottom table rows (e.g. rows 7 and 8) without error!
  - **The Mandatory Fix**:
    1. Always set `.table-container { flex-shrink: 0 !important; width: 100% !important; }` in both screen and `@media print` CSS.
    2. Always use a `.table-compact` class (`padding: 3.5px 7px !important; font-size: 8.5pt–9pt !important;`) whenever a 6–8 row table shares a column with supporting narrative cards.
- **Side-by-Side Column Symmetry & Table Matrices**:
  - In 2-column layouts, ensure the left column (chart) and right column (table/narrative) terminate at roughly the same vertical baseline.
  - When presenting side-by-side comparisons (e.g., Activity vs. Nutrition), enforce symmetrical row counts (e.g., matching 7-row or 8-row tables) to create visual rhythm.
  - Always enable `font-variant-numeric: tabular-nums` on tables so numeric figures align cleanly by decimal place.
- **The 15–20px Footer Clearance Buffer**:
  - On high-density operational slides (e.g. nutrition audits, energy expenditure models), enforce an explicit 15–20px buffer zone between the lowest card border and the slide footer dividing rule. Never allow text or borders to crowd or cross the footer line.

### Rule 6: Color Psychology & Institutional Guardrails
- **Palette Discipline**: Limit colors to a curated slate/navy corporate system:
  - Base background: Pure White (`#ffffff`).
  - Card background: Subtle slate tint (`#f8fafc`) with crisp 1px borders (`#e2e8f0`).
  - Primary text: Deep Charcoal / Slate (`#0f172a`).
  - Secondary text / metadata: Slate Gray (`#64748b`).
- **Semantic Accents (Use Sparingly)**:
  - **Emerald (`#10b981`)**: Positive targets, achieved PRs, lock-in gates, completed milestones.
  - **Amber (`#f59e0b`)**: Warnings, plateaus, acute water retention, scheduled checkpoints.
  - **Royal Blue (`#2563eb` / `#0284c7`)**: Baseline metrics, primary trajectories, strategic pillars.
  - **Rose (`#ef4444`)**: Deficits, metabolic risk thresholds, critical barriers.

---

## 2. Standard Deck Architecture & Flow

Every deck must follow this standardized sequence:

```text
Deck Narrative Sequence
┌───────────────────────────────────────────────────────────────┐
│ 01. Title Slide                                               │
│     Presentation title, subtitle, date, context & presenter   │
├───────────────────────────────────────────────────────────────┤
│ 02. Agenda / Outline Slide                                    │
│     Narrative road map outlining the sections of the deck     │
├───────────────────────────────────────────────────────────────┤
│ 03. Executive Summary Slide                                   │
│     Bottom-Line Up Front (BLUF): 3 to 4 synthesized takeaways │
├───────────────────────────────────────────────────────────────┤
│ 04. Content Proper (Section & Topic Slides)                   │
│     Topic-specific slides following the 4-part anatomy:       │
│     1. Action Heading (Declarative conclusion)                │
│     2. Subheading (Context / scope)                           │
│     3. Evidence (Tables, charts, comparisons)                 │
│     4. Caption / Caveat (Source, nuances, assumptions)        │
├───────────────────────────────────────────────────────────────┤
│ 05. Forward Roadmap / Next Milestones                         │
│     Concrete timeline, target deliverables, and guardrails    │
└───────────────────────────────────────────────────────────────┘
```

---

## 3. Multi-Format Output Modes (HTML, PDF, PPTX)

The user can choose their preferred presentation format (**HTML**, **PDF**, or **PPTX**), or request all three. The agent must **directly build and deliver the final files** according to their choice:

### Mode A: Interactive HTML Presentation (`.html`)
- **Direct Output**: Generate a self-contained, interactive `deck.html` or `<project>_presentation.html`.
- **Features**:
  - Widescreen 16:9 responsive slide container.
  - Interactive keyboard navigation (`←`/`→`, `Spacebar`, `F` for fullscreen), slide counter, and progress bar.
  - Dark or light executive card styling with embedded local charts (`charts/*.png`) and structured data tables.
  - Ready to open immediately in any web browser.

### Mode B: Direct PDF Presentation Document (`.pdf`)
- **Direct Output**: Automatically compile and produce `<project>_presentation.pdf`.
- **Compiler Standard (Mandatory)**:
  - **Always use Headless Google Chrome** (or Chromium / Brave / Edge) with `--headless=new` for pixel-perfect Blink rendering, sub-pixel font anti-aliasing, and full CSS Grid/Flexbox support.
  - **Never use WeasyPrint**: WeasyPrint breaks modern CSS Grid layouts, drops background colors/tints, and produces jagged, misaligned typography.
- **Execution Mechanism**:
  1. Ensure the HTML slide deck includes the mandatory 16:9 print stylesheet (see specifications below).
  2. Run the Headless Chrome PDF compiler:
     ```bash
     "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
       --headless=new \
       --disable-gpu \
       --run-all-compositor-stages-before-draw \
       --print-to-pdf-no-header \
       --print-to-pdf="<project>_presentation.pdf" \
       "file://$(pwd)/<deck>.html"
     ```
     *(Fallback binary paths: `google-chrome`, `chromium`, `/Applications/Brave Browser.app/Contents/MacOS/Brave Browser`, `/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge`)*
  3. **Mandatory 16:9 Print CSS Specifications**:
     ```css
     @page {
       size: 16in 9in;
       margin: 0;
     }

     @media print {
       * {
         -webkit-print-color-adjust: exact !important;
         print-color-adjust: exact !important;
       }

       body {
         background: transparent !important;
         padding: 0 !important;
         margin: 0 !important;
         display: block !important;
         min-height: auto !important;
       }

       #deck-controls {
         display: none !important;
       }

       #deck-container {
         width: 16in !important;
         height: auto !important;
         box-shadow: none !important;
         border-radius: 0 !important;
         overflow: visible !important;
         display: block !important;
       }

       .slide {
         display: flex !important;
         position: relative !important;
         width: 16in !important;
         height: 9in !important;
         page-break-after: always !important;
         break-after: page !important;
         padding: 0.52in 0.75in 0.42in 0.75in !important;
         overflow: hidden !important;
       }

       .action-title { font-size: 26pt !important; }
       .subheading { font-size: 13.5pt !important; }
       .metric-card .value { font-size: 30pt !important; }

       /* Calibrate table typography and prevent flexbox squeezing */
       .table-container {
         flex-shrink: 0 !important;
         width: 100% !important;
         overflow: visible !important;
       }

       table { font-size: 10.5pt !important; font-variant-numeric: tabular-nums !important; }
       thead th { font-size: 10pt !important; padding: 6px 10px !important; }
       tbody td { font-size: 10pt !important; padding: 5px 10px !important; }

       /* Compact table styling for 6-8 row ledgers */
       .table-compact th {
         padding: 4px 7px !important;
         font-size: 8.5pt !important;
       }
       .table-compact td {
         padding: 3.5px 7px !important;
         font-size: 8.5pt !important;
       }
     }
     ```
  4. **Closed-Loop Visual Inspection Protocol (Mandatory)**:
     - **Export Slide Images**: Automatically convert the compiled PDF into individual slide PNGs using native macOS Swift/PDFKit:
       ```bash
       cat << 'EOF' > /tmp/pdf_to_images.swift
       import Foundation
       import PDFKit
       import AppKit

       let pdfPath = "<project>_presentation.pdf"
       let outDir = "/tmp/deck_slides"
       try? FileManager.default.createDirectory(atPath: outDir, withIntermediateDirectories: true)

       guard let doc = PDFDocument(url: URL(fileURLWithPath: pdfPath)) else { exit(1) }
       for i in 0..<doc.pageCount {
           guard let page = doc.page(at: i) else { continue }
           let pageRect = page.bounds(for: .mediaBox)
           let image = NSImage(size: pageRect.size)
           image.lockFocus()
           guard let ctx = NSGraphicsContext.current?.cgContext else { continue }
           ctx.setFillColor(NSColor.white.cgColor)
           ctx.fill(CGRect(origin: .zero, size: pageRect.size))
           page.draw(with: .mediaBox, to: ctx)
           image.unlockFocus()
           if let tiff = image.tiffRepresentation,
              let rep = NSBitmapImageRep(data: tiff),
              let png = rep.representation(using: .png, properties: [:]) {
               try? png.write(to: URL(fileURLWithPath: "\(outDir)/slide_\(i + 1).png"))
           }
       }
       EOF
       swift /tmp/pdf_to_images.swift
       ```
     - **Inspect Each Slide via `view_file`**: Visually audit the PNG of every slide against the **5 Enhanced Verification Gates**:
       1. **Gate 1: Table Row Count Audit (Exact Row Match)**: Count the exact number of rows in the HTML/markdown source table. Visually count the rendered rows in the PNG image. Every single row (including the bottom row and its status badge) must be 100% visible. If any row is truncated, verify `flex-shrink: 0 !important;` on `.table-container` and apply `.table-compact`.
       2. **Gate 2: Bottom-Right Baseline Lock**: On all 2-column slides (`col-60/col-40` or `col-half`), draw an imaginary horizontal line across the bottom of the left column (chart). Verify that the right column's bottom border aligns with the exact same horizontal baseline (±5px). If there is dead white space at the bottom right, elongate cards, increase padding (`10px–14px`), increase body text (`11pt–12pt`), or add an anchor diagnostic verdict card.
       3. **Gate 3: Upper-to-Lower Anti-Void Gate**: Confirm no slide leaves more than 20% empty canvas in the lower half. For upper-half cards (Agenda, BLUF), enlarge card height (220–240px), numerals (28–36pt), and text, and introduce a lower-half synthesis panel or governance bar.
       4. **Gate 4: Footer Clearance Buffer**: Confirm at least 15px to 25px of clean white clearance between the bottom-most card border and the slide footer dividing rule. No text or borders may touch or cross the footer line.
       5. **Gate 5: Unicode Math & Zero LaTeX Artifacts**: Verify 100% clean Unicode (`×`, `−`, `+`, `→`, `▲`, `▼`, `•`) with zero raw LaTeX/KaTeX symbols (`$$...$$`, `$..$`, `\text{...}`).
     - If any slide fails, refine HTML/CSS and recompile before delivering to the user.

### Mode C: Native PowerPoint Presentation (`.pptx`)
- **Direct Output**: Produce `<project>_presentation.pptx`.
- **Execution Mechanism**:
  1. Write and run a Python generator script using `python-pptx`.
  2. Set widescreen dimensions (`prs.slide_width = Inches(13.333)`, `prs.slide_height = Inches(7.5)`).
  3. Generate native editable PowerPoint shapes, tables, cards, and high-res chart pictures.
  4. Ensure the `.pptx` file is saved and ready to open in Microsoft PowerPoint, Apple Keynote, or Google Slides.

---

## 4. Institutional Best Practices & Design Patterns

### Best Practice 1: Declarative Action-Titles vs. Passive Topic Labels
Never label a slide with what it is about. State the quantitative finding or business conclusion directly:

| Slide Type | Passive / Amateur Label (Strictly Prohibited) | Institutional Declarative Action-Title (Mandatory) |
| :--- | :--- | :--- |
| **KPI / BLUF** | "Executive Summary" | **"Simultaneous Adipose Mobilization and Muscle Accretion Validate Recomposition Efficacy"** |
| **Telemetry / Data** | "Weight & Fluid Shifts" | **"Scale Weight Decouples from Fat Loss as Creatine and Hypertrophy Add 700 g Muscle"** |
| **Progress / Tape** | "Waist Circumference" | **"Umbilical Waist Drops 2.0 cm Confirming Target Subcutaneous Fat Depletion Rate"** |
| **Diagnostics** | "EVOLT 360 Scan Results" | **"Diagnostic Body Scans Confirm Contractile Mass Gain While Eliminating Bilateral Asymmetry"** |
| **Performance** | "Strength Progression" | **"Progressive Overload Surges Across All Lifts Driven by Mechanical Tension and Neuromuscular Adaptation"** |
| **Roadmap** | "Next Steps & Roadmap" | **"A 4-Week Milestone Framework Bridges the Final 4.0 cm Waist Gap to Lock 10.0% Body Fat"** |

### Best Practice 2: Tiered Information Architecture (Eliminating Dead Space)
Never allow a slide to float 3 or 4 small bullet cards over an empty white void. Build institutional density through structured tiers:

```text
Standard Institutional Slide Architecture (16:9 Canvas)
┌─────────────────────────────────────────────────────────────────────────────────┐
│ TIER 1: Category Pill + Action-Title + Subheading (BLUF Evidence)               │
├──────────────────────────────────────┬──────────────────────────────────────────┤
│ TIER 2A: Primary Visual / Chart      │ TIER 2B: Structured Verification Ledger  │
│ High-DPI embedded chart graphic      │ 6–8 row milestone table with units,      │
│ (crisp borders, clean aspect ratio)  │ tabular numerics, and status pills       │
├──────────────────────────────────────┴──────────────────────────────────────────┤
│ TIER 3: Secondary Diagnostic Layer (Choose 1 or 2):                             │
│ • 3-Mechanism Pathway Cards (Biochemical, Metabolic, Mechanical)               │
│ • Symmetrical Expenditure / Energy Balance Ledgers                              │
│ • Multi-Stage Saturation / Hypertrophy Progression Timeline                     │
├─────────────────────────────────────────────────────────────────────────────────┤
│ TIER 4: Anchor Callout Bar (Clinical Assessment / Executive Sign-off)           │
├─────────────────────────────────────────────────────────────────────────────────┤
│ FOOTER: Metadata, Verification Source, Timestamp, and Page Number (X / Y)       │
└─────────────────────────────────────────────────────────────────────────────────┘
```

### Best Practice 3: Tabular Discipline & Symmetrical Matrices
- Keep side-by-side data tables symmetrical in row count (e.g. 7–8 rows per table).
- Right-align numeric data, left-align textual parameters, and center status pills/badges.
- Use clean 1px borders (`#e2e8f0`), subtle alternating zebra striping (`#ffffff` vs `#f8fafc`), and explicit delta colors (`+` green, `−` blue or red).

### Best Practice 4: The 5 Core Slide Archetypes & White Space Calibration Formulas

Every slide in an executive deck maps to one of five architectural archetypes. Calibrate white space, typography, and containers using these proven formulas:

```text
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                             THE 5 CORE SLIDE ARCHETYPES & LAYOUT FORMULAS                        │
├───────────────────────────────┬──────────────────────────────────────────────────────────────────┤
│ Archetype                     │ Layout Calibration & Anti-Void Formula                           │
├───────────────────────────────┼──────────────────────────────────────────────────────────────────┤
│ 1. Hero / Title Slide         │ • Hero Action Title (32–36pt) + Subtitle (16–18pt).              │
│                               │ • 6-Card Baseline Telemetry Badge Row (20–24pt values).          │
│                               │ • Enlarged parameter grid (12–14pt body text).                   │
│                               │ • Bottom Tier: 3-Pillar Strategic Governance Panel to anchor     │
│                               │   the full canvas baseline.                                      │
├───────────────────────────────┼──────────────────────────────────────────────────────────────────┤
│ 2. Agenda & BLUF Slides       │ • Upper Half: Enlarge 4–5 cards (min-height 220–240px,           │
│                               │   28–36pt numerals, 15–17pt titles, 12pt body text).             │
│                               │ • Lower Half: Never leave blank. Add a 3-point clinical or       │
│                               │   operational synthesis panel + governance status bar.           │
├───────────────────────────────┼──────────────────────────────────────────────────────────────────┤
│ 3. Split 2-Column Slides      │ • Left: Primary Visual / Chart spanning 100% column height.      │
│    (Chart + Table / Narrative)│ • Right: Enforce `.table-container { flex-shrink: 0 !important; }│
│                               │ • Apply `.table-compact` to 6–8 row tables.                      │
│                               │ • Elongate supporting narrative cards (10–14px padding).         │
│                               │ • Bottom Right Baseline Lock: Add an anchor diagnostic verdict   │
│                               │   card matching the left chart's bottom border exactly.          │
├───────────────────────────────┼──────────────────────────────────────────────────────────────────┤
│ 4. Dense Multi-Table /        │ • Tighten `.slide-body` flex gap from 12px down to 8px.          │
│    Operational Ledgers        │ • Apply `.table-compact` (3.5px vertical padding).               │
│                               │ • Padded micro-metric cards (7–9px internal padding).            │
│                               │ • Mandatory 15–20px clear buffer zone above footer dividing line.│
├───────────────────────────────┼──────────────────────────────────────────────────────────────────┤
│ 5. Milestone & Forward        │ • Top: 4 Chronological milestone cards with color-coded badges. │
│    Roadmap Slides             │ • Mid: 4-row target & checkpoint verification ledger.            │
│                               │ • Lower: 3 Protocol governance cards (e.g. Training, Diet, Tape).│
│                               │ • Anchor: Phase 2/3 transition horizon badges & clinical status. │
└───────────────────────────────┴──────────────────────────────────────────────────────────────────┘
```

### Best Practice 5: The Flexbox Table-Clipping Trap & Baseline Lock Protocol
- **Why Browsers Truncate Tables in Flex Columns**:
  When a column layout (`.col-40` or `.col-half`) is set to `display: flex; flex-direction: column; justify-content: space-between; height: 100%;`, the browser's flex layout algorithm treats any `.table-container` with default `flex-shrink: 1` as compressible. If the child cards, margins, and table rows collectively exceed the available height by even 10 pixels, flexbox will silently squeeze the table container and cut off the bottom rows (e.g. rows 7 and 8) instead of overflowing visibly!
- **Mandatory Prevention Rule**:
  1. **Strict Zero-Shrink**: Always specify `.table-container { flex-shrink: 0 !important; width: 100% !important; overflow: visible !important; }` in both screen CSS and `@media print`.
  2. **Compact Table Padding**: Use `.table-compact` with `padding: 3.5px 7px !important;` and `font-size: 8.5pt !important;` for tables with 6 or more rows sharing a column with other cards.
  3. **Right-Column Baseline Lock**: Ensure the right-hand column cards and bottom verdict bar span the remaining vertical space cleanly, aligning the bottom edge of the right column with the bottom edge of the left chart (±5px).

### Best Practice 6: Typography-First White Space Elimination (The Font-Size Scaling Rule)
- **The Core Law**: When a slide has awkward, hollow, or excessive white space, the most effective and elegant solution is to **scale up the typography across all textboxes and containers**, rather than adding artificial padding or leaving empty voids.
- **Why Typography Scaling Works**:
  1. **Executive Legibility**: Slides with small 8–9pt body text look unpolished, sparse, and amateurish. Scaling up body copy to 11–12.5pt, subheadings to 13.5–14.5pt, and headline metrics to 32–36pt creates instant executive presence and high readability at distance.
  2. **Organic Canvas Filling**: Increasing font size and pairing it with comfortable line-height (`1.4–1.5`) naturally expands text blocks, card heights, and tables to consume vertical and horizontal space proportionally.
  3. **Zero Artificial Bloat**: Instead of adding empty margin, the canvas is filled with high-impact, readable words and numbers.
- **Systematic Typography Scaling Reference**:

| Element | Default / Minimum Size | Scaled-Up Anti-Void Size | Impact on White Space |
| :--- | :--- | :--- | :--- |
| **Hero Title** | `26pt` (`30px`) | `32pt – 36pt` (`38px – 42px`) | Anchors slide canvas, eliminates header void |
| **Standard Action Title** | `22pt – 23pt` | `25pt – 27pt` (`28px – 32px`) | Commands attention, fills top width |
| **Subheadings** | `11.5pt – 12pt` | `13.5pt – 14.5pt` | Bridges title to evidence without gap |
| **Headline Metric Numbers** | `26pt – 28pt` | `32pt – 36pt` (weight 800) | Eliminates top-half hollowness on BLUF slides |
| **Card Headings** | `10pt – 11pt` | `12pt – 13.5pt` | Gives structural weight to multi-column cards |
| **Card Body / Bullet Points** | `9pt – 9.5pt` | `10.5pt – 12pt` (line-height 1.45) | Fills card height organically down to bottom baseline |
| **Table Base Font** | `9pt` | `10pt – 10.5pt` (`tabular-nums`) | Fills table cells legibly |
| **Sign-Off / Verdict Bar** | `9.5pt – 10pt` | `11pt – 12pt` | Anchors bottom canvas before footer rule |

- **Balancing Font Size with Footer Buffer**:
  On ultra-dense slides (e.g. 5–6 tier roadmap or dual-table slides), scaling up fonts must be paired with **tightened flex gaps** (e.g., reduce `gap: 12px` to `gap: 7px–8px`) and calibrated card padding (e.g., `8px 12px`). This ensures that the enlarged typography never encroaches on the mandatory **15–20px footer buffer zone**.

---

## 5. Mandatory Format Confirmation Gate (STOP & ASK FIRST)

> [!IMPORTANT]
> **CRITICAL RULE**: Before generating any slide code, writing HTML, compiling PDF, or executing Python PPTX scripts, the agent **MUST STOP AND ASK THE USER FIRST** for their desired presentation format, UNLESS the user explicitly specified the format in their initial prompt.

### Format Selection Prompt
When the format is not explicitly stated, ask the user:
> *"Before I build the deck, which presentation format(s) would you prefer?*
> 1. **Interactive HTML (`.html`)** – Standalone web presentation with keyboard arrows, fullscreen toggle, and live animations.
> 2. **Print-Ready PDF (`.pdf`)** – Pixel-perfect compiled 16:9 widescreen PDF ready to share and print.
> 3. **PowerPoint PPTX (`.pptx`)** – Native editable slides for PowerPoint, Keynote, or Google Slides.
> 4. **All Three Formats** – Build and deliver HTML, PDF, and PPTX simultaneously."

**Do NOT proceed with generating files until the user has confirmed their choice.**

---

## 6. Verification Checklist Before Delivery

- [ ] **MANDATORY GATE**: Did you ask the user first for their format preference (HTML, PDF, PPTX, or all) before generating the files (or did the user explicitly pre-specify it)?
- [ ] Does every slide heading form a complete, active declarative takeaway sentence?
- [ ] Is there a Title Slide, followed by an Outline Slide, followed by an Executive Summary Slide?
- [ ] Does every content slide contain structured evidence (table, chart image, or diagram)?
- [ ] Are there contextual subheadings and explanatory captions with data sources/caveats on every data slide?
- [ ] Did you directly build the exact requested format(s) on disk:
      - `.html`: Interactive standalone presentation file
      - `.pdf`: Compiled 16:9 PDF presentation file via Headless Google Chrome
      - `.pptx`: Native PowerPoint presentation file
- [ ] **CLOSED-LOOP VISUAL INSPECTION (Mandatory for PDF)**:
      - [ ] Extracted all slide pages to PNG and visually inspected each slide with `view_file`.
      - [ ] **Typography-First Anti-Void Audit**: Were font sizes scaled up (titles 25–28pt, metrics 32–36pt, card body 10.5–12pt) to organically absorb awkward white space across all slides?
      - [ ] **Gate 1 (Table Row Audit)**: Counted source table rows and verified 100% of rows (including bottom milestone rows) are visible in the rendered PNG without clipping.
      - [ ] **Gate 2 (Baseline Lock)**: Verified in 2-column layouts that the right column locks to the exact same bottom baseline as the left chart (zero bottom-right void).
      - [ ] **Gate 3 (Anti-Void Audit)**: Verified upper-half cards (Agenda, BLUF) are enlarged and lower-half canvas is anchored with structured synthesis panels.
      - [ ] **Gate 4 (Footer Clearance)**: Verified an explicit 15–20px buffer zone between the bottom-most card border and the slide footer line.
      - [ ] **Gate 5 (Unicode Math & Clean Rendering)**: Confirmed 100% clean Unicode (`×`, `−`, `+`, `→`, `▲`, `▼`, `•`) with zero raw LaTeX/KaTeX artifacts.



