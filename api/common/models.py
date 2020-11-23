# Common Models
from django.contrib.auth.models import User
from django.db import models

# Create your models here.
class Common(models.Model):
  # Common Model

  name = models.CharField(max_length=225, blank=True)
  activity = models.CharField(max_length=100, blank=True)

  # Admin
  def __str__(self):
    # Return InterestName
    return self.name
