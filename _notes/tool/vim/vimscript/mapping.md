---
---

```vim
let mapleader = '\'

nmap <leader>r :execute "!make"<CR>
nmap <leader>r :execute "silent !make"<CR>
nmap <leader>r :call jobstart(['make'])<CR>
```
