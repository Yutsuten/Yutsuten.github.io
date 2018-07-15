### Grep
```shell
# Recursively in current folder
grep -r 'search_value' .
grep -r --exclude="*.swp" 'search_value' .

# Removing folder without asking for confirmation
# -f force
rm -rf folder/

# List directory contents
ls -lAF  # l full output, A include hidden files, F show special characters on each entry

# Current directory
pwd

# List all processes
ps -A

# Kill process
kill <PID>
xkill  # Click window

# Extract from .tgz
tar -xzf file.tgz
# x for extract
# z for gnuzip
# f for file (the .tgz file directory)

# SSH copy folder - terminal is on local
# Host name is in file ~/.ssh/config
scp -r folder/to/copy/ user-name@host-name:/home/ubuntu/

# Generate random password
</dev/urandom tr -dc 'A-Za-z0-9!"#$%&'\''()*+,-./:;<=>?@[\]^_`{|}~' | head -c 16  ; echo
```
