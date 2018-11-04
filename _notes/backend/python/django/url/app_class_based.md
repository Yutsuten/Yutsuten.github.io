---
---

#### appname/urls.py
```python
from . import views

path('', views.IndexView.as_view(), name='index'),
path('<int:pk>', views.DetailView.as_view(), name='detail'),
path('edit/<int:pk>', views.EditView.as_view(), name='edit'),
path('create', views.CreateView.as_view(), name='create'),
path('delete/<int:pk>', views.DeleteView.as_view(), name='delete'),
```

