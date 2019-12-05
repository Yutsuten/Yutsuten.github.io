---
---

```python
import re

iter_obj = re.finditer(r'<img.*?[^>]>', text)
match_obj = re.search(r'upload_id=(\d+)', html_tag)

match_obj.group(0)  # The whole match
match_obj.group(1)  # Capturing group 1
```
