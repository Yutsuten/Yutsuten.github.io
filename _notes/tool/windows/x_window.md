---
---

## VcXsrv

### Starting X window server

When asked, add this extra parameter:

```bash
-xkblayout jp
```

### Configure the remote machine

Add the following environment variable:

```bash
export LIBGL_ALWAYS_INDIRECT=1
```

And install `dbus-x11`.

```bash
sudo apt install dbus-x11
```
