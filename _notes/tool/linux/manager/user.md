---
update: 2021-06-01
---

Most of these commands require root privileges.

## User management

Commands to manage users.

```shell
useradd OPTIONS USERNAME
-m        # Create home folder
-p        # Set password
-G g1,g2  # Add user to groups
userdel -r USERNAME

chfn USERNAME        # Change finger information
passwd USERNAME      # Update password
usermod -u 1001 USERNAME  # Update UID
```

To list existing users in the system:

```shell
cat /etc/passwd
```

### Groups

Commands to manage user groups.

To list existing groups in the system, run `getent group`.

```shell
groups USERNAME                 # List groups of a user (defaults to current user)
gpasswd OPTIONS USERNAME GROUP  # Manage groups
-a  # Add to group
-d  # Remove from group

groupmod -g 1001 USERNAME  # Update GID
```

### Giving admin privileges

Run `visudo` and edit the desired privileges:

```shell
username ALL=(ALL) ALL  # Only for user
%wheel ALL=(ALL) ALL    # For all users in wheel group
```
