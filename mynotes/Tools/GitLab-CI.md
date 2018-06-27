#### .gitlab-ci.yml
```yaml
# Django + mongo sample

image: python:3.6

services:
  - name: mongo:3.6  # On settings.py, host MUST be 'mongo'

before_script:
  - python -V
  - pip -V
  - pip install -r requirements.txt
  - python -c "import django; print(django.get_version())"

unit:
  stage: test
  only:
    - master
  script:
    - export DJANGO_SETTINGS_MODULE=app_name.deploy_settings.gitlab_ci
    - python manage.py test
```
