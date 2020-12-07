# Anctivity Models
from django.contrib.auth.models import User
from django.db import models

from interests.models import Interest

# Create your models here.

#  activity_id and interest_id

class Activity(models.Model):
    # Activity Model
    name = models.CharField(max_length=225, blank=True)
    interests = models.ManyToManyField(Interest, blank=True, null=True)

    # Admin
    def __str__(self):
        # Return ActivityName
        return self.name