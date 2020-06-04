---
---

Installing homebrew on linux without sudo and development tools seems to be possible
(haven't succeed yet, though).

## Requirements

Basically an usable `git` and `gcc` are needed.
If it is not installed already,
try copying the binaries from another server.

### Git

Copy the git binary itself and its dependencies.

- libexec: `/usr/libexec/git-core`
- gitcore: `/usr/share/git-core`

After copying you will need to set some configuration to make the git use those "dependencies",
as probably you don't have sudo access,
it is on your home directory.

```shell
EXPORT GIT_EXEC_PATH=${HOME}/libexec/git-core
git config --global init.templateDir "${HOME}/share/git-core"
```

You may check if the exec path has been updated with `git --exec-path`.

Add git to the PATH and make homebrew use it.

```shell
export HOMEBREW_NO_ENV_FILTERING=1
```

### Gcc

Maybe only copying the binary is enough.
Be sure to put it on the PATH.

## Install

Follow the instructions on the Homebrew website.
The objective here is to make it install newer `gcc` and `git`.

If you succeed on this,
probably you're free to install any package homebrew supports.
