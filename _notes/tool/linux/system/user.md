---
---

Most of these commands require root privileges.

## Managing users

To list existing users in the system, run `cat /etc/passwd`.

### Create user

```shell
useradd OPTIONS USERNAME
-m        # Create home folder
-p        # Set password
-G g1,g2  # Add user to groups

chfn USERNAME    # Change finger information
passwd USERNAME  # Update password
```

### Groups

To list existing groups in the system, run `getent group`.

```shell
groups USERNAME                 # List groups of a user (defaults to current user)
gpasswd OPTIONS USERNAME GROUP  # Manage groups
-a  # Add to group
-d  # Remove from group
```

### Delete user

```shell
userdel -r USERNAME
```

### Giving admin privileges

```shell
visudo

username ALL=(ALL) ALL  # Only for user
%wheel ALL=(ALL) ALL    # For all users in wheel group
```
