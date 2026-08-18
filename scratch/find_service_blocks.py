with open(r"C:\Users\AVADH\.gemini\antigravity\scratch\maruti-auto-world\app\services\servicesData.ts", "r", encoding="utf-8") as f:
    code = f.read()

import re
# Find objects in servicesData array
service_blocks = re.findall(r'\{\s*slug:\s*"([^"]+)"[\s\S]*?\}', code)

target_slugs = ["accessories-mechanic-work", "cng-work", "general-car-service", "battery-replacement"]

# We can search and print each block
for slug in target_slugs:
    pattern = re.compile(rf'\{\s*slug:\s*"{slug}"[\s\S]*?iconName:\s*"([^"]+)",\s*image:\s*([a-zA-Z0-9_]+),[\s\S]*?\}')
    m = pattern.search(code)
    if m:
        print(f"Service: {slug}")
        print(f"  Icon: {m.group(1)}")
        print(f"  Image Var: {m.group(2)}")
        # Let's find the import of that Image Var
        import_match = re.search(rf'import\s+{m.group(2)}\s+from\s+"([^"]+)";', code)
        if import_match:
            print(f"  Import: {import_match.group(0)}")
        else:
            print(f"  Import not found for {m.group(2)}")
    else:
        print(f"Slug not found: {slug}")
