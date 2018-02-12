{% raw %}

# Django: New app setup

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
path('appname/', include('appname.urls')),
```

#### appname/urls.py
```python
from django.urls import path

from . import views

urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
]
```

#### appname/views.py
```python
from django.views.generic import TemplateView

class IndexView(TemplateView):
    template_name = 'projects/index.html'
```

#### appname/templates/appname/index.html
```
<h1>Hello, {{ user.get_username }}</h1>
<a href="{% url 'signout' %}">Logout</a>
```

{% endraw %}
