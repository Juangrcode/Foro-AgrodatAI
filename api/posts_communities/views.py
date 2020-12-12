# Django
from django.shortcuts import render
from django.http import JsonResponse

# Rest_Framework
from rest_framework import viewsets, status
from rest_framework import permissions
from rest_framework.decorators import api_view, action
from rest_framework.response import Response

from .serializers import PostCommunitySerializer, UserSerializer,CommentCommunitySerializer
from posts_communities.models import PostCommunity,CommentCommunity
from django.contrib.auth.models import User


# Create your views here.

# @api_view(['GET'])
# def api_root(request, format=None):
#     return Response({
#         'posts': reverse('post-list', request=request, format=format),
#     })

class PostCommunityViewSet(viewsets.ModelViewSet):
    queryset = PostCommunity.objects.all()
    serializer_class = PostCommunitySerializer
    
    # def prefrom_create(self, serializer):
    #     serializer.save(user=self.request.user.pk)
    
    # def prefrom_create(self, serializer):
    #     serializer.save(self, user=self.request.user)
    @action(detail=True, methods=['post'])
    def set_comment(self, request, pk=None):

        #get post object
        my_post = self.get_object()

        serializer = CommentCommunitySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(post=my_post)
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CommentCommunityViewSet(viewsets.ModelViewSet):
    queryset = CommentCommunity.objects.all()
    serializer_class = CommentCommunitySerializer