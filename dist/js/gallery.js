/**
 * Visual Day-by-Day Photo Gallery Interactive Script
 * Sourced from window.galleryData and window.allSightsFlat
 */

const galleryData = window.galleryData || [];
const getAllSights = () => (window.allSightsFlat && window.getAllSights().length ? window.allSightsFlat : (window.galleryData || []).flatMap(d => d.sights.map(s => ({ ...s, dayNum: d.dayNum, day: d.day, city: d.city, badgeClass: d.badgeClass }))));

let currentFilter = 'all';
let currentLightboxIndex = 0;
let currentLightboxPhotoIndex = 0;

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  renderDayPills();
  renderGallerySections();
  setupFilterEventListeners();
  setupSearchEventListener();
  setupLightbox();
  setupScrollSpy();
});

// Render Quick Jump Day Pills Strip
function renderDayPills() {
  const container = document.getElementById('dayQuickNav');
  if (!container) return;

  container.innerHTML = galleryData.map(day => `
    <a href="#day-${day.dayNum}" class="day-pill" data-day="${day.dayNum}">
      <span>${getDayFlag(day.countryFilter)}</span>
      <span>${day.day}</span>
    </a>
  `).join('');

  // Smooth scroll click handler
  container.querySelectorAll('.day-pill').forEach(pill => {
    pill.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = pill.getAttribute('href');
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        highlightDaySection(targetEl);
      }
    });
  });
}

function getDayFlag(country) {
  switch (country) {
    case 'france': return '🇫🇷';
    case 'switzerland': return '🇨🇭';
    case 'netherlands': return '🇳🇱';
    case 'germany': return '🇩🇪';
    case 'uk': return '🇬🇧';
    default: return '🚌';
  }
}

