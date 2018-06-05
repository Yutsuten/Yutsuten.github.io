### views.py
```python
import os


def write_binary(data):
    with open('sound.mp3', 'wb') as audio_file:
        audio_file.write(data)

def read_text(data):
    with open(os.path.join('path', 'to', 'file.txt'), 'r') as f:
        all_text = f.read()
        each_line_as_element_in_list = f.readlines()
```

