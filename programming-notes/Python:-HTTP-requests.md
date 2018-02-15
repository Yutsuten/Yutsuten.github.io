{% raw %}

# HTTP requests

## Module
```
pip install requests
```

## Usage
### script.py
```python
import requests

url = 'https://site.com/api/request'
headers = {
    'x-api-user': '12345678-90ab-416b-cdef-1234567890ab',
    'x-api-key': '12345678-90ab-416b-cdef-1234567890ab'
}
response = requests.get(url, headers=headers)
print(response.status_code)
print(response.json())
```

{% endraw %}
