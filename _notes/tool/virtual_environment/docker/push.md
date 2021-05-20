---
doc: https://docs.docker.com/engine/reference/commandline/push/
update: 2021-05-20
---

## Usage

Push an image or a repository to a registry.

```shell
docker push OPTIONS NAME:TAG
```

| Option | Description |
| --- | --- |
| `--all-tags` `-a` | Push all tagged images in the repository. |
| `--disable-content-trust` | Skip image signing. |
| `--quiet` `-q` | Suppress verbose output. |

### Example

Pushing a new image to a registry:

```shell
docker tag imagename:latest localhost:8080/myuser/imagename:1.0.0
docker push localhost:8080/myuser/imagename:1.0.0
```
