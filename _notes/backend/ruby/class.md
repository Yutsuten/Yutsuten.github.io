---
---

```ruby
class BaseClass
  def initialize(name)
    @name = name
  end
  def do_something(param1, param2)
    # ...
  end
  def BaseClass.class_method:
    # ...
  end
end

instance = MyClass.new("Taro")

# Inheritance
class DerivedClass < BaseClass
  # Some stuff!
  def do_something(param1, param2)
    super(param1, param2)
    # ...
  end
end
```
