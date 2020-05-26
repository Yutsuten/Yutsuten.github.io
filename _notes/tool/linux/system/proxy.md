---
---

## Package Manager

### Apt

Add a file `/etc/apt/apt.conf.d/apt.conf` with the following content.

```
Acquire::ftp::proxy "http://user:pass@proxyhost:port/";
Acquire::http::proxy "http://user:pass@proxyhost:port/";
Acquire::https::proxy "http://user:pass@proxyhost:port/";
```

## Environment Variables

```shell
export ftp_proxy="http://user:pass@proxyhost:port/"
export http_proxy="http://user:pass@proxyhost:port/"
export https_proxy="http://user:pass@proxyhost:port/"
export no_proxy="localhost,127.0.0.1,192.168.1.1,::1,*.local"
export FTP_PROXY="http://user:pass@proxyhost:port/"
export HTTP_PROXY="http://user:pass@proxyhost:port/"
export HTTPS_PROXY="http://user:pass@proxyhost:port/"
export NO_PROXY="localhost,127.0.0.1,192.168.1.1,::1,*.local"
```
