---
update: 2021-02-03
---

```vim
" Add ! after function to overwrite if it is already defined (useful when reloading)
function! MyMethod(myarg)
  " DoSomething
  return 0
endfunction

call MyMethod(1)
```
