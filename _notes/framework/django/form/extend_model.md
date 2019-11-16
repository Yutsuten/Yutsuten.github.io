---
---

#### forms.py
```python
from django import forms
from . import models

class ModelNameForm(forms.ModelForm):
    # Add fields that aren't included in the model
    field1 = forms.CharField(required=False, widget=forms.TextInput(attrs={'class': 'form-control'}))

    class Meta:
        # Model fields
        model = models.ModelName
        fields = ['name', 'description']
        widgets = {
            'name': forms.TextInput(attrs={'size': 150, 'class': 'form-control'}),
            'description': forms.Textarea(attrs={'rows': 5, 'class': 'form-control'}),
        }
```
