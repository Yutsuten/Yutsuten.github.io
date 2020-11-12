---
---

## Recommended configuration

Do not break lines on long lines matches (minified scripts!).

```shell
git config --global core.pager 'less -XFS'
```

## Usage

```shell
git grep OPTIONS PATTERN
```

| Option | Description |
| --- | --- |
| `--extended-regexp` `--basic-regexp` `-E` `-G` | Extended regexp (default). |
| `--fixed-strings` `-F` | Use fixed strings for patterns (don’t interpret pattern as a regex). |

## Examples

```shell
git grep some_text
git grep 'some text'

# With filter for files
git grep 'some text' -- '*.[ch]'  # Only on .c or .h files
```
