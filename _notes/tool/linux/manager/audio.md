---
doc: https://wiki.archlinux.org/index.php/PulseAudio
---

## PulseAudio

A general purpose sound server.

Install `pulseaudio` and `pavucontrol`.

## Audio device

Intel module may have a default of putting the audio device into sleep mode after a period of inactivity.
To disable this, create `/etc/modprobe.d/snd_hda_intel.conf` with:

```
options snd_hda_intel power_save=0 power_save_controller=N
```
