---
---

## Install Django

```
pip3 install Django
```

## Project setup

```shell
django-admin startproject projectname
cd projectname/
python3 -m venv venv
source venv/bin/activate
pip install Django
sudo apt-get install python-dev default-libmysqlclient-dev
pip install mysqlclient
```

```python
# projectname/settings.py
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'db_name',
        'USER': 'root',
        'PASSWORD': '',
        'HOST': 'localhost',
    }
}
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

TIME_ZONE = 'Asia/Tokyo'
```

```shell
python manage.py migrate
```
