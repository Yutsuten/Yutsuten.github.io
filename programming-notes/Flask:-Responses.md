{% raw %}

# Flask: Responses

## Respond with custom headers
### views.py
```python
from flask import Response

@app.route('/', methods=['GET'])
def index():
    response = Response('<?xml version="1.0" encoding="UTF-8"?>\n<html></html>')
    response.headers['content-type'] = 'text/xml'
    return response
```

## Respond with file
### views.py
```python
from flask import send_from_directory

@app.route('/', methods=['GET'])
def index():
    return send_from_directory(directory=app.root_path, filename='sound.mp3')
```

## Get named parameters
```python
import flask

@app.route('/user/<user_id>', methods=['GET'])
def user(user_id):
    print(user_id)
    return flask.jsonify({'success': True})
```

## Get search parameters from URL
```python
import flask

@app.route('/search', methods=['GET'])
def search():
    print(flask.request.args.get('field1'))
    return flask.jsonify({'success': True})
```

## Get POST parameters
```python
import flask

@app.route('/post_data', methods=['POST'])
def post_data():
    print(flask.request.form) # An immutable dictionary
    print(flask.request.form.get('field1'))
    return flask.jsonify({'success': True})
```

{% endraw %}
