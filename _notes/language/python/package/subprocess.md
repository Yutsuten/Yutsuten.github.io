---
doc: https://docs.python.org/2.7/library/subprocess.html#module-subprocess
---

## A subprocess that can be cancelled

Instantiate `Popen`, wait with `popen.communicate()`,
kill it with `popen.kill()`,
and get the return code with `popen.poll()` (None if haven't finished yet).
