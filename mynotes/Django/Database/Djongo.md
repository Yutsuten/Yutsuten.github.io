Documentation: [link](https://nesdis.github.io/djongo/get-started/)

### Install
```shell
pip install djongo
```

### Configuration
#### settings.py
```python

DATABASES = {
    'default': {
        'ENGINE': 'djongo',
        'ENFORCE_SCHEMA': False,
        'NAME': 'your-db-name',
        'HOST': 'localhost',
        'PORT': 27017,
        # If has authentication:
        'USER': 'db-username',
        'PASSWORD': 'password',
        'AUTH_SOURCE': 'db-name',
    }
}
```

### Embedded Model
#### models.py
```python
from djongo import models
from django.forms.models import model_to_dict
from django.utils import timezone

class MetaDataModel(models.Model):
    created_date = models.DateTimeField(default=timezone.now())
    modified_date = models.DateTimeField(default=timezone.now())

    def __str__(self):
        return str(model_to_dict(self))

    class Meta:
        abstract = True

class Project(models.Model):
    meta_data = models.EmbeddedModelField(model_container=AbstractMetaDataModel)
    name = models.CharField(max_length=200)

    def save(self, *args, **kwargs):
        if not self.meta_data:
            self.meta_data = MetaDataModel()
        else:
            if self.meta_data.created_date.utcoffset() is None:
                self.meta_data.created_date = timezone.make_aware(self.meta_data.created_date)
            self.meta_data.modified_date = timezone.now()
        super().save(*args, **kwargs)
```

#### views.py
```python
from django.views import generic
from . import models, forms
from django.utils import timezone

class ProjectView(generic.edit.CreateView):
    model = models.Project
    form_class = forms.ProjectForm # Add meta_data to form if it is editable
    template_name = 'project/create.html' # Add meta_data as any other field

    def form_valid(self, form):
        project = form.save(commit=False)
        project.meta_data = models.MetaDataModel()

        project.meta_data.created_date = timezone.now()
        project.meta_data.modified_date = timezone.now()
        # or
        setattr(project.meta_data, 'created_date', timezone.now())
        setattr(project.meta_data, 'modified_date', timezone.now())

        project.save()
        self.request.session['company_id'] = form.instance.id
        return super().form_valid(form)
```


### Push changes to database
```
python manage.py migrate
```

