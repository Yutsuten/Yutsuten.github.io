---
---

```shell
-i  # Edit files in place
-e  # Add the script to the commands to be executed (for adding multiple commands)
-n  # Suppress empty patterns output
```

### Edit
```shell
sed -i 's/pattern/result/g' myfile     # Replace
sed -i '/pattern/a new text' myfile    # Add after
sed -i '/pattern/i new text' myfile    # Add before
sed -i '0,/pattern/s//result/' myfile  # Replace first occurrence only
```

### Find
```shell
sed -ne 's/^Your code has been rated at \([-0-9.]*\)\/.*/\1/p' .pylint
```
