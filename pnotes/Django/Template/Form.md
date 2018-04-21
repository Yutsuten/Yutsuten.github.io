{% raw %}

#### form.html
```html
<form action="" method="post">{% csrf_token %}
    {% for field in form %}
    <div class="form-group">
        {{ field.errors }}
        {{ field.label_tag }} {{ field }}
        {% if field.help_text %}
        <p class="help">{{ field.help_text|safe }}</p>
        {% endif %}
    </div>
    {% endfor %}
    <button class="btn btn-primary" type="submit">Save</button>
</form>
```

{% endraw %}
