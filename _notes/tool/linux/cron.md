---
---

### Run script at startup
```bash
crontab -e
```

```crontab
@reboot ${HOME}/test.sh
```

To check if it is running:
```bash
ps -ef | grep test
```
