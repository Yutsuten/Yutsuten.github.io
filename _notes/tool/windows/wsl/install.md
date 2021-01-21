---
doc: https://docs.microsoft.com/en-us/windows/wsl/install-win10
---

## Enable Windows Subsystem for Linux

Open PowerShell and run the following command:

```
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```

For WSL 2, continue with:

```
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

Then [install](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi) the Linux kernel package.

Finally set WSL 2 as default with:

```
wsl --set-default-version 2
```

## Managing WSL version

```
wsl --list --verbose
wsl --set-version <distribution name> <versionNumber>
```

## Manual Linux install

Download the Appx file from the Microsoft Store.

| Distro | Link |
| --- | --- |
| Ubuntu 18.04 | aka.ms/wsl-ubuntu-1804 |
| Ubuntu 20.04 | aka.ms/wslubuntu2004 |

Then install it with PowerShell.

```
Add-AppxPackage .\Ubuntu.appx
```

The linux icon will appear on the menu.
It may be necessary to restart your computer for WSL to work properly.
