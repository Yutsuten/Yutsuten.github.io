---
---

### Manage SSH keys

Ref: [Link](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)

```bash
# Add key
ssh-keygen -t rsa -b 4096 -C "email@example.com"
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa  # -K parameter required on mac

# Public key
cat ~/.ssh/id_rsa.pub | xclip -sel clip

# Delete keys from agent
rm -rf /tmp/ssh && ssh-add -D

# List keys
ssh-add -l
```

### Configuration

```bash
# ~/.ssh/id_rsa
chmod 400 ~/.ssh/id_rsa

# ~/.ssh/config
chmod 600 ~/.ssh/config
```

```
# ~/.ssh/config

Host work.github.com
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_rsa_work
```

Then on the SSH clone URL, edit `github.com` to `work.github.com` and git should use the correct key.
