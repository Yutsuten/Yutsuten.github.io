---
doc: https://wiki.archlinux.org/index.php/LightDM
---

## Usage

```shell
dm-tool COMMAND
```

| Command | Description |
| --- | --- |
| `switch-to-greeter` | Switch to the greeter. |
| `lock` | Lock the current seat. Same as `switch-to-greeter`, but turns off the screen. |

## GTK greeter

To change the wallpaper,
copy the wallpaper to `/usr/share/pixmaps/` directory,
then set it in the file `/etc/lightdm/lightdm-gtk-greeter.conf`:

```
[greeter]
background=/usr/share/pixmaps/wallpaper.jpg
```
