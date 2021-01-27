---
doc: https://docs.python.org/3/library/unittest.mock.html
update: 2021-01-27
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
    assert sum.call_count == 3
    sum.call_args
    sum.call_args_list
```

### Mock file

```python
def test_open_file(self):
    mock_open = mock.mock_open(read_data='file_content')
    with mock.patch('builtins.open', mock_open):
        with open('/some/path', 'r') as text_file:
            text_file.read()  # Returns 'file_content'
    mock_open.assert_any_call('/some/path', 'r')
    mock_open().write.call_args.args
```

### Mock module

```python
import sys
sys.modules['some_module'] = mock.MagicMock()
```

## Tips

Mocking can sometimes be tricky.
There are situations where it *should* work, but doesn't.

For example, mocking your own import instead the original module may help.
Let's say your module is at `a.b` and it imports `x.y.z`.
You want to mock `z`.
The result of mocking may be like this:

```python
@mock.patch('x.y.z')  # Does not work...
@mock.patch('a.b.z')  # Works!
```
