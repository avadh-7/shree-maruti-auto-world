import os

project_dir = r"C:\Users\AVADH\.gemini\antigravity\scratch\maruti-auto-world"
exclude_dirs = [".next", "node_modules", "out", "build", "dist", ".git"]

matches = []

for root, dirs, files in os.walk(project_dir):
    dirs[:] = [d for d in dirs if d not in exclude_dirs]
    for file in files:
        file_path = os.path.join(root, file)
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            for term in ["mechanic_work", "cng_work", "general_car_service"]:
                if term in content:
                    matches.append((file_path, term))
        except Exception as e:
            pass

print("Search matches:")
for path, label in matches:
    rel_path = os.path.relpath(path, project_dir)
    print(f"- {rel_path} containing '{label}'")
