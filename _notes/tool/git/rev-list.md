---
---

List commits that are reachable by following the parent links from the given commit.

## Usage

```shell
git rev-list OPTIONS COMMIT -- PATH
```

| Option | Description |
| --- | --- |
| `--count` | Print a number stating how many commits would have been listed. |
| `--since=DATE` `--after=DATE` | Show commits more recent than a specific date. |
| `--until=DATE` `--before=DATE` | Show commits older than a specific date. |
| `--all` | List everything as commit hash. |
| `--no-merges` | Do not print commits with more than one parent. |
