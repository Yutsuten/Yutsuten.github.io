---
doc: https://docs.python.org/3/library/collections.html
update: 2021-01-27
---

## Usage

### Named tuple

```python
from collections import namedtuple
```

First create a Class-like object with the desired fields:

```python
QueryResult = namedtuple('QueryResult', ['id', 'name', 'status'])
```

Create instances and use it:

```python
tom = QueryResult(id=1, name='Tom', status='active')
tom.id
```
