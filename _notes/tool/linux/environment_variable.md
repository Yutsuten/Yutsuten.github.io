---
---

## System-wide

Those are variables that affects all users of the system.

Set those to `/etc/environment` file.

## Session-wide

Those are variables that affects just a particular user.

Set those to `~/.pam_environment` file.

## X11

Startup script for X is on `~/.xprofile`.

## Shell

Examples are `~/.bashrc` and `~/.zshrc`. Use the `export` keyword.

```shell
export MY_ENV_VAR=true
export TZ="/usr/share/zoneinfo/Japan"
```
