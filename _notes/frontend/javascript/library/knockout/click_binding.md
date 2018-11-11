---
---

### Prevent the event from bubbling
- [Documentation](https://knockoutjs.com/documentation/click-binding.html)

```
<div data-bind="click: myDivHandler">
    <button data-bind="click: myButtonHandler, clickBubble: false">
        Click me
    </button>
</div>
```
