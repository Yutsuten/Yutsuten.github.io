---
---

Ref: [Link](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)

#### Terminal
```shell
# Generate key
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa  # -K parameter required on mac

# Check for current keys
ls ~/.ssh

# Get public key
cat ~/.ssh/id_rsa.pub

# Removing credentials from agent
rm -rf /tmp/ssh && ssh-add -D

# Check all saved credentials
ssh-add -l
```

### File permissions
```shell
chmod 400 ~/.ssh/id_rsa
chmod 600 ~/.ssh/config
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
#### Terminal
```
sudo apt install connect-proxy
```

#### ~/.ssh/config
```
# Direct connection
Host ec2-server
    HostName ec2server.ddns.net
    User ec2-user
    IdentityFile ~/.ssh/ec2-server.pem

# Step server with proxy
Host step-server
    HostName myhost.com
    Port 1234
    User myuser
    IdentityFile key.pem
    ProxyCommand connect -S username@proxyserver.com:port %h %p

Host destination-server
    HostName url-from-step.com
    User finaluser
    IdentityFile key.pem
    ProxyCommand ssh -X step-server -W %h:%p

# Last is the default (first match wins)
Host *
    ProxyCommand connect -H username@proxyserver.com:port %h %p
    ServerAliveInterval 120
```

#### SSH with proxy, specify password though environment variables
- [connect-proxy](http://manpages.ubuntu.com/manpages/trusty/man1/connect-proxy.1.html)

```shell
export SOCKS5_PASSWORD=12345
export SOCKS_PASSWORD=12345
export HTTP_PROXY_PASSWORD=12345
export CONNECT_PASSWORD=12345
```

### SSH copy folder
```shell
# Terminal is on local, host name is in file ~/.ssh/config
scp -r folder/to/copy/ user-name@host-name:/home/ubuntu/
```
