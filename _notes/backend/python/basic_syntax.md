---
---

## Comment
```python
# Single line comment

'''
Multi-line
comment
'''
```

## Variables
```python
my_int = 7
my_float = 1.234
my_bool = True
my_string = 'I\'m new here!' # May be used as array
my_array = [1, 2, 3, 4]
my_dict = {'name': 'John', 'age': 28}
```

## Simple operations
```python
addition = 72 + 23
subtraction = 108 - 204
multiplication = 108 * 0.5
division = 108 / 9
exponentiation = 10 ** 2
modulo = 10 % 2
array_addition = [1, 2, 3] + [4, 5, 6]
string_addition = 'Hello ' + 'world!'
```

## Bool evaluations
```python
100 == (2 * 50) and 19 <= 19
-22 >= -18 or 99 != (98 + 1)
not False
```

## Array operations
```python
my_array = ['a', 'b', 'c', 'd', 'e', 'g', 'f']
my_array[2]
my_array.append('z')
my_array.index('d')
my_array.remove('z')
my_array.pop(0)
my_array.sort()
```

## Dictionary operations
```python
my_dict = {'name': 'John', 'age': 28}
my_dict['hobby'] = 'games'
```

## Built-in functions
```python
len("Hello")
len([1, 2, 3])
max(3, 4, 5)
min(3, 4, 5)
abs(-7)
sum(2, 3, 4)
type(3.14) # == float
str(3.14)
int(3.14)
float(3)
round(3.14)
word = raw_input("Enter a word: ")
del word
range(6) # => [0, 1, 2, 3, 4, 5] (In python 3: a range class, not a list)
range(1, 6) # => [1, 2, 3, 4, 5]
range(1, 6, 3) # => [1, 4]
'2'.isdigit() # True
```

## Condition
```python
if 3 < 4:
  pass
elif 3 > 4:
  pass
else
  pass
```

## For loop
```python
my_array = [6, 2, 5]
for number in my_array:
  print(number)

for i in range(len(my_array)):
  print(my_array[i])

for i, item in enumerate(my_array):
  print(i, item)

my_dict = {'name': 'John', 'age': 28}
for key in my_dict:
  print(key, my_dict[key])
```

## While loop
```python
while var1 < var2
  pass
else
  # Only if while condition became false
  pass
# Result of break
```

## Function
```python
def spam():
  eggs = 12
  return eggs
```

## Printing
```python
print(my_int)
print(span())
print("%.2f" % my_float)
print("Title", variable) # Title <variable>
```

## Unicode support
```python
# coding:utf-8
mystring = u'こんにちは'
mystring = 'こんにちは'.decode('utf-8')
```

## Raise exception
```python
if some_condition:
    raise Exception('Message')
```

