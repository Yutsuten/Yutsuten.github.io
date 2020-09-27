---
doc: https://ffmpeg.org/ffmpeg.html
---

Video and audio converter.

To get information of a file,
use `ffprobe input.mp4`.

## Usage

```shell
ffmpeg GLOBAL_OPTIONS INPUT_OPTIONS -i input_url OUTPUT_OPTIONS output_url
```

| Option | Description |
| --- | --- |
| `-loglevel` | (Global Option) Default is `info`. Options: `quiet`, `fatal`, `error`, `warning`, `info`, `verbose`, `debug`, `trace`. |
| `-nostdin` | (Global Option) Disable interaction on standard input. Useful for running in the background. |
| `-codec` | Encoder to be used (add `:<stream>` to specify a stream). Use `copy` do not re-encode. |
| `-vcodec` | Video encoder (alias for `-codec:v`). Use `libx265` for the newer MP4 encoder ([H.265](https://trac.ffmpeg.org/wiki/Encode/H.265)). |
| `-acodec` | Audio encoder (alias for `-codec:a`). |
| `-an` | Disables all audio streams. |
| `-f` | Force input/output format. Usually needed only on two-pass encoding, with value `mp4`. |
| `-b` | Bitrate, in a format like `2000k`. |
| `-r` | Frame rate (FPS). Usually 30 or 60. |
| `-crf` | (MP4 Option) Constant Rate Factor. The range is 0–51 (default 28), where 0 is lossless and 51 is worst quality possible. |
| `-preset` | (MP4 Option) Determines compression efficiency. Slower presets = higher quality. Options: `ultrafast`, `superfast`, `veryfast`, `faster`, `fast`, `medium`, `slow`, `slower`, `veryslow` and `placebo`. |
| `-ss` | Start time. Format is `hh:mm:ss`. |
| `-to` | End time. Format is `hh:mm:ss`. |
| `-t` | Duration. Format is `hh:mm:ss`. |
| `-y` | Overwrite output files without asking. |

## Example

### Constant Rate Factor (CRF)

Choose the desired CRF and preset.

```shell
ffmpeg -ss 00:00:10 -i input.mp4 -vcodec libx265 -acodec copy -r 60 -crf 20 -preset slow output.mp4
```

### Two-Pass Encoding

Decide the desired `file_size` in kBit (1 MiB = 8192 kBit) and get the video `duration` in seconds.
Get the bitrate with the formula `bitrate = file_size / duration`.
Pass the result to `-b` for both passes.

And as for CRF, choose the desired preset.

1. On the first pass, set `-y`, `-an`, `-x265-params pass=1`, `-f mp4` and output to `/dev/null`.
2. On the second pass, set `-x265-params pass=2`.

```shell
ffmpeg -y -i input.mp4 -vcodec libx265 -an -r 60 -b:v 720k -preset slow -x265-params pass=1 -f mp4 /dev/null && \
ffmpeg -i input.mp4 -vcodec libx265 -acodec copy -r 60 -b:v 720k -preset slow -x265-params pass=2 output.mp4
```

## Statistics

### libx265 (H.265)

Comparison when changing only the preset.
Tested inputs:

1. Size: 638.0 MiB - Length: 3:50 - CRF 20
2. Size: 580.8 MiB - Length: 2:37 - CRF 10
3. Size: 580.8 MiB - Length: 2:37 - CRF 16

#### File size

| Input | 1 | 2 | 3 |
| --- | --- | --- | --- |
| veryslow | 74.8 MiB | 170.9 MiB | 79.8 MiB |
| slower | 75.1 MiB | 171.0 MiB | 79.9 MiB |
| slow | 77.3 MiB | 171.1 MiB | 81.2 MiB |
| medium | 75.0 MiB | 159.3 MiB | 77.4 MiB |
| fast | 76.1 MiB | 155.2 MiB | 77.8 MiB |
| faster | 75.6 MiB | 154.3 MiB | 77.0 MiB |
| veryfast | 75.8 MiB | 154.8 MiB | 77.3 MiB |
| superfast | 73.7 MiB | 138.3 MiB | 72.2 MiB |
| ultrafast | 74.1 MiB | 139.2 MiB | 73.3 MiB |

#### Encoding time

| Input | 1 | 2 | 3 |
| --- | --- | --- | --- |
| veryslow | 3:46:18 | 4:06:27 | 3:09:24 |
| slower | 2:05:05 | 2:38:03 | 1:55:18 |
| slow | 30:09 | 28:26 | 24:23 |
| medium | 10:57 | 10:37 | 8:36 |
| fast | 9:44 | 8:26 | 7:25 |
| faster | 7:52 | 7:05 | 5:57 |
| veryfast | 7:39 | 7:02 | 5:55 |
| superfast | 6:09 | 5:23 | 4:33 |
| ultrafast | 4:21 | 3:36 | 3:07 |
