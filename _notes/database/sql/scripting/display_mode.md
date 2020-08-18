---
---

## MySQL

Use `\G` to display results in expanded formatting mode.

```sql
SELECT * FROM my_table \G
```

## PostgreSQL

Use `\x` to toggle the way to display query results (table or expanded).

It is also possible to use `\gx` to apply expanded formatting mode for the current query only.

```sql
SELECT * FROM my_table \gx
```
