---
---

### Operators
```sql
=   -- equals
!=  -- not equals
>   -- greater than
<   -- less than
>=  -- greater than or equal to
<=  -- less than or equal to
```

### Commands
```sql
-- Database
CREATE DATABASE cool_game;
DROP DATABASE cool_game;
USE cool_game;
SHOW DATABASES;

-- Table
CREATE TABLE users (id INTEGER PRIMARY KEY, nick TEXT);
CREATE TABLE inventory (id INTEGER, name TEXT, FOREIGN KEY (id) REFERENCES users(id));
ALTER TABLE users ADD COLUMN achievements INTEGER;
ALTER TABLE users MODIFY nick TEXT NOT NULL;
DESCRIBE users;
SHOW TABLES;

-- Data manipulation
INSERT INTO users (id, nick) VALUES (1, 'Yutsuten');
UPDATE users SET nick = 'Tom' WHERE id = 5;
DELETE FROM users WHERE id = 5;

-- Select
SELECT * FROM users;
SELECT * FROM users WHERE achievements > 5;
SELECT * FROM users WHERE nick LIKE 'xX%Xx';
SELECT * FROM users WHERE nick BETWEEN 'A' AND 'J';
SELECT * FROM users WHERE achievements BETWEEN 10 AND 20;
SELECT * FROM users WHERE server = 'Poring' AND achievements > 5;
SELECT * FROM users WHERE achievements < 5 OR achievements > 10;
SELECT nick AS 'Nickname' FROM users;

-- Order
SELECT * FROM users ORDER BY achievements DESC;
SELECT * FROM users ORDER BY achievements ASC;

-- SQL Functions
SELECT COUNT(*) FROM users;
SELECT server, COUNT(*) FROM users GROUP BY server;
SELECT SUM(achievements) FROM users;
SELECT MAX(achievements) FROM users;
SELECT MIN(achievements) FROM users;
SELECT AVG(achievements) FROM users;
SELECT ROUND(AVG(achievements), 2) FROM users;
SELECT DISTINCT server FROM users;

-- Join
SELECT * FROM users JOIN inventory ON users.id = inventory.id; -- Show all items from users that have items.
SELECT * FROM users LEFT JOIN inventory ON users.id = inventory.id; -- Show all items from all users (NULL for who don't have).
```
