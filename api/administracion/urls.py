from rest_framework import routers
from administracion.views import EmpresaViewSet, ActividadViewSet

router = routers.DefaultRouter()
router.register('empresas', EmpresaViewSet)
router.register('actividades', ActividadViewSet)

urlpatterns = router.urls