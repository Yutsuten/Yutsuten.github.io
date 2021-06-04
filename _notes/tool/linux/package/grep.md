---
update: 2021-06-04
---

## Syntax

```shell
grep OPTIONS PATTERN FILE
```

| Option | Description |
| --- | --- |
| `-r` `--recursive` | Recursive (when FILE is a FOLDER) |
| `-c` `--count` | Print a count of matching lines. |
| `-v` `--invert-match` | Invert the sense of matching, to select non-matching lines. |
| `-E` `--extended-regexp` | Interpret PATTERN as extended regular expressions. |
| `-F` `--fixed-strings` | Interpret PATTERN as fixed strings. |
| `--exclude` | Exclude FILEs |

## Examples

```shell
grep -r --exclude="*.swp" 'search_value' .
grep -Ev 'boo|foo' file
```
