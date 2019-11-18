---
---

```vim
"Add ! after function to overwrite if it is already defined (useful when reloading)
function! Mymethod(val)
  " Set global setting from argument
  let &shiftwidth = a:val
endfunction
```
