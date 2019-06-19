---
---

```ruby
my_array = [1, 2, 3]
my_array = (1..10).to_a

my_array[1]

my_array.sort! do |v1, v2|
  v1 <=> v2
end
my_array = my_array.sort_by do |key, value|
  value
end
my_array.reverse!
```
