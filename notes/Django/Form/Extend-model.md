#### forms.py
```python
from django import forms
from . import models

class ModelNameForm(forms.ModelForm):
    class Meta:
        model = models.ModelName
        fields = ['name', 'description']
        widgets = {
            'name': forms.TextInput(attrs={'size': 150, 'class': 'form-control'}),
            'description': forms.Textarea(attrs={'rows': 5, 'class': 'form-control'}),
        }
```

