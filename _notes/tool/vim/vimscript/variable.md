---
---

## Name spaces

See help for `internal-variables` for more details.

```vim
myvar         "Local to a function, may conflict with other scopes"
a:myarg       "Argument"
b:myarg       "Local to buffer"
w:myarg       "Local to window"
s:myarg       "Local to script"
l:myarg       "Local to function"
g:myarg       "Global"
&shiftwidth   "Global setting"
```

## Set / change variable value

```vim
let myvar = 'Hello'
```
