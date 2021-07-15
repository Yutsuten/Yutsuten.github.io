---
doc: https://langserver.org/
update: 2021-07-15
---

To make it work, we need a client (installed in the editor, e.g. ALE for vim)
and a server.

## Python

[python-language-server](https://github.com/palantir/python-language-server)

```shell
pacman -S python-language-server
```

### ALE Configuration

```vim
let g:ale_python_pyls_executable = 'python3'
let g:ale_python_pyls_options = '-m pyls'
let g:ale_python_pyls_config = {
\  'pyls': { 'configurationSources': ['flake8'] }
\}
```
