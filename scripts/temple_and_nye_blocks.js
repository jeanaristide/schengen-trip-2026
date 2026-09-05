const fs = require('fs');
const path = require('path');

const indexHtmlPath = path.join(__dirname, '../index.html');
const appJsPath = path.join(__dirname, '../js/app.js');
const galleryDataPath = path.join(__dirname, '../js/gallery-data.js');
const styleCssPath = path.join(__dirname, '../css/style.css');

// 1. Add CSS for Confirmed Temple Dossier and NYE Fireworks Guide
let css = fs.readFileSync(styleCssPath, 'utf8');

const newStyles = `
/* ==========================================================================
   Confirmed LDS Temple Reservations Dossier
   ========================================================================== */
.temple-reservations-dossier {
  background: linear-gradient(135deg, #f0fdf4 0%, #ffffff 50%, #eff6ff 100%);
  border: 2px solid #86efac;
  border-radius: 16px;
  padding: 22px 24px;
  margin-bottom: 24px;
  box-shadow: 0 4px 14px rgba(16, 185, 129, 0.08);
}

.temple-dossier-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 16px;
  border-bottom: 1px solid #bbf7d0;
  padding-bottom: 12px;
}

.temple-dossier-title-group {
  display: flex;
  align-items: center;
  gap: 12px;
}

.temple-dossier-icon {
  font-size: 2rem;
}

.temple-dossier-h3 {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 800;
  color: #065f46;
}

.temple-dossier-subtitle {
  margin: 2px 0 0;
  font-size: 0.84rem;
  color: #047857;
}

.temple-dossier-badge {
  background: #059669;
  color: #ffffff;
  font-size: 0.78rem;
  font-weight: 800;
  padding: 4px 12px;
  border-radius: 9999px;
  box-shadow: 0 2px 6px rgba(5, 150, 105, 0.25);
}

.temple-reservations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 14px;
}

.temple-res-card {
  background: #ffffff;
  border: 1px solid #cbd5e1;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.03);
  position: relative;
  transition: all 0.2s ease;
}

.temple-res-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);
  border-color: #86efac;
}

.temple-res-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}

.temple-res-date {
  font-weight: 800;
  font-size: 0.95rem;
  color: #0f172a;
}

.temple-res-tag {
  background: #ecfdf5;
  color: #047857;
  border: 1px solid #a7f3d0;
  font-size: 0.72rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 9999px;
}

.temple-res-session {
  font-size: 0.88rem;
  font-weight: 800;
  color: #15803d;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.temple-res-name {
  font-size: 0.92rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 4px;
}

.temple-res-patron {
  font-size: 0.78rem;
  color: #64748b;
  margin-top: 4px;
  padding-top: 6px;
  border-top: 1px dashed #e2e8f0;
}

/* ==========================================================================
   Arc de Triomphe NYE Fireworks & Countdown Guide
   ========================================================================== */
.nye-fireworks-guide-card {
  background: linear-gradient(135deg, #1e1b4b 0%, #312e81 60%, #4338ca 100%);
  color: #ffffff;
  border-radius: 16px;
  padding: 20px 24px;
  margin-top: 14px;
  box-shadow: 0 6px 18px rgba(30, 27, 75, 0.25);
  border: 1px solid #6366f1;
}

.nye-guide-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  padding-bottom: 12px;
  margin-bottom: 14px;
}

.nye-guide-title {
  display: flex;
  align-items: center;
  gap: 10px;
}

.nye-guide-title h4 {
  margin: 0;
  font-size: 1.12rem;
  font-weight: 800;
  color: #fde047;
}

.nye-sweet-spot-box {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 14px 16px;
  margin-bottom: 14px;
}

.nye-sweet-spot-title {
  font-weight: 800;
  color: #67e8f9;
  font-size: 0.95rem;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.nye-perks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 10px;
  margin-top: 10px;
}

.nye-perk-item {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 10px 12px;
  font-size: 0.8rem;
  line-height: 1.45;
}

.nye-perk-item strong {
  color: #a5f3fc;
  display: block;
  margin-bottom: 2px;
}

.nye-mistakes-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 10px;
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px dashed rgba(255, 255, 255, 0.15);
}

.nye-mistake-pill {
  background: rgba(239, 68, 68, 0.15);
  border: 1px solid rgba(248, 113, 113, 0.3);
  color: #fecaca;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 0.78rem;
  line-height: 1.4;
}

.nye-mistake-pill strong {
  color: #fca5a5;
}

.nye-transit-footer {
  margin-top: 12px;
  background: rgba(16, 185, 129, 0.15);
  border: 1px solid rgba(52, 211, 153, 0.3);
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 0.8rem;
  color: #d1fae5;
  line-height: 1.45;
}

.nye-transit-footer strong {
  color: #6ee7b7;
}
`;

if (!css.includes('temple-reservations-dossier')) {
  css += newStyles;
  fs.writeFileSync(styleCssPath, css, 'utf8');
  console.log('Successfully added Temple Dossier and NYE guide styles to style.css!');
}

