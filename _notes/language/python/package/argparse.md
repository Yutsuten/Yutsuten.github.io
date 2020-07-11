---
---

[Documentation](https://docs.python.org/3/library/argparse.html)

Easily parse command line arguments to a python application.

### Usage
```python
import argparse

parser = argparse.ArgumentParser(description='Optional app description')
parser.add_argument('--input', type=str, help='input file')
parser.add_argument('--switch', action='store_true', help='a switch that holds true or false')
args = parser.parse_args()

print(args.input)
print(args.switch)
```
