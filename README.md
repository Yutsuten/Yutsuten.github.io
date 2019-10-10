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
docker run -d --name notes -p 4000:4000 -w /code -v $(pwd):/code jekyll/jekyll jekyll serve --host 0.0.0.0

# Under proxy use this
docker run -d --name notes -p 4000:4000 -w /code -v $(pwd):/code jekyll/jekyll /bin/bash -c "bundle install && jekyll serve --host 0.0.0.0"
```
