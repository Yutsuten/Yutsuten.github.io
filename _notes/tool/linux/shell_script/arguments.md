---
---

```bash
# Check the number of arguments
if [[ "$#" -ne 2 ]]; then
  # >&2 Echo output to standard error instead of standard out
  echo "Usage: $0 arg1 arg2" >&2
  exit 1
fi

echo $1  # Argument 1
echo $2  # Argument 2
exit 0
```
