---
---

## Basic

```javascript
let obj = {
   'cat' : 'Meow',
   'dog' : 'Bark'
}
obj.cat === obj['cat']
delete obj.cat  // delete key
for (let key in obj) {}
```

## Calls from Object class

```javascript
Object.prototype.hasOwnProperty.call(obj, key)
Object.assign(obj1, obj2)  // merge
Object.keys(obj)
Object.values(obj)
```

## Techniques

### Looping object keys

```javascript
for (let key in obj) {
  if (Object.prototype.hasOwnProperty.call(obj, key)) {}
}

Object.keys(obj).forEach(function (key) {})
```

### Shallow and deep object copy

```javascript
// Shallow
Object.assign({}, obj)

// Deep
JSON.parse(JSON.stringify(obj))

let $ = require('jquery')
$.extend(true, {}, oldObject)

let _ = require('lodash')
_.clonedeep(original)
```
