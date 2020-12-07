# Interest Models
# Django
from django.db import models

class Interest(models.Model):
    # Interest Model
    name = models.CharField(max_length=100, blank=True)
    completed = models.BooleanField(default=False, blank=True, null=True)

    # Admin
    def __str__(self):
        # Return InterestName
        return self.name
