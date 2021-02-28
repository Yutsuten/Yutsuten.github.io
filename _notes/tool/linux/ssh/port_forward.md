---
doc: https://unix.stackexchange.com/questions/115897/whats-ssh-port-forwarding-and-whats-the-difference-between-ssh-local-and-remot
update: 2021-02-28
---

When forwarding ports,
keep in mind that a tunnel is created between the local (current) machine and the remote machine.

**Note:** If connection to a remote server (`A`, `B` on the examples) requires multiple steps (one ore more step servers),
configuration on `.ssh/config` is needed.

## Local port forwarding

Forward requests from `local:123` to `A:456`.
(`local:123` → `A:456`)

```shell
ssh -L 123:localhost:456 A
```

## Remote port forwarding

Forward requests from `B:456` to `local:123`.
(`local:123` ← `B:456`)

```shell
ssh -R 456:localhost:123 B
```

## Dynamic forwarding

Creates a SOCKS server that will forward connections through it.
Use as a proxy server.

```shell
ssh -D 1080 A
```
