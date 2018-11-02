---
---

## Creating user:
[Reference](https://docs.djangoproject.com/en/2.0/ref/contrib/auth/)

```python
from django.contrib.auth.models import User
user = User.objects.create_user('myusername', password='password')
user = User.objects.create_superuser('myusername', password='password')
user.save()
```

## Data manipulation
```python
# Creating data
from polls.models import Question, Choice
q = Question(question_text="What's new?")
q.save()

# Retrieving data
Question.objects.all()
ModelName.objects.get(id=1)
q = ModelName.objects.filter(id=1)

# QuerySet chain, filter and exclude
q = ModelName.objects.filter(difficulty=1).exclude(id__in=[1, 2, 3])

# Update data
q = ModelName.objects.get(id=1)
q.update(question='Whats up?')

# Delete data
q.delete()

# Data set
q = ModelName.objects.get(id=2)
q.choice_set.all()
q.choice_set.create(choice_text='Not much', votes=0)
q.choice_set.all()
q.choice_set.count()
```

