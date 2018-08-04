{% raw %}

[Django Static Precompiler](http://django-static-precompiler.readthedocs.io/en/stable/)

## Install babel
```shell
yarn add babel-cli babel-preset-env --dev
```

#### .babelrc
```
{ "presets": ["env"] }
```

## Install Django Static Precompiler
```shell
pip install django-static-precompiler
```

#### settings.py
```python
INSTALLED_APPS = [
    # ...
    'static_precompiler'
]

STATICFILES_FINDERS = (
    'django.contrib.staticfiles.finders.FileSystemFinder',
    'django.contrib.staticfiles.finders.AppDirectoriesFinder',
    'static_precompiler.finders.StaticPrecompilerFinder',
)

STATIC_PRECOMPILER_COMPILERS = (
    ('static_precompiler.compilers.Babel', {
        'executable': os.path.join(BASE_DIR, 'node_modules', '.bin', 'babel'),
        'sourcemap_enabled': False,
        'plugins': None,
        'presets': None,
    }),
)

STATIC_PRECOMPILER_ROOT = os.path.join(BASE_DIR, 'static_root')
```

## Migration
```shell
python manage.py migrate static_precompiler
```

## Usage
```html
{% load compile_static %}

<script type="text/javascript" src="{% static 'js/script.es6'|compile %}"></script>
```

## Deploy compiled scripts
#### settings.py
```python
STATIC_PRECOMPILER_DISABLE_AUTO_COMPILE = True
```

#### Terminal
```shell
python manage.py compilestatic --settings myapp.deploy_settings.dev --delete-stale-files --ignore-dependencies &&
cp -rf static_root/COMPILED/ myapp/static/COMPILED &&
python manage.py collectstatic --settings myapp.deploy_settings.dev --noinput -v 3 || true &&
rm -rf myapp/static/COMPILED
```

## Gitlab CI
#### .gitlab-ci.yml
```yml
dev:
  stage: deploy
  image: python:3.6
  only:
    - master
  script:
    - python -V
    - pip -V
    - python -m venv venv
    - source venv/bin/activate
    - pip install -r requirements.txt
    - pip install -r requirements_deploy.txt
    - python -c 'import django; print(django.get_version())'
    - curl -sL https://deb.nodesource.com/setup_8.x | bash -
    - apt-get install -y nodejs
    - npm install
    - pip install awscli
    - aws configure set aws_access_key_id $AWS_ACCESS_KEY_ID
    - aws configure set aws_secret_access_key $AWS_SECRET_ACCESS_KEY
    - zappa update dev
    - python manage.py compilestatic --settings myapp.deploy_settings.dev --delete-stale-files --ignore-dependencies
    - cp -Rf static_root/COMPILED/ myapp/static/COMPILED
    - python manage.py collectstatic --settings myapp.deploy_settings.dev --noinput -v 3
    - zappa manage dev migrate
  cache:
    key: pip_deploy_cache
    paths:
      - venv/
      - node_modules/
```

{% endraw %}
