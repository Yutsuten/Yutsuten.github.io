[Ref1](https://help.github.com/articles/signing-commits-with-gpg/)

### Install gpg
```shell
# Mac
brew install gnupg

# All
# Add this to ~/.bash_profile
export GPG_TTY=$(tty)
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

### List GPG keys
```shell
gpg --list-keys --keyid-format LONG
gpg --list-secret-keys --keyid-format LONG
```

### Export/import key
[Ref1](https://askubuntu.com/questions/32438/how-to-share-one-pgp-key-on-multiple-machines)
[Ref2](https://msol.io/blog/tech/back-up-your-pgp-keys-with-gpg/)
```shell
# Don't forget the exclamation mark, it makes sure GnuPG actually works with the subkey itself
# and not with the primary key it belongs to!
gpg --armor --export [optional: keyid!] > pgp-public-keys.asc
gpg --armor --export-secret-keys [optional: keyid!]> pgp-private-keys.asc
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

### Edit key
[Ref1](https://wiki.debian.org/Subkeys?action=show&redirect=subkeys)
[Ref2](https://superuser.com/questions/879977/how-to-have-a-different-pass-phrase-for-a-gpg-subkey)
```shell
gpg --edit-key 'Full Name'

# Trust a key
> trust

# Add subkey
> addkey
> save

# Change passphrase
> passwd
> save
```

### Remove only private master key
```shell
# Find master key keygrip
gpg --with-keygrip --list-key YOURMASTERKEYID

# Securely delete it from .gnupg folder
rm -P $HOME/.gnupg/private-keys-v1.d/KEYGRIP.key
```

## Always ask for password
[Ref](https://security.stackexchange.com/questions/103034/gnupg-decryption-not-asking-for-passphrase)
```shell
# Create/edit file ~/.gnupg/gpg-agent.conf adding
max-cache-ttl 0

# Kill gpg-agent process (it will restart automatically)
echo RELOADAGENT | gpg-connect-agent
```

### Delete key
```shell
gpg --recv-keys [your key ID]
gpg --import pgp-revocation.asc
gpg --send-keys [your key ID]
gpg --delete-secret-key 'Full Name'
```
