
from django.urls import path, include
from rest_framework.urlpatterns import format_suffix_patterns

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from django.conf import settings
from django.conf.urls.static import static

from posts.views import PostViewSet, CommentViewSet
from rest_framework import renderers
from . import views
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
# post_list = views.PostViewSet.as_view({
#     'get': 'list',
#     'post': 'create'
# })

# post_detail = views.PostViewSet.as_view({
#     'get': 'retrieve',
#     'put': 'update',
#     'patch': 'partial_update',
#     'delete': 'destroy'
# })

# comment_creation = views.PostViewSet.as_view({
#     'post': 'set_comment'
# })




router = DefaultRouter()
router.register(r'posts', PostViewSet)
router.register(r'comments',CommentViewSet )


urlpatterns = [
    path('', include(router.urls)),
    # path(r'posts/', post_list, name='post_list'),
    # path(r'post/<pk>/', post_detail, name='post_detail'),
    # path(r'post/<pk>/comment/', comment_creation, name='comment_creation'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


urlpatterns += [
    path('api-auth/', include('rest_framework.urls')),
]