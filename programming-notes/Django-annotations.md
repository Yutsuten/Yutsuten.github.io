{% raw %}

# Python
Download link: [https://www.python.org/downloads/](https://www.python.org/downloads/)

**Terminal**
```
tar xJf Python-3.6.4.tar.xz
cd Python-3.6.4/
./configure
make
make install
```

# Project setup
**Terminal**
```
sudo pip3 install Django
django-admin startproject projectname
cd projectname/
python3.6 -m venv venv
source venv/bin/activate
pip install Django
sudo apt-get install python-dev default-libmysqlclient-dev
pip install mysqlclient
deactivate
```

# Project settings
**projectname/settings.py**
```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'db_name',
        'USER': 'root',
        'PASSWORD': '',
        'HOST': 'localhost',
    }
}
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

TIME_ZONE = 'Asia/Tokyo'
```

**Terminal**
```
python manage.py migrate
```

# Python virtual environment
**Terminal**
```
source venv/bin/activate
deactivate
```

# New app setup
**Terminal**
```
python manage.py startapp appname
```

**projectname/settings.py**
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

**urls.py**
```python
path('appname/', include('appname.urls')),
```

**appname/urls.py**
```python
from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
]
```

**appname/views.py**
```python
from django.views.generic import TemplateView
from django.contrib.auth.mixins import LoginRequiredMixin

class IndexView(LoginRequiredMixin, TemplateView):
    template_name = 'projects/index.html'
```

**appname/templates/appname/index.html**
```
<h1>Hello, {{ user.get_username }}</h1>
<a href="{% url 'signout' %}">Logout</a>
```

# Models
**appname/models.py**
```python
from django.db import models

class Question(models.Model):
    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')

    def __str__(self):
        return self.question_text

class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)

    def __str__(self):
        return self.choice_text
```

**Terminal**
```
python manage.py makemigrations appname
python manage.py sqlmigrate appname 0001
python manage.py migrate
```

# Shell tips
```
python manage.py shell
```

## Creating tuples into database
```python
from appname.models import ModelName
q = ModelName(field="What's new?")
q.save()
```

## Retrieving data
```python
from appname.models import ModelName
ModelName.objects.get(id=1)
q = ModelName.objects.filter(id=1)
q.delete()
```

# Admin site
**Terminal**
```
python manage.py createsuperuser
```
## Add app to admin
**appname/admin.py**
```python
from django.contrib import admin
from .models import ModelName
admin.site.register(ModelName)
```

Admin site: [http://127.0.0.1:8000/admin/](http://127.0.0.1:8000/admin/)

# Template base html
**base.html**
```html
<h1>Common text</h1>
<div>{% block content %}{% endblock %}</div>
```

**template.html**
```html
{% extends 'base.html' %}
{% block content %}
<h1>My template</h1>
{% endblock %}
```

# App views (from model)
**appname/urls.py**
```python
path('', views.IndexView.as_view(), name='index'),
path('<int:pk>', views.DetailView.as_view(), name='detail'),
path('edit/<int:pk>', views.EditView.as_view(), name='edit'),
path('create', views.CreateView.as_view(), name='create'),
path('delete/<int:pk>', views.DeleteView.as_view(), name='delete'),
```

**appname/models.py**
```python
from django.urls import reverse
from django.db import models
class ModelName(models.model):
    # Success redirect:
    def get_absolute_url(self):
        return reverse('appname:view', kwargs={'pk': self.pk})

```
**appname/view**
```python
from django.views import generic
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from .models import ModelName

class IndexView(generic.ListView):
    model = ModelName
    template_name = 'appname/index.html'

class DetailView(generic.DetailView):
    model = ModelName
    template_name = 'appname/details.html'

class CreateView(CreateView):
    model = ModelName
    fields = ['field1', 'field2']
    template_name = 'appname/form.html'

class EditView(UpdateView):
    model = ModelName
    fields = ['field1', 'field2']
    template_name = 'appname/form.html'

class DeleteView(LoginRequiredMixin, DeleteView):
    model = ModelName
    template_name = 'appname/delete.html'
    success_url = reverse_lazy('appname:index')
```

**form.html**
```python
<form action="" method="post">{% csrf_token %}
    {{ form.as_p }}
    <input type="submit" value="Save" />
</form>
```

**delete.html**
```python
<form action="" method="post">{% csrf_token %}
    <p>Are you sure you want to delete "{{ object }}"?</p>
    <input type="submit" value="Confirm" />
</form>
```

# Authentication
**login.html**
```python
<form action="{% url 'auth' %}" method="post">{% csrf_token %}
    <input type="text" name="username" placeholder="Username" />
    <input type="password" name="password" placeholder="Password" />
    <input type="submit" value="Login" />
</form>
```

**views.py**
```python
from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.urls import reverse

def auth(request):
    username = request.POST['username']
    password = request.POST['password']
    user = authenticate(request, username=username, password=password)
    if (user is not None):
        login(request, user)
        return HttpResponseRedirect(reverse('appname:index'))
    else:
        return render(request, 'login.html', {
            'error_message': 'Wrong user or password'
            })

def signout(request):
    logout(request)
    return HttpResponseRedirect(reverse('index'))
```

## Limiting access to logged-in users
**views.py**
```python
from django.contrib.auth.mixins import LoginRequiredMixin
class MyView(LoginRequiredMixin, View):
    # View contents
```

### Redirecting
**settings.py**
```python
LOGIN_URL = 'login' #Redirect URL
```

# Run test server
**Terminal**
```
python manage.py runserver
```

{% endraw %}
