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

To enable LightDM, run this:

```shell
systemctl enable lightdm
```

## GTK greeter

To change the wallpaper,
copy the wallpaper to `/usr/share/pixmaps/` directory,
then set it in the file `/etc/lightdm/lightdm-gtk-greeter.conf`:

```
[greeter]
background=/usr/share/pixmaps/wallpaper.jpg
```

## Slick greeter

[GitHub Repository](https://github.com/linuxmint/slick-greeter)

Update the following line on `/etc/lightdm/lightdm.conf`:

```
greeter-session=lightdm-slick-greeter
```

Configure it on `/etc/lightdm/slick-greeter.conf`:

```
[Greeter]
background=/usr/share/pixmaps/background.png
show-hostname=true
show-a11y=false
show-keyboard=true
show-clock=true
show-quit=true
clock-format=%Y年%m月%d日 (%a) %H:%M:%S
```
