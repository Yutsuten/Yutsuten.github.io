---
---

### Split

#### index.js
```javascript
// Split by lines
var lines = text.split(/\r?\n/);
```

### Simple methods
```javascript
// Substring
myString.substring(initialIndex, finalIndex); // Last parameter optional
myString.substr(initialIndex, numChars); // Last parameter optional

// Find
myString.indexOf('foo')  // -1 or index
myString.search(/foo*/)  // -1 or index
/foo*/.test(myString);  // true or false
let regex = new RegExp('foo*');
regex.test(myString);  // true or false

// Replace
myString.replace('-', ''); // Only first occurrence
myString.replace(/-/g, ''); // All occurrences

// Split (string into array)
myString.split('-');

// Remove space from begin and end
myString.trim();
```

