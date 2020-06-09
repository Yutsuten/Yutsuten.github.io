---
---

Get disk usage of all mounted disks on the system.

```shell
df
df -h
```

Get size of files and directories of a directory.

```shell
du -sh <dir>
du -h <dir> | grep '^[0-9\.]\+G'
du -h | sort -hr | head
```
