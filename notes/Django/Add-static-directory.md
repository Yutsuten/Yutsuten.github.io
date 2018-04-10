{% raw %}

# Django: Add template directory

#### settings.py
```python
# Search for static folder in root directory
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'static'),
]
```

{% endraw %}

