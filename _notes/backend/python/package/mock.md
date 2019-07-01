---
---

[Ref](https://semaphoreci.com/community/tutorials/getting-started-with-mocking-in-python)

#### calc.py
```python
import time

class Calculator:
    def sum(self, a, b):
        time.sleep(10)
        return a + b
```

#### tests.py
```python
from unittest import TestCase, mock
from calc import Calculator

def mock_sum(a, b):
      return a + b

class TestCalc(TestCase):
    def setUp(self):
        self.calc = Calculator

    @mock.patch('calc.requests')
    @mock.patch('calc.Calculator.sum')
    def test_sum_return_value(self, sum, mock_requests):
        sum.return_value = 9

        mock_requests.get.return_value.content = 'Content of the request'
        # Mocks requests.get().content

        answer = self.calc.sum(2, 4)
        self.assertEqual(answer, 9)

    @mock.patch('calc.Calculator.sum')
    def test_sum_side_effect(self, sum):
        sum.side_effect = mock_sum

        answer = self.calc.sum(2, 4)
        self.assertEqual(answer, 6)

    @mock.patch('calc.Calculator.sum', side_effect=Exception('Test'))
    def test_sum_side_effect(self, sum):
        answer = self.calc.sum(2, 4)  # raises exception
        self.assertEqual(answer, 6)

    @mock.patch('calc.Calculator.sum')
    def test_call_count(self, sum):
        sum.assert_called_with(1)  # Asserts the last call's parameters
        sum.assert_any_call(1)     # Asserts any call's parameters
        sum.assert_any_call(2)     # Asserts any call's parameters

        assert sum.call_count == 3
```
