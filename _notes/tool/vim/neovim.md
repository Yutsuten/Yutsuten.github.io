---
---

## Commands only available on Neovim

### Terminal mode

- `:terminal` or `:e term://bash` to open the terminal.
- Entering on Insert mode with `a` or `i` puts you in Terminal mode. You can type commands in this mode.
- `<C-\> <C-n>` to go back to Normal mode.

### Set (reset) terminal buffer size

- Set to 0 (clear): `set scrollback=0`
- Set to 2000: `set scrollback=2000`
- Then run `reset` on terminal to clean the screen
