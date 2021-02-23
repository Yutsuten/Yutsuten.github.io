---
update: 2021-02-23
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
