---
---

### Required package

```bash
sudo apt install connect-proxy
```

### Configuration
```
# ~/.ssh/config

# Put this at the end of the file
Host *
    ProxyCommand connect -H username@proxyserver.com:port %h %p
    ServerAliveInterval 120
```

### Specify password automatically

- [connect-proxy](http://manpages.ubuntu.com/manpages/trusty/man1/connect-proxy.1.html)

```bash
# /etc/environment

SOCKS5_PASSWORD=12345
SOCKS_PASSWORD=12345
HTTP_PROXY_PASSWORD=12345
CONNECT_PASSWORD=12345
```
