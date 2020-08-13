---
---

## Options

Hyphen is optional.

```bash
# Compress
-c  # create

# Extract
-x  # extract
-C  # current directory (directory to extract)

# Common
-f  # file (the .gz file directory)
-z  # gnuzip
-v  # verbosely list files processed
```

### Compress

```shell
tar -cf grouped.tar myfolder      # Create File
tar -czf grouped.tar.gz myfolder  # Create Gzipped File
```

### Extract from .tgz or .gz

```shell
tar -xzf file.tgz -C ~/existing/directory/
```
