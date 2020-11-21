# Interest Models
from django.contrib.auth.models import User
from django.db import models

# Create your models here.
class Interest(models.Model):
  # Interest Model

  name = models.CharField(max_length=80, blank=True)
  completed = models.BooleanField(default=False, blank=True, null=True)

  # Admin
  def __str__(self):
    # Return InterestName
    return self.name