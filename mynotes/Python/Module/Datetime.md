### Helper modules
```shell
pip install python-dateutil
```

### Usage
```python
import datetime
from dateutil import tz, parser as dateparser

fromtimestamp = datetime.datetime.fromtimestamp(1525069936)
fromisostring = datetime.datetime.strptime('2018-04-30', '%Y-%m-%d')

fromiso8601 = dateparser.parse('2018-04-30T06:37:10.751Z').replace(tzinfo=tz.tzutc()).astimezone(tz.tzlocal())
fromiso8601 = dateparser.parse('2018-04-30T06:37:10.751Z').replace(tzinfo=tz.gettz('UTC')).astimezone(tz.gettz('Asia/Tokyo'))

now = datetime.datetime.now()
print(now)
print(now.year)
print(now.month)
print(now.day)
```
