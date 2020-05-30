---
---

## List jobs

```shell
jobs OPTIONS
-l  # Include job ID
-r  # Running jobs
-s  # Suspended jobs
-p  # Process Group ID (PGID) only
```

## Manage jobs

Type `Ctrl + Z` to pause the current job.

Running these commands without any arguments applies to the "current" job.

With job number (`NUM` for bash, `%NUM` for zsh),
apply to the specified job.

```shell
# For zsh, use %NUM
fg       # Resume in the foreground
bg       # Resume in the background
disown   # Detach job from terminal
```

## Nohup

Avoid sending `SIGHUP` to a process on logout.

```shell
nohup command
nohup command &
nohup command > output 2>&1 &
```
