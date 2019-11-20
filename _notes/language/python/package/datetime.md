---
---

### Helper modules
```shell
pip install python-dateutil
```

### Usage
```python
from django.utils import timezone
import datetime
from dateutil import tz, parser as dateparser

# Generating dates
mydate = datetime.datetime(2018, 5, 2, 10, 30)
datetime.datetime(2018, 6, 2).replace(tzinfo=timezone.utc)

fromtimestamp = datetime.datetime.fromtimestamp(1525069936)
fromisoformat = datetime.datetime.fromisoformat('2011-11-04 00:05:23.283')
fromisostring = datetime.datetime.strptime('2018-04-30', '%Y-%m-%d')

fromiso8601 = dateparser.parse('2018-04-30T06:37:10.751Z').replace(tzinfo=tz.tzutc()).astimezone(tz.tzlocal())
fromiso8601 = dateparser.parse('2018-04-30T06:37:10.751Z').replace(tzinfo=tz.gettz('UTC')).astimezone(tz.gettz('Asia/Tokyo'))

toiso8601 = mydate.isoformat()

# Generating strings
fulldate = mydate.strftime('%Y-%m-%d_%H-%M-%S')

now = datetime.datetime.now()
print(now)
print(now.year)
print(now.month)
print(now.day)

# Add a month to date
future_date = now.replace(day=1) + datetime.timedelta(days=32)
```
