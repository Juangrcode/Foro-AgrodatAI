# Django
from django.shortcuts import render
from django.http import JsonResponse

# Rest_Framework
from rest_framework import viewsets
from rest_framework import permissions
from rest_framework.decorators import api_view, action
from rest_framework.response import Response

from .serializers import CommonSerializer
from .models import Common

# Create your views here.

class CommonViewSet(viewsets.ModelViewSet):
    queryset = Common.objects.all()
    serializer_class = CommonSerializer
