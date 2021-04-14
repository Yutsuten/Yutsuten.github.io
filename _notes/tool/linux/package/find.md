---
update: 2021-04-14
---

## Usage

```shell
find LOCATION OPTIONS
```

| Option | Description |
| --- | --- |
| `-name` | Base of file name to be matched. |
| `-type` | File type to be matched. `d` for directory, `f` for file, `l` for symbolic link. |
| `-empty` | File is empty and is either a regular file or a directory. |
| `-delete` | Delete files (make sure to put it last). |
| `-print` | Print the full file name on the standard output. |

## Examples

Find files by name:

```shell
find . -name "*.js"
```

Find and delete empty directories:

```shell
find . -type d -empty -print
find . -type d -empty -delete
```
