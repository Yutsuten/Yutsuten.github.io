---
doc: https://learnvimscriptthehardway.stevelosh.com/chapters/27.html
update: 2021-02-06
---

## Basic usage

```vim
let mystr = 'somestring'
let mystr = mystr[-10]
```

## Operations

```vim
let mylist = split(mystr)       "Space is used by default"
let mylist = split(mystr, ',')
```

## Comparison

By default, the comparison case-sensitiveness depends on user configuration.

Append `#` to make it case-sensitive,
or `?` to make it case-insensitive.

```vim
mystr ==# 'text'
mystr !=# 'text'
```

## Functions

```vim
echo len(mystr)
echo tolower('Foo')  " => 'foo'"
echo toupper('Foo')  " => 'FOO'"
```
