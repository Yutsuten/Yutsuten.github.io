---
---

[Selenium Documentation](https://www.seleniumhq.org/docs/03_webdriver.jsp)

#### Setup
```shell
sudo apt install chromium-browser

# Download and move WebDriver to path
# https://sites.google.com/a/chromium.org/chromedriver/downloads
curl https://chromedriver.storage.googleapis.com/2.45/chromedriver_linux64.zip > chromedriver_linux64.zip
unzip chromedriver_linux64.zip
mv chromedriver ~/bin/chromedriver

pip install selenium
```

#### Script sample
```python
# main.py
from selenium import webdriver

browser = webdriver.Chrome()
browser.get('http://seleniumhq.org/')
```

#### Run
```shell
python main.py
```
