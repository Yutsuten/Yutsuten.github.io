---
---

## Basic

```sql
INSERT INTO users (id, nick) VALUES (1, 'Yutsuten');
UPDATE users SET nick = 'Tom' WHERE id = 5;
DELETE FROM users WHERE id = 5;
TRUNCATE TABLE users CASCADE;
```

## Inserting items with similar data

```sql
INSERT INTO users (nick, email, status) SELECT nick, email, 2 FROM users WHERE status = 1;
```
