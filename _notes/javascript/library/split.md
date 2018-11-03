---
---

Download: [Split.js](https://github.com/nathancahill/Split.js)

#### index.html
```html
<div class="wrapper">
    <div id="one">#one</div>
    <div id="two">#two</div>
</div>
```

#### index.css
```css
.wrapper {
    background-color: gray;
    height: 400px;
}
#one {
    background-color: blue;
}
#two {
    background-color: green;
}
.gutter {
    background-color: black;
}
.gutter.gutter-vertical {
    cursor: ns-resize;
}
```

#### index.js
```javascript
Split(['#one', '#two'], {
    direction: 'vertical'
});
```

