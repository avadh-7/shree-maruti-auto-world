import os

files = [
    r"C:\Users\AVADH\.gemini\antigravity\scratch\maruti-auto-world\app\contact\page.tsx",
    r"C:\Users\AVADH\.gemini\antigravity\scratch\maruti-auto-world\app\services\[slug]\page.tsx",
    r"C:\Users\AVADH\.gemini\antigravity\scratch\maruti-auto-world\components\FloatingActions.tsx"
]

for file_path in files:
    if os.path.exists(file_path):
        print(f"=== FILE: {os.path.basename(file_path)} ===")
        with open(file_path, "r", encoding="utf-8") as f:
            lines = f.readlines()
        for idx, line in enumerate(lines):
            if "WhatsApp" in line:
                start = max(0, idx - 5)
                end = min(len(lines), idx + 8)
                for i in range(start, end):
                    print(f"{i+1}: {lines[i]}", end="")
                print("-----------------\n")
