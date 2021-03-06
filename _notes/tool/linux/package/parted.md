---
doc: https://wiki.archlinux.org/index.php/Parted
---

## Usage

Replace `/dev/sda` with the device you wish to partition.

```shell
parted /dev/sda
```

Then you will enter in the command prompt.
To reset the partitions, run:

```
mklabel gpt
```

Then start creating the partitions.
The example bellow creates a swap partition with size of 8GB (size of my memory).
Using the `free -m` command we get the size of the memory in mebibytes (MiB),
and sum it with `261MiB`.

```
mkpart "EFI System Partition" fat32 1MiB 261MiB
mkpart "SWAP Partition" linux-swap 261MiB 8135MiB
mkpart "Root Partition" ext4 8135MiB 100%
```

When using EFI, we need to set the flag `esp` to its partition.

```
set 1 esp on
```

Disk partitioning is done.
Type `quit` to go back to shell.
