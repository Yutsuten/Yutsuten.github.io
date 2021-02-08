---
update: 2021-02-08
---

## Normal mode

```
# :redir command redirects the output of a command to a register (@+).
# The register @+ refers to the clipboard.
:redir @+ | set guifont | redir END

# Repeat last command
.

# Change case of characters
<visual mode> u
<visual mode> U
gu<movement>
gU<movement>
```
