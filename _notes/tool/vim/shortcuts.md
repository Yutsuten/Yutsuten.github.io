---
---

### Normal mode
```shell
# :redir command redirects the output of a command to a register (@+).
# The register @+ refers to the clipboard.
:redir @+ | set guifont | redir END

# Repeat last command
.

# Remove search highlighting
:noh
:nohlsearch

# Change syntax coloring
:set syntax=html

# Replace
:%s/before/after/g      # All file
:'<,'>s/before/after/g  # Only selection
:%s/\v(\w+)/ \1 /g      # \v "very magic" mode, full regex. Captured group \1
:%s/\(\w\+)/ \1 /g      # Without "very magic" mode, escape ( and )

# Copy file path to clipboard
:let @+ = @%

# See buffers list
:buffers

# Change case of characters
<visual mode> u
<visual mode> U
gu<movement>
gU<movement>

# Cursor history
<c-i>  # Forward
<c-o>  # Backward
g,  # Forward
g;  # Backward

# Fast scroll
<c-f>  # Forward
<c-b>  # Backward

# Mark a line (not visible)
ma  # Second letter can be in [a-z] for same file, [A-Z] for global
'a  # Jump to the line the mark is
`a  # Jump to the position the mark is

# Save file in new encoding and format (new lines)
:set fenc=utf8
:set ff=unix
```
