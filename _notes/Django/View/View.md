---
---

#### views.py
```python
from django.views import View
from django.urls import reverse_lazy
from django.http import HttpResponseRedirect

class CustomView(View):
    def get(self, request, *args, **kwargs):
        context = {}
        return render(request, 'company/account_create.html', context)

    def post(self, request, *args, **kwargs):
        post_data = request.POST
        print(post_data.get('field1'))
        return HttpResponseRedirect(reverse_lazy('appname:viewname'))
```

