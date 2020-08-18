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

### Database privileges

```sql
GRANT ALL PRIVILEGES ON *.* TO 'user'@'host' WITH GRANT OPTION;
FLUSH PRIVILEGES;
```

## Dump

```bash
mysqldump -u user -p mydb > ~/dump.sql
mysql -u user -p mydb < ~/dump.sql
```
