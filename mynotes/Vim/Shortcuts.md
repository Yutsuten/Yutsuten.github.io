### Normal mode
```shell
# Repeat last command
.

# Remove search highlighting
:noh
:nohlsearch

# Replace
:%s/before/after/g      # All file
:'<,'>s/before/after/g  # Only selection

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

# Windows manipulation
<c-w>s  # Split horizontally
<c-w>v  # Split vertically
<c-w><c-r>  # Rotate (invert) windows

# Mark a line (not visible)
ma  # Second letter can be in [a-z] for same file, [A-Z] for global
'a  # Jump to the line the mark is
`a  # Jump to the position the mark is

# Save file in new encoding and format (new lines)
:set fenc=utf8
:set ff=unix
```
