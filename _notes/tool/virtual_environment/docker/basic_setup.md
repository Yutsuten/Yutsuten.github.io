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
```yml
version: "3"
services:
  <service_name>:
    build: .
    ports:
      - "4050:4000"  # HOST:CONTAINER
    volumes:
      - .:/code
      - /code/node_modules  # Data volume for compiled code on build
```

```yml
# If build directory and Dockerfile are in different locations
services:
  <service_name>:
    build:
      context: .
      dockerfile: ./path/to/Dockerfile
```

### Useful commands
```shell
# Running the container's bash (for debug)
docker-compose run <service_name> bash

docker-compose logs -f --tail 10 <service_name>
docker-compose run --rm <service_name> command
docker-compose up -d --force-recreate --no-deps <service_name>
```

### Start the services
```shell
docker-compose up -d  # Detached mode
docker-compose up -d --build  # Rebuild containers
docker-compose up -d <service_name>
```
