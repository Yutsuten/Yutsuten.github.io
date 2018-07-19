### Tips
- [Syntastic](https://github.com/vim-syntastic/syntastic)
- [ALE](https://github.com/w0rp/ale#faq-disable-linters)

### Syntastic
```shell
:SyntasticInfo  # See available syntastic
:SyntasticCheck  # Invoke syntax check
:SyntasticReset  # Hide errors

# Activate in vimrc:
let g:syntastic_javascript_checkers = ['eslint']
```

### ALE
```shell
:ALENext  # Next error
:ALEPrevious  # Previous error

# Choosing linters (all by default)
> ftplugin/javascript.vim  # Can be any valid language
let b:ale_linters = ['eslint']
```

### ESLint (Javascript linter)
[Site](https://eslint.org/)
```shell
yarn global add eslint

# Move to home folder (~/)
eslint --init

# Disable lint in a single line
// eslint-disable-line no-unused-vars
```

### Flake8 (Python linter PEP8)
[Site](https://github.com/PyCQA/flake8)
```shell
pip install flake8
```
