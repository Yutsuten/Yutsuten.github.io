{% raw %}

#### settings.py
```python
INSTALLED_APPS = [
    'django.contrib.staticfiles',
]

# Search for static folder in root directory
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, "static"),
]

STATIC_URL = '/static/'
```

### Create static folder
Add static files to a `static/` folder.
```
static/
    style.css
```

#### template.html
```html
{% load static %}
<link rel="stylesheet" type="text/css" href="{% static 'style.css' %}" />
```

{% endraw %}
