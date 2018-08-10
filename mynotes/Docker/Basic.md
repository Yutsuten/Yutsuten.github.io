#### Terminal
```shell
docker run -d --name container_name -p 18080:8080 -v /local/path/:/container/path/ hello-world
# d : Run in background
# p local:container : Port forwarding
# v /local/path/:/container/path/ : Folder sharing
docker images
docker ps -a
docker pull hello-world
docker rm container_name  # or ID
docker rmi image_name  # or ID
docker cp path/file container_name:/opt/
docker exec -it container_name bash  # Terminal
```
