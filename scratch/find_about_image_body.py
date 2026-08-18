with open(r"C:\Users\AVADH\.gemini\antigravity\scratch\maruti-auto-world\app\about\page.tsx", "r", encoding="utf-8") as f:
    lines = f.readlines()

for idx, line in enumerate(lines):
    if "<Image" in line:
        print(f"Line {idx+1}: {line.strip()}")
        # print context
        start = max(0, idx - 5)
        end = min(len(lines), idx + 8)
        for i in range(start, end):
            print(f"  {i+1}: {lines[i]}", end="")
        print("----------")
