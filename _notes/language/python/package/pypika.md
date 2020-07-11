---
---

[Documentation](https://github.com/kayak/pypika)

### Install
```bash
pip install wheel
pip install pypika
```

### Usage
[Full documentation](https://github.com/kayak/pypika)

```python
from pypika import Query

# Select
Query.from_('mytable') \
    .select('field1', 'field2') \
    .get_sql(quote_char=None)

# Insert
Query.into('mytable') \
    .columns('field1', 'field2') \
    .insert('hello', 8)

# Update
Query.update('mytable') \
    .set('field1', 'world') \
    .set('field2', 12)
```
