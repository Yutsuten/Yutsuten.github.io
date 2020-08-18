---
---

## Usage

```sql
SELECT email FROM users GROUP BY email HAVING COUNT(email) > 1;
```
