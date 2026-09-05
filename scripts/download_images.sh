#!/usr/bin/env bash
set -e

mkdir -p public/images/sights
mkdir -p dist/public/images/sights

UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"

download_img() {
  local url="$1"
  local dest="public/images/sights/$2"
  local dist_dest="dist/public/images/sights/$2"
  echo "Downloading $2..."
  curl -s -L -H "User-Agent: $UA" "$url" -o "$dest"
  cp "$dest" "$dist_dest"
  echo "Saved $dest ($(wc -c < "$dest") bytes)"
}

download_img "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Arc_de_Triomphe_-_Ao%C3%BBt_2026.jpg/1280px-Arc_de_Triomphe_-_Ao%C3%BBt_2026.jpg" "arc-de-triomphe.jpg"
download_img "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/BegijnhofAmsterdamPanorama.jpg/1280px-BegijnhofAmsterdamPanorama.jpg" "begijnhof-amsterdam.jpg"
download_img "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Dam_Square_2024.jpg/1280px-Dam_Square_2024.jpg" "dam-square-amsterdam.jpg"
download_img "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/GaleriesLafayetteNuit.jpg/1280px-GaleriesLafayetteNuit.jpg" "galeries-lafayette.jpg"
download_img "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Frankfurt_Am_Main-Goethe-Haus-Ansicht_am_Grossen_Hirschgraben.jpg/1280px-Frankfurt_Am_Main-Goethe-Haus-Ansicht_am_Grossen_Hirschgraben.jpg" "goethe-house-frankfurt.jpg"
download_img "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/LuxembourgMontparnasse.JPG/1280px-LuxembourgMontparnasse.JPG" "jardin-du-luxembourg.jpg"
download_img "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Kapellbruecke.JPG/1280px-Kapellbruecke.JPG" "kapellbruecke-lucerne.jpg"
download_img "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Lion_Monument.jpg/1280px-Lion_Monument.jpg" "lion-monument-lucerne.jpg"
download_img "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/1_M%C3%BCrren_2022.jpg/1280px-1_M%C3%BCrren_2022.jpg" "muerren-village.jpg"
download_img "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Notre-Dame_de_Paris%2C_4_October_2017.jpg/1280px-Notre-Dame_de_Paris%2C_4_October_2017.jpg" "notre-dame-paris.jpg"
download_img "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Friedenspalast_Den_Haag_%28100MP%29.jpg/1280px-Friedenspalast_Den_Haag_%28100MP%29.jpg" "peace-palace-the-hague.jpg"
download_img "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Pont_Alexandre_III_depuis_pont_de_la_Concorde_Paris.jpg/1280px-Pont_Alexandre_III_depuis_pont_de_la_Concorde_Paris.jpg" "pont-alexandre-iii.jpg"
download_img "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Lauterbrunnen_Staubbach.jpg/1280px-Lauterbrunnen_Staubbach.jpg" "staubbach-falls-lauterbrunnen.jpg"
download_img "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Strasbourg_Cathedral_Exterior_-_Diliff.jpg/1280px-Strasbourg_Cathedral_Exterior_-_Diliff.jpg" "strasbourg-cathedral.jpg"
download_img "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/White_Cliffs_of_Dover_02.JPG/1280px-White_Cliffs_of_Dover_02.JPG" "dover-cliffs-channel.jpg"
download_img "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Zytglogge_01.jpg/1280px-Zytglogge_01.jpg" "zytglogge-bern.jpg"
download_img "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/46/Maison_Pfister_Colmar.jpg/1280px-Maison_Pfister_Colmar.jpg" "maison-pfister-colmar.jpg"

echo "All authentic images downloaded successfully!"
