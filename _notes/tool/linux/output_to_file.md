---
---

### Stdout
```shell
# Any command is valid, not only echo
echo 'Hello World' > new_file
echo 'Hello World' >> append_existing_file
```

### Redirect stderr to stdout
```shell
command > new_file 2>&1  # 2 (stderr) to 1 (stdout)
```

### Write to both to terminal and file
```shell
command | tee new_file
```
