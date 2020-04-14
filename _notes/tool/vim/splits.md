---
---

## Splitting

```
<c-w>s  # Split horizontally
:sp
<c-w>v  # Split vertically
:vs

resize N           # resize a horizontal split
vertical resize N  # resize a vertical split

set wfh  # WinFixHeight
set wfw  # WinFixWidth
```

## Rotating

```shell
<c-w><c-r>  # Rotate (invert) windows
```

## Split size

```
# Change size horizontally
<c-w> +
<c-w> -
<c-w> 10 +
<c-w> 10 -

# Change size vertically
<c-w> >
<c-w> <
<c-w> 10 >
<c-w> 10 <

# Equal dimensions
<c-w> =

<c-w> |  # Window size to widest possible
<c-w> _  # Window size to highest possible
```
