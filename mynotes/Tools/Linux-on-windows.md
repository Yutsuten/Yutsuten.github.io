### Bash personalization
- [Make Bash on Ubuntu on Windows 10 Look Like the Ubuntu Terminal](https://medium.com/@jgarijogarde/make-bash-on-ubuntu-on-windows-10-look-like-the-ubuntu-terminal-f7566008c5c2)
- [Solarized colors for vim in bash on windows works!](https://www.reddit.com/r/bashonubuntuonwindows/comments/60da1u/solarized_colors_for_vim_in_bash_on_windows_works/)
- [Solarized Cheat Sheet](http://www.zovirl.com/2011/07/22/solarized_cheat_sheet/)

#### Workarounds
- [Can't set different font for the terminal](https://github.com/Microsoft/WSL/issues/757)

```
Run->regedit
HKEY_CURRENT_USER\Console\%SystemRoot%_system32_bash.exe
add/modify item CodePage->(DWORD)FDE9(65001)
```
