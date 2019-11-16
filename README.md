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

# Build and run server
bundle exec jekyll serve
```

### Docker
```shell
# Serve
make
make serve

# Stop / remove
make stop
make down
```
