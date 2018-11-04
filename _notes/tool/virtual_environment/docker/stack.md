---
---

- [Guide](https://docs.docker.com/get-started/part5/)

### Stack with multiple services
#### docker-compose.yml
```yml
version: "3"
services:
  web:
    # replace username/repo:tag with your name and image details
    image: username/repo:tag
    deploy:
      replicas: 5
      restart_policy:
        condition: on-failure
      resources:
        limits:
          cpus: "0.1"
          memory: 50M
    ports:
      - "80:80"
    networks:
      - webnet
  visualizer:
    image: dockersamples/visualizer:stable
    ports:
      - "8080:8080"
    volumes:
      - "/var/run/docker.sock:/var/run/docker.sock"
    deploy:
      placement:
        constraints: [node.role == manager]
    networks:
      - webnet
  redis:
    image: redis
    ports:
      - "6379:6379"
    volumes:
      - "/home/docker/data:/data"
    deploy:
      placement:
        constraints: [node.role == manager]
    command: redis-server --appendonly yes
    networks:
      - webnet
networks:
  webnet:
```

### Configure shell to talk to main machine
```shell
docker-machine env myvm1
eval $(docker-machine env myvm1)
```

### Create/update services
```shell
docker-machine ssh myvm1 "mkdir ./data"

docker stack deploy -c docker-compose.yml getstartedlab
docker stack ps getstartedlab
docker service ls
```
