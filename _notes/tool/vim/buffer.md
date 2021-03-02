---
---

## Opening file(s) into buffers

`:e` and `:find` accepts globing with * (file) or ** (directory).

`%:h` is the current directory.
`:cd path` may be used to change directory.

```vim
:new                    "New file"
:e path/file.txt        "Open existing file in new buffer"
:find path/**/file.txt  "Open existing file in new buffer"
:n path/**/file.txt     "Opens all matched files"

"Open remote file
:e scp://ec2-server/folder_in_user_home/filename
:e scp://ec2-server//absolute/path
```

## Switching between buffers

```vim
:buffers    :ls         "List current opened buffers"
:args                   "List arguments"
:b NUM      :b NAME     "<Tab> for autocompletion is available"
:sb NUM     :sb NAME    "Same as above but in a new split"
:vertical sb ARG        "Same as above but in a new vertical split"
:bn         :bp         "Next or previous buffer"
:n          :N          "Next or previous argument"
:argu NUM               "Jump to argument NUM, defaults to current"
```

## Removing buffers

```vim
:bd <num>   :bd NAME    "Ctrl-A can be used to target multiple buffers"
:%bd | e#               "Close all buffers but current"
```
