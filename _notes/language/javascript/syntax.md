---
doc: https://developer.mozilla.org/docs/Web/JavaScript/Reference
update: 2021-04-19
---

## Basic

### Built-in functions

```javascript
typeof myVar;  // 'string', 'number', 'boolean', 'object', 'undefined'
isNaN(myVar);
```

#### Type conversion

```javascript
const num = parseInt('10');
const dec = parseFloat('3.1416');
const bool = Boolean(0);  // !!0 - true for empty lists and objects!
```

#### Timers

Run once after a while:

```javascript
let timeoutId = setTimeout(callback, timeInMs);
clearTimeout(timeoutId);
```

Run repeatedly:

```javascript
let intervalId = setInterval(callback, timeInMs);
clearInterval(intervalId);
```

## Flow control

### Condition

```javascript
if (10 < 20) {
  doSomething();
} else if (10 > 20) {
  doSomething();
} else {
  doSomething();
}
```

### Switch

```javascript
switch (myExpr) {
  case '1':
    doSomething();
    break;
  case '2':
    doSomething();
    break;
  default:
    doSomething();
    break;
}
```
