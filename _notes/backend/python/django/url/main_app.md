---
---

#### main/urls.py
```python
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('projects/', include('projects.urls')),
    path('admin/', admin.site.urls),
]
```