// Render All Chronological Day Sections
function renderGallerySections(filter = 'all', searchQuery = '') {
  const container = document.getElementById('galleryContainer');
  if (!container) return;

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredDays = galleryData.filter(day => {
    // Country filter match
    const matchesCountry = (filter === 'all' || day.countryFilter === filter);
    if (!matchesCountry) return false;

    // Search query match across day title, city, or sight names/descriptions
    if (!normalizedQuery) return true;
    const matchesDay = day.title.toLowerCase().includes(normalizedQuery) ||
                       day.city.toLowerCase().includes(normalizedQuery) ||
                       day.day.toLowerCase().includes(normalizedQuery);
    const matchesSights = day.sights.some(s => 
      s.name.toLowerCase().includes(normalizedQuery) ||
      s.desc.toLowerCase().includes(normalizedQuery) ||
      s.category.toLowerCase().includes(normalizedQuery) ||
      s.location.toLowerCase().includes(normalizedQuery)
    );
    return matchesDay || matchesSights;
  });

  // Update counter stats
  const counterEl = document.getElementById('galleryStatsCount');
  let totalVisibleSights = 0;
  filteredDays.forEach(d => totalVisibleSights += d.sights.length);
  if (counterEl) {
    counterEl.innerHTML = `Showing <strong>${filteredDays.length} Days</strong> · <strong>${totalVisibleSights} Sites</strong> (100% Authentic Photos)`;
  }

  if (filteredDays.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 60px 20px; background: rgba(255,255,255,0.03); border-radius: 16px; border: 1px dashed rgba(255,255,255,0.15);">
        <p style="font-size: 1.2rem; color: #cbd5e1; margin-bottom: 8px;">No sites found matching your filter criteria.</p>
        <button type="button" class="btn-sight-action" onclick="resetAllFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filteredDays.map(day => `
    <article class="day-section" id="day-${day.dayNum}">
      <header class="day-header">
        <div>
          <div class="day-title-meta">
            <span class="day-number-badge ${day.badgeClass}">${day.day}</span>
            <span class="day-date-text">📅 ${day.date}</span>
            <span class="day-city-flag">${getDayFlag(day.countryFilter)} ${day.city}</span>
          </div>
          <h2 class="day-theme-title">${day.title}</h2>
        </div>
        <div class="day-info-pills">
          <div class="day-stay-badge" title="Overnight Accommodation">
            <span>🏨</span>
            <span><strong>Stay:</strong> ${day.stay}</span>
          </div>
          <div class="day-transit-badge" title="Transit & Transport">
            <span>${day.transit}</span>
          </div>
        </div>
      </header>

      <div class="sights-grid">
        ${day.sights.map(sight => {
          const globalIdx = getAllSights().findIndex(s => s.name === sight.name && s.dayNum === day.dayNum);
          const photos = sight.photos && sight.photos.length ? sight.photos : [{ url: sight.image, caption: sight.name }];
          return `
            <div class="sight-photo-card" data-global-index="${globalIdx}" id="gallery-sight-card-${globalIdx}">
              <div class="sight-img-wrapper" onclick="openLightbox(${globalIdx}, 0)" title="Click to view full-resolution photo">
                <img src="${photos[0].url}" alt="${sight.name}" loading="lazy" class="gallery-card-hero-img">
                <span class="sight-category-tag">${sight.category}</span>
                <span class="card-multi-photo-count-badge">📸 ${photos.length} Photos</span>
                <div class="sight-expand-overlay">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                  <span>Enlarge Photo (${photos.length} Perspectives)</span>
                </div>
              </div>

              <div class="sight-card-body">
                <!-- 5-Photo Interactive Thumbnail Strip -->
                <div class="card-photo-thumbnails-strip" title="Browse all 5 perspectives of ${sight.name}">
                  ${photos.map((p, pIdx) => `
                    <button type="button" class="card-perspective-thumb ${pIdx === 0 ? 'active' : ''}" 
                            data-photo-idx="${pIdx}" 
                            title="${p.caption}"
                            onclick="swapGalleryCardActivePhoto(${globalIdx}, ${pIdx})">
                      <img src="${p.url}" alt="${p.caption}">
                      <span class="thumb-step-num">${pIdx + 1}</span>
                    </button>
                  `).join('')}
                </div>
                <div class="card-active-caption-row">
                  <span class="card-caption-icon">🔍</span>
                  <span class="card-active-caption-text" id="gallery-caption-${globalIdx}">${photos[0].caption}</span>
                </div>

                <div class="sight-time-loc" style="margin-top: 8px;">
                  <span class="sight-time">⏰ ${sight.time}</span>
                  <span>📍 ${sight.location ? sight.location.split(',')[0] : (sight.city || 'Europe')}</span>
                </div>
                <h3 class="sight-name">${sight.name}</h3>
                ${sight.admission ? `<div class="sight-admission-badge ${sight.isPaid ? 'paid' : 'free'}">${sight.isPaid ? '🎟️ Admission: ' : '✨ Entry: '}${sight.admission}</div>` : ''}
                <p class="sight-desc" style="margin-top: 8px;">${sight.desc}</p>
                
                <div class="sight-actions-row">
                  <button type="button" class="btn-sight-action" onclick="openLightbox(${globalIdx}, 0)">
                    📸 View ${photos.length} Photos
                  </button>
                  <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(sight.mapsQuery || sight.name)}" 
                     target="_blank" rel="noopener noreferrer" class="btn-sight-action">
                    📍 Google Maps
                  </a>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </article>
  `).join('');
}

// Highlight section briefly upon quick jump
function highlightDaySection(el) {
  document.querySelectorAll('.day-section').forEach(s => s.classList.remove('highlight-active'));
  el.classList.add('highlight-active');
  setTimeout(() => {
    el.classList.remove('highlight-active');
  }, 2000);
}

// Setup Country & Region Filter Event Listeners
function setupFilterEventListeners() {
  const tabs = document.querySelectorAll('.country-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentFilter = tab.dataset.country;
      const searchInput = document.getElementById('gallerySearchInput');
      const query = searchInput ? searchInput.value : '';
      renderGallerySections(currentFilter, query);
    });
  });
}

// Setup Search Filter
function setupSearchEventListener() {
  const searchInput = document.getElementById('gallerySearchInput');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    renderGallerySections(currentFilter, e.target.value);
  });
}

