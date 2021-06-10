---
doc: https://docs.python.org/3/library/functions.html#open
update: 2021-06-10
---

## Usage

Open file and return a corresponding file object.

```python
open(path, mode)
```

| Mode | Description |
| ---- | ----------- |
| `r` | Open for reading (default). |
| `w` | Open for writing, truncating the file first. |
| `x` | Open for exclusive creation, failing if the file already exists. |
| `a` | Open for writing, appending to the end of the file if it exists. |
| `b` | Binary mode. |
| `t` | Text mode (default). |
| `+` | Open for updating (reading and writing). |

It may also be useful to check out the contents of `package > os` for system wide operations.

## Examples

Write an audio file:

```python
with open('sound.mp3', 'wb') as audio_file:
    audio_file.write(data)
```

Read a text file:

```python
with open(os.path.join('path', 'to', 'file.txt'), 'r') as f:
    all_text = f.read()
    lines_list = f.readlines()  # Keeps \n at the end
    each_line_as_element_in_list = f.readlines()
```

Append some text to a text file:

```python
with open('existing_file.txt', 'a') as f:
    f.write('Hello World')
```
