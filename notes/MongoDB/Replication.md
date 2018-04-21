## Deploy a Replica Set for Production (same server)
```shell
# Create 3 separate folders for each instance (uses the current directory of the terminal)
mkdir -p mongodb/rs0-0  mongodb/rs0-1 mongodb/rs0-2

# Start 3 instances of mongod - hostname is the local IP (not public)
mongod --replSet rs0 --port 27018 --bind_ip localhost,<private IP> --dbpath mongodb/rs0-0 --fork --logpath mongodb-0.log
mongod --replSet rs0 --port 27019 --bind_ip localhost,<private IP> --dbpath mongodb/rs0-1 --fork --logpath mongodb-1.log
mongod --replSet rs0 --port 27020 --bind_ip localhost,<private IP> --dbpath mongodb/rs0-2 --fork --logpath mongodb-2.log

# To connect to those instances, use mongo --host <public IP>
# Settings continue on 'Connect to one instance' bellow
```

## Deploy a Replica Set for Testing and Development
Reference: [link](https://docs.mongodb.com/manual/tutorial/deploy-replica-set-for-testing/)

```shell
# Create 3 separate folders for each instance
mkdir -p /srv/mongodb/rs0-0  /srv/mongodb/rs0-1 /srv/mongodb/rs0-2

# Start 3 instances of mongod
mongod --replSet rs0 --port 27018 --bind_ip localhost,<private IP> --dbpath /srv/mongodb/rs0-0 --smallfiles --oplogSize 128
mongod --replSet rs0 --port 27019 --bind_ip localhost,<private IP> --dbpath /srv/mongodb/rs0-1 --smallfiles --oplogSize 128
mongod --replSet rs0 --port 27020 --bind_ip localhost,<private IP> --dbpath /srv/mongodb/rs0-2 --smallfiles --oplogSize 128

# Connect to one instance
mongo --port 27018

# Create configuration object
rsconf = {
  _id: "rs0",
  members: [
    {
     _id: 0,
     host: "<hostname>:27018"
    },
    {
     _id: 1,
     host: "<hostname>:27019"
    },
    {
     _id: 2,
     host: "<hostname>:27020"
    }
   ]
}

# Initialize replica set
rs.initiate(rsconf)

# See current configuration
rs.conf()
```

### Adjusting priority for Replica Set Member
Reference: [link](https://docs.mongodb.com/manual/tutorial/adjust-replica-set-member-priority/)

```shell
# Copy the replica set configuration to a variable
cfg = rs.conf()

# Change each member’s priority value
cfg.members[0].priority = 2    # Primary
cfg.members[1].priority = 0.5  # Secondary
cfg.members[2].priority = 0.5  # Secondary

# Assign the replica set the new configuration
rs.reconfig(cfg)
```

### Allow reading from Secondary
References: [link](https://docs.mongodb.com/manual/reference/method/Mongo.setReadPref/) [link2](https://docs.mongodb.com/manual/reference/read-preference/#read-preferences-for-database-commands)

```shell
# Set this on every mongo instance
db.getMongo().setReadPref('secondaryPreferred')
db.getMongo().setSlaveOk()
```

