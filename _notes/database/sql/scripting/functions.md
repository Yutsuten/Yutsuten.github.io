---
---

```sql
SELECT COUNT(*) FROM users;
SELECT server, COUNT(*) FROM users GROUP BY server;
SELECT SUM(achievements) FROM users;
SELECT MAX(achievements) FROM users;
SELECT MIN(achievements) FROM users;
SELECT AVG(achievements) FROM users;
SELECT ROUND(AVG(achievements), 2) FROM users;
```