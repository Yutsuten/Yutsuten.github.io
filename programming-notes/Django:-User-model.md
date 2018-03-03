{% raw %}

# Django: User model

## Fields:
[Reference](https://docs.djangoproject.com/en/2.0/ref/contrib/auth/)

## Creating user:
```python
from django.contrib.auth.models import User
user = User.objects.create_user('myusername', password='password')
user.save()
```

{% endraw %}
