---
---

### Start a bash interactive session
```bash
docker run -it <image:tag> bash
docker run --rm -it <image:tag> bash  # Remove the container as you exit it

# Multiple commands
docker run image_name /bin/bash -c "command1 && command2"
```
