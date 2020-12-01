# Django
from django.contrib.auth.models import User
from django.db import models

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    picture = models.ImageField(default='borde.png')

    def __str__(self):
        return self.user.username





# class Profile(models.Model):
#     id = models.AutoField(primary_key=True)
#     name = models.CharField('Nombre', max_length=100)
#     last_name = models.CharField('Apellido', max_length=100)

#     def __str__(self):
#         return '{0},{1}'.format(self.name, self.last_name)