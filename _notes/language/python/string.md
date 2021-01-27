---
doc: https://docs.python.org/3/library/string.html
update: 2021-01-27
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
text.splitlines()

# Strip
text.strip()  # Default is ' '
text.rstrip()
text.lstrip()

# String addtion
text_sum = 'Hello ' + 'world!'

# Unicode support
# coding:utf-8
mystring = u'こんにちは'
mystring = 'こんにちは'.decode('utf-8')

import unicodedata
mystring = unicodedata.normalize('NFC', u'こんにちは')
```

## Format

Array-like usage:

```python
'{}{}{}'.format(a, b, c)
'{0}{1}{2}'.format(a, b, c)
```

Dictionary-like usage:

```python
'{name}'.format(name='John')
```

Numbers formatting:

```python
'{:03d}'.format(8)  # '008'
'{:+.4f}'.format(3.141592653589793)  # '+3.1416'
'{:-.4f}'.format(3.141592653589793)  # '3.1416' (default)
'{: .4f}'.format(3.141592653589793)  # ' 3.1416'
'{:.2%}'.format(0.2548)  # '25.48%'
```

Date formatting:

```python
'{:%Y/%m/%d %H:%M:%S}'.format(datetime.now())
```

Content alignment:

```python
'{:<10}'.format('left')    # 'left      '
'{:^10}'.format('center')  # '  center  '
'{:>10}'.format('right')   # '     right'
'{:_^10}'.format('fill')   # '___fill___'
```
