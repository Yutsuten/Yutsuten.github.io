---
---

## Usage

Get image information:

```shell
magick identify image.png
```

### Convert

Manipulate images.
Optionally convert to another formats (ex: to JPG or PDF).

```shell
convert INPUT_OPTIONS INPUT_FILE OUTPUT_OPTIONS OUTPUT_FILE
```

| Option | Description |
| --- | --- |
| `-strip` | Strip image of all profiles and comments. |
| `-resize` | Resize to WxH. If width or height is not specified, ratio is kept. |
| `-crop WxH+X+Y` | Crop the image to size WxH, starting from (X;Y). |
| `-quality` | Valid only for JPEG or MPEG. 100 is lossless, 1 is worst quality. |
| `-interlace` | Type of image interlacing scheme. `none`, `line`, `plane`, `JPEG`, `GIF`, `PNG`. |
| `-gaussian-blur` | Reduce image noise and reduce detail levels. |
| `-sampling-factor` | Used by the JPEG encoder for chroma downsampling. |

Example of image size reduction:

```shell
convert bigimage.png -strip -resize x180 -quality 85 -interlace plane -gaussian-blur 0.05 -sampling-factor 4:2:0 smallimage.jpg
```

Convert images to PDF:

```shell
convert page*.png mydoc.pdf
```
