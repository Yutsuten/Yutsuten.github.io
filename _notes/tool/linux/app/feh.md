---
doc: https://wiki.archlinux.org/index.php/feh
---

A lightweight and powerful image viewer that can also be used to manage the desktop wallpaper.

## Usage

```shell
feh OPTIONS FILE
```

| Option | Description |
| --- | --- |
| `-.` `--scale-down` | Automatically scale down images to fit screen size. |
| `-F` `--fullscreen` | Make the window full screen. |
| `-r` `--recursive` | Recursively expand FILE. |
| `-z` `--randomize` | Randomize the filelist. |
| `--zoom` | Zooms images by a PERCENT, `max` or `fill`. |
| `--bg-fill` | Set file as desktop background, zooms until it fits the screen. |

While `feh` is open,
you can interact with it using some shortcuts.

| Shortcut | Description |
| --- | --- |
| `f` | Toggle fullscreen. |
| `Z` | Toggle auto-zoom. |
| `UP` | Zoom in. |
| `DOWN` | Zoom out. |
| `KEYPAD *` | Zoom to 100%. |
| `KEYPAD /` | Zoom to fit the window. |
| `q` | Quit. |
