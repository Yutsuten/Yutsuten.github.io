---
update: 2021-06-07
---

## MySQL

```sql
CREATE DATABASE dbname;
DROP DATABASE dbname;
USE dbname;
SHOW DATABASES;
SHOW DATABASES LIKE '%name%';
```

## PostgreSQL

```sql
CREATE DATABASE dbname;
DROP DATABASE dbname;
```

| Command | Description |
| --- | --- |
| `\c DBNAME` `\connect DBNAME` | Connect to database. |
| `\l` `\list` | List databases. |
| `\q` `\quit` | Quit. |

## SQLite

```
.open db/mydatabase.sqlite3
.quit
```
