---
doc: https://wiki.archlinux.org/index.php/Systemd/Timers
---

## Usage

```shell
systemctl COMMAND
```

| Command | Description |
| --- | --- |
| `halt` | Terminates all services and processes, but does not power-off the system. |
| `poweroff` | Terminates all services and processes, then power-off the system. |
| `reboot` | Same as `poweroff`, but start the system again. |
| `suspend` | Also known as sleep, saves the current state to RAM and suspends the system. |
| `hibernate` | Saves the current state to disk and shuts down the system. |
| `hybrid-sleep` | Saves the current state to both RAM and disk, then suspends the system. |

### Restarting X

```shell
sudo systemctl restart display-manager
```

## Timers

Example of a timer that updates the wallpaper periodically.

Create `/etc/systemd/system/wallpaper.timer` with:

```ini
[Unit]
Description=change wallpaper periodically

[Timer]
OnBootSec=3h
OnUnitActiveSec=3h

[Install]
WantedBy=timers.target
```

Then create the service `/etc/systemd/system/wallpaper.service` that will be triggered by the timer.

```ini
[Unit]
Description=random wallpaper using feh

[Service]
Type=oneshot
User=mateus
Environment=DISPLAY=:0
ExecStart=/usr/bin/feh --bg-fill --recursive --randomize /home/mateus/Pictures/Wallpapers/Active
```

Finally `start` and `enable` the timer as usually is done with services.

You may check the status of timers with `sudo systemctl list-timers --all`.
