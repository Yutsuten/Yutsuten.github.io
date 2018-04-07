# MongoDB: Authentication

## Roles
**Reference:** [Link](https://docs.mongodb.com/manual/reference/built-in-roles/)

#### User
- read
- readWrite

#### Admin
- userAdmin
- dbAdmin
- dbOwner

#### Users in admin database
- readAnyDatabase
- readWriteAnyDatabase
- userAdminAnyDatabase
- dbAdminAnyDatabase

#### Superuser
- root


## Enabling Authentication

### Create User Administrator
Certify that mongod is running without access control
```shell
mongod
```

### Connect to mongo shell
```shell
mongo
```

### Create Admin
```shell
use admin
db.createUser(
  {
    user: "admin",
    pwd: "admin",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
  }
)
exit
```

### Enable access control
Start mongod with access control
```shell
mongod --auth
```
OR change configuration
```shell
linux: $ sudo vi /etc/mongod.conf
osx with brew version: $ sudo vi /usr/local/etc/mongod.conf

# Add these lines to the end of the file
security:
 authorization: enabled

# Restart mongod
linux: $ sudo service mongod restart
osx with brew version: $ brew services restart mongodb
```

### Connect as Admin
```shell
mongo -u "admin" -p --authenticationDatabase "admin"
use admin
```

### Create users
```shell
use my_db
db.createUser(
  {
    user: "my_user",
    pwd: "xyz123",
    roles: [{ role: "readWrite", db: "my_db" }]
  }
)
exit
```

### Login as user
```shell
mongo -u "my_user" -p --authenticationDatabase "my_db"
use my_db
```

## Update user
```shell
mongo -u "admin" -p --authenticationDatabase "admin"
use my_db
db.updateUser(
  "my_user"
  {
    roles: [{ role: "read", db: "my_db" }]
  }
)
```

