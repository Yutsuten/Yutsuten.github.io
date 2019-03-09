---
---

[Site](https://rclone.org/)

### Install rclone
[Guide](https://rclone.org/downloads/)
```bash
curl https://rclone.org/install.sh | sudo bash
```

### Sync with dropbox
[Guide](https://rclone.org/dropbox/)
```bash
rclone config
n) New remote
d) Delete remote
q) Quit config
e/n/d/q> n
name> dropbox
# ...
Storage> 8  # Dropbox
Dropbox App Key - leave blank normally.
app_key>
Dropbox App Secret - leave blank normally.
app_secret>
Remote config
# Skip advanced configuration and let it configure oauth
```

### Sync
```shell
rclone sync dropbox:/ ~/Dropbox/  # From dropbox to local
rclone sync ~/Dropbox/ dropbox:/  # From local to dropbox

--dry-run  # For checking what changes would be made
```
