---
---

- [Reference](https://docs.docker.com/network/proxy/)

#### ~/.docker/config.json
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
