---
---

## Usage

```bash
docker image COMMAND
ls      # List images
rm      # Remove one or more images
prune   # Remove unused images
load    # Load an image from a tar archive or STDIN
save    # Save one or more images to a tar archive (streamed to STDOUT by default)
```

## Load and save usage

```bash
docker save IMG -o img.tar
docker load -i img.tar
```
