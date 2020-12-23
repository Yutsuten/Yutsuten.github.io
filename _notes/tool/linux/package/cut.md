---
---

## Usage

```shell
cut OPTIONS FILE
-d  # Delimiter
-f  # Field
```

## Example

```shell
echo 'refs/pull/123/merge' | cut -d / -f 3
```
