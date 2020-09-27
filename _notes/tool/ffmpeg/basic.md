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
| `-codecs` | List all available codecs |
| `-codec` | Encoder to be used (add `:<stream>` to specify a stream). Use `copy` do not re-encode. |
| `-vcodec` | Video encoder (alias for `-codec:v`). |
| `-acodec` | Audio encoder (alias for `-codec:a`). |
| `-an` | Disables all audio streams. |
| `-f` | Force input/output format. Usually needed only on two-pass encoding, with value `mp4`. |
| `-b` | Bitrate, in a format like `2000k`. |
| `-r` | Frame rate (FPS). Usually 30 or 60. |
| `-ss` | Start time. Format is `hh:mm:ss`. |
| `-to` | End time. Format is `hh:mm:ss`. |
| `-t` | Duration. Format is `hh:mm:ss`. |
| `-y` | Overwrite output files without asking. |
