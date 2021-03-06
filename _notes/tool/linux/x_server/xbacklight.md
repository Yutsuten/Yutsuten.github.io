---
doc: https://wiki.archlinux.org/index.php/backlight
update: 2021-04-24
---

## Setup

To allow users of `video` group to change brightness,
add the following lines to `/etc/udev/rules.d/backlight.rules`:

```
ACTION=="add", SUBSYSTEM=="backlight", KERNEL=="intel_backlight", RUN+="/bin/chgrp video /sys/class/backlight/%k/brightness"
ACTION=="add", SUBSYSTEM=="backlight", KERNEL=="intel_backlight", RUN+="/bin/chmod g+w /sys/class/backlight/%k/brightness"
```

And, of course, join the `video` group.

```shell
sudo gpasswd -a mateus video
```

### Tool install

Install the tool that updates the brightness.

```shell
sudo pacman -S acpilight
```

## Usage

```shell
xbacklight OPTION
```

| Option | Description |
| --- | --- |
| `NUM` | Percentage of brightness. |
| `+NUM` | Increment brightness in percentage. |
| `-NUM` | Decrement brightness in percentage. |
