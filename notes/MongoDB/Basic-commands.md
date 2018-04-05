---
layout: empty
---

{% raw %}

# MongoDB: Basic commands

## Open mongo
```shell
mongo # Open mongo
db # Show current database
show dbs # Show available databases
use my_database # Switch/create database
show collections # Show collections (tables)

# Insert (automatically creates the collection groups)
db.groups.insert({'_id': 'f43nm39f', 'name': 'party1', 'type': 'party'})

# Query
db.groups.find({}) # All
db.groups.find({name: 'party1'}).pretty()
db.groups.find({name: 'party1'}, {chat: 1}).pretty()

# AND
db.groups.find(
  {name: 'party1'}, {type: 'party'}
)

# OR
db.groups.find(
  {$or: [
    {name: 'party1'}, {type: 'party'}
  ]}
)

# Update
db.groups.update({_id: 'f43nm39f'}, {$set: {'name': 'cool_party'}})

# Drop
db.groups.drop() # Drop collection
db.dropDatabase() # Drop current database

```

{% endraw %}
