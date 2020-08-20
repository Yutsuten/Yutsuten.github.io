---
doc: https://git-scm.com/docs/git-log
---

## Usage

Show the latest commits.

```shell
git log
git log -n 5       # Last 5 commits
git log --oneline  # Simplified output
```

Show full history of a line range.

```shell
git log -L25,+1:'path/file.txt'
```
