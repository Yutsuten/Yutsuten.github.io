---
doc: https://wiki.archlinux.org/index.php/wacom_tablet
---

## Install

```shell
sudo pacman -S xf86-input-wacom
```

## Usage

```shell
xsetwacom COMMAND
```

| Command | Description |
| --- | --- |
| `list devices` | Display detected devices. |
| `set 'device name' parameter VALUES` | Set device parameter |

## Example

```shell
xsetwacom set 'Wacom Intuos S Pen stylus' Area 2280 1425 12920 8075
```
