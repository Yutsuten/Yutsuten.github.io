---
---

```
-o  # Write data into file
```

### Download file from remote
```shell
curl "https://img.shields.io/badge/pylint-10-green.svg"
curl -o pylint.svg "https://img.shields.io/badge/pylint-10-green.svg"
```

### Put request
```shell
curl -X PUT \
  -H 'Content-Type:application/json' \
  -d '{"json":1,"encoded":{"key":"value"}}' \
  http://mysite.com
```
