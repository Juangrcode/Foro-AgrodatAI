
from django.urls import path, include
from rest_framework.urlpatterns import format_suffix_patterns

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from django.conf import settings
from django.conf.urls.static import static

from posts_communities.views import PostCommunityViewSet, CommentCommunityViewSet
from rest_framework import renderers
from . import views




router = DefaultRouter()
router.register(r'posts-communities', PostCommunityViewSet)
router.register(r'comments-communities',CommentCommunityViewSet )


urlpatterns = [
    path('', include(router.urls)),
    # path(r'posts/', post_list, name='post_list'),
    # path(r'post/<pk>/', post_detail, name='post_detail'),
    # path(r'post/<pk>/comment/', comment_creation, name='comment_creation'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


urlpatterns += [
    path('api-auth/', include('rest_framework.urls')),
]