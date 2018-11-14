---
---

```shell
# Merge a branch into another
(develop) $ git merge new-feature

# Force creating a new commit for the merge
(develop) $ git merge --no-ff new-feature

# Abort a merge with conflicts
git merge --abort

# After fixing conflicts, commit merge
git commit --no-edit  # (Recommended) Default merge message

# Squash all commits into one
git merge --squash new-feature
git commit
```
