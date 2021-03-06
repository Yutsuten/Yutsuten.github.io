---
---

## Simple movements

```
h   # move one character left
j   # move one row down
k   # move one row up
l   # move one character right
```

## Word movements

```
w   # move to beginning of next word
b   # move to previous beginning of word
e   # move to end of word
W   # move to beginning of next WORD
B   # move to beginning of previous WORD
E   # move to end of next WORD
```

## Inline movements

```
fX  # to next 'X' after cursor, in the same line (X is any character)
FX  # to previous 'X' before cursor (f and F put the cursor on X)
tX  # til next 'X' (similar to above, but cursor is before X)
TX  # til previous 'X'
;   # repeat above, in same direction
,   # repeat above, in reverse direction

0   # move to beginning of line
$   # move to end of line
_   # move to first non-blank character of the line
^   # move to first non-blank character of the line
g_  # move to last non-blank character of the line
```

## File movements

```
H   # move to top of screen
M   # move to middle of screen
L   # move to bottom of screen

%   # jump to matching bracket { } [ ] ( )

gg  # move to first line
G   # move to last line

ngg # move to n'th line of file (n is a number; 12gg moves to line 12)
nG  # move to n'th line of file (n is a number; 12G moves to line 12)

*   # next whole word under cursor
#   # previous whole word under cursor
gd  # go to definition/first occurrence of the word under cursor
gf  # go to file under cursor

Ctrl-F  # scroll forward
Ctrl-B  # scroll backward

Ctrl-I  # redo cursor movement
Ctrl-O  # undo cursor movement

Ctrl-B  # page up
Ctrl-F  # page down
```

## Set scroll relatively to cursor position

```
zz  # center
zt  # top
zb  # bottom
```
