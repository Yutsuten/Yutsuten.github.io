---
---

```bash
command | xclip
command | xclip -selection c  # clipboard
command | xclip -f | another_command
```

## Copying pwd to clipboard
```bash
pwd | tr -d '\n' | xclip -selection c
echo -n `pwd` | xclip -selection c
```
