---
---

### Set environment variables
#### .bashrc
```shell
export FLASK_APP=main.py
export FLASK_DEBUG=1
```

### Load .bashrc when using .bash_profile
#### .bash_profile
```shell
if [ -f ~/.bashrc ]; then
   source ~/.bashrc
fi
```
