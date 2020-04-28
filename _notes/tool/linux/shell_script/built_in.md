---
---

## Set

```shell
# https://www.gnu.org/software/bash/manual/html_node/The-Set-Builtin.html
set -x
set -o xtrace
```

## Random

```shell
echo $(( RANDOM % 10 ))
```

## Print

```shell
printf %s "${MYVAR}"     # Without new line
printf %s\\n "${MYVAR}"  # With new line
```
