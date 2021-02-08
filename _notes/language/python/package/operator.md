---
doc: https://docs.python.org/3/library/operator.html
update: 2021-02-08
---

## Usage

```python
from operator import itemgetter, attrgetter
```

Usually it is used on functions like `sort` or `map`.

```python
itemgetter('key')  # Used for dictionaries or lists
attrgetter('id')   # Used for class instances or named tuples
```
