Reference: [link](https://docs.mongodb.com/manual/tutorial/backup-and-restore-tools/)

```shell
# Simple way, all defaults
mongodump
mongodump --port {port} -d {database} -c {collection} --out {out}
mongodump --host localhost --port 27017 --db db_name --username usr1 --authenticationDatabase table_name

# Restore - Looks for a folder called 'dump', and inside it the name of the databases to be restored
mongorestore
mongorestore --port {port} -d {database} -c {collection} --dir {(dir|bson)}
```

