---
---

```shell
# Syntax
test expression
[[ expression ]]

# Print result of last command
echo $?

# Check equality
[[ $(id -u) = 0 ]]; echo $?

# Check inequality
[[ $(id -u) != 0 ]]; echo $?

# Other boolean checks
[[ $(echo '8.5>=7' | bc -l) = 1 ]]; echo $?
(( $(echo '8.5>=7' | bc -l) )); echo $?

# Testing files
[[ -f dir/filename ]]; echo $?  # True if exists and is a file
```
