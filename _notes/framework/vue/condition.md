---
doc: https://jp.vuejs.org/v2/guide/conditional.html
---

## Conditional rendering

```html
<div id="app">
  <span v-if="flag">Visible text</span>
  <span v-else>Something else</span>
</div>
```

```javascript
var app = new Vue({
  el: '#app',
  data: {
    flag: true
  }
})
```
