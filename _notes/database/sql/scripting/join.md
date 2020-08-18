---
---

## Usage

Use `JOIN` to merge the data that exists on both tables.

Use `LEFT JOIN` to merge the data between tables, but set `NULL` if there is no matching value.

```sql
SELECT * FROM users JOIN inventory ON users.id = inventory.id;
SELECT * FROM users LEFT JOIN inventory ON users.id = inventory.id;
```
