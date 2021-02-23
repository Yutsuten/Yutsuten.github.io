---
doc: https://wiki.archlinux.org/index.php/Systemd/Timers
update: 2021-02-23
---

## Usage

`start`, `enable`, `stop` or `disable` the timer:

```shell
sudo systemctl enable mytimer.timer
```

Check the timers status with:

```shell
sudo systemctl list-timers --all
```

## Creation

Place the timer unit under `/etc/systemd/system`.

Example of `mytimer.timer`:

```ini
[Unit]
Description=mytimer

[Timer]
OnStartupSec=3h
OnUnitActiveSec=3h
OnCalendar=*:0/10

[Install]
WantedBy=timers.target
```

| Setting | Description |
| --- | --- |
| `OnStartupSec` | Activate the timer relative to boot time. |
| `OnUnitActiveSec` | Activate the timer relative to last activation time. |
| `OnCalendar` | Defines realtime (cron-like) timers. |
