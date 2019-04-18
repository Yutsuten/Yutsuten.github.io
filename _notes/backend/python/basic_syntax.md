---
---

### Comment
```python
# Single line comment

'''
Multi-line
comment
'''
```

### Variables
```python
my_int = 7
my_float = 1.234
my_bool = True
my_string = 'I\'m new here!' # May be used as array
my_array = [1, 2, 3, 4]
my_dict = {'name': 'John', 'age': 28}
```

### Simple operations
```python
addition = 72 + 23
subtraction = 108 - 204
multiplication = 108 * 0.5
division = 108 / 9
exponentiation = 10 ** 2
modulo = 10 % 2
```

### Bool evaluations
```python
100 == (2 * 50) and 19 <= 19
-22 >= -18 or 99 != (98 + 1)
not False
```

### Built-in functions
```python
# Math
max(3, 4, 5)
min(3, 4, 5)
abs(-7)
sum(2, 3, 4)
round(3.14)  # Default 0 decimal digits
round(3.14, 1)  # 1 decimal digits

# Cast
str(3.14)
int(3.14)
float(3)

# Type
type(3.14) # == float
isinstance(3.14, float)

# Delete variable
del my_variable

# Console interaction
word = raw_input("Enter a word: ")

# Print
print(my_int)
print(span())
print('%.2f' % my_float)
print('Title', variable) # Title <variable>
```

### Condition
```python
if 3 < 4:
    pass
elif 3 > 4:
    pass
else
    pass
```

### For loop
```python
my_array = [6, 2, 5]
for number in my_array:
    print(number)

for i, item in enumerate(my_array):
    print(i, item)

for _ in range(10):  # If iterator is unnecessary
    pass

import itertools  # This is faster than the above
for _ in itertools.repeat(None, 10):
    pass

my_dict = {'name': 'John', 'age': 28}
for key in my_dict:
    print(key, my_dict[key])
```

### While loop
```python
while var1 < var2
    pass
else
    # Only if while condition became false
    pass
# Result of break
```

### Function
```python
def spam():
    eggs = 12
    return eggs

lambda (parameters): (return expression)
```

### Raise exception
```python
if some_condition:
    raise Exception('Message')
```
