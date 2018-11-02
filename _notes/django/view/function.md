---
---

#### views.py
```python
from django.http import JsonResponse

def myView(request):
    if request.method == 'GET':
        pass
    elif request.method == 'POST':
        pass
    return JsonResponse({})
```
