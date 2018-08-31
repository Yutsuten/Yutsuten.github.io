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
:%s/\v(\w+)/ \1 /g      # \v "very magic" mode, full regex. Captured group \1
:%s/\(\w\+)/ \1 /g      # Without "very magic" mode, escape ( and )

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
:sp
<c-w>v  # Split vertically
:vs
<c-w><c-r>  # Rotate (invert) windows
<c-w> + # Change size horizontally
<c-w> -
<c-w> > # Change size vertically
<c-w> <

# Mark a line (not visible)
ma  # Second letter can be in [a-z] for same file, [A-Z] for global
'a  # Jump to the line the mark is
`a  # Jump to the position the mark is

# Save file in new encoding and format (new lines)
:set fenc=utf8
:set ff=unix
```
