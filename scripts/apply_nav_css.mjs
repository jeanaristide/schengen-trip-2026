import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

console.log('--- Starting Script to Split Column into Sights Highlights & Spot-by-Spot Navigation Guide ---');

// 1. Update css/style.css
const cssPath = path.join(rootDir, 'css/style.css');
let css = readFileSync(cssPath, 'utf8');

const navColumnCss = `
/* ==========================================================================
   Spot-by-Spot Navigation & Transit Guide Styles
   ========================================================================== */
.col-table-nav {
  min-width: 320px;
  vertical-align: top;
}

.table-nav-list,
.card-nav-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.nav-step-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-left: 3.5px solid #2563eb;
  border-radius: 8px;
  padding: 8px 10px;
  transition: all 0.15s ease;
}

.nav-step-card:hover {
  background: #f0fdf4;
  border-color: #86efac;
  border-left-color: #10b981;
}

.nav-step-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 4px;
}

.nav-step-spot {
  font-size: 11.5px;
  font-weight: 800;
  color: #0f172a;
  line-height: 1.25;
}

.nav-step-badge {
  font-size: 10px;
  font-weight: 700;
  background: #dbeafe;
  color: #1d4ed8;
  border: 1px solid #bfdbfe;
  padding: 1px 7px;
  border-radius: 9999px;
  white-space: nowrap;
}

.nav-step-route {
  font-size: 11.5px;
  color: #1e293b;
  line-height: 1.4;
  margin-bottom: 3px;
}

.nav-step-route strong {
  color: #2563eb;
  font-weight: 700;
}

.nav-step-desc {
  font-size: 11px;
  color: #475569;
  line-height: 1.4;
}

.nav-step-desc strong {
  color: #0f172a;
}

.nav-step-tip {
  font-size: 10.5px;
  color: #92400e;
  background: #fef3c7;
  border: 1px solid #fde68a;
  border-radius: 5px;
  padding: 3px 7px;
  margin-top: 4px;
  line-height: 1.35;
}

/* Card view navigation container */
.card-nav-section {
  margin-top: 14px;
  padding-top: 12px;
  border-top: 1px dashed #cbd5e1;
}

.card-nav-title {
  font-size: 12px;
  font-weight: 800;
  color: #1e40af;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
}
`;

if (!css.includes('.col-table-nav')) {
  css += '\n' + navColumnCss;
  writeFileSync(cssPath, css, 'utf8');
  console.log('Added .col-table-nav styles to css/style.css');
} else {
  console.log('.col-table-nav styles already exist in css/style.css');
}
