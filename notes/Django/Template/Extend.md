{% raw %}

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

{% endraw %}
