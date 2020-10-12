---
---

## Javascript

Run some arbitrary javascript and optionally return its value.

```python
browser.execute_script('some_javascript()')
element = browser.execute_script('document.getElementById("foo")')
```

## Screenshot

Both are the same, therefore both should work.

```python
browser.save_screenshot('/path/to/screenshot.png')
browser.get_screenshot_as_file('/path/to/screenshot.png')
```
