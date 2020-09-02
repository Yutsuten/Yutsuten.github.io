---
---

## Create split

Before `:sp`, use `:top` or `:bot` for full width splits.

| Shortcut | Command | Description |
| --- | --- | --- |
| `Ctrl-W_s` | `:sp` | Split horizontally |
| `Ctrl-W_v` | `:vs` | Split vertically |

## Manage splits

| Shortcut | Command | Description |
| --- | --- | --- |
| `Ctrl-W_r` \| `Ctrl+R` | | Rotate windows downwards/rightwards |
| `Ctrl-W_R` | | Rotate windows upwards/leftwards |
| `Ctrl-W_x` \| `Ctrl-W_X` | | Exchange current window |
| `Ctrl-W_K` \| `Ctrl-W_J` \| `Ctrl-W_H` \| `Ctrl-W_L` | | Move current window |
| `Ctrl-W_+` \| `Ctrl-W_-` | `:res +N` \| `:res -N` | Resize horizontal split by `N` |
| `Ctrl-W_<` \| `Ctrl-W_>` | `:vert res +N` \| `:vert res -N` | Resize vertical split by `N` |
| `Ctrl-W_=` | | Same size for all windows |
|  `Ctrl-W_Ctrl-_` \| `Ctrl-W__` | `:res N` | Set current window height to `N` (default: highest possible) |
| `Ctrl-W_|` | `:vert res N` | Set current window width to `N` (default: widest possible) |
| | `:set wfh` | Fixed split height |
| | `:set wfw` | Fixed split width |
