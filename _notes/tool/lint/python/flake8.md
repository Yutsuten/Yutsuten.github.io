---
---

### Install

Flake8 changes its behaviour depending on the python used to install it.

```bash
python -m pip install flake8
```

### Configuration file

[Documentation](http://flake8.pycqa.org/en/latest/user/configuration.html#project-configuration)

#### Naming / path

| Home | Parent |
| ---- | ------ |
| `~/.config/flake8` | `setup.cfg`, `tox.ini`, `.flake8` |

#### Command

There is not command to generate a configuration file.

#### Sample

```
[flake8]
max-line-length = 100
max-complexity = 10
```
