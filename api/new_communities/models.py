# NewCommunities Models
# Django
from django.contrib.auth.models import User
from django.db import models
# Models
from interests.models import Interest



class NewCommunity(models.Model):
    # NewCommunities Model

    name = models.CharField(max_length=225, blank=True)
    interests = models.ManyToManyField(Interest, null=True, blank=True)

    picture = models.ImageField(upload_to='new_communities/pictures',
                                default='borde.png')
    description = models.TextField()

    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    # Admin
    def __str__(self):
        # Return NewCommunitiesName
        return self.name
