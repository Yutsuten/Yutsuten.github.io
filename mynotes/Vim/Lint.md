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

### HTMLHint
[Site](http://htmlhint.com/)
```shell
yarn global add htmlhint
```

#### .htmlhintrc
```json
{
  "tagname-lowercase": true,
  "attr-lowercase": true,
  "attr-value-double-quotes": true,
  "attr-value-not-empty": false,
  "attr-no-duplication": true,
  "doctype-first": true,
  "tag-pair": true,
  "tag-self-close": false,
  "spec-char-escape": true,
  "id-unique": true,
  "src-not-empty": true,
  "title-require": true,
  "alt-require": true,
  "doctype-html5": true,
  "id-class-value": "dash",
  "style-disabled": false,
  "inline-style-disabled": false,
  "inline-script-disabled": false,
  "space-tab-mixed-disabled": "space",
  "id-class-ad-disabled": false,
  "href-abs-or-rel": false,
  "attr-unsafe-chars": true,
  "head-script-disabled": true
}
```
