---
---

### Disable system theme for firefox
- [Disable system style for Firefox form input elements](https://askubuntu.com/questions/936716/disable-system-style-for-firefox-form-input-elements)

Using dark theme on OS with firefox makes some inputs appear dark,
to fix this:

1. Go to `about:config` on search bar
2. Add or edit `widget.content.gtk-theme-override` to `Adwaita:light`
3. Restart firefox
