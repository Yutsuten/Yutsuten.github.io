---
doc: https://docs.python.org/3/tutorial/errors.html
---

## Syntax

```python
try:
    raise Exception('No way!')
except Exception as err:
    print('Error: {}'.format(str(err)))
    raise
```
