with open(r"C:\Users\AVADH\.gemini\antigravity\scratch\maruti-auto-world\app\contact\page.tsx", "r", encoding="utf-8") as f:
    lines = f.readlines()

for idx, line in enumerate(lines[80:]):
    print(f"{idx+81}: {line}", end="")
