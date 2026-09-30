import re

HTML_FILE = "/Users/jeana/Projects/schengen-trip-2026/index.html"

with open(HTML_FILE, "r", encoding="utf-8") as f:
    content = f.read()

# Map configurations for Day 4 through Day 20
configs = {
    'Day 4': {
        'url': 'public/maps/day4_the_hague_rotterdam_map.html',
        'title': 'Day 4 · The Hague Temple &amp; Courts Route Map',
        'key': 'day4',
        'img': 'public/img/day4_the_hague_rotterdam_map.png',
        'badge': '🗺️ Route Map (1★ ➔ 8★)'
    },
    'Day 5': {
        'url': 'public/maps/day5_cologne_arrival_map.html',
        'title': 'Day 5 · Amsterdam ➔ Cologne ICE &amp; Cathedral Route Map',
        'key': 'day5',
        'img': 'public/img/day5_cologne_arrival_map.png',
        'badge': '🗺️ Route Map (1★ ➔ 9★)'
    },
    'Day 6': {
        'url': 'public/maps/day6_dusseldorf_cologne_map.html',
        'title': 'Day 6 · Rhine Cableway &amp; Little Tokyo Route Map',
        'key': 'day6',
        'img': 'public/img/day6_dusseldorf_cologne_map.png',
        'badge': '🗺️ Route Map (1★ ➔ 8★)'
    },
    'Day 7': {
        'url': 'public/maps/day7_frankfurt_arrival_map.html',
        'title': 'Day 7 · Cologne ➔ Frankfurt ICE &amp; Römerberg Route Map',
        'key': 'day7',
        'img': 'public/img/day7_frankfurt_arrival_map.png',
        'badge': '🗺️ Route Map (1★ ➔ 9★)'
    },
    'Day 8': {
        'url': 'public/maps/day8_frankfurt_temple_map.html',
        'title': 'Day 8 · Frankfurt Museumsufer &amp; Temple Route Map',
        'key': 'day8',
        'img': 'public/img/day8_frankfurt_temple_map.png',
        'badge': '🗺️ Route Map (1★ ➔ 7★)'
    },
    'Day 9': {
        'url': 'public/maps/day9_colmar_strasbourg_map.html',
        'title': 'Day 9 · Alsace Arrival &amp; Petite-France Route Map',
        'key': 'day9',
        'img': 'public/img/day9_colmar_strasbourg_map.png',
        'badge': '🗺️ Route Map (1★ ➔ 9★)'
    },
    'Day 10': {
        'url': 'public/maps/day10_strasbourg_christmas_map.html',
        'title': 'Day 10 · Colmar Fairytale Christmas Eve Route Map',
        'key': 'day10',
        'img': 'public/img/day10_strasbourg_christmas_map.png',
        'badge': '🗺️ Route Map (1★ ➔ 9★)'
    },
    'Day 11': {
        'url': 'public/maps/day11_zurich_lucerne_lauterbrunnen_map.html',
        'title': 'Day 11 · Zurich, Lucerne &amp; Alpine Express Route Map',
        'key': 'day11',
        'img': 'public/img/day11_zurich_lucerne_lauterbrunnen_map.png',
        'badge': '🗺️ Route Map (1★ ➔ 11★)'
    },
    'Day 12': {
        'url': 'public/maps/day12_lauterbrunnen_schilthorn_muerren_map.html',
        'title': 'Day 12 · Lauterbrunnen Valley &amp; Schilthorn Route Map',
        'key': 'day12',
        'img': 'public/img/day12_lauterbrunnen_schilthorn_muerren_map.png',
        'badge': '🗺️ Route Map (1★ ➔ 8★)'
    },
    'Day 13': {
        'url': 'public/maps/day13_jungfraujoch_grindelwald_cloy_map.html',
        'title': 'Day 13 · Jungfraujoch &amp; Grindelwald CLOY Route Map',
        'key': 'day13',
        'img': 'public/img/day13_jungfraujoch_grindelwald_cloy_map.png',
        'badge': '🗺️ Route Map (1★ ➔ 9★)'
    },
    'Day 14': {
        'url': 'public/maps/day14_lake_brienz_iseltwald_sigriswil_thun_map.html',
        'title': 'Day 14 · Lake Brienz, Iseltwald Pier &amp; Sigriswil Route Map',
        'key': 'day14',
        'img': 'public/img/day14_lake_brienz_iseltwald_sigriswil_thun_map.png',
        'badge': '🗺️ Route Map (1★ ➔ 9★)'
    },
    'Day 15': {
        'url': 'public/maps/day15_bern_temple_paris_map.html',
        'title': 'Day 15 · Bern Old Town, Temple &amp; TGV to Paris Route Map',
        'key': 'day15',
        'img': 'public/img/day15_bern_temple_paris_map.png',
        'badge': '🗺️ Route Map (1★ ➔ 9★)'
    },
    'Day 16': {
        'url': 'public/maps/day16_paris_temple_city_map.html',
        'title': 'Day 16 · Paris Louvre, Arc de Triomphe &amp; Lafayette Route Map',
        'key': 'day16',
        'img': 'public/img/day16_paris_temple_city_map.png',
        'badge': '🗺️ Route Map (1★ ➔ 8★)'
    },
    'Day 17': {
        'url': 'public/maps/day17_paris_monuments_nye_map.html',
        'title': 'Day 17 · Île de la Cité, Panthéon &amp; NYE Countdown Route Map',
        'key': 'day17',
        'img': 'public/img/day17_paris_monuments_nye_map.png',
        'badge': '🗺️ Route Map (1★ ➔ 7★)'
    },
    'Day 18': {
        'url': 'public/maps/day18_paris_louvre_montmartre_map.html',
        'title': 'Day 18 · Le Marais &amp; Saint-Germain Begin Again Route Map',
        'key': 'day18',
        'img': 'public/img/day18_paris_louvre_montmartre_map.png',
        'badge': '🗺️ Route Map (1★ ➔ 7★)'
    },
    'Day 19': {
        'url': 'public/maps/day19_versailles_champs_elysees_map.html',
        'title': 'Day 19 · Versailles Palace &amp; Paris Temple Route Map',
        'key': 'day19',
        'img': 'public/img/day19_versailles_champs_elysees_map.png',
        'badge': '🗺️ Route Map (1★ ➔ 8★)'
    },
    'Day 20': {
        'url': 'public/maps/day20_paris_to_london_transit_map.html',
        'title': 'Day 20 · Paris Farewell &amp; FlixBus N700 Cross-Channel Route Map',
        'key': 'day20',
        'img': 'public/img/day20_paris_to_london_transit_map.png',
        'badge': '🗺️ Route Map (1★ ➔ 8★)'
    }
}

