---
---

### Allow deleting comments
```html
<!-- app/views/comments/_comment.html.erb -->
<p>
  <%= link_to 'Destroy Comment', [comment.article, comment],
               method: :delete,
               data: { confirm: 'Are you sure?' } %>
</p>
```

```ruby
# app/controllers/comments_controller.rb
class CommentsController < ApplicationController
  # ...

  def destroy
    @article = Article.find(params[:article_id])
    @comment = @article.comments.find(params[:id])
    @comment.destroy
    redirect_to article_path(@article)
  end

  # ...
end
```
