# Django: Common imports

## Utils
`django.utils.timezone`

## HTTP responses
`django.http.HttpResponseRedirect`

`django.shortcuts.render`

## Views
`django.views.generic.TemplateView` [ex.]({{ site.baseurl }}{% link programming-notes/Django:-New-app-setup.md %}#appnameviewspy)

`django.views.generic.ListView` [ex.]({{ site.baseurl }}{% link programming-notes/Django:-App-views-(from-model).md %}#appnameviewpy)

`django.views.generic.DetailView` [ex.]({{ site.baseurl }}{% link programming-notes/Django:-App-views-(from-model).md %}#appnameviewpy)

`django.views.generic.edit.CreateView` [ex.]({{ site.baseurl }}{% link programming-notes/Django:-App-views-(from-model).md %}#appnameviewpy)

`django.views.generic.edit.UpdateView` [ex.]({{ site.baseurl }}{% link programming-notes/Django:-App-views-(from-model).md %}#appnameviewpy)

`django.views.generic.edit.DeleteView` [ex.]({{ site.baseurl }}{% link programming-notes/Django:-App-views-(from-model).md %}#appnameviewpy)

## URLs
`django.urls.reverse` [ex.]({{ site.baseurl }}{% link programming-notes/Django:-App-views-(from-model).md %}#appnamemodelspy)

`django.urls.reverse_lazy` [ex.]({{ site.baseurl }}{% link programming-notes/Django:-App-views-(from-model).md %}#appnameviewpy)

## App scripts
`.models.ModelName` [ex.]({{ site.baseurl }}{% link programming-notes/Django:-App-views-(from-model).md %}#appnameviewpy)

`.views.ViewName` [ex.]({{ site.baseurl }}{% link programming-notes/Django:-New-app-setup.md %}#appnameurlspy)

`.forms.FormName`

## Authentication
`django.contrib.auth.authenticate`

`django.contrib.auth.login`

`django.contrib.auth.logout`

`django.contrib.auth.mixins.LoginRequiredMixin` ex.
