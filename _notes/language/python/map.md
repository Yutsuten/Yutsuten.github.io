---
---

```python
def my_func(x):
    return x * x
number_list = [0, 1, 2, 3]

res1 = map(str, number_list)  # ['0', '1', '2', '3']
res2 = map(my_func, number_list)  # [0, 1, 4, 9]
res3 = map(lambda x: x*x, number_list)  # [0, 1, 4, 9]

# If a list is needed
res = list(res1)
```
