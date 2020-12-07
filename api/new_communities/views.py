# Django
from django.shortcuts import render
from django.http import JsonResponse
from django.http import HttpResponse

# Rest_Framework
from rest_framework import viewsets
from rest_framework import permissions
from rest_framework.decorators import api_view, action
from rest_framework.response import Response

from .serializers import NewCommunitySerializer
from .models import NewCommunity
# from new_communities.permissions import IsOwnerOrReadOnly

# Create your views here.

# @api_view(['GET'])
# def api_root(request, format=None):
#     return Response({
#         'new_communities': reverse('community-list', request=request, format=format),
#     })

class NewCommunityViewSet(viewsets.ModelViewSet):
    queryset = NewCommunity.objects.all()
    serializer_class = NewCommunitySerializer
    # permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    # def post(self, request, *args, **kwargs):
    #     picture = request.data['picture']
    #     name = request.data['name']
    #     description = request.data['description']
    #     NewCommunity.objects.create(name=name, picture=picture, description=description)
    #     return HttpResponse({'message': 'Book created'}, status=200)