---
doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
---

## Try .. catch

```javascript
try {
  // some code
  throw new Error('myException')
} catch (error) {
  console.log(error.message)
  if (error instanceof TypeError) {
    // statements to handle TypeError exceptions
  } else if (error instanceof RangeError) {
    // statements to handle RangeError exceptions
  } else if (error instanceof EvalError) {
    // statements to handle EvalError exceptions
  } else {
    throw error
  }
}
```
