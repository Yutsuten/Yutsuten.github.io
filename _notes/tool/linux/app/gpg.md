---
doc: https://wiki.archlinux.org/index.php/GnuPG
---

## Configuration

On your shell's `rc` file,
export the following environment variable:

```shell
export GPG_TTY=$(tty)
```

### Dialog

Optionally set the dialog for inputting your password.
Add to `~/.gnupg/gpg-agent.conf`:

```
pinentry-program /usr/bin/pinentry-qt
```

Another GUI option is `pinentry-gnome3`.

After changing the configuration, reload the agent:

```
gpg-connect-agent reloadagent /bye
```

## Usage

```shell
gpg OPTIONS
--homedir DIR                   # Default is ~/.gnupg (GNUPGHOME)
--keyid-format long             # Display key IDs with 16 characters (used on git and pass)
-k                              # List public keys
-K                              # List secret keys

-c FILE                         # Encrypt the file using symmetric cipher
-e -r RECIPIENT FILE            # Encrypt using recipient's public key
-d FILE                         # Decrypt the file

--full-generate-key             # Generate a new key pair
--delete-keys NAME              # Remove key from the public keyring
--delete-secret-keys NAME       # Remove key from the secret keyring

-a                              # Create ASCII armored output (key.asc)
-o FILE                         # Write output to a file
--export [KEYID!]               # Export keys (usually used with -a and --output)
--export-secret-keys [KEYID!]   # Export secret keys (usually used with -a and -o)
--export-ownertrust             # Export ownertrust values
--import FILE                   # Import keys
--import-ownertrust FILE        # Import ownertrust values
--gen-revoke FILE               # Generate a revocation certificate

--send-keys KEYID               # Export keys to a keyserver
--recv-keys KEYID               # Import keys from a keyserver
```

### Key management

```shell
gpg --edit-key NAME
list    # Listing keys
key 0   # Select key (0 is master)
trust   # Trust a key
addkey  # Add subkey
delkey  # Delete subkey
passwd  # Change passphrase
expire  # Change expire date
save    # Save changes
```

## Advanced

### Remove only private master key

```shell
# Find master key keygrip
gpg --with-keygrip --list-key YOURMASTERKEYID

# Securely delete it from .gnupg folder
rm -P $HOME/.gnupg/private-keys-v1.d/KEYGRIP.key
```

### Always ask for password

```shell
# Create/edit file ~/.gnupg/gpg-agent.conf
max-cache-ttl 0

# Kill gpg-agent process (it will restart automatically)
echo RELOADAGENT | gpg-connect-agent
```
