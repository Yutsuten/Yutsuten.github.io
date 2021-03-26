---
update: 2021-03-26
---

## Declaration

```javascript
var globalVar = 'Globally or function scoped';
let localVar = 'Block scoped';
const localConst = 'Block scoped';
```

Global variables can be accessed through the `window` variable.

```javascript
window.hasOwnProperty('globalVar');
window.globalVar;
```
