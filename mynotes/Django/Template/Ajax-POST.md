Adding the CSRF to the post so django accepts the request.

### With js-cookie dependency
#### script.js
```javascript
var Cookies = require('js-cookie');

data = {field1 = true}
$.post(url, {data, 'csrfmiddlewaretoken': Cookies.get('csrftoken')}, response => {
    console.log(response);
});
```

### No dependencies
#### script.js
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

data = {field1 = true}
$.post(url, {data, 'csrfmiddlewaretoken': getCookie('csrftoken')}, response => {
    console.log(response);
});
```

