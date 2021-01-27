---
doc: https://docs.pytest.org/en/latest/contents.html
update: 2021-01-27
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

  @pytest.mark.skip(reason='Not implemented')
  def test_incomplete(self):
    pass

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
