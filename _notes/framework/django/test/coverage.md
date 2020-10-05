---
---

## Install

```shell
pip install coverage
```

## Only command

```shell
coverage run --source='.' --omit='venv/*' manage.py test
coverage report
coverage html
```

### With .coveragerc

```
[run]
source = .
omit =
    */migrations/*
    venv/*
    appname/settings.py
    appname/wsgi.py
    manage.py
    */__init__.py
```

```shell
coverage run manage.py test
coverage report
coverage html
```
