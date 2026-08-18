import os
import re

project_dir = r"C:\Users\AVADH\.gemini\antigravity\scratch\maruti-auto-world"
exclude_dirs = [".next", "node_modules", "out", "build", "dist", ".git"]

issues = []

for root, dirs, files in os.walk(project_dir):
    dirs[:] = [d for d in dirs if d not in exclude_dirs]
    for file in files:
        if file.endswith(('.tsx', '.ts')):
            file_path = os.path.join(root, file)
            rel_path = os.path.relpath(file_path, project_dir)
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Check for grid cols without md or lg
                # e.g., grid-cols-2 or grid-cols-3 or grid-cols-4 without responsiveness
                grid_matches = re.findall(r'grid-cols-\d+', content)
                for grid in grid_matches:
                    # Let's find context around grid
                    idx = content.find(grid)
                    context_start = max(0, idx - 40)
                    context_end = min(len(content), idx + 40)
                    context = content[context_start:context_end].strip()
                    # Check if there is a mobile fallback or responsive break, e.g., grid-cols-1 md:grid-cols-2
                    if "grid-cols-1" not in context and "sm:grid-cols" not in context and "md:grid-cols" not in context:
                        issues.append((rel_path, f"Potential fixed grid columns: '{grid}' in context: '{context}'"))
                
                # Check for large fixed widths (w-[300px]+ or w-96 etc.) that are not max-w or don't have md:w-
                fixed_w_matches = re.findall(r'\bw-\d+|\bw-\[[3-9]\d{2}px\]|\bw-\[1\d{3}px\]', content)
                for w in fixed_w_matches:
                    # Skip w-full, w-auto, small classes like w-12, w-16, w-20, w-24, w-32, w-40, w-48, w-56, w-64
                    # w-72 is 288px, w-80 is 320px, w-96 is 384px
                    # Let's find context
                    idx = content.find(w)
                    context_start = max(0, idx - 40)
                    context_end = min(len(content), idx + 40)
                    context = content[context_start:context_end].strip()
                    if w in ["w-80", "w-96", "w-72"] or "px]" in w:
                        # check if responsive w-full is used first, e.g., w-full md:w-80
                        if "w-full" not in context and "md:w" not in context and "sm:w" not in context:
                            issues.append((rel_path, f"Large fixed width class: '{w}' in context: '{context}'"))
                
                # Check for flex containers without wraps or column fallbacks
                # e.g. flex flex-row without md:flex-row
                # We won't alert on everything, just major items
                
            except Exception as e:
                pass

print("Potential responsiveness checks:")
if not issues:
    print("No immediate red flags found.")
else:
    for file, issue in issues:
        print(f"File: {file}\n  Issue: {issue}\n")
