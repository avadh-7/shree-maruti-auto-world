with open(r"C:\Users\AVADH\.gemini\antigravity\scratch\maruti-auto-world\app\services\servicesData.ts", "r", encoding="utf-8") as f:
    code = f.read()

target_slugs = ["accessories-mechanic-work", "cng-work", "general-car-service", "battery-replacement"]

for slug in target_slugs:
    start_idx = code.find(f'slug: "{slug}"')
    if start_idx != -1:
        # Print next 500 characters
        block = code[start_idx:start_idx+600]
        print(f"--- SLUG: {slug} ---")
        print(block)
        print("-------------------\n")
    else:
        print(f"Slug not found: {slug}")
