#!/usr/bin/env bash
set -e

UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"

get_img() {
  local url="$1"
  local dest="public/images/sights/$2"
  local dist="dist/public/images/sights/$2"
  echo "Fetching $2..."
  curl -s -L -A "$UA" "$url" -o "$dest"
  cp "$dest" "$dist"
  echo "OK $2: $(wc -c < "$dest") bytes"
  sleep 2
}

get_img "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/GaleriesLafayetteNuit.jpg/1280px-GaleriesLafayetteNuit.jpg" "galeries-lafayette.jpg"
get_img "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Frankfurt_Am_Main-Goethe-Haus-Ansicht_am_Grossen_Hirschgraben.jpg/1280px-Frankfurt_Am_Main-Goethe-Haus-Ansicht_am_Grossen_Hirschgraben.jpg" "goethe-house-frankfurt.jpg"
get_img "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/LuxembourgMontparnasse.JPG/1280px-LuxembourgMontparnasse.JPG" "jardin-du-luxembourg.jpg"
get_img "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/1_M%C3%BCrren_2022.jpg/1280px-1_M%C3%BCrren_2022.jpg" "muerren-village.jpg"
get_img "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Friedenspalast_Den_Haag_%28100MP%29.jpg/1280px-Friedenspalast_Den_Haag_%28100MP%29.jpg" "peace-palace-the-hague.jpg"
get_img "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Pont_Alexandre_III_depuis_pont_de_la_Concorde_Paris.jpg/1280px-Pont_Alexandre_III_depuis_pont_de_la_Concorde_Paris.jpg" "pont-alexandre-iii.jpg"
get_img "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Zytglogge_01.jpg/1280px-Zytglogge_01.jpg" "zytglogge-bern.jpg"
get_img "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Exterior_of_the_Mus%C3%A9e_d%27Orsay_20171222.jpg/1280px-Exterior_of_the_Mus%C3%A9e_d%27Orsay_20171222.jpg" "musee-d-orsay.jpg"

echo "Finished remaining images!"
