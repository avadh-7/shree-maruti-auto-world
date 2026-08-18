with open(r"C:\Users\AVADH\.gemini\antigravity\scratch\maruti-auto-world\app\services\servicesData.ts", "r", encoding="utf-8") as f:
    lines = f.readlines()

for idx, line in enumerate(lines):
    if 'slug: "accessories-mechanic-work"' in line or 'slug: "cng-work"' in line or 'slug: "general-car-service"' in line:
        print(f"Line {idx+1}: {line.strip()}")
        # print next 10 lines
        for i in range(idx, idx + 10):
            print(f"  {i+1}: {lines[i]}", end="")
        print("----------")
