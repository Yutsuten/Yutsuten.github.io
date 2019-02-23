---
---

### Commands to manage sessions
```shell
# These commands can be run inside tmux in command mode without 'tmux'
tmux new
tmux new -s sessionname
tmux rename-session -t 0 sessionname
tmux ls
tmux attach -t 0
tmux attach -c ~/Projects
tmux kill-server
```

### Fixing colours issues when nesting
```shell
tmux -2  # Force tmux to assume the terminal supports 256 colours
```
