# Django
from django.contrib import admin

# Register your models here.

from .models import NewCommunity, JoinUser

admin.site.register(NewCommunity)
admin.site.register(JoinUser)
