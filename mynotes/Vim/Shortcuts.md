### Normal mode
```shell
# Repeat last command
.

# Remove search highlighting
:noh
:nohlsearch

# Change case of characters
<visual mode> u
<visual mode> U
gu<movement>
gU<movement>

# Mark a line (not visible)
ma  # Second letter can be in [a-z] for same file, [A-Z] for global
'a  # Jump to the line the mark is
`a  # Jump to the position the mark is

# Save file in new encoding and format (new lines)
:set fenc=utf8
:set ff=unix
```

