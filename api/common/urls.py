# Django
from django.urls import path

from .views import CommonViewSet

from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('common', CommonViewSet)
