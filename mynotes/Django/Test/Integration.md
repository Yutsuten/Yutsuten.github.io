#### tests.py
```python
from django.test import TestCase
from django.urls import reverse
from django.contrib.auth.models import User
from .models import Project

class ProjectIndexViewTests(TestCase):
    def setUp(self):
        user = User.objects.create_user('test_user', 'test@test.com', 'test_password')
        self.client.login(username='test_user', password='test_password')

    def test_no_projects(self):
        """
        If no projects exists, display an appropriate message to user
        """
        response = self.client.get(reverse('projects:index'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "There are no projects")
        self.assertQuerysetEqual(response.context['project_list'], [])

class ProjectCreateViewTests(TestCase):
    def setUp(self):
        user = User.objects.create_user('test_user', 'test@test.com', 'test_password')
        self.client.login(username='test_user', password='test_password')

    def test_view(self):
        response = self.client.get(reverse('projects:create'))
        self.assertEqual(response.status_code, 200)

    def test_create_empty(self):
        response = self.client.post(reverse('projects:create'), {})
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.template_name, ['projects/create.html'])
        self.assertContains(response, 'This field is required')

    def test_create_filled(self):
        response = self.client.post(reverse('projects:create'), {'name': 'Test Project', 'description': 'The description of my test project.'})
        proj = Project.objects.get(name='Test Project')
        self.assertRedirects(response, reverse('projects:detail', kwargs={'pk': proj.id}))
        self.assertEqual(proj.description, 'The description of my test project.')
```

### Run tests
```
python manage.py test projects

coverage run --source='.' manage.py test projects
```

