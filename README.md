# Yutsuten.github.io

### Running locally

#### Install ruby, bundler and local packages
```shell
ruby --version  # Must be >2.1.0
gem install bundler
bundle install
```

#### Compiling JS
```shell
# With docker
docker-compose up -d assets

# Without docker
sudo apt install nodejs yarn
yarn
npx webpack  # --watch
```

#### Run
```shell
bundle exec jekyll serve
```
