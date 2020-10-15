---
doc: https://wiki.archlinux.org/index.php/Rxvt-unicode
---

## Usage

```shell
urxvt OPTIONS
```

## Configuration

Update its configuration by running `xrdb ~/.Xresources`.

Example of a basic configuration:

```apiblueprint
#define mycolor #001122

URxvt.scrollBar: false
URxvt.scrollTtyOutput: false
URxvt.scrollWithBuffer: true
URxvt.scrollTtyKeypress: true
URxvt.secondaryScreen: 1
URxvt.secondaryScroll: 0

URxvt.font: xft:Noto Sans Mono:pixelsize=12
URxvt.boldFont: xft:Noto Sans Mono:bold:pixelsize=12
URxvt.letterSpace: -1

URxvt.background: [90]#000000
URxvt.foreground: #FFFFFF
URxvt.depth: 32
URxvt.fading: 40
URxvt.fadeColor: mycolor
URxvt.cursorColor: mycolor
URxvt.pointerColorBackground: mycolor
URxvt.pointerColorForeground: mycolor

URxvt.color0: #000000
! ...
URxvt.color15: #FFFFFF
```

### Font

Use `fc-list -f "%{family} : %{file}\n"` to get a full list of fonts available for use.

If you already know part of the font name,
use `fc-match 'Noto Sans Mono'`,
then it will return the best match for it.
