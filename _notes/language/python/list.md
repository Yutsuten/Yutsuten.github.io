---
update: 2021-01-25
---

## Basic

```python
my_list = ['a', 'b', 'c', 'd', 'e', 'g', 'f']
my_list[2]
my_list.append('z')
my_list.insert(0, 'first')
my_list.index('d')
my_list.remove('z')
my_list.pop(0)

list_sum = [1, 2, 3] + [4, 5, 6]
len(list_sum)

# Join
' '.join(my_list)

# Copy list
from copy import deepcopy
new_list = list_of_dicts.copy()
new_list = deepcopy(list_of_dicts)

# Slicing
my_list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
sliced1 = my_list[1:8:2]  # [start:end:stride] => [1, 3, 5, 7]
sliced2 = my_list[::2]   # start default: 0; end default: last element => [0, 2, 4, 6, 8]
sliced3 = my_list[1:8]   # stride default: 1 => [1, 2, 3, 4, 5, 6, 7]
sliced4 = my_list[::-1]  # => [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

# List generation
range(6) # => [0, 1, 2, 3, 4, 5] (In python 3: a range class, not a list)
range(1, 6) # => [1, 2, 3, 4, 5]
range(1, 6, 3) # => [1, 4]
```

## Sorting

[External documentation](https://docs.python.org/3/library/operator.html)

```python
from operator import itemgetter, attrgetter
```

```python
list_of_dicts.sort(key=itemgetter('date'))
my_list = sorted(list_of_instances, key=attrgetter('type'))
```

## Looping

```python
for value in my_list:
    print(value)

for index, value in enumerate(my_list):
    print(index, value)

for _ in range(10):  # If iterator is unnecessary
    pass

for elem1, elem2 in zip(my_list1, my_list2):
    print(elem1, elem2)
```

## List operations

```python
from functools import reduce
reduce(lambda a, b: a + b, my_list, initial_value)
map(lambda x: x*x, my_list)
```

## List comprehension

```python
# Three parts
[(expression_in_list) (for value in range) (if condition)]

my_list = [x for x in range(1, 6)]                # => [1, 2, 3, 4, 5]
my_list = [x * 2 for x in range(1, 6)]            # => [2, 4, 6, 8, 10]
my_list = [x for x in range(1, 6) if x % 2 == 0]  # => [2, 4]
```
