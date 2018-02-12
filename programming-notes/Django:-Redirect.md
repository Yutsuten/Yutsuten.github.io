{% raw %}

# Django: Redirect

#### urls.py
```python
from django.views.generic import RedirectView

urlpatterns = [
    path('', RedirectView.as_view(url='login'), name='index'),
    path('login', views.LoginView.as_view(), name='login'),
]
```

{% endraw %}
