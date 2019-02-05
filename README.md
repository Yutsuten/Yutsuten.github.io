# Yutsuten.github.io

## Running locally
- [Linux](#linux)
- [Docker](#docker)

### Linux
```shell
# Install jekyll and its dependencies
ruby --version  # Must be >2.1.0
gem install bundler
bundle install

# Assets (javascript, css)
sudo apt install nodejs yarn
cd assets/
yarn
npx webpack  # --watch
cd ../

# Build and run server
bundle exec jekyll serve
```

### Docker
```shell
docker-compose up -d
```
