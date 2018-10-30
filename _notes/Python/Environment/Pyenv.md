[pyenv](https://github.com/pyenv/pyenv) lets you easily switch between multiple versions of Python.

### Installing
[Guide](https://github.com/pyenv/pyenv-installer)

#### Terminal
```
curl -L https://github.com/pyenv/pyenv-installer/raw/master/bin/pyenv-installer | bash
```

#### ~/.bashrc
This information appears at the end of the previous command
```
export PATH="/home/mateus/.pyenv/bin:$PATH"
eval "$(pyenv init -)"
eval "$(pyenv virtualenv-init -)"
```

### Usage
#### Terminal
```
sudo apt install zlib1g-dev libssl-dev libbz2-dev libreadline-dev libsqlite3-dev
pyenv install 3.6.4

pyenv versions
pyenv local 3.6.4
pyenv global 3.6.4
```

