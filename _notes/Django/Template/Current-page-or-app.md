---
---

{% raw %}

Ref: [request.resolver_match](https://docs.djangoproject.com/en/2.0/ref/urlresolvers/#django.urls.ResolverMatch)

#### index.html

```html
<li class="nav-item {% if request.resolver_match.app_name == 'projects' %}active{% endif %}">
    <a class="nav-link" href="{% url 'projects:index' %}">Project<span class="sr-only">(current)</span></a>
</li>
<li class="nav-item {% if request.resolver_match.url_name == 'about' %}active{% endif %}">
    <a class="nav-link" href="{% url 'habitica_api' %}">API data <span class="sr-only">(current)</span></a>
</li>
```

{% endraw %}
