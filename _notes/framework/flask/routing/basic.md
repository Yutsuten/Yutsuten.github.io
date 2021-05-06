---
update: 2021-05-06
---

## Usage

```python
# app.py
from flask import Flask, request

app = Flask(__name__)

@app.route('/')
def hello_world():
  return 'Hello, World!'

@app.route('/login', methods=['GET', 'POST', 'DELETE'])
def answer_call():
  if request.method == 'GET':
    return 'Get'
  if request.method == 'POST':
    print(request.form)
    return 'Post'
  if request.method == 'DELETE':
    return 'Delete'
```
