import os
import shutil
import subprocess

MAPS_DIR = "/Users/jeana/Projects/schengen-trip-2026/public/maps"
IMG_DIR = "/Users/jeana/Projects/schengen-trip-2026/public/img"
BRAIN_DIR = "/Users/jeana/.gemini/antigravity-ide/brain/1a08d61a-fd4a-4e66-9b18-32ec2fd618aa"
CHROME_BIN = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

os.makedirs(IMG_DIR, exist_ok=True)
os.makedirs(BRAIN_DIR, exist_ok=True)

map_files = [
    ("day4_the_hague_rotterdam_map.html", "day4_the_hague_rotterdam_map.png"),
    ("day5_cologne_arrival_map.html", "day5_cologne_arrival_map.png"),
    ("day6_dusseldorf_cologne_map.html", "day6_dusseldorf_cologne_map.png"),
    ("day7_frankfurt_arrival_map.html", "day7_frankfurt_arrival_map.png"),
    ("day8_frankfurt_temple_map.html", "day8_frankfurt_temple_map.png"),
    ("day9_colmar_strasbourg_map.html", "day9_colmar_strasbourg_map.png"),
    ("day10_strasbourg_christmas_map.html", "day10_strasbourg_christmas_map.png"),
    ("day11_zurich_lucerne_lauterbrunnen_map.html", "day11_zurich_lucerne_lauterbrunnen_map.png"),
    ("day12_lauterbrunnen_schilthorn_muerren_map.html", "day12_lauterbrunnen_schilthorn_muerren_map.png"),
    ("day13_jungfraujoch_grindelwald_cloy_map.html", "day13_jungfraujoch_grindelwald_cloy_map.png"),
    ("day14_lake_brienz_iseltwald_sigriswil_thun_map.html", "day14_lake_brienz_iseltwald_sigriswil_thun_map.png"),
    ("day15_bern_temple_paris_map.html", "day15_bern_temple_paris_map.png"),
    ("day16_paris_temple_city_map.html", "day16_paris_temple_city_map.png"),
    ("day17_paris_monuments_nye_map.html", "day17_paris_monuments_nye_map.png"),
    ("day18_paris_louvre_montmartre_map.html", "day18_paris_louvre_montmartre_map.png"),
    ("day19_versailles_champs_elysees_map.html", "day19_versailles_champs_elysees_map.png"),
    ("day20_paris_to_london_transit_map.html", "day20_paris_to_london_transit_map.png"),
]

for html_name, png_name in map_files:
    html_path = os.path.join(MAPS_DIR, html_name)
    img_path = os.path.join(IMG_DIR, png_name)
    brain_path = os.path.join(BRAIN_DIR, png_name)
    
    file_url = f"file://{html_path}"
    print(f"Rendering {html_name} -> {png_name}...")
    
    cmd = [
        CHROME_BIN,
        "--headless=new",
        "--disable-gpu",
        "--window-size=1260,780",
        "--virtual-time-budget=6000",
        f"--screenshot={img_path}",
        file_url
    ]
    res = subprocess.run(cmd, capture_output=True, text=True)
    if res.returncode == 0 and os.path.exists(img_path):
        shutil.copy2(img_path, brain_path)
        print(f"✓ Saved {img_path} ({os.path.getsize(img_path)} bytes) & copied to brain")
    else:
        print(f"✗ Failed {html_name}: {res.stderr}")

print("All screenshots finished rendering!")
