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
from .serializers import ProfileSerializer
from .serializers import UserSerializer
# Models
from .models import Profile
# Permissions
# from users.permissions import IsOwnerOrReadOnly


# @api_view(['GET'])
# def api_root(request, format=None):
#     return Response({
#         'users': reverse('user-list', request=request, format=format),
#         'profiles': reverse('profile-list', request=request, format=format)
#     })

class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    # permission_classes = [permissions.IsAuthenticatedOrReadOnly,
    #                       IsOwnerOrReadOnly]


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer



# # from django.shortcuts import render
# # from rest_framework import generics
# # from users.models import Profile
# # from users.serializers import ProfileSerializer

# # # class ProfileList(generic.ListView)
# # from django.urls import reverse_lazy
# # from django.utils.decorators import method_decorator
# # from django.views.decorators.cache import never_cache
# # from django.views.decorators.csrf import csrf_protect
# # from django.views.generic.edit import FormView
# # from django.contrib.auth import login, logout, authenticate
# # from django.http import HttpResponse
# # from django.contrib.auth.forms import AuthenticationForm
# # from rest_framework.authtoken.models import Token
# # from rest_framework.permissions import IsAuthenticated
# # from rest_framework.authentication import TokenAuthentication
# # from rest_framework import status
# # from rest_framework.response import Response
# # from rest_framework.views import APIView


# # class ProfileList(generics.ListCreateAPIView):
# #     queryset = Profile.objects.all()
# #     serializer_class = ProfileSerializer
# #     permission_classes = (IsAuthenticated,)
# #     authentication_class = (TokenAuthentication,)



# # class Login(FormView):
# #     template_name = "login.html"
# #     form_class = AuthenticationForm
# #     success_url = reverse_lazy('api:profile_list')

# #     @method_decorator(csrf_protect)
# #     @method_decorator(never_cache)
# #     def dispatch(self,request,*args,**kwargs):
# #         if request.user.is_authenticated:
# #             return HttpResponse(self.get_success_url())
# #         else:
# #             return super(Login, self).dispatch(request,*args,*kwargs)

# #     def form_valid(self, form):
# #         user = authenticate(username = form.cleaned_data['username'], password = form.cleaned_data['password'])
# #         token,_ = Token.objects.get_or_create(user=user)
# #         if token:
# #             login(self.request, form.get_user())
# #             return super(Login,self).form_valid(form)


# # class Logout(APIView):
# #     def get(self,request,format=None):
# #         request.user.auth_token.delete()
# #         logout(request)
# #         return Response(status = status.HTTP_200_OK)