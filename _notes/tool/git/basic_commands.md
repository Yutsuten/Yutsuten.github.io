---
---

```shell
# Clone
git clone git@github:me/name.git    # Normal
git clone git@github:me/name.git .  # Clone contents inside existing folder

# Add files to staging area
git add .             # Add all
git add directory/    # Add all files inside a directory
git add path/to/file  # Add single file
git add -p file       # Add only part of the file (--patch)

# See difference
git diff
git diff --staged # After git add
git diff -- path/to/file.txt # Difference of a single file
git diff commit1 commit2
git diff HEAD~1 HEAD

# See commit data (diff included)
git show  # parameter can be a commit, default is HEAD

# Remove files from staging area
git reset HEAD .
git reset HEAD directory/
git reset HEAD path/to/file

# Undo changes in a file
git checkout -- .
git checkout -- directory/
git checkout -- path/to/file

# Commit changes
git commit               # Open the editor to type the message
git commit -m "Message"  # Create a message inline

# Update commit (not recommended if git push was done)
git commit --amend --no-edit     # Redo the last commit
git commit --amend -m "Message"  # Redo the last commit and enter a new message

# Push commits of master branch to remote (usually origin)
git push origin master

# Pull commits from remote
git pull origin master
git pull --rebase origin master
```
