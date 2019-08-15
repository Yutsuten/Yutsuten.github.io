---
---

#### index.js
```javascript
var myObject = {
   'Cow' : 'Moo',
   'Cat' : 'Meow',
   'Dog' : 'Bark'
};

// Delete key
delete myObject['Cow'];

// Loop all keys
for (var key in myObject) {
    if (myObject.hasOwnProperty(key)) {
        console.log(key + ': ' + myObject[value]);
    }
}

// Merge objects
var result = Object.assign({'Duck': 'Quack'}, myObject);

// Shallow object copy
result = Object.assign({}, myObject);

// Deep object copy
result = JSON.parse(JSON.stringify(myObject));
$.extend(true, {}, oldObject);

var _ = require('lodash')
var deepcloned = _.clonedeep(original)
```
