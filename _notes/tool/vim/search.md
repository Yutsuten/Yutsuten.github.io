---
---

## Search

There are some special patterns to change how the search will be performed,
or to match some special characters.

| Pattern | Description |
| --- | --- |
| `\v` | Enable full regex (very magic). |
| `\c` | Force the search to be case insensitive. |
| `\C` | Force the search to be case sensitive. |
| `\n` | Matches the new line character. |
| `\r` | Matches the carriage return character. |

To search for the NULL character (indicated by `^@`),
type `Ctrl+V 000` or `\%x00`.

```viml
/search_text
/search_text\c  "Case insensitive"
/search_text\C  "Case sensitive"

n   "next matching search pattern"
N   "previous matching search pattern"
```

### Highlight

```vim
:noh
:nohlsearch
```

## Find & Replace

On the find part,
the syntax is the same as described on the search section.

On the replace part,
the meaning of some patterns change so be careful.

| Pattern | Description |
| --- | --- |
| `\n` | Means the NULL character. |
| `\r` | Means a new line. |
| `\0` | The whole match. |
| `\1` | From 1 to 9, the Nth match. |

```viml
:s/before/after/g       "Current line"
:%s/before/after/g      "Every file"
:'<,'>s/before/after/g  "Only selection"
:%s/\v(\w+)/ \1 /g      "Captured group \1"
```
