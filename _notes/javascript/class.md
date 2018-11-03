---
---

#### ClassName.js
```javascript
class MyCoolClass {
  constructor(param1, param2) {
    this.param1 = param1;
    this.param2 = param2;
  }

  publicFunction() {
    this._privateFunction(1, 1);
    console.log('Hello World!');
  }

  _privateFunction(a, b) {
    return a + b;
  }
}
```
