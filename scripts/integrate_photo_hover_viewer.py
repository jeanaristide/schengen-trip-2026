#!/usr/bin/env python3
import os
import re

BASE_DIR = "/Users/jeana/Projects/schengen-trip-2026"

# =========================================================================
# 1. Update css/style.css
# =========================================================================
css_path = os.path.join(BASE_DIR, "css/style.css")
with open(css_path, "r", encoding="utf-8") as f:
    css_content = f.read()

new_styles = """
/* ==========================================================================
   PHOTO VIEWER & HOVER POPOVER STYLING
   ========================================================================== */

/* Photos Button in Master Table */
.btn-table-photos {
  padding: 6px 11px;
  font-size: 11.5px;
  font-weight: 700;
  background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
  color: #1d4ed8;
  border: 1px solid #93c5fd;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  white-space: nowrap;
}

.btn-table-photos:hover {
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  color: #ffffff;
  border-color: #1d4ed8;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.35);
  transform: translateY(-1px);
}

/* Photos Button in Day Cards */
.btn-card-photos {
  width: 100%;
  margin-top: 10px;
  padding: 8px 14px;
  font-size: 12px;
  font-weight: 700;
  background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
  color: #1d4ed8;
  border: 1px solid #93c5fd;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}

.btn-card-photos:hover {
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  color: #ffffff;
  border-color: #1d4ed8;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.35);
  transform: translateY(-1px);
}

/* Hoverable activity sub-bullets */
.activity-sublist li {
  position: relative;
  cursor: pointer;
  transition: color 0.15s ease, transform 0.15s ease;
  padding: 1px 0;
}

.activity-sublist li:hover {
  color: #2563eb;
  font-weight: 600;
}

/* Floating Instant Photo Popover */
.place-photo-popover {
  position: fixed;
  z-index: 99999;
  width: 310px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 20px 35px -5px rgba(15, 23, 42, 0.28), 0 0 0 1px rgba(15, 23, 42, 0.08);
  overflow: hidden;
  pointer-events: none;
  opacity: 0;
  transform: translateY(8px) scale(0.96);
  transition: opacity 0.2s cubic-bezier(0.16, 1, 0.3, 1), transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  font-family: inherit;
}

.place-photo-popover.visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.popover-main-media {
  position: relative;
  width: 100%;
  height: 165px;
  background: #020617;
  overflow: hidden;
}

.popover-main-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.popover-badge {
  position: absolute;
  top: 9px;
  left: 9px;
  background: rgba(15, 23, 42, 0.82);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  color: #ffffff;
  font-size: 10.5px;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.popover-count-badge {
  position: absolute;
  top: 9px;
  right: 9px;
  background: #2563eb;
  color: #ffffff;
  font-size: 10px;
  font-weight: 800;
  padding: 3px 8px;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(37, 99, 235, 0.4);
}

.popover-body {
  padding: 12px 14px;
}

.popover-title {
  font-size: 13.5px;
  font-weight: 800;
  color: #0f172a;
  line-height: 1.3;
  margin-bottom: 3px;
}

.popover-location {
  font-size: 11px;
  color: #64748b;
  margin-bottom: 9px;
}

.popover-thumbs-row {
  display: flex;
  gap: 6px;
  margin-bottom: 9px;
  align-items: center;
}

.popover-thumb {
  width: 58px;
  height: 40px;
  border-radius: 5px;
  object-fit: cover;
  border: 2px solid #e2e8f0;
  background: #f1f5f9;
}

.popover-thumb.active {
  border-color: #2563eb;
  box-shadow: 0 0 8px rgba(37, 99, 235, 0.35);
}

.popover-action-hint {
  font-size: 11px;
  font-weight: 700;
  color: #2563eb;
  background: #f0fdf4;
  color: #166534;
  border: 1px solid #bbf7d0;
  padding: 4px 8px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 4px;
}

/* Lightbox Multi-Photo Thumbnails Bar */
.lightbox-thumbs-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;
  background: #090d16;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  overflow-x: auto;
  scrollbar-width: thin;
}

.lightbox-thumb-item {
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 5px 10px 5px 6px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.06);
  border: 1.5px solid transparent;
  cursor: pointer;
  transition: all 0.2s ease;
  color: #cbd5e1;
  font-size: 11.5px;
  font-weight: 600;
  white-space: nowrap;
  flex-shrink: 0;
  text-align: left;
}

.lightbox-thumb-item img {
  width: 44px;
  height: 32px;
  object-fit: cover;
  border-radius: 4px;
  display: block;
}

.lightbox-thumb-item:hover {
  background: rgba(255, 255, 255, 0.16);
  color: #ffffff;
}

.lightbox-thumb-item.active {
  background: rgba(37, 99, 235, 0.25);
  border-color: #3b82f6;
  color: #ffffff;
  box-shadow: 0 0 14px rgba(59, 130, 246, 0.5);
}

.thumb-info {
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.thumb-name {
  font-weight: 700;
  font-size: 11.5px;
  color: #f8fafc;
}

.thumb-cat {
  font-size: 10px;
  color: #94a3b8;
}
"""

