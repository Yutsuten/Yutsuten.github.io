---
---

### Translation into multiple languages
#### i18n.py
```python
import gettext
import os

localedir = os.path.join(os.path.abspath(os.path.dirname(__file__)), 'locale')
en = gettext.translation('mydomain', localedir, languages=['en'])
ja = gettext.translation('mydomain', localedir, languages=['ja'])

# Print in english
en.install()
print(en.gettext('Some string'))

# Print in japanese
ja.install()
print(ja.gettext('Some string'))
```

#### Terminal
```shell
pybabel extract --input-dirs='proj' --output-file='proj/locale/mydomain.pot'
```

- Create domain.po on `locale/en/LC_MESSAGES/` and `locale/ja/LC_MESSAGES/` using .pot as base.
- Write the translations

#### Terminal
```shell
pybabel compile --directory='proj/locale' --domain='mydomain'
```
