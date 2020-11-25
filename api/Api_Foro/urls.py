# Django
from django.contrib import admin
from django.urls import path,include
from interests.urls import router
from common.urls import router

urlpatterns = [
    path('', include('administracion.urls')),
    path('administracion/', include('administracion.urls')),
    path('admin/', admin.site.urls),
    path('api/', include(router.urls))
]