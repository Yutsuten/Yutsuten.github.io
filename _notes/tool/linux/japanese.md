---
doc: https://wiki.archlinux.org/index.php/Localization/Japanese
---

## Fonts

```shell
sudo pacman -S noto-fonts-cjk noto-fonts-emoji noto-fonts
```

## Input

### Ibus Anthy

[IBus documentation](https://wiki.archlinux.org/index.php/IBus)

```shell
sudo pacman -S ibus-anthy
```

Add the following at the end of `~/.xprofile`.

```shell
export GTK_IM_MODULE=ibus
export XMODIFIERS=@im=ibus
export QT_IM_MODULE=ibus
ibus-daemon -drx --panel /usr/lib/ibus/ibus-ui-gtk3
```

On KDE, use the following to integrate Kimpanel with IBus.

```shell
ibus-daemon -drx --panel=/usr/lib/kimpanel-ibus-panel
```

Then you have to add the widget `Input methods panel`.

Reboot the system, and setup Ibus with the following:

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
