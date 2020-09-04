---
---

## Setup (Windows)

Options for X servers:

- VcXsrv
- Xming

To use japanese keyboard on applications inside the X server,
add this parameter:

```shell
-xkblayout jp
```

## Setup (Linux)

Install X server's dbus (`dbus-x11` for ubuntu) and add this to your rc file.

```shell
export DISPLAY=127.0.0.1:0
export LIBGL_ALWAYS_INDIRECT=1
```

Install some nice packages for better support.

```shell
sudo apt install fonts-emojione fonts-noto
sudo update-locale LANG=ja_JP.UTF-8
```
