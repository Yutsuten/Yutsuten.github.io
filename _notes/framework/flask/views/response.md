---
update: 2021-05-06
---

## Customize response

The import bellow is required:

```python
from flask import jsonify, Response
```

### Status code

```python
return Response('', status=204)
return jsonify({}), 204
```

### Headers

Consider we are inside the function of a view.

```python
response = Response('<?xml version="1.0" encoding="UTF-8"?>\n<html></html>')
response.headers['content-type'] = 'text/xml'
return response
```

## Return file

```python
from flask import send_from_directory

@app.route('/', methods=['GET'])
def index():
    return send_from_directory(directory=app.root_path, filename='sound.mp3')
```
