---
---

```sql
SELECT id, name, email FROM users WHERE email IN (SELECT email FROM users GROUP BY email HAVING COUNT(email) > 1)
```
