{% raw %}

# Django: Template Details

#### details.html
```html
<h2>{{ project.name }}</h2>
<p>{{ project.description }}</p>
<p><b>Created:</b>{{ project.created }}</p>
<p><b>Last modified:</b>{{ project.last_modified }}</p>

# Reverse relationships
{% if project.task_set.count > 0 %}
{% for task in project.task_set.all %}
<tr>
    <td>{{ task.name }}</td>
    <td>{{ task.deadline }}</td>
    <td>{{ task.difficulty }}</td>
    <td>{{ task.priority }}</td>
    <td>{{ task.get_status_display }}</td>
    <td></td>
</tr>
{% endfor %}
{% else %}
<tr>
    <td colspan="6">No tasks yet.</td>
</tr>
{% endif %}
```

{% endraw %}
