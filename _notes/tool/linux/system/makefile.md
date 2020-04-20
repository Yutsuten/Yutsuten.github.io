---
---


## Syntax

```make
my_var := hello

target: prerequisites
<TAB> recipe
```

## Example

```make
my_var := hello

all: prepare build

prepare:
    echo $(CURDIR)
    -command_that_may_fail
    prepare_command
    echo my_var

build:
    build_command
```
