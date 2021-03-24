---
update: 2021-03-24
---

## Configuration

Set prefix for global installs to avoid using `sudo`.

```shell
npm config set prefix ~/.npm
```

Then update your PATH to include `~/.npm/bin`.

## Global install

```shell
npm install -g package
```
