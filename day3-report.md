# DEVOPS ENGINEER TRACK — DAY 3 REPORT

## ◈ Setup Status
All required tools are successfully installed and operational:

- VS Code: Installed and configured
- Git: Installed and verified using `git --version`
- GitHub: Account created and repository connected

## ◈ Task Inventory
The following tasks were completed:

- Initialized a new Git repository using `git init`
- Created project files:
  - `network_config.txt`
  - `server_setup.sh`
  - `README.md`
- Added files to staging area using `git add .`
- Made initial commit: "Initial Infrastructure Setup"
- Modified `README.md` and committed changes: "docs: update current status"
- Checked commit history using: `git log --oneline --graph --decorate`
- Created a GitHub repository: `devops-foundation`
- Connected local repo to GitHub using remote origin
- Pushed code to GitHub using `git push -u origin main`
- Created a new branch: `update-security-patch`
- Made changes and committed in feature branch
- Switched back to main branch
- Merged feature branch into main

## ◈ Debugging Log

### 1. Error: touch is not recognized in terminal
Issue:

touch is not recognized as the name of cmdlet, function script file, or operable program.
Solution:

Use New-item cmdlet that works in Windows instead of touch

### 2. Error: Git not recognized in terminal
Issue:
git is not recognized as an internal or external command
Solution:
- Confirmed git Installation form window application 
- check system path entry
- set location in path
- Restarted terminal

## ◈ Key Insights (Aha! Moment for me)

- We can create files using terminal
- Branching allows safe experimentation without affecting the main codebase.
- Findout use of .md files an format to write it