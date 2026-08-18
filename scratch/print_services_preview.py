with open(r"C:\Users\AVADH\.gemini\antigravity\scratch\maruti-auto-world\app\page.tsx", "r", encoding="utf-8") as f:
    code = f.read()

import re
start_idx = code.find("const servicesPreview =")
if start_idx != -1:
    print(code[start_idx:start_idx+1000])
else:
    print("servicesPreview not found!")
