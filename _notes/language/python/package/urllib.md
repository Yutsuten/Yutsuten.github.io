---
---

## Parsing and unparsing URL

```python
import urllib.parse

url = urllib.parse.urlparse(my_url)
url_query = urllib.parse.parse_qs(url.query)

new_path = 'my/new/path'
del url_query['some_qparam']
new_qs = urllib.parse.urlencode(url_query, doseq=True)

new_url = urllib.parse.ParseResult(url.scheme, url.netloc, new_path, url.params, new_qs, url.fragment)
new_my_url = urllib.parse.urlunparse(new_url)
```
