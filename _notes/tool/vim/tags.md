---
---

## Jumping to function definition

```bash
# Install ctags
sudo apt install ctags

# Generate tags for the project
cd ~/path/to/project
ctags -R

# <C-]> to jump to a symbol
# <C-t> to jump back
:po[p]  # to jump back
:tags   # list of tags
```
