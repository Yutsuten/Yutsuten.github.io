```javascript
global.app = new global.Vue({
  el: '#app',
  data: {
    scroll: 0
  },
  methods: {
    handleScroll: function () {
      this.scroll = window.scrollY;
    }
  },
  created () {
    document.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    document.removeEventListener('scroll', this.handleScroll);
  }
});
```
