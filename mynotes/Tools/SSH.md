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

### Running GUI applications
```shell
# Windows requirement: install Xming

# Install xauth on server
sudo yum install xorg-x11-xauth
sudo apt-get install xauth

# Login using X11
ssh -X <credentials>
```

### Automatic configuration
#### ~/.ssh/config
```
Host ec2-server
    HostName ec2server.ddns.net
    User ec2-user
    IdentityFile ~/.ssh/ec2-server.pem
```
