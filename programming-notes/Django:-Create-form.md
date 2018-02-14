{% raw %}

# Create form

### views.py
```python
from django.views import generic
from . import forms

class SimpleFormView(generic.edit.FormView):
    template_name = 'projects/simple_form.html'
    form_class = forms.SimpleForm
    success_url = reverse_lazy('index')

    def form_valid(self, form):
        print(form.cleaned_data)
        return super().form_valid(form)
```

### forms.py
```python
class SimpleForm(forms.Form):
    field1 = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control'}))
    field2 = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control'}))
```

### simple_form.html
```html
<form method="post">{% csrf_token %}
    {% for field in form %}
    <div class="form-group">
        {{ field.label_tag }} {{ field }}
        {{ field.errors }}
        {% if field.help_text %}
        <p class="help">{{ field.help_text|safe }}</p>
        {% endif %}
    </div>
    {% endfor %}
    <button class="btn btn-primary" type="submit">Save</button>
</form>
```

{% endraw %}