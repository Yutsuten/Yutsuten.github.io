---
---

## Recommended configuration

Do not break lines on long lines matches (minified scripts!).

```shell
git config --global core.pager 'less -XFS'
```

## Usage

```shell
git grep some_text
git grep 'some text'

# With filter for files
git grep 'some text' -- '*.[ch]'  # Only on .c or .h files
```
