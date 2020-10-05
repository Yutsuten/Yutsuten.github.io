---
---

```python
# appname/views.py
from django.views import generic
from . import models

# appname_list is set on template scope, and has all appname objects
class AppnameIndexView(generic.ListView):
    model = models.ModelName
    template_name = 'appname/index.html'

    paginate_by = 5 # Optional: To paginate
```
