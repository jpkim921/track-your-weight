from django.db import models

# Create your models here.
class Weight(models.Model):
    weight = models.DecimalField(max_digits=6, decimal_places=2)
    date = models.DateField(auto_now_add=True)
    # time = models.TimeField(auto_now_add=True)

    def __str__(self):
        return str(self.date)
