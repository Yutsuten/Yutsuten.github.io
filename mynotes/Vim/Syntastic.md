### Tips
- [Checkers](https://github.com/vim-syntastic/syntastic/blob/master/doc/syntastic-checkers.txt)
- Press ENTER on a error and cursor will jump there;

### Useful commands
```shell
# See available syntastic
:SyntasticInfo

# Invoke syntax check
:SyntasticCheck
```

### ESLint (Javascript linter)
[Site](https://eslint.org/)
```shell
yarn global add eslint

# Move to home folder (~/)
eslint --init

# Add to vimrc:
# let g:syntastic_javascript_checkers = ['eslint']

# Disable lint in a single line
// eslint-disable-line no-unused-vars
```

