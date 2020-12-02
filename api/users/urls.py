
from django.urls import path, include
from rest_framework.urlpatterns import format_suffix_patterns

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from users import views
from django.conf import settings
from django.conf.urls.static import static

from users.views import ProfileViewSet, UserViewSet, api_root
from rest_framework import renderers

snippet_list = ProfileViewSet.as_view({
    'get': 'list',
    'post': 'create'
})
snippet_detail = ProfileViewSet.as_view({
    'get': 'retrieve',
    'put': 'update',
    'patch': 'partial_update',
    'delete': 'destroy'
})
user_list = UserViewSet.as_view({
    'get': 'list'
})
user_detail = UserViewSet.as_view({
    'get': 'retrieve'
})



router = DefaultRouter()
router.register(r'profiles', views.ProfileViewSet)
router.register(r'users', views.UserViewSet)


urlpatterns = [
    path('', include(router.urls)),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


urlpatterns += [
    path('api-auth/', include('rest_framework.urls')),
]