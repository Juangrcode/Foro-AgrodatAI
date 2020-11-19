# Django 
from django.shortcuts import render
from django.http import JsonResponse

# Rest_Framework
from rest_framework import viewsets
from rest_framework import permissions
from rest_framework.decorators import api_view, action
from rest_framework.response import Response

from .serializers import InterestSerializer
from .models import Interest

# Create your views here.

class InterestViewSet(viewsets.ModelViewSet):
    queryset = Interest.objects.all()
    serializer_class = InterestSerializer
    # permission_classes = [permissions.IsAuthenticatedOrReadOnly, 
    #                       IsOwnerOrReadOnly]
    
    # @action(detail=True, renderer_classes=[renderers.StaticHTMLRenderer])
    # def highlight(self, request, *args, **kwargs):
    #     interest = self.get_object()
    #     return Response(interest.highlighted)

    # def perform_create(self, serializer):
    #     serializer.save(owner=self.request.name)



# @api_view(['GET'])
# def apiOverview(request):
#     api_urls ={
#       'List':'/interest-list/',
#       'Detail View':'/interest-detail/<str:pk>/',
#       'Create':'/interest-create/',
#       'Update':'/interest-update/<str:pk>/',
#       'Delete':'/interest-delete/<str:pk>/',
#     }
#     return Response(api_urls)

# @api_view(['GET'])
# def getInterests(request):
#     interests = Interest.objects.all()
#     serializer = InterestSerializer(interests, many=True)
#     return Response(serializer.data)


# @api_view(['GET'])
# def getInterest(request, pk):
#     interests = Interest.objects.get(id=pk)
#     serializer = InterestSerializer(interests, many=False)
#     return Response(serializer.data)


# @api_view(['POST'])
# def createInterest(request):
#     serializer = InterestSerializer(data=request.data)

#     if serializer.is_valid():
#         serializer.save()

#     return Response(serializer.data)