if "place-photo-popover" not in css_content:
    css_content += new_styles
    with open(css_path, "w", encoding="utf-8") as f:
        f.write(css_content)
    print("Appended photo viewer styles to css/style.css")


# =========================================================================
# 2. Update index.html
# =========================================================================
index_path = os.path.join(BASE_DIR, "index.html")
with open(index_path, "r", encoding="utf-8") as f:
    html_content = f.read()

# Replace Table Header Map with Photos
html_content = html_content.replace(
    '<th style="width: 75px; text-align: center;">Map</th>',
    '<th style="width: 95px; text-align: center;">Photos</th>'
)

# Replace btn-table-map with btn-table-photos across all 21 rows
# Pattern:
# <button type="button" class="btn-table-map" title="Focus map on ...">
#   📍 Map
# </button>
pattern_table_btn = re.compile(
    r'<button type="button" class="btn-table-map" title="Focus map on ([^"]+)">\s*📍 Map\s*</button>',
    re.MULTILINE
)
def replace_table_btn(match):
    dest = match.group(1)
    return f'<button type="button" class="btn-table-photos" title="View Photos of {dest}">📸 Photos</button>'

html_content = pattern_table_btn.sub(replace_table_btn, html_content)

# Replace btn-card-map with btn-card-photos across Day Cards
pattern_card_btn = re.compile(
    r'<button type="button" class="btn-card-map" data-day="([^"]+)">\s*📍 Focus on Map\s*</button>',
    re.MULTILINE
)
def replace_card_btn(match):
    day = match.group(1)
    return f'<button type="button" class="btn-card-photos" data-day="{day}">📸 View Photos (3)</button>'

html_content = pattern_card_btn.sub(replace_card_btn, html_content)

# Ensure #placePhotoPopover exists in index.html
if 'id="placePhotoPopover"' not in html_content:
    popover_html = """
  <!-- Floating Instant Photo Popover on Hover -->
  <div class="place-photo-popover" id="placePhotoPopover" aria-hidden="true">
    <div class="popover-main-media">
      <img src="" alt="" class="popover-main-img">
      <div class="popover-badge"></div>
      <div class="popover-count-badge">3 Photos Available</div>
    </div>
    <div class="popover-body">
      <div class="popover-title"></div>
      <div class="popover-location"></div>
      <div class="popover-thumbs-row"></div>
      <div class="popover-action-hint">👆 Click once to open full photo gallery</div>
    </div>
  </div>
"""
    body_end = html_content.rfind("</body>")
    if body_end != -1:
        html_content = html_content[:body_end] + popover_html + html_content[body_end:]
        print("Added #placePhotoPopover to index.html")

with open(index_path, "w", encoding="utf-8") as f:
    f.write(html_content)
print("Updated index.html headers, buttons, and popover markup")


