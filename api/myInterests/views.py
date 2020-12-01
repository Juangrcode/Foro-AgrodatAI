# Django
from django.shortcuts import render
from django.http import JsonResponse

# Rest_Framework
from rest_framework import viewsets
from rest_framework import permissions
from rest_framework.decorators import api_view, action
from rest_framework.response import Response

from .serializers import MyInterestSerializer
from .models import MyInterest

# Create your views here.


class MyInterestViewSet(viewsets.ModelViewSet):
    queryset = MyInterest.objects.all()
    serializer_class = MyInterestSerializer