---
---

```python
'Hello'.lower()
'Hello'.upper()
'HTml5'.isalpha() # False
```

### Split
```python
# Split string to list
'What is your name?'.split() # Default is ' '
'some,data,here'.split(',')
```

### Format (new style)
- [Documentation](https://docs.python.org/3.4/library/string.html#format-string-syntax)
- [Examples](https://pyformat.info/)

```python
# Basic usage
'Hello {}, there is a {:#x} error!'.format('Bob', 50159747054)
'Hello {name}, there is a {errno:#x} error!'.format(name='Bob', errno=50159747054)

# Add 0 to left of a number
'{:03d}'.format(8)  # 008

# Decimal number with fixed decimal places
'{:.4f}'.format(3.141592653589793)  # 3.1416
```
