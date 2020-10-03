---
doc: https://selenium-python.readthedocs.io/waits.html
---

## Wait until element is available

```python
# Implicit
browser.implicitly_wait(10)  # seconds

# Explicit
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
wait = WebDriverWait(browser, 10)
wait.until(EC.presence_of_element_located((By.ID, 'myDynamicElement')))
wait.until(EC.element_to_be_clickable((By.ID,'foo')))
```
