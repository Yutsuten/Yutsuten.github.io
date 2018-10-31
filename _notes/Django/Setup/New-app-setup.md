---
---

#### Terminal
```
python manage.py startapp appname
```

#### projectname/settings.py
```python
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

#### urls.py
```python
from django.conf.urls import include

path('appname/', include('appname.urls')),
```

#### appname/urls.py
```python
from django.urls import path

from . import views

app_name = 'appname'
urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
]
```

