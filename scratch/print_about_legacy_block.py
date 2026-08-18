with open(r"C:\Users\AVADH\.gemini\antigravity\scratch\maruti-auto-world\app\about\page.tsx", "r", encoding="utf-8") as f:
    code = f.read()

import re
# Find all occurrences of <Image or Image components in about/page.tsx
matches = re.finditer(r'<Image[\s\S]*?/>', code)
for m in matches:
    print(f"Match: {m.group(0)}")
    print("---")
