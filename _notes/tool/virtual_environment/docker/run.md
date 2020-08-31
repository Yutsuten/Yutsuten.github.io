---
---

## Usage

```shell
docker run OPTIONS image:tag COMMAND
# OPTIONS
-d                  # Run container in background (detach)
-p HOST:CONT        # Publish a container's port(s) to the host
-w DIR              # Working directory inside the container
-v HOSTDIR:CONTDIR  # Bind mount a volume
-it                 # Interactive TTY
--name NAME         # Assign a name to the container
--mount MOUNT       # Attach a filesystem mount to the container
--network NET       # Connect a container to a network
--rm                # remove container on exit
```

### Mount syntax

| Syntax | Info |
| --- | --- |
| `source=VOLNAME,target=CONTDIR` | Mount a volume |
| `type=bind,source=HOSTDIR,target=CONTDIR` | Bind mount a volume |
