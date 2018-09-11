### Install and run
```shell
sudo apt install tmux
tmux
tmux new -s sessionname
tmux rename-session -t 0 sessionname
tmux ls
tmux attach -t 0
```

### Commands
```
# Split vertically or horizontally
C-b %
C-b "

# Navigating
C-b <arrow key>

# Select mode
C-b [
Arrow keys to movement
q

space to begin selection
enter to finish selection
C-b ]

# Close panel
C-d

# New window
C-b c

# Switch windows
C-b n
C-b p

# Detach session
C-b d
```
