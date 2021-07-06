---
doc: https://docs.pytest.org/en/latest/how-to/fixtures.html
update: 2021-07-06
---

## Usage

### Creating custom fixtures

```python
import pytest

@pytest.fixture
def some_list():
  return [1, 2, 3]
```

### Default fixtures

Asserting log messages
(make sure `logger.propagate = True`):

```python
def test_logging(caplog):
  run_stuff()
  assert 'Log message content' in caplog.text
```
