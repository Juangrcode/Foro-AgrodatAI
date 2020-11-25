# NewCommunities Models
from django.contrib.auth.models import User
from django.db import models

from activities.models import Activity

# Create your models here.


class NewCommunity(models.Model):
    # NewCommunities Model

    name = models.CharField(max_length=225, blank=True)
    activities = models.ManyToManyField(Activity)

    picture = models.ImageField(upload_to='new_communities/pictures',
                                blank=True,
                                null=True)
    description = models.CharField(max_length=1000, blank=True)

    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    # Admin
    def __str__(self):
        # Return NewCommunitiesName
        return self.name
