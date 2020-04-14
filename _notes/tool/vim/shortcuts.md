---
---

## Normal mode

```
# :redir command redirects the output of a command to a register (@+).
# The register @+ refers to the clipboard.
:redir @+ | set guifont | redir END

# Repeat last command
.

# Change syntax coloring
:set syntax=html

# Replace
:%s/before/after/g      # All file
:'<,'>s/before/after/g  # Only selection
:%s/\v(\w+)/ \1 /g      # \v "very magic" mode, full regex. Captured group \1
:%s/\(\w\+)/ \1 /g      # Without "very magic" mode, escape ( and )
\r  # New line
\n  # Null character

# Copy file path to clipboard
:let @+ = @%

# Change case of characters
<visual mode> u
<visual mode> U
gu<movement>
gU<movement>

# Mark a line (not visible)
ma  # Second letter can be in [a-z] for same file, [A-Z] for global
'a  # Jump to the line the mark is
`a  # Jump to the position the mark is

# Change file's encoding and format (new lines)
:set fenc=utf8
:set ff=unix

# Syntax highlighting
:set syntax=markdown
```
