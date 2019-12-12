---
---

### Debug script in loop

```shell
python -m pdb -c continue path/to/script.py
```

### Adding breakpoints

```python
# ...
breakpoint()  # Python 3.7+
import pdb; pdb.set_trace()
# ...
```

### Enter post-mortem debugging

```python
import pdb; pdb.pm()
```
