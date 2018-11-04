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

    @mock.patch('calc.Calculator.sum')
    def test_sum_return_value(self, sum):
        sum.return_value = 9

        answer = self.calc.sum(2, 4)
        self.assertEqual(answer, 9)

    @mock.patch('calc.Calculator.sum')
    def test_sum_side_effect(self, sum):
        sum.side_effect = mock_sum

        answer = self.calc.sum(2, 4)
        self.assertEqual(answer, 6)
```
