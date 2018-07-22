[Reference](https://vuejs.org/v2/guide/index.html)
### Install
```html
<!-- Development version -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<!-- Production version -->
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
```

### Change delimiters
```javascript
Vue.options.delimiters = ['[[', ']]'];
```

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

