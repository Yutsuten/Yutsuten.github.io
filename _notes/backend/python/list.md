---
---

```python
# Basic
my_list = ['a', 'b', 'c', 'd', 'e', 'g', 'f']
my_list[2]
my_list.append('z')
my_list.index('d')
my_list.remove('z')
my_list.pop(0)
my_list.sort()

list_sum = [1, 2, 3] + [4, 5, 6]
len(list_sum)

# Sorting
from operator import itemgetter
list_of_dicts.sort(key=itemgetter('date'))

# Copy list
from copy import deepcopy
new_list = list_of_dicts.copy()
new_list = deepcopy(list_of_dicts)

# List generation
range(6) # => [0, 1, 2, 3, 4, 5] (In python 3: a range class, not a list)
range(1, 6) # => [1, 2, 3, 4, 5]
range(1, 6, 3) # => [1, 4]
```
