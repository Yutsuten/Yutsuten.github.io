---
---

{% raw %}

### Hide element while Vue is loading

v-cloak will remain on the element until the associated Vue instance finishes compilation.

```html
<div id="app">
  <div v-cloak>
    Hello {{ name }}
  </div>
</div>

<style>
  [v-cloak] {
    display: none;
  }
</style>
```

{% endraw %}
