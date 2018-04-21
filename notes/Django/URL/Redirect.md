#### urls.py
```python
from django.views.generic import RedirectView
from django.urls import reverse_lazy
from . import views

urlpatterns = [
    path('', RedirectView.as_view(url=reverse_lazy('login')), name='index'),
    path('login', views.LoginView.as_view(), name='login'),
]
```

