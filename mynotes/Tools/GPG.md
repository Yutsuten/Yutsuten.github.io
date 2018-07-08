Ref: [link](https://help.github.com/articles/signing-commits-with-gpg/)
[link2](https://msol.io/blog/tech/back-up-your-pgp-keys-with-gpg/)
[link3](https://askubuntu.com/questions/32438/how-to-share-one-pgp-key-on-multiple-machines)

### Install gpg
```shell
# Mac
brew install gnupg
```

### Generating a new GPG key
```shell
gpg --full-generate-key
# Recommended key size: 4096

# Sample key:
# sec   4096R/3AA5C34371567BD2 2016-03-10 [expires: 2017-03-10]
# uid                          Hubot
# ssb   4096R/42B317FD4BA89E7A 2016-03-10
```

### Checking for existing GPG keys
```shell
gpg --list-keys --keyid-format LONG
gpg --list-secret-keys --keyid-format LONG

# Trust a key
gpg --edit-key 'Full Name'
> trust
```

### Export/import key
```shell
gpg --armor --export > pgp-public-keys.asc
gpg --armor --export-secret-keys > pgp-private-keys.asc
gpg --export-ownertrust > pgp-ownertrust.asc
gpg --armor --gen-revoke [your key ID] > pgp-revocation.asc

gpg --import pgp-public-keys.asc
gpg --import pgp-private-keys.asc
gpg --import-ownertrust pgp-ownertrust.asc

# Securely delete it
shred --remove secretkey.asc
```

### Encript/decript file
```shell
# Encrypt with a password
gpg -c filename

# Encrypt with recipient's public key
gpg -e -r recipient@email.com file_name

# Decrypt (with password or private key)
gpg -d filename.gpg
```

Ref: [Link](https://wiki.debian.org/Subkeys?action=show&redirect=subkeys)
### Subkey
```shell
# TODO
```

### Delete key
```shell
gpg --recv-keys [your key ID]
gpg --import pgp-revocation.asc
gpg --send-keys [your key ID]
gpg --delete-secret-key "Full Name"
```
