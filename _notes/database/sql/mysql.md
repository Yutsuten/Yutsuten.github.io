---
---

### Options
```bash
# Run SQL inline
mysql -e "SELECT ..."
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
