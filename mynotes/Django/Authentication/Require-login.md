#### views.py
```python
from django.contrib.auth.mixins import LoginRequiredMixin
from . import models

class IndexView(LoginRequiredMixin, generic.ListView):
    model = models.Project
    template_name = 'projects/index.html'
```

