---
---

## Template string

```javascript
var text = `The value of a is ${a}`;
```

## Prototype methods

```javascript
// Substring
myString.substring(initialIndex, finalIndex); // Last parameter optional
myString.substr(initialIndex, numChars); // Last parameter optional

// Split
var lines = text.split(/\r?\n/);  // Split by lines
var items = text.split('-');

// Find
myString.indexOf('foo')  // -1 or index
myString.search(/foo*/)  // -1 or index
/foo*/.test(myString);  // true or false
let regex = new RegExp('foo*');
regex.test(myString);  // true or false

// Replace
myString.replace('-', ''); // Only first occurrence
myString.replace(/-/g, ''); // All occurrences

// Remove space from begin and end
myString.trim();
```
