with open(r"C:\Users\AVADH\.gemini\antigravity\scratch\maruti-auto-world\components\AppointmentForm.tsx", "r", encoding="utf-8") as f:
    form_code = f.read()

import re
matches = re.finditer(r'grid-cols-\d+|md:grid-cols-\d+', form_code)
print("AppointmentForm.tsx grids:")
for m in matches:
    print(f"  {m.group(0)}")

with open(r"C:\Users\AVADH\.gemini\antigravity\scratch\maruti-auto-world\components\ContactForm.tsx", "r", encoding="utf-8") as f:
    contact_code = f.read()

matches2 = re.finditer(r'grid-cols-\d+|md:grid-cols-\d+', contact_code)
print("\nContactForm.tsx grids:")
for m in matches2:
    print(f"  {m.group(0)}")
