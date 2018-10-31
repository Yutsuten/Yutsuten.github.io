---
---

```python
from operator import itemgetter
from copy import deepcopy

# Sorting
list_of_dicts.sort(key=itemgetter('date'))

# Copy list
new_list = list_of_dicts.copy()
new_list = deepcopy(list_of_dicts)
```
