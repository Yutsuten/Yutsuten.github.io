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

# Nesting is possible
element.find_element_by_id('boo')

# Parent element
parent = child.find_element_by_xpath('..')
```

### Interact with elements
```python
element.text
element.get_attribute('value')
element.click()
element.submit()  # If within a form

# Checkbox
element.is_selected()

# Select
from selenium.webdriver.support.ui import Select
select = Select(element)
select.options  # Return option elements
select.all_selected_options  # Return selected option elements
select.deselect_all()
select.select_by_index(0)
select.select_by_value('boo')
select.select_by_visible_text('boo')

# Date
browser.execute_script('document.getElementById("startDate").value="{}"'.format('2019-01-28'))

# Input text
from selenium.webdriver.common.keys import Keys
element.send_keys('seleniumhq' + Keys.RETURN)
element.send_keys(' ')  # May work as click()
element.send_keys(Keys.RETURN)  # May work as click()
```
