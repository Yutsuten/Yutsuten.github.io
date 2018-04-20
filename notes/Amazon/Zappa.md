# Amazon: Zappa

## Settings for big projects (>50MB)
### Flask project

#### console
```
pip install packaging setuptools
```

#### zappa_settings.json
```json
{
  "dev": {
    "app_function": "main.app",
      "aws_region": "ap-northeast-1",
      "profile_name": "default",
      "s3_bucket": "bucket-name",
      "runtime": "python3.6",
      "slim_handler": true,
      "use_precompiled_packages": false,
      "environment_variables": {
        "PYTHON_EGG_CACHE": "/tmp"
      },
      "events" : [{
        "function": "events.bucket_file_added",
        "event_source" : {
          "arn" : "arn:aws:s3:::bucket-name",
          "events" : [
            "s3:ObjectCreated:*"
          ]
        }
      }]
  }
}
```

## Serve static files on S3
### Django project

#### console
```
pip install django-storages boto
```

#### settings.py
```python
INSTALLED_APPS = [
  # ...
  'storages',
]

AWS_STORAGE_BUCKET_NAME = 'zappa-static'
AWS_S3_CUSTOM_DOMAIN = '%s.s3.amazonaws.com' % AWS_STORAGE_BUCKET_NAME
STATIC_URL = "https://%s/" % AWS_S3_CUSTOM_DOMAIN
STATICFILES_STORAGE = 'storages.backends.s3boto.S3BotoStorage'
```

#### zappa-update.sh

Reference: [link](https://edgarroman.github.io/zappa-django-guide/walk_database/)

```
python manage.py collectstatic --noinput &&
zappa update dev &&
zappa manage dev migrate
```

#### console
```
./zappa-update.sh
```

