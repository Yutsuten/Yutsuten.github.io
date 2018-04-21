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
data = {
    'field1': 'data1',
    'field2': 'data2'
}

response = requests.get(url, headers=headers)
response = requests.post(url, headers=headers, data=data)
response = requests.put(url, headers=headers, data=data)
response = requests.delete(url, headers=headers)

print(response.status_code)
print(response.json())
```

[Ref](http://docs.python-requests.org/en/master/)

