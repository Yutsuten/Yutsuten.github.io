## Open mongo
```shell
mongo

# With database name
mongo my_database
```

### Mongo shell
```shell
db # Show current database
show dbs # Show available databases
use my_database # Switch/create database
show collections # Show collections (tables)

# Alternative way to access a collection
db.getCollection('groups').find({})

# Insert (automatically creates the collection groups)
db.groups.insert({'_id': 'f43nm39f', 'name': 'party1', 'type': 'party'})

# Query
db.groups.find({}) # All
db.groups.find({name: 'party1'}).pretty()
db.groups.find({name: 'party1'}, {chat: 1}).pretty()
db.groups.count()

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
db.groups.update({_id: 'f43nm39f'}, {$set: {'member_count': NumberInt(2)}})
db.groups.update({_id: 'f43nm39f'}, {$set: {'settings.type': 'party'}}) # Embedded object
db.groups.update({_id: 'f43nm39f'}, {$set: {'members.0.name': 'leader'}}) # Array

# Remove
db.groups.remove({_id: 'f43nm39f'})

# Drop
db.groups.drop() # Drop collection
db.dropDatabase() # Drop current database

# Rename collection
db.groups.renameCollection('party')

# Rename field
db.groups.updateMany({}, {$rename: {'type': 'category'}})
```

