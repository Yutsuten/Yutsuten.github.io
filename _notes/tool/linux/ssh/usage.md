---
---

```bash
ssh myhost
ssh myhost 'command to run on myhost'

# Port forwarding
ssh -L localaddress:1234:targetaddress:1234 myhost

# X11 forwarding
ssh -Y myhost
```

### Host configuration

```
# ~/.ssh/config

Host myhost
    HostName ec2server.ddns.net
    User ec2-user
    IdentityFile ~/.ssh/ec2-server.pem

    # Port forwarding
    LocalForward localaddress:1234 targetaddress:1234
```

### Host configuration with step server

```
# ~/.ssh/config

Host step-server
    HostName myhost.com
    Port 1234
    User myuser
    IdentityFile key.pem

Host destination-server
    HostName url-from-step.com
    User finaluser
    IdentityFile key.pem
    ProxyCommand ssh -X step-server -W %h:%p
```

### X11 forwarding

If you are going to open GUI applications remotely,
you may need to install some packages on the remote machine.

```bash
sudo yum install xorg-x11-xauth
sudo apt-get install xauth
```

If host is Windows, install `vcxsrv` on Windows.
