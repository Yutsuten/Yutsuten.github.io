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
```

```yml
# If build directory and Dockerfile are in different locations
services:
  <service_name>:
    build:
      context: .
      dockerfile: ./path/to/Dockerfile
```

### Running the container's bash (for debug)
```shell
docker-compose run <service_name> bash
```

### Start the services
```shell
docker-compose up -d  # Detached mode
docker-compose up -d --build  # Rebuild containers
docker-compose up -d <service_name>
```
