---
doc: https://docs.docker.com/engine/reference/commandline/image/
update: 2021-05-20
---

## Usage

```shell
docker image COMMAND
```

| Command | Description |
| --- | --- |
| load | Load an image from a tar archive or STDIN. |
| ls | List images. |
| prune | Remove unused images. |
| push | Push an image or a repository to a registry. |
| rm | Remove one or more images. |
| tag | Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE. |
| save | Save one or more images to a tar archive (streamed to STDOUT by default). |

### Load and save usage

```shell
docker save imagename -o imagename.tar
docker load -i imagename.tar
```
