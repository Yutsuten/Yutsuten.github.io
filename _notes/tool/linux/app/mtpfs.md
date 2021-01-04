---
doc: https://wiki.archlinux.org/index.php/Media_Transfer_Protocol
---

## go-mtpfs

I think this is the simplest way to use MTP on linux.
No installation needed.

[Download](https://hanwen.home.xs4all.nl/public/software/go-mtpfs/) the binary (likely it will be `go-mtpfs.x86_64`),
adjust the permissions and move to your bin folder:

```shell
chmod u+x ~/Downloads/go-mtpfs.x86_64
mv ~/Downloads/go-mtpfs.x86_64 ~/.local/bin/mtpfs
```

I like to rename it to `mtpfs` because it is easier to type.

### Usage

Create the folder that will be used to mount your device.

```shell
mkdir ~/Mount
```

These are the commands to be used for mounting and unmounting:

```shell
mtpfs ~/Mount &
fusermount -u ~/Mount
```
