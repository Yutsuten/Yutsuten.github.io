---
---

## Syntax

```shell
diff OPTIONS FROM_FILE TO_FILE
-y    # Side by side
-u    # Show + or -
--color=always
--suppress-common-lines
```

## Examples

```shell
diff -u --color=always FROM_FILE TO_FILE | less -R  # Output similar to git diff
```
