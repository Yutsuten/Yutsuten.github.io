---
update: 2021-02-06
---

## Basic usage

When defining `autocmd`,
its better to put it inside `augroup`,
so on script reload we don't have it defined twice.

See help for `autocmd-define` and `autocommand-events` for more details.

```vim
augroup example
  autocmd!
  autocmd TermOpen * setlocal bufhidden=hide nonumber
  autocmd VimEnter * call s:Setup()
augroup end
```
