{% raw %}

# Django: View Edit

## From model

#### appname/views.py
```python
from django.views import generic
from . import models

class AppnameEditView(generic.edit.UpdateView):
    model = models.ModelName
    fields = ['field1', 'field2']
    template_name = 'appname/edit.html'
```

## Model + Form

#### appname/views.py
```python
from django.views import generic
from . import models, forms

class AppnameEditView(generic.edit.UpdateView):
    model = models.ModelName
    form_class = forms.ModelNameForm
    template_name = 'appname/edit.html'
```

{% endraw %}
