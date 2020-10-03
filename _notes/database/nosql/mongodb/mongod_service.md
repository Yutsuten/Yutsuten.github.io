---
---

## Start / stop

```shell
# Linux
sudo service mongod start
sudo service mongod stop

# Mac
brew services start mongodb
brew services stop mongodb
```

## Start on boot

```shell
# Linux
systemctl enable mongod.service

# Mac
ln -sfv /usr/local/opt/mongodb/*.plist ~/Library/LaunchAgents
```
