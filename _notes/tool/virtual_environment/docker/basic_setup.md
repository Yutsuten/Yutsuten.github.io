---
---

[Reference](https://docs.docker.com/compose/gettingstarted/)

#### Dockerfile
```
FROM <image>
WORKDIR /code
COPY . /code

# Environment setup begin
RUN command
# Environment setup end

# Command to run when running the container
CMD ["binname", "arg"]
```

#### docker-compose.yml
```
version: "3"
services:
  <service_name>:
    build: .
    volumes:
      - .:/code
```

### Running the container's bash (for debug)
```shell
docker-compose run <service_name> bash
```
