---
---

## Setup

You must have a GPG key.
Run the following command to get the key ID:

```shell
gpg -K --keyid-format long
```

Then initialize your key store.

```shell
pass init <keyID>
```

### Management with git

Run the following commands to initialize git,
then set a remote git repository.

```shell
pass git init
pass git remote set-url origin <remote URL>
```

Then you can reset (for restoring) or push (for backing up) as needed.

```shell
pass git fetch && pass git reset --hard origin/master
git push
```
