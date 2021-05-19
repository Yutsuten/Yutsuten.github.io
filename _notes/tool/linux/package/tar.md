---
update: 2021-05-19
---

## Usage

```shell
tar OPTIONS SOURCE
```

On options, hyphen is optional.

| Option | Description |
| --- | --- |
| `-c` | Create tar file. |
| `-x` | Extract tar file. |
| `-C` | Set current directory. |
| `-f` | Set the name of the file to create / extract. |
| `-z` | Enable gnuzip compression. |
| `-v` | Verbosely list files processed. |

Gzipped files can have `.tgz` or `.tar.gz` extensions.

## Examples

Compress a folder:

```shell
tar -cf grouped.tar myfolder   # Create File
tar -czf grouped.tgz myfolder  # Create Gzipped File
```

Extract gzipped file:

```shell
tar -xzf file.tgz
```
