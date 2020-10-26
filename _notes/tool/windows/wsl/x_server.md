---
doc: https://gist.github.com/ctaggart/68ead4d0d942b240061086f4ba587f5f
---

## X server choices

Choose one of the bellow:

- VcXsrv
- Xming

Personal recommendation is VcXsrv.

## Setup (Windows)

If only a program is going to be launched (no window manager),
choose *Multiple windows*.
If a Linux window manager is going to be used,
choose *Fullscreen*, *One large window* or *One window without titlebar*.

Here are some parameters that may be interesting to use:

| Parameter | Description |
| --- | --- |
| `-xkblayout jp` | Set japanese keyboard layout. |
| `-keyhook` | Grab special keypresses like Alt-Tab or the Menu key. |

## Setup (Linux)

Install X server's dbus (`dbus-x11` for ubuntu) and add this to the resource file.

```shell
export DISPLAY=127.0.0.1:0
export LIBGL_ALWAYS_INDIRECT=1
```

Install some nice packages for better support.

```shell
sudo apt install fonts-emojione fonts-noto
sudo update-locale LANG=ja_JP.UTF-8
```
