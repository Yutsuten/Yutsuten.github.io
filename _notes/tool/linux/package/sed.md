---
update: 2021-06-08
---

## Usage

```shell
sed OPTIONS INPUTFILE
```

| Option | Description |
| --- | --- |
| `-i` | Edit files in place |
| `-e` | Add the script to the commands to be executed (for adding multiple commands) |
| `-n` | Suppress empty patterns output |
| `-E` | Use extended regular expressions |

## Examples

### Edit file in place

```shell
sed -i 's/pattern/result/g' myfile     # Replace
sed -i '/pattern/a new text' myfile    # Add after
sed -i '/pattern/i new text' myfile    # Add before
sed -i '0,/pattern/s//result/' myfile  # Replace first occurrence only
```

### Remove ANSI escape sequences

```shell
sed 's/\x1b\[[0-9;]*m//g'           # Remove color sequences only
sed 's/\x1b\[[0-9;]*[mGKH]//g'      # Remove color and move sequences
sed 's/\x1b\[[0-9;]*[a-zA-Z]//g'    # Remove all escape sequences
```

### Find patterns

Regex option `p` : If the substitution was made, then print the new pattern space.

```shell
sed -nE 's/.*"total":([0-9]+).*/\1/p'
sed -n 's/^Your code has been rated at \([-0-9.]*\)\/.*/\1/p' .pylint
```

Note: `\d` does not work on sed. Use `[0-9]` instead.
