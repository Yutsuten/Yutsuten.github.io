---
---

## Usage

```shell
sudo mkdir /mnt/myfolder
sudo sshfs -o ro,allow_other,default_permissions,reconnect,ServerAliveInterval=15,ServerAliveCountMax=3,IdentityFile=/home/user/.ssh/my_rsa user@host:/remote/dir /mnt/myfolder -p PORT
sudo umount /mnt/myfolder
```
