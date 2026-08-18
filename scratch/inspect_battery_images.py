import os
import time

dir_path = r"C:\Users\AVADH\.gemini\antigravity\scratch\maruti-auto-world\assets"
for ext in ["jpg", "webp"]:
    path = os.path.join(dir_path, f"battery_replacement.{ext}")
    if os.path.exists(path):
        mtime = os.path.getmtime(path)
        size = os.path.getsize(path)
        print(f"File: battery_replacement.{ext}")
        print(f"  Size: {size} bytes")
        print(f"  Modified: {time.ctime(mtime)}")
