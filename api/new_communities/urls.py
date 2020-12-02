
from django.urls import path, include
from rest_framework.urlpatterns import format_suffix_patterns

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from django.conf import settings
from django.conf.urls.static import static

from new_communities.views import NewCommunityViewSet, api_root
from rest_framework import renderers

new_community_list = NewCommunityViewSet.as_view({
    'get': 'list',
    'post': 'create'
})
new_community_detail = NewCommunityViewSet.as_view({
    'get': 'retrieve',
    'put': 'update',
    'patch': 'partial_update',
    'delete': 'destroy'
})




router = DefaultRouter()
router.register(r'new-communities', NewCommunityViewSet)


urlpatterns = [
    path('', include(router.urls)),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


urlpatterns += [
    path('api-auth/', include('rest_framework.urls')),
]