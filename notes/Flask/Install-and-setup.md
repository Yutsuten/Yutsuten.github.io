---
layout: empty
---

{% raw %}

# Flask: Install and setup

## Install
### Terminal
```
pip install Flask
```

## Simple site setup
### views.py
```python
from flask import Flask
app = Flask(__name__)

@app.route("/")
def hello_world():
    return 'Hello, World!'
```

### Console
```
export FLASK_APP=views.py
export FLASK_DEBUG=1
```

## Run server
```
flask run
```

{% endraw %}
