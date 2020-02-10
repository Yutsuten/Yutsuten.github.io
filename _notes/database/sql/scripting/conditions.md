---
---

### Basic
```sql
SELECT * FROM users;
SELECT * FROM users WHERE achievements > 5;
SELECT * FROM users WHERE deleted IS NULL;
SELECT * FROM users WHERE id IN (1, 5, 8);
SELECT * FROM users WHERE id NOT IN (1, 5, 8);
SELECT * FROM users WHERE nick LIKE 'xX%Xx';
SELECT * FROM users WHERE nick BETWEEN 'A' AND 'J';
SELECT * FROM users WHERE achievements BETWEEN 10 AND 20;
SELECT * FROM users WHERE server = 'Poring' AND achievements > 5;
SELECT * FROM users WHERE achievements < 5 OR achievements > 10;
SELECT nick AS 'Nickname' FROM users;
```
