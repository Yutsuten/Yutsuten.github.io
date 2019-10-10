---
---

### Basic Commands
```bash
# Build from Dockerfile
docker build -t image_name .

docker image ls -a
docker image rm image_name
```

### Load/save images
```bash
docker save custom_image > custom_image.tar
docker load --input custom_image.tar
```
