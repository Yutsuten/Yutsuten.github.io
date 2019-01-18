---
---

#### index.js
```javascript
document.getElementById('foo')
document.getElementsByClassName('foo')
document.getElementsByName('foo')
document.getElementsByTagName('foo')

typeof my_variable;
// 'string'
// 'number'
// 'boolean'
// 'object' (array is object too)
// 'undefined'

isNaN(my_variable);

// Run a code once after some time
var timeoutId = setTimeout(() => {
    console.log('Hello');
}, 1000);
clearTimeout(timeoutId);

// Repeat a code on fixed interval
var intervalId = setInterval(() => {
    console.log('Hello');
}, 1000);
clearInterval(intervalId);
```
