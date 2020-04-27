---
---

## Setup (Windows)

Options for X servers:

- VcXsrv
- Xming

To use japanese keyboard on applications inside xming, add this extra parameter to Xming:

```shell
-xkblayout jp
```

## Setup (Linux)

Install X server's dbus (`dbus-x11` for ubuntu) and add this to your rc file.

```shell
export DISPLAY=127.0.0.1:0
```

Maybe needed:

```shell
sudo apt install keyboard-configuration console-setup
sudo dpkg-reconfigure keyboard-configuration
sudo service keyboard-setup restart
sudo udevadm trigger --subsystem-match=input --action=change
```
