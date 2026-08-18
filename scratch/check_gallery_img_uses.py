with open(r"C:\Users\AVADH\.gemini\antigravity\scratch\maruti-auto-world\app\gallery\page.tsx", "r", encoding="utf-8") as f:
    code = f.read()

import re
matches = re.finditer(r'carServiceImg', code)
print("gallery/page.tsx uses of carServiceImg:")
for m in matches:
    line_no = code[:m.start()].count('\n') + 1
    line = code.split('\n')[line_no-1]
    print(f"  Line {line_no}: {line.strip()}")
