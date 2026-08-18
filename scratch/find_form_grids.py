with open(r"C:\Users\AVADH\.gemini\antigravity\scratch\maruti-auto-world\components\AppointmentForm.tsx", "r", encoding="utf-8") as f:
    lines = f.readlines()

print("AppointmentForm.tsx grid lines:")
for idx, line in enumerate(lines):
    if "grid-cols" in line:
        print(f"Line {idx+1}: {line.strip()}")
        # print next 3 lines
        for i in range(idx, min(len(lines), idx + 4)):
            print(f"  {i+1}: {lines[i]}", end="")
        print("----------")

with open(r"C:\Users\AVADH\.gemini\antigravity\scratch\maruti-auto-world\components\ContactForm.tsx", "r", encoding="utf-8") as f:
    lines2 = f.readlines()

print("\nContactForm.tsx grid lines:")
for idx, line in enumerate(lines2):
    if "grid-cols" in line:
        print(f"Line {idx+1}: {line.strip()}")
        for i in range(idx, min(len(lines2), idx + 4)):
            print(f"  {i+1}: {lines2[i]}", end="")
        print("----------")
