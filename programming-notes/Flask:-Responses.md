{% raw %}

# Flask: Responses

## Respond with custom headers
### views.py
```python
from flask import Response

@app.route("/", methods=['GET'])
def index():
    response = Response("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<html></html>")
    response.headers['content-type'] = 'text/xml'
    return response
```

## Respond with file
### views.py
```python
from flask import send_from_directory

@app.route("/", methods=['GET'])
def index():
    return send_from_directory(directory=app.root_path, filename='sound.mp3')
```

{% endraw %}
