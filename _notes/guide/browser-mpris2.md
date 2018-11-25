---
---

`browser-mpris2` adds the ability to pause/change musics of youtube directly from your Linux desktop,
like Rhythmbox or Spotify.

<img src="assets/img/browser-mpris2.png" alt="browser-mpris2" width="600"/>

Its quite useful,
and as I has some troubles with the guide [here](https://www.linuxuprising.com/2018/08/add-youtube-player-controls-to-your.html),
I'd like to leave some notes for the points I had trouble.

For a description of the extension,
you may want to read the guide I mentioned above.
The extension haven't been published,
so you have to install locally as a developer.

Installation:

```shell
git clone https://github.com/otommod/browser-mpris2
cd browser-mpris2/
sudo install native/chrome-mpris2 /usr/local/bin/
```

- Open `chrome://extensions`
- Enable Developer mode
- Load Unpacked and select the `browser-mpris2` directory
- Copy the extension ID

<img src="https://3.bp.blogspot.com/-yEoNFj2wAXM/W3Vvewa979I/AAAAAAAABXo/dmltlNZk3J4sVa5jQenFFrT28ecklY92QCLcBGAs/s1600/browser-mpris2-chrome-developer-load-unpacked.png" alt="install" width="600"/>

The last part is to run `browser-mpris2/native/install-chrome.py`,
which it is needed to be careful.
The user you use to run it is relevant (`sudo` is no good).
Without sudo I was seeing an error,
and with sudo there was no error but nothing was working.

Inside browser-mpris2/ run (replace the first parameter with the extension ID):

```shell
native/install-chrome.py REPLACE-THIS-WITH-EXTENSION-ID /usr/local/bin/chrome-mpris2
```

If no error is displayed, you're good to go.
If, like me, you saw `Required dependency python-gobject not found`,
installing some packages to your system is required.

My solution I found [here](https://stackoverflow.com/questions/26678457/how-do-i-install-python3-gi-within-virtualenv):

```shell
sudo apt install libcairo2-dev libgirepository1.0-dev gir1.2-gtk-3.0
pip install pygobject

# Run the install command again
native/install-chrome.py REPLACE-THIS-WITH-EXTENSION-ID /usr/local/bin/chrome-mpris2
```

This was enough for me.
Being able to import `gi` package (python) as my user was crucial,
so just make sure you can do so.
