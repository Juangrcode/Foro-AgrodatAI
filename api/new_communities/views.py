# Django
from django.shortcuts import render
from django.http import JsonResponse

# Rest_Framework
from rest_framework import viewsets
from rest_framework import permissions
from rest_framework.decorators import api_view, action
from rest_framework.response import Response

from .serializers import NewCommunitySerializer
from .models import NewCommunity
from .permissions import IsOwnerOrReadOnly

# Create your views here.

@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        'new_communities': reverse('new_community-list', request=request, format=format),
    })

class NewCommunityViewSet(viewsets.ModelViewSet):
    queryset = NewCommunity.objects.all()
    serializer_class = NewCommunitySerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]