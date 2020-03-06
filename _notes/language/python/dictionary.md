---
---

```python
my_dict = {'name': 'John', 'age': 28}
my_dict['hobby'] = 'games'

my_dict.keys()  # List of keys
my_dict.values()  # List of values

for key in my_dict:
    print(key, my_dict[key])

for key, value in my_dict.items():
    print(key, value)

del my_dict['key']
my_dict.pop('key', None)  # Does not raise exception
```
