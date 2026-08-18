with open(r"C:\Users\AVADH\.gemini\antigravity\scratch\maruti-auto-world\app\services\servicesData.ts", "r", encoding="utf-8") as f:
    code = f.read()

import re
matches = re.findall(r'slug:\s*"([^"]+)",\s*title:\s*"([^"]+)"', code)
print("All services in servicesData.ts:")
for slug, title in matches:
    print(f"- slug: {slug}, title: {title}")
