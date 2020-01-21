---
---

{% raw %}

[Reference](https://vuejs.org/v2/guide/index.html)

### Variable rendering
```html
<div id="app">
  {{ message }}
</div>
```

```javascript
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
```

### Attribute binding
```html
<div id="app">
  <span v-bind:title="message">
    Hover me.
  </span>
</div>
```

```javascript
var app = new Vue({
  el: '#app',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
})
```

### Condition (if)
Any javascript is valid inside if or other vue directives
```html
<div id="app">
  <span v-if="flag">Visible text</span>
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

### Loop (for)
```html
<div id="app">
  <ol>
    <li v-for="todo in todos">
      {{ todo.text }}
    </li>
  </ol>
</div>
```

```javascript
var app = new Vue({
  el: '#app',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
})
```

### Event
```html
<div id="app">
  <p>{{ message }}</p>
  <button v-on:click="reverseMessage">Reverse Message</button>
  <button v-on:click="calculate(param1, param2)">Calculate</button>
</div>
```

```javascript
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
    calculate: function (param1, param2) {
      this.message = param1 + param2
    }
  }
})
```

### Input-variable binding
```html
<div id="app">
  <p>{{ message }}</p>
  <input v-model="message">
</div>
```

```javascript
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
```

{% endraw %}
