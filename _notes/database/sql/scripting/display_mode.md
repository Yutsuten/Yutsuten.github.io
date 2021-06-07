---
update: 2021-06-07
---

## MySQL

Use `\G` to display results in expanded formatting mode.

```
SELECT * FROM my_table \G
```

## PostgreSQL

Use `\x` to toggle the way to display query results (table or expanded).

It is also possible to use `\gx` to apply expanded formatting mode for the current query only.

```
SELECT * FROM my_table \gx
```
