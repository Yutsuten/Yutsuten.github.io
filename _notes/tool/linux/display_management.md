---
doc: https://wiki.archlinux.org/index.php/Display_Power_Management_Signaling
---

## Usage

Turn the screen off:

```shell
xset dpms force off
```

Get screen mode (On/Off):

```shell
xset q | sed -nE 's/^\s+Monitor is (\w+)$/\1/p'
```
