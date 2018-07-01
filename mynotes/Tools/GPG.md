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

### Telling Git about your GPG key
```shell
# Register key to git
git config --global user.signingkey 3AA5C34371567BD2

# Add this to .bashrc
export GPG_TTY=$(tty)

# Sign commits by default
git config --global commit.gpgsign true
```
