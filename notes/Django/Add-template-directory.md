{% raw %}

# Django: Add template directory

#### settings.py
```python
TEMPLATES = [
    {
        # ...
        'DIRS': [os.path.join(BASE_DIR, 'templates')],
        # ...
    },
]
```

{% endraw %}
