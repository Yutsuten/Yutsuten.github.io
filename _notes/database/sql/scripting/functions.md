---
---

## Common

```sql
SELECT COUNT(*) FROM users;
SELECT server, COUNT(*) FROM users GROUP BY server;
SELECT SUM(achievements) FROM users;
SELECT MAX(achievements) FROM users;
SELECT MIN(achievements) FROM users;
SELECT AVG(achievements) FROM users;
SELECT ROUND(AVG(achievements), 2) FROM users;
SELECT LENGTH(nick) FROM users;
```

## MySQL only

```sql
SELECT ISNULL(title), title FROM posts;
SELECT SUBSTRING(nick,1,10) FROM users;
```

## PostgreSQL only

```sql
SELECT COALESCE(title, 'NULL') AS title FROM posts;
SELECT LEFT(nick,10) FROM users;
```
