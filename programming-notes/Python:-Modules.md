---
layout: empty
---

{% raw %}

# Python: Modules

## Importing
```python
# Extern modules
import math
from math import sqrt
from math import *

# From project
from . import mymodule
```

## Common modules
```python
from datetime import datetime
now = datetime.now()
print now
print now.year
print now.month
print now.day

import math
print math.sqrt(25)

import random
random.randint(1, 6)
```

{% endraw %}
