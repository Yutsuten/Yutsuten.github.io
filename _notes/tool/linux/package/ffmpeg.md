---
doc: https://ffmpeg.org/ffmpeg.html
---

Video and audio converter.

To get information of a file,
use `ffprobe input.mp4`.

## Usage

```shell
ffmpeg INPUT_OPTIONS -i input_url OUTPUT_OPTIONS output_url
```

| Option | Description |
| --- | --- |
| `-codec` | Encoder to be used (add `:<stream>` to specify a stream). Use `copy` do not re-encode. |
| `-vcodec` | Video encoder (alias for `-codec:v`). Use `libx265` for the newer MP4 encoder (H.265). |
| `-acodec` | Audio encoder (alias for `-codec:a`). |
| `-r` | Frame rate (FPS). Usually 30 or 60. |
| `-crf` | (MP4 option) Constant Rate Factor. The range is 0–51, where 0 is lossless, 28 is the default, and 51 is worst quality possible. 22 is visually lossless. Sane range is around 22-33. |
| `-preset` | (MP4 option) Determines compression efficiency (default is `medium`). Options: `ultrafast`, `superfast`, `veryfast`, `faster`, `fast`, `medium`, `slow`, `slower`, `veryslow`. |
| `-ss` | Start time. Format is `hh:mm:ss`. |
| `-to` | End time. Format is `hh:mm:ss`. |
| `-t` | Duration. Format is `hh:mm:ss`. |

## Example

```shell
ffmpeg -ss 00:00:10 -i input.mp4 -vcodec libx265 -acodec copy -r 60 -crf 20 -preset slower output.mp4
```
