---
layout: empty
---

{% raw %}

# MongoDB: Basic commands

## Open mongo
```
mongo
```

## Show current database
```
db
```

## Show available databases
```
show dbs
```

## Switch database
```
use habitrpg
```

## Show collections
```
show collections
```

## Query
```
db.collection.find({})
db.groups.find({name: "party1"}).pretty()
db.groups.find({name: "party1"}, {chat: 1}).pretty()
```

{% endraw %}
