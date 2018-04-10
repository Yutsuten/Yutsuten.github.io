{% raw %}

# Django: Template

#### views.py
```python
from django.views.generic import TemplateView

class AppnameIndexView(TemplateView):
    template_name = 'appname/index.html'
```

#### templates/appname/index.html
```
<h1>Hello World</h1>
```

{% endraw %}
