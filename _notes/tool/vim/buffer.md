---
---

## Opening file(s) into buffers

`:e` and `:find` accepts globing with * (file) or ** (directory).

`%:h` is the current directory.

```vim
:new                    "New file"
:e path/file.txt        "Open existing file in new buffer"
:find path/**/file.txt  "Open existing file in new buffer"
:n path/**/file.txt     "Opens all matched files"
```

## Switching between buffers

```vim
:buffers    :ls         "List current opened buffers"
:args                   "List arguments"
:b <num>    :b <name>   "<Tab> for autocompletion is available"
:bn         :bp         "Next or previous buffer"
:n          :N          "Next or previous argument"
```

## Removing buffers

```vim
:bd <num>   :bd <name>  "Ctrl-A can be used to target multiple buffers"
:%bd | e#               "Close all buffers but current"
```
