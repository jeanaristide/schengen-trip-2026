---
name: white-theme-web-table
description: >-
  Standard for building clean, minimalist itinerary websites featuring a pure white/light background with table-only focus. Strictly removes dark mode, redundant cards, and export/print buttons.
---

# White Theme Web Table Skill

This skill governs the creation and styling of minimalist, high-readability travel itinerary web applications designed with a **pure white / light background** and a **strict table-only focus**.

---

## 1. Architectural Directives

1. **Pure White Background Only (`#ffffff`)**:
   - The webpage must strictly use a clean white background (`background-color: #ffffff;`).
   - Do NOT include dark mode, dark themes, or theme-switcher toggle buttons unless explicitly requested by the user.
   - Use high-contrast typography: deep charcoal (`#0f172a`, `#1e293b`) for primary headings and text, muted slate (`#64748b`) for metadata.

2. **Table-Only Presentation (No Extraneous Sections)**:
   - Strip out bulky hero carousels, separate flight cards, map widgets, food grids, and secondary card views.
   - Strip out print/pdf export buttons unless explicitly requested.
   - The **Master Itinerary Table** is the sole core component of the page, preceded only by a clean minimalist title header and interactive filter pills.

3. **Mandatory 4-Column Schema**:
   | Day & Date | Location | Action / Activity | Cost |
   | :--- | :--- | :--- | :--- |

---

## 2. CSS Design Rules (Light / White Standard)

```css
:root {
  --bg-page: #ffffff;
  --bg-table-header: #f8fafc;
  --bg-card: #ffffff;
  --text-primary: #0f172a;
  --text-secondary: #475569;
  --text-muted: #64748b;
  --border-light: #e2e8f0;
  --border-header: #cbd5e1;
  --accent-gold: #f59e0b;
  --accent-gold-dark: #d97706;
}

body {
  background-color: var(--bg-page);
  color: var(--text-primary);
  font-family: 'Plus Jakarta Sans', sans-serif;
  margin: 0;
  padding: 0;
}

/* Master Itinerary Table */
.master-itinerary-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background: #ffffff;
  border-radius: 12px;
  border: 1px solid var(--border-light);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
  font-size: 0.9rem;
}

.master-itinerary-table th {
  background: var(--bg-table-header);
  color: var(--text-primary);
  font-weight: 700;
  padding: 14px 18px;
  border-bottom: 2px solid var(--border-header);
  text-align: left;
}

.master-itinerary-table td {
  padding: 16px 18px;
  border-bottom: 1px solid var(--border-light);
  vertical-align: top;
}

.master-itinerary-table tr:hover td {
  background: #fbfcfe;
}
```

---

## 3. Cell Specifications

* **Column 1 (Day & Date)**: Bold Day badge pill (`background: linear-gradient(135deg, #f59e0b, #ea580c)`), date label, and clean status tag.
* **Column 2 (Location)**: Major landmarks and clear, colorful cultural/faith badges (`.badge-temple`, `.badge-heritage`, `.badge-highland`, `.badge-modern`, `.badge-cave`).
* **Column 3 (Action / Activity)**: Flat atomic bullet list (`<li>`), embedded times (`<span class="time-chip">`), underlined exact places (`<u>Exact Site</u>`), personalized with travel companions' names.
* **Column 4 (Cost)**: Itemized cost lines with daily bold total.

---

## 4. Mobile Responsiveness (Automatic Detection)

1. **Automatic Viewport Detection (`@media (max-width: 768px)`)**:
   * **Do NOT use manual toggle buttons** (e.g. `[ Mobile View | Full Table ]`) or local storage switches.
   * Mobile devices must be detected automatically via pure CSS media queries.
   * **On Mobile (Viewport ≤ 768px)**:
     - The table header (`<thead>`) is hidden (`display: none;`).
     - Rows (`<tr>`) and cells (`<td>`) are converted to `display: flex; flex-direction: column;` / `display: block;`.
     - Each day row automatically becomes a clean, full-width vertical card (`border-radius: 14px`, `box-shadow`, separated by vertical gaps).
     - Column 1 (`Day & Date`) renders as a styled card header with day badges and dates side-by-side.
     - Column 4 (`Cost`) renders with a light background as the card footer.
   * **On Desktop (Viewport > 768px)**:
     - Automatically displays the standard 4-column master table (`min-width: 980px`).

2. **Horizontal Chip Carousel for Filters**:
   * Filter bars on mobile must scroll horizontally (`overflow-x: auto; white-space: nowrap; -webkit-overflow-scrolling: touch;`) to preserve vertical space and provide fluid touch-friendly interaction.

