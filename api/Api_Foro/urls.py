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
# from interests.urls import router as router_interests
# from myInterests.urls import router as router_myInterests
# from new_communities.urls import router as router_new_communities
# from users.urls import router as router_users
# from posts.urls import router as router_posts

# from users.views import UserViewSet
# from rest_framework.routers import DefaultRouter


# router = DefaultRouter()
# router.register(r'users', UserViewSet)

from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token


from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from rest_framework_jwt.views import refresh_jwt_token
from django.contrib import admin
from django.urls import include, path
from rest_framework.routers import DefaultRouter
from rest_framework_jwt.views import refresh_jwt_token

from shopping.views import ShoppingItemViewSet

router = DefaultRouter()
router.register('shopping', ShoppingItemViewSet)

urlpatterns = [
    path('auth/login/', obtain_jwt_token), #  remove this line
    # path('api-auth/', include('rest_framework.urls')),
    path('', include(router.urls)),
    path('auth/', include('rest_auth.urls')),
    path('auth/signup/', include('rest_auth.registration.urls')),
    path('auth/refresh-token/', refresh_jwt_token),

    path('admin/', admin.site.urls),
    # path('api/', include(router_interests.urls)),
    path('api/', include(router_activities.urls)),
    # path('api/', include(router_myInterests.urls)),
    # path('api/', include(router_new_communities.urls)),
    path('api/', include('users.urls')),
    path('api/', include('posts.urls')),
    path('api/', include('interests.urls')),
    path('api/', include('new_communities.urls')),
    # path('api/', include(router_posts.urls)),
    # path('api/', include(router.urls)),
    # path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
    # path('api/', include(('users.urls','api') )),

    # Validate Token
    # path('api_generate_token/', views.obtain_auth_token,name='api_generate_token' ),
    # path('login/', Login.as_view(), name='login'),
    # path('logout/', Logout.as_view()),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += [
    path('api-auth/', include('rest_framework.urls')),
]