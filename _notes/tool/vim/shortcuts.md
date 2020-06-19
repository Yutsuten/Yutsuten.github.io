---
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

# Mark a line (not visible)
ma  # Second letter can be in [a-z] for same file, [A-Z] for global
'a  # Jump to the line the mark is
`a  # Jump to the position the mark is
```
