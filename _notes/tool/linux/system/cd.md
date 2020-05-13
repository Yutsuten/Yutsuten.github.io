---
---

## Usage

```shell
cd destination/path
cd -   # Last path (cd specific)
cd ~-  # Last path (expanded by the shell)
cd ~2  # From directory stack id 2 (expanded by the shell)
```

## Directory stack

```shell
dirs OPTIONS
-v  # Show id
-c  # Clear stack
-l  # Show full path
-p  # One entry per line
```

## Add / remove directory to stack

```shell
pushd PATH
popd PATH
```
