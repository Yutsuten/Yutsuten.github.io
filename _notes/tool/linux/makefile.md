---
doc: http://web.mit.edu/gnu/doc/html/make_2.html
update: 2021-06-11
---


## Syntax

Declare Phony targets if you just want to declare some commands.

```
.PHONY: dependencies
my_var := hello

target: dependencies
<TAB> command
```

## Example

```make
.PHONY: all prepare build
my_var := hello

all: prepare build

prepare:
	@echo $(CURDIR)
	-command_that_may_fail
	prepare_command
	echo my_var

build:
	build_command
```
