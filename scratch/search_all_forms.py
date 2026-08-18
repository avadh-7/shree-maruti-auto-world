import os
import re

project_dir = r"C:\Users\AVADH\.gemini\antigravity\scratch\maruti-auto-world"
exclude_dirs = [".next", "node_modules", "out", "build", "dist", ".git"]

form_files = []

for root, dirs, files in os.walk(project_dir):
    dirs[:] = [d for d in dirs if d not in exclude_dirs]
    for file in files:
        if file.endswith(('.tsx', '.ts')):
            file_path = os.path.join(root, file)
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                if "<form" in content:
                    form_files.append(os.path.relpath(file_path, project_dir))
            except:
                pass

print("Files containing '<form':")
for path in form_files:
    print("-", path)
