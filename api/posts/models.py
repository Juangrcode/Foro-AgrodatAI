"""Posts models."""

# Django
from django.db import models
from django.contrib.auth.models import User


class Post(models.Model):
    """Post model."""

    user = models.ForeignKey(User,on_delete=models.CASCADE)
    profile = models.ForeignKey('users.Profile', on_delete=models.CASCADE)

    title = models.CharField(max_length=255, blank=True, null=True)
    photo = models.ImageField(upload_to='posts/photos', blank=True, null=True)
    content = models.TextField(null=True, blank=True)

    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ('-created',)

    def __str__(self):
        """Return title and username."""
        return '{} by @{}'.format(self.title, self.user.username)


# # Django
# from django.db import models

# # Utilities
# from django.utils import timezone

# class Post(models.Model):
#     owner = models.ForeignKey('auth.User', related_name='posts', on_delete=models.CASCADE, null=True, blank=True)
#     timestamp = models.DateTimeField(default=timezone.now)
#     content = models.TextField(null=True, blank=True)

#     class Meta:
#         ordering = ['-timestamp']
        
#     # def __str__(self):
#     #   return self.owner
