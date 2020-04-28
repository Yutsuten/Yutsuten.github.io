---
---

## Header

```shell
#!/bin/bash
```

## Read from pipe / file

`-t 0` is True if file descriptor is open and refers to a terminal.
The `cat -` outputs the input file.

```shell
if [[ ! -t 0 ]]; then
  stdin=$(cat -)
fi
```

## Eval

Evaluates a string as a shell command.

```shell
eval ${MYVAR}
```
