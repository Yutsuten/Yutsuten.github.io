---
---

#### appname/views.py
```python
from django.views import generic
from django.urls import reverse_lazy
from . import models

class DeleteView(generic.edit.DeleteView):
    model = models.ModelName
    template_name = 'appname/delete.html'
    success_url = reverse_lazy('appname:index')
```

