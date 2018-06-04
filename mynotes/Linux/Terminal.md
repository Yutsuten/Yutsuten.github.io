### Grep
```shell
# Recursively in current folder
grep -r 'search_value' .
grep -r --exclude="*.swp" 'search_value' .

# Current directory
pwd

# SSH copy folder - terminal is on local
# Host name is in file ~/.ssh/config
scp -r folder/to/copy/ user-name@host-name:/home/ubuntu/
```
