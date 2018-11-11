---
---

#### Setting up git, ssh and wget
```
sudo apt update
sudo apt install connect-proxy openssh-client build-essential git vim-gtk wget tar
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa
echo export DISPLAY=127.0.0.1:0 >> ~/.bashrc
git clone git@github.com:seebi/dircolors-solarized.git
git clone git@github.com:Yutsuten/bash-config.git
git clone git@github.com:Yutsuten/vim-config.git .vim
cd .vim && git submodule update --init
ln -s ~/dircolors-solarized/dircolors.ansi-dark ~/.dircolors
```
