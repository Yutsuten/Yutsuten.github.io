---
---

## Syntax

```shell
grep OPTIONS PATTERN FILE
-r         # Recursive (when FILE is a FOLDER)
-v         # Invert the sense of matching, to select non-matching lines.
-E         # Extended regex
--exclude  # Exclude FILEs
```

## Examples

```shell
grep -r --exclude="*.swp" 'search_value' .
grep -E -v 'boo|foo' file
```
