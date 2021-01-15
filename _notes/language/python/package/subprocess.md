---
doc: https://docs.python.org/3/library/subprocess.html
---

## Run in foreground

Run the command described by args.
Wait for command to complete, then return a CompletedProcess instance.

```python
import subprocess

completed_process = subprocess.run(['xbacklight', '-get'], text=True, capture_output=True)
output = completed_process.stdout.strip()
```

## Run in background

*Note: This note was originally written for python 2,
so I'm not sure if it still works.*

Instantiate `Popen`, wait with `popen.communicate()`,
kill it with `popen.kill()`,
and get the return code with `popen.poll()` (None if haven't finished yet).
