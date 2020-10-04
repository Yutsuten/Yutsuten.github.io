---
---

## Read and write files

```python
with open('sound.mp3', 'wb') as audio_file:
    audio_file.write(data)

with open(os.path.join('path', 'to', 'file.txt'), 'r') as f:
    all_text = f.read()
    lines_list = f.readlines()  # Keeps \n at the end
    each_line_as_element_in_list = f.readlines()

with open('existing_file.txt', 'a') as f:
    f.write('Hello World')
```

It may also be useful to check out the contents of `package > os` for system wide operations.
