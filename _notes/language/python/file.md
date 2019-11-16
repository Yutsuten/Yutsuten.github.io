---
---

```python
import os

os.path.exists('sound.mp3')
os.path.isfile('sound.mp3')
os.path.isdir('somefolder')

with open('sound.mp3', 'wb') as audio_file:
    audio_file.write(data)

with open(os.path.join('path', 'to', 'file.txt'), 'r') as f:
    all_text = f.read()
    each_line_as_element_in_list = f.readlines()

with open('existing_file.txt', 'a') as f:
    f.write('Hello World')
```
