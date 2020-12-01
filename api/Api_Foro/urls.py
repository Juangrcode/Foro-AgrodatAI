# Django
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

# Auth Token
from rest_framework.authtoken import views
# from users.views import Login,Logout

# Routes
from activities.urls import router as router_activities
from interests.urls import router as router_interests
from myInterests.urls import router as router_myInterests
from new_communities.urls import router as router_new_communities
from users.urls import router as router_users
from posts.urls import router as router_posts


urlpatterns = [
    path('admin/', admin.site.urls),

    path('api/', include(router_activities.urls)),
    path('api/', include(router_interests.urls)),
    path('api/', include(router_myInterests.urls)),
    path('api/', include(router_new_communities.urls)),
    path('api/', include(router_users.urls)),
    path('api/', include(router_posts.urls)),
    # path('api/', include(('users.urls','api') )),

    # Validate Token
    # path('api_generate_token/', views.obtain_auth_token,name='api_generate_token' ),
    # path('login/', Login.as_view(), name='login'),
    # path('logout/', Logout.as_view()),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

