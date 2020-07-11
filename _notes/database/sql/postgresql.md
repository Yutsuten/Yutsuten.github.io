---
---

```shell
$ psql    # Start postgresql bash

> \l      # list databases
> \dt     # show tables
> \d tbl  # describe table
> \c mydb # change database
> \q      # quit
```

### Generate / restore dump
```bash
pg_dump dbname > outfile.sql
psql dbname < infile.sql
```
