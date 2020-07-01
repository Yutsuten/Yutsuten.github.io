---
doc: https://docs.pytest.org/en/latest/contents.html
---

## Test file

The file name and function name must begin with `test`.

```python
import pytest

class TestHello:
  def setup_method(self):
    pass

  def test_hello(self):
    assert 'Hello' != 'World'

  def teardown_method(self):
    pass
```

## Configuration file

Create a file named `pytest.ini` with the following contents:

```ini
[pytest]
addopts = --cov=mymodule.script --cov-report=term-missing
testpaths = tests
```
