{% raw %}

# Javascript: Update search parameters

## Simple with no dependencies
### Functions
```javascript
/* Will not work on complex queries */
var searchQuery = {
    toObject: function(search) {
        var params = {};
        if (search.length > 0) {
            search.substr(1).split('&').forEach(pair => {
                [key, value] = pair.split('=');
                params[key] = value;
            });
        }
        return params;
    },
    toString: function(queryObject) {
        params = [];
        for (var key in queryObject) {
            if (queryObject.hasOwnProperty(key) && queryObject[key]) {
                params.push(key + '=' + queryObject[key]);
            }
        }
        if (params.length > 0) {
            return '?' + params.join('&');
        }
        return '';
    }
}
```

### Usage
```javascript
var query = searchQuery.toObject(location.search);
query.hello = 'world';
location.search = searchQuery.toString(query);
```

## Complete
### Dependency: query-string module
[GitHub](https://github.com/sindresorhus/query-string)

### Console
```
yarn add query-string
```

## Usage
```javascript
const queryString = require('query-string');

var query = queryString.parse(location.search);
query.rows = 10;
location.search = queryString.stringify(query);
```

{% endraw %}
