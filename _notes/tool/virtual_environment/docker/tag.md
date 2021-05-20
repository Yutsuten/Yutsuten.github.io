---
doc: https://docs.docker.com/engine/reference/commandline/tag/
update: 2021-05-20
---

## Usage

Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE.

```shell
docker tag SOURCE_IMAGE:TAG TARGET_IMAGE:TAG
```

An image name is made up of slash-separated name components,
optionally prefixed by a registry hostname.

### Examples

Create a tag.

```shell
docker tag imagename myuser/imagename:1.0.0
```

Create tag prefixed by a registry hostname.

```shell
docker tag imagename:latest localhost:8080/myuser/imagename:1.0.0
```
