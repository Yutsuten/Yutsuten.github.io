---
doc: https://docs.docker.com/network/proxy/
---

## Configuration

`~/.docker/config.json`

```json
{
 "proxies":
 {
   "default":
   {
     "httpProxy": "http://user:pass@127.0.0.1:3001",
     "httpsProxy": "http://user:pass@127.0.0.1:3001",
     "noProxy": "localhost,127.0.0.1,192.168.1.1,::1,*.local"
   }
 }
}
```

`/etc/systemd/system/docker.service.d/http-proxy.conf`

```conf
[Service]
Environment="HTTP_PROXY=http://username:password@proxy.com:8080/" "HTTPS_PROXY=http://username:password@proxy.com:8080/" "NO_PROXY=localhost,127.0.0.1,192.168.1.1,::1,*.local"
```
