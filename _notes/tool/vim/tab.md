---
---

## Opening files in different tabs

```bash
vim -p first.txt second.txt
```

## Dealing with tabs inside vim

```
t  # Using netrw, opens the file in a new tab

:tabedit file
:tabn 1  # go to tab 1
:tabclose
<C-w> T   # Move current panel to new tab

gt   # go to previous tab
gT   # go to next tab

1gt  # go to tab 1
```
