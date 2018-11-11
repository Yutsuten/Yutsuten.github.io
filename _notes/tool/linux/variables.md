---
---

```shell
# Create a new variable
name='Taro'
score=7

# Create variable from output of a command
score=$(sed -ne 's/^Your code has been rated at \([-0-9.]*\)\/.*/\1/p' .pylint)
```
