# Django
from django.shortcuts import render
from django.http import JsonResponse

# Rest_Framework
from rest_framework import viewsets
from rest_framework import permissions
from rest_framework.decorators import api_view, action
from rest_framework.response import Response

from .serializers import PostSerializer
from .models import Post

# Create your views here.

@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        'posts': reverse('post-list', request=request, format=format),
    })

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    
    # def post(request):
    #   current_user = get_object_or_404(User , pk=request.user.pk)
    #   if request.method == 'POST':
          