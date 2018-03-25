---
layout: empty
---

# Django: Common imports

## Utils
`django.utils.timezone`

## HTTP responses
`django.http.HttpResponseRedirect`

`django.shortcuts.render`

## Views
`django.views.generic.TemplateView` [ex.]({% link notes/Django/New-app-setup.md %}#appnameviewspy)

`django.views.generic.ListView` [ex.]({% link notes/Django/App-views-(from-model).md %}#appnameviewpy)

`django.views.generic.DetailView` [ex.]({% link notes/Django/App-views-(from-model).md %}#appnameviewpy)

`django.views.generic.edit.CreateView` [ex.]({% link notes/Django/App-views-(from-model).md %}#appnameviewpy)

`django.views.generic.edit.UpdateView` [ex.]({% link notes/Django/App-views-(from-model).md %}#appnameviewpy)

`django.views.generic.edit.DeleteView` [ex.]({% link notes/Django/App-views-(from-model).md %}#appnameviewpy)

## URLs
`django.urls.reverse` [ex.]({% link notes/Django/App-views-(from-model).md %}#appnamemodelspy)

`django.urls.reverse_lazy` [ex.]({% link notes/Django/App-views-(from-model).md %}#appnameviewpy)

## App scripts
`.models.ModelName` [ex.]({% link notes/Django/App-views-(from-model).md %}#appnameviewpy)

`.views.ViewName` [ex.]({% link notes/Django/New-app-setup.md %}#appnameurlspy)

`.forms.FormName`

## Authentication
`django.contrib.auth.authenticate`

`django.contrib.auth.login`

`django.contrib.auth.logout`

`django.contrib.auth.mixins.LoginRequiredMixin` ex.
