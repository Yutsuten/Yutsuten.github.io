---
---

## Usage

```shell
ssh OPTIONS host COMMAND
-t  # Force opening a tty
-i KEY_FILE
-Y  # X11 forwarding
```

To make X11 forwarding work properly,
it is necessary to install some packages on each server until the destination server.

| Distro | Package |
| --- | --- |
| Ubuntu 20.04 | `dbus-x11` |
| CentOS 8 | `xorg-x11-xauth` |
