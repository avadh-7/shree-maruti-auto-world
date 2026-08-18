with open(r"C:\Users\AVADH\.gemini\antigravity\scratch\maruti-auto-world\app\services\servicesData.ts", "r", encoding="utf-8") as f:
    code = f.read()

import re
matches = re.finditer(r'carServiceImg', code)
print("servicesData.ts uses of carServiceImg:")
for m in matches:
    # Print the line containing the match
    line_no = code[:m.start()].count('\n') + 1
    line = code.split('\n')[line_no-1]
    print(f"  Line {line_no}: {line.strip()}")

with open(r"C:\Users\AVADH\.gemini\antigravity\scratch\maruti-auto-world\app\gallery\page.tsx", "r", encoding="utf-8") as f:
    gallery_code = f.read()

gallery_matches = re.finditer(r'car_service\.jpg', gallery_code)
print("\ngallery/page.tsx uses of car_service.jpg:")
for m in gallery_matches:
    line_no = gallery_code[:m.start()].count('\n') + 1
    line = gallery_code.split('\n')[line_no-1]
    print(f"  Line {line_no}: {line.strip()}")
