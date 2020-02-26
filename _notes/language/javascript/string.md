---
---

## Basic

```javascript
let str1 = 'Some string'
let str2 = `Value of a is ${a}`  // Template string [ES6]

// Regex
let reg1 = /[abc]/
let reg2 = new RegExp('[abc]')
```

## Methods

```javascript
str.substring(beginIndex, endIndex)
str.slice(beginIndex, endIndex)
str.substr(beginIndex, numChars)
str.trim()
str.split(separator)
str.replace(pattern, newPattern)  // first occurence
str.charAt(index)
str.toUpperCase()
str.toLowerCase()

// Find index
str.indexOf(text)
str.search(reg)

// Existence of pattern
reg.test(text)
```

## Techniques

### Split by lines

```javascript
let lines = text.split(/\r?\n/)
```

### Replace all

```javascript
let reg = /-/g  // Must have the g option
text.replace(reg, '')

text.split('-').join('')
```

### Capitalize

```javascript
text.charAt(0).toUpperCase() + text.slice(1)
```
