---
---

Reference: [Link](http://matthewjamestaylor.com/blog/keeping-footers-at-the-bottom-of-the-page)

## HTML
```html
<div class="wrapper">
   <div class="header"></div>
   <div class="body"></div>
   <div class="footer"></div>
</div>
```

## CSS
```css
html,
body {
   margin: 0;
   padding: 0;
   height: 100%;
}
.wrapper {
   min-height: 100%;
   position: relative;
}
.header {  }
.body {
   padding-bottom: 60px;
}
.footer {
   position: absolute;
   bottom: 0;
   width: 100%;
   height: 60px;
}
```

