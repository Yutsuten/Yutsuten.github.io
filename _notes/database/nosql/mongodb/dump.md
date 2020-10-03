---
doc: https://docs.mongodb.com/manual/tutorial/backup-and-restore-tools/
---

## Dump

```shell
mongodump OPTIONS
--port 27017
--host localhost
--username user
--authenticationDatabase db_name
--db db_name
-c collection_name
--out dump_name
```

## Restore

Looks for a folder called 'dump', and inside it the name of the databases to be restored.

```shell
mongorestore OPTIONS
--port 27017
--db db_name
-c collection_name
--dir dump_path  # bson
```

## Export

```shell
mongoexport
--db db_name
-c collection_name
--out collection.json
```
