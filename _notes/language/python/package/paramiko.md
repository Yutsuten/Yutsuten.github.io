---
doc: http://docs.paramiko.org/en/stable/index.html
---

Paramiko is a pure Python interface around SSH networking concepts.

## Connecting to a client

```python
# http://docs.paramiko.org/en/stable/api/client.html#paramiko.client.SSHClient
import paramiko
import socket

client = paramiko.client.SSHClient()
client.load_system_host_keys()
client.set_missing_host_key_policy(paramiko.client.AutoAddPolicy())

try:
    client.connect(hostname, port, username, password)
except paramiko.ssh_exception.BadHostKeyException:
    return False, 'Server\'s host key could not be verified'
except paramiko.ssh_exception.SSHException:
    return False, 'Error establishing an SSH session'
except paramiko.ssh_exception.AuthenticationException:
    return False, 'Authentication failed'
except socket.error:
    return False, 'Socket error'

client.close()
```
