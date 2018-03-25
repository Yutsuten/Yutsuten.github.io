---
layout: empty
---

{% raw %}

# Django: Install and project setup

## Install Django
#### Terminal
```
sudo pip3 install Django
```

## Project setup
#### Terminal
```
django-admin startproject projectname
cd projectname/
python3 -m venv venv
source venv/bin/activate
pip install Django
sudo apt-get install python-dev default-libmysqlclient-dev
pip install mysqlclient
```

#### projectname/settings.py
```python
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
        'DIRS': [os.path.join(BASE_DIR, 'templates')],
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

#### Terminal
```
python manage.py migrate
```

{% endraw %}
