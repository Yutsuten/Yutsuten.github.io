---
---

## Dockerfile

```config
FROM <image>
WORKDIR /code
COPY . /code

# Environment setup begin
RUN command
ENV NAME World
# Environment setup end

# Expose port to outside the container
EXPOSE 80

# Command to run when running the container
CMD ["binname", "arg"]
```
