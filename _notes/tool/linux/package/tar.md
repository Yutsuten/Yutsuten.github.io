---
---

### Options
```bash
## Hyphen is optional on tar commands

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

### Group files without compress
```shell
# Create Verbose File
tar -cvf grouped.tar myfolder
```

### Extract from .tgz or .gz
```shell
tar -xzf file.tgz -C ~/existing/directory/
```
