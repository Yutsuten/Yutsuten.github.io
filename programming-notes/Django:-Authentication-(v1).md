{% raw %}

#### login.html
```python
<form action="{% url 'auth' %}" method="post">{% csrf_token %}
    <input type="text" name="username" placeholder="Username" />
    <input type="password" name="password" placeholder="Password" />
    <input type="submit" value="Login" />
</form>
```

#### views.py
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
#### views.py
```python
from django.contrib.auth.mixins import LoginRequiredMixin
class MyView(LoginRequiredMixin, View):
    # View contents
```

### Redirecting
#### settings.py
```python
LOGIN_URL = 'login' #Redirect URL
```

{% endraw %}
