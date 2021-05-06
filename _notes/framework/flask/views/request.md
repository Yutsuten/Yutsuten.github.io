---
update: 2021-05-06
---

## Usage

The import bellow is required:

```python
from flask import request
```

### Arguments access

URL arguments (usually on GET requests):

```python
value = request.args['arg_name']
```

Form parameters (usually on POST requests):

```python
value = request.form['param_name']
```

JSON data (usually on POST, PUT or Ajax requests):

```python
data = request.get_json()
```
