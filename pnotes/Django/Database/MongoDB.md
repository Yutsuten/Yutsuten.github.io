## Djongo

### Install
```shell
pip install djongo
```

### Configuration
#### settings.py
```python

DATABASES = {
    'default': {
        'ENGINE': 'djongo',
        'NAME': 'your-db-name',
        'HOST': 'localhost',
        'PORT': 27017,
        # If has authentication:
        'USER': 'db-username',
        'PASSWORD': 'password',
        'AUTH_SOURCE': 'db-name',
    }
}
```

### Push changes to database
```
python manage.py migrate
```

