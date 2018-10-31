---
---

```shell
$ psql    # Start postgresql bash

> \l      # list databases
> \dt     # show tables
> \d tbl  # describe table
> \c mydb # change database
> \q      # quit
> select col,count(*) from tbl group by col;
> select col,col2 from tbl where col='ok';
> delete from tbl where col='ok' and id > 30;
```
