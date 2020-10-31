# yutsuten.github.io

## Run manually

Install jekyll and its dependencies:

```shell
ruby --version  # Must be >2.1.0
gem install bundler
bundle install
```

Then build and run server:

```shell
bundle exec jekyll serve
```

## Run with docker

Run `make` to start the server,
and `docker stop yutsuten` to stop it.

```shell
make
docker stop yutsuten
```
