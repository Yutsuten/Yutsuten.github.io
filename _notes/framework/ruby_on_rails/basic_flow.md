---
---

### Empty application
```bash
# Generate basic files for the Ruby on Rails app
rails new appname

# Install necessary gems (written in Gemfile)
bundle install

# Start Rails development server
rails server
```

### Generating custom pages
```bash
rails generate controller Pages
rails generate model Message
```

```ruby
# config/routes.rb
Rails.application.routes.draw do
  get 'welcome' => 'pages#home'
  post 'messages' => 'messages#create'
  get 'message/new' => 'pages#new_message'
end

# app/controllers/pages_controller.rb
class PagesController < ApplicationController
  # Add a new method home
  def home
    @messages = Message.all
  end

  def new_message
    @message = Message.new
  end

  def create
    @message = Message.new(message_params)
    if @message.save
      redirect_to '/welcome'
    else
      render 'new'
    end
  end

  private
  def message_params
    params.require(:message).permit(:content)
  end
end

# app/models/message.rb

# db/migrate/1234567890_create_messages.rb
```

```html
<!-- app/views/pages/home.html.erb -->
<!-- erb = embedded Ruby -->
<div class="main">
  <div class="container">
    <h1>Hello my name is __</h1>
    <p>I make Rails apps.</p>
  </div>
</div>

<% @messages.each do |message| %>
<div class="message">
  <p class="content"><%= message.content %></p>
  <p class="time"><%= message.created_at %></p>
</div>
<% end %>

<%= link_to 'New Message', "messages/new" %>

<!-- CSS at app/assets/stylesheets/pages.css.scss -->
```

```html
<!-- app/views/messages/new.html.erb -->
<%= form_for(@message) do |f| %>
  <div class="field">
    <%= f.label :message %><br>
    <%= f.text_area :content %>
  </div>
  <div class="actions">
    <%= f.submit "Create" %>
  </div>
<% end %>
```

### Migrations
```bash
rake db:migrate
rake db:seed  # seeds the database with sample data from db/seeds.rb
```
