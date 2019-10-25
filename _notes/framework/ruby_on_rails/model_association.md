---
---

Creating `comments` for `articles`.

```bash
rails generate model Comment commenter:string body:text article:references
rails db:migrate
rails generate controller Comments
```

### Tell rails that articles has many comments
```ruby
# app/models/article.rb
class Article < ApplicationRecord
  has_many :comments
  validates :title, presence: true, length: { minimum: 5 }
end

# config/routes.rb
resources :articles do
  resources :comments
end
```
