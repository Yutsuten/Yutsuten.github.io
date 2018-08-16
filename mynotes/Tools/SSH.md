Ref: [Link](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)

#### Terminal
```shell
# Generate key
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
eval "$(ssh-agent -s)"
ssh-add -K ~/.ssh/id_rsa

# Check for current keys
ls ~/.ssh

# Get public key
cat ~/.ssh/id_rsa.pub

# Removing credentials from agent
rm -rf /tmp/ssh && ssh-add -D

# Check all saved credentials
ssh-add -l
```