for day_name, conf in configs.items():
    thumb_html = f"""                <div class="loc-map-thumb-card" onclick="openRouteMapModal('{conf['url']}', '{conf['title']}', '{conf['key']}')" title="Click to open interactive route map">
                  <div class="loc-map-thumb-img-wrap">
                    <img src="{conf['img']}" alt="{conf['title']}" loading="lazy" class="loc-map-thumb-img" />
                    <div class="loc-map-thumb-overlay">
                      <span class="loc-map-expand-btn">🔍 Interactive Map</span>
                    </div>
                  </div>
                  <div class="loc-map-thumb-caption">
                    <span class="loc-map-thumb-badge">{conf['badge']}</span>
                    <span class="loc-map-thumb-sub">Tap to explore ➔</span>
                  </div>
                </div>"""

    # Match row for this day: <div class="table-day-badge">Day X</div> ... <td class="col-table-loc"> ... </ul>\s*</td>
    pattern = rf'(<div class="table-day-badge">{day_name}</div>[\s\S]*?<td class="col-table-loc">[\s\S]*?</ul>)(\s*</td>)'
    
    match = re.search(pattern, content)
    if match:
        # Check if already has thumb card
        segment = match.group(1)
        if "loc-map-thumb-card" not in segment:
            replacement = rf'\1\n{thumb_html}\2'
            content = re.sub(pattern, replacement, content, count=1)
            print(f"✓ Injected thumbnail card for {day_name}")
        else:
            print(f"- {day_name} already had thumbnail card")
    else:
        print(f"✗ Could not find match for {day_name}")

with open(HTML_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("Updated index.html successfully!")
