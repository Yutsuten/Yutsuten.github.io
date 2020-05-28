---
---

## Command parameters

```bash
mysql OPTIONS DBNAME
-h host          # --host
-u user          # --user
-P               # --port
-p               # --password
-e "SELECT..."   # Run SQL inline
```

### Basic commands

```sql
CREATE DATABASE cool_game;
DROP DATABASE cool_game;
USE cool_game;
SHOW DATABASES;
```

### Database privileges

```sql
GRANT ALL PRIVILEGES ON *.* TO 'user'@'host' WITH GRANT OPTION;
FLUSH PRIVILEGES;
```

### Show results vertically

```sql
SELECT * FROM my_table \G
```

## Dump

```bash
mysqldump -u user -p mydb > ~/dump.sql
mysql -u user -p mydb < ~/dump.sql
```
