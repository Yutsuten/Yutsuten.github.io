---
---

### Yield
```ruby
def method_name
  do_something
  yield
  do_something
end

method_name { puts "Runs on yield keyword" }

# With parameters
def method_name(name)
  do_something
  yield('Taro')
  yield(name)
  do_something
end

method_name { |n| puts "Hello #{n}" }
```

### Proc
```ruby
say_hello = Proc.new { |n| puts "Hello #{n}" }
method_name &say_hello
```
