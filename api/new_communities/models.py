# NewCommunities Models
# Django
from django.contrib.auth.models import User
from django.db import models
# Models
from users.models import Profile
from activities.models import Activity




class NewCommunity(models.Model):
    # NewCommunities Model

    name = models.CharField(max_length=225, blank=True)
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE)
    activity = models.ForeignKey(Activity,  related_name='activities',on_delete=models.CASCADE)


    picture = models.ImageField(upload_to='new_communities/pictures',
                                default='borde.png', blank=True, null=True)
    description = models.TextField()

    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ('-created',)

    # Admin
    def __str__(self):
        # Return NewCommunitiesName
        return self.name

class JoinUser(models.Model):
    # JoinUser Model
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE)
    community = models.ForeignKey(NewCommunity, on_delete=models.CASCADE)
    text = models.CharField(max_length=300, blank=True, null=True)

    def __str__(self):
        return self.text
