### Install and run
```shell
sudo apt install tmux
tmux
tmux new -s sessionname
tmux rename-session -t 0 sessionname
```

### Commands
```
# Split vertically or horizontally
C-b %
C-b "

# Navigating
C-b <arrow key>

# Close panel
C-d

# New window
C-b c

# Switch windows
C-b n
C-b p

# Detach session
C-b d

# Recover session
tmux ls
tmux attach -t 0
```
