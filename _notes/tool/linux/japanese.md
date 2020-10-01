---
---

## Fonts

```shell
sudo pacman -S noto-fonts-cjk noto-fonts-emoji noto-fonts
```

## Input

### Ibus Anthy

```shell
sudo pacman -S ibus-anthy
```

Reboot the system.
Not sure if the next command is necessary...

```shell
ibus-setup
```

### Fcitx Mozc

[Fcitx documentation](https://wiki.archlinux.org/index.php/Fcitx) |
[Mozc documentation](https://wiki.archlinux.org/index.php/Mozc)

```shell
sudo pacman -S fcitx-mozc fcitx-im fcitx-configtool
```

Update `~/.pam_environment`.

```
GTK_IM_MODULE=fcitx
QT_IM_MODULE=fcitx
XMODIFIERS=@im=fcitx
```

Reboot the system.
If for any reason it is not running,
you can run `fcitx` to start.

Configure with `fcitx-configtool`.
You must add Mozc Input Method as second on the list.

#### Commands

```shell
fcitx-remote OPTION
```

| Option | Description |
| --- | --- |
| `-o` | Activate input method. |
| `-c` | Inactivate input method. |
| `-t` | Toggle active/inactive. |
| `-s` | Switch to a input method. Example: `mozc`, `fcitx-keyboard-jp`. For all options, run `fcitx-diagnose`. |

```shell
/usr/lib/mozc/mozc_tool --mode=config_dialog
```

Another available modes are `dictionary_tool`, `word_register_dialog`, `hand_writing`, `character_palette`.
