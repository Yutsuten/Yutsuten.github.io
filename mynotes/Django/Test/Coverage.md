```shell
# Install
pip install coverage
```

### Only command
#### Terminal
```shell
# Run it and see report
coverage run --source='.' --omit='venv/*' manage.py test && coverage report && coverage html

# See report
coverage report
coverage html
```

### With .coveragerc
#### .coveragerc
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

#### Terminal
```shell
# Run it and see report
coverage run manage.py test && coverage report && coverage html

# See report
coverage report
coverage html
```

