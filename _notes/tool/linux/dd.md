---
---

### Burn an ISO into a pendrive
```shell
# As root (sudo isn't enough)
dd if=debian.iso of=/dev/sdb bs=4M; sync
```
