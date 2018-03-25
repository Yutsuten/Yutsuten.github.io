---
layout: empty
---

{% raw %}

# Python: Classes

```python
class MyClass(object):
  property = 10

  def __init__(self, parameter1):
    self.property = parameter1

  # Used to print the class
  def __repr__(self):
    return '%.2f' % (self.property)

  def customMethod(self, parameter):
    return self.property * parameter


myclass = MyClass(5)
print(myclass.customMethod(10)) # => 50
```

{% endraw %}
