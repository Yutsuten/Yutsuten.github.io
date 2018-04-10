{% raw %}

# Django: List Pagination

#### appname/views.py
```python
from django.views import generic
from . import models

class AppnameIndexView(generic.ListView):
    model = models.Modelname
    template_name = 'modelname/index.html'
    paginate_by = 5
```

{% endraw %}

