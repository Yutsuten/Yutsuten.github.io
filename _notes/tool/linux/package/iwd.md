---
doc: https://wiki.archlinux.org/index.php/Iwd
update: 2021-01-23
---

Internet Wireless Daemon.
Used to connect to a WIFI.

## Usage

Get an interactive prompt.

```shell
iwctl
```

You need the name of the wifi device, so first list it:

```
[iwd]# device list
```

Then scan and list networks:

```
[iwd]# station <device> scan
[iwd]# station <device> get-networks
```

Finally connect to the network:

```
[iwd]# station <device> connect <SSID>
```
