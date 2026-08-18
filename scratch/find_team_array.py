with open(r"C:\Users\AVADH\.gemini\antigravity\scratch\maruti-auto-world\app\about\page.tsx", "r", encoding="utf-8") as f:
    lines = f.readlines()

for idx, line in enumerate(lines):
    if "const team" in line or "const values" in line:
        print(f"Line {idx+1}: {line.strip()}")
        # print next 25 lines
        for i in range(idx, min(len(lines), idx + 25)):
            print(f"  {i+1}: {lines[i]}", end="")
        print("----------")