function resetAllFilters() {
  currentFilter = 'all';
  const tabs = document.querySelectorAll('.country-tab');
  tabs.forEach(t => t.classList.remove('active'));
  if (tabs[0]) tabs[0].classList.add('active');

  const searchInput = document.getElementById('gallerySearchInput');
  if (searchInput) searchInput.value = '';

  renderGallerySections('all', '');
}

// Setup ScrollSpy for Quick Jump Pills
function setupScrollSpy() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        if (!id) return;
        const dayNum = id.replace('day-', '');
        document.querySelectorAll('.day-pill').forEach(pill => {
          if (pill.dataset.day === dayNum) {
            pill.classList.add('active');
            pill.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
          } else {
            pill.classList.remove('active');
          }
        });
      }
    });
  }, { threshold: 0.25 });

  document.querySelectorAll('.day-section').forEach(sec => observer.observe(sec));
}

// ==========================================================================
// Lightbox Modal Logic
// ==========================================================================
function setupLightbox() {
  const modal = document.getElementById('lightboxModal');
  if (!modal) return;

  modal.querySelector('.lightbox-close-btn').addEventListener('click', closeLightbox);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeLightbox();
  });

  modal.querySelector('.lightbox-nav-prev').addEventListener('click', (e) => {
    e.stopPropagation();
    stepLightbox(-1);
  });
  modal.querySelector('.lightbox-nav-next').addEventListener('click', (e) => {
    e.stopPropagation();
    stepLightbox(1);
  });

  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') stepLightbox(-1);
    if (e.key === 'ArrowRight') stepLightbox(1);
  });
}

