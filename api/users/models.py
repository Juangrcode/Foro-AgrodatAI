# Django
from django.db import models

# Models
from interests.models import Interest
from new_communities.models import NewCommunity


class Profile(models.Model):
    owner = models.ForeignKey('auth.User', related_name='profiles', on_delete=models.CASCADE)
    picture = models.ImageField(default='borde.png')
    interests = models.ManyToManyField(Interest, related_name='profiles')
    communities = models.ManyToManyField(NewCommunity, related_name='profiles')


    class Meta:
        ordering = ['owner']

    def __str__(self):
        return self.owner