---
doc: https://docs.python.org/3/library/unittest.mock.html
---

## Usage

Import from `unittest.mock`,
or from `mock` if installed separately.

### Set value

```python
@mock.patch('calc.Calculator.sum')
def test_sum_return_value(self, sum):
    sum.return_value = 9
```

### Side effect

```python
def sum(a, b):
    if a > b:
        return 5
    return 10

@mock.patch('mymodule.sum')
def test_sum_side_effect(self, mock_sum):
    mock_sum.side_effect = sum

@mock.patch('mymodule.sum', side_effect=Exception())
def test_sum_side_effect(self, mock_sum):
    mymodule.sum()  # Will raise Exception()
```

### Assert call

```python
@mock.patch('calc.Calculator.sum')
def test_call_count(self, sum):
    sum.assert_called_with(1)  # Asserts the last call's parameters
    sum.assert_any_call(1)     # Asserts any call's parameters
    sum.assert_any_call(2)     # Asserts any call's parameters
    assert sum.call_count == 3
```

### Mock file

```python
@mock.patch('builtins.open', mock.mock_open(read_data='file_content'))
def test_open_file(self):
    with open('/some/path', 'r') as text_file:
        text_file.read()  # Returns 'file_content'
```

### Mock module

```python
import sys
sys.modules['some_module'] = mock.MagicMock()
```
