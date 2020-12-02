# Django
from django.contrib.auth.models import User
from django.shortcuts import render
from django.http import JsonResponse

# Rest_Framework
from rest_framework import viewsets
from rest_framework import permissions
from rest_framework.decorators import api_view, action
from rest_framework.response import Response
from rest_framework import permissions
# Serializers
from .serializers import PostSerializer
# Models
from .models import Post
# Permissions
from posts.permissions import IsOwnerOrReadOnly


@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        'posts': reverse('post-list', request=request, format=format),
    })

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,
                          IsOwnerOrReadOnly]




# # Django
# from django.shortcuts import render
# from django.http import JsonResponse

# # Rest_Framework
# from rest_framework import viewsets
# from rest_framework import permissions
# from rest_framework.decorators import api_view, action
# from rest_framework.response import Response

# from .serializers import PostSerializer
# from .models import Post

# # Create your views here.


# class PostViewSet(viewsets.ModelViewSet):
#     queryset = Post.objects.all()
#     serializer_class = PostSerializer