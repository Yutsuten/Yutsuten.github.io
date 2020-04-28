---
---

```python
import sys

def main(argv=None):
    if argv is None:
        argv = sys.argv
    if len(argv) != 2:
        sys.stderr.write('Argument is required.\n')
        return 1
    return 0

if __name__ == '__main__':
    sys.exit(main())
```
