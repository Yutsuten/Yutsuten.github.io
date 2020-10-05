---
doc: https://docs.djangoproject.com/en/2.1/topics/db/examples/one_to_one/
---

## Models

```python
class Place(models.Model):
    name = models.CharField(max_length=50)
    address = models.CharField(max_length=80)

class Restaurant(models.Model):
    place = models.OneToOneField(
        Place,
        on_delete=models.CASCADE,
    )
    serves_hot_dogs = models.BooleanField(default=False)
    serves_pizza = models.BooleanField(default=False)
```

## Accessing the associated model

```python
place = Place(name='Demon Dogs', address='944 W. Fullerton')
restaurant = Restaurant(place=place, serves_hot_dogs=True, serves_pizza=False)

place.restaurant
restaurant.place

from django.core.exceptions import ObjectDoesNotExist
try:
    place.restaurant
except ObjectDoesNotExist:
    print('There is no restaurant here.')
```
