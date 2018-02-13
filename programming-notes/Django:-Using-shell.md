{% raw %}

# Django: Using shell

#### Terminal
```
python manage.py shell
```

## Creating data
```python
from polls.models import Question, Choice
q = Question(question_text="What's new?")
q.save()
```

## Retrieving data
```python
from polls.models import Question, Choice
Question.objects.all()
ModelName.objects.get(id=1)
q = ModelName.objects.filter(id=1)
```

## Delete data
```python
from polls.models import Question, Choice
q = ModelName.objects.get(id=1)
q.delete()
```

## Data set
```python
from polls.models import Question, Choice
q = ModelName.objects.get(id=1)
q.choice_set.all()
q.choice_set.create(choice_text='Not much', votes=0)
q.choice_set.all()
q.choice_set.count()
```
{% endraw %}
