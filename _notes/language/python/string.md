---
---

```python
# Simple string manipulations
text.lower()
text.upper()
text.isalpha()  # Returns True if it only has letters
text.isdigit()  # Returns True if it only has numbers
text.isalnum()  # Returns True if it has letters or numbers
text.startswith('abc')

len(text)

# Replace
# (For regex, use its package)
text.replace('pattern', repl, count=0)

# Split
text.split()  # Default is ' '

# Strip
text.strip()  # Default is ' '

# String addtion
text_sum = 'Hello ' + 'world!'

# Unicode support
# coding:utf-8
mystring = u'こんにちは'
mystring = 'こんにちは'.decode('utf-8')

import unicodedata
mystring = unicodedata.normalize('NFC', u'こんにちは')
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
