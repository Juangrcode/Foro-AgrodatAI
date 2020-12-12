# Anctivity Models
from django.contrib.auth.models import User
from django.db import models
# from posts.models import Post
# from posts_communities.models import PostCommunity


class Activity(models.Model):
    # Activity Model
    name = models.CharField(max_length=225, blank=True)
    # activities_posts = models.ForeignKey(Post, on_delete=models.CASCADE, blank=True, null=True)
    # activities_community = models.ForeignKey(PostCommunity,on_delete=models.CASCADE, blank=True, null=True)

    # Admin
    def __str__(self):
        # Return ActivityName
        return self.name