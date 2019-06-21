---
---

```ruby
my_name = "Taro"
my_int = 10
my_bool = true
my_nil = nil
my_symbol = :hello

my_name.to_sym  # to symbol
my_name.intern  # to symbol
my_symbol.to_s  # to string

# Check if an object can receive a method
my_var.respond_to?(:next)

# Add 1 to an integer
my_int.next

# Convert to string
my_int.to_s

# Assign the result to the variable
my_name.capitalize!

# Methods that return boolean
string_to_check.include? "substring"
```
