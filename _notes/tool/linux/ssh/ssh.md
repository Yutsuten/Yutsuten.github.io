---
---

## Usage

```shell
ssh OPTIONS host COMMAND
-t  # Force opening a tty
-i KEY_FILE

# Port forwarding
ssh -L localaddress:1234:targetaddress:1234 myhost

# X11 forwarding
ssh -Y myhost
```
