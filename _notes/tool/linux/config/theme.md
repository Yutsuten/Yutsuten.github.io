---
---

## Tools

| Distro | Qt5 | GTK |
| --- | --- | --- |
| Arch Linux | `qt5ct` `kvantum-qt5` | `lxappearance-gtk3` |

## Cursor

After you download a cursor theme (for example, [Vimix cursors theme](https://www.gnome-look.org/p/1358330/)),
extract it to `~/.local/share/icons` to aplly it for current user only,
or to `/usr/share/icons` to apply it system wide.

```shell
sudo tar xf 01-Vimix-cursors.tar.xz -C /usr/share/icons
```

To set the cursor only for your user,
run `lxappearance` and set it on the GUI.

To set globally, edit `/usr/share/icons/default/index.theme`:

```
[Icon Theme]
Inherits=Vimix-cursors
```
