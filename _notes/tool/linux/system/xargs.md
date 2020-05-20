---
---

## Usage

`xargs` reads the stdin and uses it as arguments in a command.

```shell
xargs OPTIONS COMMAND INITIAL_ARGS
-p  # Prompt the user before executing (nice for debug)
-n  # Number of arguments to be used each time
-P  # Number of processes (default 1)
```

## Example

```shell
echo 'one two three' | xargs touch
```
