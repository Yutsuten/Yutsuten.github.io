---
---

Test Regex Expression: [link](https://regexr.com/)

```python
# Character patterns
a   # Match a
\d  # Digit
\D  # Non-Digit
\w  # Alphanumeric character
\W  # Non-Alphanumeric character
\s  # Whitespace character
\S  # Non-whitespace character
.   # Any character

# Repeat
a*  # Zero or more repetitions of a
a+  # One or more repetitions of a
a?  # Optional

# Any in
[abc]  # a, b or c
[^abc] # Not a, b or c
[a-z]  # Characters between a and z

# Repetitions
a{10}   # 10 repetitions of a
a{5,10} # Between 5 and 10 repetitions of a

# Position
^  # Start of the line
$  # End of the line

# Grouping
(cat|dog) # Cat or dog
(\w+).png # Capture the name of a png file
```
