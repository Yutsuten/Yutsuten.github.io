---
---

### Syntastic
[Github](https://github.com/vim-syntastic/syntastic)
```shell
:SyntasticInfo  # See available syntastic
:SyntasticCheck  # Invoke syntax check
:SyntasticReset  # Hide errors

# Activate in vimrc:
let g:syntastic_javascript_checkers = ['eslint']
```

### ALE
[Github](https://github.com/w0rp/ale#faq-disable-linters)
```shell
:ALENext  # Next error
:ALEPrevious  # Previous error

# Choosing linters (all by default)
> ftplugin/javascript.vim  # Can be any valid language
let b:ale_linters = ['eslint']
```
