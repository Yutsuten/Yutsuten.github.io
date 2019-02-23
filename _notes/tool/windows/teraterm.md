---
---

### X11 forwarding with teraterm
#### Set teraterm to forward X11 display
```
Go to Settings -> SSH Forwarding
Check 'Display remote X applications on local X server'
```

#### On guest (machine you connected)
```
Install: xorg-x11-xauth xorg-x11-fonts-* xorg-x11-utils dbus-x11
Maybe needed: Execute 'xhost +' to allow remote X clients to connect
```

#### On the guest, do not set the DISPLAY environment variable
```
Variable will be set by teraterm
Default DISPLAY set by teraterm is localhost:10.0
```
