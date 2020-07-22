---
---

## Simple usage

```config
Host myhost
    HostName ec2server.ddns.net
    User ec2-user
    IdentityFile ~/.ssh/ec2-server.pem

    # Port forwarding
    LocalForward localaddress:1234 targetaddress:1234

Host *
    ServerAliveInterval 120
    AddKeysToAgent yes
```

The config file must have `600` permissions or it will not work.

```shell
chmod 600 ~/.ssh/config
```

## Step server

```config
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

## Git with ssh

Using a key other than the default when using git with ssh.

```
# ~/.ssh/config

Host work.github.com
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_rsa_work
```

Then on the SSH clone URL,
edit `github.com` to `work.github.com` and git should use the correct key.

## Proxy

Install `connect-proxy`.

For debian-based distro: `apt install connect-proxy`

```config
Host *
    ProxyCommand connect -H username@proxyserver.com:port %h %p
```

Specify `connect` password automatically with environment variables.

```shell
# /etc/environment
SOCKS5_PASSWORD=12345
SOCKS_PASSWORD=12345
HTTP_PROXY_PASSWORD=12345
CONNECT_PASSWORD=12345
```
