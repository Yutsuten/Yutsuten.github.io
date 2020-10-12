---
---

## Install

```shell
sudo apt install chromium-browser

# Download and move WebDriver to path
# https://sites.google.com/a/chromium.org/chromedriver/downloads
curl https://chromedriver.storage.googleapis.com/2.45/chromedriver_linux64.zip > chromedriver_linux64.zip
unzip chromedriver_linux64.zip
mv chromedriver ~/bin/chromedriver
```

## Options

```python
from selenium import webdriver

options = webdriver.ChromeOptions()
options.add_argument('--headless')  # Hidden browser
options.add_argument('--disable-infobars')
options.add_argument('--disable-extensions')
options.add_argument('--window-position=0,0')
options.add_argument('--window-size=1280,920')

browser = webdriver.Chrome(options=options)
```

## Download file

When opening browser normally:

```python
options.add_experimental_option('prefs', {
    'download.default_directory': download_dir
})
```

When using the `--headless` argument:

```python
browser.command_executor._commands['send_command'] = (
    'POST', '/session/$sessionId/chromium/send_command')
browser.execute('send_command', {
    'cmd': 'Page.setDownloadBehavior',
    'params': {'behavior': 'allow', 'downloadPath': download_dir}
})
```
