---
doc: https://developer.mozilla.org/docs/Web/JavaScript/Reference
update: 2021-04-20
---

## Usage

Run code on page load:

```javascript
function onWindowLoad () {
  console.log('Page images, styles, frames are fully loaded.');
}
window.onload = onWindowLoad;
window.addEventListener('load', onWindowLoad);

window.addEventListener('DOMContentLoaded', function () {
  console.log('DOM fully loaded and parsed.');
});
```

### Element manipulation

```javascript
document.activeElement;

document.getElementById('foo');
document.getElementsByClassName('foo');
document.getElementsByName('foo');
document.getElementsByTagName('foo');

// Size of an element and its position relative to the viewport
element.getBoundingClientRect();
```
