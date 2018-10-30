```shell
# Creating alias
alias aliasname='commands'

# Grep recursively in current folder
grep -r 'search_value' .
grep -r --exclude="*.swp" 'search_value' .

# Find files by name
find . -name "*.js"

# Difference between files
diff file1 file2

# Removing folder without asking for confirmation
# -f force
rm -rf folder/

# List directory contents
ls -lAF  # l full output, A include hidden files, F show special characters on each entry

# Create directory recursively (p: parents)
mkdir -p path/to/directory

# Current directory
pwd

# Print file content from the end of the file
tail -10 /var/log/file  # Last 10 lines of a log

# Run in background, output to file
command > /var/log/file 2>&1 &  # 2 (stderr) to 1 (stdout)

# List processes
ps -A  # All
ps  # Created in this bash
ps -ef | grep jekyll  # filter within all processes

# Kill process
kill <PID>
xkill  # Click window

# Extract from .tgz
tar -xzf file.tgz
# x for extract
# z for gnuzip
# f for file (the .tgz file directory)

# Writing command output to file
ls > file  # Only write to file
ls | tee file  # Writes to terminal and file

# Filter and transform text
sed -n 's/^Your code has been rated at \([-0-9.]*\)\/.*/\1/p' .pylint
score=$(sed -n 's/^Your code has been rated at \([-0-9.]*\)\/.*/\1/p' .pylint)

# Number comparison
(($score > 7.5))
echo $score'<7.5' | bc -l

# Download file from remote
curl -o pylint.svg "https://img.shields.io/badge/pylint-$score-$color.svg"

# SSH copy folder - terminal is on local
# Host name is in file ~/.ssh/config
scp -r folder/to/copy/ user-name@host-name:/home/ubuntu/

# Root
sudo command
sudo -Es  # Same as sudo su -

# Generate random password
</dev/urandom tr -dc 'A-Za-z0-9!"#$%&'\''()*+,-./:;<=>?@[\]^_`{|}~' | head -c 16  ; echo
```
