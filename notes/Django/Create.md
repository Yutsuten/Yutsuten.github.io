{% raw %}

# Django: View Create

## From model
```python
from django.views import generic
from . import models

class AppnameCreateView(generic.edit.CreateView):
    model = models.ModelName
    fields = ['field1', 'field2']
    template_name = 'appname/create.html'
```

## Model + Form

#### appname/views.py
```python
from django.views import generic
from . import models, forms

class AppnameCreateView(generic.edit.CreateView):
    model = models.ModelName
    form_class = forms.ModelNameForm
    template_name = 'appname/form.html'
```

{% endraw %}

