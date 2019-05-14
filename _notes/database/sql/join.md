---
---

```sql
SELECT * FROM users JOIN inventory ON users.id = inventory.id; -- Show all items from users that have items.
SELECT * FROM users LEFT JOIN inventory ON users.id = inventory.id; -- Show all items from all users (NULL for who don't have).
```
