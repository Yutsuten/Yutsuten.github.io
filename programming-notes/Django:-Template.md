{% raw %}

# Django: Template

## Template Base

#### base.html
```html
<h1>Common text</h1>
<div>{% block content %}{% endblock %}</div>
```

#### template.html
```html
{% extends 'base.html' %}
{% block content %}
<h1>My template</h1>
{% endblock %}
```

## Getting context (current app or url)
```html
<li class="nav-item {% if request.resolver_match.app_name == 'projects' %}active{% endif %}">
    <a class="nav-link" href="{% url 'projects:index' %}">プロジェクト <span class="sr-only">(current)</span></a>
</li>
<li class="nav-item {% if request.resolver_match.url_name == 'about' %}active{% endif %}">
    <a class="nav-link" href="{% url 'habitica_api' %}">API data <span class="sr-only">(current)</span></a>
</li>
```

Ref: [request.resolver_match](https://docs.djangoproject.com/en/2.0/ref/urlresolvers/#django.urls.ResolverMatch)

{% endraw %}
