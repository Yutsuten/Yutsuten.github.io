# Javascript: How to Simple ones

### Auto-scroll (no animation)
#### index.js
```javascript
// Scroll body to element
var bodyElement = document.scrollingElement || document.body;
bodyElement.scrollTop = $('#element-id').offset().top;

// Scroll element with scroll to end
var tableElement = document.getElementById(elementId);
tableElement.scrollTop = tableElement.scrollHeight - tableElement.clientHeight;
```

### Parse HTML entities
#### index.js
```javascript
function parseHtmlEntities(str) {
    return str.replace(/&#([0-9]{1,3});/gi, function(match, numStr) {
        var num = parseInt(numStr, 10);
        return String.fromCharCode(num);
    });
}
```

