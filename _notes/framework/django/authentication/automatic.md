---
---

{% raw %}

## Setting up

```python
# settings.py
LOGIN_URL = 'login'
LOGIN_REDIRECT_URL = 'projects:index'
LOGOUT_REDIRECT_URL = 'login'
```

```python
# urls.py
from django.contrib.auth import views as auth_views
from . import forms

urlpatterns = [
    path('login', auth_views.LoginView.as_view(authentication_form = forms.CustomAuthenticationForm), name='login'),
    path('logout', auth_views.LogoutView.as_view(), name='logout'),
]
```

```python
# forms.py
from django import forms
from django.contrib.auth.forms import AuthenticationForm

class CustomAuthenticationForm(AuthenticationForm):
    username = forms.CharField(widget=forms.TextInput(attrs={'size': 150, 'class': 'form-control', 'placeholder': 'Username'}))
    password = forms.CharField(widget=forms.PasswordInput(attrs={'class': 'form-control', 'placeholder': 'Password'}))
```

Then on `registration/login.html`:

```html
{% if form.errors %}
<div class="row">
    <div class="col">
        <div class="alert alert-danger" role="alert">Your username and password didn't match. Please try again.</div>
    </div>
</div>
{% endif %}

<div class="row">
    <div class="col-lg-5 col-md-6 col-11 mx-auto">
        <div class="login-block">
            <h1 class="text-center">Login</h1>
            <form method="post">{% csrf_token %}
                <div class="form-group">
                    {{ form.username }}
                </div>
                <div class="form-group">
                    {{ form.password }}
                </div>
                <div class="row">
                    <div class="col-8 mx-auto">
                        <button class="btn btn-primary btn-lg btn-block" type="submit">Login</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
```

{% endraw %}
