---
layout: empty
---

{% raw %}

# Python: File manipulation

### views.py
```python
def write_binary(data):
    with open('sound.mp3', 'wb') as audio_file:
        audio_file.write(data)
```

{% endraw %}
