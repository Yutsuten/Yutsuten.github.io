---
---

### Managing users
```shell
sudo adduser test
sudo userdel -r test

sudo passwd test
```
### Add sudo permissions to user
```shell
sudo usermod -aG sudo test
```

### Allow access to x-server
```shell
xhost +SI:localuser:test
```
