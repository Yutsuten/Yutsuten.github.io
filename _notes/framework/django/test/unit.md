---
---

#### tests.py
Assert methods: [link](https://docs.python.org/3/library/unittest.html#assert-methods)

```python
import json
from django.test import TestCase
from django.urls import reverse
from django.contrib.auth.models import User
from unittest import skip
from .models import Project

def setSession(self):
    curr_session = self.client.session
    curr_session.update({
        'company_id': 1
    })
    curr_session.save()

class ProjectIndexViewTests(TestCase):
    def setUp(self):
        if not User.objects.filter(username='test_user'):
            user = User.objects.create_superuser('test_user', 'test@test.com', 'test_password')
        self.client.login(username='test_user', password='test_password')

    @skip('Skip this test!')
    def test_no_projects(self):
        """
        If no projects exists, display an appropriate message to user
        """
        response = self.client.get(reverse('projects:index'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "There are no projects")
        self.assertIn('2018', '2018-01')
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
        self.assertNotEqual(response.status_code, 302)
        self.assertEqual(response.template_name, ['projects/create.html'])
        self.assertContains(response, 'This field is required')

    def test_ajax_post(self):
        self.client.post(reverse('projects:create'), json.dumps({}), content_type='application/json')

    def test_create_filled(self):
        response = self.client.post(reverse('projects:create'), {'name': 'Test Project', 'description': 'The description of my test project.'})
        proj = Project.objects.get(name='Test Project')
        self.assertRedirects(response, reverse('projects:detail', kwargs={'pk': proj.id}))
        self.assertEqual(proj.description, 'The description of my test project.')
```
