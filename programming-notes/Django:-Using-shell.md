{% raw %}

#### Terminal
```
python manage.py shell
```

## Creating tuples into database
```python
from appname.models import ModelName
q = ModelName(field="What's new?")
q.save()
```

## Retrieving data
```python
from appname.models import ModelName
ModelName.objects.get(id=1)
q = ModelName.objects.filter(id=1)
q.delete()
```

{% endraw %}
