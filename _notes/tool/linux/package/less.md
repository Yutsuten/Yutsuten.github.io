---
update: 2021-06-08
---

## Usage

```shell
less OPTIONS FILE
```

| Option | Description |
| --- | --- |
| `-n` | Supress line numbers |
| `-S` | Chop long lines |
| `-X` | Do not clean the screen |
| `-F` | Quit if one screen |
| `-R` | Show colors |
| `+` | Automatically run commands |

### Commands

| Command | Description |
| --- | --- |
| `g` | Go to first line. |
| `G` | Go to last line. |
| `F` | Follow mode, `ctrl+C` to cancel. |
| `s FILENAME` | Save the input to a file. |
| `| <m>` | `<m>` represents any mark letter (`^` `$` `.`). Pipes a section of the input file to the given shell command. |
