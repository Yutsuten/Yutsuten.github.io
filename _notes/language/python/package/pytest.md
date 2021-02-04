---
doc: https://docs.pytest.org/en/latest/contents.html
update: 2021-02-04
---

## Usage

```shell
pytest OPTIONS FILE_OR_DIR
```

| Option | Description |
| --- | --- |
| `-v` | Increate verbosity. |

Usage example:

```shell
pytest -vvv tests/unit_test.py::TestApp::test_hello
```

## Test creation

The file name and function name must begin with `test`.

```python
import pytest

class TestApp:
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

### Configuration

Create a file named `pytest.ini` with the following contents:

```ini
[pytest]
addopts = --cov=mymodule.script --cov-report=term-missing
testpaths = tests
```