function openLightbox(index, photoIndex = 0) {
  if (index < 0 || index >= getAllSights().length) return;
  currentLightboxIndex = index;
  currentLightboxPhotoIndex = (photoIndex >= 0) ? photoIndex : 0;
  updateLightboxContent();
  const modal = document.getElementById('lightboxModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeLightbox() {
  const modal = document.getElementById('lightboxModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function stepLightbox(delta) {
  const sights = getAllSights();
  const sight = sights[currentLightboxIndex];
  const photos = (sight && sight.photos && sight.photos.length) ? sight.photos : [{ url: sight.image, caption: sight.name }];

  currentLightboxPhotoIndex += delta;

  if (currentLightboxPhotoIndex >= photos.length) {
    currentLightboxIndex = (currentLightboxIndex + 1) % sights.length;
    currentLightboxPhotoIndex = 0;
  } else if (currentLightboxPhotoIndex < 0) {
    currentLightboxIndex = (currentLightboxIndex - 1 + sights.length) % sights.length;
    const prevSight = sights[currentLightboxIndex];
    currentLightboxPhotoIndex = (prevSight && prevSight.photos && prevSight.photos.length) ? prevSight.photos.length - 1 : 0;
  }

  updateLightboxContent();
}

function updateLightboxContent() {
  const sight = getAllSights()[currentLightboxIndex];
  if (!sight) return;

  const modal = document.getElementById('lightboxModal');
  if (!modal) return;

  const imgEl = modal.querySelector('.lightbox-img');
  const dayBadgeEl = modal.querySelector('.lightbox-day-badge');
  const titleEl = modal.querySelector('.lightbox-title');
  const descEl = modal.querySelector('.lightbox-desc');
  const mapsBtnEl = modal.querySelector('.lightbox-maps-btn');
  const counterEl = modal.querySelector('.lightbox-counter');

  const photos = (sight.photos && sight.photos.length) ? sight.photos : [{ url: sight.image, caption: sight.name }];
  if (currentLightboxPhotoIndex < 0 || currentLightboxPhotoIndex >= photos.length) {
    currentLightboxPhotoIndex = 0;
  }
  const photo = photos[currentLightboxPhotoIndex];

  imgEl.src = photo.url;
  imgEl.alt = photo.caption;
  dayBadgeEl.innerHTML = `${sight.day || ''} · <strong>${sight.city || ''}</strong> · <strong>${sight.category || ''}</strong>${sight.admission ? ` · <span style="font-weight:700; color:${sight.isPaid ? '#ef4444' : '#22c55e'};">${sight.isPaid ? '🎟️ ' : '✨ '}${sight.admission}</span>` : ''}`;
  titleEl.innerHTML = `${sight.name} <span class="lightbox-perspective-indicator">Perspective ${currentLightboxPhotoIndex + 1} of ${photos.length}</span>`;
  descEl.innerHTML = `
    <div class="lightbox-caption-box">
      <span class="caption-tag">📸 Perspective ${currentLightboxPhotoIndex + 1} of ${photos.length}:</span>
      <strong class="caption-text">${photo.caption}</strong>
    </div>
    <p class="sight-main-desc" style="margin-top: 10px; color: #94a3b8; font-size: 0.92rem; line-height: 1.55;">${sight.desc}</p>
  `;
  counterEl.textContent = `Photo ${currentLightboxPhotoIndex + 1} of ${photos.length} · Landmark ${currentLightboxIndex + 1} of ${getAllSights().length} · 📍 ${sight.location}`;

  // Perspective Thumbnails Bar inside Gallery Lightbox
  let thumbsBar = modal.querySelector('#galleryLightboxThumbsBar');
  if (!thumbsBar) {
    thumbsBar = document.createElement('div');
    thumbsBar.id = 'galleryLightboxThumbsBar';
    thumbsBar.className = 'lightbox-thumbs-bar';
    const details = modal.querySelector('.lightbox-details');
    if (details && details.parentNode) {
      details.parentNode.insertBefore(thumbsBar, details);
    }
  }

  thumbsBar.innerHTML = `
    <div class="thumbs-label-strip">
      <span class="thumbs-label-title">📸 ${sight.name} (${photos.length} Perspectives):</span>
    </div>
    <div class="thumbs-items-row">
      ${photos.map((p, idx) => `
        <button type="button" class="lightbox-thumb-item ${idx === currentLightboxPhotoIndex ? 'active' : ''}" data-idx="${idx}" title="${p.caption}">
          <img src="${p.url}" alt="${p.caption}">
          <span class="thumb-badge-num">${idx + 1}</span>
          <div class="thumb-info">
            <span class="thumb-name">${p.caption}</span>
          </div>
        </button>
      `).join('')}
    </div>
  `;

  thumbsBar.querySelectorAll('.lightbox-thumb-item').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      currentLightboxPhotoIndex = parseInt(btn.getAttribute('data-idx'), 10);
      updateLightboxContent();
    });
  });

  const query = sight.mapsQuery || sight.name;
  mapsBtnEl.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

  const videoBtnEl = modal.querySelector('.lightbox-video-btn');
  if (videoBtnEl) {
    const vlogs = window.youtubeTransitVlogs || [];
    const vlog = vlogs.find(v => v.dayNum === sight.dayNum);
    if (vlog) {
      videoBtnEl.href = vlog.videoUrl;
      videoBtnEl.title = `Watch Transit Vlog: ${vlog.channelName} - ${vlog.videoTitle}`;
      videoBtnEl.innerHTML = `🎥 Watch Transit Vlog (${vlog.channelName}) ↗`;
      videoBtnEl.style.display = 'inline-flex';
    } else {
      videoBtnEl.style.display = 'none';
    }
  }
}

// Global expose
window.openLightbox = openLightbox;
window.resetAllFilters = resetAllFilters;

// Global helper to swap active photo in gallery card
function swapGalleryCardActivePhoto(globalIdx, photoIdx) {
  const card = document.getElementById(`gallery-sight-card-${globalIdx}`);
  if (!card) return;

  const sight = getAllSights()[globalIdx];
  if (!sight || !sight.photos || !sight.photos[photoIdx]) return;

  const photo = sight.photos[photoIdx];

  const heroImg = card.querySelector('.gallery-card-hero-img');
  if (heroImg) {
    heroImg.src = photo.url;
    heroImg.alt = photo.caption;
  }

  const capEl = document.getElementById(`gallery-caption-${globalIdx}`);
  if (capEl) {
    capEl.textContent = photo.caption;
  }

  card.querySelectorAll('.card-perspective-thumb').forEach(btn => {
    const idx = parseInt(btn.getAttribute('data-photo-idx'), 10);
    if (idx === photoIdx) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}
window.swapGalleryCardActivePhoto = swapGalleryCardActivePhoto;
