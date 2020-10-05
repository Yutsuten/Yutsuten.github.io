---
---

## Usage

Adding the CSRF to the post so django accepts the request.

### With js-cookie dependency

```javascript
var Cookies = require('js-cookie');

data = {
    field1 = true,
    csrfmiddlewaretoken: Cookies.get('csrftoken')
}
$.post(url, data, response => {
    console.log(response);
});
```

### No dependencies

```javascript
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

data = {
    field1 = true,
    csrfmiddlewaretoken: getCookie('csrftoken')
}
$.post(url, data, response => {
    console.log(response);
});
```
