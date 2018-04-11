{% raw %}

# Django: Template List

#### index.html
```html
{% if modelname_list %}
<ul>
    {% for modelname modelname_list %}
    <li><a href="{% url 'modelname:detail' modelname.id %}">{{ modelname.name }}</a></li>
    {% endfor %}
</ul>
{% else %}
<p>No items available</p>
{% endif %}
```

{% endraw %}
