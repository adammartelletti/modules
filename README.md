# Hugo Modules Setup Guide

This guide provides instructions on setting up your Hugo project as a module and creating `go.mod` files for each submodule within your project. This setup allows you to easily manage dependencies and share your Hugo modules across projects.

## Prerequisites

- [Hugo](https://gohugo.io/getting-started/installing/) (Extended version recommended)
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Python](https://www.python.org/downloads/) (Version 3.6 or newer)
- A GitHub account and a repository for your modules

## Initializing Your Hugo Project as a Module

To initialize your Hugo project as a module, navigate to the root directory of your Hugo site and run the following command:

```bash
hugo mod init github.com/adammartelletti/modules
```

This command creates a `go.mod` file in your Hugo project's root, marking it as a Hugo module. The path `github.com/adammartelletti/modules` should be replaced with the path to your own GitHub repository where your Hugo project is hosted.

## Creating `go.mod` Files for Submodules

Each submodule within your Hugo project can be treated as a separate module. To facilitate this, a `go.mod` file must be created within each submodule's directory. The following Python script automates the creation of these `go.mod` files.

### Python Script: `create_gomod.py`

```python
import os

# List of your submodule names
submodules = [
    "accordions",
    "checklist",
    "he-buttons",
    "he-grid",
    "pre_header",
    "social_meta",
    "tracking_analytics"
]

# Your GitHub base path and desired Go version
github_base_path = "github.com/adammartelletti/modules/"
go_version = "1.20"

# Loop to create a go.mod file in each submodule directory
for submodule in submodules:
    module_path = os.path.join(submodule)
    go_mod_content = f"module {github_base_path}{submodule}\n\ngo {go_version}\n"
    
    # Ensure the submodule directory exists
    os.makedirs(module_path, exist_ok=True)
    
    # Write the go.mod file
    with open(os.path.join(module_path, "go.mod"), 'w') as go_mod_file:
        go_mod_file.write(go_mod_content)
    
    print(f"go.mod created for {submodule}")
```

To use this script:

1. Save it as `create_gomod.py` in the root directory of your Hugo project.
2. Run the script with Python by executing `python create_gomod.py` in your terminal.

This script creates a `go.mod` file in each specified submodule directory with the proper module path and Go version.

## Committing Your Changes

After running the script, you'll have a `go.mod` file in each of your submodule directories. Use Git to add, commit, and push these changes to your GitHub repository:

```bash
git add .
git commit -m "Add go.mod files to submodules"
git push origin main
```

## Conclusion

You have now initialized your Hugo project as a module and created `go.mod` files for each submodule. This setup enhances modularity and reusability across your Hugo projects.

---

Feel free to adjust the content of the README to better fit your project's specific requirements or conventions.
