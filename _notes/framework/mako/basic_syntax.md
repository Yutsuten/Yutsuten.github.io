---
update: 2021-06-11
---

On module level:

```
<%! from babel import Locale %>
```

On template level:

```
<% locale = Locale('en', 'US') %>
${locale.territories['US']}
```

Using control structures:

```
% if x == 5:
  some output
% endif
```
