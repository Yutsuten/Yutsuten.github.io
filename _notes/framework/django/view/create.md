---
---

## From model

```python
# appname/views.py
from django.views import generic
from . import models

class AppnameCreateView(generic.edit.CreateView):
    model = models.ModelName
    fields = ['field1', 'field2']
    template_name = 'appname/form.html'

    # Optional: Edit POST data
    def form_valid(self, form):
        task = form.save(commit=False)
        # 'project' required field was excluded from form, the value in the URL is used instead
        task.project = models.Project.objects.get(pk=self.kwargs['project_id'])
        task.save()
        return super().form_valid(form)
```

## Model + Form

```python
# appname/views.py
from django.views import generic
from . import models, forms

class AppnameCreateView(generic.edit.CreateView):
    model = models.ModelName
    form_class = forms.ModelNameForm
    template_name = 'appname/form.html'
```
