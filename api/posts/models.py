# Django
from django.db import models

# Utilities
from django.utils import timezone

class Post(models.Model):
    owner = models.ForeignKey('auth.User', related_name='posts', on_delete=models.CASCADE, null=True, blank=True)
    timestamp = models.DateTimeField(default=timezone.now)
    content = models.TextField(null=True, blank=True)

    class Meta:
        ordering = ['-timestamp']
        
    # def __str__(self):
    #   return self.owner
