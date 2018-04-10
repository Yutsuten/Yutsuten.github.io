{% raw %}

# Django: Permissions

Reference: [link](https://docs.djangoproject.com/en/1.11/topics/auth/default/#default-permissions)

#### views.py
```python
from django.views.generic.edit import CreateView
from django.contrib.auth.mixins importPermissionRequiredMixin
from .models import ModelName

class CreateView(PermissionRequiredMixin, CreateView):
    model = ModelName
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
