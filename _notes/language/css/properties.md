---
---

## Common

### Positioning

```css
display: block;
position: relative;
height: 0;
width: 0;
top: 0;
bottom: 0;
left: 0;
right: 0;
```

### Spacing

```css
margin: 0 0 0 0;
padding: 0 0 0 0;
overflow: auto;
```

### Colouring

```css
color: #FFF;
background-color: #333;
background: linear-gradient(to bottom, #FFF 0%, #000 100%);
border-style: dotted;
border-width: 3px;
border-color: blue;
border-radius: 3px;
box-shadow: 0 0 0 #000;
outline: none;
```

### Font

```css
font-size: 1.2rem;
font-weight: 400;
text-decoration: none;
white-space: pre-wrap;
word-wrap: break-word;
```

### Special

```css
cursor: default;
list-style-type: disclosure-closed;
```

## Page layout example

Creating a page with a header and footer.

### HTML

```html
<div class="wrapper">
   <div class="header"></div>
   <div class="body"></div>
   <div class="footer"></div>
</div>
```

### CSS

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
