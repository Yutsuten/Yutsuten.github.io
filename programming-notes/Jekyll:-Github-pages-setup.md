---
layout: empty
---

{% raw %}

# Jekyll: Github-pages setup

## Install bundler
#### Console
```
gem install bundler
```

## Edit/add Gemfile
```
source 'https://rubygems.org'
gem 'github-pages', group: :jekyll_plugins
```

## Install gems
#### Console
```
bundle install
```

## Build or run
#### Console
```
bundle exec jekyll build --watch
bundle exec jekyll serve
```

{% endraw %}
