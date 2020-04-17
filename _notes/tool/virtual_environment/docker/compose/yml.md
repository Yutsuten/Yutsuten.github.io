---
---

```yml
version: "3"
services:
  <service_name>:
    build: .
    image: <image>
    ports:
      - "4050:4000"  # HOST:CONTAINER
    volumes:
      - .:/code  # Bind mount
      - /code/node_modules
    working_dir: /code
```
