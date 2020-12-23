---
doc: https://wiki.archlinux.org/index.php/Xorg/Keyboard_configuration#Setting_keyboard_layout
---

## Setup

```shell
localectl --no-convert set-x11-keymap jp,br '' '' grp:win_space_toggle
```

The resulting `/etc/X11/xorg.conf.d/00-keyboard.conf` should be like this:

```
Section "InputClass"
        Identifier "system-keyboard"
        MatchIsKeyboard "on"
        Option "XkbLayout" "jp,br"
        Option "XkbOptions" "grp:win_space_toggle"
EndSection
```
