---
---

### Run script at startup
```bash
crontab -e
```

Add:
```
@reboot ${HOME}/test.sh
```

To check if it is running:
```bash
ps -ef | grep test
```
