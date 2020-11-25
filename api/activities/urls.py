# Django
from django.urls import path

from .views import ActivityViewSet

from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('activities', ActivityViewSet)
