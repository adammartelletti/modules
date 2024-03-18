import os
import subprocess

# List of module names to process
modules = [
    "accordions",
    "checklist",
    "he-buttons",
    "he-grid",
    "pre_header",
    "social_meta",
    "tracking_analytics"
]

# Base GitHub path for the modules
github_base_path = "github.com/adammartelletti/modules/"

# Loop through each module
for module in modules:
    # Construct the full GitHub path for the module
    github_path = f"{github_base_path}{module}"
    
    # Initialize the Hugo module
    subprocess.run(["hugo", "mod", "init", github_path], check=True)
    
    # Add changes to Git
    subprocess.run(["git", "add", "."], check=True)
    
    # Commit changes
    commit_message = f"Initialized Hugo module for {module}"
    subprocess.run(["git", "commit", "-m", commit_message], check=True)
    
    # Push changes to GitHub
    subprocess.run(["git", "push"], check=True)

    print(f"Module {module} processed successfully.")
