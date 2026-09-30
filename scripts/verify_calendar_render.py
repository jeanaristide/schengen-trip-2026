import subprocess
import time
import os
import sys
from http.server import HTTPServer, SimpleHTTPRequestHandler
import threading

PORT = 8922
DIR = "/Users/jeana/Projects/schengen-trip-2026"
ARTIFACTS_DIR = "/Users/jeana/.gemini/antigravity-ide/brain/1a08d61a-fd4a-4e66-9b18-32ec2fd618aa"
CHROME_PATH = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIR, **kwargs)

def start_server():
    server = HTTPServer(('127.0.0.1', PORT), Handler)
    server.serve_forever()

def main():
    t = threading.Thread(target=start_server, daemon=True)
    t.start()
    time.sleep(1)

    desktop_shot = os.path.join(ARTIFACTS_DIR, "calendar_view_desktop.png")
    mobile_dec_shot = os.path.join(ARTIFACTS_DIR, "calendar_view_mobile_dec.png")
    mobile_jan_shot = os.path.join(ARTIFACTS_DIR, "calendar_view_mobile_jan.png")

    # 1. Desktop screenshot (1440x1800)
    print("Capturing desktop screenshot...")
    subprocess.run([
        CHROME_PATH,
        "--headless=new",
        "--disable-gpu",
        "--window-size=1440,1800",
        f"--screenshot={desktop_shot}",
        f"http://127.0.0.1:{PORT}/index.html#itineraryCalendarPane"
    ], check=True)

    # 2. Mobile screenshot - December (390x2000 iPhone 14/15 size)
    print("Capturing mobile December screenshot...")
    subprocess.run([
        CHROME_PATH,
        "--headless=new",
        "--disable-gpu",
        "--window-size=390,2000",
        f"--screenshot={mobile_dec_shot}",
        f"http://127.0.0.1:{PORT}/index.html#itineraryCalendarPane"
    ], check=True)

    # 3. Mobile screenshot - January (390x2000 iPhone 14/15 size with ?month=jan&day=2027-01-02)
    print("Capturing mobile January screenshot...")
    subprocess.run([
        CHROME_PATH,
        "--headless=new",
        "--disable-gpu",
        "--window-size=390,2000",
        f"--screenshot={mobile_jan_shot}",
        f"http://127.0.0.1:{PORT}/index.html?month=jan&day=2027-01-02#itineraryCalendarPane"
    ], check=True)

    print("Screenshots captured successfully:")
    print(f"Desktop: {desktop_shot}")
    print(f"Mobile Dec: {mobile_dec_shot}")
    print(f"Mobile Jan: {mobile_jan_shot}")

if __name__ == '__main__':
    main()
