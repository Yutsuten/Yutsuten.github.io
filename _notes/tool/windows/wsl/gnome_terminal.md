---
---

- [Setup and install](https://blog.ropnop.com/configuring-a-pretty-and-usable-terminal-emulator-for-wsl/)

### Setup X11
```shell
# On windows install a X server (like Xming)
# To use japanese keyboard on applications inside xming, add this extra parameter to Xming
-xkblayout jp

# Then inside the linux machine
echo 'export DISPLAY=127.0.0.1:0' >> ~/.bashrc
sudo apt install dbus-x11

# Maybe needed
sudo apt install keyboard-configuration console-setup
sudo dpkg-reconfigure keyboard-configuration
sudo service keyboard-setup restart
sudo udevadm trigger --subsystem-match=input --action=change
```

### Open an Linux application through a windows shortcut
- Find the windows command that opens the Linux application:
```shell
bash -c -l "cd && gnome-terminal"
```

- Create the vbs script to launch the application with a hidden command window
```vb
args = "-c" & " -l " & """cd && gnome-terminal; read"""
WScript.CreateObject("Shell.Application").ShellExecute "bash", args, "", "open", 0
```

- Create a shortcut to open the vbs file
```
C:\Windows\System32\wscript.exe C:\Users\myuser\gnome-terminal\gnome-terminal.vbs
```

- Add a nice icon
