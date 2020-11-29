# Django
from django.urls import path

from .views import MyInterestViewSet

from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('myinterests', MyInterestViewSet)