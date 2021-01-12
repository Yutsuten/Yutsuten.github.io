---
doc: https://docs.microsoft.com/en-us/windows/wsl/install-manual
---

## Enable Windows Subsystem for Linux

Open PowerShell and run the following command:

```
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

Then restart your computer.

## Manual install

Download the Appx file from the Microsoft Store.

```
https://aka.ms/wsl-ubuntu-1804
```

Then install it with PowerShell.

```
Add-AppxPackage .\app_name.appx
```

The linux icon will appear on the menu.
It may be necessary to restart your computer for WSL to work properly.
