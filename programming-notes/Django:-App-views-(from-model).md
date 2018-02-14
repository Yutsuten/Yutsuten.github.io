{% raw %}

# Django: App views (from model)

#### appname/urls.py
```python
path('', views.IndexView.as_view(), name='index'),
path('<int:pk>', views.DetailView.as_view(), name='detail'),
path('edit/<int:pk>', views.EditView.as_view(), name='edit'),
path('create', views.CreateView.as_view(), name='create'),
path('delete/<int:pk>', views.DeleteView.as_view(), name='delete'),
```

#### appname/models.py
```python
from django.urls import reverse
from django.db import models
from django import forms

class ModelName(models.model):
    # Success redirect:
    def get_absolute_url(self):
        return reverse('appname:view', kwargs={'pk': self.pk})

class ModelNameForm(forms.ModelForm):
    # Overwrite the field name
    name = charField(initial='Hello')

    class Meta:
        model = ModelName
        fields = ['name', 'description']
        widgets = {
            'name': forms.TextInput(attrs={'size': 150, 'class': 'form-control'}),
            'description': forms.Textarea(attrs={'rows': 5, 'class': 'form-control'}),
        }
```

#### appname/view.py
```python
from django.views import generic
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy
from .models import ModelName, ModelNameForm

class IndexView(generic.ListView):
    model = ModelName
    template_name = 'appname/index.html'

    # New variable to the template
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['new_info'] = 'Hello World!!'
        # Get variable captured from urls.py
        captured = self.kwargs # An dictionary
        return context

class DetailView(generic.DetailView):
    model = ModelName
    template_name = 'appname/details.html'

class CreateView(CreateView):
    model = ModelName
    form_class = ModelNameForm
    template_name = 'appname/form.html'

class EditView(UpdateView):
    model = ModelName
    fields = ['field1', 'field2']
    template_name = 'appname/form.html'

class DeleteView(LoginRequiredMixin, DeleteView):
    model = ModelName
    template_name = 'appname/delete.html'
    success_url = reverse_lazy('appname:index')
```

#### index.html
```html
{% if project_list %}
<ul>
    {% for project in project_list %}
    <li><a href="{% url 'projects:detail' project.id %}">{{ project.name }}</a></li>
    {% endfor %}
</ul>
{% else %}
<p>No Projects available</p>
{% endif %}
```

#### details.html
```html
<h2>{{ project.name }}</h2>
<p>{{ project.description }}</p>
<p><b>Created:</b>{{ project.created }}</p>
<p><b>Last modified:</b>{{ project.last_modified }}</p>

# Reverse relationships
{% if project.task_set.count > 0 %}
{% for task in project.task_set.all %}
<tr>
    <td>{{ task.name }}</td>
    <td>{{ task.deadline }}</td>
    <td>{{ task.difficulty }}</td>
    <td>{{ task.priority }}</td>
    <td>{{ task.get_status_display }}</td>
    <td></td>
</tr>
{% endfor %}
{% else %}
<tr>
    <td colspan="6">タスクはまだありません。</td>
</tr>
{% endif %}
```

#### form.html
```html
<form action="" method="post">{% csrf_token %}
    {% for field in form %}
    <div class="form-group">
        {{ field.errors }}
        {{ field.label_tag }} {{ field }}
        {% if field.help_text %}
        <p class="help">{{ field.help_text|safe }}</p>
        {% endif %}
    </div>
    {% endfor %}
    <button class="btn btn-primary" type="submit">保存</button>
</form>
```

#### delete.html
```html
<form action="" method="post">{% csrf_token %}
    <p>Are you sure you want to delete "{{ object }}"?</p>
    <input type="submit" value="Confirm" />
</form>
```

{% endraw %}
