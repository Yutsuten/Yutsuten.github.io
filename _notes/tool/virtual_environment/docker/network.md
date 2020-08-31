---
doc: https://docs.docker.com/network/network-tutorial-standalone/
---

## Usage

When access to another containers is required,
it is better to create a custom network.

The main advantage is that containers can not only communicate by IP address,
but can also resolve a container name to an IP address.

```shell
docker network COMMAND
connect     # Connect a container to a network
create      # Create a network
ls          # List networks
rm          # Remove one or more networks
prune       # Remove all unused networks
```

## Example

```shell
docker network create --driver bridge test-net
docker network rm test-net
```
