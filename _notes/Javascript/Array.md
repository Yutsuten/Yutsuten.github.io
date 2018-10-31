---
---

### Check if contains value
#### index.js
```javascript
var myArray = [2, 3, 5]
console.log(myArray.indexOf(3) != -1)
```

### Prototype methods
#### index.js
```javascript
var list = [2, 3, 5, 7];
var initialValue = 1000; // On reduce, if no initial value is passed, the first value in the array is used
var doubles = list.map(num => num * 2); // [4, 6, 10, 14]
var sum = list.reduce((accumulator, current) => accumulator + current, initialValue); // 1017

list.concat(doubles); // Concat two or more arrays
```

### Simple methods
```javascript
// Remove element by index
array.splice(index, 1);

// Join values into a string
var list = ['car', 'bike', 'cookie'];
list.join(' and ');
// Returs: car and bike and cookie
```

