---
---

#### appname/views.py
```python
from django.views import generic

class AppnameIndexView(generic.TemplateView):
    template_name = 'appname/index.html'
```

