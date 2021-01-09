---
doc: https://github.com/Bumblebee-Project/bbswitch
---

Manages the state of a Optimus Graphics Card.

## Always disable

Set the default state of the card on `/etc/modprobe.d/bbswitch.conf` by adding:

```
options bbswitch load_state=0
```

Start bbswitch module on boot by adding the following on `/etc/modules-load.d/bbswitch.conf`:

```
bbswitch
```
