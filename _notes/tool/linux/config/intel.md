---
doc: https://wiki.archlinux.org/index.php/intel_graphics
---

Fix screen tearing by adding this configuration to `/etc/X11/xorg.conf.d/20-intel.conf`:

```xquery
Section "Device"
  Identifier "Intel Graphics"
  Driver "intel"
  Option "TearFree" "true"
EndSection
```
