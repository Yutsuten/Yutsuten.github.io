---
update: 2021-06-07
---

## MySQL

```sql
CREATE TABLE users (id INTEGER PRIMARY KEY, nick TEXT);
CREATE TABLE inventory (id INTEGER, name TEXT, FOREIGN KEY (id) REFERENCES users(id));
ALTER TABLE users ADD COLUMN achievements INTEGER;
ALTER TABLE users MODIFY nick TEXT NOT NULL;
DESCRIBE users;
SHOW TABLES;
```

## PostgreSQL

| Command | Description |
| --- | --- |
| `\dt` | Describe (list) tables. |
| `\d TABLE` | Describe table. |

## SQLite

```
.tables
```
