---
doc: https://wiki.archlinux.org/index.php/Display_Power_Management_Signaling
---

## Settings

### Screensaver

Edit `/etc/X11/xorg.conf.d/10-screensaver.conf` with the desired settings.
Values are in minutes. Use `"0"` to disable the feature.

```
Section "ServerFlags"
    Option "StandbyTime" "0"
    Option "SuspendTime" "0"
    Option "OffTime" "0"
    Option "BlankTime" "0"
EndSection
```

## Commands

### Query current settings

```shell
xset q
```

For example, to get screen state (On/Off):

```shell
xset q | sed -nE 's/^\s+Monitor is (\w+)$/\1/p'
```

### Screensaver

*NOTE: Command applies to current session and won't survive a reboot.*

Configuration is `xset s <standby> <suspend> <off>`,
values are in seconds.
Examples:

```shell
xset s 3600 3600
xset s 0 0 0
xset s off
```

### Screen off

```shell
xset dpms force off
```
