{% raw %}

# Django: Fill field on POST

### urls.py
```python
urlpatterns = [
    path('<int:project_id>/task/create', views.TaskCreateView.as_view(), name='task_create'),
]
```

### views.py
```python
class TaskCreateView(LoginRequiredMixin, generic.edit.CreateView):
    model = models.Task
    form_class = forms.TaskForm
    template_name = 'projects/task_create.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['project'] = models.Project.objects.get(pk=self.kwargs['project_id'])
        return context

    def form_valid(self, form):
        task = form.save(commit=False)
        # 'project' required field was excluded from form, the value in the URL is used instead
        task.project = models.Project.objects.get(pk=self.kwargs['project_id'])
        task.save()
        return super().form_valid(form)
```

{% endraw %}
