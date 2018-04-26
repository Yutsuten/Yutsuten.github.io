Reference: [link](https://docs.mongodb.com/manual/tutorial/backup-and-restore-tools/)

```shell
# Simple way, all defaults
mongodump

# Different parameters
mongodump --host localhost --port 27017 --db db_name --username usr1 --authenticationDatabase table_name

# Restore - Looks for a folder called 'dump', and inside it the name of the databases to be restored
mongorestore
```