# =========================================================================
# 3. Update js/app.js
# =========================================================================
app_path = os.path.join(BASE_DIR, "js/app.js")
with open(app_path, "r", encoding="utf-8") as f:
    app_content = f.read()

# Replace row click behavior in renderItineraryTable
old_row_map_code = """    // Clicking row or map button smoothly focuses map
    tr.addEventListener('click', (e) => {
      focusDayOnMap(item);
    });"""

new_row_photos_code = """    // Clicking row or photos button opens day photo gallery (NO MAP HYPERLINK)
    tr.addEventListener('click', (e) => {
      if (e.target.closest('a') || e.target.closest('button')) return;
      const dNum = parseInt(item.day.replace('Day ', ''), 10) || 1;
      openDayPhotosModal(dNum);
    });

    const photoBtn = tr.querySelector('.btn-table-photos');
    if (photoBtn) {
      photoBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const dNum = parseInt(item.day.replace('Day ', ''), 10) || 1;
        openDayPhotosModal(dNum);
      });
    }"""

if old_row_map_code in app_content:
    app_content = app_content.replace(old_row_map_code, new_row_photos_code)
    print("Replaced row map click with openDayPhotosModal in js/app.js")

# Replace action button inside renderItineraryTable
old_td_action = """      <td class="col-table-action">
        <button type="button" class="btn-table-map" title="Focus map on ${item.city}">
          📍 Map
        </button>
      </td>"""

new_td_action = """      <td class="col-table-action">
        <button type="button" class="btn-table-photos" title="View Photos of ${item.city}">
          📸 Photos
        </button>
      </td>"""

if old_td_action in app_content:
    app_content = app_content.replace(old_td_action, new_td_action)
    print("Replaced table action button in renderItineraryTable in js/app.js")

# In renderTimeline, replace btn-card-map with btn-card-photos
old_card_map = """            <button type="button" class="btn-card-map" data-day="${item.day}">
              📍 Focus on Map
            </button>"""

new_card_photos = """            <button type="button" class="btn-card-photos" data-day="${item.day}">
              📸 View Photos (3)
            </button>"""

if old_card_map in app_content:
    app_content = app_content.replace(old_card_map, new_card_photos)
    print("Replaced card map button in renderTimeline in js/app.js")

