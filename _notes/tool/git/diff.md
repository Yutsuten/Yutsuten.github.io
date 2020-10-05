---
---

## Usage

```shell
git diff OPTIONS COMMIT -- PATH
```

| Commit | Description |
| --- | --- |
| `HEAD~N` | Difference between the previous commit and the working tree. |
| `HEAD~N..` `HEAD~N..HEAD` | Difference between a recent commit and the latest commit. |
| `HEAD~N..HEAD~M` | Difference between two recent commits. |

You can also use the commit's hash to specify the commit.
