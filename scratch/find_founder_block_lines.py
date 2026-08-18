with open(r"C:\Users\AVADH\.gemini\antigravity\scratch\maruti-auto-world\app\about\page.tsx", "r", encoding="utf-8") as f:
    lines = f.readlines()

for idx, line in enumerate(lines[120:]):
    print(f"{idx+121}: {line}", end="")
