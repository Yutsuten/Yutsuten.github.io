{% raw %}

# Django: Model setup

#### appname/models.py
```python
from django.db import models

class Question(models.Model):
    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')

    def __str__(self):
        return self.question_text

class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)

    def __str__(self):
        return self.choice_text
```

#### Terminal
```
python manage.py makemigrations appname
python manage.py sqlmigrate appname 0001
python manage.py migrate
```

{% endraw %}
