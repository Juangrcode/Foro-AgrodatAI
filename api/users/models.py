"""Users models."""

# Django
from django.contrib.auth.models import User
from django.db import models
from django.dispatch import receiver
from allauth.account.signals import user_signed_up


class Profile(models.Model):
    """Profile model.
    Proxy model that extends the base data with other
    information.
    """

    user = models.OneToOneField(User, on_delete=models.CASCADE)

    picture = models.ImageField(
        upload_to='users/pictures',
        default='borde.png'
    )

    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        """Return username."""
        return self.user.username

# @receiver(user_signed_up)
# def create_user_profile(request, user, **kwargs):
#     """ Create user profile when sign up with Facebook """

#     profile = Profile.objects.create(user=user)
#     profile.save()

# # Django
# from django.db import models
# from django.contrib.auth.models import User

# # Models
# from interests.models import Interest
# from new_communities.models import NewCommunity
# from posts.models import Post


# class Profile(models.Model):
#     owner = models.OneToOneField(User, related_name='profiles', on_delete=models.CASCADE)
#     picture = models.ImageField(default='borde.png')
#     interests = models.ForeignKey(Interest, related_name='profiles', on_delete=models.CASCADE)
#     communities = models.ForeignKey(NewCommunity, related_name='profiles', on_delete=models.CASCADE)
#     posts = models.ForeignKey(Post, related_name='profiles', on_delete=models.CASCADE)

#     class Meta:
#         ordering = ['owner']
