
from django.urls import path, include
from rest_framework.urlpatterns import format_suffix_patterns

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from django.conf import settings
from django.conf.urls.static import static

from posts.views import PostViewSet
from rest_framework import renderers

# post_list = PostViewSet.as_view({
#     'get': 'list',
#     'post': 'create'
# })
# post_detail = PostViewSet.as_view({
#     'get': 'retrieve',
#     'put': 'update',
#     'patch': 'partial_update',
#     'delete': 'destroy'
# })




router = DefaultRouter()
router.register(r'posts', PostViewSet)


urlpatterns = [
    path('', include(router.urls)),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


urlpatterns += [
    path('api-auth/', include('rest_framework.urls')),
]