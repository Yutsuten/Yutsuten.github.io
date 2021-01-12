---
---

## i3

Some features of `i3` doesn't work properly on WSL,
so I recommend updating the following settings:

```
default_border normal
bar {
    mode invisible
}
```

## Environment variables

Convert `.pam_environment` to `.bash_profile` with this script.

```shell
sed -Ee 's|\s+DEFAULT\=(.+)|="\1"|g' -e 's|\\||g' ~/.pam_environment > ~/.bash_profile
```
