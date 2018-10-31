---
---

```python
# Module level
<%! from babel import Locale %>

# Template level
<% locale = Locale('en', 'US') %>
${locale.territories['US']}

# Control structures
% if x == 5:
  some output
% endif
```
