---
doc: https://trac.ffmpeg.org/wiki/Capture/Desktop
---

## Audio

Enable pulse input device with `-f pulse`.

As input file, use `default` for the default audio device.

If it doesn't seem correct,
use the command bellow to list all audio devices.

```shell
pactl list sources
```

Choose one and check if it is correct by recording an audio file.

```shell
ffmpeg -f pulse -i alsa_output.pci-0000_00_1b.0.analog-stereo.monitor out.wav
```

## Screen

Enable the X11 video input device with `-f x11grab`.

Set the desired `-framerate` and `-video_size`,
and as input file set your display number and screen number (usually :0.0).

```shell
ffmpeg -f x11grab -framerate 30 -video_size 1366x768 -i :0.0 out.mp4
```

## Output

`libx264rgb` seems to be the best encoder in terms of speed.
H.265 is slower and not suited for screen recording.

You may want to add `-thread_queue_size` and `-probesize` to the command to avoid some warnings.

The command to record both audio and screen smoothly with lossless quality should look like this:

```shell
ffmpeg -f pulse -thread_queue_size 512 -i alsa_output.pci-0000_00_1b.0.analog-stereo.monitor -f x11grab -framerate 60 -probesize 16M -thread_queue_size 512 -video_size 1366x768 -i :0.0 -vcodec libx264rgb -crf 0 -preset ultrafast records/out4.mp4
```
