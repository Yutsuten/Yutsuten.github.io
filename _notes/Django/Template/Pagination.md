---
---

{% raw %}

### index.html
```html
<nav aria-label="...">
    <ul class="pagination justify-content-end">
        {% if page_obj.has_previous %}
        <li class="page-item">
            <a class="page-link" href="?page={{ page_obj.previous_page_number }}">Previous</a>
        {% else %}
        <li class="page-item disabled">
            <a class="page-link">Previous</a>
        {% endif %}
        </li>

        {% if page_obj.has_previous %}
        <li class="page-item"><a class="page-link" href="?page={{ page_obj.previous_page_number }}">{{ page_obj.previous_page_number }}</a></li>
        {% endif %}
        <li class="page-item active">
            <a class="page-link" href="javascript:void(0)">{{ page_obj.number }} <span class="sr-only">(current)</span></a>
        </li>
        {% if page_obj.has_next %}
        <li class="page-item"><a class="page-link" href="?page={{ page_obj.next_page_number }}">{{ page_obj.next_page_number }}</a></li>
        {% endif %}

        {% if page_obj.has_next %}
        <li class="page-item">
            <a class="page-link" href="?page={{ page_obj.next_page_number }}">Next</a>
        {% else %}
        <li class="page-item disabled">
            <a class="page-link">Next</a>
        {% endif %}
        </li>
    </ul>
</nav>
```

{% endraw %}
