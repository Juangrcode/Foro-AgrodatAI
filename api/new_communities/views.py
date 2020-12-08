# Django
from django.shortcuts import render
from django.http import JsonResponse
from django.http import HttpResponse

# Rest_Framework
from rest_framework import viewsets, status
from rest_framework import permissions
from rest_framework.decorators import api_view, action
from rest_framework.response import Response

from .serializers import NewCommunitySerializer, JoinUserSerializer
from .models import NewCommunity, JoinUser
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
    @action(detail=True, methods=['post'])
    def set_comment(self, request, pk=None):

        #get post object
        my_community = self.get_object()  

        serializer = JoinUserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(post=my_community)
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class JoinUserViewSet(viewsets.ModelViewSet):
    queryset = JoinUser.objects.all()
    serializer_class = JoinUserSerializer