{% raw %}

# Django: Setup Internationalization and localization

Ref: [link](https://docs.djangoproject.com/en/2.0/topics/i18n/)

#### settings.py
```python
# Create locale folder in root and add this to settings:
LOCALE_PATHS = [
    os.path.join(BASE_DIR, 'locale'),
]
```

#### terminal
```shell
# Install gettext:
(Mac)$ brew install gettext
(Mac)$ brew link --force gettext
```

#### template.html
```html
{% load i18n %}
{% trans "Import CSV" %}
```

#### terminal
```shell
# Create message files (ignores venv folder)
python manage.py makemessages -l en -i venv
python manage.py makemessages -l ja -i venv
```

#### locale/ja/LC_MESSAGES/django.po
```python
msgid "Import CSV"
msgstr "CSVインポートー"
```

#### terminal
Always when there are changes in translations, run this:
```
python manage.py compilemessages
```

{% endraw %}
