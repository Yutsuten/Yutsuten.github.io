---
doc: https://wiki.archlinux.org/index.php/Display_Power_Management_Signaling
---

## Usage

Timeout to turn off screen:

```shell
xset s 3600 3600
xset s 0 0
xset s off
```

Turn the screen off:

```shell
xset dpms force off
```

Get screen mode (On/Off):

```shell
xset q | sed -nE 's/^\s+Monitor is (\w+)$/\1/p'
```
