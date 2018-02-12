{% raw %}

#### Terminal
```
python manage.py createsuperuser
```
## Add app to admin
#### appname/admin.py
```python
from django.contrib import admin
from .models import ModelName
admin.site.register(ModelName)
```

Admin site: [http://127.0.0.1:8000/admin/](http://127.0.0.1:8000/admin/)

{% endraw %}
