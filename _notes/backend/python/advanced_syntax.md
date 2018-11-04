---
---

## List comprehension
```python
# Three parts
[(expression_in_list) (for value in range) (if condition)]

my_list = [x for x in range(1, 6)] # => [1, 2, 3, 4, 5]
my_list = [x * 2 for x in range(1, 6)] # => [2, 4, 6, 8, 10]
my_list = [x for x in range(1, 6) if x % 2 == 0] # => [2, 4]
```

## List slicing
```python
my_list = [x for x in range(10)]
sliced = my_list[1:8:2] # [start:end:stride] => [1, 3, 5, 7]
sliced2 = my_list[::2] # start default: 0; end default: last element => [0, 2, 4, 6, 8]
sliced3 = my_list[1:8] # stride default: 1 => [1, 2, 3, 4, 5, 6, 7]
reversed = my_list[::-1] => [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
```

## Anonymous functions
```python
# Two parts
lambda (parameters): (return expression)

my_list = [x for x in range(10)]
print(list(filter(lambda x: x % 2), my_list))
```

## Access named attributes from string
```python
getattr(x, 'foobar')       # Equivalent to x.foobar
setattr(x, 'foobar', 123)  # Equivalent to x.foobar = 123
```
