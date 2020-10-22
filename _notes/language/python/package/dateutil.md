---
---

The dateutil module provides powerful extensions to the standard datetime module.

## Install

```shell
pip install python-dateutil
```

## Usage

### Timezone

```python
from dateutil import tz, parser as dateparser

UTC = tz.tzutc()  # tz.gettz('UTC')
JST = tz.gettz('Asia/Tokyo')
```

### Dateparser

```python
mydate = dateparser.parse('2018-04-30T06:37:10.751Z')
```
