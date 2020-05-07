---
---

## Syntax

```shell
test expression
[[ expression ]]
[[ ! expression ]]
[[ expression ]] && [[ expression ]]
[[ expression ]] || [[ expression ]]

# Print result of last command
echo $?
```

## Integer comparison

```shell
# Check equality
[[ $(id -u) = 0 ]]; echo $?

# Check inequality
[[ $(id -u) != 0 ]]; echo $?

# Other boolean checks
[[ $(echo '8.5>=7' | bc -l) = 1 ]]; echo $?
(( $(echo '8.5>=7' | bc -l) )); echo $?
```

## String comparison

```shell
[[ "04:00" == "12:00" ]]; echo $?
[[ "04:00" != "12:00" ]]; echo $?
[[ "04:00" < "12:00" ]]; echo $?
[[ "04:00" > "12:00" ]]; echo $?
[[ -z "${MYVAR}" ]]; echo $?  # Length is zero
[[ -n "${MYVAR}" ]]; echo $?  # Length is non-zero
```

## File checks

```shell
[[ -f dir/filename ]]; echo $?  # True if exists and is a file
```
