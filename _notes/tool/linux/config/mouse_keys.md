---
---

## Setting

It is recommended to set it up using `localectl`.
On the last parameter, set `keypad:pointerkeys`.

```shell
localectl --no-convert set-x11-keymap jp,br '' '' grp:win_space_toggle,keypad:pointerkeys
```

The resulting `/etc/X11/xorg.conf.d/00-keyboard.conf` should be like this:

```
Section "InputClass"
        Identifier "system-keyboard"
        MatchIsKeyboard "on"
        Option "XkbLayout" "jp,br"
        Option "XkbOptions" "grp:win_space_toggle,keypad:pointerkeys"
EndSection
```

## Commands

Manually activate the feature with the following command:

```shell
setxkbmap -option keypad:pointerkeys
```
