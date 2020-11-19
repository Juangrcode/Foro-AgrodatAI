# Django
from django.urls import path

from .views import InterestViewSet

from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('interests', InterestViewSet)


	# path('', views.apiOverview, name="api-overview"),
	# path('interests/', InterestViewSet),
	# path('interests/<str:pk>/', views.getInterest, name="interest-detail"),
	# path('interests/', views.createInterest, name="interests-create"),

	# path('task-update/<str:pk>/', views.taskUpdate, name="task-update"),
	# path('task-delete/<str:pk>/', views.taskDelete, name="task-delete"),
# ]
