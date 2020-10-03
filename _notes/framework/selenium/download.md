---
---

## Download folder

```python
# Normal testing (opening browser)
options.add_experimental_option('prefs', {
    'download.default_directory': download_dir
})

# With --headless argument
browser.command_executor._commands['send_command'] = (
    'POST', '/session/$sessionId/chromium/send_command')
browser.execute('send_command', {
    'cmd': 'Page.setDownloadBehavior',
    'params': {'behavior': 'allow', 'downloadPath': download_dir}
})
```
