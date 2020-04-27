---
---

## Open an Linux application through a windows shortcut

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
