---
---

## Usage

```shell
docker run OPTIONS image COMMAND
# OPTIONS
-d                  # detach
-p HOST:CONT        # port forward
-w DIR              # working directory
-v HOSTDIR:CONTDIR  # bind mount
-it                 # interactive TTY
--name NAME         # container name
--mount type=bind,source=HOSTDIR,target=CONTDIR
--rm                # remove container on exit
```
