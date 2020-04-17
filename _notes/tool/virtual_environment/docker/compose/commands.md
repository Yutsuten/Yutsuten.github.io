---
doc: https://docs.docker.com/compose/gettingstarted/
---

```shell
# Running the container's bash (for debug)
docker-compose run <service_name> bash

docker-compose logs -f --tail 10 <service_name>
docker-compose run --rm <service_name> command

docker-compose up -d --force-recreate --no-deps <service_name>
docker-compose up -d  # Detached mode
docker-compose up -d --build  # Rebuild containers
docker-compose up -d <service_name>
```
