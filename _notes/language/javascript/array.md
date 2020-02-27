---
doc: https://developer.mozilla.org/docs/Web/JavaScript/Reference
---

## Basic

```javascript
let arr = [2, 3, 5]
```

## Methods

```javascript
arr.push(element1, ..., elementN)
arr.pop()    // last element
arr.shift()  // first element
arr.splice(startIndex, deleteCount)
arr.indexOf(element)
arr.join(',')
arr.includes(element)
arr1.concat(arr2)

arr.map(n => n * 2)
arr.reduce((accumulator, current) => accumulator + current, initialValue)
arr.forEach((currentValue, index, array) => doSomething())
arr.find(element => element > 4)  // first found element
arr.filter(element => element > 4)  // array that satisfies the condition
```
