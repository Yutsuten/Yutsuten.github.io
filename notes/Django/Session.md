---
layout: empty
---

{% raw %}

# Session

### views.py
```python
from django.views import generic

# Saving form data into session
class MyFormView(generic.edit.FormView):
    template_name = 'projects/my_form.html'
    form_class = forms.MyForm
    success_url = reverse_lazy('index')

    def form_valid(self, form):
        self.request.session['data1'] = form.cleaned_data['field1']
        self.request.session['data2'] = form.cleaned_data['field2']
        return super().form_valid(form)
```

{% endraw %}
