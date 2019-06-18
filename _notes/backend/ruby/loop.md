---
---

```ruby
while cond
  do_something
end

until cond
  do_something
end

# Include last number
for num in 1..10
  puts num
end

# Exclude last number
for num in 1...10
  puts num
end

loop do
  next if cond  # Same as continue, skip this interaction
  do_something
  break if cond
end

my_array.each do |item|
  do_something
end

my_hash.each do |key, value|
  do_something
end

10.times do
  do_something
end

# do end is the same as { }
```
