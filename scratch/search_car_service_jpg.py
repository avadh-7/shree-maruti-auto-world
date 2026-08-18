import os

project_dir = r"C:\Users\AVADH\.gemini\antigravity\scratch\maruti-auto-world"
exclude_dirs = [".next", "node_modules", "out", "build", "dist", ".git"]

matches = []

for root, dirs, files in os.walk(project_dir):
    dirs[:] = [d for d in dirs if d not in exclude_dirs]
    for file in files:
        if file.endswith(('.ts', '.tsx', '.js', '.jsx', '.json', '.html', '.css', '.md')):
            file_path = os.path.join(root, file)
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                if "car_service.jpg" in content:
                    matches.append(file_path)
            except Exception as e:
                pass

print("Files containing 'car_service.jpg':")
for path in matches:
    print("-", os.path.relpath(path, project_dir))
