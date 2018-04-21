Ref: [https://docs.djangoproject.com/en/2.0/ref/class-based-views/mixins-editing/](https://docs.djangoproject.com/en/2.0/ref/class-based-views/mixins-editing/)

#### appname/views.py
```python
from django.views import generic
from . import forms

class SimpleFormView(generic.edit.FormView):
    template_name = 'projects/simple_form.html'
    form_class = forms.SimpleForm
    success_url = reverse_lazy('index')

    # Optional: Initialize form data
    def get_initial(self):
        self.initial['field1'] = 'Default text form field1'
        return self.initial

    # Optional: Edit POST data
    def form_valid(self, form):
        print(form.cleaned_data)
        return super().form_valid(form)
```

