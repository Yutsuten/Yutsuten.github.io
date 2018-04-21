#### appname/views.py
```python
from django.views import generic
from . import models

class AppnameDetailView(generic.DetailView):
    model = ModelName
    template_name = 'appname/details.html'
    # appname is set on template scope
```

