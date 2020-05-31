---
---

```python
class MyClass(object):
  property = 10

  def __init__(self, parameter1):
    self.property = parameter1

  # Used to print the class
  def __repr__(self):
    return '%.2f' % (self.property)

  @staticmethod  # Decorator
  def my_static_method(parameter):
    return parameter + 1

  def custom_method(self, parameter):
    return self.property * parameter

  # Destructor
  def __del__(self, instance):
    del self.property


class InheritanceExample(MyClass):
  parameter2 = None

  def __init__(self, parameter1, parameter2)
    MyClass.__init__(self, parameter1)  # super().__init__(parameter1)
    self.parameter2 = parameter2

  # Python 2
  def custom_method(self, parameter):
    self(InheritanceExample, self).custom_method(parameter)

  # Python 3
  def custom_method(self, parameter):
    self().custom_method(parameter)


myclass = MyClass(5)
print(myclass.customMethod(10)) # => 50

# Access named attributes from string
getattr(x, 'foobar')       # Equivalent to x.foobar
setattr(x, 'foobar', 123)  # Equivalent to x.foobar = 123
```
