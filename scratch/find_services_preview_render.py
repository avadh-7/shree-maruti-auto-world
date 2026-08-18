with open(r"C:\Users\AVADH\.gemini\antigravity\scratch\maruti-auto-world\app\page.tsx", "r", encoding="utf-8") as f:
    code = f.read()

import re
# Find where servicesPreview is used
start_idx = code.find("servicesPreview.map")
if start_idx != -1:
    print(code[start_idx:start_idx+600])
else:
    print("servicesPreview.map not found!")
