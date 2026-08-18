with open(r"C:\Users\AVADH\.gemini\antigravity\scratch\maruti-auto-world\app\services\[slug]\page.tsx", "r", encoding="utf-8") as f:
    lines = f.readlines()

for idx, line in enumerate(lines):
    if "grid-cols" in line or "lg:grid" in line:
        print(f"Line {idx+1}: {line.strip()}")
        # print next 3 lines
        for i in range(idx, min(len(lines), idx + 4)):
            print(f"  {i+1}: {lines[i]}", end="")
        print("----------")
