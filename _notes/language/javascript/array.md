---
doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
update: 2021-04-19
---

## Basic

```javascript
let arr = [2, 3, 5];
arr.length;
arr = Array(size).fill(value);
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
arr1.concat(arr2)  // does not modify arr1 and arr2

arr.map(n => n * 2)
arr.reduce((accumulator, current) => accumulator + current, initialValue)
arr.forEach((currentValue, index, array) => doSomething())
arr.find(element => element > 4)  // first found element
arr.filter(element => element > 4)  // array that satisfies the condition

Array.isArray(myvar)
```

## Example

Check if the array has elements:

```javascript
if (Array.isArray(myvar) && myvar.length) {}
```