// 2. Build Temple Dossier HTML block
const templeDossierHtml = `
    <!-- Confirmed LDS Temple Reservations Dossier -->
    <div class="temple-reservations-dossier" id="templeReservationsDossier">
      <div class="temple-dossier-header">
        <div class="temple-dossier-title-group">
          <span class="temple-dossier-icon">🏛️</span>
          <div>
            <h3 class="temple-dossier-h3">Confirmed LDS Temple Endowment Reservations</h3>
            <p class="temple-dossier-subtitle">Official appointments booked for Jean Aristide Belleza Aquino across Netherlands, Germany &amp; France</p>
          </div>
        </div>
        <span class="temple-dossier-badge">✅ 3 Appointments Confirmed</span>
      </div>

      <div class="temple-reservations-grid">
        <!-- 1. The Hague Temple -->
        <div class="temple-res-card">
          <div class="temple-res-top">
            <span class="temple-res-date">📅 Friday, 18 Dec 2026</span>
            <span class="temple-res-tag">Netherlands</span>
          </div>
          <div class="temple-res-session">⏰ Arrive by 9:10 AM (9:30 AM Session)</div>
          <div class="temple-res-name">The Hague Netherlands Temple</div>
          <div style="font-size: 0.78rem; color: #475569;">Osylaan 2, 2712 BZ Zoetermeer (near Den Haag)</div>
          <div class="temple-res-patron">👤 <strong>Attending:</strong> Jean Aristide Belleza Aquino · Proxy Endowment</div>
        </div>

        <!-- 2. Frankfurt Temple -->
        <div class="temple-res-card">
          <div class="temple-res-top">
            <span class="temple-res-date">📅 Tuesday, 22 Dec 2026</span>
            <span class="temple-res-tag">Germany</span>
          </div>
          <div class="temple-res-session">⏰ Arrive by 5:15 PM (6:00 PM Session)</div>
          <div class="temple-res-name">Frankfurt Germany Temple</div>
          <div style="font-size: 0.78rem; color: #475569;">Talstraße 10, 61381 Friedrichsdorf (Taunus)</div>
          <div class="temple-res-patron">👤 <strong>Attending:</strong> Jean Aristide Belleza Aquino · Proxy Endowment</div>
        </div>

        <!-- 3. Paris France Temple -->
        <div class="temple-res-card">
          <div class="temple-res-top">
            <span class="temple-res-date">📅 Tuesday, 29 Dec 2026</span>
            <span class="temple-res-tag">France</span>
          </div>
          <div class="temple-res-session">⏰ Arrive by 2:00 PM (2:30 PM Session)</div>
          <div class="temple-res-name">Paris France Temple</div>
          <div style="font-size: 0.78rem; color: #475569;">46 Boulevard Saint-Antoine, 78150 Le Chesnay (Versailles)</div>
          <div class="temple-res-patron">👤 <strong>Attending:</strong> Jean Aristide Belleza Aquino · Proxy Endowment</div>
        </div>
      </div>
    </div>
`;

// 3. Build NYE Fireworks Guide HTML block
const nyeFireworksGuideHtml = `
      <!-- Arc de Triomphe NYE Fireworks & Countdown Guide -->
      <div class="nye-fireworks-guide-card">
        <div class="nye-guide-header">
          <div class="nye-guide-title">
            <span style="font-size: 1.4rem;">🎆</span>
            <h4>Arc de Triomphe New Year's Eve Midnight Fireworks Guide</h4>
          </div>
          <span style="background: #eab308; color: #000; font-size: 0.75rem; font-weight: 800; padding: 3px 10px; border-radius: 9999px;">✨ Verified Local Intel</span>
        </div>

        <div class="nye-sweet-spot-box">
          <div class="nye-sweet-spot-title">
            <span>📍</span>
            <span>The "Goldilocks" Sweet Spot: No. 100–110 Avenue des Champs-Élysées</span>
          </div>
          <p style="margin: 0; font-size: 0.84rem; color: #e2e8f0; line-height: 1.5;">
            Position yourself mid-avenue between <b>Avenue George V</b> and <b>Rue Pierre Charron / Rue de Berri</b> (approx. 350 to 450 meters from the monument).
          </p>

          <div class="nye-perks-grid">
            <div class="nye-perk-item">
              <strong>👁️ Perfect Eye-Level Framing:</strong>
              Avoids the painful 75° neck crane of standing right under the 50m Arc. Fits the entire facade and high-altitude fireworks in your photo frame.
            </div>
            <div class="nye-perk-item">
              <strong>🎬 Direct 3D Video Mapping:</strong>
              The official musical projection show (starts 23:40) faces directly down the Champs-Élysées onto this eastern facade.
            </div>
            <div class="nye-perk-item">
              <strong>💨 Fast Midnight Escape Route:</strong>
              When the show finishes, slip immediately down side streets (Rue Pierre Charron) without being trapped in the 500,000-person bottleneck at the roundabout.
            </div>
          </div>
        </div>

        <div class="nye-mistakes-row">
          <div class="nye-mistake-pill">
            <strong>🚫 Avoid Place de l'Étoile Roundabout:</strong> Fenced off by police barricades; heavy crowd crush and blocked visibility of fireworks bursts.
          </div>
          <div class="nye-mistake-pill">
            <strong>🚫 Avoid Rear/Side Avenues (Grande Armée / Kléber):</strong> You will completely miss the famous 3D projection show and countdown.
          </div>
        </div>

        <div class="nye-transit-footer">
          <strong>🚇 Inbound &amp; Return Transit Strategy (100% Free All Night):</strong><br>
          • <b>Inbound (Arrive 21:30–22:15):</b> Take Metro Line 1/9 to <i>Franklin D. Roosevelt</i> or Line 9 to <i>Saint-Philippe-du-Roule</i> (stations near the Arc close early).<br>
          • <b>Outbound (Post-Midnight):</b> Walk east away from the crowd to <i>Franklin D. Roosevelt</i> or walk 15 mins to <i>Madeleine</i> for <b>automated Metro Line 14</b> direct to <i>Porte de Choisy</i> (Break &amp; Home Paris Italie)!
        </div>
      </div>
`;

// Export for use in script
module.exports = {
  templeDossierHtml,
  nyeFireworksGuideHtml
};
