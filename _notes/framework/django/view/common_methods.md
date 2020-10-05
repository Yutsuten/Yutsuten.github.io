---
---

```python
# appname/views.py
from django.views import generic

class AppnameIndexView(generic.TemplateView):
    template_name = 'appname/index.html'

    # Optional: Edit template context
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['new_info'] = 'Hello World!!'

        # Optional: Get variables captured from urls.py
        captured = self.kwargs

        # Optional: Get URL search parameters
        url_search_parameters = self.request.GET

        # Optional: set session
        self.request.session['data1'] = form.cleaned_data['field1']

        return context
```
