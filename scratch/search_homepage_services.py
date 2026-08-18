with open(r"C:\Users\AVADH\.gemini\antigravity\scratch\maruti-auto-world\app\page.tsx", "r", encoding="utf-8") as f:
    code = f.read()

import re
# Find all imports in app/page.tsx
imports = re.findall(r'import\s+[\s\S]*?from\s+"[^"]+";', code)
print("Imports in app/page.tsx:")
for imp in imports:
    if "assets" in imp or "services" in imp:
        print(f"  {imp}")

# Find any references to servicesData or carServiceImg
print("\nReferences to service images in page.tsx:")
for word in ["servicesData", "carServiceImg", "car_service", "general_car_service", "generalCarServiceImg"]:
    if word in code:
        print(f"  Found '{word}'")
