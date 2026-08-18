with open(r"C:\Users\AVADH\.gemini\antigravity\scratch\maruti-auto-world\app\about\page.tsx", "r", encoding="utf-8") as f:
    lines = f.readlines()

for idx, line in enumerate(lines[:60]):
    if "import" in line or "<Image" in line or "assets" in line:
        print(f"Line {idx+1}: {line.strip()}")
        # print next 10 lines
        for i in range(idx, min(len(lines), idx + 8)):
            print(f"  {i+1}: {lines[i]}", end="")
        print("----------")
