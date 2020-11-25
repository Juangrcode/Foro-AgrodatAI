# Django
from django.contrib import admin
from django.urls import path, include

# Routes
from activities.urls import router as router_activities
from interests.urls import router as router_interests
from new_communities.urls import router as router_new_communities
from administracion.urls import router as router_administracion

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router_activities.urls)),
    path('api/', include(router_interests.urls)),
    path('api/', include(router_new_communities.urls)),
    path('api/', include(router_administracion))
]

