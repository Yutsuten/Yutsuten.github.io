---
update: 2021-02-06
---

## Usage

```vim
command -nargs=0 CommandName call s:Mymethod()
command -nargs=1 CommandName call s:Mymethod(<f-args>)
command -nargs=? CommandName call s:Mymethod(<f-args>)
```
