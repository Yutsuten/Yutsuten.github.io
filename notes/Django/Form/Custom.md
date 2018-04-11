{% raw %}

# Django: Form Custom

#### forms.py
from django import forms

```python
class SimpleForm(forms.Form):
    field1 = forms.CharField(required=False, widget=forms.TextInput(attrs={'class': 'form-control'}))
    field2 = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control'}))
```

{% endraw %}
