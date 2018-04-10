{% raw %}

# Django: List Basic

#### appname/views.py
```python
from django.views import generic
from . import models

class AppnameIndexView(generic.ListView):
    model = models.ModelName
    template_name = 'appname/index.html'
    # appname_list is set on template scope, and has all appname objects
```

{% endraw %}
