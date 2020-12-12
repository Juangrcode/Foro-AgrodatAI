"""Posts models."""

# Django
from django.db import models
from django.contrib.auth.models import User
from users.models import Profile
from new_communities.models import NewCommunity
from activities.models import Activity

class Post(models.Model):
    """Post model."""

    user = models.ForeignKey(User,on_delete=models.CASCADE)
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE)
    community = models.ForeignKey(NewCommunity, on_delete=models.CASCADE, blank=True, null=True)
    activity = models.ForeignKey(Activity, on_delete=models.CASCADE , blank=True, null=True)

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



class Comment(models.Model):
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    text = models.CharField(max_length=300)

    def __str__(self):
        return self.text


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
