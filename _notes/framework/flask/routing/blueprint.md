---
update: 2021-05-06
---

## Blueprint creation

Required import and class instantiation:

```python
from flask import Blueprint

page_blueprint = Blueprint('blueprint_name', __name__)
```

Blueprint usage:

```python
@page_blueprint.route('/')
def index():
  return 'Hello World!'

@page_blueprint.route('/<id>')
def do_stuff(id):
  return 'Record id {}'.format(id)
```

## Blueprint registration

On the main script (usually `app.py`),
register the blueprint like this:

```python
from flask import Flask
from page import page_blueprint

app = Flask(__name__)
app.register_blueprint(page_blueprint, url_prefix='/page')
```
