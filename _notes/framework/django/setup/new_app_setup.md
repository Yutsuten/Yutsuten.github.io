---
---

```shell
python manage.py startapp appname
```

```python
# projectname/settings.py
INSTALLED_APPS = [
    'appname.apps.AppnameConfig',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]
```

```python
# urls.py
from django.conf.urls import include

path('appname/', include('appname.urls')),
```

```python
# appname/urls.py
from django.urls import path

from . import views

app_name = 'appname'
urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
]
```
