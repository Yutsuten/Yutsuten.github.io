---
doc: https://imagemagick.org/script/convert.php#options
---

## Identify

Get image information.

```shell
identify image.png
```

## Convert

Manipulate images.
Optionally convert to another formats (ex: to JPG or PDF).

```shell
convert INPUT_OPTIONS INPUT_FILE OUTPUT_OPTIONS OUTPUT_FILE
```

| Option | Description |
| --- | --- |
| `-strip` | Strip image of all profiles and comments. |
| `-alpha` | **set**: Activate alpha channel. |
| `-channel` | **alpha**: Have subsequent operators act on alpha channel. |
| `-fuzz` | On subsequent operators, colors within this distance are considered equal. Ex: `1%` |
| `-fill` | On subsequent operators, color to use when filling a graphic primitive. Ex: `none`, `"#ffffff"` |
| `-floodfill` | Starting from (X;Y), any color that matches the color are filled with the `-fill` color. Ex: `+0+0 white` |
| `-trim` | Trim image edges. |
| `-crop WxH+X+Y` | Crop the image to size WxH, starting from (X;Y). |
| `+repage` | Reset virtual canvas. |
| `-resize` | Resize to WxH. Ratio is kept unless `!` is appended. |
| `-quality` | Valid only for JPEG or MPEG. 100 is lossless, 1 is worst quality. |
| `-interlace` | Type of image interlacing scheme. `none`, `line`, `plane`, `JPEG`, `GIF`, `PNG`. |
| `-rotate` | Rotates the image by X degrees. |
| `-gaussian-blur` | Reduce image noise and reduce detail levels. Ex: `0.05` |
| `-sampling-factor` | Used by the JPEG encoder for chroma downsampling. |

## Examples

Image size reduction:

```shell
convert bigimage.png -strip -resize x180 -quality 85 -interlace plane -sampling-factor 4:2:0 smallimage.jpg
```

White background into transparent:

```shell
convert input.jpg -alpha set -channel alpha -fuzz 50% -fill none -floodfill +0+0 white -trim output.png
```

Convert images to PDF:

```shell
convert page*.png mydoc.pdf
```
