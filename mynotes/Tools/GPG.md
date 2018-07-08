Ref: [link](https://help.github.com/articles/signing-commits-with-gpg/)

### Install gpg
```shell
# Mac
brew install gnupg
```

### Checking for existing GPG keys
```shell
gpg --list-secret-keys --keyid-format LONG
```

### Generating a new GPG key
```shell
gpg --full-generate-key
# Recommended key size: 4096

# Sample key:
# sec   4096R/3AA5C34371567BD2 2016-03-10 [expires: 2017-03-10]
# uid                          Hubot
# ssb   4096R/42B317FD4BA89E7A 2016-03-10

gpg --armor --export 3AA5C34371567BD2
```

### Delete key
```shell
gpg --recv-keys 3AA5C34371567BD2
gpg --import [revocation-certificate-file]
gpg --send-keys 3AA5C34371567BD2
gpg --delete-secret-key "Full Name"
```

### Telling Git about your GPG key
```shell
# Register key to git
git config --global user.signingkey 3AA5C34371567BD2

# Add this to .bashrc
export GPG_TTY=$(tty)

# Sign commits by default
git config --global commit.gpgsign true
```

### Backup key
Ref: [link](https://askubuntu.com/questions/32438/how-to-share-one-pgp-key-on-multiple-machines)
```shell
gpg --export-secret-key -a > secretkey.asc
gpg --import secretkey.asc

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
