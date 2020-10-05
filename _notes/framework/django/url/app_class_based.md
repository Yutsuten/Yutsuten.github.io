---
---

```python
# appname/urls.py
from . import views

app_name = 'myapp'
urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
    path('<int:pk>', views.DetailView.as_view(), name='detail'),
    path('edit/<int:pk>', views.EditView.as_view(), name='edit'),
    path('create', views.CreateView.as_view(), name='create'),
    path('delete/<int:pk>', views.DeleteView.as_view(), name='delete'),
]
```
