{% raw %}

# Javascript: Update search parameters

## Requirement: query-string module
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
