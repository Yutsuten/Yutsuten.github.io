---
---

## Usage

```shell
sudo mkdir /mnt/myfolder
sudo sshfs -o allow_other,default_permissions,IdentityFile=/home/user/.ssh/my_rsa user@host:/remote/dir /mnt/myfolder -p PORT
sudo umount /mnt/myfolder
```
