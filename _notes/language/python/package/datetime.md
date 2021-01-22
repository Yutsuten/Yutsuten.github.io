---
doc: https://docs.python.org/3/library/datetime.html
---

## Usage

```python
from datetime import datetime, timedelta, timezone
```

### Generation

```python
now = datetime.now()  # May specify TZ, defaults to None
nowutc = datetime.utcnow()

mydate = datetime(2018, 5, 2, 10, 30)
fromtimestamp = datetime.fromtimestamp(1525069936)
fromisoformat = datetime.fromisoformat('2011-11-04 00:05:23.283')
fromisostring = datetime.strptime('2018-04-30', '%Y-%m-%d')

mydate.year
mydate.month
mydate.day
```

### Date to string

```python
toiso8601 = mydate.isoformat()
fulldate = mydate.strftime('%Y-%m-%d_%H-%M-%S')
```

### Manipulation

Get a date with the next month
(See also `dateutil.relativedelta`).

```python
future_date = mydate.replace(day=1) + timedelta(days=32)
```

Difference between dates.

```python
difference = datetime.now() - datetime(2020, 1, 1)  # timedelta object
seconds = difference.total_seconds()
```

### Timezone

Replace timezone (does not change the time itself):

```python
UTC = timezone.utc
JST = timezone(timedelta(hours=9))

utcdate = mydate.replace(tzinfo=UTC)
jstdate = utcdate.astimezone(JST)
```
