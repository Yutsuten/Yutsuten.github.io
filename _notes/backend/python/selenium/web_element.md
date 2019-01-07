---
---

### Locating UI elements
```python
# find_element and find_elements are available
element = browser.find_element_by_id('foo')
element = browser.find_element_by_class_name('foo')
element = browser.find_element_by_tag_name('foo')
element = browser.find_element_by_name('foo')
element = browser.find_element_by_link_text('foo')  # text within a elements
element = browser.find_element_by_partial_link_text('foo')
element = browser.find_element_by_css('foo')
element = browser.find_element_by_xpath('foo')
```

### Interact with elements
```python
element.text
element.click()
element.submit()  # If within a form

# Select
from selenium.webdriver.support.ui import Select
select = Select(element)
select.deselect_all()
select.select_by_visible_text('boo')

# Input text
from selenium.webdriver.common.keys import Keys
element.send_keys('seleniumhq' + Keys.RETURN)
```
