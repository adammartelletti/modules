import os

# List of module names
modules = [
    "accordions",
    "checklist",
    "he-buttons",
    "he-grid",
    "pre_header",
    "social_meta",
    "tracking_analytics"
]

# GitHub base path and Go version
github_base_path = "github.com/adammartelletti/modules/"
go_version = "1.20"

# Create go.mod for each module
for module in modules:
    module_path = os.path.join(module)  # Adjust path as necessary
    go_mod_content = f"module {github_base_path}{module}\n\ngo {go_version}\n"
    
    # Ensure the directory exists
    os.makedirs(module_path, exist_ok=True)
    
    # Write the go.mod file
    with open(os.path.join(module_path, "go.mod"), 'w') as go_mod_file:
        go_mod_file.write(go_mod_content)
    
    print(f"go.mod created for {module}")
