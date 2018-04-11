{% raw %}

# Django: Authentication Require permission

Reference: [link](https://docs.djangoproject.com/en/1.11/topics/auth/default/#default-permissions)

#### views.py
```python
from django.views import generic
from django.contrib.auth.mixins import PermissionRequiredMixin
from . import models

class CreateView(PermissionRequiredMixin, generic.edit.CreateView):
    model = models.ModelName
    fields = ['name']
    template_name = 'appname/create.html'
    permission_required = 'appname.add_modelname'
    raise_exception = True
```

### Default permissions:
- appname.add_modelname
- appname.change_modelname
- appname.delete_modelname

{% endraw %}
