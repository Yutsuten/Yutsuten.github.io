### Install
```shell
# Packaged in distribution
sudo apt install tmux

# Compiling from source
VERSION=2.7
sudo apt -y remove tmux
sudo apt -y install wget tar libevent-dev libncurses-dev
wget https://github.com/tmux/tmux/releases/download/${VERSION}/tmux-${VERSION}.tar.gz
tar xf tmux-${VERSION}.tar.gz
rm -f tmux-${VERSION}.tar.gz
cd tmux-${VERSION}
./configure
make
sudo make install
cd -
sudo rm -rf /usr/local/src/tmux-*
sudo mv tmux-${VERSION} /usr/local/src
```

### Run
```
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

# Zoom
C-b z

# 'Rotate' panels
C-b C-o

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