# Add day photos modal logic and hover popover code to js/app.js
photo_module_code = """
// =========================================================================
// MULTI-PHOTO GALLERY & INSTANT HOVER POPOVER SYSTEM
// =========================================================================
let currentPhotoDayNum = 1;
let currentPhotoSightIndex = 0;

function findSightForText(dayNum, text) {
  const day = (window.galleryData || []).find(d => d.dayNum === dayNum);
  if (!day || !day.sights || !day.sights.length) return { day: null, sight: null, index: 0 };
  const lower = (text || '').toLowerCase();
  for (let i = 0; i < day.sights.length; i++) {
    const s = day.sights[i];
    const sWords = s.name.toLowerCase().split(/[\\s,()&-]+/).filter(w => w.length > 3);
    if (sWords.some(w => lower.includes(w))) {
      return { day, sight: s, index: i };
    }
  }
  return { day, sight: day.sights[0], index: 0 };
}

function openDayPhotosModal(dayNum, sightIndex = 0) {
  const day = (window.galleryData || []).find(d => d.dayNum === dayNum);
  if (!day || !day.sights || !day.sights.length) return;

  currentPhotoDayNum = dayNum;
  currentPhotoSightIndex = (sightIndex >= 0 && sightIndex < day.sights.length) ? sightIndex : 0;

  renderDayPhotoInModal();

  const modal = document.getElementById('lightboxModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function renderDayPhotoInModal() {
  const day = (window.galleryData || []).find(d => d.dayNum === currentPhotoDayNum);
  if (!day || !day.sights || !day.sights.length) return;

  const sight = day.sights[currentPhotoSightIndex] || day.sights[0];
  const modal = document.getElementById('lightboxModal');
  if (!modal) return;

  const imgEl = modal.querySelector('.lightbox-img');
  const dayBadgeEl = modal.querySelector('.lightbox-day-badge');
  const titleEl = modal.querySelector('.lightbox-title');
  const descEl = modal.querySelector('.lightbox-desc');
  const mapsBtnEl = modal.querySelector('.lightbox-maps-btn');
  const counterEl = modal.querySelector('.lightbox-counter');

  if (imgEl) {
    imgEl.src = sight.image;
    imgEl.alt = sight.name;
  }
  if (dayBadgeEl) {
    dayBadgeEl.innerHTML = `<span class="badge-country ${day.badgeClass}">${day.day}</span> <strong>${day.city}</strong> · ${sight.category}${sight.admission ? ` · <span style="font-weight:700; color:${sight.isPaid ? '#ef4444' : '#22c55e'};">${sight.isPaid ? '🎟️ ' : '✨ '}${sight.admission}</span>` : ''}`;
  }
  if (titleEl) titleEl.textContent = sight.name;
  if (descEl) descEl.textContent = sight.desc;
  if (counterEl) {
    counterEl.textContent = `Photo ${currentPhotoSightIndex + 1} of ${day.sights.length} · 📍 ${sight.location}`;
  }

  if (mapsBtnEl) {
    const query = sight.mapsQuery || sight.name;
    mapsBtnEl.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  }

  // Render Multi-Photo Thumbnail Bar inside Lightbox Modal
  let thumbsBar = modal.querySelector('#lightboxThumbsBar');
  if (!thumbsBar) {
    thumbsBar = document.createElement('div');
    thumbsBar.id = 'lightboxThumbsBar';
    thumbsBar.className = 'lightbox-thumbs-bar';
    const details = modal.querySelector('.lightbox-details');
    if (details && details.parentNode) {
      details.parentNode.insertBefore(thumbsBar, details);
    }
  }

  thumbsBar.innerHTML = day.sights.map((s, idx) => `
    <button type="button" class="lightbox-thumb-item ${idx === currentPhotoSightIndex ? 'active' : ''}" data-idx="${idx}" title="${s.name}">
      <img src="${s.image}" alt="${s.name}">
      <div class="thumb-info">
        <span class="thumb-name">${s.name}</span>
        <span class="thumb-cat">${s.category.replace(/^[^\\w\\s]+\\s*/, '')}</span>
      </div>
    </button>
  `).join('');

  thumbsBar.querySelectorAll('.lightbox-thumb-item').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const idx = parseInt(btn.getAttribute('data-idx'), 10);
      currentPhotoSightIndex = idx;
      renderDayPhotoInModal();
    });
  });
}

function stepDayPhoto(delta) {
  const day = (window.galleryData || []).find(d => d.dayNum === currentPhotoDayNum);
  if (!day || !day.sights || !day.sights.length) return;
  currentPhotoSightIndex = (currentPhotoSightIndex + delta + day.sights.length) % day.sights.length;
  renderDayPhotoInModal();
}

// Attach hover popover and click listeners
function setupPlacePhotoInteractions() {
  const popover = document.getElementById('placePhotoPopover');
  if (!popover) return;

  let hoverTimeout = null;

  function showPopover(targetEl, dayNum, text) {
    clearTimeout(hoverTimeout);
    const day = (window.galleryData || []).find(d => d.dayNum === dayNum);
    if (!day || !day.sights || !day.sights.length) return;

    const matched = findSightForText(dayNum, text);
    const sight = matched.sight;
    const sightIdx = matched.index;

    const img = popover.querySelector('.popover-main-img');
    const badge = popover.querySelector('.popover-badge');
    const title = popover.querySelector('.popover-title');
    const loc = popover.querySelector('.popover-location');
    const thumbsRow = popover.querySelector('.popover-thumbs-row');

    if (img) {
      img.src = sight.image;
      img.alt = sight.name;
    }
    if (badge) badge.textContent = sight.category;
    if (title) title.textContent = sight.name;
    if (loc) loc.textContent = `📍 ${sight.location}`;

    if (thumbsRow) {
      thumbsRow.innerHTML = day.sights.map((s, idx) => `
        <img src="${s.image}" alt="${s.name}" class="popover-thumb ${idx === sightIdx ? 'active' : ''}" title="${s.name}">
      `).join('');
    }

    const rect = targetEl.getBoundingClientRect();
    const popoverWidth = 310;
    const popoverHeight = 285;

    let left = rect.right + 14;
    let top = rect.top - 15;

    if (left + popoverWidth > window.innerWidth - 16) {
      left = rect.left - popoverWidth - 14;
    }
    if (left < 16) {
      left = Math.max(16, (window.innerWidth - popoverWidth) / 2);
    }
    if (top + popoverHeight > window.innerHeight - 16) {
      top = window.innerHeight - popoverHeight - 16;
    }
    if (top < 16) {
      top = 16;
    }

    popover.style.left = `${left}px`;
    popover.style.top = `${top}px`;
    popover.classList.add('visible');
  }

  function hidePopover() {
    hoverTimeout = setTimeout(() => {
      popover.classList.remove('visible');
    }, 120);
  }

  // Hover over activity bullets
  document.addEventListener('mouseover', (e) => {
    const li = e.target.closest('.activity-sublist li');
    if (!li) return;

    const row = li.closest('.itinerary-table-row');
    const card = li.closest('.day-card');
    let dayNum = 1;

    if (row) {
      const badge = row.querySelector('.table-day-badge');
      if (badge) dayNum = parseInt(badge.textContent.replace('Day ', ''), 10) || 1;
    } else if (card) {
      const badge = card.querySelector('.card-day-badge');
      if (badge) dayNum = parseInt(badge.textContent.replace('Day ', ''), 10) || 1;
    }

    showPopover(li, dayNum, li.textContent);
  });

  document.addEventListener('mouseout', (e) => {
    const li = e.target.closest('.activity-sublist li');
    if (li) hidePopover();
  });

  // Clicking an activity bullet opens the photo modal for that sight
  document.addEventListener('click', (e) => {
    const li = e.target.closest('.activity-sublist li');
    if (!li) return;

    const row = li.closest('.itinerary-table-row');
    const card = li.closest('.day-card');
    let dayNum = 1;

    if (row) {
      const badge = row.querySelector('.table-day-badge');
      if (badge) dayNum = parseInt(badge.textContent.replace('Day ', ''), 10) || 1;
    } else if (card) {
      const badge = card.querySelector('.card-day-badge');
      if (badge) dayNum = parseInt(badge.textContent.replace('Day ', ''), 10) || 1;
    }

    const matched = findSightForText(dayNum, li.textContent);
    openDayPhotosModal(dayNum, matched.index);
    hidePopover();
  });

  // Clicking .btn-card-photos in Day Cards
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-card-photos');
    if (!btn) return;
    e.stopPropagation();
    const dayStr = btn.getAttribute('data-day') || 'Day 1';
    const dNum = parseInt(dayStr.replace('Day ', ''), 10) || 1;
    openDayPhotosModal(dNum);
  });
}

// Hook into existing lightbox prev/next buttons
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('lightboxModal');
  if (!modal) return;

  const prevBtn = modal.querySelector('.lightbox-nav-prev');
  const nextBtn = modal.querySelector('.lightbox-nav-next');

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      stepDayPhoto(-1);
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      stepDayPhoto(1);
    });
  }

  setupPlacePhotoInteractions();
});

window.openDayPhotosModal = openDayPhotosModal;
window.stepDayPhoto = stepDayPhoto;
"""

if "function openDayPhotosModal" not in app_content:
    app_content += photo_module_code
    print("Appended openDayPhotosModal & setupPlacePhotoInteractions to js/app.js")

with open(app_path, "w", encoding="utf-8") as f:
    f.write(app_content)
print("Wrote updated js/app.js")

print("Photo hover & click integration script completed!")
