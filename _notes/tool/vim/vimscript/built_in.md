---
update: 2021-02-06
---

## Ask for input

```vim
let default_value = 'default'
call inputsave()
let opts = {
      \ 'prompt': 'Choose a name: ',
      \ 'default': default_value,
      \ 'cancelreturn': default_value,
      \ }
let name = input(opts)
call inputrestore()
```

## Printf

```vim
echo printf(' %s ', myvar)
```

## Load vim file

Use `%` for the current file.

```vim
so %
so $MYVIMRC
```
