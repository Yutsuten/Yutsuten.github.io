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
console.log(Object.assign({'Duck': 'Quack'}, myObject));
```

