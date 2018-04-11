{% raw %}

# Django: Template Ajax POST
Adding the CSRF to the post so django accepts the request.

### script.js
```javascript
var Cookies = require('js-cookie');

data = {field1 = true}
$.post(url, {
    data,
    'csrfmiddlewaretoken': Cookies.get('csrftoken')
  }, function(response) {
    console.log(response);
});
```

{% endraw %}
