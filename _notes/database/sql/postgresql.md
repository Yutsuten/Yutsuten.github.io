---
doc: https://www.postgresql.org/docs/current/app-psql.html
update: 2021-02-02
---

## Usage

```shell
psql OPTIONS DBNAME
```

| Option | Description |
| --- | --- |
| `-h HOST` | Database server host. |
| `-p PORT` | Database server port. |
| `-U USER` | Database user name. |
| `-w` | Never prompt for password. |
| `-W` | Force password prompt. |
| `-c` | Run SQL query and exit. |

You may provide the password by prepending `PGPASSWORD` to the command.

```shell
env PGPASSWORD=password psql dbname
```

### Create user

```sql
CREATE USER myuser WITH PASSWORD 'myuser_pass';
```

### Permissions

```sql
GRANT ALL PRIVILEGES ON DATABASE dbname TO myuser;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO myuser;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO myuser;

GRANT SELECT ON public.users TO myuser;

REVOKE ALL PRIVILEGES ON DATABASE dbname FROM myuser;
REVOKE ALL PRIVILEGES ON ALL TABLES IN SCHEMA public FROM myuser;
REVOKE ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public FROM myuser;
```

## Backup

```shell
pg_dump dbname > outfile.sql
psql dbname < infile.sql
```

Using pipe:

```shell
zcat backup.sql.gz | env PGPASSWORD=password psql dbname
```
