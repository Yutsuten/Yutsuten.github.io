---
doc: https://trac.ffmpeg.org/wiki/Encode/MP3
update: 2021-03-02
---

## Usage

### libmp3lame

LAME MP3 encoder wrapper.

| Option | Description |
| --- | --- |
| `-qscale:a` | Audio quality. Range is 0-9 (default 4). |

```shell
ffmpeg -i input.wav -codec:a libmp3lame -qscale:a 3 output.mp3
```
