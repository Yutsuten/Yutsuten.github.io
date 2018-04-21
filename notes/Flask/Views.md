{% raw %}

# Flask: Views

### views.py
```python
from flask import Flask
from flask import request

@app.route("/")
def hello_world():
    return 'Hello, World!'

@app.route("/login", methods=['GET', 'POST', 'DELETE'])
def answer_call():
    if request.method == 'GET':
        return 'Get'

    if request.method == 'POST':
        print(request.form)
        return 'Post'

    if request.method == 'DELETE':
        return 'Delete'
```

{% endraw %}

