from django.db import models

# Create your models here.


class WeightPoint(models.Model):
    weight = models.DecimalField(max_digits=6, decimal_places=2)
    date = models.DateField(auto_now_add=True)
