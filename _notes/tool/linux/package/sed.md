---
---

## Usage

```shell
-i  # Edit files in place
-e  # Add the script to the commands to be executed (for adding multiple commands)
-n  # Suppress empty patterns output
-E  # Use extended regular expressions
```

## Find patterns

Regex option `p` : If the substitution was made, then print the new pattern space.

```shell
sed -nE 's/.*"total":([0-9]+).*/\1/p'
sed -n 's/^Your code has been rated at \([-0-9.]*\)\/.*/\1/p' .pylint
```

Note: `\d` does not work on sed. Use `[0-9]` instead.

## Edit files

```shell
sed -i 's/pattern/result/g' myfile     # Replace
sed -i '/pattern/a new text' myfile    # Add after
sed -i '/pattern/i new text' myfile    # Add before
sed -i '0,/pattern/s//result/' myfile  # Replace first occurrence only
```
