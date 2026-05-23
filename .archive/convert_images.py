import os
from PIL import Image

directory = 'src/assets/timeline-upgraded'

for filename in os.listdir(directory):
    if filename.endswith(".png"):
        filepath = os.path.join(directory, filename)
        img = Image.open(filepath)
        webp_path = os.path.join(directory, os.path.splitext(filename)[0] + ".webp")
        img.save(webp_path, "WEBP")
        print(f"Converted {filename} to {webp_path}")
