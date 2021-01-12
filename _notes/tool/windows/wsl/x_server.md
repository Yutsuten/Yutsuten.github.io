---
doc: https://gist.github.com/ctaggart/68ead4d0d942b240061086f4ba587f5f
---

## X server choices

Choose one of the bellow.
Personal recommendation is VcXsrv.

- VcXsrv
- Xming

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

Install dbus, terminal and some other basic tools:

```shell
sudo apt install dbus-x11 make git xfce4-terminal fonts-emojione fonts-noto i3 zsh neovim nnn unzip
```

Then set these environment variables:

```shell
export DISPLAY=127.0.0.1:0
export LIBGL_ALWAYS_INDIRECT=1
```

Optionally set the locale.

```shell
sudo update-locale LANG=ja_JP.UTF-8
```
