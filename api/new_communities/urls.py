# Django
from django.urls import path

from .views import NewCommunityViewSet

from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('new_communities', NewCommunityViewSet)
