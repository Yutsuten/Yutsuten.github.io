---
---


## Syntax

```
target: prerequisites
<TAB> recipe
```

## Example

```
all: prepare build

prepare:
    -command_that_may_fail
    prepare_command

build:
    build_command
```
