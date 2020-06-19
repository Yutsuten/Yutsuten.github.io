---
---

## Search

```vim
/search_text
/search_text\c  "Case insensitive"
/search_text\C  "Case sensitive (default)"

n   "next matching search pattern"
N   "previous matching search pattern"
```

### Highlight

```vim
:noh
:nohlsearch
```

## Find & Replace

```vim
:%s/before/after/g      "All file"
:'<,'>s/before/after/g  "Only selection"
:%s/\v(\w+)/ \1 /g      "\v "very magic" mode, full regex. Captured group \1"
:%s/\(\w\+)/ \1 /g      "Without "very magic" mode, escape ( and )"
```
