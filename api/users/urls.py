# Django
from django.urls import path

from .views import ProfileViewSet

from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('profile', ProfileViewSet)


# from django.urls import path
# # from users.views import ProfileList

# from users.views import ProfileViewSet

# # urlpatterns = [
# #   path('profile/', ProfileList.as_view(), name='profile_list'),
# # ]

# urlpatterns = [
#   # path('', UserViewSet),
#   path('profile/', ProfileViewSet)
# ]
