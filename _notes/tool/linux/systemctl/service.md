---
doc: https://www.freedesktop.org/software/systemd/man/systemd.unit.html
update: 2021-02-23
---

## Usage

`start`, `enable`, `stop` or `disable` the service:

```shell
sudo systemctl enable someservice
```

## Creation

Services are usually placed under `/etc/systemd/system`.

Example of `someservice.service`:

```ini
[Unit]
Description=some service
Wants=network-online.target
After=network-online.target

[Service]
Type=oneshot
User=mateus
Environment=DISPLAY=:0
EnvironmentFile=/etc/someservice/someservice.conf
ExecStart=/path/to/script.py

[Install]
WantedBy=multi-user.target
```
